import React, { useContext, useState } from "react";
import { KartContext } from "../store/kart-ctx";
import Input from "./UI/Input";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/UserProgressContext";
import { postOrder } from "../http.js";

const fieldIsNull = (field) => field === null;
const fieldIsEmpty = (field) => field.trim() === "";
const isValidField = (field) => !fieldIsEmpty(field) && !fieldIsNull(field);
const isValidEmail = (email) => isValidField(email) && email.includes("@");

export const Checkout = () => {
  const { KONSTANTS, userProgress, hideCheckout } = useContext(
    UserProgressContext
  );

  const { items, totalPrice, refreshCtx } = useContext(KartContext);

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }
    try{
      const response = await postOrder(items, customerData)
      console.log(response)
      hideCheckout()
      refreshCtx()
    }catch(error){
      console.log(JSON.stringify(error.message))
    }
    
  }

  let actions = (
    <>
      <button type="submit" className="button">
        Checkout
      </button>
      <button type="button" className="text-button" onClick={hideCheckout}>
        Close
      </button>
    </>
  );

  return (
    <Modal
      open={userProgress === KONSTANTS.CHECKOUT}
      onClose={userProgress === KONSTANTS.CHECKOUT ? hideCheckout : null}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: {totalPrice(items)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};
