const CACHE_NAME = "chime-cache-v1";

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    event.respondWith(
        fetch(event.request).then((response) => {
            return caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, response.clone());
                return response;
            })
        }).catch(() => {
            return caches.match(event.request).then((response) => {
                return response || caches.match("offline.html");
            });
        })
    );
});