const ICONS = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  wallet: '<path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h16v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6"/><path d="M16 14h2"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.55V21h-4v-.08A1.7 1.7 0 0 0 8.97 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.52-1H3v-4h.08A1.7 1.7 0 0 0 4.6 8.97a1.7 1.7 0 0 0-.34-1.88L4.2 7.03 7.03 4.2l.06.06A1.7 1.7 0 0 0 8.97 4.6 1.7 1.7 0 0 0 10 3.08V3h4v.08a1.7 1.7 0 0 0 1.03 1.52 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.92 10H21v4h-.08A1.7 1.7 0 0 0 19.4 15Z"/>',
  sparkles: '<path d="m12 3-1 3.5L7.5 8 11 9.5 12 13l1-3.5L16.5 8 13 6.5 12 3ZM5 14l-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14ZM19 13l-.7 2.3-2.3.7 2.3.7L19 19l.7-2.3L22 16l-2.3-.7L19 13Z"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  "arrow-left": '<path d="M19 12H5M11 18l-6-6 6-6"/>',
  "trend-up": '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m17 11 2 2 4-4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M5 21h14"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13"/><circle cx="3" cy="6" r="1"/><circle cx="3" cy="12" r="1"/><circle cx="3" cy="18" r="1"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m18 8 5 5M23 8l-5 5"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/>',
  pie: '<path d="M21 12a9 9 0 1 1-9-9v9Z"/><path d="M12 3a9 9 0 0 1 9 9h-9Z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  play: '<path d="m8 5 11 7-11 7Z"/>',
  "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M18 7l-1 14H7L6 7M10 11v6M14 11v6"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  camera: '<path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="4"/>',
  logout: '<path d="M10 17l5-5-5-5M15 12H3"/><path d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/>',
  "user-plus": '<path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8" cy="7" r="4"/><path d="M19 8v6M16 11h6"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>',
  passport: '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="11" r="4"/><path d="M8 17h8M12 7v8M8 11h8"/>',
  notes: '<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  printer: '<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>'
};

const departments = ["التقنية", "التسويق", "المبيعات", "الموارد البشرية", "المالية", "العمليات"];
const nationalities = ["مصري", "يمني", "سوداني", "أردني", "سوري", "فلسطيني", "لبناني", "هندي", "باكستاني", "بنغلاديشي", "فلبيني", "نيبالي", "إندونيسي", "إثيوبي", "أوغندي", "كيني", "تركي", "مغربي", "تونسي", "جزائري"];
const saudiBanks = [
  "البنك الأهلي السعودي", "مصرف الراجحي", "بنك الرياض", "البنك السعودي الأول",
  "البنك السعودي الفرنسي", "البنك العربي الوطني", "بنك البلاد", "بنك الجزيرة",
  "مصرف الإنماء", "البنك السعودي للاستثمار", "بنك الخليج الدولي - السعودية",
  "بنك إس تي سي", "بنك دال ثلاثمائة وستون", "بنك فيجن", "آيزي بنك",
  "بنك الإمارات دبي الوطني", "بنك أبوظبي الأول", "بنك أبوظبي التجاري",
  "بنك البحرين الوطني", "بنك الكويت الوطني", "بنك مسقط", "بنك صحار الدولي",
  "بنك قطر الوطني", "دويتشه بنك", "جي بي مورغان تشيس",
  "بنك الصين للصناعة والتجارة", "بنك الصين المحدود", "بنك ستاندرد تشارترد",
  "بنك يو بي إس", "بنك بي إن بي باريبا", "البنك الوطني العراقي",
  "المصرف العراقي للتجارة", "بنك مصر", "البنك الأهلي المصري",
  "بنك الشريعة الإندونيسي", "بنك إم يو إف جي", "بنك الأردن",
  "البنك الوطني الباكستاني", "بنك زراعات التركي"
];
const defaultJobTitles = [
  "مهندس برمجيات", "مهندسة برمجيات", "مدير تسويق", "أخصائي مبيعات",
  "أخصائية موارد بشرية", "محاسب أول", "منسقة عمليات", "مصمم تجربة مستخدم",
  "مدير حسابات", "عامل", "سائق", "مندوب مبيعات", "فني", "مشرف", "مدير مشروع"
];
const defaultEmployeeMinuteTypes = [
  "محضر غياب", "محضر تأخير", "محضر مخالفة تعليمات", "محضر أداء", "محضر آخر"
];
const DEFAULT_MINUTE_TEMPLATE_SETTINGS = {
  templates: [
    { id: "absence-minute", name: "محضر غياب", system: true, fields: [
      { id: "absenceDate", label: "تاريخ الغياب", type: "date" },
      { id: "absenceReason", label: "سبب أو ملاحظة", type: "text" },
      { id: "penalty", label: "الجزاء الموقع على الموظف", type: "text" }
    ]},
    { id: "late-minute", name: "محضر تأخير", fields: [
      { id: "lateDate", label: "تاريخ التأخير", type: "date" },
      { id: "lateTime", label: "وقت التأخير", type: "time" },
      { id: "details", label: "تفاصيل المحضر", type: "text" },
      { id: "penalty", label: "الجزاء الموقع على الموظف", type: "text" }
    ]},
    { id: "violation-minute", name: "محضر مخالفة تعليمات", fields: [
      { id: "violationDate", label: "تاريخ المخالفة", type: "date" },
      { id: "details", label: "تفاصيل المخالفة", type: "text" },
      { id: "penalty", label: "الجزاء الموقع على الموظف", type: "text" }
    ]}
  ]
};
const statusMeta = {
  active: { label: "على رأس العمل", className: "status-active" },
  suspended: { label: "متوقف عن العمل", className: "status-suspended" },
  leave: { label: "في إجازة", className: "status-leave" },
  travel: { label: "مسافر", className: "status-leave" },
  terminated: { label: "تم إنهاء خدماته", className: "status-terminated" }
};
const leaveStatusMeta = {
  pending: { label: "بانتظار الموافقة", className: "status-pending" },
  approved: { label: "تمت الموافقة", className: "status-approved" },
  rejected: { label: "مرفوضة", className: "status-rejected" }
};
const pageMeta = {
  dashboard: ["الصفحة الرئيسية", "أهلًا محمد، إليك ملخص فريقك اليوم"],
  employees: ["إدارة الموظفين", "عرض وإدارة جميع بيانات الموظفين"],
  attendance: ["الحضور والانصراف", "متابعة حضور الفريق وساعات العمل"],
  leaves: ["الإجازات والسفر", "طلبات الإجازات والسفر ومباشرة العمل"],
  payroll: ["الرواتب", "إدارة رواتب واستحقاقات الفريق"],
  departments: ["الأقسام", "توزيع الموظفين والهيكل التنظيمي"],
  settings: ["الإعدادات", "إدارة بيانات المنشأة وتفضيلات النظام"],
  users: ["إدارة المستخدمين", "إضافة المستخدمين وتحديد صلاحيات الدخول"]
};
const currentUser = "محمد الأحمد";
const OFFICIAL_CHECK_IN = "08:00";
const OFFICIAL_CHECK_OUT = "17:00";
const DAY_NAMES = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
const WORKDAY_NAMES = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const DEFAULT_WORK_SETTINGS = {
  shifts: [{ id: "shift-basic", name: "الفترة الأساسية", start: "08:00", end: "17:00" }],
  days: {
    0: { enabled: true, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] },
    1: { enabled: true, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] },
    2: { enabled: true, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] },
    3: { enabled: true, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] },
    4: { enabled: true, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] },
    5: { enabled: false, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] },
    6: { enabled: false, shifts: [{ shiftId: "shift-basic", start: "08:00", end: "17:00" }] }
  }
};
const DEFAULT_ABSENCE_POLICY_SETTINGS = {
  activePolicy: "establishment",
  establishmentPolicyEnabled: true,
  firstPeriodDeductionDays: 2,
  secondPeriodDeductionDays: 1,
  fullDayDeductionDays: 1,
  laborRules: [
    { title: "غياب يوم واحد خلال السنة العقدية", penalty: "جزاء تصاعدي حسب التكرار", detail: "أول مرة 50% من الأجر اليومي، ثم يوم، ثم يومان، ثم ثلاثة أيام، مع حسم أجر مدة الغياب عند عدم وجود عذر مقبول." },
    { title: "غياب متصل من يومين إلى 6 أيام", penalty: "حسم أجر مدة الغياب + جزاء تصاعدي", detail: "يتم احتساب مدة الغياب المتصلة، ويظهر الجزاء المقترح حسب عدد الأيام والتكرار." },
    { title: "غياب متصل من 7 إلى 10 أيام", penalty: "حسم + تصعيد إداري", detail: "قد يصل الجزاء إلى الحرمان من العلاوة أو الترقية حسب التكرار، مع حسم أجر مدة الغياب." },
    { title: "غياب متصل من 11 إلى 14 يومًا", penalty: "حسم + إنذار بالفصل", detail: "يظهر تنبيه لاتخاذ إجراء الإنذار والتحقيق قبل أي إجراء أعلى." },
    { title: "انقطاع متصل أكثر من 15 يومًا", penalty: "مؤهل للمادة 80", detail: "قابل للفصل وفق المادة 80 بشرط الإنذار الكتابي بعد 10 أيام غياب." },
    { title: "غياب متقطع يزيد على 30 يومًا خلال السنة العقدية", penalty: "مؤهل للمادة 80", detail: "قابل للفصل وفق المادة 80 بشرط الإنذار الكتابي بعد 20 يومًا غيابًا متقطعًا." }
  ]
};
const seedEmployees = [
  { id: "e1", name: "نورة العتيبي", email: "noura@nawah.sa", phone: "0551234567", department: "التقنية", role: "مهندسة برمجيات", joinDate: "2026-05-12", status: "active", salary: 14500, color: "teal", attendance: "08:01", nationality: "سعودي" },
  { id: "e2", name: "سلمان الحربي", email: "salman@nawah.sa", phone: "0532345678", department: "التسويق", role: "مدير تسويق", joinDate: "2026-04-28", status: "active", salary: 16000, color: "blue", attendance: "08:17", nationality: "سعودي" },
  { id: "e3", name: "عمر القحطاني", email: "omar@nawah.sa", phone: "0503456789", department: "المبيعات", role: "أخصائي مبيعات", joinDate: "2026-03-16", status: "active", salary: 11000, color: "violet", attendance: "07:55", nationality: "سعودي" },
  { id: "e4", name: "ريم الدوسري", email: "reem@nawah.sa", phone: "0564567890", department: "الموارد البشرية", role: "أخصائية موارد بشرية", joinDate: "2026-02-09", status: "active", salary: 12500, color: "rose", attendance: "08:04", nationality: "سعودي" },
  { id: "e5", name: "خالد الشمري", email: "khaled@nawah.sa", phone: "0545678901", department: "المالية", role: "محاسب أول", joinDate: "2025-12-21", status: "leave", salary: 13200, color: "amber", attendance: null, nationality: "سعودي" },
  { id: "e6", name: "سارة المطيري", email: "sarah@nawah.sa", phone: "0586789012", department: "العمليات", role: "منسقة عمليات", joinDate: "2025-11-03", status: "active", salary: 9800, color: "blue", attendance: "08:32", nationality: "سعودي" },
  { id: "e7", name: "عبدالله الزهراني", email: "abdullah@nawah.sa", phone: "0597890123", department: "التقنية", role: "مصمم تجربة مستخدم", joinDate: "2025-09-14", status: "active", salary: 13800, color: "violet", attendance: "07:58", nationality: "سعودي" },
  { id: "e8", name: "لينا الغامدي", email: "lina@nawah.sa", phone: "0578901234", department: "المبيعات", role: "مديرة حسابات", joinDate: "2025-08-01", status: "active", salary: 15200, color: "rose", attendance: "08:06", nationality: "سعودي" }
];
const seedLeaves = [
  { id: "l1", employeeId: "e2", type: "إجازة سنوية", from: "2026-06-21", to: "2026-06-25", days: 5, status: "pending", note: "إجازة عائلية" },
  { id: "l2", employeeId: "e6", type: "إجازة مرضية", from: "2026-06-15", to: "2026-06-16", days: 2, status: "pending", note: "مرفق التقرير الطبي" },
  { id: "l3", employeeId: "e4", type: "إجازة سنوية", from: "2026-05-24", to: "2026-05-28", days: 5, status: "approved", note: "" }
];

let db = null;
let employees = [];
let leaves = loadLocalData("nawah-leaves", seedLeaves);
let attendanceExceptions = loadLocalData("nawah-attendance-exceptions", []);
let workSettings = normalizeWorkSettings(loadLocalData("nawah-work-settings", DEFAULT_WORK_SETTINGS));
let absencePolicySettings = normalizeAbsencePolicySettings(loadLocalData("nawah-absence-policy-settings", DEFAULT_ABSENCE_POLICY_SETTINGS));
let minuteTemplateSettings = normalizeMinuteTemplateSettings(loadLocalData("nawah-minute-template-settings", DEFAULT_MINUTE_TEMPLATE_SETTINGS));
let selectedAttendanceDate = formatInputDate(todayAtNoon());
let jobTitles = loadLocalData("nawah-job-titles", defaultJobTitles);
let employeeFormState = createEmptyFormState();
let deleteTargetId = null;
let activeLeaveFilter = "all";
let pendingClearance = null;
let pendingLeaveCommission = null;
let pendingEndServiceEmployeeId = null;
let pendingLeaveReturn = null;
let pendingConsentAttachmentId = "";
const objectUrls = new Set();

const SUPABASE_URL = "https://nbpfeyoydvujpfoizimh.supabase.co";
const SUPABASE_KEY = "sb_publishable_6FXDGmhPXkJ-WeP6z3mvZg_lj58n_JE";
const CLOUD_STATE_KEY = "app_state";
const CLOUD_BUCKET_EMPLOYEE = "employee-attachments";
const CLOUD_BUCKET_COMPANY = "company-documents";
let supabaseClient = null;
let cloudReady = false;
let cloudSaveTimer = null;
let cloudLoadAttempted = false;
let cloudSaveAllowed = false;

let authUser = null;
let authProfile = null;
const AUTH_ROLES = {
  admin: { label: "مدير النظام", views: ["dashboard", "employees", "attendance", "leaves", "payroll", "departments", "settings", "users"] },
  hr: { label: "الموارد البشرية", views: ["dashboard", "employees", "attendance", "leaves", "departments"] },
  accountant: { label: "المحاسب", views: ["dashboard", "employees", "payroll"] },
  manager: { label: "مدير مباشر", views: ["dashboard", "employees", "attendance", "leaves"] },
  employee: { label: "موظف", views: ["dashboard", "leaves"] }
};

function currentRoleKey() {
  return authProfile?.role && AUTH_ROLES[authProfile.role] ? authProfile.role : "admin";
}

function roleCanOpen(viewName) {
  const role = AUTH_ROLES[currentRoleKey()] || AUTH_ROLES.admin;
  return role.views.includes(viewName);
}

function ensureAuthStyles() {
  if (document.querySelector("#authGateStyles")) return;
  const style = document.createElement("style");
  style.id = "authGateStyles";
  style.textContent = `
    body.auth-locked { overflow: hidden; }
    body.auth-locked .app-shell { filter: blur(2px); pointer-events: none; user-select: none; }
    .auth-gate { position: fixed; inset: 0; z-index: 99999; display: grid; place-items: center; padding: 24px; background: linear-gradient(135deg, rgba(13, 23, 44, .96), rgba(14, 116, 144, .88)); direction: rtl; }
    .auth-card { width: min(440px, 100%); background: #fff; border-radius: 28px; padding: 28px; box-shadow: 0 30px 90px rgba(15, 23, 42, .35); border: 1px solid rgba(255,255,255,.3); }
    .auth-logo { width: 62px; height: 62px; border-radius: 22px; display: grid; place-items: center; margin-bottom: 16px; background: linear-gradient(135deg, #0f766e, #14b8a6); color: #fff; font-weight: 900; font-size: 26px; }
    .auth-card h2 { margin: 0 0 8px; color: #0f172a; font-size: 25px; }
    .auth-card p { margin: 0 0 20px; color: #64748b; line-height: 1.8; }
    .auth-form { display: grid; gap: 14px; }
    .auth-field { display: grid; gap: 7px; color: #334155; font-weight: 800; font-size: 13px; }
    .auth-field input { height: 48px; border-radius: 15px; border: 1px solid #dbe3ef; padding: 0 14px; font-family: inherit; font-size: 15px; outline: none; direction: ltr; text-align: left; }
    .auth-field input:focus { border-color: #14b8a6; box-shadow: 0 0 0 4px rgba(20,184,166,.14); }
    .auth-submit { height: 50px; border: 0; border-radius: 16px; background: linear-gradient(135deg, #0f766e, #14b8a6); color: #fff; font-family: inherit; font-size: 16px; font-weight: 900; cursor: pointer; }
    .auth-submit:disabled { opacity: .65; cursor: wait; }
    .auth-error { display: none; background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; border-radius: 14px; padding: 11px 13px; font-size: 13px; line-height: 1.7; }
    .auth-error.show { display: block; }
    .logout-btn { cursor: pointer; }
    .nav-item.is-permission-hidden, .stat-card.is-permission-hidden, [data-permission-hidden="true"] { display: none !important; }
  `;
  document.head.appendChild(style);
}

function showAuthGate(message = "") {
  ensureAuthStyles();
  document.body.classList.add("auth-locked");
  let gate = document.querySelector("#authGate");
  if (!gate) {
    gate = document.createElement("div");
    gate.id = "authGate";
    gate.className = "auth-gate";
    gate.innerHTML = `
      <div class="auth-card">
        <div class="auth-logo">ن</div>
        <h2>تسجيل الدخول</h2>
        <p>أدخل البريد الإلكتروني وكلمة المرور للدخول إلى نظام إدارة الموظفين.</p>
        <form class="auth-form" id="authLoginForm">
          <label class="auth-field">البريد الإلكتروني<input type="email" name="email" autocomplete="email" required placeholder="name@example.com"></label>
          <label class="auth-field">كلمة المرور<input type="password" name="password" autocomplete="current-password" required placeholder="••••••••"></label>
          <div class="auth-error" id="authError"></div>
          <button class="auth-submit" type="submit">دخول إلى النظام</button>
        </form>
      </div>`;
    document.body.appendChild(gate);
    gate.querySelector("#authLoginForm")?.addEventListener("submit", handleAuthLogin);
  }
  const errorBox = gate.querySelector("#authError");
  if (message) {
    errorBox.textContent = message;
    errorBox.classList.add("show");
  } else {
    errorBox.textContent = "";
    errorBox.classList.remove("show");
  }
}

function hideAuthGate() {
  document.body.classList.remove("auth-locked");
  document.querySelector("#authGate")?.remove();
}

async function handleAuthLogin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector("button[type='submit']");
  const errorBox = form.querySelector("#authError");
  const email = String(form.elements.email.value || "").trim();
  const password = String(form.elements.password.value || "");
  button.disabled = true;
  button.textContent = "جاري الدخول...";
  errorBox.classList.remove("show");
  try {
    const client = supabaseClient || initSupabaseClient();
    if (!client) throw new Error("تعذر الاتصال بقاعدة البيانات");
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    authUser = data.user || null;
    authProfile = await loadAuthProfile(authUser);
    if (!authProfile?.is_active) {
      await client.auth.signOut();
      throw new Error("هذا المستخدم غير مفعل في جدول الصلاحيات");
    }
    hideAuthGate();
    window.location.reload();
  } catch (error) {
    errorBox.textContent = "تعذر تسجيل الدخول. تأكد من البريد وكلمة المرور وأن المستخدم مفعّل.";
    errorBox.classList.add("show");
  } finally {
    button.disabled = false;
    button.textContent = "دخول إلى النظام";
  }
}

async function loadAuthProfile(user) {
  if (!user || !supabaseClient) return null;
  try {
    const { data, error } = await supabaseClient
      .from("app_user_profiles")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    if (data) return data;
  } catch (error) {
    console.warn("تعذر قراءة صلاحيات المستخدم حسب user_id.", error);
  }
  try {
    const { data, error } = await supabaseClient
      .from("app_user_profiles")
      .select("*")
      .eq("email", user.email)
      .maybeSingle();
    if (error) throw error;
    if (data) return data;
  } catch (error) {
    console.warn("تعذر قراءة صلاحيات المستخدم حسب البريد.", error);
  }
  return { full_name: user.email || "مستخدم", email: user.email || "", role: "employee", is_active: false };
}

async function requireAuthenticatedUser() {
  ensureAuthStyles();
  const client = supabaseClient || initSupabaseClient();
  if (!client) {
    showAuthGate("تعذر الاتصال بقاعدة البيانات. تأكد من إعدادات Supabase.");
    return false;
  }
  try {
    const { data, error } = await client.auth.getSession();
    if (error) throw error;
    authUser = data?.session?.user || null;
    if (!authUser) {
      showAuthGate();
      return false;
    }
    authProfile = await loadAuthProfile(authUser);
    if (!authProfile?.is_active) {
      await client.auth.signOut();
      showAuthGate("حسابك موجود لكن لم يتم تفعيله في صلاحيات النظام.");
      return false;
    }
    hideAuthGate();
    return true;
  } catch (error) {
    console.warn("تعذر التحقق من جلسة الدخول.", error);
    showAuthGate("تعذر التحقق من تسجيل الدخول.");
    return false;
  }
}

function updateTopbarUser() {
  const name = authProfile?.full_name || authUser?.email || "مستخدم";
  const role = AUTH_ROLES[currentRoleKey()]?.label || "مستخدم";
  const copy = document.querySelector(".topbar-user-copy");
  if (copy) copy.innerHTML = `<strong>${escapeHtml(name.split("@")[0])}</strong><span>${escapeHtml(role)}</span>`;
  const mark = document.querySelector(".topbar-user-mark");
  if (mark) mark.textContent = String(name).trim().charAt(0) || "م";
}

function applyRolePermissions() {
  updateTopbarUser();
  const allowed = new Set((AUTH_ROLES[currentRoleKey()] || AUTH_ROLES.admin).views);
  document.querySelectorAll(".nav-item[data-view]").forEach((button) => {
    button.classList.toggle("is-permission-hidden", !allowed.has(button.dataset.view));
  });
  document.querySelectorAll(".stat-card[data-go-view]").forEach((card) => {
    card.classList.toggle("is-permission-hidden", !allowed.has(card.dataset.goView));
  });
  document.querySelectorAll("[data-go-view]").forEach((element) => {
    const view = element.dataset.goView;
    if (view && pageMeta[view]) element.dataset.permissionHidden = allowed.has(view) ? "false" : "true";
  });
}

function attachAuthGlobalEvents() {
  document.addEventListener("click", async (event) => {
    const logout = event.target.closest(".logout-btn");
    if (logout) {
      event.preventDefault();
      try { await saveCloudStateNow(); } catch (_) {}
      try { await supabaseClient?.auth.signOut(); } catch (_) {}
      window.location.reload();
      return;
    }
    const target = event.target.closest("[data-view], [data-go-view]");
    const view = target?.dataset?.view || target?.dataset?.goView;
    if (view && pageMeta[view] && !roleCanOpen(view)) {
      event.preventDefault();
      event.stopPropagation();
      showToast("ليست لديك صلاحية الدخول إلى هذا القسم");
    }
  }, true);
}

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((element) => {
    element.innerHTML = iconSvg(element.dataset.icon);
  });
}

function loadLocalData(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : structuredClone(fallback);
  } catch {
    return structuredClone(fallback);
  }
}

function saveLocalMeta() {
  localStorage.setItem("nawah-leaves", JSON.stringify(leaves));
  localStorage.setItem("nawah-job-titles", JSON.stringify(jobTitles));
  localStorage.setItem("nawah-attendance-exceptions", JSON.stringify(attendanceExceptions));
  localStorage.setItem("nawah-work-settings", JSON.stringify(workSettings));
  localStorage.setItem("nawah-absence-policy-settings", JSON.stringify(absencePolicySettings));
  localStorage.setItem("nawah-minute-template-settings", JSON.stringify(minuteTemplateSettings));
  localStorage.setItem("nawah-org-structure", JSON.stringify(getOrgStructure()));
  queueCloudStateSave();
}

function initSupabaseClient() {
  try {
    if (!window.supabase?.createClient) return null;
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    cloudReady = true;
    return supabaseClient;
  } catch (error) {
    console.warn("تعذر تهيئة Supabase، سيتم استخدام التخزين المحلي.", error);
    cloudReady = false;
    return null;
  }
}

function buildCloudState() {
  return {
    version: 1,
    savedAt: new Date().toISOString(),
    employees,
    leaves,
    jobTitles,
    attendanceExceptions,
    workSettings,
    absencePolicySettings,
    minuteTemplateSettings,
    orgStructure: getOrgStructure()
  };
}

function applyCloudState(state) {
  if (!state || typeof state !== "object") return false;
  if (Array.isArray(state.employees)) employees = state.employees.map(normalizeEmployee);
  if (Array.isArray(state.leaves)) leaves = state.leaves;
  if (Array.isArray(state.jobTitles)) jobTitles = state.jobTitles;
  if (Array.isArray(state.attendanceExceptions)) attendanceExceptions = state.attendanceExceptions;
  if (state.workSettings) workSettings = normalizeWorkSettings(state.workSettings);
  if (state.absencePolicySettings) absencePolicySettings = normalizeAbsencePolicySettings(state.absencePolicySettings);
  if (state.minuteTemplateSettings) minuteTemplateSettings = normalizeMinuteTemplateSettings(state.minuteTemplateSettings);
  if (state.orgStructure) localStorage.setItem("nawah-org-structure", JSON.stringify(normalizeOrgStructure(state.orgStructure)));
  localStorage.setItem("nawah-leaves", JSON.stringify(leaves));
  localStorage.setItem("nawah-job-titles", JSON.stringify(jobTitles));
  localStorage.setItem("nawah-attendance-exceptions", JSON.stringify(attendanceExceptions));
  localStorage.setItem("nawah-work-settings", JSON.stringify(workSettings));
  localStorage.setItem("nawah-absence-policy-settings", JSON.stringify(absencePolicySettings));
  localStorage.setItem("nawah-minute-template-settings", JSON.stringify(minuteTemplateSettings));
  return true;
}

async function loadCloudState() {
  cloudLoadAttempted = true;
  if (!supabaseClient) return { ok: false, found: false, state: null, error: null };
  try {
    const { data, error } = await supabaseClient
      .from("app_settings")
      .select("setting_value")
      .eq("setting_key", CLOUD_STATE_KEY)
      .maybeSingle();
    if (error) throw error;
    return { ok: true, found: Boolean(data), state: data?.setting_value || null, error: null };
  } catch (error) {
    console.warn("تعذر تحميل بيانات Supabase. تم إيقاف الحفظ السحابي مؤقتًا حتى لا يتم استبدال البيانات ببيانات فارغة.", error);
    return { ok: false, found: false, state: null, error };
  }
}

async function saveCloudStateNow(options = {}) {
  const force = Boolean(options.force);
  if (!supabaseClient || !cloudReady) return;
  if (!force && !cloudSaveAllowed) return;
  try {
    const { error } = await supabaseClient
      .from("app_settings")
      .upsert({
        setting_key: CLOUD_STATE_KEY,
        setting_value: buildCloudState(),
        updated_at: new Date().toISOString()
      }, { onConflict: "setting_key" });
    if (error) throw error;
  } catch (error) {
    console.warn("تعذر حفظ البيانات في Supabase، ستبقى محفوظة محليًا مؤقتًا.", error);
  }
}

function queueCloudStateSave() {
  if (!supabaseClient || !cloudReady || !cloudLoadAttempted || !cloudSaveAllowed) return;
  clearTimeout(cloudSaveTimer);
  cloudSaveTimer = setTimeout(() => { saveCloudStateNow(); }, 500);
}

function bucketForAttachmentCategory(category = "") {
  return String(category).includes("establishment") || String(category).includes("company")
    ? CLOUD_BUCKET_COMPANY
    : CLOUD_BUCKET_EMPLOYEE;
}

function sanitizeStorageName(name = "file") {
  const clean = String(name).replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").slice(-120);
  return clean || "file";
}

function requestResult(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("nawah-hr", 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains("employees")) {
        database.createObjectStore("employees", { keyPath: "id" });
      }
      if (!database.objectStoreNames.contains("attachments")) {
        database.createObjectStore("attachments", { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function dbStore(name, mode = "readonly") {
  return db.transaction(name, mode).objectStore(name);
}

async function dbGetAllEmployees() {
  return requestResult(dbStore("employees").getAll());
}

async function dbSaveEmployee(employee) {
  await requestResult(dbStore("employees", "readwrite").put(employee));
  queueCloudStateSave();
}

async function dbDeleteEmployee(id) {
  await requestResult(dbStore("employees", "readwrite").delete(id));
  queueCloudStateSave();
}

async function saveAttachment(file, category) {
  if (!file) return "";
  if (supabaseClient && cloudReady) {
    try {
      const bucket = bucketForAttachmentCategory(category);
      const storagePath = `${category || "attachment"}/${Date.now()}-${Math.random().toString(16).slice(2)}-${sanitizeStorageName(file.name)}`;
      const { error: uploadError } = await supabaseClient.storage
        .from(bucket)
        .upload(storagePath, file, { cacheControl: "3600", upsert: false, contentType: file.type || "application/octet-stream" });
      if (uploadError) throw uploadError;
      const { data, error } = await supabaseClient
        .from("attachments")
        .insert({
          related_table: category || "general",
          related_id: null,
          file_name: file.name,
          file_type: file.type || "application/octet-stream",
          file_size: file.size || 0,
          storage_path: `${bucket}/${storagePath}`,
          uploaded_by: "web"
        })
        .select("id, file_name, file_type, file_size, storage_path, created_at")
        .single();
      if (error) throw error;
      return data.id;
    } catch (error) {
      console.warn("تعذر رفع المرفق إلى Supabase، سيتم حفظه محليًا.", error);
      showToast("تعذر رفع المرفق للسحابة، تم حفظه محليًا مؤقتًا");
    }
  }
  const record = {
    id: `attachment-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    category,
    name: file.name,
    type: file.type || "application/octet-stream",
    blob: file,
    createdAt: new Date().toISOString()
  };
  await requestResult(dbStore("attachments", "readwrite").put(record));
  return record.id;
}

async function getAttachment(id) {
  if (!id) return null;
  if (supabaseClient && cloudReady && !String(id).startsWith("attachment-")) {
    try {
      const { data, error } = await supabaseClient
        .from("attachments")
        .select("id, file_name, file_type, file_size, storage_path, file_url, created_at")
        .eq("id", id)
        .maybeSingle();
      if (error) throw error;
      if (data) {
        return {
          id: data.id,
          name: data.file_name,
          type: data.file_type,
          size: data.file_size,
          storagePath: data.storage_path,
          fileUrl: data.file_url,
          createdAt: data.created_at
        };
      }
    } catch (error) {
      console.warn("تعذر قراءة المرفق من Supabase.", error);
    }
  }
  return requestResult(dbStore("attachments").get(id));
}

async function attachmentUrl(id) {
  const record = await getAttachment(id);
  if (!record) return "";
  if (record.blob) {
    const url = URL.createObjectURL(record.blob);
    objectUrls.add(url);
    return url;
  }
  if (record.fileUrl) return record.fileUrl;
  if (record.storagePath && supabaseClient) {
    const [bucket, ...parts] = String(record.storagePath).split("/");
    const path = parts.join("/");
    if (bucket && path) {
      try {
        const { data, error } = await supabaseClient.storage.from(bucket).createSignedUrl(path, 60 * 60);
        if (error) throw error;
        return data?.signedUrl || "";
      } catch (error) {
        console.warn("تعذر إنشاء رابط مؤقت للمرفق.", error);
      }
    }
  }
  return "";
}

async function openAttachment(id) {
  const url = await attachmentUrl(id);
  if (!url) {
    showToast("لا يوجد مرفق محفوظ");
    return;
  }
  window.open(url, "_blank", "noopener");
}

async function initStorage() {
  db = await openDatabase();
  initSupabaseClient();
  cloudSaveAllowed = false;

  const cloudResult = await loadCloudState();
  if (cloudResult.ok && cloudResult.found && cloudResult.state && applyCloudState(cloudResult.state)) {
    await Promise.all(employees.map(dbSaveEmployee));
    cloudSaveAllowed = true;
    return;
  }

  const storedEmployees = await dbGetAllEmployees();
  if (!cloudResult.ok && supabaseClient) {
    if (storedEmployees.length) {
      employees = storedEmployees.map(normalizeEmployee);
    } else {
      const legacy = loadLocalData("nawah-employees", []);
      employees = Array.isArray(legacy) && legacy.length ? legacy.map(normalizeEmployee) : [];
    }
    showToast("تعذر تحميل بيانات Supabase؛ تم إيقاف الحفظ السحابي مؤقتًا لحماية البيانات");
    return;
  }

  if (storedEmployees.length) {
    employees = storedEmployees.map(normalizeEmployee);
    const needsMigration = storedEmployees.some((employee, index) => (
      Number(employee.sequence) !== employees[index].sequence
      || employee.employeeNumber !== employees[index].employeeNumber
    ));
    if (needsMigration) {
      await Promise.all(employees.map(dbSaveEmployee));
    }
    cloudSaveAllowed = true;
    if (cloudResult.ok && !cloudResult.found) await saveCloudStateNow({ force: true });
    return;
  }

  const legacy = loadLocalData("nawah-employees", []);
  employees = Array.isArray(legacy) && legacy.length ? legacy.map(normalizeEmployee) : seedEmployees.map(normalizeEmployee);
  await Promise.all(employees.map(dbSaveEmployee));
  cloudSaveAllowed = true;
  if (cloudResult.ok && !cloudResult.found) await saveCloudStateNow({ force: true });
}


window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    try { saveCloudStateNow(); } catch (_) {}
  }
});

window.addEventListener("beforeunload", () => {
  try { saveCloudStateNow(); } catch (_) {}
});

function createEmptyFormState() {
  return {
    photoAttachmentId: "",
    legacyPhoto: "",
    identityAttachmentId: "",
    signatureAttachmentId: "",
    fingerprintAttachmentId: "",
    passports: [],
    bankAccounts: [],
    notes: [],
    minutes: [],
    warnings: [],
    documents: [],
    commissions: [],
    commissionAccrualStartDate: "",
    commissionPaused: false,
    commissionPauseReason: "",
    commissionPausedByLeaveId: "",
    commissionPausedAt: "",
    consent: null
  };
}

function createPassport(passport = {}) {
  return {
    id: passport.id || `passport-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    number: passport.number || passport.passportNumber || "",
    startDate: passport.startDate || passport.passportStartDate || "",
    expiryDate: passport.expiryDate || passport.passportExpiryDate || "",
    attachmentId: passport.attachmentId || ""
  };
}

function createBankAccount(account = {}) {
  return {
    id: account.id || `bank-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    bankName: account.bankName || "",
    iban: formatIban(account.iban || "SA"),
    certificateAttachmentId: account.certificateAttachmentId || "",
    approvalAttachmentId: account.approvalAttachmentId || ""
  };
}

function createDocument(documentItem = {}) {
  return {
    id: documentItem.id || `document-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    number: documentItem.number || "",
    startDate: documentItem.startDate || "",
    expiryDate: documentItem.expiryDate || "",
    attachmentId: documentItem.attachmentId || ""
  };
}
function createEmployeeMinuteRecord(record = {}) {
  const createdAt = record.createdAt || new Date().toISOString();
  const deductionAmount = Number(record.deductionAmount || 0);
  return {
    id: record.id || `minute-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    type: record.type || "",
    templateId: record.templateId || record.minuteTemplateId || "",
    fieldValues: record.fieldValues && typeof record.fieldValues === "object" ? { ...record.fieldValues } : {},
    employeeFields: Array.isArray(record.employeeFields) ? [...record.employeeFields] : [],
    text: record.text || record.details || "",
    penalty: record.penalty || "",
    deductionAmount,
    deductionAmountLabel: record.deductionAmountLabel || formatCurrencyEn(deductionAmount),
    absenceType: record.absenceType || "",
    absencePeriod: record.absencePeriod || "",
    absencePolicy: record.absencePolicy || "",
    employeeId: record.employeeId || "",
    createdAt,
    createdAtLabel: record.createdAtLabel || formatDateTime(createdAt),
    createdBy: record.createdBy || currentUser,
    sourceAbsenceId: record.sourceAbsenceId || ""
  };
}


function normalizeEmployee(employee, index = 0) {
  const parts = String(employee.name || "").trim().split(/\s+/).filter(Boolean);
  const firstName = employee.firstName || parts[0] || "";
  const familyName = employee.familyName || parts.at(-1) || "";
  const fatherName = employee.fatherName || (parts.length > 2 ? parts[1] : "");
  const grandName = employee.grandName || (parts.length > 3 ? parts[2] : "");
  const nationality = employee.nationality || "سعودي";
  const contractStartDate = employee.contractStartDate || employee.joinDate || "";
  const workStartDate = employee.workStartDate || contractStartDate;
  const baseSalary = Number(employee.baseSalary ?? employee.salary ?? 0);
  const sequence = Number(employee.sequence) || index + 1;
  const passports = Array.isArray(employee.passports) && employee.passports.length
    ? employee.passports.map(createPassport)
    : (employee.passportNumber || employee.passportStartDate || employee.passportExpiryDate
      ? [createPassport(employee)]
      : []);
  return {
    ...employee,
    id: employee.id || `employee-${Date.now()}-${index}`,
    firstName,
    fatherName,
    grandName,
    familyName,
    name: [firstName, fatherName, grandName, familyName].filter(Boolean).join(" ") || employee.name || "موظف",
    nationalityType: employee.nationalityType || (nationality === "سعودي" ? "saudi" : "nonSaudi"),
    nationality,
    gender: employee.gender || "male",
    birthDate: employee.birthDate || "",
    identityNumber: normalizeNumerals(employee.identityNumber || "").replace(/\D/g, "").slice(0, 10),
    identityExpiryGregorian: employee.identityExpiryGregorian || "",
    identityExpiryHijri: employee.identityExpiryHijri || "",
    hijriCorrection: Number(employee.hijriCorrection || 0),
    identityAttachmentId: employee.identityAttachmentId || "",
    photoAttachmentId: employee.photoAttachmentId || "",
    legacyPhoto: employee.legacyPhoto || employee.photo || "",
    status: employee.status === "remote" ? "active" : (employee.status || "active"),
    department: employee.department || "",
    section: employee.section || "",
    directManager: employee.directManager || "",
    role: employee.role || "",
    contractType: employee.contractType || "unlimited",
    contractStartDate,
    workStartDate,
    joinDate: contractStartDate,
    contractMonths: Number(employee.contractMonths || 0),
    renewalOption: employee.renewalOption || "none",
    baseSalary,
    housingAllowance: Number(employee.housingAllowance || 0),
    transportAllowance: Number(employee.transportAllowance || 0),
    otherAllowances: Number(employee.otherAllowances || 0),
    insuranceEnabled: Boolean(employee.insuranceEnabled),
    phone: employee.phone || "",
    emergencyPhone: employee.emergencyPhone || "",
    email: employee.email || "",
    homeCountryPhone: employee.homeCountryPhone || "",
    passports,
    bankAccounts: Array.isArray(employee.bankAccounts) ? employee.bankAccounts.map(createBankAccount) : [],
    notes: Array.isArray(employee.notes) ? employee.notes : [],
    minutes: Array.isArray(employee.minutes) ? employee.minutes.map(createEmployeeMinuteRecord) : (Array.isArray(employee.disciplinaryMinutes) ? employee.disciplinaryMinutes.map(createEmployeeMinuteRecord) : []),
    warnings: Array.isArray(employee.warnings) ? employee.warnings : [],
    documents: Array.isArray(employee.documents) ? employee.documents.map(createDocument) : [],
    commissions: Array.isArray(employee.commissions) ? employee.commissions : [],
    commissionAccrualStartDate: employee.commissionAccrualStartDate || workStartDate,
    commissionPaused: Boolean(employee.commissionPaused),
    commissionPauseReason: employee.commissionPauseReason || "",
    commissionPausedByLeaveId: employee.commissionPausedByLeaveId || "",
    commissionPausedAt: employee.commissionPausedAt || "",
    signatureAttachmentId: employee.signatureAttachmentId || "",
    fingerprintAttachmentId: employee.fingerprintAttachmentId || "",
    consent: employee.consent || null,
    sequence,
    employeeNumber: buildEmployeeNumber(employee.identityNumber, employee.phone, sequence),
    color: employee.color || ["teal", "blue", "violet", "amber", "rose"][index % 5],
    attendance: employee.attendance ?? (employee.status === "active" ? "08:00" : null)
  };
}

function escapeHtml(value = "") {
  const element = document.createElement("div");
  element.textContent = String(value);
  return element.innerHTML;
}

function arabicNumber(value) {
  return Number(value || 0).toLocaleString("en-US");
}

function formatNumberEn(value, fractionDigits = 2) {
  return Number(value || 0).toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits
  });
}

function formatCurrencyEn(value) {
  return `${formatNumberEn(value, 2)} ر.س`;
}

function formatCurrency(value) {
  return `${Number(value || 0).toLocaleString("en-US")} ر.س`;
}

function formatDate(dateString) {
  if (!dateString) return "—";
  const date = parseDate(dateString);
  if (!date) return "—";
  return new Intl.DateTimeFormat("ar-SA-u-nu-latn", { day: "numeric", month: "short", year: "numeric" }).format(date);
}

function formatDateTime(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("ar-SA-u-nu-latn", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
}

function formatDateEn(value) {
  if (!value) return "—";
  const date = parseDate(value);
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).format(date);
}

function formatDateTimeEn(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function normalizeNumerals(value) {
  const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
  const easternDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(value || "")
    .replace(/[٠-٩]/g, (digit) => arabicDigits.indexOf(digit))
    .replace(/[۰-۹]/g, (digit) => easternDigits.indexOf(digit));
}

function todayAtNoon() {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  return date;
}

function parseDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatInputDate(date) {
  if (!date || Number.isNaN(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + Number(days || 0));
  return result;
}

function addMonths(date, months) {
  const result = new Date(date);
  const originalDay = result.getDate();
  result.setDate(1);
  result.setMonth(result.getMonth() + Number(months || 0));
  result.setDate(Math.min(originalDay, new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate()));
  return result;
}

function durationParts(from, to = todayAtNoon()) {
  if (!from || from > to) return null;
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

function formatDuration(parts, latin = false) {
  if (!parts) return "";
  const number = (value) => latin ? String(value) : arabicNumber(value);
  const output = [];
  if (parts.years) output.push(`${number(parts.years)} سنة`);
  if (parts.months) output.push(`${number(parts.months)} شهر`);
  if (parts.days || !output.length) output.push(`${number(parts.days)} يوم`);
  return output.join(" و");
}

function expiryStatus(value) {
  const target = parseDate(value);
  if (!target) return { text: "", className: "" };
  const today = todayAtNoon();
  const diffDays = Math.ceil((target - today) / 86400000);
  if (diffDays < 0) {
    return { text: `منتهية - منذ ${formatDuration(durationParts(target, today))}`, className: "expired" };
  }
  if (diffDays <= 30) {
    return { text: `⚠ سارية - متبقي ${formatDuration(durationParts(today, target))}`, className: "warning" };
  }
  return { text: `سارية - متبقي ${formatDuration(durationParts(today, target))}`, className: "valid" };
}

function calculateDays(from, to) {
  const start = parseDate(from);
  const end = parseDate(to);
  if (!start || !end) return 1;
  return Math.max(1, Math.round((end - start) / 86400000) + 1);
}

function financialDayDifference(startValue, endValue = formatInputDate(todayAtNoon())) {
  const start = parseDate(startValue);
  const end = parseDate(endValue);
  if (!start || !end || start > end) return 0;
  const startDay = Math.min(start.getDate(), 30);
  const endDay = Math.min(end.getDate(), 30);
  return Math.max(0,
    (end.getFullYear() - start.getFullYear()) * 360
    + (end.getMonth() - start.getMonth()) * 30
    + (endDay - startDay)
  );
}

function getHijriParts(date) {
  const parts = new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura", {
    year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(date);
  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value)
  };
}

function gregorianToHijri(value, correction = 0) {
  const date = parseDate(value);
  if (!date) return "";
  const adjusted = addDays(date, correction);
  const parts = getHijriParts(adjusted);
  return `${parts.year}-${String(parts.month).padStart(2, "0")}-${String(parts.day).padStart(2, "0")}`;
}

function hijriToGregorian(value) {
  const normalized = normalizeNumerals(value).replace(/[/.]/g, "-");
  const match = normalized.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!match) return "";
  const target = { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) };
  if (target.month < 1 || target.month > 12 || target.day < 1 || target.day > 30) return "";
  const approximateYear = Math.floor((target.year - 1) * 0.970224 + 622.5774);
  const start = new Date(approximateYear - 1, 0, 1, 12);
  const end = new Date(approximateYear + 1, 11, 31, 12);
  for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const parts = getHijriParts(cursor);
    if (parts.year === target.year && parts.month === target.month && parts.day === target.day) {
      return formatInputDate(cursor);
    }
  }
  return "";
}

function numberToWords(value) {
  const number = Math.max(0, Math.floor(Number(value || 0)));
  if (!number) return "صفر";
  const ones = ["", "واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة", "أحد عشر", "اثنا عشر", "ثلاثة عشر", "أربعة عشر", "خمسة عشر", "ستة عشر", "سبعة عشر", "ثمانية عشر", "تسعة عشر"];
  const tens = ["", "", "عشرون", "ثلاثون", "أربعون", "خمسون", "ستون", "سبعون", "ثمانون", "تسعون"];
  const hundreds = ["", "مائة", "مائتان", "ثلاثمائة", "أربعمائة", "خمسمائة", "ستمائة", "سبعمائة", "ثمانمائة", "تسعمائة"];
  const underThousand = (part) => {
    const words = [];
    const hundred = Math.floor(part / 100);
    const rest = part % 100;
    if (hundred) words.push(hundreds[hundred]);
    if (rest) {
      if (rest < 20) words.push(ones[rest]);
      else {
        const unit = rest % 10;
        const ten = Math.floor(rest / 10);
        words.push(unit ? `${ones[unit]} و${tens[ten]}` : tens[ten]);
      }
    }
    return words.join(" و");
  };
  const scale = (count, singular, dual, plural) => {
    if (count === 1) return singular;
    if (count === 2) return dual;
    if (count >= 3 && count <= 10) return `${underThousand(count)} ${plural}`;
    return `${underThousand(count)} ${singular}`;
  };
  const words = [];
  const millions = Math.floor(number / 1000000);
  const thousands = Math.floor((number % 1000000) / 1000);
  const remainder = number % 1000;
  if (millions) words.push(scale(millions, "مليون", "مليونان", "ملايين"));
  if (thousands) words.push(scale(thousands, "ألف", "ألفان", "آلاف"));
  if (remainder) words.push(underThousand(remainder));
  return words.join(" و");
}

function amountToWords(value) {
  const amount = Math.max(0, Number(value || 0));
  const riyals = Math.floor(amount);
  const halalas = Math.round((amount - riyals) * 100);
  let result = `${numberToWords(riyals)} ريال سعودي`;
  result += ` و${numberToWords(halalas)} هللة`;
  return `فقط ${result} لا غير`;
}

function nextEmployeeSequence() {
  return employees.reduce((maximum, employee) => Math.max(maximum, Number(employee.sequence) || 0), 0) + 1;
}

function buildEmployeeNumber(identityNumber, phone, sequence = 0) {
  const identity = normalizeNumerals(identityNumber).replace(/\D/g, "");
  const mobile = normalizeNumerals(phone).replace(/\D/g, "");
  return `${identity.slice(-2).padStart(2, "0")}-${mobile.slice(-2).padStart(2, "0")}`;
}

function ibanDigits(value) {
  return normalizeNumerals(value).toUpperCase().replace(/^SA/, "").replace(/\D/g, "").slice(0, 22);
}

function formatIban(value) {
  const digits = ibanDigits(value);
  return `SA${digits.slice(0, 2)}${digits.length > 2 ? ` ${digits.slice(2).match(/.{1,4}/g)?.join(" ") || ""}` : ""}`.trim();
}

function formatIbanBody(value) {
  const digits = ibanDigits(value);
  const firstPair = digits.slice(0, 2);
  const rest = digits.slice(2).match(/.{1,4}/g)?.join(" ") || "";
  return [firstPair, rest].filter(Boolean).join(" ");
}

function getInitials(name) {
  return String(name || "م").split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("");
}

function getEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

function employeeAvatar(employee) {
  if (employee.photoAttachmentId) {
    return `<div class="avatar avatar-photo"><img data-attachment-image="${employee.photoAttachmentId}" alt="" /></div>`;
  }
  if (employee.legacyPhoto) {
    return `<div class="avatar avatar-photo"><img src="${employee.legacyPhoto}" alt="" /></div>`;
  }
  return `<div class="avatar avatar-${employee.color || "teal"}">${getInitials(employee.name)}</div>`;
}

async function hydrateAttachmentImages(root = document) {
  const images = [...root.querySelectorAll("img[data-attachment-image]")];
  await Promise.all(images.map(async (image) => {
    const url = await attachmentUrl(image.dataset.attachmentImage);
    if (url) image.src = url;
  }));
}

function employeeCell(employee) {
  return `<div class="employee-cell">${employeeAvatar(employee)}<div><button type="button" class="employee-name-link" data-edit-employee="${employee.id}">${escapeHtml(employee.name)}</button><span>${escapeHtml(employee.email || employee.phone || "")}</span></div></div>`;
}

function statusBadge(status) {
  const meta = statusMeta[status] || statusMeta.active;
  return `<span class="status-badge ${meta.className}">${meta.label}</span>`;
}

function leaveStatusBadge(status) {
  const meta = leaveStatusMeta[status] || leaveStatusMeta.pending;
  return `<span class="status-badge ${meta.className}">${meta.label}</span>`;
}

function employeeService(employee) {
  const start = parseDate(employee.contractStartDate || employee.joinDate);
  return start ? formatDuration(durationParts(start)) : "غير محدد";
}

function employeeTotalSalary(employee) {
  const gross = Number(employee.baseSalary || 0)
    + Number(employee.housingAllowance || 0)
    + Number(employee.transportAllowance || 0)
    + Number(employee.otherAllowances || 0);
  const deduction = employee.insuranceEnabled ? gross * 0.0995 : 0;
  return gross - deduction;
}


function renderPermissionsPreview() {
  const container = document.querySelector("#permissionsPreviewGrid");
  if (!container) return;
  const modules = [
    ["dashboard", "الصفحة الرئيسية"], ["employees", "الموظفون"], ["attendance", "الحضور والانصراف"],
    ["leaves", "الإجازات والسفر"], ["payroll", "الرواتب"], ["departments", "الأقسام"],
    ["settings", "الإعدادات"], ["minutes", "الملاحظات والمحاضر"], ["reports", "التقارير والتصدير"]
  ];
  container.innerHTML = modules.map(([key, label]) => `
    <div class="permission-preview-card">
      <div><strong>${label}</strong><span>صلاحية مستقلة</span></div>
      <span class="status-badge status-pending">مؤجل</span>
    </div>
  `).join("");
}



function normalizeMinuteField(field = {}, index = 0) {
  const type = ["text", "date", "time"].includes(field.type) ? field.type : "text";
  return {
    id: field.id || `field-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
    label: String(field.label || `الخانة ${index + 1}`).trim() || `الخانة ${index + 1}`,
    type
  };
}

function normalizeMinuteTemplate(template = {}, index = 0) {
  const fields = Array.isArray(template.fields) && template.fields.length ? template.fields.map(normalizeMinuteField) : [normalizeMinuteField({ label: "تفاصيل المحضر", type: "text" }, 0)];
  return {
    id: template.id || `minute-template-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
    name: String(template.name || `نوع محضر ${index + 1}`).trim() || `نوع محضر ${index + 1}`,
    system: Boolean(template.system),
    fields
  };
}

function normalizeMinuteTemplateSettings(value = DEFAULT_MINUTE_TEMPLATE_SETTINGS) {
  const source = value && typeof value === "object" ? value : DEFAULT_MINUTE_TEMPLATE_SETTINGS;
  const templates = Array.isArray(source.templates) && source.templates.length ? source.templates.map(normalizeMinuteTemplate) : DEFAULT_MINUTE_TEMPLATE_SETTINGS.templates.map(normalizeMinuteTemplate);
  const hasAbsence = templates.some((template) => template.name === "محضر غياب");
  if (!hasAbsence) templates.unshift(normalizeMinuteTemplate(DEFAULT_MINUTE_TEMPLATE_SETTINGS.templates[0], 0));
  return { templates };
}

function getMinuteTemplates() {
  minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
  return minuteTemplateSettings.templates;
}

function getMinuteTemplate(idOrName) {
  const templates = getMinuteTemplates();
  return templates.find((template) => template.id === idOrName) || templates.find((template) => template.name === idOrName) || templates[0];
}

function minuteFieldValueLabel(field, value) {
  if (!value) return "";
  if (field?.type === "date") return formatDate(value);
  return String(value);
}

function minuteRecordSummary(record = {}) {
  if (record.text) return record.text;
  const template = getMinuteTemplate(record.templateId || record.type);
  const values = record.fieldValues || {};
  const parts = (template?.fields || []).map((field) => {
    const value = minuteFieldValueLabel(field, values[field.id]);
    return value ? `${field.label}: ${value}` : "";
  }).filter(Boolean);
  return parts.join("، ") || "—";
}

function minuteRecordPenalty(record = {}) {
  if (record.penalty) return record.penalty;
  const template = getMinuteTemplate(record.templateId || record.type);
  const field = (template?.fields || []).find((item) => /جزاء|عقوبة|حسم/.test(item.label));
  const value = field ? record.fieldValues?.[field.id] : "";
  return value || "لم يحدد";
}

function renderMinuteTemplateSettings() {
  minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
  const summary = document.querySelector("#minuteSettingsSummary");
  if (summary) {
    const fieldCount = minuteTemplateSettings.templates.reduce((sum, template) => sum + template.fields.length, 0);
    summary.innerHTML = `<div><span>أنواع المحاضر</span><strong>${arabicNumber(minuteTemplateSettings.templates.length)}</strong></div><div><span>الخانات المعرفة</span><strong>${arabicNumber(fieldCount)}</strong></div>`;
  }
  const list = document.querySelector("#minuteTemplateList");
  if (!list) return;
  list.innerHTML = minuteTemplateSettings.templates.map((template, templateIndex) => `
    <div class="minute-template-card" data-minute-template-card="${escapeHtml(template.id)}">
      <div class="minute-template-head">
        <label><span>اسم نوع المحضر</span><input value="${escapeHtml(template.name)}" data-minute-template-name="${escapeHtml(template.id)}" ${template.system ? "readonly" : ""} /></label>
        <button type="button" class="secondary-btn" data-add-minute-field="${escapeHtml(template.id)}"><span data-icon="plus"></span>إضافة خانة</button>
        <button type="button" class="quick-view-btn" data-remove-minute-template="${escapeHtml(template.id)}" ${template.system ? "disabled" : ""} title="حذف نوع المحضر">${iconSvg("trash")}</button>
      </div>
      <div class="minute-field-list">
        ${template.fields.map((field) => `
          <div class="minute-field-row" data-minute-field-row="${escapeHtml(field.id)}">
            <label><span>اسم الخانة</span><input value="${escapeHtml(field.label)}" data-minute-field-label="${escapeHtml(template.id)}:${escapeHtml(field.id)}" /></label>
            <label><span>نوع الخانة</span><select data-minute-field-type="${escapeHtml(template.id)}:${escapeHtml(field.id)}"><option value="text" ${field.type === "text" ? "selected" : ""}>نصية</option><option value="date" ${field.type === "date" ? "selected" : ""}>تاريخ</option><option value="time" ${field.type === "time" ? "selected" : ""}>وقت</option></select></label>
            <button type="button" class="quick-view-btn" data-remove-minute-field="${escapeHtml(template.id)}:${escapeHtml(field.id)}" ${template.fields.length === 1 ? "disabled" : ""} title="حذف الخانة">${iconSvg("trash")}</button>
          </div>`).join("")}
      </div>
    </div>`).join("");
  hydrateIcons(list);
}

function updateMinuteTemplateFromInputs() {
  const settings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
  settings.templates.forEach((template) => {
    const nameInput = document.querySelector(`[data-minute-template-name="${CSS.escape(template.id)}"]`);
    if (nameInput && !template.system) template.name = nameInput.value.trim() || template.name;
    template.fields.forEach((field) => {
      const key = `${template.id}:${field.id}`;
      const labelInput = document.querySelector(`[data-minute-field-label="${CSS.escape(key)}"]`);
      const typeInput = document.querySelector(`[data-minute-field-type="${CSS.escape(key)}"]`);
      if (labelInput) field.label = labelInput.value.trim() || field.label;
      if (typeInput) field.type = ["text", "date", "time"].includes(typeInput.value) ? typeInput.value : "text";
    });
  });
  minuteTemplateSettings = normalizeMinuteTemplateSettings(settings);
}

function addMinuteTemplate() {
  updateMinuteTemplateFromInputs();
  minuteTemplateSettings.templates.push(normalizeMinuteTemplate({ name: "نوع محضر جديد", fields: [{ label: "تفاصيل المحضر", type: "text" }] }, minuteTemplateSettings.templates.length));
  renderMinuteTemplateSettings();
  populateFormOptions();
}

function addMinuteField(templateId) {
  updateMinuteTemplateFromInputs();
  const template = minuteTemplateSettings.templates.find((item) => item.id === templateId);
  if (!template) return;
  template.fields.push(normalizeMinuteField({ label: "خانة جديدة", type: "text" }, template.fields.length));
  renderMinuteTemplateSettings();
}

function removeMinuteTemplate(templateId) {
  updateMinuteTemplateFromInputs();
  const template = minuteTemplateSettings.templates.find((item) => item.id === templateId);
  if (template?.system) return;
  minuteTemplateSettings.templates = minuteTemplateSettings.templates.filter((item) => item.id !== templateId);
  renderMinuteTemplateSettings();
  populateFormOptions();
}

function removeMinuteField(templateId, fieldId) {
  updateMinuteTemplateFromInputs();
  const template = minuteTemplateSettings.templates.find((item) => item.id === templateId);
  if (!template || template.fields.length <= 1) return;
  template.fields = template.fields.filter((item) => item.id !== fieldId);
  renderMinuteTemplateSettings();
}

function normalizeAbsencePolicySettings(value = DEFAULT_ABSENCE_POLICY_SETTINGS) {
  const fallback = structuredClone(DEFAULT_ABSENCE_POLICY_SETTINGS);
  const settings = value && typeof value === "object" ? structuredClone(value) : fallback;
  const safeNumber = (number, fallbackValue) => {
    const parsed = Number(number);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallbackValue;
  };
  const activePolicy = settings.activePolicy || (settings.establishmentPolicyEnabled === false ? "labor" : "establishment");
  return {
    activePolicy: activePolicy === "labor" ? "labor" : "establishment",
    establishmentPolicyEnabled: activePolicy !== "labor",
    firstPeriodDeductionDays: safeNumber(settings.firstPeriodDeductionDays, fallback.firstPeriodDeductionDays),
    secondPeriodDeductionDays: safeNumber(settings.secondPeriodDeductionDays, fallback.secondPeriodDeductionDays),
    fullDayDeductionDays: safeNumber(settings.fullDayDeductionDays, fallback.fullDayDeductionDays),
    laborRules: Array.isArray(settings.laborRules) && settings.laborRules.length ? settings.laborRules : fallback.laborRules
  };
}

function isEstablishmentAbsencePolicyActive() {
  return normalizeAbsencePolicySettings(absencePolicySettings).activePolicy === "establishment";
}

function activeAbsencePolicyLabel() {
  return isEstablishmentAbsencePolicyActive() ? "سياسة المنشأة" : "قاعدة مكتب العمل";
}

function absencePeriodMeta(value = "fullDay") {
  const map = {
    fullDay: { label: "كامل اليوم", key: "fullDayDeductionDays" },
    first: { label: "الفترة الأولى", key: "firstPeriodDeductionDays" },
    second: { label: "الفترة الثانية", key: "secondPeriodDeductionDays" }
  };
  return map[value] || map.fullDay;
}

function calculateAbsenceDeductionDays(type = "unexcused", periodSegment = "fullDay") {
  if (type !== "unexcused") return 0;
  const settings = normalizeAbsencePolicySettings(absencePolicySettings);
  if (settings.activePolicy !== "establishment") return calculateDays(arguments[2]?.from, arguments[2]?.to);
  const meta = absencePeriodMeta(periodSegment);
  return Number(settings[meta.key] ?? settings.fullDayDeductionDays ?? 1) || 0;
}

function contractYearRangeForEmployee(employee, referenceDateString) {
  const reference = parseDate(referenceDateString) || todayAtNoon();
  const startBase = parseDate(employee?.workStartDate || employee?.contractStartDate || employee?.joinDate) || new Date(reference.getFullYear(), 0, 1, 12);
  let start = new Date(reference.getFullYear(), startBase.getMonth(), startBase.getDate(), 12);
  if (start > reference) start = new Date(reference.getFullYear() - 1, startBase.getMonth(), startBase.getDate(), 12);
  const end = addDays(new Date(start.getFullYear() + 1, start.getMonth(), start.getDate(), 12), -1);
  return { start: formatInputDate(start), end: formatInputDate(end) };
}

function absenceRecordDays(record) {
  return calculateDays(record?.from, record?.to || record?.from);
}

function unexcusedAbsenceDaysInContractYear(employeeId, referenceDateString, extraRecord = null) {
  const employee = getEmployee(employeeId);
  const range = contractYearRangeForEmployee(employee, referenceDateString);
  const rows = attendanceExceptions.filter((record) => record.employeeId === employeeId && record.type === "unexcused" && dateRangesOverlap(record.from, record.to, range.start, range.end));
  if (extraRecord) rows.push(extraRecord);
  return rows.reduce((sum, record) => sum + absenceRecordDays(record), 0);
}

function laborAbsencePenalty(record, includeCurrent = true) {
  if (record?.type !== "unexcused") return { days: 0, policy: "قاعدة مكتب العمل", text: "لا يوجد جزاء آلي لأن الغياب بعذر أو بإذن.", label: "لا يوجد خصم آلي" };
  const employee = getEmployee(record.employeeId);
  const currentDays = absenceRecordDays(record);
  const totalDays = unexcusedAbsenceDaysInContractYear(record.employeeId, record.from, includeCurrent ? record : null);
  let text = `حسم أجر مدة الغياب (${formatDeductionDays(currentDays)}) حسب قاعدة مكتب العمل.`;
  if (currentDays > 15) {
    text = "انقطاع متصل أكثر من 15 يومًا: قابل للفصل وفق المادة 80، مع ضرورة وجود إنذار كتابي بعد 10 أيام غياب.";
  } else if (totalDays > 30) {
    text = "غياب متقطع تجاوز 30 يومًا خلال السنة العقدية: قابل للفصل وفق المادة 80، مع ضرورة وجود إنذار كتابي بعد 20 يومًا غياب.";
  } else if (currentDays >= 11) {
    text = `غياب متصل من 11 إلى 14 يومًا: حسم أجر مدة الغياب (${formatDeductionDays(currentDays)}) مع جزاء تصاعدي وإنذار بالفصل حسب التكرار.`;
  } else if (currentDays >= 7) {
    text = `غياب متصل من 7 إلى 10 أيام: حسم أجر مدة الغياب (${formatDeductionDays(currentDays)}) مع جزاء تصاعدي حسب التكرار.`;
  } else if (currentDays >= 2) {
    text = `غياب متصل من يومين إلى 6 أيام: حسم أجر مدة الغياب (${formatDeductionDays(currentDays)}) مع جزاء تصاعدي حسب التكرار.`;
  } else {
    const previousDays = Math.max(0, totalDays - currentDays);
    const occurrence = previousDays + 1;
    const stage = occurrence <= 1 ? "أول مرة: 50% من الأجر اليومي" : occurrence === 2 ? "ثاني مرة: يوم واحد" : occurrence === 3 ? "ثالث مرة: يومان" : "رابع مرة فأكثر: ثلاثة أيام";
    text = `غياب يوم واحد خلال السنة العقدية - ${stage}، مع حسم أجر يوم الغياب.`;
  }
  return { days: currentDays, policy: "قاعدة مكتب العمل", text, label: formatDeductionDays(currentDays), totalDays, employee };
}

function absencePenaltyDetails(record) {
  const settings = normalizeAbsencePolicySettings(absencePolicySettings);
  if (record?.type !== "unexcused") {
    return { policy: activeAbsencePolicyLabel(), deductionDays: 0, label: "لا يوجد خصم آلي", text: "لا يوجد جزاء آلي لأن الغياب بعذر أو بإذن.", showPeriod: settings.activePolicy === "establishment" };
  }
  if (settings.activePolicy === "labor") return { ...laborAbsencePenalty(record, !attendanceExceptions.some((item) => item.id === record.id)), showPeriod: false };
  const segment = absencePeriodMeta(record.periodSegment || "fullDay");
  const configuredDays = Number(settings[segment.key] ?? settings.fullDayDeductionDays ?? 1) || 0;
  const storedDays = Number(record?.deductionDays);
  const deductionDays = Number.isFinite(storedDays) && storedDays > 0 ? storedDays : configuredDays;
  return {
    policy: "سياسة المنشأة",
    deductionDays,
    label: formatDeductionDays(deductionDays),
    text: `${segment.label}: ${formatDeductionDays(deductionDays)} حسب سياسة المنشأة.` ,
    showPeriod: true,
    periodLabel: segment.label
  };
}

function formatDeductionDays(days) {
  const value = Number(days) || 0;
  if (!value) return "لا يوجد خصم آلي";
  if (value === 1) return "يوم واحد";
  if (value === 2) return "يومان";
  return `${arabicNumber(value)} أيام`;
}

function employeeGrossSalary(employee) {
  return Number(employee?.baseSalary || 0) + Number(employee?.housingAllowance || 0) + Number(employee?.transportAllowance || 0) + Number(employee?.otherAllowances || 0);
}

function employeeDailyWage(employee) {
  return employeeGrossSalary(employee) / 30;
}

function absenceDeductionAmount(record) {
  const employee = getEmployee(record?.employeeId);
  if (!employee || record?.type !== "unexcused") return 0;
  const details = absencePenaltyDetails(record);
  const storedDays = Number(record?.deductionDays);
  const detailDays = Number(details.deductionDays ?? details.days ?? 0) || 0;
  const deductionDays = Number.isFinite(storedDays) && storedDays > 0 ? storedDays : detailDays;
  return employeeDailyWage(employee) * deductionDays;
}

function absenceDeductionForEmployeeInMonth(employeeId, monthDate = new Date()) {
  const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1, 12);
  const end = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0, 12);
  const startString = formatInputDate(start);
  const endString = formatInputDate(end);
  return attendanceExceptions
    .filter((record) => record.employeeId === employeeId && record.type === "unexcused" && dateRangesOverlap(record.from, record.to, startString, endString))
    .reduce((sum, record) => sum + absenceDeductionAmount(record), 0);
}

function shiftOptionsHtml(selectedId = "") {
  const settings = normalizeWorkSettings(workSettings);
  return settings.shifts.map((shift) => `<option value="${escapeHtml(shift.id)}" ${shift.id === selectedId ? "selected" : ""}>${escapeHtml(shift.name)} (${shift.start} - ${shift.end})</option>`).join("");
}

function dayWorkMinutes(day) {
  if (!day?.enabled) return 0;
  const shifts = Array.isArray(day.shifts) ? day.shifts : [];
  return shifts.reduce((sum, shift) => sum + minutesBetween(shift.start, shift.end), 0);
}

function renderWorkSettingsSummary() {
  const container = document.querySelector("#workSettingsSummary");
  if (!container) return;
  const settings = normalizeWorkSettings(workSettings);
  const enabledDays = Object.values(settings.days).filter((day) => day.enabled);
  const weeklyMinutes = enabledDays.reduce((sum, day) => sum + dayWorkMinutes(day), 0);
  const assignedShiftCount = enabledDays.reduce((sum, day) => sum + (day.shifts?.length || 0), 0);
  container.innerHTML = `
    <div><span>أيام العمل</span><strong>${arabicNumber(enabledDays.length)}</strong></div>
    <div><span>الفترات المعرفة</span><strong>${arabicNumber(settings.shifts.length)}</strong></div>
    <div><span>الفترات الأسبوعية</span><strong>${arabicNumber(assignedShiftCount)}</strong></div>
    <div><span>إجمالي ساعات الأسبوع</span><strong>${formatWorkMinutes(weeklyMinutes)}</strong></div>
  `;
}

function renderShiftList() {
  const container = document.querySelector("#shiftList");
  if (!container) return;
  const settings = normalizeWorkSettings(workSettings);
  container.innerHTML = settings.shifts.map((shift, index) => `
    <div class="shift-row" data-shift-row="${escapeHtml(shift.id)}">
      <label><span>اسم الفترة</span><input data-shift-name="${escapeHtml(shift.id)}" value="${escapeHtml(shift.name)}" /></label>
      <label><span>بداية الفترة</span><input type="time" data-shift-start="${escapeHtml(shift.id)}" value="${shift.start}" /></label>
      <label><span>نهاية الفترة</span><input type="time" data-shift-end="${escapeHtml(shift.id)}" value="${shift.end}" /></label>
      <div class="shift-row-hours"><span>ساعات الفترة</span><strong>${formatWorkMinutes(minutesBetween(shift.start, shift.end))}</strong></div>
      <button type="button" class="quick-view-btn" data-remove-shift="${escapeHtml(shift.id)}" ${settings.shifts.length === 1 ? "disabled" : ""} title="حذف الفترة">${iconSvg("trash")}</button>
    </div>
  `).join("");
}

function workdayShiftLineHtml(dayIndex, day, line, lineIndex) {
  const selectedId = line.shiftId;
  const shiftCount = Array.isArray(day?.shifts) ? day.shifts.length : 0;
  return `
    <div class="workday-shift-line" data-workday-shift-line="${dayIndex}" data-workday-shift-index="${lineIndex}">
      <label><span>الفترة</span><select data-workday-shift="${dayIndex}" data-shift-index="${lineIndex}">${shiftOptionsHtml(selectedId)}</select></label>
      <label><span>بداية العمل</span><input type="time" data-workday-start="${dayIndex}" data-shift-index="${lineIndex}" value="${line.start}" /></label>
      <label><span>نهاية العمل</span><input type="time" data-workday-end="${dayIndex}" data-shift-index="${lineIndex}" value="${line.end}" /></label>
      <div class="workday-hours"><span>ساعات الفترة</span><strong>${formatWorkMinutes(minutesBetween(line.start, line.end))}</strong></div>
      <button type="button" class="quick-view-btn" data-remove-day-shift="${dayIndex}" data-shift-index="${lineIndex}" ${shiftCount <= 1 ? "disabled" : ""} title="حذف فترة اليوم">${iconSvg("trash")}</button>
    </div>
  `;
}

function renderWorkdayList() {
  const container = document.querySelector("#workdayList");
  if (!container) return;
  const settings = normalizeWorkSettings(workSettings);
  const bulk = document.querySelector("#bulkShiftSelect");
  if (bulk) bulk.innerHTML = shiftOptionsHtml(settings.shifts[0]?.id);
  container.innerHTML = DAY_NAMES.map((name, index) => {
    const day = settings.days[index];
    const totalMinutes = dayWorkMinutes(day);
    return `
      <div class="workday-row ${day.enabled ? "is-enabled" : "is-disabled"}" data-workday="${index}">
        <div class="workday-row-head">
          <label class="workday-enable"><input type="checkbox" data-workday-enabled="${index}" ${day.enabled ? "checked" : ""} /><span>${name}</span></label>
          <div class="workday-hours workday-total-hours"><span>إجمالي ساعات اليوم</span><strong>${day.enabled ? formatWorkMinutes(totalMinutes) : "إجازة"}</strong></div>
          <button type="button" class="secondary-btn small-btn" data-add-day-shift="${index}"><span data-icon="plus"></span>إضافة فترة لليوم</button>
        </div>
        <div class="workday-shifts">
          ${day.shifts.map((line, lineIndex) => workdayShiftLineHtml(index, day, line, lineIndex)).join("")}
        </div>
      </div>
    `;
  }).join("");
}


function renderAbsencePolicySettings() {
  absencePolicySettings = normalizeAbsencePolicySettings(absencePolicySettings);
  const settings = absencePolicySettings;
  document.querySelectorAll('[data-absence-policy="activePolicy"]').forEach((input) => { input.checked = input.value === settings.activePolicy; });
  const firstInput = document.querySelector('[data-absence-policy="firstPeriodDeductionDays"]');
  if (firstInput) firstInput.value = settings.firstPeriodDeductionDays;
  const secondInput = document.querySelector('[data-absence-policy="secondPeriodDeductionDays"]');
  if (secondInput) secondInput.value = settings.secondPeriodDeductionDays;
  const fullInput = document.querySelector('[data-absence-policy="fullDayDeductionDays"]');
  if (fullInput) fullInput.value = settings.fullDayDeductionDays;
  const summary = document.querySelector("#absencePolicySummary");
  if (summary) {
    summary.innerHTML = `
      <div><span>القاعدة المفعلة</span><strong>${settings.activePolicy === "establishment" ? "سياسة المنشأة" : "قاعدة مكتب العمل"}</strong></div>
      <div><span>غياب الفترة الأولى</span><strong>${formatDeductionDays(settings.firstPeriodDeductionDays)}</strong></div>
      <div><span>غياب الفترة الثانية</span><strong>${formatDeductionDays(settings.secondPeriodDeductionDays)}</strong></div>
      <div><span>غياب كامل اليوم</span><strong>${formatDeductionDays(settings.fullDayDeductionDays)}</strong></div>
    `;
  }
  const rules = document.querySelector("#absenceLaborRulesList");
  if (rules) {
    rules.innerHTML = settings.laborRules.map((rule) => `
      <div class="absence-rule-row">
        <div class="absence-rule-main"><strong>${escapeHtml(rule.title)}</strong><p>${escapeHtml(rule.detail)}</p></div>
        <div class="absence-rule-penalty"><span>الجزاء</span><b>${escapeHtml(rule.penalty || rule.detail || "—")}</b></div>
      </div>
    `).join("");
  }
  const establishmentCard = document.querySelector("#establishmentPolicyCard");
  const laborCard = document.querySelector("#laborPolicyCard");
  if (establishmentCard) establishmentCard.classList.toggle("is-active", settings.activePolicy === "establishment");
  if (laborCard) laborCard.classList.toggle("is-active", settings.activePolicy === "labor");
  updateAbsencePeriodVisibility();
}

function updateAbsencePolicyFromForm() {
  const settings = normalizeAbsencePolicySettings(absencePolicySettings);
  const policyInput = document.querySelector('[data-absence-policy="activePolicy"]:checked');
  const firstInput = document.querySelector('[data-absence-policy="firstPeriodDeductionDays"]');
  const secondInput = document.querySelector('[data-absence-policy="secondPeriodDeductionDays"]');
  const fullInput = document.querySelector('[data-absence-policy="fullDayDeductionDays"]');
  settings.activePolicy = policyInput?.value === "labor" ? "labor" : "establishment";
  settings.establishmentPolicyEnabled = settings.activePolicy === "establishment";
  settings.firstPeriodDeductionDays = Math.max(0, Number(firstInput?.value || settings.firstPeriodDeductionDays));
  settings.secondPeriodDeductionDays = Math.max(0, Number(secondInput?.value || settings.secondPeriodDeductionDays));
  settings.fullDayDeductionDays = Math.max(0, Number(fullInput?.value || settings.fullDayDeductionDays));
  absencePolicySettings = normalizeAbsencePolicySettings(settings);
  renderAbsencePolicySettings();
}

function updateAbsencePeriodVisibility() {
  const field = document.querySelector("#absencePeriodSegmentField");
  const input = document.querySelector('#absenceForm [name="periodSegment"]');
  const show = isEstablishmentAbsencePolicyActive();
  if (field) field.hidden = !show;
  if (input) {
    input.disabled = !show;
    if (!show) input.value = "fullDay";
  }
}

function renderWorkSettings() {
  workSettings = normalizeWorkSettings(workSettings);
  renderWorkSettingsSummary();
  renderShiftList();
  renderWorkdayList();
  renderAbsencePolicySettings();
  hydrateIcons(document.querySelector("#settingsView"));
}

function renderSettings() {
  renderPermissionsPreview();
  renderWorkSettings();
  renderMinuteTemplateSettings();
}

function switchSettingsSection(section) {
  document.querySelectorAll("#settingsNav button").forEach((button) => button.classList.toggle("active", button.dataset.settingsSection === section));
  document.querySelectorAll("[data-settings-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.settingsPanel === section));
}

function updateShiftFromForm(id) {
  const settings = normalizeWorkSettings(workSettings);
  const shift = settings.shifts.find((item) => item.id === id);
  if (!shift) return;
  shift.name = document.querySelector(`[data-shift-name="${CSS.escape(id)}"]`)?.value.trim() || shift.name;
  shift.start = document.querySelector(`[data-shift-start="${CSS.escape(id)}"]`)?.value || shift.start;
  shift.end = document.querySelector(`[data-shift-end="${CSS.escape(id)}"]`)?.value || shift.end;
  Object.values(settings.days).forEach((day) => {
    day.shifts.forEach((line) => {
      if (line.shiftId === id) {
        line.start = shift.start;
        line.end = shift.end;
      }
    });
  });
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettings();
}

function updateWorkdayFromForm(index) {
  const settings = normalizeWorkSettings(workSettings);
  const day = settings.days[index];
  if (!day) return;
  day.enabled = Boolean(document.querySelector(`[data-workday-enabled="${index}"]`)?.checked);
  const lines = [...document.querySelectorAll(`[data-workday-shift-line="${index}"]`)];
  const updated = lines.map((row, lineIndex) => {
    const select = row.querySelector(`[data-workday-shift][data-shift-index="${lineIndex}"]`);
    const selectedShift = settings.shifts.find((shift) => shift.id === select?.value) || settings.shifts[0];
    return {
      shiftId: selectedShift.id,
      start: row.querySelector(`[data-workday-start][data-shift-index="${lineIndex}"]`)?.value || selectedShift.start,
      end: row.querySelector(`[data-workday-end][data-shift-index="${lineIndex}"]`)?.value || selectedShift.end
    };
  }).filter(Boolean);
  day.shifts = updated.length ? updated : [{ shiftId: settings.shifts[0].id, start: settings.shifts[0].start, end: settings.shifts[0].end }];
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettingsSummary();
  renderWorkdayList();
}

function addWorkShift() {
  const settings = normalizeWorkSettings(workSettings);
  const id = `shift-${Date.now()}`;
  settings.shifts.push({ id, name: `فترة ${arabicNumber(settings.shifts.length + 1)}`, start: OFFICIAL_CHECK_IN, end: OFFICIAL_CHECK_OUT });
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettings();
}

function removeWorkShift(id) {
  const settings = normalizeWorkSettings(workSettings);
  if (settings.shifts.length <= 1) return;
  settings.shifts = settings.shifts.filter((shift) => shift.id !== id);
  const fallback = settings.shifts[0];
  Object.values(settings.days).forEach((day) => {
    day.shifts = day.shifts.map((line) => line.shiftId === id ? { shiftId: fallback.id, start: fallback.start, end: fallback.end } : line);
  });
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettings();
}

function addShiftToDay(index, shiftId = null) {
  const settings = normalizeWorkSettings(workSettings);
  const day = settings.days[index];
  if (!day) return;
  const shift = settings.shifts.find((item) => item.id === shiftId) || settings.shifts[0];
  day.enabled = true;
  day.shifts.push({ shiftId: shift.id, start: shift.start, end: shift.end });
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettings();
}

function removeShiftFromDay(index, lineIndex) {
  const settings = normalizeWorkSettings(workSettings);
  const day = settings.days[index];
  if (!day || day.shifts.length <= 1) return;
  day.shifts.splice(Number(lineIndex), 1);
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettings();
}

function applySelectedShiftToWorkdays() {
  const settings = normalizeWorkSettings(workSettings);
  const selectedId = document.querySelector("#bulkShiftSelect")?.value || settings.shifts[0]?.id;
  const shift = settings.shifts.find((item) => item.id === selectedId) || settings.shifts[0];
  Object.values(settings.days).forEach((day) => {
    if (day.enabled) {
      const existing = day.shifts.find((line) => line.shiftId === shift.id);
      if (existing) {
        existing.start = shift.start;
        existing.end = shift.end;
      } else {
        day.shifts.push({ shiftId: shift.id, start: shift.start, end: shift.end });
      }
    }
  });
  workSettings = normalizeWorkSettings(settings);
  renderWorkSettings();
  showToast("تمت إضافة الفترة المحددة إلى أيام العمل المفعلة");
}

function resetWorkSettings() {
  workSettings = normalizeWorkSettings(DEFAULT_WORK_SETTINGS);
  absencePolicySettings = normalizeAbsencePolicySettings(DEFAULT_ABSENCE_POLICY_SETTINGS);
  saveLocalMeta();
  renderWorkSettings();
  renderAttendance();
  renderDashboard();
  showToast("تمت استعادة إعداد العمل الافتراضي");
}

function renderAll() {
  renderDashboard();
  renderEmployees();
  renderAttendance();
  renderLeaves();
  renderPayroll();
  renderDepartments();
  renderSettings();
  ensureUsersManagementView();
  if (document.querySelector("#usersView")?.classList.contains("active")) renderUsersManagement();
  populateFormOptions();
  hydrateIcons();
  hydrateAttachmentImages();
}

function renderDashboard() {
  const todaySummary = attendanceSummaryForDate(formatInputDate(todayAtNoon()));
  const payroll = employees.reduce((sum, employee) => sum + employeeTotalSalary(employee), 0);
  const pendingCount = leaves.filter((leave) => leave.status === "pending").length;
  document.querySelector("#totalEmployees").textContent = arabicNumber(employees.length);
  document.querySelector("#presentEmployees").textContent = arabicNumber(todaySummary.present);
  document.querySelector("#attendanceRate").textContent = todaySummary.isWorkday ? `${arabicNumber(employees.length ? Math.round(todaySummary.present / employees.length * 100) : 0)}٪ من الفريق` : "اليوم إجازة أسبوعية";
  document.querySelector("#pendingLeaves").textContent = arabicNumber(pendingCount);
  document.querySelector("#monthlyPayroll").textContent = formatCurrency(payroll);
  document.querySelector("#sidebarEmployeeCount").textContent = arabicNumber(employees.length);
  const recent = [...employees].sort((a, b) => (b.contractStartDate || "").localeCompare(a.contractStartDate || "")).slice(0, 5);
  document.querySelector("#recentEmployeesBody").innerHTML = recent.length
    ? recent.map((employee) => `<tr><td>${employeeCell(employee)}</td><td>${escapeHtml(employee.department)}</td><td>${escapeHtml(employee.role)}</td><td>${formatDate(employee.contractStartDate)}</td><td>${statusBadge(employee.status)}</td></tr>`).join("")
    : '<tr><td colspan="5"><div class="empty-state"><strong>لا يوجد موظفون بعد</strong></div></td></tr>';
  const pending = leaves.filter((leave) => leave.status === "pending").slice(0, 3);
  document.querySelector("#leavePreviewList").innerHTML = pending.length
    ? pending.map((leave) => {
      const employee = getEmployee(leave.employeeId);
      if (!employee) return "";
      return `<div class="leave-preview-item">${employeeAvatar(employee)}<div class="leave-preview-info"><button type="button" class="employee-name-link" data-edit-employee="${employee.id}">${escapeHtml(employee.name)}</button><span>${escapeHtml(leave.type)} · ${arabicNumber(leave.days)} أيام</span></div><div class="mini-actions"><button data-leave-action="approved" data-leave-id="${leave.id}" title="موافقة">${iconSvg("check")}</button><button data-leave-action="rejected" data-leave-id="${leave.id}" title="رفض">${iconSvg("x")}</button></div></div>`;
    }).join("")
    : '<div class="empty-state"><strong>لا توجد طلبات معلقة</strong></div>';
}

function filteredEmployees() {
  const search = document.querySelector("#employeeSearch").value.trim().toLowerCase();
  const department = document.querySelector("#departmentFilter").value;
  const status = document.querySelector("#statusFilter").value;
  return employees.filter((employee) => {
    const text = `${employee.employeeNumber} ${employee.name} ${employee.nationality} ${employee.department} ${employee.section || ""} ${employee.role} ${employee.phone}`.toLowerCase();
    return (!search || text.includes(search))
      && (department === "all" || employee.department === department)
      && (status === "all" || employee.status === status);
  });
}

function renderEmployees() {
  const filtered = filteredEmployees();
  const body = document.querySelector("#employeesTableBody");
  body.innerHTML = filtered.length
    ? filtered.map((employee) => `<tr>
      <td><div class="employee-number-cell"><strong>${escapeHtml(employee.employeeNumber)}</strong><small>${escapeHtml(employeeService(employee))}</small></div></td>
      <td>${employeeCell(employee)}</td>
      <td>${escapeHtml(employee.nationality || "سعودي")}</td>
      <td>${escapeHtml(employee.department)}</td>
      <td>${escapeHtml(employee.role)}</td>
      <td class="latin-number">${escapeHtml(employee.phone || "—")}</td>
      <td>${statusBadge(employee.status)}</td>
      <td>${formatDate(employee.contractStartDate)}</td>
      <td><div class="employee-actions">
        <button class="quick-view-btn" data-quick-view="${employee.id}" title="عرض سريع">${iconSvg("eye")}</button>
        <button data-edit-employee="${employee.id}" title="تعديل">${iconSvg("edit")}</button>
        <button class="delete-action" data-delete-employee="${employee.id}" title="حذف">${iconSvg("trash")}</button>
      </div></td>
    </tr>`).join("")
    : '<tr><td colspan="9"><div class="empty-state"><strong>لا توجد نتائج مطابقة</strong><p>غيّر عبارة البحث أو عوامل التصفية.</p></div></td></tr>';
  document.querySelector("#employeeCards").innerHTML = filtered.map((employee) => `<article class="employee-card">
    <div class="employee-card-top">${employeeAvatar(employee)}<div><h4><button type="button" class="employee-name-link" data-edit-employee="${employee.id}">${escapeHtml(employee.name)}</button></h4><small>${escapeHtml(employee.role)}</small></div><div class="employee-actions"><button data-quick-view="${employee.id}">${iconSvg("eye")}</button><button data-edit-employee="${employee.id}">${iconSvg("edit")}</button></div></div>
    <div class="employee-card-details"><div><span>الرقم الوظيفي</span><strong>${employee.employeeNumber}</strong></div><div><span>مدة الخدمة</span><strong>${employeeService(employee)}</strong></div><div><span>الإدارة</span><strong>${escapeHtml(employee.department)}</strong></div><div><span>الحالة</span>${statusBadge(employee.status)}</div></div>
  </article>`).join("");
  document.querySelector("#employeePageTotal").textContent = arabicNumber(employees.length);
  document.querySelector("#employeeActiveTotal").textContent = arabicNumber(employees.filter((employee) => employee.status === "active").length);
  document.querySelector("#employeeLeaveTotal").textContent = arabicNumber(employees.filter((employee) => employee.status === "leave").length);
  document.querySelector("#employeeResultCount").textContent = `عرض ${arabicNumber(filtered.length)} من ${arabicNumber(employees.length)} موظف`;
  hydrateIcons(body);
  hydrateIcons(document.querySelector("#employeeCards"));
  hydrateAttachmentImages(body);
  hydrateAttachmentImages(document.querySelector("#employeeCards"));
}

function absenceTypeMeta(type) {
  const map = {
    unexcused: { label: "غياب بدون عذر", className: "status-terminated", createsMinute: true },
    excused: { label: "غياب بعذر مقبول", className: "status-approved", createsMinute: false },
    authorized: { label: "غياب بإذن مكتوب", className: "status-pending", createsMinute: false }
  };
  return map[type] || map.unexcused;
}

function normalizeWorkSettings(value = DEFAULT_WORK_SETTINGS) {
  const fallback = structuredClone(DEFAULT_WORK_SETTINGS);
  const settings = value && typeof value === "object" ? structuredClone(value) : fallback;
  const shifts = Array.isArray(settings.shifts) && settings.shifts.length ? settings.shifts : fallback.shifts;
  const normalizedShifts = shifts.map((shift, index) => ({
    id: shift.id || `shift-${Date.now()}-${index}`,
    name: String(shift.name || `فترة ${arabicNumber(index + 1)}`).replace(/شيفت/g, "فترة"),
    start: /^\d{2}:\d{2}$/.test(shift.start || "") ? shift.start : OFFICIAL_CHECK_IN,
    end: /^\d{2}:\d{2}$/.test(shift.end || "") ? shift.end : OFFICIAL_CHECK_OUT
  }));
  const firstShift = normalizedShifts[0];
  const normalizeShiftLine = (line, index = 0) => {
    const shift = normalizedShifts.find((item) => item.id === line?.shiftId) || normalizedShifts.find((item) => item.id === line?.id) || firstShift;
    return {
      shiftId: shift.id,
      start: /^\d{2}:\d{2}$/.test(line?.start || "") ? line.start : shift.start,
      end: /^\d{2}:\d{2}$/.test(line?.end || "") ? line.end : shift.end
    };
  };
  const days = {};
  for (let index = 0; index < 7; index += 1) {
    const saved = settings.days?.[index] || settings.days?.[String(index)] || fallback.days[index];
    const sourceLines = Array.isArray(saved?.shifts) && saved.shifts.length
      ? saved.shifts
      : [{ shiftId: saved?.shiftId || firstShift.id, start: saved?.start || firstShift.start, end: saved?.end || firstShift.end }];
    days[index] = {
      enabled: Boolean(saved?.enabled),
      shifts: sourceLines.map(normalizeShiftLine)
    };
  }
  return { shifts: normalizedShifts, days };
}

function minutesBetween(start = OFFICIAL_CHECK_IN, end = OFFICIAL_CHECK_OUT) {
  const [startHour = 0, startMinute = 0] = String(start).split(":").map(Number);
  const [endHour = 0, endMinute = 0] = String(end).split(":").map(Number);
  const startTotal = startHour * 60 + startMinute;
  let endTotal = endHour * 60 + endMinute;
  if (endTotal < startTotal) endTotal += 24 * 60;
  return Math.max(0, endTotal - startTotal);
}

function formatWorkMinutes(minutes) {
  const hours = Math.floor((Number(minutes) || 0) / 60);
  const remainder = (Number(minutes) || 0) % 60;
  if (hours && remainder) return `${arabicNumber(hours)} س و${arabicNumber(remainder)} د`;
  if (hours) return `${arabicNumber(hours)} س`;
  return `${arabicNumber(remainder)} د`;
}

function workScheduleForDate(dateString) {
  const date = parseDate(dateString);
  if (!date) return { enabled: false, start: OFFICIAL_CHECK_IN, end: OFFICIAL_CHECK_OUT, hours: "—", minutes: 0, dayIndex: null, shifts: [] };
  const dayIndex = date.getDay();
  const settings = normalizeWorkSettings(workSettings);
  const day = settings.days[dayIndex] || DEFAULT_WORK_SETTINGS.days[dayIndex];
  const shifts = (day.shifts || []).map((line) => {
    const shift = settings.shifts.find((item) => item.id === line.shiftId) || settings.shifts[0];
    const start = line.start || shift.start || OFFICIAL_CHECK_IN;
    const end = line.end || shift.end || OFFICIAL_CHECK_OUT;
    return { ...line, shift, start, end, minutes: minutesBetween(start, end), hours: formatWorkMinutes(minutesBetween(start, end)) };
  });
  const enabled = Boolean(day.enabled);
  const minutes = enabled ? shifts.reduce((sum, item) => sum + item.minutes, 0) : 0;
  const start = shifts[0]?.start || OFFICIAL_CHECK_IN;
  const end = shifts[shifts.length - 1]?.end || OFFICIAL_CHECK_OUT;
  const shiftNames = shifts.map((item) => item.shift?.name).filter(Boolean).join("، ");
  return { ...day, dayIndex, shifts, start, end, minutes, hours: enabled ? formatWorkMinutes(minutes) : "—", shiftNames };
}

function isWorkday(dateString) {
  return Boolean(workScheduleForDate(dateString).enabled);
}

function dateWithinRange(dateString, from, to) {
  const date = parseDate(dateString)?.getTime();
  const start = parseDate(from)?.getTime();
  const end = parseDate(to || from)?.getTime();
  if (!date || !start || !end) return false;
  return date >= start && date <= end;
}

function dateRangesOverlap(fromA, toA, fromB, toB) {
  const startA = parseDate(fromA)?.getTime();
  const endA = parseDate(toA || fromA)?.getTime();
  const startB = parseDate(fromB)?.getTime();
  const endB = parseDate(toB || fromB)?.getTime();
  if (!startA || !endA || !startB || !endB) return false;
  return startA <= endB && startB <= endA;
}

function approvedLeaveForDate(employee, dateString) {
  const leaveList = Array.isArray(leaves) ? leaves : [];
  return leaveList.find((leave) => leave.employeeId === employee.id
    && leave.status === "approved"
    && dateWithinRange(dateString, leave.from, leave.to)
    && (!leave.returnDate || parseDate(dateString) < parseDate(leave.returnDate)));
}

function absenceForDate(employee, dateString) {
  const exceptionList = Array.isArray(attendanceExceptions) ? attendanceExceptions : [];
  return exceptionList.find((record) => record.employeeId === employee.id && dateWithinRange(dateString, record.from, record.to));
}

function formatAttendanceDateLabel(dateString) {
  const date = parseDate(dateString);
  if (!date) return "—";
  return new Intl.DateTimeFormat("ar-SA", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(date);
}

function officialWorkHoursLabel(dateString = selectedAttendanceDate) {
  return workScheduleForDate(dateString).hours;
}

function attendanceStateForEmployee(employee, dateString) {
  const workday = isWorkday(dateString);
  const leave = approvedLeaveForDate(employee, dateString);
  const absence = absenceForDate(employee, dateString);
  if (!workday) {
    return {
      key: "weekly-off",
      checkIn: "—",
      checkOut: "—",
      hours: "—",
      badge: '<span class="status-badge status-leave">إجازة أسبوعية</span>',
      source: "تقويم الدوام",
      present: false,
      absent: false,
      leave: false,
      late: false
    };
  }
  if (employee.status === "terminated" || employee.status === "suspended") {
    return {
      key: employee.status,
      checkIn: "—",
      checkOut: "—",
      hours: "—",
      badge: statusBadge(employee.status),
      source: "حالة الموظف",
      present: false,
      absent: false,
      leave: false,
      late: false
    };
  }
  if (employee.status === "leave" || leave) {
    return {
      key: "leave",
      checkIn: "—",
      checkOut: "—",
      hours: "—",
      badge: '<span class="status-badge status-leave">في إجازة</span>',
      source: leave ? `طلب إجازة: ${escapeHtml(leave.type)}` : "حالة الموظف",
      present: false,
      absent: false,
      leave: true,
      late: false
    };
  }
  if (absence) {
    const meta = absenceTypeMeta(absence.type);
    return {
      key: "absent",
      checkIn: "—",
      checkOut: "—",
      hours: "٠ س",
      badge: `<span class="status-badge ${meta.className}">${meta.label}</span>`,
      source: "مسجل بواسطة المدير",
      present: false,
      absent: true,
      leave: false,
      late: false,
      absence
    };
  }
  if (employee.status !== "active") {
    return {
      key: employee.status,
      checkIn: "—",
      checkOut: "—",
      hours: "—",
      badge: statusBadge(employee.status),
      source: "حالة الموظف",
      present: false,
      absent: false,
      leave: false,
      late: false
    };
  }
  const schedule = workScheduleForDate(dateString);
  return {
    key: "auto-present",
    checkIn: schedule.start,
    checkOut: schedule.end,
    hours: schedule.hours,
    badge: '<span class="status-badge status-active">حاضر آليًا</span>',
    source: schedule.shiftNames ? `حضور آلي - ${escapeHtml(schedule.shiftNames)}` : "حضور آلي على الوقت",
    present: true,
    absent: false,
    leave: false,
    late: false
  };
}

function attendanceRowsForDate(dateString = selectedAttendanceDate) {
  return employees.map((employee) => ({ employee, state: attendanceStateForEmployee(employee, dateString) }));
}

function attendanceSummaryForDate(dateString = selectedAttendanceDate) {
  const rows = attendanceRowsForDate(dateString);
  return rows.reduce((summary, row) => {
    if (row.state.present) summary.present += 1;
    if (row.state.absent) summary.absent += 1;
    if (row.state.leave) summary.leave += 1;
    if (row.state.late) summary.late += 1;
    return summary;
  }, { present: 0, absent: 0, leave: 0, late: 0, total: rows.length, isWorkday: isWorkday(dateString) });
}

function renderAbsenceRecords() {
  const body = document.querySelector("#absenceRecordsBody");
  if (!body) return;
  const records = attendanceExceptions
    .filter((record) => dateWithinRange(selectedAttendanceDate, record.from, record.to))
    .sort((a, b) => (a.from || "").localeCompare(b.from || "") || (a.createdAt || "").localeCompare(b.createdAt || ""));
  body.innerHTML = records.length
    ? records.map((record) => {
      const employee = getEmployee(record.employeeId);
      const meta = absenceTypeMeta(record.type);
      const period = record.from === record.to ? formatDate(record.from) : `${formatDate(record.from)} إلى ${formatDate(record.to)}`;
      const details = absencePenaltyDetails(record);
      const segmentLabel = details.showPeriod ? (details.periodLabel || absencePeriodMeta(record.periodSegment || "fullDay").label) : "—";
      const deductionAmount = absenceDeductionAmount(record);
      return `<tr><td>${employee ? employeeCell(employee) : "موظف محذوف"}</td><td>${period}</td><td><span class="status-badge ${meta.className}">${meta.label}</span></td><td>${segmentLabel}</td><td><span class="status-badge absence-penalty-badge">${escapeHtml(details.text)}</span></td><td><strong class="absence-money-deduction">${formatCurrencyEn(deductionAmount)}</strong></td><td>${escapeHtml(record.reason || "—")}</td><td><button class="quick-view-btn delete-absence-btn" data-delete-absence="${record.id}" title="حذف الغياب">${iconSvg("trash")}</button></td></tr>`;
    }).join("")
    : '<tr><td colspan="8"><div class="empty-state"><strong>لا توجد غيابات مسجلة لهذا التاريخ</strong><p>كل موظف نشط سيظهر حاضرًا آليًا إذا كان اليوم يوم عمل.</p></div></td></tr>';
  hydrateIcons(body);
  hydrateAttachmentImages(body);
}

function renderAttendance(search = "") {
  const dateInput = document.querySelector("#attendanceDateInput");
  if (dateInput && dateInput.value !== selectedAttendanceDate) dateInput.value = selectedAttendanceDate;
  const currentDay = document.querySelector("#attendanceCurrentDay");
  if (currentDay) currentDay.textContent = formatAttendanceDateLabel(selectedAttendanceDate);
  const subtitle = document.querySelector("#attendanceCurrentSubtitle");
  const isSelectedWorkday = isWorkday(selectedAttendanceDate);
  if (subtitle) subtitle.textContent = isSelectedWorkday ? "سجل الحضور اليومي" : "اليوم خارج أيام الدوام الرسمي";

  const value = search.trim().toLowerCase();
  const rows = attendanceRowsForDate(selectedAttendanceDate).filter(({ employee }) => {
    const text = `${employee.employeeNumber} ${employee.name} ${employee.department} ${employee.section || ""} ${employee.role} ${employee.phone}`.toLowerCase();
    return !value || text.includes(value);
  });
  const summary = attendanceSummaryForDate(selectedAttendanceDate);
  document.querySelector("#attendancePresent").textContent = arabicNumber(summary.present);
  document.querySelector("#attendanceLate").textContent = arabicNumber(summary.late);
  document.querySelector("#attendanceAbsent").textContent = arabicNumber(summary.absent);
  document.querySelector("#attendanceLeave").textContent = arabicNumber(summary.leave);
  const hint = document.querySelector("#attendanceRegisterHint");
  if (hint) hint.textContent = isSelectedWorkday
    ? "الموظف النشط الذي لا توجد عليه إجازة أو غياب يظهر حاضرًا آليًا على وقت الدوام الرسمي."
    : "لا يتم إنشاء حضور آلي في أيام الإجازة الأسبوعية.";
  document.querySelector("#attendanceTableBody").innerHTML = rows.length
    ? rows.map(({ employee, state }) => `<tr><td>${employeeCell(employee)}</td><td class="time-cell">${state.checkIn}</td><td class="time-cell">${state.checkOut}</td><td>${state.hours}</td><td>${state.badge}</td><td>${state.source}</td></tr>`).join("")
    : '<tr><td colspan="6"><div class="empty-state"><strong>لا توجد نتائج مطابقة</strong><p>غيّر عبارة البحث أو تاريخ السجل.</p></div></td></tr>';
  renderAbsenceRecords();
  hydrateIcons(document.querySelector("#attendanceTableBody"));
  hydrateAttachmentImages(document.querySelector("#attendanceTableBody"));
}

function renderLeaves() {
  const filtered = activeLeaveFilter === "all" ? leaves : leaves.filter((leave) => leave.status === activeLeaveFilter);
  document.querySelector("#allLeaveCount").textContent = arabicNumber(leaves.length);
  document.querySelector("#pendingLeaveCount").textContent = arabicNumber(leaves.filter((leave) => leave.status === "pending").length);
  document.querySelector("#leaveRequestList").innerHTML = filtered.length
    ? filtered.map((leave) => {
      const employee = getEmployee(leave.employeeId);
      if (!employee) return "";
      let actions = leaveStatusBadge(leave.status);
      if (leave.status === "pending") {
        actions = `<button class="secondary-btn" data-leave-action="rejected" data-leave-id="${leave.id}">رفض</button><button class="primary-btn" data-leave-action="approved" data-leave-id="${leave.id}">اعتماد الإجازة</button>`;
      } else if (leave.status === "approved" && !leave.returnDate) {
        actions = `${leaveStatusBadge(leave.status)}<button class="primary-btn" data-leave-return="${leave.id}">تسجيل مباشرة</button>`;
      } else if (leave.returnDate) {
        actions = `<span class="status-badge status-active">تمت المباشرة ${formatDate(leave.returnDate)}</span>`;
      }
      return `<div class="leave-request">${employeeAvatar(employee)}<div class="leave-request-main"><div class="leave-request-title"><button type="button" class="employee-name-link" data-edit-employee="${employee.id}">${escapeHtml(employee.name)}</button><span>${escapeHtml(employee.role)} · ${escapeHtml(leave.type)}</span></div><div class="leave-dates">${iconSvg("calendar")}<span>${formatDate(leave.from)} إلى ${formatDate(leave.to)}</span><b>${arabicNumber(leave.days)} أيام</b></div></div><div class="leave-request-actions">${actions}</div></div>`;
    }).join("")
    : '<div class="empty-state"><strong>لا توجد طلبات في هذه الفئة</strong></div>';
}

function renderPayroll() {
  const payrollDate = todayAtNoon();
  const baseTotal = employees.reduce((sum, employee) => sum + Number(employee.baseSalary || 0), 0);
  const allowanceTotal = employees.reduce((sum, employee) => sum + Number(employee.housingAllowance || 0) + Number(employee.transportAllowance || 0) + Number(employee.otherAllowances || 0), 0);
  const deductionTotal = employees.reduce((sum, employee) => {
    const gross = employeeGrossSalary(employee);
    const insuranceDeduction = employee.insuranceEnabled ? gross * 0.0995 : 0;
    const absenceDeduction = absenceDeductionForEmployeeInMonth(employee.id, payrollDate);
    const advanceDeduction = Number(employee.advanceDeduction || employee.salaryAdvance || 0);
    return sum + insuranceDeduction + absenceDeduction + advanceDeduction;
  }, 0);
  const netTotal = baseTotal + allowanceTotal - deductionTotal;
  document.querySelector("#payrollHeroTotal").textContent = formatCurrency(netTotal);
  document.querySelector("#payrollEmployeeCount").textContent = arabicNumber(employees.length);
  document.querySelector("#baseSalaryTotal").textContent = formatCurrency(baseTotal);
  document.querySelector("#allowanceTotal").textContent = formatCurrency(allowanceTotal);
  document.querySelector("#deductionTotal").textContent = formatCurrency(deductionTotal);
  document.querySelector("#payrollTableBody").innerHTML = employees.map((employee) => {
    const allowance = Number(employee.housingAllowance || 0) + Number(employee.transportAllowance || 0) + Number(employee.otherAllowances || 0);
    const gross = employeeGrossSalary(employee);
    const insuranceDeduction = employee.insuranceEnabled ? gross * 0.0995 : 0;
    const absenceDeduction = absenceDeductionForEmployeeInMonth(employee.id, payrollDate);
    const advanceDeduction = Number(employee.advanceDeduction || employee.salaryAdvance || 0);
    const deduction = insuranceDeduction + absenceDeduction + advanceDeduction;
    return `<tr><td>${employeeCell(employee)}</td><td>${formatCurrencyEn(employee.baseSalary)}</td><td>${formatCurrencyEn(allowance)}</td><td><strong>${formatCurrencyEn(insuranceDeduction)}</strong></td><td><strong class="absence-money-deduction">${formatCurrencyEn(absenceDeduction)}</strong></td><td><strong>${formatCurrencyEn(advanceDeduction)}</strong></td><td><strong>${formatCurrencyEn(gross - deduction)}</strong></td><td><span class="status-badge status-paid">جاهز للصرف</span></td></tr>`;
  }).join("");
}


function orgEmployeeOptions(selected = "") {
  const options = employees
    .slice()
    .sort((a, b) => (a.name || "").localeCompare(b.name || "", "ar"))
    .map((employee) => `<option value="${escapeHtml(employee.name)}"${employee.name === selected ? " selected" : ""}>${escapeHtml(employee.name)}</option>`)
    .join("");
  return `<option value="">بدون مدير محدد</option>${options}`;
}

function defaultOrgStructure() {
  return { departments: [], sections: [], professions: [] };
}

function normalizeOrgStructure(value) {
  const raw = value && typeof value === "object" ? value : defaultOrgStructure();
  const normalizedDepartments = Array.isArray(raw.departments)
    ? raw.departments.map((item, index) => ({
      id: item.id || `dept-${Date.now()}-${index}`,
      name: String(item.name || "").trim(),
      manager: String(item.manager || "").trim(),
      createdAt: item.createdAt || new Date().toISOString()
    })).filter((item) => item.name)
    : [];
  const departmentIds = new Set(normalizedDepartments.map((item) => item.id));
  const normalizedSections = Array.isArray(raw.sections)
    ? raw.sections.map((item, index) => ({
      id: item.id || `section-${Date.now()}-${index}`,
      departmentId: departmentIds.has(item.departmentId) ? item.departmentId : "",
      name: String(item.name || "").trim(),
      manager: String(item.manager || "").trim(),
      createdAt: item.createdAt || new Date().toISOString()
    })).filter((item) => item.name && item.departmentId)
    : [];
  const sectionIds = new Set(normalizedSections.map((item) => item.id));
  const normalizedProfessions = Array.isArray(raw.professions)
    ? raw.professions.map((item, index) => ({
      id: item.id || `profession-${Date.now()}-${index}`,
      sectionId: sectionIds.has(item.sectionId) ? item.sectionId : "",
      name: String(item.name || "").trim(),
      createdAt: item.createdAt || new Date().toISOString()
    })).filter((item) => item.name && item.sectionId)
    : [];
  return { departments: normalizedDepartments, sections: normalizedSections, professions: normalizedProfessions };
}

function getOrgStructure() {
  return normalizeOrgStructure(loadLocalData("nawah-org-structure", defaultOrgStructure()));
}

function setOrgStructure(structure) {
  localStorage.setItem("nawah-org-structure", JSON.stringify(normalizeOrgStructure(structure)));
}

function orgDepartmentByName(name) {
  return getOrgStructure().departments.find((item) => item.name === name);
}

function orgSectionByName(departmentName, sectionName) {
  const structure = getOrgStructure();
  const department = structure.departments.find((item) => item.name === departmentName);
  if (!department) return null;
  return structure.sections.find((item) => item.departmentId === department.id && item.name === sectionName);
}

function getDirectManagerForSelection(departmentName, sectionName) {
  const structure = getOrgStructure();
  const department = structure.departments.find((item) => item.name === departmentName);
  const section = department ? structure.sections.find((item) => item.departmentId === department.id && item.name === sectionName) : null;
  return section?.manager || department?.manager || "";
}

function getSectionsForDepartmentName(departmentName) {
  const structure = getOrgStructure();
  const department = structure.departments.find((item) => item.name === departmentName);
  return department ? structure.sections.filter((section) => section.departmentId === department.id) : [];
}

function getProfessionsForSectionName(departmentName, sectionName) {
  const structure = getOrgStructure();
  const section = orgSectionByName(departmentName, sectionName);
  return section ? structure.professions.filter((profession) => profession.sectionId === section.id) : [];
}

function orgListCountText(count, singular) {
  return `${arabicNumber(count)} ${singular}`;
}

function renderDepartments() {
  const container = document.querySelector("#departmentGrid");
  if (!container) return;
  const structure = getOrgStructure();
  const selectedDepartmentId = document.querySelector("#orgSectionDepartment")?.value || structure.departments[0]?.id || "";
  const selectedSectionDepartmentId = structure.departments.some((item) => item.id === selectedDepartmentId) ? selectedDepartmentId : structure.departments[0]?.id || "";
  const sectionsForSelect = structure.sections.filter((section) => section.departmentId === selectedSectionDepartmentId);
  const selectedProfessionSectionId = document.querySelector("#orgProfessionSection")?.value || sectionsForSelect[0]?.id || structure.sections[0]?.id || "";
  const validProfessionSectionId = structure.sections.some((item) => item.id === selectedProfessionSectionId) ? selectedProfessionSectionId : structure.sections[0]?.id || "";
  container.innerHTML = `
    <article class="org-card org-card-department">
      <div class="org-card-head">
        <span class="org-card-icon">${iconSvg("building")}</span>
        <div><h3>الإدارة</h3><p>أضف إدارة وحدد مديرها المباشر من الموظفين</p></div>
      </div>
      <form class="org-form" data-org-form="department">
        <label><span>اسم الإدارة</span><input name="name" placeholder="مثال: إدارة الموارد البشرية" required /></label>
        <label><span>مدير الإدارة</span><select name="manager">${orgEmployeeOptions()}</select></label>
        <button type="submit" class="primary-btn"><span data-icon="plus"></span>إضافة إدارة</button>
      </form>
      <div class="org-list">
        ${structure.departments.map((department) => {
          const childSections = structure.sections.filter((section) => section.departmentId === department.id);
          return `<div class="org-list-item">
            <div><strong>${escapeHtml(department.name)}</strong><span>المدير: ${escapeHtml(department.manager || "غير محدد")} — ${orgListCountText(childSections.length, "أقسام")}</span></div>
            <button type="button" class="org-delete-btn" data-delete-org="department" data-id="${department.id}">${iconSvg("trash")}</button>
          </div>`;
        }).join("") || `<div class="empty-state"><strong>لا توجد إدارات</strong></div>`}
      </div>
    </article>
    <article class="org-card org-card-section">
      <div class="org-card-head">
        <span class="org-card-icon">${iconSvg("grid")}</span>
        <div><h3>القسم</h3><p>القسم يجب أن يتبع إدارة محددة وله مدير مباشر مستقل</p></div>
      </div>
      <form class="org-form" data-org-form="section">
        <label><span>يتبع لأي إدارة؟</span><select name="departmentId" id="orgSectionDepartment">${structure.departments.map((department) => `<option value="${department.id}"${department.id === selectedSectionDepartmentId ? " selected" : ""}>${escapeHtml(department.name)}</option>`).join("")}</select></label>
        <label><span>اسم القسم</span><input name="name" placeholder="مثال: شؤون الموظفين" required /></label>
        <label><span>مدير القسم</span><select name="manager">${orgEmployeeOptions()}</select></label>
        <button type="submit" class="primary-btn"><span data-icon="plus"></span>إضافة قسم</button>
      </form>
      <div class="org-list">
        ${structure.sections.map((section) => {
          const department = structure.departments.find((item) => item.id === section.departmentId);
          const professions = structure.professions.filter((item) => item.sectionId === section.id);
          return `<div class="org-list-item">
            <div><strong>${escapeHtml(section.name)}</strong><span>${escapeHtml(department?.name || "بدون إدارة")} — المدير: ${escapeHtml(section.manager || department?.manager || "غير محدد")} — ${orgListCountText(professions.length, "مهن")}</span></div>
            <button type="button" class="org-delete-btn" data-delete-org="section" data-id="${section.id}">${iconSvg("trash")}</button>
          </div>`;
        }).join("") || `<div class="empty-state"><strong>لا توجد أقسام</strong></div>`}
      </div>
    </article>
    <article class="org-card org-card-profession">
      <div class="org-card-head">
        <span class="org-card-icon">${iconSvg("file")}</span>
        <div><h3>المهنة</h3><p>المهنة تتبع قسمًا، وتظهر للموظف بعد اختيار الإدارة والقسم</p></div>
      </div>
      <form class="org-form" data-org-form="profession">
        <label><span>الإدارة</span><select name="departmentId" id="orgProfessionDepartment">${structure.departments.map((department) => `<option value="${department.id}"${department.id === selectedSectionDepartmentId ? " selected" : ""}>${escapeHtml(department.name)}</option>`).join("")}</select></label>
        <label><span>تتبع لأي قسم؟</span><select name="sectionId" id="orgProfessionSection">${(sectionsForSelect.length ? sectionsForSelect : structure.sections).map((section) => `<option value="${section.id}"${section.id === validProfessionSectionId ? " selected" : ""}>${escapeHtml(section.name)}</option>`).join("")}</select></label>
        <label><span>اسم المهنة</span><input name="name" placeholder="مثال: أخصائي موارد بشرية" required /></label>
        <button type="submit" class="primary-btn"><span data-icon="plus"></span>إضافة مهنة</button>
      </form>
      <div class="org-list">
        ${structure.professions.map((profession) => {
          const section = structure.sections.find((item) => item.id === profession.sectionId);
          const department = section ? structure.departments.find((item) => item.id === section.departmentId) : null;
          return `<div class="org-list-item">
            <div><strong>${escapeHtml(profession.name)}</strong><span>${escapeHtml(section?.name || "بدون قسم")} — ${escapeHtml(department?.name || "بدون إدارة")}</span></div>
            <button type="button" class="org-delete-btn" data-delete-org="profession" data-id="${profession.id}">${iconSvg("trash")}</button>
          </div>`;
        }).join("") || `<div class="empty-state"><strong>لا توجد مهن</strong></div>`}
      </div>
    </article>`;
  hydrateIcons(container);
}

function uniqueEmployeeValues(key, filter = () => true) {
  return [...new Set(employees.filter(filter).map((employee) => String(employee[key] || "").trim()).filter(Boolean))];
}

function legacyDepartmentOptions() {
  return [...new Set([...uniqueEmployeeValues("department"), ...departments].filter(Boolean))];
}

function legacyRoleOptions() {
  return [...new Set([...uniqueEmployeeValues("role"), ...jobTitles].filter(Boolean))];
}

function populateFormOptions() {
  const structure = getOrgStructure();
  const hasOrgDepartments = structure.departments.length > 0;
  const departmentNames = hasOrgDepartments ? structure.departments.map((item) => item.name) : legacyDepartmentOptions();
  const filter = document.querySelector("#departmentFilter");
  if (filter) {
    const filterValue = filter.value;
    filter.innerHTML = `<option value="all">جميع الإدارات</option>${departmentNames.map((department) => `<option value="${escapeHtml(department)}">${escapeHtml(department)}</option>`).join("")}`;
    filter.value = departmentNames.includes(filterValue) ? filterValue : "all";
  }
  const form = document.querySelector("#employeeForm");
  const departmentSelect = form?.elements.department;
  const sectionSelect = form?.elements.section;
  const jobSelect = document.querySelector("#jobTitleSelect");
  if (departmentSelect && sectionSelect && jobSelect) {
    const previousDepartment = departmentSelect.value;
    const previousSection = sectionSelect.value;
    const previousRole = jobSelect.value;
    const selectedDepartment = departmentNames.includes(previousDepartment) ? previousDepartment : departmentNames[0] || "";
    departmentSelect.innerHTML = departmentNames.length
      ? departmentNames.map((department) => `<option value="${escapeHtml(department)}">${escapeHtml(department)}</option>`).join("")
      : `<option value="">لا توجد إدارات — أضف من شاشة الأقسام</option>`;
    departmentSelect.value = selectedDepartment;
    refreshEmployeeOrgOptions(previousSection, previousRole);
  }
  const nationalitySelect = document.querySelector('#employeeForm [name="nationality"]');
  renderNationalityOptions(nationalitySelect.value || "سعودي", document.querySelector('#employeeForm [name="nationalityType"][value="nonSaudi"]')?.checked);
  const bankSelects = document.querySelectorAll('[data-bank-name]');
  bankSelects.forEach((select) => renderBankOptions(select, select.value));
}

function refreshEmployeeOrgOptions(preferredSection = "", preferredRole = "") {
  const form = document.querySelector("#employeeForm");
  if (!form?.elements.department || !form?.elements.section || !form?.elements.role) return;
  const structure = getOrgStructure();
  const departmentName = form.elements.department.value;
  const orgDepartment = structure.departments.find((item) => item.name === departmentName);
  const hasOrgDepartments = structure.departments.length > 0;
  const hasOrgSectionsForDepartment = Boolean(orgDepartment) && structure.sections.some((section) => section.departmentId === orgDepartment.id);

  let sectionNames = [];
  if (hasOrgSectionsForDepartment) {
    sectionNames = getSectionsForDepartmentName(departmentName).map((section) => section.name);
  } else if (!hasOrgDepartments) {
    sectionNames = uniqueEmployeeValues("section", (employee) => !departmentName || employee.department === departmentName);
  }

  const selectedSection = sectionNames.includes(preferredSection) ? preferredSection : sectionNames[0] || "";
  form.elements.section.innerHTML = sectionNames.length
    ? sectionNames.map((section) => `<option value="${escapeHtml(section)}">${escapeHtml(section)}</option>`).join("")
    : `<option value="">بدون قسم</option>`;
  form.elements.section.value = selectedSection;

  let roleNames = [];
  if (hasOrgSectionsForDepartment && selectedSection) {
    roleNames = getProfessionsForSectionName(departmentName, selectedSection).map((profession) => profession.name);
  } else if (!hasOrgDepartments) {
    roleNames = legacyRoleOptions();
  } else {
    roleNames = [];
  }

  const selectedRole = roleNames.includes(preferredRole) ? preferredRole : roleNames[0] || "";
  form.elements.role.innerHTML = roleNames.length
    ? roleNames.map((role) => `<option value="${escapeHtml(role)}">${escapeHtml(role)}</option>`).join("")
    : `<option value="">لا توجد مهن — أضف من شاشة الأقسام</option>`;
  form.elements.role.value = selectedRole;
  form.elements.directManager.value = getDirectManagerForSelection(departmentName, selectedSection);
}

function switchEmployeeSection(section) {
  const targetSection = section || "personal";
  document.querySelectorAll("[data-employee-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.employeeSection === targetSection);
  });
  document.querySelectorAll("[data-section-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.sectionPanel === targetSection);
  });
  const content = document.querySelector(".employee-section-content");
  if (content) content.scrollTop = 0;
}

function renderNationalityOptions(selectedValue = "سعودي", nonSaudi = false) {
  const nationalitySelect = document.querySelector('#employeeForm [name="nationality"]');
  if (!nationalitySelect) return;
  const options = nonSaudi ? nationalities : ["سعودي"];
  nationalitySelect.innerHTML = options.map((nationality) => `<option value="${escapeHtml(nationality)}">${escapeHtml(nationality)}</option>`).join("");
  nationalitySelect.value = options.includes(selectedValue) ? selectedValue : options[0];
  nationalitySelect.disabled = !nonSaudi;
  nationalitySelect.setAttribute("aria-readonly", String(!nonSaudi));
}

function toggleNationalityField() {
  const form = document.querySelector("#employeeForm");
  const nonSaudi = form.elements.nationalityType.value === "nonSaudi";
  const nationalityField = document.querySelector("#nonSaudiNationalityField");
  nationalityField.hidden = false;
  nationalityField.classList.toggle("readonly-nationality", !nonSaudi);
  renderNationalityOptions(nonSaudi ? form.elements.nationality.value : "سعودي", nonSaudi);
}

async function renderEmployeePhoto() {
  const preview = document.querySelector("#employeePhotoPreview");
  if (employeeFormState.photoAttachmentId) {
    const url = await attachmentUrl(employeeFormState.photoAttachmentId);
    preview.innerHTML = url ? `<img src="${url}" alt="صورة الموظف" />` : iconSvg("user");
  } else if (employeeFormState.legacyPhoto) {
    preview.innerHTML = `<img src="${employeeFormState.legacyPhoto}" alt="صورة الموظف" />`;
  } else {
    preview.innerHTML = iconSvg("user");
  }
}

function attachmentControlHtml(kind, index, attachmentId, label) {
  return `<span class="compact-file-control ${attachmentId ? "has-file" : ""}">${iconSvg("file")}<span>${attachmentId ? "تم الإرفاق" : "إرفاق"}</span><input type="file" data-${kind}-attachment="${index}" accept="image/*,.pdf" /></span>${attachmentId ? `<button type="button" class="attachment-view-btn" data-view-attachment="${attachmentId}">${label || "عرض"}</button>` : ""}`;
}

function renderPassports() {
  const container = document.querySelector("#passportsList");
  container.innerHTML = employeeFormState.passports.length
    ? employeeFormState.passports.map((passport, index) => {
      const expiry = expiryStatus(passport.expiryDate);
      return `<div class="repeatable-row passport-row" data-passport-index="${index}">
        <label><span>رقم الجواز</span><input data-passport-field="number" value="${escapeHtml(passport.number)}" /></label>
        <label><span>تاريخ بداية الجواز</span><input type="date" data-passport-field="startDate" value="${passport.startDate}" /></label>
        <label><span>تاريخ نهاية الجواز</span><input type="date" data-passport-field="expiryDate" value="${passport.expiryDate}" /></label>
        <label><span>مرفق الجواز</span>${attachmentControlHtml("passport", index, passport.attachmentId, "عرض الجواز")}</label>
        <button type="button" class="row-delete-btn" data-remove-passport="${index}" aria-label="حذف الجواز">${iconSvg("trash")}</button>
        <label class="expiry-state span-all"><span>حالة الجواز</span><input class="calculated-field expiry-state ${expiry.className}" readonly value="${escapeHtml(expiry.text)}" /></label>
      </div>`;
    }).join("")
    : '<div class="employee-note-empty">لا توجد جوازات مضافة.</div>';
  hydrateIcons(container);
}

function renderBankAccounts() {
  const container = document.querySelector("#bankAccountsList");
  container.innerHTML = employeeFormState.bankAccounts.length
    ? employeeFormState.bankAccounts.map((account, index) => {
      const ibanValue = ibanDigits(account.iban);
      const count = ibanValue.length;
      return `<div class="bank-account-card" data-bank-index="${index}">
        <div class="bank-account-head"><span>${index + 1}</span><strong>الحساب البنكي ${index + 1}</strong></div>
        <div class="bank-fields">
          <label><span>اسم البنك</span><select data-bank-field="bankName"><option value="">اختر البنك</option>${saudiBanks.map((bank) => `<option value="${escapeHtml(bank)}" ${bank === account.bankName ? "selected" : ""}>${escapeHtml(bank)}</option>`).join("")}</select></label>
          <label class="iban-field"><span>رقم الآيبان</span><span class="iban-control"><span class="iban-prefix">SA</span><input class="iban-input latin-number" data-bank-field="iban" value="${escapeHtml(formatIbanBody(ibanValue))}" maxlength="27" inputmode="numeric" autocomplete="off" /></span><small class="iban-hint ${count && count !== 22 ? "error" : ""}">${count}/22 رقمًا بعد SA</small></label>
          <label><span>شهادة الآيبان</span>${attachmentControlHtml("bank-certificate", index, account.certificateAttachmentId, "عرض الشهادة")}</label>
          <label><span>موافقة الموظف</span>${attachmentControlHtml("bank-approval", index, account.approvalAttachmentId, "عرض الموافقة")}</label>
          <button type="button" class="remove-bank-btn" data-remove-bank="${index}" aria-label="حذف الحساب">${iconSvg("trash")}</button>
        </div>
      </div>`;
    }).join("")
    : '<div class="employee-note-empty">لم تتم إضافة حسابات بنكية.</div>';
  hydrateIcons(container);
}

function renderEmployeeNotes() {
  const body = document.querySelector("#employeeNotesBody");
  body.innerHTML = employeeFormState.notes.length
    ? employeeFormState.notes.map((note, index) => `<tr><td>${index + 1}</td><td>${escapeHtml(note.text)}</td><td>${escapeHtml(note.createdAtLabel || formatDateTime(note.createdAt))}</td><td>${escapeHtml(note.createdBy || currentUser)}</td></tr>`).join("")
    : '<tr><td colspan="4"><div class="employee-note-empty">لا توجد ملاحظات مسجلة.</div></td></tr>';
}

function renderEmployeeMinutes() {
  const body = document.querySelector("#employeeMinutesBody");
  if (!body) return;
  body.innerHTML = employeeFormState.minutes.length
    ? employeeFormState.minutes.map((record, index) => {
      const linkedAbsence = record.sourceAbsenceId ? attendanceExceptions.find((absence) => absence.id === record.sourceAbsenceId) : null;
      const calculatedDeduction = linkedAbsence ? absenceDeductionAmount(linkedAbsence) : Number(record.deductionAmount || 0);
      const deductionLabel = formatCurrencyEn(calculatedDeduction);
      const summary = minuteRecordSummary(record);
      const penalty = minuteRecordPenalty(record);
      return `<tr><td>${index + 1}</td><td>${escapeHtml(record.type)}</td><td>${escapeHtml(summary)}</td><td>${escapeHtml(penalty)}</td><td><strong class="absence-money-deduction">${escapeHtml(deductionLabel)}</strong></td><td>${escapeHtml(record.createdAtLabel || formatDateTime(record.createdAt))}</td><td>${escapeHtml(record.createdBy || currentUser)}</td><td><button type="button" class="print-icon-btn" data-print-minute="${record.id}" data-print-employee="${employeeFormState.employeeId}" title="طباعة المحضر">${iconSvg("printer")}</button></td></tr>`;
    }).join("")
    : '<tr><td colspan="8"><div class="employee-note-empty">لا توجد محاضر مسجلة.</div></td></tr>';
  hydrateIcons(body);
}

function renderEmployeeMinuteDynamicFields() {
  const container = document.querySelector("#employeeMinuteDynamicFields");
  const typeInput = document.querySelector("#employeeMinuteType");
  if (!container || !typeInput) return;
  const template = getMinuteTemplate(typeInput.value);
  if (!typeInput.value || !template) {
    container.innerHTML = '<div class="employee-note-empty span-all">اختر نوع المحضر لعرض الخانات الخاصة به.</div>';
    return;
  }
  container.innerHTML = template.fields.map((field) => {
    const isText = field.type === "text";
    const control = isText
      ? `<textarea rows="2" data-minute-dynamic-field="${escapeHtml(field.id)}" placeholder="${escapeHtml(field.label)}"></textarea>`
      : `<input type="${field.type}" data-minute-dynamic-field="${escapeHtml(field.id)}" />`;
    return `<label class="${isText ? "span-all" : ""}"><span>${escapeHtml(field.label)}</span>${control}</label>`;
  }).join("");
}

function resetEmployeeMinuteForm() {
  const type = document.querySelector("#employeeMinuteType");
  if (type) type.value = "";
  renderEmployeeMinuteDynamicFields();
}

function toggleEmployeeMinuteForm(show) {
  const panel = document.querySelector("#employeeMinuteForm");
  if (!panel) return;
  panel.hidden = !show;
  if (show) {
    populateFormOptions();
    renderEmployeeMinuteDynamicFields();
    document.querySelector("#employeeMinuteType")?.focus();
  }
}

function addEmployeeMinuteRecord() {
  const typeInput = document.querySelector("#employeeMinuteType");
  const template = getMinuteTemplate(typeInput?.value || "");
  if (!typeInput?.value || !template) {
    showToast("اختر نوع المحضر أولًا");
    return;
  }
  const fieldValues = {};
  let hasValue = false;
  template.fields.forEach((field) => {
    const input = document.querySelector(`[data-minute-dynamic-field="${CSS.escape(field.id)}"]`);
    const value = input?.value?.trim() || "";
    fieldValues[field.id] = value;
    if (value) hasValue = true;
  });
  if (!hasValue && !(template.employeeFields || []).length) {
    showToast("أدخل بيانات المحضر أو اختر بيانات موظف تظهر في المحضر من الإعدادات");
    return;
  }
  const penaltyField = template.fields.find((field) => /جزاء|عقوبة|حسم/.test(field.label));
  const penalty = penaltyField ? fieldValues[penaltyField.id] : "";
  employeeFormState.minutes.push(createEmployeeMinuteRecord({ type: template.name, templateId: template.id, fieldValues, employeeFields: template.employeeFields || [], penalty }));
  showToast("تمت إضافة المحضر");
  resetEmployeeMinuteForm();
  toggleEmployeeMinuteForm(false);
  renderEmployeeMinutes();
}

function renderDocuments() {
  const container = document.querySelector("#documentsList");
  container.innerHTML = employeeFormState.documents.length
    ? employeeFormState.documents.map((item, index) => `<div class="repeatable-row document-row" data-document-index="${index}">
      <label><span>رقم الوثيقة</span><input data-document-field="number" value="${escapeHtml(item.number)}" /></label>
      <label><span>تاريخ بداية الوثيقة</span><input type="date" data-document-field="startDate" value="${item.startDate}" /></label>
      <label><span>تاريخ نهاية الوثيقة</span><input type="date" data-document-field="expiryDate" value="${item.expiryDate}" /></label>
      <label><span>مرفق الوثيقة</span>${attachmentControlHtml("document", index, item.attachmentId, "عرض الوثيقة")}</label>
      <button type="button" class="remove-bank-btn" data-remove-document="${index}" aria-label="حذف الوثيقة">${iconSvg("trash")}</button>
    </div>`).join("")
    : '<div class="employee-note-empty">لا توجد وثائق مضافة.</div>';
  hydrateIcons(container);
}

function renderCommissionHistory() {
  const body = document.querySelector("#commissionHistoryBody");
  body.innerHTML = employeeFormState.commissions.length
    ? employeeFormState.commissions.map((commission, index) => `<tr>
      <td class="latin-number">${index + 1}</td><td class="latin-number">${formatDateEn(commission.startDate)}</td><td class="latin-number">${commission.days}</td>
      <td class="latin-number">${formatCurrencyEn(commission.amount)}</td><td class="latin-number">${formatDateTimeEn(commission.paymentDate)}</td>
      <td><button type="button" class="print-icon-btn" data-print-commission="${commission.id}" title="طباعة المخالصة">${iconSvg("printer")}</button></td>
    </tr>`).join("")
    : '<tr><td colspan="6"><div class="employee-note-empty">لم يتم صرف عمولات بعد.</div></td></tr>';
  hydrateIcons(body);
}

function renderDocumentation() {
  const mapping = [
    ["signature", employeeFormState.signatureAttachmentId],
    ["fingerprint", employeeFormState.fingerprintAttachmentId]
  ];
  mapping.forEach(([key, id]) => {
    const input = document.querySelector(`[data-single-attachment="${key}"]`);
    const control = input.closest(".compact-file-control");
    const button = document.querySelector(`[data-view-single-attachment="${key}"]`);
    control.classList.toggle("has-file", Boolean(id));
    control.querySelector(":scope > span:last-of-type").textContent = id ? "تم الإرفاق" : key === "signature" ? "إرفاق التوقيع" : "إرفاق البصمة";
    button.hidden = !id;
    button.dataset.attachmentId = id || "";
  });
  const consentCheck = document.querySelector("#documentationConsentCheck");
  const card = document.querySelector("#consentIssuedCard");
  if (employeeFormState.consent?.issuedAt) {
    consentCheck.checked = true;
    consentCheck.disabled = true;
    card.hidden = false;
    card.innerHTML = `تم إصدار الإقرار بتاريخ <strong>${formatDateTime(employeeFormState.consent.issuedAt)}</strong> بواسطة ${escapeHtml(employeeFormState.consent.issuedBy || currentUser)} ${employeeFormState.consent.attachmentId ? `<button type="button" class="attachment-view-btn" data-view-attachment="${employeeFormState.consent.attachmentId}">عرض المرفق</button>` : ""}`;
  } else {
    consentCheck.checked = false;
    consentCheck.disabled = false;
    card.hidden = true;
    card.innerHTML = "";
  }
}

function calculateSalaryFromForm() {
  const form = document.querySelector("#employeeForm");
  const base = Number(form.elements.baseSalary.value || 0);
  const housing = Number(form.elements.housingAllowance.value || 0);
  const transport = Number(form.elements.transportAllowance.value || 0);
  const other = Number(form.elements.otherAllowances.value || 0);
  const gross = base + housing + transport + other;
  const insurance = form.elements.insuranceEnabled.checked ? gross * 0.0995 : 0;
  return { base, housing, transport, other, gross, insurance, total: gross - insurance };
}

function commissionAccrualStart(employee) {
  return employee?.commissionAccrualStartDate || employee?.workStartDate || employee?.contractStartDate || employee?.joinDate || "";
}

function calculateEmployeeSalary(employee) {
  const base = Number(employee?.baseSalary || 0);
  const housing = Number(employee?.housingAllowance || 0);
  const transport = Number(employee?.transportAllowance || 0);
  const other = Number(employee?.otherAllowances || 0);
  const gross = base + housing + transport + other;
  const insurance = employee?.insuranceEnabled ? gross * 0.0995 : 0;
  return { base, housing, transport, other, gross, insurance, total: gross - insurance };
}

function employeeSnapshotForCommission(employee) {
  const salary = calculateEmployeeSalary(employee);
  return {
    ...employee,
    insuranceDeduction: salary.insurance,
    totalSalary: salary.total
  };
}

function calculateCommission(baseSalary, startDate, endDate = formatInputDate(todayAtNoon())) {
  const days = financialDayDifference(startDate, endDate);
  const amount = Number(baseSalary || 0) / 360 * days;
  return { days, amount };
}

function buildCommissionRecord(employee, startDate, endDate, source = "manual", leave = null) {
  const { days, amount } = calculateCommission(employee.baseSalary, startDate, endDate);
  return {
    id: `commission-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    startDate,
    endDate,
    days,
    amount,
    paymentDate: new Date().toISOString(),
    employee: employeeSnapshotForCommission(employee),
    authType: source,
    source,
    leaveId: leave?.id || ""
  };
}

function updateSalaryCalculations() {
  const form = document.querySelector("#employeeForm");
  const values = calculateSalaryFromForm();
  const insuranceChecked = form.elements.insuranceEnabled.checked;
  const insuranceValueField = document.querySelector("#insuranceValueField");
  insuranceValueField.classList.toggle("salary-insurance-hidden", !insuranceChecked);
  insuranceValueField.setAttribute("aria-hidden", String(!insuranceChecked));
  form.elements.insuranceDeduction.tabIndex = insuranceChecked ? 0 : -1;
  form.elements.insuranceDeduction.value = insuranceChecked ? formatNumberEn(values.insurance, 2) : "";
  form.elements.totalSalary.value = formatNumberEn(values.total, 2);
  form.elements.totalSalaryWords.value = amountToWords(values.total);
  document.querySelector("#salaryCalculationNote").textContent = insuranceChecked
    ? "إجمالي الراتب = الراتب الأساسي + بدل السكن + بدل المواصلات + البدلات الأخرى - خصم التأمينات 9.95%."
    : "إجمالي الراتب = الراتب الأساسي + بدل السكن + بدل المواصلات + البدلات الأخرى.";
  updateCommissionCalculations();
}

function updateCommissionCalculations() {
  const form = document.querySelector("#employeeForm");
  const payButton = document.querySelector("#payCommissionBtn");
  const setPayButtonAvailability = (available) => {
    if (!payButton) return;
    payButton.hidden = !available;
    payButton.disabled = !available;
  };
  const salary = calculateSalaryFromForm();
  const workStartDate = form.elements.workStartDate.value || form.elements.contractStartDate.value;
  const initialCycle = !employeeFormState.commissions.length && !employeeFormState.commissionPausedByLeaveId;
  if (initialCycle && workStartDate) {
    employeeFormState.commissionAccrualStartDate = workStartDate;
  }
  const startDate = employeeFormState.commissionAccrualStartDate || workStartDate || form.elements.commissionStartDate.value;
  form.elements.commissionStartDate.value = startDate || "";
  if (employeeFormState.commissionPaused) {
    form.elements.commissionAmount.value = formatNumberEn(0, 2);
    form.elements.commissionWords.value = "";
    form.elements.commissionStatusText.value = employeeFormState.commissionPauseReason || "متوقف بسبب إجازة";
    setPayButtonAvailability(false);
    return;
  }
  if (form.elements.status.value !== "active") {
    form.elements.commissionAmount.value = formatNumberEn(0, 2);
    form.elements.commissionWords.value = "";
    form.elements.commissionStatusText.value = "متوقف لأن حالة العمل ليست على رأس العمل";
    setPayButtonAvailability(false);
    return;
  }
  const { days, amount } = calculateCommission(salary.base, startDate);
  form.elements.commissionAmount.value = formatNumberEn(amount, 2);
  form.elements.commissionWords.value = amount ? amountToWords(amount) : "";
  form.elements.commissionStatusText.value = startDate
    ? `نشط من ${formatDate(startDate)} - ${arabicNumber(days)} يوم مستحق`
    : "أدخل تاريخ المباشرة لبدء الاستحقاق";
  setPayButtonAvailability(Boolean(startDate && days > 0 && amount > 0));
}

function updateContractCalculations() {
  const form = document.querySelector("#employeeForm");
  if (!form.elements.workStartDate.value && form.elements.contractStartDate.value) {
    form.elements.workStartDate.value = form.elements.contractStartDate.value;
  }
  const fixed = form.elements.contractType.value === "fixed";
  form.elements.contractMonths.disabled = !fixed;
  form.elements.renewalOption.disabled = !fixed;
  if (!fixed) {
    form.elements.contractMonths.value = "";
    form.elements.contractDurationText.value = "غير محدد المدة";
    form.elements.contractEndDate.value = "";
    form.elements.renewalOption.value = "none";
    form.elements.renewedContractEndDate.value = "";
  } else {
    const months = Math.max(0, Number(form.elements.contractMonths.value || 0));
    form.elements.contractDurationText.value = months ? `${Math.floor(months / 12)} سنة و${months % 12} شهر` : "";
    const start = parseDate(form.elements.contractStartDate.value);
    const end = start && months ? addDays(addMonths(start, months), -1) : null;
    form.elements.contractEndDate.value = end ? formatInputDate(end) : "";
    if (end && form.elements.renewalOption.value === "same") {
      form.elements.renewedContractEndDate.value = formatInputDate(addDays(addMonths(addDays(end, 1), months), -1));
    } else {
      form.elements.renewedContractEndDate.value = "";
    }
  }
  if (form.elements.contractRemaining) {
    const effectiveContractEnd = form.elements.renewedContractEndDate.value || form.elements.contractEndDate.value;
    const contractStatus = fixed && effectiveContractEnd ? expiryStatus(effectiveContractEnd) : { text: "غير محدد المدة", className: "" };
    form.elements.contractRemaining.value = contractStatus.text || "غير محدد المدة";
    form.elements.contractRemaining.classList.remove("valid", "warning", "expired");
    if (contractStatus.className) form.elements.contractRemaining.classList.add(contractStatus.className);
  }
  const start = parseDate(form.elements.workStartDate.value || form.elements.contractStartDate.value);
  document.querySelector("#employeeSideService").textContent = start ? formatDuration(durationParts(start)) : "غير محدد";
  updateCommissionCalculations();
}

function updateIdentityStatus() {
  const form = document.querySelector("#employeeForm");
  const status = expiryStatus(form.elements.identityExpiryGregorian.value);
  form.elements.identityRemaining.value = status.text;
  form.elements.identityRemaining.classList.remove("valid", "warning", "expired");
  if (status.className) form.elements.identityRemaining.classList.add(status.className);
}

function syncIdentityFromGregorian() {
  const form = document.querySelector("#employeeForm");
  form.elements.identityExpiryHijri.value = gregorianToHijri(form.elements.identityExpiryGregorian.value, Number(form.elements.hijriCorrection.value || 0));
  updateIdentityStatus();
}

function syncIdentityFromHijri() {
  const form = document.querySelector("#employeeForm");
  const gregorian = hijriToGregorian(form.elements.identityExpiryHijri.value);
  if (!gregorian) return;
  form.elements.hijriCorrection.value = "0";
  form.elements.identityExpiryGregorian.value = gregorian;
  updateIdentityStatus();
}

function updatePersonalCalculations() {
  const form = document.querySelector("#employeeForm");
  const identity = normalizeNumerals(form.elements.identityNumber.value).replace(/\D/g, "").slice(0, 10);
  const phone = normalizeNumerals(form.elements.phone.value).replace(/[^\d+]/g, "").slice(0, 15);
  form.elements.identityNumber.value = identity;
  form.elements.phone.value = phone;
  const current = form.elements.employeeId.value ? getEmployee(form.elements.employeeId.value) : null;
  const number = buildEmployeeNumber(identity, phone, current?.sequence || nextEmployeeSequence());
  document.querySelector("#employeeSideNumber").textContent = number;
  const birth = parseDate(form.elements.birthDate.value);
  form.elements.age.value = birth ? `${durationParts(birth)?.years || 0} سنة` : "";
  toggleNationalityField();
}

function updateAllFormCalculations() {
  updatePersonalCalculations();
  updateContractCalculations();
  updateSalaryCalculations();
  updateIdentityStatus();
  employeeFormState.passports.forEach((passport) => {
    passport.expiryState = expiryStatus(passport.expiryDate);
  });
}

async function openEmployeeModal(employeeId = null) {
  const form = document.querySelector("#employeeForm");
  form.reset();
  populateFormOptions();
  const employee = employeeId ? getEmployee(employeeId) : null;
  document.querySelector("#employeeModalTitle").innerHTML = `${iconSvg("user-plus")}${employee ? "تعديل بيانات الموظف" : "إضافة موظف جديد"}`;
  const today = formatInputDate(todayAtNoon());
  employeeFormState = {
    photoAttachmentId: employee?.photoAttachmentId || "",
    legacyPhoto: employee?.legacyPhoto || "",
    identityAttachmentId: employee?.identityAttachmentId || "",
    signatureAttachmentId: employee?.signatureAttachmentId || "",
    fingerprintAttachmentId: employee?.fingerprintAttachmentId || "",
    passports: (employee?.passports || []).map(createPassport),
    bankAccounts: (employee?.bankAccounts || []).map(createBankAccount),
    notes: (employee?.notes || []).map((item) => ({ ...item })),
    minutes: (employee?.minutes || employee?.disciplinaryMinutes || []).map(createEmployeeMinuteRecord),
    warnings: Array.isArray(employee?.warnings) ? employee.warnings : [],
    documents: (employee?.documents || []).map(createDocument),
    commissions: (employee?.commissions || []).map((item) => ({ ...item })),
    commissionAccrualStartDate: employee?.commissionAccrualStartDate || employee?.workStartDate || employee?.contractStartDate || today,
    commissionPaused: Boolean(employee?.commissionPaused),
    commissionPauseReason: employee?.commissionPauseReason || "",
    commissionPausedByLeaveId: employee?.commissionPausedByLeaveId || "",
    commissionPausedAt: employee?.commissionPausedAt || "",
    consent: employee?.consent ? { ...employee.consent } : null
  };
  setFormValue(form, "employeeId", employee?.id || "");
  const simpleFields = [
    "firstName", "fatherName", "grandName", "familyName", "nationality", "birthDate",
    "identityNumber", "identityExpiryGregorian", "identityExpiryHijri", "status",
    "department", "branch", "section", "directManager", "role", "contractStartDate", "workStartDate", "contractMonths",
    "renewalOption", "baseSalary", "housingAllowance", "transportAllowance",
    "otherAllowances", "phone", "emergencyPhone", "email", "homeCountryPhone"
  ];
  simpleFields.forEach((name) => setFormValue(form, name, employee?.[name] ?? ""));
  refreshEmployeeOrgOptions(employee?.section || "", employee?.role || "");
  setFormValue(form, "contractStartDate", employee?.contractStartDate || today);
  setFormValue(form, "workStartDate", employee?.workStartDate || employee?.contractStartDate || today);
  setFormValue(form, "commissionStartDate", employeeFormState.commissionAccrualStartDate);
  setFormValue(form, "commissionPaymentDate", "");
  setFormValue(form, "hijriCorrection", employee?.hijriCorrection || 0);
  setRadioValue(form, "nationalityType", employee?.nationalityType || "saudi");
  renderNationalityOptions(employee?.nationality || "سعودي", (employee?.nationalityType || "saudi") === "nonSaudi");
  setRadioValue(form, "gender", employee?.gender || "male");
  setRadioValue(form, "contractType", employee?.contractType || "unlimited");
  form.elements.insuranceEnabled.checked = Boolean(employee?.insuranceEnabled);
  if (employee?.role && !jobTitles.includes(employee.role)) {
    jobTitles.push(employee.role);
    populateFormOptions();
    form.elements.role.value = employee.role;
  }
  form.elements.nationality.value = employee?.nationality || "سعودي";
  renderPassports();
  renderBankAccounts();
  renderEmployeeNotes();
  renderEmployeeMinutes();
  resetEmployeeMinuteForm();
  toggleEmployeeMinuteForm(false);
  renderDocuments();
  renderCommissionHistory();
  renderDocumentation();
  await renderEmployeePhoto();
  updateAllFormCalculations();
  const endServiceBtn = document.querySelector("#endEmployeeServiceBtn");
  if (endServiceBtn) {
    endServiceBtn.disabled = !employee?.id || employee?.status === "terminated";
    endServiceBtn.classList.toggle("is-disabled", !employee?.id || employee?.status === "terminated");
    endServiceBtn.title = !employee?.id ? "متاح بعد حفظ الموظف" : employee?.status === "terminated" ? "تم إنهاء خدمات الموظف" : "إنهاء خدمات الموظف";
  }
  switchEmployeeSection("personal");
  const modal = document.querySelector("#employeeModal");
  modal.showModal();
  modal.scrollTop = 0;
}

async function handleEmployeeSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  if (!values.firstName?.trim() || !values.familyName?.trim()) {
    switchEmployeeSection("personal");
    showToast("الاسم الأول واسم العائلة حقول إلزامية");
    return;
  }
  const structureForValidation = getOrgStructure();
  const selectedOrgDepartment = structureForValidation.departments.find((item) => item.name === values.department);
  const requiresSection = Boolean(selectedOrgDepartment) && structureForValidation.sections.some((section) => section.departmentId === selectedOrgDepartment.id);
  if (!values.department || (requiresSection && !values.section) || !values.role) {
    switchEmployeeSection("employment");
    showToast(requiresSection ? "اختر الإدارة والقسم والمهنة" : "اختر الإدارة والمهنة");
    return;
  }
  const identityNumber = normalizeNumerals(values.identityNumber).replace(/\D/g, "");
  const phone = normalizeNumerals(values.phone).replace(/\D/g, "");
  if (identityNumber.length !== 10) {
    switchEmployeeSection("identity");
    showToast("رقم الهوية أو الإقامة يجب أن يتكون من 10 أرقام");
    return;
  }
  if (phone.length < 2) {
    switchEmployeeSection("contact");
    showToast("أدخل رقم جوال صحيحًا");
    return;
  }
  const invalidBank = employeeFormState.bankAccounts.find((account) => {
    const hasData = account.bankName || ibanDigits(account.iban).length || account.certificateAttachmentId || account.approvalAttachmentId;
    return hasData && ibanDigits(account.iban).length !== 22;
  });
  if (invalidBank) {
    switchEmployeeSection("banking");
    showToast("الآيبان يجب أن يحتوي على 22 رقمًا بعد SA");
    return;
  }
  const salary = calculateSalaryFromForm();
  const current = values.employeeId ? getEmployee(values.employeeId) : null;
  const sequence = current?.sequence || nextEmployeeSequence();
  const employeeNumber = buildEmployeeNumber(identityNumber, phone, sequence);
  const duplicate = employees.find((item) => item.employeeNumber === employeeNumber && item.id !== values.employeeId);
  if (duplicate) {
    showToast("رقم الموظف مستخدم لموظف آخر");
    return;
  }
  const nationalityType = values.nationalityType;
  const record = normalizeEmployee({
    id: values.employeeId || `employee-${Date.now()}`,
    firstName: values.firstName.trim(),
    fatherName: values.fatherName.trim(),
    grandName: values.grandName.trim(),
    familyName: values.familyName.trim(),
    name: [values.firstName, values.fatherName, values.grandName, values.familyName].map((item) => item.trim()).filter(Boolean).join(" "),
    nationalityType,
    nationality: nationalityType === "saudi" ? "سعودي" : values.nationality,
    gender: values.gender,
    birthDate: values.birthDate,
    identityNumber,
    sequence,
    employeeNumber,
    identityExpiryGregorian: values.identityExpiryGregorian,
    identityExpiryHijri: values.identityExpiryHijri,
    hijriCorrection: Number(values.hijriCorrection || 0),
    identityAttachmentId: employeeFormState.identityAttachmentId,
    photoAttachmentId: employeeFormState.photoAttachmentId,
    legacyPhoto: employeeFormState.legacyPhoto,
    status: values.status,
    department: values.department,
    branch: values.branch || "",
    section: values.section,
    directManager: getDirectManagerForSelection(values.department, values.section) || values.directManager.trim(),
    role: values.role,
    contractType: values.contractType,
    contractStartDate: values.contractStartDate,
    workStartDate: values.workStartDate || values.contractStartDate,
    joinDate: values.contractStartDate,
    contractMonths: Number(values.contractMonths || 0),
    renewalOption: values.renewalOption,
    contractEndDate: values.contractEndDate,
    renewedContractEndDate: values.renewedContractEndDate,
    baseSalary: salary.base,
    housingAllowance: salary.housing,
    transportAllowance: salary.transport,
    otherAllowances: salary.other,
    insuranceEnabled: form.elements.insuranceEnabled.checked,
    phone,
    emergencyPhone: values.emergencyPhone.trim(),
    email: values.email.trim(),
    homeCountryPhone: values.homeCountryPhone.trim(),
    passports: employeeFormState.passports,
    bankAccounts: employeeFormState.bankAccounts.filter((account) => account.bankName || ibanDigits(account.iban).length || account.certificateAttachmentId || account.approvalAttachmentId),
    notes: employeeFormState.notes,
    minutes: employeeFormState.minutes,
    warnings: employeeFormState.warnings || [],
    documents: employeeFormState.documents,
    commissions: employeeFormState.commissions,
    commissionAccrualStartDate: employeeFormState.commissionAccrualStartDate || values.workStartDate || values.contractStartDate,
    commissionPaused: employeeFormState.commissionPaused,
    commissionPauseReason: employeeFormState.commissionPauseReason,
    commissionPausedByLeaveId: employeeFormState.commissionPausedByLeaveId,
    commissionPausedAt: employeeFormState.commissionPausedAt,
    signatureAttachmentId: employeeFormState.signatureAttachmentId,
    fingerprintAttachmentId: employeeFormState.fingerprintAttachmentId,
    consent: employeeFormState.consent,
    color: current?.color || ["teal", "blue", "violet", "amber", "rose"][employees.length % 5],
    attendance: current?.attendance ?? (values.status === "active" ? "08:00" : null)
  });
  employees = current
    ? employees.map((item) => item.id === record.id ? record : item)
    : [record, ...employees];
  await dbSaveEmployee(record);
  await saveCloudStateNow();
  document.querySelector("#employeeModal").close();
  renderAll();
  showToast(current ? "تم تحديث بيانات الموظف وحفظه في القاعدة" : "تمت إضافة الموظف وحفظه في القاعدة");
}

async function setSingleAttachment(key, file) {
  const id = await saveAttachment(file, key);
  const mapping = {
    identity: "identityAttachmentId",
    signature: "signatureAttachmentId",
    fingerprint: "fingerprintAttachmentId"
  };
  employeeFormState[mapping[key]] = id;
  if (key === "identity") updateSingleAttachmentControl("identity", id);
  else renderDocumentation();
}

function updateSingleAttachmentControl(key, id) {
  const input = document.querySelector(`[data-single-attachment="${key}"]`);
  const control = input.closest(".compact-file-control");
  control.classList.toggle("has-file", Boolean(id));
  control.querySelector(":scope > span:last-of-type").textContent = id ? "تم الإرفاق" : "إرفاق";
  const button = document.querySelector(`[data-view-single-attachment="${key}"]`);
  button.hidden = !id;
  button.dataset.attachmentId = id || "";
}

function readDynamicField(target, groupName, fieldName) {
  const container = target.closest(`[data-${groupName}-index]`);
  if (!container) return null;
  return { index: Number(container.dataset[`${groupName}Index`]), field: target.dataset[fieldName] };
}

function profileValue(label, value, options = {}) {
  const classes = [
    "employee-profile-value",
    options.wide ? "wide" : "",
    options.latin ? "latin-number" : "",
    options.stateClass ? `profile-state-${options.stateClass}` : ""
  ].filter(Boolean).join(" ");
  const safeValue = options.raw ? value : escapeHtml(value || "—");
  return `<div class="${classes}"><span>${escapeHtml(label)}</span><strong>${safeValue || "—"}</strong></div>`;
}

function profileCard(title, items, options = {}) {
  const classes = ["employee-profile-card", options.compact ? "compact" : ""].filter(Boolean).join(" ");
  return `<section class="${classes}"><h3>${escapeHtml(title)}</h3><div class="employee-profile-fields">${items.join("")}</div></section>`;
}

function getEmployeeAgeLabel(employee) {
  const birth = parseDate(employee.birthDate);
  return birth ? formatDuration(durationParts(birth)) : "—";
}

function getEmployeeServiceLabel(employee) {
  const start = parseDate(employee.workStartDate || employee.contractStartDate || employee.joinDate);
  return start ? formatDuration(durationParts(start)) : "—";
}

function getPrimaryPassport(employee) {
  return Array.isArray(employee.passports) && employee.passports.length ? employee.passports[0] : null;
}

function getPrimaryBankAccount(employee) {
  return Array.isArray(employee.bankAccounts) && employee.bankAccounts.length ? employee.bankAccounts[0] : null;
}

function commissionStartDateForEmployee(employee = {}) {
  const candidates = [
    employee.commissionAccrualStartDate,
    employee.commissionStartDate,
    employee.workStartDate,
    employee.contractStartDate,
    employee.joinDate
  ];
  const valid = candidates.find((value) => parseDate(value));
  return valid || formatInputDate(todayAtNoon());
}

function calculateEmployeeMonthlyAttendanceStats(employee, referenceDate = todayAtNoon()) {
  const stats = { present: 0, absent: 0, leave: 0, workdays: 0 };
  if (!employee || typeof employee !== "object") return stats;
  const safeReference = referenceDate instanceof Date && !Number.isNaN(referenceDate.getTime()) ? referenceDate : todayAtNoon();
  const start = new Date(safeReference.getFullYear(), safeReference.getMonth(), 1, 12, 0, 0, 0);
  const end = new Date(safeReference);
  end.setHours(12, 0, 0, 0);
  for (let current = new Date(start); current <= end; current = addDays(current, 1)) {
    const dateString = formatInputDate(current);
    try {
      if (!dateString || !isWorkday(dateString)) continue;
      stats.workdays += 1;
      const state = attendanceStateForEmployee(employee, dateString) || {};
      if (state.present) stats.present += 1;
      if (state.absent) stats.absent += 1;
      if (state.leave) stats.leave += 1;
    } catch (error) {
      console.warn("Monthly attendance stat skipped", dateString, error);
    }
  }
  return stats;
}

function commissionProfileSummary(employee) {
  const startDate = commissionStartDateForEmployee(employee);
  const endDate = formatInputDate(todayAtNoon());
  const commission = calculateCommission(employee.baseSalary, startDate, endDate);
  if (employee.commissionPaused) {
    return {
      startDate,
      endDate,
      days: 0,
      amount: 0,
      status: employee.commissionPauseReason || "استحقاق العمولة متوقف"
    };
  }
  if (employee.status !== "active") {
    return { startDate, endDate, days: 0, amount: 0, status: "غير مستحقة بسبب حالة العمل" };
  }
  return {
    startDate,
    endDate,
    days: commission.days,
    amount: commission.amount,
    status: commission.days > 0 && employee.baseSalary > 0 ? "مستحقة حسب الأيام" : "لا توجد أيام مستحقة"
  };
}

async function openQuickView(employeeId) {
  const employee = getEmployee(employeeId);
  if (!employee) return;
  const quickContent = document.querySelector("#quickViewContent");
  const quickModal = document.querySelector("#quickViewModal");
  if (!quickContent || !quickModal) return;

  const safeProfilePart = (label, callback, fallback) => {
    try {
      const result = callback();
      return result ?? fallback;
    } catch (error) {
      console.warn(`Quick profile part skipped: ${label}`, error);
      return fallback;
    }
  };

  const title = document.querySelector("#quickViewModal h2");
  const subtitle = document.querySelector("#quickViewModal .modal-head p");
  if (title) title.textContent = "ملف الموظف";
  if (subtitle) subtitle.textContent = "عرض شامل للبيانات الرئيسية والوظيفية والمالية";

  try {
    const identityExpiry = safeProfilePart("identity expiry", () => expiryStatus(employee.identityExpiryGregorian), { text: "", className: "" });
    const passport = safeProfilePart("passport", () => getPrimaryPassport(employee) || {}, {});
    const passportExpiry = safeProfilePart("passport expiry", () => passport.expiryDate ? expiryStatus(passport.expiryDate) : { text: "", className: "" }, { text: "", className: "" });
    const effectiveContractEndDate = employee.renewedContractEndDate || employee.contractEndDate || "";
    const contractExpiry = safeProfilePart("contract expiry", () => employee.contractType === "fixed" && effectiveContractEndDate ? expiryStatus(effectiveContractEndDate) : { text: "غير محدد المدة", className: "" }, { text: "—", className: "" });
    const bankAccount = safeProfilePart("bank account", () => getPrimaryBankAccount(employee) || {}, {});
    const salary = safeProfilePart("salary", () => calculateEmployeeSalary(employee), { insurance: 0, total: Number(employee.salary || 0) });
    const commission = safeProfilePart("commission", () => commissionProfileSummary(employee), { startDate: "", endDate: "", days: 0, amount: 0, status: "—" });
    const monthlyStats = safeProfilePart("monthly attendance", () => calculateEmployeeMonthlyAttendanceStats(employee), { present: 0, absent: 0, leave: 0, workdays: 0 });

    const photo = employee.photoAttachmentId
      ? `<div class="quick-profile-photo"><img data-attachment-image="${escapeHtml(employee.photoAttachmentId)}" alt="" /></div>`
      : employee.legacyPhoto
        ? `<div class="quick-profile-photo"><img src="${escapeHtml(employee.legacyPhoto)}" alt="" /></div>`
        : `<div class="quick-profile-photo">${getInitials(employee.name || "—")}</div>`;

    const identityItems = [
      profileValue("اسم الموظف", employee.name || "—"),
      profileValue("الجنسية", employee.nationality || "—"),
      profileValue("تاريخ الميلاد", formatDateEn(employee.birthDate), { latin: true }),
      profileValue("العمر", getEmployeeAgeLabel(employee)),
      profileValue("النوع", employee.gender === "female" ? "أنثى" : "ذكر"),
      profileValue("حالة العمل", statusBadge(employee.status), { raw: true }),
      profileValue("رقم الهوية", employee.identityNumber || "—", { latin: true }),
      profileValue("انتهاء الهوية", formatDateEn(employee.identityExpiryGregorian), { latin: true }),
      profileValue("المدة المتبقية للهوية", identityExpiry.text || "—", { wide: true, stateClass: identityExpiry.className || "" }),
      profileValue("رقم الجواز", passport.number || "—", { latin: true }),
      profileValue("انتهاء الجواز", formatDateEn(passport.expiryDate), { latin: true }),
      profileValue("المدة المتبقية للجواز", passportExpiry.text || "—", { wide: true, stateClass: passportExpiry.className || "" }),
      profileValue("رقم الجوال", employee.phone || "—", { latin: true }),
      profileValue("البريد الإلكتروني", employee.email || "—", { latin: true }),
      profileValue("جوال الطوارئ", employee.emergencyPhone || "—", { latin: true }),
      profileValue("جوال بلد الموظف", employee.homeCountryPhone || "—", { latin: true })
    ];

    const jobItems = [
      profileValue("المسمى الوظيفي", employee.role || "—"),
      profileValue("الإدارة", employee.department || "—"),
      profileValue("القسم", employee.section || "—"),
      profileValue("المدير المباشر", employee.directManager || "—"),
      profileValue("نوع العقد", employee.contractType === "fixed" ? "محدد المدة" : "غير محدد المدة"),
      profileValue("تاريخ بداية العقد", formatDateEn(employee.contractStartDate), { latin: true }),
      profileValue("تاريخ المباشرة", formatDateEn(employee.workStartDate || employee.joinDate), { latin: true }),
      profileValue("مدة العقد", employee.contractType === "fixed" ? `${arabicNumber(employee.contractMonths)} شهر` : "غير محدد"),
      profileValue("نهاية العقد", formatDateEn(employee.contractEndDate), { latin: true }),
      profileValue("تاريخ الانتهاء الجديد", employee.renewalOption === "same" ? formatDateEn(employee.renewedContractEndDate) : "—", { latin: true }),
      profileValue("المدة المتبقية لانتهاء العقد", contractExpiry.text || "—", { wide: true, stateClass: contractExpiry.className || "" })
    ];

    const salaryItems = [
      profileValue("الراتب الأساسي", formatCurrencyEn(employee.baseSalary || employee.salary || 0), { latin: true }),
      profileValue("بدل السكن", formatCurrencyEn(employee.housingAllowance || 0), { latin: true }),
      profileValue("بدل المواصلات", formatCurrencyEn(employee.transportAllowance || 0), { latin: true }),
      profileValue("بدلات أخرى", formatCurrencyEn(employee.otherAllowances || 0), { latin: true }),
      profileValue("خصم التأمينات", employee.insuranceEnabled ? formatCurrencyEn(employee.insuranceDeduction || salary.insurance || 0) : "غير مفعل", { latin: true }),
      profileValue("إجمالي الراتب", formatCurrencyEn(employee.totalSalary || salary.total || employee.salary || 0), { latin: true })
    ];

    const commissionItems = [
      profileValue("بداية الاستحقاق", formatDateEn(commission.startDate), { latin: true }),
      profileValue("نهاية الاستحقاق", formatDateEn(commission.endDate), { latin: true }),
      profileValue("عدد أيام الاستحقاق", arabicNumber(commission.days || 0)),
      profileValue("قيمة العمولة", formatCurrencyEn(commission.amount || 0), { latin: true }),
      profileValue("حالة الاستحقاق", commission.status || "—", { wide: true })
    ];

    const bankingItems = [
      profileValue("اسم البنك", bankAccount.bankName || "—"),
      profileValue("رقم الآيبان", bankAccount.iban || "—", { latin: true, wide: true })
    ];

    quickContent.innerHTML = `<div class="employee-profile-view">
      <aside class="employee-profile-side">
        ${photo}
        <h3>${escapeHtml(employee.name || "—")}</h3>
        <p>${escapeHtml(employee.role || "—")}</p>
        <div class="employee-profile-side-number"><span>رقم الموظف</span><strong class="latin-number">${escapeHtml(employee.employeeNumber || "—")}</strong></div>
        <div class="employee-profile-side-number"><span>مدة الخدمة</span><strong>${getEmployeeServiceLabel(employee)}</strong></div>
        <div class="employee-profile-side-status">${statusBadge(employee.status)}</div>
      </aside>
      <main class="employee-profile-main">
        <section class="employee-profile-stats-card employee-profile-stats-top">
          <h3>إحصائيات هذا الشهر</h3>
          <div><span>أيام الحضور هذا الشهر</span><strong>${arabicNumber(monthlyStats.present || 0)}</strong></div>
          <div><span>أيام الغياب هذا الشهر</span><strong>${arabicNumber(monthlyStats.absent || 0)}</strong></div>
          <div><span>أيام الإجازة هذا الشهر</span><strong>${arabicNumber(monthlyStats.leave || 0)}</strong></div>
          <div><span>أيام العمل المحتسبة</span><strong>${arabicNumber(monthlyStats.workdays || 0)}</strong></div>
        </section>
        <div class="employee-profile-columns">
          <div class="employee-profile-stack">
            ${profileCard("البيانات الرئيسية", identityItems)}
            ${profileCard("البيانات البنكية", bankingItems)}
          </div>
          <div class="employee-profile-stack">
            ${profileCard("البيانات الوظيفية", jobItems)}
            ${profileCard("تفاصيل الراتب", salaryItems)}
            ${profileCard("تفاصيل العمولات", commissionItems)}
          </div>
        </div>
      </main>
    </div>`;
  } catch (error) {
    console.error("Quick view failed", error);
    quickContent.innerHTML = `<div class="empty-state"><strong>تعذر عرض ملف الموظف</strong><p>حدث خطأ أثناء قراءة بيانات الموظف. يمكن فتح التعديل ومراجعة البيانات، أو إعادة المحاولة بعد تحديث الصفحة.</p></div>`;
  }

  quickModal.showModal();
  await hydrateAttachmentImages(quickContent);
}

function currentFormEmployeeSnapshot() {
  const form = document.querySelector("#employeeForm");
  const salary = calculateSalaryFromForm();
  const current = form.elements.employeeId.value ? getEmployee(form.elements.employeeId.value) : null;
  const sequence = current?.sequence || nextEmployeeSequence();
  return {
    id: form.elements.employeeId.value || `draft-${Date.now()}`,
    sequence,
    employeeNumber: buildEmployeeNumber(form.elements.identityNumber.value, form.elements.phone.value, sequence),
    name: [form.elements.firstName.value, form.elements.fatherName.value, form.elements.grandName.value, form.elements.familyName.value].map((value) => value.trim()).filter(Boolean).join(" "),
    identityNumber: form.elements.identityNumber.value,
    nationality: form.elements.nationalityType.value === "saudi" ? "سعودي" : form.elements.nationality.value,
    gender: form.elements.gender.value,
    birthDate: form.elements.birthDate.value,
    identityExpiryGregorian: form.elements.identityExpiryGregorian.value,
    department: form.elements.department.value,
    directManager: form.elements.directManager.value,
    role: form.elements.role.value,
    contractStartDate: form.elements.contractStartDate.value,
    workStartDate: form.elements.workStartDate.value,
    contractType: form.elements.contractType.value,
    contractMonths: Number(form.elements.contractMonths.value || 0),
    contractEndDate: form.elements.contractEndDate.value,
    renewalOption: form.elements.renewalOption.value,
    renewedContractEndDate: form.elements.renewedContractEndDate.value,
    baseSalary: salary.base,
    housingAllowance: salary.housing,
    transportAllowance: salary.transport,
    otherAllowances: salary.other,
    insuranceEnabled: form.elements.insuranceEnabled.checked,
    insuranceDeduction: salary.insurance,
    totalSalary: salary.total,
    phone: form.elements.phone.value,
    signatureAttachmentId: employeeFormState.signatureAttachmentId,
    fingerprintAttachmentId: employeeFormState.fingerprintAttachmentId
  };
}

async function buildClearanceMarkup(clearance) {
  const employee = clearance.employee;
  const signatureUrl = clearance.authType === "signature" || clearance.authType === "both"
    ? await attachmentUrl(employee.signatureAttachmentId) : "";
  const fingerprintUrl = clearance.authType === "fingerprint" || clearance.authType === "both"
    ? await attachmentUrl(employee.fingerprintAttachmentId) : "";
  return `<article class="clearance-sheet">
    <h2 class="clearance-title">مخالصة استلام عمولة</h2>
    <p class="clearance-subtitle">شركة نواة للحلول الرقمية</p>
    <section class="clearance-section"><h4>بيانات الموظف</h4><div class="clearance-grid">
      <div><span>رقم الموظف</span><strong>${escapeHtml(employee.employeeNumber)}</strong></div>
      <div><span>الاسم</span><strong>${escapeHtml(employee.name)}</strong></div>
      <div><span>رقم الهوية</span><strong>${escapeHtml(employee.identityNumber)}</strong></div>
      <div><span>الجنسية</span><strong>${escapeHtml(employee.nationality)}</strong></div>
      <div><span>النوع</span><strong>${employee.gender === "female" ? "أنثى" : "ذكر"}</strong></div>
      <div><span>تاريخ الميلاد</span><strong class="latin-number">${formatDateEn(employee.birthDate)}</strong></div>
      <div><span>رقم الجوال</span><strong class="latin-number">${escapeHtml(employee.phone || "—")}</strong></div>
      <div><span>انتهاء الهوية</span><strong class="latin-number">${formatDateEn(employee.identityExpiryGregorian)}</strong></div>
    </div></section>
    <section class="clearance-section"><h4>البيانات الوظيفية</h4><div class="clearance-grid">
      <div><span>الإدارة</span><strong>${escapeHtml(employee.department)}</strong></div>
      <div><span>المدير المباشر</span><strong>${escapeHtml(employee.directManager || "—")}</strong></div>
      <div><span>المسمى الوظيفي</span><strong>${escapeHtml(employee.role)}</strong></div>
      <div><span>نوع العقد</span><strong>${employee.contractType === "fixed" ? "محدد المدة" : "غير محدد المدة"}</strong></div>
      <div><span>تاريخ بداية العقد</span><strong class="latin-number">${formatDateEn(employee.contractStartDate)}</strong></div>
      <div><span>تاريخ المباشرة</span><strong class="latin-number">${formatDateEn(employee.workStartDate)}</strong></div>
      <div><span>مدة العقد بالأشهر</span><strong class="latin-number">${employee.contractType === "fixed" ? employee.contractMonths : "—"}</strong></div>
      <div><span>تاريخ انتهاء العقد</span><strong class="latin-number">${formatDateEn(employee.contractEndDate)}</strong></div>
      <div><span>التجديد / الانتهاء الجديد</span><strong>${employee.renewalOption === "same" ? `مدة مماثلة - ${formatDateEn(employee.renewedContractEndDate)}` : "عدم التجديد"}</strong></div>
    </div></section>
    <section class="clearance-section"><h4>تفاصيل الراتب</h4><div class="clearance-grid">
      <div><span>الراتب الأساسي</span><strong>${formatCurrencyEn(employee.baseSalary)}</strong></div>
      <div><span>بدل السكن</span><strong>${formatCurrencyEn(employee.housingAllowance)}</strong></div>
      <div><span>بدل المواصلات</span><strong>${formatCurrencyEn(employee.transportAllowance)}</strong></div>
      <div><span>بدلات أخرى</span><strong>${formatCurrencyEn(employee.otherAllowances)}</strong></div>
      <div><span>خصم التأمينات</span><strong>${formatCurrencyEn(employee.insuranceDeduction)}</strong></div>
      <div><span>إجمالي الراتب</span><strong>${formatCurrencyEn(employee.totalSalary)}</strong></div>
    </div></section>
    <section class="clearance-section"><h4>تفاصيل العمولة</h4><div class="clearance-grid">
      <div><span>بداية الاستحقاق</span><strong class="latin-number">${formatDateEn(clearance.startDate)}</strong></div>
      <div><span>نهاية الاستحقاق</span><strong class="latin-number">${formatDateEn(clearance.endDate)}</strong></div>
      <div><span>الأيام المستحقة</span><strong>${clearance.days}</strong></div>
      <div><span>أساس الاحتساب</span><strong>${formatCurrencyEn(employee.baseSalary)}</strong></div>
      <div><span>قيمة العمولة</span><strong>${formatCurrencyEn(clearance.amount)}</strong></div>
      <div><span>تاريخ الصرف</span><strong class="latin-number">${formatDateTimeEn(clearance.paymentDate)}</strong></div>
      <div class="clearance-wide"><span>تفقيط العمولة</span><strong>${amountToWords(clearance.amount)}</strong></div>
    </div><p class="clearance-declaration">أقر أنا الموظف الموضحة بياناتي أعلاه بأنني استلمت كامل قيمة العمولة المبينة في هذه المخالصة، وأقر باستلام جميع حقوقي المالية المستحقة حتى تاريخ صرف العمولة، ولا توجد لي مطالبات مالية متعلقة بهذه العمولة تجاه المنشأة.</p></section>
    <div class="clearance-auth">
      <div>${signatureUrl ? `<img src="${signatureUrl}" alt="توقيع الموظف" />` : ""}<strong>${escapeHtml(employee.name)}</strong><small>توقيع الموظف</small></div>
      <div>${fingerprintUrl ? `<img src="${fingerprintUrl}" alt="بصمة الموظف" />` : ""}<strong class="latin-number">${formatDateTimeEn(clearance.paymentDate)}</strong><small>البصمة / تاريخ الاستلام</small></div>
    </div>
  </article>`;
}

async function startCommissionPayment() {
  const form = document.querySelector("#employeeForm");
  const startDate = form.elements.commissionStartDate.value;
  const salary = calculateSalaryFromForm();
  const endDate = formatInputDate(todayAtNoon());
  const { days, amount } = calculateCommission(salary.base, startDate, endDate);
  if (employeeFormState.commissionPaused || form.elements.status.value !== "active") {
    showToast("لا يمكن صرف العمولة إلا لموظف على رأس العمل واستحقاقه نشط");
    return;
  }
  if (!startDate || !days || !amount) {
    showToast("أدخل تاريخ بداية الاستحقاق وتأكد من تفاصيل الراتب");
    return;
  }
  pendingClearance = {
    id: `commission-${Date.now()}`,
    startDate,
    endDate,
    days,
    amount,
    paymentDate: new Date().toISOString(),
    employee: currentFormEmployeeSnapshot(),
    authType: "signature",
    source: "manual"
  };
  document.querySelector('[name="commissionAuth"][value="signature"]').checked = true;
  document.querySelector("#commissionAuthModal").showModal();
}

async function previewClearance() {
  if (!pendingClearance) return;
  const authType = document.querySelector('[name="commissionAuth"]:checked').value;
  const needsSignature = authType === "signature" || authType === "both";
  const needsFingerprint = authType === "fingerprint" || authType === "both";
  if (needsSignature && !employeeFormState.signatureAttachmentId) {
    showToast("أرفق توقيع الموظف من قسم التوثيق أولًا");
    return;
  }
  if (needsFingerprint && !employeeFormState.fingerprintAttachmentId) {
    showToast("أرفق بصمة الموظف من قسم التوثيق أولًا");
    return;
  }
  pendingClearance.authType = authType;
  pendingClearance.employee = currentFormEmployeeSnapshot();
  document.querySelector("#commissionAuthModal").close();
  document.querySelector("#clearancePreview").innerHTML = await buildClearanceMarkup(pendingClearance);
  document.querySelector("#clearanceModal").showModal();
}

async function issueClearance() {
  if (!pendingClearance) return;
  employeeFormState.commissions.push(structuredClone(pendingClearance));
  employeeFormState.commissionAccrualStartDate = pendingClearance.endDate || formatInputDate(todayAtNoon());
  const form = document.querySelector("#employeeForm");
  form.elements.commissionPaymentDate.value = formatDateTimeEn(pendingClearance.paymentDate);
  form.elements.commissionStartDate.value = employeeFormState.commissionAccrualStartDate;
  updateCommissionCalculations();
  renderCommissionHistory();
  document.querySelector("#clearanceModal").close();
  showToast("تم إصدار مخالصة العمولة وترحيل بداية الاستحقاق للدورة التالية");
  pendingClearance = null;
}

const clearancePrintStyle = `@page{size:A4;margin:8mm}*{box-sizing:border-box}body{margin:0;font-family:Almarai,Arial,sans-serif;color:#172226}.clearance-sheet{padding:6mm;border:1px solid #dfe7e9}.clearance-title{margin:0;text-align:center;font-size:17px;color:#0f5f59}.clearance-subtitle{text-align:center;color:#718084;font-size:8px;margin:3px 0 8px}.clearance-section{margin-top:7px}.clearance-section h4{font-size:9px;margin:0 0 4px;padding-bottom:4px;border-bottom:1px solid #e5ebed}.clearance-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}.clearance-grid div{padding:5px;background:#f5f8f8;border-radius:4px}.clearance-grid .clearance-wide{grid-column:1/-1}.clearance-grid span{display:block;color:#748287;font-size:6px}.clearance-grid strong{display:block;margin-top:2px;font-size:7px}.clearance-declaration{font-size:7.5px;line-height:1.65;text-align:justify;margin:7px 0}.clearance-auth{display:flex;min-height:62px;align-items:end;justify-content:space-around;text-align:center}.clearance-auth img{display:block;max-width:100px;max-height:45px;margin:0 auto 3px;object-fit:contain}.clearance-auth strong,.clearance-auth small{display:block;font-size:7px}.clearance-auth small{color:#748287;margin-top:2px}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}`;

async function printCommission(commission) {
  try {
    const safeCommission = commission.employee
      ? commission
      : { ...commission, employee: currentFormEmployeeSnapshot(), authType: commission.authType || "signature" };
    const markup = await buildClearanceMarkup(safeCommission);
    printHtmlDocument("مخالصة استلام عمولة", markup, clearancePrintStyle);
  } catch (error) {
    console.error(error);
    showToast("تعذر تجهيز طباعة المخالصة");
  }
}

function openPrintPage(title, markup, existingWindow = null) {
  if (existingWindow) {
    existingWindow.document.open();
    existingWindow.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap" rel="stylesheet"><style>${clearancePrintStyle}</style></head><body>${markup}<script>window.addEventListener('load',()=>setTimeout(()=>{window.focus();window.print();},300));<\/script></body></html>`);
    existingWindow.document.close();
    return;
  }
  printHtmlDocument(title, markup, clearancePrintStyle);
}


async function saveEmployeeRecord(employee) {
  const normalized = normalizeEmployee(employee);
  const index = employees.findIndex((item) => item.id === normalized.id);
  if (index >= 0) employees[index] = normalized;
  else employees.push(normalized);
  if (db) {
    try {
      await dbSaveEmployee(normalized);
    } catch (error) {
      console.error(error);
    }
  }
  queueCloudStateSave();
}

async function createAbsenceMinute(record) {
  const employee = getEmployee(record.employeeId);
  if (!employee) return;
  const exists = employee.minutes?.some((minute) => minute.sourceAbsenceId === record.id);
  if (exists) return;
  const period = record.from === record.to ? formatDate(record.from) : `${formatDate(record.from)} إلى ${formatDate(record.to)}`;
  const details = absencePenaltyDetails(record);
  const meta = absenceTypeMeta(record.type);
  const segmentText = details.showPeriod ? `، ونوع الفترة الغائبة: ${details.periodLabel || absencePeriodMeta(record.periodSegment || "fullDay").label}` : "";
  const deductionAmount = absenceDeductionAmount(record);
  const absenceTemplate = getMinuteTemplate("محضر غياب");
  const minute = createEmployeeMinuteRecord({
    type: "محضر غياب",
    templateId: absenceTemplate?.id || "absence-minute",
    fieldValues: {
      absenceDate: record.from || "",
      absenceReason: record.reason || "",
      penalty: `${details.policy}: ${details.text}`
    },
    text: `تم تسجيل ${meta.label} للموظف عن العمل للفترة ${period}${segmentText}${record.reason ? `، والسبب المدخل: ${record.reason}` : ""}.`,
    penalty: `${details.policy}: ${details.text}`,
    deductionAmount,
    deductionAmountLabel: formatCurrencyEn(deductionAmount),
    sourceAbsenceId: record.id,
    employeeId: record.employeeId,
    absenceType: record.type,
    absencePeriod: period,
    absencePolicy: details.policy
  });
  employee.minutes = [...(employee.minutes || []), minute];
  await saveEmployeeRecord(employee);
}

function printHtmlDocument(title, markup, style = "") {
  const frame = document.createElement("iframe");
  frame.setAttribute("title", title);
  frame.style.position = "fixed";
  frame.style.left = "0";
  frame.style.bottom = "0";
  frame.style.width = "0";
  frame.style.height = "0";
  frame.style.border = "0";
  frame.style.opacity = "0";
  document.body.appendChild(frame);
  const doc = frame.contentWindow.document;
  doc.open();
  doc.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${escapeHtml(title)}</title><link href="https://fonts.googleapis.com/css2?family=Almarai:wght@400;700;800&display=swap" rel="stylesheet"><style>${style}</style></head><body>${markup}</body></html>`);
  doc.close();
  let printed = false;
  const runPrint = () => {
    if (printed) return;
    printed = true;
    try {
      frame.contentWindow.focus();
      frame.contentWindow.print();
    } catch (error) {
      console.error(error);
      showToast("تعذر تشغيل الطباعة من المتصفح");
    }
    setTimeout(() => frame.remove(), 1500);
  };
  frame.onload = () => setTimeout(runPrint, 250);
  setTimeout(runPrint, 700);
}

async function printAbsenceMinute(minute) {
  const employee = getEmployee(minute.employeeId || employeeFormState.employeeId);
  if (!employee || !minute) { showToast("تعذر العثور على بيانات المحضر"); return; }
  const absence = attendanceExceptions.find((record) => record.id === minute.sourceAbsenceId) || null;
  const details = absence ? absencePenaltyDetails(absence) : { policy: "—", text: minute.penalty || "—", periodLabel: "—", showPeriod: false };
  const period = absence ? (absence.from === absence.to ? formatDate(absence.from) : `${formatDate(absence.from)} إلى ${formatDate(absence.to)}`) : "—";
  const meta = absenceTypeMeta(absence?.type || "unexcused");
  const deductionAmount = absence ? absenceDeductionAmount(absence) : Number(minute.deductionAmount || 0);
  const template = getMinuteTemplate(minute.templateId || minute.type);
  const employeeFieldValue = (id) => {
    if (id === "employeeName") return employee.name || "—";
    if (id === "nationality") return employee.nationality || "—";
    if (id === "identityNumber") return employee.identityNumber || "—";
    if (id === "role") return employee.role || "—";
    if (id === "workStartDate") return formatDate(employee.workStartDate || employee.contractStartDate) || "—";
    if (id === "salary") return formatCurrencyEn(moneyValue(employee));
    return "—";
  };
  const selectedEmployeeFields = !absence ? (minute.employeeFields || template?.employeeFields || []) : [];
  const employeeSelectedMarkup = selectedEmployeeFields.map((id) => {
    const item = MINUTE_EMPLOYEE_FIELDS.find((field) => field.id === id);
    return `<div><span>${escapeHtml(item?.label || id)}</span><strong>${escapeHtml(employeeFieldValue(id))}</strong></div>`;
  }).join("");
  const customFieldsMarkup = !absence ? `${employeeSelectedMarkup}${template?.fields?.length ? template.fields.map((field) => {
    const value = minuteFieldValueLabel(field, minute.fieldValues?.[field.id]);
    return `<div><span>${escapeHtml(field.label)}</span><strong>${escapeHtml(value || "—")}</strong></div>`;
  }).join("") : ""}` : "";
  const markup = `
    <main class="minute-sheet">
      <h1>${escapeHtml(minute.type || "محضر موظف")}</h1>
      <p class="minute-subtitle">تم إنشاء هذا المحضر من نظام الموارد البشرية</p>
      <section><h2>بيانات الموظف</h2><div class="minute-grid">
        <div><span>اسم الموظف</span><strong>${escapeHtml(employee.name || "—")}</strong></div>
        <div><span>رقم الموظف</span><strong>${escapeHtml(employee.employeeNumber || "—")}</strong></div>
        <div><span>الإدارة</span><strong>${escapeHtml(employee.department || "—")}</strong></div>
        <div><span>المسمى الوظيفي</span><strong>${escapeHtml(employee.role || "—")}</strong></div>
      </div></section>
      <section><h2>${absence ? "بيانات الغياب" : "بيانات المحضر"}</h2><div class="minute-grid">
        ${absence ? `<div><span>الفترة</span><strong>${period}</strong></div>
        <div><span>نوع الغياب</span><strong>${escapeHtml(meta.label)}</strong></div>
        <div><span>القاعدة المطبقة</span><strong>${escapeHtml(details.policy || absence?.policy || "—")}</strong></div>
        <div><span>الفترة الغائبة</span><strong>${details.showPeriod ? escapeHtml(details.periodLabel || absencePeriodMeta(absence?.periodSegment || "fullDay").label) : "—"}</strong></div>
        <div><span>الحسم المالي</span><strong>${formatCurrencyEn(deductionAmount)}</strong></div>
        <div class="wide"><span>سبب أو ملاحظة</span><strong>${escapeHtml(absence?.reason || "—")}</strong></div>` : customFieldsMarkup}
      </div></section>
      <section><h2>الجزاء الموقع على الموظف</h2><p class="penalty-box">${escapeHtml(minuteRecordPenalty(minute) || details.text || "—")}</p></section>
      <section class="signatures"><div><span>الموظف</span><strong>${escapeHtml(employee.name || "—")}</strong></div><div><span>المسؤول</span><strong>${escapeHtml(minute.createdBy || currentUser)}</strong></div></section>
    </main>`;
  const style = `@page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0;font-family:Almarai,Arial,sans-serif;color:#172226}.minute-sheet{border:1px solid #dfe7e9;padding:10mm;min-height:270mm}h1{text-align:center;color:#9f1239;margin:0;font-size:22px}.minute-subtitle{text-align:center;color:#6b7280;margin:6px 0 18px}section{margin-top:16px}h2{font-size:14px;border-bottom:1px solid #e5e7eb;padding-bottom:7px;color:#0f5f59}.minute-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.minute-grid div{background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.minute-grid .wide{grid-column:1/-1}.minute-grid span{display:block;font-size:11px;color:#64748b}.minute-grid strong{display:block;margin-top:4px;font-size:13px}.penalty-box{border:1px solid #fecdd3;background:#fff1f2;color:#9f1239;border-radius:10px;padding:12px;line-height:1.8;font-weight:700}.signatures{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:35px}.signatures div{height:90px;border-top:1px solid #cbd5e1;padding-top:8px;text-align:center}.signatures span,.signatures strong{display:block}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}`;
  printHtmlDocument(`${minute.type || "محضر"} - ${employee.name || ""}`, markup, style);
}

function openAbsenceModal() {
  populateFormOptions();
  const form = document.querySelector("#absenceForm");
  form.reset();
  form.elements.from.value = selectedAttendanceDate;
  form.elements.to.value = selectedAttendanceDate;
  updateAbsencePeriodVisibility();
  document.querySelector("#absenceModal").showModal();
}

async function handleAbsenceSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const from = values.from;
  const to = values.to;
  if (!values.employeeId || !from || !to) {
    showToast("اختر الموظف وفترة الغياب");
    return;
  }
  if (parseDate(from) > parseDate(to)) {
    showToast("تاريخ نهاية الغياب يجب أن يكون بعد تاريخ البداية");
    return;
  }
  const duplicate = attendanceExceptions.find((record) => record.employeeId === values.employeeId && dateRangesOverlap(record.from, record.to, from, to));
  if (duplicate) {
    showToast("يوجد غياب مسجل لهذا الموظف ضمن نفس الفترة");
    return;
  }
  const record = {
    id: `absence-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    employeeId: values.employeeId,
    from,
    to,
    type: values.type || "unexcused",
    policy: activeAbsencePolicyLabel(),
    periodSegment: isEstablishmentAbsencePolicyActive() ? (values.periodSegment || "fullDay") : "fullDay",
    deductionDays: 0,
    reason: values.reason?.trim() || "",
    createdAt: new Date().toISOString(),
    createdBy: currentUser
  };
  const details = absencePenaltyDetails(record);
  record.deductionDays = Number(details.deductionDays ?? details.days ?? 0) || 0;
  record.penaltyText = details.text;
  record.policy = details.policy;
  record.deductionAmount = absenceDeductionAmount(record);
  attendanceExceptions.unshift(record);
  await createAbsenceMinute(record);
  saveLocalMeta();
  form.closest("dialog").close();
  selectedAttendanceDate = from;
  renderAll();
  showToast("تم تسجيل الغياب وإنشاء محضر غياب");
}

async function deleteAbsenceRecord(absenceId) {
  const record = attendanceExceptions.find((item) => item.id === absenceId);
  if (!record) return;
  attendanceExceptions = attendanceExceptions.filter((item) => item.id !== absenceId);
  const employee = getEmployee(record.employeeId);
  if (employee?.minutes?.length) {
    employee.minutes = employee.minutes.filter((minute) => minute.sourceAbsenceId !== absenceId);
    await saveEmployeeRecord(employee);
  }
  saveLocalMeta();
  renderAll();
  showToast("تم حذف سجل الغياب");
}

function setSelectedAttendanceDate(dateString) {
  if (!parseDate(dateString)) return;
  selectedAttendanceDate = dateString;
  renderAttendance(document.querySelector("#attendanceSearch")?.value || "");
}

function switchView(viewName) {
  if (viewName === "users") renderUsersManagement();
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewName));
  document.querySelector(`#${viewName}View`)?.classList.add("active");
  const meta = pageMeta[viewName] || pageMeta.dashboard;
  document.querySelector("#pageTitle").textContent = meta[0];
  document.querySelector("#pageSubtitle").textContent = meta[1];
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSidebar() {
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#sidebarOverlay").classList.remove("show");
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${iconSvg("check")}</span><p>${escapeHtml(message)}</p>`;
  document.querySelector("#toastContainer").appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function handleLeaveSubmit(event) {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget).entries());
  leaves.unshift({ id: `leave-${Date.now()}`, employeeId: values.employeeId, type: values.type, from: values.from, to: values.to, days: calculateDays(values.from, values.to), status: "pending", note: values.note.trim() });
  saveLocalMeta();
  event.currentTarget.closest("dialog").close();
  event.currentTarget.reset();
  renderAll();
  showToast("تم إرسال طلب الإجازة");
}

async function persistEmployeeRecord(employee) {
  const normalized = normalizeEmployee(employee, employees.findIndex((item) => item.id === employee.id));
  employees = employees.map((item) => item.id === normalized.id ? normalized : item);
  await dbSaveEmployee(normalized);
  await saveCloudStateNow();
  return normalized;
}

function commissionEventRows(rows) {
  return `<div class="commission-event-summary">${rows.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

function openLeaveCommissionApproval(id) {
  const leave = leaves.find((item) => item.id === id);
  const employee = leave ? getEmployee(leave.employeeId) : null;
  if (!leave || !employee) return;
  const startDate = commissionAccrualStart(employee);
  const commission = buildCommissionRecord(employee, startDate, leave.from, "leave", leave);
  pendingLeaveCommission = { leaveId: id, commissionId: commission.id, commission };
  document.querySelector("#leaveCommissionPreview").innerHTML = commissionEventRows([
    ["الموظف", escapeHtml(employee.name)],
    ["نوع الإجازة", escapeHtml(leave.type)],
    ["فترة الإجازة", `${formatDate(leave.from)} إلى ${formatDate(leave.to)}`],
    ["بداية الاستحقاق الحالية", formatDate(startDate) || "غير محددة"],
    ["أساس الاحتساب", formatCurrencyEn(employee.baseSalary)],
    ["الأيام المستحقة قبل الإجازة", `${arabicNumber(commission.days)} يوم`],
    ["قيمة العمولة عند التجميد", formatCurrencyEn(commission.amount)]
  ]);
  document.querySelector("#leaveCommissionModal").showModal();
}


async function approveLeaveOnly() {
  if (!pendingLeaveCommission) return;
  const leave = leaves.find((item) => item.id === pendingLeaveCommission.leaveId);
  const employee = leave ? getEmployee(leave.employeeId) : null;
  if (!leave || !employee) return;
  await persistEmployeeRecord({
    ...employee,
    status: "leave",
    attendance: null
  });
  leaves = leaves.map((item) => item.id === leave.id ? {
    ...item,
    status: "approved",
    approvedAt: new Date().toISOString(),
    commissionFrozenAt: "",
    commissionIssuedId: ""
  } : item);
  saveLocalMeta();
  renderAll();
  document.querySelector("#leaveCommissionModal").close();
  pendingLeaveCommission = null;
  showToast("تم اعتماد الإجازة دون تجميد العمولة");
}

async function confirmLeaveCommissionApproval() {
  if (!pendingLeaveCommission) return;
  const leave = leaves.find((item) => item.id === pendingLeaveCommission.leaveId);
  const employee = leave ? getEmployee(leave.employeeId) : null;
  if (!leave || !employee) return;
  const commission = pendingLeaveCommission.commission;
  const commissions = commission.days && commission.amount
    ? [...(employee.commissions || []), commission]
    : [...(employee.commissions || [])];
  await persistEmployeeRecord({
    ...employee,
    status: "leave",
    attendance: null,
    commissions,
    commissionPaused: true,
    commissionPauseReason: `متوقف بسبب ${leave.type} من ${formatDate(leave.from)} إلى ${formatDate(leave.to)}`,
    commissionPausedByLeaveId: leave.id,
    commissionPausedAt: new Date().toISOString()
  });
  leaves = leaves.map((item) => item.id === leave.id ? {
    ...item,
    status: "approved",
    commissionIssuedId: commission.days && commission.amount ? commission.id : "",
    commissionFrozenAt: new Date().toISOString()
  } : item);
  saveLocalMeta();
  renderAll();
  document.querySelector("#leaveCommissionModal").close();
  pendingLeaveCommission = null;
  showToast("تم اعتماد الإجازة وتجميد العمولة");
}

function handleLeaveAction(id, status) {
  if (status === "approved") {
    openLeaveCommissionApproval(id);
    return;
  }
  leaves = leaves.map((leave) => leave.id === id ? { ...leave, status } : leave);
  saveLocalMeta();
  renderAll();
  showToast("تم رفض الطلب");
}


function openEndServiceConfirmation() {
  const employeeId = document.querySelector("#employeeForm")?.elements.employeeId?.value;
  if (!employeeId) {
    showToast("احفظ بيانات الموظف أولًا قبل إنهاء الخدمات");
    return;
  }
  pendingEndServiceEmployeeId = employeeId;
  document.querySelector("#endServiceConfirmModal").showModal();
}

async function confirmEndService() {
  if (!pendingEndServiceEmployeeId) return;
  const employee = getEmployee(pendingEndServiceEmployeeId);
  if (!employee) {
    showToast("تعذر العثور على الموظف");
    return;
  }
  const updated = await persistEmployeeRecord({
    ...employee,
    status: "terminated",
    attendance: null,
    endServiceRequestedAt: new Date().toISOString(),
    endServiceRequestedBy: currentUser
  });
  const form = document.querySelector("#employeeForm");
  if (form?.elements.status) form.elements.status.value = "terminated";
  employeeFormState.commissionPaused = updated.commissionPaused;
  document.querySelector("#endServiceConfirmModal").close();
  pendingEndServiceEmployeeId = null;
  updateCommissionCalculations();
  renderAll();
  showToast("تم تغيير حالة الموظف إلى تم إنهاء خدماته");
}

function openLeaveReturnModal(id) {
  const leave = leaves.find((item) => item.id === id);
  const employee = leave ? getEmployee(leave.employeeId) : null;
  if (!leave || !employee) return;
  pendingLeaveReturn = { leaveId: id };
  const defaultDate = formatInputDate(addDays(parseDate(leave.to) || todayAtNoon(), 1));
  const form = document.querySelector("#leaveReturnForm");
  form.elements.returnDate.value = defaultDate;
  document.querySelector("#leaveReturnPreview").innerHTML = commissionEventRows([
    ["الموظف", escapeHtml(employee.name)],
    ["الإجازة", `${formatDate(leave.from)} إلى ${formatDate(leave.to)}`],
    ["حالة العمولة", employee.commissionPauseReason || "متوقفة بسبب الإجازة"],
    ["بداية الاستحقاق الجديدة", formatDate(defaultDate)]
  ]);
  document.querySelector("#leaveReturnModal").showModal();
}

async function confirmLeaveReturn(event) {
  event.preventDefault();
  if (!pendingLeaveReturn) return;
  const form = event.currentTarget;
  const returnDate = form.elements.returnDate.value;
  const leave = leaves.find((item) => item.id === pendingLeaveReturn.leaveId);
  const employee = leave ? getEmployee(leave.employeeId) : null;
  if (!leave || !employee || !returnDate) {
    showToast("حدد تاريخ المباشرة");
    return;
  }
  await persistEmployeeRecord({
    ...employee,
    status: "active",
    attendance: employee.attendance || "08:00",
    commissionAccrualStartDate: returnDate,
    commissionPaused: false,
    commissionPauseReason: "",
    commissionPausedByLeaveId: "",
    commissionPausedAt: ""
  });
  leaves = leaves.map((item) => item.id === leave.id ? {
    ...item,
    returnDate,
    returnConfirmedAt: new Date().toISOString()
  } : item);
  saveLocalMeta();
  renderAll();
  document.querySelector("#leaveReturnModal").close();
  pendingLeaveReturn = null;
  showToast("تم تسجيل المباشرة وبدء استحقاق عمولة جديد");
}

function exportCsv(filename, rows) {
  const csv = "\uFEFF" + rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
  showToast("تم تجهيز ملف التصدير");
}



function safeCallEmployeeModalStep(callback) {
  try {
    return callback();
  } catch (error) {
    console.warn("تم تجاوز خطوة غير أساسية أثناء فتح شاشة الموظف", error);
    return null;
  }
}

async function openNewEmployeeModalSafely() {
  const form = document.querySelector("#employeeForm");
  const modal = document.querySelector("#employeeModal");
  if (!form || !modal) return;
  safeCallEmployeeModalStep(() => form.reset());
  const today = formatInputDate(todayAtNoon());
  employeeFormState = {
    photoAttachmentId: "",
    legacyPhoto: "",
    identityAttachmentId: "",
    signatureAttachmentId: "",
    fingerprintAttachmentId: "",
    passports: [],
    bankAccounts: [],
    notes: [],
    minutes: [],
    warnings: [],
    documents: [],
    commissions: [],
    commissionAccrualStartDate: today,
    commissionPaused: false,
    commissionPauseReason: "",
    commissionPausedByLeaveId: "",
    commissionPausedAt: "",
    consent: null
  };
  safeCallEmployeeModalStep(() => {
    document.querySelector("#employeeModalTitle").innerHTML = `${iconSvg("user-plus")}إضافة موظف جديد`;
  });
  safeCallEmployeeModalStep(() => populateFormOptions());
  safeCallEmployeeModalStep(() => setFormValue(form, "employeeId", ""));
  safeCallEmployeeModalStep(() => setFormValue(form, "contractStartDate", today));
  safeCallEmployeeModalStep(() => setFormValue(form, "workStartDate", today));
  safeCallEmployeeModalStep(() => setFormValue(form, "commissionStartDate", today));
  safeCallEmployeeModalStep(() => setFormValue(form, "commissionPaymentDate", ""));
  safeCallEmployeeModalStep(() => setFormValue(form, "hijriCorrection", 0));
  safeCallEmployeeModalStep(() => setRadioValue(form, "nationalityType", "saudi"));
  safeCallEmployeeModalStep(() => renderNationalityOptions("سعودي", false));
  safeCallEmployeeModalStep(() => setRadioValue(form, "gender", "male"));
  safeCallEmployeeModalStep(() => setRadioValue(form, "contractType", "unlimited"));
  safeCallEmployeeModalStep(() => { if (form.elements.insuranceEnabled) form.elements.insuranceEnabled.checked = false; });
  safeCallEmployeeModalStep(() => refreshEmployeeOrgOptions("", ""));
  safeCallEmployeeModalStep(() => renderPassports());
  safeCallEmployeeModalStep(() => renderBankAccounts());
  safeCallEmployeeModalStep(() => renderEmployeeNotes());
  safeCallEmployeeModalStep(() => renderEmployeeMinutes());
  safeCallEmployeeModalStep(() => resetEmployeeMinuteForm());
  safeCallEmployeeModalStep(() => toggleEmployeeMinuteForm(false));
  safeCallEmployeeModalStep(() => renderDocuments());
  safeCallEmployeeModalStep(() => renderCommissionHistory());
  safeCallEmployeeModalStep(() => renderDocumentation());
  await Promise.resolve(safeCallEmployeeModalStep(() => renderEmployeePhoto()));
  safeCallEmployeeModalStep(() => updateAllFormCalculations());
  safeCallEmployeeModalStep(() => {
    const endServiceBtn = document.querySelector("#endEmployeeServiceBtn");
    if (endServiceBtn) {
      endServiceBtn.disabled = true;
      endServiceBtn.classList.add("is-disabled");
      endServiceBtn.title = "متاح بعد حفظ الموظف";
    }
  });
  safeCallEmployeeModalStep(() => switchEmployeeSection("personal"));
  if (!modal.open) modal.showModal();
  modal.scrollTop = 0;
}

async function handleOpenNewEmployeeClick(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  try {
    await openEmployeeModal();
  } catch (error) {
    console.error("تعذر فتح شاشة إضافة موظف بالطريقة الكاملة، سيتم فتحها بالطريقة الاحتياطية", error);
    await openNewEmployeeModalSafely();
  }
}

window.openEmployeeModalFromButton = handleOpenNewEmployeeClick;
window.openEmployeeModal = openEmployeeModal;

function setupEvents() {
  document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => switchView(item.dataset.view)));
  document.querySelectorAll("[data-go-view]").forEach((item) => item.addEventListener("click", () => switchView(item.dataset.goView)));
  document.querySelectorAll(".stat-card-clickable").forEach((item) => item.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); switchView(item.dataset.goView); } }));
  document.querySelectorAll(".add-employee-btn, #quickAddBtn, [data-open-employee-modal]").forEach((button) => button.addEventListener("click", handleOpenNewEmployeeClick));
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => document.querySelector(`#${button.dataset.closeModal}`).close()));
  document.querySelector("#menuBtn").addEventListener("click", () => {
    document.querySelector("#sidebar").classList.add("open");
    document.querySelector("#sidebarOverlay").classList.add("show");
  });
  document.querySelector("#sidebarOverlay").addEventListener("click", closeSidebar);

  document.querySelector("#employeeForm").addEventListener("submit", handleEmployeeSubmit);
  document.querySelectorAll("[data-employee-section]").forEach((button) => button.addEventListener("click", () => switchEmployeeSection(button.dataset.employeeSection)));
  document.querySelector("#employeeForm").addEventListener("input", (event) => {
    const name = event.target.name;
    if (["identityNumber", "phone", "birthDate", "nationalityType"].includes(name)) updatePersonalCalculations();
    if (name === "identityExpiryGregorian") syncIdentityFromGregorian();
    if (name === "identityExpiryHijri") syncIdentityFromHijri();
    if (["contractStartDate", "workStartDate", "contractMonths", "contractType", "renewalOption"].includes(name)) updateContractCalculations();
    if (["baseSalary", "housingAllowance", "transportAllowance", "otherAllowances", "insuranceEnabled"].includes(name)) updateSalaryCalculations();
    if (["status", "commissionStartDate"].includes(name)) updateCommissionCalculations();
  });
  document.querySelector("#employeeForm").addEventListener("change", (event) => {
    const name = event.target.name;
    if (name === "identityExpiryGregorian") syncIdentityFromGregorian();
    if (name === "identityExpiryHijri") syncIdentityFromHijri();
    if (name === "hijriCorrection") syncIdentityFromGregorian();
    if (["contractType", "renewalOption"].includes(name)) updateContractCalculations();
    if (name === "insuranceEnabled") updateSalaryCalculations();
    if (name === "status") updateCommissionCalculations();
    if (name === "nationalityType") toggleNationalityField();
  });

  document.querySelector("#employeePhotoInput").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    employeeFormState.photoAttachmentId = await saveAttachment(file, "employee-photo");
    employeeFormState.legacyPhoto = "";
    await renderEmployeePhoto();
  });
  document.querySelector("#removeEmployeePhoto").addEventListener("click", async () => {
    employeeFormState.photoAttachmentId = "";
    employeeFormState.legacyPhoto = "";
    await renderEmployeePhoto();
  });

  document.querySelector("#addPassportBtn").addEventListener("click", () => {
    employeeFormState.passports.push(createPassport());
    renderPassports();
  });
  document.querySelector("#addBankAccountBtn").addEventListener("click", () => {
    employeeFormState.bankAccounts.push(createBankAccount());
    renderBankAccounts();
  });
  document.querySelector("#addDocumentBtn").addEventListener("click", () => {
    employeeFormState.documents.push(createDocument());
    renderDocuments();
  });
  document.querySelector("#addEmployeeNoteBtn").addEventListener("click", () => {
    const input = document.querySelector("#employeeNoteInput");
    const text = input.value.trim();
    if (!text) {
      showToast("اكتب الملاحظة أولًا");
      return;
    }
    employeeFormState.notes.push({ id: `note-${Date.now()}`, text, createdAt: new Date().toISOString(), createdAtLabel: formatDateTime(new Date().toISOString()), createdBy: currentUser });
    input.value = "";
    renderEmployeeNotes();
  });
  document.querySelector("#showEmployeeMinuteFormBtn").addEventListener("click", () => toggleEmployeeMinuteForm(true));
  document.querySelector("#cancelEmployeeMinuteBtn").addEventListener("click", () => {
    resetEmployeeMinuteForm();
    toggleEmployeeMinuteForm(false);
  });
  document.querySelector("#saveEmployeeMinuteBtn").addEventListener("click", addEmployeeMinuteRecord);
  document.querySelector("#employeeMinuteType")?.addEventListener("change", renderEmployeeMinuteDynamicFields);
  document.querySelector("#departmentGrid")?.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-org-form]");
    if (!form) return;
    event.preventDefault();
    const structure = getOrgStructure();
    const values = Object.fromEntries(new FormData(form).entries());
    const name = String(values.name || "").trim();
    if (!name) return;
    if (form.dataset.orgForm === "department") {
      if (structure.departments.some((item) => item.name === name)) {
        showToast("هذه الإدارة موجودة مسبقًا");
        return;
      }
      structure.departments.push({ id: `dept-${Date.now()}`, name, manager: String(values.manager || "").trim(), createdAt: new Date().toISOString() });
      showToast("تمت إضافة الإدارة");
    } else if (form.dataset.orgForm === "section") {
      if (!values.departmentId) return;
      if (structure.sections.some((item) => item.departmentId === values.departmentId && item.name === name)) {
        showToast("هذا القسم موجود داخل الإدارة المحددة");
        return;
      }
      structure.sections.push({ id: `section-${Date.now()}`, departmentId: values.departmentId, name, manager: String(values.manager || "").trim(), createdAt: new Date().toISOString() });
      showToast("تمت إضافة القسم");
    } else if (form.dataset.orgForm === "profession") {
      if (!values.sectionId) return;
      if (structure.professions.some((item) => item.sectionId === values.sectionId && item.name === name)) {
        showToast("هذه المهنة موجودة داخل القسم المحدد");
        return;
      }
      structure.professions.push({ id: `profession-${Date.now()}`, sectionId: values.sectionId, name, createdAt: new Date().toISOString() });
      if (!jobTitles.includes(name)) jobTitles.push(name);
      showToast("تمت إضافة المهنة");
    }
    setOrgStructure(structure);
    saveLocalMeta();
    form.reset();
    renderDepartments();
    populateFormOptions();
  });
  document.querySelector("#departmentGrid")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-org]");
    if (!button) return;
    const structure = getOrgStructure();
    const type = button.dataset.deleteOrg;
    const id = button.dataset.id;
    if (type === "department") {
      const used = employees.some((employee) => orgDepartmentByName(employee.department)?.id === id);
      if (used) return showToast("لا يمكن حذف إدارة مرتبطة بموظفين");
      const sectionIds = structure.sections.filter((section) => section.departmentId === id).map((section) => section.id);
      structure.departments = structure.departments.filter((item) => item.id !== id);
      structure.sections = structure.sections.filter((item) => item.departmentId !== id);
      structure.professions = structure.professions.filter((item) => !sectionIds.includes(item.sectionId));
    } else if (type === "section") {
      const used = employees.some((employee) => orgSectionByName(employee.department, employee.section)?.id === id);
      if (used) return showToast("لا يمكن حذف قسم مرتبط بموظفين");
      structure.sections = structure.sections.filter((item) => item.id !== id);
      structure.professions = structure.professions.filter((item) => item.sectionId !== id);
    } else if (type === "profession") {
      const profession = structure.professions.find((item) => item.id === id);
      const used = profession && employees.some((employee) => employee.role === profession.name);
      if (used) return showToast("لا يمكن حذف مهنة مرتبطة بموظفين");
      structure.professions = structure.professions.filter((item) => item.id !== id);
    }
    setOrgStructure(structure);
    saveLocalMeta();
    renderDepartments();
    populateFormOptions();
    showToast("تم حذف العنصر");
  });
  document.querySelector("#departmentGrid")?.addEventListener("change", (event) => {
    const target = event.target;
    if (target?.id === "orgSectionDepartment" || target?.id === "orgProfessionDepartment") renderDepartments();
  });
  document.querySelector('#employeeForm [name="department"]')?.addEventListener("change", () => refreshEmployeeOrgOptions("", ""));
  document.querySelector('#employeeForm [name="section"]')?.addEventListener("change", () => refreshEmployeeOrgOptions(document.querySelector('#employeeForm [name="section"]')?.value || "", ""));

  document.querySelector("#addJobTitleBtn").addEventListener("click", () => {
    const value = window.prompt("اكتب اسم المهنة الجديدة:");
    const job = value?.trim();
    if (!job) return;
    const form = document.querySelector("#employeeForm");
    const structure = getOrgStructure();
    const section = orgSectionByName(form.elements.department.value, form.elements.section.value);
    if (!section) {
      showToast("أضف إدارة وقسمًا أولًا من شاشة الهيكل الإداري");
      return;
    }
    if (!structure.professions.some((item) => item.sectionId === section.id && item.name === job)) {
      structure.professions.push({ id: `profession-${Date.now()}`, sectionId: section.id, name: job, createdAt: new Date().toISOString() });
      setOrgStructure(structure);
    }
    if (!jobTitles.includes(job)) jobTitles.push(job);
    saveLocalMeta();
    refreshEmployeeOrgOptions(form.elements.section.value, job);
    renderDepartments();
    document.querySelector("#jobTitleSelect").value = job;
  });

  document.querySelector("#payCommissionBtn").addEventListener("click", startCommissionPayment);
  document.querySelector("#confirmLeaveCommissionBtn").addEventListener("click", confirmLeaveCommissionApproval);
  document.querySelector("#approveLeaveOnlyBtn").addEventListener("click", approveLeaveOnly);
  document.querySelector("#endEmployeeServiceBtn").addEventListener("click", openEndServiceConfirmation);
  document.querySelector("#confirmEndServiceBtn").addEventListener("click", confirmEndService);
  document.querySelector("#leaveReturnForm").addEventListener("submit", confirmLeaveReturn);
  document.querySelector("#previewClearanceBtn").addEventListener("click", previewClearance);
  document.querySelector("#issueClearanceBtn").addEventListener("click", issueClearance);
  document.querySelector("#printClearancePreviewBtn").addEventListener("click", () => pendingClearance && printCommission(pendingClearance));

  document.querySelector("#documentationConsentCheck").addEventListener("change", (event) => {
    if (employeeFormState.consent?.issuedAt) {
      event.target.checked = true;
      return;
    }
    if (event.target.checked) document.querySelector("#consentModal").showModal();
  });
  document.querySelector("#cancelConsentBtn").addEventListener("click", () => {
    document.querySelector("#documentationConsentCheck").checked = false;
    pendingConsentAttachmentId = "";
    document.querySelector("#consentModal").close();
  });
  document.querySelector("#consentAttachmentInput").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    pendingConsentAttachmentId = file ? await saveAttachment(file, "consent") : "";
  });
  document.querySelector("#issueConsentBtn").addEventListener("click", () => {
    employeeFormState.consent = { issuedAt: new Date().toISOString(), issuedBy: currentUser, attachmentId: pendingConsentAttachmentId };
    pendingConsentAttachmentId = "";
    document.querySelector("#consentModal").close();
    renderDocumentation();
    showToast("تم إصدار الإقرار");
  });

  document.querySelector("#leaveForm").addEventListener("submit", handleLeaveSubmit);
  document.querySelector("#newLeaveBtn").addEventListener("click", () => {
    populateFormOptions();
    const form = document.querySelector("#leaveForm");
    form.reset();
    form.elements.from.value = formatInputDate(todayAtNoon());
    form.elements.to.value = formatInputDate(todayAtNoon());
    document.querySelector("#leaveModal").showModal();
  });

  ["#employeeSearch", "#departmentFilter", "#statusFilter"].forEach((selector) => {
    document.querySelector(selector).addEventListener(selector.includes("Search") ? "input" : "change", renderEmployees);
  });
  document.querySelector("#attendanceSearch").addEventListener("input", (event) => renderAttendance(event.target.value));
  document.querySelector("#attendanceDateInput").addEventListener("change", (event) => setSelectedAttendanceDate(event.target.value));
  document.querySelector("#attendancePrevDayBtn").addEventListener("click", () => setSelectedAttendanceDate(formatInputDate(addDays(parseDate(selectedAttendanceDate), -1))));
  document.querySelector("#attendanceNextDayBtn").addEventListener("click", () => setSelectedAttendanceDate(formatInputDate(addDays(parseDate(selectedAttendanceDate), 1))));
  document.querySelector("#newAbsenceBtn").addEventListener("click", openAbsenceModal);
  document.querySelector("#absenceForm").addEventListener("submit", handleAbsenceSubmit);

  document.addEventListener("change", async (event) => {
    const target = event.target;
    if (target.matches("[data-single-attachment]")) {
      const file = target.files[0];
      if (file) await setSingleAttachment(target.dataset.singleAttachment, file);
      return;
    }
    if (target.matches("[data-passport-attachment]")) {
      const index = Number(target.dataset.passportAttachment);
      const file = target.files[0];
      if (file) {
        employeeFormState.passports[index].attachmentId = await saveAttachment(file, "passport");
        renderPassports();
      }
      return;
    }
    if (target.matches("[data-bank-certificate-attachment]")) {
      const index = Number(target.dataset.bankCertificateAttachment);
      const file = target.files[0];
      if (file) {
        employeeFormState.bankAccounts[index].certificateAttachmentId = await saveAttachment(file, "iban-certificate");
        renderBankAccounts();
      }
      return;
    }
    if (target.matches("[data-bank-approval-attachment]")) {
      const index = Number(target.dataset.bankApprovalAttachment);
      const file = target.files[0];
      if (file) {
        employeeFormState.bankAccounts[index].approvalAttachmentId = await saveAttachment(file, "iban-approval");
        renderBankAccounts();
      }
      return;
    }
    if (target.matches("[data-document-attachment]")) {
      const index = Number(target.dataset.documentAttachment);
      const file = target.files[0];
      if (file) {
        employeeFormState.documents[index].attachmentId = await saveAttachment(file, "document");
        renderDocuments();
      }
    }
  });

  document.addEventListener("input", (event) => {
    const target = event.target;
    if (target.dataset.passportField) {
      const index = Number(target.closest("[data-passport-index]").dataset.passportIndex);
      employeeFormState.passports[index][target.dataset.passportField] = target.value;
      if (target.dataset.passportField === "expiryDate") renderPassports();
      return;
    }
    if (target.dataset.bankField) {
      const index = Number(target.closest("[data-bank-index]").dataset.bankIndex);
      const field = target.dataset.bankField;
      const value = field === "iban" ? formatIban(`SA${ibanDigits(target.value)}`) : target.value;
      employeeFormState.bankAccounts[index][field] = value;
      if (field === "iban") {
        target.value = formatIbanBody(value);
        const hint = target.closest("label").querySelector(".iban-hint");
        const count = ibanDigits(value).length;
        hint.textContent = `${count}/22 رقمًا بعد SA`;
        hint.classList.toggle("error", Boolean(count && count !== 22));
      }
      return;
    }
    if (target.dataset.documentField) {
      const index = Number(target.closest("[data-document-index]").dataset.documentIndex);
      employeeFormState.documents[index][target.dataset.documentField] = target.value;
    }
  });

  document.addEventListener("click", async (event) => {
    const edit = event.target.closest("[data-edit-employee]");
    const quick = event.target.closest("[data-quick-view]");
    const remove = event.target.closest("[data-delete-employee]");
    const leaveAction = event.target.closest("[data-leave-action]");
    const leaveReturn = event.target.closest("[data-leave-return]");
    const viewAttachment = event.target.closest("[data-view-attachment]");
    const viewSingle = event.target.closest("[data-view-single-attachment]");
    const removePassport = event.target.closest("[data-remove-passport]");
    const removeBank = event.target.closest("[data-remove-bank]");
    const removeDocument = event.target.closest("[data-remove-document]");
    const printCommissionButton = event.target.closest("[data-print-commission]");
    const printMinuteButton = event.target.closest("[data-print-minute]");
    const deleteAbsence = event.target.closest("[data-delete-absence]");
    if (edit) await openEmployeeModal(edit.dataset.editEmployee);
    if (quick) await openQuickView(quick.dataset.quickView);
    if (remove) {
      deleteTargetId = remove.dataset.deleteEmployee;
      document.querySelector("#confirmModal").showModal();
    }
    if (leaveAction) handleLeaveAction(leaveAction.dataset.leaveId, leaveAction.dataset.leaveAction);
    if (leaveReturn) openLeaveReturnModal(leaveReturn.dataset.leaveReturn);
    if (viewAttachment) await openAttachment(viewAttachment.dataset.viewAttachment);
    if (viewSingle) await openAttachment(viewSingle.dataset.attachmentId);
    if (removePassport) {
      employeeFormState.passports.splice(Number(removePassport.dataset.removePassport), 1);
      renderPassports();
    }
    if (removeBank) {
      employeeFormState.bankAccounts.splice(Number(removeBank.dataset.removeBank), 1);
      renderBankAccounts();
    }
    if (removeDocument) {
      employeeFormState.documents.splice(Number(removeDocument.dataset.removeDocument), 1);
      renderDocuments();
    }
    if (printCommissionButton) {
      const commission = employeeFormState.commissions.find((item) => item.id === printCommissionButton.dataset.printCommission);
      if (commission) await printCommission(commission);
    }
    if (printMinuteButton) {
      event.preventDefault();
      event.stopPropagation();
      const minuteId = printMinuteButton.dataset.printMinute;
      let minute = employeeFormState.minutes.find((item) => item.id === minuteId);
      if (!minute) {
        for (const employee of employees) {
          minute = (employee.minutes || []).find((item) => item.id === minuteId);
          if (minute) break;
        }
      }
      if (minute) await printAbsenceMinute(minute);
      else showToast("تعذر العثور على المحضر المطلوب");
      return;
    }
    if (deleteAbsence) await deleteAbsenceRecord(deleteAbsence.dataset.deleteAbsence);
  });

  document.querySelector("#cancelDeleteBtn").addEventListener("click", () => document.querySelector("#confirmModal").close());
  document.querySelector("#confirmDeleteBtn").addEventListener("click", async () => {
    await dbDeleteEmployee(deleteTargetId);
    employees = employees.filter((employee) => employee.id !== deleteTargetId);
    leaves = leaves.filter((leave) => leave.employeeId !== deleteTargetId);
    attendanceExceptions = attendanceExceptions.filter((record) => record.employeeId !== deleteTargetId);
    queueCloudStateSave();
    saveLocalMeta();
    document.querySelector("#confirmModal").close();
    deleteTargetId = null;
    renderAll();
    showToast("تم حذف الموظف");
  });

  document.querySelectorAll(".view-switcher button").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".view-switcher button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const cards = button.dataset.layout === "cards";
    document.querySelector(".employee-table-panel").classList.toggle("cards-layout", cards);
    document.querySelector("#employeeCards").classList.toggle("active", cards);
  }));
  document.querySelectorAll("[data-leave-filter]").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll("[data-leave-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeLeaveFilter = button.dataset.leaveFilter;
    renderLeaves();
  }));
  document.querySelector("#globalSearch").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      switchView("employees");
      document.querySelector("#employeeSearch").value = event.target.value;
      renderEmployees();
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      document.querySelector("#globalSearch").focus();
    }
  });
  document.querySelector("#exportBtn").addEventListener("click", () => exportCsv("employees.csv", [
    ["رقم الموظف", "اسم الموظف", "الجنسية", "الإدارة", "المسمى الوظيفي", "الهاتف", "الحالة", "تاريخ التعيين"],
    ...employees.map((employee) => [employee.employeeNumber, employee.name, employee.nationality, employee.department, employee.role, employee.phone, statusMeta[employee.status].label, employee.contractStartDate])
  ]));
  document.querySelector("#attendanceExportBtn").addEventListener("click", () => exportCsv("attendance.csv", [["التاريخ", "الموظف", "الإدارة", "وقت الحضور", "وقت الانصراف", "ساعات العمل", "الحالة", "مصدر التسجيل"], ...attendanceRowsForDate(selectedAttendanceDate).map(({ employee, state }) => [selectedAttendanceDate, employee.name, employee.department, state.checkIn, state.checkOut, state.hours, state.key === "auto-present" ? "حاضر آليًا" : state.key === "absent" ? absenceTypeMeta(state.absence?.type).label : state.key === "weekly-off" ? "إجازة أسبوعية" : statusMeta[employee.status]?.label || "—", state.source])]));
  document.querySelector("#payrollExportBtn").addEventListener("click", () => {
    const payrollDate = todayAtNoon();
    exportCsv("payroll.csv", [["الموظف", "الراتب الأساسي", "البدلات", "التأمينات", "حسم الغياب", "السلفة", "صافي الراتب"], ...employees.map((employee) => {
      const allowance = Number(employee.housingAllowance || 0) + Number(employee.transportAllowance || 0) + Number(employee.otherAllowances || 0);
      const gross = employeeGrossSalary(employee);
      const insuranceDeduction = employee.insuranceEnabled ? gross * 0.0995 : 0;
      const absenceDeduction = absenceDeductionForEmployeeInMonth(employee.id, payrollDate);
      const advanceDeduction = Number(employee.advanceDeduction || employee.salaryAdvance || 0);
      return [employee.name, employee.baseSalary, allowance, insuranceDeduction, absenceDeduction, advanceDeduction, gross - insuranceDeduction - absenceDeduction - advanceDeduction];
    })]);
  });
  document.querySelector("#processPayrollBtn").addEventListener("click", () => showToast("تم اعتماد مسير الرواتب بنجاح"));
  document.querySelector("#notificationBtn").addEventListener("click", () => showToast(`لديك ${arabicNumber(leaves.filter((leave) => leave.status === "pending").length)} طلبات تحتاج إلى مراجعة`));
  document.querySelector("#addDepartmentBtn")?.addEventListener("click", () => showToast("يمكن إدارة الأقسام من شاشة الهيكل الإداري"));
  document.querySelector("#settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("تم حفظ إعدادات المنشأة");
  });
  document.querySelector("#settingsNav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-settings-section]");
    if (!button) return;
    switchSettingsSection(button.dataset.settingsSection);
  });
  document.querySelector("#addShiftBtn")?.addEventListener("click", addWorkShift);
  document.querySelector("#applyShiftToWorkdaysBtn")?.addEventListener("click", applySelectedShiftToWorkdays);
  document.querySelector("#resetWorkSettingsBtn")?.addEventListener("click", resetWorkSettings);
  document.querySelector("#absencePolicyForm")?.addEventListener("change", (event) => {
    if (event.target.closest("[data-absence-policy]")) updateAbsencePolicyFromForm();
  });
  document.querySelector("#absencePolicyForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    absencePolicySettings = normalizeAbsencePolicySettings(absencePolicySettings);
    saveLocalMeta();
    renderAttendance();
    showToast("تم حفظ قاعدة بيانات الغياب");
  });
  document.querySelector("#minuteSettingsForm")?.addEventListener("input", (event) => {
    if (event.target.closest("[data-minute-template-name], [data-minute-field-label], [data-minute-field-type]")) updateMinuteTemplateFromInputs();
  });
  document.querySelector("#minuteSettingsForm")?.addEventListener("change", (event) => {
    if (event.target.closest("[data-minute-template-name], [data-minute-field-label], [data-minute-field-type]")) updateMinuteTemplateFromInputs();
  });
  document.querySelector("#addMinuteTemplateBtn")?.addEventListener("click", addMinuteTemplate);
  document.querySelector("#minuteTemplateList")?.addEventListener("click", (event) => {
    const addField = event.target.closest("[data-add-minute-field]");
    if (addField) { addMinuteField(addField.dataset.addMinuteField); return; }
    const removeTemplate = event.target.closest("[data-remove-minute-template]");
    if (removeTemplate) { removeMinuteTemplate(removeTemplate.dataset.removeMinuteTemplate); return; }
    const removeField = event.target.closest("[data-remove-minute-field]");
    if (removeField) {
      const [templateId, fieldId] = removeField.dataset.removeMinuteField.split(":");
      removeMinuteField(templateId, fieldId);
    }
  });
  document.querySelector("#minuteSettingsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    updateMinuteTemplateFromInputs();
    saveLocalMeta();
    populateFormOptions();
    renderMinuteTemplateSettings();
    showToast("تم حفظ إعداد المحاضر");
  });
  document.querySelector("#workSettingsForm")?.addEventListener("change", (event) => {
    const shiftInput = event.target.closest("[data-shift-name], [data-shift-start], [data-shift-end]");
    if (shiftInput) {
      updateShiftFromForm(shiftInput.dataset.shiftName || shiftInput.dataset.shiftStart || shiftInput.dataset.shiftEnd);
      return;
    }
    const absencePolicyInput = event.target.closest("[data-absence-policy]");
    if (absencePolicyInput) {
      updateAbsencePolicyFromForm();
      return;
    }
    const workdayInput = event.target.closest("[data-workday-enabled], [data-workday-shift], [data-workday-start], [data-workday-end]");
    if (!workdayInput) return;
    const index = workdayInput.dataset.workdayEnabled || workdayInput.dataset.workdayShift || workdayInput.dataset.workdayStart || workdayInput.dataset.workdayEnd;
    if (workdayInput.dataset.workdayShift !== undefined) {
      const settings = normalizeWorkSettings(workSettings);
      const day = settings.days[index];
      const lineIndex = Number(workdayInput.dataset.shiftIndex || 0);
      const selectedShift = settings.shifts.find((item) => item.id === workdayInput.value) || settings.shifts[0];
      if (day?.shifts?.[lineIndex]) {
        day.shifts[lineIndex] = { shiftId: selectedShift.id, start: selectedShift.start, end: selectedShift.end };
        workSettings = normalizeWorkSettings(settings);
        renderWorkSettings();
      }
      return;
    }
    updateWorkdayFromForm(index);
  });
  document.querySelector("#workSettingsForm")?.addEventListener("click", (event) => {
    const addDayShiftButton = event.target.closest("[data-add-day-shift]");
    if (addDayShiftButton) {
      addShiftToDay(addDayShiftButton.dataset.addDayShift);
      return;
    }
    const removeDayShiftButton = event.target.closest("[data-remove-day-shift]");
    if (removeDayShiftButton) {
      removeShiftFromDay(removeDayShiftButton.dataset.removeDayShift, removeDayShiftButton.dataset.shiftIndex);
      return;
    }
    const removeButton = event.target.closest("[data-remove-shift]");
    if (removeButton) removeWorkShift(removeButton.dataset.removeShift);
  });
  document.querySelector("#workSettingsForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    workSettings = normalizeWorkSettings(workSettings);
    absencePolicySettings = normalizeAbsencePolicySettings(absencePolicySettings);
    saveLocalMeta();
    renderAttendance();
    renderDashboard();
    showToast("تم حفظ إعداد العمل وتحديث الحضور الآلي");
  });
}


/* =========================================================
   User management and permissions screen
   ========================================================= */
let appUserProfilesCache = [];

function roleOptions(selected = "employee") {
  return Object.entries(AUTH_ROLES).map(([key, meta]) => `<option value="${escapeHtml(key)}" ${key === selected ? "selected" : ""}>${escapeHtml(meta.label)}</option>`).join("");
}

function roleBadge(role) {
  const meta = AUTH_ROLES[role] || AUTH_ROLES.employee;
  return `<span class="status-badge status-approved">${escapeHtml(meta.label)}</span>`;
}

function ensureUsersManagementView() {
  if (!AUTH_ROLES.admin.views.includes("users")) AUTH_ROLES.admin.views.push("users");
  pageMeta.users = ["إدارة المستخدمين", "إضافة المستخدمين وكلمات المرور وتحديد الصلاحيات"];

  const settingsBtn = document.querySelector('.main-nav [data-view="settings"]');
  const nav = document.querySelector('.main-nav');
  if (nav && !nav.querySelector('[data-view="users"]')) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-item";
    btn.dataset.view = "users";
    btn.innerHTML = `<span class="nav-icon" data-icon="users"></span><span>إدارة المستخدمين</span>`;
    if (settingsBtn) settingsBtn.insertAdjacentElement("afterend", btn);
    else nav.appendChild(btn);
  }

  const content = document.querySelector("main.content");
  if (content && !document.querySelector("#usersView")) {
    const section = document.createElement("section");
    section.className = "view";
    section.id = "usersView";
    section.innerHTML = `
      <div class="section-toolbar user-management-toolbar">
        <div>
          <h2 class="section-title">إدارة المستخدمين والصلاحيات</h2>
          <p class="section-description">هذه الشاشة تظهر للمدير فقط. أضف المستخدم من هنا بالبريد وكلمة المرور والصلاحية، وسيتم إنشاء حساب الدخول والصلاحية معًا.</p>
        </div>
        <div class="user-toolbar-actions">
          <button type="button" class="primary-btn" id="openUserProfileModal"><span data-icon="user-plus"></span>إضافة مستخدم</button>
          <button type="button" class="secondary-btn" id="refreshUsersBtn"><span data-icon="refresh"></span>تحديث القائمة</button>
        </div>
      </div>

      <article class="panel user-management-table-panel user-management-full-panel">
        <div class="panel-head">
          <div><h3>المستخدمون الحاليون</h3><p>قائمة المستخدمين بعرض الصفحة. يمكنك تعديل الصلاحية أو إيقاف المستخدم من عمود الإجراء.</p></div>
        </div>
        <div class="table-wrap">
          <table class="employees-table">
            <thead><tr><th>الاسم</th><th>البريد</th><th>الصلاحية</th><th>الحالة</th><th>إجراء</th></tr></thead>
            <tbody id="appUserProfilesBody"><tr><td colspan="5"><div class="empty-state"><strong>جاري التحميل...</strong></div></td></tr></tbody>
          </table>
        </div>
      </article>

      <dialog class="modal user-profile-modal" id="userProfileModal">
        <form id="appUserProfileForm" class="user-profile-form" method="dialog">
          <div class="modal-head">
            <div><h2 id="userProfileModalTitle">إضافة مستخدم</h2><p>أدخل بيانات المستخدم وكلمة المرور وحدد الصلاحية.</p></div>
            <button type="button" class="icon-btn" data-close-modal="userProfileModal"><span data-icon="x"></span></button>
          </div>
          <div class="modal-body user-profile-modal-body">
            <input type="hidden" name="profileId" />
            <label><span>الاسم</span><input name="fullName" placeholder="مثال: أحمد محمد" required /></label>
            <label><span>البريد الإلكتروني</span><input name="email" type="email" placeholder="name@example.com" required dir="ltr" /></label>
            <label class="user-password-field"><span>كلمة المرور</span><input name="password" type="password" placeholder="كلمة مرور مؤقتة" autocomplete="new-password" minlength="6" /></label>
            <label><span>الصلاحية</span><select name="role">${roleOptions("employee")}</select></label>
            <label><span>الحالة</span><select name="isActive"><option value="true">مفعل</option><option value="false">موقوف</option></select></label>
            <div class="user-help-card">
              <strong>مهم:</strong> كلمة المرور لا تُحفظ كنص داخل قاعدة البيانات. يتم إرسالها إلى Supabase Authentication ويتم حفظها هناك بشكل آمن. عند تعديل مستخدم موجود اترك كلمة المرور فارغة.
            </div>
          </div>
          <div class="modal-actions">
            <button type="button" class="secondary-btn" id="resetUserProfileForm">تفريغ النموذج</button>
            <button type="button" class="secondary-btn" data-close-modal="userProfileModal">إلغاء</button>
            <button type="submit" class="primary-btn"><span data-icon="check"></span>حفظ المستخدم</button>
          </div>
        </form>
      </dialog>`;
    content.appendChild(section);
  }

  if (!document.querySelector("#userManagementStyles")) {
    const style = document.createElement("style");
    style.id = "userManagementStyles";
    style.textContent = `
      #usersView .section-toolbar { align-items: center; gap: 18px; margin-bottom: 18px; }
      #usersView .section-toolbar > div { min-width: 0; }
      #usersView .section-title { margin: 0 0 6px; }
      #usersView .section-description { max-width: 760px; line-height: 1.7; }
      .user-management-toolbar { display: flex; justify-content: space-between; align-items: center; }
      .user-toolbar-actions { display: flex; gap: 10px; align-items: center; margin-right: auto; }
      .user-management-full-panel { width: 100%; min-height: 430px; overflow: hidden; }
      .user-management-table-panel .panel-head { padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid var(--border); }
      .user-management-table-panel .table-wrap { max-height: 560px; overflow: auto; border-radius: 14px; border: 1px solid var(--border); }
      .user-management-table-panel table { min-width: 760px; }
      .user-profile-modal { width: min(700px, calc(100vw - 32px)); }
      .user-profile-modal form { margin: 0; }
      .user-profile-modal-body { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 16px; direction: rtl; }
      .user-profile-form label { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
      .user-profile-form label > span { color: #536166; font-size: 10px; font-weight: 800; }
      .user-profile-form input, .user-profile-form select { width: 100%; min-height: 44px; padding: 10px 12px; border: 1px solid #dfe6e8; border-radius: 12px; outline: 0; background: #fff; color: var(--text); font-size: 12px; box-sizing: border-box; }
      .user-profile-form input:focus, .user-profile-form select:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.10); }
      .user-profile-form input[dir="ltr"] { text-align: left; direction: ltr; }
      .user-help-card { grid-column: 1 / -1; background: #f8fafc; border: 1px dashed #cbd5e1; color: #475569; border-radius: 16px; padding: 14px 16px; line-height: 1.9; font-size: 12px; }
      .user-password-field.is-hidden { display: none; }
      .user-status-active { color: #047857; font-weight: 900; }
      .user-status-disabled { color: #b91c1c; font-weight: 900; }
      .user-action-row { display: inline-flex; gap: 6px; align-items: center; justify-content: center; }
      .warning-inline-btn { background: #fff7ed !important; color: #c2410c !important; border-color: #fed7aa !important; }
      .danger-inline-btn { background: #fef2f2 !important; color: #dc2626 !important; border-color: #fecaca !important; }
      @media (max-width: 760px) { .user-management-toolbar { align-items: stretch; flex-direction: column; } .user-toolbar-actions { width: 100%; margin-right: 0; } .user-toolbar-actions button { flex: 1; } .user-profile-modal-body { grid-template-columns: 1fr; } }
    `;
    document.head.appendChild(style);
  }
  hydrateIcons(document);
}

async function loadAppUserProfiles() {
  if (!supabaseClient) return [];
  const { data, error } = await supabaseClient
    .from("app_user_profiles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  appUserProfilesCache = Array.isArray(data) ? data : [];
  return appUserProfilesCache;
}

function renderAppUserProfiles() {
  const body = document.querySelector("#appUserProfilesBody");
  if (!body) return;
  if (!appUserProfilesCache.length) {
    body.innerHTML = `<tr><td colspan="5"><div class="empty-state"><strong>لا يوجد مستخدمون بعد</strong><p>أضف أول مستخدم من النموذج.</p></div></td></tr>`;
    return;
  }
  body.innerHTML = appUserProfilesCache.map((profile) => `
    <tr>
      <td><strong>${escapeHtml(profile.full_name || "—")}</strong></td>
      <td dir="ltr">${escapeHtml(profile.email || "—")}</td>
      <td>${roleBadge(profile.role)}</td>
      <td><span class="${profile.is_active ? "user-status-active" : "user-status-disabled"}">${profile.is_active ? "مفعل" : "موقوف"}</span></td>
      <td><span class="user-action-row"><button type="button" class="quick-view-btn" data-edit-user-profile="${escapeHtml(profile.id)}" title="تعديل">${iconSvg("edit")}</button><button type="button" class="quick-view-btn ${profile.is_active ? "warning-inline-btn" : ""}" data-toggle-user-profile="${escapeHtml(profile.id)}" title="${profile.is_active ? "إيقاف" : "تنشيط"}">${iconSvg(profile.is_active ? "user-x" : "check")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-user-profile="${escapeHtml(profile.id)}" title="حذف">${iconSvg("trash")}</button></span></td>
    </tr>`).join("");
}

async function renderUsersManagement() {
  ensureUsersManagementView();
  const body = document.querySelector("#appUserProfilesBody");
  if (body) body.innerHTML = `<tr><td colspan="5"><div class="empty-state"><strong>جاري تحميل المستخدمين...</strong></div></td></tr>`;
  try {
    await loadAppUserProfiles();
    renderAppUserProfiles();
  } catch (error) {
    console.error(error);
    if (body) body.innerHTML = `<tr><td colspan="5"><div class="empty-state"><strong>تعذر تحميل المستخدمين</strong><p>تأكد من تشغيل SQL الخاص بجدول app_user_profiles.</p></div></td></tr>`;
    showToast("تعذر تحميل المستخدمين");
  }
}

function resetUserProfileForm() {
  const form = document.querySelector("#appUserProfileForm");
  if (!form) return;
  form.reset();
  form.elements.profileId.value = "";
  form.elements.role.value = "employee";
  form.elements.isActive.value = "true";
  if (form.elements.password) {
    form.elements.password.value = "";
    form.elements.password.required = true;
    form.elements.password.closest("label")?.classList.remove("is-hidden");
  }
  const title = document.querySelector("#userProfileModalTitle");
  if (title) title.textContent = "إضافة مستخدم";
}

function fillUserProfileForm(id) {
  const profile = appUserProfilesCache.find((item) => item.id === id);
  const form = document.querySelector("#appUserProfileForm");
  if (!profile || !form) return;
  form.elements.profileId.value = profile.id || "";
  form.elements.fullName.value = profile.full_name || "";
  form.elements.email.value = profile.email || "";
  if (form.elements.password) {
    form.elements.password.value = "";
    form.elements.password.required = false;
    form.elements.password.closest("label")?.classList.add("is-hidden");
  }
  form.elements.role.value = AUTH_ROLES[profile.role] ? profile.role : "employee";
  form.elements.isActive.value = profile.is_active ? "true" : "false";
  const title = document.querySelector("#userProfileModalTitle");
  if (title) title.textContent = "تعديل مستخدم";
  const modal = document.querySelector("#userProfileModal");
  if (modal && !modal.open) modal.showModal();
}

async function saveUserProfileFromForm(form) {
  if (currentRoleKey() !== "admin") {
    showToast("هذه الشاشة للمدير فقط");
    return;
  }
  if (!supabaseClient) {
    showToast("Supabase غير متصل");
    return;
  }
  const profileId = form.elements.profileId.value.trim();
  const payload = {
    full_name: form.elements.fullName.value.trim(),
    email: form.elements.email.value.trim().toLowerCase(),
    role: form.elements.role.value,
    is_active: form.elements.isActive.value === "true",
    updated_at: new Date().toISOString()
  };
  const password = form.elements.password?.value || "";
  if (!payload.full_name || !payload.email) {
    showToast("أدخل الاسم والبريد");
    return;
  }
  if (!profileId && password.length < 6) {
    showToast("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
    return;
  }
  try {
    if (profileId) {
      const { error } = await supabaseClient.from("app_user_profiles").update(payload).eq("id", profileId);
      if (error) throw error;
    } else {
      const { data, error } = await supabaseClient.functions.invoke("admin-create-user", {
        body: {
          email: payload.email,
          password,
          fullName: payload.full_name,
          role: payload.role,
          isActive: payload.is_active
        }
      });
      if (error) throw error;
      if (data && data.error) throw new Error(data.error);
      const createdUserId = data?.user_id || data?.userId || null;
      if (!createdUserId) {
        console.error("Edge function response without user_id", data);
        throw new Error("لم يتم إنشاء حساب الدخول في Supabase Authentication، لذلك لم يتم حفظ المستخدم في قائمة الصلاحيات");
      }
      await renderUsersManagement();
    }
    resetUserProfileForm();
    document.querySelector("#userProfileModal")?.close();
    await renderUsersManagement();
    showToast(profileId ? "تم تحديث المستخدم" : "تم إنشاء المستخدم وحفظ الصلاحية");
  } catch (error) {
    console.error(error);
    const message = String(error?.message || "");
    if (message.includes("already") || message.includes("registered") || message.includes("exists")) showToast("هذا البريد موجود مسبقًا في حسابات الدخول");
    else if (message.includes("not deployed") || message.includes("FunctionsHttpError")) showToast("تعذر إنشاء حساب الدخول. تأكد من نشر Edge Function");
    else showToast("تعذر حفظ المستخدم أو إنشاء حساب الدخول");
  }
}

async function toggleUserProfile(id) {
  if (currentRoleKey() !== "admin") return showToast("هذه الشاشة للمدير فقط");
  const profile = appUserProfilesCache.find((item) => item.id === id);
  if (!profile) return;
  if (authProfile?.id === profile.id && profile.is_active) {
    showToast("لا يمكنك إيقاف حسابك الحالي من هذه الشاشة");
    return;
  }
  try {
    const { error } = await supabaseClient
      .from("app_user_profiles")
      .update({ is_active: !profile.is_active, updated_at: new Date().toISOString() })
      .eq("id", profile.id);
    if (error) throw error;
    await renderUsersManagement();
    showToast(profile.is_active ? "تم إيقاف المستخدم" : "تم تفعيل المستخدم");
  } catch (error) {
    console.error(error);
    showToast("تعذر تغيير حالة المستخدم");
  }
}

async function deleteUserProfile(id) {
  if (currentRoleKey() !== "admin") return showToast("هذه الشاشة للمدير فقط");
  const profile = appUserProfilesCache.find((item) => item.id === id);
  if (!profile) return;
  if (authProfile?.id === profile.id) {
    showToast("لا يمكنك حذف حسابك الحالي من هذه الشاشة");
    return;
  }
  if (!confirm(`هل تريد حذف المستخدم ${profile.full_name || profile.email} من قائمة الصلاحيات؟`)) return;
  try {
    const { error } = await supabaseClient
      .from("app_user_profiles")
      .delete()
      .eq("id", profile.id);
    if (error) throw error;
    appUserProfilesCache = appUserProfilesCache.filter((item) => item.id !== profile.id);
    renderAppUserProfiles();
    showToast("تم حذف المستخدم من قائمة الصلاحيات");
  } catch (error) {
    console.error(error);
    showToast("تعذر حذف المستخدم");
  }
}

function attachUserManagementEvents() {
  document.addEventListener("submit", (event) => {
    if (event.target?.id === "appUserProfileForm") {
      event.preventDefault();
      saveUserProfileFromForm(event.target);
    }
  });
  document.addEventListener("click", (event) => {
    if (event.target.closest("#refreshUsersBtn")) renderUsersManagement();
    if (event.target.closest("#openUserProfileModal")) { resetUserProfileForm(); document.querySelector("#userProfileModal")?.showModal(); }
    if (event.target.closest("#resetUserProfileForm")) resetUserProfileForm();
    const closeUserModal = event.target.closest('[data-close-modal="userProfileModal"]');
    if (closeUserModal) document.querySelector("#userProfileModal")?.close();
    const edit = event.target.closest("[data-edit-user-profile]");
    if (edit) fillUserProfileForm(edit.dataset.editUserProfile);
    const toggle = event.target.closest("[data-toggle-user-profile]");
    if (toggle) toggleUserProfile(toggle.dataset.toggleUserProfile);
    const deleteBtn = event.target.closest("[data-delete-user-profile]");
    if (deleteBtn) deleteUserProfile(deleteBtn.dataset.deleteUserProfile);
    const navTarget = event.target.closest('[data-view="users"], [data-go-view="users"]');
    if (navTarget && roleCanOpen("users")) setTimeout(renderUsersManagement, 0);
  });
}

ensureUsersManagementView();
attachUserManagementEvents();

async function init() {
  hydrateIcons();
  attachAuthGlobalEvents();
  const authenticated = await requireAuthenticatedUser();
  if (!authenticated) return;
  setupEvents();
  try {
    await initStorage();
  } catch (error) {
    console.error(error);
    employees = seedEmployees.map(normalizeEmployee);
    showToast("تعذر فتح قاعدة البيانات؛ تم تشغيل نسخة مؤقتة");
  }
  populateFormOptions();
  renderAll();
  applyRolePermissions();
}

init();

/* =========================================================
   Final business logic repair patch: minutes, documents, employee links, selects
   ========================================================= */
(function finalBusinessLogicRepair(){
  const MANUAL_MINUTE_TYPES_KEY = "nawah-minute-template-settings";
  const DOC_TYPE_KEY = "nawah-document-type-settings";
  const EST_DOC_KEY = "nawah-establishment-documents";
  const MINUTE_FIELD_TYPES = ["text", "date", "time", "textarea"];
  const MINUTE_FIELD_LABELS = {
    text: "نصية",
    date: "تاريخ",
    time: "وقت",
    textarea: "ملاحظات"
  };
  const MINUTE_EMPLOYEE_FIELDS = [
    { id: "employeeName", label: "اسم الموظف" },
    { id: "nationality", label: "الجنسية" },
    { id: "identityNumber", label: "رقم الهوية" },
    { id: "role", label: "المهنة" },
    { id: "workStartDate", label: "بداية العمل" },
    { id: "salary", label: "الراتب" }
  ];

  function localLoad(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : structuredClone(fallback); }
    catch { return structuredClone(fallback); }
  }
  function localSave(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function safeEmployees() { return Array.isArray(employees) ? employees : []; }
  function safeEmployeeById(id) { return safeEmployees().find((employee) => employee.id === id); }
  function moneyValue(employee) { return Number(employee?.totalSalary || employee?.salary || employee?.baseSalary || 0) || 0; }
  function isAbsenceTemplate(template) { return template?.id === "absence-minute" || template?.name === "محضر غياب" || template?.system === true; }
  function editableTemplateSource(value = {}) {
    const templates = Array.isArray(value.templates) ? value.templates : [];
    return { templates: templates.filter((template) => !isAbsenceTemplate(template)) };
  }

  normalizeMinuteField = function(field = {}, index = 0) {
    const type = MINUTE_FIELD_TYPES.includes(field.type) ? field.type : "text";
    return {
      id: field.id || `field-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
      label: String(field.label || `الخانة ${index + 1}`).trim() || `الخانة ${index + 1}`,
      type
    };
  };

  normalizeMinuteTemplate = function(template = {}, index = 0) {
    const fields = Array.isArray(template.fields) ? template.fields.map(normalizeMinuteField) : [];
    return {
      id: template.id || `minute-template-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`,
      name: String(template.name || `نوع محضر ${index + 1}`).trim() || `نوع محضر ${index + 1}`,
      system: false,
      employeeFields: Array.isArray(template.employeeFields) ? template.employeeFields.filter((id) => MINUTE_EMPLOYEE_FIELDS.some((field) => field.id === id)) : [],
      fields
    };
  };

  normalizeMinuteTemplateSettings = function(value = {}) {
    const source = editableTemplateSource(value && typeof value === "object" ? value : {});
    return { templates: source.templates.map(normalizeMinuteTemplate).filter((template) => !isAbsenceTemplate(template)) };
  };

  getMinuteTemplates = function() {
    minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
    return minuteTemplateSettings.templates;
  };

  getMinuteTemplate = function(idOrName) {
    const templates = getMinuteTemplates();
    return templates.find((template) => template.id === idOrName) || templates.find((template) => template.name === idOrName) || null;
  };

  function persistMinuteTemplateSettings() {
    minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
    localSave(MANUAL_MINUTE_TYPES_KEY, minuteTemplateSettings);
  }

  minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
  persistMinuteTemplateSettings();

  function renderManualMinuteOptions() {
    const select = document.querySelector("#employeeMinuteType");
    if (!select) return;
    const current = select.value;
    const templates = getMinuteTemplates();
    select.innerHTML = templates.length
      ? `<option value="">اختر نوع المحضر</option>${templates.map((template) => `<option value="${escapeHtml(template.id)}">${escapeHtml(template.name)}</option>`).join("")}`
      : `<option value="">لا توجد أنواع محاضر — أضفها من الإعدادات</option>`;
    select.value = templates.some((template) => template.id === current) ? current : "";
  }

  populateFormOptions = (function(original) {
    return function patchedPopulateFormOptions() {
      try { original?.(); } catch (error) { console.warn("populateFormOptions fallback", error); }
      try { renderManualMinuteOptions(); } catch (error) { console.warn(error); }
      try { populateEmployeeChoiceSelects(); } catch (error) { console.warn(error); }
    };
  })(populateFormOptions);

  function renderTemplateRows(container) {
    minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
    const templates = minuteTemplateSettings.templates;
    if (!templates.length) {
      container.innerHTML = `<div class="empty-state"><strong>لا توجد أنواع محاضر</strong><p>اضغط إعداد محضر ثم أضف نوع المحضر والخانات الخاصة به يدويًا.</p></div>`;
      return;
    }
    container.innerHTML = templates.map((template) => `
      <div class="minute-template-card" data-minute-template-card="${escapeHtml(template.id)}">
        <div class="minute-template-head">
          <label><span>اسم نوع المحضر</span><input value="${escapeHtml(template.name)}" data-minute-template-name="${escapeHtml(template.id)}" /></label>
          <button type="button" class="secondary-btn" data-add-minute-field="${escapeHtml(template.id)}"><span data-icon="plus"></span>إضافة خانة</button>
          <button type="button" class="quick-view-btn danger-inline-btn" data-remove-minute-template="${escapeHtml(template.id)}" title="حذف نوع المحضر">${iconSvg("trash")}</button>
        </div>
        <div class="minute-employee-fields-box">
          <div><strong>بيانات الموظف التي تظهر في المحضر</strong><p>اختر البيانات التي يسحبها المحضر تلقائيًا من ملف الموظف.</p></div>
          <div class="minute-checkbox-grid">
            ${MINUTE_EMPLOYEE_FIELDS.map((item) => `<label><input type="checkbox" data-minute-employee-field="${escapeHtml(template.id)}:${escapeHtml(item.id)}" ${template.employeeFields.includes(item.id) ? "checked" : ""} /><span>${escapeHtml(item.label)}</span></label>`).join("")}
          </div>
        </div>
        <div class="minute-field-list">
          <div class="minute-field-list-title"><strong>خانات المحضر التفصيلية</strong><p>هذه الخانات يعبئها المستخدم عند إنشاء المحضر.</p></div>
          ${template.fields.length ? template.fields.map((field) => `
            <div class="minute-field-row" data-minute-field-row="${escapeHtml(field.id)}">
              <label><span>اسم الخانة</span><input value="${escapeHtml(field.label)}" data-minute-field-label="${escapeHtml(template.id)}:${escapeHtml(field.id)}" /></label>
              <label><span>نوع الخانة</span><select data-minute-field-type="${escapeHtml(template.id)}:${escapeHtml(field.id)}">
                ${MINUTE_FIELD_TYPES.map((type) => `<option value="${type}" ${field.type === type ? "selected" : ""}>${MINUTE_FIELD_LABELS[type]}</option>`).join("")}
              </select></label>
              <button type="button" class="quick-view-btn danger-inline-btn" data-remove-minute-field="${escapeHtml(template.id)}:${escapeHtml(field.id)}" title="حذف الخانة">${iconSvg("trash")}</button>
            </div>`).join("") : `<div class="employee-note-empty">لا توجد خانات تفصيلية لهذا النوع. أضف خانة إذا احتجت حقولًا قابلة للتحرير.</div>`}
        </div>
      </div>`).join("");
  }

  function syncMinuteEditorFromDom(root = document) {
    const settings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
    settings.templates.forEach((template) => {
      const nameInput = root.querySelector(`[data-minute-template-name="${CSS.escape(template.id)}"]`);
      if (nameInput) template.name = nameInput.value.trim() || template.name;
      template.employeeFields = MINUTE_EMPLOYEE_FIELDS
        .filter((item) => root.querySelector(`[data-minute-employee-field="${CSS.escape(`${template.id}:${item.id}`)}"]`)?.checked)
        .map((item) => item.id);
      template.fields.forEach((field) => {
        const key = `${template.id}:${field.id}`;
        const labelInput = root.querySelector(`[data-minute-field-label="${CSS.escape(key)}"]`);
        const typeInput = root.querySelector(`[data-minute-field-type="${CSS.escape(key)}"]`);
        if (labelInput) field.label = labelInput.value.trim() || field.label;
        if (typeInput) field.type = MINUTE_FIELD_TYPES.includes(typeInput.value) ? typeInput.value : "text";
      });
    });
    minuteTemplateSettings = normalizeMinuteTemplateSettings(settings);
  }

  updateMinuteTemplateFromInputs = function() { syncMinuteEditorFromDom(document); };
  addMinuteTemplate = function() {
    syncMinuteEditorFromDom(document);
    minuteTemplateSettings.templates.push(normalizeMinuteTemplate({ name: "نوع محضر جديد", fields: [] }, minuteTemplateSettings.templates.length));
    renderMinuteTemplateSettings();
    renderMinuteSettingsModalContent();
    renderManualMinuteOptions();
  };
  addMinuteField = function(templateId) {
    syncMinuteEditorFromDom(document);
    const template = minuteTemplateSettings.templates.find((item) => item.id === templateId);
    if (!template) return;
    template.fields.push(normalizeMinuteField({ label: "خانة جديدة", type: "text" }, template.fields.length));
    renderMinuteTemplateSettings();
    renderMinuteSettingsModalContent();
  };
  removeMinuteTemplate = function(templateId) {
    syncMinuteEditorFromDom(document);
    minuteTemplateSettings.templates = minuteTemplateSettings.templates.filter((item) => item.id !== templateId);
    renderMinuteTemplateSettings();
    renderMinuteSettingsModalContent();
    renderManualMinuteOptions();
  };
  removeMinuteField = function(templateId, fieldId) {
    syncMinuteEditorFromDom(document);
    const template = minuteTemplateSettings.templates.find((item) => item.id === templateId);
    if (!template) return;
    template.fields = template.fields.filter((item) => item.id !== fieldId);
    renderMinuteTemplateSettings();
    renderMinuteSettingsModalContent();
  };

  renderMinuteTemplateSettings = function() {
    minuteTemplateSettings = normalizeMinuteTemplateSettings(minuteTemplateSettings);
    const summary = document.querySelector("#minuteSettingsSummary");
    if (summary) {
      const fieldCount = minuteTemplateSettings.templates.reduce((sum, template) => sum + template.fields.length, 0);
      summary.innerHTML = `<div><span>أنواع المحاضر</span><strong>${arabicNumber(minuteTemplateSettings.templates.length)}</strong></div><div><span>الخانات المعرفة</span><strong>${arabicNumber(fieldCount)}</strong></div>`;
    }
    const list = document.querySelector("#minuteTemplateList");
    if (list) {
      list.innerHTML = `<div class="settings-placeholder-card"><span data-icon="notes"></span><div><strong>إعداد أنواع المحاضر من نافذة مستقلة</strong><p>استخدم زر إعداد محضر لفتح شاشة عريضة لإضافة الأنواع والخانات. جميع الأنواع قابلة للحذف ولا يوجد نوع افتراضي.</p></div></div>`;
      hydrateIcons(list);
    }
    renderManualMinuteOptions();
  };

  function ensureMinuteSettingsModal() {
    if (document.querySelector("#minuteBuilderModal")) return;
    const dialog = document.createElement("dialog");
    dialog.className = "modal employee-profile-modal minute-builder-modal";
    dialog.id = "minuteBuilderModal";
    dialog.innerHTML = `
      <form id="minuteBuilderForm">
        <div class="modal-head">
          <div><h2>${iconSvg("notes")} إعداد نوع محضر</h2><p>إنشاء أنواع المحاضر وتحديد الخانات التي تظهر عند اختيارها في ملف الموظف.</p></div>
          <button type="button" class="icon-btn" data-close-modal="minuteBuilderModal"><span data-icon="x"></span></button>
        </div>
        <div class="modal-body minute-builder-body">
          <div class="section-title-with-action minute-builder-toolbar">
            <div><h3>أنواع المحاضر</h3><p>لا يوجد نوع افتراضي، ويمكن حذف جميع الأنواع.</p></div>
            <button type="button" class="primary-btn" id="modalAddMinuteTemplateBtn"><span data-icon="plus"></span>إضافة نوع محضر</button>
          </div>
          <div class="minute-template-list" id="minuteBuilderTemplateList"></div>
        </div>
        <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal="minuteBuilderModal">إلغاء</button><button type="submit" class="primary-btn">حفظ إعداد المحاضر</button></div>
      </form>`;
    document.body.appendChild(dialog);
    hydrateIcons(dialog);
    dialog.querySelector("#modalAddMinuteTemplateBtn").addEventListener("click", addMinuteTemplate);
    dialog.querySelectorAll('[data-close-modal="minuteBuilderModal"]').forEach((button) => button.addEventListener("click", () => dialog.close()));
    dialog.querySelector("#minuteBuilderTemplateList").addEventListener("click", (event) => {
      const addField = event.target.closest("[data-add-minute-field]");
      if (addField) { addMinuteField(addField.dataset.addMinuteField); return; }
      const removeTemplate = event.target.closest("[data-remove-minute-template]");
      if (removeTemplate) { removeMinuteTemplate(removeTemplate.dataset.removeMinuteTemplate); return; }
      const removeField = event.target.closest("[data-remove-minute-field]");
      if (removeField) { const [templateId, fieldId] = removeField.dataset.removeMinuteField.split(":"); removeMinuteField(templateId, fieldId); }
    });
    dialog.addEventListener("input", (event) => { if (event.target.closest("[data-minute-template-name], [data-minute-field-label]")) syncMinuteEditorFromDom(dialog); });
    dialog.addEventListener("change", (event) => { if (event.target.closest("[data-minute-field-type], [data-minute-employee-field]")) { syncMinuteEditorFromDom(dialog); renderMinuteSettingsModalContent(); } });
    dialog.querySelector("#minuteBuilderForm").addEventListener("submit", (event) => {
      event.preventDefault();
      syncMinuteEditorFromDom(dialog);
      persistMinuteTemplateSettings();
      renderMinuteTemplateSettings();
      renderManualMinuteOptions();
      dialog.close();
      showToast("تم حفظ إعداد المحاضر");
    });
  }

  function renderMinuteSettingsModalContent() {
    ensureMinuteSettingsModal();
    const list = document.querySelector("#minuteBuilderTemplateList");
    if (!list) return;
    renderTemplateRows(list);
    hydrateIcons(list);
  }

  function rebuildMinuteSettingsPanel() {
    const panel = document.querySelector('[data-settings-panel="minuteSettings"]');
    if (!panel) return;
    const action = panel.querySelector("#addMinuteTemplateBtn");
    if (action) {
      action.id = "openMinuteBuilderBtn";
      action.innerHTML = `<span data-icon="settings"></span>إعداد محضر`;
      action.className = "primary-btn";
    }
    renderMinuteTemplateSettings();
    hydrateIcons(panel);
  }

  renderEmployeeMinuteDynamicFields = function() {
    const container = document.querySelector("#employeeMinuteDynamicFields");
    const typeInput = document.querySelector("#employeeMinuteType");
    if (!container || !typeInput) return;
    const template = getMinuteTemplate(typeInput.value);
    if (!typeInput.value || !template) {
      container.innerHTML = '<div class="employee-note-empty span-all">اختر نوع المحضر لعرض الخانات الخاصة به.</div>';
      return;
    }
    const currentId = document.querySelector('#employeeForm [name="employeeId"]')?.value || "";
    const employee = currentId ? safeEmployeeById(currentId) : currentFormEmployeeSnapshot?.();
    const autoPreview = (template.employeeFields || []).length ? `
      <div class="minute-auto-preview span-all">
        <strong>بيانات الموظف التي ستظهر في المحضر</strong>
        <div>${template.employeeFields.map((id) => {
          const item = MINUTE_EMPLOYEE_FIELDS.find((field) => field.id === id);
          return `<span>${escapeHtml(item?.label || id)}</span>`;
        }).join("")}</div>
      </div>` : "";
    const manualFields = template.fields.map((field) => {
      let control = "";
      let cls = "";
      if (field.type === "textarea") { cls = "span-all"; control = `<textarea rows="3" data-minute-dynamic-field="${escapeHtml(field.id)}" placeholder="${escapeHtml(field.label)}"></textarea>`; }
      else if (field.type === "date" || field.type === "time") control = `<input type="${field.type}" data-minute-dynamic-field="${escapeHtml(field.id)}" />`;
      else control = `<input type="text" data-minute-dynamic-field="${escapeHtml(field.id)}" placeholder="${escapeHtml(field.label)}" />`;
      return `<label class="${cls}"><span>${escapeHtml(field.label)}</span>${control}</label>`;
    }).join("");
    container.innerHTML = autoPreview + (manualFields || '<div class="employee-note-empty span-all">لا توجد خانات تفصيلية لهذا النوع. يمكن حفظ المحضر ببيانات الموظف المختارة فقط.</div>');
  };

  const originalCreateAbsenceMinute = createAbsenceMinute;
  createAbsenceMinute = async function(record) {
    const employee = getEmployee(record.employeeId);
    if (!employee) return;
    const exists = employee.minutes?.some((minute) => minute.sourceAbsenceId === record.id);
    if (exists) return;
    const period = record.from === record.to ? formatDate(record.from) : `${formatDate(record.from)} إلى ${formatDate(record.to)}`;
    const details = absencePenaltyDetails(record);
    const meta = absenceTypeMeta(record.type);
    const deductionAmount = absenceDeductionAmount(record);
    const segmentText = details.showPeriod ? `، ونوع الفترة الغائبة: ${details.periodLabel || absencePeriodMeta(record.periodSegment || "fullDay").label}` : "";
    const minute = createEmployeeMinuteRecord({
      type: "محضر غياب",
      templateId: "system-absence-minute",
      fieldValues: {},
      text: `تم تسجيل ${meta.label} للموظف عن العمل للفترة ${period}${segmentText}${record.reason ? `، والسبب المدخل: ${record.reason}` : ""}.`,
      penalty: `${details.policy}: ${details.text}`,
      deductionAmount,
      deductionAmountLabel: formatCurrencyEn(deductionAmount),
      sourceAbsenceId: record.id,
      employeeId: record.employeeId,
      absenceType: record.type,
      absencePeriod: period,
      absencePolicy: details.policy
    });
    employee.minutes = [...(employee.minutes || []), minute];
    await saveEmployeeRecord(employee);
  };

  /* Document types and establishment documents */
  let documentTypeSettings = localLoad(DOC_TYPE_KEY, { types: [] });
  let establishmentDocuments = localLoad(EST_DOC_KEY, []);
  function normalizeDocType(type = {}, index = 0) { return { id: type.id || `doc-type-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`, name: String(type.name || "").trim() }; }
  function normalizeEstDoc(doc = {}, index = 0) { return { id: doc.id || `est-doc-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`, typeId: doc.typeId || "", title: doc.title || "", number: doc.number || "", issueDate: doc.issueDate || "", expiryDate: doc.expiryDate || "", note: doc.note || "" }; }
  function saveDocumentSettings() { documentTypeSettings.types = (documentTypeSettings.types || []).map(normalizeDocType).filter((item) => item.name); localSave(DOC_TYPE_KEY, documentTypeSettings); }
  function saveEstDocs() { establishmentDocuments = (establishmentDocuments || []).map(normalizeEstDoc); localSave(EST_DOC_KEY, establishmentDocuments); }

  function ensureDocumentSettingsPanels() {
    const nav = document.querySelector("#settingsNav");
    const panelHost = document.querySelector("#settingsView .settings-panel");
    if (nav && !nav.querySelector('[data-settings-section="documentTypes"]')) {
      nav.insertAdjacentHTML("beforeend", `<button type="button" data-settings-section="documentTypes"><span data-icon="file"></span>أنواع الوثائق</button>`);
    }
    if (panelHost && !panelHost.querySelector('[data-settings-panel="documentTypes"]')) {
      panelHost.insertAdjacentHTML("beforeend", `
        <section class="settings-section" data-settings-panel="documentTypes">
          <div class="panel-head"><div><h3>أنواع الوثائق</h3><p>إعداد أنواع الوثائق التي تستخدم في وثائق الموظفين والمنشأة.</p></div></div>
          <div class="work-settings-block">
            <div class="section-title-with-action"><div><h4>قائمة أنواع الوثائق</h4><p>تبدأ فارغة وتضاف يدويًا.</p></div><button type="button" class="primary-btn" id="addDocumentTypeBtn"><span data-icon="plus"></span>إضافة نوع وثيقة</button></div>
            <div class="minute-template-list" id="documentTypeList"></div>
            <div class="form-actions"><button type="button" class="primary-btn" id="saveDocumentTypesBtn">حفظ أنواع الوثائق</button></div>
          </div>
        </section>`);
    }
    hydrateIcons(nav || document);
  }

  function renderDocumentTypeSettings() {
    const list = document.querySelector("#documentTypeList");
    if (!list) return;
    const types = (documentTypeSettings.types || []).map(normalizeDocType);
    list.innerHTML = types.length ? types.map((type) => `
      <div class="minute-field-row" data-doc-type-row="${escapeHtml(type.id)}">
        <label><span>نوع الوثيقة</span><input value="${escapeHtml(type.name)}" data-doc-type-name="${escapeHtml(type.id)}" /></label>
        <button type="button" class="quick-view-btn danger-inline-btn" data-remove-doc-type="${escapeHtml(type.id)}" title="حذف نوع الوثيقة">${iconSvg("trash")}</button>
      </div>`).join("") : `<div class="empty-state"><strong>لا توجد أنواع وثائق</strong><p>أضف الأنواع يدويًا حسب احتياج المنشأة.</p></div>`;
    hydrateIcons(list);
  }
  function syncDocumentTypesFromDom() {
    (documentTypeSettings.types || []).forEach((type) => {
      const input = document.querySelector(`[data-doc-type-name="${CSS.escape(type.id)}"]`);
      if (input) type.name = input.value.trim();
    });
    documentTypeSettings.types = (documentTypeSettings.types || []).filter((type) => type.name);
  }

  function ensureEstablishmentDocumentsView() {
    const sidebar = document.querySelector(".sidebar nav") || document.querySelector(".sidebar");
    const main = document.querySelector("main") || document.querySelector(".content") || document.querySelector(".main-content");
    if (sidebar && !sidebar.querySelector('[data-view="establishmentDocuments"]')) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "nav-item";
      btn.dataset.view = "establishmentDocuments";
      btn.innerHTML = `<span class="nav-icon" data-icon="file"></span><span>وثائق المنشأة</span>`;
      sidebar.appendChild(btn);
    }
    if (main && !document.querySelector("#establishmentDocumentsView")) {
      const section = document.createElement("section");
      section.className = "view";
      section.id = "establishmentDocumentsView";
      section.innerHTML = `
        <div class="section-toolbar"><div><h2 class="section-title">وثائق المنشأة</h2><p class="section-description">إدارة وثائق المنشأة وتواريخ انتهائها.</p></div><button type="button" class="primary-btn" id="addEstablishmentDocumentBtn"><span data-icon="plus"></span>إضافة وثيقة منشأة</button></div>
        <article class="panel"><div class="table-wrap"><table><thead><tr><th>نوع الوثيقة</th><th>اسم الوثيقة</th><th>رقم الوثيقة</th><th>تاريخ الإصدار</th><th>تاريخ الانتهاء</th><th>ملاحظات</th><th>إجراءات</th></tr></thead><tbody id="establishmentDocumentsBody"></tbody></table></div></article>`;
      main.appendChild(section);
    }
  }
  function renderEstablishmentDocuments() {
    const body = document.querySelector("#establishmentDocumentsBody");
    if (!body) return;
    const types = documentTypeSettings.types || [];
    body.innerHTML = establishmentDocuments.length ? establishmentDocuments.map((doc, index) => {
      const type = types.find((item) => item.id === doc.typeId)?.name || "—";
      return `<tr><td>${escapeHtml(type)}</td><td>${escapeHtml(doc.title || "—")}</td><td>${escapeHtml(doc.number || "—")}</td><td>${formatDate(doc.issueDate) || "—"}</td><td>${formatDate(doc.expiryDate) || "—"}</td><td>${escapeHtml(doc.note || "—")}</td><td><button type="button" class="quick-view-btn danger-inline-btn" data-remove-est-doc="${escapeHtml(doc.id)}">${iconSvg("trash")}</button></td></tr>`;
    }).join("") : `<tr><td colspan="7"><div class="empty-state"><strong>لا توجد وثائق منشأة</strong><p>استخدم زر إضافة وثيقة منشأة لإدخال السجل.</p></div></td></tr>`;
    hydrateIcons(body);
  }
  function addEstablishmentDocument() {
    const types = documentTypeSettings.types || [];
    const typeId = types[0]?.id || "";
    establishmentDocuments.unshift(normalizeEstDoc({ typeId, title: "وثيقة منشأة", issueDate: formatInputDate(todayAtNoon()), expiryDate: "" }));
    saveEstDocs();
    renderEstablishmentDocuments();
  }

  function employeeOptionsHtml(selected = "") {
    const opts = safeEmployees().map((employee) => `<option value="${escapeHtml(employee.id)}" ${employee.id === selected ? "selected" : ""}>${escapeHtml(employee.name)} - ${escapeHtml(employee.employeeNumber || employee.id)}</option>`).join("");
    return `<option value="">اختر الموظف</option>${opts}`;
  }
  function populateEmployeeChoiceSelects() {
    ["#absenceForm select[name='employeeId']", "#leaveForm select[name='employeeId']"].forEach((selector) => {
      const select = document.querySelector(selector);
      if (!select) return;
      const current = select.value;
      select.innerHTML = employeeOptionsHtml(current);
      if (safeEmployees().some((employee) => employee.id === current)) select.value = current;
    });
  }
  function openAbsenceModalPatched() {
    populateEmployeeChoiceSelects();
    const form = document.querySelector("#absenceForm");
    if (!form) return;
    form.reset();
    populateEmployeeChoiceSelects();
    form.elements.from.value = selectedAttendanceDate || formatInputDate(todayAtNoon());
    form.elements.to.value = selectedAttendanceDate || formatInputDate(todayAtNoon());
    updateAbsencePeriodVisibility?.();
    document.querySelector("#absenceModal")?.showModal();
  }
  function openLeaveModalPatched() {
    populateEmployeeChoiceSelects();
    const form = document.querySelector("#leaveForm");
    if (!form) return;
    form.reset();
    populateEmployeeChoiceSelects();
    form.elements.from.value = formatInputDate(todayAtNoon());
    form.elements.to.value = formatInputDate(todayAtNoon());
    document.querySelector("#leaveModal")?.showModal();
  }

  function robustSwitchEmployeeSection(section) {
    const target = section || "personal";
    document.querySelectorAll("[data-employee-section]").forEach((button) => button.classList.toggle("active", button.dataset.employeeSection === target));
    document.querySelectorAll("[data-section-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.sectionPanel === target));
    document.querySelector(".employee-section-content")?.scrollTo?.(0, 0);
  }
  switchEmployeeSection = robustSwitchEmployeeSection;

  function forceOpenEmployeeEditor(id) {
    const employee = getEmployee(id);
    const form = document.querySelector("#employeeForm");
    const modal = document.querySelector("#employeeModal");
    if (!employee || !form || !modal) {
      showToast("تعذر العثور على بيانات الموظف");
      return;
    }
    const today = formatInputDate(todayAtNoon());
    safeCallEmployeeModalStep(() => form.reset());
    safeCallEmployeeModalStep(() => populateFormOptions());
    employeeFormState = {
      photoAttachmentId: employee.photoAttachmentId || "",
      legacyPhoto: employee.legacyPhoto || "",
      identityAttachmentId: employee.identityAttachmentId || "",
      signatureAttachmentId: employee.signatureAttachmentId || "",
      fingerprintAttachmentId: employee.fingerprintAttachmentId || "",
      passports: (employee.passports || []).map(createPassport),
      bankAccounts: (employee.bankAccounts || []).map(createBankAccount),
      notes: (employee.notes || []).map((item) => ({ ...item })),
      minutes: (employee.minutes || employee.disciplinaryMinutes || []).map(createEmployeeMinuteRecord),
      documents: (employee.documents || []).map(createDocument),
      commissions: (employee.commissions || []).map((item) => ({ ...item })),
      commissionAccrualStartDate: employee.commissionAccrualStartDate || employee.workStartDate || employee.contractStartDate || today,
      commissionPaused: Boolean(employee.commissionPaused),
      commissionPauseReason: employee.commissionPauseReason || "",
      commissionPausedByLeaveId: employee.commissionPausedByLeaveId || "",
      commissionPausedAt: employee.commissionPausedAt || "",
      consent: employee.consent ? { ...employee.consent } : null
    };
    safeCallEmployeeModalStep(() => { document.querySelector("#employeeModalTitle").innerHTML = `${iconSvg("user-plus")}تعديل بيانات الموظف`; });
    const fields = ["employeeId", "firstName", "fatherName", "grandName", "familyName", "nationality", "birthDate", "identityNumber", "identityExpiryGregorian", "identityExpiryHijri", "status", "department", "branch", "section", "directManager", "role", "contractStartDate", "workStartDate", "contractMonths", "renewalOption", "baseSalary", "housingAllowance", "transportAllowance", "otherAllowances", "phone", "emergencyPhone", "email", "homeCountryPhone"];
    fields.forEach((name) => safeCallEmployeeModalStep(() => setFormValue(form, name, employee[name] ?? "")));
    safeCallEmployeeModalStep(() => refreshEmployeeOrgOptions(employee.section || "", employee.role || ""));
    safeCallEmployeeModalStep(() => setFormValue(form, "contractStartDate", employee.contractStartDate || today));
    safeCallEmployeeModalStep(() => setFormValue(form, "workStartDate", employee.workStartDate || employee.contractStartDate || today));
    safeCallEmployeeModalStep(() => setFormValue(form, "commissionStartDate", employeeFormState.commissionAccrualStartDate));
    safeCallEmployeeModalStep(() => setFormValue(form, "commissionPaymentDate", ""));
    safeCallEmployeeModalStep(() => setFormValue(form, "hijriCorrection", employee.hijriCorrection || 0));
    safeCallEmployeeModalStep(() => setRadioValue(form, "nationalityType", employee.nationalityType || "saudi"));
    safeCallEmployeeModalStep(() => renderNationalityOptions(employee.nationality || "سعودي", (employee.nationalityType || "saudi") === "nonSaudi"));
    safeCallEmployeeModalStep(() => setRadioValue(form, "gender", employee.gender || "male"));
    safeCallEmployeeModalStep(() => setRadioValue(form, "contractType", employee.contractType || "unlimited"));
    safeCallEmployeeModalStep(() => { if (form.elements.insuranceEnabled) form.elements.insuranceEnabled.checked = Boolean(employee.insuranceEnabled); });
    [renderPassports, renderBankAccounts, renderEmployeeNotes, renderEmployeeMinutes, resetEmployeeMinuteForm, renderDocuments, renderCommissionHistory, renderDocumentation, updateAllFormCalculations].forEach((fn) => safeCallEmployeeModalStep(fn));
    safeCallEmployeeModalStep(() => toggleEmployeeMinuteForm(false));
    safeCallEmployeeModalStep(() => renderEmployeePhoto());
    safeCallEmployeeModalStep(() => {
      const endServiceBtn = document.querySelector("#endEmployeeServiceBtn");
      if (endServiceBtn) {
        endServiceBtn.disabled = !employee.id || employee.status === "terminated";
        endServiceBtn.classList.toggle("is-disabled", !employee.id || employee.status === "terminated");
        endServiceBtn.title = employee.status === "terminated" ? "تم إنهاء خدمات الموظف" : "إنهاء خدمات الموظف";
      }
    });
    robustSwitchEmployeeSection("personal");
    modal.showModal();
    modal.scrollTop = 0;
  }

  function openEmployeeForEdit(id) {
    if (!id) return;
    try {
      const result = openEmployeeModal(id);
      if (result?.catch) result.catch((error) => { console.error(error); forceOpenEmployeeEditor(id); });
    } catch (error) {
      console.error(error);
      forceOpenEmployeeEditor(id);
    }
  }

  function openEmployeeForView(id) {
    if (!id) return;
    try {
      const result = openQuickView(id);
      if (result?.catch) result.catch((error) => { console.error(error); showToast("تعذر فتح عرض الموظف"); });
    } catch (error) {
      console.error(error);
      showToast("تعذر فتح عرض الموظف");
    }
  }

  function finalWireUi() {
    rebuildMinuteSettingsPanel();
    ensureMinuteSettingsModal();
    ensureDocumentSettingsPanels();
    ensureEstablishmentDocumentsView();
    renderMinuteTemplateSettings();
    renderDocumentTypeSettings();
    renderEstablishmentDocuments();
    populateEmployeeChoiceSelects();
    renderManualMinuteOptions();
    const openMinuteBtn = document.querySelector("#openMinuteBuilderBtn");
    if (openMinuteBtn && !openMinuteBtn.dataset.finalWired) {
      openMinuteBtn.dataset.finalWired = "1";
      openMinuteBtn.addEventListener("click", () => { renderMinuteSettingsModalContent(); document.querySelector("#minuteBuilderModal")?.showModal(); });
    }
    const addDocTypeBtn = document.querySelector("#addDocumentTypeBtn");
    if (addDocTypeBtn && !addDocTypeBtn.dataset.finalWired) {
      addDocTypeBtn.dataset.finalWired = "1";
      addDocTypeBtn.addEventListener("click", () => {
        syncDocumentTypesFromDom();
        documentTypeSettings.types = [...(documentTypeSettings.types || []), normalizeDocType({ name: "نوع وثيقة جديد" }, (documentTypeSettings.types || []).length)];
        renderDocumentTypeSettings();
      });
    }
    const saveDocTypesBtn = document.querySelector("#saveDocumentTypesBtn");
    if (saveDocTypesBtn && !saveDocTypesBtn.dataset.finalWired) {
      saveDocTypesBtn.dataset.finalWired = "1";
      saveDocTypesBtn.addEventListener("click", () => { syncDocumentTypesFromDom(); saveDocumentSettings(); showToast("تم حفظ أنواع الوثائق"); });
    }
    const addEstDocBtn = document.querySelector("#addEstablishmentDocumentBtn");
    if (addEstDocBtn && !addEstDocBtn.dataset.finalWired) {
      addEstDocBtn.dataset.finalWired = "1";
      addEstDocBtn.addEventListener("click", addEstablishmentDocument);
    }
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    const employeeName = target.closest(".employee-name-link[data-edit-employee], [data-employee-name-edit]");
    const edit = target.closest("[data-edit-employee]");
    const quick = target.closest("[data-quick-view]");
    const employeeSection = target.closest("[data-employee-section]");
    const absenceButton = target.closest("#newAbsenceBtn");
    const leaveButton = target.closest("#newLeaveBtn");
    const openMinute = target.closest("#openMinuteBuilderBtn");
    const removeDocType = target.closest("[data-remove-doc-type]");
    const removeEstDoc = target.closest("[data-remove-est-doc]");
    const viewBtn = target.closest('[data-view="establishmentDocuments"]');
    if (employeeSection) { event.preventDefault(); event.stopImmediatePropagation(); robustSwitchEmployeeSection(employeeSection.dataset.employeeSection); return; }
    if (absenceButton) { event.preventDefault(); event.stopImmediatePropagation(); openAbsenceModalPatched(); return; }
    if (leaveButton) { event.preventDefault(); event.stopImmediatePropagation(); openLeaveModalPatched(); return; }
    if (employeeName) { event.preventDefault(); event.stopImmediatePropagation(); openEmployeeForEdit(employeeName.dataset.editEmployee || employeeName.dataset.employeeNameEdit); return; }
    if (edit) { event.preventDefault(); event.stopImmediatePropagation(); openEmployeeForEdit(edit.dataset.editEmployee); return; }
    if (quick) { event.preventDefault(); event.stopImmediatePropagation(); openEmployeeForView(quick.dataset.quickView); return; }
    if (openMinute) { event.preventDefault(); renderMinuteSettingsModalContent(); document.querySelector("#minuteBuilderModal")?.showModal(); return; }
    if (removeDocType) { documentTypeSettings.types = (documentTypeSettings.types || []).filter((item) => item.id !== removeDocType.dataset.removeDocType); renderDocumentTypeSettings(); return; }
    if (removeEstDoc) { establishmentDocuments = establishmentDocuments.filter((item) => item.id !== removeEstDoc.dataset.removeEstDoc); saveEstDocs(); renderEstablishmentDocuments(); return; }
    if (viewBtn) { setTimeout(renderEstablishmentDocuments, 0); }
  }, true);

  document.addEventListener("change", (event) => {
    if (event.target.matches("#employeeMinuteType")) renderEmployeeMinuteDynamicFields();
    if (event.target.matches("#absenceForm select[name='employeeId'], #leaveForm select[name='employeeId']")) event.target.dataset.selected = event.target.value;
    if (event.target.matches("[data-doc-type-name]")) syncDocumentTypesFromDom();
  }, true);

  const originalRenderAll = renderAll;
  renderAll = function patchedRenderAll() {
    originalRenderAll?.();
    try { finalWireUi(); } catch (error) { console.warn(error); }
  };
  const originalSwitchView = switchView;
  switchView = function patchedSwitchView(viewName) {
    originalSwitchView?.(viewName);
    if (viewName === "establishmentDocuments") renderEstablishmentDocuments();
  };

  window.addEventListener("load", () => { try { finalWireUi(); } catch (error) { console.warn(error); } });
  setTimeout(() => { try { finalWireUi(); } catch (error) { console.warn(error); } }, 0);
})();


/* Robust close handler for minute builder modal */
document.addEventListener("click", function(event) {
  const closeBtn = event.target.closest('[data-close-modal="minuteBuilderModal"]');
  if (!closeBtn) return;
  const modal = document.getElementById("minuteBuilderModal");
  if (modal?.open) {
    event.preventDefault();
    modal.close();
  }
}, true);


/* =========================================================
   Final patch: minutes printing/deleting and document categories/types
   ========================================================= */
(function minutesAndDocumentsFinalPatch(){
  const DOC_TYPE_KEY = "nawah-document-type-settings";
  const EST_DOC_KEY = "nawah-establishment-documents";
  const DOC_CATEGORY_PLACEHOLDER = "اختر التصنيف";

  function loadJson(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : structuredClone(fallback); }
    catch { return structuredClone(fallback); }
  }
  function saveJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
  function safeText(value) { return String(value ?? "").trim(); }
  function moneyLabel(value) { try { return formatCurrencyEn(Number(value || 0)); } catch { return `${Number(value || 0).toFixed(2)} ر.س`; } }
  function esc(value) { return typeof escapeHtml === "function" ? escapeHtml(value ?? "") : String(value ?? "").replace(/[&<>\"]/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch])); }
  function ic(name) { return typeof iconSvg === "function" ? iconSvg(name) : ""; }

  function normalizeDocSettings(raw) {
    const source = raw && typeof raw === "object" ? raw : {};
    const categories = Array.isArray(source.categories) ? source.categories : [];
    const types = Array.isArray(source.types) ? source.types : [];
    return {
      categories: categories.map((item, index) => ({
        id: item.id || uid(`doc-cat-${index}`),
        name: safeText(item.name),
        visible: item.visible !== false
      })).filter((item) => item.name),
      types: types.map((item, index) => ({
        id: item.id || uid(`doc-type-${index}`),
        name: safeText(item.name),
        categoryId: item.categoryId || "",
        visible: item.visible !== false
      })).filter((item) => item.name)
    };
  }

  let docSettings = normalizeDocSettings(loadJson(DOC_TYPE_KEY, { categories: [], types: [] }));
  let estDocs = (Array.isArray(loadJson(EST_DOC_KEY, [])) ? loadJson(EST_DOC_KEY, []) : []).map((doc, index) => ({
    id: doc.id || uid(`est-doc-${index}`),
    typeId: doc.typeId || "",
    title: doc.title || "",
    number: doc.number || "",
    issueDate: doc.issueDate || "",
    expiryDate: doc.expiryDate || "",
    note: doc.note || "",
    attachmentId: doc.attachmentId || ""
  }));

  function saveDocSettings() {
    docSettings = normalizeDocSettings(docSettings);
    saveJson(DOC_TYPE_KEY, docSettings);
  }
  function saveEstDocsFinal() { saveJson(EST_DOC_KEY, estDocs); }
  function categoryName(id) { return docSettings.categories.find((cat) => cat.id === id)?.name || "—"; }
  function typeName(id) { return docSettings.types.find((type) => type.id === id)?.name || "—"; }
  function activeCategories() { return docSettings.categories.filter((cat) => cat.visible !== false); }
  function activeTypes() { return docSettings.types.filter((type) => type.visible !== false); }

  function ensureDialog(id, html) {
    let dialog = document.getElementById(id);
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.id = id;
      dialog.className = "modal small-modal settings-entry-modal";
      dialog.innerHTML = html;
      document.body.appendChild(dialog);
      if (typeof hydrateIcons === "function") hydrateIcons(dialog);
    }
    return dialog;
  }

  function ensureDocumentModals() {
    ensureDialog("documentCategoryModal", `
      <form id="documentCategoryForm">
        <div class="modal-head"><div><h2>تصنيف وثائق</h2><p>أضف أو عدّل تصنيفًا تستخدمه لتنظيم أنواع الوثائق.</p></div><button type="button" class="icon-btn" data-close-modal="documentCategoryModal"><span data-icon="x"></span></button></div>
        <div class="modal-body"><label><span>اسم التصنيف</span><input name="name" placeholder="مثال: الأوراق الحكومية" /></label><label class="toggle-line"><input type="checkbox" name="visible" checked />إظهار التصنيف</label><input type="hidden" name="id" /></div>
        <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal="documentCategoryModal">إلغاء</button><button type="submit" class="primary-btn">حفظ التصنيف</button></div>
      </form>`);
    ensureDialog("documentTypeModal", `
      <form id="documentTypeForm">
        <div class="modal-head"><div><h2>نوع وثيقة</h2><p>أضف نوعًا واحدًا واربطه بتصنيف محدد.</p></div><button type="button" class="icon-btn" data-close-modal="documentTypeModal"><span data-icon="x"></span></button></div>
        <div class="modal-body"><label><span>اسم نوع الوثيقة</span><input name="name" placeholder="اسم نوع الوثيقة" /></label><label><span>تصنيف الوثيقة</span><select name="categoryId"></select></label><label class="toggle-line"><input type="checkbox" name="visible" checked />إظهار النوع</label><input type="hidden" name="id" /></div>
        <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal="documentTypeModal">إلغاء</button><button type="submit" class="primary-btn">حفظ نوع الوثيقة</button></div>
      </form>`);
    ensureDialog("establishmentDocumentModal", `
      <form id="establishmentDocumentForm">
        <div class="modal-head"><div><h2>وثيقة منشأة</h2><p>سجل بيانات الوثيقة وربطها بنوع وتصنيف.</p></div><button type="button" class="icon-btn" data-close-modal="establishmentDocumentModal"><span data-icon="x"></span></button></div>
        <div class="modal-body form-grid form-grid-2"><label><span>نوع الوثيقة</span><select name="typeId"></select></label><label><span>اسم الوثيقة</span><input name="title" placeholder="اسم الوثيقة" /></label><label><span>رقم الوثيقة</span><input name="number" /></label><label><span>تاريخ الإصدار</span><input type="date" name="issueDate" /></label><label><span>تاريخ الانتهاء</span><input type="date" name="expiryDate" /></label><label class="span-all"><span>ملاحظات</span><textarea rows="3" name="note"></textarea></label><input type="hidden" name="id" /></div>
        <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal="establishmentDocumentModal">إلغاء</button><button type="submit" class="primary-btn">حفظ الوثيقة</button></div>
      </form>`);
  }

  function fillDocCategorySelect(select, selected = "") {
    if (!select) return;
    const cats = activeCategories();
    select.innerHTML = `<option value="">${DOC_CATEGORY_PLACEHOLDER}</option>` + cats.map((cat) => `<option value="${esc(cat.id)}" ${cat.id === selected ? "selected" : ""}>${esc(cat.name)}</option>`).join("");
    select.value = cats.some((cat) => cat.id === selected) ? selected : "";
  }
  function fillDocTypeSelect(select, selected = "") {
    if (!select) return;
    const types = activeTypes();
    select.innerHTML = `<option value="">اختر نوع الوثيقة</option>` + types.map((type) => `<option value="${esc(type.id)}" ${type.id === selected ? "selected" : ""}>${esc(type.name)}${type.categoryId ? ` — ${esc(categoryName(type.categoryId))}` : ""}</option>`).join("");
    select.value = types.some((type) => type.id === selected) ? selected : "";
  }

  function openCategoryModal(id = "") {
    ensureDocumentModals();
    const dialog = document.getElementById("documentCategoryModal");
    const form = document.getElementById("documentCategoryForm");
    const item = docSettings.categories.find((cat) => cat.id === id) || { id: "", name: "", visible: true };
    form.reset();
    form.elements.id.value = item.id || "";
    form.elements.name.value = item.name || "";
    form.elements.visible.checked = item.visible !== false;
    dialog.showModal();
  }
  function openDocTypeModal(id = "") {
    ensureDocumentModals();
    const dialog = document.getElementById("documentTypeModal");
    const form = document.getElementById("documentTypeForm");
    const item = docSettings.types.find((type) => type.id === id) || { id: "", name: "", categoryId: "", visible: true };
    form.reset();
    form.elements.id.value = item.id || "";
    form.elements.name.value = item.name || "";
    fillDocCategorySelect(form.elements.categoryId, item.categoryId || "");
    form.elements.visible.checked = item.visible !== false;
    dialog.showModal();
  }
  function openEstDocModal(id = "") {
    ensureDocumentModals();
    const dialog = document.getElementById("establishmentDocumentModal");
    const form = document.getElementById("establishmentDocumentForm");
    const item = estDocs.find((doc) => doc.id === id) || { id: "", typeId: "", title: "", number: "", issueDate: "", expiryDate: "", note: "" };
    form.reset();
    fillDocTypeSelect(form.elements.typeId, item.typeId || "");
    form.elements.id.value = item.id || "";
    form.elements.title.value = item.title || "";
    form.elements.number.value = item.number || "";
    form.elements.issueDate.value = item.issueDate || "";
    form.elements.expiryDate.value = item.expiryDate || "";
    form.elements.note.value = item.note || "";
    dialog.showModal();
  }

  function renderDocSettingsPanel() {
    ensureDocumentModals();
    const panel = document.querySelector('[data-settings-panel="documentTypes"]');
    if (!panel) return;
    panel.innerHTML = `
      <div class="panel-head"><div><h3>أنواع الوثائق</h3><p>إعداد التصنيفات وأنواع الوثائق المرتبطة بها. لا توجد بيانات افتراضية.</p></div></div>
      <div class="work-settings-block improved-doc-settings">
        <div class="section-title-with-action"><div><h4>تصنيفات الوثائق</h4><p>كل نوع وثيقة يجب أن يتبع تصنيفًا تختاره أنت.</p></div><button type="button" class="primary-btn" id="addDocumentCategoryBtn"><span data-icon="plus"></span>إضافة تصنيف</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم التصنيف</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="documentCategoryBody"></tbody></table></div>
      </div>
      <div class="work-settings-block improved-doc-settings">
        <div class="section-title-with-action"><div><h4>أنواع الوثائق</h4><p>أضف نوع الوثيقة واربطه بالتصنيف المناسب.</p></div><button type="button" class="primary-btn" id="addDocumentTypeBtn"><span data-icon="plus"></span>إضافة نوع جديد</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم النوع</th><th>التصنيف</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="documentTypeBody"></tbody></table></div>
      </div>`;
    renderDocumentCategoryRows();
    renderDocumentTypeRows();
    if (typeof hydrateIcons === "function") hydrateIcons(panel);
  }
  function renderDocumentCategoryRows() {
    const body = document.getElementById("documentCategoryBody");
    if (!body) return;
    body.innerHTML = docSettings.categories.length ? docSettings.categories.map((cat) => `
      <tr><td><strong>${esc(cat.name)}</strong></td><td><span class="status-badge ${cat.visible !== false ? "status-active" : "status-suspended"}">${cat.visible !== false ? "ظاهر" : "مخفي"}</span></td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-doc-category="${esc(cat.id)}" title="تعديل">${ic("edit")}</button><button type="button" class="quick-view-btn" data-toggle-doc-category="${esc(cat.id)}" title="إخفاء/إظهار">${ic(cat.visible !== false ? "eye-off" : "eye")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-doc-category="${esc(cat.id)}" title="حذف">${ic("trash")}</button></td></tr>`).join("") : `<tr><td colspan="3"><div class="empty-state"><strong>لا توجد تصنيفات</strong><p>أضف تصنيفًا ثم اربط به أنواع الوثائق.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(body);
  }
  function renderDocumentTypeRows() {
    const body = document.getElementById("documentTypeBody");
    if (!body) return;
    body.innerHTML = docSettings.types.length ? docSettings.types.map((type) => `
      <tr><td><strong>${esc(type.name)}</strong></td><td>${esc(categoryName(type.categoryId))}</td><td><span class="status-badge ${type.visible !== false ? "status-active" : "status-suspended"}">${type.visible !== false ? "ظاهر" : "مخفي"}</span></td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-doc-type="${esc(type.id)}" title="تعديل">${ic("edit")}</button><button type="button" class="quick-view-btn" data-toggle-doc-type="${esc(type.id)}" title="إخفاء/إظهار">${ic(type.visible !== false ? "eye-off" : "eye")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-doc-type="${esc(type.id)}" title="حذف">${ic("trash")}</button></td></tr>`).join("") : `<tr><td colspan="4"><div class="empty-state"><strong>لا توجد أنواع وثائق</strong><p>اضغط إضافة نوع جديد لحفظ نوع واحد فقط في كل مرة.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(body);
  }

  function renderEstablishmentDocumentsFinal() {
    const view = document.getElementById("establishmentDocumentsView");
    if (view) {
      view.innerHTML = `
        <div class="section-toolbar"><div><h2 class="section-title">وثائق المنشأة</h2><p class="section-description">إدارة وثائق المنشأة حسب التصنيف والنوع وتواريخ الانتهاء.</p></div><button type="button" class="primary-btn" id="addEstablishmentDocumentBtn"><span data-icon="plus"></span>إضافة وثيقة منشأة</button></div>
        <article class="panel improved-est-docs"><div class="table-wrap"><table class="compact-data-table"><thead><tr><th>التصنيف</th><th>نوع الوثيقة</th><th>اسم الوثيقة</th><th>رقم الوثيقة</th><th>الإصدار</th><th>الانتهاء</th><th>ملاحظات</th><th>الإجراءات</th></tr></thead><tbody id="establishmentDocumentsBody"></tbody></table></div></article>`;
      if (typeof hydrateIcons === "function") hydrateIcons(view);
    }
    const body = document.getElementById("establishmentDocumentsBody");
    if (!body) return;
    body.innerHTML = estDocs.length ? estDocs.map((doc) => {
      const type = docSettings.types.find((item) => item.id === doc.typeId);
      return `<tr><td>${esc(categoryName(type?.categoryId || ""))}</td><td>${esc(type?.name || "—")}</td><td>${esc(doc.title || "—")}</td><td>${esc(doc.number || "—")}</td><td>${doc.issueDate ? formatDate(doc.issueDate) : "—"}</td><td>${doc.expiryDate ? formatDate(doc.expiryDate) : "—"}</td><td>${esc(doc.note || "—")}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-est-doc="${esc(doc.id)}" title="تعديل">${ic("edit")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-est-doc="${esc(doc.id)}" title="حذف">${ic("trash")}</button></td></tr>`;
    }).join("") : `<tr><td colspan="8"><div class="empty-state"><strong>لا توجد وثائق منشأة</strong><p>أضف التصنيفات والأنواع ثم سجل وثائق المنشأة يدويًا.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(body);
  }

  function renderMinuteTablesWithDelete() {
    const notesHead = document.querySelector(".notes-table thead tr");
    if (notesHead && !notesHead.querySelector("[data-delete-head]")) notesHead.insertAdjacentHTML("beforeend", `<th data-delete-head>حذف</th>`);
    const minuteHead = document.querySelector(".minutes-table thead tr");
    if (minuteHead && !minuteHead.querySelector("[data-minute-actions-head]")) {
      const printTh = [...minuteHead.children].find((th) => th.textContent.trim() === "طباعة");
      if (printTh) printTh.textContent = "الإجراءات";
      else minuteHead.insertAdjacentHTML("beforeend", `<th data-minute-actions-head>الإجراءات</th>`);
    }
  }

  renderEmployeeNotes = function patchedRenderEmployeeNotes() {
    renderMinuteTablesWithDelete();
    const body = document.querySelector("#employeeNotesBody");
    if (!body) return;
    body.innerHTML = employeeFormState.notes.length
      ? employeeFormState.notes.map((note, index) => `<tr><td>${index + 1}</td><td>${esc(note.text)}</td><td>${esc(note.createdAtLabel || formatDateTime(note.createdAt))}</td><td>${esc(note.createdBy || currentUser)}</td><td><button type="button" class="quick-view-btn danger-inline-btn" data-remove-note-record="${index}" title="حذف الملاحظة">${ic("trash")}</button></td></tr>`).join("")
      : '<tr><td colspan="5"><div class="employee-note-empty">لا توجد ملاحظات مسجلة.</div></td></tr>';
    if (typeof hydrateIcons === "function") hydrateIcons(body);
  };

  renderEmployeeMinutes = function patchedRenderEmployeeMinutes() {
    renderMinuteTablesWithDelete();
    const body = document.querySelector("#employeeMinutesBody");
    if (!body) return;
    body.innerHTML = employeeFormState.minutes.length
      ? employeeFormState.minutes.map((record, index) => {
        const linkedAbsence = record.sourceAbsenceId ? attendanceExceptions.find((absence) => absence.id === record.sourceAbsenceId) : null;
        const calculatedDeduction = linkedAbsence ? absenceDeductionAmount(linkedAbsence) : Number(record.deductionAmount || 0);
        const deductionLabel = moneyLabel(calculatedDeduction);
        const summary = typeof minuteRecordSummary === "function" ? minuteRecordSummary(record) : (record.text || "—");
        const penalty = typeof minuteRecordPenalty === "function" ? minuteRecordPenalty(record) : (record.penalty || "—");
        return `<tr><td>${index + 1}</td><td>${esc(record.type)}</td><td>${esc(summary)}</td><td>${esc(penalty)}</td><td><strong class="absence-money-deduction">${esc(deductionLabel)}</strong></td><td>${esc(record.createdAtLabel || formatDateTime(record.createdAt))}</td><td>${esc(record.createdBy || currentUser)}</td><td class="action-cell"><button type="button" class="print-icon-btn" data-print-minute="${esc(record.id)}" data-print-employee="${esc(employeeFormState.employeeId)}" title="طباعة المحضر">${ic("printer")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-remove-minute-record="${esc(record.id)}" title="حذف المحضر">${ic("trash")}</button></td></tr>`;
      }).join("")
      : '<tr><td colspan="8"><div class="employee-note-empty">لا توجد محاضر مسجلة.</div></td></tr>';
    if (typeof hydrateIcons === "function") hydrateIcons(body);
  };

  function fallbackPrintMinute(minute, employee) {
    const fieldRows = Object.entries(minute.fieldValues || {}).map(([key, value]) => `<div><span>${esc(key)}</span><strong>${esc(value || "—")}</strong></div>`).join("");
    const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${esc(minute.type || "محضر")}</title><style>@page{size:A4;margin:12mm}body{font-family:Arial,sans-serif;color:#172226}.sheet{border:1px solid #dfe7e9;padding:24px;min-height:260mm}h1{text-align:center;color:#0f766e}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.grid div{border:1px solid #e5e7eb;border-radius:8px;padding:10px;background:#f8fafc}.grid span{display:block;color:#64748b;font-size:12px}.wide{grid-column:1/-1}.sign{margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:20px;text-align:center}.sign div{border-top:1px solid #94a3b8;padding-top:10px}</style></head><body><main class="sheet"><h1>${esc(minute.type || "محضر")}</h1><section class="grid"><div><span>اسم الموظف</span><strong>${esc(employee?.name || "—")}</strong></div><div><span>رقم الموظف</span><strong>${esc(employee?.employeeNumber || "—")}</strong></div><div><span>الجنسية</span><strong>${esc(employee?.nationality || "—")}</strong></div><div><span>رقم الهوية</span><strong>${esc(employee?.identityNumber || "—")}</strong></div><div class="wide"><span>تفاصيل المحضر</span><strong>${esc(minute.text || minuteRecordSummary?.(minute) || "—")}</strong></div>${fieldRows}<div class="wide"><span>الجزاء / الحسم</span><strong>${esc(minute.penalty || "—")}</strong></div></section><section class="sign"><div>توقيع الموظف</div><div>المسؤول</div></section></main><script>print(); setTimeout(()=>close(), 400);</script></body></html>`;
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) { showToast("تعذر فتح نافذة الطباعة"); return; }
    win.document.write(html);
    win.document.close();
  }

  async function printMinuteRobust(minuteId) {
    let owner = null;
    let minute = employeeFormState?.minutes?.find((item) => item.id === minuteId) || null;
    if (minute && employeeFormState.employeeId) owner = typeof getEmployee === "function" ? getEmployee(employeeFormState.employeeId) : null;
    if (!minute) {
      for (const employee of (Array.isArray(employees) ? employees : [])) {
        minute = (employee.minutes || []).find((item) => item.id === minuteId);
        if (minute) { owner = employee; break; }
      }
    }
    if (!minute) { showToast("تعذر العثور على المحضر المطلوب"); return; }
    try { await printAbsenceMinute(minute); }
    catch (error) { console.warn("minute print fallback", error); fallbackPrintMinute(minute, owner); }
  }

  function wireDocumentForms() {
    ensureDocumentModals();
    const catForm = document.getElementById("documentCategoryForm");
    if (catForm && !catForm.dataset.wiredFinal) {
      catForm.dataset.wiredFinal = "1";
      catForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const id = catForm.elements.id.value || uid("doc-cat");
        const name = safeText(catForm.elements.name.value);
        if (!name) { showToast("أدخل اسم التصنيف"); return; }
        const existing = docSettings.categories.find((item) => item.id === id);
        const data = { id, name, visible: catForm.elements.visible.checked };
        if (existing) Object.assign(existing, data); else docSettings.categories.push(data);
        saveDocSettings(); renderDocSettingsPanel(); renderEstablishmentDocumentsFinal(); document.getElementById("documentCategoryModal")?.close(); showToast("تم حفظ التصنيف");
      });
    }
    const typeForm = document.getElementById("documentTypeForm");
    if (typeForm && !typeForm.dataset.wiredFinal) {
      typeForm.dataset.wiredFinal = "1";
      typeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const id = typeForm.elements.id.value || uid("doc-type");
        const name = safeText(typeForm.elements.name.value);
        if (!name) { showToast("أدخل اسم نوع الوثيقة"); return; }
        const existing = docSettings.types.find((item) => item.id === id);
        const data = { id, name, categoryId: typeForm.elements.categoryId.value || "", visible: typeForm.elements.visible.checked };
        if (existing) Object.assign(existing, data); else docSettings.types.push(data);
        saveDocSettings(); renderDocSettingsPanel(); renderEstablishmentDocumentsFinal(); document.getElementById("documentTypeModal")?.close(); showToast("تم حفظ نوع الوثيقة");
      });
    }
    const estForm = document.getElementById("establishmentDocumentForm");
    if (estForm && !estForm.dataset.wiredFinal) {
      estForm.dataset.wiredFinal = "1";
      estForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const id = estForm.elements.id.value || uid("est-doc");
        const existing = estDocs.find((item) => item.id === id);
        const data = { id, typeId: estForm.elements.typeId.value || "", title: safeText(estForm.elements.title.value), number: safeText(estForm.elements.number.value), issueDate: estForm.elements.issueDate.value || "", expiryDate: estForm.elements.expiryDate.value || "", note: safeText(estForm.elements.note.value) };
        if (existing) Object.assign(existing, data); else estDocs.unshift(data);
        saveEstDocsFinal(); renderEstablishmentDocumentsFinal(); document.getElementById("establishmentDocumentModal")?.close(); showToast("تم حفظ وثيقة المنشأة");
      });
    }
    document.querySelectorAll('[data-close-modal="documentCategoryModal"], [data-close-modal="documentTypeModal"], [data-close-modal="establishmentDocumentModal"]').forEach((btn) => {
      if (btn.dataset.closeWiredFinal) return;
      btn.dataset.closeWiredFinal = "1";
      btn.addEventListener("click", () => document.getElementById(btn.dataset.closeModal)?.close());
    });
  }

  function patchSettingsAndDocuments() {
    ensureDocumentModals();
    wireDocumentForms();
    renderDocSettingsPanel();
    renderEstablishmentDocumentsFinal();
  }

  const previousEnsureDocumentSettingsPanels = window.ensureDocumentSettingsPanels;
  try { ensureDocumentSettingsPanels = function patchedEnsureDocumentSettingsPanels() { try { previousEnsureDocumentSettingsPanels?.(); } catch {} patchSettingsAndDocuments(); }; } catch {}
  try { renderDocumentTypeSettings = function patchedRenderDocumentTypeSettings() { patchSettingsAndDocuments(); }; } catch {}
  try { renderEstablishmentDocuments = function patchedRenderEstablishmentDocuments() { renderEstablishmentDocumentsFinal(); }; } catch {}
  try { addEstablishmentDocument = function patchedAddEstablishmentDocument() { openEstDocModal(); }; } catch {}

  document.addEventListener("click", (event) => {
    const printMinute = event.target.closest("[data-print-minute]");
    const removeMinute = event.target.closest("[data-remove-minute-record]");
    const removeNote = event.target.closest("[data-remove-note-record]");
    const addCat = event.target.closest("#addDocumentCategoryBtn");
    const addType = event.target.closest("#addDocumentTypeBtn");
    const editCat = event.target.closest("[data-edit-doc-category]");
    const editType = event.target.closest("[data-edit-doc-type]");
    const toggleCat = event.target.closest("[data-toggle-doc-category]");
    const toggleType = event.target.closest("[data-toggle-doc-type]");
    const delCat = event.target.closest("[data-delete-doc-category]");
    const delType = event.target.closest("[data-delete-doc-type]");
    const addEst = event.target.closest("#addEstablishmentDocumentBtn");
    const editEst = event.target.closest("[data-edit-est-doc]");
    const delEst = event.target.closest("[data-delete-est-doc]");

    if (printMinute) { event.preventDefault(); event.stopImmediatePropagation(); printMinuteRobust(printMinute.dataset.printMinute); return; }
    if (removeMinute) { event.preventDefault(); event.stopImmediatePropagation(); employeeFormState.minutes = (employeeFormState.minutes || []).filter((item) => item.id !== removeMinute.dataset.removeMinuteRecord); renderEmployeeMinutes(); showToast("تم حذف المحضر"); return; }
    if (removeNote) { event.preventDefault(); event.stopImmediatePropagation(); employeeFormState.notes.splice(Number(removeNote.dataset.removeNoteRecord), 1); renderEmployeeNotes(); showToast("تم حذف الملاحظة"); return; }
    if (addCat) { event.preventDefault(); event.stopImmediatePropagation(); openCategoryModal(); return; }
    if (addType) { event.preventDefault(); event.stopImmediatePropagation(); openDocTypeModal(); return; }
    if (editCat) { event.preventDefault(); event.stopImmediatePropagation(); openCategoryModal(editCat.dataset.editDocCategory); return; }
    if (editType) { event.preventDefault(); event.stopImmediatePropagation(); openDocTypeModal(editType.dataset.editDocType); return; }
    if (toggleCat) { event.preventDefault(); event.stopImmediatePropagation(); const item = docSettings.categories.find((cat) => cat.id === toggleCat.dataset.toggleDocCategory); if (item) item.visible = item.visible === false; saveDocSettings(); renderDocSettingsPanel(); renderEstablishmentDocumentsFinal(); return; }
    if (toggleType) { event.preventDefault(); event.stopImmediatePropagation(); const item = docSettings.types.find((type) => type.id === toggleType.dataset.toggleDocType); if (item) item.visible = item.visible === false; saveDocSettings(); renderDocSettingsPanel(); renderEstablishmentDocumentsFinal(); return; }
    if (delCat) { event.preventDefault(); event.stopImmediatePropagation(); const id = delCat.dataset.deleteDocCategory; docSettings.categories = docSettings.categories.filter((cat) => cat.id !== id); docSettings.types.forEach((type) => { if (type.categoryId === id) type.categoryId = ""; }); saveDocSettings(); renderDocSettingsPanel(); renderEstablishmentDocumentsFinal(); return; }
    if (delType) { event.preventDefault(); event.stopImmediatePropagation(); const id = delType.dataset.deleteDocType; docSettings.types = docSettings.types.filter((type) => type.id !== id); estDocs.forEach((doc) => { if (doc.typeId === id) doc.typeId = ""; }); saveDocSettings(); saveEstDocsFinal(); renderDocSettingsPanel(); renderEstablishmentDocumentsFinal(); return; }
    if (addEst) { event.preventDefault(); event.stopImmediatePropagation(); openEstDocModal(); return; }
    if (editEst) { event.preventDefault(); event.stopImmediatePropagation(); openEstDocModal(editEst.dataset.editEstDoc); return; }
    if (delEst) { event.preventDefault(); event.stopImmediatePropagation(); estDocs = estDocs.filter((doc) => doc.id !== delEst.dataset.deleteEstDoc); saveEstDocsFinal(); renderEstablishmentDocumentsFinal(); return; }
  }, true);

  const previousRenderAll = renderAll;
  renderAll = function finalPatchedRenderAll() {
    previousRenderAll?.();
    try { patchSettingsAndDocuments(); } catch (error) { console.warn(error); }
    try { renderMinuteTablesWithDelete(); } catch (error) { console.warn(error); }
  };

  const previousSwitchView = switchView;
  switchView = function finalPatchedSwitchView(name) {
    previousSwitchView?.(name);
    if (name === "establishmentDocuments") setTimeout(renderEstablishmentDocumentsFinal, 0);
    if (name === "settings") setTimeout(patchSettingsAndDocuments, 0);
  };

  window.addEventListener("load", () => { try { patchSettingsAndDocuments(); } catch (error) { console.warn(error); } });
  setTimeout(() => { try { patchSettingsAndDocuments(); renderEmployeeNotes?.(); renderEmployeeMinutes?.(); } catch (error) { console.warn(error); } }, 0);
})();

/* =========================================================
   Precision patch: minute print/table, minute settings table, employee document types
   ========================================================= */
(function precisionMinuteDocumentPatch(){
  const MINUTE_KEY = "nawah-minute-template-settings";
  const DOC_KEY = "nawah-document-type-settings";
  const MINUTE_EMPLOYEE_FIELDS = [
    { id: "employeeName", label: "اسم الموظف" },
    { id: "nationality", label: "الجنسية" },
    { id: "identityNumber", label: "رقم الهوية" },
    { id: "role", label: "المهنة" },
    { id: "workStartDate", label: "بداية العمل" },
    { id: "salary", label: "الراتب" }
  ];
  const FIELD_TYPES = ["text", "date", "time", "textarea"];
  const FIELD_LABELS = { text: "نصية", date: "تاريخ", time: "وقت", textarea: "ملاحظات" };

  function esc(value) { return typeof escapeHtml === "function" ? escapeHtml(value ?? "") : String(value ?? "").replace(/[&<>\"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch])); }
  function uid(prefix) { return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }
  function load(key, fallback) { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : structuredClone(fallback); } catch { return structuredClone(fallback); } }
  function save(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
  function icon(name) { return typeof iconSvg === "function" ? iconSvg(name) : ""; }
  function money(value) { try { return formatCurrencyEn(Number(value || 0)); } catch { return `${Number(value || 0).toFixed(2)} ر.س`; } }
  function isAbsenceMinute(record = {}) { return Boolean(record.sourceAbsenceId) || record.templateId === "system-absence-minute" || record.templateId === "absence-minute" || record.type === "محضر غياب"; }
  function employeeNameValue(employee = {}) { return employee.name || [employee.firstName, employee.fatherName, employee.grandName, employee.familyName].filter(Boolean).join(" ") || "—"; }

  function normField(field = {}, index = 0) {
    const type = FIELD_TYPES.includes(field.type) ? field.type : "text";
    return { id: field.id || uid(`minute-field-${index}`), label: String(field.label || `الخانة ${index + 1}`).trim() || `الخانة ${index + 1}`, type };
  }
  function normTemplate(template = {}, index = 0) {
    const name = String(template.name || "").trim();
    return {
      id: template.id || uid(`minute-template-${index}`),
      name: name || `نوع محضر ${index + 1}`,
      visible: template.visible !== false,
      system: false,
      employeeFields: Array.isArray(template.employeeFields) ? template.employeeFields.filter(id => MINUTE_EMPLOYEE_FIELDS.some(field => field.id === id)) : [],
      fields: Array.isArray(template.fields) ? template.fields.map(normField) : []
    };
  }
  function normMinuteSettings(raw = {}) {
    const templates = Array.isArray(raw.templates) ? raw.templates : [];
    return { templates: templates.filter(t => !(t?.system || t?.id === "absence-minute" || t?.name === "محضر غياب")).map(normTemplate).filter(t => t.name) };
  }
  function getMinuteSettings() {
    const fromMemory = typeof minuteTemplateSettings === "object" ? minuteTemplateSettings : load(MINUTE_KEY, { templates: [] });
    const normalized = normMinuteSettings(fromMemory);
    minuteTemplateSettings = normalized;
    return normalized;
  }
  function saveMinuteSettings(settings = getMinuteSettings()) {
    const normalized = normMinuteSettings(settings);
    minuteTemplateSettings = normalized;
    save(MINUTE_KEY, normalized);
    return normalized;
  }
  function allMinuteTemplates() { return getMinuteSettings().templates; }
  function visibleMinuteTemplates() { return allMinuteTemplates().filter(t => t.visible !== false); }
  window.getMinuteTemplates = getMinuteTemplates = function() { return visibleMinuteTemplates(); };
  window.getMinuteTemplate = getMinuteTemplate = function(idOrName) {
    return allMinuteTemplates().find(t => t.id === idOrName) || allMinuteTemplates().find(t => t.name === idOrName) || null;
  };

  function normDocSettings(raw = {}) {
    const types = Array.isArray(raw.types) ? raw.types : [];
    const categories = Array.isArray(raw.categories) ? raw.categories : [];
    return {
      categories: categories.map((c, i) => ({ id: c.id || uid(`doc-cat-${i}`), name: String(c.name || "").trim(), visible: c.visible !== false })).filter(c => c.name),
      types: types.map((t, i) => ({ id: t.id || uid(`doc-type-${i}`), name: String(t.name || "").trim(), categoryId: t.categoryId || "", visible: t.visible !== false })).filter(t => t.name)
    };
  }
  function getDocSettings() { return normDocSettings(load(DOC_KEY, { categories: [], types: [] })); }
  function activeDocTypes() { return getDocSettings().types.filter(t => t.visible !== false); }
  function docTypeName(id) { return getDocSettings().types.find(t => t.id === id)?.name || ""; }

  const oldCreateDocument = typeof createDocument === "function" ? createDocument : null;
  window.createDocument = createDocument = function(documentItem = {}) {
    const base = oldCreateDocument ? oldCreateDocument(documentItem) : { id: documentItem.id || uid("document"), number: "", startDate: "", expiryDate: "", attachmentId: "" };
    return { ...base, typeId: documentItem.typeId || base.typeId || "" };
  };

  function refreshEmployeeDocumentHeaders() {
    const docPanel = document.querySelector('[data-section-panel="documents"]');
    if (!docPanel) return;
    const desc = docPanel.querySelector(".form-section-title p");
    if (desc) desc.textContent = "إضافة وثائق الموظف حسب أنواع الوثائق المعرفة في الإعدادات";
  }

  window.renderDocuments = renderDocuments = function() {
    const container = document.querySelector("#documentsList");
    if (!container) return;
    const types = activeDocTypes();
    const typeOptions = `<option value="">اختر نوع الوثيقة</option>${types.map(type => `<option value="${esc(type.id)}">${esc(type.name)}</option>`).join("")}`;
    container.innerHTML = employeeFormState.documents.length
      ? employeeFormState.documents.map((item, index) => `<div class="repeatable-row document-row" data-document-index="${index}">
        <label><span>نوع الوثيقة</span><select data-document-field="typeId">${typeOptions}</select></label>
        <label><span>رقم الوثيقة</span><input data-document-field="number" value="${esc(item.number)}" /></label>
        <label><span>تاريخ بداية الوثيقة</span><input type="date" data-document-field="startDate" value="${esc(item.startDate)}" /></label>
        <label><span>تاريخ نهاية الوثيقة</span><input type="date" data-document-field="expiryDate" value="${esc(item.expiryDate)}" /></label>
        <label><span>مرفق الوثيقة</span>${attachmentControlHtml("document", index, item.attachmentId, "عرض الوثيقة")}</label>
        <button type="button" class="remove-bank-btn" data-remove-document="${index}" aria-label="حذف الوثيقة">${icon("trash")}</button>
      </div>`).join("")
      : '<div class="employee-note-empty">لا توجد وثائق مضافة.</div>';
    employeeFormState.documents.forEach((item, index) => {
      const select = container.querySelector(`[data-document-index="${index}"] select[data-document-field="typeId"]`);
      if (select) select.value = types.some(t => t.id === item.typeId) ? item.typeId : "";
    });
    hydrateIcons(container);
    refreshEmployeeDocumentHeaders();
  };

  function getMinuteEmployeeByRecord(minute, explicitEmployeeId = "") {
    const id = explicitEmployeeId || minute?.employeeId || employeeFormState?.employeeId || document.querySelector('#employeeForm [name="employeeId"]')?.value || "";
    return (typeof getEmployee === "function" ? getEmployee(id) : null) || (Array.isArray(employees) ? employees.find(e => e.id === id) : null) || null;
  }

  function minuteSummary(record = {}) {
    try { return minuteRecordSummary(record) || record.text || "—"; } catch { return record.text || "—"; }
  }
  function minutePenalty(record = {}) {
    try { return minuteRecordPenalty(record) || record.penalty || "—"; } catch { return record.penalty || "—"; }
  }
  function employeeFieldValue(id, employee = {}) {
    if (id === "employeeName") return employeeNameValue(employee);
    if (id === "nationality") return employee.nationality || "—";
    if (id === "identityNumber") return employee.identityNumber || "—";
    if (id === "role") return employee.role || employee.jobTitle || "—";
    if (id === "workStartDate") return employee.workStartDate ? formatDate(employee.workStartDate) : "—";
    if (id === "salary") return money(employee.totalSalary || employee.salary || employee.baseSalary || 0);
    return "—";
  }

  window.renderEmployeeNotes = renderEmployeeNotes = function() {
    const body = document.querySelector("#employeeNotesBody");
    if (!body) return;
    const table = body.closest("table");
    const header = table?.querySelector("thead tr");
    if (header) header.innerHTML = "<th>#</th><th>الملاحظة</th><th>التاريخ والوقت</th><th>تمت الإضافة بواسطة</th><th>إجراءات</th>";
    body.innerHTML = employeeFormState.notes.length
      ? employeeFormState.notes.map((note, index) => `<tr><td>${index + 1}</td><td>${esc(note.text)}</td><td>${esc(note.createdAtLabel || formatDateTime(note.createdAt))}</td><td>${esc(note.createdBy || currentUser)}</td><td><button type="button" class="quick-view-btn danger-inline-btn" data-delete-employee-note="${index}" title="حذف الملاحظة">${icon("trash")}</button></td></tr>`).join("")
      : '<tr><td colspan="5"><div class="employee-note-empty">لا توجد ملاحظات مسجلة.</div></td></tr>';
    hydrateIcons(body);
  };

  window.renderEmployeeMinutes = renderEmployeeMinutes = function() {
    const body = document.querySelector("#employeeMinutesBody");
    if (!body) return;
    const table = body.closest("table");
    const header = table?.querySelector("thead tr");
    if (header) header.innerHTML = "<th>#</th><th>نوع المحضر</th><th>تفصيل المحضر</th><th>الجزاء الموقع</th><th>الحسم</th><th>التاريخ والوقت</th><th>تمت الإضافة بواسطة</th><th>الإجراءات</th>";
    body.innerHTML = employeeFormState.minutes.length
      ? employeeFormState.minutes.map((record, index) => {
          const isAbs = isAbsenceMinute(record);
          const linkedAbsence = record.sourceAbsenceId ? attendanceExceptions.find(abs => abs.id === record.sourceAbsenceId) : null;
          const deduction = isAbs ? (linkedAbsence ? absenceDeductionAmount(linkedAbsence) : Number(record.deductionAmount || 0)) : null;
          const deductionCell = isAbs ? `<strong class="absence-money-deduction">${esc(money(deduction))}</strong>` : `<span class="muted-dash">—</span>`;
          return `<tr data-minute-row="${esc(record.id)}"><td>${index + 1}</td><td>${esc(record.type)}</td><td>${esc(minuteSummary(record))}</td><td>${esc(minutePenalty(record))}</td><td class="${isAbs ? "" : "manual-minute-deduction"}">${deductionCell}</td><td>${esc(record.createdAtLabel || formatDateTime(record.createdAt))}</td><td>${esc(record.createdBy || currentUser)}</td><td class="row-actions"><button type="button" class="print-icon-btn" data-print-minute="${esc(record.id)}" data-print-employee="${esc(employeeFormState.employeeId || record.employeeId || "")}" title="طباعة المحضر">${icon("printer")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-employee-minute="${index}" title="حذف المحضر">${icon("trash")}</button></td></tr>`;
        }).join("")
      : '<tr><td colspan="8"><div class="employee-note-empty">لا توجد محاضر مسجلة.</div></td></tr>';
    hydrateIcons(body);
  };

  function robustPrintMinute(record, employee) {
    if (!record) { showToast("تعذر العثور على المحضر المطلوب"); return; }
    employee = employee || getMinuteEmployeeByRecord(record);
    if (!employee) { showToast("تعذر العثور على بيانات الموظف"); return; }
    const isAbs = isAbsenceMinute(record);
    const linkedAbsence = record.sourceAbsenceId ? attendanceExceptions.find(abs => abs.id === record.sourceAbsenceId) : null;
    const template = !isAbs ? getMinuteTemplate(record.templateId || record.type) : null;
    const title = record.type || "محضر موظف";
    const selectedEmployeeFields = !isAbs ? (record.employeeFields || template?.employeeFields || []) : [];
    const employeeFieldsMarkup = selectedEmployeeFields.map(id => {
      const label = MINUTE_EMPLOYEE_FIELDS.find(field => field.id === id)?.label || id;
      return `<div><span>${esc(label)}</span><strong>${esc(employeeFieldValue(id, employee))}</strong></div>`;
    }).join("");
    const customFieldsMarkup = !isAbs && template?.fields?.length ? template.fields.map(field => `<div class="${field.type === "textarea" ? "wide" : ""}"><span>${esc(field.label)}</span><strong>${esc(record.fieldValues?.[field.id] || "—")}</strong></div>`).join("") : "";
    let detailsMarkup = employeeFieldsMarkup + customFieldsMarkup;
    if (isAbs) {
      const deduction = linkedAbsence ? absenceDeductionAmount(linkedAbsence) : Number(record.deductionAmount || 0);
      detailsMarkup = `<div><span>الفترة</span><strong>${esc(record.absencePeriod || (linkedAbsence ? `${formatDate(linkedAbsence.from)}${linkedAbsence.to && linkedAbsence.to !== linkedAbsence.from ? ` إلى ${formatDate(linkedAbsence.to)}` : ""}` : "—"))}</strong></div>
        <div><span>نوع المحضر</span><strong>محضر غياب</strong></div>
        <div><span>القاعدة المطبقة</span><strong>${esc(record.absencePolicy || "—")}</strong></div>
        <div><span>الحسم المالي</span><strong>${esc(money(deduction))}</strong></div>
        <div class="wide"><span>تفاصيل المحضر</span><strong>${esc(record.text || minuteSummary(record))}</strong></div>`;
    }
    if (!detailsMarkup.trim()) detailsMarkup = `<div class="wide"><span>تفاصيل المحضر</span><strong>${esc(record.text || minuteSummary(record) || "—")}</strong></div>`;
    const markup = `<main class="minute-sheet">
      <h1>${esc(title)}</h1>
      <p class="minute-subtitle">تم إنشاء هذا المحضر من نظام إدارة الموظفين</p>
      <section><h2>بيانات الموظف</h2><div class="minute-grid">
        <div><span>اسم الموظف</span><strong>${esc(employeeNameValue(employee))}</strong></div>
        <div><span>رقم الموظف</span><strong>${esc(employee.employeeNumber || "—")}</strong></div>
        <div><span>الإدارة</span><strong>${esc(employee.department || "—")}</strong></div>
        <div><span>المهنة</span><strong>${esc(employee.role || "—")}</strong></div>
      </div></section>
      <section><h2>${isAbs ? "بيانات الغياب" : "بيانات المحضر"}</h2><div class="minute-grid">${detailsMarkup}</div></section>
      <section><h2>الجزاء الموقع على الموظف</h2><p class="penalty-box">${esc(minutePenalty(record) || "—")}</p></section>
      <section class="signatures"><div><span>الموظف</span><strong>${esc(employeeNameValue(employee))}</strong></div><div><span>المسؤول</span><strong>${esc(record.createdBy || currentUser || "—")}</strong></div></section>
    </main>`;
    const style = `@page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0;font-family:Almarai,Arial,sans-serif;color:#172226}.minute-sheet{border:1px solid #dfe7e9;padding:10mm;min-height:270mm}h1{text-align:center;color:#0f766e;margin:0;font-size:22px}.minute-subtitle{text-align:center;color:#6b7280;margin:6px 0 18px}section{margin-top:16px}h2{font-size:14px;border-bottom:1px solid #e5e7eb;padding-bottom:7px;color:#0f5f59}.minute-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.minute-grid div{background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.minute-grid .wide{grid-column:1/-1}.minute-grid span{display:block;font-size:11px;color:#64748b}.minute-grid strong{display:block;margin-top:4px;font-size:13px}.penalty-box{border:1px solid #d8f3ee;background:#f0fdfa;color:#0f5f59;border-radius:10px;padding:12px;line-height:1.8;font-weight:700}.signatures{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:35px}.signatures div{height:90px;border-top:1px solid #cbd5e1;padding-top:8px;text-align:center}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}`;
    printHtmlDocument(`${title} - ${employeeNameValue(employee)}`, markup, style);
  }

  function findMinuteById(id, employeeId = "") {
    if (employeeFormState?.minutes?.length) {
      const found = employeeFormState.minutes.find(item => item.id === id);
      if (found) return { minute: found, employee: getMinuteEmployeeByRecord(found, employeeId) };
    }
    for (const employee of (Array.isArray(employees) ? employees : [])) {
      const found = (employee.minutes || []).find(item => item.id === id);
      if (found) return { minute: createEmployeeMinuteRecord(found), employee };
    }
    return { minute: null, employee: null };
  }

  function renderMinuteSettingsTable() {
    const list = document.querySelector("#minuteTemplateList");
    if (!list) return;
    const templates = allMinuteTemplates();
    if (!templates.length) {
      list.innerHTML = `<div class="empty-state"><strong>لا توجد أنواع محاضر محفوظة</strong><p>اضغط زر إعداد محضر لإضافة نوع جديد يدويًا.</p></div>`;
      return;
    }
    list.innerHTML = `<div class="table-wrap"><table class="compact-data-table minute-types-table"><thead><tr><th>#</th><th>اسم المحضر</th><th>الخانات</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody>${templates.map((template, index) => `<tr><td>${index + 1}</td><td>${esc(template.name)}</td><td>${esc(arabicNumber((template.fields || []).length))}</td><td><span class="status-badge ${template.visible === false ? "status-muted" : "status-active"}">${template.visible === false ? "مخفي" : "ظاهر"}</span></td><td class="row-actions"><button type="button" class="quick-view-btn" data-edit-minute-template-row="${esc(template.id)}" title="تعديل">${icon("edit")}</button><button type="button" class="quick-view-btn" data-toggle-minute-template="${esc(template.id)}" title="إخفاء أو إظهار">${template.visible === false ? icon("eye") : icon("eye-off")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-minute-template-row="${esc(template.id)}" title="حذف">${icon("trash")}</button></td></tr>`).join("")}</tbody></table></div>`;
    hydrateIcons(list);
  }

  const oldRenderMinuteTemplateSettings = typeof renderMinuteTemplateSettings === "function" ? renderMinuteTemplateSettings : null;
  window.renderMinuteTemplateSettings = renderMinuteTemplateSettings = function() {
    const settings = saveMinuteSettings(getMinuteSettings());
    const summary = document.querySelector("#minuteSettingsSummary");
    if (summary) {
      const fieldCount = settings.templates.reduce((sum, template) => sum + (template.fields || []).length, 0);
      summary.innerHTML = `<div><span>أنواع المحاضر</span><strong>${arabicNumber(settings.templates.length)}</strong></div><div><span>الخانات المعرفة</span><strong>${arabicNumber(fieldCount)}</strong></div>`;
    }
    renderMinuteSettingsTable();
    renderManualMinuteOptions?.();
  };

  window.renderManualMinuteOptions = renderManualMinuteOptions = function() {
    const select = document.querySelector("#employeeMinuteType");
    if (!select) return;
    const current = select.value;
    const templates = visibleMinuteTemplates();
    select.innerHTML = templates.length ? `<option value="">اختر نوع المحضر</option>${templates.map(t => `<option value="${esc(t.id)}">${esc(t.name)}</option>`).join("")}` : `<option value="">لا توجد أنواع محاضر — أضفها من الإعدادات</option>`;
    select.value = templates.some(t => t.id === current) ? current : "";
  };

  function openMinuteBuilderFor(templateId = "") {
    if (typeof renderMinuteSettingsModalContent === "function") renderMinuteSettingsModalContent();
    const dialog = document.querySelector("#minuteBuilderModal");
    if (!dialog) return;
    dialog.showModal();
    if (templateId) {
      setTimeout(() => {
        const card = dialog.querySelector(`[data-minute-template-card="${CSS.escape(templateId)}"]`);
        card?.scrollIntoView?.({ block: "center" });
        card?.classList?.add("focused-template-card");
        setTimeout(() => card?.classList?.remove("focused-template-card"), 1400);
      }, 80);
    }
  }

  function closeMinuteBuilder() { const dialog = document.querySelector("#minuteBuilderModal"); if (dialog?.open) dialog.close(); }

  document.addEventListener("click", function(event) {
    const printBtn = event.target.closest("[data-print-minute]");
    if (printBtn) {
      event.preventDefault(); event.stopImmediatePropagation();
      const { minute, employee } = findMinuteById(printBtn.dataset.printMinute, printBtn.dataset.printEmployee || "");
      robustPrintMinute(minute, employee);
      return;
    }
    const delNote = event.target.closest("[data-delete-employee-note]");
    if (delNote) {
      event.preventDefault(); event.stopImmediatePropagation();
      const index = Number(delNote.dataset.deleteEmployeeNote);
      if (Number.isInteger(index)) { employeeFormState.notes.splice(index, 1); renderEmployeeNotes(); }
      return;
    }
    const delMinute = event.target.closest("[data-delete-employee-minute]");
    if (delMinute) {
      event.preventDefault(); event.stopImmediatePropagation();
      const index = Number(delMinute.dataset.deleteEmployeeMinute);
      if (Number.isInteger(index)) { employeeFormState.minutes.splice(index, 1); renderEmployeeMinutes(); }
      return;
    }
    const editTemplate = event.target.closest("[data-edit-minute-template-row]");
    if (editTemplate) { event.preventDefault(); event.stopImmediatePropagation(); openMinuteBuilderFor(editTemplate.dataset.editMinuteTemplateRow); return; }
    const toggleTemplate = event.target.closest("[data-toggle-minute-template]");
    if (toggleTemplate) {
      event.preventDefault(); event.stopImmediatePropagation();
      const settings = getMinuteSettings();
      const template = settings.templates.find(t => t.id === toggleTemplate.dataset.toggleMinuteTemplate);
      if (template) { template.visible = template.visible === false; saveMinuteSettings(settings); renderMinuteTemplateSettings(); renderManualMinuteOptions(); }
      return;
    }
    const deleteTemplate = event.target.closest("[data-delete-minute-template-row]");
    if (deleteTemplate) {
      event.preventDefault(); event.stopImmediatePropagation();
      const settings = getMinuteSettings();
      settings.templates = settings.templates.filter(t => t.id !== deleteTemplate.dataset.deleteMinuteTemplateRow);
      saveMinuteSettings(settings); renderMinuteTemplateSettings(); renderManualMinuteOptions();
      return;
    }
    const closeMinute = event.target.closest('[data-close-modal="minuteBuilderModal"]');
    if (closeMinute) { event.preventDefault(); event.stopImmediatePropagation(); closeMinuteBuilder(); return; }
  }, true);

  document.addEventListener("input", function(event) {
    const field = event.target.closest("[data-document-field]");
    if (field) {
      const row = field.closest("[data-document-index]");
      const index = Number(row?.dataset.documentIndex);
      if (Number.isInteger(index) && employeeFormState.documents[index]) employeeFormState.documents[index][field.dataset.documentField] = field.value;
    }
  }, true);
  document.addEventListener("change", function(event) {
    const field = event.target.closest("select[data-document-field]");
    if (field) {
      const row = field.closest("[data-document-index]");
      const index = Number(row?.dataset.documentIndex);
      if (Number.isInteger(index) && employeeFormState.documents[index]) employeeFormState.documents[index][field.dataset.documentField] = field.value;
    }
  }, true);

  const oldRenderAll = typeof renderAll === "function" ? renderAll : null;
  window.renderAll = renderAll = function() {
    oldRenderAll?.();
    try { renderMinuteTemplateSettings(); } catch (error) { console.warn(error); }
  };

  window.addEventListener("load", () => {
    try { renderMinuteTemplateSettings(); renderManualMinuteOptions(); refreshEmployeeDocumentHeaders(); } catch (error) { console.warn(error); }
  });
  setTimeout(() => { try { renderMinuteTemplateSettings(); renderManualMinuteOptions(); refreshEmployeeDocumentHeaders(); } catch (error) { console.warn(error); } }, 0);
})();

/* Hotfix: capture minute print clicks before older handlers that call absence-only printer */
(() => {
  const esc = (value = "") => String(value ?? "").replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
  const getEmpName = (employee = {}) => {
    if (typeof employeeNameValue === "function") return employeeNameValue(employee);
    return employee.name || [employee.firstName, employee.fatherName, employee.familyName].filter(Boolean).join(" ") || "—";
  };
  const moneyLabel = (value) => {
    try { return typeof money === "function" ? money(value) : `${Number(value || 0).toLocaleString("ar-SA")} ر.س`; }
    catch { return `${value || 0} ر.س`; }
  };
  const isAbsMinute = (minute = {}) => {
    try { return typeof isAbsenceMinute === "function" ? isAbsenceMinute(minute) : false; }
    catch { return minute.type === "محضر غياب" || Boolean(minute.sourceAbsenceId || minute.absenceType); }
  };
  const summaryText = (minute = {}) => {
    try { return typeof minuteRecordSummary === "function" ? minuteRecordSummary(minute) : (minute.text || minute.details || "—"); }
    catch { return minute.text || minute.details || "—"; }
  };
  const penaltyText = (minute = {}) => {
    try { return typeof minuteRecordPenalty === "function" ? minuteRecordPenalty(minute) : (minute.penalty || "—"); }
    catch { return minute.penalty || "—"; }
  };
  function cloneMinute(item = {}) {
    if (typeof createEmployeeMinuteRecord === "function") return createEmployeeMinuteRecord(item);
    return { ...item };
  }
  function findMinuteEverywhere(minuteId, employeeId = "") {
    const target = String(minuteId || "");
    const currentMinutes = Array.isArray(window.employeeFormState?.minutes) ? window.employeeFormState.minutes : (typeof employeeFormState !== "undefined" && Array.isArray(employeeFormState.minutes) ? employeeFormState.minutes : []);
    const currentEmployeeId = employeeId || window.employeeFormState?.employeeId || (typeof employeeFormState !== "undefined" ? employeeFormState.employeeId : "") || "";
    let found = currentMinutes.find((item, index) => String(item.id || index) === target);
    if (found) {
      const employee = (typeof getEmployee === "function" ? getEmployee(currentEmployeeId || found.employeeId) : null) || (Array.isArray(employees) ? employees.find(e => e.id === (currentEmployeeId || found.employeeId)) : null) || null;
      return { minute: cloneMinute(found), employee };
    }
    const employeeList = Array.isArray(employees) ? employees : [];
    for (const employee of employeeList) {
      const minutes = Array.isArray(employee.minutes) ? employee.minutes : (Array.isArray(employee.disciplinaryMinutes) ? employee.disciplinaryMinutes : []);
      found = minutes.find((item, index) => String(item.id || index) === target);
      if (found) return { minute: cloneMinute(found), employee };
    }
    return { minute: null, employee: null };
  }
  function buildFieldRows(minute = {}, employee = {}) {
    const rows = [];
    const configuredFields = Array.isArray(minute.employeeFields) ? minute.employeeFields : [];
    configuredFields.forEach((field) => {
      let label = field;
      let value = "—";
      if (field === "employeeName") { label = "اسم الموظف"; value = getEmpName(employee); }
      else if (field === "nationality") { label = "الجنسية"; value = employee.nationality || "—"; }
      else if (field === "identityNumber") { label = "رقم الهوية"; value = employee.identityNumber || "—"; }
      else if (field === "role") { label = "المهنة"; value = employee.role || employee.jobTitle || "—"; }
      else if (field === "workStartDate") { label = "بداية العمل"; value = employee.workStartDate && typeof formatDate === "function" ? formatDate(employee.workStartDate) : (employee.workStartDate || "—"); }
      else if (field === "salary") { label = "الراتب"; value = moneyLabel(employee.totalSalary || employee.salary || employee.baseSalary || 0); }
      rows.push(`<div><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`);
    });
    if (minute.fieldValues && typeof minute.fieldValues === "object") {
      Object.entries(minute.fieldValues).forEach(([key, value]) => rows.push(`<div class="wide"><span>${esc(key)}</span><strong>${esc(value || "—")}</strong></div>`));
    }
    return rows.join("");
  }
  function openMinutePrint(minute, employee) {
    if (!minute) { if (typeof showToast === "function") showToast("تعذر العثور على بيانات المحضر"); return; }
    if (!employee) { if (typeof showToast === "function") showToast("تعذر العثور على بيانات الموظف"); return; }
    const isAbs = isAbsMinute(minute);
    let extraRows = buildFieldRows(minute, employee);
    if (isAbs) {
      let deduction = Number(minute.deductionAmount || 0);
      if (minute.sourceAbsenceId && Array.isArray(attendanceExceptions)) {
        const absence = attendanceExceptions.find(abs => abs.id === minute.sourceAbsenceId);
        if (absence && typeof absenceDeductionAmount === "function") deduction = absenceDeductionAmount(absence);
      }
      extraRows += `<div><span>الفترة</span><strong>${esc(minute.absencePeriod || "—")}</strong></div><div><span>القاعدة المطبقة</span><strong>${esc(minute.absencePolicy || "—")}</strong></div><div><span>الحسم المالي</span><strong>${esc(moneyLabel(deduction))}</strong></div>`;
    }
    if (!extraRows.trim()) extraRows = `<div class="wide"><span>تفاصيل المحضر</span><strong>${esc(summaryText(minute))}</strong></div>`;
    const title = minute.type || "محضر موظف";
    const markup = `<main class="minute-sheet"><h1>${esc(title)}</h1><p class="minute-subtitle">تم إنشاء هذا المحضر من نظام إدارة الموظفين</p><section><h2>بيانات الموظف</h2><div class="minute-grid"><div><span>اسم الموظف</span><strong>${esc(getEmpName(employee))}</strong></div><div><span>رقم الموظف</span><strong>${esc(employee.employeeNumber || "—")}</strong></div><div><span>الجنسية</span><strong>${esc(employee.nationality || "—")}</strong></div><div><span>رقم الهوية</span><strong>${esc(employee.identityNumber || "—")}</strong></div><div><span>المهنة</span><strong>${esc(employee.role || employee.jobTitle || "—")}</strong></div><div><span>بداية العمل</span><strong>${esc(employee.workStartDate && typeof formatDate === "function" ? formatDate(employee.workStartDate) : (employee.workStartDate || "—"))}</strong></div></div></section><section><h2>${isAbs ? "بيانات الغياب" : "بيانات المحضر"}</h2><div class="minute-grid">${extraRows}<div class="wide"><span>تفاصيل المحضر</span><strong>${esc(summaryText(minute))}</strong></div></div></section><section><h2>الجزاء الموقع على الموظف</h2><p class="penalty-box">${esc(penaltyText(minute))}</p></section><section class="signatures"><div><span>الموظف</span><strong>${esc(getEmpName(employee))}</strong></div><div><span>المسؤول</span><strong>${esc(minute.createdBy || (typeof currentUser !== "undefined" ? currentUser : "—"))}</strong></div></section></main>`;
    const style = `@page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0;font-family:Almarai,Arial,sans-serif;color:#172226}.minute-sheet{border:1px solid #dfe7e9;padding:10mm;min-height:270mm}h1{text-align:center;color:#0f766e;margin:0;font-size:22px}.minute-subtitle{text-align:center;color:#6b7280;margin:6px 0 18px}section{margin-top:16px}h2{font-size:14px;border-bottom:1px solid #e5e7eb;padding-bottom:7px;color:#0f5f59}.minute-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.minute-grid div{background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.minute-grid .wide{grid-column:1/-1}.minute-grid span{display:block;font-size:11px;color:#64748b}.minute-grid strong{display:block;margin-top:4px;font-size:13px}.penalty-box{border:1px solid #d8f3ee;background:#f0fdfa;color:#0f5f59;border-radius:10px;padding:12px;line-height:1.8;font-weight:700}.signatures{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:35px}.signatures div{height:90px;border-top:1px solid #cbd5e1;padding-top:8px;text-align:center}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}`;
    if (typeof printHtmlDocument === "function") printHtmlDocument(`${title} - ${getEmpName(employee)}`, markup, style);
    else {
      const w = window.open("", "_blank");
      if (!w) { if (typeof showToast === "function") showToast("يرجى السماح بالنوافذ المنبثقة للطباعة"); return; }
      w.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${style}</style></head><body>${markup}<script>window.onload=()=>{print();setTimeout(()=>close(),500)}<\/script></body></html>`);
      w.document.close();
    }
  }
  document.addEventListener("click", (event) => {
    const button = event.target.closest?.("[data-print-minute]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const { minute, employee } = findMinuteEverywhere(button.dataset.printMinute, button.dataset.printEmployee || "");
    openMinutePrint(minute, employee);
  }, true);
})();

/* Final hotfix: manual employee minutes print from active employee form before older document handlers */
(() => {
  const esc = (value = "") => String(value ?? "").replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
  const safeMoney = (value) => {
    try { return typeof money === "function" ? money(value) : `${Number(value || 0).toLocaleString("ar-SA")} ر.س`; }
    catch { return `${value || 0} ر.س`; }
  };
  const fullName = (employee = {}) => {
    try { if (typeof employeeNameValue === "function") return employeeNameValue(employee); } catch {}
    return employee.name || [employee.firstName, employee.fatherName, employee.grandName, employee.familyName].filter(Boolean).join(" ") || "—";
  };
  const activeFormState = () => {
    try { return typeof employeeFormState !== "undefined" ? employeeFormState : null; } catch { return null; }
  };
  const activeEmployees = () => {
    try { return Array.isArray(employees) ? employees : []; } catch { return []; }
  };
  const getEmployeeSafe = (id) => {
    try { if (id && typeof getEmployee === "function") return getEmployee(id); } catch {}
    return id ? activeEmployees().find((emp) => emp.id === id) || null : null;
  };
  const readEmployeeFormValues = () => {
    const form = document.querySelector("#employeeForm");
    if (!form) return {};
    const get = (name) => form.elements?.[name]?.value || "";
    const baseSalary = Number(get("baseSalary") || 0);
    const housingAllowance = Number(get("housingAllowance") || 0);
    const transportAllowance = Number(get("transportAllowance") || 0);
    const otherAllowances = Number(get("otherAllowances") || 0);
    const identityNumber = get("identityNumber");
    const phone = get("phone");
    let employeeNumber = "—";
    try {
      const existingId = get("employeeId");
      const existing = existingId && typeof getEmployee === "function" ? getEmployee(existingId) : null;
      employeeNumber = existing?.employeeNumber || (typeof buildEmployeeNumber === "function" ? buildEmployeeNumber(identityNumber, phone, activeEmployees().length + 1) : "—");
    } catch {}
    return {
      id: get("employeeId"),
      firstName: get("firstName"),
      fatherName: get("fatherName"),
      grandName: get("grandName"),
      familyName: get("familyName"),
      name: [get("firstName"), get("fatherName"), get("grandName"), get("familyName")].filter(Boolean).join(" "),
      employeeNumber,
      nationality: get("nationality") || "—",
      identityNumber: identityNumber || "—",
      department: get("department") || "—",
      section: get("section") || "—",
      role: get("role") || "—",
      workStartDate: get("workStartDate") || get("contractStartDate") || "",
      baseSalary,
      housingAllowance,
      transportAllowance,
      otherAllowances,
      totalSalary: baseSalary + housingAllowance + transportAllowance + otherAllowances
    };
  };
  const mergeEmployeeWithCurrentForm = (employee = null) => {
    const formEmployee = readEmployeeFormValues();
    return { ...(employee || {}), ...Object.fromEntries(Object.entries(formEmployee).filter(([, value]) => value !== "" && value !== "—" && value !== 0)), totalSalary: formEmployee.totalSalary || employee?.totalSalary || employee?.salary || employee?.baseSalary || 0 };
  };
  const employeeFromState = (state = {}) => {
    const formEmployee = readEmployeeFormValues();
    const fromState = {
      id: state.employeeId || state.id || "",
      firstName: state.firstName || "",
      fatherName: state.fatherName || "",
      grandName: state.grandName || "",
      familyName: state.familyName || "",
      name: state.name || [state.firstName, state.fatherName, state.grandName, state.familyName].filter(Boolean).join(" "),
      employeeNumber: state.employeeNumber || "—",
      nationality: state.nationality || "—",
      identityNumber: state.identityNumber || "—",
      department: state.department || "—",
      section: state.section || "—",
      role: state.role || state.jobTitle || "—",
      workStartDate: state.workStartDate || state.contractStartDate || "",
      baseSalary: state.baseSalary || 0,
      totalSalary: state.totalSalary || ((Number(state.baseSalary || 0) + Number(state.housingAllowance || 0) + Number(state.transportAllowance || 0) + Number(state.otherAllowances || 0)) || 0)
    };
    return mergeEmployeeWithCurrentForm({ ...fromState, ...formEmployee });
  };
  const isAbsMinute = (minute = {}) => Boolean(minute.sourceAbsenceId || minute.absenceType || minute.type === "محضر غياب" || minute.isAbsenceMinute);
  const minuteSummary = (minute = {}) => {
    try { if (typeof minuteRecordSummary === "function") return minuteRecordSummary(minute); } catch {}
    if (minute.text) return minute.text;
    if (minute.details) return minute.details;
    if (minute.fieldValues && typeof minute.fieldValues === "object") {
      return Object.entries(minute.fieldValues).map(([key, value]) => `${key}: ${value || "—"}`).join("، ") || "—";
    }
    return "—";
  };
  const minutePenalty = (minute = {}) => {
    try { if (typeof minuteRecordPenalty === "function") return minuteRecordPenalty(minute); } catch {}
    return minute.penalty || "—";
  };
  function findMinuteFromClick(button) {
    const id = String(button?.dataset?.printMinute || "");
    const employeeId = button?.dataset?.printEmployee || "";
    const state = activeFormState();
    const stateMinutes = Array.isArray(state?.minutes) ? state.minutes : [];
    let minute = stateMinutes.find((item) => String(item.id || "") === id) || null;
    if (!minute) {
      const buttons = Array.from(document.querySelectorAll("#employeeMinutesBody [data-print-minute]"));
      const index = buttons.indexOf(button);
      if (index >= 0 && stateMinutes[index]) minute = stateMinutes[index];
    }
    const formEmployeeId = document.querySelector('#employeeForm [name="employeeId"]')?.value || "";
    let employee = getEmployeeSafe(employeeId || state?.employeeId || formEmployeeId || minute?.employeeId);
    employee = state ? mergeEmployeeWithCurrentForm(employee || employeeFromState(state)) : (employee || null);
    if (minute) return { minute, employee };
    for (const emp of activeEmployees()) {
      const list = Array.isArray(emp.minutes) ? emp.minutes : (Array.isArray(emp.disciplinaryMinutes) ? emp.disciplinaryMinutes : []);
      minute = list.find((item) => String(item.id || "") === id) || null;
      if (minute) return { minute, employee: emp };
    }
    return { minute: null, employee };
  }
  function configuredEmployeeFieldRows(minute = {}, employee = {}) {
    let fields = Array.isArray(minute.employeeFields) ? minute.employeeFields : [];
    if (!fields.length && minute.templateId && typeof getMinuteTemplate === "function") {
      const template = getMinuteTemplate(minute.templateId || minute.type);
      fields = Array.isArray(template?.employeeFields) ? template.employeeFields : [];
    }
    const map = {
      employeeName: ["اسم الموظف", fullName(employee)],
      name: ["اسم الموظف", fullName(employee)],
      nationality: ["الجنسية", employee.nationality || "—"],
      identityNumber: ["رقم الهوية", employee.identityNumber || "—"],
      role: ["المهنة", employee.role || employee.jobTitle || "—"],
      jobTitle: ["المهنة", employee.role || employee.jobTitle || "—"],
      workStartDate: ["بداية العمل", employee.workStartDate && typeof formatDate === "function" ? formatDate(employee.workStartDate) : (employee.workStartDate || "—")],
      salary: ["الراتب", safeMoney(employee.totalSalary || employee.salary || employee.baseSalary || 0)]
    };
    return fields.map((field) => {
      const pair = map[field] || [field, employee[field] || "—"];
      return `<div><span>${esc(pair[0])}</span><strong>${esc(pair[1])}</strong></div>`;
    }).join("");
  }
  function customFieldRows(minute = {}) {
    if (!minute.fieldValues || typeof minute.fieldValues !== "object") return "";
    return Object.entries(minute.fieldValues).map(([key, value]) => `<div class="wide"><span>${esc(key)}</span><strong>${esc(value || "—")}</strong></div>`).join("");
  }
  function printMinuteManualAware(minute, employee) {
    if (!minute) { try { showToast("تعذر العثور على بيانات المحضر"); } catch {} return; }
    if (!employee) { try { showToast("تعذر العثور على بيانات الموظف"); } catch {} return; }
    const isAbs = isAbsMinute(minute);
    let detailsRows = "";
    if (isAbs) {
      let deduction = Number(minute.deductionAmount || 0);
      try {
        if (minute.sourceAbsenceId && Array.isArray(attendanceExceptions)) {
          const absence = attendanceExceptions.find((item) => item.id === minute.sourceAbsenceId);
          if (absence && typeof absenceDeductionAmount === "function") deduction = absenceDeductionAmount(absence);
        }
      } catch {}
      detailsRows = `<div><span>الفترة</span><strong>${esc(minute.absencePeriod || "—")}</strong></div><div><span>القاعدة المطبقة</span><strong>${esc(minute.absencePolicy || "—")}</strong></div><div><span>الحسم المالي</span><strong>${esc(safeMoney(deduction))}</strong></div>`;
    } else {
      detailsRows = configuredEmployeeFieldRows(minute, employee) + customFieldRows(minute);
    }
    if (!detailsRows.trim()) detailsRows = `<div class="wide"><span>تفاصيل المحضر</span><strong>${esc(minuteSummary(minute))}</strong></div>`;
    const title = minute.type || "محضر موظف";
    const markup = `<main class="minute-sheet"><h1>${esc(title)}</h1><p class="minute-subtitle">تم إنشاء هذا المحضر من نظام إدارة الموظفين</p><section><h2>بيانات الموظف</h2><div class="minute-grid"><div><span>اسم الموظف</span><strong>${esc(fullName(employee))}</strong></div><div><span>رقم الموظف</span><strong>${esc(employee.employeeNumber || "—")}</strong></div><div><span>الجنسية</span><strong>${esc(employee.nationality || "—")}</strong></div><div><span>رقم الهوية</span><strong>${esc(employee.identityNumber || "—")}</strong></div><div><span>المهنة</span><strong>${esc(employee.role || employee.jobTitle || "—")}</strong></div><div><span>بداية العمل</span><strong>${esc(employee.workStartDate && typeof formatDate === "function" ? formatDate(employee.workStartDate) : (employee.workStartDate || "—"))}</strong></div></div></section><section><h2>${isAbs ? "بيانات الغياب" : "بيانات المحضر"}</h2><div class="minute-grid">${detailsRows}<div class="wide"><span>تفاصيل المحضر</span><strong>${esc(minuteSummary(minute))}</strong></div></div></section><section><h2>الجزاء الموقع على الموظف</h2><p class="penalty-box">${esc(minutePenalty(minute))}</p></section><section class="signatures"><div><span>الموظف</span><strong>${esc(fullName(employee))}</strong></div><div><span>المسؤول</span><strong>${esc(minute.createdBy || (typeof currentUser !== "undefined" ? currentUser : "—"))}</strong></div></section></main>`;
    const style = `@page{size:A4;margin:12mm}*{box-sizing:border-box}body{margin:0;font-family:Almarai,Arial,sans-serif;color:#172226}.minute-sheet{border:1px solid #dfe7e9;padding:10mm;min-height:270mm}h1{text-align:center;color:#0f766e;margin:0;font-size:22px}.minute-subtitle{text-align:center;color:#6b7280;margin:6px 0 18px}section{margin-top:16px}h2{font-size:14px;border-bottom:1px solid #e5e7eb;padding-bottom:7px;color:#0f5f59}.minute-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.minute-grid div{background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:10px}.minute-grid .wide{grid-column:1/-1}.minute-grid span{display:block;font-size:11px;color:#64748b}.minute-grid strong{display:block;margin-top:4px;font-size:13px}.penalty-box{border:1px solid #d8f3ee;background:#f0fdfa;color:#0f5f59;border-radius:10px;padding:12px;line-height:1.8;font-weight:700}.signatures{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:35px}.signatures div{height:90px;border-top:1px solid #cbd5e1;padding-top:8px;text-align:center}@media print{body{print-color-adjust:exact;-webkit-print-color-adjust:exact}}`;
    if (typeof printHtmlDocument === "function") printHtmlDocument(`${title} - ${fullName(employee)}`, markup, style);
    else {
      const w = window.open("", "_blank");
      if (!w) { try { showToast("يرجى السماح بالنوافذ المنبثقة للطباعة"); } catch {} return; }
      w.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${style}</style></head><body>${markup}<script>window.onload=()=>{print();setTimeout(()=>close(),500)}<\/script></body></html>`);
      w.document.close();
    }
  }
  window.addEventListener("click", (event) => {
    const button = event.target?.closest?.("[data-print-minute]");
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const { minute, employee } = findMinuteFromClick(button);
    printMinuteManualAware(minute, employee);
  }, true);
})();

/* Critical final fix: opening employee for edit must hydrate the form with the selected employee record */
(() => {
  const findEmployeeRecordFinal = (id) => {
    const target = String(id || "");
    if (!target) return null;
    try {
      if (typeof getEmployee === "function") {
        const found = getEmployee(target);
        if (found) return found;
      }
    } catch {}
    try {
      if (Array.isArray(employees)) {
        return employees.find((emp) => String(emp.id || "") === target || String(emp.employeeNumber || "") === target) || null;
      }
    } catch {}
    return null;
  };

  const setValueFinal = (form, name, value) => {
    const el = form?.elements?.[name];
    if (!el) return;
    try {
      if (typeof setFormValue === "function") setFormValue(form, name, value ?? "");
      else el.value = value ?? "";
    } catch { try { el.value = value ?? ""; } catch {} }
  };

  const setRadioFinal = (form, name, value) => {
    try {
      if (typeof setRadioValue === "function") setRadioValue(form, name, value);
      else form?.querySelectorAll?.(`input[name="${name}"]`)?.forEach((input) => { input.checked = input.value === value; });
    } catch {}
  };

  const hydrateEmployeeEditorFinal = (employee) => {
    const form = document.querySelector("#employeeForm");
    const modal = document.querySelector("#employeeModal");
    if (!employee || !form || !modal) return false;
    const today = (() => { try { return typeof formatInputDate === "function" ? formatInputDate(todayAtNoon()) : new Date().toISOString().slice(0, 10); } catch { return new Date().toISOString().slice(0, 10); } })();

    try {
      employeeFormState = {
        photoAttachmentId: employee.photoAttachmentId || "",
        legacyPhoto: employee.legacyPhoto || "",
        identityAttachmentId: employee.identityAttachmentId || "",
        signatureAttachmentId: employee.signatureAttachmentId || "",
        fingerprintAttachmentId: employee.fingerprintAttachmentId || "",
        passports: (employee.passports || []).map((item) => typeof createPassport === "function" ? createPassport(item) : { ...item }),
        bankAccounts: (employee.bankAccounts || []).map((item) => typeof createBankAccount === "function" ? createBankAccount(item) : { ...item }),
        notes: (employee.notes || []).map((item) => ({ ...item })),
        minutes: (employee.minutes || employee.disciplinaryMinutes || []).map((item) => typeof createEmployeeMinuteRecord === "function" ? createEmployeeMinuteRecord(item) : { ...item }),
        documents: (employee.documents || []).map((item) => typeof createDocument === "function" ? createDocument(item) : { ...item }),
        commissions: (employee.commissions || []).map((item) => ({ ...item })),
        commissionAccrualStartDate: employee.commissionAccrualStartDate || employee.workStartDate || employee.contractStartDate || today,
        commissionPaused: Boolean(employee.commissionPaused),
        commissionPauseReason: employee.commissionPauseReason || "",
        commissionPausedByLeaveId: employee.commissionPausedByLeaveId || "",
        commissionPausedAt: employee.commissionPausedAt || "",
        consent: employee.consent ? { ...employee.consent } : null
      };
    } catch {}

    setValueFinal(form, "employeeId", employee.id || "");
    [
      "firstName", "fatherName", "grandName", "familyName", "nationality", "birthDate",
      "identityNumber", "identityExpiryGregorian", "identityExpiryHijri", "status",
      "department", "branch", "section", "directManager", "role", "contractStartDate", "workStartDate", "contractMonths",
      "renewalOption", "baseSalary", "housingAllowance", "transportAllowance", "otherAllowances",
      "phone", "emergencyPhone", "email", "homeCountryPhone"
    ].forEach((name) => setValueFinal(form, name, employee[name] ?? ""));

    setValueFinal(form, "contractStartDate", employee.contractStartDate || today);
    setValueFinal(form, "workStartDate", employee.workStartDate || employee.contractStartDate || today);
    setValueFinal(form, "commissionStartDate", (employeeFormState && employeeFormState.commissionAccrualStartDate) || employee.commissionAccrualStartDate || employee.workStartDate || employee.contractStartDate || today);
    setValueFinal(form, "commissionPaymentDate", "");
    setValueFinal(form, "hijriCorrection", employee.hijriCorrection || 0);

    setRadioFinal(form, "nationalityType", employee.nationalityType || "saudi");
    try { if (typeof renderNationalityOptions === "function") renderNationalityOptions(employee.nationality || "سعودي", (employee.nationalityType || "saudi") === "nonSaudi"); } catch {}
    setValueFinal(form, "nationality", employee.nationality || "سعودي");
    setRadioFinal(form, "gender", employee.gender || "male");
    setRadioFinal(form, "contractType", employee.contractType || "unlimited");
    try { if (form.elements.insuranceEnabled) form.elements.insuranceEnabled.checked = Boolean(employee.insuranceEnabled); } catch {}

    try { if (typeof refreshEmployeeOrgOptions === "function") refreshEmployeeOrgOptions(employee.section || "", employee.role || ""); } catch {}
    setValueFinal(form, "department", employee.department || "");
    setValueFinal(form, "section", employee.section || "");
    setValueFinal(form, "directManager", employee.directManager || "");
    setValueFinal(form, "role", employee.role || "");

    try { document.querySelector("#employeeModalTitle").innerHTML = `${typeof iconSvg === "function" ? iconSvg("user-plus") : ""}تعديل بيانات الموظف`; } catch {}
    ["renderPassports", "renderBankAccounts", "renderEmployeeNotes", "renderEmployeeMinutes", "resetEmployeeMinuteForm", "renderDocuments", "renderCommissionHistory", "renderDocumentation", "updateAllFormCalculations", "renderEmployeePhoto"].forEach((name) => {
      try { if (typeof window[name] === "function") window[name](); else if (typeof eval(name) === "function") eval(name)(); } catch {}
    });
    try { if (typeof toggleEmployeeMinuteForm === "function") toggleEmployeeMinuteForm(false); } catch {}
    try { if (typeof switchEmployeeSection === "function") switchEmployeeSection("personal"); } catch {}
    try { if (!modal.open) modal.showModal(); modal.scrollTop = 0; } catch {}
    return true;
  };

  const previousOpenEmployeeModalFinal = typeof openEmployeeModal === "function" ? openEmployeeModal : null;
  const finalOpenEmployeeEditor = async (id) => {
    const employee = findEmployeeRecordFinal(id);
    if (!employee) { try { showToast("تعذر العثور على بيانات الموظف"); } catch {} return; }
    let opened = false;
    if (previousOpenEmployeeModalFinal) {
      try { await previousOpenEmployeeModalFinal(employee.id); opened = true; } catch (error) { console.error(error); }
    }
    const form = document.querySelector("#employeeForm");
    const loadedId = form?.elements?.employeeId?.value || "";
    const loadedName = [form?.elements?.firstName?.value, form?.elements?.familyName?.value].filter(Boolean).join(" ").trim();
    if (!opened || String(loadedId) !== String(employee.id) || !loadedName) {
      hydrateEmployeeEditorFinal(employee);
    } else {
      // Even when the old opener succeeds, enforce the correct hidden id because reports use it.
      setValueFinal(form, "employeeId", employee.id || "");
    }
  };

  try {
    openEmployeeModal = async function patchedOpenEmployeeModal(employeeId = null) {
      if (!employeeId) return previousOpenEmployeeModalFinal ? previousOpenEmployeeModalFinal(null) : undefined;
      return finalOpenEmployeeEditor(employeeId);
    };
    window.openEmployeeModal = openEmployeeModal;
  } catch {}

  document.addEventListener("click", (event) => {
    const edit = event.target.closest?.("[data-edit-employee], .employee-name-link[data-edit-employee], [data-employee-name-edit]");
    if (!edit) return;
    const id = edit.dataset.editEmployee || edit.dataset.employeeNameEdit;
    if (!id) return;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    finalOpenEmployeeEditor(id);
  }, true);
})();

/* =========================================================
   Establishment documents v2: category -> type -> authority, attachment, expiry status
   ========================================================= */
(function establishmentDocumentsV2(){
  const DOC_KEY = "nawah-document-type-settings";
  const EST_KEY = "nawah-establishment-documents";
  const safe = (value) => typeof escapeHtml === "function" ? escapeHtml(value ?? "") : String(value ?? "").replace(/[&<>\"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
  const uid = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const icon = (name) => typeof iconSvg === "function" ? iconSvg(name) : "";
  const getLS = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
  const setLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const clean = (value) => String(value || "").trim();

  function normalizeDocSettingsV2(raw = {}) {
    const categories = Array.isArray(raw.categories) ? raw.categories : [];
    const types = Array.isArray(raw.types) ? raw.types : [];
    return {
      categories: categories.map((item, index) => ({
        id: item.id || uid(`doc-cat-${index}`),
        name: clean(item.name),
        visible: item.visible !== false
      })).filter((item) => item.name),
      types: types.map((item, index) => ({
        id: item.id || uid(`doc-type-${index}`),
        name: clean(item.name),
        categoryId: item.categoryId || "",
        authority: clean(item.authority || item.agency || item.entity || item.issuer || ""),
        visible: item.visible !== false
      })).filter((item) => item.name)
    };
  }

  function normalizeEstDocV2(doc = {}, index = 0) {
    return {
      id: doc.id || uid(`est-doc-${index}`),
      categoryId: doc.categoryId || "",
      typeId: doc.typeId || "",
      number: clean(doc.number),
      startDate: doc.startDate || doc.issueDate || "",
      expiryDate: doc.expiryDate || doc.endDate || "",
      authority: clean(doc.authority || doc.agency || doc.entity || ""),
      attachmentId: doc.attachmentId || "",
      note: clean(doc.note),
      title: clean(doc.title)
    };
  }

  function getDocSettingsV2() { return normalizeDocSettingsV2(getLS(DOC_KEY, { categories: [], types: [] })); }
  function saveDocSettingsV2(settings) { setLS(DOC_KEY, normalizeDocSettingsV2(settings)); }
  function getEstDocsV2() { return (Array.isArray(getLS(EST_KEY, [])) ? getLS(EST_KEY, []) : []).map(normalizeEstDocV2); }
  function saveEstDocsV2(docs) { setLS(EST_KEY, (docs || []).map(normalizeEstDocV2)); }
  function categoryName(id, settings = getDocSettingsV2()) { return settings.categories.find((item) => item.id === id)?.name || "—"; }
  function typeById(id, settings = getDocSettingsV2()) { return settings.types.find((item) => item.id === id) || null; }
  function typeName(id, settings = getDocSettingsV2()) { return typeById(id, settings)?.name || "—"; }
  function visibleCategories(settings = getDocSettingsV2()) { return settings.categories.filter((item) => item.visible !== false); }
  function visibleTypes(settings = getDocSettingsV2()) { return settings.types.filter((item) => item.visible !== false); }
  function expiryBadge(date) {
    const status = typeof expiryStatus === "function" ? expiryStatus(date) : { text: date || "—", className: "" };
    return `<span class="est-doc-expiry est-doc-expiry-${safe(status.className || "neutral")}">${safe(status.text || "—")}</span>`;
  }

  function ensureEstablishmentDocumentModalV2() {
    if (document.getElementById("establishmentDocumentModalV2")) return;
    document.body.insertAdjacentHTML("beforeend", `
      <dialog class="modal small-modal establishment-document-modal-v2" id="establishmentDocumentModalV2">
        <form id="establishmentDocumentFormV2">
          <div class="modal-head">
            <div><h2>وثيقة منشأة</h2><p>أضف وثيقة مرتبطة بتصنيف ونوع وثيقة معرف مسبقًا.</p></div>
            <button type="button" class="icon-btn" data-close-modal="establishmentDocumentModalV2"><span data-icon="x"></span></button>
          </div>
          <div class="modal-body form-grid form-grid-2">
            <label><span>تصنيف الوثيقة</span><select name="categoryId" required></select></label>
            <label><span>نوع الوثيقة</span><select name="typeId" required></select></label>
            <label><span>رقم الوثيقة</span><input name="number" placeholder="رقم الوثيقة" /></label>
            <label><span>الجهة التابعة لها</span><input name="authority" placeholder="تُسحب من نوع الوثيقة" readonly /></label>
            <label><span>تاريخ البداية</span><input type="date" name="startDate" /></label>
            <label><span>تاريخ النهاية</span><input type="date" name="expiryDate" /></label>
            <label><span>مرفق الوثيقة</span><span class="compact-file-control" id="establishmentDocFileControl"><span data-icon="file"></span><span>إرفاق الوثيقة</span><input type="file" name="attachmentFile" accept="image/*,.pdf" /></span></label>
            <label class="span-all"><span>المدة المتبقية</span><input name="remaining" class="calculated-field expiry-state" readonly /></label>
            <label class="span-all"><span>ملاحظات</span><textarea name="note" rows="3"></textarea></label>
            <input type="hidden" name="id" />
            <input type="hidden" name="attachmentId" />
          </div>
          <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal="establishmentDocumentModalV2">إلغاء</button><button type="submit" class="primary-btn">حفظ الوثيقة</button></div>
        </form>
      </dialog>`);
    hydrateIcons(document.getElementById("establishmentDocumentModalV2"));
  }

  function ensureDocTypeAuthorityFieldV2() {
    const form = document.getElementById("documentTypeForm");
    if (!form) return;
    const body = form.querySelector(".modal-body");
    if (body && !form.elements.authority) {
      const visibleLabel = body.querySelector('label input[name="visible"]')?.closest("label");
      const html = `<label><span>الجهة التابعة لها</span><input name="authority" placeholder="مثال: وزارة التجارة / البلدية / الدفاع المدني" /></label>`;
      if (visibleLabel) visibleLabel.insertAdjacentHTML("beforebegin", html); else body.insertAdjacentHTML("beforeend", html);
    }
  }

  function renderDocumentSettingsV2() {
    const panel = document.querySelector('[data-settings-panel="documentTypes"]');
    if (!panel) return;
    const settings = getDocSettingsV2();
    panel.innerHTML = `
      <div class="panel-head"><div><h3>أنواع الوثائق</h3><p>أنشئ التصنيفات ثم اربط كل نوع وثيقة بتصنيف وجهة تابعة لها.</p></div></div>
      <div class="work-settings-block">
        <div class="section-title-with-action"><div><h4>تصنيفات الوثائق</h4><p>تبدأ فارغة وتضاف يدويًا.</p></div><button type="button" class="primary-btn" id="addDocumentCategoryBtn"><span data-icon="plus"></span>إضافة تصنيف</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم التصنيف</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="documentCategoryBodyV2"></tbody></table></div>
      </div>
      <div class="work-settings-block">
        <div class="section-title-with-action"><div><h4>أنواع الوثائق</h4><p>كل نوع وثيقة يرتبط بتصنيف وجهة تابعة لها.</p></div><button type="button" class="primary-btn" id="addDocumentTypeBtn"><span data-icon="plus"></span>إضافة نوع جديد</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم النوع</th><th>التصنيف</th><th>الجهة التابعة لها</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="documentTypeBodyV2"></tbody></table></div>
      </div>`;
    const catBody = panel.querySelector("#documentCategoryBodyV2");
    catBody.innerHTML = settings.categories.length ? settings.categories.map((cat) => `<tr><td>${safe(cat.name)}</td><td>${cat.visible === false ? "مخفي" : "ظاهر"}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-doc-category="${safe(cat.id)}" title="تعديل">${icon("edit")}</button><button type="button" class="quick-view-btn" data-toggle-doc-category="${safe(cat.id)}" title="إخفاء/إظهار">${icon(cat.visible === false ? "eye" : "eye-off")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-doc-category="${safe(cat.id)}" title="حذف">${icon("trash")}</button></td></tr>`).join("") : `<tr><td colspan="3"><div class="empty-state"><strong>لا توجد تصنيفات</strong><p>أضف التصنيفات يدويًا حسب احتياج المنشأة.</p></div></td></tr>`;
    const typeBody = panel.querySelector("#documentTypeBodyV2");
    typeBody.innerHTML = settings.types.length ? settings.types.map((type) => `<tr><td>${safe(type.name)}</td><td>${safe(categoryName(type.categoryId, settings))}</td><td>${safe(type.authority || "—")}</td><td>${type.visible === false ? "مخفي" : "ظاهر"}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-doc-type="${safe(type.id)}" title="تعديل">${icon("edit")}</button><button type="button" class="quick-view-btn" data-toggle-doc-type="${safe(type.id)}" title="إخفاء/إظهار">${icon(type.visible === false ? "eye" : "eye-off")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-doc-type="${safe(type.id)}" title="حذف">${icon("trash")}</button></td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state"><strong>لا توجد أنواع وثائق</strong><p>أضف نوع وثيقة واربطه بتصنيف.</p></div></td></tr>`;
    hydrateIcons(panel);
  }

  function renderEstablishmentDocumentsV2() {
    const view = document.getElementById("establishmentDocumentsView");
    if (!view) return;
    const settings = getDocSettingsV2();
    const docs = getEstDocsV2();
    view.innerHTML = `
      <div class="section-toolbar"><div><h2 class="section-title">وثائق المنشأة</h2><p class="section-description">إدارة الوثائق حسب التصنيف والنوع والجهة وتواريخ الانتهاء.</p></div><button type="button" class="primary-btn" id="addEstablishmentDocumentBtn"><span data-icon="plus"></span>إضافة وثيقة</button></div>
      <article class="panel"><div class="table-wrap"><table class="compact-data-table establishment-docs-table"><thead><tr><th>التصنيف</th><th>نوع الوثيقة</th><th>رقم الوثيقة</th><th>الجهة</th><th>تاريخ البداية</th><th>تاريخ النهاية</th><th>المتبقي</th><th>المرفق</th><th>الإجراءات</th></tr></thead><tbody id="establishmentDocumentsBody"></tbody></table></div></article>`;
    const body = view.querySelector("#establishmentDocumentsBody");
    body.innerHTML = docs.length ? docs.map((doc) => {
      const type = typeById(doc.typeId, settings);
      const categoryId = doc.categoryId || type?.categoryId || "";
      const authority = doc.authority || type?.authority || "—";
      return `<tr><td>${safe(categoryName(categoryId, settings))}</td><td>${safe(type?.name || "—")}</td><td>${safe(doc.number || "—")}</td><td>${safe(authority)}</td><td>${doc.startDate ? formatDate(doc.startDate) : "—"}</td><td>${doc.expiryDate ? formatDate(doc.expiryDate) : "—"}</td><td>${expiryBadge(doc.expiryDate)}</td><td>${doc.attachmentId ? `<button type="button" class="attachment-view-btn" data-view-attachment="${safe(doc.attachmentId)}">عرض</button>` : "—"}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-est-doc="${safe(doc.id)}" title="تعديل">${icon("edit")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-est-doc="${safe(doc.id)}" title="حذف">${icon("trash")}</button></td></tr>`;
    }).join("") : `<tr><td colspan="9"><div class="empty-state"><strong>لا توجد وثائق منشأة</strong><p>أضف التصنيفات والأنواع ثم سجل الوثائق يدويًا.</p></div></td></tr>`;
    hydrateIcons(view);
  }

  function fillDocTypeModalV2(id = "") {
    ensureDocumentModals?.();
    ensureDocTypeAuthorityFieldV2();
    const settings = getDocSettingsV2();
    const dialog = document.getElementById("documentTypeModal");
    const form = document.getElementById("documentTypeForm");
    if (!dialog || !form) return;
    const item = settings.types.find((type) => type.id === id) || { id: "", name: "", categoryId: "", authority: "", visible: true };
    form.elements.id.value = item.id || "";
    form.elements.name.value = item.name || "";
    form.elements.categoryId.innerHTML = `<option value="">اختر التصنيف</option>${settings.categories.map((cat) => `<option value="${safe(cat.id)}">${safe(cat.name)}</option>`).join("")}`;
    form.elements.categoryId.value = item.categoryId || "";
    form.elements.authority.value = item.authority || "";
    if (form.elements.visible) form.elements.visible.checked = item.visible !== false;
    dialog.showModal();
  }

  function updateEstDocTypeOptions(form) {
    const settings = getDocSettingsV2();
    const categoryId = form.elements.categoryId.value || "";
    const types = visibleTypes(settings).filter((type) => !categoryId || type.categoryId === categoryId);
    const previous = form.elements.typeId.value;
    form.elements.typeId.innerHTML = `<option value="">اختر نوع الوثيقة</option>${types.map((type) => `<option value="${safe(type.id)}">${safe(type.name)}</option>`).join("")}`;
    if (types.some((type) => type.id === previous)) form.elements.typeId.value = previous;
    const selected = typeById(form.elements.typeId.value, settings);
    form.elements.authority.value = selected?.authority || "";
  }

  function refreshEstDocRemaining(form) {
    const status = typeof expiryStatus === "function" ? expiryStatus(form.elements.expiryDate.value) : { text: "", className: "" };
    const input = form.elements.remaining;
    if (!input) return;
    input.classList.remove("valid", "warning", "expired");
    if (status.className) input.classList.add(status.className);
    input.value = status.text || "";
  }

  function openEstablishmentDocumentModalV2(id = "") {
    ensureEstablishmentDocumentModalV2();
    const dialog = document.getElementById("establishmentDocumentModalV2");
    const form = document.getElementById("establishmentDocumentFormV2");
    const settings = getDocSettingsV2();
    const doc = getEstDocsV2().find((item) => item.id === id) || { id: "", categoryId: "", typeId: "", number: "", startDate: "", expiryDate: "", authority: "", attachmentId: "", note: "" };
    form.reset();
    form.elements.id.value = doc.id || "";
    form.elements.attachmentId.value = doc.attachmentId || "";
    form.elements.categoryId.innerHTML = `<option value="">اختر التصنيف</option>${visibleCategories(settings).map((cat) => `<option value="${safe(cat.id)}">${safe(cat.name)}</option>`).join("")}`;
    const docType = typeById(doc.typeId, settings);
    form.elements.categoryId.value = doc.categoryId || docType?.categoryId || "";
    updateEstDocTypeOptions(form);
    form.elements.typeId.value = doc.typeId || "";
    form.elements.number.value = doc.number || "";
    form.elements.startDate.value = doc.startDate || "";
    form.elements.expiryDate.value = doc.expiryDate || "";
    form.elements.note.value = doc.note || "";
    form.elements.authority.value = doc.authority || typeById(doc.typeId, settings)?.authority || "";
    const fileLabel = document.querySelector("#establishmentDocFileControl span:nth-child(2)");
    if (fileLabel) fileLabel.textContent = doc.attachmentId ? "تم الإرفاق" : "إرفاق الوثيقة";
    document.getElementById("establishmentDocFileControl")?.classList.toggle("has-file", Boolean(doc.attachmentId));
    refreshEstDocRemaining(form);
    dialog.showModal();
  }

  async function saveEstablishmentDocumentModalV2(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const settings = getDocSettingsV2();
    const type = typeById(form.elements.typeId.value, settings);
    if (!form.elements.categoryId.value) { showToast?.("اختر تصنيف الوثيقة"); return; }
    if (!form.elements.typeId.value) { showToast?.("اختر نوع الوثيقة"); return; }
    let attachmentId = form.elements.attachmentId.value || "";
    const file = form.elements.attachmentFile.files?.[0];
    if (file && typeof saveAttachment === "function") attachmentId = await saveAttachment(file, "establishment-document");
    const id = form.elements.id.value || uid("est-doc");
    const docs = getEstDocsV2();
    const data = normalizeEstDocV2({
      id,
      categoryId: form.elements.categoryId.value || type?.categoryId || "",
      typeId: form.elements.typeId.value || "",
      number: form.elements.number.value,
      startDate: form.elements.startDate.value,
      expiryDate: form.elements.expiryDate.value,
      authorityId: form.elements.authorityId?.value || type?.authorityId || "",
      authority: authorityName(form.elements.authorityId?.value || type?.authorityId, settings),
      attachmentId,
      note: form.elements.note.value,
      title: type?.name || ""
    });
    const index = docs.findIndex((item) => item.id === id);
    if (index >= 0) docs[index] = data; else docs.unshift(data);
    saveEstDocsV2(docs);
    document.getElementById("establishmentDocumentModalV2")?.close();
    renderEstablishmentDocumentsV2();
    showToast?.("تم حفظ وثيقة المنشأة");
  }

  function wireEstablishmentDocumentsV2() {
    ensureEstablishmentDocumentModalV2();
    ensureDocTypeAuthorityFieldV2();
    const form = document.getElementById("establishmentDocumentFormV2");
    if (form && !form.dataset.estDocV2Wired) {
      form.dataset.estDocV2Wired = "1";
      form.addEventListener("submit", saveEstablishmentDocumentModalV2);
      form.elements.categoryId.addEventListener("change", () => { form.elements.typeId.value = ""; updateEstDocTypeOptions(form); });
      form.elements.typeId.addEventListener("change", () => { const type = typeById(form.elements.typeId.value); form.elements.authority.value = type?.authority || ""; });
      form.elements.expiryDate.addEventListener("change", () => refreshEstDocRemaining(form));
      form.elements.attachmentFile.addEventListener("change", () => {
        const label = document.querySelector("#establishmentDocFileControl span:nth-child(2)");
        if (label) label.textContent = form.elements.attachmentFile.files?.[0]?.name || "إرفاق الوثيقة";
        document.getElementById("establishmentDocFileControl")?.classList.toggle("has-file", Boolean(form.elements.attachmentFile.files?.[0]));
      });
    }
    const typeForm = document.getElementById("documentTypeForm");
    if (typeForm && !typeForm.dataset.authoritySubmitPatched) {
      typeForm.dataset.authoritySubmitPatched = "1";
      typeForm.addEventListener("submit", () => {
        setTimeout(() => {
          const settings = getDocSettingsV2();
          const id = typeForm.elements.id.value;
          const item = settings.types.find((type) => type.id === id || type.name === clean(typeForm.elements.name.value));
          if (item && typeForm.elements.authority) {
            item.authority = clean(typeForm.elements.authority.value);
            saveDocSettingsV2(settings);
            renderDocumentSettingsV2();
            renderEstablishmentDocumentsV2();
          }
        }, 0);
      }, true);
    }
  }

  try { renderDocSettingsPanel = function patchedRenderDocSettingsPanelV2() { renderDocumentSettingsV2(); wireEstablishmentDocumentsV2(); }; } catch {}
  try { renderDocumentTypeSettings = function patchedRenderDocumentTypeSettingsV2() { renderDocumentSettingsV2(); wireEstablishmentDocumentsV2(); }; } catch {}
  try { renderEstablishmentDocumentsFinal = function patchedRenderEstablishmentDocumentsFinalV2() { renderEstablishmentDocumentsV2(); wireEstablishmentDocumentsV2(); }; } catch {}
  try { renderEstablishmentDocuments = function patchedRenderEstablishmentDocumentsV2() { renderEstablishmentDocumentsV2(); wireEstablishmentDocumentsV2(); }; } catch {}
  try { openDocTypeModal = function patchedOpenDocTypeModalV2(id = "") { fillDocTypeModalV2(id); }; } catch {}
  try { openEstDocModal = function patchedOpenEstDocModalV2(id = "") { openEstablishmentDocumentModalV2(id); }; } catch {}
  try { addEstablishmentDocument = function patchedAddEstDocV2() { openEstablishmentDocumentModalV2(); }; } catch {}

  document.addEventListener("click", (event) => {
    const addEst = event.target.closest("#addEstablishmentDocumentBtn");
    const editEst = event.target.closest("[data-edit-est-doc]");
    const deleteEst = event.target.closest("[data-delete-est-doc]");
    const addType = event.target.closest("#addDocumentTypeBtn");
    const editType = event.target.closest("[data-edit-doc-type]");
    const close = event.target.closest('[data-close-modal="establishmentDocumentModalV2"]');
    if (addEst) { event.preventDefault(); event.stopImmediatePropagation(); openEstablishmentDocumentModalV2(); return; }
    if (editEst) { event.preventDefault(); event.stopImmediatePropagation(); openEstablishmentDocumentModalV2(editEst.dataset.editEstDoc); return; }
    if (deleteEst) { event.preventDefault(); event.stopImmediatePropagation(); saveEstDocsV2(getEstDocsV2().filter((doc) => doc.id !== deleteEst.dataset.deleteEstDoc)); renderEstablishmentDocumentsV2(); showToast?.("تم حذف وثيقة المنشأة"); return; }
    if (addType) { event.preventDefault(); event.stopImmediatePropagation(); fillDocTypeModalV2(); return; }
    if (editType) { event.preventDefault(); event.stopImmediatePropagation(); fillDocTypeModalV2(editType.dataset.editDocType); return; }
    if (close) { event.preventDefault(); document.getElementById("establishmentDocumentModalV2")?.close(); return; }
  }, true);

  const oldSwitchView = typeof switchView === "function" ? switchView : null;
  if (oldSwitchView && !window.__estDocsV2SwitchPatched) {
    window.__estDocsV2SwitchPatched = true;
    switchView = function patchedSwitchViewEstDocsV2(name) {
      oldSwitchView(name);
      if (name === "establishmentDocuments") setTimeout(() => { renderEstablishmentDocumentsV2(); wireEstablishmentDocumentsV2(); }, 0);
      if (name === "settings") setTimeout(() => { renderDocumentSettingsV2(); wireEstablishmentDocumentsV2(); }, 0);
    };
  }

  window.addEventListener("load", () => setTimeout(() => { try { renderDocumentSettingsV2(); renderEstablishmentDocumentsV2(); wireEstablishmentDocumentsV2(); } catch (error) { console.warn(error); } }, 0));
  setTimeout(() => { try { renderDocumentSettingsV2(); renderEstablishmentDocumentsV2(); wireEstablishmentDocumentsV2(); } catch (error) { console.warn(error); } }, 0);
})();

/* =========================================================
   HARD FIX: Establishment Documents working module
   - independent view, settings, modal, filtering, save/render
   ========================================================= */
(function establishmentDocumentsHardFix(){
  const DOC_KEY = "nawah-document-type-settings";
  const EST_KEY = "nawah-establishment-documents";
  const esc = (value) => String(value ?? "").replace(/[&<>\"]/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
  const id = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const trim = (value) => String(value || "").trim();
  const icon = (name) => typeof iconSvg === "function" ? iconSvg(name) : "";
  const toast = (message) => typeof showToast === "function" ? showToast(message) : console.log(message);
  const load = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
  const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.warn(error); } };

  function normalizeSettings(raw = {}) {
    const authorities = (Array.isArray(raw.authorities) ? raw.authorities : []).map((item) => ({
      id: item.id || id("doc-authority"),
      name: trim(item.name || item.authority || item.agency || item.entity || item.issuer || ""),
      visible: item.visible !== false
    })).filter((item) => item.name);
    const findOrCreateAuthority = (name) => {
      const cleanName = trim(name);
      if (!cleanName) return "";
      let item = authorities.find((authority) => authority.name === cleanName);
      if (!item) {
        item = { id: id("doc-authority"), name: cleanName, visible: true };
        authorities.push(item);
      }
      return item.id;
    };
    return {
      categories: (Array.isArray(raw.categories) ? raw.categories : []).map((item) => ({
        id: item.id || id("doc-cat"),
        name: trim(item.name),
        visible: item.visible !== false
      })).filter((item) => item.name),
      authorities,
      types: (Array.isArray(raw.types) ? raw.types : []).map((item) => ({
        id: item.id || id("doc-type"),
        name: trim(item.name),
        categoryId: item.categoryId || "",
        authorityId: item.authorityId || findOrCreateAuthority(item.authority || item.agency || item.entity || item.issuer || ""),
        authority: trim(item.authority || item.agency || item.entity || item.issuer || ""),
        visible: item.visible !== false
      })).filter((item) => item.name)
    };
  }

  function normalizeDoc(raw = {}) {
    return {
      id: raw.id || id("est-doc"),
      categoryId: raw.categoryId || "",
      typeId: raw.typeId || "",
      number: trim(raw.number),
      startDate: raw.startDate || raw.issueDate || "",
      expiryDate: raw.expiryDate || raw.endDate || "",
      authorityId: raw.authorityId || "",
      authority: trim(raw.authority || raw.agency || raw.entity || ""),
      attachmentId: raw.attachmentId || "",
      attachmentName: raw.attachmentName || "",
      attachmentData: raw.attachmentData || "",
      note: trim(raw.note)
    };
  }

  function getSettings() { return normalizeSettings(load(DOC_KEY, { categories: [], types: [] })); }
  function setSettings(settings) { save(DOC_KEY, normalizeSettings(settings)); }
  function getDocs() { return (Array.isArray(load(EST_KEY, [])) ? load(EST_KEY, []) : []).map(normalizeDoc); }
  function setDocs(docs) { save(EST_KEY, (docs || []).map(normalizeDoc)); }
  function catName(catId, settings = getSettings()) { return settings.categories.find((cat) => cat.id === catId)?.name || "-"; }
  function typeById(typeId, settings = getSettings()) { return settings.types.find((type) => type.id === typeId) || null; }
  function typeName(typeId, settings = getSettings()) { return typeById(typeId, settings)?.name || "-"; }
  function authorityById(authorityId, settings = getSettings()) { return (settings.authorities || []).find((authority) => authority.id === authorityId) || null; }
  function authorityName(authorityId, settings = getSettings()) { return authorityById(authorityId, settings)?.name || "-"; }
  function visibleCats(settings = getSettings()) { return settings.categories.filter((cat) => cat.visible !== false); }
  function visibleAuthorities(settings = getSettings()) { return (settings.authorities || []).filter((authority) => authority.visible !== false); }
  function visibleTypes(settings = getSettings()) { return settings.types.filter((type) => type.visible !== false); }

  function formatDateSafe(value) {
    if (!value) return "-";
    if (typeof formatDate === "function") return formatDate(value) || value;
    return value;
  }

  function remainingInfo(dateValue) {
    if (!dateValue) return { text: "غير محدد", state: "neutral" };
    const end = new Date(`${dateValue}T12:00:00`);
    if (Number.isNaN(end.getTime())) return { text: "غير محدد", state: "neutral" };
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    const days = Math.ceil((end - today) / 86400000);
    if (days < 0) return { text: "منتهية", state: "expired" };
    if (days <= 30) return { text: `باقي ${days} يوم !`, state: "warning" };
    return { text: `باقي ${days} يوم`, state: "valid" };
  }

  function remainingBadge(dateValue) {
    const info = remainingInfo(dateValue);
    return `<span class="est-doc-status ${info.state}">${esc(info.text)}</span>`;
  }

  function ensureSidebarAndView() {
    const nav = document.querySelector(".main-nav");
    if (nav && !nav.querySelector('[data-view="establishmentDocuments"]')) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "nav-item";
      button.dataset.view = "establishmentDocuments";
      button.innerHTML = `<span class="nav-icon" data-icon="file"></span><span>وثائق المنشأة</span>`;
      nav.appendChild(button);
    }
    const content = document.querySelector("main.content") || document.querySelector("main") || document.querySelector(".content");
    if (content && !document.getElementById("establishmentDocumentsView")) {
      const section = document.createElement("section");
      section.className = "view";
      section.id = "establishmentDocumentsView";
      content.appendChild(section);
    }
  }

  function ensureSettingsPanel() {
    const settingsNav = document.getElementById("settingsNav");
    if (settingsNav && !settingsNav.querySelector('[data-settings-section="documentTypes"]')) {
      settingsNav.insertAdjacentHTML("beforeend", `<button type="button" data-settings-section="documentTypes"><span data-icon="file"></span>أنواع الوثائق</button>`);
    }
    const host = document.querySelector(".settings-panel") || document.querySelector("#settingsView .panel");
    if (host && !host.querySelector('[data-settings-panel="documentTypes"]')) {
      host.insertAdjacentHTML("beforeend", `<section class="settings-section" data-settings-panel="documentTypes"></section>`);
    }
  }

  function setView(name) {
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${name}View`));
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === name));
    const pageTitle = document.getElementById("pageTitle");
    const pageSubtitle = document.getElementById("pageSubtitle");
    if (name === "establishmentDocuments") {
      if (pageTitle) pageTitle.textContent = "وثائق المنشأة";
      if (pageSubtitle) pageSubtitle.textContent = "إدارة وثائق المنشأة";
      renderEstDocsView();
    }
  }

  function renderDocSettings() {
    ensureSettingsPanel();
    const panel = document.querySelector('[data-settings-panel="documentTypes"]');
    if (!panel) return;
    const settings = getSettings();
    panel.innerHTML = `
      <div class="panel-head"><div><h3>أنواع الوثائق</h3><p>أضف التصنيفات والجهات التابعة ثم اربط كل نوع وثيقة بتصنيف وجهة.</p></div></div>
      <div class="work-settings-block">
        <div class="section-title-with-action"><div><h4>تصنيفات الوثائق</h4><p>لا توجد تصنيفات افتراضية.</p></div><button type="button" class="primary-btn" id="hardAddDocCategoryBtn"><span data-icon="plus"></span>إضافة تصنيف</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم التصنيف</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="hardDocCategoryBody"></tbody></table></div>
      </div>
      <div class="work-settings-block">
        <div class="section-title-with-action"><div><h4>الجهات التابعة</h4><p>أدخل الجهات يدويًا مثل وزارة التجارة أو البلدية أو الدفاع المدني.</p></div><button type="button" class="primary-btn" id="hardAddDocAuthorityBtn"><span data-icon="plus"></span>إضافة جهة</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم الجهة</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="hardDocAuthorityBody"></tbody></table></div>
      </div>
      <div class="work-settings-block">
        <div class="section-title-with-action"><div><h4>أنواع الوثائق</h4><p>كل نوع وثيقة يتبع تصنيفًا وجهة تابعة محفوظة.</p></div><button type="button" class="primary-btn" id="hardAddDocTypeBtn"><span data-icon="plus"></span>إضافة نوع وثيقة</button></div>
        <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>اسم النوع</th><th>التصنيف</th><th>الجهة التابعة لها</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="hardDocTypeBody"></tbody></table></div>
      </div>`;
    const catBody = document.getElementById("hardDocCategoryBody");
    catBody.innerHTML = settings.categories.length ? settings.categories.map((cat) => `
      <tr><td>${esc(cat.name)}</td><td>${cat.visible ? "ظاهر" : "مخفي"}</td><td class="action-cell">
        <button type="button" class="quick-view-btn" data-hard-edit-cat="${esc(cat.id)}">${icon("edit")}</button>
        <button type="button" class="quick-view-btn" data-hard-toggle-cat="${esc(cat.id)}">${icon(cat.visible ? "eye-off" : "eye")}</button>
        <button type="button" class="quick-view-btn danger-inline-btn" data-hard-delete-cat="${esc(cat.id)}">${icon("trash")}</button>
      </td></tr>`).join("") : `<tr><td colspan="3"><div class="empty-state"><strong>لا توجد تصنيفات</strong><p>أضف التصنيفات يدويًا.</p></div></td></tr>`;
    const authorityBody = document.getElementById("hardDocAuthorityBody");
    if (authorityBody) {
      authorityBody.innerHTML = settings.authorities.length ? settings.authorities.map((authority) => `
        <tr><td>${esc(authority.name)}</td><td>${authority.visible ? "ظاهر" : "مخفي"}</td><td class="action-cell">
          <button type="button" class="quick-view-btn" data-hard-edit-authority="${esc(authority.id)}">${icon("edit")}</button>
          <button type="button" class="quick-view-btn" data-hard-toggle-authority="${esc(authority.id)}">${icon(authority.visible ? "eye-off" : "eye")}</button>
          <button type="button" class="quick-view-btn danger-inline-btn" data-hard-delete-authority="${esc(authority.id)}">${icon("trash")}</button>
        </td></tr>`).join("") : `<tr><td colspan="3"><div class="empty-state"><strong>لا توجد جهات تابعة</strong><p>أضف الجهات يدويًا ثم اربطها بأنواع الوثائق.</p></div></td></tr>`;
    }
    const typeBody = document.getElementById("hardDocTypeBody");
    typeBody.innerHTML = settings.types.length ? settings.types.map((type) => `
      <tr><td>${esc(type.name)}</td><td>${esc(catName(type.categoryId, settings))}</td><td>${esc(authorityName(type.authorityId, settings) || type.authority || "-")}</td><td>${type.visible ? "ظاهر" : "مخفي"}</td><td class="action-cell">
        <button type="button" class="quick-view-btn" data-hard-edit-type="${esc(type.id)}">${icon("edit")}</button>
        <button type="button" class="quick-view-btn" data-hard-toggle-type="${esc(type.id)}">${icon(type.visible ? "eye-off" : "eye")}</button>
        <button type="button" class="quick-view-btn danger-inline-btn" data-hard-delete-type="${esc(type.id)}">${icon("trash")}</button>
      </td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state"><strong>لا توجد أنواع وثائق</strong><p>أضف نوع وثيقة واربطه بتصنيف.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(panel);
  }

  function renderEstDocsView() {
    ensureSidebarAndView();
    const view = document.getElementById("establishmentDocumentsView");
    if (!view) return;
    const settings = getSettings();
    const docs = getDocs();
    view.innerHTML = `
      <div class="section-toolbar"><div><h2 class="section-title">وثائق المنشأة</h2><p class="section-description">إدارة وثائق المنشأة حسب التصنيف والنوع والجهة وتاريخ الانتهاء.</p></div><button type="button" class="primary-btn" id="hardAddEstDocBtn"><span data-icon="plus"></span>إضافة وثيقة</button></div>
      <article class="panel"><div class="table-wrap"><table class="compact-data-table establishment-docs-table"><thead><tr><th>التصنيف</th><th>نوع الوثيقة</th><th>رقم الوثيقة</th><th>الجهة</th><th>تاريخ البداية</th><th>تاريخ النهاية</th><th>المتبقي</th><th>المرفق</th><th>الإجراءات</th></tr></thead><tbody id="hardEstDocBody"></tbody></table></div></article>`;
    const body = document.getElementById("hardEstDocBody");
    body.innerHTML = docs.length ? docs.map((doc) => {
      const type = typeById(doc.typeId, settings);
      const categoryId = doc.categoryId || type?.categoryId || "";
      const authority = authorityName(doc.authorityId || type?.authorityId, settings) || doc.authority || type?.authority || "-";
      const attachment = doc.attachmentData ? `<button type="button" class="attachment-view-btn" data-hard-open-attachment="${esc(doc.id)}">عرض</button>` : (doc.attachmentId ? `<button type="button" class="attachment-view-btn" data-view-attachment="${esc(doc.attachmentId)}">عرض</button>` : "-");
      return `<tr><td>${esc(catName(categoryId, settings))}</td><td>${esc(type?.name || "-")}</td><td>${esc(doc.number || "-")}</td><td>${esc(authority)}</td><td>${formatDateSafe(doc.startDate)}</td><td>${formatDateSafe(doc.expiryDate)}</td><td>${remainingBadge(doc.expiryDate)}</td><td>${attachment}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-hard-edit-est-doc="${esc(doc.id)}">${icon("edit")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-hard-delete-est-doc="${esc(doc.id)}">${icon("trash")}</button></td></tr>`;
    }).join("") : `<tr><td colspan="9"><div class="empty-state"><strong>لا توجد وثائق منشأة</strong><p>أضف وثيقة من زر إضافة وثيقة.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(view);
  }

  function ensureModals() {
    if (!document.getElementById("hardDocCategoryModal")) {
      document.body.insertAdjacentHTML("beforeend", `<dialog class="modal small-modal" id="hardDocCategoryModal"><form id="hardDocCategoryForm"><div class="modal-head"><div><h2>تصنيف وثيقة</h2><p>أضف أو عدّل تصنيفًا للوثائق.</p></div><button type="button" class="icon-btn" data-hard-close="hardDocCategoryModal"><span data-icon="x"></span></button></div><div class="modal-body"><label><span>اسم التصنيف</span><input name="name" required /></label><label class="toggle-line"><input type="checkbox" name="visible" checked />إظهار التصنيف</label><input type="hidden" name="id" /></div><div class="modal-actions"><button type="button" class="secondary-btn" data-hard-close="hardDocCategoryModal">إلغاء</button><button type="submit" class="primary-btn">حفظ التصنيف</button></div></form></dialog>`);
    }
    if (!document.getElementById("hardDocAuthorityModal")) {
      document.body.insertAdjacentHTML("beforeend", `<dialog class="modal small-modal settings-entry-modal doc-authority-modal" id="hardDocAuthorityModal"><form id="hardDocAuthorityForm"><div class="modal-head"><div><h2>جهة تابعة</h2><p>أضف أو عدّل جهة تتبع لها الوثائق.</p></div><button type="button" class="icon-btn" data-hard-close="hardDocAuthorityModal"><span data-icon="x"></span></button></div><div class="modal-body authority-modal-body"><label class="site-field"><span>اسم الجهة</span><input name="name" required placeholder="مثال: وزارة التجارة" /></label><label class="site-toggle"><input type="checkbox" name="visible" checked /><span>إظهار الجهة</span></label><input type="hidden" name="id" /></div><div class="modal-actions"><button type="button" class="secondary-btn" data-hard-close="hardDocAuthorityModal">إلغاء</button><button type="submit" class="primary-btn">حفظ الجهة</button></div></form></dialog>`);
    }
    if (!document.getElementById("hardDocTypeModal")) {
      document.body.insertAdjacentHTML("beforeend", `<dialog class="modal small-modal" id="hardDocTypeModal"><form id="hardDocTypeForm"><div class="modal-head"><div><h2>نوع وثيقة</h2><p>اربط نوع الوثيقة بتصنيف وجهة تابعة محفوظة.</p></div><button type="button" class="icon-btn" data-hard-close="hardDocTypeModal"><span data-icon="x"></span></button></div><div class="modal-body form-grid form-grid-2"><label><span>اسم نوع الوثيقة</span><input name="name" required /></label><label><span>تصنيف الوثيقة</span><select name="categoryId" required></select></label><label class="span-all"><span>الجهة التابعة لها</span><select name="authorityId" required></select></label><label class="toggle-line span-all"><input type="checkbox" name="visible" checked />إظهار النوع</label><input type="hidden" name="id" /></div><div class="modal-actions"><button type="button" class="secondary-btn" data-hard-close="hardDocTypeModal">إلغاء</button><button type="submit" class="primary-btn">حفظ نوع الوثيقة</button></div></form></dialog>`);
    }
    if (!document.getElementById("hardEstDocModal")) {
      document.body.insertAdjacentHTML("beforeend", `<dialog class="modal establishment-document-hard-modal" id="hardEstDocModal"><form id="hardEstDocForm"><div class="modal-head"><div><h2>إضافة وثيقة منشأة</h2><p>اختر التصنيف والنوع ثم أدخل بيانات الوثيقة.</p></div><button type="button" class="icon-btn" data-hard-close="hardEstDocModal"><span data-icon="x"></span></button></div><div class="modal-body form-grid form-grid-2"><label><span>تصنيف الوثيقة</span><select name="categoryId" required></select></label><label><span>نوع الوثيقة</span><select name="typeId" required></select></label><label><span>رقم الوثيقة</span><input name="number" /></label><label><span>الجهة التابعة لها</span><select name="authorityId" required></select></label><label><span>تاريخ البداية</span><input type="date" name="startDate" /></label><label><span>تاريخ النهاية</span><input type="date" name="expiryDate" /></label><label><span>مرفق الوثيقة</span><span class="compact-file-control hard-file-control"><span data-icon="file"></span><span data-hard-file-label>إرفاق الوثيقة</span><input type="file" name="attachmentFile" accept="image/*,.pdf" /></span></label><label><span>المدة المتبقية</span><input name="remaining" readonly class="calculated-field" /></label><label class="span-all"><span>ملاحظات</span><textarea name="note" rows="3"></textarea></label><input type="hidden" name="id" /><input type="hidden" name="attachmentId" /><input type="hidden" name="attachmentName" /><input type="hidden" name="attachmentData" /></div><div class="modal-actions"><button type="button" class="secondary-btn" data-hard-close="hardEstDocModal">إلغاء</button><button type="submit" class="primary-btn">حفظ الوثيقة</button></div></form></dialog>`);
    }
    if (typeof hydrateIcons === "function") hydrateIcons(document.body);
  }

  function openCatModal(catId = "") {
    ensureModals();
    const settings = getSettings();
    const cat = settings.categories.find((item) => item.id === catId) || { id: "", name: "", visible: true };
    const form = document.getElementById("hardDocCategoryForm");
    form.reset();
    form.elements.id.value = cat.id || "";
    form.elements.name.value = cat.name || "";
    form.elements.visible.checked = cat.visible !== false;
    document.getElementById("hardDocCategoryModal").showModal();
  }

  function openTypeModal(typeId = "") {
    ensureModals();
    const settings = getSettings();
    const type = settings.types.find((item) => item.id === typeId) || { id: "", name: "", categoryId: "", authorityId: "", authority: "", visible: true };
    const form = document.getElementById("hardDocTypeForm");
    form.reset();
    form.elements.id.value = type.id || "";
    form.elements.name.value = type.name || "";
    form.elements.categoryId.innerHTML = `<option value="">اختر التصنيف</option>${settings.categories.map((cat) => `<option value="${esc(cat.id)}">${esc(cat.name)}</option>`).join("")}`;
    form.elements.categoryId.value = type.categoryId || "";
    form.elements.authorityId.innerHTML = `<option value="">اختر الجهة</option>${visibleAuthorities(settings).map((authority) => `<option value="${esc(authority.id)}">${esc(authority.name)}</option>`).join("")}`;
    form.elements.authorityId.value = type.authorityId || "";
    form.elements.visible.checked = type.visible !== false;
    document.getElementById("hardDocTypeModal").showModal();
  }

  function openAuthorityModal(authorityId = "") {
    ensureModals();
    const settings = getSettings();
    const authority = settings.authorities.find((item) => item.id === authorityId) || { id: "", name: "", visible: true };
    const form = document.getElementById("hardDocAuthorityForm");
    form.reset();
    form.elements.id.value = authority.id || "";
    form.elements.name.value = authority.name || "";
    form.elements.visible.checked = authority.visible !== false;
    document.getElementById("hardDocAuthorityModal").showModal();
  }

  function fillEstTypeOptions(form, selected = "") {
    const settings = getSettings();
    const categoryId = form.elements.categoryId.value;
    const types = visibleTypes(settings).filter((type) => type.categoryId === categoryId);
    form.elements.typeId.innerHTML = `<option value="">اختر نوع الوثيقة</option>${types.map((type) => `<option value="${esc(type.id)}">${esc(type.name)}</option>`).join("")}`;
    if (selected && types.some((type) => type.id === selected)) form.elements.typeId.value = selected;
    const type = typeById(form.elements.typeId.value, settings);
    if (form.elements.authorityId) {
      form.elements.authorityId.innerHTML = `<option value="">اختر الجهة</option>${visibleAuthorities(settings).map((authority) => `<option value="${esc(authority.id)}">${esc(authority.name)}</option>`).join("")}`;
      form.elements.authorityId.value = type?.authorityId || "";
    }
  }

  function refreshRemaining(form) {
    const info = remainingInfo(form.elements.expiryDate.value);
    form.elements.remaining.value = info.text || "";
    form.elements.remaining.className = `calculated-field est-doc-input-${info.state}`;
  }

  function openEstDocModal(docId = "") {
    ensureModals();
    const settings = getSettings();
    const doc = getDocs().find((item) => item.id === docId) || { id: "", categoryId: "", typeId: "", number: "", startDate: "", expiryDate: "", authorityId: "", authority: "", attachmentId: "", attachmentName: "", attachmentData: "", note: "" };
    const form = document.getElementById("hardEstDocForm");
    form.reset();
    const type = typeById(doc.typeId, settings);
    form.elements.categoryId.innerHTML = `<option value="">اختر التصنيف</option>${visibleCats(settings).map((cat) => `<option value="${esc(cat.id)}">${esc(cat.name)}</option>`).join("")}`;
    form.elements.categoryId.value = doc.categoryId || type?.categoryId || "";
    fillEstTypeOptions(form, doc.typeId || "");
    form.elements.id.value = doc.id || "";
    form.elements.number.value = doc.number || "";
    form.elements.startDate.value = doc.startDate || "";
    form.elements.expiryDate.value = doc.expiryDate || "";
    if (form.elements.authorityId) {
      form.elements.authorityId.innerHTML = `<option value="">اختر الجهة</option>${visibleAuthorities(settings).map((authority) => `<option value="${esc(authority.id)}">${esc(authority.name)}</option>`).join("")}`;
      form.elements.authorityId.value = doc.authorityId || type?.authorityId || "";
    }
    form.elements.attachmentId.value = doc.attachmentId || "";
    form.elements.attachmentName.value = doc.attachmentName || "";
    form.elements.attachmentData.value = doc.attachmentData || "";
    form.elements.note.value = doc.note || "";
    const label = form.querySelector("[data-hard-file-label]");
    if (label) label.textContent = doc.attachmentName || doc.attachmentId ? "تم الإرفاق" : "إرفاق الوثيقة";
    refreshRemaining(form);
    document.getElementById("hardEstDocModal").showModal();
  }

  function fileToDataURL(file) {
    return new Promise((resolve) => {
      if (!file) return resolve("");
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ""));
      reader.onerror = () => resolve("");
      reader.readAsDataURL(file);
    });
  }

  async function saveEstDocForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const settings = getSettings();
    const type = typeById(form.elements.typeId.value, settings);
    if (!form.elements.categoryId.value) return toast("اختر تصنيف الوثيقة");
    if (!form.elements.typeId.value) return toast("اختر نوع الوثيقة");
    const docs = getDocs();
    const docId = form.elements.id.value || id("est-doc");
    let attachmentId = form.elements.attachmentId.value || "";
    let attachmentName = form.elements.attachmentName.value || "";
    let attachmentData = form.elements.attachmentData.value || "";
    const file = form.elements.attachmentFile.files?.[0];
    if (file) {
      attachmentName = file.name || "مرفق";
      if (typeof saveAttachment === "function") {
        try { attachmentId = await saveAttachment(file, "establishment-document"); } catch {}
      }
      if (!attachmentId) attachmentData = await fileToDataURL(file);
    }
    const data = normalizeDoc({
      id: docId,
      categoryId: form.elements.categoryId.value || type?.categoryId || "",
      typeId: form.elements.typeId.value,
      number: form.elements.number.value,
      startDate: form.elements.startDate.value,
      expiryDate: form.elements.expiryDate.value,
      authorityId: form.elements.authorityId?.value || type?.authorityId || "",
      authority: authorityName(form.elements.authorityId?.value || type?.authorityId, settings),
      attachmentId,
      attachmentName,
      attachmentData,
      note: form.elements.note.value
    });
    const index = docs.findIndex((item) => item.id === docId);
    if (index >= 0) docs[index] = data; else docs.unshift(data);
    setDocs(docs);
    document.getElementById("hardEstDocModal")?.close();
    renderEstDocsView();
    toast("تم حفظ وثيقة المنشأة");
  }

  function wire() {
    ensureSidebarAndView();
    ensureSettingsPanel();
    ensureModals();
    const catForm = document.getElementById("hardDocCategoryForm");
    if (catForm && !catForm.dataset.hardWired) {
      catForm.dataset.hardWired = "1";
      catForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const settings = getSettings();
        const catId = form.elements.id.value || id("doc-cat");
        const item = { id: catId, name: trim(form.elements.name.value), visible: form.elements.visible.checked };
        if (!item.name) return toast("اكتب اسم التصنيف");
        const index = settings.categories.findIndex((cat) => cat.id === catId);
        if (index >= 0) settings.categories[index] = item; else settings.categories.push(item);
        setSettings(settings);
        document.getElementById("hardDocCategoryModal")?.close();
        renderDocSettings();
        toast("تم حفظ التصنيف");
      });
    }
    const authorityForm = document.getElementById("hardDocAuthorityForm");
    if (authorityForm && !authorityForm.dataset.hardWired) {
      authorityForm.dataset.hardWired = "1";
      authorityForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const settings = getSettings();
        const authorityId = form.elements.id.value || id("doc-authority");
        const item = { id: authorityId, name: trim(form.elements.name.value), visible: form.elements.visible.checked };
        if (!item.name) return toast("اكتب اسم الجهة");
        const index = settings.authorities.findIndex((authority) => authority.id === authorityId);
        if (index >= 0) settings.authorities[index] = item; else settings.authorities.push(item);
        setSettings(settings);
        document.getElementById("hardDocAuthorityModal")?.close();
        renderDocSettings();
        toast("تم حفظ الجهة");
      });
    }
    const typeForm = document.getElementById("hardDocTypeForm");
    if (typeForm && !typeForm.dataset.hardWired) {
      typeForm.dataset.hardWired = "1";
      typeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const settings = getSettings();
        const typeId = form.elements.id.value || id("doc-type");
        const item = { id: typeId, name: trim(form.elements.name.value), categoryId: form.elements.categoryId.value, authorityId: form.elements.authorityId.value, authority: authorityName(form.elements.authorityId.value, settings), visible: form.elements.visible.checked };
        if (!item.name) return toast("اكتب اسم نوع الوثيقة");
        if (!item.categoryId) return toast("اختر تصنيف الوثيقة");
        if (!item.authorityId) return toast("اختر الجهة التابعة");
        const index = settings.types.findIndex((type) => type.id === typeId);
        if (index >= 0) settings.types[index] = item; else settings.types.push(item);
        setSettings(settings);
        document.getElementById("hardDocTypeModal")?.close();
        renderDocSettings();
        renderEstDocsView();
        toast("تم حفظ نوع الوثيقة");
      });
    }
    const estForm = document.getElementById("hardEstDocForm");
    if (estForm && !estForm.dataset.hardWired) {
      estForm.dataset.hardWired = "1";
      estForm.addEventListener("submit", saveEstDocForm);
      estForm.elements.categoryId.addEventListener("change", () => { estForm.elements.typeId.value = ""; fillEstTypeOptions(estForm); });
      estForm.elements.typeId.addEventListener("change", () => { const type = typeById(estForm.elements.typeId.value); if (estForm.elements.authorityId) estForm.elements.authorityId.value = type?.authorityId || ""; });
      estForm.elements.expiryDate.addEventListener("input", () => refreshRemaining(estForm));
      estForm.elements.attachmentFile.addEventListener("change", () => { const file = estForm.elements.attachmentFile.files?.[0]; const label = estForm.querySelector("[data-hard-file-label]"); if (label) label.textContent = file?.name || "إرفاق الوثيقة"; });
    }
  }

  document.addEventListener("click", (event) => {
    const viewBtn = event.target.closest('[data-view="establishmentDocuments"]');
    if (viewBtn) { event.preventDefault(); event.stopImmediatePropagation(); setView("establishmentDocuments"); return; }
    const settingsBtn = event.target.closest('[data-settings-section="documentTypes"]');
    if (settingsBtn) { event.preventDefault(); event.stopImmediatePropagation(); document.querySelectorAll("#settingsNav button").forEach((btn) => btn.classList.toggle("active", btn === settingsBtn)); document.querySelectorAll("[data-settings-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.settingsPanel === "documentTypes")); renderDocSettings(); return; }
    if (event.target.closest("#hardAddDocCategoryBtn, #addDocumentCategoryBtn")) { event.preventDefault(); event.stopImmediatePropagation(); openCatModal(); return; }
    if (event.target.closest("#hardAddDocAuthorityBtn")) { event.preventDefault(); event.stopImmediatePropagation(); openAuthorityModal(); return; }
    if (event.target.closest("#hardAddDocTypeBtn, #addDocumentTypeBtn")) { event.preventDefault(); event.stopImmediatePropagation(); openTypeModal(); return; }
    if (event.target.closest("#hardAddEstDocBtn, #addEstablishmentDocumentBtn")) { event.preventDefault(); event.stopImmediatePropagation(); openEstDocModal(); return; }
    const editCat = event.target.closest("[data-hard-edit-cat]");
    if (editCat) { event.preventDefault(); openCatModal(editCat.dataset.hardEditCat); return; }
    const toggleCat = event.target.closest("[data-hard-toggle-cat]");
    if (toggleCat) { event.preventDefault(); const settings = getSettings(); const item = settings.categories.find((cat) => cat.id === toggleCat.dataset.hardToggleCat); if (item) item.visible = !item.visible; setSettings(settings); renderDocSettings(); return; }
    const deleteCat = event.target.closest("[data-hard-delete-cat]");
    if (deleteCat) { event.preventDefault(); const settings = getSettings(); settings.categories = settings.categories.filter((cat) => cat.id !== deleteCat.dataset.hardDeleteCat); settings.types = settings.types.map((type) => type.categoryId === deleteCat.dataset.hardDeleteCat ? { ...type, categoryId: "" } : type); setSettings(settings); renderDocSettings(); return; }
    const editAuthority = event.target.closest("[data-hard-edit-authority]");
    if (editAuthority) { event.preventDefault(); event.stopImmediatePropagation(); openAuthorityModal(editAuthority.dataset.hardEditAuthority); return; }
    const toggleAuthority = event.target.closest("[data-hard-toggle-authority]");
    if (toggleAuthority) { event.preventDefault(); const settings = getSettings(); const item = settings.authorities.find((authority) => authority.id === toggleAuthority.dataset.hardToggleAuthority); if (item) item.visible = !item.visible; setSettings(settings); renderDocSettings(); return; }
    const deleteAuthority = event.target.closest("[data-hard-delete-authority]");
    if (deleteAuthority) { event.preventDefault(); const settings = getSettings(); settings.authorities = settings.authorities.filter((authority) => authority.id !== deleteAuthority.dataset.hardDeleteAuthority); settings.types = settings.types.map((type) => type.authorityId === deleteAuthority.dataset.hardDeleteAuthority ? { ...type, authorityId: "", authority: "" } : type); setSettings(settings); renderDocSettings(); renderEstDocsView(); return; }
    const editType = event.target.closest("[data-hard-edit-type], [data-edit-doc-type]");
    if (editType) { event.preventDefault(); event.stopImmediatePropagation(); openTypeModal(editType.dataset.hardEditType || editType.dataset.editDocType); return; }
    const toggleType = event.target.closest("[data-hard-toggle-type]");
    if (toggleType) { event.preventDefault(); const settings = getSettings(); const item = settings.types.find((type) => type.id === toggleType.dataset.hardToggleType); if (item) item.visible = !item.visible; setSettings(settings); renderDocSettings(); return; }
    const deleteType = event.target.closest("[data-hard-delete-type]");
    if (deleteType) { event.preventDefault(); const settings = getSettings(); settings.types = settings.types.filter((type) => type.id !== deleteType.dataset.hardDeleteType); setSettings(settings); renderDocSettings(); renderEstDocsView(); return; }
    const editDoc = event.target.closest("[data-hard-edit-est-doc], [data-edit-est-doc]");
    if (editDoc) { event.preventDefault(); event.stopImmediatePropagation(); openEstDocModal(editDoc.dataset.hardEditEstDoc || editDoc.dataset.editEstDoc); return; }
    const deleteDoc = event.target.closest("[data-hard-delete-est-doc], [data-delete-est-doc]");
    if (deleteDoc) { event.preventDefault(); const docId = deleteDoc.dataset.hardDeleteEstDoc || deleteDoc.dataset.deleteEstDoc; setDocs(getDocs().filter((doc) => doc.id !== docId)); renderEstDocsView(); return; }
    const openAttachment = event.target.closest("[data-hard-open-attachment]");
    if (openAttachment) { event.preventDefault(); const doc = getDocs().find((item) => item.id === openAttachment.dataset.hardOpenAttachment); if (doc?.attachmentData) window.open(doc.attachmentData, "_blank"); return; }
    const close = event.target.closest("[data-hard-close]");
    if (close) { event.preventDefault(); document.getElementById(close.dataset.hardClose)?.close(); return; }
  }, true);

  const oldSwitchView = typeof switchView === "function" ? switchView : null;
  if (oldSwitchView && !window.__hardEstDocsSwitchView) {
    window.__hardEstDocsSwitchView = true;
    switchView = function(name) {
      if (name === "establishmentDocuments") { setView(name); return; }
      oldSwitchView(name);
      if (name === "settings") setTimeout(() => { ensureSettingsPanel(); renderDocSettings(); }, 0);
    };
  }

  const boot = () => { try { wire(); renderDocSettings(); if (document.getElementById("establishmentDocumentsView")?.classList.contains("active")) renderEstDocsView(); } catch (error) { console.warn("establishment documents hard fix", error); } };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  window.addEventListener("load", () => setTimeout(boot, 0));
})();


/* =========================================================
   Branches + settings departments + establishment document filters
   تنفيذ الفروع ونقل الأقسام داخل الإعدادات وربط وثائق المنشأة بالفروع
   ========================================================= */
(function branchesAndOrgDocumentsPatch(){
  const BRANCH_KEY = "nawah-branches";
  const DOC_KEY = "nawah-document-type-settings";
  const EST_KEY = "nawah-establishment-documents";
  const esc = (value) => typeof escapeHtml === "function" ? escapeHtml(value ?? "") : String(value ?? "").replace(/[&<>"]/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[ch]));
  const icon = (name) => typeof iconSvg === "function" ? iconSvg(name) : "";
  const toast = (msg) => typeof showToast === "function" ? showToast(msg) : console.log(msg);
  const uid = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const clean = (v) => String(v || "").trim();
  const getLS = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
  const setLS = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };

  function normalizeBranch(item = {}, index = 0) {
    return {
      id: item.id || uid(`branch-${index}`),
      name: clean(item.name || item.title || item.branchName),
      commercialRegisterNumber: clean(item.commercialRegisterNumber || item.crNumber),
      unifiedNumber: clean(item.unifiedNumber),
      commercialRegisterDocId: item.commercialRegisterDocId || "",
      unifiedNumberDocId: item.unifiedNumberDocId || "",
      visible: item.visible !== false,
      createdAt: item.createdAt || new Date().toISOString()
    };
  }
  function getBranches() { return (Array.isArray(getLS(BRANCH_KEY, [])) ? getLS(BRANCH_KEY, []) : []).map(normalizeBranch).filter(b => b.name); }
  function saveBranches(branches) { setLS(BRANCH_KEY, (branches || []).map(normalizeBranch).filter(b => b.name)); }
  function visibleBranches() { return getBranches().filter(b => b.visible !== false); }
  function branchName(id) { return getBranches().find(b => b.id === id)?.name || "—"; }

  function normalizeDocSettings(raw = {}) {
    const categories = Array.isArray(raw.categories) ? raw.categories : [];
    const authorities = Array.isArray(raw.authorities) ? raw.authorities : [];
    const types = Array.isArray(raw.types) ? raw.types : [];
    return {
      categories: categories.map((item, index) => ({ id: item.id || uid(`doc-cat-${index}`), name: clean(item.name), visible: item.visible !== false })).filter(i => i.name),
      authorities: authorities.map((item, index) => ({ id: item.id || uid(`doc-authority-${index}`), name: clean(item.name), visible: item.visible !== false })).filter(i => i.name),
      types: types.map((item, index) => ({ id: item.id || uid(`doc-type-${index}`), name: clean(item.name), categoryId: item.categoryId || "", authorityId: item.authorityId || "", authority: clean(item.authority), visible: item.visible !== false })).filter(i => i.name)
    };
  }
  function getDocSettings() { return normalizeDocSettings(getLS(DOC_KEY, { categories: [], authorities: [], types: [] })); }
  function getDocs() { return (Array.isArray(getLS(EST_KEY, [])) ? getLS(EST_KEY, []) : []).map((doc, index) => ({
    id: doc.id || uid(`est-doc-${index}`),
    branchId: doc.branchId || "",
    categoryId: doc.categoryId || "",
    typeId: doc.typeId || "",
    authorityId: doc.authorityId || "",
    authority: clean(doc.authority),
    title: clean(doc.title || doc.name || doc.documentName),
    number: clean(doc.number),
    startDate: doc.startDate || doc.issueDate || "",
    expiryDate: doc.expiryDate || doc.endDate || "",
    attachmentId: doc.attachmentId || "",
    attachmentName: doc.attachmentName || "",
    attachmentData: doc.attachmentData || "",
    note: clean(doc.note)
  })); }
  function saveDocs(docs) { setLS(EST_KEY, docs || []); }
  function categoryById(id, settings = getDocSettings()) { return settings.categories.find(x => x.id === id) || null; }
  function typeById(id, settings = getDocSettings()) { return settings.types.find(x => x.id === id) || null; }
  function authorityById(id, settings = getDocSettings()) { return settings.authorities.find(x => x.id === id) || null; }
  function categoryName(id, settings = getDocSettings()) { return categoryById(id, settings)?.name || "—"; }
  function typeName(id, settings = getDocSettings()) { return typeById(id, settings)?.name || "—"; }
  function authorityName(id, settings = getDocSettings()) { return authorityById(id, settings)?.name || "—"; }
  function visibleCategories(settings = getDocSettings()) { return settings.categories.filter(x => x.visible !== false); }
  function visibleAuthorities(settings = getDocSettings()) { return settings.authorities.filter(x => x.visible !== false); }
  function visibleTypes(settings = getDocSettings()) { return settings.types.filter(x => x.visible !== false); }

  function dateText(value) { return value ? (typeof formatDate === "function" ? formatDate(value) : value) : "—"; }
  function remainingInfo(value) {
    if (!value) return { state: "neutral", text: "غير محدد" };
    const end = new Date(`${value}T12:00:00`);
    if (Number.isNaN(end.getTime())) return { state: "neutral", text: "غير محدد" };
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
    const days = Math.ceil((end - today) / 86400000);
    if (days < 0) return { state: "expired", text: "منتهية" };
    if (days <= 30) return { state: "warning", text: `باقي ${days} يوم !` };
    return { state: "valid", text: `باقي ${days} يوم` };
  }
  function remainingBadge(value) { const info = remainingInfo(value); return `<span class="est-doc-status ${info.state}">${esc(info.text)}</span>`; }

  function ensureBranchPanel() {
    const settingsNav = document.getElementById("settingsNav");
    if (settingsNav && !settingsNav.querySelector('[data-settings-section="branches"]')) {
      const companyBtn = settingsNav.querySelector('[data-settings-section="company"]');
      const html = `<button type="button" data-settings-section="branches"><span data-icon="building"></span>الفروع</button>`;
      companyBtn ? companyBtn.insertAdjacentHTML("afterend", html) : settingsNav.insertAdjacentHTML("afterbegin", html);
    }
    const host = document.querySelector(".settings-panel") || document.querySelector("#settingsView .panel");
    if (host && !host.querySelector('[data-settings-panel="branches"]')) {
      const companyPanel = host.querySelector('[data-settings-panel="company"]');
      const html = `<section class="settings-section" data-settings-panel="branches"></section>`;
      companyPanel ? companyPanel.insertAdjacentHTML("afterend", html) : host.insertAdjacentHTML("beforeend", html);
    }
  }

  function ensureDepartmentsInsideSettings() {
    const settingsNav = document.getElementById("settingsNav");
    if (settingsNav && !settingsNav.querySelector('[data-settings-section="departmentsSettings"]')) {
      const docBtn = settingsNav.querySelector('[data-settings-section="documentTypes"]');
      const html = `<button type="button" data-settings-section="departmentsSettings"><span data-icon="grid"></span>الأقسام</button>`;
      docBtn ? docBtn.insertAdjacentHTML("afterend", html) : settingsNav.insertAdjacentHTML("beforeend", html);
    }
    const host = document.querySelector(".settings-panel") || document.querySelector("#settingsView .panel");
    if (host && !host.querySelector('[data-settings-panel="departmentsSettings"]')) {
      const docPanel = host.querySelector('[data-settings-panel="documentTypes"]');
      const html = `<section class="settings-section" data-settings-panel="departmentsSettings"><div class="panel-head"><div><h3>الأقسام</h3><p>إدارة الهيكل الإداري: الإدارة ثم القسم ثم المهنة.</p></div></div><div id="settingsDepartmentMount"></div></section>`;
      docPanel ? docPanel.insertAdjacentHTML("afterend", html) : host.insertAdjacentHTML("beforeend", html);
    }
    const mainDeptBtn = document.querySelector('.main-nav [data-view="departments"]');
    if (mainDeptBtn) mainDeptBtn.style.display = "none";
  }

  function activateSettingsSection(section) {
    ensureBranchPanel(); ensureDepartmentsInsideSettings(); ensureEmployeeBranchField(); populateBranchSelects();
    document.querySelectorAll("#settingsNav button").forEach(btn => btn.classList.toggle("active", btn.dataset.settingsSection === section));
    document.querySelectorAll("[data-settings-panel]").forEach(panel => panel.classList.toggle("active", panel.dataset.settingsPanel === section));
    if (section === "branches") renderBranchesPanel();
    if (section === "departmentsSettings") renderDepartmentsSettingsPanel();
    if (typeof hydrateIcons === "function") hydrateIcons(document.getElementById("settingsView"));
  }

  function renderBranchesPanel() {
    ensureBranchPanel();
    const panel = document.querySelector('[data-settings-panel="branches"]');
    if (!panel) return;
    const branches = getBranches();
    panel.innerHTML = `<div class="panel-head"><div><h3>الفروع</h3><p>أضف فروع المنشأة واربطها بالموظفين ووثائق المنشأة.</p></div><button type="button" class="primary-btn" id="addBranchBtn"><span data-icon="plus"></span>إضافة فرع</button></div>
      <div class="table-wrap"><table class="compact-data-table"><thead><tr><th>مسمى الفرع</th><th>رقم السجل التجاري</th><th>الرقم الموحد</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody id="branchesTableBody"></tbody></table></div>`;
    const body = panel.querySelector("#branchesTableBody");
    body.innerHTML = branches.length ? branches.map(branch => `<tr><td>${esc(branch.name)}</td><td>${esc(branch.commercialRegisterNumber || "—")}</td><td>${esc(branch.unifiedNumber || "—")}</td><td>${branch.visible !== false ? "ظاهر" : "مخفي"}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-edit-branch="${esc(branch.id)}" title="تعديل">${icon("edit")}</button><button type="button" class="quick-view-btn" data-toggle-branch="${esc(branch.id)}" title="إخفاء/إظهار">${icon(branch.visible !== false ? "eye-off" : "eye")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-branch="${esc(branch.id)}" title="حذف">${icon("trash")}</button></td></tr>`).join("") : `<tr><td colspan="5"><div class="empty-state"><strong>لا توجد فروع</strong><p>أضف الفروع يدويًا حسب منشأتك.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(panel);
  }

  function renderDepartmentsSettingsPanel() {
    ensureDepartmentsInsideSettings();
    const mount = document.getElementById("settingsDepartmentMount");
    const grid = document.getElementById("departmentGrid");
    if (mount && grid && grid.parentElement !== mount) mount.appendChild(grid);
    if (typeof renderDepartments === "function") renderDepartments();
  }

  function ensureBranchModal() {
    if (document.getElementById("branchModal")) return;
    document.body.insertAdjacentHTML("beforeend", `<dialog class="modal small-modal branch-modal" id="branchModal"><form id="branchForm"><div class="modal-head"><div><h2>فرع</h2><p>أدخل بيانات الفرع واربط أرقامه بوثائق المنشأة عند الحاجة.</p></div><button type="button" class="icon-btn" data-close-branch-modal><span data-icon="x"></span></button></div><div class="modal-body form-grid form-grid-2"><label><span>مسمى الفرع</span><input name="name" required placeholder="مثال: فرع الرياض" /></label><label><span>الحالة</span><select name="visible"><option value="1">ظاهر</option><option value="0">مخفي</option></select></label><label><span>وثيقة السجل التجاري</span><select name="commercialRegisterDocId"></select></label><label><span>رقم السجل التجاري</span><input name="commercialRegisterNumber" /></label><label><span>وثيقة الرقم الموحد</span><select name="unifiedNumberDocId"></select></label><label><span>الرقم الموحد</span><input name="unifiedNumber" /></label><input type="hidden" name="id" /></div><div class="modal-actions"><button type="button" class="secondary-btn" data-close-branch-modal>إلغاء</button><button type="submit" class="primary-btn">حفظ الفرع</button></div></form></dialog>`);
    if (typeof hydrateIcons === "function") hydrateIcons(document.getElementById("branchModal"));
    const form = document.getElementById("branchForm");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const id = data.id || uid("branch");
      const branch = { id, name: clean(data.name), visible: data.visible !== "0", commercialRegisterNumber: clean(data.commercialRegisterNumber), unifiedNumber: clean(data.unifiedNumber), commercialRegisterDocId: data.commercialRegisterDocId || "", unifiedNumberDocId: data.unifiedNumberDocId || "" };
      if (!branch.name) return toast("أدخل مسمى الفرع");
      const branches = getBranches();
      const index = branches.findIndex(item => item.id === id);
      if (index >= 0) branches[index] = { ...branches[index], ...branch }; else branches.push(branch);
      saveBranches(branches);
      document.getElementById("branchModal")?.close();
      renderBranchesPanel(); populateBranchSelects(); renderBranchEstDocsView();
      toast("تم حفظ الفرع");
    });
    form.elements.commercialRegisterDocId.addEventListener("change", () => fillBranchNumberFromDoc("commercialRegisterDocId", "commercialRegisterNumber"));
    form.elements.unifiedNumberDocId.addEventListener("change", () => fillBranchNumberFromDoc("unifiedNumberDocId", "unifiedNumber"));
  }

  function fillBranchNumberFromDoc(selectName, inputName) {
    const form = document.getElementById("branchForm");
    const doc = getDocs().find(item => item.id === form.elements[selectName].value);
    if (doc && form.elements[inputName] && !form.elements[inputName].value) form.elements[inputName].value = doc.number || "";
  }

  function documentOptions(selected = "") {
    const settings = getDocSettings();
    return `<option value="">بدون ربط</option>${getDocs().map(doc => {
      const type = typeById(doc.typeId, settings);
      const label = [type?.name, doc.title, doc.number].filter(Boolean).join(" - ") || "وثيقة";
      return `<option value="${esc(doc.id)}"${doc.id === selected ? " selected" : ""}>${esc(label)}</option>`;
    }).join("")}`;
  }

  function openBranchModal(id = "") {
    ensureBranchModal();
    const modal = document.getElementById("branchModal");
    const form = document.getElementById("branchForm");
    const branch = getBranches().find(item => item.id === id) || { id: "", name: "", visible: true, commercialRegisterNumber: "", unifiedNumber: "", commercialRegisterDocId: "", unifiedNumberDocId: "" };
    form.reset();
    form.elements.id.value = branch.id || "";
    form.elements.name.value = branch.name || "";
    form.elements.visible.value = branch.visible === false ? "0" : "1";
    form.elements.commercialRegisterNumber.value = branch.commercialRegisterNumber || "";
    form.elements.unifiedNumber.value = branch.unifiedNumber || "";
    form.elements.commercialRegisterDocId.innerHTML = documentOptions(branch.commercialRegisterDocId);
    form.elements.unifiedNumberDocId.innerHTML = documentOptions(branch.unifiedNumberDocId);
    modal.showModal();
  }

  function ensureEmployeeBranchField() {
    const form = document.getElementById("employeeForm");
    if (!form || form.elements.branch) return;
    const employmentPanel = document.querySelector('[data-section-panel="employment"] .form-grid');
    const depLabel = form.elements.department?.closest("label");
    const html = `<label class="employee-branch-field"><span>الفرع</span><select name="branch"><option value="">بدون فرع</option></select></label>`;
    depLabel ? depLabel.insertAdjacentHTML("afterend", html) : employmentPanel?.insertAdjacentHTML("afterbegin", html);
  }
  function populateBranchSelects() {
    const opts = `<option value="">بدون فرع</option>${visibleBranches().map(branch => `<option value="${esc(branch.id)}">${esc(branch.name)}</option>`).join("")}`;
    document.querySelectorAll('select[name="branch"], select[data-branch-filter], select[name="branchId"]').forEach(select => {
      const value = select.value;
      select.innerHTML = opts;
      if ([...select.options].some(opt => opt.value === value)) select.value = value;
    });
  }

  function ensureEstDocModal() {
    if (document.getElementById("branchEstDocModal")) return;
    document.body.insertAdjacentHTML("beforeend", `<dialog class="modal establishment-document-hard-modal" id="branchEstDocModal"><form id="branchEstDocForm"><div class="modal-head"><div><h2>إضافة وثيقة منشأة</h2><p>اربط الوثيقة بالفرع والتصنيف والنوع والجهة.</p></div><button type="button" class="icon-btn" data-close-branch-estdoc><span data-icon="x"></span></button></div><div class="modal-body form-grid form-grid-2"><label><span>الفرع</span><select name="branchId"></select></label><label><span>تصنيف الوثيقة</span><select name="categoryId" required></select></label><label><span>نوع الوثيقة</span><select name="typeId" required></select></label><label><span>الجهة التابعة لها</span><select name="authorityId" required></select></label><label><span>مسمى الوثيقة</span><input name="title" placeholder="مثال: سجل تجاري فرع الرياض" /></label><label><span>رقم الوثيقة</span><input name="number" /></label><label><span>تاريخ البداية</span><input type="date" name="startDate" /></label><label><span>تاريخ النهاية</span><input type="date" name="expiryDate" /></label><label><span>مرفق الوثيقة</span><span class="compact-file-control hard-file-control"><span data-icon="file"></span><span data-branch-file-label>إرفاق الوثيقة</span><input type="file" name="attachmentFile" accept="image/*,.pdf" /></span></label><label><span>المدة المتبقية</span><input name="remaining" readonly class="calculated-field" /></label><label class="span-all"><span>ملاحظات</span><textarea name="note" rows="3"></textarea></label><input type="hidden" name="id" /><input type="hidden" name="attachmentData" /><input type="hidden" name="attachmentName" /><input type="hidden" name="attachmentId" /></div><div class="modal-actions"><button type="button" class="secondary-btn" data-close-branch-estdoc>إلغاء</button><button type="submit" class="primary-btn">حفظ الوثيقة</button></div></form></dialog>`);
    if (typeof hydrateIcons === "function") hydrateIcons(document.getElementById("branchEstDocModal"));
    const form = document.getElementById("branchEstDocForm");
    form.elements.categoryId.addEventListener("change", () => { fillEstTypeOptions(); form.elements.typeId.value = ""; });
    form.elements.typeId.addEventListener("change", () => { const type = typeById(form.elements.typeId.value); if (type?.authorityId) form.elements.authorityId.value = type.authorityId; });
    form.elements.expiryDate.addEventListener("input", () => form.elements.remaining.value = remainingInfo(form.elements.expiryDate.value).text);
    form.elements.attachmentFile.addEventListener("change", () => { const file = form.elements.attachmentFile.files?.[0]; const label = form.querySelector("[data-branch-file-label]"); if (label) label.textContent = file?.name || "إرفاق الوثيقة"; });
    form.addEventListener("submit", saveEstDocFromBranchModal);
  }

  function fillEstCategoryOptions(selected = "") {
    const form = document.getElementById("branchEstDocForm"); if (!form) return;
    const settings = getDocSettings();
    form.elements.categoryId.innerHTML = `<option value="">اختر التصنيف</option>${visibleCategories(settings).map(cat => `<option value="${esc(cat.id)}"${cat.id === selected ? " selected" : ""}>${esc(cat.name)}</option>`).join("")}`;
  }
  function fillAuthorityOptions(selected = "") {
    const form = document.getElementById("branchEstDocForm"); if (!form) return;
    const settings = getDocSettings();
    form.elements.authorityId.innerHTML = `<option value="">اختر الجهة</option>${visibleAuthorities(settings).map(auth => `<option value="${esc(auth.id)}"${auth.id === selected ? " selected" : ""}>${esc(auth.name)}</option>`).join("")}`;
  }
  function fillEstTypeOptions(selected = "") {
    const form = document.getElementById("branchEstDocForm"); if (!form) return;
    const settings = getDocSettings();
    const categoryId = form.elements.categoryId.value;
    const types = visibleTypes(settings).filter(type => !categoryId || type.categoryId === categoryId);
    form.elements.typeId.innerHTML = `<option value="">اختر النوع</option>${types.map(type => `<option value="${esc(type.id)}"${type.id === selected ? " selected" : ""}>${esc(type.name)}</option>`).join("")}`;
  }
  function fillBranchOptions(selected = "") {
    const form = document.getElementById("branchEstDocForm"); if (!form) return;
    form.elements.branchId.innerHTML = `<option value="">المنشأة الرئيسية</option>${visibleBranches().map(branch => `<option value="${esc(branch.id)}"${branch.id === selected ? " selected" : ""}>${esc(branch.name)}</option>`).join("")}`;
  }
  function openBranchEstDocModal(id = "") {
    ensureEstDocModal();
    const form = document.getElementById("branchEstDocForm");
    const settings = getDocSettings();
    const doc = getDocs().find(item => item.id === id) || { id: "", branchId: "", categoryId: "", typeId: "", authorityId: "", title: "", number: "", startDate: "", expiryDate: "", attachmentData: "", attachmentName: "", attachmentId: "", note: "" };
    const type = typeById(doc.typeId, settings);
    form.reset();
    form.elements.id.value = doc.id || "";
    fillBranchOptions(doc.branchId);
    fillEstCategoryOptions(doc.categoryId || type?.categoryId || "");
    fillAuthorityOptions(doc.authorityId || type?.authorityId || "");
    fillEstTypeOptions(doc.typeId || "");
    form.elements.branchId.value = doc.branchId || "";
    form.elements.categoryId.value = doc.categoryId || type?.categoryId || "";
    fillEstTypeOptions(doc.typeId || "");
    form.elements.typeId.value = doc.typeId || "";
    form.elements.authorityId.value = doc.authorityId || type?.authorityId || "";
    form.elements.title.value = doc.title || "";
    form.elements.number.value = doc.number || "";
    form.elements.startDate.value = doc.startDate || "";
    form.elements.expiryDate.value = doc.expiryDate || "";
    form.elements.remaining.value = remainingInfo(doc.expiryDate).text;
    form.elements.attachmentData.value = doc.attachmentData || "";
    form.elements.attachmentName.value = doc.attachmentName || "";
    form.elements.attachmentId.value = doc.attachmentId || "";
    form.elements.note.value = doc.note || "";
    const label = form.querySelector("[data-branch-file-label]"); if (label) label.textContent = doc.attachmentName || (doc.attachmentId ? "تم الإرفاق" : "إرفاق الوثيقة");
    document.getElementById("branchEstDocModal").showModal();
  }
  function readFileAsDataURL(file) { return new Promise((resolve) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result || ""); reader.onerror = () => resolve(""); reader.readAsDataURL(file); }); }
  async function saveEstDocFromBranchModal(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const settings = getDocSettings();
    const type = typeById(form.elements.typeId.value, settings);
    if (!form.elements.categoryId.value) return toast("اختر تصنيف الوثيقة");
    if (!form.elements.typeId.value) return toast("اختر نوع الوثيقة");
    if (!form.elements.authorityId.value) return toast("اختر الجهة التابعة");
    let attachmentData = form.elements.attachmentData.value || "";
    let attachmentName = form.elements.attachmentName.value || "";
    let attachmentId = form.elements.attachmentId.value || "";
    const file = form.elements.attachmentFile.files?.[0];
    if (file) {
      attachmentName = file.name;
      attachmentData = await readFileAsDataURL(file);
      try { if (typeof saveAttachment === "function") attachmentId = await saveAttachment(file, "establishment-document"); } catch {}
    }
    const item = {
      id: form.elements.id.value || uid("est-doc"),
      branchId: form.elements.branchId.value || "",
      categoryId: form.elements.categoryId.value,
      typeId: form.elements.typeId.value,
      authorityId: form.elements.authorityId.value,
      authority: authorityName(form.elements.authorityId.value, settings),
      title: clean(form.elements.title.value),
      number: clean(form.elements.number.value),
      startDate: form.elements.startDate.value,
      expiryDate: form.elements.expiryDate.value,
      attachmentId,
      attachmentName,
      attachmentData,
      note: clean(form.elements.note.value)
    };
    const docs = getDocs();
    const index = docs.findIndex(doc => doc.id === item.id);
    if (index >= 0) docs[index] = { ...docs[index], ...item }; else docs.unshift(item);
    saveDocs(docs);
    document.getElementById("branchEstDocModal")?.close();
    renderBranchEstDocsView();
    toast("تم حفظ وثيقة المنشأة");
  }

  function filterState() {
    const view = document.getElementById("establishmentDocumentsView");
    return {
      branchId: view?.querySelector("#estDocBranchFilter")?.value || "all",
      categoryId: view?.querySelector("#estDocCategoryFilter")?.value || "all",
      typeId: view?.querySelector("#estDocTypeFilter")?.value || "all",
      authorityId: view?.querySelector("#estDocAuthorityFilter")?.value || "all",
      search: clean(view?.querySelector("#estDocNameSearch")?.value).toLowerCase()
    };
  }
  function filteredDocs() {
    const settings = getDocSettings();
    const filters = filterState();
    return getDocs().filter(doc => {
      const type = typeById(doc.typeId, settings);
      const categoryId = doc.categoryId || type?.categoryId || "";
      const authorityId = doc.authorityId || type?.authorityId || "";
      const text = [doc.title, doc.number, type?.name, categoryName(categoryId, settings), authorityName(authorityId, settings), branchName(doc.branchId)].join(" ").toLowerCase();
      return (filters.branchId === "all" || (filters.branchId === "main" ? !doc.branchId : doc.branchId === filters.branchId))
        && (filters.categoryId === "all" || categoryId === filters.categoryId)
        && (filters.typeId === "all" || doc.typeId === filters.typeId)
        && (filters.authorityId === "all" || authorityId === filters.authorityId)
        && (!filters.search || text.includes(filters.search));
    });
  }
  function renderBranchEstDocsView() {
    const view = document.getElementById("establishmentDocumentsView");
    if (!view || !view.classList.contains("active")) return;
    const settings = getDocSettings();
    const selected = filterState();
    view.innerHTML = `<div class="section-toolbar"><div><h2 class="section-title">وثائق المنشأة</h2><p class="section-description">إدارة وثائق المنشأة حسب الفرع والتصنيف والنوع والجهة.</p></div><button type="button" class="primary-btn" id="branchAddEstDocBtn"><span data-icon="plus"></span>إضافة وثيقة</button></div>
      <article class="panel est-doc-filter-panel"><div class="form-grid form-grid-5"><label><span>الفرع</span><select id="estDocBranchFilter" data-branch-filter><option value="all">كل الفروع</option><option value="main">المنشأة الرئيسية</option>${visibleBranches().map(branch => `<option value="${esc(branch.id)}"${selected.branchId === branch.id ? " selected" : ""}>${esc(branch.name)}</option>`).join("")}</select></label><label><span>تصنيف الوثائق</span><select id="estDocCategoryFilter"><option value="all">كل التصنيفات</option>${visibleCategories(settings).map(cat => `<option value="${esc(cat.id)}"${selected.categoryId === cat.id ? " selected" : ""}>${esc(cat.name)}</option>`).join("")}</select></label><label><span>نوع الوثيقة</span><select id="estDocTypeFilter"><option value="all">كل الأنواع</option>${visibleTypes(settings).map(type => `<option value="${esc(type.id)}"${selected.typeId === type.id ? " selected" : ""}>${esc(type.name)}</option>`).join("")}</select></label><label><span>الجهة</span><select id="estDocAuthorityFilter"><option value="all">كل الجهات</option>${visibleAuthorities(settings).map(auth => `<option value="${esc(auth.id)}"${selected.authorityId === auth.id ? " selected" : ""}>${esc(auth.name)}</option>`).join("")}</select></label><label><span>مسمى الوثيقة / الرقم</span><input id="estDocNameSearch" value="${esc(selected.search)}" placeholder="ابحث باسم الوثيقة أو رقمها" /></label></div></article>
      <article class="panel"><div class="table-wrap"><table class="compact-data-table establishment-docs-table"><thead><tr><th>الفرع</th><th>التصنيف</th><th>نوع الوثيقة</th><th>مسمى الوثيقة</th><th>رقم الوثيقة</th><th>الجهة</th><th>البداية</th><th>النهاية</th><th>المتبقي</th><th>المرفق</th><th>الإجراءات</th></tr></thead><tbody id="branchEstDocBody"></tbody></table></div></article>`;
    const docs = filteredDocs();
    const body = view.querySelector("#branchEstDocBody");
    body.innerHTML = docs.length ? docs.map(doc => {
      const type = typeById(doc.typeId, settings);
      const categoryId = doc.categoryId || type?.categoryId || "";
      const authorityId = doc.authorityId || type?.authorityId || "";
      const attachment = doc.attachmentData ? `<button type="button" class="attachment-view-btn" data-branch-open-doc-attachment="${esc(doc.id)}">عرض</button>` : (doc.attachmentId ? `<button type="button" class="attachment-view-btn" data-view-attachment="${esc(doc.attachmentId)}">عرض</button>` : "—");
      return `<tr><td>${esc(doc.branchId ? branchName(doc.branchId) : "المنشأة الرئيسية")}</td><td>${esc(categoryName(categoryId, settings))}</td><td>${esc(type?.name || "—")}</td><td>${esc(doc.title || "—")}</td><td>${esc(doc.number || "—")}</td><td>${esc(authorityName(authorityId, settings) || doc.authority || "—")}</td><td>${esc(dateText(doc.startDate))}</td><td>${esc(dateText(doc.expiryDate))}</td><td>${remainingBadge(doc.expiryDate)}</td><td>${attachment}</td><td class="action-cell"><button type="button" class="quick-view-btn" data-branch-edit-est-doc="${esc(doc.id)}" title="تعديل">${icon("edit")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-branch-delete-est-doc="${esc(doc.id)}" title="حذف">${icon("trash")}</button></td></tr>`;
    }).join("") : `<tr><td colspan="11"><div class="empty-state"><strong>لا توجد وثائق منشأة</strong><p>أضف وثيقة أو غيّر الفلاتر الحالية.</p></div></td></tr>`;
    if (typeof hydrateIcons === "function") hydrateIcons(view);
  }

  // style patch
  function injectStyles() {
    if (document.getElementById("branchPatchStyles")) return;
    const css = `.form-grid-5{display:grid;grid-template-columns:repeat(4,minmax(150px,1fr)) minmax(230px,1.25fr);gap:10px;align-items:end}.est-doc-filter-panel{margin-bottom:14px;padding:14px 18px;border-radius:18px}.est-doc-filter-panel label{display:flex;flex-direction:column;gap:6px;margin:0;min-width:0}.est-doc-filter-panel label>span{font-size:10px;font-weight:800;color:#7a8990;line-height:1.2}.est-doc-filter-panel select,.est-doc-filter-panel input{width:100%;height:42px;min-height:42px;border:1px solid var(--border);border-radius:12px;padding:0 13px;background:#fff;color:var(--text);font:inherit;font-size:11px;box-sizing:border-box;box-shadow:none}.est-doc-filter-panel select:focus,.est-doc-filter-panel input:focus{outline:0;border-color:var(--primary);box-shadow:0 0 0 3px rgba(17,166,151,.10)}.branch-modal .site-field input,.branch-modal input,.branch-modal select{min-height:44px;border:1px solid var(--border);border-radius:12px;padding:0 14px;background:#fff;font:inherit}.settings-section[data-settings-panel="departmentsSettings"] .org-hierarchy-grid{margin-top:0}.employee-branch-field select{min-height:44px}@media(max-width:1200px){.form-grid-5{grid-template-columns:repeat(3,minmax(150px,1fr))}}@media(max-width:850px){.form-grid-5{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:620px){.form-grid-5{grid-template-columns:1fr}}`;
    document.head.insertAdjacentHTML("beforeend", `<style id="branchPatchStyles">${css}</style>`);
  }

  document.addEventListener("click", (event) => {
    const branchSettings = event.target.closest('[data-settings-section="branches"]');
    if (branchSettings) { event.preventDefault(); event.stopImmediatePropagation(); activateSettingsSection("branches"); return; }
    const deptSettings = event.target.closest('[data-settings-section="departmentsSettings"]');
    if (deptSettings) { event.preventDefault(); event.stopImmediatePropagation(); activateSettingsSection("departmentsSettings"); return; }
    const addBranch = event.target.closest("#addBranchBtn");
    if (addBranch) { event.preventDefault(); openBranchModal(); return; }
    const editBranch = event.target.closest("[data-edit-branch]");
    if (editBranch) { event.preventDefault(); openBranchModal(editBranch.dataset.editBranch); return; }
    const toggleBranch = event.target.closest("[data-toggle-branch]");
    if (toggleBranch) { event.preventDefault(); const branches = getBranches(); const b = branches.find(item => item.id === toggleBranch.dataset.toggleBranch); if (b) b.visible = !b.visible; saveBranches(branches); renderBranchesPanel(); populateBranchSelects(); return; }
    const deleteBranch = event.target.closest("[data-delete-branch]");
    if (deleteBranch) { event.preventDefault(); const id = deleteBranch.dataset.deleteBranch; if (Array.isArray(employees) && employees.some(emp => emp.branch === id)) return toast("لا يمكن حذف فرع مرتبط بموظفين"); saveBranches(getBranches().filter(b => b.id !== id)); saveDocs(getDocs().map(doc => doc.branchId === id ? { ...doc, branchId: "" } : doc)); renderBranchesPanel(); populateBranchSelects(); renderBranchEstDocsView(); return; }
    if (event.target.closest("[data-close-branch-modal]")) { event.preventDefault(); document.getElementById("branchModal")?.close(); return; }
    const addEstDoc = event.target.closest("#branchAddEstDocBtn");
    if (addEstDoc) { event.preventDefault(); event.stopPropagation(); openBranchEstDocModal(); return; }
    const editEstDoc = event.target.closest("[data-branch-edit-est-doc]");
    if (editEstDoc) { event.preventDefault(); openBranchEstDocModal(editEstDoc.dataset.branchEditEstDoc); return; }
    const deleteEstDoc = event.target.closest("[data-branch-delete-est-doc]");
    if (deleteEstDoc) { event.preventDefault(); saveDocs(getDocs().filter(doc => doc.id !== deleteEstDoc.dataset.branchDeleteEstDoc)); renderBranchEstDocsView(); return; }
    if (event.target.closest("[data-close-branch-estdoc]")) { event.preventDefault(); document.getElementById("branchEstDocModal")?.close(); return; }
    const openAttachment = event.target.closest("[data-branch-open-doc-attachment]");
    if (openAttachment) { event.preventDefault(); const doc = getDocs().find(item => item.id === openAttachment.dataset.branchOpenDocAttachment); if (doc?.attachmentData) window.open(doc.attachmentData, "_blank"); return; }
  }, true);

  document.addEventListener("change", (event) => {
    if (event.target.closest("#estDocBranchFilter,#estDocCategoryFilter,#estDocTypeFilter,#estDocAuthorityFilter")) renderBranchEstDocsView();
  }, true);
  document.addEventListener("input", (event) => {
    if (event.target.closest("#estDocNameSearch")) renderBranchEstDocsView();
  }, true);

  function boot() {
    injectStyles(); ensureBranchPanel(); ensureDepartmentsInsideSettings(); ensureEmployeeBranchField(); populateBranchSelects(); renderBranchesPanel();
    // render our improved establishment docs when the view is active, even if an older patch rendered first
    setTimeout(() => { if (document.getElementById("establishmentDocumentsView")?.classList.contains("active")) renderBranchEstDocsView(); }, 80);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
  window.addEventListener("load", () => setTimeout(boot, 50));
  setInterval(() => {
    ensureEmployeeBranchField(); populateBranchSelects();
    const view = document.getElementById("establishmentDocumentsView");
    if (view?.classList.contains("active") && !view.querySelector("#estDocBranchFilter")) renderBranchEstDocsView();
  }, 1200);
})();


/* Employee absence written warnings visible section patch */
(function employeeWarningsVisiblePatch(){
  const esc = (value) => typeof escapeHtml === "function" ? escapeHtml(value ?? "") : String(value ?? "").replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
  const ic = (name) => typeof iconSvg === "function" ? iconSvg(name) : "";

  function warningDateLabel(warning) {
    const raw = warning.warningDate || warning.date || warning.createdAt || warning.fields?.warningDate || "";
    if (!raw) return "—";
    try {
      if (typeof formatDate === "function" && /^\d{4}-\d{2}-\d{2}$/.test(raw)) return formatDate(raw);
      if (typeof formatDateTime === "function" && raw.includes("T")) return formatDateTime(raw);
    } catch(_) {}
    return raw;
  }

  function warningTitle(warning) {
    return warning.title || warning.type || warning.summary || warning.penalty || "إنذار كتابي";
  }

  function warningReason(warning) {
    return warning.reason || warning.message || warning.details || warning.fields?.legalBasis || warning.fields?.absencePeriod || warning.summary || "إنذار كتابي بسبب الغياب";
  }

  function getActiveEmployeeForWarning() {
    const id = (typeof employeeFormState !== "undefined" && employeeFormState?.employeeId) || document.querySelector('#employeeForm [name="employeeId"]')?.value || "";
    return (typeof getEmployee === "function" ? getEmployee(id) : null) || (Array.isArray(employees) ? employees.find((item) => String(item.id) === String(id)) : null) || null;
  }

  function collectEmployeeWarnings() {
    const emp = getActiveEmployeeForWarning();
    const byId = new Map();
    const stateWarnings = (typeof employeeFormState !== "undefined" && Array.isArray(employeeFormState.warnings)) ? employeeFormState.warnings : [];
    const employeeWarnings = Array.isArray(emp?.warnings) ? emp.warnings : [];
    const stateMinutes = (typeof employeeFormState !== "undefined" && Array.isArray(employeeFormState.minutes)) ? employeeFormState.minutes : [];
    const employeeMinutes = Array.isArray(emp?.minutes) ? emp.minutes : (Array.isArray(emp?.disciplinaryMinutes) ? emp.disciplinaryMinutes : []);

    [...employeeWarnings, ...stateWarnings].forEach((warning, index) => {
      if (!warning) return;
      const id = String(warning.id || warning.warningId || `warning-row-${index}`);
      byId.set(id, { ...warning, id, source: "warning" });
    });

    [...employeeMinutes, ...stateMinutes].forEach((minute, index) => {
      const isWarning = minute && (minute.warningKind || minute.templateId === "absence-written-warning" || /إنذار/.test(String(minute.type || minute.summary || minute.penalty || "")));
      if (!isWarning) return;
      const id = String(minute.id || minute.warningId || `minute-warning-${index}`);
      if (!byId.has(id)) byId.set(id, { ...minute, id, source: "minute" });
    });
    return [...byId.values()];
  }

  window.renderEmployeeWarnings = function renderEmployeeWarnings() {
    const minutesCard = document.querySelector('.minutes-area-card');
    if (!minutesCard) return;
    let card = document.querySelector('#employeeWarningsCard');
    if (!card) {
      card = document.createElement('section');
      card.id = 'employeeWarningsCard';
      card.className = 'notes-records-card warnings-area-card';
      card.innerHTML = `
        <div class="notes-records-head section-title-with-action">
          <div><h4>الإنذارات</h4><p>الإنذارات الكتابية الصادرة للموظف والمرتبطة بالغياب.</p></div>
        </div>
        <div class="table-wrap"><table class="compact-data-table warnings-table">
          <thead><tr><th>#</th><th>نوع الإنذار</th><th>السبب / التفصيل</th><th>تاريخ الإنذار</th><th>مرتبط بغياب</th><th>الحالة</th><th>الإجراءات</th></tr></thead>
          <tbody id="employeeWarningsBody"></tbody>
        </table></div>`;
      minutesCard.insertAdjacentElement('afterend', card);
    }
    const body = card.querySelector('#employeeWarningsBody');
    const warnings = collectEmployeeWarnings();
    body.innerHTML = warnings.length ? warnings.map((warning, index) => {
      const absenceLabel = warning.sourceAbsenceId || warning.absenceId || warning.fields?.absencePeriod || '—';
      const status = warning.status || (warning.source === 'minute' ? 'صادر' : 'مسجل');
      return `<tr data-warning-row="${esc(warning.id)}">
        <td>${index + 1}</td>
        <td>${esc(warningTitle(warning))}</td>
        <td>${esc(warningReason(warning))}</td>
        <td>${esc(warningDateLabel(warning))}</td>
        <td>${esc(absenceLabel)}</td>
        <td><span class="warning-status-badge">${esc(status)}</span></td>
        <td class="row-actions"><button type="button" class="print-icon-btn" data-print-warning="${esc(warning.id)}" title="طباعة الإنذار">${ic('printer')}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-warning="${esc(warning.id)}" title="حذف الإنذار">${ic('trash')}</button></td>
      </tr>`;
    }).join('') : '<tr><td colspan="7">لا توجد إنذارات مسجلة لهذا الموظف.</td></tr>';
  };

  function formValue(name) {
    try { return new FormData(document.querySelector('#employeeForm')).get(name) || ''; } catch(_) { return ''; }
  }

  function employeePrintableInfo(emp = {}) {
    const fullNameFromForm = [formValue('firstName'), formValue('fatherName'), formValue('grandName'), formValue('familyName')].filter(Boolean).join(' ');
    const name = fullNameFromForm || (typeof employeeNameValue === 'function' ? employeeNameValue(emp) : '') || emp.name || '—';
    const employeeNumber = formValue('employeeNumber') || emp.employeeNumber || emp.number || emp.id || '—';
    const identity = formValue('identityNumber') || emp.identityNumber || '—';
    const nationality = formValue('nationality') || emp.nationality || '—';
    const department = formValue('department') || emp.department || '—';
    const section = formValue('section') || emp.section || '—';
    const role = formValue('role') || emp.role || emp.jobTitle || '—';
    const manager = formValue('directManager') || emp.directManager || '—';
    const branch = formValue('branch') || emp.branchName || emp.branch || '—';
    const startRaw = formValue('workStartDate') || formValue('contractStartDate') || emp.workStartDate || emp.contractStartDate || emp.joinDate || '';
    const workStartDate = startRaw ? safeDateLabel(startRaw) : '—';
    const salaryValue = formValue('totalSalary') || formValue('baseSalary') || emp.totalSalary || emp.salary || emp.baseSalary || '';
    const salary = salaryValue ? (typeof formatCurrencyEn === 'function' ? formatCurrencyEn(Number(salaryValue)) : String(salaryValue)) : '—';
    return { name, employeeNumber, identity, nationality, department, section, role, manager, branch, workStartDate, salary };
  }

  function safeDateLabel(value) {
    if (!value) return '—';
    try {
      if (typeof formatDate === 'function' && /^\d{4}-\d{2}-\d{2}$/.test(String(value))) return formatDate(value);
      if (typeof formatDateTime === 'function' && String(value).includes('T')) return formatDateTime(value);
    } catch(_) {}
    return String(value);
  }

  function dateOnly(value) {
    if (!value) return '';
    return String(value).slice(0, 10);
  }

  function parseDate(value) {
    const d = new Date(dateOnly(value));
    return Number.isNaN(d.getTime()) ? null : d;
  }

  function inclusiveDays(from, to) {
    const a = parseDate(from);
    const b = parseDate(to || from);
    if (!a || !b) return 0;
    return Math.max(1, Math.round((b - a) / 86400000) + 1);
  }

  function absenceLabel(record = {}) {
    try { return typeof absenceTypeMeta === 'function' ? absenceTypeMeta(record.type).label : ''; } catch(_) { return ''; }
  }


  function arabicWeekday(value) {
    const d = parseDate(value);
    if (!d) return '—';
    return ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'][d.getDay()] || '—';
  }

  function isoDate(value) {
    const d = parseDate(value);
    if (!d) return '';
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function expandAbsenceRecordDays(record = {}) {
    const start = parseDate(record.from || record.date || record.createdAt);
    const end = parseDate(record.to || record.from || record.date || record.createdAt);
    if (!start || !end) return [];
    const days = [];
    const cursor = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const last = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    while (cursor <= last && days.length < 370) {
      const raw = isoDate(cursor.toISOString().slice(0, 10));
      days.push({ dayName: arabicWeekday(raw), date: safeDateLabel(raw), rawDate: raw });
      cursor.setDate(cursor.getDate() + 1);
    }
    return days;
  }

  function uniqueAbsenceDays(days = []) {
    const seen = new Set();
    return days.filter((item) => {
      const key = item.rawDate || item.date;
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    }).sort((a, b) => String(a.rawDate || a.date).localeCompare(String(b.rawDate || b.date)));
  }

  function renderAbsenceDaysDetailsTable(days = []) {
    const rows = uniqueAbsenceDays(days);
    if (!rows.length) return `<p class="basis">لا توجد تفاصيل أيام غياب محفوظة لهذا الإنذار.</p>`;
    const chunks = [];
    for (let i = 0; i < rows.length; i += 4) chunks.push(rows.slice(i, i + 4));
    const body = chunks.map((chunk) => {
      const cells = [];
      for (let i = 0; i < 4; i++) {
        const item = chunk[i];
        cells.push(`<td>${item ? esc(item.dayName) : '—'}</td><td>${item ? esc(item.date) : '—'}</td>`);
      }
      return `<tr>${cells.join('')}</tr>`;
    }).join('');
    return `<table class="absence-days-table"><thead><tr><th>اليوم</th><th>التاريخ</th><th>اليوم</th><th>التاريخ</th><th>اليوم</th><th>التاريخ</th><th>اليوم</th><th>التاريخ</th></tr></thead><tbody>${body}</tbody></table>`;
  }

  function findWarningAbsence(warning = {}, emp = {}) {
    const ids = [warning.sourceAbsenceId, warning.absenceId, warning.fields?.sourceAbsenceId, warning.fields?.absenceId].filter(Boolean).map(String);
    const all = Array.isArray(attendanceExceptions) ? attendanceExceptions : [];
    let record = ids.length ? all.find(item => ids.includes(String(item.id))) : null;
    if (!record && emp?.id) {
      const period = warning.fields?.absencePeriod || warning.absencePeriod || '';
      record = all.find(item => String(item.employeeId) === String(emp.id) && period && (String(period).includes(dateOnly(item.from)) || String(period).includes(dateOnly(item.to))));
    }
    return record || null;
  }

  function contractYearRange(emp = {}, refDate = new Date()) {
    const startRaw = emp.workStartDate || emp.contractStartDate || emp.joinDate || '';
    const ref = refDate instanceof Date && !Number.isNaN(refDate.getTime()) ? refDate : new Date();
    if (!startRaw) return { start: new Date(ref.getFullYear(), 0, 1), end: new Date(ref.getFullYear(), 11, 31) };
    const base = parseDate(startRaw);
    if (!base) return { start: new Date(ref.getFullYear(), 0, 1), end: new Date(ref.getFullYear(), 11, 31) };
    let start = new Date(ref.getFullYear(), base.getMonth(), base.getDate());
    if (start > ref) start = new Date(ref.getFullYear() - 1, base.getMonth(), base.getDate());
    const end = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate() - 1);
    return { start, end };
  }

  function absenceStatsForWarning(warning = {}, emp = {}) {
    const record = findWarningAbsence(warning, emp);
    const refDate = parseDate(record?.from || warning.createdAt || warning.warningDate || new Date().toISOString()) || new Date();
    const { start, end } = contractYearRange(emp, refDate);
    const all = (Array.isArray(attendanceExceptions) ? attendanceExceptions : []).filter(item => String(item.employeeId) === String(emp?.id) && item.type === 'unexcused');
    const inYear = all.filter(item => {
      const d = parseDate(item.from);
      return d && d >= start && d <= end;
    });
    const currentDays = record ? inclusiveDays(record.from, record.to) : Number(warning.days || warning.fields?.currentDays || 0);
    const intermittentDays = warning.fields?.intermittentDays || warning.totalIntermittentDays || inYear.reduce((sum, item) => sum + inclusiveDays(item.from, item.to), 0) || currentDays || '—';
    const connectedDays = warning.fields?.connectedDays || warning.totalConnectedDays || currentDays || '—';
    const period = warning.fields?.absencePeriod || warning.absencePeriod || (record ? `${safeDateLabel(record.from)}${record.to && record.to !== record.from ? ` إلى ${safeDateLabel(record.to)}` : ''}` : '—');
    const type = warning.fields?.absenceType || warning.absenceType || absenceLabel(record) || 'غياب بدون عذر';
    const reason = record?.reason || warning.reason || warning.details || warning.message || 'غياب بدون عذر بلغ حد الإنذار الكتابي';
    const titleText = `${warningTitle(warning)} ${warningReason(warning)} ${warning.fields?.legalBasis || ''} ${warning.fields?.ruleType || ''} ${warning.ruleType || ''}`;
    let ruleType = /متقطع/.test(titleText) ? 'غياب متقطع' : (/متصل/.test(titleText) ? 'غياب متصل' : '');
    if (!ruleType) {
      const connectedNumber = Number(connectedDays) || 0;
      const intermittentNumber = Number(intermittentDays) || 0;
      ruleType = connectedNumber >= 10 && intermittentNumber < 20 ? 'غياب متصل' : 'غياب متقطع';
    }
    const isConnectedRule = ruleType === 'غياب متصل';
    const threshold = isConnectedRule ? 'بلوغ 10 أيام غياب متصل' : 'بلوغ 20 يومًا غيابًا متقطعًا خلال السنة العقدية';
    const escalation = isConnectedRule
      ? 'إذا تجاوز الغياب المتصل 15 يومًا بعد الإنذار الكتابي، يتم عرض الحالة للإجراء النظامي الأعلى وفق نظام العمل.'
      : 'إذا تجاوز الغياب المتقطع 30 يومًا خلال السنة العقدية بعد الإنذار الكتابي، يتم عرض الحالة للإجراء النظامي الأعلى وفق نظام العمل.';
    const ruleMetricLabel = isConnectedRule ? 'مجموع الغياب المتصل' : 'مجموع الغياب المتقطع خلال السنة العقدية';
    const ruleMetricValue = isConnectedRule ? connectedDays : intermittentDays;
    const detailDays = isConnectedRule
      ? uniqueAbsenceDays(expandAbsenceRecordDays(record || {}))
      : uniqueAbsenceDays(inYear.flatMap((item) => expandAbsenceRecordDays(item)));
    return {
      record,
      period,
      type,
      reason,
      ruleType,
      threshold,
      currentDays: currentDays || '—',
      connectedDays,
      intermittentDays,
      ruleMetricLabel,
      ruleMetricValue,
      detailDays,
      contractYear: `${safeDateLabel(start.toISOString().slice(0,10))} إلى ${safeDateLabel(end.toISOString().slice(0,10))}`,
      legalBasis: warning.fields?.legalBasis || `قاعدة الغياب حسب نظام العمل: ${threshold} يستوجب إصدار إنذار كتابي قبل أي تصعيد نظامي أعلى.`,
      escalation
    };
  }

  function officialWarningText(info, absence, warning) {
    return `استنادًا إلى قاعدة الغياب حسب نظام العمل، ونظرًا لتسجيل ${absence.type} على الموظف/ ${info.name} خلال الفترة (${absence.period})، وحيث بلغ الغياب الحد الذي يستوجب إصدار إنذار كتابي (${absence.threshold})، فإن المنشأة توجه هذا الإنذار الكتابي للموظف بضرورة الالتزام بمواعيد العمل والحضور والانصراف، وتؤكد أن تكرار الغياب أو تجاوزه للحدود النظامية بعد هذا الإنذار قد يترتب عليه اتخاذ الإجراءات النظامية الأعلى وفق نظام العمل. ${absence.escalation}`;
  }

  function printEmployeeWarning(warningId) {
    const warning = collectEmployeeWarnings().find((item) => String(item.id) === String(warningId));
    const emp = getActiveEmployeeForWarning();
    if (!warning) { if (typeof showToast === 'function') showToast('تعذر العثور على بيانات الإنذار'); return; }
    const info = employeePrintableInfo(emp || {});
    const absence = absenceStatsForWarning(warning, emp || {});
    const title = warningTitle(warning);
    const issueDate = warningDateLabel(warning);
    const writtenText = officialWarningText(info, absence, warning);
    const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>${esc(title)}</title><style>
      @page{size:A4;margin:5mm}*{box-sizing:border-box}html,body{margin:0;padding:0}body{font-family:Arial,Tahoma,sans-serif;background:#fff;color:#111827;font-size:13px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.sheet{background:white;border:1px solid #e5e7eb;border-radius:8px;padding:10px 12px;max-width:780px;margin:0 auto}.head{text-align:center;border-bottom:1.5px solid #0f766e;padding-bottom:5px;margin-bottom:7px}.head h1{margin:0 0 2px;font-size:19px;color:#0f766e;line-height:1.25}.head p{margin:1px 0;color:#6b7280;font-size:12.5px;line-height:1.3}.section{margin-top:6px;break-inside:avoid}.section h3{margin:0 0 4px;color:#0f766e;font-size:14px;border-bottom:1px solid #dbeafe;padding-bottom:3px;line-height:1.25}.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}.cell{border:1px solid #e5e7eb;border-radius:7px;padding:4px 6px;min-height:34px;background:#f9fafb;overflow:hidden}.cell.wide{grid-column:1/-1}.cell.wide-half{grid-column:span 2}.cell span{display:block;color:#6b7280;font-size:11.5px;margin-bottom:1px;line-height:1.25}.cell b{display:block;font-size:12.5px;line-height:1.35;word-break:break-word}.notice-text{border:1px solid #ccfbf1;background:#f0fdfa;border-radius:8px;padding:7px 9px;font-size:13px;line-height:1.5;text-align:justify;margin:0}.basis{font-size:12.5px;line-height:1.4;margin:0;border:1px solid #e5e7eb;border-radius:7px;background:#f9fafb;padding:6px 8px}.absence-days-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:12.5px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;overflow:hidden}.absence-days-table th{background:#f0fdfa;color:#0f766e;border:1px solid #ccfbf1;padding:4px 3px;font-weight:800}.absence-days-table td{border:1px solid #e5e7eb;padding:4px 3px;text-align:center;line-height:1.25}.signatures{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px;break-inside:avoid}.sig{border-top:1px solid #111827;padding-top:5px;text-align:center;color:#374151;font-size:12.5px;min-height:38px}.sig small{display:block;color:#6b7280;margin-top:4px;font-size:11.5px}.footer-note{margin-top:5px;font-size:11.5px;color:#6b7280;text-align:center;line-height:1.3}@media print{body{background:#fff;padding:0}.sheet{border:none;border-radius:0;max-width:none;width:100%;padding:3mm;zoom:.84}.no-print{display:none}}
    </style></head><body><div class="sheet"><div class="head"><h1>${esc(title)}</h1><p>إنذار كتابي صادر من نظام إدارة الموظفين</p><p>تاريخ إصدار الإنذار: ${esc(issueDate)}</p></div>
      <div class="section"><h3>بيانات الموظف</h3><div class="grid">
        <div class="cell"><span>اسم الموظف</span><b>${esc(info.name)}</b></div>
        <div class="cell"><span>رقم الموظف</span><b>${esc(info.employeeNumber)}</b></div>
        <div class="cell"><span>رقم الهوية</span><b>${esc(info.identity)}</b></div>
        <div class="cell"><span>الجنسية</span><b>${esc(info.nationality)}</b></div>
        <div class="cell"><span>الفرع</span><b>${esc(info.branch)}</b></div>
        <div class="cell"><span>الإدارة</span><b>${esc(info.department)}</b></div>
        <div class="cell"><span>القسم</span><b>${esc(info.section)}</b></div>
        <div class="cell"><span>المهنة</span><b>${esc(info.role)}</b></div>
        <div class="cell"><span>بداية العمل</span><b>${esc(info.workStartDate)}</b></div>
        <div class="cell"><span>المدير المباشر</span><b>${esc(info.manager)}</b></div>
        <div class="cell"><span>الراتب</span><b>${esc(info.salary)}</b></div>
        <div class="cell"><span>حالة الإنذار</span><b>${esc(warning.status || 'صادر')}</b></div>
      </div></div>
      <div class="section"><h3>بيانات الغياب محل الإنذار</h3><div class="grid">
        <div class="cell"><span>نوع الغياب</span><b>${esc(absence.type)}</b></div>
        <div class="cell"><span>نوع القاعدة</span><b>${esc(absence.ruleType)}</b></div>
        <div class="cell"><span>فترة الغياب</span><b>${esc(absence.period)}</b></div>
        <div class="cell"><span>${esc(absence.ruleMetricLabel)}</span><b>${esc(absence.ruleMetricValue)}</b></div>
        <div class="cell"><span>السنة العقدية المحتسبة</span><b>${esc(absence.contractYear)}</b></div>
        <div class="cell wide-half"><span>حد الإنذار</span><b>${esc(absence.threshold)}</b></div>
        <div class="cell"><span>الجزاء الحالي</span><b>إنذار كتابي</b></div>
        <div class="cell wide"><span>سبب / ملاحظة الغياب</span><b>${esc(absence.reason)}</b></div>
      </div></div>
      <div class="section"><h3>${absence.ruleType === 'غياب متصل' ? 'تفصيل أيام الغياب المتصل' : 'تفصيل أيام الغياب المتقطعة'}</h3>${renderAbsenceDaysDetailsTable(absence.detailDays)}</div>
      <div class="section"><h3>نص الإنذار الكتابي</h3><p class="notice-text">${esc(writtenText)}</p></div>
      <div class="section"><h3>الأساس النظامي</h3><p class="basis">${esc(absence.legalBasis)}</p></div>
      <div class="signatures"><div class="sig">توقيع الموظف بالاستلام<small>الاسم والتاريخ</small></div><div class="sig">توقيع المسؤول المباشر<small>الاسم والتاريخ</small></div><div class="sig">الموارد البشرية<small>الاسم والتاريخ</small></div></div>
      <p class="footer-note">ملاحظة: رفض التوقيع لا يلغي أثر الإنذار متى تم إثبات إبلاغ الموظف وفق الإجراءات المعتمدة.</p>
    </div><script>window.addEventListener('load',()=>setTimeout(()=>window.print(),250));<\/script></body></html>`;
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) { if (typeof showToast === 'function') showToast('تعذر فتح نافذة الطباعة'); return; }
    win.document.open(); win.document.write(html); win.document.close();
  }

  function deleteEmployeeWarning(warningId) {
    if (typeof employeeFormState !== 'undefined') {
      employeeFormState.warnings = (employeeFormState.warnings || []).filter((item) => String(item.id || item.warningId) !== String(warningId));
      employeeFormState.minutes = (employeeFormState.minutes || []).filter((item) => String(item.id || item.warningId) !== String(warningId));
    }
    const emp = getActiveEmployeeForWarning();
    if (emp) {
      emp.warnings = (emp.warnings || []).filter((item) => String(item.id || item.warningId) !== String(warningId));
      emp.minutes = (emp.minutes || []).filter((item) => String(item.id || item.warningId) !== String(warningId));
      try { if (typeof saveEmployeeRecord === 'function') saveEmployeeRecord(emp); } catch(_) {}
    }
    window.renderEmployeeWarnings?.();
    if (typeof renderEmployeeMinutes === 'function') renderEmployeeMinutes();
    if (typeof showToast === 'function') showToast('تم حذف الإنذار');
  }

  document.addEventListener('click', (event) => {
    const printBtn = event.target.closest('[data-print-warning]');
    if (printBtn) { event.preventDefault(); event.stopImmediatePropagation(); printEmployeeWarning(printBtn.dataset.printWarning); return; }
    const deleteBtn = event.target.closest('[data-delete-warning]');
    if (deleteBtn) { event.preventDefault(); event.stopImmediatePropagation(); deleteEmployeeWarning(deleteBtn.dataset.deleteWarning); return; }
  }, true);

  const previousRenderMinutes = typeof renderEmployeeMinutes === 'function' ? renderEmployeeMinutes : null;
  if (previousRenderMinutes) {
    window.renderEmployeeMinutes = renderEmployeeMinutes = function patchedRenderEmployeeMinutesWithWarnings() {
      const result = previousRenderMinutes.apply(this, arguments);
      try { window.renderEmployeeWarnings?.(); } catch(error) { console.warn(error); }
      return result;
    };
  }

  const previousSwitchEmployeeSection = typeof switchEmployeeSection === 'function' ? switchEmployeeSection : null;
  if (previousSwitchEmployeeSection) {
    window.switchEmployeeSection = switchEmployeeSection = function patchedSwitchEmployeeSectionWarnings(section) {
      const result = previousSwitchEmployeeSection.apply(this, arguments);
      if (section === 'notes') setTimeout(() => window.renderEmployeeWarnings?.(), 0);
      return result;
    };
  }

  const previousCreateAbsenceWrittenWarningMinute = typeof createAbsenceWrittenWarningMinute === 'function' ? createAbsenceWrittenWarningMinute : null;
  if (previousCreateAbsenceWrittenWarningMinute) {
    window.createAbsenceWrittenWarningMinute = createAbsenceWrittenWarningMinute = function patchedCreateAbsenceWrittenWarningMinute(record, requirement) {
      const minute = previousCreateAbsenceWrittenWarningMinute.apply(this, arguments);
      try {
        const emp = (typeof getEmployee === 'function' ? getEmployee(record?.employeeId) : null) || null;
        if (emp && minute) {
          if (!Array.isArray(emp.warnings)) emp.warnings = [];
          if (!emp.warnings.some((item) => String(item.id) === String(minute.id))) {
            emp.warnings.unshift({ ...minute, source: 'warning', status: 'صادر' });
          }
          if (typeof employeeFormState !== 'undefined' && employeeFormState.employeeId === emp.id) {
            employeeFormState.warnings = emp.warnings.slice();
          }
        }
        window.renderEmployeeWarnings?.();
      } catch(error) { console.warn(error); }
      return minute;
    };
  }

  setTimeout(() => { try { window.renderEmployeeWarnings?.(); } catch(_) {} }, 0);
})();

/* Travel and leaves module patch - added safely without removing existing logic */
(function travelAndLeaveModulePatch(){
  const TRAVEL_KEY = "nawah-travel-requests";
  let travelRequests = [];
  let pendingTravelApproval = null;
  let pendingTravelReturn = null;
  let pendingTicketAttachmentId = "";
  let pendingVisaAttachmentId = "";

  function loadTravelRequests(){
    try {
      const raw = localStorage.getItem(TRAVEL_KEY);
      travelRequests = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(travelRequests)) travelRequests = [];
    } catch (_) { travelRequests = []; }
  }
  function saveTravelRequests(){ localStorage.setItem(TRAVEL_KEY, JSON.stringify(travelRequests)); }
  function safeEl(selector){ return document.querySelector(selector); }
  function setText(selector, value){ const el = safeEl(selector); if (el) el.textContent = value; }
  function htmlEscape(value){ return typeof escapeHtml === "function" ? escapeHtml(value || "") : String(value || "").replace(/[&<>\"]/g, (m) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
  function todayString(){ return typeof formatInputDate === "function" ? formatInputDate(todayAtNoon()) : new Date().toISOString().slice(0,10); }
  function asDate(value){ return typeof parseDate === "function" ? parseDate(value) : (value ? new Date(`${value}T12:00:00`) : null); }
  function dayDiff(from, to){
    const a = asDate(from); const b = asDate(to || todayString());
    if (!a || !b) return 0;
    return Math.max(0, Math.floor((b - a) / 86400000) + 1);
  }
  function fmtDate(value){ return value ? (typeof formatDate === "function" ? formatDate(value) : value) : "غير محدد"; }
  function num(value){ return typeof arabicNumber === "function" ? arabicNumber(value) : value; }
  function currency(value){ return typeof formatCurrencyEn === "function" ? formatCurrencyEn(value) : String(value || 0); }
  function employeeById(id){ return typeof getEmployee === "function" ? getEmployee(id) : (employees || []).find((e) => e.id === id); }
  function avatar(employee){ return typeof employeeAvatar === "function" ? employeeAvatar(employee) : ""; }
  function icon(name){ return typeof iconSvg === "function" ? iconSvg(name) : ""; }
  function badge(label, cls){ return `<span class="status-badge ${cls || "status-pending"}">${label}</span>`; }
  function openExistingLeaveModal(){
    if (typeof populateFormOptions === "function") populateFormOptions();
    const form = safeEl("#leaveForm");
    if (form) {
      form.reset();
      if (form.elements.from) form.elements.from.value = todayString();
      if (form.elements.to) form.elements.to.value = todayString();
    }
    safeEl("#leaveModal")?.showModal();
  }
  function travelStatusBadge(travel){
    if (travel.status === "pending") return badge("بانتظار الاعتماد", "status-pending");
    if (travel.status === "rejected") return badge("مرفوض", "status-rejected");
    if (travel.status === "returned") return badge(`باشر العمل ${fmtDate(travel.workResumeDate)}`, "status-active");
    if (travel.status === "approved") {
      if (travel.returnDate) {
        const now = asDate(todayString());
        const ret = asDate(travel.returnDate);
        if (ret && now && ret < now) return badge("عاد - بانتظار المباشرة", "status-warning");
        if (ret && now && ret.getTime() === now.getTime()) return badge("العودة اليوم", "status-warning");
      }
      return badge("مسافر", "status-leave");
    }
    return badge("مسودة", "status-pending");
  }
  function travelDurationInfo(travel){
    const elapsed = travel.travelDate ? `${num(dayDiff(travel.travelDate, todayString()))} يوم` : "غير محدد";
    let remaining = "عودة غير محددة";
    if (travel.returnDate) {
      const now = asDate(todayString());
      const ret = asDate(travel.returnDate);
      if (ret && now) {
        const diff = Math.ceil((ret - now) / 86400000);
        if (diff > 0) remaining = `متبقي ${num(diff)} يوم`;
        else if (diff === 0) remaining = "العودة اليوم";
        else remaining = `تجاوز العودة ${num(Math.abs(diff))} يوم`;
      }
    }
    return { elapsed, remaining };
  }
  function addDaysToDateString(dateString, days){
    const base = asDate(dateString);
    if (!base) return "";
    const next = new Date(base.getTime());
    next.setDate(next.getDate() + Number(days || 0));
    return next.toISOString().slice(0,10);
  }
  function ensureTravelModals(){
    if (!safeEl("#travelRequestModal")) {
      document.body.insertAdjacentHTML("beforeend", `
      <dialog class="app-dialog" id="travelRequestModal">
        <form method="dialog" class="modal-card travel-modal-card travel-request-shell" id="travelRequestForm">
          <div class="modal-head travel-modal-head">
            <div>
              <span class="travel-modal-kicker">الإجازات والسفر</span>
              <h3>طلب سفر</h3>
              <p>أنشئ طلب سفر بهوية بصرية متناسقة مع النظام، مع دعم السفر المفتوح أو السفر والعودة أو حساب تاريخ العودة من عدد الأيام.</p>
            </div>
            <button class="icon-btn" type="button" data-close-travel-modal="travelRequestModal">×</button>
          </div>
          <div class="travel-modal-body">
            <section class="travel-form-section travel-section-primary">
              <div class="travel-section-title">
                <strong>البيانات الأساسية</strong>
                <small>اختر الموظف وحدد آلية السفر</small>
              </div>
              <div class="form-grid travel-form-grid">
                <label>
                  <span>الموظف</span>
                  <select name="employeeId" required></select>
                </label>
                <label>
                  <span>نوع التاريخ</span>
                  <select name="travelMode" id="travelModeSelect">
                    <option value="oneway">تاريخ سفر فقط</option>
                    <option value="roundtrip">سفر وعودة</option>
                  </select>
                </label>
                <label>
                  <span>تاريخ السفر</span>
                  <input type="date" name="travelDate" required />
                </label>
                <div class="travel-inline-note travel-summary-box">
                  <strong>ملخص سريع</strong>
                  <small id="travelDateSummary">يمكنك اعتماد الطلب كتاريخ سفر فقط أو تحديد العودة مباشرة أو بالمدة.</small>
                </div>
              </div>
            </section>

            <section class="travel-form-section travel-return-planner" id="travelReturnPlanner">
              <div class="travel-section-title">
                <strong>تحديد العودة</strong>
                <small>إما بتاريخ عودة مباشر أو بعدد أيام</small>
              </div>
              <div class="form-grid travel-form-grid">
                <label>
                  <span>طريقة تحديد العودة</span>
                  <select name="returnMode" id="travelReturnModeSelect">
                    <option value="date">تاريخ العودة</option>
                    <option value="days">مدة السفر بالأيام</option>
                  </select>
                </label>
                <div class="travel-inline-note travel-summary-box">
                  <strong>حساب تلقائي</strong>
                  <small id="travelReturnSummary">حدّد طريقة العودة ليظهر لك تاريخ العودة المحسوب.</small>
                </div>
                <label class="travel-return-date-field">
                  <span>تاريخ العودة</span>
                  <input type="date" name="returnDate" />
                </label>
                <label class="travel-return-days-field">
                  <span>مدة السفر بالأيام</span>
                  <input type="number" name="returnDays" min="1" step="1" placeholder="مثال: 90" />
                </label>
              </div>
            </section>

            <section class="travel-form-section">
              <div class="travel-section-title">
                <strong>ملاحظات إضافية</strong>
                <small>تظهر ضمن بيانات الطلب عند الحاجة</small>
              </div>
              <div class="form-grid travel-form-grid">
                <label class="full-field">
                  <span>ملاحظات</span>
                  <textarea name="note" rows="4" placeholder="أدخل ملاحظات طلب السفر"></textarea>
                </label>
              </div>
            </section>
          </div>
          <div class="modal-actions travel-modal-actions">
            <button type="button" class="secondary-btn danger-btn" data-close-travel-modal="travelRequestModal">إلغاء</button>
            <button class="primary-btn" type="button" id="saveTravelRequestBtn">حفظ طلب السفر</button>
          </div>
        </form>
      </dialog>`);
    }
    if (!safeEl("#travelApprovalModal")) {
      document.body.insertAdjacentHTML("beforeend", `
      <dialog class="app-dialog" id="travelApprovalModal">
        <form method="dialog" class="modal-card travel-modal-card" id="travelApprovalForm">
          <div class="modal-head"><div><h3>اعتماد السفر</h3><p>أرفق مستندات السفر ثم اختر أثر الاعتماد على العمولة.</p></div><button class="icon-btn" type="button" data-close-travel-modal="travelApprovalModal">×</button></div>
          <div id="travelApprovalPreview" class="commission-event-summary travel-approval-preview"></div>
          <div class="form-grid">
            <label><span>صورة التذكرة</span><input type="file" id="travelTicketAttachmentInput" accept="image/*,.pdf" /></label>
            <label><span>تأشيرة الخروج والعودة</span><input type="file" id="travelVisaAttachmentInput" accept="image/*,.pdf" /></label>
          </div>
          <div class="modal-actions split-actions">
            <button type="button" class="secondary-btn danger-btn" data-close-travel-modal="travelApprovalModal">إلغاء</button>
            <button type="button" class="secondary-btn" id="approveTravelOnlyBtn">اعتماد السفر فقط</button>
            <button type="button" class="primary-btn" id="approveTravelWithCommissionBtn">اعتماد السفر وتجميد العمولة</button>
          </div>
        </form>
      </dialog>`);
    }
    if (!safeEl("#travelResumeModal")) {
      document.body.insertAdjacentHTML("beforeend", `
      <dialog class="app-dialog" id="travelResumeModal">
        <form method="dialog" class="modal-card travel-modal-card" id="travelResumeForm">
          <div class="modal-head"><div><h3>تسجيل مباشرة عمل</h3><p>تاريخ المباشرة هو المعتمد لإعادة تنشيط الموظف والعمولة.</p></div><button class="icon-btn" type="button" data-close-travel-modal="travelResumeModal">×</button></div>
          <div id="travelResumePreview" class="commission-event-summary travel-approval-preview"></div>
          <div class="form-grid"><label><span>تاريخ مباشرة العمل</span><input type="date" name="workResumeDate" required /></label><label class="full-field"><span>ملاحظات</span><textarea name="note" rows="3"></textarea></label></div>
          <div class="modal-actions"><button type="button" class="secondary-btn" data-close-travel-modal="travelResumeModal">إلغاء</button><button class="primary-btn" type="submit">تسجيل المباشرة</button></div>
        </form>
      </dialog>`);
    }
  }
  function populateTravelEmployeeOptions(){
    const select = safeEl("#travelRequestForm select[name='employeeId']");
    if (!select) return;
    const availableEmployees = Array.isArray(employees) ? employees : [];
    select.innerHTML = `<option value="">اختر الموظف</option>` + availableEmployees.map((e) => `<option value="${e.id}">${htmlEscape(e.name)}${e.employeeNumber ? ` - ${htmlEscape(e.employeeNumber)}` : ""}</option>`).join("");
    if (!availableEmployees.length) {
      select.innerHTML = `<option value="">لا يوجد موظفون متاحون</option>`;
    }
  }
  function updateTravelSummary(){
    const form = safeEl("#travelRequestForm");
    if (!form) return;
    const travelMode = form.elements.travelMode?.value || "oneway";
    const returnMode = form.elements.returnMode?.value || "date";
    const travelDate = form.elements.travelDate?.value || "";
    const returnDate = form.elements.returnDate?.value || "";
    const returnDays = Number(form.elements.returnDays?.value || 0);
    const summary = safeEl("#travelDateSummary");
    const returnSummary = safeEl("#travelReturnSummary");
    if (summary) {
      summary.textContent = travelDate ? `تاريخ السفر المحدد: ${fmtDate(travelDate)}` : "حدد تاريخ السفر أولاً.";
    }
    if (!returnSummary) return;
    if (travelMode !== "roundtrip") {
      returnSummary.textContent = "الطلب الحالي سيُحفظ كسفر بدون تاريخ عودة.";
      return;
    }
    if (returnMode === "days") {
      if (travelDate && returnDays > 0) {
        const computed = addDaysToDateString(travelDate, returnDays);
        returnSummary.textContent = computed ? `سيتم اعتماد تاريخ العودة تلقائياً: ${fmtDate(computed)} بعد ${num(returnDays)} يوم.` : "تعذر حساب تاريخ العودة.";
      } else {
        returnSummary.textContent = "أدخل مدة السفر بالأيام ليتم حساب تاريخ العودة تلقائياً.";
      }
      return;
    }
    if (returnDate) {
      returnSummary.textContent = `تاريخ العودة المحدد: ${fmtDate(returnDate)}.`;
    } else {
      returnSummary.textContent = "حدد تاريخ العودة مباشرة من الحقل المجاور.";
    }
  }
  function setTravelReturnModeVisibility(){
    const form = safeEl("#travelRequestForm");
    if (!form) return;
    const returnMode = form.elements.returnMode?.value || "date";
    const dateField = safeEl(".travel-return-date-field");
    const daysField = safeEl(".travel-return-days-field");
    if (dateField) dateField.style.display = returnMode === "date" ? "flex" : "none";
    if (daysField) daysField.style.display = returnMode === "days" ? "flex" : "none";
    if (form.elements.returnDate) form.elements.returnDate.required = form.elements.travelMode?.value === "roundtrip" && returnMode === "date";
    if (form.elements.returnDays) form.elements.returnDays.required = form.elements.travelMode?.value === "roundtrip" && returnMode === "days";
    if (returnMode === "date" && form.elements.returnDays) form.elements.returnDays.value = form.elements.returnDays.value || "";
    updateTravelSummary();
  }
  function syncTravelReturnDateFromDays(){
    const form = safeEl("#travelRequestForm");
    if (!form) return;
    if ((form.elements.returnMode?.value || "date") !== "days") { updateTravelSummary(); return; }
    const days = Number(form.elements.returnDays?.value || 0);
    const travelDate = form.elements.travelDate?.value || "";
    if (days > 0 && travelDate) {
      const computed = addDaysToDateString(travelDate, days);
      if (form.elements.returnDate) form.elements.returnDate.value = computed;
    } else if (form.elements.returnDate) {
      form.elements.returnDate.value = "";
    }
    updateTravelSummary();
  }
  function setTravelModeVisibility(){
    const form = safeEl("#travelRequestForm");
    const mode = form?.elements.travelMode?.value || "oneway";
    const planner = safeEl("#travelReturnPlanner");
    if (planner) planner.style.display = mode === "roundtrip" ? "block" : "none";
    if (form?.elements.returnMode) form.elements.returnMode.disabled = mode !== "roundtrip";
    if (mode !== "roundtrip") {
      if (form?.elements.returnDate) form.elements.returnDate.value = "";
      if (form?.elements.returnDays) form.elements.returnDays.value = "";
    }
    setTravelReturnModeVisibility();
    updateTravelSummary();
  }
  function openTravelRequestModal(){
    ensureTravelModals();
    populateTravelEmployeeOptions();
    const form = safeEl("#travelRequestForm");
    if (form) {
      form.reset();
      if (form.elements.travelDate) form.elements.travelDate.value = todayString();
      if (form.elements.travelMode) form.elements.travelMode.value = "oneway";
      if (form.elements.returnMode) form.elements.returnMode.value = "date";
      if (form.elements.returnDate) form.elements.returnDate.value = "";
      if (form.elements.returnDays) form.elements.returnDays.value = "";
    }
    setTravelModeVisibility();
    updateTravelSummary();
    safeEl("#travelRequestModal")?.showModal();
  }
  function handleTravelRequestSubmit(event){
    if (event && typeof event.preventDefault === "function") event.preventDefault();
    const form = event?.currentTarget || safeEl("#travelRequestForm");
    if (!form || !form.elements) { showToast("تعذر قراءة نموذج طلب السفر"); return; }
    const employeeId = (form.elements.employeeId?.value || "").trim();
    const travelMode = form.elements.travelMode?.value || "oneway";
    const returnMode = form.elements.returnMode?.value || "date";
    const travelDate = form.elements.travelDate?.value || "";
    let returnDate = (form.elements.returnDate?.value || "").trim();
    const returnDaysRaw = (form.elements.returnDays?.value || "").trim();
    const note = (form.elements.note?.value || "").trim();
    if (!employeeId || !travelDate) { showToast("حدد الموظف وتاريخ السفر"); return; }
    const employee = employeeById(employeeId) || (Array.isArray(employees) ? employees.find((e) => String(e.id) === String(employeeId)) : null);
    if (!employee) { showToast("تعذر العثور على الموظف المحدد"); return; }
    let returnDays = "";
    if (travelMode === "roundtrip") {
      if (returnMode === "days") {
        const parsedDays = Number(returnDaysRaw);
        if (!Number.isFinite(parsedDays) || parsedDays <= 0) { showToast("أدخل مدة السفر بالأيام بشكل صحيح"); return; }
        returnDays = String(Math.floor(parsedDays));
        returnDate = addDaysToDateString(travelDate, parsedDays);
      }
      if (!returnDate) { showToast("حدد تاريخ العودة أو مدة السفر بالأيام"); return; }
      if (asDate(returnDate) && asDate(travelDate) && asDate(returnDate) < asDate(travelDate)) { showToast("تاريخ العودة يجب أن يكون بعد أو مساويًا لتاريخ السفر"); return; }
    } else {
      returnDate = "";
      returnDays = "";
    }
    travelRequests.unshift({
      id: `travel-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      employeeId,
      travelMode,
      returnMode: travelMode === "roundtrip" ? returnMode : "",
      travelDate,
      returnDate,
      returnDays,
      workResumeDate: "",
      status: "pending",
      note,
      ticketAttachmentId: "",
      visaAttachmentId: "",
      commissionFrozenAt: "",
      commissionIssuedId: "",
      createdAt: new Date().toISOString()
    });
    saveTravelRequests();
    form.closest("dialog")?.close();
    renderAll();
    showToast("تم حفظ طلب السفر");
  }
  function activeTravelRequests(){ return travelRequests.filter((t) => t.status === "approved"); }
  function renderTravelTable(){
    const body = travelRequests.length ? travelRequests.map((travel) => {
      const employee = employeeById(travel.employeeId);
      if (!employee) return "";
      let actions = travelStatusBadge(travel);
      if (travel.status === "pending") {
        actions = `<button class="secondary-btn" data-travel-reject="${travel.id}">رفض</button><button class="primary-btn" data-travel-approve="${travel.id}">اعتماد السفر</button>`;
      } else if (travel.status === "approved") {
        actions = `${travelStatusBadge(travel)}<button class="primary-btn" data-travel-resume="${travel.id}">تسجيل مباشرة عمل</button>`;
      }
      const info = travelDurationInfo(travel);
      return `<tr>
        <td>${typeof employeeCell === "function" ? employeeCell(employee) : htmlEscape(employee.name)}</td>
        <td>${fmtDate(travel.travelDate)}</td>
        <td>${travel.returnDate ? fmtDate(travel.returnDate) : "غير محدد"}</td>
        <td>${travel.workResumeDate ? fmtDate(travel.workResumeDate) : "لم يباشر"}</td>
        <td>${info.elapsed}</td>
        <td>${info.remaining}</td>
        <td>${travel.commissionFrozenAt ? badge("مجمدة", "status-warning") : badge("غير مجمدة", "status-active")}</td>
        <td><div class="travel-actions">${actions}</div></td>
      </tr>`;
    }).join("") : `<tr><td colspan="8"><div class="empty-state"><strong>لا توجد طلبات سفر</strong></div></td></tr>`;
    return `<article class="panel travel-table-panel"><div class="panel-head"><div><h3>المسافرون</h3><p>طلبات السفر وحالة المباشرة والعمولات</p></div><button class="primary-btn" id="newTravelBtn">${icon("plus")}طلب سفر</button></div><div class="table-wrap"><table><thead><tr><th>الموظف</th><th>تاريخ السفر</th><th>تاريخ العودة</th><th>تاريخ المباشرة</th><th>مضى على السفر</th><th>المتبقي للعودة</th><th>العمولة</th><th>الإجراءات</th></tr></thead><tbody>${body}</tbody></table></div></article>`;
  }
  function renderLeaveTable(){
    const filtered = activeLeaveFilter === "all" ? leaves : leaves.filter((leave) => leave.status === activeLeaveFilter);
    const rows = filtered.length ? filtered.map((leave) => {
      const employee = employeeById(leave.employeeId);
      if (!employee) return "";
      let actions = leaveStatusBadge(leave.status);
      if (leave.status === "pending") {
        actions = `<button class="secondary-btn" data-leave-action="rejected" data-leave-id="${leave.id}">رفض</button><button class="primary-btn" data-leave-action="approved" data-leave-id="${leave.id}">اعتماد الإجازة</button>`;
      } else if (leave.status === "approved" && !leave.returnDate) {
        actions = `${leaveStatusBadge(leave.status)}<button class="primary-btn" data-leave-return="${leave.id}">تسجيل مباشرة</button>`;
      } else if (leave.returnDate) {
        actions = `<span class="status-badge status-active">تمت المباشرة ${fmtDate(leave.returnDate)}</span>`;
      }
      return `<tr><td>${typeof employeeCell === "function" ? employeeCell(employee) : htmlEscape(employee.name)}</td><td>${htmlEscape(leave.type)}</td><td>${fmtDate(leave.from)}</td><td>${fmtDate(leave.to)}</td><td>${num(leave.days)} أيام</td><td>${leaveStatusBadge(leave.status)}</td><td><div class="travel-actions">${actions}</div></td></tr>`;
    }).join("") : `<tr><td colspan="7"><div class="empty-state"><strong>لا توجد طلبات في هذه الفئة</strong></div></td></tr>`;
    return `<article class="panel leave-table-panel"><div class="panel-head"><div><h3>الإجازات</h3><p>جدول طلبات الإجازة كما هو بدون تغيير في المنطق</p></div><button class="primary-btn" id="newLeaveBtn">${icon("plus")}طلب إجازة</button></div><div class="table-wrap"><table><thead><tr><th>الموظف</th><th>نوع الإجازة</th><th>من</th><th>إلى</th><th>المدة</th><th>الحالة</th><th>الإجراءات</th></tr></thead><tbody>${rows}</tbody></table></div></article>`;
  }
  function renderLeavesAndTravel(){
    ensureTravelModals();
    const view = safeEl("#leavesView");
    if (!view) return;
    const pendingLeaves = leaves.filter((leave) => leave.status === "pending").length;
    const pendingTravel = travelRequests.filter((travel) => travel.status === "pending").length;
    view.innerHTML = `
      <div class="leave-travel-hero">
        <button type="button" class="request-card" id="newLeaveBtn"><span data-icon="calendar"></span><strong>طلب إجازة</strong><small>إنشاء طلب إجازة جديد</small></button>
        <button type="button" class="request-card" id="newTravelBtn"><span data-icon="plane"></span><strong>طلب سفر</strong><small>طلب سفر بتاريخ عودة أو بدون عودة</small></button>
      </div>
      <div class="leave-tabs">
        <button class="${activeLeaveFilter === "all" ? "active" : ""}" data-leave-filter="all">جميع الإجازات <span id="allLeaveCount">${num(leaves.length)}</span></button>
        <button class="${activeLeaveFilter === "pending" ? "active" : ""}" data-leave-filter="pending">إجازات بانتظار الموافقة <span id="pendingLeaveCount">${num(pendingLeaves)}</span></button>
        <button class="${activeLeaveFilter === "approved" ? "active" : ""}" data-leave-filter="approved">إجازات معتمدة</button>
        <button class="${activeLeaveFilter === "rejected" ? "active" : ""}" data-leave-filter="rejected">إجازات مرفوضة</button>
        <button class="travel-tab-info" type="button">طلبات سفر معلقة <span>${num(pendingTravel)}</span></button>
      </div>
      <div class="leave-travel-tables">
        ${renderTravelTable()}
        ${renderLeaveTable()}
      </div>`;
    if (typeof hydrateIcons === "function") hydrateIcons(view);
    if (typeof hydrateAttachmentImages === "function") hydrateAttachmentImages(view);
  }
  function updateEmployeeTravelStatus(employee, travel, paused, commissionRecord){
    return {
      ...employee,
      status: "travel",
      attendance: null,
      travelStatus: {
        travelId: travel.id,
        travelDate: travel.travelDate,
        returnDate: travel.returnDate || "",
        workResumeDate: "",
        commissionFrozen: paused,
        updatedAt: new Date().toISOString()
      },
      commissions: commissionRecord ? [...(employee.commissions || []), commissionRecord] : (employee.commissions || []),
      commissionPaused: paused ? true : employee.commissionPaused,
      commissionPauseReason: paused ? `متوقف بسبب السفر من ${fmtDate(travel.travelDate)}${travel.returnDate ? ` إلى ${fmtDate(travel.returnDate)}` : ""}` : employee.commissionPauseReason,
      commissionPausedByLeaveId: paused ? travel.id : employee.commissionPausedByLeaveId,
      commissionPausedAt: paused ? new Date().toISOString() : employee.commissionPausedAt
    };
  }
  function openTravelApproval(id){
    ensureTravelModals();
    const travel = travelRequests.find((item) => item.id === id);
    const employee = travel ? employeeById(travel.employeeId) : null;
    if (!travel || !employee) return;
    let commission = null;
    try {
      if (typeof buildCommissionRecord === "function") commission = buildCommissionRecord(employee, commissionAccrualStart(employee), travel.travelDate, "travel", { id: travel.id, type: "سفر", from: travel.travelDate, to: travel.returnDate || travel.travelDate });
    } catch (_) { commission = null; }
    pendingTravelApproval = { travelId: id, commission };
    pendingTicketAttachmentId = travel.ticketAttachmentId || "";
    pendingVisaAttachmentId = travel.visaAttachmentId || "";
    safeEl("#travelTicketAttachmentInput").value = "";
    safeEl("#travelVisaAttachmentInput").value = "";
    safeEl("#travelApprovalPreview").innerHTML = (typeof commissionEventRows === "function" ? commissionEventRows([
      ["الموظف", htmlEscape(employee.name)],
      ["تاريخ السفر", fmtDate(travel.travelDate)],
      ["تاريخ العودة", travel.returnDate ? fmtDate(travel.returnDate) : "غير محدد"],
      ["بداية الاستحقاق الحالية", fmtDate(typeof commissionAccrualStart === "function" ? commissionAccrualStart(employee) : "")],
      ["قيمة العمولة عند التجميد", commission ? currency(commission.amount) : "غير محسوبة"]
    ]) : "");
    safeEl("#travelApprovalModal")?.showModal();
  }
  async function approveTravel(paused){
    if (!pendingTravelApproval) return;
    const travel = travelRequests.find((item) => item.id === pendingTravelApproval.travelId);
    const employee = travel ? employeeById(travel.employeeId) : null;
    if (!travel || !employee) return;
    const commission = paused && pendingTravelApproval.commission && pendingTravelApproval.commission.days && pendingTravelApproval.commission.amount ? pendingTravelApproval.commission : null;
    await persistEmployeeRecord(updateEmployeeTravelStatus(employee, travel, paused, commission));
    travelRequests = travelRequests.map((item) => item.id === travel.id ? {
      ...item,
      status: "approved",
      approvedAt: new Date().toISOString(),
      ticketAttachmentId: pendingTicketAttachmentId || item.ticketAttachmentId || "",
      visaAttachmentId: pendingVisaAttachmentId || item.visaAttachmentId || "",
      commissionFrozenAt: paused ? new Date().toISOString() : "",
      commissionIssuedId: commission ? commission.id : ""
    } : item);
    saveTravelRequests();
    safeEl("#travelApprovalModal")?.close();
    pendingTravelApproval = null;
    pendingTicketAttachmentId = "";
    pendingVisaAttachmentId = "";
    renderAll();
    showToast(paused ? "تم اعتماد السفر وتجميد العمولة" : "تم اعتماد السفر دون تجميد العمولة");
  }
  function rejectTravel(id){
    travelRequests = travelRequests.map((item) => item.id === id ? { ...item, status: "rejected", rejectedAt: new Date().toISOString() } : item);
    saveTravelRequests(); renderAll(); showToast("تم رفض طلب السفر");
  }
  function openTravelResume(id){
    ensureTravelModals();
    const travel = travelRequests.find((item) => item.id === id);
    const employee = travel ? employeeById(travel.employeeId) : null;
    if (!travel || !employee) return;
    pendingTravelReturn = { travelId: id };
    const form = safeEl("#travelResumeForm");
    if (form) { form.reset(); form.elements.workResumeDate.value = todayString(); }
    safeEl("#travelResumePreview").innerHTML = (typeof commissionEventRows === "function" ? commissionEventRows([
      ["الموظف", htmlEscape(employee.name)],
      ["تاريخ السفر", fmtDate(travel.travelDate)],
      ["تاريخ العودة", travel.returnDate ? fmtDate(travel.returnDate) : "غير محدد"],
      ["حالة العمولة", travel.commissionFrozenAt ? "مجمدة حتى تاريخ المباشرة" : "غير مجمدة"]
    ]) : "");
    safeEl("#travelResumeModal")?.showModal();
  }
  async function handleTravelResumeSubmit(event){
    event.preventDefault();
    if (!pendingTravelReturn) return;
    const form = event.target?.id === "travelResumeForm" ? event.target : safeEl("#travelResumeForm");
    const resumeDate = form?.elements?.workResumeDate?.value;
    const travel = travelRequests.find((item) => item.id === pendingTravelReturn.travelId);
    const employee = travel ? employeeById(travel.employeeId) : null;
    if (!travel || !employee || !resumeDate) { showToast("حدد تاريخ مباشرة العمل"); return; }
    await persistEmployeeRecord({
      ...employee,
      status: "active",
      attendance: employee.attendance || "08:00",
      travelStatus: { ...(employee.travelStatus || {}), travelId: travel.id, workResumeDate: resumeDate, updatedAt: new Date().toISOString() },
      commissionAccrualStartDate: resumeDate,
      commissionPaused: false,
      commissionPauseReason: "",
      commissionPausedByLeaveId: "",
      commissionPausedAt: ""
    });
    travelRequests = travelRequests.map((item) => item.id === travel.id ? { ...item, status: "returned", workResumeDate: resumeDate, resumeNote: (form.elements.note.value || "").trim(), returnedAt: new Date().toISOString() } : item);
    saveTravelRequests();
    safeEl("#travelResumeModal")?.close();
    pendingTravelReturn = null;
    renderAll();
    showToast("تم تسجيل مباشرة العمل وإعادة تنشيط الموظف");
  }
  function requestKey(source, id){ return `${source}:${id}`; }
  function findDashboardRequest(key){
    const parts = String(key || "").split(":");
    const source = parts[0];
    const id = parts.slice(1).join(":");
    if (source === "leave") {
      const leave = (Array.isArray(leaves) ? leaves : []).find((item) => String(item.id) === String(id));
      const employee = leave ? employeeById(leave.employeeId) : null;
      if (!leave || !employee) return null;
      return {
        source, id, employee, raw: leave,
        typeLabel: "إجازة",
        subtype: leave.type || "إجازة",
        dateText: `${fmtDate(leave.from)} إلى ${fmtDate(leave.to)}`,
        durationText: `${num(leave.days || dayDiff(leave.from, leave.to))} أيام`,
        note: leave.note || "—",
        status: leave.status || "pending",
        sortDate: leave.createdAt || leave.from || ""
      };
    }
    if (source === "travel") {
      const travel = travelRequests.find((item) => String(item.id) === String(id));
      const employee = travel ? employeeById(travel.employeeId) : null;
      if (!travel || !employee) return null;
      const info = travelDurationInfo(travel);
      return {
        source, id, employee, raw: travel,
        typeLabel: "سفر",
        subtype: travel.returnDate ? "سفر وعودة" : "سفر",
        dateText: `${fmtDate(travel.travelDate)}${travel.returnDate ? ` إلى ${fmtDate(travel.returnDate)}` : " - عودة غير محددة"}`,
        durationText: travel.returnDate ? info.remaining : info.elapsed,
        note: travel.note || "—",
        status: travel.status || "pending",
        sortDate: travel.createdAt || travel.travelDate || ""
      };
    }
    return null;
  }
  function dashboardPendingRequests(){
    const leaveItems = (Array.isArray(leaves) ? leaves : [])
      .filter((leave) => leave.status === "pending")
      .map((leave) => findDashboardRequest(requestKey("leave", leave.id)))
      .filter(Boolean);
    const travelItems = travelRequests
      .filter((travel) => travel.status === "pending")
      .map((travel) => findDashboardRequest(requestKey("travel", travel.id)))
      .filter(Boolean);
    return [...travelItems, ...leaveItems].sort((a, b) => String(b.sortDate || "").localeCompare(String(a.sortDate || "")));
  }
  function ensureDashboardRequestModal(){
    if (safeEl("#dashboardRequestModal")) return;
    document.body.insertAdjacentHTML("beforeend", `
      <dialog class="app-dialog" id="dashboardRequestModal">
        <form method="dialog" class="modal-card dashboard-request-modal">
          <div class="modal-head">
            <div><h3 id="dashboardRequestTitle">تفاصيل الطلب</h3><p id="dashboardRequestSubtitle">مراجعة سريعة من الشاشة الرئيسية</p></div>
            <button class="icon-btn" type="button" data-close-dashboard-request>×</button>
          </div>
          <div id="dashboardRequestDetails" class="commission-event-summary dashboard-request-details"></div>
          <div class="modal-actions split-actions" id="dashboardRequestActions"></div>
        </form>
      </dialog>`);
  }
  function openDashboardRequestDetails(key){
    ensureDashboardRequestModal();
    const req = findDashboardRequest(key);
    if (!req) { showToast("تعذر العثور على الطلب"); return; }
    setText("#dashboardRequestTitle", `طلب ${req.typeLabel}`);
    setText("#dashboardRequestSubtitle", `${req.employee.name} - ${req.subtype}`);
    const statusHtml = req.source === "leave" ? leaveStatusBadge(req.status) : travelStatusBadge(req.raw);
    safeEl("#dashboardRequestDetails").innerHTML = (typeof commissionEventRows === "function" ? commissionEventRows([
      ["نوع الطلب", req.typeLabel],
      ["مقدم الطلب", htmlEscape(req.employee.name)],
      ["التفاصيل", htmlEscape(req.subtype)],
      ["الفترة", htmlEscape(req.dateText)],
      ["المدة", htmlEscape(req.durationText)],
      ["الحالة", statusHtml],
      ["ملاحظات", htmlEscape(req.note)]
    ]) : `<div><strong>نوع الطلب</strong><span>${req.typeLabel}</span></div><div><strong>مقدم الطلب</strong><span>${htmlEscape(req.employee.name)}</span></div>`);
    safeEl("#dashboardRequestActions").innerHTML = req.status === "pending" ? `
      <button type="button" class="secondary-btn" data-close-dashboard-request>إغلاق</button>
      <button type="button" class="secondary-btn danger-btn" data-dashboard-request-action="reject" data-dashboard-request-key="${htmlEscape(key)}">رفض</button>
      <button type="button" class="primary-btn" data-dashboard-request-action="approve" data-dashboard-request-key="${htmlEscape(key)}">موافقة</button>
    ` : `<button type="button" class="primary-btn" data-close-dashboard-request>إغلاق</button>`;
    safeEl("#dashboardRequestModal")?.showModal();
  }
  function performDashboardRequestAction(key, action){
    const req = findDashboardRequest(key);
    if (!req) { showToast("تعذر العثور على الطلب"); return; }
    safeEl("#dashboardRequestModal")?.close();
    if (req.source === "leave") {
      if (typeof handleLeaveAction === "function") handleLeaveAction(req.id, action === "approve" ? "approved" : "rejected");
      return;
    }
    if (req.source === "travel") {
      if (action === "approve") openTravelApproval(req.id);
      else rejectTravel(req.id);
    }
  }
  function renderDashboardRequestsCard(){
    const list = safeEl("#leavePreviewList");
    if (!list) return;
    const pending = dashboardPendingRequests();
    setText("#pendingLeaves", num(pending.length));
    const card = list.closest(".panel");
    const desc = card?.querySelector(".panel-head p");
    if (desc) desc.textContent = "أحدث طلبات الإجازة والسفر";
    list.innerHTML = pending.length ? pending.slice(0, 9).map((req) => {
      const key = requestKey(req.source, req.id);
      return `<div class="leave-preview-item dashboard-request-item">
        ${avatar(req.employee)}
        <div class="leave-preview-info">
          <button type="button" class="employee-name-link" data-edit-employee="${htmlEscape(req.employee.id)}">${htmlEscape(req.employee.name)}</button>
          <span><b>${req.typeLabel}</b> · ${htmlEscape(req.subtype)} · ${htmlEscape(req.dateText)}</span>
        </div>
        <div class="mini-actions dashboard-request-actions">
          <button type="button" class="quick-view-btn" data-dashboard-request-view="${htmlEscape(key)}" title="عرض الطلب">${icon("eye")}</button>
          <button type="button" data-dashboard-request-action="approve" data-dashboard-request-key="${htmlEscape(key)}" title="موافقة">${icon("check")}</button>
          <button type="button" data-dashboard-request-action="reject" data-dashboard-request-key="${htmlEscape(key)}" title="رفض">${icon("x")}</button>
        </div>
      </div>`;
    }).join("") : '<div class="empty-state"><strong>لا توجد طلبات إجازة أو سفر معلقة</strong></div>';
    if (typeof hydrateIcons === "function") hydrateIcons(list);
    if (typeof hydrateAttachmentImages === "function") hydrateAttachmentImages(list);
  }
  function renderTravelDashboardCard(){
    const oldPanel = safeEl(".attendance-panel");
    if (!oldPanel) return;
    const active = activeTravelRequests();
    oldPanel.classList.add("travelers-dashboard-panel");
    oldPanel.innerHTML = `<div class="panel-head"><div><h3>المسافرون</h3><p>الموظفون المسافرون وحالة العودة والمباشرة</p></div><button class="secondary-btn" data-go-view="leaves">عرض الكل</button></div><div class="travelers-dashboard-list">${active.length ? active.slice(0,9).map((travel) => {
      const employee = employeeById(travel.employeeId); if (!employee) return "";
      const info = travelDurationInfo(travel);
      return `<div class="traveler-card-row">${avatar(employee)}<div><button type="button" class="employee-name-link" data-edit-employee="${employee.id}">${htmlEscape(employee.name)}</button><span>سافر: ${fmtDate(travel.travelDate)} · العودة: ${travel.returnDate ? fmtDate(travel.returnDate) : "غير محددة"}</span></div><div><strong>${info.elapsed}</strong><small>${info.remaining}</small></div></div>`;
    }).join("") : `<div class="empty-state"><strong>لا يوجد مسافرون حاليًا</strong></div>`}</div>`;
    const showAllBtn = oldPanel.querySelector('[data-go-view="leaves"]');
    if (showAllBtn) showAllBtn.addEventListener("click", () => switchView("leaves"));
    if (typeof hydrateIcons === "function") hydrateIcons(oldPanel);
    if (typeof hydrateAttachmentImages === "function") hydrateAttachmentImages(oldPanel);
  }
  function patchLabels(){
    try { if (pageMeta?.leaves) pageMeta.leaves = ["الإجازات والسفر", "طلبات الإجازات والسفر ومباشرة العمل"]; } catch (_) {}
    try { if (statusMeta) statusMeta.travel = { label: "مسافر", className: "status-leave" }; } catch (_) {}
    document.querySelectorAll('.main-nav [data-view="leaves"]').forEach((el) => {
      const labelSpan = Array.from(el.querySelectorAll("span")).find((span) => !span.classList.contains("nav-icon") && !span.classList.contains("nav-dot") && !span.classList.contains("nav-count"));
      if (labelSpan) labelSpan.textContent = "الإجازات والسفر";
      else if (el.textContent.includes("الإجازات")) el.textContent = el.textContent.replace("الإجازات", "الإجازات والسفر");
    });
  }
  function patchRenderFunctions(){
    if (!window.__travelRenderPatch) {
      window.__travelRenderPatch = true;
      const oldRenderLeaves = typeof renderLeaves === "function" ? renderLeaves : null;
      renderLeaves = function(){ renderLeavesAndTravel(); if (oldRenderLeaves && !safeEl("#leavesView .leave-travel-tables")) oldRenderLeaves(); };
      const oldRenderDashboard = typeof renderDashboard === "function" ? renderDashboard : null;
      renderDashboard = function(){ if (oldRenderDashboard) oldRenderDashboard(); renderDashboardRequestsCard(); renderTravelDashboardCard(); };
      const oldApprovedLeaveForDate = typeof approvedLeaveForDate === "function" ? approvedLeaveForDate : null;
      if (oldApprovedLeaveForDate) {
        approvedLeaveForDate = function(employee, dateString){
          const leave = oldApprovedLeaveForDate(employee, dateString);
          if (leave) return leave;
          const travel = travelRequests.find((item) => item.employeeId === employee.id && item.status === "approved" && item.travelDate && dateString >= item.travelDate && !item.workResumeDate);
          if (travel) return { id: travel.id, type: "سفر", from: travel.travelDate, to: travel.returnDate || dateString, returnDate: travel.workResumeDate || "" };
          return null;
        };
      }
    }
  }
  function bindTravelEvents(){
    document.addEventListener("click", (event) => {
      const target = event.target;
      const newTravel = target.closest("#newTravelBtn");
      const newLeave = target.closest("#newLeaveBtn");
      const approve = target.closest("[data-travel-approve]");
      const reject = target.closest("[data-travel-reject]");
      const resume = target.closest("[data-travel-resume]");
      const close = target.closest("[data-close-travel-modal]");
      const dashboardView = target.closest("[data-dashboard-request-view]");
      const dashboardAction = target.closest("[data-dashboard-request-action]");
      const dashboardClose = target.closest("[data-close-dashboard-request]");
      if (dashboardView) { event.preventDefault(); event.stopImmediatePropagation(); openDashboardRequestDetails(dashboardView.dataset.dashboardRequestView); return; }
      if (dashboardAction) { event.preventDefault(); event.stopImmediatePropagation(); performDashboardRequestAction(dashboardAction.dataset.dashboardRequestKey, dashboardAction.dataset.dashboardRequestAction); return; }
      if (dashboardClose) { event.preventDefault(); event.stopImmediatePropagation(); safeEl("#dashboardRequestModal")?.close(); return; }
      if (newTravel) { event.preventDefault(); event.stopImmediatePropagation(); openTravelRequestModal(); return; }
      if (newLeave) { event.preventDefault(); event.stopImmediatePropagation(); openExistingLeaveModal(); return; }
      if (approve) { event.preventDefault(); event.stopImmediatePropagation(); openTravelApproval(approve.dataset.travelApprove); return; }
      if (reject) { event.preventDefault(); event.stopImmediatePropagation(); rejectTravel(reject.dataset.travelReject); return; }
      if (resume) { event.preventDefault(); event.stopImmediatePropagation(); openTravelResume(resume.dataset.travelResume); return; }
      if (target.closest("#saveTravelRequestBtn")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const form = safeEl("#travelRequestForm");
        if (form) handleTravelRequestSubmit({ preventDefault(){}, currentTarget: form });
        return;
      }
      if (close) { event.preventDefault(); safeEl(`#${close.dataset.closeTravelModal}`)?.close(); }
    }, true);
    document.addEventListener("change", async (event) => {
      if (event.target?.id === "travelModeSelect") setTravelModeVisibility();
      if (event.target?.id === "travelReturnModeSelect") setTravelReturnModeVisibility();
      if (event.target?.name === "travelDate" || event.target?.name === "returnDate") updateTravelSummary();
      if (event.target?.name === "returnDays") syncTravelReturnDateFromDays();
      if (event.target?.id === "travelTicketAttachmentInput") {
        const file = event.target.files?.[0];
        pendingTicketAttachmentId = file && typeof saveAttachment === "function" ? await saveAttachment(file, "travel-ticket") : "";
      }
      if (event.target?.id === "travelVisaAttachmentInput") {
        const file = event.target.files?.[0];
        pendingVisaAttachmentId = file && typeof saveAttachment === "function" ? await saveAttachment(file, "travel-visa") : "";
      }
    });
    document.addEventListener("input", (event) => {
      if (event.target?.name === "returnDays") syncTravelReturnDateFromDays();
      if (event.target?.name === "travelDate") {
        syncTravelReturnDateFromDays();
        updateTravelSummary();
      }
    });
    document.addEventListener("submit", (event) => {
      if (event.target?.id === "travelRequestForm") handleTravelRequestSubmit(event);
      if (event.target?.id === "travelResumeForm") handleTravelResumeSubmit(event);
    }, true);
    document.addEventListener("click", (event) => {
      if (event.target?.id === "approveTravelOnlyBtn") { event.preventDefault(); approveTravel(false); }
      if (event.target?.id === "approveTravelWithCommissionBtn") { event.preventDefault(); approveTravel(true); }
    });
  }
  function initTravelPatch(){
    loadTravelRequests();
    patchLabels();
    ensureTravelModals();
    ensureDashboardRequestModal();
    patchRenderFunctions();
    bindTravelEvents();
    renderAll();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initTravelPatch);
  else initTravelPatch();
})();


/* Final dashboard alignment, latin numbers, absence shortcut, and expiring documents panels */
(function finalDashboardDocumentsPatch(){
  const TRAVEL_KEY = "nawah-travel-requests";
  const EST_DOC_KEY = "nawah-establishment-documents";
  const arDigitMap = {"٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"};
  function toLatinDigits(value){ return String(value ?? "").replace(/[٠-٩۰-۹]/g, ch => arDigitMap[ch] || ch); }
  try {
    window.arabicNumber = arabicNumber = function(value){ return Number(value || 0).toLocaleString("en-US"); };
    window.formatCurrency = formatCurrency = function(value){ return `${Number(value || 0).toLocaleString("en-US")} ر.س`; };
    window.formatDate = formatDate = function(dateString){
      if (!dateString) return "—";
      const date = typeof parseDate === "function" ? parseDate(dateString) : new Date(dateString);
      if (!date || Number.isNaN(date.getTime())) return "—";
      return new Intl.DateTimeFormat("ar-SA-u-nu-latn", { day: "numeric", month: "short", year: "numeric" }).format(date);
    };
    window.formatDateTime = formatDateTime = function(value){
      if (!value) return "—";
      return new Intl.DateTimeFormat("ar-SA-u-nu-latn", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value));
    };
  } catch(_) {}
  function esc(value){ return typeof escapeHtml === "function" ? escapeHtml(value ?? "") : String(value ?? "").replace(/[&<>\"]/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[m])); }
  function icon(name){ return typeof iconSvg === "function" ? iconSvg(name) : ""; }
  function parse(value){ return typeof parseDate === "function" ? parseDate(value) : (value ? new Date(value) : null); }
  function today(){ return typeof todayAtNoon === "function" ? todayAtNoon() : new Date(new Date().setHours(12,0,0,0)); }
  function inputDate(d){ return typeof formatInputDate === "function" ? formatInputDate(d) : d.toISOString().slice(0,10); }
  function daysUntil(value){ const d = parse(value); if (!d) return null; return Math.ceil((d - today()) / 86400000); }
  function within30(value){ const d = daysUntil(value); return d !== null && d >= 0 && d <= 30; }
  function remainingText(value){ const d = daysUntil(value); if (d === null) return ""; if (d === 0) return "ينتهي اليوم"; return `متبقي ${d} يوم`; }
  function empById(id){ return (Array.isArray(window.employees) ? window.employees : (typeof employees !== "undefined" ? employees : [])).find(e => String(e.id) === String(id)); }
  function allEmployees(){ return Array.isArray(window.employees) ? window.employees : (typeof employees !== "undefined" ? employees : []); }
  function loadTravel(){ try { const raw = localStorage.getItem(TRAVEL_KEY); const list = raw ? JSON.parse(raw) : []; return Array.isArray(list) ? list : []; } catch(_) { return []; } }
  function loadEstDocs(){ try { const raw = localStorage.getItem(EST_DOC_KEY); const list = raw ? JSON.parse(raw) : []; return Array.isArray(list) ? list : []; } catch(_) { return []; } }
  function dateLabel(){
    const d = today();
    const day = new Intl.DateTimeFormat("ar-SA-u-nu-latn", { weekday: "long" }).format(d);
    const date = new Intl.DateTimeFormat("ar-SA-u-nu-latn", { day: "numeric", month: "long", year: "numeric" }).format(d);
    return `${day}، ${date}`;
  }
  function replaceArabicDigitsInDom(root=document.body){
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if (!/[٠-٩۰-۹]/.test(node.nodeValue || "")) return NodeFilter.FILTER_REJECT;
        const parent = node.parentElement;
        if (parent && /^(SCRIPT|STYLE|TEXTAREA)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => { node.nodeValue = toLatinDigits(node.nodeValue); });
  }
  function ensureWelcomeBar(){
    const bar = document.querySelector(".dashboard-welcome-compact .welcome-copy");
    if (!bar) return;
    let reviewBtn = bar.querySelector(".banner-action[data-go-view='leaves']");
    if (reviewBtn) reviewBtn.innerHTML = `مراجعة الطلبات <span data-icon="arrow-left"></span>`;
    if (!bar.querySelector("#dashboardAbsenceBtn")) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.id = "dashboardAbsenceBtn";
      btn.className = "banner-action banner-absence-action";
      btn.innerHTML = `<span data-icon="user-x"></span> تسجيل الغياب`;
      if (reviewBtn) reviewBtn.insertAdjacentElement("afterend", btn); else bar.appendChild(btn);
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        const original = document.querySelector("#newAbsenceBtn");
        if (original) original.click();
        else if (typeof openAbsenceModal === "function") openAbsenceModal();
        else if (typeof switchView === "function") switchView("attendance");
      });
    }
    let date = bar.querySelector(".eyebrow");
    if (!date) { date = document.createElement("span"); date.className = "eyebrow"; bar.appendChild(date); }
    date.textContent = dateLabel();
    if (typeof hydrateIcons === "function") hydrateIcons(bar);
  }
  function renderTravelCardAligned(){
    const panel = document.querySelector(".travelers-dashboard-panel") || document.querySelector(".attendance-panel");
    if (!panel) return;
    const travels = loadTravel().filter(t => ["approved","pending"].includes(t.status) && !t.workResumeDate).sort((a,b) => String(b.createdAt || b.travelDate || "").localeCompare(String(a.createdAt || a.travelDate || "")));
    panel.classList.add("travelers-dashboard-panel");
    panel.innerHTML = `<div class="panel-head"><div><h3>المسافرون</h3><p>الموظفون المسافرون وحالة العودة والمباشرة</p></div><button class="text-btn" data-go-view="leaves">عرض الكل</button></div><div class="travelers-dashboard-list dashboard-list-ordered">${travels.length ? travels.slice(0, 7).map(travel => {
      const employee = empById(travel.employeeId) || { id: travel.employeeId || "", name: travel.employeeName || "موظف" };
      const status = travel.status === "pending" ? "بانتظار الموافقة" : "معتمد";
      const detail = `سفر · ${status} · ${travel.travelDate ? formatDate(travel.travelDate) : "غير محدد"}${travel.returnDate ? ` - ${formatDate(travel.returnDate)}` : ""}`;
      return `<div class="leave-preview-item dashboard-request-item traveler-request-row">
        ${typeof avatar === "function" ? avatar(employee) : ""}
        <div class="leave-preview-info">
          <button type="button" class="employee-name-link" data-edit-employee="${esc(employee.id)}">${esc(employee.name)}</button>
          <span>${esc(detail)}</span>
        </div>
        <div class="mini-actions dashboard-request-actions">
          <button type="button" class="quick-view-btn" data-dashboard-request-view="travel:${esc(travel.id)}" title="عرض الطلب">${icon("eye")}</button>
        </div>
      </div>`;
    }).join("") : `<div class="empty-state"><strong>لا يوجد مسافرون حاليًا</strong></div>`}</div>`;
    panel.querySelector('[data-go-view="leaves"]')?.addEventListener("click", (e)=>{ e.preventDefault(); if (typeof switchView === "function") switchView("leaves"); });
    if (typeof hydrateIcons === "function") hydrateIcons(panel);
  }
  function employeeExpiringDocs(){
    const out = [];
    allEmployees().forEach(emp => {
      if (within30(emp.identityExpiryGregorian)) out.push({ employee: emp, title: "الإقامة / الهوية", number: emp.identityNumber || "", expiryDate: emp.identityExpiryGregorian, view: emp.id });
      (Array.isArray(emp.passports) ? emp.passports : []).forEach((p, i) => { if (within30(p.expiryDate)) out.push({ employee: emp, title: `جواز السفر${p.number ? ` ${p.number}` : ""}`, number: p.number || "", expiryDate: p.expiryDate, view: emp.id }); });
      (Array.isArray(emp.documents) ? emp.documents : []).forEach((d, i) => { if (within30(d.expiryDate)) out.push({ employee: emp, title: d.type || d.name || d.title || `وثيقة موظف ${i+1}`, number: d.number || "", expiryDate: d.expiryDate, view: emp.id }); });
    });
    return out.sort((a,b) => (daysUntil(a.expiryDate) ?? 99) - (daysUntil(b.expiryDate) ?? 99));
  }
  function establishmentExpiringDocs(){
    return loadEstDocs().filter(d => within30(d.expiryDate)).map(d => ({
      id: d.id, title: d.title || d.name || d.number || "وثيقة منشأة", number: d.number || "", expiryDate: d.expiryDate, branchId: d.branchId || ""
    })).sort((a,b) => (daysUntil(a.expiryDate) ?? 99) - (daysUntil(b.expiryDate) ?? 99));
  }
  function docRow(item, employeeMode=false){
    const main = employeeMode ? `${item.title} - ${item.employee?.name || ""}` : item.title;
    const meta = `${item.number ? `رقم: ${item.number} · ` : ""}${formatDate(item.expiryDate)}`;
    const remain = remainingText(item.expiryDate);
    return `<div class="expiry-doc-row">
      <span class="expiry-doc-icon" data-icon="file"></span>
      <div class="expiry-doc-content"><strong>${esc(main)}</strong><small><span class="expiry-doc-meta">${esc(meta)}</span>${remain ? `<span class="expiry-doc-remaining">${esc(remain)}</span>` : ""}</small></div>
      ${employeeMode ? `<button type="button" class="quick-view-btn" data-edit-employee="${esc(item.employee?.id || "")}" title="فتح الموظف">${icon("eye")}</button>` : `<button type="button" class="quick-view-btn" data-go-view="establishmentDocuments" title="فتح الوثائق">${icon("eye")}</button>`}
    </div>`;
  }
  function ensureExpiryPanels(){
    const grid = document.querySelector(".dashboard-grid");
    const travelPanel = document.querySelector(".travelers-dashboard-panel") || document.querySelector(".attendance-panel");
    const requestPanel = document.querySelector(".leave-panel");
    if (!grid || !travelPanel || !requestPanel) return;
    let estPanel = document.querySelector("#dashboardEstDocsPanel");
    if (!estPanel) {
      estPanel = document.createElement("article");
      estPanel.id = "dashboardEstDocsPanel";
      estPanel.className = "panel expiry-dashboard-panel";
    }
    let empPanel = document.querySelector("#dashboardEmployeeDocsPanel");
    if (!empPanel) {
      empPanel = document.createElement("article");
      empPanel.id = "dashboardEmployeeDocsPanel";
      empPanel.className = "panel expiry-dashboard-panel";
    }
    requestPanel.insertAdjacentElement("afterend", estPanel);
    estPanel.insertAdjacentElement("afterend", empPanel);
    const est = establishmentExpiringDocs();
    estPanel.innerHTML = `<div class="panel-head"><div><h3>وثائق شارفت على الانتهاء</h3><p>وثائق المنشأة المتبقي عليها 30 يوم أو أقل</p></div><button class="text-btn" data-go-view="establishmentDocuments">عرض الكل</button></div><div class="expiry-doc-list">${est.length ? est.slice(0, 6).map(item => docRow(item, false)).join("") : `<div class="empty-state"><strong>لا توجد وثائق منشأة قريبة الانتهاء</strong></div>`}</div>`;
    const emp = employeeExpiringDocs();
    empPanel.innerHTML = `<div class="panel-head"><div><h3>وثائق الموظفين قرب الانتهاء</h3><p>الإقامات وجوازات السفر ووثائق الموظفين خلال 30 يوم</p></div><button class="text-btn" data-go-view="employees">عرض الكل</button></div><div class="expiry-doc-list">${emp.length ? emp.slice(0, 6).map(item => docRow(item, true)).join("") : `<div class="empty-state"><strong>لا توجد وثائق موظفين قريبة الانتهاء</strong></div>`}</div>`;
    [estPanel, empPanel].forEach(panel => panel.querySelectorAll('[data-go-view]').forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); if (typeof switchView === 'function') switchView(btn.dataset.goView); })));
    if (typeof hydrateIcons === "function") { hydrateIcons(estPanel); hydrateIcons(empPanel); }
  }
  function runDashboardFixes(){
    ensureWelcomeBar();
    renderTravelCardAligned();
    ensureExpiryPanels();
    replaceArabicDigitsInDom(document.body);
  }
  const previousRenderDashboard = typeof renderDashboard === "function" ? renderDashboard : null;
  if (previousRenderDashboard && !window.__finalDashboardDocumentsPatch) {
    window.__finalDashboardDocumentsPatch = true;
    renderDashboard = function(){ const result = previousRenderDashboard.apply(this, arguments); setTimeout(runDashboardFixes, 0); return result; };
  }
  document.addEventListener("click", (event) => {
    const absence = event.target.closest("#dashboardAbsenceBtn");
    if (absence) {
      event.preventDefault();
      const original = document.querySelector("#newAbsenceBtn");
      if (original) original.click();
      else if (typeof openAbsenceModal === "function") openAbsenceModal();
    }
  }, true);
  const boot = () => {
    runDashboardFixes();
    try { if (typeof renderAll === "function") renderAll(); } catch(_) {}
    setTimeout(runDashboardFixes, 50);
    setTimeout(() => replaceArabicDigitsInDom(document.body), 250);
    try {
      const observer = new MutationObserver(() => replaceArabicDigitsInDom(document.body));
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    } catch(_) {}
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();


/* Direct fix: travel resume submit and dashboard expiry emphasis */
(function travelResumeSubmitDirectFix(){
  document.addEventListener("click", (event) => {
    const submitBtn = event.target.closest("#travelResumeForm button[type='submit'], #travelResumeForm .primary-btn");
    if (!submitBtn) return;
    const form = submitBtn.closest("#travelResumeForm");
    if (!form || submitBtn.dataset.resumeDirectSubmitted === "1") return;
    submitBtn.dataset.resumeDirectSubmitted = "1";
    setTimeout(() => { submitBtn.dataset.resumeDirectSubmitted = ""; }, 500);
    if (typeof form.requestSubmit === "function") {
      event.preventDefault();
      event.stopPropagation();
      form.dispatchEvent(new SubmitEvent("submit", { bubbles: true, cancelable: true, submitter: submitBtn }));
    }
  }, true);
})();


/* Authentication permissions final guard */
(function authPermissionFinalGuard(){
  const install = () => {
    if (typeof switchView === "function" && !window.__authSwitchGuardInstalled) {
      window.__authSwitchGuardInstalled = true;
      const originalSwitchView = switchView;
      switchView = function guardedSwitchView(viewName) {
        if (pageMeta[viewName] && !roleCanOpen(viewName)) {
          if (typeof showToast === "function") showToast("ليست لديك صلاحية الدخول إلى هذا القسم");
          return;
        }
        return originalSwitchView.apply(this, arguments);
      };
    }
    try { applyRolePermissions(); } catch (_) {}
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(install, 250));
  else setTimeout(install, 250);
})();


/* =========================================================
   Granular employee permissions + clean login background
   ========================================================= */
(function granularEmployeePermissionsPatch(){
  const PERMISSION_GROUPS = [
    { id: "dashboard", title: "الصفحة الرئيسية", items: [
      ["dashboard.statsEmployees", "إظهار بطاقة إجمالي الموظفين"],
      ["dashboard.statsAttendance", "إظهار بطاقة الحضور اليوم"],
      ["dashboard.statsLeaves", "إظهار بطاقة طلبات الإجازة"],
      ["dashboard.statsPayroll", "إظهار بطاقة الرواتب"],
      ["dashboard.travelers", "إظهار بطاقة المسافرون"],
      ["dashboard.reviewRequests", "إظهار بطاقة طلبات تحتاج مراجعة"],
      ["dashboard.recentEmployees", "إظهار أحدث الموظفين"],
      ["dashboard.estDocs", "إظهار وثائق المنشأة القريبة من الانتهاء"],
      ["dashboard.empDocs", "إظهار وثائق الموظفين القريبة من الانتهاء"],
      ["dashboard.reviewActions", "إظهار أزرار الموافقة والرفض في الرئيسية"],
      ["dashboard.absenceShortcut", "إظهار زر تسجيل الغياب في الشريط"],
    ]},
    { id: "employees", title: "الموظفون", items: [
      ["employees.view", "فتح صفحة الموظفين"],
      ["employees.viewAll", "عرض جميع الموظفين"],
      ["employees.viewSelf", "عرض ملفه فقط"],
      ["employees.create", "إضافة موظف"],
      ["employees.edit", "تعديل بيانات الموظفين"],
      ["employees.delete", "حذف الموظفين"],
      ["employees.attachments", "عرض ورفع مرفقات الموظفين"],
    ]},
    { id: "attendance", title: "الحضور والانصراف", items: [
      ["attendance.view", "فتح صفحة الحضور والانصراف"],
      ["attendance.viewAll", "عرض حضور جميع الموظفين"],
      ["attendance.viewSelf", "عرض حضوره فقط"],
      ["attendance.recordAbsence", "تسجيل غياب"],
      ["attendance.edit", "تعديل سجلات الحضور"],
    ]},
    { id: "leaves", title: "الإجازات والسفر", items: [
      ["leaves.view", "فتح صفحة الإجازات والسفر"],
      ["leaves.viewOwn", "عرض طلباته فقط"],
      ["leaves.viewAll", "عرض طلبات الجميع"],
      ["leaves.createLeave", "إنشاء طلب إجازة"],
      ["leaves.createTravel", "إنشاء طلب سفر"],
      ["leaves.approve", "الموافقة على الطلبات"],
      ["leaves.reject", "رفض الطلبات"],
      ["leaves.resume", "تسجيل المباشرة بعد العودة"],
      ["leaves.viewTravelers", "عرض قائمة المسافرين"],
    ]},
    { id: "payroll", title: "الرواتب والعمولات", items: [
      ["payroll.view", "فتح صفحة الرواتب"],
      ["payroll.edit", "تعديل الرواتب والعمولات"],
      ["payroll.print", "طباعة المخالصة"],
    ]},
    { id: "companyDocs", title: "وثائق المنشأة", items: [
      ["companyDocs.view", "عرض وثائق المنشأة"],
      ["companyDocs.create", "إضافة وثيقة"],
      ["companyDocs.edit", "تعديل وثيقة"],
      ["companyDocs.delete", "حذف وثيقة"],
      ["companyDocs.attachments", "رفع وعرض مرفقات الوثائق"],
    ]},
    { id: "settings", title: "الإعدادات والأقسام", items: [
      ["settings.view", "فتح الإعدادات"],
      ["settings.edit", "تعديل الإعدادات"],
      ["departments.view", "فتح الأقسام"],
      ["departments.edit", "تعديل الإدارات والأقسام والمهن"],
    ]},
  ];
  const ALL_PERMISSION_KEYS = PERMISSION_GROUPS.flatMap(g => g.items.map(i => i[0]));
  const DEFAULT_EMPLOYEE_PERMISSIONS = {
    "dashboard.statsLeaves": true,
    "leaves.view": true,
    "leaves.viewOwn": true,
    "leaves.createLeave": true,
    "leaves.createTravel": true,
  };
  function isAdminRole(role){ return role === "admin"; }
  function normalizeRole(role){ return role === "admin" ? "admin" : "employee"; }
  function adminPermissions(){ return Object.fromEntries(ALL_PERMISSION_KEYS.map(key => [key, true])); }
  function normalizePermissions(raw, role = "employee"){
    if (normalizeRole(role) === "admin") return adminPermissions();
    let obj = raw && typeof raw === "object" && !Array.isArray(raw) ? raw : {};
    try { if (typeof raw === "string") obj = JSON.parse(raw); } catch(_) { obj = {}; }
    const base = { ...DEFAULT_EMPLOYEE_PERMISSIONS, ...obj };
    return Object.fromEntries(ALL_PERMISSION_KEYS.map(key => [key, Boolean(base[key])]));
  }
  function currentPermissions(){ return normalizePermissions(authProfile?.permissions, currentRoleKey()); }
  window.hasAppPermission = function(key){
    if (currentRoleKey() === "admin") return true;
    return Boolean(currentPermissions()[key]);
  };
  function can(key){ return window.hasAppPermission(key); }
  function currentEmployee(){
    const email = String(authProfile?.email || authUser?.email || "").trim().toLowerCase();
    if (!email) return null;
    return (Array.isArray(employees) ? employees : []).find(emp => String(emp.email || "").trim().toLowerCase() === email) || null;
  }
  function currentEmployeeId(){ return currentEmployee()?.id || ""; }
  function scopedEmployees(){
    if (currentRoleKey() === "admin" || can("employees.viewAll")) return employees;
    const mine = currentEmployee();
    if (mine && (can("employees.viewSelf") || can("leaves.viewOwn") || can("attendance.viewSelf"))) return [mine];
    return [];
  }
  function ownsEmployee(employeeId){
    const mine = currentEmployeeId();
    return mine && String(employeeId) === String(mine);
  }
  function canSeeRequestFor(employeeId){
    if (currentRoleKey() === "admin") return true;
    if (can("leaves.viewAll")) return true;
    return can("leaves.viewOwn") && ownsEmployee(employeeId);
  }
  function canOpenViewGranular(view){
    if (currentRoleKey() === "admin") return true;
    const map = {
      dashboard: true,
      employees: can("employees.view") || can("employees.viewSelf") || can("employees.viewAll"),
      attendance: can("attendance.view") || can("attendance.viewSelf") || can("attendance.viewAll"),
      leaves: can("leaves.view") || can("leaves.viewOwn") || can("leaves.viewAll"),
      payroll: can("payroll.view"),
      departments: can("departments.view"),
      settings: can("settings.view"),
      users: false,
    };
    return Boolean(map[view]);
  }

  // Roles are now only admin / employee.
  AUTH_ROLES.admin = { label: "مدير النظام", views: ["dashboard", "employees", "attendance", "leaves", "payroll", "departments", "settings", "users"] };
  AUTH_ROLES.employee = { label: "موظف", views: ["dashboard", "leaves"] };
  delete AUTH_ROLES.hr; delete AUTH_ROLES.accountant; delete AUTH_ROLES.manager;
  currentRoleKey = function(){ return normalizeRole(authProfile?.role); };
  roleCanOpen = function(viewName){ return canOpenViewGranular(viewName); };
  roleOptions = function(selected = "employee"){
    const role = normalizeRole(selected);
    return `<option value="admin" ${role === "admin" ? "selected" : ""}>مدير النظام</option><option value="employee" ${role === "employee" ? "selected" : ""}>موظف</option>`;
  };
  roleBadge = function(role){
    const label = normalizeRole(role) === "admin" ? "مدير النظام" : "موظف";
    return `<span class="status-badge status-approved">${escapeHtml(label)}</span>`;
  };

  const oldApplyRolePermissions = applyRolePermissions;
  applyRolePermissions = function(){
    updateTopbarUser();
    document.querySelectorAll(".nav-item[data-view]").forEach((button) => {
      button.classList.toggle("is-permission-hidden", !canOpenViewGranular(button.dataset.view));
    });
    document.querySelectorAll(".stat-card[data-go-view], [data-go-view]").forEach((element) => {
      const view = element.dataset.goView;
      if (view && pageMeta[view]) element.dataset.permissionHidden = canOpenViewGranular(view) ? "false" : "true";
    });
    applyDashboardPermissionVisibility();
  };

  function applyDashboardPermissionVisibility(){
    if (currentRoleKey() === "admin") {
      document.querySelectorAll("[data-granular-hidden='true']").forEach(el => el.dataset.granularHidden = "false");
      return;
    }
    const pairs = [
      [".stat-card-employees", "dashboard.statsEmployees"],
      [".stat-card-attendance", "dashboard.statsAttendance"],
      [".stat-card-leaves", "dashboard.statsLeaves"],
      [".stat-card-payroll", "dashboard.statsPayroll"],
      [".travelers-dashboard-panel", "dashboard.travelers"],
      [".leave-panel", "dashboard.reviewRequests"],
      [".recent-panel", "dashboard.recentEmployees"],
      ["#dashboardEstDocsPanel", "dashboard.estDocs"],
      ["#dashboardEmployeeDocsPanel", "dashboard.empDocs"],
      ["#dashboardAbsenceBtn", "dashboard.absenceShortcut"],
    ];
    pairs.forEach(([selector, key]) => document.querySelectorAll(selector).forEach(el => el.dataset.granularHidden = can(key) ? "false" : "true"));
    document.querySelectorAll(".leave-panel [data-dashboard-request-action]").forEach(btn => btn.dataset.granularHidden = can("dashboard.reviewActions") && (can("leaves.approve") || can("leaves.reject")) ? "false" : "true");
  }

  function renderPermissionEditor(container, permissions, role){
    if (!container) return;
    const normalized = normalizePermissions(permissions, role);
    container.innerHTML = PERMISSION_GROUPS.map(group => `
      <section class="granular-permission-section">
        <div class="granular-permission-head"><strong>${escapeHtml(group.title)}</strong><button type="button" class="text-btn" data-permission-group-toggle="${escapeHtml(group.id)}">تحديد الكل</button></div>
        <div class="granular-permission-grid">
          ${group.items.map(([key, label]) => `<label class="granular-permission-item"><input type="checkbox" name="permission_${escapeHtml(key)}" data-permission-key="${escapeHtml(key)}" ${normalized[key] ? "checked" : ""}><span>${escapeHtml(label)}</span></label>`).join("")}
        </div>
      </section>`).join("");
  }
  function readPermissionsFromForm(form){
    const role = normalizeRole(form.elements.role?.value || "employee");
    if (role === "admin") return adminPermissions();
    const values = {};
    ALL_PERMISSION_KEYS.forEach(key => {
      values[key] = Boolean(form.querySelector(`[data-permission-key="${CSS.escape(key)}"]`)?.checked);
    });
    // Keep an employee able to enter at least the dashboard.
    return normalizePermissions(values, role);
  }
  function ensureGranularPermissionEditor(){
    ensureUsersManagementView();
    const form = document.querySelector("#appUserProfileForm");
    if (!form) return;
    const roleSelect = form.elements.role;
    if (roleSelect) roleSelect.innerHTML = roleOptions(roleSelect.value || "employee");
    let holder = form.querySelector("#granularPermissionsHolder");
    if (!holder) {
      holder = document.createElement("div");
      holder.id = "granularPermissionsHolder";
      holder.className = "granular-permissions-holder";
      const help = form.querySelector(".user-help-card");
      if (help) help.insertAdjacentElement("afterend", holder); else form.querySelector(".user-profile-modal-body")?.appendChild(holder);
    }
    if (!holder.innerHTML.trim()) renderPermissionEditor(holder, DEFAULT_EMPLOYEE_PERMISSIONS, roleSelect?.value || "employee");
    updatePermissionEditorVisibility();
  }
  function updatePermissionEditorVisibility(){
    const form = document.querySelector("#appUserProfileForm");
    const holder = document.querySelector("#granularPermissionsHolder");
    const role = normalizeRole(form?.elements.role?.value || "employee");
    if (holder) holder.style.display = role === "admin" ? "none" : "block";
  }
  function setPermissionEditorValues(permissions, role){
    ensureGranularPermissionEditor();
    renderPermissionEditor(document.querySelector("#granularPermissionsHolder"), permissions, role);
    updatePermissionEditorVisibility();
  }

  const oldEnsureUsersManagementView = ensureUsersManagementView;
  ensureUsersManagementView = function(){
    oldEnsureUsersManagementView();
    const form = document.querySelector("#appUserProfileForm");
    if (form?.elements.role) form.elements.role.innerHTML = roleOptions(form.elements.role.value || "employee");
    if (!document.querySelector("#granularPermissionStyles")) {
      const style = document.createElement("style");
      style.id = "granularPermissionStyles";
      style.textContent = `
        [data-granular-hidden="true"]{display:none!important;}
        .granular-permissions-holder{grid-column:1/-1;border:1px solid #dce8ec;background:#fbfeff;border-radius:18px;padding:14px;display:grid;gap:12px;max-height:360px;overflow:auto;}
        .granular-permission-section{border:1px solid #e5eef1;border-radius:16px;background:#fff;padding:12px;}
        .granular-permission-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;color:#0f5960;}
        .granular-permission-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 12px;}
        .granular-permission-item{display:flex!important;flex-direction:row!important;align-items:center;gap:8px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:9px 10px;font-size:11px;color:#334155;}
        .granular-permission-item input{width:16px!important;height:16px!important;min-height:auto!important;accent-color:#0f9f8f;}
        .auth-gate{background:radial-gradient(circle at 15% 15%, rgba(45,212,191,.28), transparent 30%),radial-gradient(circle at 85% 20%, rgba(14,165,233,.24), transparent 28%),linear-gradient(135deg,#062b36 0%,#0f766e 48%,#18b990 100%)!important;overflow:hidden;}
        .auth-gate:before{content:"";position:absolute;inset:24px;border:1px solid rgba(255,255,255,.16);border-radius:34px;background:linear-gradient(135deg,rgba(255,255,255,.10),rgba(255,255,255,.02));pointer-events:none;}
        .auth-gate:after{content:"نظام إدارة الموظفين";position:absolute;right:7vw;top:8vh;color:rgba(255,255,255,.13);font-size:54px;font-weight:900;letter-spacing:-1px;}
        body.auth-locked .app-shell{filter:none!important;opacity:0!important;pointer-events:none!important;}
        .auth-card{position:relative;z-index:2;border-radius:30px!important;box-shadow:0 34px 90px rgba(2,6,23,.34)!important;}
        @media(max-width:760px){.granular-permission-grid{grid-template-columns:1fr}.auth-gate:after{display:none}}
      `;
      document.head.appendChild(style);
    }
    ensureGranularPermissionEditor();
  };

  loadAuthProfile = async function(user){
    if (!user || !supabaseClient) return null;
    for (const [column, value] of [["user_id", user.id], ["email", user.email]]) {
      try {
        const { data, error } = await supabaseClient.from("app_user_profiles").select("*").eq(column, value).maybeSingle();
        if (error) throw error;
        if (data) return { ...data, role: normalizeRole(data.role), permissions: normalizePermissions(data.permissions, data.role) };
      } catch (error) { console.warn("تعذر قراءة صلاحيات المستخدم", column, error); }
    }
    return { full_name: user.email || "مستخدم", email: user.email || "", role: "employee", is_active: false, permissions: normalizePermissions({}, "employee") };
  };

  loadAppUserProfiles = async function(){
    if (!supabaseClient) return [];
    const { data, error } = await supabaseClient.from("app_user_profiles").select("*").order("created_at", { ascending: false });
    if (error) throw error;
    appUserProfilesCache = (Array.isArray(data) ? data : []).map(p => ({ ...p, role: normalizeRole(p.role), permissions: normalizePermissions(p.permissions, p.role) }));
    return appUserProfilesCache;
  };

  const oldResetUserProfileForm = resetUserProfileForm;
  resetUserProfileForm = function(){
    oldResetUserProfileForm();
    const form = document.querySelector("#appUserProfileForm");
    if (form?.elements.role) form.elements.role.value = "employee";
    setPermissionEditorValues(DEFAULT_EMPLOYEE_PERMISSIONS, "employee");
  };
  fillUserProfileForm = function(id){
    const profile = appUserProfilesCache.find((item) => item.id === id);
    const form = document.querySelector("#appUserProfileForm");
    if (!profile || !form) return;
    ensureGranularPermissionEditor();
    form.elements.profileId.value = profile.id || "";
    form.elements.fullName.value = profile.full_name || "";
    form.elements.email.value = profile.email || "";
    if (form.elements.password) { form.elements.password.value = ""; form.elements.password.required = false; form.elements.password.closest("label")?.classList.add("is-hidden"); }
    form.elements.role.value = normalizeRole(profile.role);
    form.elements.isActive.value = profile.is_active ? "true" : "false";
    setPermissionEditorValues(profile.permissions, profile.role);
    const title = document.querySelector("#userProfileModalTitle"); if (title) title.textContent = "تعديل مستخدم";
    const modal = document.querySelector("#userProfileModal"); if (modal && !modal.open) modal.showModal();
  };
  renderAppUserProfiles = function(){
    const body = document.querySelector("#appUserProfilesBody");
    if (!body) return;
    if (!appUserProfilesCache.length) {
      body.innerHTML = `<tr><td colspan="5"><div class="empty-state"><strong>لا يوجد مستخدمون بعد</strong><p>أضف أول مستخدم من زر إضافة مستخدم.</p></div></td></tr>`;
      return;
    }
    body.innerHTML = appUserProfilesCache.map((profile) => `
      <tr>
        <td><strong>${escapeHtml(profile.full_name || "—")}</strong></td>
        <td dir="ltr">${escapeHtml(profile.email || "—")}</td>
        <td>${roleBadge(profile.role)}</td>
        <td><span class="${profile.is_active ? "user-status-active" : "user-status-disabled"}">${profile.is_active ? "مفعل" : "موقوف"}</span></td>
        <td><span class="user-action-row"><button type="button" class="quick-view-btn" data-edit-user-profile="${escapeHtml(profile.id)}" title="تعديل">${iconSvg("edit")}</button><button type="button" class="quick-view-btn ${profile.is_active ? "warning-inline-btn" : ""}" data-toggle-user-profile="${escapeHtml(profile.id)}" title="${profile.is_active ? "إيقاف" : "تنشيط"}">${iconSvg(profile.is_active ? "user-x" : "check")}</button><button type="button" class="quick-view-btn danger-inline-btn" data-delete-user-profile="${escapeHtml(profile.id)}" title="حذف">${iconSvg("trash")}</button></span></td>
      </tr>`).join("");
  };

  saveUserProfileFromForm = async function(form){
    if (currentRoleKey() !== "admin") return showToast("هذه الشاشة للمدير فقط");
    if (!supabaseClient) return showToast("Supabase غير متصل");
    const profileId = form.elements.profileId.value.trim();
    const role = normalizeRole(form.elements.role.value);
    const payload = {
      full_name: form.elements.fullName.value.trim(),
      email: form.elements.email.value.trim().toLowerCase(),
      role,
      is_active: form.elements.isActive.value === "true",
      permissions: readPermissionsFromForm(form),
      updated_at: new Date().toISOString()
    };
    const password = form.elements.password?.value || "";
    if (!payload.full_name || !payload.email) return showToast("أدخل الاسم والبريد");
    if (!profileId && password.length < 6) return showToast("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
    try {
      if (profileId) {
        const { error } = await supabaseClient.from("app_user_profiles").update(payload).eq("id", profileId);
        if (error) throw error;
      } else {
        const { data, error } = await supabaseClient.functions.invoke("admin-create-user", { body: { email: payload.email, password, fullName: payload.full_name, role: payload.role, isActive: payload.is_active, permissions: payload.permissions } });
        if (error) throw error;
        if (data?.error) throw new Error(data.error);
        if (!data?.user_id && !data?.userId) throw new Error("لم يتم إنشاء حساب الدخول في Authentication");
      }
      resetUserProfileForm();
      document.querySelector("#userProfileModal")?.close();
      await renderUsersManagement();
      showToast(profileId ? "تم تحديث المستخدم والصلاحيات" : "تم إنشاء المستخدم والصلاحيات");
    } catch (error) {
      console.error(error);
      showToast(String(error?.message || "تعذر حفظ المستخدم أو إنشاء حساب الدخول").slice(0, 120));
    }
  };

  // Dashboard scoped data and component visibility.
  function loadTravelList(){ try { const raw = localStorage.getItem("nawah-travel-requests"); const list = raw ? JSON.parse(raw) : []; return Array.isArray(list) ? list : []; } catch(_) { return []; } }
  function empById(id){ return employees.find(e => String(e.id) === String(id)); }
  function fmtDate(v){ return typeof formatDate === "function" ? formatDate(v) : (v || "—"); }
  function esc(v){ return typeof escapeHtml === "function" ? escapeHtml(v ?? "") : String(v ?? ""); }
  function avatarFor(emp){ return typeof employeeAvatar === "function" ? employeeAvatar(emp) : (typeof avatar === "function" ? avatar(emp) : ""); }
  function renderScopedDashboardRequests(){
    const list = document.querySelector("#leavePreviewList");
    if (!list || currentRoleKey() === "admin") return;
    if (!can("dashboard.reviewRequests")) { list.innerHTML = ""; return; }
    const items = [];
    if (Array.isArray(leaves)) leaves.filter(l => l.status === "pending" && canSeeRequestFor(l.employeeId)).forEach(l => { const emp = empById(l.employeeId); if (emp) items.push({ source:"leave", id:l.id, emp, title:"إجازة", desc:`${l.type || "إجازة"} · ${l.days || ""} أيام` }); });
    loadTravelList().filter(t => t.status === "pending" && canSeeRequestFor(t.employeeId)).forEach(t => { const emp = empById(t.employeeId) || { id:t.employeeId, name:t.employeeName || "موظف" }; items.push({ source:"travel", id:t.id, emp, title:"سفر", desc:`سفر · ${t.travelDate ? fmtDate(t.travelDate) : "غير محدد"}` }); });
    list.innerHTML = items.length ? items.slice(0, 9).map(req => `<div class="leave-preview-item dashboard-request-item">${avatarFor(req.emp)}<div class="leave-preview-info"><button type="button" class="employee-name-link" data-edit-employee="${esc(req.emp.id)}">${esc(req.emp.name)}</button><span><b>${esc(req.title)}</b> · ${esc(req.desc)}</span></div><div class="mini-actions dashboard-request-actions"><button type="button" class="quick-view-btn" data-dashboard-request-view="${req.source}:${esc(req.id)}" title="عرض الطلب">${iconSvg("eye")}</button>${can("dashboard.reviewActions") && (can("leaves.approve") || can("leaves.reject")) ? `<button type="button" data-dashboard-request-action="approve" data-dashboard-request-key="${req.source}:${esc(req.id)}" title="موافقة">${iconSvg("check")}</button><button type="button" data-dashboard-request-action="reject" data-dashboard-request-key="${req.source}:${esc(req.id)}" title="رفض">${iconSvg("x")}</button>` : ""}</div></div>`).join("") : `<div class="empty-state"><strong>لا توجد طلبات ضمن صلاحيتك</strong></div>`;
    if (typeof hydrateIcons === "function") hydrateIcons(list);
  }
  function renderScopedTravelers(){
    const panel = document.querySelector(".travelers-dashboard-panel") || document.querySelector(".attendance-panel");
    if (!panel || currentRoleKey() === "admin") return;
    if (!can("dashboard.travelers") || !can("leaves.viewTravelers")) { panel.dataset.granularHidden = "true"; return; }
    const travels = loadTravelList().filter(t => ["approved","pending"].includes(t.status) && !t.workResumeDate && canSeeRequestFor(t.employeeId));
    panel.innerHTML = `<div class="panel-head"><div><h3>المسافرون</h3><p>الموظفون المسافرون ضمن صلاحيتك</p></div><button class="text-btn" data-go-view="leaves">عرض الكل</button></div><div class="travelers-dashboard-list dashboard-list-ordered">${travels.length ? travels.slice(0,7).map(t => { const emp = empById(t.employeeId) || {id:t.employeeId,name:t.employeeName||"موظف"}; return `<div class="leave-preview-item dashboard-request-item traveler-request-row">${avatarFor(emp)}<div class="leave-preview-info"><button type="button" class="employee-name-link" data-edit-employee="${esc(emp.id)}">${esc(emp.name)}</button><span>سفر · ${t.status === "pending" ? "بانتظار الموافقة" : "معتمد"} · ${t.travelDate ? fmtDate(t.travelDate) : "غير محدد"}</span></div><div class="mini-actions dashboard-request-actions"><button type="button" class="quick-view-btn" data-dashboard-request-view="travel:${esc(t.id)}" title="عرض الطلب">${iconSvg("eye")}</button></div></div>`; }).join("") : `<div class="empty-state"><strong>لا يوجد مسافرون ضمن صلاحيتك</strong></div>`}</div>`;
    panel.classList.add("travelers-dashboard-panel");
    if (typeof hydrateIcons === "function") hydrateIcons(panel);
  }
  const oldRenderDashboardGranular = renderDashboard;
  renderDashboard = function(){
    oldRenderDashboardGranular();
    if (currentRoleKey() !== "admin") {
      const visibleEmployees = scopedEmployees();
      const total = document.querySelector("#totalEmployees"); if (total && !can("employees.viewAll")) total.textContent = arabicNumber(visibleEmployees.length);
      renderScopedDashboardRequests();
      renderScopedTravelers();
    }
    applyDashboardPermissionVisibility();
  };

  // Hide blocked action buttons globally after each render.
  const oldRenderAllGranular = renderAll;
  renderAll = function(){
    oldRenderAllGranular();
    applyGranularActionVisibility();
  };
  function applyGranularActionVisibility(){
    if (currentRoleKey() === "admin") return;
    document.querySelectorAll("#openEmployeeModal, [data-open-employee-modal]").forEach(el => el.dataset.granularHidden = can("employees.create") ? "false" : "true");
    document.querySelectorAll("[data-delete-employee]").forEach(el => el.dataset.granularHidden = can("employees.delete") ? "false" : "true");
    document.querySelectorAll("[data-edit-employee]").forEach(el => el.dataset.granularHidden = can("employees.edit") || ownsEmployee(el.dataset.editEmployee) ? "false" : "true");
    document.querySelectorAll("#newLeaveBtn").forEach(el => el.dataset.granularHidden = can("leaves.createLeave") ? "false" : "true");
    document.querySelectorAll("#newTravelBtn").forEach(el => el.dataset.granularHidden = can("leaves.createTravel") ? "false" : "true");
    document.querySelectorAll("[data-leave-action], [data-dashboard-request-action], #approveTravelOnlyBtn, #approveTravelWithCommissionBtn").forEach(el => el.dataset.granularHidden = can("leaves.approve") || can("leaves.reject") ? "false" : "true");
    document.querySelectorAll("#newAbsenceBtn, #dashboardAbsenceBtn").forEach(el => el.dataset.granularHidden = can("attendance.recordAbsence") || can("dashboard.absenceShortcut") ? "false" : "true");
  }

  document.addEventListener("change", (event) => {
    if (event.target?.matches?.("#appUserProfileForm [name='role']")) updatePermissionEditorVisibility();
  });
  document.addEventListener("click", (event) => {
    const groupBtn = event.target.closest("[data-permission-group-toggle]");
    if (groupBtn) {
      event.preventDefault();
      const section = groupBtn.closest(".granular-permission-section");
      const boxes = Array.from(section?.querySelectorAll("input[type='checkbox']") || []);
      const shouldCheck = boxes.some(box => !box.checked);
      boxes.forEach(box => { box.checked = shouldCheck; });
    }
  });

  // Initialize patched UI after current script setup.
  setTimeout(() => { try { ensureUsersManagementView(); applyRolePermissions(); applyGranularActionVisibility(); } catch(e){ console.warn(e); } }, 0);
})();

/* =========================================================
   Scoped employee data lists for employee role
   ========================================================= */
(function scopedEmployeeListsPatch(){
  function isEmployeeRole(){ return typeof currentRoleKey === "function" && currentRoleKey() !== "admin"; }
  function has(key){ return typeof window.hasAppPermission === "function" ? window.hasAppPermission(key) : true; }
  function myEmployee(){
    const email = String(authProfile?.email || authUser?.email || "").trim().toLowerCase();
    return (Array.isArray(employees) ? employees : []).find(e => String(e.email || "").trim().toLowerCase() === email) || null;
  }
  function canSeeEmp(id){
    if (!isEmployeeRole()) return true;
    if (has("employees.viewAll") || has("leaves.viewAll") || has("attendance.viewAll")) return true;
    const me = myEmployee();
    return Boolean(me && String(me.id) === String(id));
  }
  const oldFilteredEmployees = typeof filteredEmployees === "function" ? filteredEmployees : null;
  if (oldFilteredEmployees) {
    filteredEmployees = function(){
      const list = oldFilteredEmployees();
      if (!isEmployeeRole()) return list;
      if (has("employees.viewAll")) return list;
      const me = myEmployee();
      return me ? list.filter(e => String(e.id) === String(me.id)) : [];
    };
  }
  function loadTravels(){ try { const raw = localStorage.getItem("nawah-travel-requests"); const list = raw ? JSON.parse(raw) : []; return Array.isArray(list) ? list : []; } catch(_) { return []; } }
  function esc(v){ return typeof escapeHtml === "function" ? escapeHtml(v ?? "") : String(v ?? ""); }
  function fmt(v){ return typeof formatDate === "function" ? formatDate(v) : (v || "—"); }
  function emp(id){ return (Array.isArray(employees) ? employees : []).find(e => String(e.id) === String(id)); }
  function badge(status){ return typeof leaveStatusBadge === "function" ? leaveStatusBadge(status) : `<span>${esc(status)}</span>`; }
  const oldRenderLeavesScoped = typeof renderLeaves === "function" ? renderLeaves : null;
  if (oldRenderLeavesScoped) {
    renderLeaves = function(){
      if (!isEmployeeRole()) return oldRenderLeavesScoped();
      const view = document.querySelector("#leavesView");
      if (!view) return;
      if (!has("leaves.view") && !has("leaves.viewOwn") && !has("leaves.viewAll")) {
        view.innerHTML = `<div class="empty-state"><strong>ليست لديك صلاحية عرض الإجازات والسفر</strong></div>`;
        return;
      }
      const my = myEmployee();
      const leaveItems = (Array.isArray(leaves) ? leaves : []).filter(l => canSeeEmp(l.employeeId));
      const travelItems = loadTravels().filter(t => canSeeEmp(t.employeeId));
      const canApprove = has("leaves.approve") || has("leaves.reject");
      view.innerHTML = `
        <div class="leave-travel-hero">
          ${has("leaves.createLeave") ? `<button type="button" class="request-card" id="newLeaveBtn"><span data-icon="calendar"></span><strong>طلب إجازة</strong><small>إنشاء طلب إجازة جديد</small></button>` : ""}
          ${has("leaves.createTravel") ? `<button type="button" class="request-card" id="newTravelBtn"><span data-icon="plane"></span><strong>طلب سفر</strong><small>طلب سفر بتاريخ عودة أو بدون عودة</small></button>` : ""}
        </div>
        <div class="leave-travel-tables scoped-leave-travel-tables">
          <article class="panel"><div class="panel-head"><div><h3>طلبات السفر</h3><p>${has("leaves.viewAll") ? "جميع طلبات السفر" : "طلبات السفر الخاصة بك"}</p></div></div>
            <div class="leave-preview-list">${travelItems.length ? travelItems.map(t => { const e = emp(t.employeeId) || { id:t.employeeId, name:t.employeeName || "موظف" }; return `<div class="leave-request"><div class="leave-request-main"><div class="leave-request-title"><button type="button" class="employee-name-link" ${canSeeEmp(e.id) ? `data-edit-employee="${esc(e.id)}"` : ""}>${esc(e.name)}</button><span>سفر · ${esc(t.status === "pending" ? "معلق" : t.status === "approved" ? "معتمد" : "مرفوض")}</span></div><div class="leave-dates"><span>${fmt(t.travelDate)} ${t.returnDate ? `إلى ${fmt(t.returnDate)}` : ""}</span></div></div><div class="leave-request-actions">${canApprove && t.status === "pending" ? `<button class="secondary-btn" data-dashboard-request-action="reject" data-dashboard-request-key="travel:${esc(t.id)}">رفض</button><button class="primary-btn" data-dashboard-request-action="approve" data-dashboard-request-key="travel:${esc(t.id)}">موافقة</button>` : badge(t.status)}</div></div>`; }).join("") : `<div class="empty-state"><strong>لا توجد طلبات سفر ضمن صلاحيتك</strong></div>`}</div>
          </article>
          <article class="panel"><div class="panel-head"><div><h3>طلبات الإجازة</h3><p>${has("leaves.viewAll") ? "جميع طلبات الإجازة" : "طلبات الإجازة الخاصة بك"}</p></div></div>
            <div class="leave-preview-list">${leaveItems.length ? leaveItems.map(l => { const e = emp(l.employeeId); if (!e) return ""; return `<div class="leave-request">${typeof employeeAvatar === "function" ? employeeAvatar(e) : ""}<div class="leave-request-main"><div class="leave-request-title"><button type="button" class="employee-name-link" ${canSeeEmp(e.id) ? `data-edit-employee="${esc(e.id)}"` : ""}>${esc(e.name)}</button><span>${esc(l.type || "إجازة")}</span></div><div class="leave-dates"><span>${fmt(l.from)} إلى ${fmt(l.to)}</span><b>${typeof arabicNumber === "function" ? arabicNumber(l.days || 0) : (l.days || 0)} أيام</b></div></div><div class="leave-request-actions">${canApprove && l.status === "pending" ? `<button class="secondary-btn" data-leave-action="rejected" data-leave-id="${esc(l.id)}">رفض</button><button class="primary-btn" data-leave-action="approved" data-leave-id="${esc(l.id)}">اعتماد الإجازة</button>` : badge(l.status)}</div></div>`; }).join("") : `<div class="empty-state"><strong>لا توجد طلبات إجازة ضمن صلاحيتك</strong></div>`}</div>
          </article>
        </div>`;
      if (typeof hydrateIcons === "function") hydrateIcons(view);
      if (typeof hydrateAttachmentImages === "function") hydrateAttachmentImages(view);
    };
  }
})();
