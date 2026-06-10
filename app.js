const SUPABASE_URL = "https://hdduxbywwxxybsffwxzd.supabase.co";
const SUPABASE_KEY = "sb_publishable_JJDMqVtKwiBpa2vKMGhdcg_ks7U5Rs-";
const PASSWORD_RECOVERY_REDIRECT_URL = "https://adamalsalem.vercel.app/";
const SCHEDULE_VERSION = "weekly-v12";
const INTERNAL_START_HOUR = 17;
const INTERNAL_LAST_SLOT_MINUTES = 21 * 60 + 30;
const MAP_URL = "https://maps.app.goo.gl/gRuTSJt7Gk24d3RJ7";
const RECEIPT_WHATSAPP_PHONE = "966555707854";
const BANK_ACCOUNT_NUMBER = "SA4480000456608016164286";
const HAIL_COORDINATES = { lat: 27.5114, lng: 41.7208 };
const HAIL_HOME_VISIT_RADIUS_KM = 30;
const INTERNAL_WORK_DAYS = [
  { offset: 0, name: "الأحد" },
  { offset: 1, name: "الإثنين" },
  { offset: 2, name: "الثلاثاء" },
  { offset: 3, name: "الأربعاء" }
];
const VISIT_WORK_DAYS = [
  { offset: 4, name: "الخميس" },
  { offset: 5, name: "الجمعة" },
  { offset: 6, name: "السبت" }
];
const MESSAGES = {
  paymentWarning:
    "تنبيه: في حال لم يتم التحويل وإرسال الإيصال خلال 15 دقيقة سيتم إلغاء الحجز تلقائيا",
  whatsappConfirmation(booking) {
    const boldName = booking.name ? whatsappBold(booking.name) : null;
    const boldTime = whatsappBold(formatTime(booking.slot.time));
    if (isExternalBookingType(booking.booking_type)) {
      return [
        boldName ? `مرحبًا ${boldName}` : "مرحبًا",
        whatsappBold("تم تأكيد باقة الزيارة خارج مدينة حائل."),
        `المنطقة: ${booking.region || booking.city}`,
        `المدينة: ${booking.visit_city || "-"}`,
        `قيمة الزيارة: ${whatsappBold(`${formatPrice(booking.visit_price)} ريال`)}`,
        whatsappBold("تم استلام مبلغ الزيارة بنجاح."),
        "أيام الباقة:",
        formatWhatsappPackageDays(booking.booking_start_date, booking.booking_end_date),
        booking.customer_location_url ? `موقع الزيارة: ${booking.customer_location_url}` : null,
        booking.alternate_phone ? `رقم التواصل عند الوصول: ${booking.alternate_phone}` : null,
        getFemaleWhatsappNotice(booking.gender)
      ].filter(Boolean).join("\n");
    }

    if (isHomeBookingType(booking.booking_type)) {
      return [
        boldName ? `مرحبًا ${boldName}` : "مرحبًا",
        whatsappBold("تم تأكيد الزيارة المنزلية داخل مدينة حائل."),
        `الزيارة: ${whatsappBold(booking.appointment_title || booking.slot.title || "زيارة منزلية")}`,
        `اليوم والتاريخ: ${formatWhatsappDayDate(booking.slot.date)}`,
        `الوقت: ${whatsappBold(`${formatTime(booking.appointment_start_time || booking.slot.time)} إلى ${formatTime(booking.appointment_end_time || booking.slot.end_time)}`)}`,
        `قيمة الزيارة: ${whatsappBold(`${formatPrice(booking.visit_price)} ريال`)}`,
        booking.customer_location_url ? `موقع الزيارة: ${booking.customer_location_url}` : null,
        getFemaleWhatsappNotice(booking.gender)
      ].filter(Boolean).join("\n");
    }

    return [
      boldName ? `مرحبًا ${boldName}` : "مرحبًا",
      whatsappBold(`تم تأكيد موعدك للحجز رقم ${booking.booking_number} بنجاح.`),
      `اليوم والتاريخ: ${formatWhatsappDayDate(booking.slot.date)}`,
      `الساعة: ${boldTime}`,
      booking.home_session ? "نوع الموعد: زيارة منزلية" : null,
      `الموقع: ${MAP_URL}`,
      getFemaleWhatsappNotice(booking.gender),
      `${whatsappBold("تنبيه")}: لابد من الحضور قبل الموعد بـ ${whatsappBold("خمس دقائق")} وفي حال التأخر بعد الموعد بـ ${whatsappBold("خمس دقائق")} يتم إلغاء الموعد دون استرجاع المبلغ شاكرين لكم تعاونكم.`
    ].filter(Boolean).join("\n");
  }
};

let slots = [];
let bookings = [];
let deletedSlots = [];
let selectedSlotId = "";
let authSession = null;
let isAdmin = false;
let visitCities = [];
let pricing = {
  general_price: 100,
  home_visit_price: 300,
  external_near_price: 1500,
  external_far_price: 3500
};
let visitTemplates = [];
let prayerTimesReady = false;
let adminBookingFilter = "all";
let selectedBookingDate = "";
let selectedCustomerLocation = null;
let mapPicker = null;
let mapPickerMarker = null;
let pendingMapLocation = null;
let mapPickerResolver = null;
const prayerTimesByDate = new Map();

const bookingPanel = document.querySelector("#bookingPanel");
const adminPanel = document.querySelector("#adminPanel");
const bookingForm = document.querySelector("#bookingForm");
const adminLoginForm = document.querySelector("#adminLoginForm");
const slotSelect = document.querySelector("#slotSelect");
const genderInput = document.querySelector("#genderInput");
const femaleBookingNotice = document.querySelector("#femaleBookingNotice");
const locationTypeInput = document.querySelector("#locationTypeInput");
const regionField = document.querySelector("#regionField");
const regionInput = document.querySelector("#regionInput");
const visitCityField = document.querySelector("#visitCityField");
const visitCityInput = document.querySelector("#visitCityInput");
const homeSessionField = document.querySelector("#homeSessionField");
const homeSessionInput = document.querySelector("#homeSessionInput");
const appointmentLocationHelp = document.querySelector("#appointmentLocationHelp");
const homeSessionHelp = document.querySelector("#homeSessionHelp");
const specialAppointmentField = document.querySelector("#specialAppointmentField");
const specialAppointmentInput = document.querySelector("#specialAppointmentInput");
const userDayChoices = document.querySelector("#userDayChoices");
const customerLocationField = document.querySelector("#customerLocationField");
const customerLocationDescription = document.querySelector("#customerLocationDescription");
const useCurrentLocationButton = document.querySelector("#useCurrentLocationButton");
const chooseLocationButton = document.querySelector("#chooseLocationButton");
const locationStatus = document.querySelector("#locationStatus");
const customerLatInput = document.querySelector("#customerLatInput");
const customerLngInput = document.querySelector("#customerLngInput");
const mapPickerPanel = document.querySelector("#mapPickerPanel");
const locationMap = document.querySelector("#locationMap");
const confirmMapLocationButton = document.querySelector("#confirmMapLocationButton");
const cancelMapLocationButton = document.querySelector("#cancelMapLocationButton");
const userSlots = document.querySelector("#userSlots");
const bookingMessage = document.querySelector("#bookingMessage");
const bookingNumberDisplay = document.querySelector("#bookingNumberDisplay");
const loginMessage = document.querySelector("#loginMessage");
const receiptButton = document.querySelector("#receiptButton");
const receiptPanel = document.querySelector("#receiptPanel");
const closeReceiptButton = document.querySelector("#closeReceiptButton");
const receiptLookupForm = document.querySelector("#receiptLookupForm");
const receiptResult = document.querySelector("#receiptResult");
const receiptMessage = document.querySelector("#receiptMessage");
const recoveryButton = document.querySelector("#recoveryButton");
const recoveryPanel = document.querySelector("#recoveryPanel");
const closeRecoveryButton = document.querySelector("#closeRecoveryButton");
const recoveryForm = document.querySelector("#recoveryForm");
const recoveryMessage = document.querySelector("#recoveryMessage");
const trackingButton = document.querySelector("#trackingButton");
const trackingPanel = document.querySelector("#trackingPanel");
const closeTrackingButton = document.querySelector("#closeTrackingButton");
const trackingForm = document.querySelector("#trackingForm");
const trackingResult = document.querySelector("#trackingResult");
const trackingMessage = document.querySelector("#trackingMessage");
const adminLoginView = document.querySelector("#adminLoginView");
const adminDashboard = document.querySelector("#adminDashboard");
const adminLoginButton = document.querySelector("#adminLoginButton");
const backToBookingButton = document.querySelector("#backToBookingButton");
const logoutButton = document.querySelector("#logoutButton");
const forgotPasswordButton = document.querySelector("#forgotPasswordButton");
const accountSecurityButton = document.querySelector("#accountSecurityButton");
const accountSecurityPanel = document.querySelector("#accountSecurityPanel");
const accountSecurityForm = document.querySelector("#accountSecurityForm");
const closeAccountSecurityButton = document.querySelector("#closeAccountSecurityButton");
const currentAdminPassword = document.querySelector("#currentAdminPassword");
const newAdminEmail = document.querySelector("#newAdminEmail");
const newAdminPassword = document.querySelector("#newAdminPassword");
const confirmAdminPassword = document.querySelector("#confirmAdminPassword");
const accountSecurityMessage = document.querySelector("#accountSecurityMessage");
const passwordRecoveryPanel = document.querySelector("#passwordRecoveryPanel");
const passwordRecoveryForm = document.querySelector("#passwordRecoveryForm");
const recoveryAdminPassword = document.querySelector("#recoveryAdminPassword");
const confirmRecoveryAdminPassword = document.querySelector("#confirmRecoveryAdminPassword");
const passwordRecoveryMessage = document.querySelector("#passwordRecoveryMessage");
const regenerateSlotsButton = document.querySelector("#regenerateSlotsButton");
const suspendWeekButton = document.querySelector("#suspendWeekButton");
const internalAvailableSlots = document.querySelector("#internalAvailableSlots");
const homeAvailableSlots = document.querySelector("#homeAvailableSlots");
const externalAvailableSlots = document.querySelector("#externalAvailableSlots");
const reservedSlots = document.querySelector("#reservedSlots");
const availableCount = document.querySelector("#availableCount");
const reservedCount = document.querySelector("#reservedCount");
const adminTabs = document.querySelectorAll(".admin-tab");
const adminAvailableView = document.querySelector("#adminAvailableView");
const adminBookingsView = document.querySelector("#adminBookingsView");
const adminSettingsView = document.querySelector("#adminSettingsView");
const bookingFilterButtons = document.querySelectorAll(".booking-filter-button");
const availableScheduleTabs = document.querySelectorAll(".available-schedule-tab");
const availableScheduleViews = document.querySelectorAll("[data-available-schedule-view]");
const visitAdminTabs = document.querySelectorAll(".visit-admin-tab");
const visitAdminViews = document.querySelectorAll("[data-visit-admin-view]");
const pricingSettingsForm = document.querySelector("#pricingSettingsForm");
const generalPriceInput = document.querySelector("#generalPriceInput");
const homeVisitPriceInput = document.querySelector("#homeVisitPriceInput");
const externalNearPriceInput = document.querySelector("#externalNearPriceInput");
const externalFarPriceInput = document.querySelector("#externalFarPriceInput");
const visitTemplateForm = document.querySelector("#visitTemplateForm");
const visitTemplateId = document.querySelector("#visitTemplateId");
const visitTemplateTitle = document.querySelector("#visitTemplateTitle");
const visitTemplateStart = document.querySelector("#visitTemplateStart");
const visitTemplateEnd = document.querySelector("#visitTemplateEnd");
const cancelTemplateEditButton = document.querySelector("#cancelTemplateEditButton");
const visitTemplateList = document.querySelector("#visitTemplateList");
const toast = document.querySelector("#toast");
let toastTimer = null;

const AUTH_STORAGE_KEY = "appointmentAdminSession";
const ADMIN_LAST_ACTIVITY_KEY = "appointmentAdminLastActivity";
const BOOKING_CONFIRMATION_STORAGE_KEY = "appointmentLastBookingConfirmation";
const ADMIN_IDLE_TIMEOUT_MS = 10 * 60 * 1000;
let adminIdleCheckTimer = null;
let adminAutoLogoutInProgress = false;

function getArabicAuthError(error, context = "login") {
  const message = String(error?.message || error || "").trim();

  if (/invalid login credentials|invalid credentials|email or password/i.test(message)) {
    return context === "current-password"
      ? "كلمة المرور الحالية غير صحيحة."
      : "البريد الإلكتروني أو كلمة المرور غير صحيحة. تأكد من بيانات المستخدم المسجل في Supabase.";
  }
  if (/email not confirmed/i.test(message)) {
    return "البريد الإلكتروني غير مؤكد. افتح رسالة التأكيد أو أكّد المستخدم من Supabase.";
  }
  if (/user not found/i.test(message)) {
    return "لا يوجد مستخدم مسجل بهذا البريد الإلكتروني.";
  }
  if (/email.*already|already.*registered|user already registered/i.test(message)) {
    return "البريد الإلكتروني الجديد مستخدم في حساب آخر.";
  }
  if (/password.*short|weak password|at least/i.test(message)) {
    return "كلمة المرور الجديدة ضعيفة أو قصيرة. استخدم 8 أحرف على الأقل.";
  }
  if (/rate limit|too many requests/i.test(message)) {
    return "";
  }

  return message || (context === "login"
    ? "تعذر تسجيل الدخول."
    : "تعذر تحديث بيانات الحساب.");
}

async function api(path, options = {}) {
  const accessToken = authSession?.access_token || SUPABASE_KEY;
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: options.method || "GET",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (response.status === 401 && authSession && !options.retried && await refreshAuthSession()) {
    return api(path, { ...options, retried: true });
  }

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || "تعذر الاتصال بقاعدة البيانات.");
  }

  const text = await response.text();
  if (!text) return null;
  return JSON.parse(text);
}

async function authApi(path, body) {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/${path}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error_description || result.msg || result.message || "تعذر تسجيل الدخول.");
  }
  return result;
}

async function updateAuthUser(body) {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    method: "PUT",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${authSession?.access_token || ""}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error_description || result.msg || result.message || "تعذر تحديث بيانات الحساب.");
  }
  if (authSession && result?.id) {
    saveAuthSession({ ...authSession, user: result });
  }
  return result;
}

async function sendPasswordRecoveryEmail(email) {
  const response = await fetch(
    `${SUPABASE_URL}/auth/v1/recover?redirect_to=${encodeURIComponent(PASSWORD_RECOVERY_REDIRECT_URL)}`,
    {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    }
  );

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error_description || result.msg || result.message || "تعذر إرسال رسالة الاستعادة.");
  }
}

function getRecoverySessionFromUrl() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  if (params.get("type") !== "recovery" || !params.get("access_token")) return null;

  return {
    access_token: params.get("access_token"),
    refresh_token: params.get("refresh_token"),
    expires_in: Number(params.get("expires_in")) || 3600,
    expires_at: Math.floor(Date.now() / 1000) + (Number(params.get("expires_in")) || 3600),
    token_type: params.get("token_type") || "bearer",
    user: null
  };
}

function getAuthCallbackErrorFromUrl() {
  const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  if (!params.get("error")) return "";

  const description = params.get("error_description") || "";
  if (/expired|invalid/i.test(description)) {
    return "رابط استعادة كلمة المرور غير صالح أو انتهت صلاحيته. اطلب رابطًا جديدًا من شاشة الدخول.";
  }
  return description || "تعذر فتح رابط استعادة كلمة المرور. اطلب رابطًا جديدًا.";
}

function clearAuthCallbackFromUrl() {
  window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
}

function saveAuthSession(session) {
  authSession = session;
  if (session) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(ADMIN_LAST_ACTIVITY_KEY);
  }
}

function restoreAuthSession() {
  try {
    authSession = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY)) || null;
  } catch {
    saveAuthSession(null);
  }
}

async function refreshAuthSession() {
  if (!authSession?.refresh_token) return false;

  try {
    const session = await authApi("token?grant_type=refresh_token", {
      refresh_token: authSession.refresh_token
    });
    saveAuthSession(session);
    return true;
  } catch {
    saveAuthSession(null);
    isAdmin = false;
    return false;
  }
}

