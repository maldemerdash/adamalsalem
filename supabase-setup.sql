create extension if not exists pgcrypto;

create table if not exists public.appointment_slots (
  id text primary key,
  day text not null,
  date date not null,
  time text not null,
  end_time text,
  title text,
  package_end_date date,
  source text not null default 'auto',
  suspended boolean not null default false,
  slot_type text not null default 'internal',
  schedule_version text,
  created_at timestamptz not null default now()
);

alter table public.appointment_slots
  add column if not exists end_time text,
  add column if not exists title text,
  add column if not exists package_end_date date,
  add column if not exists suspended boolean not null default false,
  add column if not exists slot_type text not null default 'internal',
  add column if not exists schedule_version text;

create table if not exists public.appointment_bookings (
  id uuid primary key default gen_random_uuid(),
  slot_id text not null references public.appointment_slots(id) on delete restrict,
  booking_number text unique,
  name text,
  first_name text,
  father_name text,
  last_name text,
  phone text not null,
  city text not null default 'مدينة حائل',
  booking_type text not null default 'internal',
  region text,
  visit_city text,
  visit_distance_km integer,
  visit_price numeric(10, 2),
  price_accepted_at timestamptz,
  home_session boolean not null default false,
  booking_start_date date,
  booking_end_date date,
  appointment_title text,
  appointment_start_time text,
  appointment_end_time text,
  customer_lat numeric(10, 7),
  customer_lng numeric(10, 7),
  customer_location_url text,
  alternate_phone text,
  receipt_sent boolean not null default false,
  receipt_sent_at timestamptz,
  confirmed boolean not null default false,
  attended boolean not null default false,
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  confirmed_at timestamptz,
  attended_at timestamptz
);

alter table public.appointment_bookings
  add column if not exists booking_number text unique,
  add column if not exists first_name text,
  add column if not exists father_name text,
  add column if not exists last_name text,
  add column if not exists booking_type text not null default 'internal',
  add column if not exists region text,
  add column if not exists visit_city text,
  add column if not exists visit_distance_km integer,
  add column if not exists visit_price numeric(10, 2),
  add column if not exists price_accepted_at timestamptz,
  add column if not exists home_session boolean not null default false,
  add column if not exists booking_start_date date,
  add column if not exists booking_end_date date,
  add column if not exists appointment_title text,
  add column if not exists appointment_start_time text,
  add column if not exists appointment_end_time text,
  add column if not exists customer_lat numeric(10, 7),
  add column if not exists customer_lng numeric(10, 7),
  add column if not exists customer_location_url text,
  add column if not exists alternate_phone text,
  add column if not exists receipt_sent boolean not null default false,
  add column if not exists receipt_sent_at timestamptz;

alter table public.appointment_bookings alter column name drop not null;

update public.appointment_bookings b
set booking_start_date = coalesce(b.booking_start_date, s.date),
    booking_end_date = coalesce(b.booking_end_date, s.date),
    appointment_title = coalesce(b.appointment_title, s.title),
    appointment_start_time = coalesce(b.appointment_start_time, s.time),
    appointment_end_time = coalesce(b.appointment_end_time, s.end_time)
from public.appointment_slots s
where s.id = b.slot_id;

create table if not exists public.appointment_deleted_slots (
  slot_id text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.appointment_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.appointment_visit_cities (
  region text not null,
  city text not null,
  distance_km integer not null check (distance_km > 0),
  active boolean not null default true,
  primary key (region, city)
);

create table if not exists public.appointment_pricing (
  id boolean primary key default true check (id = true),
  general_price numeric(10, 2) not null default 100,
  home_visit_price numeric(10, 2) not null default 300,
  external_near_price numeric(10, 2) not null default 1500,
  external_far_price numeric(10, 2) not null default 3500,
  updated_at timestamptz not null default now()
);

insert into public.appointment_pricing (id)
values (true)
on conflict (id) do nothing;

create table if not exists public.appointment_visit_templates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  start_time time not null,
  end_time time not null,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (end_time > start_time)
);

insert into public.appointment_visit_templates (title, start_time, end_time, sort_order)
select *
from (
  values
    ('الزيارة الأولى', time '08:00', time '10:00', 1),
    ('الزيارة الثانية', time '10:30', time '12:30', 2),
    ('الزيارة الثالثة', time '16:00', time '18:00', 3)
) as defaults(title, start_time, end_time, sort_order)
where not exists (select 1 from public.appointment_visit_templates);

