import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Fuel, Settings, Users } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    image: "/toyota-corolla.png",
    pricePerDay: 4500,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
  },
  {
    id: 2,
    name: "Honda Civic",
    image: "/Honda-civic.png",
    pricePerDay: 5500,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
  },
  {
    id: 3,
    name: "Kia Sportage",
    image: "/Kia-sportage.png",
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
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 3000);
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
        <h2 className="text-4xl font-extrabold mb-4">Available Cars</h2>
        <p className="text-lg opacity-80">
          Choose from our top-rated, comfortable and premium cars.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cars.map((car) => (
          <div
            key={car.id}
            className={`rounded-2xl shadow-lg p-5 transition duration-300 hover:scale-[1.02] ${
              darkMode ? "bg-[#1e293b]" : "bg-gray-50"
            }`}
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
          </div>
        ))}
      </div>

      {/* View Details Modal */}
      <Dialog
        open={!!selectedCar && !showBookingForm}
        onClose={() => setSelectedCar(null)}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm px-4"
      >
        {selectedCar && (
          <Dialog.Panel
            className={`w-full max-w-md p-6 rounded-2xl shadow-2xl transition-all duration-300 ${
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
                onClick={() => setShowBookingForm(true)}
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
          </Dialog.Panel>
        )}
      </Dialog>

      {/* Booking Form Modal */}
      <Dialog
        open={showBookingForm}
        onClose={() => setShowBookingForm(false)}
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        <Dialog.Panel
          className={`relative z-50 w-full max-w-sm p-6 rounded-xl shadow-xl transition-all ${
            darkMode ? "bg-[#1e293b] text-white" : "bg-white text-gray-900"
          }`}
        >
          <Dialog.Title className="text-xl font-bold mb-4 text-center">
            🚗 Book Your Ride
          </Dialog.Title>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Booking Date</label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
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
              onClick={() => setShowBookingForm(false)}
              className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400"
            >
              Cancel
            </button>
          </form>
        </Dialog.Panel>
      </Dialog>

      {/* Booking Success Toast */}
      {bookingSuccess && (
        <div className="fixed bottom-6 right-6 z-50 px-6 py-3 rounded-xl shadow-xl transition-all text-white border
        backdrop-blur-md
        bg-gradient-to-r from-teal-600 to-teal-700
        ">
          ✅ Your car has been booked!
        </div>
      )}
    </section>
  );
}

export default AvailableCars;
