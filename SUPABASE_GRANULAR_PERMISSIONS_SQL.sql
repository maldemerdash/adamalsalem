-- شغل هذا الكود مرة واحدة لإضافة حقل الصلاحيات التفصيلية للمستخدمين
alter table public.app_user_profiles
add column if not exists permissions jsonb not null default '{}'::jsonb;

-- تبسيط الأدوار إلى مدير نظام وموظف فقط داخل السجلات الحالية
update public.app_user_profiles
set role = case when role = 'admin' then 'admin' else 'employee' end
where role is distinct from case when role = 'admin' then 'admin' else 'employee' end;

-- لا نغيّر قيود role القديمة حتى لا يتعطل المشروع، لكن الواجهة الجديدة لا تعرض إلا admin / employee.
