import { cacheNames } from 'workbox-core';

self.addEventListener('install', (event) => {
  const urls = [/* ... */];
  const cacheName = cacheNames.runtime;
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(urls)));
});
