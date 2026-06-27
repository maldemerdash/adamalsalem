-- تشغيل هذا الكود في Supabase SQL Editor قبل استخدام نسخة تسجيل الدخول
create table if not exists app_user_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid unique,
  full_name text not null,
  email text unique not null,
  role text not null default 'employee' check (role in ('admin','hr','accountant','manager','employee')),
  is_active boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table app_user_profiles enable row level security;

drop policy if exists "app_user_profiles_self_read" on app_user_profiles;
create policy "app_user_profiles_self_read" on app_user_profiles
for select using (auth.uid() = user_id or email = auth.email());

-- هذه صلاحية مؤقتة لإدارة المستخدمين من داخل لوحة Supabase/SQL.
-- بعد بناء شاشة إدارة المستخدمين داخل النظام يمكن تضييقها أكثر.
drop policy if exists "app_user_profiles_admin_manage" on app_user_profiles;
create policy "app_user_profiles_admin_manage" on app_user_profiles
for all using (true) with check (true);
