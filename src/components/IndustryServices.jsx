import React from "react";

const IndustryServices = ({
  heading,
  subheading,
  services = [],
  // New props for customization
  sectionBg = "bg-black",
  sectionText = "text-white",
  headingColor = "text-white",
  subheadingColor = "text-gray-300",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  cardBg = "bg-white",
  cardText = "text-gray-900",
  cardDescText = "text-gray-600",
  cardShadow = "shadow-md hover:shadow-xl",
}) => {
  return (
    <section
      className={`${sectionBg} ${sectionText} py-5 md:py-10 px-6 md:px-12`}
    >
      {/* Header */}
      <div className="max-w-[90vw] mx-auto text-center mb-12">
        {heading && (
          <h2 className={`text-3xl md:text-4xl font-bold ${headingColor}`}>
            {heading}
          </h2>
        )}
        {subheading && (
          <p className={`mt-4 max-w-3xl mx-auto ${subheadingColor}`}>
            {subheading}
          </p>
        )}
      </div>

      {/* Grid */}
      <div className={`grid ${gridCols} gap-2`}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${cardBg} ${cardShadow} transition-all duration-300 text-center flex flex-col`}
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
              <h3 className={`text-xl font-bold ${cardText}`}>
                {service.title}
              </h3>
              <p
                className={`${cardDescText} text-md text-left leading-relaxed`}
              >
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
