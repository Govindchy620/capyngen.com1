import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologiesCarousel = ({ title, description, technologies }) => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    accessibility: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section
      className="bg-black text-white py-10 px-6"
      aria-label="Technologies Carousel"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl ">
          {title}
        </h1>
        <p className="mt-4 max-w-6xl text-lg mx-auto text-gray-300">
          {description}
        </p>

        <Slider {...settings} aria-live="polite" role="list">
          {technologies.map((tech, i) => (
            <div key={i} className="px-6 mt-10" role="listitem">
              <div className="flex flex-col items-center justify-center bg-white rounded-sm overflow-hidden p-4 shadow-md">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="w-16 h-16 object-contain mb-4"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-blue-400 font-semibold">{tech.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
