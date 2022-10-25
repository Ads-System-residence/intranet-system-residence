export const Storage = (key, value) => {
    if (value) {
        window.localStorage.setItem(key, value);
    } else {
        return window.localStorage.getItem(key);
    }
};

export const StorageRemove = (key) => {
    window.localStorage.removeItem(key);
};

export const UserInfo = (userInfo) => {
    if (userInfo) {
        window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
        return JSON.parse(window.localStorage.getItem("userInfo"));
    }
};