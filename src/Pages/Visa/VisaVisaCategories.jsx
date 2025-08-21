import React from "react";

const visaServices = [
  { title: "Business Visa", icon: "👷‍♂️" },
  { title: "Student Visa", icon: "🎓" },
  { title: "Work Visa", icon: "🧰" },
  { title: "Tourist Visa", icon: "📸" },
  { title: "Family Visa", icon: "👨‍👩‍👧‍👦" },
];

const VisaVisaCategories = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 md:px-10 lg:px-16 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 text-center md:text-left">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <p className="text-blue-500 uppercase font-semibold tracking-wide">
              Visa Categories
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Outstanding Immigration <br /> Visa Services
            </h2>
          </div>

          <div className="md:w-1/2 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Universal Immigration is your trusted partner for all types of visa
            and immigration needs. We specialize in providing end-to-end support
            — from application guidance to documentation and interview
            preparation — ensuring a smooth and stress-free process for our
            clients worldwide.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10 ">
          {visaServices.map((visa, index) => (
            <div
              key={index}
              className="bg-white hover:bg-blue-500  shadow-md rounded-md py-8 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4 text-blue-500">{visa.icon}</div>
              <h4 className="font-semibold text-lg ">{visa.title}</h4>
            
            </div>
          ))}
        </div>

        <div className="text-center font-semibold text-sm sm:text-base lg:text-lg">
          Bring Them Together And You Overcome The Ordinary.
          <span className="text-black font-normal ml-2">
            because your dreams deserve the right direction.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VisaVisaCategories;
