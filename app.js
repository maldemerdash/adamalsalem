const SUPABASE_URL = "https://hdduxbywwxxybsffwxzd.supabase.co";
const SUPABASE_KEY = "sb_publishable_JJDMqVtKwiBpa2vKMGhdcg_ks7U5Rs-";
const DEFAULT_ADMIN_USERNAME = "admin";
const DEFAULT_ADMIN_PASSWORD = "123456";
const SCHEDULE_VERSION = "weekly-v4";
const START_HOUR = 17;
const END_HOUR = 21;
const PAYMENT_HOLD_MINUTES = 15;
const MAP_URL = "https://maps.app.goo.gl/gRuTSJt7Gk24d3RJ7";
const RECEIPT_WHATSAPP_PHONE = "966555707854";
const WORK_DAYS = [
  { offset: 0, name: "الأحد" },
  { offset: 1, name: "الإثنين" },
  { offset: 2, name: "الثلاثاء" },
  { offset: 3, name: "الأربعاء" },
  { offset: 4, name: "الخميس" }
];
const MESSAGES = {
  paymentInstructions:
    "لتأكيد الحجز يرجى تحويل مبلغ 50 ريال\nعلى الحساب البنكي التالي:\nSA4480000456608016164286\nوبعد التحويل يتم إرسال الإيصال على الواتس رقم 0555707854",
  paymentWarning:
    "تنبيه: في حال لم يتم التحويل وإرسال الإيصال خلال 15 دقيقة سيتم إلغاء الحجز تلقائيا",
  whatsappConfirmation(booking) {
    return [
      `مرحبًا ${booking.name}`,
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
let adminCredentials = {
  username: DEFAULT_ADMIN_USERNAME,
  password: DEFAULT_ADMIN_PASSWORD
};

const bookingPanel = document.querySelector("#bookingPanel");
const adminPanel = document.querySelector("#adminPanel");
const bookingForm = document.querySelector("#bookingForm");
const adminLoginForm = document.querySelector("#adminLoginForm");
const credentialsForm = document.querySelector("#credentialsForm");
const slotSelect = document.querySelector("#slotSelect");
const cityInput = document.querySelector("#cityInput");
const userSlots = document.querySelector("#userSlots");
const bookingMessage = document.querySelector("#bookingMessage");
const bookingNumberDisplay = document.querySelector("#bookingNumberDisplay");
const loginMessage = document.querySelector("#loginMessage");
const adminMessage = document.querySelector("#adminMessage");
const receiptButton = document.querySelector("#receiptButton");
const receiptPanel = document.querySelector("#receiptPanel");
const receiptLookupForm = document.querySelector("#receiptLookupForm");
const receiptResult = document.querySelector("#receiptResult");
const receiptMessage = document.querySelector("#receiptMessage");
const adminLoginView = document.querySelector("#adminLoginView");
const adminDashboard = document.querySelector("#adminDashboard");
const adminLoginButton = document.querySelector("#adminLoginButton");
const backToBookingButton = document.querySelector("#backToBookingButton");
const logoutButton = document.querySelector("#logoutButton");
const showCredentialsButton = document.querySelector("#showCredentialsButton");
const regenerateSlotsButton = document.querySelector("#regenerateSlotsButton");
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

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (value) => {
    return (Number(value) ^ Math.random() * 16 >> Number(value) / 4).toString(16);
  });
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
          suspended: false,
          schedule_version: SCHEDULE_VERSION
        });
      });
    }
  });

  return generated;
}

function getManagedWeekStarts() {
  const currentWeekStart = getWeekStart();
  const nextWeekStart = new Date(currentWeekStart);
  nextWeekStart.setDate(currentWeekStart.getDate() + 7);
  return [currentWeekStart, nextWeekStart];
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
    `باسم ${booking.name}`,
    `اليوم: ${booking.slot.day}`,
    `التاريخ: ${booking.slot.date}`,
    `الساعة: ${formatTime(booking.slot.time)}`
  ].join("\n"));
  return `https://wa.me/${RECEIPT_WHATSAPP_PHONE}?text=${message}`;
}

