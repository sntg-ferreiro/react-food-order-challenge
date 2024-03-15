import React from "react";

export const Order = ({ order }) => {
  const { customer, items } = order;
  const { name } = customer;

  const total =
    Math.round(
      items.map((i) => i.price * i.quantity).reduce((a, b) => a + b) * 100
    ) / 100;
    
  return (
    <div>
      <span>
        <h3>{name}</h3>
      </span>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
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
