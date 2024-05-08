import {useState} from 'react';

const useToggle = (initialValue: boolean):[boolean,(value:boolean)=>void] => {
    const [value, setValue] = useState<boolean>(initialValue);

    function toggleValue(valueState: boolean) {
        setValue(prevValue =>
            !prevValue
        )
    }

    return [value, toggleValue]
}
export default useToggle;
