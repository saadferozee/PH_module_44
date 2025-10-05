import { useState } from "react";


// custom hook's name must be starts in 'use' like 'useInput'
const useInputField = (defaultValue = '') => {

    const [inputFieldValue, setInputFieldValue] = useState(defaultValue);

    const handleInputFieldOnChange = e => {
        setInputFieldValue(e.target.value);
        console.log(e.target.value);
    }

    return [ inputFieldValue, handleInputFieldOnChange ];
}

export default useInputField;