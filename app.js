const SUPABASE_URL = "https://hdduxbywwxxybsffwxzd.supabase.co";
const SUPABASE_KEY = "sb_publishable_JJDMqVtKwiBpa2vKMGhdcg_ks7U5Rs-";
const SCHEDULE_VERSION = "weekly-v6";
const INTERNAL_START_HOUR = 17;
const INTERNAL_END_HOUR = 21;
const EXTERNAL_START_HOUR = 8;
const EXTERNAL_END_HOUR = 21;
const MAP_URL = "https://maps.app.goo.gl/gRuTSJt7Gk24d3RJ7";
const RECEIPT_WHATSAPP_PHONE = "966555707854";
const INTERNAL_WORK_DAYS = [
  { offset: 0, name: "الأحد" },
  { offset: 1, name: "الإثنين" },
  { offset: 2, name: "الثلاثاء" },
  { offset: 3, name: "الأربعاء" }
];
const EXTERNAL_WORK_DAYS = [
  { offset: 4, name: "الخميس" },
  { offset: 5, name: "الجمعة" },
  { offset: 6, name: "السبت" }
];
const MESSAGES = {
  paymentWarning:
    "تنبيه: في حال لم يتم التحويل وإرسال الإيصال خلال 15 دقيقة سيتم إلغاء الحجز تلقائيا",
  whatsappConfirmation(booking) {
    if (booking.booking_type === "external") {
      return [
        booking.name ? `مرحبًا ${booking.name}` : "مرحبًا",
        "تم تأكيد موعد الزيارة خارج منطقة حائل.",
        `المنطقة: ${booking.region || booking.city}`,
        `اليوم: ${booking.slot.day}`,
        `التاريخ: ${booking.slot.date}`,
        `الساعة: ${formatTime(booking.slot.time)}`,
        booking.home_session ? "نوع الجلسة: جلسة منزلية" : null
      ].filter(Boolean).join("\n");
    }

    return [
      booking.name ? `مرحبًا ${booking.name}` : "مرحبًا",
      "تم تأكيد موعدك بنجاح.",
      `اليوم: ${booking.slot.day}`,
      `التاريخ: ${booking.slot.date}`,
      `الساعة: ${formatTime(booking.slot.time)}`,
      `الموقع: ${MAP_URL}`,
      "تنبيه: لابد من الحضور قبل الموعد بخمس دقائق وفي حال التأخر بعد الموعد بخمس دقائق يتم إلغاء الموعد دون استرجاع المبلغ شاكرين لكم تعاونكم."
    ].join("\n");
  }
};

let slots = [];
let bookings = [];
let deletedSlots = [];
let selectedSlotId = "";
let authSession = null;
let isAdmin = false;
let prayerTimesReady = false;
const prayerTimesByDate = new Map();

const bookingPanel = document.querySelector("#bookingPanel");
const adminPanel = document.querySelector("#adminPanel");
const bookingForm = document.querySelector("#bookingForm");
const adminLoginForm = document.querySelector("#adminLoginForm");
const slotSelect = document.querySelector("#slotSelect");
const locationTypeInput = document.querySelector("#locationTypeInput");
const regionField = document.querySelector("#regionField");
const regionInput = document.querySelector("#regionInput");
const homeSessionField = document.querySelector("#homeSessionField");
const homeSessionInput = document.querySelector("#homeSessionInput");
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
const adminLoginView = document.querySelector("#adminLoginView");
const adminDashboard = document.querySelector("#adminDashboard");
const adminLoginButton = document.querySelector("#adminLoginButton");
const backToBookingButton = document.querySelector("#backToBookingButton");
const logoutButton = document.querySelector("#logoutButton");
const regenerateSlotsButton = document.querySelector("#regenerateSlotsButton");
const suspendWeekButton = document.querySelector("#suspendWeekButton");
const availableSlots = document.querySelector("#availableSlots");
const reservedSlots = document.querySelector("#reservedSlots");
const availableCount = document.querySelector("#availableCount");
const reservedCount = document.querySelector("#reservedCount");
const adminTabs = document.querySelectorAll(".admin-tab");
const adminAvailableView = document.querySelector("#adminAvailableView");
const adminBookingsView = document.querySelector("#adminBookingsView");
const toast = document.querySelector("#toast");
let toastTimer = null;

