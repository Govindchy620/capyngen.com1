import React from "react";

const NewSection = ({
  backgroundImage,
  overlayBg = "bg-black/30",
  title = "Learn and trade what you want. When you want.",
  description = "Improve your strategy and become a more confident trader with expert market analysis, advanced trading tools and comprehensive educational materials.",
  buttonText = "START TRADING",
  buttonLink = "#",
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] xl:min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayBg}`}></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto">
          {description}
        </p>
        {buttonText && (
          <a href={buttonLink}>
            <button className="border border-white text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#00bafa] hover:border-[#00bafa] transition-all text-sm sm:text-base">
              {buttonText}
            </button>
          </a>
        )}
      </div>
    </section>
  );
};

export default NewSection;
