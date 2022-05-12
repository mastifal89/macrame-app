import { Home } from "../components/home/Home";
import { Routes, Route } from "react-router-dom";
import { Admin } from "../components/menuAdmin/Admin";

export const DashboardRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};
