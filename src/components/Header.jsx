// src/components/Header.jsx
import React from "react";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
      <div className="container mx-auto flex justify-between items-center">
        {isLoggedIn && (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onLogout}
          >
            Logout
          </button>
        )}
      </div>
  );
};

export default Header;
