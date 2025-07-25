import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactUs({ darkMode }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    // You can also clear input fields here if needed
    e.target.reset();
  };

  return (
    <section
      id="contact-us"
      className={`py-16 px-6 md:px-12 transition-all duration-700 ${
        darkMode ? "bg-[#0e1a2b] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-extrabold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        {/* ✅ Confirmation message */}
        {submitted && (
          <div className="text-green-500 text-center font-medium mb-4">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              required
              className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                darkMode ? "bg-[#1e293b] text-white" : "bg-white text-black"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              required
              className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                darkMode ? "bg-[#1e293b] text-white" : "bg-white text-black"
              }`}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Your Message</label>
            <textarea
              required
              rows={4}
              className={`w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                darkMode ? "bg-[#1e293b] text-white" : "bg-white text-black"
              }`}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactUs;
