import {useRef} from 'react';

const usePrevious = <T,>(value: T):T | undefined => {
    const currentRef = useRef<T>(value);
    const previousRef = useRef<T | undefined>();

if(currentRef.current !==value){
    previousRef.current=currentRef.current;
}
return previousRef.current;
}
 export default usePrevious;