async function loadAdminSettings() {
  try {
    const rows = await api("appointment_settings?id=eq.admin&select=value");
    const value = rows?.[0]?.value;
    if (value?.username && value?.password) {
      adminCredentials = value;
    }
  } catch (error) {
    console.warn("Admin settings table is not ready yet.", error);
  }
}

async function saveAdminSettings(username, password) {
  adminCredentials = { username, password };
  await api("appointment_settings?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: [{ id: "admin", value: adminCredentials }]
  });
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

async function insertMissingWeeklySlots({ restoreDeleted = false } = {}) {
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
  const bookedIds = new Set(bookings.map((booking) => booking.slot_id));
  return slots
    .filter((slot) => !bookedIds.has(slot.id))
    .filter((slot) => !slot.suspended)
    .filter((slot) => getSlotEndDateTime(slot) > now)
    .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
}

function getAdminOpenSlots() {
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

function showPaymentInstructions() {
  bookingMessage.innerHTML = "";
  bookingMessage.className = "message success payment-message";

  const text = document.createElement("div");
  text.className = "payment-text";
  ["لتأكيد الحجز يرجى تحويل مبلغ 50 ريال", "على الحساب البنكي التالي:", "SA4480000456608016164286"].forEach((line) => {
    const p = document.createElement("p");
    p.textContent = line;
    text.append(p);
  });

  const qr = document.createElement("img");
  qr.className = "bank-qr";
  qr.src = "bank-qr.jpeg";
  qr.alt = "صورة الحساب البنكي";

  const whatsapp = document.createElement("p");
  whatsapp.textContent = "وبعد التحويل يتم إرسال الإيصال على الواتس رقم 0555707854";

  const warning = document.createElement("p");
  warning.className = "payment-warning";
  warning.textContent = MESSAGES.paymentWarning;

  bookingMessage.append(text, qr, whatsapp, warning);
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
}

function renderAdminAccess() {
  adminLoginView.classList.toggle("hidden", adminSession.isLoggedIn);
  adminDashboard.classList.toggle("hidden", !adminSession.isLoggedIn);
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
    empty.textContent = "لا توجد مواعيد متاحة حاليًا";
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
      const time = document.createElement("span");
      time.textContent = formatTime(slot.time);
      appendButton(item, "confirm-button compact-button", "حجز", () => {
        selectedSlotId = slot.id;
        slotSelect.value = slot.id;
        renderBookingOptions();
      });
      item.prepend(time);
      times.append(item);
    });

    section.append(title, times);
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
  cancel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18.3 5.71-1.41-1.41L12 9.17 7.11 4.29 5.7 5.7 10.59 10.6 5.7 15.49l1.41 1.41L12 12.01l4.89 4.89 1.41-1.41-4.89-4.89 4.89-4.89Z"/></svg>'
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

