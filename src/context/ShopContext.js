import React, { createContext, useState } from "react";
import mockupDatas from "../ProductData";
import FILTER_OPTIONS from "../FILTER_OPTIONS.JS";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < mockupDatas.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartList, setCartList] = useState(mockupDatas);
  const [sortItems, setSortItems] = useState(mockupDatas.size);

  // sort
  const filterItem = (filterType) => {
    let filteredList = [];
    switch (filterType) {
      case sortItems:
        filteredList = cartList.filter((item) => item.size);
        break;
      default:
        filteredList = cartList;
    }
    setCartList(filteredList);
    setSortItems(filterType);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = cartList.find((product) => product.id === Number(item));
        totalAmount += Number(cartItems[item]) * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    cartList,
    filterItem,
    sortItems
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
