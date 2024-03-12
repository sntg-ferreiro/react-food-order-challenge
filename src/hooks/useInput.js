import { useState } from "react";

export function useInput(defaultValue, validator) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = !didEdit || (didEdit && validator(enteredValue));

  function handleValueChange(event) {
    setDidEdit(false);
    setEnteredValue(event.target.value);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return { enteredValue, handleInputBlur, handleValueChange, valueIsValid };
}
