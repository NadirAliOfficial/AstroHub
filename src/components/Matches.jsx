// src/components/Matches.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Matches = ({ zodiacInfo }) => {
  const getGoodMatches = (zodiacSign) => {
    // Define compatibility based on astrological beliefs
    const compatibilityMap = {
      Aries: ["Leo", "Sagittarius"],

      Taurus: ["Virgo", "Capricorn"],
      Gemini: ["Libra", "Aquarius"],
      Cancer: ["Scorpio", "Pisces"],
      Leo: ["Aries", "Sagittarius"],
      Virgo: ["Taurus", "Capricorn"],
      Libra: ["Gemini", "Aquarius"],
      Scorpio: ["Cancer", "Pisces"],
      Sagittarius: ["Aries", "Leo"],
      Capricorn: ["Taurus", "Virgo"],
      Aquarius: ["Gemini", "Libra"],
      Pisces: ["Cancer", "Scorpio"],
    };

    return compatibilityMap[zodiacSign] || [];
  };

  // eslint-disable-next-line react/prop-types
  const goodMatches = getGoodMatches(zodiacInfo.sign);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Good Matches</h2>
      {goodMatches.length === 0 ? (
        <p>No good matches found for {zodiacInfo.sign}.</p>
      ) : (
        <ul>
          {goodMatches.map((match) => (
            <li key={match}>{match}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Matches;
