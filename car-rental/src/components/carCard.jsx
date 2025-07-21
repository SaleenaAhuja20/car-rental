const CarCard = ({ image, name, price }) => {
  return (
    <div
      className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-2 duration-300 p-5 text-center"
      data-aos="fade-up"
    >
      <img src={image} alt={name} className="w-full h-40 object-contain mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-3">{price}</p>
      <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-indigo-600 transition">
        Book Now
      </button>
    </div>
  );
};

export default CarCard;
