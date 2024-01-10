import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const HoroscopeDisplay = ({ zodiacInfo, onShowMatches }) => {
  const { sign, strengths, weaknesses, careers, skills } = zodiacInfo;

  const [imageUrl, setImageUrl] = useState(`/pngs/${sign}.jpg`);

  const handleImageError = () => {
    // Set a fallback image or handle the error in your preferred way
    setImageUrl("/fallback-image.jpg");
  };

  useEffect(() => {
    // Update image URL when the zodiac sign changes
    setImageUrl(`/pngs/${sign}.jpg`);
  }, [sign]);

  return (
    <div className="horoscope-display backdrop-opacity-5 mb-8 text-center p-6 bg-black bg-opacity-30 rounded-md transition-all duration-300">
      <h2 className="text-3xl font-bold mb-4 text-white transition-all duration-300">
        {sign}
      </h2>
      <img
        src={imageUrl}
        alt={sign}
        className="rounded-full mx-auto mb-6 shadow-md transition-all duration-300"
        style={{ maxWidth: "300px", maxHeight: "300px" }}
        onError={handleImageError}
      />

      <table className="w-full table-auto mb-6 ">
        <thead>
          <tr className="bg-black bg-opacity-70 text-white ">
            <th className="py-2 px-4 transition-all duration-300">Category</th>
            <th className="py-2 px-4 transition-all duration-300">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-black bg-opacity-60 text-white">
            <td className="py-2 px-4 font-semibold transition-all duration-300">
              Strengths
            </td>
            <td className="py-2 px-4 transition-all duration-300">
              {strengths}
            </td>
          </tr>
          <tr className="bg-black bg-opacity-50 text-white">
            <td className="py-2 px-4 font-semibold transition-all duration-300">
              Weaknesses
            </td>
            <td className="py-2 px-4 transition-all duration-300">
              {weaknesses}
            </td>
          </tr>
          <tr className="bg-black bg-opacity-40 text-white">
            <td className="py-2 px-4 font-semibold transition-all duration-300">
              Careers
            </td>
            <td className="py-2 px-4 transition-all duration-300">{careers}</td>
          </tr>
          <tr className="bg-black bg-opacity-30 text-white">
            <td className="py-2 px-4 font-semibold transition-all duration-300">
              Skills
            </td>
            <td className="py-2 px-4 transition-all duration-300">{skills}</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={onShowMatches}
        className="bg-blue-700 mb-10 text-white px-6 py-3 rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline transition-all duration-300"
      >
        Show Matches
      </button>
    </div>
  );
};

HoroscopeDisplay.propTypes = {
  zodiacInfo: PropTypes.shape({
    sign: PropTypes.string.isRequired,
    strengths: PropTypes.string.isRequired,
    weaknesses: PropTypes.string.isRequired,
    careers: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }).isRequired,
  onShowMatches: PropTypes.func.isRequired,
};

export default HoroscopeDisplay;
