import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FoodPage from "./pages/Food/FoodPage";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from './pages/Login/LoginPage';
import AdminRoute from "./components/AdminRoute/AdminRoute";
import FoodsAdminPage from "./pages/FoodsAdmin/FoodsAdminPage";
import FoodEditPage from "./pages/FoodEdit/FoodEditPage";
import Dashboard from './pages/Dashboard/Dashboard';
import AuthRoute from './components/AuthRoute/AuthRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:searchTerm" element={<HomePage />} />
      <Route path="/tag/:tag" element={<HomePage />} />
      <Route path="/food/:id" element={<FoodPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/admin/addFood" element={<FoodEditPage/>} />
      <Route path="/admin/foods" element={<FoodsAdminPage />} />
      <Route path="/dashboard" element={ <Dashboard />} />
      <Route path="/admin/editFood/:foodId" element={<FoodEditPage/>} />



     
     






    </Routes>



  );
}

