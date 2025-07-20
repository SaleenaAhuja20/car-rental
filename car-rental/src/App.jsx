import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle HTML class based on darkMode
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
