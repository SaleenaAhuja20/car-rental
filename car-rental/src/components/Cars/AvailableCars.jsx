// AvailableCars.jsx
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Fuel, Settings, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cars = [
  {
    id: 1,
    name: "Kia Sportage",
    image: "/toyota-corolla.png",
    pricePerDay: 4500,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 2,
    name: "Mercedes-Benz E-Class",
    image: "/honda-civic.png",
    pricePerDay: 5500,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
  },
  {
    id: 3,
    name: "Kia Sportage",
    image: "/kia-sportage.png",
    pricePerDay: 7000,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
  },
];

function AvailableCars({ darkMode }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDate, setBookingDate] = useState("");

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setShowBookingForm(false);
    setSelectedCar(null); // move this up immediately!
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2500);
  };

  const buttonBase =
    "px-4 py-2 rounded-xl font-medium transition-all border";

  return (
    <section
      id="available-cars"
      className={`py-16 px-6 md:px-12 transition-all duration-700 ${
        darkMode ? "bg-[#0e1a2b] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Available Cars
        </motion.h2>
        <motion.p
          className="text-lg opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false }}
        >
          Choose from our top-rated, comfortable and premium cars.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cars.map((car, i) => (
          <motion.div
            key={car.id}
            className={`rounded-2xl shadow-lg p-5 transition duration-300 hover:scale-[1.02] ${
              darkMode ? "bg-[#1e293b]" : "bg-gray-50"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: false }}
          >
            <img
              src={car.image}
              alt={car.name}
              className="rounded-xl mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-2xl font-semibold">{car.name}</h3>

            <div className="flex flex-wrap gap-3 mt-3 text-sm font-medium opacity-90">
              <div className="flex items-center gap-1">
                <Settings size={16} /> {car.transmission}
              </div>
              <div className="flex items-center gap-1">
                <Fuel size={16} /> {car.fuel}
              </div>
              <div className="flex items-center gap-1">
                <Users size={16} /> {car.seats} seats
              </div>
            </div>

            <p className="text-xl font-bold mt-4">
              Rs. {car.pricePerDay}/day
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">
              <button
                onClick={() => setSelectedCar(car)}
                className={`${buttonBase} flex-1 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-black"
                    : "border-gray-800 text-gray-800 hover:bg-gray-900 hover:text-white"
                }`}
              >
                View Details
              </button>

              <button
                onClick={() => {
                  setSelectedCar(car);
                  setShowBookingForm(true);
                }}
                className={`${buttonBase} flex-1 bg-transparent mt-1 hover:bg-white/10 ${
                  darkMode
                    ? "border-white text-white"
                    : "border-gray-700 text-gray-700"
                }`}
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View Details Modal */}
      <AnimatePresence>
        {selectedCar && !showBookingForm && (
          <Dialog
            open
            onClose={() => setSelectedCar(null)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="fixed inset-0 bg-black/40 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative z-50 w-full max-w-md p-6 rounded-2xl shadow-2xl ${
                darkMode ? "bg-[#1e293b] text-white" : "bg-white text-black"
              }`}
            >
              <Dialog.Title className="text-2xl font-bold mb-4">
                {selectedCar.name}
              </Dialog.Title>
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />
              <div className="space-y-2 text-sm opacity-90">
                <p><strong>Price/Day:</strong> Rs. {selectedCar.pricePerDay}</p>
                <p><strong>Transmission:</strong> {selectedCar.transmission}</p>
                <p><strong>Fuel:</strong> {selectedCar.fuel}</p>
                <p><strong>Seats:</strong> {selectedCar.seats}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => {
                    setShowBookingForm(true);
                  }}
                  className="flex-1 px-4 py-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700"
                >
                  Book Now
                </button>
                <button
                  onClick={() => setSelectedCar(null)}
                  className="flex-1 px-4 py-2 rounded-xl bg-gray-300 text-gray-800 hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Booking Form Modal */}
      {/* Booking Form Modal */}
<AnimatePresence>
  {showBookingForm && (
    <Dialog
      open
      onClose={() => {
        setShowBookingForm(false);
        setSelectedCar(null);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md" />
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`relative z-50 w-full max-w-md max-h-[60vh] overflow-y-auto p-6 rounded-xl shadow-xl ${
          darkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-900"
        }`}
      >
        <Dialog.Title className="text-xl font-bold mb-4 text-center">
           Book Your Ride
        </Dialog.Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowBookingForm(false);
            setSelectedCar(null);
            alert("🎉 Your ride has been booked successfully!");
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Pickup Location</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Drop-off Location</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Pickup Date & Time</label>
            <input
              type="datetime-local"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Drop-off Date & Time</label>
            <input
              type="datetime-local"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
          >
            Confirm Booking
          </button>
          <button
            type="button"
            onClick={() => {
              setShowBookingForm(false);
              setSelectedCar(null);
            }}
            className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
          >
            Cancel
          </button>
        </form>
      </motion.div>
    </Dialog>
  )}
</AnimatePresence>


      {/* Booking Success Toast */}
      <AnimatePresence>
        {bookingSuccess && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 px-6 py-3 rounded-xl shadow-xl text-white border backdrop-blur-md bg-gradient-to-r from-teal-600 to-teal-700"
          >
            Your {selectedCar?.name} has been booked!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AvailableCars;
