import React from "react";
import Studentvisa from "../../assets/hero/studentVisa.jpg";
import BusinessVisa from "../../assets/hero/BusinessVisa.jpg";
import WorkVisa from "../../assets/hero/WorkVisa.jpg";
import TouristVisa from "../../assets/hero/TouristVisa.jpg";
const services = [
  {
    title: "Business Visa",
    description:
      "Our Business Visa program offers tailored guidance for professionals and entrepreneurs planning to expand their ventures globally. We provide expert consultation on documentation, compliance, and smooth processing to help you achieve your international business goals.",
    image: BusinessVisa,
  },
  {
    title: "Student Visa",
    description:
      "Our Student Visa guidance program is designed to help students successfully apply for study abroad opportunities. We ensure a hassle-free process, offering personalized support for university applications, documentation, and a smooth transition to your dream education destination.",
    image: Studentvisa,
  },
  {
    title: "Work Visa",
    description:
      "Our Work Visa support program assists professionals in navigating complex application procedures. From job documentation to interview preparation, we provide end-to-end assistance, ensuring you secure the right opportunity abroad with ease.",
    image: WorkVisa,
  },
  {
    title: "Tourist Visa",
    description:
      "Planning a vacation abroad? Our Tourist Visa services ensure all your documentation is in place — from application support to travel tips — so you can enjoy a stress-free and memorable travel experience.",
    image: TouristVisa,
  },
];

const AboutSevices = () => {
  return (
    <>
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-blue-500 font-semibold text-sm uppercase mb-2">
            Service We Provide
          </p>
          <h2 className="text-4xl font-bold mb-10">
            Explore Our Visa Citizenship <br />& Immigration Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {services.map((service, index) => (
              <div
                key={index}
                className=" p-6 flex flex-col justify-between shadow-sm  hover:shadow-lg transition-all duration-300 rounded-lg"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-black-600 mb-4">
                    {service.description}
                  </p>
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mt-4 bg-blue-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-500 text-white py-26 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
              Trusted Experienced <br /> Universal Immigration.
            </h2>
            <p className="text-base mt-4 mb-8 max-w-md">
              Universal Immigration has been guiding thousands of students,
              professionals, and families towards their global dreams. With a
              client-first approach and certified experts, we deliver
              transparent, reliable, and successful immigration solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-blue-500 rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">35+</h3>
              <p className="mt-1 text-sm">Countries Represented</p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-blue-500 rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="mt-1 text-sm">Visa Delivery</p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <div className="bg-white text-blue-500 rounded-full p-4 mb-4 text-2xl"></div>
              <h3 className="text-3xl font-bold">99%</h3>
              <p className="mt-1 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSevices;
