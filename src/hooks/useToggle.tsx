import {useState, useEffect} from "react"

const useToggle = (initialValue: boolean) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(current => !current)
    }, []);
    return value
}
export default useToggle;
