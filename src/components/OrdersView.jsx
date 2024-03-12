import React from "react";
import useFetch from "../hooks/useFetch";
import { fetchOrders } from "../http";
import { Order } from "./Order";

export const OrdersView = () => {
  const { dataFetched: orders, isFetching, updateError } = useFetch(
    fetchOrders,
    []
  );

  return (
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
    </div>
  );
};
