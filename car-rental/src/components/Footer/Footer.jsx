import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`py-8 px-6 md:px-12 transition-all duration-700 ${
        darkMode ? "bg-[#0b1320] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} CarRental. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition text-lg"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
           href="https://instagram.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
            className="hover:text-teal-500 transition text-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/yourhandle"
    target="_blank"
    rel="noopener noreferrer"
            className="hover:text-teal-500 transition text-lg"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
            className="hover:text-teal-500 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
