import React from "react";

const hostelData = [
  { title: "Manage Hostel Master Data", icon: "/ho.svg" },
  { title: "Manage Allotments & Check-Outs", icon: "/check.svg" },
  { title: "Hostel Attendance & Leave Management", icon: "/home.svg" },
  { title: "Hostel Service Automation", icon: "/set.svg" },
  { title: "Hostel Fee Management", icon: "/box.svg" },
];

const Hostel = () => {
  return (
    <div className=" py-10 px-4">

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {hostelData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center text-center px-4 py-12 hover:shadow-xl transition cursor-pointer"
          >
            <div className="mb-3 flex items-center justify-center">
              <img src={item.icon} alt="" className="w-10 sm:w-12" />
            </div>

            <p className="text-xs sm:text-sm font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* SECTION AREA */}
      <div className="max-w-7xl mx-auto mt-16 gap-10 items-center p-15">
        
        {/* TEXT */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Key Areas of Hostel Management System
          </h2>

          <h3 className="mt-4 text-lg sm:text-xl font-semibold">
            Streamline and Manage Hostel Operations Seamlessly From a Single Dashboard
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Digiicampus offers a cloud-based, AI-driven hostel management system to automate all hostel activities, including hostel admissions, fees <br /> management, rooms allotment, and generate multiple reports in real-time.
            </p>
        </div>

        {/* IMAGE */}
        <div className=" flex justify-center">
          <img
            src="/creen.webp"
            alt=""
            className="w-full  max-w-lg md:max-w-lg  mt-20"
          />
        </div>

      </div>
    </div>
  );
};

export default Hostel;