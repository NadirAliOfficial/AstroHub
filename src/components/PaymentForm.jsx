// src/components/PaymentForm.jsx
import React, { useState } from "react";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const formatCardNumber = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Insert a space after every 4 characters
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ");

    // Trim any trailing spaces
    return formattedValue.trim();
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handlePayment = async () => {
    // Send payment information to your server for processing
    const paymentData = {
      cardNumber: cardNumber.replace(/\s/g, ""), // Remove spaces for actual submission
      expiryDate,
      cvc,
    };

    // Example: Send paymentData to your server
    try {
      const response = await fetch("/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();

      if (result.success) {
        // Payment successful, you can redirect or perform further actions
        console.log("Payment successful!");
      } else {
        // Handle payment failure
        console.error("Payment failed:", result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white bg-opacity-20  shadow-lg rounded-md">
      <h2 className="text-2xl text-black font-bold mb-4">Payment Details</h2>

      {/* Card Number */}
      <label className="block text-black mb-2 text-sm">Card Number</label>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        className="w-full p-2 border text-white bg-black bg-opacity-30 rounded-md mb-4"
        placeholder="1234 5678 9012 3456"
      />

      {/* Expiry Date */}
      <label className="block mb-2 text-black text-sm">Expiry Date</label>
      <input
        type="text"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        className="w-full p-2 border text-white bg-black bg-opacity-30 rounded-md mb-4"
        placeholder="MM/YY"
      />

      {/* CVC */}
      <label className="block text-black mb-2 text-sm">CVC</label>
      <input
        type="text"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        className="w-full p-2 text-white border bg-opacity-30 bg-black rounded-md mb-4"
        placeholder="123"
      />

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-black px-4 py-2 rounded-md"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentForm;
