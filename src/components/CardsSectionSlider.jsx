"use client";

import React from "react";
import Slider from "react-slick";

const CardsSectionSlider = ({
  heading = "Dynamic Slider Heading",
  subheading = "",
  services = [],
  headColor = "text-black",
  sectionBg = "bg-white",
  textColor = "text-gray-900",
  autoplay = true,
  footerNote = "",
  autoplaySpeed = 3000,
  slidesToShow = 4,
  speed = 500,
  pauseOnHover = false,
  responsive = [
    { breakpoint: 1280, settings: { slidesToShow: 3 } },
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    pauseOnHover,
    responsive,
    accessibility: true,
    arrows: false,
  };

  return (
    <section
      className={`${sectionBg} py-16 px-6 md:px-12`}
      aria-label="Cards Section Slider"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Dynamic Heading */}
        <h1 className={`text-3xl sm:text-5xl font-bold mb-4 ${headColor}`}>
          {heading}
        </h1>
        {subheading && (
          <p
            className={`mb-5 max-w-3xl mx-auto ${headColor} text-base md:text-lg`}
          >
            {subheading}
          </p>
        )}

        {/* Slider */}
        <Slider {...settings}>
          {services.map((item, index) => (
            <div
              key={index}
              className="px-2 group overflow-hidden mt-10"
              role="listitem"
              tabIndex={-1}
            >
              <article
                className={`relative h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[60vh] flex flex-col justify-end overflow-hidden rounded-lg ${
                  item.textColor || "text-white"
                }`}
                aria-label={item.title}
              >
                {/* Background Image */}
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Content Overlay */}
                <div className="absolute h-full left-0 bottom-0 z-10 w-full py-5 px-4 bg-black/60 hover:bg-black/30 transition-all duration-700">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
      {/* Footer Note */}
      <p className="text-center text-white mt-16 text-lg md:text-xl font-medium max-w-6xl mx-auto leading-relaxed ">
        {footerNote}
      </p>
    </section>
  );
};

export default CardsSectionSlider;
