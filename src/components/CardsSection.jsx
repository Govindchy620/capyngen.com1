import React from "react";

const CardsSection = ({
  heading,
  height = "h-auto",
  subheading,
  sectionBg = "bg-white dark:bg-gray-900",
  services,
  cardBg = "bg-white dark:bg-gray-800",
  hoverBg = "hover:bg-gray-100 dark:hover:bg-gray-700",
  headColor = "text-black dark:text-white",
  textColor = "text-gray-800 dark:text-gray-300",
  textSize = "text-md md:text-md",
  cardHeadSize = "text-xl md:text-2xl",
  hoverTextColor = "hover:text-black dark:hover:text-white",
}) => {
  return (
    <section
      className={`py-16 px-6 md:px-12 ${sectionBg} transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1
          className={`mt-2 text-3xl sm:text-4xl md:text-5xl  font-bold tracking-tight ${headColor} drop-shadow-md`}
        >
          {heading}
        </h1>
        <div
          className={`mt-6 mb-12 text-lg max-w-6xl mx-auto ${headColor} drop-shadow-sm`}
        >
          {subheading}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className={`${cardBg} ${hoverBg} ${textColor} ${hoverTextColor} ${
                service.cardBg || ""
              } ${height} p-6 shadow-md transition-all duration-300 text-left flex flex-col`}
              tabIndex={0}
              aria-labelledby={`card-title-${index}`}
              aria-describedby={`card-desc-${index}`}
            >
              <div className="mb-6 flex justify-center">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title || `service-img-${index}`}
                    className="w-full max-h-48 object-cover rounded-md shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  service.icon
                )}
              </div>
              <h3
                id={`card-title-${index}`}
                className={`${cardHeadSize} font-bold mb-3`}
              >
                {service.title}
              </h3>
              <p id={`card-desc-${index}`} className={`${textSize} flex-grow`}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
