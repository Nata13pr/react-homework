import {useEffect} from 'react';

const useStorage = (value: any) => {
    useEffect(() => {
        localStorage.setItem('key', value);
    }, []);
    return value;
}
export default useStorage;