import React from "react";

const CardsSectionGrid = ({
  heading = "Absolute Ecommerce Mobile App Development Solutions",
  description = [
    "We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development Company services are globally renowned for providing avant-garde and reliable mobile app solutions.",
    "Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs.",
    "If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
  ],
  services = [],
  reverse = false, // 🔄 new prop
}) => {
  return (
    <section className="bg-[#121a2b] py-16 px-6 md:px-12 text-white">
      <div
        className={`max-w-7xl mx-auto flex flex-col gap-12 items-center lg:gap-16 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${service.iconBg}`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right/Left Content */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{heading}</h2>
          <div className="space-y-4 text-gray-200">
            {Array.isArray(description) ? (
              description.map((para, idx) => <p key={idx}>{para}</p>)
            ) : (
              <p>{description}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSectionGrid;
