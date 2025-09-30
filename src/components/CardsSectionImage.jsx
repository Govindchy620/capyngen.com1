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
    <section className={`${sectionBg} py-16 px-6 md:px-12`}>
      <div className="max-w-7xl mx-auto text-center space-y-5">
        {/* Heading */}
        <h1
          className={`mt-2 text-3xl font-bold tracking-tight sm:text-5xl ${headColor}`}
        >
          {heading}
        </h1>
        <p
          className={`mb-12 max-w-3xl mx-auto ${headColor} text-base md:text-lg`}
        >
          {subheading}
        </p>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className={`${cardBg} ${hoverBg} ${textColor} ${hoverTextColor} ${
                service.cardBg || ""
              } pt-6 px-6 flex flex-col justify-between transition-shadow shadow-sm hover:shadow-lg ${height} text-left `}
              tabIndex={0}
              aria-labelledby={`service-title-${index}`}
              aria-describedby={`service-desc-${index}`}
            >
              {/* Content */}
              <div className="relative">
                {service.icon && <div className="mb-4">{service.icon}</div>}
                <h3
                  id={`service-title-${index}`}
                  className="text-xl font-bold mb-2"
                >
                  {service.title}
                </h3>
                <p
                  id={`service-desc-${index}`}
                  className={`${textSize} leading-relaxed`}
                >
                  {service.description}
                </p>
              </div>

              {/* Image at Bottom */}
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full object-cover mt-6 shadow-sm ${imageHeight}`}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSectionImage;