create or replace function public.clear_changed_visit_template_slots()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  delete from public.appointment_slots s
  where s.slot_type = 'home'
    and s.id like '%:' || old.id::text || ':%'
    and not exists (
      select 1 from public.appointment_bookings b where b.slot_id = s.id
    );
  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

drop trigger if exists clear_changed_visit_template_slots_trigger
on public.appointment_visit_templates;
create trigger clear_changed_visit_template_slots_trigger
after update or delete on public.appointment_visit_templates
for each row execute function public.clear_changed_visit_template_slots();

-- تنظيف أي زيارة منزلية قديمة بقيت بعد حذف قالبها قبل تثبيت هذا الإصدار.
delete from public.appointment_slots s
where s.slot_type = 'home'
  and s.schedule_version in ('weekly-v8', 'weekly-v9', 'weekly-v10', 'weekly-v11', 'weekly-v12')
  and not exists (
    select 1
    from public.appointment_visit_templates t
    where s.id like '%:' || t.id::text || ':%'
      and t.active = true
  )
  and not exists (
    select 1 from public.appointment_bookings b where b.slot_id = s.id
  );

-- المسافات باتجاه واحد من مدينة حائل، وتستخدم لتحديد فئة 100 كم فقط.
insert into public.appointment_visit_cities (region, city, distance_km)
values
  ('منطقة حائل وضواحيها', 'بقعاء', 95),
  ('منطقة حائل وضواحيها', 'الشنان', 85),
  ('منطقة حائل وضواحيها', 'الغزالة', 100),
  ('منطقة حائل وضواحيها', 'موقق', 65),
  ('منطقة حائل وضواحيها', 'الحائط', 250),
  ('منطقة حائل وضواحيها', 'السليمي', 180),
  ('منطقة حائل وضواحيها', 'الشملي', 180),
  ('منطقة حائل وضواحيها', 'سميراء', 150),
  ('منطقة الرياض وضواحيها', 'الرياض', 640),
  ('منطقة الرياض وضواحيها', 'الخرج', 720),
  ('منطقة الرياض وضواحيها', 'الدوادمي', 430),
  ('منطقة الرياض وضواحيها', 'المجمعة', 430),
  ('منطقة الرياض وضواحيها', 'الزلفي', 300),
  ('منطقة الرياض وضواحيها', 'شقراء', 470),
  ('منطقة مكة المكرمة وضواحيها', 'مكة المكرمة', 790),
  ('منطقة مكة المكرمة وضواحيها', 'جدة', 780),
  ('منطقة مكة المكرمة وضواحيها', 'الطائف', 790),
  ('منطقة المدينة المنورة وضواحيها', 'المدينة المنورة', 430),
  ('منطقة المدينة المنورة وضواحيها', 'ينبع', 650),
  ('منطقة المدينة المنورة وضواحيها', 'العلا', 550),
  ('منطقة القصيم وضواحيها', 'بريدة', 280),
  ('منطقة القصيم وضواحيها', 'عنيزة', 300),
  ('منطقة القصيم وضواحيها', 'الرس', 330),
  ('منطقة القصيم وضواحيها', 'البكيرية', 260),
  ('المنطقة الشرقية وضواحيها', 'الدمام', 1000),
  ('المنطقة الشرقية وضواحيها', 'الخبر', 1020),
  ('المنطقة الشرقية وضواحيها', 'الظهران', 1010),
  ('المنطقة الشرقية وضواحيها', 'الجبيل', 970),
  ('المنطقة الشرقية وضواحيها', 'الأحساء', 1050),
  ('المنطقة الشرقية وضواحيها', 'حفر الباطن', 520),
  ('منطقة تبوك وضواحيها', 'تبوك', 670),
  ('منطقة تبوك وضواحيها', 'ضباء', 850),
  ('منطقة تبوك وضواحيها', 'تيماء', 580),
  ('منطقة تبوك وضواحيها', 'أملج', 900),
  ('منطقة الحدود الشمالية وضواحيها', 'عرعر', 590),
  ('منطقة الحدود الشمالية وضواحيها', 'رفحاء', 330),
  ('منطقة الحدود الشمالية وضواحيها', 'طريف', 830),
  ('منطقة الجوف وضواحيها', 'سكاكا', 440),
  ('منطقة الجوف وضواحيها', 'دومة الجندل', 420),
  ('منطقة الجوف وضواحيها', 'القريات', 780)
