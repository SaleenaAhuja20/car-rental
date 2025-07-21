import React from "react";
import { motion } from "framer-motion";
import carLight from "/light-car.png";
import carDark from "/black-car.png";

function Hero({ darkMode }) {
  return (
    <motion.div
      className={`w-full min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-8 py-12 transition-all duration-700 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={darkMode ? "dark" : "light"} // forces re-animation on mode change
    >
      {/* Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Drive in Style, Anytime
        </h1>
        <p className="text-lg font-medium opacity-80">
          Rent top-tier cars at affordable prices. Easy booking. Great experience.
        </p>
      <button className="mt-4 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
  Book Now
</button>


      </motion.div>

      {/* Car Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={darkMode ? carDark : carLight}
          alt="Car"
          className="w-[80%] max-w-md"
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
