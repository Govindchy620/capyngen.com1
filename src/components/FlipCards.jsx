"use client";
import React from "react";
import { ArrowRight } from "lucide-react"; // keep only what you use
import { NavLink } from "react-router-dom";

const FlipCards = ({ cards }) => {
  return (
    <div className="py-20 lg:py-28 bg-white text-slate-900 flex items-center justify-center px-4 sm:px-8 border-b border-slate-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl w-full">
        {cards.map((card) => (
          <NavLink
            to={card.link}
            key={card.id}
            className="relative group perspective-1000 h-80 w-full"
          >
            {/* Outline behind the card */}
            <div className="absolute inset-0 -translate-x-3 translate-y-3 border-2 border-blue-600/20 group-hover:border-blue-600 transition-colors pointer-events-none"></div>

            {/* Flipping card */}
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front Side with full image */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden border-2 border-slate-900 overflow-hidden shadow-lg`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.front.image})`,
                  }}
                ></div>

                {/* Overlay (optional for readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                {/* Title & Arrow */}
                <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
                  <h3 className="text-xl font-bold tracking-wide leading-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {card.front.title}
                  </h3>
                  <div className="flex justify-end items-end">
                    <ArrowRight className="w-6 h-6 text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div
                className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 p-8 border-2 border-[#0b1b3c] flex flex-col justify-between bg-[#0b1b3c] text-white shadow-xl`}
              >
                <div className="flex flex-col items-start h-full">
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-base sm:text-lg leading-relaxed mb-4 text-slate-200">
                      {card.back.title}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-end border-t border-blue-900/40 pt-4">
                  {card.back.buttonText && (
                    <button className="flex items-center gap-2 text-base font-semibold text-blue-400 hover:text-white hover:gap-3 transition-all duration-300">
                      {card.back.buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FlipCards;
