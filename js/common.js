/* ==========================================================================
   आराधना — shared layer for every page
   theme engine · site chrome (header, mobile tab bar, footer) · session builder · toast
   Requires data.js (const prayers) loaded first.
   ========================================================================== */

/* ---------- storage ---------- */
const STORE_KEY = "aradhana-settings";
const Store = {
  read() { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (err) { return {}; } },
  write(patch) {
    const next = { ...Store.read(), ...patch };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(next)); } catch (err) { /* private mode */ }
    return next;
  }
};

/* ---------- helpers ---------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const mrDigits = (n) => String(n).replace(/\d/g, (d) => "०१२३४५६७८९"[d]);
const HTML_ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" };
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => HTML_ESC[c]);
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
/* Set in <head>: phones/tablets get `mobile-lite`; ≤2 GB RAM / ≤4 cores / Data Saver also get `low-end-mobile`. */
const isTouchLite = () => document.documentElement.classList.contains("mobile-lite");
const isLowEnd = () => document.documentElement.classList.contains("low-end-mobile");
const prayerById = new Map(prayers.map((p) => [p.id, p]));
const CATEGORIES = [...new Set(prayers.map((p) => p.category))];
/* Icons are generated per theme by tools/build_theme_icons.py → assets/icons/themes/<theme>/ */
const ICON_RE = /assets\/icons\/(?:themes\/[a-z]+\/)?([^/?#]+\.svg)$/;
const themedIcon = (file) => `./assets/icons/themes/${document.documentElement.dataset.theme || "ivory"}/${file}`;
const iconFor = (p) => p.icon || themedIcon(p.category === "श्लोक" ? "shloka_icon.svg" : (p.category === "स्तोत्र" || p.category === "मंत्र") ? "mantra_icon.svg" : "aarti_icon.svg");
function retintIcons(root = document) {
  $$("img", root).forEach((img) => {
    const m = (img.getAttribute("src") || "").match(ICON_RE);
    if (m) { const next = themedIcon(m[1]); if (img.getAttribute("src") !== next) img.setAttribute("src", next); }
  });
  const fav = $('link[rel="icon"]');
  if (fav) fav.href = themedIcon("website_icon.svg");
}
const readUrl = (id, session) => `#/read/${encodeURIComponent(id)}${session && session.length > 1 ? `?s=${session.map(encodeURIComponent).join(",")}` : ""}`;
const matchesTerm = (p, term) => !term || `${p.title} ${p.subtitle} ${p.category} ${p.verses.join(" ")}`.toLowerCase().includes(term);

/* ---------- themes ---------- */
const THEMES = [
  { id: "auto",   name: "स्वयं",  note: "उपकरणानुसार",     bg: "linear-gradient(135deg,#f5efe2 0 50%,#16171b 50% 100%)", ink: "#a2401f", accent: "#e7ab62" },
  { id: "ivory",  name: "शुभ्र",  note: "कुंकू आणि कागद",   bg: "#f6f0e3", ink: "#2a241c", accent: "#a63a1b" },
  { id: "sandal", name: "चंदन",  note: "सोनेरी, उबदार",    bg: "#efdcb2", ink: "#3a2b14", accent: "#8a4a0c" },
  { id: "rose",   name: "प्रभात", note: "पहाटेचा गुलाबी",   bg: "#f6dfdc", ink: "#3a2228", accent: "#a52f4a" },
  { id: "sage",   name: "तुळस",  note: "शांत हिरवा",       bg: "#dce8d4", ink: "#1f3024", accent: "#2f6a3f" },
  { id: "sky",    name: "गगन",   note: "निळे आकाश",        bg: "#dbe7f2", ink: "#1b2c3c", accent: "#235b8a" },
  { id: "night",  name: "रात्र",  note: "रात्री डोळ्यांना आराम", bg: "#16171b", ink: "#ece4d6", accent: "#e7ab62" }
];
const THEME_META = { ivory: "#f6f0e3", sandal: "#efdcb2", rose: "#f6dfdc", sage: "#dce8d4", sky: "#dbe7f2", night: "#16171b" };
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const themeById = (id) => THEMES.find((t) => t.id === id);
const currentThemeId = () => (themeById(Store.read().palette) ? Store.read().palette : "auto");
const resolveTheme = (id) => (id === "auto" ? (darkQuery.matches ? "night" : "ivory") : id);

function setThemeAttr(id) {
  const resolved = resolveTheme(id);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeChoice = id;
  const meta = $('meta[name="theme-color"]'); if (meta) meta.setAttribute("content", THEME_META[resolved]);
  $$("[data-theme-id]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.themeId === id)));
  $$(".theme-trigger-swatch").forEach((s) => { const t = themeById(id); s.style.setProperty("--sw-bg", t.bg); s.style.setProperty("--sw-accent", t.accent); });
  $$("[data-theme-name]").forEach((el) => { el.textContent = themeById(id).name; });
  retintIcons();
}

function applyTheme(id, origin) {
  if (!themeById(id)) return;
  if (id === currentThemeId() && document.documentElement.dataset.themeChoice === id) { announce(`${themeById(id).name} आधीच निवडलेली आहे`); return; }
  Store.write({ palette: id });
  const run = () => setThemeAttr(id);
  if (!document.startViewTransition || reducedMotion() || isLowEnd()) {
    document.documentElement.classList.add("theme-fade");
    run();
    setTimeout(() => document.documentElement.classList.remove("theme-fade"), 450);
  } else {
    const r = origin ? origin.getBoundingClientRect() : null;
    const x = r ? r.left + r.width / 2 : innerWidth / 2;
    const y = r ? r.top + r.height / 2 : 0;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const t = document.startViewTransition(run);
    t.ready.then(() => document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 560, easing: "cubic-bezier(.23,1,.32,1)", pseudoElement: "::view-transition-new(root)" }
    )).catch(() => {});
  }
  announce(`${themeById(id).name} रंगसंगती लागू केली`);
}
const onSchemeChange = () => { if (currentThemeId() === "auto") setThemeAttr("auto"); };
if (darkQuery.addEventListener) darkQuery.addEventListener("change", onSchemeChange); else if (darkQuery.addListener) darkQuery.addListener(onSchemeChange);

function themeOptionsHTML(compact = false) {
  return THEMES.map((t) => `
    <button class="theme-option${compact ? " is-compact" : ""}" type="button" data-theme-id="${t.id}" aria-pressed="false">
      <span class="theme-swatch" style="--sw-bg:${t.bg};--sw-ink:${t.ink};--sw-accent:${t.accent}" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="theme-option-copy"><b>${t.name}</b>${compact ? "" : `<small>${t.note}</small>`}</span>
      <svg class="theme-check" aria-hidden="true"><use href="#i-check"></use></svg>
    </button>`).join("");
}

/* ---------- icons ---------- */
const SPRITE = `<svg class="svg-sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
<symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 22c4 0 7-2.8 7-6.7 0-3.2-2.1-5.5-4.2-7.8.1 2.1-1.1 3.8-2.7 4.8.3-3-1.1-5.4-3.2-7.1.2 3.6-4.8 5.1-4.8 10.1C4.1 19.2 7.4 22 12 22Z" fill="currentColor" stroke="none"/><path d="M12 22c1.9 0 3.4-1.3 3.4-3.2 0-1.4-1-2.6-2.1-3.7 0 1.1-.6 2-1.5 2.7.1-1.6-.6-2.7-1.6-3.6.1 1.9-2.4 2.8-2.4 5C7.8 20.8 9.6 22 12 22Z" fill="var(--surface)" stroke="none"/></symbol>
<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></symbol>
<symbol id="i-book" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21.5zM20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5a2.5 2.5 0 0 1 2.5 2.5z"/></symbol>
<symbol id="i-palette" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 2-2 0-1.5-1.3-1.8-1.3-3 0-1 .8-1.6 1.8-1.6H17a4 4 0 0 0 4-4C21 6.2 17 3 12 3Z"/><circle cx="7.5" cy="11" r="1.1" fill="currentColor"/><circle cx="10" cy="7" r="1.1" fill="currentColor"/><circle cx="15" cy="7" r="1.1" fill="currentColor"/></symbol>
<symbol id="i-settings" viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/></symbol>
<symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
<symbol id="i-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
<symbol id="i-chevron-left" viewBox="0 0 24 24"><path d="m14.5 5-7 7 7 7"/></symbol>
<symbol id="i-chevron-right" viewBox="0 0 24 24"><path d="m9.5 5 7 7-7 7"/></symbol>
<symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
<symbol id="i-arrow-left" viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></symbol>
<symbol id="i-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
<symbol id="i-image" viewBox="0 0 24 24"><rect x="3.5" y="4" width="17" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.4"/><path d="m4 17 5-5 3.5 3 2.5-2.5L20 17"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12 4.3 4.3L19 6.7"/></symbol>
<symbol id="i-list" viewBox="0 0 24 24"><path d="M8 6h12M8 12h12M8 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></symbol>
<symbol id="i-home" viewBox="0 0 24 24"><path d="M4 10.5 12 4l8 6.5V20h-5.5v-5.5h-5V20H4z"/></symbol>
<symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></symbol>
<symbol id="i-share" viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/></symbol>
<symbol id="i-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></symbol>
<symbol id="i-print" viewBox="0 0 24 24"><path d="M7 9V4h10v5M7 17H5a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 5 9h14a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 19 17h-2"/><rect x="7" y="14" width="10" height="6" rx="1"/></symbol>
<symbol id="i-keyboard" viewBox="0 0 24 24"><rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M9.5 10h.01M13 10h.01M16.5 10h.01M7.5 14h9"/></symbol>
<symbol id="i-download" viewBox="0 0 24 24"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></symbol>
<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></symbol>
<symbol id="i-focus" viewBox="0 0 24 24"><path d="M8.5 4H4v4.5M15.5 4H20v4.5M20 15.5V20h-4.5M4 15.5V20h4.5"/></symbol>
</svg>`;

/* ---------- chrome ---------- */
const NAV = [
  { page: "home", href: "#/", label: "मुख्यपृष्ठ", short: "मुख्य", icon: "i-home" },
  { page: "collection", href: "#/collection", label: "संग्रह", short: "संग्रह", icon: "i-book" },
  { page: "about", href: "#/about", label: "माहिती", short: "माहिती", icon: "i-info" }
];

function headerHTML(page) {
  return `<header class="site-header" id="siteHeader">
    <a class="brand" href="#/" aria-label="आराधना — मुख्यपृष्ठ"><img class="brand-mark" src="./assets/icons/website_icon.svg" alt="" width="36" height="36" /><span>आराधना</span></a>
    <nav class="site-nav" aria-label="मुख्य">${NAV.map((n) => `<a href="${n.href}" data-nav="${n.page}">${n.label}</a>`).join("")}</nav>
    <div class="site-header-actions">
      <button class="chip-button header-session" type="button" data-ui="open-session"><svg><use href="#i-list"></use></svg><span>वाचन सत्र</span></button>
      <div class="theme-anchor">
        <button class="theme-trigger" type="button" data-ui="toggle-theme-panel" aria-expanded="false" aria-controls="themePanel" aria-label="रंगसंगती निवडा">
          <span class="theme-trigger-swatch" aria-hidden="true"></span><span class="theme-trigger-label" data-theme-name></span>
        </button>
      </div>
    </div>
  </header>`;
}

function chromeExtrasHTML(page, withTabs) {
  const tabs = withTabs ? `<nav class="tab-bar" aria-label="मुख्य">
      ${NAV.slice(0, 2).map((n) => `<a class="tab" href="${n.href}" data-nav="${n.page}"><svg><use href="#${n.icon}"></use></svg><span>${n.short}</span></a>`).join("")}
      <button class="tab tab-primary" type="button" data-ui="open-session"><span class="tab-primary-dot"><svg><use href="#i-list"></use></svg></span><span>सत्र</span></button>
      <button class="tab" type="button" data-ui="toggle-theme-panel" aria-controls="themePanel"><svg><use href="#i-palette"></use></svg><span>रंग</span></button>
      <a class="tab" href="${NAV[2].href}" data-nav="about"><svg><use href="#${NAV[2].icon}"></use></svg><span>${NAV[2].short}</span></a>
    </nav>` : "";
  return `${tabs}
    <div class="scrim" id="scrim" data-ui="close-overlays"></div>
    <section class="theme-panel" id="themePanel" role="dialog" aria-modal="false" aria-labelledby="themePanelTitle" aria-hidden="true">
      <div class="sheet-handle" aria-hidden="true"><span></span></div>
      <div class="theme-panel-head"><div><p class="eyebrow-text">रंगसंगती</p><h2 id="themePanelTitle">तुमचा रंग निवडा</h2></div><button class="icon-button" type="button" data-ui="close-overlays" aria-label="बंद करा"><svg><use href="#i-close"></use></svg></button></div>
      <div class="theme-list">${themeOptionsHTML()}</div>
      <p class="theme-panel-note">निवड या उपकरणावर जतन होते आणि सर्व पानांवर लागू होते.</p>
    </section>
    <div id="toast" class="toast" role="status" aria-live="polite" aria-atomic="true"></div>
    <dialog id="sessionDialog" class="dialog session-dialog" aria-labelledby="sessionDialogTitle">
      <div class="dialog-head">
        <div><p class="eyebrow-text">वाचन सत्र</p><h2 id="sessionDialogTitle">तुमचा क्रम निवडा</h2></div>
        <button class="icon-button" type="button" data-ui="close-session" aria-label="बंद करा"><svg><use href="#i-close"></use></svg></button>
      </div>
      <div class="session-body">
        <p class="session-intro">ज्या क्रमाने निवडाल, त्याच क्रमाने वाचन एकामागोमाग उघडेल.</p>
        <div class="session-toolbar">
          <span id="sessionCount">० निवडले</span>
          <div><button class="text-button" type="button" data-ui="session-all">सर्व</button><button class="text-button" type="button" data-ui="session-clear">साफ करा</button></div>
        </div>
        <div id="sessionList" class="session-list"></div>
      </div>
      <div class="dialog-foot">
        <button class="button button-ghost" type="button" data-ui="close-session">रद्द करा</button>
        <button id="sessionStart" class="button button-primary" type="button" data-ui="session-start" disabled><span>सत्र सुरू करा</span><svg><use href="#i-arrow-right"></use></svg></button>
      </div>
    </dialog>`;
}

function footerHTML() {
  return `<footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand"><a class="brand brand-small" href="#/"><img class="brand-mark" src="./assets/icons/website_icon.svg" alt="" width="26" height="26" />आराधना</a><p>आरती, श्लोक आणि स्तोत्रांसाठी शांत वाचन.</p></div>
      <nav class="footer-nav" aria-label="तळटीप">${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}<button class="text-link" type="button" data-install hidden>अ‍ॅप इंस्टॉल करा</button></nav>
    </div>
    <p class="footer-legal">अक्षरे जपून, मन शांत ठेवून. · ${mrDigits(new Date().getFullYear())}</p>
  </footer>`;
}

/* ---------- overlays ---------- */
let overlayReturn = null;
function openThemePanel(trigger) {
  const panel = $("#themePanel");
  overlayReturn = trigger || document.activeElement;
  document.body.classList.add("theme-open");
  panel.setAttribute("aria-hidden", "false");
  $$('[data-ui="toggle-theme-panel"]').forEach((b) => b.setAttribute("aria-expanded", "true"));
  setTimeout(() => { const b = $('[aria-pressed="true"]', panel); if (b) b.focus({ preventScroll: true }); }, 60);
}
function closeOverlays() {
  const wasOpen = document.body.classList.contains("theme-open");
  document.body.classList.remove("theme-open");
  const tp = $("#themePanel"); if (tp) tp.setAttribute("aria-hidden", "true");
  $$('[data-ui="toggle-theme-panel"]').forEach((b) => b.setAttribute("aria-expanded", "false"));
  document.dispatchEvent(new CustomEvent("closeoverlays"));
  if (wasOpen && overlayReturn) { if (overlayReturn.focus) overlayReturn.focus({ preventScroll: true }); overlayReturn = null; }
}
function openDialog(d) { if (d.showModal) d.showModal(); else d.setAttribute("open", ""); }
function closeDialog(d) { if (d.close) d.close(); else d.removeAttribute("open"); }

/* ---------- toast ---------- */
let toastTimer;
function announce(msg) {
  const t = $("#toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2000);
}

/* ---------- session builder ---------- */
const getDraft = () => (Array.isArray(Store.read().draft) ? Store.read().draft.filter((id) => prayerById.has(id)) : []);
function renderSessionList() {
  const draft = getDraft();
  $("#sessionList").innerHTML = prayers.map((p) => {
    const pos = draft.indexOf(p.id);
    return `<label class="session-item${pos > -1 ? " is-selected" : ""}">
      <input type="checkbox" value="${p.id}"${pos > -1 ? " checked" : ""} />
      <img src="${iconFor(p)}" alt="" width="36" height="36" loading="lazy" />
      <span><b>${escapeHtml(p.title)}</b><small>${escapeHtml(p.category)}</small></span>
      <span class="session-order" aria-hidden="true">${pos > -1 ? mrDigits(pos + 1) : ""}</span>
    </label>`;
  }).join("");
  $("#sessionCount").textContent = `${mrDigits(draft.length)} निवडले`;
  $("#sessionStart").disabled = draft.length === 0;
}
function openSession() { closeOverlays(); renderSessionList(); openDialog($("#sessionDialog")); }

/* ---------- install (Android / desktop Chrome) ---------- */
let installEvent = null;
addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); installEvent = e; $$("[data-install]").forEach((b) => { b.hidden = false; }); });
addEventListener("appinstalled", () => { installEvent = null; $$("[data-install]").forEach((b) => { b.hidden = true; }); announce("आराधना इंस्टॉल झाले"); });

