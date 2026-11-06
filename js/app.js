/* ==========================================================================
   आराधना — screens + in-app router (everything stays in one tab)
   Routes:  #/  ·  #/collection?c=…  ·  #/about  ·  #/read/<id>?s=a,b,c
   ========================================================================== */
mountChrome({ page: "home" });

const DEFAULTS = { fontSize: 28, spacing: 1.8 };
const FONT_MIN = 20, FONT_MAX = 48;
const DAY_NAMES = ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
const DAY_PRAYER = ["khandoba", "mahadev", "ganapati", "vyankatesh", "datta", "mahalaxmi", "maruti"];
const CATEGORY_NOTE = { "आरती": "पूजेनंतर म्हणायच्या आरत्या", "श्लोक": "संस्कृत पठणासाठी", "स्तोत्र": "नमन आणि नामस्मरण" };
const TITLES = { home: "आराधना | आरती आणि श्लोक", collection: "संग्रह | आराधना", about: "माहिती | आराधना" };

const saved = Store.read();
const state = {
  view: null,
  filter: "सर्व",
  active: prayers[0].id,
  session: [],
  fontSize: clamp(Number(saved.fontSize) || DEFAULTS.fontSize, FONT_MIN, FONT_MAX),
  spacing: clamp(Number(saved.spacing) || DEFAULTS.spacing, 1.45, 2.2),
  libraryCollapsed: Boolean(saved.libraryCollapsed),
  wake: Boolean(saved.wake),
  focus: false
};

/* ==========================================================================
   Router
   ========================================================================== */
function parseHash() {
  const raw = location.hash.replace(/^#/, "") || "/";
  const [path, query = ""] = raw.split("?");
  const params = new URLSearchParams(query);
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "read" && prayerById.has(decodeURIComponent(parts[1] || ""))) {
    const id = decodeURIComponent(parts[1]);
    const s = (params.get("s") || "").split(",").map(decodeURIComponent).filter((x) => prayerById.has(x));
    return { view: "read", id, session: s.includes(id) ? s : [] };
  }
  if (parts[0] === "collection") return { view: "collection", c: params.get("c") };
  if (parts[0] === "about") return { view: "about" };
  return { view: "home" };
}

function route() {
  const r = parseHash();
  const prev = state.view;
  closeOverlays();
  closePanels();
  if ($("#sourceDialog").open) closeDialog($("#sourceDialog"));

  const swap = () => {
    state.view = r.view;
    const reading = r.view === "read";
    document.body.classList.toggle("is-reading", reading);
    $("#appShell").hidden = !reading;
    $$(".view").forEach((v) => { v.hidden = v.dataset.view !== r.view; });
    setActiveNav(reading ? "" : r.view);
    if (r.view === "home") renderHome();
    else if (r.view === "collection") renderCollectionView(r.c);
    else if (r.view === "about") document.title = TITLES.about;
    else openReading(r.id, r.session, prev === "read");
    if (!reading) { setFocusMode(false, true); releaseWake(); document.title = TITLES[r.view]; }
  };

  const sameReader = prev === "read" && r.view === "read";
  if (prev && !sameReader && document.startViewTransition && !reducedMotion()) document.startViewTransition(swap);
  else swap();

  if (!sameReader) {
    window.scrollTo({ top: 0, behavior: "auto" });
    if (prev) (r.view === "read" ? $("#readingText") : $("#main")).focus({ preventScroll: true });
  }
}

/* ==========================================================================
   Home
   ========================================================================== */
