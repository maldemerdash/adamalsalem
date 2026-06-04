const SUPABASE_URL = "https://hdduxbywwxxybsffwxzd.supabase.co";
const SUPABASE_KEY = "sb_publishable_JJDMqVtKwiBpa2vKMGhdcg_ks7U5Rs-";
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";
const SCHEDULE_VERSION = "weekly-v3";
const WORK_DAYS = [
  { offset: 0, name: "الأحد" },
  { offset: 1, name: "الإثنين" },
  { offset: 2, name: "الثلاثاء" },
  { offset: 3, name: "الأربعاء" },
  { offset: 4, name: "الخميس" }
];
const START_HOUR = 17;
const END_HOUR = 21;
const PAYMENT_HOLD_MINUTES = 15;
const MESSAGES = {
  paymentInstructions:
    "لتأكيد الحجز يرجى تحويل مبلغ 50 ريال على الحساب البنكي التالي: SA56800006636080102363254 وبعد التحويل يتم إرسال الإيصال على الواتس رقم 0509966390. تنبيه: في حال لم يتم التحويل وإرسال الإيصال خلال ربع ساعة سيتم إلغاء الحجز.",
  whatsappConfirmation(booking) {
    return [
      `مرحبًا ${booking.name}`,
      "تم تأكيد موعدك بنجاح.",
      `الموعد: ${slotLabel(booking.slot)}`,
      `المدينة: ${booking.city || "غير محدد"}`,
      "الموقع: https://maps.app.goo.gl/gRuTSJt7Gk24d3RJ7",
      "تنبيه: لابد من الحضور في وقت الموعد، وفي حال التأخر 5 دقائق يتم إلغاء الموعد دون استرجاع المبلغ.",
      "نسعد بخدمتك."
    ].join("\n");
  }
};

let slots = [];
let bookings = [];
let deletedSlots = [];

const tabs = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");
const bookingForm = document.querySelector("#bookingForm");
const adminLoginForm = document.querySelector("#adminLoginForm");
const slotForm = document.querySelector("#slotForm");
const slotSelect = document.querySelector("#slotSelect");
const cityInput = document.querySelector("#cityInput");
const bookingMessage = document.querySelector("#bookingMessage");
const loginMessage = document.querySelector("#loginMessage");
const adminMessage = document.querySelector("#adminMessage");
const adminLoginView = document.querySelector("#adminLoginView");
const adminDashboard = document.querySelector("#adminDashboard");
const logoutButton = document.querySelector("#logoutButton");
const availableSlots = document.querySelector("#availableSlots");
const reservedSlots = document.querySelector("#reservedSlots");
const availableCount = document.querySelector("#availableCount");
const reservedCount = document.querySelector("#reservedCount");

const adminSession = {
  get isLoggedIn() {
    return sessionStorage.getItem("appointmentAdminLoggedIn") === "true";
  },
  set isLoggedIn(value) {
    sessionStorage.setItem("appointmentAdminLoggedIn", value ? "true" : "false");
  }
};

async function api(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method: options.method || "GET",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || "تعذر الاتصال بقاعدة البيانات.");
  }

  const text = await response.text();
  if (!text) return null;
  return JSON.parse(text);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (value) => {
    return (Number(value) ^ Math.random() * 16 >> Number(value) / 4).toString(16);
  });
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

function buildWeeklySlots(weekStart) {
  const generated = [];

  WORK_DAYS.forEach((day) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + day.offset);
    const dateKey = toDateKey(date);

    for (let hour = START_HOUR; hour < END_HOUR; hour += 1) {
      ["00", "30"].forEach((minute) => {
        const time = `${pad(hour)}:${minute}`;
        generated.push({
          id: `${dateKey}T${time}`,
          day: day.name,
          date: dateKey,
          time,
          source: "auto",
          schedule_version: SCHEDULE_VERSION
        });
      });
    }
  });

  return generated;
}

function slotLabel(slot) {
  return `${slot.day} - ${formatDate(slot.date)} - ${formatTime(slot.time)}`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("ar-SA", {
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

function getWhatsappMessage(booking) {
  return MESSAGES.whatsappConfirmation(booking);
}

function openWhatsappConfirmation(booking) {
  const phone = toWhatsappPhone(booking.phone);
  const message = encodeURIComponent(getWhatsappMessage(booking));
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener");
}

async function loadData() {
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
  const expired = bookings.filter((booking) => isPendingExpired(booking));

  for (const booking of expired) {
    await api(`appointment_bookings?id=eq.${booking.id}`, { method: "DELETE" });
  }

  if (expired.length) {
    await loadData();
  }
}

async function ensureWeeklySlots() {
  const currentWeekStart = getWeekStart();
  const nextWeekStart = new Date(currentWeekStart);
  nextWeekStart.setDate(currentWeekStart.getDate() + 7);
  const deletedIds = new Set(deletedSlots.map((item) => item.slot_id));
  const existingIds = new Set(slots.map((slot) => slot.id));
  const generatedSlots = [currentWeekStart, nextWeekStart]
    .flatMap((weekStart) => buildWeeklySlots(weekStart))
    .filter((slot) => !existingIds.has(slot.id) && !deletedIds.has(slot.id));

  if (!generatedSlots.length) return;

  await api("appointment_slots?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=representation" },
    body: generatedSlots
  });
  await loadData();
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
  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  return slots
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => getSlotEndDateTime(slot) > now)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
}

