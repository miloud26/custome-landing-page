import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const Licket01 = lazy(() => import("./Licket01.jsx"));
const AddOrder = lazy(() => import("./AddOrder.jsx"));
const Kimono = lazy(() => import("./Kimono.jsx"));
const Licket02 = lazy(() => import("./Licket02.jsx"));
const LicketNoir = lazy(() => import("./LicketNoir.jsx"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products/licket01" element={<Licket01 />} />
        <Route path="/products/kimono" element={<Kimono />} />
        <Route path="/products/licket02" element={<Licket02 />} />
        <Route path="/products/licketNoir" element={<LicketNoir />} />
        <Route path="/addorder" element={<AddOrder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
