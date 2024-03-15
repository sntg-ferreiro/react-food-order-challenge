export const LOCAL_HOST = "http://localhost:3000/";

async function fetchFromLocal(url, errmsg, body) {
  const response = await fetch(LOCAL_HOST + url, body?body:undefined);
  if (!response.ok) {
    throw new Error(errmsg);
  }
  const data = await response.json();
  return data;
}

export async function fetchAvailableMeals() {
  return await fetchFromLocal("meals", "Error on fetch from /meals");
}

export async function fetchUserPlaces() {
  return await fetchFromLocal("meals", "Error on fetch from /meals");
}

export async function fetchOrders() {
  return await fetchFromLocal("orders", "Error fetching from /orders");
}

export async function postOrder(kart, customer) {
  const order = { items: kart, customer };
  const body = JSON.stringify({ order });
  console.log(body);
  const response = await fetchFromLocal("orders", "Error fetching from /orders", {
    method: "POST",
    body: body,
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log('RESPONSE')
  console.log(response)
  /*if (response.status !== 201) {
    throw new Error("Error on update user orders from /orders");
  }
  const data = await response.json();
  */
  return response.message;
}
