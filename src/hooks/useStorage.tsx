import {useState,useEffect} from 'react';



const useStorage=(key,localStorageObject, defaultValue)=>{

    const [value,setValue]=useState(()=>{
        let jsonValue=localStorageObject.getItem(key);
        if(jsonValue!==null) return JSON.parse(jsonValue);

        if(typeof defaultValue==='function'){
            return defaultValue();
        }else{
            return defaultValue;
        }
    })

    useEffect(() => {
if(value===undefined)return localStorageObject.removeItem(key);
localStorageObject.setItem(key,JSON.stringify(value));
    }, [key,value,localStorageObject]);

    return [value,setValue]
}
useStorage('sss','dddd',localStorage)