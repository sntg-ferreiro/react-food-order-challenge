import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { KartContext } from "../store/kart-ctx";

export const Cart = () => {
  const { items, updateQtyInCart } = useContext(KartContext);
  let totalPrice = items.length > 0 ? items.map(i => i.price * i.quantity).reduce((a,b) => a+b): 0;
  return (
    <div className="cart">
      <h2>Zhiz iz Zhe Kart!</h2>
      <ul>
        {items.map((i) => {
          return (
            <CartItem updateQtyInCart={updateQtyInCart} key={i.id} item={i} />
          );
        })}
      </ul>
      <span>Total price: {Math.round(totalPrice * 100)/100}</span>
    </div>
  );
};
