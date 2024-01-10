// PaymentButton.jsx
import React from "react";
import { useStripe } from "@stripe/stripe-react";

const PaymentButton = () => {
  const stripe = useStripe();

  const handlePayment = async () => {
    // Call your server to create a PaymentIntent or setup PaymentMethod
    const response = await fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 3000 }), // Amount in cents (30 dollars)
    });

    const { clientSecret, error } = await response.json();

    if (error) {
      console.error("Error:", error);
    } else {
      // Use Stripe.js to handle the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: stripe.elements.getElement("card"),
        },
      });

      if (result.error) {
        console.error("Payment failed:", result.error.message);
      } else {
        console.log("Payment succeeded:", result.paymentIntent);
        // Implement further actions upon successful payment
      }
    }
  };

  return <button onClick={handlePayment}>Pay $30</button>;
};

export default PaymentButton;
