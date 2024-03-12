import React, { useContext, useState } from "react";
import { KartContext } from "../store/kart-ctx";
import { Input } from "./Input";
import { useInput } from "../hooks/useInput";

const fieldIsNull = (field) => field === null;
const fieldIsEmpty = (field) => field.trim() === "";
const isValidField = (field) => !fieldIsEmpty(field) && !fieldIsNull(field);
const isValidEmail = (email) => isValidField(email) && email.includes("@");

export const KustomerForm = () => {
  const {
    enteredValue: enteredName,
    handleInputBlur: handleInputNameBlur,
    handleValueChange: handleValueNameChange,
    valueIsValid: nameIsValid,
  } = useInput("", (f) => isValidField(f));
  const {
    enteredValue: enteredStreet,
    handleInputBlur: handleInputStreetBlur,
    handleValueChange: handleValueStreetChange,
    valueIsValid: streetIsValid,
  } = useInput("", (f) => isValidField(f));
  const {
    enteredValue: enteredPostal,
    handleInputBlur: handleInputPostalBlur,
    handleValueChange: handleValuePostalChange,
    valueIsValid: postalIsValid,
  } = useInput("", (f) => isValidField(f));
  const {
    enteredValue: enteredCity,
    handleInputBlur: handleInputCityBlur,
    handleValueChange: handleValueCityChange,
    valueIsValid: cityIsValid,
  } = useInput("", (f) => isValidField(f));
  const {
    enteredValue: enteredEmail,
    handleInputBlur: handleInputEmailBlur,
    handleValueChange: handleValueEmailChange,
    valueIsValid: emailIsValid,
  } = useInput("", (f) => isValidEmail(f));

  const { loadKustomer } = useContext(KartContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("CUSTOMER SUBMITTED");
    const enteredValues = {
      email: enteredEmail,
      name: enteredName,
      street: enteredStreet,
      "postal-code": enteredPostal,
      city: enteredCity,
    };
    console.log(JSON.stringify(enteredValues));
    loadKustomer(enteredValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>
      <Input
        id="name"
        type="text"
        name="name"
        htmlForTag="name"
        onBlur={handleInputNameBlur}
        onChange={handleValueNameChange}
        value={enteredName}
        fieldIsInvalid={!nameIsValid && "Please check the entered Name"}
        label="Name"
      />
      <Input
        id="email"
        type="email"
        name="email"
        htmlForTag="email"
        onBlur={handleInputEmailBlur}
        onChange={handleValueEmailChange}
        value={enteredEmail}
        fieldIsInvalid={!emailIsValid && "Please check the entered email"}
        label="Email"
      />
      <Input
        id="street"
        type="text"
        name="street"
        htmlForTag="street"
        onBlur={handleInputStreetBlur}
        onChange={handleValueStreetChange}
        value={enteredStreet}
        fieldIsInvalid={!streetIsValid && "Please check the entered street"}
        label="Street"
      />
      <Input
        id="postal-code"
        type="text"
        name="postal-code"
        htmlForTag="postal-code"
        onBlur={handleInputPostalBlur}
        onChange={handleValuePostalChange}
        value={enteredPostal}
        fieldIsInvalid={
          !postalIsValid && "Please check the entered postal Code"
        }
        label="Postal Code"
      />
      <Input
        id="city"
        type="text"
        name="city"
        htmlForTag="city"
        onBlur={handleInputCityBlur}
        onChange={handleValueCityChange}
        value={enteredCity}
        fieldIsInvalid={!cityIsValid && "Please check the entered city"}
        label="City"
      />
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
};
