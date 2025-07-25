import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Briefcase } from "lucide-react";

function AboutUs({ darkMode }) {
  const cardBase = `p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-all duration-500 ${
    darkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-800"
  }`;

  return (
    <section
      id="about-us"
      className={`py-20 px-6 md:px-12 transition-all duration-700 ${
        darkMode
          ? "bg-gradient-to-br from-[#0e1a2b] to-[#152238]"
          : "bg-gradient-to-br from-white to-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          className={`text-4xl font-extrabold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className={`text-lg opacity-80 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          At DriveEasy, we’re more than just a car rental company. We’re a team of passionate individuals committed to delivering smooth, reliable, and comfortable travel experiences for everyone.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          className={cardBase}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Users className="w-10 h-10 mb-4 text-teal-500" />
          <h4 className="text-xl font-semibold mb-2">Our Team</h4>
          <p className="text-sm opacity-80">
            A crew of skilled professionals dedicated to ensuring every ride is seamless and stress-free.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className={cardBase}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Target className="w-10 h-10 mb-4 text-teal-500" />
          <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
          <p className="text-sm opacity-80">
            Making car rentals effortless, accessible, and trustworthy across every city and road.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className={cardBase}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Briefcase className="w-10 h-10 mb-4 text-teal-500" />
          <h4 className="text-xl font-semibold mb-2">Our Values</h4>
          <p className="text-sm opacity-80">
            Trust, punctuality, comfort, and top-notch customer care in every rental journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
