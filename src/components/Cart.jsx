import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { KartContext } from "../store/kart-ctx";

import { UserProgressContext } from "../store/UserProgressContext";
import Modal from "./UI/Modal";

export const Cart = () => {
  const { items, updateQtyInCart, totalPrice } = useContext(KartContext);
  const { KONSTANTS, userProgress, hideKart, showCheckout } = useContext(
    UserProgressContext
  );



  let modalActions = (
    <button className="text-button" onClick={hideKart}>
      Close
    </button>
  );

  if (items.length > 0) {
    modalActions = (
      <>
        <button className="text-button" onClick={hideKart}>
          Close
        </button>
        <button className="button" onClick={showCheckout}>
          Checkout
        </button>
      </>
    );
  }

  return (
    <Modal
      open={userProgress === KONSTANTS.KART}
      onClose={userProgress === KONSTANTS.KART ? hideKart : null}
    >
      <div className="cart">
        <h2>Zhiz iz Zhe Kart!</h2>
        <ul>
          {items.map((i) => {
            return (
              <CartItem updateQtyInCart={updateQtyInCart} key={i.id} item={i} />
            );
          })}
        </ul>
        {/*Math.round(totalPrice(items) * 100) / 100*/}
        <span>Total price: {totalPrice(items)}</span>
        <p className="modal-actions">{modalActions}</p>
      </div>
    </Modal>
  );
};
