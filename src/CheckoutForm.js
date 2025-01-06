import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPaymentStatus("Processing...");

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      setPaymentStatus(`Error: ${error.message}`);
      return;
    }

    const response = await fetch("http://localhost:3001/process-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token.id }),
    });
    console.log("vf");
    const result = await response.json();

    if (result.success) {
      setPaymentStatus("Payment Successful!");
    } else {
      setPaymentStatus(`Error: ${result.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      <p>{paymentStatus}</p>
    </form>
  );
};

export default CheckoutForm;