on conflict (region, city) do update
set distance_km = excluded.distance_km,
    active = true;

drop table if exists public.appointment_settings;

create sequence if not exists public.appointment_booking_number_seq;

create or replace function public.set_appointment_booking_number()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.booking_number is null or new.booking_number = '' then
    new.booking_number :=
      right(regexp_replace(coalesce(new.phone, ''), '\D', '', 'g'), 4)
      || nextval('public.appointment_booking_number_seq')::text;
  end if;
  return new;
end;
$$;

drop trigger if exists appointment_booking_number_trigger on public.appointment_bookings;
create trigger appointment_booking_number_trigger
before insert on public.appointment_bookings
for each row execute function public.set_appointment_booking_number();

create index if not exists appointment_slots_date_time_idx
  on public.appointment_slots(date, time);
create index if not exists appointment_bookings_phone_idx
  on public.appointment_bookings(phone);
create unique index if not exists appointment_bookings_active_slot_idx
  on public.appointment_bookings(slot_id);

delete from public.appointment_slots s
where s.schedule_version is distinct from 'weekly-v12'
  and not exists (
    select 1 from public.appointment_bookings b where b.slot_id = s.id
  );

create or replace function public.is_appointment_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.appointment_admins where user_id = auth.uid()
  );
$$;

create or replace function public.cleanup_expired_appointment_bookings()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  deleted_count integer;
begin
  delete from public.appointment_bookings
  where confirmed = false
    and receipt_sent = false
    and expires_at is not null
    and expires_at <= now();
  get diagnostics deleted_count = row_count;
  return deleted_count;
end;
$$;

drop function if exists public.get_appointment_public_config();
create function public.get_appointment_public_config()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'pricing', jsonb_build_object(
      'general_price', p.general_price,
      'home_visit_price', p.home_visit_price,
      'external_near_price', p.external_near_price,
      'external_far_price', p.external_far_price
    ),
    'templates', coalesce((
      select jsonb_agg(jsonb_build_object(
        'id', t.id,
        'title', t.title,
        'start_time', to_char(t.start_time, 'HH24:MI'),
        'end_time', to_char(t.end_time, 'HH24:MI'),
        'sort_order', t.sort_order
      ) order by t.sort_order, t.start_time)
      from public.appointment_visit_templates t
      where t.active = true
    ), '[]'::jsonb)
  )
  from public.appointment_pricing p
  where p.id = true;
$$;

drop function if exists public.get_appointment_visit_cities();
create function public.get_appointment_visit_cities()
returns table (
  region text,
  city text,
  distance_km integer,
  price_category text,
  visit_price numeric
)
language sql
stable
security definer
set search_path = public
as $$
  select
    c.region,
    c.city,
    c.distance_km,
    case when c.distance_km <= 100 then 'near' else 'far' end,
    case
      when c.distance_km <= 100 then p.external_near_price
      else p.external_far_price
    end
  from public.appointment_visit_cities c
  cross join public.appointment_pricing p
  where c.active = true and p.id = true
  order by c.region, c.city;
$$;

drop function if exists public.get_available_appointment_slots();
create function public.get_available_appointment_slots()
returns table (
  id text,
  day text,
  date date,
  slot_time text,
  end_time text,
  title text,
  package_end_date date,
  source text,
  suspended boolean,
  slot_type text,
  schedule_version text
)
language plpgsql
security definer
set search_path = public
as $$
begin
  perform public.cleanup_expired_appointment_bookings();

  return query
  select
    s.id, s.day, s.date, s.time, s.end_time, s.title, s.package_end_date,
    s.source, s.suspended, s.slot_type, s.schedule_version
  from public.appointment_slots s
  where s.suspended = false
    and s.schedule_version = 'weekly-v12'
    and s.date >= (now() at time zone 'Asia/Riyadh')::date
    and s.date <= (
      date_trunc('month', (now() at time zone 'Asia/Riyadh'))::date
      + interval '1 month + 2 days'
    )::date
    and (
      s.slot_type <> 'internal'
      or ((s.date + s.time::time) at time zone 'Asia/Riyadh' + interval '30 minutes') > now()
    )
    and not exists (
      select 1
      from public.appointment_bookings b
      where b.slot_id = s.id
        or (
          daterange(
            coalesce(b.booking_start_date, s.date),
            coalesce(b.booking_end_date, s.date),
            '[]'
          ) && daterange(s.date, coalesce(s.package_end_date, s.date), '[]')
          and (
            s.slot_type in ('external', 'special_external_package')
            or b.booking_type in (
              'external', 'special_external_package', 'special_external_day',
              'special_external_near', 'special_external_far', 'special_home'
            )
            or (
              s.date = coalesce(b.booking_start_date, s.date)
              and s.time::time < coalesce(b.appointment_end_time, b.appointment_start_time, '00:00')::time
              and coalesce(s.end_time, s.time)::time > coalesce(b.appointment_start_time, '00:00')::time
            )
          )
        )
    )
  order by s.date, s.time;
