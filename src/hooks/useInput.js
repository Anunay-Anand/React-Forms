export function useInput(defaultValue) {
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
        handleInputBlur
    }
};