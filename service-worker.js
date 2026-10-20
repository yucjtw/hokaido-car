// Keeps every built file on the phone so the pages open without signal on rural roads.
// vite.config.ts fills in the file list and a version that changes whenever any file does;
// a new version makes the browser install this worker again and download the new files.
const CACHE = 'hokaido-car-__VERSION__'
const FILES = __FILES__
// Weak signal that answers this slowly counts as offline, so the saved page shows instead.
const TIMEOUT_MS = 3000

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // 'reload' skips the HTTP cache, which may still hold the previous deploy's HTML.
      .then((cache) => cache.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      // Other sites on the same github.io origin share this cache storage, so delete only ours.
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('hokaido-car-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return
  // Pages hold the reward data, so they come from the network first to stay current;
  // other files have content hashes or change only with a new version, so saved copies are current.
  event.respondWith(request.mode === 'navigate' ? networkFirst(event) : savedFirst(request))
})

async function networkFirst(event) {
  const cache = await caches.open(CACHE)
  const network = fetch(event.request).then((response) => {
    if (response.ok) event.waitUntil(cache.put(event.request, response.clone()))
    return response
  })
  const timeout = new Promise((resolve) => setTimeout(resolve, TIMEOUT_MS))
  const first = await Promise.race([network.catch(() => undefined), timeout])
  if (first) return first
  return (await cache.match(event.request, { ignoreSearch: true })) ?? network
}

async function savedFirst(request) {
  const cache = await caches.open(CACHE)
  return (await cache.match(request)) ?? fetch(request)
}