end;
$$;

drop function if exists public.create_appointment_booking(text, text, text, text, text, text);
drop function if exists public.create_appointment_booking(text, text, text, text, boolean);
drop function if exists public.create_appointment_booking(text, text, text, text, text, boolean);
drop function if exists public.create_appointment_booking(text, text, text, text, text, text, boolean, boolean);
drop function if exists public.create_appointment_booking(text, text, text, text, text, text, boolean, boolean, numeric, numeric, text);
create function public.create_appointment_booking(
  p_slot_id text,
  p_name text,
  p_phone text,
  p_location_type text,
  p_region text,
  p_city text,
  p_home_session boolean,
  p_price_accepted boolean,
  p_customer_lat numeric,
  p_customer_lng numeric,
  p_alternate_phone text
)
returns table (
  booking_number text,
  booking_type text,
  region text,
  visit_city text,
  visit_price numeric,
  home_session boolean,
  customer_location_url text,
  alternate_phone text,
  booking_start_date date,
  booking_end_date date,
  appointment_title text,
  appointment_start_time text,
  appointment_end_time text
)
language plpgsql
security definer
set search_path = public
as $$
declare
  target_slot public.appointment_slots%rowtype;
  normalized_phone text;
  normalized_name text;
  normalized_alternate text;
  selected_distance integer;
  selected_price numeric(10, 2);
  selected_type text;
  selected_region text;
  selected_city text;
  selected_location_url text;
  created_number text;
  range_start date;
  range_end date;
