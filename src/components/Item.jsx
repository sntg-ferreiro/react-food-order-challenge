import React, { useContext } from "react";
import { KartContext } from "../store/kart-ctx";

export const Item = ({ meal }) => {
  const { name, price, description, image } = meal;
  const { addItemToCart } = useContext(KartContext);

  return (
    <article className="meal-item">
      <h3>{name}</h3>
      <img scr={`http://localhost:3000/${image}`} alt="photo of the meal" />
      <p className="meal-item-description">{description}</p>
      <div className="meal-item-actions">
        <p className="meal-item-price">{price}</p>
        <button className="button" onClick={() => addItemToCart(meal)}>
          add to cart
        </button>
      </div>
    </article>
  );
};
