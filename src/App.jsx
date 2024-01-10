// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AstrologyForm from "./components/AstrologyForm";
import HoroscopeDisplay from "./components/HoroscopeDisplay";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import PremiumPlan from "./pages/PremiumPlan";
import MatchesDisplay from "./components/MatchesDisplay";
import { getZodiacSign } from "./Utiles/ZodaicSignutiles";
import zodiacData from "./assets/data/zodiacData";
import "./App.css";
import PaymentForm from "./components/PaymentForm";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [zodiacInfo, setZodiacInfo] = useState({});
  const [showMatches, setShowMatches] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    // Simulating premium status, you need to set this based on the user's subscription
    setIsPremium(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsPremium(false);
    setZodiacInfo({});
    setShowMatches(false); // Reset showMatches state when logging out
  };

  const fetchZodiacSign = ({ birthDate }) => {
    const sign = getZodiacSign(birthDate);
    const { strengths, weaknesses, careers, skills } = zodiacData[sign];
    setZodiacInfo({ sign, strengths, weaknesses, careers, skills });
    setShowMatches(false); // Reset showMatches state when fetching new zodiac sign
  };

  const handleShowMatches = () => {
    setShowMatches(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        <div className="container mx-auto mt-4 flex-grow">
          <Routes>
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/home" element={<Login />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/premiumplan" element={<PaymentForm />} />
            <Route
              path="/matches"
              element={
                isLoggedIn && isPremium ? (
                  <MatchesDisplay zodiacInfo={zodiacInfo} />
                ) : (
                  <Navigate to="/premiumplan" />
                )
              }
            />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/"
              element={
                isLoggedIn ? (
                  <>
                    <AstrologyForm onSubmit={fetchZodiacSign} />
                    {zodiacInfo.sign && (
                      <>
                        <HoroscopeDisplay
                          zodiacInfo={zodiacInfo}
                          onShowMatches={handleShowMatches}
                        />
                        {showMatches && <Navigate to="/matches" />}
                      </>
                    )}
                  </>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
