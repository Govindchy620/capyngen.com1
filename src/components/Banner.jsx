import React from "react";
import BestHeading from "./BestHeading";

const Banner = ({
  backgroundImage,
  title,
  description,
  overlayBg = "bg-black/70",
}) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="h-full max-w-7xl mx-auto flex items-center justify-start px-10">
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayBg}`}></div>

        {/* Content */}
        <div className=" text-center mx-auto z-10 max-w-4xl text-white">
          <BestHeading title="" highlight={title} />
          <p className="text-lg md:text-xl mb-6 mt-10">{description}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Banner;
