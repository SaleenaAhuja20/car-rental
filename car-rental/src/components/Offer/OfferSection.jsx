import React from "react";
import offerCar from "/offer-car.png"; // any car image you want
import { motion } from "framer-motion";

function OfferSection() {
  return (
    <motion.div
      className="w-[90%] max-w-6xl mx-auto my-24 p-8 md:p-12 rounded-3xl shadow-2xl 
  bg-gradient-to-r from-indigo-100 via-white to-purple-100 
  dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 
  text-black dark:text-white flex flex-col md:flex-row items-center gap-8"
      data-aos="fade-up"
    >
      {/* Text */}
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide flex items-center gap-2">
          🎉 Exclusive First Ride Offer!
        </h2>
        <p className="mb-6 text-lg">
          Book your first ride & get <span className="font-bold text-yellow-500 dark:text-yellow-400">20% OFF</span>.
          Use code <span className="font-mono text-yellow-500 dark:text-yellow-400">WELCOME20</span> at checkout.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-all duration-300 shadow-md">
          Book Now
        </button>
      </div>

      {/* Car image */}
      <div className="flex-1 flex justify-center">
        <img src={offerCar} alt="Offer Car" className="w-[280px] md:w-[340px]" />
      </div>
    </motion.div>
  );
}

export default OfferSection;
