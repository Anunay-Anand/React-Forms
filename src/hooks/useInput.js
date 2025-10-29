import { useState } from "react";

export function useInput(defaultValue, validationFunc) {
    let [enteredValue, setEnteredValue] = useState(defaultValue);
    let [ isTouched, setIsTouched ] = useState(false);

    function handleInputChange(event) {
        setEnteredValue(event.target.value);
        setIsTouched(false);
    }

    function handleInputBlur() {
        setIsTouched(true);
    }

    return {
        value: enteredValue,
        isTouched,
        handleInputChange,
        handleInputBlur,
        hasError: isTouched && !validationFunc(enteredValue)
    }
};