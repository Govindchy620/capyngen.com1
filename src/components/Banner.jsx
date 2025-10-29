import React from "react";
import BestHeading2 from "./BestHeading2";

const Banner = ({
  backgroundImage,
  title,
  description,
  overlayBg = "bg-black/70",
}) => {
  return (
    <div
      className="relative min-h-[100vh] md:min-h-screen bg-cover bg-center flex items-center overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayBg}`} />

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10">
        <div className="mx-auto text-center text-white">
          <BestHeading2 title="" highlight={title} />
          <div className="max-w-5xl mx-auto mt-6 md:mt-10 text-base sm:text-lg md:text-xl leading-relaxed px-2">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
