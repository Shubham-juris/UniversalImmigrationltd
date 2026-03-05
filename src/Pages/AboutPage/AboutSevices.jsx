// import React from "react";
// import Studentvisa from "../../assets/hero/studentVisa.jpg";
// import BusinessVisa from "../../assets/hero/BusinessVisa.jpg";
// import WorkVisa from "../../assets/hero/WorkVisa.jpg";
// import TouristVisa from "../../assets/hero/TouristVisa.jpg";
// const services = [
//   {
//     title: "Business Visa",
//     description:
//       "Our Business Visa program offers tailored guidance for professionals and entrepreneurs planning to expand their ventures globally. We provide expert consultation on documentation, compliance, and smooth processing to help you achieve your international business goals.",
//     image: BusinessVisa,
//   },
//   {
//     title: "Student Visa",
//     description:
//       "Our Student Visa guidance program is designed to help students successfully apply for study abroad opportunities. We ensure a hassle-free process, offering personalized support for university applications, documentation, and a smooth transition to your dream education destination.",
//     image: Studentvisa,
//   },
//   {
//     title: "Work Visa",
//     description:
//       "Our Work Visa support program assists professionals in navigating complex application procedures. From job documentation to interview preparation, we provide end-to-end assistance, ensuring you secure the right opportunity abroad with ease.",
//     image: WorkVisa,
//   },
//   {
//     title: "Tourist Visa",
//     description:
//       "Planning a vacation abroad? Our Tourist Visa services ensure all your documentation is in place — from application support to travel tips — so you can enjoy a stress-free and memorable travel experience.",
//     image: TouristVisa,
//   },
// ];

// const AboutSevices = () => {
//   return (
//     <>
//       <section className="py-16 bg-white text-center">
//         <div className="max-w-7xl mx-auto px-4">
//           <p className="text-blue-500 font-semibold text-sm uppercase mb-2">
//             Service We Provide
//           </p>
//           <h2 className="text-4xl font-bold mb-10">
//             Explore Our Visa Citizenship <br />& Immigration Services
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className=" p-6 flex flex-col justify-between shadow-sm  hover:shadow-lg transition-all duration-300 rounded-lg"
//               >
//                 <div>
//                   <h3 className="text-lg font-semibold mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-black-600 mb-4">
//                     {service.description}
//                   </p>
//                 </div>
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-40 object-cover rounded-md mt-4 bg-blue-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="bg-blue-500 text-white py-26 px-4">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
//               Trusted Experienced <br /> Universal Immigration.
//             </h2>
//             <p className="text-base mt-4 mb-8 max-w-md">
//               Universal Immigration has been guiding thousands of students,
//               professionals, and families towards their global dreams. With a
//               client-first approach and certified experts, we deliver
//               transparent, reliable, and successful immigration solutions.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
//               <div className="bg-white text-blue-500 rounded-full p-4 mb-4 text-2xl"></div>
//               <h3 className="text-3xl font-bold">35+</h3>
//               <p className="mt-1 text-sm">Countries Represented</p>
//             </div>

//             <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
//               <div className="bg-white text-blue-500 rounded-full p-4 mb-4 text-2xl"></div>
//               <h3 className="text-3xl font-bold">25K+</h3>
//               <p className="mt-1 text-sm">Visa Delivery</p>
//             </div>

//             <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
//               <div className="bg-white text-blue-500 rounded-full p-4 mb-4 text-2xl"></div>
//               <h3 className="text-3xl font-bold">99%</h3>
//               <p className="mt-1 text-sm">Success Rate</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutSevices;

import React from "react";
import Studentvisa from "../../assets/hero/studentVisa.jpg";
import BusinessVisa from "../../assets/hero/BusinessVisa.jpg";
import WorkVisa from "../../assets/hero/WorkVisa.jpg";
import TouristVisa from "../../assets/hero/TouristVisa.jpg";
import CEOImage from "../../assets/hero/chriag.jpeg"; // Add CEO Image

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
  {
    title: "📣 Influencer Marketing",
    description:
      "We connect brands with powerful social media influencers to promote products, increase visibility, and reach targeted audiences across platforms like Instagram, TikTok, and YouTube.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "⭐ Personal Brand Development",
    description:
      "Our experts help individuals build a strong personal brand online by improving their social media presence, optimizing profiles, and creating a consistent identity that attracts opportunities and followers.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "🚀 Social Media Growth Strategy",
    description:
      "We design data-driven social media strategies to grow your audience, increase engagement, and position your brand as an authority in your industry across all major platforms.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "📈 Personal Ranking & Online Visibility",
    description:
      "Our team helps improve your online presence through SEO optimization, digital reputation management, and strategic content marketing to ensure you rank higher and get noticed online.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
];

const AboutSevices = () => {
  return (
    <>
      {/* ================= CEO SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* CEO Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={CEOImage}
              alt="Chirag Dhiman CEO"
              className="w-80 h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* CEO Content */}
          <div>
            <p className="text-blue-500 font-semibold uppercase text-sm mb-2">
              Meet Our Team
            </p>

            <h2 className="text-4xl font-bold mb-4">
              Chirag Dhiman
            </h2>

            <p className="text-sm font-medium text-gray-600 mb-4">
              CEO
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Chirag Dhiman is a visionary leader with extensive experience in
              global immigration and visa consultancy services. With a strong
              commitment to transparency, integrity, and client success, he has
              successfully guided thousands of individuals toward achieving
              their international dreams. His leadership ensures that every
              client receives professional, reliable, and personalized
              immigration solutions tailored to their goals.
            </p>

            <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-lg mb-2">Address</h4>
              <p className="text-gray-600 text-sm">
                Vishkarma Colony <br />
                Near Punjab National Bank <br />
                Sanour, Patiala
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
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

      {/* ================= STATS SECTION ================= */}
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
              <h3 className="text-3xl font-bold">35+</h3>
              <p className="mt-1 text-sm">Countries Represented</p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
              <h3 className="text-3xl font-bold">25K+</h3>
              <p className="mt-1 text-sm">Visa Delivery</p>
            </div>

            <div className="flex flex-col items-center text-center py-6 px-4 rounded-lg shadow">
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
