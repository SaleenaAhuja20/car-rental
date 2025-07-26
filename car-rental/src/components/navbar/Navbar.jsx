import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "Cars", target: "available-cars" },
    { label: "About", target: "about-us" },
    { label: "Contact Us", target: "contact-us" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 backdrop-blur-md bg-opacity-60 border-b transition-all duration-500 ${
        darkMode
          ? "bg-[#0e1a2b]/90 border-slate-700 text-white"  // Updated bg to match Hero
          : "bg-white/80 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className={`text-2xl font-black tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <div className="h-16 max-h-16 overflow-hidden flex items-center">
            <img
              src="/logo2.png"
              alt="ShiftX Logo"
              className="h-full object-contain drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)]"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ label, target }) => (
            <li key={label}>
              <a
                href={`#${target}`}
                className={`relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  darkMode
                    ? "text-slate-200 hover:text-white after:bg-white"
                    : "text-gray-700 hover:text-black after:bg-black"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 border shadow-sm ${
              darkMode
                ? "bg-[#1e293b] hover:bg-[#334155] text-white border-slate-600"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-4 py-4 pb-6 transition-all duration-300 ${
            darkMode ? "bg-[#0e1a2b] text-white" : "bg-white text-gray-900"
          }`}
        >
          {navLinks.map(({ label, target }) => (
            <a
              key={label}
              href={`#${target}`}
              className={`relative pb-1 text-sm font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                darkMode
                  ? "text-slate-200 hover:text-white after:bg-white"
                  : "text-gray-700 hover:text-black after:bg-black"
              }`}
              onClick={() => setMenuOpen(false)} // close menu on click
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
