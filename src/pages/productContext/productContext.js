import React, { createContext, useContext, useState } from "react";
export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basketproducts, setBasketproducts] = useState([]);

  const values = {
    products,
    setProducts,
    basketproducts,
    setBasketproducts,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