/* ---------- ui actions ---------- */
const UI = {
  "toggle-theme-panel": (el) => (document.body.classList.contains("theme-open") ? closeOverlays() : openThemePanel(el)),
  "close-overlays": closeOverlays,
  "open-session": openSession,
  "close-session": () => closeDialog($("#sessionDialog")),
  "session-all": () => { Store.write({ draft: prayers.map((p) => p.id) }); renderSessionList(); },
  "session-clear": () => { Store.write({ draft: [] }); renderSessionList(); },
  "session-start": () => { const d = getDraft(); if (!d.length) return; closeDialog($("#sessionDialog")); location.hash = readUrl(d[0], d); }
};

function mountChrome({ page, header = true, footer = true, tabs = true } = {}) {
  document.body.insertAdjacentHTML("afterbegin", SPRITE + (header ? headerHTML(page) : ""));
  const pageEnd = $("#pageEnd"); if (footer && pageEnd) pageEnd.insertAdjacentHTML("beforebegin", footerHTML());
  document.body.insertAdjacentHTML("beforeend", chromeExtrasHTML(page, tabs));
  if (tabs) document.body.classList.add("has-tabs");
  setThemeAttr(currentThemeId());

  document.addEventListener("click", (e) => {
    const ui = e.target.closest("[data-ui]");
    if (ui) { if (UI[ui.dataset.ui]) UI[ui.dataset.ui](ui); return; }
    const th = e.target.closest("[data-theme-id]");
    if (th) { applyTheme(th.dataset.themeId, th); return; }
    const inst = e.target.closest("[data-install]");
    if (inst && installEvent) { installEvent.prompt(); installEvent.userChoice.finally(() => { installEvent = null; }); }
  });
  $("#sessionList").addEventListener("change", (e) => {
    const id = e.target.value;
    const draft = getDraft();
    Store.write({ draft: e.target.checked ? [...draft, id] : draft.filter((x) => x !== id) });
    renderSessionList();
    const box = $(`#sessionList input[value="${id}"]`); if (box) box.focus();
  });
  $$(".dialog").forEach((d) => d.addEventListener("click", (e) => { if (e.target === d) closeDialog(d); }));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("theme-open")) closeOverlays(); });

  const headerEl = $("#siteHeader");
  if (headerEl) {
    const onScroll = () => headerEl.classList.toggle("is-scrolled", scrollY > 6);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
  }
}

function setActiveNav(page) {
  $$("[data-nav]").forEach((a) => { if (a.dataset.nav === page) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
}