begin
  perform public.cleanup_expired_appointment_bookings();

  normalized_phone := regexp_replace(coalesce(p_phone, ''), '\D', '', 'g');
  if normalized_phone !~ '^05[0-9]{8}$' then raise exception 'INVALID_PHONE'; end if;
  normalized_name := nullif(trim(coalesce(p_name, '')), '');
  normalized_alternate := nullif(regexp_replace(coalesce(p_alternate_phone, ''), '\D', '', 'g'), '');
  if normalized_alternate is not null and normalized_alternate !~ '^05[0-9]{8}$' then
    raise exception 'INVALID_ALTERNATE_PHONE';
  end if;

  select * into target_slot
  from public.appointment_slots
  where id = p_slot_id
    and suspended = false
    and schedule_version = 'weekly-v12'
  for update;
  if not found then raise exception 'SLOT_NOT_AVAILABLE'; end if;

  selected_type := target_slot.slot_type;
  if selected_type not in (
    'internal', 'home', 'external', 'special_external_package'
  ) then
    raise exception 'INVALID_BOOKING_DATA';
  end if;

  if selected_type = 'internal' and (
    extract(dow from target_slot.date) not between 0 and 3
    or target_slot.time::time < time '17:00'
    or target_slot.time::time > time '21:30'
  ) then raise exception 'SLOT_NOT_AVAILABLE'; end if;

  if selected_type = 'home'
    and extract(dow from target_slot.date) not between 4 and 6
  then raise exception 'SLOT_NOT_AVAILABLE'; end if;

  if selected_type = 'external'
    and extract(dow from target_slot.date) <> 4
  then raise exception 'SLOT_NOT_AVAILABLE'; end if;

  if selected_type in ('external', 'special_external_package')
    and (
      target_slot.time::time <> time '00:00'
      or target_slot.end_time::time <> time '23:59'
      or coalesce(target_slot.package_end_date, target_slot.date) <> target_slot.date + 2
    )
  then raise exception 'SLOT_NOT_AVAILABLE'; end if;

  if selected_type = 'home' and p_home_session is not true then
    raise exception 'INVALID_BOOKING_DATA';
  end if;

  if selected_type in ('external', 'special_external_package') then
    selected_region := nullif(trim(coalesce(p_region, '')), '');
    selected_city := nullif(trim(coalesce(p_city, '')), '');
    if selected_region is null or selected_city is null or p_price_accepted is not true then
      raise exception 'PRICE_NOT_ACCEPTED';
    end if;
    if p_customer_lat is null or p_customer_lng is null then raise exception 'LOCATION_REQUIRED'; end if;

    select c.distance_km into selected_distance
    from public.appointment_visit_cities c
    where c.region = selected_region and c.city = selected_city and c.active = true;
    if not found then raise exception 'INVALID_VISIT_CITY'; end if;

    if selected_type = 'special_external_package' then
      if selected_distance <= 100 and target_slot.date < (
        (now() at time zone 'Asia/Riyadh')::date
        + case
            when (now() at time zone 'Asia/Riyadh')::time <= time '06:00'
            then 0
            else 1
          end
      ) then
        raise exception 'SLOT_NOT_AVAILABLE';
      end if;

      if selected_distance > 100 and (target_slot.date + time '08:00') < (
        (now() at time zone 'Asia/Riyadh') + interval '24 hours'
      ) then
        raise exception 'SLOT_NOT_AVAILABLE';
      end if;
    end if;

    select case
      when selected_distance <= 100 then p.external_near_price
      else p.external_far_price
    end into selected_price
    from public.appointment_pricing p where p.id = true;

    selected_location_url := 'https://www.google.com/maps?q='
      || p_customer_lat::text || ',' || p_customer_lng::text;
  else
    selected_region := 'مدينة حائل';
    if selected_type = 'home' then
      if p_customer_lat is null or p_customer_lng is null then raise exception 'LOCATION_REQUIRED'; end if;
      selected_location_url := 'https://www.google.com/maps?q='
        || p_customer_lat::text || ',' || p_customer_lng::text;
    end if;
    select case
      when selected_type = 'home' then p.home_visit_price
      else p.general_price
    end into selected_price
    from public.appointment_pricing p where p.id = true;
  end if;

  range_start := target_slot.date;
  range_end := coalesce(target_slot.package_end_date, target_slot.date);

  -- تسلسل عمليات الحجز يمنع تمرير باقتين متداخلتين إذا وصل الطلبان في اللحظة نفسها.
  perform pg_advisory_xact_lock(hashtextextended('appointment-booking-calendar', 0));

  if exists (
    select 1
    from public.appointment_bookings b
    where b.phone = normalized_phone
      and daterange(
        coalesce(b.booking_start_date, range_start),
        coalesce(b.booking_end_date, range_start),
        '[]'
      ) && daterange(range_start, range_end, '[]')
  ) then raise exception 'PHONE_ALREADY_BOOKED'; end if;

  if exists (
    select 1
    from public.appointment_bookings b
    where b.slot_id = target_slot.id
      or (
        daterange(
          coalesce(b.booking_start_date, range_start),
          coalesce(b.booking_end_date, range_start),
          '[]'
        ) && daterange(range_start, range_end, '[]')
        and (
          selected_type in ('external', 'special_external_package')
          or b.booking_type in (
            'external', 'special_external_package', 'special_external_day',
            'special_external_near', 'special_external_far', 'special_home'
          )
          or (
            range_start = coalesce(b.booking_start_date, range_start)
            and target_slot.time::time < coalesce(b.appointment_end_time, b.appointment_start_time, '00:00')::time
            and coalesce(target_slot.end_time, target_slot.time)::time > coalesce(b.appointment_start_time, '00:00')::time
          )
        )
      )
  ) then raise exception 'SLOT_NOT_AVAILABLE'; end if;

  insert into public.appointment_bookings (
    slot_id, name, phone, city, booking_type, region, visit_city,
    visit_distance_km, visit_price, price_accepted_at, home_session,
    booking_start_date, booking_end_date, appointment_title,
    appointment_start_time, appointment_end_time, customer_lat, customer_lng,
    customer_location_url, alternate_phone, confirmed, attended, expires_at
  ) values (
    target_slot.id, normalized_name, normalized_phone, selected_region,
    selected_type, selected_region, selected_city, selected_distance, selected_price,
    case when selected_type in ('external', 'special_external_package') then now() else null end,
    selected_type = 'home', range_start, range_end, target_slot.title,
    target_slot.time, target_slot.end_time,
    case when selected_type in ('home', 'external', 'special_external_package') then p_customer_lat else null end,
    case when selected_type in ('home', 'external', 'special_external_package') then p_customer_lng else null end,
    selected_location_url,
    case when selected_type in ('external', 'special_external_package') then normalized_alternate else null end,
    false, false, now() + interval '15 minutes'
  )
  returning appointment_bookings.booking_number into created_number;

  return query select
    created_number, selected_type, selected_region, selected_city, selected_price,
    selected_type = 'home', selected_location_url,
    case when selected_type in ('external', 'special_external_package') then normalized_alternate else null end,
    range_start, range_end, target_slot.title, target_slot.time, target_slot.end_time;
