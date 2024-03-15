import React, { createContext, useState } from "react";

export const KONSTANTS = {
  KART: "KART",
  CHECKOUT: "CHECKOUT",
  ORDERS: "ORDERS",
  BLANK: "",
};

export const UserProgressContext = createContext({
  KONSTANTS,
  userProgress: "",
  showKart: () => {},
  hideKart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showOrders: () => {},
  hideOrders: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState(KONSTANTS.BLANK);
  const showKart = () => setUserProgress(KONSTANTS.KART);
  const hideKart = () => setUserProgress(KONSTANTS.BLANK);
  const showCheckout = () => setUserProgress(KONSTANTS.CHECKOUT);
  const hideCheckout = () => setUserProgress(KONSTANTS.BLANK);
  const showOrders = () => setUserProgress(KONSTANTS.ORDERS);
  const hideOrders = () => setUserProgress(KONSTANTS.BLANK);

  const UserProgressCtx = {
    KONSTANTS,
    userProgress,
    showKart,
    hideKart,
    showCheckout,
    hideCheckout,
    showOrders,
    hideOrders,
  };

  return (
    <UserProgressContext.Provider value={UserProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
};

// export default UserProgressContext;