async function verifyAdminSession(allowRefresh = true) {
  if (!authSession?.access_token) {
    isAdmin = false;
    return false;
  }

  try {
    const result = await api("rpc/is_appointment_admin", {
      method: "POST",
      body: {}
    });
    isAdmin = result === true;
    if (!isAdmin) saveAuthSession(null);
    return isAdmin;
  } catch {
    if (allowRefresh && await refreshAuthSession()) {
      return verifyAdminSession(false);
    }
    isAdmin = false;
    return false;
  }
}

function handleAdminActivity() {
  if (!isAdmin || !adminPanel.classList.contains("active")) return;

  if (getAdminIdleDuration() >= ADMIN_IDLE_TIMEOUT_MS) {
    if (!adminAutoLogoutInProgress) {
      adminAutoLogoutInProgress = true;
      performLogout({ automatic: true })
        .catch(console.error)
        .finally(() => {
          adminAutoLogoutInProgress = false;
        });
    }
    return;
  }

  localStorage.setItem(ADMIN_LAST_ACTIVITY_KEY, String(Date.now()));
}

function getAdminIdleDuration() {
  const lastActivity = Number(localStorage.getItem(ADMIN_LAST_ACTIVITY_KEY));
  if (!Number.isFinite(lastActivity) || lastActivity <= 0) return 0;
  return Date.now() - lastActivity;
}

function stopAdminIdleTimer() {
  if (adminIdleCheckTimer) {
    clearInterval(adminIdleCheckTimer);
    adminIdleCheckTimer = null;
  }
}

function startAdminIdleTimer() {
  stopAdminIdleTimer();
  if (!localStorage.getItem(ADMIN_LAST_ACTIVITY_KEY)) {
    localStorage.setItem(ADMIN_LAST_ACTIVITY_KEY, String(Date.now()));
  }
  adminIdleCheckTimer = setInterval(() => {
    if (isAdmin && getAdminIdleDuration() >= ADMIN_IDLE_TIMEOUT_MS && !adminAutoLogoutInProgress) {
      adminAutoLogoutInProgress = true;
      performLogout({ automatic: true })
        .catch(console.error)
        .finally(() => {
          adminAutoLogoutInProgress = false;
        });
    }
  }, 15 * 1000);
}

async function performLogout({ automatic = false, accountChanged = false, passwordRecovered = false } = {}) {
  stopAdminIdleTimer();
  if (authSession?.access_token) {
    await fetch(`${SUPABASE_URL}/auth/v1/logout`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${authSession.access_token}`
      }
    }).catch(() => {});
  }

  saveAuthSession(null);
  isAdmin = false;
  accountSecurityPanel.classList.add("hidden");
  accountSecurityForm.reset();
  renderAdminAccess();

  if (automatic) {
    showPanel("admin");
    showMessage(loginMessage, "تم تسجيل الخروج تلقائيًا لعدم وجود نشاط لمدة 10 دقائق.", "error");
    return;
  }

  if (accountChanged) {
    showPanel("admin");
    showMessage(loginMessage, passwordRecovered
      ? "تم تغيير كلمة المرور بنجاح. سجّل الدخول بكلمة المرور الجديدة."
      : "تم حفظ التغيير. تغيير البريد لا يكتمل إلا بعد فتح رابط التأكيد المرسل من Supabase إلى البريد الجديد، ثم تسجيل الدخول به.", "success");
    return;
  }

  showToast("تم تسجيل الخروج.");
  showPanel("booking");
  await refreshAll();
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function getWeekStart(date = new Date()) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function getSlotDateTime(slot) {
  return new Date(`${slot.date}T${slot.time}:00+03:00`);
}

function getSlotEndDateTime(slot) {
  const endTime = slot.end_time || minutesToTime(
    Number(slot.time.slice(0, 2)) * 60 + Number(slot.time.slice(3, 5)) + 30
  );
  return new Date(`${slot.date}T${endTime}:00+03:00`);
}

function timeToMinutes(time) {
  const [hour, minute] = String(time || "00:00").slice(0, 5).split(":").map(Number);
  return hour * 60 + minute;
}

function parsePrayerTime(value) {
  const match = String(value || "").match(/^(\d{1,2}):(\d{2})/);
  return match ? Number(match[1]) * 60 + Number(match[2]) : null;
}

async function loadPrayerTimes() {
  prayerTimesByDate.clear();
  prayerTimesReady = false;

  const dates = getManagedWeekStarts().flatMap((weekStart) => {
    return Array.from({ length: 7 }, (_, offset) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + offset);
      return date;
    });
  });
  const months = [...new Set(dates.map((date) => `${date.getFullYear()}-${date.getMonth() + 1}`))];

  try {
    const calendars = await Promise.all(months.map(async (key) => {
      const [year, month] = key.split("-");
      const url = `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${HAIL_COORDINATES.lat}&longitude=${HAIL_COORDINATES.lng}&method=4`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("PRAYER_TIMES_UNAVAILABLE");
      const result = await response.json();
      return result.data || [];
    }));

    calendars.flat().forEach((day) => {
      const date = day.date?.gregorian;
      const key = date ? `${date.year}-${pad(date.month.number)}-${pad(date.day)}` : "";
      if (!key) return;
      prayerTimesByDate.set(key, {
        maghrib: parsePrayerTime(day.timings?.Maghrib),
        isha: parsePrayerTime(day.timings?.Isha)
      });
    });
    prayerTimesReady = prayerTimesByDate.size > 0;
  } catch (error) {
    console.error("تعذر تحميل مواقيت الصلاة.", error);
  }
}

function isPrayerBlocked(dateKey, time) {
  const prayers = prayerTimesByDate.get(dateKey);
  if (!prayers) return true;

  const [hour, minute] = time.split(":").map(Number);
  const slotStart = hour * 60 + minute;
  const slotEnd = slotStart + 30;

  return [prayers.maghrib, prayers.isha].some((prayerStart) => {
    if (prayerStart === null) return true;
    const prayerEnd = Math.ceil((prayerStart + 30) / 30) * 30;
    return slotStart < prayerEnd && slotEnd > prayerStart;
  });
}

function minutesToTime(minutes) {
  const normalizedMinutes = ((minutes % (24 * 60)) + 24 * 60) % (24 * 60);
  return `${pad(Math.floor(normalizedMinutes / 60))}:${pad(normalizedMinutes % 60)}`;
}

function getPrayerBreaks(dateKey) {
  const prayers = prayerTimesByDate.get(dateKey);
  if (!prayers) return [];

  return [
    { name: "المغرب", start: prayers.maghrib },
    { name: "العشاء", start: prayers.isha }
  ].filter((prayer) => prayer.start !== null).map((prayer) => {
    const end = Math.ceil((prayer.start + 30) / 30) * 30;
    return {
      ...prayer,
      end,
      text: `تم إلغاء الحجز من الساعة ${formatTime(minutesToTime(prayer.start))} إلى الساعة ${formatTime(minutesToTime(end))} لأداء صلاة ${prayer.name}.`
    };
  });
}

function appendPrayerBreaks(parent, dateKey) {
  const breaks = getPrayerBreaks(dateKey);
  if (breaks.length < 2) return;

  const container = document.createElement("div");
  container.className = "prayer-breaks";
  const [maghrib, isha] = breaks;
  const note = document.createElement("p");
  const compactTime = (minutes) => formatTime(minutesToTime(minutes)).replace(/\s+/g, "");
  note.textContent = `توقف الصلاة: المغرب ${compactTime(maghrib.start)}–${compactTime(maghrib.end)}، العشاء ${compactTime(isha.start)}–${compactTime(isha.end)}.`;
  container.append(note);
  parent.append(container);
}

function buildWeeklySlots(weekStart) {
  const generated = [];
  INTERNAL_WORK_DAYS.forEach((day) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + day.offset);
    const dateKey = toDateKey(date);

    if (!prayerTimesReady) return;
    for (let minutes = INTERNAL_START_HOUR * 60; minutes <= INTERNAL_LAST_SLOT_MINUTES; minutes += 30) {
      const time = minutesToTime(minutes);
      if (isPrayerBlocked(dateKey, time)) continue;
      generated.push({
        id: `${SCHEDULE_VERSION}:internal:${dateKey}T${time}`,
        day: day.name,
        date: dateKey,
        time,
        end_time: minutesToTime(minutes + 30),
        title: "موعد عام داخل مدينة حائل",
        package_end_date: dateKey,
        source: "auto",
        suspended: false,
        slot_type: "internal",
        schedule_version: SCHEDULE_VERSION
      });
    }
  });

  VISIT_WORK_DAYS.forEach((day) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + day.offset);
    const dateKey = toDateKey(date);

    visitTemplates.forEach((template) => {
      generated.push({
        id: `${SCHEDULE_VERSION}:home:${template.id}:${dateKey}`,
        day: day.name,
        date: dateKey,
        time: template.start_time,
        end_time: template.end_time,
        title: template.title,
        package_end_date: dateKey,
        source: "template",
        suspended: false,
        slot_type: "home",
        schedule_version: SCHEDULE_VERSION
      });
    });
  });

  const regularPackageStart = new Date(weekStart);
  regularPackageStart.setDate(weekStart.getDate() + 4);
  const regularPackageEnd = new Date(regularPackageStart);
  regularPackageEnd.setDate(regularPackageStart.getDate() + 2);
  const regularPackageStartKey = toDateKey(regularPackageStart);
  generated.push({
    id: `${SCHEDULE_VERSION}:external:${regularPackageStartKey}`,
    day: "الخميس والجمعة والسبت",
    date: regularPackageStartKey,
    time: "00:00",
    end_time: "23:59",
    title: "باقة زيارة خارج مدينة حائل",
    package_end_date: toDateKey(regularPackageEnd),
    source: "external-package",
    suspended: false,
    slot_type: "external",
    schedule_version: SCHEDULE_VERSION
  });

  [...INTERNAL_WORK_DAYS, ...VISIT_WORK_DAYS].forEach((day) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + day.offset);
    const dateKey = toDateKey(date);
    const packageEnd = new Date(date);
    packageEnd.setDate(date.getDate() + 2);

    generated.push({
      id: `${SCHEDULE_VERSION}:special_external_package:${dateKey}`,
      day: `${day.name} ويومان بعده`,
      date: dateKey,
      time: "00:00",
      end_time: "23:59",
      title: "باقة موعد خاص خارج مدينة حائل",
      package_end_date: toDateKey(packageEnd),
      source: "special-external-package",
      suspended: false,
      slot_type: "special_external_package",
      schedule_version: SCHEDULE_VERSION
    });
  });

  return generated;
}

function getManagedWeekStarts() {
  const currentWeekStart = getWeekStart();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const internalEnd = new Date(today);
  internalEnd.setDate(today.getDate() + 13);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const managedEnd = monthEnd > internalEnd ? monthEnd : internalEnd;
  const managedEndWeek = getWeekStart(managedEnd);
  const weekCount = Math.round((managedEndWeek - currentWeekStart) / (7 * 24 * 60 * 60 * 1000)) + 1;
  return Array.from({ length: weekCount }, (_, weekOffset) => {
    const weekStart = new Date(currentWeekStart);
    weekStart.setDate(currentWeekStart.getDate() + weekOffset * 7);
    return weekStart;
  });
}

function formatGregorianDate(value) {
  return new Intl.DateTimeFormat("ar-SA-u-ca-gregory-nu-latn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(`${value}T00:00:00`));
}

function formatHijriDate(value) {
  return new Intl.DateTimeFormat("ar-SA-u-ca-islamic-umalqura-nu-latn", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(`${value}T00:00:00`));
}

function formatCombinedDate(value) {
  return `${formatGregorianDate(value)} (${formatHijriDate(value)})`;
}

function formatDate(value) {
  return formatCombinedDate(value);
}

function formatDateRange(start, end) {
  if (!start) return "-";
  if (!end || start === end) return formatCombinedDate(start);
  return `${formatCombinedDate(start)} إلى ${formatCombinedDate(end)}`;
}

function getDetailedPackageDays(start, end) {
  if (!start) return [];
  const startDate = new Date(`${start}T12:00:00`);
  const endDate = new Date(`${end || start}T12:00:00`);
  const days = [];
  for (const date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
    const dateKey = toDateKey(date);
    days.push({
      day: new Intl.DateTimeFormat("ar-SA", { weekday: "long" }).format(date),
      gregorian: formatGregorianDate(dateKey),
      hijri: formatHijriDate(dateKey)
    });
  }
  return days;
}

function formatWhatsappDayDate(dateKey) {
  if (!dateKey) return whatsappBold("-");
  const date = new Date(`${dateKey}T12:00:00`);
  const day = new Intl.DateTimeFormat("ar-SA", { weekday: "long" }).format(date);
  return whatsappBold(`${day} ${formatCombinedDate(dateKey)}`);
}

function formatWhatsappPackageDays(start, end) {
  return getDetailedPackageDays(start, end)
    .map((item) => whatsappBold(`${item.day} ${item.gregorian} (${item.hijri})`))
    .join("\n");
}

function formatTime(value) {
  return new Intl.DateTimeFormat("ar-SA", {
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(`2026-01-01T${value}:00`));
}

function formatTimeFromDate(date) {
  return new Intl.DateTimeFormat("ar-SA", {
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "");
}

function whatsappBold(value) {
  return `*${String(value || "").replace(/\*/g, "").trim()}*`;
}

function getFemaleWhatsappNotice(gender) {
  return gender === "female"
    ? whatsappBold("يجب التقيد بضوابط الرقية الشرعية وحضور المحرم مع النساء.")
    : null;
}

function toWhatsappPhone(value) {
  const digits = normalizePhone(value).replace(/^\+/, "");

  if (digits.startsWith("966")) return digits;
  if (digits.startsWith("0")) return `966${digits.slice(1)}`;
  return digits;
}

function isPendingExpired(booking, now = new Date()) {
  return !booking.confirmed && booking.expires_at && new Date(booking.expires_at) <= now;
}

function getBookingStatusText(booking) {
  if (booking.attended) return "تم الحضور";
  if (booking.confirmed) return "تم تأكيد الموعد";
  if (booking.receipt_sent) return "تم إرفاق الإيصال - بانتظار تأكيد المدير";

  const expiresAt = booking.expires_at ? new Date(booking.expires_at) : null;
  if (!expiresAt) return "بانتظار تأكيد الموعد";

  return `بانتظار التحويل حتى ${formatTimeFromDate(expiresAt)}`;
}

function slotLabel(slot) {
  return `${slot.day} - ${formatDate(slot.date)} - ${formatTime(slot.time)}`;
}

function getWhatsappMessage(booking) {
  return MESSAGES.whatsappConfirmation(booking);
}

function getWhatsappUrl(booking) {
  const phone = toWhatsappPhone(booking.phone);
  const message = encodeURIComponent(getWhatsappMessage(booking));
  return `https://wa.me/${phone}?text=${message}`;
}

function getExternalApprovalWhatsappUrl(booking) {
  const phone = toWhatsappPhone(booking.phone);
  const message = encodeURIComponent([
    booking.name ? `مرحبًا ${whatsappBold(booking.name)}` : "مرحبًا",
    `${whatsappBold("تمت الموافقة")} على طلب باقة الزيارة خارج مدينة حائل.`,
    `المنطقة: ${booking.region || booking.city}`,
    `المدينة: ${booking.visit_city || "-"}`,
    "أيام الباقة:",
    formatWhatsappPackageDays(booking.booking_start_date, booking.booking_end_date),
    booking.customer_location_url ? `موقع الزيارة: ${booking.customer_location_url}` : null,
    booking.alternate_phone ? `رقم التواصل عند الوصول: ${booking.alternate_phone}` : null,
    getFemaleWhatsappNotice(booking.gender),
    `يرجى تحويل مبلغ ${whatsappBold(`${formatPrice(booking.visit_price)} ريال`)} على رقم الحساب التالي:`,
    whatsappBold(BANK_ACCOUNT_NUMBER),
    "بعد التحويل، أرسل الإيصال عبر واتساب ثم اضغط في الموقع على زر إرفاق إيصال التحويل."
  ].filter(Boolean).join("\n"));
  return `https://wa.me/${phone}?text=${message}`;
}

function getReceiptWhatsappUrl(booking) {
  const isExternal = isExternalBookingType(booking.booking_type);
  const isPackage = isMultiDayBookingType(booking.booking_type, booking);
  const message = encodeURIComponent([
    `*تم إرفاق إيصال للموعد رقم ${booking.booking_number}*`,
    booking.name ? `باسم ${whatsappBold(booking.name)}` : null,
    isPackage
      ? `أيام الباقة:\n${formatWhatsappPackageDays(booking.booking_start_date, booking.booking_end_date)}`
      : `اليوم والتاريخ: ${formatWhatsappDayDate(booking.slot.date)}`,
    isExternal || isPackage
      ? null
      : `الوقت: ${whatsappBold(`${formatTime(booking.appointment_start_time || booking.slot.time)}${booking.appointment_end_time || booking.slot.end_time ? ` إلى ${formatTime(booking.appointment_end_time || booking.slot.end_time)}` : ""}`)}`
  ].filter(Boolean).join("\n"));
  return `https://wa.me/${RECEIPT_WHATSAPP_PHONE}?text=${message}`;
}

function getExternalBookingWhatsappUrl(result) {
  const message = encodeURIComponent([
    result.name ? `الاسم: ${whatsappBold(result.name)}` : null,
    `تم اختيار باقة زيارة خارج مدينة حائل في ${result.visit_city} - ${result.region}`,
    "أيام الباقة:",
    formatWhatsappPackageDays(result.booking_start_date, result.booking_end_date),
    `قيمة الزيارة: ${whatsappBold(`${formatPrice(result.visit_price)} ريال`)}`,
    result.customer_location_url ? `موقع الزيارة: ${result.customer_location_url}` : null,
    result.alternate_phone ? `رقم التواصل عند الوصول: ${result.alternate_phone}` : null,
    "سيتم التواصل معكم لتحديد اتفاق الزيارة."
  ].filter(Boolean).join("\n"));
  return `https://wa.me/${RECEIPT_WHATSAPP_PHONE}?text=${message}`;
}

function formatPrice(value) {
  return new Intl.NumberFormat("ar-SA", {
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

async function loadVisitCities() {
  try {
    visitCities = await api("rpc/get_appointment_visit_cities", {
      method: "POST",
      body: {}
    }) || [];
  } catch (error) {
    visitCities = [];
    console.error("جدول مدن الزيارات الخارجية غير مفعّل.", error);
  }
}

async function loadPublicConfig() {
  try {
    const result = await api("rpc/get_appointment_public_config", {
      method: "POST",
      body: {}
    });
    if (result?.pricing) pricing = result.pricing;
    visitTemplates = Array.isArray(result?.templates) ? result.templates : [];
  } catch (error) {
    console.error("إعدادات الأسعار والقوالب تحتاج إلى تشغيل ملف Supabase المحدث.", error);
  }
}

function renderVisitCityOptions() {
  const selectedRegion = regionInput.value;
  visitCityInput.innerHTML = '<option value="">اختر المدينة</option>';

  visitCities
    .filter((item) => item.region === selectedRegion)
    .forEach((item) => {
      const option = document.createElement("option");
      option.value = item.city;
      option.textContent = item.city;
      visitCityInput.append(option);
    });
}

function getSelectedVisitCity() {
  const city = visitCities.find((item) => {
    return item.region === regionInput.value && item.city === visitCityInput.value;
  });
  if (!city) return null;
  return {
    ...city,
    visit_price: Number(city.distance_km) <= 100
      ? pricing.external_near_price
      : pricing.external_far_price
  };
}

function getRiyadhDateTimeParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Riyadh",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

function addDaysToDateKey(dateKey, days) {
  const date = new Date(`${dateKey}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function getCurrentBookingType() {
  if (locationTypeInput.value === "external") {
    return specialAppointmentInput.checked ? "special_external_package" : "external";
  }
  return homeSessionInput.checked ? "home" : "internal";
}

function isExternalBookingType(type) {
  return [
    "external",
    "special_external_package",
    "special_external_day",
    "special_external_near",
    "special_external_far"
  ].includes(type);
}

function isHomeBookingType(type) {
  return ["home", "special_home"].includes(type);
}

function isFullDayBookingType(type) {
  return isExternalBookingType(type) || type === "special_home";
}

function isMultiDayBookingType(type, bookingOrSlot = null) {
  const start = bookingOrSlot?.booking_start_date || bookingOrSlot?.date;
  const end = bookingOrSlot?.booking_end_date || bookingOrSlot?.package_end_date;
  return isFullDayBookingType(type) && Boolean(start && end && start !== end);
}

function isThreeDayExternalPackage(slot) {
  if (!isExternalBookingType(slot.slot_type) || !slot.date || !slot.package_end_date) return false;
  const expectedEnd = new Date(`${slot.date}T12:00:00`);
  expectedEnd.setDate(expectedEnd.getDate() + 2);
  return slot.package_end_date === toDateKey(expectedEnd);
}

function getRecoveryWhatsappUrl(phone, bookingNumber) {
  const message = encodeURIComponent(`رقم حجزك هو: ${bookingNumber}`);
  return `https://wa.me/${toWhatsappPhone(phone)}?text=${message}`;
}

async function loadData() {
  if (!isAdmin) {
    const publicSlots = await api("rpc/get_available_appointment_slots", {
      method: "POST",
      body: {}
    }) || [];
    slots = publicSlots.map((slot) => ({
      ...slot,
      time: slot.slot_time
    }));
    bookings = [];
    deletedSlots = [];
    return;
  }

  const [slotRows, bookingRows, deletedRows] = await Promise.all([
    api("appointment_slots?select=*&order=date.asc,time.asc"),
    api("appointment_bookings?select=*&order=created_at.desc"),
    api("appointment_deleted_slots?select=slot_id")
  ]);

  slots = slotRows || [];
  bookings = bookingRows || [];
  deletedSlots = deletedRows || [];
}

async function cleanupExpiredPendingBookings() {
  await api("rpc/cleanup_expired_appointment_bookings", {
    method: "POST",
    body: {}
  });
}

async function insertMissingWeeklySlots({ restoreDeleted = false } = {}) {
  if (!isAdmin) return 0;

  const activeTemplateIds = new Set(visitTemplates.map((template) => template.id));
  const orphanedHomeSlots = slots.filter((slot) => {
    if (slot.slot_type !== "home" || slot.schedule_version !== SCHEDULE_VERSION) return false;
    const templateId = slot.id.split(":")[2];
    return templateId && !activeTemplateIds.has(templateId)
      && !bookings.some((booking) => booking.slot_id === slot.id);
  });
  for (const slot of orphanedHomeSlots) {
    await api(`appointment_slots?id=eq.${encodeURIComponent(slot.id)}`, { method: "DELETE" });
  }
  if (orphanedHomeSlots.length) await loadData();

  const generatedIds = new Set(getManagedWeekStarts().flatMap((weekStart) => {
    return buildWeeklySlots(weekStart).map((slot) => slot.id);
  }));

  if (restoreDeleted) {
    const deletedToRestore = deletedSlots
      .map((item) => item.slot_id)
      .filter((slotId) => generatedIds.has(slotId));

    for (const slotId of deletedToRestore) {
      await api(`appointment_deleted_slots?slot_id=eq.${encodeURIComponent(slotId)}`, { method: "DELETE" });
    }
    await loadData();
  }

  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  const existingIds = new Set(slots.map((slot) => slot.id));
  const deletedIds = new Set(deletedSlots.map((item) => item.slot_id));
  const generatedSlots = getManagedWeekStarts()
    .flatMap((weekStart) => buildWeeklySlots(weekStart))
    .filter((slot) => !existingIds.has(slot.id))
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => slot.slot_type !== "internal" || restoreDeleted || !deletedIds.has(slot.id));

  if (!generatedSlots.length) return 0;

  await api("appointment_slots?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=representation" },
    body: generatedSlots
  });
  await loadData();
  return generatedSlots.length;
}

function getReservedSlots() {
  return bookings
    .map((booking) => ({
      ...booking,
      slot: slots.find((slot) => slot.id === booking.slot_id)
    }))
    .filter((booking) => booking.slot)
    .sort((a, b) => `${a.slot.date}${a.slot.time}`.localeCompare(`${b.slot.date}${b.slot.time}`));
}

function rangesOverlap(startA, endA, startB, endB) {
  return startA <= endB && endA >= startB;
}

function timesOverlap(startA, endA, startB, endB) {
  return timeToMinutes(startA) < timeToMinutes(endB)
    && timeToMinutes(endA) > timeToMinutes(startB);
}

function bookingConflictsWithSlot(booking, slot) {
  const bookingStart = booking.booking_start_date || booking.slot.date;
  const bookingEnd = booking.booking_end_date || bookingStart;
  const slotEnd = slot.package_end_date || slot.date;
  const dateOverlap = rangesOverlap(bookingStart, bookingEnd, slot.date, slotEnd);
  if (!dateOverlap) return false;

  if (isFullDayBookingType(slot.slot_type) || isFullDayBookingType(booking.booking_type)) {
    return true;
  }

  if (bookingStart !== slot.date) return false;
  const bookingStartTime = booking.appointment_start_time || booking.slot.time;
  const bookingEndTime = booking.appointment_end_time || booking.slot.end_time || bookingStartTime;
  const slotEndTime = slot.end_time || slot.time;
  return timesOverlap(slot.time, slotEndTime, bookingStartTime, bookingEndTime);
}

function getAvailableSlots() {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selectedType = getCurrentBookingType();
  const selectedVisitCity = getSelectedVisitCity();
  const isNearExternalVisit = Number(selectedVisitCity?.distance_km) <= 100;
  const riyadhNow = getRiyadhDateTimeParts(now);
  const riyadhTodayKey = `${riyadhNow.year}-${riyadhNow.month}-${riyadhNow.day}`;
  const nearVisitTodayCutoff = new Date(`${riyadhTodayKey}T06:00:00+03:00`);
  const nearPackageMinimumDateKey = now <= nearVisitTodayCutoff
    ? riyadhTodayKey
    : addDaysToDateKey(riyadhTodayKey, 1);
  const specialPackageMinimumStart = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  let available = slots
    .filter((slot) => slot.schedule_version === SCHEDULE_VERSION)
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => !slot.suspended)
    .filter((slot) => slot.slot_type === selectedType)
    .filter((slot) => (
      slot.slot_type !== "special_external_package"
      || (
        isNearExternalVisit
          ? slot.date >= nearPackageMinimumDateKey
          : new Date(`${slot.date}T08:00:00+03:00`) >= specialPackageMinimumStart
      )
    ))
    .filter((slot) => !isExternalBookingType(slot.slot_type) || isThreeDayExternalPackage(slot))
    .filter((slot) => !getReservedSlots().some((booking) => bookingConflictsWithSlot(booking, slot)))
    .filter((slot) => {
      const date = new Date(`${slot.date}T00:00:00`);
      return date >= today && (selectedType === "internal" || date <= monthEnd);
    })
    .filter((slot) => slot.slot_type !== "internal" || !isPrayerBlocked(slot.date, slot.time))
    .filter((slot) => isFullDayBookingType(slot.slot_type) || getSlotDateTime(slot) > now)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));

  if (selectedType === "internal") {
    const firstFourDates = [...new Set(available.map((slot) => slot.date))].slice(0, 4);
    available = available.filter((slot) => firstFourDates.includes(slot.date));
  }
  return available;
}

