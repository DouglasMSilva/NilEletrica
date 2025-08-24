const CACHE_NAME = "nil-eletrica-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/NilEletrica.PNG"
];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativação do Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Interceptando requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
