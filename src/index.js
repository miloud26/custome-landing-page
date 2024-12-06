import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const App = lazy(() => import("./App.jsx"));

const Licket = lazy(() => import("./Licket.jsx"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products/l" element={<App />} />

        <Route path="/products/h" element={<Licket />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
