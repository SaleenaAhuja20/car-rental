import React from "react";
import { motion } from "framer-motion";
import carLight from "/light-car.png"; // Light mode car image
import carDark from "/dark-car.png";  // Dark mode car image

function Hero({ darkMode }) {
  return (
    <div  id="home" className="relative overflow-hidden">
      {/* Optional Glowing Effect for Dark Mode */}
      {darkMode && (
        <div className="absolute -left-32 top-1/3 w-[400px] h-[400px] bg-blue-500 opacity-10 blur-3xl rounded-full z-0"></div>
      )}

      <motion.div
        className={`relative w-full min-h-[95vh] flex flex-col md:flex-row items-center justify-center px-8 py-12 transition-all duration-700 ${
          darkMode
            ? "bg-[#0f172a] text-white"
            : "bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-900"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={darkMode ? "dark" : "light"}
      >
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6 z-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide">
            {darkMode ? (
              <span className="text-white">ShiftX: Rule the Roads at Night.</span>
            ) : (
              "ShiftX: Ride the Day. Own the Drive."
            )}
          </h1>

          <p
            className={`text-lg font-medium opacity-80 max-w-lg mx-auto md:mx-0 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {darkMode
    ? "Step into power. ShiftX lets you ride the night with bold elegance, luxury wheels, and unstoppable vibes."
    : "Shift into comfort and class. Whether it’s a quick trip or a full-day escape, ShiftX makes every ride unforgettable."}
</p>

          <div className="mt-6 flex justify-center md:justify-start gap-4 flex-wrap">
            {/* Book Now Button */}
           
<button
  className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer ${
    darkMode
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white hover:bg-gray-800 shadow-md"
  }`}
>
  Book Now
</button>

{/* View Cars Button */}
<button
  className={`px-8 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-105 cursor-pointer ${
    darkMode
      ? "border-white text-white hover:bg-white hover:text-black"
      : "border-black text-black hover:bg-gray-100"
  }`}
>
  View Cars
</button>

          </div>
        </motion.div>

        {/* Car Image Section */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center z-10"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={darkMode ? carDark : carLight}
            alt="Car"
            className="w-[90%] max-w-md drop-shadow-[0_0_40px_rgba(0,191,255,0.3)]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
