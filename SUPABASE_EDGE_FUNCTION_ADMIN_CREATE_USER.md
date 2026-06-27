# تحديث دالة admin-create-user

انسخ كود الملف التالي إلى Edge Function باسم `admin-create-user` داخل ملف `index.ts` ثم اضغط Deploy:

`supabase/functions/admin-create-user/index.ts`

هذه النسخة تطبع الخطأ الحقيقي في Logs وتدعم المتغيرات الافتراضية في Supabase.

بعد النشر احذف أي مستخدم في `app_user_profiles` لديه `user_id = NULL` ثم أعد إضافته من الموقع.
