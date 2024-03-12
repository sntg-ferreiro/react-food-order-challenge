import React, { useContext } from "react";

export const CartItem = ({ item, updateQtyInCart }) => {
  const { name, price, quantity } = item;
  const rowPrice = price * quantity;
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>Unit price: {price}</p>
      <p>Row price: {rowPrice}</p>
      <div className="cart-item-actions">
        <button onClick={() => updateQtyInCart(item.id, -1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => updateQtyInCart(item.id, 1)}>+</button>
      </div>
    </div>
  );
};
