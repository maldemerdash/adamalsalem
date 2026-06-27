
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
