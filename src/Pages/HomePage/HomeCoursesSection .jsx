import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import heroBgImage from "../../assets/hero/studentVisa.jpg";
import heroBgImage1 from "../../assets/hero/AboutImage1.jpg";
import heroBgImage2 from "../../assets/hero/AboutImage2.jpg";
import heroBgImage3 from "../../assets/hero/AboutImage3.jpg";
import mainImage from "../../assets/hero/TouristVisa.jpg";
import smallImage from "../../assets/hero/VisaImg.jpg";
import PageImage1 from "../../assets/hero/pexels-cottonbro-5137969.jpg";
import PageImage2 from "../../assets/hero/pexels-ekrulila-2305114.jpg";
import PageImage3 from "../../assets/hero/pexels-freestockpro-1008155.jpg";
import PageImage4 from "../../assets/hero/pexels-joshsorenson-1716826.jpg";

const HomeCoursesSection = () => {
  const services = [
    {
      title: "Student Visa",
      description:
        "Universal Immigration provides tailoblue student visa services, helping applicants navigate admission requirements, visa documentation, and interview preparation to study abroad in Canada, UK, USA, and more.",
      image: heroBgImage,
    },
    {
      title: "Work Permit Visa",
      description:
        "Our work visa consultants assist in securing employment-based visas, ensuring your application meets all legal standards and increases your chances of international job placement.",
      image: heroBgImage1,
    },
    {
      title: "Permanent Residency",
      description:
        "From Express Entry to Family Sponsorship and Provincial Nominee Programs, we guide you through the entire PR process, making your immigration journey smooth and stress-free.",
      image: heroBgImage2,
    },
    {
      title: "Tourist & Visitor Visa",
      description:
        "We simplify the tourist visa application process, from documentation to travel history guidance, ensuring your trip is hassle-free and approved quickly.",
      image: heroBgImage3,
    },
  ];

  const coachingPrograms = [
    {
      title: "IELTS Coaching",
      description:
        "Achieve top scores with our personalized IELTS training. We focus on improving your skills in speaking, reading, writing, and listening to help you succeed in global immigration or academics.",
      image: PageImage1,
    },
    {
      title: "Citizenship Test Prep",
      description:
        "Our citizenship coaching prepares you for your naturalization test with mock exams, key facts, and personalized guidance about government, history, and responsibilities.",
      image: PageImage2,
    },
    {
      title: "TOEFL & PTE Training",
      description:
        "Get expert support for TOEFL and PTE exams. We offer comprehensive courses with real test simulations and strategic guidance to improve fluency and accuracy.",
      image: PageImage3,
    },
    {
      title: "OET for Medical Professionals",
      description:
        "Designed for doctors and nurses, our OET course ensures language proficiency for healthcare settings, with scenario-based training and exam-focused preparation.",
      image: PageImage4,
    },
  ];

  return (
    <>
      {/* Visa Services Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start bg-white p-6 rounded-xl shadow-md hover:bg-blue-500 transition-colors duration-300 group"
            >
              <div className="min-w-[96px] w-24 h-24 mr-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-white">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-1/2">
            <img
              src={mainImage}
              alt="Main"
              className="rounded-md w-full h-auto object-cover"
            />
            <img
              src={smallImage}
              alt="Small"
              className="absolute -bottom-10 left-10 w-2/3 rounded-md shadow-xl border-4 border-white"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="text-LG text-blue-500 font-semibold uppercase mb-2">
              About Universal Immigration
            </p>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Your Global Partner in Immigration & Education
            </h2>
            <p className="text-gray-600 mb-6">
              At Universal Immigration, we specialize in personalized visa
              consulting, study abroad support, and test prep coaching to help
              individuals and families achieve their global migration dreams.
            </p>

            <div className="flex gap-10 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl font-bold text-black">
                  92%
                </div>
                <p className="mt-2 font-semibold">Visa Success Rate</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-blue-500 flex items-center justify-center text-2xl font-bold text-black">
                  85%
                </div>
                <p className="mt-2 font-semibold">Client Retention</p>
              </div>
            </div>

            <ul className="space-y-3 mb-6 text-gray-800 font-medium">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Licensed Immigration Experts
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                24/7 Client Support
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                End-to-End Application Help
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <div className="bg-gray-100 py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coachingPrograms.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 text-center shadow-md transform transition-all duration-300 hover:scale-105 bg-white text-black hover:bg-blue-500 hover:text-white"
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
    </>
  );
};

export default HomeCoursesSection;
