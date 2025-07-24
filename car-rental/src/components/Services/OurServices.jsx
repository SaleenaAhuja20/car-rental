import React from "react";
import {
  Car,
  ShieldCheck,
  PhoneCall,
  Plane,
} from "lucide-react";

function OurServices({ darkMode }) {
  const services = [
    {
      icon: <Car size={32} color={darkMode ? "#ffffff" : "#0f172a"} />,
      title: "Daily Car Rentals",
      desc: "Affordable and flexible car rental plans.",
    },
    {
    icon: <Car size={32} color={darkMode ? "#ffffff" : "#0f172a"} />,
      title: "Airport Transfers",
      desc: "On-time pickup & drop to all major airports.",
    },
    {
      icon: <ShieldCheck size={32} color={darkMode ? "#ffffff" : "#0f172a"} />,
      title: "Fully Sanitized Cars",
      desc: "Cleaned & disinfected before every ride.",
    },
    {
      icon: <PhoneCall size={32} color={darkMode ? "#ffffff" : "#0f172a"} />,
      title: "24/7 Support",
      desc: "Always here to assist you, anytime.",
    },
  ];

  return (
    <section
      className={`py-16 px-6 md:px-12 transition-all duration-700 ${
        darkMode ? "bg-[#0e1a2b] text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className={`text-4xl font-extrabold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Our Services
        </h2>
        <p className="text-lg opacity-80">
          We provide the best-in-class services tailored to your travel needs.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              darkMode ? "bg-[#1e293b]" : "bg-gray-50"
            }`}
            data-aos="fade-up"
data-aos-delay={idx * 100}
data-aos-duration="600"

          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm opacity-80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
