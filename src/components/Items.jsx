import React from "react";
import { Item } from "./Item";
import useFetch from "../hooks/useFetch";
import { fetchAvailableMeals, LOCAL_HOST } from "../http";

export const Items = () => {
  const { dataFetched: meals, isFetching, updateError } = useFetch(
    fetchAvailableMeals,
    []
  );

  /*
  {
        "id": "m1",
        "name": "Mac & Cheese",
        "price": "8.99",
        "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        "image": "images/mac-and-cheese.jpg"
    }
  */

  return (
    <section>
      {updateError && <p>Error Fetching meals! message: {updateError.message}</p>}
      {isFetching ?  <p>Fetching available meals... </p>: <ul id="meals">
        {meals.map((m) => (
          <Item key={m.id} meal={m} />
        ))}
      </ul>}
    </section>
  );
};
