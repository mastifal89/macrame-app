import { Home } from "../components/home/Home";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../components/menuAdmin/Admin";
import { CartCheckout } from "../components/cartCheckout/CartCheckout";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/checkout" element={<CartCheckout />} />
      </Routes>
    </>
  );
};
