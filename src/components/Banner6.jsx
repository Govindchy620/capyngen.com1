import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ----------------------
// Custom Arrows
// ----------------------
const PrevArrow = ({
  onClick,
  arrowColor = "text-black",
  bgHover = "hover:bg-white/20",
}) => (
  <button
    onClick={onClick}
    className={`absolute inset-y-0 start-0 z-10 inline-flex justify-center items-center w-12 h-full ${arrowColor} ${bgHover} rounded-s-2xl focus:outline-hidden`}
  >
    <svg
      className="shrink-0 size-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 
        8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 
        0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
      />
    </svg>
    <span className="sr-only">Previous</span>
  </button>
);

const NextArrow = ({
  onClick,
  arrowColor = "text-black",
  bgHover = "hover:bg-white/20",
}) => (
  <button
    onClick={onClick}
    className={`absolute inset-y-0 end-0 z-10 inline-flex justify-center items-center w-12 h-full ${arrowColor} ${bgHover} rounded-e-2xl focus:outline-hidden`}
  >
    <svg
      className="shrink-0 size-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 
        6a.5.5 0 0 1 0 .708l-6 6a.5.5 
        0 0 1-.708-.708L10.293 8 4.646 
        2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
    <span className="sr-only">Next</span>
  </button>
);

// ----------------------
// Banner Component
// ----------------------
const Banner6 = ({
  slides = [],
  autoplay = true,
  autoplaySpeed = 3000,
  showDots = false,
  showArrows = true,
  transitionSpeed = 800,
  className = "",
  containerClass = "px-4 sm:px-6 lg:px-8 pt-20 pb-10 bg-black",
  slideHeight = "md:h-[calc(100vh-106px)] h-120",
  textColor = "text-white",
  ctaStyle = "py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100",
  arrowColor = "text-white",
  bgHover = "",
}) => {
  const settings = {
    dots: showDots,
    infinite: true,
    speed: transitionSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay,
    autoplaySpeed,
    arrows: showArrows,
    prevArrow: <PrevArrow arrowColor={arrowColor} bgHover={bgHover} />,
    nextArrow: <NextArrow arrowColor={arrowColor} bgHover={bgHover} />,
    adaptiveHeight: true,
  };

  if (!slides.length)
    return (
      <div className="text-center py-20 text-gray-400">No slides provided.</div>
    );

  return (
    <div className={containerClass}>
      <div
        className={`relative overflow-hidden group w-full ${slideHeight} bg-gray-100 rounded-2xl ${className}`}
      >
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id || slide.title}>
              <div
                className={` w-full ${slideHeight} bg-cover bg-center flex flex-col`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="mt-auto group-hover:bg-black/50 pt-5 ps-5 pb-5 md:ps-10 md:pb-10">
                  {slide.title && (
                    <span
                      className={`block ${textColor} text-3xl md:text-4xl font-semibold`}
                    >
                      {slide.title}
                    </span>
                  )}
                  {slide.subtitle && (
                    <span className={`block ${textColor} text-sm md:text-lg`}>
                      {slide.subtitle}
                    </span>
                  )}
                  {slide.ctaText && (
                    <div className="mt-5">
                      <a href={slide.ctaLink || "#"} className={ctaStyle}>
                        {slide.ctaText}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner6;