exception when unique_violation then
  raise exception 'SLOT_NOT_AVAILABLE';
end;
$$;

create or replace function public.recover_appointment_booking_number(p_phone text)
returns table (booking_number text, phone text)
language plpgsql security definer set search_path = public
as $$
begin
  perform public.cleanup_expired_appointment_bookings();
  return query
  select b.booking_number, b.phone
  from public.appointment_bookings b
  where b.phone = regexp_replace(coalesce(p_phone, ''), '\D', '', 'g')
  order by b.created_at desc limit 1;
end;
$$;

drop function if exists public.mark_appointment_receipt_sent(text, text);
create function public.mark_appointment_receipt_sent(p_phone text, p_booking_number text)
returns boolean
language plpgsql security definer set search_path = public
as $$
declare
  updated_count integer;
begin
  perform public.cleanup_expired_appointment_bookings();
  update public.appointment_bookings b
  set receipt_sent = true,
      receipt_sent_at = coalesce(b.receipt_sent_at, now())
  where b.phone = regexp_replace(coalesce(p_phone, ''), '\D', '', 'g')
    and b.booking_number = trim(p_booking_number)
    and b.confirmed = false;
  get diagnostics updated_count = row_count;
  return updated_count > 0;
end;
$$;

drop function if exists public.lookup_appointment_booking(text, text);
create function public.lookup_appointment_booking(p_phone text, p_booking_number text)
returns table (
  id uuid, booking_number text, name text, phone text, city text,
  booking_type text, region text, visit_city text, visit_price numeric,
  price_accepted_at timestamptz, home_session boolean, receipt_sent boolean,
  receipt_sent_at timestamptz, confirmed boolean,
  attended boolean, expires_at timestamptz, slot_id text, slot_day text,
  slot_date date, slot_time text, slot_end_time text, appointment_title text,
  booking_start_date date, booking_end_date date
)
language plpgsql security definer set search_path = public
as $$
begin
  perform public.cleanup_expired_appointment_bookings();
  return query
  select
    b.id, b.booking_number, b.name, b.phone, b.city, b.booking_type,
    b.region, b.visit_city, b.visit_price, b.price_accepted_at,
    b.home_session, b.receipt_sent, b.receipt_sent_at, b.confirmed, b.attended, b.expires_at,
    s.id, s.day, s.date, s.time, s.end_time, b.appointment_title,
    b.booking_start_date, b.booking_end_date
  from public.appointment_bookings b
  join public.appointment_slots s on s.id = b.slot_id
  where b.phone = regexp_replace(coalesce(p_phone, ''), '\D', '', 'g')
    and b.booking_number = trim(p_booking_number)
  limit 1;
end;
$$;

alter table public.appointment_slots enable row level security;
alter table public.appointment_bookings enable row level security;
alter table public.appointment_deleted_slots enable row level security;
alter table public.appointment_admins enable row level security;
alter table public.appointment_visit_cities enable row level security;
alter table public.appointment_pricing enable row level security;
alter table public.appointment_visit_templates enable row level security;

