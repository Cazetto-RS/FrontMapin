import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard.jsx";
import Products from "./pages/products.jsx";
import Categories from "./pages/categories.jsx";
import Locations from "./pages/location.jsx";
import Users from "./pages/users.jsx";
import Config from "./pages/config.jsx";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/product" element={<PrivateRoute><Products /></PrivateRoute>} />
      <Route path="/categorias" element={<PrivateRoute><Categories /></PrivateRoute>} />
      <Route path="/location" element={<PrivateRoute><Locations /></PrivateRoute>} />
      <Route path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
      <Route path="/config" element={<PrivateRoute><Config /></PrivateRoute>} />
    </Routes>
  );
}
