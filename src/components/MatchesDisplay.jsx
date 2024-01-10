// src/components/MatchesDisplay.jsx
import React from "react";
import PropTypes from "prop-types";

const MatchesDisplay = ({ zodiacInfo }) => {
  const { sign } = zodiacInfo;

  // Sample compatibility data (replace it with your actual logic)
  const compatibilityData = {
    Aries: ["Leo", "Sagittarius", "Gemini"],
    Taurus: ["Virgo", "Capricorn", "Pisces"],
    Gemini: ["Libra", "Aquarius", "Aries"],
    Cancer: ["Scorpio", "Pisces", "Taurus"],
    Leo: ["Aries", "Sagittarius", "Gemini"],
    Virgo: ["Taurus", "Capricorn", "Cancer"],
    Libra: ["Gemini", "Aquarius", "Leo"],
    Scorpio: ["Cancer", "Pisces", "Capricorn"],
    Sagittarius: ["Aries", "Leo", "Aquarius"],
    Capricorn: ["Taurus", "Virgo", "Scorpio"],
    Aquarius: ["Gemini", "Libra", "Sagittarius"],
    Pisces: ["Cancer", "Scorpio", "Taurus"],
  };

  const matches = compatibilityData[sign] || [];

  return (
    <div className="mt-20 matches-display text-center">
      <h2 className="text-3xl text-white font-bold mb-4">
        Compatibility Matches for {sign}:
      </h2>
      {matches.length > 0 ? (
        <table className="mx-auto mt-4 border-collapse border border-purple-700 bg-black bg-opacity-30 transition-all duration-300">
          <thead>
            <tr className="bg-purple-700 text-white">
              <th className="py-2 px-4 border border-purple-700">Zodiac Sign</th>
              <th className="py-2 px-4 border border-purple-700">
                Compatibility Level
              </th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match) => (
              <tr key={match} className="bg-black bg-opacity-30 transition-all duration-300">
                <td className="py-2 px-4 border border-white text-white">
                  {match}
                </td>
                <td className="py-2 px-4 border border-purple-700 text-white transition-all duration-300">
                  High
                </td>
                {/* Replace with actual compatibility level */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-lg">No compatibility matches found.</p>
      )}
    </div>
  );
};

MatchesDisplay.propTypes = {
  zodiacInfo: PropTypes.shape({
    sign: PropTypes.string.isRequired,
  }).isRequired,
};

export default MatchesDisplay;
