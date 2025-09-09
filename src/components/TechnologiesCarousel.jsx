import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

const TechnologiesCarousel = ({ title, description, technologies }) => {
  const settings = {
    infinite: true,
    speed: 3000, // smooth movement
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // continuous scroll
    cssEase: "linear", // no pause in scroll
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">
          {description}
        </p>

        <Slider {...settings}>
          {technologies.map((tech, i) => (
            <div key={i} className="px-6 mt-10">
              <div className="flex flex-col items-center justify-center bg-white rounded-sm overflow-hidden">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="text-blue-400 font-medium">{tech.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechnologiesCarousel;
