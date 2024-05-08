import {useState} from 'react';

const useToggle=(initialValue:boolean)=>{
    const [value,setValue]=useState(initialValue);

    function toggleValue(valueState:boolean){
        setValue(prevValue=>!valueState)
    }
    return [value,toggleValue]
}
export  default useToggle;