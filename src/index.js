import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const Support = lazy(() => import("./Support.jsx"));
const Board = lazy(() => import("./Board.jsx"));
const AddOrder = lazy(() => import("./AddOrder.jsx"));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/products/support" element={<Support />} />
        <Route path="/products/board" element={<Board />} />
        <Route path="/addorder" element={<AddOrder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
