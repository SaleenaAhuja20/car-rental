import React from 'react';
import { Moon, Sun } from 'lucide-react'; // icon library (or use any)

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className='shadow-sm bg-white dark:bg-gray-900 dark:text-white transition-colors'>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className='text-xl font-bold'>Car Rental</h1>
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-6">
              <li><a href="#">Home</a></li>
              <li><a href="#">Cars</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Booking</a></li>
            </ul>
            {/* Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
