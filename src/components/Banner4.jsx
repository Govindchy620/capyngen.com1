import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner4 = ({ slides }) => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    beforeChange: (_, newIndex) => setActiveSlide(newIndex),
    accessibility: true,
    adaptiveHeight: false,
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-900">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            aria-hidden={activeSlide !== index}
            aria-label={`${slide.title} slide`}
            role="group"
          >
            <div
              className="relative min-h-[80vh] flex items-center justify-start px-6 md:px-20 bg-cover bg-center transition-transform duration-700 ease-in-out"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-roledescription="slide background"
              alt={slide.title}
            >
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-20 text-left max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl mt-3 text-white/90 max-w-2xl drop-shadow-sm">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Dots */}
      <nav
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 w-full flex justify-start space-x-4 px-6 md:px-20 z-30"
        aria-label="Slide navigation dots"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`h-1.5 w-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              index === activeSlide
                ? "bg-indigo-500 shadow-lg scale-110"
                : "bg-indigo-500/40 hover:bg-indigo-500/70"
            }`}
            aria-current={index === activeSlide ? "true" : "false"}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </nav>
    </div>
  );
};

export default Banner4;
