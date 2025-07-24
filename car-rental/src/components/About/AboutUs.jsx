import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-pink-50 dark:bg-[#0f172a] text-gray-800 dark:text-white px-6 py-16 flex flex-col items-center justify-center"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-teal-600 dark:text-teal-400">
          About Us 💕
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-pink-600">LoveRide</span> – your dreamy destination for romantic car journeys. Whether it’s a surprise date, anniversary getaway, or a sunset drive – we’re here to make it unforgettable.
        </p>
        <p className="text-base leading-relaxed mb-4">
          Our mission is simple: to bring people closer with meaningful rides that leave lasting memories. From luxurious convertibles to cozy couples' rides, we offer a range of cars to match every mood.
        </p>
        <p className="text-base leading-relaxed">
          Thank you for being a part of this beautiful journey. Here's to more love, more miles, and more magic. 🌸✨
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
