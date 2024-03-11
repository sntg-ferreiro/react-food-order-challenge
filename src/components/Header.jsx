import React from "react";
import img from "../assets/logo.jpg";

export const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <h1>The Meals App</h1>
        <img src={img} alt="A logo of the meals" />
      </div>
    </header>
  );
};