function hasPhoneBookingOnDate(phone, date) {
  const normalizedPhone = normalizePhone(phone);
  return getReservedSlots().some((booking) => {
    return normalizePhone(booking.phone) === normalizedPhone && booking.slot.date === date;
  });
}

function showMessage(element, text, type) {
  element.textContent = text;
  element.className = `message ${type || ""}`.trim();
}

function setBusy(form, isBusy) {
  [...form.querySelectorAll("button, input, select")].forEach((element) => {
    element.disabled = isBusy;
  });
}

function renderAdminAccess() {
  adminLoginView.classList.toggle("hidden", adminSession.isLoggedIn);
  adminDashboard.classList.toggle("hidden", !adminSession.isLoggedIn);
}

function renderBookingOptions() {
  const available = getAvailableSlots();
  slotSelect.innerHTML = "";

  if (!available.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "لا توجد مواعيد متاحة حاليًا";
    slotSelect.append(option);
    slotSelect.disabled = true;
    return;
  }

  slotSelect.disabled = false;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "اختر موعدًا";
  placeholder.disabled = true;
  placeholder.selected = true;
  slotSelect.append(placeholder);

  available.forEach((slot) => {
    const option = document.createElement("option");
    option.value = slot.id;
    option.textContent = slotLabel(slot);
    slotSelect.append(option);
  });
}

function appendText(className, text, parent) {
  const element = document.createElement("div");
  element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function renderSlotList(container, rows, emptyText, options = {}) {
  container.innerHTML = "";

  if (!rows.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = emptyText;
    container.append(empty);
    return;
  }

  rows.forEach((item) => {
    const slot = item.slot || item;
    const row = document.createElement("article");
    row.className = `slot-item ${options.reserved ? "reserved" : ""}`.trim();

    const content = document.createElement("div");
    appendText("slot-title", slot.day, content);
    appendText("slot-meta", `${formatDate(slot.date)} - ${formatTime(slot.time)}`, content);

    if (options.reserved) {
      appendText("slot-customer", `${item.name} | ${item.phone} | ${item.city || "غير محدد"}`, content);
      appendText("slot-status", getBookingStatusText(item), content);
    }

    row.append(content);

    if (options.removable) {
      const button = document.createElement("button");
      button.className = "danger-button";
      button.type = "button";
      button.textContent = "حذف";
      button.addEventListener("click", () => deleteSlot(slot.id));
      row.append(button);
    }

    if (options.confirmation && !item.confirmed) {
      const button = document.createElement("button");
      button.className = "confirm-button";
      button.type = "button";
      button.textContent = "تأكيد الموعد";
      button.addEventListener("click", () => confirmBooking(item.id));
      row.append(button);
    }

    if (options.attendance && item.confirmed && !item.attended) {
      const whatsappButton = document.createElement("button");
      whatsappButton.className = "whatsapp-button";
      whatsappButton.type = "button";
      whatsappButton.textContent = "إرسال واتساب";
      whatsappButton.addEventListener("click", () => openWhatsappConfirmation(item));
      row.append(whatsappButton);

      const button = document.createElement("button");
      button.className = "attendance-button";
      button.type = "button";
      button.textContent = "تم الحضور";
      button.addEventListener("click", () => markAttended(item.id));
      row.append(button);
    }

    container.append(row);
  });
}

function renderAdminLists() {
  const available = getAvailableSlots();
  const reserved = getReservedSlots();
  availableCount.textContent = `${available.length} موعد`;
  reservedCount.textContent = `${reserved.length} موعد`;
  renderSlotList(availableSlots, available, "لا توجد مواعيد متاحة.", { removable: true });
  renderSlotList(reservedSlots, reserved, "لا توجد مواعيد محجوزة.", {
    reserved: true,
    confirmation: true,
    attendance: true
  });
}

function renderAll() {
  renderAdminAccess();
  renderBookingOptions();
  renderAdminLists();
}

async function refreshAll() {
  await loadData();
  await cleanupExpiredPendingBookings();
  await ensureWeeklySlots();
  renderAll();
}

async function deleteSlot(slotId) {
  await refreshAll();

  if (bookings.some((booking) => booking.slot_id === slotId)) {
    showMessage(adminMessage, "لا يمكن حذف موعد تم حجزه بالفعل.", "error");
    return;
  }

  await api("appointment_deleted_slots?on_conflict=slot_id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: [{ slot_id: slotId }]
  });
  await api(`appointment_slots?id=eq.${encodeURIComponent(slotId)}`, { method: "DELETE" });
  showMessage(adminMessage, "تم حذف الموعد المحدد.", "success");
  await refreshAll();
}