function getAdminOpenSlots(slotType = null) {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const externalEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  const reserved = getReservedSlots();
  let available = slots
    .filter((slot) => slot.schedule_version === SCHEDULE_VERSION)
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => !slotType || slot.slot_type === slotType)
    .filter((slot) => !isExternalBookingType(slot.slot_type) || isThreeDayExternalPackage(slot))
    .filter((slot) => !reserved.some((booking) => bookingConflictsWithSlot(booking, slot)))
    .filter((slot) => {
      const slotDate = new Date(`${slot.date}T00:00:00`);
      return slotDate >= today && (slot.slot_type === "internal" || slotDate <= externalEnd);
    })
    .filter((slot) => slot.slot_type !== "internal" || !isPrayerBlocked(slot.date, slot.time))
    .filter((slot) => isFullDayBookingType(slot.slot_type) || getSlotDateTime(slot) > now)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));

  if (!slotType || slotType === "internal") {
    const internalDates = [...new Set(
      available.filter((slot) => slot.slot_type === "internal").map((slot) => slot.date)
    )].slice(0, 8);
    available = available.filter((slot) => {
      return slot.slot_type !== "internal" || internalDates.includes(slot.date);
    });
  }
  return available;
}

function groupSlotsByDate(rows) {
  return rows.reduce((groups, slot) => {
    const key = slot.date;
    if (!groups[key]) {
      groups[key] = { day: slot.day, date: slot.date, slots: [] };
    }
    groups[key].slots.push(slot);
    return groups;
  }, {});
}

function showMessage(element, text, type) {
  element.innerHTML = "";
  element.textContent = text;
  element.className = `message ${type || ""}`.trim();
}

function showToast(text) {
  if (!toast) return;
  toast.textContent = text;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}

function askRegenerateMode() {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "choice-modal";
    overlay.innerHTML = `
      <div class="choice-dialog" role="dialog" aria-modal="true" aria-label="تأكيد إعادة المواعيد">
        <h3>تأكيد إعادة المواعيد الأسبوعية</h3>
        <p>هل تريد الاستمرار بإعادة إنشاء المواعيد المحذوفة، أو إعادة إنشاء المواعيد المحذوفة مع إتاحة المواعيد المعلقة؟</p>
        <div class="choice-actions">
          <button class="secondary-action" type="button" data-choice="deleted">إعادة إنشاء المحذوفة فقط</button>
          <button class="secondary-action" type="button" data-choice="deleted-and-suspended">إعادة المحذوفة وإتاحة المعلق</button>
          <button class="outline-action" type="button" data-choice="cancel">إلغاء</button>
        </div>
      </div>
    `;

    const close = (value) => {
      overlay.remove();
      resolve(value);
    };

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close(null);
      const button = event.target.closest("button[data-choice]");
      if (!button) return;
      const choice = button.dataset.choice;
      close(choice === "cancel" ? null : choice);
    });

    document.body.append(overlay);
  });
}

function setCustomerLocation(location, source = "map") {
  selectedCustomerLocation = {
    lat: Number(location.lat),
    lng: Number(location.lng)
  };
  customerLatInput.value = selectedCustomerLocation.lat;
  customerLngInput.value = selectedCustomerLocation.lng;
  locationStatus.textContent = source === "current"
    ? "تم تحديد موقعك الحالي بنجاح."
    : "تم تحديد موقع الزيارة من الخريطة.";
  locationStatus.className = "location-status success";
}

function getDistanceInKilometers(first, second) {
  const toRadians = (value) => value * Math.PI / 180;
  const earthRadiusKm = 6371;
  const latitudeDifference = toRadians(Number(second.lat) - Number(first.lat));
  const longitudeDifference = toRadians(Number(second.lng) - Number(first.lng));
  const firstLatitude = toRadians(Number(first.lat));
  const secondLatitude = toRadians(Number(second.lat));
  const haversine = Math.sin(latitudeDifference / 2) ** 2
    + Math.cos(firstLatitude) * Math.cos(secondLatitude)
    * Math.sin(longitudeDifference / 2) ** 2;

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function isHomeVisitInsideHail() {
  return locationTypeInput.value !== "external" && homeSessionInput.checked;
}

function isLocationInsideHailCity(location) {
  return getDistanceInKilometers(HAIL_COORDINATES, location) <= HAIL_HOME_VISIT_RADIUS_KM;
}

function showHomeVisitLocationWarning() {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "choice-modal";
    overlay.innerHTML = `
      <div class="choice-dialog" role="alertdialog" aria-modal="true" aria-label="الموقع خارج نطاق الزيارة المنزلية">
        <h3>الموقع خارج نطاق الزيارة المنزلية</h3>
        <p>الموقع المحدد خارج مدينة حائل. اختر موقعًا داخل مدينة حائل، أو غيّر مكان الموعد إلى خارج مدينة حائل لطلب زيارة خارجية.</p>
        <div class="choice-actions">
          <button class="primary-action" type="button">حسنًا</button>
        </div>
      </div>
    `;

    const close = () => {
      overlay.remove();
      resolve();
    };
    overlay.querySelector("button").addEventListener("click", close);
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close();
    });
    document.body.append(overlay);
  });
}

async function acceptCustomerLocation(location, source = "map") {
  if (isHomeVisitInsideHail() && !isLocationInsideHailCity(location)) {
    locationStatus.textContent = "الموقع المحدد خارج نطاق الزيارات المنزلية داخل مدينة حائل.";
    locationStatus.className = "location-status error";
    await showHomeVisitLocationWarning();
    return false;
  }

  setCustomerLocation(location, source);
  return true;
}

function requestCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("خدمة تحديد الموقع غير مدعومة في هذا المتصفح."));
      return;
    }

    locationStatus.textContent = "جاري تحديد موقعك...";
    locationStatus.className = "location-status";
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const accepted = await acceptCustomerLocation(location, "current");
        if (!accepted) {
          const error = new Error("HOME_VISIT_OUT_OF_RANGE");
          error.code = "HOME_VISIT_OUT_OF_RANGE";
          reject(error);
          return;
        }
        resolve(location);
      },
      () => {
        locationStatus.textContent = "تعذر تحديد موقعك. اختر الموقع يدويًا من الخريطة.";
        locationStatus.className = "location-status error";
        reject(new Error("تعذر تحديد الموقع الحالي."));
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
    );
  });
}

function initializeLocationMap() {
  if (mapPicker || !window.L) return;
  mapPicker = L.map(locationMap).setView([HAIL_COORDINATES.lat, HAIL_COORDINATES.lng], 6);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(mapPicker);
  mapPicker.on("click", (event) => {
    pendingMapLocation = event.latlng;
    if (!mapPickerMarker) {
      mapPickerMarker = L.marker(event.latlng).addTo(mapPicker);
    } else {
      mapPickerMarker.setLatLng(event.latlng);
    }
  });
}

function openLocationPicker() {
  return new Promise((resolve) => {
    mapPickerResolver = resolve;
    mapPickerPanel.classList.remove("hidden");
    initializeLocationMap();
    const initial = selectedCustomerLocation || HAIL_COORDINATES;
    pendingMapLocation = { ...initial };
    if (mapPickerMarker) {
      mapPickerMarker.setLatLng(initial);
    } else if (mapPicker) {
      mapPickerMarker = L.marker(initial).addTo(mapPicker);
    }
    mapPicker?.setView(initial, selectedCustomerLocation ? 14 : 6);
    setTimeout(() => mapPicker?.invalidateSize(), 50);
  });
}

function closeLocationPicker(location = null) {
  mapPickerPanel.classList.add("hidden");
  const resolve = mapPickerResolver;
  mapPickerResolver = null;
  if (location) setCustomerLocation(location, "map");
  resolve?.(location);
}

function askVisitPriceAgreement(city) {
  return new Promise((resolve) => {
    const overlay = document.createElement("div");
    overlay.className = "choice-modal";

    const dialog = document.createElement("div");
    dialog.className = "choice-dialog price-agreement-dialog";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", "الموافقة على قيمة الزيارة");

    const title = document.createElement("h3");
    title.textContent = "تعهد بالموافقة على قيمة الزيارة";

    const destination = document.createElement("p");
    destination.textContent = `المدينة المختارة: ${city.city}`;

    const price = document.createElement("strong");
    price.className = "visit-price";
    price.textContent = `قيمة الزيارة: ${formatPrice(city.visit_price)} ريال`;

    const pledge = document.createElement("p");
    pledge.className = "price-pledge";
    pledge.textContent = "أتعهد بموافقتي على قيمة الزيارة الموضحة أعلاه وأرغب في تأكيد طلب الحجز.";

    const locationNotice = document.createElement("p");
    locationNotice.className = "location-agreement-notice";
    locationNotice.textContent = "تنبيه: سيتم إرسال الموقع المحدد ضمن رسالة طلب الزيارة. لتعيين موقع آخر استخدم الزر أدناه.";

    const alternatePhoneLabel = document.createElement("label");
    alternatePhoneLabel.className = "alternate-phone-label optional-field";
    alternatePhoneLabel.innerHTML = `
      <span>رقم جوال آخر للتواصل عند الوصول (اختياري)</span>
      <input type="tel" inputmode="numeric" maxlength="10" placeholder="05xxxxxxxx" />
    `;

    const actions = document.createElement("div");
    actions.className = "choice-actions";
    const agreeButton = document.createElement("button");
    agreeButton.className = "secondary-action";
    agreeButton.type = "button";
    agreeButton.textContent = "أوافق وأؤكد الحجز";
    const changeLocationButton = document.createElement("button");
    changeLocationButton.className = "outline-action";
    changeLocationButton.type = "button";
    changeLocationButton.textContent = "تعيين موقع آخر";
    const cancelButton = document.createElement("button");
    cancelButton.className = "outline-action";
    cancelButton.type = "button";
    cancelButton.textContent = "إلغاء";
    actions.append(agreeButton, changeLocationButton, cancelButton);
    dialog.append(title, destination, price, pledge, locationNotice, alternatePhoneLabel, actions);
    overlay.append(dialog);

    const close = (value) => {
      overlay.remove();
      resolve(value);
    };
    agreeButton.addEventListener("click", () => {
      const alternatePhone = alternatePhoneLabel.querySelector("input").value.trim();
      if (alternatePhone && !/^05\d{8}$/.test(alternatePhone)) {
        alternatePhoneLabel.classList.add("field-error");
        return;
      }
      close({ action: "agree", alternatePhone });
    });
    changeLocationButton.addEventListener("click", () => close({ action: "change-location" }));
    cancelButton.addEventListener("click", () => close({ action: "cancel" }));
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) close({ action: "cancel" });
    });
    document.body.append(overlay);
  });
}

function showBookingConfirmation(result) {
  bookingMessage.innerHTML = "";
  bookingMessage.className = "message success payment-message";

  if (isExternalBookingType(result.booking_type)) {
    const wrapper = document.createElement("div");
    wrapper.className = "external-message";
    const text = document.createElement("p");
    text.textContent = `تم تسجيل طلب باقة الزيارة في ${result.visit_city}. قيمة الزيارة: ${formatPrice(result.visit_price)} ريال.`;
    const warning = document.createElement("p");
    warning.className = "external-whatsapp-warning";
    warning.textContent = "تنبيه: يجب الضغط على زر إرسال طلب الموعد عبر واتساب لإكمال إرسال الطلب إلى المدير.";
    const link = document.createElement("a");
    link.className = "whatsapp-button external-whatsapp";
    link.textContent = "إرسال طلب الموعد عبر واتساب";
    link.href = getExternalBookingWhatsappUrl(result);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    wrapper.append(text, warning, link);
    bookingMessage.append(wrapper);
    return;
  }

  const text = document.createElement("div");
  text.className = "payment-text";
  const amount = Number(result.visit_price || (
    isHomeBookingType(result.booking_type) ? pricing.home_visit_price : pricing.general_price
  ));
  [`لتأكيد الحجز يرجى تحويل مبلغ ${amount} ريال`, "على الحساب البنكي التالي:", "SA4480000456608016164286"].forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    text.append(p);
  });

  const qr = document.createElement("img");
  qr.className = "bank-qr";
  qr.src = "bank-qr.jpeg";
  qr.alt = "صورة الحساب البنكي";

  const whatsapp = document.createElement("p");
  whatsapp.textContent = "بعد التحويل على رقم الحساب الظاهر، يرجى الضغط على زر إرفاق إيصال التحويل.";

  const receiptAction = document.createElement("button");
  receiptAction.className = "receipt-highlight-button inline-receipt-button";
  receiptAction.type = "button";
  receiptAction.textContent = "إرفاق إيصال التحويل";
  receiptAction.addEventListener("click", () => {
    receiptPanel.classList.remove("hidden");
  });

  const saveNote = document.createElement("p");
  saveNote.className = "payment-save-note";
  saveNote.textContent = "سيظهر رقم الحجز بعد إتمام التحويل وتسجيل إرسال الإيصال عبر واتساب.";

  const warning = document.createElement("p");
  warning.className = "payment-warning";
  warning.textContent = MESSAGES.paymentWarning;

  bookingMessage.append(text, qr, whatsapp, receiptAction, saveNote, warning);
}

function renderBookingNumber(bookingNumber) {
  bookingNumberDisplay.innerHTML = "";
  bookingNumberDisplay.classList.toggle("hidden", !bookingNumber);
  if (!bookingNumber) return;

  const number = document.createElement("strong");
  number.textContent = `رقم الحجز: ${bookingNumber}`;
  const note = document.createElement("span");
  note.textContent = "لابد من حفظ رقم الحجز ونسخه للحاجة إليه بعد التحويل وإرفاق الإيصال.";
  bookingNumberDisplay.append(number, note);
}

function clearBookingConfirmation() {
  localStorage.removeItem(BOOKING_CONFIRMATION_STORAGE_KEY);
  sessionStorage.removeItem(BOOKING_CONFIRMATION_STORAGE_KEY);
  renderBookingNumber(null);
  showMessage(bookingMessage, "", "");
}

function setBusy(form, isBusy) {
  [...form.querySelectorAll("button, input, select")].forEach((element) => {
    element.disabled = isBusy;
  });
}

function showPanel(name) {
  const isAdminPanel = name === "admin";
  bookingPanel.classList.toggle("active", !isAdminPanel);
  adminPanel.classList.toggle("active", isAdminPanel);
  receiptButton.classList.toggle("hidden", isAdminPanel);
  recoveryButton.classList.toggle("hidden", isAdminPanel);
  trackingButton.classList.toggle("hidden", isAdminPanel);
  if (isAdminPanel) {
    clearBookingConfirmation();
    receiptPanel.classList.add("hidden");
    recoveryPanel.classList.add("hidden");
    trackingPanel.classList.add("hidden");
    if (isAdmin) handleAdminActivity();
  }
}

function showAdminView(name) {
  adminAvailableView.classList.toggle("active", name === "available");
  adminBookingsView.classList.toggle("active", name === "bookings");
  adminSettingsView.classList.toggle("active", name === "settings");
  adminTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.adminView === name);
  });
}

function renderAdminAccess() {
  adminLoginView.classList.toggle("hidden", isAdmin);
  adminDashboard.classList.toggle("hidden", !isAdmin);
}

function renderBookingOptions() {
  const available = getAvailableSlots();
  userSlots.innerHTML = "";
  userDayChoices.innerHTML = "";

  if (selectedSlotId && !available.some((slot) => slot.id === selectedSlotId)) {
    selectedSlotId = "";
    slotSelect.value = "";
  }

  if (!available.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = locationTypeInput.value === "internal" && !prayerTimesReady
      ? "تعذر تحميل مواقيت الصلاة حاليًا، لذلك تم إيقاف عرض مواعيد مدينة حائل مؤقتًا."
      : "لا توجد مواعيد متاحة حاليًا";
    userSlots.append(empty);
    return;
  }

  if (isFullDayBookingType(getCurrentBookingType())) {
    selectedBookingDate = "";
    const packageGrid = document.createElement("div");
    packageGrid.className = "package-grid customer-package-grid";
    available.forEach((slot) => {
      const card = createPackageCard(slot, {
        selected: selectedSlotId === slot.id,
        onSelect: () => {
          selectedSlotId = slot.id;
          slotSelect.value = slot.id;
          renderBookingOptions();
        }
      });
      packageGrid.append(card);
    });
    userSlots.append(packageGrid);
    return;
  }

  const groups = Object.values(groupSlotsByDate(available));
  if (!selectedBookingDate || !groups.some((group) => group.date === selectedBookingDate)) {
    selectedBookingDate = groups[0].date;
  }

  groups.forEach((group) => {
    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.className = `day-choice ${selectedBookingDate === group.date ? "active" : ""}`;
    dayButton.innerHTML = `<strong>${group.day}</strong><span>${formatDate(group.date)}</span>`;
    dayButton.addEventListener("click", () => {
      selectedBookingDate = group.date;
      selectedSlotId = "";
      slotSelect.value = "";
      renderBookingOptions();
    });
    userDayChoices.append(dayButton);
  });

  const group = groups.find((item) => item.date === selectedBookingDate);
  if (!group) return;

  const section = document.createElement("section");
  section.className = "day-group selected-day-group";
  const title = document.createElement("div");
  title.className = "day-group-title";
  title.innerHTML = `<div class="day-title-text"><strong>${group.day}</strong><span>${formatDate(group.date)}</span></div>`;
  section.append(title);

  if (getCurrentBookingType() === "internal") {
    appendPrayerBreaks(section, group.date);
  }

  const times = document.createElement("div");
  times.className = getCurrentBookingType() === "internal" ? "time-grid" : "visit-option-grid";
  group.slots.forEach((slot) => {
    const item = document.createElement("div");
    item.className = `time-item bookable-time ${selectedSlotId === slot.id ? "selected" : ""}`;
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    const label = slot.slot_type === "internal"
      ? formatTime(slot.time)
      : isHomeBookingType(slot.slot_type)
        ? `${slot.title}: ${formatTime(slot.time)} إلى ${formatTime(slot.end_time)}`
        : `${slot.title}: ${slot.day} ${formatDate(slot.date)}`;
    item.setAttribute("aria-label", `اختيار ${label}`);
    const content = document.createElement("span");
    content.textContent = label;
    const selectSlot = () => {
      selectedSlotId = slot.id;
      slotSelect.value = slot.id;
      renderBookingOptions();
    };
    item.addEventListener("click", selectSlot);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectSlot();
      }
    });
    item.append(content);
    times.append(item);
  });
  section.append(times);
  userSlots.append(section);
}

function createPackageCard(slot, { selected = false, onSelect = null, admin = false } = {}) {
  const card = document.createElement(onSelect ? "button" : "article");
  if (onSelect) card.type = "button";
  card.className = `package-card ${selected ? "selected" : ""} ${slot.suspended ? "suspended-slot" : ""}`;

  const badge = document.createElement("span");
  badge.className = "package-badge";
  badge.textContent = "باقة 3 أيام";
  const title = document.createElement("strong");
  title.textContent = slot.title || "باقة زيارة خارج مدينة حائل";
  const days = document.createElement("span");
  days.className = "package-days";
  const packageDays = Array.from({ length: 3 }, (_, offset) => {
    const date = new Date(`${slot.date}T12:00:00`);
    date.setDate(date.getDate() + offset);
    return new Intl.DateTimeFormat("ar-SA", { weekday: "long" }).format(date);
  });
  days.textContent = packageDays.join("، ");
  const dates = document.createElement("span");
  dates.className = "package-dates";
  dates.textContent = formatDateRange(slot.date, slot.package_end_date);
  card.append(badge, title, days, dates);

  if (onSelect) {
    card.addEventListener("click", onSelect);
    card.setAttribute("aria-label", `اختيار ${title.textContent} ${dates.textContent}`);
  }
  if (admin) card.classList.add("admin-package-card");
  return card;
}

function appendButton(parent, className, text, onClick) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = text;
  button.addEventListener("click", onClick);
  parent.append(button);
  return button;
}

function appendLinkButton(parent, className, text, href) {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = text;
  parent.append(link);
  return link;
}

const ICONS = {
  confirm: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2A9.93 9.93 0 0 0 2.1 11.94c0 1.75.46 3.46 1.34 4.97L2 22l5.25-1.38a9.91 9.91 0 0 0 4.79 1.22h.01A9.93 9.93 0 0 0 22 11.91 9.94 9.94 0 0 0 12.04 2Zm5.78 14.2c-.24.67-1.2 1.23-1.94 1.39-.52.11-1.2.2-3.48-.74-2.92-1.21-4.8-4.18-4.95-4.38-.14-.19-1.18-1.57-1.18-3 0-1.43.73-2.13.99-2.42.24-.27.64-.4 1.02-.4h.73c.23 0 .52.04.79.6.3.62 1.02 2.49 1.1 2.67.09.18.15.4.03.64-.11.24-.17.39-.35.6-.18.21-.37.47-.53.63-.18.18-.36.38-.16.75.2.36.87 1.43 1.87 2.32 1.29 1.15 2.37 1.51 2.73 1.68.36.18.57.15.78-.09.24-.27.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.86-.15 1.53Z"/></svg>',
  attend: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Zm8.6-1.9-5.1 5.08-2.1-2.08-1.4 1.4 3.5 3.5 6.5-6.5-1.4-1.4Z"/></svg>',
  cancel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18.3 5.71-1.41-1.41L12 9.17 7.11 4.29 5.7 5.7 10.59 10.6 5.7 15.49l1.41 1.41L12 12.01l4.89 4.89 1.41-1.41-4.89-4.89 4.89-4.89Z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM8 9h8v10H8V9Zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6V5Zm8 0h4v14h-4V5Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z"/></svg>'
};

