import React from "react";

const Banner2 = ({
  backgroundImage,
  title,
  description,
  bgColor = "bg-black",
  textColor = "text-white",
  headColor,
  imageSize = "md:w-[50%]",
}) => {
  return (
    <div
      className={`relative h-[75vh] md:h-[90vh] mt-20 lg:mt-0 ${bgColor} ${textColor}`}
    >
      <div className="h-full max-w-[90vw] mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-10 md:py-20">
        {/* Content */}
        <div className="relative z-10 w-2/3 text-center md:text-left mt-8 md:mt-0">
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 ${headColor}`}
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">{description}</p>
        </div>

        {/* Image */}
        <div
          className={`w-1/3 ${imageSize} flex justify-center md:justify-end`}
        >
          <img
            src={backgroundImage}
            alt="Banner Visual"
            className="w-[80%] md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
