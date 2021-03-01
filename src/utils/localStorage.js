export function getLocalStorage(value) {
    return JSON.parse(localStorage.getItem(value));
}

export function setLocalStorage(value, data) {
    return localStorage.setItem(value, JSON.stringify(data));
}

export function clearLocalStorage() {
    localStorage.clear();
}
