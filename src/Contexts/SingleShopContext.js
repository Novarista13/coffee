import { useState, createContext } from "react";

export const SingleShopContext = createContext();

export default function SingleShopProvider({ children }) {
  const [shopName, setShopName] = useState(localStorage.getItem("shopName"));

  return (
    <SingleShopContext.Provider value={{ shopName, setShopName }}>
      {children}
    </SingleShopContext.Provider>
  );
}
