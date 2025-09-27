// App.jsx
import React from "react";
import { assets } from "../assets/assets";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";

export default function HomeIndustries() {
  return (
    <div className="min-h-screen text-white">
      <BestHeading title="" highlight="Technologies" />
      {/* Top Section */}
      <div className="relative flex flex-col pt-15 lg:flex-row items-center justify-center max-w-[90rem] px-4 md:px-6 lg:px-12 mx-auto w-full">
        {/* Left Image + Stat Card */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Image */}
          <div className="overflow-hidden object-contain">
            <img
              src={assets.technologiesImg}
              alt="People discussing IT project"
              className="object-cover w-full md:w-5/6 flex items-end justify-self-end"
            />
          </div>
          {/* Stat Card - overlays image on large screens, sits below on small screens */}
          <div className="md:absolute md:-bottom-1/2 md:-translate-y-1/2 md:-left-10 transform z-10">
            <div className="bg-blue-600 text-white p-6 md:p-10 w-full md:w-fit md:mt-4 mb-5 md:mb-0 shadow-xl flex flex-col gap-5">
              <div>
                <p className="text-lg mb-4 opacity-80">
                  Customers are satisfied <br className="hidden md:block" />{" "}
                  with the services.
                </p>
                <div className="text-4xl md:text-6xl font-bold text-center md:text-left">
                  5.2k
                </div>
              </div>
              {/* Avatars */}
              <div className="flex md:mt-10 md:space-x-[-10px] justify-center md:justify-start gap-4 md:gap-0">
                {[
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/women/68.jpg",
                  "https://randomuser.me/api/portraits/men/81.jpg",
                  "https://randomuser.me/api/portraits/men/81.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`avatar-${i}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="px-2 md:px-6 xl:px-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Smart Technologies That Drive Growth
            </h1>
            <p className="text-lg md:pr-20 mt-5 mb-6">
              At Capyngen, we harness innovation and cutting-edge IT services,
              custom software development, and digital solutions to create
              scalable, secure, and future-ready systems tailored to your
              business.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-4">
              Why Our Technologies Stand Out
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>
                <span className="font-semibold text-cyan-400">
                  Next-Gen Cloud & IT Solutions –
                </span>{" "}
                Scalable, secure, and ready for tomorrow.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Advanced Cybersecurity Services –
                </span>{" "}
                Safeguarding businesses against evolving threats.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Industry-Focused Innovation –
                </span>{" "}
                From finance to healthcare, our tech powers growth.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  AI & Data-Driven Insights –
                </span>{" "}
                Smarter decisions, faster results.
              </li>
              <li>
                <span className="font-semibold text-cyan-400">
                  Seamless Digital Transformation –
                </span>{" "}
                Modernizing enterprises with responsive solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Services List */}
      <div className="max-w-7xl mx-auto flex mt-5 xl:mt-0">
        <div className="md:w-1/2 hidden md:block"></div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 bg-white py-2">
          <div className="px-5 xl:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 md:gap-0 xl:gap-10 text-gray-800 text-lg py-6">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Business Automation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Digital Transformation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Legacy System Issues
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Downtime & Reliability
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Remote Work Enablement
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Customer Experience Gaps
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    System Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-green-600">✔</span>{" "}
                    Industry Innovation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
