// Installera service workern och cacha resurser
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ullevi-tk-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/mnt/data/ullevitk_logo.png'
        // Lägg till fler resurser här som CSS, bilder etc.
      ]);
    })
  );
});

// Hantera nätverksförfrågningar och använd cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
