// src/components/AstrologyForm.jsx
import React, { useState } from "react";

const AstrologyForm = ({ onSubmit }) => {
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    onSubmit({ birthDate });
  };

  return (
    <form className="astrology-form" onSubmit={handleSubmit}>
      <label className="block text-white text-2xl font-bold mb-2">
        Birth Date:
        <input
          className="appearance-none border bg-black bg-opacity-30 text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </label>
      <button
        className="bg-black  text-white  hover:bg-opacity-50 bg-opacity-25 font-bold py-2 px-4 rounded "
        type="submit"
      >
        Get Zodiac Sign
      </button>
    </form>
  );
};

export default AstrologyForm;
