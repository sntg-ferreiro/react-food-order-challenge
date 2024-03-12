import React from "react";
import { useState } from "react";

import Modal from "./Modal";
import { OrdersView } from "./OrdersView";

export const Footer = () => {
  const [isOpenOrders, setIsOpenOrders] = useState(false);

  let modalActionsForm = <button className="text-button">Close</button>;

  const handleOpenOrders = () => {
    setIsOpenOrders(true);
  };

  const handleCloseOrders = () => {
    setIsOpenOrders(false);
  };

  return (
    <>
      <Modal
        open={isOpenOrders}
        onClose={handleCloseOrders}
        actions={modalActionsForm}
      >
        <OrdersView />
      </Modal>
      <footer id="main-header">
        <p>All rights given for free!</p>
        <button className="button" onClick={handleOpenOrders}>
          See Orders
        </button>
      </footer>
    </>
  );
};
