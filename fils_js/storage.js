const KEY = "tasks";

export function getData() {
    if (localStorage.getItem(KEY)) {
        return JSON.parse(localStorage.getItem(KEY));
    } else {
        return [];
    }
}

export function saveData(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
}