function renderHome() {
  $("#heroCount").textContent = `${mrDigits(prayers.length)} आरती, श्लोक व स्तोत्रे`;
  const last = prayerById.get(Store.read().lastRead);
  const card = $("#resumeCard");
  card.hidden = !last;
  if (last) { card.href = readUrl(last.id); $("#resumeTitle").textContent = last.title; $("#resumeIcon").src = iconFor(last); }

  const day = new Date().getDay();
  const today = prayerById.get(DAY_PRAYER[day]) || prayers[0];
  $("#todayDay").textContent = DAY_NAMES[day];
  $("#todayCard").href = readUrl(today.id);
  $("#todayName").textContent = today.title;
  $("#todaySub").textContent = today.subtitle;
  $("#todayIcon").src = iconFor(today);

  $("#categoryGrid").innerHTML = CATEGORIES.map((c) => {
    const items = prayers.filter((p) => p.category === c);
    return `<a class="category-tile" href="#/collection?c=${encodeURIComponent(c)}">
      <img src="${iconFor(items[0])}" alt="" width="52" height="52" />
      <span class="category-copy"><b>${escapeHtml(c)}</b><small>${CATEGORY_NOTE[c] || ""}</small></span>
      <span class="category-count">${mrDigits(items.length)}</span>
    </a>`;
  }).join("");

  const grid = $(".theme-list-grid");
  if (!grid.childElementCount) grid.innerHTML = themeOptionsHTML();
  setThemeAttr(currentThemeId());
}

/* ==========================================================================
   Collection
   ========================================================================== */
function renderCollectionView(c) {
  state.filter = c && CATEGORIES.includes(c) ? c : "सर्व";
  renderFilters();
  renderCollection();
}
function renderFilters() {
  $("#filterChips").innerHTML = ["सर्व", ...CATEGORIES].map((c) => {
    const n = c === "सर्व" ? prayers.length : prayers.filter((p) => p.category === c).length;
    return `<button class="filter-chip" type="button" role="tab" aria-selected="${c === state.filter}" data-filter="${escapeHtml(c)}">${escapeHtml(c)}<small>${mrDigits(n)}</small></button>`;
  }).join("");
}
function renderCollection() {
  const term = $("#collectionSearch").value.trim().toLowerCase();
  const list = prayers.filter((p) => (state.filter === "सर्व" || p.category === state.filter) && matchesTerm(p, term));
  $("#resultCount").textContent = term || state.filter !== "सर्व" ? `${mrDigits(list.length)} वाचने सापडली` : "";
  $("#collectionList").innerHTML = list.length ? list.map((p) => `
    <li><a class="collection-item" href="${readUrl(p.id)}">
      <img src="${iconFor(p)}" alt="" width="48" height="48" loading="lazy" />
      <span class="item-copy"><b>${escapeHtml(p.title)}</b><small>${escapeHtml(p.subtitle)}</small></span>
      <span class="item-meta"><span>${escapeHtml(p.category)} · ${mrDigits(p.verses.length)} कडवी</span><svg aria-hidden="true"><use href="#i-chevron-right"></use></svg></span>
    </a></li>`).join("") : `<li class="empty-state"><b>काहीही सापडले नाही</b><span>“${escapeHtml(term)}” ऐवजी दुसरा शब्द वापरून पाहा.</span></li>`;
}

/* ==========================================================================
   Reader
   ========================================================================== */
const activePrayer = () => prayerById.get(state.active) || prayers[0];
const sequence = () => (state.session.length ? state.session : prayers.map((p) => p.id));

function openReading(id, session, wasReading) {
  state.active = id;
  state.session = session;
  Store.write({ lastRead: id });
  renderReader(wasReading);
  if (state.wake) requestWake();
}

function renderReader(animate) {
  const p = activePrayer();
  const seq = sequence();
  const idx = seq.indexOf(p.id);
  document.title = `${p.title} | आराधना`;
  $("#crumbText").textContent = `${p.category} · ${p.title}`;
  $("#categoryText").textContent = p.category;
  $("#categoryIcon").src = iconFor(p);
  $("#titleText").textContent = p.title;
  $("#subtitleText").textContent = p.subtitle;
  const reading = $("#readingText");
  reading.className = `reading-text ${p.layout || ""}`;
  reading.innerHTML = p.verses.map((v) => `<p class="verse${/धृ|ध्रु/.test(v) ? " refrain" : ""}">${escapeHtml(v)}</p>`).join("");

  $("#readingCount").textContent = `${mrDigits(idx + 1)} / ${mrDigits(seq.length)}`;
  $("#previousButton").disabled = idx <= 0;
  $("#nextButton").disabled = idx >= seq.length - 1;
  const next = prayerById.get(seq[idx + 1]);
  $("#nextUpCard").hidden = !next;
  if (next) { $("#nextUpTitle").textContent = next.title; $("#nextUpCard").href = readUrl(next.id, state.session); }

  $("#sessionBanner").classList.toggle("is-visible", state.session.length > 0);
  if (state.session.length) $("#sessionBannerText").textContent = `${mrDigits(idx + 1)} पैकी ${mrDigits(seq.length)} · ${next ? `पुढे: ${next.title}` : "हे शेवटचे वाचन"}`;

  $("#sourceButton span").textContent = p.sourceType === "pdf" ? "मूळ PDF" : p.sourceType === "text" ? "मूळ प्रत" : "मूळ प्रतिमा";
  $("#sourceButton use").setAttribute("href", p.sourceType ? "#i-book" : "#i-image");

  renderLibrary();
  updateProgress();
  if (animate && !reducedMotion()) {
    const stage = $(".reader-stage");
    stage.classList.remove("is-entering");
    void stage.offsetWidth;
    stage.classList.add("is-entering");
    window.scrollTo({ top: 0, behavior: "auto" });
  }
}

