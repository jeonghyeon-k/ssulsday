    const FILES_TO_CACHE = [
        `${process.env.PUBLIC_URL}/notFound.html`
    ];
    const CACHE_NAME = `ssulsday`;
    let deferredPrompt = {};
    window.addEventListener('beforeinstallprompt', (e) => {
        // Stash the event so it can be triggered later.
        e.preventDefault();

        deferredPrompt = e || {};
    
        });
    export function register(config) {
        if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            navigator.serviceWorker
                        .register(swUrl)
                        .then((reg) => {
                            console.log("load");
                        });
        });
        }
    }
 
    window.self.addEventListener('install', (evt) => {
        console.log('[ServiceWorker] Install');
        evt.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              console.log('[ServiceWorker] Pre-caching offline page');
              return cache.addAll(FILES_TO_CACHE);
            })
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
    
export function showPrompt(){
    deferredPrompt.prompt();
    deferredPrompt.userChoice
    .then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
    } else {
        console.log('User dismissed the A2HS prompt');
    }
        deferredPrompt = null;
    });
}