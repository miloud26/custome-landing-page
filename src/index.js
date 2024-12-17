import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./App.jsx"));
const Lokcet2 = lazy(() => import("./Lokcet2.jsx"));
const Licket = lazy(() => import("./Licket.jsx"));
const Licket5900 = lazy(() => import("./Licket5900.jsx"));
const LicketSeif = lazy(() => import("./LicketSeif.jsx"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products/l" element={<App />} />
        <Route path="/products/hi" element={<Lokcet2 />} />
        <Route path="/products/h" element={<Licket />} />
        <Route path="/products/hih" element={<Licket5900 />} />
        <Route path="/products/LicketSeif" element={<LicketSeif />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
