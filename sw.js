/* Offline support: network-first for pages, cache-first for static assets. */
const CACHE = "aradhana-v7";
const CORE = [
  "./",
  "./index.html",
  "./css/styles.css?v=4.3",
  "./js/data.js?v=4.3",
  "./js/common.js?v=4.3",
  "./js/app.js?v=4.3",
  "./site.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/themes/ivory/website_icon.svg",
  "./assets/icons/themes/ivory/aarti_icon.svg",
  "./assets/icons/themes/ivory/shloka_icon.svg",
  "./assets/icons/themes/ivory/mantra_icon.svg",
  "./assets/icons/themes/ivory/sandalwood_homepage_emblem_full_flower.svg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;
  if (request.mode === "navigate") {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(request.headers.get("user-agent") || "");
    if (!isMobile) {
      e.respondWith(fetch(request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put("./index.html", copy));
        return res;
      }).catch(() => caches.match("./index.html")));
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500);
    e.respondWith(fetch(request, { signal: controller.signal }).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put("./index.html", copy));
      return res;
    }).catch(() => caches.match("./index.html")).finally(() => clearTimeout(timeout)));
    return;
  }
  e.respondWith(caches.match(request).then((hit) => hit || fetch(request).then((res) => {
    if (res.ok && (new URL(request.url).origin === location.origin || request.url.includes("fonts.g"))) {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(request, copy));
    }
    return res;
  })));
});
