const CACHE_NAME = "app-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Use relative URLs so scope works under subpaths (e.g., /proscan/)
      return cache.addAll(["./", "./index.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
