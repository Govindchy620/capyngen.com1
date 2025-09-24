// Banner4.jsx
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
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative min-h-[80vh] flex items-center justify-start px-6 md:px-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
                  {slide.title}
                </h1>
                <p className="text-lg mt-4 text-white/90 max-w-2xl">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 w-full flex justify-start space-x-3 px-6 md:px-20 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => sliderRef.current.slickGoTo(index)}
            className={`h-[3px] w-8 cursor-pointer rounded-full transition-all duration-300 ${
              index === activeSlide ? "bg-white" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner4;
