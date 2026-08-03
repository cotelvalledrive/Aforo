const CACHE_NAME = 'aforo-yolo-v3';
const APP_ASSETS = [
  './',
  './app_aforo_yolo.html',
  './probar_modelo.html',
  './manifest.webmanifest',
  './yolov8n_best_web_model/model.json',
  './yolov8n_best_web_model/group1-shard1of3.bin',
  './yolov8n_best_web_model/group1-shard2of3.bin',
  './yolov8n_best_web_model/group1-shard3of3.bin',
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.15.0/dist/tf.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
