import React, { createContext, useReducer, useState } from "react";

const ADD_ITEM = "ADD_ITEM";
const UPDATE_QTY = "UPDATE_QTY";
const REFRESH = "REFRESH";

export const KartContext = createContext({
  items: [],
  kustomer: {},
  loadKustomer: () => {},
  addItemToCart: () => {},
  updateQtyInCart: () => {},
  refreshCtx: () => {},
});

function shoppingCartReducer(state, action) {
  let { type, payload } = action;

  if (type === ADD_ITEM) {
    //payload === id
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === payload.id
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...payload, quantity: 1 });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (type === UPDATE_QTY) {
    let { productId, amount } = payload;
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (type === REFRESH) {
    return {
      ...state,
      items: [],
    };
  }

  return state;
}

export const KartContextProvider = ({ children }) => {
  const [cartState, cartStateDispatch] = useReducer(shoppingCartReducer, {
    items: [],
  });
  const [kustomer, setKustomer] = useState(null);

  function handleAddItemToCart(meal) {
    cartStateDispatch({
      type: ADD_ITEM,
      payload: meal,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartStateDispatch({
      type: UPDATE_QTY,
      payload: { productId, amount },
    });
  }

  function refreshCtx() {
    cartStateDispatch({ type: REFRESH });
    setKustomer(null);
  }

  function loadKustomer(kustomer) {
    setKustomer({...kustomer});
  }

  const ctxValue = {
    items: cartState.items,
    kustomer,
    addItemToCart: handleAddItemToCart,
    updateQtyInCart: handleUpdateCartItemQuantity,
    refreshCtx,
    loadKustomer,
  };

  return (
    <KartContext.Provider value={ctxValue}>{children}</KartContext.Provider>
  );
};
