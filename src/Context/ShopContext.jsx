import React, { createContext, useState } from "react";
import all_product from "../Component/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (prod) => {
    // Check if the product is already in the cart
    if (cartItems.some(item => item.id === prod.id)) {
      return; // If it is, do nothing
    }
    // If the product is not in the cart, add it
    setCartItems((prev) => [...prev, prod]);
  };

  const removeFromCart = (id) => {
    const indexToRemove = cartItems.findIndex((item) => item.id === id);
    if (indexToRemove !== -1) {
      const updatedCartItems = [
        ...cartItems.slice(0, indexToRemove),
        ...cartItems.slice(indexToRemove + 1)
      ];
      setCartItems(updatedCartItems);
    }
  };
  

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item of cartItems) {
      totalAmount += item.new_price * item.quantity; // Assuming each item has a quantity property
    }
    return totalAmount;
  };

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalAmount };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
