import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full mt-6 font-serif bg-white py-8 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo or Name */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Pitama Foods</h1>
        </div>

        {/* Contact Details */}
        <div>
          <p className="text-gray-700">289 380 7130</p>
          <p className="text-gray-700">info@pitamafoods.com</p>
        </div>

        {/* Address */}
        <div>
          <p className="text-gray-700">1850 Ellesmere Road</p>
          <p className="text-gray-700">Scarborough</p>
          <p className="text-gray-700">ON M1H 2V5</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;