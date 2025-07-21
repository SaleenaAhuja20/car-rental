import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // for scroll animations
useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
  <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
  <Hero darkMode={darkMode} />
</div>

  );
}

export default App;
