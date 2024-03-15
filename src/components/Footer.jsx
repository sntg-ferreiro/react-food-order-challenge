import React, { useContext } from "react";
import { UserProgressContext } from "../store/UserProgressContext";

export const Footer = () => {
  const { showOrders } = useContext(UserProgressContext);

  return (
    <footer id="main-header">
      <p>All rights given for free!</p>
      <button className="button" onClick={showOrders}>
        See Orders
      </button>
    </footer>
  );
};
