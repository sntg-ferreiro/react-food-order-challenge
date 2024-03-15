import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { fetchOrders } from "../http";
import { Order } from "./Order";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/UserProgressContext";

export const OrdersView = () => {
  const { dataFetched: orders, isFetching, updateError } = useFetch(
    fetchOrders,
    []
  );
  const { userProgress, KONSTANTS, hideOrders } = useContext(
    UserProgressContext
  );

  return (
    <Modal
      open={userProgress === KONSTANTS.ORDERS}
      onClose={userProgress === KONSTANTS.ORDERS ? hideOrders : null}
    >
      <div>
        <h3>Previous Orders</h3>
        {isFetching ? (
          <p>Fetching your orders, please wait... </p>
        ) : (
          <ul>
            {orders.map((o) => (
              <Order key={o.id} order={o} />
            ))}
          </ul>
        )}
        <p className="modal-actions">
          <button className="text-button" onClick={hideOrders}>
            Close
          </button>
        </p>
      </div>
    </Modal>
  );
};
