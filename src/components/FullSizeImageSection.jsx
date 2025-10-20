import React from "react";
import { Link } from "react-router-dom";

const FullSizeImageSection = ({
  backgroundImage,
  title = "Learn and trade what you want. When you want.",
  description = "Improve your strategy and become a more confident trader with expert market analysis, advanced trading tools and comprehensive educational materials.",
  buttonText = "START TRADING",
  overlayColor = "bg-black/30",
  buttonLink = "/contact-us", // Default route
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] xl:min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={`absolute inset-0 ${overlayColor}`}></div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-white max-w-3xl mx-auto">
          {description}
        </p>

        <Link
          to={buttonLink}
          className="inline-block border border-white bg-black/50 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all text-sm sm:text-base"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default FullSizeImageSection;