function renderAvailableSlots() {
  const available = getAdminOpenSlots();
  availableCount.textContent = `${getAvailableSlots().length} موعد`;
  availableSlots.innerHTML = "";

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
    title.innerHTML = `<strong>${group.day}</strong><span>${formatDate(group.date)}</span>`;

    const times = document.createElement("div");
    times.className = "time-grid";

    group.slots.forEach((slot) => {
      const item = document.createElement("div");
      item.className = `time-item ${slot.suspended ? "suspended-slot" : ""}`;
      const time = document.createElement("span");
      time.textContent = formatTime(slot.time);
      appendButton(
        item,
        slot.suspended ? "attendance-button compact-button" : "outline-action compact-button",
        slot.suspended ? "إتاحة الموعد" : "تعليق الموعد",
        () => toggleSlotSuspension(slot.id, !slot.suspended)
      );
      appendButton(item, "danger-button compact-button", "حذف", () => deleteSlot(slot.id));
      item.prepend(time);
      times.append(item);
    });

    section.append(title, times);
    availableSlots.append(section);
  });
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
    appendCell(row, booking.name);
    appendCell(row, booking.booking_number || "-");
    appendCell(row, booking.phone);
    appendCell(row, booking.city || "غير محدد");
    appendCell(row, `${booking.slot.day}\n${formatDate(booking.slot.date)}\n${formatTime(booking.slot.time)}`);
    appendCell(row, getBookingStatusText(booking));
    const actionsCell = document.createElement("td");
    const actions = document.createElement("div");
    actions.className = "table-actions";
    actionsCell.append(actions);
    row.append(actionsCell);
    if (!booking.confirmed) {
      appendIconButton(actions, "confirm-button", "تأكيد الحجز", ICONS.confirm, () => confirmBooking(booking.id));
    } else {
      appendIconLink(actions, "whatsapp-button", "إرسال واتساب", ICONS.whatsapp, getWhatsappUrl(booking));
      if (!booking.attended) {
        appendIconButton(actions, "attendance-button", "تم الحضور", ICONS.attend, () => markAttended(booking.id));
      }
    }
    if (!booking.attended) {
      appendIconButton(actions, "danger-button", "إلغاء الحجز", ICONS.cancel, () => cancelBooking(booking.id));
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

  const details = document.createElement("div");
  details.innerHTML = `
    <strong>${booking.name}</strong>
    <span>رقم الحجز: ${booking.booking_number}</span>
    <span>${booking.slot.day} - ${formatDate(booking.slot.date)} - ${formatTime(booking.slot.time)}</span>
  `;

  const fileLabel = document.createElement("label");
  fileLabel.className = "receipt-file";
  fileLabel.innerHTML = `
    <span>إرفاق الإيصال</span>
    <input id="receiptFileInput" type="file" accept="image/*" capture="environment" />
  `;

  const sendLink = document.createElement("a");
  sendLink.className = "whatsapp-button compact-button disabled-link";
  sendLink.textContent = "إرسال واتساب";
  sendLink.href = getReceiptWhatsappUrl(booking);
  sendLink.target = "_blank";
  sendLink.rel = "noopener noreferrer";
  sendLink.setAttribute("aria-disabled", "true");

  fileLabel.querySelector("input").addEventListener("change", (event) => {
    const hasFile = event.target.files && event.target.files.length > 0;
    sendLink.classList.toggle("disabled-link", !hasFile);
    sendLink.setAttribute("aria-disabled", hasFile ? "false" : "true");
  });

  card.append(details, fileLabel, sendLink);
  receiptResult.append(card);
}

async function lookupReceiptBooking(phone, bookingNumber) {
  await refreshAll();
  return getReservedSlots().find((booking) => {
    return normalizePhone(booking.phone) === normalizePhone(phone) && booking.booking_number === bookingNumber;
  });
}