const AUTH_STORAGE_KEY = "appointmentAdminSession";

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

function saveAuthSession(session) {
  authSession = session;
  if (session) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(session));
  } else {
    localStorage.removeItem(AUTH_STORAGE_KEY);
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
  return new Date(`${slot.date}T${slot.time}:00`);
}

function getSlotEndDateTime(slot) {
  return new Date(getSlotDateTime(slot).getTime() + 30 * 60 * 1000);
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
      const url = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=Hail&country=Saudi%20Arabia&method=4`;
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
  if (!breaks.length) return;

  const container = document.createElement("div");
  container.className = "prayer-breaks";
  breaks.forEach((prayer) => {
    const note = document.createElement("p");
    note.textContent = `(${prayer.text})`;
    container.append(note);
  });
  parent.append(container);
}

function buildWeeklySlots(weekStart) {
  const generated = [];

  const addSlots = (days, startHour, endHour, slotType) => days.forEach((day) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + day.offset);
    const dateKey = toDateKey(date);

    for (let hour = startHour; hour < endHour; hour += 1) {
      ["00", "30"].forEach((minute) => {
        const time = `${pad(hour)}:${minute}`;
        if (slotType === "internal" && isPrayerBlocked(dateKey, time)) return;
        generated.push({
          id: `${SCHEDULE_VERSION}:${slotType}:${dateKey}T${time}`,
          day: day.name,
          date: dateKey,
          time,
          source: "auto",
          suspended: false,
          slot_type: slotType,
          schedule_version: SCHEDULE_VERSION
        });
      });
    }
  });

  if (prayerTimesReady) {
    addSlots(INTERNAL_WORK_DAYS, INTERNAL_START_HOUR, INTERNAL_END_HOUR, "internal");
  }
  addSlots(EXTERNAL_WORK_DAYS, EXTERNAL_START_HOUR, EXTERNAL_END_HOUR, "external");

  return generated;
}

function getManagedWeekStarts() {
  const currentWeekStart = getWeekStart();
  return Array.from({ length: 8 }, (_, weekOffset) => {
    const weekStart = new Date(currentWeekStart);
    weekStart.setDate(currentWeekStart.getDate() + weekOffset * 7);
    return weekStart;
  });
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ar-SA-u-ca-gregory", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date(`${value}T00:00:00`));
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

function getReceiptWhatsappUrl(booking) {
  const message = encodeURIComponent([
    `تم إرفاق إيصال للموعد رقم ${booking.booking_number}`,
    booking.name ? `باسم ${booking.name}` : null,
    `اليوم: ${booking.slot.day}`,
    `التاريخ: ${booking.slot.date}`,
    `الساعة: ${formatTime(booking.slot.time)}`
  ].filter(Boolean).join("\n"));
  return `https://wa.me/${RECEIPT_WHATSAPP_PHONE}?text=${message}`;
}

function getExternalBookingWhatsappUrl(region, bookingNumber) {
  const message = encodeURIComponent([
    `رقم الحجز: ${bookingNumber}`,
    `تم اختيار موعد خارج منطقة حائل في ${region}`,
    "سيتم التواصل معكم لتحديد اتفاق الزيارة."
  ].join("\n"));
  return `https://wa.me/${RECEIPT_WHATSAPP_PHONE}?text=${message}`;
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
    .filter((slot) => restoreDeleted || !deletedIds.has(slot.id));

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

function getAvailableSlots() {
  const now = new Date();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const lastAvailableDate = new Date(today);
  lastAvailableDate.setDate(today.getDate() + 4);
  const selectedType = locationTypeInput.value;
  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  return slots
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => !slot.suspended)
    .filter((slot) => slot.slot_type === selectedType)
    .filter((slot) => {
      const date = new Date(`${slot.date}T00:00:00`);
      return date >= today && date <= lastAvailableDate;
    })
    .filter((slot) => slot.slot_type !== "internal" || !isPrayerBlocked(slot.date, slot.time))
    .filter((slot) => getSlotEndDateTime(slot) > now)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
}

