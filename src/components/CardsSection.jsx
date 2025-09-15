import React from "react";

const CardsSection = ({
  heading,
  height = "h-auto",
  subheading,
  sectionBg = "bg-white",
  services,
  cardBg = "bg-white",
  hoverBg = "hover:bg-gray-100",
  headColor = "text-black",
  textColor = "text-gray-800",
  textSize = "text-md",
  cardHeadSize = "text-xl",
  hoverTextColor = "hover:text-black",
}) => {
  return (
    <section className={`py-16 px-6 md:px-12 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1
          className={`mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${headColor}`}
        >
          {heading}
        </h1>
        <p className={`mt-6 mb-12 text-lg max-w-4xl mx-auto ${headColor}`}>
          {subheading}
        </p>

        {/* Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${cardBg} ${hoverBg} ${textColor} ${hoverTextColor} ${service.cardBg} ${height} p-6 text-left transition`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className={`${cardHeadSize} font-bold mb-2`}>
                {service.title}
              </h3>
              <p className={`${textSize}`}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