function appendIconButton(parent, className, title, icon, onClick) {
  const button = document.createElement("button");
  button.className = `${className} icon-action`;
  button.type = "button";
  button.title = title;
  button.setAttribute("aria-label", title);
  button.innerHTML = icon;
  button.addEventListener("click", onClick);
  parent.append(button);
  return button;
}

function appendIconLink(parent, className, title, icon, href) {
  const link = document.createElement("a");
  link.className = `${className} icon-action`;
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.title = title;
  link.setAttribute("aria-label", title);
  link.innerHTML = icon;
  parent.append(link);
  return link;
}

function appendCell(row, value) {
  const cell = document.createElement("td");
  cell.textContent = value;
  row.append(cell);
  return cell;
}

function appendBookingLocationCell(row, booking) {
  const cell = document.createElement("td");
  cell.className = "booking-location-cell";
  const card = document.createElement("div");
  card.className = "booking-location-card";

  const heading = document.createElement("strong");
  heading.className = "booking-location-heading";
  heading.textContent = booking.region || booking.city || "مدينة حائل";
  card.append(heading);

  if (booking.visit_city) {
    const city = document.createElement("span");
    city.className = "booking-location-city";
    city.textContent = booking.visit_city;
    card.append(city);
  }

  const details = [
    booking.visit_distance_km
      ? ["المسافة ذهابًا", `${booking.visit_distance_km} كم`]
      : null,
    booking.visit_price
      ? ["قيمة الزيارة", `${formatPrice(booking.visit_price)} ريال`]
      : null,
    booking.home_session
      ? ["نوع الموعد", "زيارة منزلية"]
      : null,
    booking.alternate_phone
      ? ["رقم إضافي", booking.alternate_phone]
      : null
  ].filter(Boolean);

  if (details.length) {
    const detailsList = document.createElement("div");
    detailsList.className = "booking-location-details";
    details.forEach(([label, value]) => {
      const detail = document.createElement("div");
      const detailLabel = document.createElement("span");
      detailLabel.textContent = label;
      const detailValue = document.createElement("strong");
      detailValue.textContent = value;
      detail.append(detailLabel, detailValue);
      detailsList.append(detail);
    });
    card.append(detailsList);
  }

  if (booking.customer_location_url) {
    const locationLink = document.createElement("a");
    locationLink.className = "booking-location-link";
    locationLink.href = booking.customer_location_url;
    locationLink.target = "_blank";
    locationLink.rel = "noopener noreferrer";
    locationLink.textContent = "فتح موقع الزيارة";
    locationLink.setAttribute("aria-label", "فتح موقع الزيارة في خرائط Google");
    card.append(locationLink);
  }

  cell.append(card);
  row.append(cell);
  return cell;
}

function appendAppointmentCell(row, booking) {
  const cell = document.createElement("td");
  cell.className = "appointment-cell";
  if (isFullDayBookingType(booking.booking_type)) {
    cell.classList.add("package-appointment-cell");
    const title = document.createElement("strong");
    title.className = "appointment-package-title";
    const isPackage = isMultiDayBookingType(booking.booking_type, booking);
    title.textContent = booking.appointment_title || (
      booking.booking_type === "special_home"
        ? "باقة زيارة منزلية قديمة داخل مدينة حائل"
        : isPackage
          ? "باقة زيارة خارج مدينة حائل"
          : "زيارة خارج مدينة حائل - يوم كامل"
    );
    const days = document.createElement("div");
    days.className = "appointment-package-days";
    getDetailedPackageDays(booking.booking_start_date, booking.booking_end_date).forEach((item, index) => {
      const dayRow = document.createElement("div");
      dayRow.className = "appointment-package-day";
      const order = document.createElement("span");
      order.className = "package-day-order";
      order.textContent = isPackage
        ? `اليوم ${["الأول", "الثاني", "الثالث"][index] || index + 1}`
        : "يوم الزيارة";
      const dayName = document.createElement("strong");
      dayName.textContent = item.day;
      const dates = document.createElement("span");
      dates.className = "package-day-dates";
      dates.textContent = `${item.gregorian} (${item.hijri})`;
      dayRow.append(order, dayName, dates);
      days.append(dayRow);
    });
    cell.append(title, days);
    row.append(cell);
    return cell;
  }

  const card = document.createElement("div");
  card.className = "appointment-detail-card";
  const title = document.createElement("strong");
  title.className = "appointment-package-title";
  title.textContent = isHomeBookingType(booking.booking_type)
    ? booking.appointment_title || booking.slot.title || "زيارة منزلية داخل مدينة حائل"
    : booking.appointment_title || booking.slot.title || "موعد عام داخل مدينة حائل";

  const dayRow = document.createElement("div");
  dayRow.className = "appointment-package-day";
  const order = document.createElement("span");
  order.className = "package-day-order";
  order.textContent = "اليوم";
  const dayName = document.createElement("strong");
  dayName.textContent = booking.slot.day;
  const dates = document.createElement("span");
  dates.className = "package-day-dates";
  dates.textContent = formatDate(booking.slot.date);
  dayRow.append(order, dayName, dates);

  const timeRow = document.createElement("div");
  timeRow.className = "appointment-time-row";
  const timeLabel = document.createElement("span");
  timeLabel.textContent = "الوقت";
  const timeValue = document.createElement("strong");
  const startTime = booking.appointment_start_time || booking.slot.time;
  const endTime = booking.appointment_end_time || booking.slot.end_time;
  timeValue.textContent = endTime
    ? `${formatTime(startTime)} إلى ${formatTime(endTime)}`
    : formatTime(startTime);
  timeRow.append(timeLabel, timeValue);

  card.append(title, dayRow, timeRow);
  cell.append(card);
  row.append(cell);
  return cell;
}

function appendBookingStatusCell(row, booking) {
  const cell = document.createElement("td");
  cell.className = "booking-status-cell";
  const card = document.createElement("div");
  card.className = "booking-status-card";
  const isExternal = isExternalBookingType(booking.booking_type);
  const expiresAt = booking.expires_at ? new Date(booking.expires_at) : null;
  const currentStage = isExternal
    ? booking.attended
      ? 4
      : booking.confirmed
        ? 3
        : booking.receipt_sent
          ? 2
          : booking.manager_approved
            ? 1
            : 0
    : booking.attended
      ? 3
      : booking.confirmed
        ? 2
        : booking.receipt_sent
          ? 1
          : 0;
  const completedStages = isExternal
    ? [
        Boolean(booking.manager_approved || booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.confirmed || booking.attended),
        Boolean(booking.attended)
      ]
    : [
        Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.confirmed || booking.attended),
        Boolean(booking.attended)
      ];
  const stages = isExternal
    ? [
        "بانتظار مراجعة المدير",
        "تمت الموافقة على الموعد - بانتظار التحويل وإرفاق الإيصال",
        "تم إرفاق الإيصال - بانتظار تأكيد المدير",
        "تم تأكيد الموعد واستلام المبلغ",
        "تم الحضور وإتمام الجلسة"
      ]
    : [
        expiresAt ? `بانتظار التحويل حتى ${formatTimeFromDate(expiresAt)}` : "بانتظار التحويل",
        "تم إرفاق الإيصال - بانتظار تأكيد المدير",
        "تم تأكيد الموعد",
        "تم الحضور وإتمام الجلسة"
      ];

  stages.forEach((label, index) => {
    const stage = document.createElement("div");
    stage.className = "booking-status-stage";
    if (completedStages[index]) stage.classList.add("completed");
    if (index === currentStage) stage.classList.add("current");
    if (index > currentStage) stage.classList.add("upcoming");

    const marker = document.createElement("span");
    marker.className = "booking-status-marker";
    marker.textContent = completedStages[index] ? "✓" : index === currentStage ? "•" : String(index + 1);

    const text = document.createElement("span");
    text.className = "booking-status-label";
    text.textContent = label;
    stage.append(marker, text);
    card.append(stage);
  });

  cell.append(card);
  row.append(cell);
  return cell;
}

function renderAdminSlotGroup(container, available) {
  container.innerHTML = "";

  if (!available.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "لا توجد مواعيد متاحة.";
    container.append(empty);
    return;
  }

  Object.values(groupSlotsByDate(available)).forEach((group) => {
    const section = document.createElement("section");
    section.className = "day-group";

    const title = document.createElement("div");
    title.className = "day-group-title";
    const titleText = document.createElement("div");
    titleText.className = "day-title-text";
    titleText.innerHTML = `<strong>${group.day}</strong><span>${formatDate(group.date)}</span>`;
    const hasDaySuspendedSlot = group.slots.some((slot) => slot.suspended);
    const dayButton = document.createElement("button");
    dayButton.className = `${hasDaySuspendedSlot ? "success-action" : "danger-solid"} compact-button`;
    dayButton.type = "button";
    dayButton.textContent = hasDaySuspendedSlot ? "إتاحة مواعيد هذا اليوم" : "تعليق مواعيد هذا اليوم";
    dayButton.addEventListener("click", () => toggleDaySuspension(group.date, !hasDaySuspendedSlot));
    title.append(titleText, dayButton);

    const times = document.createElement("div");
    times.className = group.slots.some((slot) => isHomeBookingType(slot.slot_type))
      ? "visit-option-grid admin-home-grid"
      : "time-grid";

    group.slots.forEach((slot) => {
      const item = document.createElement("div");
      item.className = `time-item ${slot.suspended ? "suspended-slot" : ""}`;
      const time = document.createElement("span");
      time.textContent = slot.slot_type === "internal"
        ? formatTime(slot.time)
        : isHomeBookingType(slot.slot_type)
          ? `${slot.title}: ${formatTime(slot.time)} - ${formatTime(slot.end_time)}`
          : `${slot.title}: ${formatDateRange(slot.date, slot.package_end_date)}`;
      appendIconButton(
        item,
        slot.suspended ? "attendance-button" : "outline-action",
        slot.suspended ? "إتاحة الموعد" : "تعليق الموعد",
        slot.suspended ? ICONS.play : ICONS.pause,
        () => toggleSlotSuspension(slot.id, !slot.suspended)
      );
      if (slot.slot_type === "internal") {
        appendIconButton(item, "danger-button", "حذف الموعد", ICONS.trash, () => deleteSlot(slot.id));
      }
      item.prepend(time);
      times.append(item);
    });

    section.append(title);
    if (group.slots.some((slot) => slot.slot_type === "internal")) {
      appendPrayerBreaks(section, group.date);
    }
    section.append(times);
    container.append(section);
  });
}

function renderAdminPackageGrid(container, available) {
  container.innerHTML = "";
  if (!available.length) {
    container.innerHTML = '<p class="empty-state">لا توجد باقات متاحة.</p>';
    return;
  }

  const grid = document.createElement("div");
  grid.className = "package-grid admin-package-grid";
  available.forEach((slot) => {
    const wrapper = document.createElement("div");
    wrapper.className = "package-admin-item";
    wrapper.append(createPackageCard(slot, { admin: true }));
    const action = document.createElement("div");
    action.className = "package-card-action";
    appendIconButton(
      action,
      slot.suspended ? "attendance-button" : "outline-action",
      slot.suspended ? "إتاحة الباقة" : "تعليق الباقة",
      slot.suspended ? ICONS.play : ICONS.pause,
      () => toggleSlotSuspension(slot.id, !slot.suspended)
    );
    wrapper.append(action);
    grid.append(wrapper);
  });
  container.append(grid);
}

function renderAvailableSlots() {
  const internal = getAdminOpenSlots("internal");
  const homeRegular = getAdminOpenSlots("home");
  const home = [...homeRegular];
  const externalDays = [
    ...getAdminOpenSlots("external"),
    ...getAdminOpenSlots("special_external_package")
  ].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  const external = [...externalDays];
  const available = [...internal, ...home, ...external];
  availableCount.textContent = `${available.filter((slot) => !slot.suspended).length} موعد`;
  updateWeekButton();
  renderAdminSlotGroup(internalAvailableSlots, internal);
  homeAvailableSlots.innerHTML = "";
  const homeRegularSection = document.createElement("section");
  const homeRegularTitle = document.createElement("h5");
  homeRegularTitle.textContent = "الزيارات المنزلية المجدولة";
  const homeRegularContainer = document.createElement("div");
  homeRegularSection.append(homeRegularTitle, homeRegularContainer);
  renderAdminSlotGroup(homeRegularContainer, homeRegular);
  homeAvailableSlots.append(homeRegularSection);
  externalAvailableSlots.innerHTML = "";
  const daysTitle = document.createElement("h5");
  daysTitle.textContent = "باقات الزيارات الخارجية - ثلاثة أيام";
  const daysContainer = document.createElement("div");
  renderAdminPackageGrid(daysContainer, externalDays);
  externalAvailableSlots.append(daysTitle, daysContainer);
}

function getCurrentWeekOpenSlots() {
  return getAdminOpenSlots("internal");
}

function getManagedGeneratedSlotIds() {
  return new Set(getManagedWeekStarts().flatMap((weekStart) => {
    return buildWeeklySlots(weekStart).map((slot) => slot.id);
  }));
}

function updateWeekButton() {
  const weekSlots = getCurrentWeekOpenSlots();
  const hasSuspendedSlot = weekSlots.some((slot) => slot.suspended);
  suspendWeekButton.className = hasSuspendedSlot ? "success-action" : "danger-solid";
  suspendWeekButton.textContent = hasSuspendedSlot
    ? "إعادة إتاحة المواعيد الثمانية المعروضة"
    : "تعليق المواعيد الثمانية المعروضة";
}

function renderBookingsTable() {
  const allReserved = getReservedSlots();
  const activeReserved = allReserved.filter((booking) => !booking.attended);
  const reserved = adminBookingFilter === "all"
    ? allReserved
    : allReserved.filter((booking) => {
        if (adminBookingFilter === "home") return isHomeBookingType(booking.booking_type);
        if (adminBookingFilter === "external") return isExternalBookingType(booking.booking_type);
        return booking.booking_type === adminBookingFilter;
      });
  reservedCount.textContent = `${activeReserved.length} موعد`;
  reservedSlots.innerHTML = "";

  if (!reserved.length) {
    const row = document.createElement("tr");
    row.innerHTML = '<td colspan="7" class="empty-state">لا توجد مواعيد محجوزة.</td>';
    reservedSlots.append(row);
    return;
  }

  reserved.forEach((booking) => {
    const row = document.createElement("tr");
    if (booking.attended) {
      row.className = "attended-row";
    }
    appendCell(row, booking.name || "غير مسجل");
    appendCell(row, booking.booking_number || "-");
    appendCell(row, booking.phone);
    appendBookingLocationCell(row, booking);
    appendAppointmentCell(row, booking);
    appendBookingStatusCell(row, booking);
    const actionsCell = document.createElement("td");
    const actions = document.createElement("div");
    actions.className = "table-actions";
    actionsCell.append(actions);
    row.append(actionsCell);
    const isExternal = isExternalBookingType(booking.booking_type);
    if (booking.attended) {
      appendIconButton(actions, "danger-button", "حذف الجلسة التي تمت", ICONS.trash, () => deleteCompletedBooking(booking.id));
    } else if (isExternal && !booking.manager_approved) {
      appendIconButton(actions, "confirm-button", "الموافقة على طلب الموعد", ICONS.confirm, () => approveExternalBooking(booking));
    } else if (isExternal && !booking.receipt_sent) {
      appendIconLink(actions, "whatsapp-button", "إعادة إرسال تفاصيل التحويل", ICONS.whatsapp, getExternalApprovalWhatsappUrl(booking));
    } else if (isExternal && !booking.confirmed) {
      appendIconButton(actions, "confirm-button", "تأكيد استلام الإيصال", ICONS.confirm, () => confirmExternalReceipt(booking));
    } else if (!booking.confirmed) {
      appendIconButton(actions, "confirm-button", "تأكيد الحجز", ICONS.confirm, () => confirmBooking(booking.id));
    } else {
      appendIconLink(actions, "whatsapp-button", "إرسال واتساب", ICONS.whatsapp, getWhatsappUrl(booking));
      appendIconButton(actions, "attendance-button", "تم الحضور", ICONS.attend, () => markAttended(booking.id));
    }
    if (!booking.attended) {
      appendIconButton(actions, "danger-button", "إلغاء الحجز", ICONS.cancel, () => cancelBooking(booking));
    }
    reservedSlots.append(row);
  });
}

