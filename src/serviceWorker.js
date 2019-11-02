
export function register(){
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register(`/serviceWorker.js`)
        .then((reg) => {
            console.log("ㅉㄷㄱ퍛ㄷ 재갇ㄱ ㄱㄷ햔ㅅㄷㄱㄷㅇ", reg)
        });
    };
}