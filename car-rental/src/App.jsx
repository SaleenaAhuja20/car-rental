import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import OfferSection from './components/Offer/offerSection';
import OurServices from './components/Services/OurServices';
import AvailableCars from './components/Cars/AvailableCars';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: false      // animation only once per element
  });
}, []);
// hd a

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
<div className="bg-white text-black">
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
  <Hero darkMode={darkMode} />
  <OfferSection />
  <OurServices darkMode={darkMode} />
  <AvailableCars darkMode={darkMode} />

</div>



  );
}

export default App;
