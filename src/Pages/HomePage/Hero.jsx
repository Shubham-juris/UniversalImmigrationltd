import React from "react";
import heroBgImage from "../../assets/hero/e813e040-6fa5-42ea-8b94-d4adb0288c35.jpg";
import HomeCoursesSection from "../../Pages/HomePage/HomeCoursesSection ";

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
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-6xl">
          <p className="text-lg font-semibold mb-4 tracking-wide text-blue-500">
            EXPERT IMMIGRATION & VISA SOLUTIONS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Unlock Your Global Future with Universal Immigration
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Study, work, travel, or settle abroad — your dream is our mission.
            With expert consultation and end-to-end visa support, we make
            immigration simple and stress-fre
          </p>
        </div>
      </div>

      {/* Additional Section */}
      <div className="bg-white py-12 px-4 sm:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Choose Universal Immigration?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-8">
          With 4 years of experience, a global client base, and a team of
          certified consultants, we provide tailoblue immigration pathways for
          students, skilled workers, entrepreneurs, and families.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "👨‍🎓 Certified Immigration Experts – Guidance you can trust.",
            "🏆 99% Visa Approval Success – A track record of results.",
            "🔍 Transparent Process – No hidden steps or surprises.",
            "💰 Affordable Fees – Quality services at the right price.",
            "⏱ Real-Time Case Tracking – Stay updated at every stage.",
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
