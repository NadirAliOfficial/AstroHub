// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-30 rounded-xl text-white font-sans py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2023 Astro Hub</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="/home" className="text-sm hover:underline">
            Home
          </a>
          <a href="/contactus" className="text-sm hover:underline">
            Contact Us
          </a>
          <a href="/aboutus" className="text-sm hover:underline">
            About Us
          </a>
          <a href="/premiumplan" className="text-sm hover:underline">
            Premium Plan
          </a>
        </div>
        <div className="mt-4 text-sm">
          <p>
            For inquiries, please reach out to{" "}
            <a href="mailto:info@astrologyapp.com" className="underline">
              nadiralikhan@gmail.com
            </a>
          </p>
          <p>
            Learn more about our team and mission on our{" "}
            <a href="/aboutus" className="underline">
              About Us
            </a>{" "}
            page.
          </p>
          <p>
            Unlock exclusive features with our{" "}
            <a href="/premiumplan" className="underline">
              Premium Plan
            </a>{" "}
            subscription.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
