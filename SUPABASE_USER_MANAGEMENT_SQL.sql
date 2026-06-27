-- تشغيل هذا الملف فقط إذا لم تكن أنشأت جدول app_user_profiles سابقا.
create extension if not exists "uuid-ossp";

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

drop policy if exists "app_user_profiles_admin_manage" on app_user_profiles;
create policy "app_user_profiles_admin_manage" on app_user_profiles
for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
