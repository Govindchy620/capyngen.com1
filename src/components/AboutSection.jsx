import React from "react";
import { assets } from "../assets/assets";

// Updated icons to match the image design
const CalendarIcon = () => (
  <svg
    className="w-12 h-12 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M8 2v4M16 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-12 h-12 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-12 h-12 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const AboutSection = () => (
  <div className="min-h-screen flex relative overflow-hidden">
    {/* Left Stats Column */}
    <div className="w-full md:w-1/2 bg-black relative flex flex-col justify-center px-16 py-20 text-white">
      <img src={assets.overview} alt="" />
    </div>

    {/* Right Text Column */}
    <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-20 bg-black">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
        Culture of Excellence, Maestros, At Work & Beyond.
      </h2>
      <div className="space-y-6">
        <p className="text-white text-xl leading-relaxed">
          Experion Technologies, founded in 2006, is a Global Product
          Engineering Services and Digital Transformation Services company
          offering enterprises future-ready and transformative digital
          solutions. The organization's product engineering maestros work out of
          3 development centers in India – Trivandrum, Kochi, and Bangalore, and
          5 global offices across Europe, Asia-Pacific, and North America.
        </p>
        <p className="text-white text-xl leading-relaxed">
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
