import React from "react";
import pageImage1 from "../../assets/hero/pexels-ketut-subiyanto-4901969.jpg";
import pageImage2 from "../../assets/hero/pexels-timur-weber-9186040.jpg";
import pageImage3 from "../../assets/hero/pexels-vlada-karpovich-7368272.jpg";
import pageImage4 from "../../assets/hero/pexels-vlada-karpovich-7368310.jpg";

const coachingData = [
  {
    title: "IELTS Coaching",
    description:
      "Master all four modules — Listening, Reading, Writing, and Speaking — with our expert-led IELTS classes. Ideal for immigration, study abroad, or work visas, our program boosts your chances of scoring 7+ bands.",
    image: pageImage1,
  },
  {
    title: "Citizenship Test Preparation",
    description:
      "Get fully prepablue for your Canadian or U.S. Citizenship Test with detailed lessons on government, rights, responsibilities, and history. Our practice tests and coaching ensure you're confident on test day.",
    image: pageImage2,
  },
  {
    title: "TOEFL Training",
    description:
      "Our TOEFL program is designed for students seeking academic admission abroad. We focus on test-taking strategies and English fluency to help you score high and meet university language requirements.",
    image: pageImage3,
  },
  {
    title: "OET Coaching for Healthcare Professionals",
    description:
      "Designed for doctors, nurses, and healthcare workers aiming to work overseas, our OET coaching includes role-plays, writing corrections, and clinical communication practice tailoblue for global settings.",
    image: pageImage4,
  },
];

const PageCourseCards = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {coachingData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white flex items-center rounded-xl shadow-md p-6 space-x-6 transition-transform hover:scale-[1.02]"
          >
            <div className="flex-shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <a
                href="#"
                className="text-blue-500 font-semibold flex items-center hover:underline"
              >
                Read More <span className="ml-1 text-lg">➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCourseCards;