function renderLibrary() {
  const term = $("#librarySearch").value.trim().toLowerCase();
  const inSession = state.session.length > 0 && !term;
  const ids = inSession ? state.session : prayers.filter((p) => matchesTerm(p, term)).map((p) => p.id);
  $("#libraryLabel").textContent = inSession ? `वाचन सत्र · ${mrDigits(state.session.length)}` : "संपूर्ण संग्रह";
  $("#libraryList").innerHTML = ids.length ? ids.map((id, i) => {
    const p = prayerById.get(id);
    const on = id === state.active;
    return `<a class="library-item${on ? " is-active" : ""}" href="${readUrl(id, inSession ? state.session : null)}"${on ? ' aria-current="page"' : ""}>
      <img src="${iconFor(p)}" alt="" width="34" height="34" loading="lazy" />
      <span><b>${escapeHtml(p.title)}</b><small>${inSession ? `${mrDigits(i + 1)} · ` : ""}${escapeHtml(p.category)}</small></span>
    </a>`;
  }).join("") : `<p class="empty-state">काहीही सापडले नाही.</p>`;
}

function step(dir) {
  const seq = sequence();
  const nextId = seq[seq.indexOf(state.active) + dir];
  if (nextId) location.hash = readUrl(nextId, state.session);
}

function updateProgress() {
  if (state.view !== "read") return;
  const max = document.documentElement.scrollHeight - innerHeight;
  $("#progressBar").style.transform = `scaleX(${max > 0 ? clamp(scrollY / max, 0, 1) : 1})`;
}

/* ---------- reader settings ---------- */
function applyReaderSettings() {
  const root = document.documentElement;
  root.style.setProperty("--font-size", `${state.fontSize}px`);
  root.style.setProperty("--line-height", String(state.spacing));
  document.body.classList.toggle("library-collapsed", state.libraryCollapsed);
  $("#fontOutput").textContent = `${mrDigits(state.fontSize)}px`;
  $("#fontRange").value = state.fontSize;
  $("#spacingOutput").textContent = mrDigits(state.spacing.toFixed(2).replace(/0$/, ""));
  $("#spacingRange").value = state.spacing;
  const lt = $("#libraryToggle");
  lt.setAttribute("aria-expanded", String(!state.libraryCollapsed));
  lt.querySelector("span").textContent = state.libraryCollapsed ? "संग्रह दाखवा" : "संग्रह लपवा";
  $("#wakeToggle").setAttribute("aria-checked", String(state.wake));
  Store.write({ fontSize: state.fontSize, spacing: state.spacing, libraryCollapsed: state.libraryCollapsed, wake: state.wake });
}
function setFont(v, say) { state.fontSize = clamp(Math.round(Number(v) || DEFAULTS.fontSize), FONT_MIN, FONT_MAX); applyReaderSettings(); if (say) announce(`अक्षर आकार ${mrDigits(state.fontSize)}px`); }