function getAdminOpenSlots() {
  const now = new Date();
  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  const externalBookedDates = new Set(
    getReservedSlots()
      .filter((booking) => booking.booking_type === "external")
      .map((booking) => booking.slot.date)
  );
  return slots
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => slot.slot_type !== "external" || !externalBookedDates.has(slot.date))
    .filter((slot) => getSlotEndDateTime(slot) > now)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
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

function showBookingConfirmation(result) {
  bookingMessage.innerHTML = "";
  bookingMessage.className = "message success payment-message";

  if (result.booking_type === "external") {
    const wrapper = document.createElement("div");
    wrapper.className = "external-message";
    const text = document.createElement("p");
    text.textContent = "تم تسجيل طلب الموعد خارج منطقة حائل. اضغط الزر لإرسال تفاصيل الطلب عبر واتساب.";
    const link = document.createElement("a");
    link.className = "whatsapp-button external-whatsapp";
    link.textContent = "إرسال طلب الموعد عبر واتساب";
    link.href = getExternalBookingWhatsappUrl(result.region, result.booking_number);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    wrapper.append(text, link);
    bookingMessage.append(wrapper);
    return;
  }

  const text = document.createElement("div");
  text.className = "payment-text";
  const amount = result.home_session ? 300 : 100;
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
  whatsapp.textContent = "وبعد التحويل يتم الضغط على زر إرفاق إيصال التحويل أسفل زر تأكيد الحجز";

  const saveNote = document.createElement("p");
  saveNote.className = "payment-save-note";
  saveNote.textContent = "تنبيه: يرجى التقاط الشاشة لحفظ رقم الحجز.";

  const warning = document.createElement("p");
  warning.className = "payment-warning";
  warning.textContent = MESSAGES.paymentWarning;

  bookingMessage.append(text, qr, whatsapp, saveNote, warning);
}

function setBusy(form, isBusy) {
  [...form.querySelectorAll("button, input, select")].forEach((element) => {
    element.disabled = isBusy;
  });
}

function showPanel(name) {
  const isAdmin = name === "admin";
  bookingPanel.classList.toggle("active", !isAdmin);
  adminPanel.classList.toggle("active", isAdmin);
  receiptButton.classList.toggle("hidden", isAdmin);
  recoveryButton.classList.toggle("hidden", isAdmin);
  if (isAdmin) {
    receiptPanel.classList.add("hidden");
    recoveryPanel.classList.add("hidden");
  }
}

function showAdminView(name) {
  const isBookings = name === "bookings";
  adminAvailableView.classList.toggle("active", !isBookings);
  adminBookingsView.classList.toggle("active", isBookings);
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

  Object.values(groupSlotsByDate(available)).forEach((group) => {
    const section = document.createElement("section");
    section.className = "day-group";

    const title = document.createElement("div");
    title.className = "day-group-title";
    title.innerHTML = `<strong>${group.day}</strong><span>${formatDate(group.date)}</span>`;

    const times = document.createElement("div");
    times.className = "time-grid";

    group.slots.forEach((slot) => {
      const item = document.createElement("div");
      item.className = `time-item bookable-time ${selectedSlotId === slot.id ? "selected" : ""}`;
      item.setAttribute("role", "button");
      item.setAttribute("tabindex", "0");
      item.setAttribute("aria-label", `اختيار موعد ${slotLabel(slot)}`);
      const time = document.createElement("span");
      time.textContent = formatTime(slot.time);
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
      item.append(time);
      times.append(item);
    });

    section.append(title);
    if (locationTypeInput.value === "internal") {
      appendPrayerBreaks(section, group.date);
    }
    section.append(times);
    userSlots.append(section);
  });
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

function appendAppointmentCell(row, booking) {
  const cell = document.createElement("td");
  cell.className = "appointment-cell";
  [booking.slot.day, formatDate(booking.slot.date), formatTime(booking.slot.time)].forEach((value) => {
    const line = document.createElement("span");
    line.textContent = value;
    cell.append(line);
  });
  row.append(cell);
  return cell;
}

function renderAvailableSlots() {
  const available = getAdminOpenSlots();
  availableCount.textContent = `${available.filter((slot) => !slot.suspended).length} موعد`;
  availableSlots.innerHTML = "";
  updateWeekButton();

  if (!available.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "لا توجد مواعيد متاحة.";
    availableSlots.append(empty);
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
    times.className = "time-grid";

    group.slots.forEach((slot) => {
      const item = document.createElement("div");
      item.className = `time-item ${slot.suspended ? "suspended-slot" : ""}`;
      const time = document.createElement("span");
      time.textContent = formatTime(slot.time);
      appendIconButton(
        item,
        slot.suspended ? "attendance-button" : "outline-action",
        slot.suspended ? "إتاحة الموعد" : "تعليق الموعد",
        slot.suspended ? ICONS.play : ICONS.pause,
        () => toggleSlotSuspension(slot.id, !slot.suspended)
      );
      appendIconButton(item, "danger-button", "حذف الموعد", ICONS.trash, () => deleteSlot(slot.id));
      item.prepend(time);
      times.append(item);
    });

    section.append(title);
    if (group.slots.some((slot) => slot.slot_type === "internal")) {
      appendPrayerBreaks(section, group.date);
    }
    section.append(times);
    availableSlots.append(section);
  });
}