async function refreshAll() {
  await loadData();
  await cleanupExpiredPendingBookings();
  await insertMissingWeeklySlots();
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

async function regenerateWeeklySlots() {
  const count = await insertMissingWeeklySlots({ restoreDeleted: true });
  showMessage(adminMessage, count ? `تم توليد ${count} موعد متاح.` : "لا توجد مواعيد ناقصة للتوليد.", "success");
  await refreshAll();
}

async function toggleSlotSuspension(slotId, suspended) {
  await api(`appointment_slots?id=eq.${encodeURIComponent(slotId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: { suspended }
  });
  showMessage(adminMessage, suspended ? "تم تعليق الموعد وإخفاؤه عن المستخدم." : "تمت إتاحة الموعد للمستخدم.", "success");
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

async function cancelBooking(bookingId) {
  await api(`appointment_bookings?id=eq.${bookingId}`, { method: "DELETE" });
  showMessage(adminMessage, "تم إلغاء الحجز وإرجاع الموعد لقائمة المتاح.", "success");
  await refreshAll();
}

adminLoginButton.addEventListener("click", () => showPanel("admin"));
backToBookingButton.addEventListener("click", () => showPanel("booking"));
regenerateSlotsButton.addEventListener("click", regenerateWeeklySlots);
receiptButton.addEventListener("click", () => {
  receiptPanel.classList.toggle("hidden");
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

adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#adminUsername").value.trim();
  const password = document.querySelector("#adminPassword").value;

  if (username !== adminCredentials.username || password !== adminCredentials.password) {
    showMessage(loginMessage, "اسم المستخدم أو كلمة المرور غير صحيحة.", "error");
    return;
  }

  adminSession.isLoggedIn = true;
  adminLoginForm.reset();
  showMessage(loginMessage, "", "");
  showMessage(adminMessage, "تم تسجيل الدخول بنجاح.", "success");
  renderAll();
});

showCredentialsButton.addEventListener("click", () => {
  credentialsForm.classList.toggle("hidden");
  document.querySelector("#newAdminUsername").value = adminCredentials.username;
  document.querySelector("#newAdminPassword").value = adminCredentials.password;
});

credentialsForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  setBusy(credentialsForm, true);

  try {
    const username = document.querySelector("#newAdminUsername").value.trim();
    const password = document.querySelector("#newAdminPassword").value;
    await saveAdminSettings(username, password);
    credentialsForm.classList.add("hidden");
    showMessage(adminMessage, "تم حفظ اسم المستخدم وكلمة المرور.", "success");
  } catch (error) {
    showMessage(adminMessage, `تعذر حفظ بيانات الدخول: ${error.message}`, "error");
  } finally {
    setBusy(credentialsForm, false);
  }
});

logoutButton.addEventListener("click", () => {
  adminSession.isLoggedIn = false;
  credentialsForm.classList.add("hidden");
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

    if (!/^05\d{8}$/.test(phone)) {
      showMessage(bookingMessage, "رقم الجوال يجب أن يكون 10 أرقام ويبدأ بـ 05.", "error");
      return;
    }

    if (hasPhoneBookingOnDate(phone, slot.date)) {
      showMessage(bookingMessage, "لا يمكن حجز أكثر من موعد في نفس اليوم لنفس رقم الجوال.", "error");
      return;
    }

    const firstName = document.querySelector("#firstNameInput").value.trim();
    const fatherName = document.querySelector("#fatherNameInput").value.trim();
    const lastName = document.querySelector("#lastNameInput").value.trim();
    const fullName = `${firstName} ${fatherName} ${lastName}`;

    const created = await api("appointment_bookings", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: [{
        id: createId(),
        slot_id: selectedSlotId,
        name: fullName,
        first_name: firstName,
        father_name: fatherName,
        last_name: lastName,
        phone,
        city: cityInput.value,
        confirmed: false,
        attended: false,
        expires_at: new Date(Date.now() + PAYMENT_HOLD_MINUTES * 60 * 1000).toISOString()
      }]
    });

    bookingForm.reset();
    cityInput.value = "حائل";
    selectedSlotId = "";
    slotSelect.value = "";
    const bookingNumber = created?.[0]?.booking_number || "";
    bookingNumberDisplay.classList.toggle("hidden", !bookingNumber);
    bookingNumberDisplay.textContent = bookingNumber ? `رقم الحجز: ${bookingNumber}` : "";
    showPaymentInstructions();
    await refreshAll();
  } catch (error) {
    showMessage(bookingMessage, `تعذر حفظ الحجز: ${error.message}`, "error");
  } finally {
    setBusy(bookingForm, false);
  }
});

async function boot() {
  try {
    showMessage(bookingMessage, "جاري تحميل المواعيد...", "success");
    await loadAdminSettings();
    await refreshAll();
    showMessage(bookingMessage, "", "");
  } catch (error) {
    showMessage(bookingMessage, "لم يتم الاتصال بقاعدة البيانات. شغّل ملف إعداد Supabase المحدث أولًا.", "error");
    console.error(error);
  }
}

boot();
setInterval(refreshAll, 60 * 1000);
