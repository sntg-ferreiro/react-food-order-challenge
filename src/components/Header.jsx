import React, { useContext } from "react";
import img from "../assets/logo.jpg";
import { useState } from "react";
import { Cart } from "./Cart";
import Modal from "./Modal";
import { KartContext } from "../store/kart-ctx";
import { postOrder } from "../http";
import { KustomerForm } from "./KustomerForm";

export const Header = () => {
  const [isOpenKart, setIsOpenKart] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const { kustomer, items, refreshCtx } = useContext(KartContext);

  const handleOpenCart = () => {
    setIsOpenKart(true);
  };

  const handleCloseCart = () => {
    setIsOpenKart(false);
  };

  const handleOpenForm = () => {
    setIsOpenForm(true);
  };

  const handleCloseForm = () => {
    setIsOpenForm(false);
  };

  async function handleCheckout() {
    console.log("CHECKOUT!");
    const response = await postOrder(items, kustomer);
    if (response) {
      refreshCtx();
    }
  }

  let modalActions = <button className="text-button">Close</button>;

  if (items.length > 0) {
    modalActions = (
      <>
        <button className="text-button">Close</button>
        <button className="text-button" onClick={handleCheckout}>
          Checkout
        </button>
      </>
    );
  }

  let modalActionsForm = <button className="text-button">Close</button>;

  return (
    <>
      <Modal open={isOpenKart} onClose={handleCloseCart} actions={modalActions}>
        <Cart />
      </Modal>
      <Modal
        open={isOpenForm}
        onClose={handleCloseForm}
        actions={modalActionsForm}
      >
        <KustomerForm />
      </Modal>

      <header id="main-header">
        <div id="title">
          <h1>The Meals App!</h1>
          <img src={img} alt="A logo of the meals" />
        </div>
        <div>
          <button className="button" onClick={handleOpenCart}>
            Open Cart
          </button>
          <button className="button" onClick={handleOpenForm}>
            Register Kustomer
          </button>
        </div>
      </header>
    </>
  );
};
