import React from "react";
import { PartyPopper } from "lucide-react";
import carImageLight from "/offer-car3.png";
import carImageDark from "/offer-car3.png";
import { motion } from "framer-motion";

function OfferSection({ darkMode }) {
  return (
    <section
      data-aos="fade-up"
      className={`py-16 px-6 md:px-12 transition-all duration-700 ${
        darkMode ? "bg-[#0e1a2b] text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div
          className="md:w-1/2 text-center md:text-left space-y-6"
          data-aos="fade-right"
        >
          {/* Icon */}
          <div className="flex justify-center md:justify-start">
            <div
              className={`p-4 rounded-full shadow-md inline-block ${
                darkMode ? "bg-[#1e293b]" : "bg-gray-100"
              }`}
            >
              <PartyPopper
                size={32}
                color={darkMode ? "#38bdf8" : "#0f172a"}
              />
            </div>
          </div>

          {/* Heading */}
          <h2
            className={`text-4xl font-extrabold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
             Your Next Adventure Begins Here
          </h2>

          {/* Paragraph */}
          <p className="text-lg opacity-90">
            Sign up today and unlock a{" "}
            <span className="font-semibold">
              50% discount
            </span>{" "}
            on your first ride. Smooth, stylish, and stress-free car rentals — just a click away!
          </p>

          {/* Button */}
          <button
            className={`mt-6 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
              darkMode
                ? "bg-[#1e40af] text-white hover:bg-[#1d4ed8]"
                : "bg-[#0f172a] text-white hover:bg-gray-800"
            }`}
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 hidden md:block"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-left"
        >
          <img
            src={darkMode ? carImageDark : carImageLight}
            alt="Offer Car"
            className="w-full max-w-md mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default OfferSection;