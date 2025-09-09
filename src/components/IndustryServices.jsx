import React from "react";

const IndustryServices = ({ heading, subheading, services }) => {
  return (
    <section className="bg-black text-white py-5 md:py-10 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-[90vw] mx-auto text-center mb-12">
        {heading && (
          <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
        )}
        {subheading && <p className="mt-4 max-w-3xl mx-auto">{subheading}</p>}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {services?.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 text-center flex flex-col"
          >
            {/* Image */}
            {service.image && (
              <div className="w-full h-48 overflow-hidden p-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="px-6 pb-6 flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryServices;