function getCurrentWeekOpenSlots() {
  const adminOpenSlots = getAdminOpenSlots();
  if (!adminOpenSlots.length) return [];

  const weekStart = getWeekStart(new Date(`${adminOpenSlots[0].date}T00:00:00`));
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  const weekStartKey = toDateKey(weekStart);
  const weekEndKey = toDateKey(weekEnd);
  return adminOpenSlots.filter((slot) => slot.date >= weekStartKey && slot.date <= weekEndKey);
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
  suspendWeekButton.textContent = hasSuspendedSlot ? "إعادة إتاحة مواعيد كامل الأسبوع" : "تعليق كامل مواعيد الأسبوع";
}

function renderBookingsTable() {
  const reserved = getReservedSlots();
  reservedCount.textContent = `${reserved.length} موعد`;
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
    appendCell(
      row,
      `${booking.region || booking.city || "غير محدد"}${booking.home_session ? "\nجلسة منزلية" : ""}`
    );
    appendAppointmentCell(row, booking);
    appendCell(row, getBookingStatusText(booking));
    const actionsCell = document.createElement("td");
    const actions = document.createElement("div");
    actions.className = "table-actions";
    actionsCell.append(actions);
    row.append(actionsCell);
    if (booking.attended) {
      appendIconButton(actions, "danger-button", "حذف الجلسة التي تمت", ICONS.trash, () => deleteCompletedBooking(booking.id));
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

function renderAll() {
  renderAdminAccess();
  renderBookingOptions();
  renderAvailableSlots();
  renderBookingsTable();
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
      <tr><th>رقم الحجز</th><td></td></tr>
      <tr><th>اليوم</th><td></td></tr>
      <tr><th>التاريخ</th><td></td></tr>
      <tr><th>الساعة</th><td></td></tr>
      <tr><th>المدينة</th><td></td></tr>
    </tbody>
  `;
  const cells = table.querySelectorAll("td");
  [
    booking.name || "غير مسجل",
    booking.booking_number,
    booking.slot.day,
    formatDate(booking.slot.date),
    formatTime(booking.slot.time),
    booking.city || "غير محدد"
  ].forEach((value, index) => {
    cells[index].textContent = value;
  });

  const note = document.createElement("p");
  note.className = "receipt-note";
  note.textContent = "بعد التحويل يتم إرسال إيصال تحويل على ال WhatsApp من خلال الضغط على الزر أدناه";

  const sendLink = document.createElement("a");
  sendLink.className = "whatsapp-button receipt-whatsapp";
  sendLink.textContent = "إرسال واتساب";
  sendLink.href = getReceiptWhatsappUrl(booking);
  sendLink.target = "_blank";
  sendLink.rel = "noopener noreferrer";

  card.append(table, note, sendLink);
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
      time: row.slot_time
    }
  };
}

async function recoverBookingNumber(phone) {
  const rows = await api("rpc/recover_appointment_booking_number", {
    method: "POST",
    body: { p_phone: phone }
  });
  return rows?.[0] || null;
}

async function refreshAll() {
  await loadData();
  if (isAdmin) {
    await cleanupExpiredPendingBookings();
    await loadData();
    await insertMissingWeeklySlots();
  }
  renderAll();
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
  showToast(targetSuspended ? "تم تعليق كامل مواعيد هذا الأسبوع." : "تمت إعادة إتاحة المواعيد لهذا الأسبوع.");
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
  const text = booking.confirmed
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

  window.location.href = url;
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

closeReceiptButton.addEventListener("click", () => {
  receiptPanel.classList.add("hidden");
});

closeRecoveryButton.addEventListener("click", () => {
  recoveryPanel.classList.add("hidden");
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

locationTypeInput.addEventListener("change", () => {
  const isExternal = locationTypeInput.value === "external";
  regionField.classList.toggle("hidden", !isExternal);
  regionInput.required = isExternal;
  homeSessionField.classList.toggle("hidden", isExternal);
  if (isExternal) {
    homeSessionInput.checked = false;
  } else {
    regionInput.value = "";
  }
  selectedSlotId = "";
  slotSelect.value = "";
  renderBookingOptions();
});

adminTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAdminView(tab.dataset.adminView));
});

receiptLookupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(receiptLookupForm, true);
  showMessage(receiptMessage, "", "");

  try {
    const phone = document.querySelector("#receiptPhoneInput").value.trim();
    const bookingNumber = document.querySelector("#receiptNumberInput").value.trim();
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
    if (!/^05\d{8}$/.test(phone)) {
      showMessage(recoveryMessage, "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.", "error");
      return;
    }

    const booking = await recoverBookingNumber(phone);
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
    await refreshAll();
  } catch (error) {
    saveAuthSession(null);
    isAdmin = false;
    showMessage(loginMessage, error.message || "البريد الإلكتروني أو كلمة المرور غير صحيحة.", "error");
    renderAll();
  } finally {
    setBusy(adminLoginForm, false);
  }
});

logoutButton.addEventListener("click", async () => {
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
  showToast("تم تسجيل الخروج.");
  showPanel("booking");
  await refreshAll();
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
    const locationType = locationTypeInput.value;
    const created = await api("rpc/create_appointment_booking", {
      method: "POST",
      body: {
        p_slot_id: selectedSlotForSubmit,
        p_name: name,
        p_phone: phone,
        p_location_type: locationType,
        p_region: locationType === "external" ? regionInput.value : null,
        p_home_session: homeSessionInput.checked
      }
    });

    bookingForm.reset();
    locationTypeInput.value = "internal";
    regionField.classList.add("hidden");
    regionInput.required = false;
    homeSessionField.classList.remove("hidden");
    selectedSlotId = "";
    slotSelect.value = "";
    const bookingResult = created?.[0] || {};
    const bookingNumber = bookingResult.booking_number || "";
    bookingNumberDisplay.classList.toggle("hidden", !bookingNumber);
    bookingNumberDisplay.textContent = bookingNumber ? `رقم الحجز: ${bookingNumber}` : "";
    showBookingConfirmation(bookingResult);
    await refreshAll();
  } catch (error) {
    const errorMessage = error.message.includes("PHONE_ALREADY_BOOKED")
      ? "لا يمكن حجز أكثر من موعد في نفس اليوم لنفس رقم الجوال."
      : error.message.includes("SLOT_NOT_AVAILABLE")
        ? "هذا الموعد لم يعد متاحًا. اختر موعدًا آخر."
        : error.message.includes("EXTERNAL_DAY_BOOKED")
          ? "تم حجز هذا اليوم لموعد خارج منطقة حائل. اختر يومًا آخر."
        : `تعذر حفظ الحجز: ${error.message}`;
    showMessage(bookingMessage, errorMessage, "error");
  } finally {
    setBusy(bookingForm, false);
  }
});

async function boot() {
  try {
    showMessage(bookingMessage, "جاري تحميل المواعيد...", "success");
    restoreAuthSession();
    await loadPrayerTimes();
    await verifyAdminSession();
    await refreshAll();
    showMessage(bookingMessage, "", "");
  } catch (error) {
    showMessage(bookingMessage, "لم يتم الاتصال بقاعدة البيانات. شغّل ملف إعداد Supabase المحدث أولًا.", "error");
    console.error(error);
  }
}

boot();
setInterval(() => {
  refreshAll().catch((error) => {
    console.error("تعذر تحديث بيانات المواعيد.", error);
  });
}, 60 * 1000);
