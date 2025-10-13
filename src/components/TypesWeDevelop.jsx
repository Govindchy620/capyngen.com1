import React from "react";
import {
  FaBuilding,
  FaUserTie,
  FaMoneyBillWave,
  FaHome,
  FaStore,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const TypesWeDevelop = ({ heading, subheading, buttonText, image, types }) => {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0f] via-[#111827] to-[#0a0a0f] text-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT COLUMN */}
        <div className="md:sticky md:top-24 self-start h-fit">
          {heading && (
            <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-4 text-gray-300 max-w-lg leading-relaxed hover:text-gray-200 transition-colors">
              {subheading}
            </p>
          )}

          {image && (
            <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={image}
                alt="Real estate app"
                className=" mx-auto lg:mx-0 object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (Styled Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {types?.map((app, index) => (
            <article
              key={index}
              tabIndex={0}
              className="relative group p-6 rounded-2xl min-h-[20vh] flex flex-col justify-start
                bg-gradient-to-br from-[#1a1f2f]/80 to-[#0f1420]/80 
                backdrop-blur-xl border border-white/10 
                shadow-lg hover:shadow-2xl hover:scale-[1.03] 
                transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
              aria-labelledby={`type-title-${index}`}
              aria-describedby={`type-desc-${index}`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-3xl text-cyan-400 mb-4">{app.icon}</div>

                {/* Title */}
                <h3
                  id={`type-title-${index}`}
                  className="text-xl md:text-2xl font-semibold mb-2 leading-snug text-white group-hover:text-cyan-400 transition-colors drop-shadow-lg"
                >
                  {app.title}
                </h3>

                {/* Description */}
                <p
                  id={`type-desc-${index}`}
                  className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors"
                >
                  {app.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesWeDevelop;
