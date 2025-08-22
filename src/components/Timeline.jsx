import React from "react";
import { assets } from "../assets/assets";

const timelineData = [
  {
    year: "2020",
    role: "MAIN DEVELOPER 2020",
    title: "New York Design Week",
    number: "01",
    image: assets.timelineBg,
  },
  {
    year: "2021",
    role: "MAIN DEVELOPER 2020",
    title: "UI/UX DESIGNER 2021",
    number: "02",
    image: assets.gallery2,
  },
  {
    year: "2023",
    role: "WEBBYS, SITE OF THE YEAR",
    title: "TOP 15 WEBSITE 2023",
    number: "03",
    image: assets.gallery3,
  },
  {
    year: "2023",
    role: "WEBBYS, SITE OF THE YEAR",
    title: "TOP 15 WEBSITE 2023",
    number: "04",
    image: assets.gallery4,
  },
];

const Timeline = () => {
  return (
    <section className="w-full bg-black py-10">
      <div className="max-w-7xl mx-auto space-y-4">
        {timelineData.map((item, i) => (
          <div
            key={i}
            className="relative group overflow-hidden cursor-pointer bg-gray-900"
          >
            {/* Background image (only visible on hover) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-blue-700/0 group-hover:bg-[#3352F3]/80 transition-all"></div>

            {/* Content */}
            <div className="relative z-10 flex justify-between items-center px-8 py-10">
              <p className="text-sm font-bold text-blue-400 group-hover:text-white transition-all">
                {item.role}
              </p>
              <h3 className="text-2xl md:text-6xl font-bold text-gray-500 group-hover:text-white  transition-all">
                {item.title}
              </h3>

              {/* Circle number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full transition-all group-hover:border border-white text-white font-bold">
                {item.number}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
