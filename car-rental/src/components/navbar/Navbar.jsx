import React from 'react';
import { Moon, Sun } from 'lucide-react';

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`w-full transition-colors duration-500 ${darkMode ? 'bg-[#0d0d0d]' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
         <span className={`text-2xl font-extrabold tracking-wide ${darkMode ? 'text-white' : 'text-black'}`}>
  Car Rental
</span>

          {/* Navigation Links */}
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <a href="#" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-primary transition-colors`}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-primary transition-colors`}>
                Cars
              </a>
            </li>
            <li>
              <a href="#" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-primary transition-colors`}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={`${darkMode ? 'text-white' : 'text-black'} hover:text-primary transition-colors`}>
                Booking
              </a>
            </li>
          </ul>


          {/* Dark Mode Toggle */}
         <button
  onClick={() => setDarkMode(!darkMode)}
  className={`ml-4 p-2 rounded-full transition-all duration-300 shadow-md ${
    darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-100 text-black hover:bg-gray-200'
  }`}
>
  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
