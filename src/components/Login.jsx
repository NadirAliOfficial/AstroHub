// src/components/Login.jsx
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real-world scenario, perform actual authentication
    // For simplicity, we're just checking for a non-empty email and password
    if (username && password) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen  flex items-center  justify-center">
      <form className="bg-blue-400 bg-opacity-40  shadow-md rounded-md p-8 max-w-md w-full">
        <h1 className="text-3xl text-black   font-bold mb-6 text-center">
          Login
        </h1>
        <label className="block text-black text-sm font-bold mb-4">
          Username:
          <input
            className="form-input mt-1 block w-full bg-black text-white rounded-md bg-opacity-30 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 px-3 py-2 transition-all"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="block text-black text-sm font-bold mb-4">
          Password:
          <input
            className="form-input mt-1 block w-full bg-black text-white border-b-2 bg-opacity-30 rounded-md border-gray-300 focus:outline-none focus:border-blue-500 px-3 py-2 "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-800 hover:bg-blue-500 bg-opacity-90 transition-all duration-9000 ease-in-out p-4 text-black font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
