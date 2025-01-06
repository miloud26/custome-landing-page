import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QcF7cAUKBZ4GFTYVeorMFBjYtLErwjucvpgoq8nPwS6adftANpluzpL49gumK5Rvf0Y4rBwe6iOMHOxUXC6BGCd00I7P68VAI"
);

const Licket01 = lazy(() => import("./Licket01.jsx"));
const Licket02 = lazy(() => import("./Licket02.jsx"));
const AddOrder = lazy(() => import("./AddOrder.jsx"));
const AppCard = lazy(() => import("./AppCard.js"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppCard />} />
          <Route path="/products/licket01" element={<Licket01 />} />
          <Route path="/products/licket02" element={<Licket02 />} />
          <Route path="/addorder" element={<AddOrder />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  </React.StrictMode>
);
