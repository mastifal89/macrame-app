import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import CartState from "./context/Cart/CartState";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <CartState>
      <App />
    </CartState>
  </AuthProvider>,
  document.getElementById("root")
);
