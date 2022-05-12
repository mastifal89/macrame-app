import { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  DECREASE_ITEM,
} from "../Types";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("item") || "[]");

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: cartFromLocalStorage,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = item => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = item => {
    dispatch({ type: REMOVE_ITEM, payload: item });
  };

  const decreaseItem = item => {
    dispatch({ type: DECREASE_ITEM, payload: item });
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,

        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;