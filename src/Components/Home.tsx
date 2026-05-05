const Home = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh]">

      {/* Background Image */}
      <img
        src="/Room.png"
        alt="Room"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="text-white text-2xl sm:text-4xl font-semibold">
          Hostel Management
        </h1>

        <p className="text-white text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
          A one-stop solution for higher education institutions, meticulously designed and developed with a focus on addressing the challenges of hostel management.
        </p>

        <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-2 rounded-full mt-6 text-sm sm:text-base hover:cursor-pointer">
          SCHEDULE A DEMO
        </button>

      </div>
    </div>
  );
};

export default Home;