async function confirmBooking(bookingId) {
  await refreshAll();

  if (!bookings.some((booking) => booking.id === bookingId)) {
    showMessage(adminMessage, "انتهت مهلة الحجز وعاد الموعد للقائمة.", "error");
    return;
  }

  await api(`appointment_bookings?id=eq.${bookingId}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: { confirmed: true, confirmed_at: new Date().toISOString() }
  });
  showMessage(adminMessage, "تم تأكيد الموعد.", "success");
  await refreshAll();
}

async function markAttended(bookingId) {
  await api(`appointment_bookings?id=eq.${bookingId}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: { attended: true, attended_at: new Date().toISOString() }
  });
  showMessage(adminMessage, "تم تسجيل الحضور.", "success");
  await refreshAll();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;
    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === target));
  });
});

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#adminUsername").value.trim();
  const password = document.querySelector("#adminPassword").value;

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    showMessage(loginMessage, "اسم المستخدم أو كلمة المرور غير صحيحة.", "error");
    return;
  }

  adminSession.isLoggedIn = true;
  adminLoginForm.reset();
  showMessage(loginMessage, "", "");
  showMessage(adminMessage, "تم تسجيل الدخول بنجاح.", "success");
  renderAll();
});

logoutButton.addEventListener("click", () => {
  adminSession.isLoggedIn = false;
  showMessage(adminMessage, "", "");
  renderAll();
});

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const selectedSlotId = slotSelect.value;

  if (!selectedSlotId) {
    showMessage(bookingMessage, "يرجى اختيار موعد من القائمة.", "error");
    return;
  }

  setBusy(bookingForm, true);

  try {
    await refreshAll();
    const slot = slots.find((item) => item.id === selectedSlotId);

    if (!slot || bookings.some((booking) => booking.slot_id === selectedSlotId)) {
      showMessage(bookingMessage, "هذا الموعد لم يعد متاحًا. اختر موعدًا آخر.", "error");
      return;
    }

    const phone = document.querySelector("#phoneInput").value.trim();

    if (hasPhoneBookingOnDate(phone, slot.date)) {
      showMessage(bookingMessage, "لا يمكن حجز أكثر من موعد في نفس اليوم لنفس رقم الجوال.", "error");
      return;
    }

    await api("appointment_bookings", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: [{
        id: createId(),
        slot_id: selectedSlotId,
        name: document.querySelector("#nameInput").value.trim(),
        phone,
        city: cityInput.value,
        confirmed: false,
        attended: false,
        expires_at: new Date(Date.now() + PAYMENT_HOLD_MINUTES * 60 * 1000).toISOString()
      }]
    });

    bookingForm.reset();
    cityInput.value = "حائل";
    showMessage(bookingMessage, MESSAGES.paymentInstructions, "success");
    await refreshAll();
  } catch (error) {
    showMessage(bookingMessage, `تعذر حفظ الحجز: ${error.message}`, "error");
    console.error(error);
  } finally {
    setBusy(bookingForm, false);
  }
});

slotForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(slotForm, true);

  try {
    await refreshAll();
    const day = document.querySelector("#dayInput").value;
    const date = document.querySelector("#dateInput").value;
    const time = document.querySelector("#timeInput").value;
    const id = `${date}T${time}`;

    if (slots.some((slot) => slot.id === id)) {
      showMessage(adminMessage, "هذا الموعد مضاف بالفعل.", "error");
      return;
    }

    await api("appointment_deleted_slots?slot_id=eq." + encodeURIComponent(id), { method: "DELETE" });
    await api("appointment_slots", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: [{ id, day, date, time, source: "manual", schedule_version: SCHEDULE_VERSION }]
    });
    slotForm.reset();
    showMessage(adminMessage, "تمت إضافة الموعد المتاح.", "success");
    await refreshAll();
  } catch (error) {
    showMessage(adminMessage, "تعذر إضافة الموعد. تأكد من إعداد Supabase.", "error");
    console.error(error);
  } finally {
    setBusy(slotForm, false);
  }
});

async function boot() {
  try {
    showMessage(bookingMessage, "جاري تحميل المواعيد...", "success");
    await refreshAll();
    showMessage(bookingMessage, "", "");
  } catch (error) {
    showMessage(bookingMessage, "لم يتم الاتصال بقاعدة البيانات. شغّل ملف إعداد Supabase أولًا.", "error");
    console.error(error);
  }
}

boot();
setInterval(refreshAll, 60 * 1000);
