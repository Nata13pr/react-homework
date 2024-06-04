export * from "./auth.helpers";

const retriveLocalStorage = <T, >(key: string) => {
    const pairJSON = localStorage.getItem(key) || ''
    const pair = JSON.parse(pairJSON);

    if (!pairJSON) {
        return {} as T;
    }
    return pair as T;
}

export {
    retriveLocalStorage
}