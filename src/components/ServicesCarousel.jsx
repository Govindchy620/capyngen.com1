"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"; // Import Lucide icons
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

// Custom styled navigation arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    onClick={onClick}
    aria-label="Next"
  >
    <ChevronRight className="h-6 w-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    onClick={onClick}
    aria-label="Previous"
  >
    <ChevronLeft className="h-6 w-6" />
  </button>
);

const Card = ({ icon, title, desc, items }) => (
  <div
    className="relative group rounded-2xl p-8 min-h-[380px] flex flex-col shadow-md bg-white overflow-hidden
               transition-shadow duration-300 hover:shadow-xl cursor-pointer border border-gray-200"
  >
    {/* Gradient overlay */}
    <div
      className="absolute inset-0 bg-gradient-to-br
                 from-gray-100 via-gray-50 to-white
                 opacity-0 group-hover:opacity-100
                 transition-all duration-500 z-0"
    />
    {/* Card content */}
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex mb-4 items-center">
        <span className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-800 text-white text-2xl shadow-sm mr-3">
          {icon}
        </span>
        <span className="ml-auto flex items-center border border-gray-200 rounded-full w-10 h-10 justify-center group-hover:bg-gray-100 transition-colors duration-300">
          <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-300" />
        </span>
      </div>
      <h2 className="font-bold text-lg mb-2 text-gray-900">{title}</h2>
      <p className="text-gray-500 text-sm mb-4">{desc}</p>
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
  const [currentSlide, setCurrentSlide] = useState(0); // [^1][^2]
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Calculate total groups for pagination display
  const totalGroups = cards.length;
  const currentGroup = Math.floor(currentSlide / slidesToScroll) + 1;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen flex items-center">
      <div className="max-w-[90rem] mx-auto px-6 w-full">
        <BestHeading title="" highlight="Services" />
        <Slider {...settings}>
          {cards.map((card, idx) => (
            <div key={idx} className="px-3 py-2">
              <Card {...card} />
            </div>
          ))}
        </Slider>
        <div className="mt-8 flex justify-center items-center space-x-3">
          <span className="text-gray-700 font-semibold text-lg">
            Showing <span className="text-gray-900">{currentGroup}</span> of{" "}
            <span className="text-gray-900">{totalGroups}</span>
          </span>
          <div className="h-4 w-4 bg-gray-800 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
