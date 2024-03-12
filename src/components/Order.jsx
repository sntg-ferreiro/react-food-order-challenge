import React from "react";
import { Item } from "./Item";

export const Order = ({ order }) => {
  const { customer, items } = order;
  const {name} = customer
  const total = items.map(i => i.price * i.quantity).reduce((a,b) => a+b);
  return (
    <div>
      <span>
        <h3>{name}</h3>
      </span>
      <ul>
        {items.map((i) => (
          <li>
            <p>Product: {i.name}</p>
            <p>Price per unit: {i.price}</p>
            <p>Qty: {i.quantity}</p>
          </li>
        ))}
      </ul>
      <p>Order Total: {total}</p>
    </div>
  );
};
