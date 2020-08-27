((self: ServiceWorkerGlobalScope) => {
  self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open('airhorner').then(function (cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/app.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  });
})((self as unknown) as ServiceWorkerGlobalScope);
