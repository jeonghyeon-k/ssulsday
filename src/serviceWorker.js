    const FILES_TO_CACHE = [
        './../public/notFound.html'
    ];
    export function register(config) {
        if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            navigator.serviceWorker
                        .register(swUrl)
                        .then((reg) => {
                            console.log("ㅉㄷㄱ퍛ㄷ 재갇ㄱ ㄱㄷ햔ㅅㄷㄱㄷㅇ", reg)
                        });
        });
        }
    }
    window.self.addEventListener('install', (evt) => {
        console.log('[ServiceWorker] Install');
        // CODELAB: Precache static resources here.
        evt.waitUntil(
            // caches.open(CACHE_NAME).then((cache) => {
            //   console.log('[ServiceWorker] Pre-caching offline page');
            //   return cache.addAll(FILES_TO_CACHE);
            // })
        );
        window.self.skipWaiting();
      });
      
    export function unregister() {
        if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
        }
    }
    
