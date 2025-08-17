"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BestHeading from "./BestHeading";

const cards = [
  {
    icon: "⚙️",
    title: "IT Infrastructure Services",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Scalable Solutions",
      "Secure Infrastructure",
      "Network Optimization",
      "IT Support",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Solutions & Migration",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Cloud Transformation",
      "Seamless Migration",
      "Scalable Cloud",
      "Future Ready IT",
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics Services",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Data Driven Decisions",
      "Business Intelligence",
      "Advanced Analytics",
      "Insight To Action",
    ],
  },
  {
    icon: "👑",
    title: "IT Consulting & Strategy",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Tech Strategy",
      "IT Advisory",
      "Digital Transformation",
      "Business IT Alignment",
    ],
  },
  {
    icon: "⚙️",
    title: "IT Infrastructure Services",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Scalable Solutions",
      "Secure Infrastructure",
      "Network Optimization",
      "IT Support",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Solutions & Migration",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Cloud Transformation",
      "Seamless Migration",
      "Scalable Cloud",
      "Future Ready IT",
    ],
  },
  {
    icon: "📊",
    title: "Data & Analytics Services",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Data Driven Decisions",
      "Business Intelligence",
      "Advanced Analytics",
      "Insight To Action",
    ],
  },
  {
    icon: "👑",
    title: "IT Consulting & Strategy",
    desc: "We provide robust IT infrastructure services that ensure seamless connectivity.",
    items: [
      "Tech Strategy",
      "IT Advisory",
      "Digital Transformation",
      "Business IT Alignment",
    ],
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
    onClick={onClick}
    aria-label="Next"
  >
    <ChevronRight className="h-6 w-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
    onClick={onClick}
    aria-label="Previous"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const Card = ({ icon, title, desc, items }) => (
  <div
    className="relative group rounded-2xl p-8 min-h-[380px] flex flex-col shadow-lg
               bg-gradient-to-br from-white/90 via-white/80 to-white/90 
               backdrop-blur-md overflow-hidden border border-gray-200/40
               transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] cursor-pointer"
  >
    {/* Glow border effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 rounded-2xl"></div>

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex mb-4 items-center">
        <span className="w-12 h-12 flex justify-center items-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-2xl shadow-md mr-3">
          {icon}
        </span>
        <span className="ml-auto flex items-center border border-gray-300 rounded-full w-10 h-10 justify-center group-hover:bg-indigo-50 transition-colors duration-300">
          <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-indigo-600 transition-colors duration-300" />
        </span>
      </div>
      <h2 className="font-bold text-lg mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{desc}</p>
      <ul className="text-gray-700 text-[15px] pl-3 list-disc flex-grow">
        {items.map((it, idx) => (
          <li key={idx} className="my-1">
            {it}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ServicesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 4;
  const slidesToScroll = 1;
  const settings = {
    dots: false,
    infinite: cards.length > slidesToShow,
    speed: 600,
    slidesToShow,
    slidesToScroll,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div>
      <BestHeading title="" highlight="Services" />
      <div className="bg-black h-[85vh] flex items-center">
        <div className="max-w-[90rem] mx-auto px-6 w-full">
          <Slider {...settings}>
            {cards.map((card, idx) => (
              <div key={idx} className="px-3 py-2">
                <Card {...card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
