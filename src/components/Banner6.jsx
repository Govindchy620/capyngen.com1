import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets";

// Custom Previous Arrow
const PrevArrow = ({ className, style, onClick }) => (
  <button
    onClick={onClick}
    className="absolute inset-y-0 start-0 z-10 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-hidden focus:bg-white/20"
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

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
  <button
    onClick={onClick}
    className="absolute inset-y-0 end-0 z-10 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-hidden focus:bg-white/20"
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

const Banner6 = ({
  slides = [
    {
      id: 1,
      title: "Nike React",
      subtitle: "Rewriting sport's playbook for billions of athletes",
      image: assets.applicationSolution,
      ctaText: "Read Case Studies",
      ctaLink: "#",
    },
    {
      id: 2,
      title: "CoolApps",
      subtitle: "From mobile apps to gaming consoles",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
      ctaText: "Read Case Studies",
      ctaLink: "#",
    },
    {
      id: 3,
      title: "Grumpy",
      subtitle: "Bringing Art to everything",
      image:
        "https://images.unsplash.com/photo-1629666451094-8908989cae90?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3",
      ctaText: "Read Case Studies",
      ctaLink: "#",
    },
  ],
  autoplay = true,
  autoplaySpeed = 3000,
  showDots = false,
}) => {
  const settings = {
    dots: showDots,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay,
    autoplaySpeed,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20 bg-black">
      <div className="relative overflow-hidden w-full h-120 md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="w-full h-120 md:h-[calc(100vh-106px)] bg-cover bg-center flex flex-col"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white">{slide.title}</span>
                  <span className="block text-white text-xl md:text-3xl">
                    {slide.subtitle}
                  </span>
                  {slide.ctaText && (
                    <div className="mt-5">
                      <a
                        href={slide.ctaLink}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                      >
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
