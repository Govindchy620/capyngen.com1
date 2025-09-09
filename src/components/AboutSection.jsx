import React from "react";
import { assets } from "../assets/assets";

const AboutSection = () => (
  <div className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
    {/* Left Column - Image */}
    <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center">
      <img
        src={assets.overview}
        alt="Overview"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Column - Text */}
    <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 bg-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
        Culture of Excellence, Maestros, At Work & Beyond.
      </h2>

      <div className="space-y-4 sm:space-y-6">
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
          Experion Technologies, founded in 2006, is a Global Product
          Engineering Services and Digital Transformation Services company
          offering enterprises future-ready and transformative digital
          solutions. The organization's product engineering maestros work out of
          3 development centers in India – Trivandrum, Kochi, and Bangalore, and
          5 global offices across Europe, Asia-Pacific, and North America.
        </p>
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
          Experion has been recognized multiple times by Frost and Sullivan,
          Clutch, Inc. 5000, and Everest Group for core expertise in Digital and
          Software Product Engineering services. Experion brings expertise in
          the latest technology while crafting exceptional product experiences,
          utilizing Data and AI, Cognitive Computing, DevSecOps, and Experience
          Design capabilities across domains. The organization drives new
          revenue streams, digitizes business processes, and helps improve
          operational efficiency and productivity in the Healthcare, Retail,
          Transport and Logistics, BFSI, Construction.
        </p>
      </div>
    </div>
  </div>
);

export default AboutSection;
