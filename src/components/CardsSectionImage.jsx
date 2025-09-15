import React from "react";

const CardsSectionImage = ({
  heading,
  subheading,
  height = "h-auto",
  sectionBg = "bg-white",
  services,
  cardBg = "bg-white",
  hoverBg = "hover:bg-gray-100",
  headColor = "text-black",
  textColor = "text-gray-800",
  textSize = "text-lg",
  hoverTextColor = "hover:text-black",
  imageHeight = "h-40", // dynamic image height
}) => {
  return (
    <section className={`py-16 px-6 md:px-12 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${headColor}`}>
          {heading}
        </h2>
        <p className={`mb-12 max-w-3xl mx-auto ${headColor}`}>{subheading}</p>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${cardBg} ${hoverBg} ${textColor} ${hoverTextColor} ${service.cardBg} pt-6 px-6 flex flex-col justify-between transition shadow-sm hover:shadow-lg ${height} text-left`}
            >
              {/* Content */}
              <div className="relative">
                {service.icon && <div className="mb-4">{service.icon}</div>}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={`${textSize}`}>{service.description}</p>
              </div>

              {/* Image at Bottom */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full object-cover mt-4 ${imageHeight}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSectionImage;
