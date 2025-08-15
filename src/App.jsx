import { Routes, Route, useNavigate } from "react-router-dom";
import React, { lazy, useEffect, startTransition, Suspense } from "react";
import Prostat from "./Prostat.jsx";
import Lalim from "./Lalim.jsx";

const Support = lazy(() => import("./Support.jsx"));
const Board = lazy(() => import("./Board.jsx"));
const Siege = lazy(() => import("./Siege.jsx"));
const AddOrder = lazy(() => import("./AddOrder.jsx"));
const Error = lazy(() => import("./components/Error"));


const App = () => {
  const navigate = useNavigate();
  const url = localStorage.getItem("baseURL");

  useEffect(() => {
    if (url && (window.location.pathname ==="/" || window.location.pathname ==="/products" || window.location.pathname ==="/products/")) {
      startTransition(() => {
        navigate(url);
      });
    }
  }, [url, navigate]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/products/support" element={<Support />} />
        <Route path="/products/board" element={<Board />} />
        <Route path="/products/siege" element={<Siege />} />
        <Route path="/products/prostat" element={<Prostat />} />
        <Route path="/products/lalim" element={<Lalim />} />
        <Route path="/addorder" element={<AddOrder />} />
      </Routes>
    </Suspense>
  );
};

export default App;
