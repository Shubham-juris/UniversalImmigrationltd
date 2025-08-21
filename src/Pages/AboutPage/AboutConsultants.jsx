import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AboutConsultants = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="font-sans">
        <div className="relative bg-blue-700 text-white py-20 px-4 md:px-16 overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-cover bg-center bg-[url('/path-to-your-background-image.jpg')] z-0"></div>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <p className="text-4xl md:text-5xl font-bold mt-4">
              Let’s Connect & Start Your Immigration Journey Today
            </p>

            <h1 className="uppercase text-sm tracking-widest font-semibold py-5">
              Our experts are here 24/7 to guide you with the right visa and
              immigration solutions tailored to your needs.
            </h1>
            <button
              className="mt-8 bg-white text-black font-semibold py-3 px-6 rounded hover:bg-gray-100 transition"
              onClick={handleClick}
            >
              Book Free Consultation
            </button>
          </div>
        </div>

        <div className="bg-black text-white py-12 px-4 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500">
                <FaPhoneAlt className="text-blue-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Call Us 24/7</p>
                <p className="font-bold text-lg text-white">+91 7087107698</p>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500">
                <FaEnvelope className="text-blue-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Make a Quote</p>
                <p className="font-bold text-lg text-white">
                  support@universalimmigration.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500">
                <FaMapMarkerAlt className="text-blue-500 text-lg" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Location</p>
                <p className="font-bold text-lg text-white">
                  A -301, PINNACLE APPT NEAR PASHWANATH METRO CITY , C,
                  Ahmednagar, India Gujarat
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutConsultants;
