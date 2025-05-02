import React from "react";
import heroBgImage from "../../assets/hero/e813e040-6fa5-42ea-8b94-d4adb0288c35.jpg";
import HomeCoursesSection from '../../Pages/HomePage/HomeCoursesSection '

const Hero = () => {
  return (
    <>
      <div
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(2, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${heroBgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-2xl">
          <p className="text-lg font-semibold mb-4 tracking-wide text-blue-500">
            EXPERT IMMIGRATION & VISA SOLUTIONS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Unlock Your Global Future <br /> with Universal Immigration
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Study, work, visit, or settle abroad — your dream is our mission.
            We simplify complex immigration processes with expert guidance.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-500 transition-colors duration-300 px-6 py-3 rounded-md text-white font-semibold">
              Get Free Consultation
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-black transition-colors duration-300 px-6 py-3 rounded-md text-white font-semibold">
              Explore Services
            </button>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-white py-12 px-4 sm:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Choose Universal Immigration?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          With years of experience, a global client base, and a team of certified consultants,
          we provide tailoblue immigration pathways for students, skilled workers,
          entrepreneurs, and families.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Certified Immigration Experts",
            "99% Visa Approval Success",
            "Transparent Process",
            "Affordable Fees",
            "Real-Time Case Tracking",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cyan-50 border border-cyan-100 text-cyan-800 rounded-lg px-6 py-4 shadow-sm w-64"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <HomeCoursesSection />
    </>
  );
};

export default Hero;