let panelReturn = null;
function openPanel(name) {
  closeOverlays();
  panelReturn = document.activeElement;
  document.body.classList.add(`${name}-open`);
  setTimeout(() => $(name === "library" ? "#librarySearch" : "#settingsPanel .settings-close")?.focus({ preventScroll: true }), 60);
}
function closePanels() {
  const open = document.body.classList.contains("library-open") || document.body.classList.contains("settings-open");
  document.body.classList.remove("library-open", "settings-open");
  if (open && panelReturn) { panelReturn.focus?.({ preventScroll: true }); panelReturn = null; }
}
document.addEventListener("closeoverlays", () => document.body.classList.remove("library-open", "settings-open"));

function setFocusMode(on, quiet) {
  state.focus = on;
  document.body.classList.toggle("focus-mode", on);
  $("#focusToggle").setAttribute("aria-checked", String(on));
  if (on) closePanels();
  if (!quiet) announce(on ? "एकाग्र वाचन सुरू" : "एकाग्र वाचन बंद");
}

/* ---------- wake lock ---------- */
let wakeLock = null;
async function requestWake() {
  if (!("wakeLock" in navigator) || state.view !== "read" || wakeLock) return;
  try { wakeLock = await navigator.wakeLock.request("screen"); wakeLock.addEventListener("release", () => { wakeLock = null; }); } catch { /* denied */ }
}
function releaseWake() { if (wakeLock) wakeLock.release(); wakeLock = null; }
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible" && state.wake) requestWake(); });

/* ---------- source / copy / share ---------- */
function showSource() {
  const p = activePrayer();
  const image = $("#sourceImage"), pdf = $("#sourcePdf"), text = $("#sourceText");
  const type = p.sourceType || "image";
  image.style.display = type === "image" ? "block" : "none";
  pdf.style.display = type === "pdf" ? "block" : "none";
  text.style.display = type === "text" ? "block" : "none";
  if (type === "pdf") pdf.data = encodeURI(`./${p.sourceFile || p.source}`);
  else if (type === "text") text.textContent = p.sourceText || p.source;
  else { image.src = encodeURI(`./${p.source}`); image.alt = `${p.title} — मूळ प्रतिमा`; }
  $("#sourceDialogTitle").textContent = p.title;
  $("#sourceDescription").textContent = "दिलेल्या संग्रहातील मूळ प्रत. वाचनातील मजकूर याच प्रतीवरून घेतला आहे.";
  openDialog($("#sourceDialog"));
}
async function copyText(text, ok) {
  try { await navigator.clipboard.writeText(text); announce(ok); }
  catch {
    const ta = Object.assign(document.createElement("textarea"), { value: text });
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.append(ta); ta.select();
    try { document.execCommand("copy"); announce(ok); } catch { announce("कॉपी करता आले नाही"); }
    ta.remove();
  }
}
async function share() {
  const p = activePrayer();
  const url = `${location.origin}${location.pathname}${readUrl(p.id)}`;
  if (navigator.share) { try { await navigator.share({ title: p.title, text: `${p.title} — आराधना`, url }); } catch { /* cancelled */ } }
  else copyText(url, "दुवा कॉपी केला");
}

/* ---------- actions ---------- */
const actions = {
  "open-library": () => openPanel("library"),
  "close-library": closePanels,
  "toggle-library": () => { state.libraryCollapsed = !state.libraryCollapsed; applyReaderSettings(); },
  "open-settings": () => openPanel("settings"),
  "close-settings": closePanels,
  "close-panels": closePanels,
  "previous": () => step(-1),
  "next": () => step(1),
  "font-down": () => setFont(state.fontSize - 2, true),
  "font-up": () => setFont(state.fontSize + 2, true),
  "toggle-focus": () => setFocusMode(!state.focus),
  "exit-focus": () => setFocusMode(false),
  "toggle-wake": () => {
    state.wake = !state.wake;
    applyReaderSettings();
    if (state.wake) requestWake(); else releaseWake();
    announce(state.wake ? "वाचताना स्क्रीन चालू राहील" : "स्क्रीन नेहमीप्रमाणे");
  },
  "open-source": showSource,
  "close-source": () => closeDialog($("#sourceDialog")),
  "end-session": () => { location.hash = readUrl(state.active); announce("सत्र संपले"); },
  "copy": () => { const p = activePrayer(); copyText(`${p.title}\n\n${p.verses.join("\n\n")}`, "मजकूर कॉपी केला"); },
  "share": share,
  "print": () => { closePanels(); setTimeout(() => window.print(), 80); },
  "reset-settings": () => { Object.assign(state, DEFAULTS); applyReaderSettings(); announce("मूळ अक्षर सेटिंग्ज परत आल्या"); }
};