function renderSettings() {
  generalPriceInput.value = pricing.general_price ?? "";
  homeVisitPriceInput.value = pricing.home_visit_price ?? "";
  externalNearPriceInput.value = pricing.external_near_price ?? "";
  externalFarPriceInput.value = pricing.external_far_price ?? "";
  visitTemplateList.innerHTML = "";

  if (!visitTemplates.length) {
    visitTemplateList.innerHTML = '<p class="empty-state">لا توجد زيارات معرفة في القالب.</p>';
    return;
  }

  visitTemplates.forEach((template) => {
    const item = document.createElement("div");
    item.className = "template-item";
    const text = document.createElement("div");
    text.innerHTML = `<strong>${template.title}</strong><span>${formatTime(template.start_time)} إلى ${formatTime(template.end_time)}</span>`;
    const actions = document.createElement("div");
    actions.className = "template-actions";
    appendButton(actions, "outline-action compact-button", "تعديل", () => {
      visitTemplateId.value = template.id;
      visitTemplateTitle.value = template.title;
      visitTemplateStart.value = template.start_time;
      visitTemplateEnd.value = template.end_time;
      cancelTemplateEditButton.classList.remove("hidden");
    });
    appendButton(actions, "danger-button compact-button", "حذف", () => deleteVisitTemplate(template.id));
    item.append(text, actions);
    visitTemplateList.append(item);
  });
}

function renderAll() {
  renderAdminAccess();
  renderBookingOptions();
  renderAvailableSlots();
  renderBookingsTable();
  renderSettings();
}

function renderReceiptBooking(booking) {
  receiptResult.innerHTML = "";

  const card = document.createElement("div");
  card.className = "receipt-card";

  const table = document.createElement("table");
  table.className = "receipt-table";
  table.innerHTML = `
    <tbody>
      <tr><th>الاسم</th><td></td></tr>
      <tr><th>اليوم</th><td></td></tr>
      <tr><th>التاريخ</th><td></td></tr>
      <tr><th>الساعة</th><td></td></tr>
      <tr><th>المدينة</th><td></td></tr>
      <tr class="visit-price-row"><th>قيمة الزيارة</th><td></td></tr>
    </tbody>
  `;
  const cells = table.querySelectorAll("td");
  [
    booking.name || "غير مسجل",
    isFullDayBookingType(booking.booking_type)
      ? isMultiDayBookingType(booking.booking_type, booking)
        ? "باقة خارج مدينة حائل"
        : booking.slot.day
      : booking.slot.day,
    isFullDayBookingType(booking.booking_type)
      ? isMultiDayBookingType(booking.booking_type, booking)
        ? formatDateRange(booking.booking_start_date, booking.booking_end_date)
        : formatDate(booking.slot.date)
      : formatDate(booking.slot.date),
    isFullDayBookingType(booking.booking_type)
      ? "-"
      : `${formatTime(booking.slot.time)}${booking.slot.end_time ? ` إلى ${formatTime(booking.slot.end_time)}` : ""}`,
    booking.visit_city || booking.city || "غير محدد",
    booking.visit_price ? `${formatPrice(booking.visit_price)} ريال` : "-"
  ].forEach((value, index) => {
    cells[index].textContent = value;
  });

  const note = document.createElement("p");
  note.className = "receipt-note receipt-action-warning";
  if (isExternalBookingType(booking.booking_type) && !booking.manager_approved) {
    note.textContent = "طلب الزيارة الخارجية بانتظار مراجعة المدير. لا يتم التحويل أو إرسال الإيصال إلا بعد موافقة المدير ووصول رسالة تفاصيل التحويل.";
    card.append(table, note);
    receiptResult.append(card);
    return;
  }
  note.textContent = "تنبيه: لا تضغط على زر إرسال واتساب إلا بعد إتمام التحويل فعليًا والاحتفاظ بإيصال التحويل لإرساله عبر واتساب.";

  const receiptBookingNumber = document.createElement("div");
  receiptBookingNumber.className = "booking-number receipt-booking-number hidden";

  const revealBookingNumber = () => {
    receiptBookingNumber.innerHTML = "";
    const number = document.createElement("strong");
    number.textContent = `رقم الحجز: ${booking.booking_number}`;
    const numberNote = document.createElement("span");
    numberNote.textContent = "احفظ رقم الحجز واحتفظ به لمتابعة حالة الموعد.";
    receiptBookingNumber.append(number, numberNote);
    receiptBookingNumber.classList.remove("hidden");
    renderBookingNumber(booking.booking_number);
  };

  const sendLink = document.createElement("a");
  sendLink.className = "whatsapp-button receipt-whatsapp";
  sendLink.textContent = "إرسال واتساب";
  sendLink.href = getReceiptWhatsappUrl(booking);
  sendLink.target = "_blank";
  sendLink.rel = "noopener noreferrer";
  sendLink.addEventListener("click", async (event) => {
    event.preventDefault();
    const whatsappWindow = window.open("about:blank", "_blank");
    try {
      const marked = await markReceiptSent(booking.phone, booking.booking_number);
      if (!marked && !booking.confirmed) {
        whatsappWindow?.close();
        showMessage(receiptMessage, "لم يعد الحجز متاحًا لإرفاق الإيصال، أو لم تتم الموافقة على طلب الزيارة الخارجية بعد.", "error");
        return;
      }
      if (whatsappWindow) {
        whatsappWindow.opener = null;
        whatsappWindow.location.href = sendLink.href;
      } else {
        openExternalMessage(sendLink.href);
      }
      booking.receipt_sent = true;
      revealBookingNumber();
      showMessage(receiptMessage, "تم تسجيل إرفاق الإيصال. الحجز ما زال بانتظار تأكيد المدير.", "success");
    } catch (error) {
      whatsappWindow?.close();
      showMessage(receiptMessage, `تعذر تسجيل إرفاق الإيصال: ${error.message}`, "error");
    }
  });

  if (booking.receipt_sent) {
    revealBookingNumber();
  }

  card.append(table, note, sendLink, receiptBookingNumber);
  receiptResult.append(card);
}

async function lookupReceiptBooking(phone, bookingNumber) {
  const rows = await api("rpc/lookup_appointment_booking", {
    method: "POST",
    body: {
      p_phone: phone,
      p_booking_number: bookingNumber
    }
  });
  const row = rows?.[0];
  if (!row) return null;

  return {
    ...row,
    slot: {
      id: row.slot_id,
      day: row.slot_day,
      date: row.slot_date,
      time: row.slot_time,
      end_time: row.slot_end_time,
      title: row.appointment_title
    }
  };
}

async function markReceiptSent(phone, bookingNumber) {
  return api("rpc/mark_appointment_receipt_sent", {
    method: "POST",
    body: {
      p_phone: phone,
      p_booking_number: bookingNumber
    }
  });
}

async function recoverBookingNumber(phone, name) {
  const rows = await api("rpc/recover_appointment_booking_number", {
    method: "POST",
    body: { p_phone: phone, p_name: name }
  });
  return rows?.[0] || null;
}

function getTrackingStatusProgress(booking) {
  const isExternal = isExternalBookingType(booking.booking_type);
  const expiresAt = booking.expires_at ? new Date(booking.expires_at) : null;

  if (isExternal) {
    const currentStage = booking.attended
      ? 4
      : booking.confirmed
        ? 3
        : booking.receipt_sent
          ? 2
          : booking.manager_approved
            ? 1
            : 0;
    return {
      currentStage,
      labels: [
        "بانتظار مراجعة المدير",
        "تمت الموافقة على الموعد - بانتظار التحويل وإرفاق الإيصال",
        "تم إرفاق الإيصال - بانتظار تأكيد المدير",
        "تم تأكيد الموعد واستلام المبلغ",
        "تم الحضور وإتمام الجلسة"
      ],
      completed: [
        Boolean(booking.manager_approved || booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
        Boolean(booking.confirmed || booking.attended),
        Boolean(booking.attended)
      ]
    };
  }

  const currentStage = booking.attended
    ? 3
    : booking.confirmed
      ? 2
      : booking.receipt_sent
        ? 1
        : 0;
  return {
    currentStage,
    labels: [
      expiresAt ? `بانتظار التحويل حتى ${formatTimeFromDate(expiresAt)}` : "بانتظار التحويل",
      "تم إرفاق الإيصال - بانتظار تأكيد المدير",
      "تم تأكيد الموعد",
      "تم الحضور وإتمام الجلسة"
    ],
    completed: [
      Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
      Boolean(booking.receipt_sent || booking.confirmed || booking.attended),
      Boolean(booking.confirmed || booking.attended),
      Boolean(booking.attended)
    ]
  };
}

function getTrackingBookingType(booking) {
  if (isExternalBookingType(booking.booking_type)) return "زيارة خارج مدينة حائل";
  if (isHomeBookingType(booking.booking_type)) return "زيارة منزلية داخل مدينة حائل";
  return "موعد عام داخل مدينة حائل";
}

function appendTrackingDetail(container, label, value) {
  const item = document.createElement("div");
  item.className = "tracking-detail";
  const title = document.createElement("span");
  title.textContent = label;
  const text = document.createElement("strong");
  text.textContent = value || "-";
  item.append(title, text);
  container.append(item);
}

function renderTrackingBooking(booking) {
  trackingResult.innerHTML = "";

  const card = document.createElement("div");
  card.className = "tracking-card";

  const heading = document.createElement("div");
  heading.className = "tracking-heading";
  const headingLabel = document.createElement("span");
  headingLabel.textContent = "رقم الحجز";
  const headingNumber = document.createElement("strong");
  const bookingNumberIssued = Boolean(booking.receipt_sent || booking.confirmed || booking.attended);
  headingNumber.textContent = bookingNumberIssued
    ? booking.booking_number
    : "لم يتم إصدار رقم الحجز لعدم التحويل";
  if (!bookingNumberIssued) headingNumber.classList.add("not-issued");
  heading.append(headingLabel, headingNumber);

  if (booking.attended) {
    const completedMessage = document.createElement("div");
    completedMessage.className = "tracking-completed-message";
    const completedIcon = document.createElement("span");
    completedIcon.className = "tracking-completed-icon";
    completedIcon.textContent = "✓";
    const completedText = document.createElement("strong");
    completedText.textContent = "تم حجز الموعد وتمت الجلسة بنجاح";
    completedMessage.append(completedIcon, completedText);
    card.append(heading, completedMessage);
    trackingResult.append(card);
    return;
  }

  const progress = getTrackingStatusProgress(booking);
  const currentStatus = document.createElement("div");
  currentStatus.className = "tracking-current-status";
  if (booking.confirmed) currentStatus.classList.add("confirmed");
  const currentStatusLabel = document.createElement("span");
  currentStatusLabel.textContent = "الحالة الحالية";
  const currentStatusText = document.createElement("strong");
  currentStatusText.textContent = progress.labels[progress.currentStage];
  currentStatus.append(currentStatusLabel, currentStatusText);

  const details = document.createElement("div");
  details.className = "tracking-details";
  appendTrackingDetail(details, "نوع الحجز", getTrackingBookingType(booking));

  const startDate = booking.booking_start_date || booking.slot_date;
  const endDate = booking.booking_end_date || startDate;
  const packageDays = getDetailedPackageDays(startDate, endDate);
  if (packageDays.length > 1) {
    const packageBlock = document.createElement("div");
    packageBlock.className = "tracking-package";
    const packageTitle = document.createElement("span");
    packageTitle.textContent = "أيام الباقة";
    const dayList = document.createElement("div");
    dayList.className = "tracking-package-days";
    packageDays.forEach((day) => {
      const dayItem = document.createElement("strong");
      dayItem.textContent = `${day.day} ${day.gregorian} (${day.hijri})`;
      dayList.append(dayItem);
    });
    packageBlock.append(packageTitle, dayList);
    details.append(packageBlock);
  } else {
    appendTrackingDetail(
      details,
      "اليوم والتاريخ",
      startDate
        ? `${booking.slot_day || packageDays[0]?.day || ""} ${formatCombinedDate(startDate)}`.trim()
        : "-"
    );
  }

  if (!isFullDayBookingType(booking.booking_type) && booking.appointment_start_time) {
    const endTime = booking.appointment_end_time
      ? ` إلى ${formatTime(booking.appointment_end_time)}`
      : "";
    appendTrackingDetail(details, "الوقت", `${formatTime(booking.appointment_start_time)}${endTime}`);
  }

  appendTrackingDetail(
    details,
    "المدينة",
    booking.visit_city || booking.region || "مدينة حائل"
  );

  const statusSection = document.createElement("section");
  statusSection.className = "tracking-status-section";
  const statusTitle = document.createElement("h3");
  statusTitle.textContent = "حالة الحجز";
  const statusCard = document.createElement("div");
  statusCard.className = "booking-status-card tracking-status-card";
  progress.labels.forEach((label, index) => {
    const stage = document.createElement("div");
    stage.className = "booking-status-stage";
    if (progress.completed[index]) stage.classList.add("completed");
    if (index === progress.currentStage) stage.classList.add("current");
    if (index > progress.currentStage) stage.classList.add("upcoming");

    const marker = document.createElement("span");
    marker.className = "booking-status-marker";
    marker.textContent = progress.completed[index] ? "✓" : index === progress.currentStage ? "•" : String(index + 1);
    const text = document.createElement("span");
    text.className = "booking-status-label";
    text.textContent = label;
    stage.append(marker, text);
    statusCard.append(stage);
  });
  statusSection.append(statusTitle, statusCard);

  const mapLink = document.createElement("a");
  mapLink.className = "booking-location-link tracking-location-link";
  const isVisitBooking = isExternalBookingType(booking.booking_type) || isHomeBookingType(booking.booking_type);
  const trackingLocationUrl = isVisitBooking ? booking.customer_location_url : MAP_URL;

  card.append(heading, currentStatus, details, statusSection);
  if (trackingLocationUrl) {
    mapLink.href = trackingLocationUrl;
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    mapLink.textContent = isVisitBooking ? "فتح موقع الزيارة" : "فتح موقع مجلس الرقية";
    card.append(mapLink);
  } else if (isVisitBooking) {
    const locationNotice = document.createElement("p");
    locationNotice.className = "tracking-location-notice";
    locationNotice.textContent = "لم يتم تسجيل موقع للزيارة في هذا الحجز.";
    card.append(locationNotice);
  }
  trackingResult.append(card);
}

async function trackBooking(phone, bookingNumber) {
  const rows = await api("rpc/track_appointment_booking_by_phone", {
    method: "POST",
    body: { p_phone: phone, p_booking_number: bookingNumber }
  });
  return rows?.[0] || null;
}

async function refreshAll() {
  await loadPublicConfig();
  await loadData();
  if (isAdmin) {
    await cleanupExpiredPendingBookings();
    await loadData();
    await insertMissingWeeklySlots();
  }
  renderAll();
}

async function deleteVisitTemplate(templateId) {
  await api(`appointment_visit_templates?id=eq.${encodeURIComponent(templateId)}`, {
    method: "DELETE"
  });
  showToast("تم حذف الزيارة من القالب.");
  await refreshAll();
}

async function deleteSlot(slotId) {
  await refreshAll();

  if (bookings.some((booking) => booking.slot_id === slotId)) {
    showToast("لا يمكن حذف موعد تم حجزه بالفعل.");
    return;
  }

  await api("appointment_deleted_slots?on_conflict=slot_id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: [{ slot_id: slotId }]
  });
  await api(`appointment_slots?id=eq.${encodeURIComponent(slotId)}`, { method: "DELETE" });
  showToast("تم حذف الموعد المحدد.");
  await refreshAll();
}

async function regenerateWeeklySlots() {
  const mode = await askRegenerateMode();
  if (!mode) return;

  const count = await insertMissingWeeklySlots({ restoreDeleted: true });
  let enabledCount = 0;

  if (mode === "deleted-and-suspended") {
    await loadData();
    const managedIds = getManagedGeneratedSlotIds();
    const suspendedSlots = getAdminOpenSlots()
      .filter((slot) => managedIds.has(slot.id))
      .filter((slot) => slot.suspended);
    enabledCount = suspendedSlots.length;
    if (enabledCount) {
      await setSlotsSuspension(suspendedSlots.map((slot) => slot.id), false);
    }
  }

  const messageParts = [];
  messageParts.push(count ? `تم توليد ${count} موعد محذوف.` : "لا توجد مواعيد محذوفة لإعادتها.");
  if (mode === "deleted-and-suspended") {
    messageParts.push(enabledCount ? `وتمت إتاحة ${enabledCount} موعد معلق.` : "ولا توجد مواعيد معلقة لإتاحتها.");
  }
  showToast(messageParts.join(" "));
  await refreshAll();
}

