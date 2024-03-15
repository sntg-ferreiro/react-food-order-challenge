import React, { useContext } from "react";
import img from "../assets/logo.jpg";
import { UserProgressContext } from "../store/UserProgressContext";

export const Header = () => {
  const { showKart, showCheckout } = useContext(UserProgressContext);


  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={img} alt="A logo of the meals" />
          <h1>The Meals App!</h1>
        </div>
        <div>
          <button className="button" onClick={showKart}>
            Open Kart
          </button>
          <button className="button" onClick={showCheckout}>
            Register Kustomer
          </button>
        </div>
      </header>
    </>
  );
};
