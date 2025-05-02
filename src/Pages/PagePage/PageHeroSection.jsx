import React from "react";
import PageCourseCards from "./PageCourseCards";
import PageImage1 from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import PageImage2 from "../../assets/hero/pexels-ekrulila-2305114.jpg";
import PageImage3 from "../../assets/hero/pexels-freestockpro-1008155.jpg";
import PageImage4 from "../../assets/hero/pexels-joshsorenson-1716826.jpg";

const PageHeroSection = () => {
  const coachingData = [
    {
      title: "IELTS Coaching",
      description:
        "Achieve your target band score with our IELTS coaching designed for immigration, study, and work purposes. Learn with certified trainers, take regular mock tests, and receive personalized feedback on all four modules.",
      image: PageImage1,
    },
    {
      title: "Citizenship Test Preparation",
      description:
        "Get ready for your Canadian or U.S. citizenship test through expert-led classes covering government structure, civic duties, and national history. We offer practice exams and tips to ensure exam readiness.",
      image: PageImage2,
    },
    {
      title: "TOEFL Training",
      description:
        "Our TOEFL training program focuses on enhancing your academic English skills for university admission abroad. Benefit from strategy-based sessions, practice tests, and expert guidance to achieve high scores.",
      image: PageImage3,
    },
    {
      title: "OET Coaching",
      description:
        "Tailoblue for healthcare professionals, our OET coaching helps you build communication skills specific to medical settings. Prepare for all sub-tests with real-world role plays, writing samples, and expert evaluation.",
      image: PageImage4,
    },
  ];

  return (
    <>
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(1, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url(${PageImage1})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-6 md:px-16">
          <h1 className="text-4xl md:text-7xl font-bold text-white text-center md:text-left lg:px-20">
            Coaching
          </h1>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coachingData.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 text-center shadow-md transform transition-all duration-300 hover:scale-105 bg-white text-black hover:bg-blue-600 hover:text-white"
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <PageCourseCards />
    </>
  );
};

export default PageHeroSection;
