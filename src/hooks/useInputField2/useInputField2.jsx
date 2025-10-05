import { useState } from "react";


// custom hook's name must be starts in 'use' like 'useInput'
const useInputField2 = (defaultValue = '') => {

    const [inputFieldValue, setInputFieldValue] = useState(defaultValue);

    const handleInputFieldOnChange = e => {
        setInputFieldValue(e.target.value);
        console.log(e.target.value);
    }

    return { defaultValue: inputFieldValue, onChange: handleInputFieldOnChange };
}

export default useInputField2;