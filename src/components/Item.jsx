import React from "react";

export const Item = () => {
  return (
    <article className="meal-item">
      <h3>Title of the Meal</h3>
      <img scr="" alt="main photo of the meal" />
      <p className="description">Description</p>
      <p className="price">Price</p>
      <button className="actions">add to cart</button>
    </article>
  );
};