drop policy if exists "public read slots" on public.appointment_slots;
drop policy if exists "public insert slots" on public.appointment_slots;
drop policy if exists "public update slots" on public.appointment_slots;
drop policy if exists "public delete slots" on public.appointment_slots;
drop policy if exists "public read bookings" on public.appointment_bookings;
drop policy if exists "public insert bookings" on public.appointment_bookings;
drop policy if exists "public update bookings" on public.appointment_bookings;
drop policy if exists "public delete bookings" on public.appointment_bookings;
drop policy if exists "public read deleted slots" on public.appointment_deleted_slots;
drop policy if exists "public insert deleted slots" on public.appointment_deleted_slots;
drop policy if exists "public delete deleted slots" on public.appointment_deleted_slots;
drop policy if exists "admins manage slots" on public.appointment_slots;
create policy "admins manage slots" on public.appointment_slots for all
using (public.is_appointment_admin()) with check (public.is_appointment_admin());
drop policy if exists "admins manage bookings" on public.appointment_bookings;
create policy "admins manage bookings" on public.appointment_bookings for all
using (public.is_appointment_admin()) with check (public.is_appointment_admin());
drop policy if exists "admins manage deleted slots" on public.appointment_deleted_slots;
create policy "admins manage deleted slots" on public.appointment_deleted_slots for all
using (public.is_appointment_admin()) with check (public.is_appointment_admin());
drop policy if exists "admins read admin list" on public.appointment_admins;
create policy "admins read admin list" on public.appointment_admins for select
using (public.is_appointment_admin());
drop policy if exists "admins manage visit cities" on public.appointment_visit_cities;
create policy "admins manage visit cities" on public.appointment_visit_cities for all
using (public.is_appointment_admin()) with check (public.is_appointment_admin());
drop policy if exists "admins manage pricing" on public.appointment_pricing;
create policy "admins manage pricing" on public.appointment_pricing for all
using (public.is_appointment_admin()) with check (public.is_appointment_admin());
drop policy if exists "admins manage visit templates" on public.appointment_visit_templates;
create policy "admins manage visit templates" on public.appointment_visit_templates for all
using (public.is_appointment_admin()) with check (public.is_appointment_admin());

revoke all on public.appointment_slots from anon, authenticated;
revoke all on public.appointment_bookings from anon, authenticated;
revoke all on public.appointment_deleted_slots from anon, authenticated;
revoke all on public.appointment_admins from anon, authenticated;
revoke all on public.appointment_visit_cities from anon, authenticated;
revoke all on public.appointment_pricing from anon, authenticated;
revoke all on public.appointment_visit_templates from anon, authenticated;

grant select, insert, update, delete on public.appointment_slots to authenticated;
grant select, insert, update, delete on public.appointment_bookings to authenticated;
grant select, insert, delete on public.appointment_deleted_slots to authenticated;
grant select on public.appointment_admins to authenticated;
grant select, insert, update, delete on public.appointment_visit_cities to authenticated;
grant select, update on public.appointment_pricing to authenticated;
grant select, insert, update, delete on public.appointment_visit_templates to authenticated;

revoke all on function public.is_appointment_admin() from public;
grant execute on function public.is_appointment_admin() to authenticated;
revoke all on function public.cleanup_expired_appointment_bookings() from public;
grant execute on function public.cleanup_expired_appointment_bookings() to anon, authenticated;
revoke all on function public.get_appointment_public_config() from public;
grant execute on function public.get_appointment_public_config() to anon, authenticated;
revoke all on function public.get_available_appointment_slots() from public;
grant execute on function public.get_available_appointment_slots() to anon, authenticated;
revoke all on function public.get_appointment_visit_cities() from public;
grant execute on function public.get_appointment_visit_cities() to anon, authenticated;
revoke all on function public.create_appointment_booking(text, text, text, text, text, text, boolean, boolean, numeric, numeric, text) from public;
grant execute on function public.create_appointment_booking(text, text, text, text, text, text, boolean, boolean, numeric, numeric, text) to anon, authenticated;
revoke all on function public.recover_appointment_booking_number(text) from public;
grant execute on function public.recover_appointment_booking_number(text) to anon, authenticated;
revoke all on function public.mark_appointment_receipt_sent(text, text) from public;
grant execute on function public.mark_appointment_receipt_sent(text, text) to anon, authenticated;
revoke all on function public.lookup_appointment_booking(text, text) from public;
grant execute on function public.lookup_appointment_booking(text, text) to anon, authenticated;

notify pgrst, 'reload schema';

-- بعد إنشاء مستخدم المدير من Authentication > Users:
-- insert into public.appointment_admins (user_id)
-- values ('00000000-0000-0000-0000-000000000000')
-- on conflict (user_id) do nothing;