async function toggleSlotSuspension(slotId, suspended) {
  await api(`appointment_slots?id=eq.${encodeURIComponent(slotId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: { suspended }
  });
  showToast(suspended ? "تم تعليق الموعد وإخفاؤه عن المستخدم." : "تمت إتاحة الموعد للمستخدم.");
  await refreshAll();
}

async function setSlotsSuspension(slotIds, suspended) {
  for (const slotId of slotIds) {
    await api(`appointment_slots?id=eq.${encodeURIComponent(slotId)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: { suspended }
    });
  }
}

async function toggleDaySuspension(date, suspended) {
  const daySlots = getAdminOpenSlots()
    .filter((slot) => slot.date === date)
    .filter((slot) => slot.suspended !== suspended);

  if (!daySlots.length) {
    showToast(suspended ? "جميع مواعيد هذا اليوم معلقة بالفعل." : "جميع مواعيد هذا اليوم متاحة بالفعل.");
    return;
  }

  await setSlotsSuspension(daySlots.map((slot) => slot.id), suspended);
  showToast(suspended ? "تم تعليق مواعيد اليوم كاملة." : "تمت إتاحة مواعيد اليوم كاملة.");
  await refreshAll();
}

async function toggleCurrentWeekSuspension() {
  const weekSlots = getCurrentWeekOpenSlots();
  const hasSuspendedSlot = weekSlots.some((slot) => slot.suspended);
  const targetSuspended = !hasSuspendedSlot;
  const slotsToUpdate = weekSlots.filter((slot) => slot.suspended !== targetSuspended);

  if (!slotsToUpdate.length) {
    showToast(targetSuspended ? "لا توجد مواعيد قابلة للتعليق في هذا الأسبوع." : "لا توجد مواعيد معلقة لإتاحتها في هذا الأسبوع.");
    return;
  }

  await setSlotsSuspension(slotsToUpdate.map((slot) => slot.id), targetSuspended);
  showToast(targetSuspended ? "تم تعليق المواعيد الثمانية المعروضة." : "تمت إعادة إتاحة المواعيد الثمانية المعروضة.");
  await refreshAll();
}

async function confirmBooking(bookingId) {
  await refreshAll();

  if (!bookings.some((booking) => booking.id === bookingId)) {
    showToast("انتهت مهلة الحجز وعاد الموعد للقائمة.");
    return;
  }

  await api(`appointment_bookings?id=eq.${bookingId}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: { confirmed: true, confirmed_at: new Date().toISOString() }
  });
  showToast("تم تأكيد الموعد.");
  await refreshAll();
}

async function approveExternalBooking(booking) {
  const whatsappWindow = window.open("about:blank", "_blank");
  try {
    const approvedAt = new Date().toISOString();
    await api(`appointment_bookings?id=eq.${booking.id}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: { manager_approved: true, manager_approved_at: approvedAt }
    });
    const url = getExternalApprovalWhatsappUrl({ ...booking, manager_approved: true, manager_approved_at: approvedAt });
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      whatsappWindow.location.href = url;
    } else {
      openExternalMessage(url);
    }
    showToast("تمت الموافقة على طلب الموعد. أرسل للعميل تفاصيل التحويل عبر واتساب.");
    await refreshAll();
  } catch (error) {
    whatsappWindow?.close();
    showToast(`تعذر اعتماد الطلب: ${error.message}`);
  }
}

async function confirmExternalReceipt(booking) {
  const whatsappWindow = window.open("about:blank", "_blank");
  try {
    const confirmedAt = new Date().toISOString();
    await api(`appointment_bookings?id=eq.${booking.id}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: { confirmed: true, confirmed_at: confirmedAt }
    });
    const url = getWhatsappUrl({ ...booking, confirmed: true, confirmed_at: confirmedAt });
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      whatsappWindow.location.href = url;
    } else {
      openExternalMessage(url);
    }
    showToast("تم تأكيد استلام الإيصال والمبلغ وتأكيد الموعد.");
    await refreshAll();
  } catch (error) {
    whatsappWindow?.close();
    showToast(`تعذر تأكيد استلام الإيصال: ${error.message}`);
  }
}

async function markAttended(bookingId) {
  await api(`appointment_bookings?id=eq.${bookingId}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: { attended: true, attended_at: new Date().toISOString() }
  });
  showToast("تم تسجيل الحضور.");
  await refreshAll();
}

function getCancellationWhatsappUrl(booking) {
  const phone = toWhatsappPhone(booking.phone);
  const text = booking.receipt_sent || booking.confirmed
    ? "تم إلغاء الحجز بناءا على طلبك"
    : "تم إلغاء الحجز لعدم التحويل وإرسال الإيصال";
  const message = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
}

function openExternalMessage(url) {
  const openedWindow = window.open("about:blank", "_blank");
  if (openedWindow) {
    openedWindow.location.href = url;
    openedWindow.opener = null;
    return;
  }

  const externalLink = document.createElement("a");
  externalLink.href = url;
  externalLink.target = "_blank";
  externalLink.rel = "noopener noreferrer";
  externalLink.className = "hidden";
  document.body.append(externalLink);
  externalLink.click();
  externalLink.remove();
}

async function cancelBooking(booking) {
  openExternalMessage(getCancellationWhatsappUrl(booking));
  await api(`appointment_bookings?id=eq.${booking.id}`, { method: "DELETE" });
  showToast("تم إلغاء الحجز وإرجاع الموعد لقائمة المتاح.");
  await refreshAll();
}

async function deleteCompletedBooking(bookingId) {
  await api(`appointment_bookings?id=eq.${bookingId}`, { method: "DELETE" });
  showToast("تم حذف الجلسة التي تمت.");
  await refreshAll();
}

adminLoginButton.addEventListener("click", () => showPanel("admin"));
backToBookingButton.addEventListener("click", () => showPanel("booking"));
regenerateSlotsButton.addEventListener("click", regenerateWeeklySlots);
suspendWeekButton.addEventListener("click", toggleCurrentWeekSuspension);
receiptButton.addEventListener("click", () => {
  receiptPanel.classList.remove("hidden");
});

recoveryButton.addEventListener("click", () => {
  recoveryPanel.classList.remove("hidden");
});

trackingButton.addEventListener("click", () => {
  trackingPanel.classList.remove("hidden");
});

closeReceiptButton.addEventListener("click", () => {
  receiptPanel.classList.add("hidden");
});

closeRecoveryButton.addEventListener("click", () => {
  recoveryPanel.classList.add("hidden");
});

closeTrackingButton.addEventListener("click", () => {
  trackingPanel.classList.add("hidden");
});

useCurrentLocationButton.addEventListener("click", () => {
  requestCurrentLocation().catch(() => {});
});

chooseLocationButton.addEventListener("click", () => {
  openLocationPicker();
});

confirmMapLocationButton.addEventListener("click", async () => {
  if (!pendingMapLocation) return;
  const accepted = await acceptCustomerLocation(pendingMapLocation, "map");
  if (!accepted) return;
  mapPickerPanel.classList.add("hidden");
  const resolve = mapPickerResolver;
  mapPickerResolver = null;
  resolve?.(pendingMapLocation);
});

cancelMapLocationButton.addEventListener("click", () => {
  closeLocationPicker(null);
});

mapPickerPanel.addEventListener("click", (event) => {
  if (event.target === mapPickerPanel) closeLocationPicker(null);
});

receiptPanel.addEventListener("click", (event) => {
  if (event.target === receiptPanel) {
    receiptPanel.classList.add("hidden");
  }
});

recoveryPanel.addEventListener("click", (event) => {
  if (event.target === recoveryPanel) {
    recoveryPanel.classList.add("hidden");
  }
});

function updateSpecialAppointmentControls() {
  const isExternal = locationTypeInput.value === "external";
  const isHomeVisit = !isExternal && homeSessionInput.checked;
  const canBookSpecial = isExternal;
  specialAppointmentField.hidden = !canBookSpecial;
  specialAppointmentField.classList.toggle("hidden", !canBookSpecial);
  if (!canBookSpecial) specialAppointmentInput.checked = false;

  appointmentLocationHelp.classList.toggle("hidden", isHomeVisit);
  homeSessionHelp.classList.toggle("hidden", !isHomeVisit);
  if (!isHomeVisit) {
    appointmentLocationHelp.querySelector("p").textContent = isExternal
      ? "يقصد بخارج مدينة حائل: حضور الراقي لمنزل طالب الموعد."
      : "يقصد بالمواعيد داخل مدينة حائل: حضور طالب الموعد إلى مجلس الرقية عند الراقي.";
  }

  const note = document.querySelector(".slots-note");
  if (specialAppointmentInput.checked && isExternal) {
    const selectedVisitCity = getSelectedVisitCity();
    note.textContent = Number(selectedVisitCity?.distance_km) <= 100
      ? "اختر بداية الموعد الخاص المناسبة. يتم حجز اليوم المختار واليومين التاليين بالكامل."
      : "تبدأ باقات الموعد الخاص بعد 24 ساعة على الأقل. يتم حجز اليوم المختار واليومين التاليين بالكامل.";
  } else if (isExternal) {
    note.textContent = "اختر باقة الخميس والجمعة والسبت. يتم حجز الأيام الثلاثة بالكامل.";
  } else if (homeSessionInput.checked) {
    note.textContent = "تظهر الزيارات المنزلية المتاحة أيام الخميس والجمعة والسبت.";
  } else {
    note.textContent = "يتم إتاحة المواعيد العامة للأيام الأربعة القادمة فقط.";
  }
}

function updateCustomerLocationControls({ requestLocation = false } = {}) {
  const isExternal = locationTypeInput.value === "external";
  const isHomeVisit = !isExternal && homeSessionInput.checked;
  const needsCustomerLocation = isExternal || isHomeVisit;
  customerLocationField.classList.toggle("hidden", !needsCustomerLocation);
  customerLocationDescription.textContent = isHomeVisit
    ? "حدد موقع المنزل ليظهر للمدير عند مراجعة الزيارة المنزلية."
    : "سيتم إرسال موقعك الحالي ضمن طلب الزيارة. لتعيين موقع مختلف اضغط زر اختيار موقع آخر.";

  if (needsCustomerLocation && requestLocation && !selectedCustomerLocation) {
    requestCurrentLocation().catch(() => {});
  }
  if (!needsCustomerLocation) {
    selectedCustomerLocation = null;
    customerLatInput.value = "";
    customerLngInput.value = "";
    locationStatus.textContent = "";
  }
}

locationTypeInput.addEventListener("change", () => {
  const isExternal = locationTypeInput.value === "external";
  regionField.classList.toggle("hidden", !isExternal);
  visitCityField.classList.toggle("hidden", !isExternal);
  regionInput.required = isExternal;
  visitCityInput.required = isExternal;
  homeSessionField.classList.toggle("hidden", isExternal);
  if (isExternal) {
    homeSessionInput.checked = false;
    renderVisitCityOptions();
    if (!visitCities.length) {
      showMessage(bookingMessage, "الحجز خارج مدينة حائل غير متاح مؤقتًا حتى يكتمل تحديث قاعدة البيانات.", "error");
    }
  } else {
    regionInput.value = "";
    visitCityInput.innerHTML = '<option value="">اختر المدينة</option>';
    showMessage(bookingMessage, "", "");
  }
  specialAppointmentInput.checked = false;
  updateSpecialAppointmentControls();
  updateCustomerLocationControls({ requestLocation: isExternal });
  selectedSlotId = "";
  selectedBookingDate = "";
  slotSelect.value = "";
  renderBookingOptions();
});

genderInput.addEventListener("change", () => {
  femaleBookingNotice.classList.toggle("hidden", genderInput.value !== "female");
});

homeSessionInput.addEventListener("change", () => {
  selectedSlotId = "";
  selectedBookingDate = "";
  slotSelect.value = "";
  specialAppointmentInput.checked = false;
  updateSpecialAppointmentControls();
  updateCustomerLocationControls({ requestLocation: homeSessionInput.checked });
  renderBookingOptions();
});

regionInput.addEventListener("change", () => {
  renderVisitCityOptions();
  selectedSlotId = "";
  selectedBookingDate = "";
  slotSelect.value = "";
  updateSpecialAppointmentControls();
  renderBookingOptions();
});

visitCityInput.addEventListener("change", () => {
  selectedSlotId = "";
  selectedBookingDate = "";
  slotSelect.value = "";
  updateSpecialAppointmentControls();
  renderBookingOptions();
});

specialAppointmentInput.addEventListener("change", () => {
  selectedSlotId = "";
  selectedBookingDate = "";
  slotSelect.value = "";
  updateSpecialAppointmentControls();
  renderBookingOptions();
});

adminTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAdminView(tab.dataset.adminView));
});

bookingFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    adminBookingFilter = button.dataset.bookingFilter;
    bookingFilterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
    renderBookingsTable();
  });
});

availableScheduleTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedSchedule = tab.dataset.availableSchedule;
    availableScheduleTabs.forEach((item) => {
      item.classList.toggle("active", item === tab);
    });
    availableScheduleViews.forEach((view) => {
      view.classList.toggle(
        "active",
        view.dataset.availableScheduleView === selectedSchedule
      );
    });
  });
});

visitAdminTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedView = tab.dataset.visitAdmin;
    visitAdminTabs.forEach((item) => item.classList.toggle("active", item === tab));
    visitAdminViews.forEach((view) => {
      view.classList.toggle("active", view.dataset.visitAdminView === selectedView);
    });
  });
});

pricingSettingsForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(pricingSettingsForm, true);
  try {
    await api("appointment_pricing?id=eq.true", {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: {
        general_price: Number(generalPriceInput.value),
        home_visit_price: Number(homeVisitPriceInput.value),
        external_near_price: Number(externalNearPriceInput.value),
        external_far_price: Number(externalFarPriceInput.value),
        updated_at: new Date().toISOString()
      }
    });
    showToast("تم حفظ الأسعار وتطبيقها على الحجوزات الجديدة.");
    await refreshAll();
  } catch (error) {
    showToast(`تعذر حفظ الأسعار: ${error.message}`);
  } finally {
    setBusy(pricingSettingsForm, false);
  }
});

visitTemplateForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (visitTemplateEnd.value <= visitTemplateStart.value) {
    showToast("وقت نهاية الزيارة يجب أن يكون بعد وقت البداية.");
    return;
  }
  setBusy(visitTemplateForm, true);
  try {
    const body = {
      title: visitTemplateTitle.value.trim(),
      start_time: visitTemplateStart.value,
      end_time: visitTemplateEnd.value,
      sort_order: visitTemplateId.value
        ? visitTemplates.find((item) => item.id === visitTemplateId.value)?.sort_order || 0
        : visitTemplates.length + 1,
      updated_at: new Date().toISOString()
    };
    if (visitTemplateId.value) {
      await api(`appointment_visit_templates?id=eq.${encodeURIComponent(visitTemplateId.value)}`, {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body
      });
    } else {
      await api("appointment_visit_templates", {
        method: "POST",
        headers: { Prefer: "return=minimal" },
        body
      });
    }
    visitTemplateForm.reset();
    visitTemplateId.value = "";
    cancelTemplateEditButton.classList.add("hidden");
    showToast("تم حفظ قالب الزيارة.");
    await refreshAll();
  } catch (error) {
    showToast(`تعذر حفظ قالب الزيارة: ${error.message}`);
  } finally {
    setBusy(visitTemplateForm, false);
  }
});

cancelTemplateEditButton.addEventListener("click", () => {
  visitTemplateForm.reset();
  visitTemplateId.value = "";
  cancelTemplateEditButton.classList.add("hidden");
});

receiptLookupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(receiptLookupForm, true);
  showMessage(receiptMessage, "", "");

  try {
    const phone = document.querySelector("#receiptPhoneInput").value.trim();
    const bookingNumber = document.querySelector("#receiptBookingNumberInput").value.trim();
    if (!/^05\d{8}$/.test(phone)) {
      showMessage(receiptMessage, "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.", "error");
      return;
    }
    if (!bookingNumber) {
      showMessage(receiptMessage, "يرجى إدخال رقم الحجز.", "error");
      return;
    }
    const booking = await lookupReceiptBooking(phone, bookingNumber);

    if (!booking) {
      receiptResult.innerHTML = "";
      showMessage(receiptMessage, "لم يتم العثور على حجز مطابق.", "error");
      return;
    }

    renderReceiptBooking(booking);
  } catch (error) {
    showMessage(receiptMessage, `تعذر استرجاع الحجز: ${error.message}`, "error");
  } finally {
    setBusy(receiptLookupForm, false);
  }
});

recoveryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(recoveryForm, true);
  showMessage(recoveryMessage, "", "");

  try {
    const phone = document.querySelector("#recoveryPhoneInput").value.trim();
    const name = document.querySelector("#recoveryNameInput").value.trim();
    if (!/^05\d{8}$/.test(phone)) {
      showMessage(recoveryMessage, "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.", "error");
      return;
    }
    if (!name) {
      showMessage(recoveryMessage, "يرجى إدخال الاسم المسجل.", "error");
      return;
    }

    const booking = await recoverBookingNumber(phone, name);
    if (!booking) {
      showMessage(recoveryMessage, "لم يتم العثور على حجز مسجل بهذا الرقم.", "error");
      return;
    }

    openExternalMessage(getRecoveryWhatsappUrl(booking.phone, booking.booking_number));
    showMessage(recoveryMessage, "تم فتح واتساب لإرسال رقم الحجز.", "success");
  } catch (error) {
    showMessage(recoveryMessage, `تعذر استرجاع رقم الحجز: ${error.message}`, "error");
  } finally {
    setBusy(recoveryForm, false);
  }
});

trackingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(trackingForm, true);
  trackingResult.innerHTML = "";
  showMessage(trackingMessage, "", "");

  try {
    const phone = document.querySelector("#trackingPhoneInput").value.trim();
    const bookingNumber = document.querySelector("#trackingBookingNumberInput").value.trim();
    if (!/^05\d{8}$/.test(phone)) {
      showMessage(trackingMessage, "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.", "error");
      return;
    }
    if (!bookingNumber) {
      showMessage(trackingMessage, "يرجى إدخال رقم الحجز.", "error");
      return;
    }

    const booking = await trackBooking(phone, bookingNumber);
    if (!booking) {
      showMessage(trackingMessage, "لم يتم العثور على حجز مسجل بهذا الجوال.", "error");
      return;
    }

    renderTrackingBooking(booking);
  } catch (error) {
    const isMissingTrackingFunction = /PGRST202|track_appointment_booking/i.test(error.message);
    showMessage(
      trackingMessage,
      isMissingTrackingFunction
        ? "خدمة متابعة الحجز تحتاج إلى تفعيل ملف Supabase SQL المحدث."
        : `تعذر متابعة الحجز: ${error.message}`,
      "error"
    );
  } finally {
    setBusy(trackingForm, false);
  }
});

adminLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(adminLoginForm, true);
  const email = document.querySelector("#adminEmail").value.trim();
  const password = document.querySelector("#adminPassword").value;

  try {
    const session = await authApi("token?grant_type=password", { email, password });
    saveAuthSession(session);

    if (!await verifyAdminSession()) {
      throw new Error("هذا الحساب لا يملك صلاحية إدارة نظام المواعيد.");
    }

    adminLoginForm.reset();
    showMessage(loginMessage, "", "");
    showToast("تم تسجيل الدخول بنجاح.");
    localStorage.setItem(ADMIN_LAST_ACTIVITY_KEY, String(Date.now()));
    startAdminIdleTimer();
    await refreshAll();
  } catch (error) {
    saveAuthSession(null);
    isAdmin = false;
    const loginError = getArabicAuthError(error, "login");
    showMessage(loginMessage, loginError, loginError ? "error" : "");
    renderAll();
  } finally {
    setBusy(adminLoginForm, false);
  }
});

forgotPasswordButton.addEventListener("click", async () => {
  const email = document.querySelector("#adminEmail").value.trim();
  if (!email || !document.querySelector("#adminEmail").checkValidity()) {
    showMessage(loginMessage, "اكتب البريد الإلكتروني الصحيح أولًا، ثم اضغط استعادة كلمة المرور.", "error");
    document.querySelector("#adminEmail").focus();
    return;
  }

  forgotPasswordButton.disabled = true;
  try {
    await sendPasswordRecoveryEmail(email);
    showMessage(
      loginMessage,
      "تم إرسال رابط استعادة كلمة المرور إلى البريد إذا كان مسجلًا. افحص صندوق الوارد والرسائل غير المرغوب فيها.",
      "success"
    );
  } catch (error) {
    showMessage(loginMessage, getArabicAuthError(error, "recovery"), "error");
  } finally {
    forgotPasswordButton.disabled = false;
  }
});

logoutButton.addEventListener("click", () => {
  performLogout().catch(console.error);
});

accountSecurityButton.addEventListener("click", () => {
  accountSecurityForm.reset();
  newAdminEmail.value = authSession?.user?.email || "";
  showMessage(accountSecurityMessage, "", "");
  accountSecurityPanel.classList.remove("hidden");
  currentAdminPassword.focus();
});

closeAccountSecurityButton.addEventListener("click", () => {
  accountSecurityPanel.classList.add("hidden");
  accountSecurityForm.reset();
  showMessage(accountSecurityMessage, "", "");
});

accountSecurityPanel.addEventListener("click", (event) => {
  if (event.target === accountSecurityPanel) {
    closeAccountSecurityButton.click();
  }
});

accountSecurityForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const currentEmail = authSession?.user?.email;
  const requestedEmail = newAdminEmail.value.trim();
  const requestedPassword = newAdminPassword.value;
  const passwordConfirmation = confirmAdminPassword.value;

  if (!currentEmail) {
    showMessage(accountSecurityMessage, "تعذر قراءة بريد الحساب الحالي. سجّل الخروج ثم ادخل مرة أخرى.", "error");
    return;
  }

  const emailChanged = requestedEmail && requestedEmail.toLowerCase() !== currentEmail.toLowerCase();
  const passwordChanged = Boolean(requestedPassword);
  if (!emailChanged && !passwordChanged) {
    showMessage(accountSecurityMessage, "أدخل بريدًا جديدًا أو كلمة مرور جديدة.", "error");
    return;
  }
  if (passwordChanged && requestedPassword.length < 8) {
    showMessage(accountSecurityMessage, "كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف.", "error");
    return;
  }
  if (passwordChanged && requestedPassword !== passwordConfirmation) {
    showMessage(accountSecurityMessage, "تأكيد كلمة المرور الجديدة غير مطابق.", "error");
    return;
  }

  setBusy(accountSecurityForm, true);
  try {
    const verifiedSession = await authApi("token?grant_type=password", {
      email: currentEmail,
      password: currentAdminPassword.value
    });
    saveAuthSession(verifiedSession);

    const updates = {};
    if (emailChanged) updates.email = requestedEmail;
    if (passwordChanged) updates.password = requestedPassword;
    const updatedUser = await updateAuthUser(updates);
    const updatedEmail = String(updatedUser?.email || "").toLowerCase();
    const emailPending = emailChanged && updatedEmail !== requestedEmail.toLowerCase();

    if (emailPending && !passwordChanged) {
      accountSecurityForm.reset();
      newAdminEmail.value = requestedEmail;
      showMessage(
        accountSecurityMessage,
        "تم إرسال رابط تأكيد إلى البريد الجديد. لن يتغير بريد الدخول في Supabase حتى تفتح رابط التأكيد، وبعدها سجّل الدخول بالبريد الجديد.",
        "success"
      );
      return;
    }

    await performLogout({ accountChanged: true });
  } catch (error) {
    showMessage(accountSecurityMessage, getArabicAuthError(error, "current-password"), "error");
  } finally {
    setBusy(accountSecurityForm, false);
  }
});

passwordRecoveryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = recoveryAdminPassword.value;
  const confirmation = confirmRecoveryAdminPassword.value;

  if (password.length < 8) {
    showMessage(passwordRecoveryMessage, "كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف.", "error");
    return;
  }
  if (password !== confirmation) {
    showMessage(passwordRecoveryMessage, "تأكيد كلمة المرور الجديدة غير مطابق.", "error");
    return;
  }

  setBusy(passwordRecoveryForm, true);
  try {
    await updateAuthUser({ password });
    passwordRecoveryPanel.classList.add("hidden");
    passwordRecoveryForm.reset();
    clearAuthCallbackFromUrl();
    await performLogout({ accountChanged: true, passwordRecovered: true });
  } catch (error) {
    showMessage(passwordRecoveryMessage, getArabicAuthError(error, "recovery"), "error");
  } finally {
    setBusy(passwordRecoveryForm, false);
  }
});

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selectedSlotForSubmit = slotSelect.value;

  if (!selectedSlotForSubmit) {
    showMessage(bookingMessage, "يرجى اختيار موعد من القائمة.", "error");
    return;
  }

  setBusy(bookingForm, true);

  try {
    await loadData();
    const slot = slots.find((item) => item.id === selectedSlotForSubmit);

    if (!slot) {
      showMessage(bookingMessage, "هذا الموعد لم يعد متاحًا. اختر موعدًا آخر.", "error");
      return;
    }

    const phone = document.querySelector("#phoneInput").value.trim();

    if (!/^05\d{8}$/.test(phone)) {
      showMessage(bookingMessage, "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.", "error");
      return;
    }

    const name = document.querySelector("#nameInput").value.trim();
    const gender = genderInput.value;
    if (!["male", "female"].includes(gender)) {
      showMessage(bookingMessage, "يرجى اختيار النوع: ذكر أو أنثى.", "error");
      return;
    }
    const locationType = locationTypeInput.value;
    const needsCustomerLocation = locationType === "external" || homeSessionInput.checked;
    let selectedVisitCity = null;
    let alternatePhone = "";

    if (locationType === "external") {
      selectedVisitCity = getSelectedVisitCity();
      if (!selectedVisitCity) {
        showMessage(bookingMessage, "يرجى اختيار مدينة صحيحة.", "error");
        return;
      }

    }

    if (needsCustomerLocation && !selectedCustomerLocation) {
      try {
        await requestCurrentLocation();
      } catch (error) {
        if (error?.code === "HOME_VISIT_OUT_OF_RANGE") return;
        showMessage(bookingMessage, "يجب تحديد موقع الزيارة الحالي أو اختياره من الخريطة.", "error");
        return;
      }
    }

    if (isHomeVisitInsideHail() && !isLocationInsideHailCity(selectedCustomerLocation)) {
      await showHomeVisitLocationWarning();
      return;
    }

    if (locationType === "external") {
      while (true) {
        const agreement = await askVisitPriceAgreement(selectedVisitCity);
        if (agreement.action === "change-location") {
          await openLocationPicker();
          continue;
        }
        if (agreement.action !== "agree") {
          showMessage(bookingMessage, "لم يتم إنشاء الحجز لعدم الموافقة على قيمة الزيارة.", "error");
          return;
        }
        alternatePhone = agreement.alternatePhone;
        break;
      }
    }

    const created = await api("rpc/create_appointment_booking", {
      method: "POST",
      body: {
        p_slot_id: selectedSlotForSubmit,
        p_name: name,
        p_phone: phone,
        p_gender: gender,
        p_location_type: locationType,
        p_region: locationType === "external" ? regionInput.value : null,
        p_city: locationType === "external" ? visitCityInput.value : null,
        p_home_session: homeSessionInput.checked,
        p_price_accepted: locationType === "external",
        p_customer_lat: needsCustomerLocation ? selectedCustomerLocation.lat : null,
        p_customer_lng: needsCustomerLocation ? selectedCustomerLocation.lng : null,
        p_alternate_phone: locationType === "external" ? alternatePhone : null
      }
    });

    bookingForm.reset();
    femaleBookingNotice.classList.add("hidden");
    locationTypeInput.value = "internal";
    regionField.classList.add("hidden");
    regionInput.required = false;
    visitCityField.classList.add("hidden");
    visitCityInput.required = false;
    visitCityInput.innerHTML = '<option value="">اختر المدينة</option>';
    homeSessionField.classList.remove("hidden");
    specialAppointmentField.hidden = true;
    specialAppointmentField.classList.add("hidden");
    specialAppointmentInput.checked = false;
    customerLocationField.classList.add("hidden");
    selectedCustomerLocation = null;
    customerLatInput.value = "";
    customerLngInput.value = "";
    locationStatus.textContent = "";
    document.querySelector(".slots-note").textContent = "يتم إتاحة المواعيد العامة للأيام الأربعة القادمة فقط.";
    updateSpecialAppointmentControls();
    updateCustomerLocationControls();
    selectedSlotId = "";
    selectedBookingDate = "";
    slotSelect.value = "";
    const bookingResult = { ...(created?.[0] || {}), name, gender };
    renderBookingNumber(null);
    showBookingConfirmation(bookingResult);
    await refreshAll();
  } catch (error) {
    const errorMessage = error.message.includes("PHONE_ALREADY_BOOKED")
      ? "لا يمكن حجز أكثر من موعد في نفس اليوم لنفس رقم الجوال."
      : error.message.includes("SLOT_NOT_AVAILABLE")
        ? "هذا الموعد لم يعد متاحًا. اختر موعدًا آخر."
        : error.message.includes("EXTERNAL_DAY_BOOKED")
          ? "تم حجز هذه الأيام لزيارة أخرى. اختر باقة مختلفة."
          : error.message.includes("PRICE_NOT_ACCEPTED")
            ? "يجب الموافقة على قيمة الزيارة قبل تأكيد الحجز."
            : error.message.includes("INVALID_VISIT_CITY")
              ? "المدينة المختارة غير متاحة حاليًا."
              : error.message.includes("LOCATION_REQUIRED")
                ? "يجب تحديد موقع الزيارة قبل تأكيد الحجز."
                : error.message.includes("INVALID_ALTERNATE_PHONE")
                  ? "رقم التواصل الإضافي غير صحيح."
                  : error.message.includes("INVALID_GENDER")
                    ? "يرجى اختيار النوع: ذكر أو أنثى."
        : `تعذر حفظ الحجز: ${error.message}`;
    showMessage(bookingMessage, errorMessage, "error");
  } finally {
    setBusy(bookingForm, false);
  }
});

async function boot() {
  try {
    clearBookingConfirmation();
    showMessage(bookingMessage, "جاري تحميل المواعيد...", "success");
    const recoverySession = getRecoverySessionFromUrl();
    const authCallbackError = getAuthCallbackErrorFromUrl();
    if (recoverySession) {
      saveAuthSession(recoverySession);
      showPanel("admin");
      passwordRecoveryPanel.classList.remove("hidden");
      setTimeout(() => recoveryAdminPassword.focus(), 0);
    } else {
      restoreAuthSession();
      if (authCallbackError) {
        showPanel("admin");
        showMessage(loginMessage, authCallbackError, "error");
        clearAuthCallbackFromUrl();
      }
    }
    await loadPrayerTimes();
    await verifyAdminSession();
    if (isAdmin) {
      const idleDuration = getAdminIdleDuration();
      if (idleDuration >= ADMIN_IDLE_TIMEOUT_MS) {
        await performLogout({ automatic: true });
      } else {
        if (!localStorage.getItem(ADMIN_LAST_ACTIVITY_KEY)) {
          localStorage.setItem(ADMIN_LAST_ACTIVITY_KEY, String(Date.now()));
        }
        startAdminIdleTimer();
      }
    }
    await loadVisitCities();
    await refreshAll();
    showMessage(bookingMessage, "", "");
  } catch (error) {
    showMessage(bookingMessage, "لم يتم الاتصال بقاعدة البيانات. شغّل ملف إعداد Supabase المحدث أولًا.", "error");
    console.error(error);
  }
}

["pointerdown", "keydown", "touchstart", "scroll"].forEach((eventName) => {
  document.addEventListener(eventName, handleAdminActivity, { passive: true });
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") handleAdminActivity();
});

window.addEventListener("focus", handleAdminActivity);

setInterval(() => {
  if (bookingPanel.classList.contains("active")) {
    renderBookingOptions();
  }
}, 15000);

document.querySelectorAll("[data-password-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.passwordToggle);
    if (!input) return;

    const shouldShow = input.type === "password";
    input.type = shouldShow ? "text" : "password";
    button.setAttribute("aria-pressed", String(shouldShow));
    button.setAttribute("aria-label", shouldShow ? "إخفاء كلمة المرور" : "إظهار كلمة المرور");
    input.focus();
  });
});

boot();
setInterval(() => {
  refreshAll().catch((error) => {
    console.error("تعذر تحديث بيانات المواعيد.", error);
  });
}, 60 * 1000);