/* ==========================================================================
   Events
   ========================================================================== */
document.addEventListener("click", (e) => {
  const act = e.target.closest("[data-action]");
  if (act) { actions[act.dataset.action]?.(); return; }
  const f = e.target.closest("[data-filter]");
  if (f) {
    state.filter = f.dataset.filter;
    history.replaceState(null, "", state.filter === "सर्व" ? "#/collection" : `#/collection?c=${encodeURIComponent(state.filter)}`);
    renderFilters(); renderCollection();
    return;
  }
  const jump = e.target.closest("[data-jump]");
  if (jump) { e.preventDefault(); document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" }); }
});

$("#collectionSearch").addEventListener("input", renderCollection);
$("#librarySearch").addEventListener("input", renderLibrary);
$("#fontRange").addEventListener("input", (e) => setFont(e.target.value));
$("#spacingRange").addEventListener("input", (e) => { state.spacing = clamp(Number(e.target.value), 1.45, 2.2); applyReaderSettings(); });
addEventListener("hashchange", route);
addEventListener("scroll", updateProgress, { passive: true });
addEventListener("resize", updateProgress, { passive: true });

document.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const t = e.target;
  const typing = (t.tagName === "INPUT" && !["range", "checkbox"].includes(t.type)) || t.tagName === "TEXTAREA";
  if (e.key === "Escape") {
    if (document.body.classList.contains("library-open") || document.body.classList.contains("settings-open")) closePanels();
    else if (state.focus) setFocusMode(false);
    return;
  }
  if (typing || document.querySelector("dialog[open]")) return;
  if (e.key === "/") {
    e.preventDefault();
    if (state.view === "read") {
      if (innerWidth <= 860) openPanel("library");
      else { if (state.libraryCollapsed) actions["toggle-library"](); $("#librarySearch").focus(); }
    } else { location.hash = "#/collection"; setTimeout(() => $("#collectionSearch").focus(), 50); }
    return;
  }
  if (state.view !== "read") return;
  if (e.key === "ArrowRight") step(1);
  else if (e.key === "ArrowLeft") step(-1);
  else if (e.key === "+" || e.key === "=") setFont(state.fontSize + 2, true);
  else if (e.key === "-" || e.key === "_") setFont(state.fontSize - 2, true);
  else if (e.key === "f" || e.key === "F") setFocusMode(!state.focus);
});

/* Swipe between readings on touch screens (horizontal, deliberate gestures only). */
(function swipe() {
  const stage = $(".reader-stage");
  let x0 = 0, y0 = 0, t0 = 0, tracking = false;
  stage.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) { tracking = false; return; }
    tracking = true; x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now();
  }, { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (!tracking) return;
    tracking = false;
    const dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0;
    if (Date.now() - t0 < 600 && Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 2 && !getSelection().toString()) step(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

/* ==========================================================================
   Boot
   ========================================================================== */
$("#settingsThemes").innerHTML = themeOptionsHTML(true);
if (!("wakeLock" in navigator)) $("#wakeRow").hidden = true;
applyReaderSettings();
setThemeAttr(currentThemeId());
route();

(function welcome() {
  const w = $("#welcomeScreen");
  let seen = false;
  try { seen = sessionStorage.getItem("aradhana-welcome") === "1"; sessionStorage.setItem("aradhana-welcome", "1"); } catch { seen = true; }
  if (seen || reducedMotion() || state.view === "read") { w.remove(); return; }
  w.hidden = false;
  const start = performance.now();
  let done = false;
  const reveal = () => { if (done) return; done = true; setTimeout(() => { w.classList.add("is-ready"); setTimeout(() => w.remove(), 400); }, Math.max(0, 750 - (performance.now() - start))); };
  if (document.readyState === "complete") reveal(); else addEventListener("load", reveal, { once: true });
  setTimeout(reveal, 1800);
})();
