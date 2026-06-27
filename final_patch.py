from pathlib import Path
base=Path('/mnt/data/work_current')
app=base/'app.js'
css=base/'style.css'
js=app.read_text()
append=r'''

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
'''
# replace version strings in index
idx=base/'index.html'
idx_text=idx.read_text()
idx_text=idx_text.replace('app.js?v=20260626-minute-builder-checkbox-visual-fix','app.js?v=20260626-documents-minutes-final-fix')
idx_text=idx_text.replace('style.css?v=20260626-minute-builder-checkbox-visual-fix','style.css?v=20260626-documents-minutes-final-fix')
idx.write_text(idx_text)
app.write_text(js+append)
css_text=css.read_text()
css_append=r'''

/* Final visual polish for document settings and minute actions */
.settings-entry-modal .modal-body label,
.settings-entry-modal .modal-body .toggle-line {
  display: grid;
  gap: 7px;
  font-weight: 800;
  color: var(--text);
}
.settings-entry-modal .modal-body input,
.settings-entry-modal .modal-body select,
.settings-entry-modal .modal-body textarea {
  min-height: 42px;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 0 12px;
  background: #fff;
  font: inherit;
}
.settings-entry-modal .modal-body textarea { padding: 10px 12px; }
.settings-entry-modal .toggle-line {
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row-reverse;
  gap: 9px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #f8fbfc;
}
.settings-entry-modal .toggle-line input { min-height: auto; width: 18px; height: 18px; }
.improved-doc-settings { margin-bottom: 16px; }
.improved-doc-settings .compact-data-table th,
.improved-doc-settings .compact-data-table td,
.improved-est-docs .compact-data-table th,
.improved-est-docs .compact-data-table td { white-space: nowrap; }
.action-cell {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
}
.action-cell .quick-view-btn,
.action-cell .print-icon-btn {
  width: 32px;
  height: 32px;
  min-height: 32px;
  padding: 0;
}
.danger-inline-btn {
  border: 1px solid rgba(227, 77, 77, 0.22) !important;
  background: #fff5f5 !important;
  color: #d33d3d !important;
}
.danger-inline-btn:hover {
  background: #e34d4d !important;
  border-color: #e34d4d !important;
  color: #fff !important;
}
.status-badge.status-suspended {
  background: #fff3f3;
  color: #b42323;
}
.status-badge.status-active {
  background: #e9fbf6;
  color: #0f766e;
}
'''
css.write_text(css_text+css_append)
