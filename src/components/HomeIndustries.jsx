// App.jsx
import React from "react";
import { assets } from "../assets/assets";
import AnimatedButton from "./AnimatedButton";

export default function HomeIndustries() {
  return (
    <div className="min-h-screen py-20 bg-gray-100">
      {/* Top Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto w-full">
        {/* Left Image + Stat Card */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Image */}
          <div className="overflow-hidden object-contain">
            <img
              src={assets.homeIndustries}
              alt="People discussing IT project"
              className="object-cover w-full md:w-5/6 flex items-end justify-self-end"
            />
          </div>
          {/* Stat Card - overlays image on large screens, sits below on small screens */}
          <div className="md:absolute -bottom-1/2 -translate-y-1/2 md:-left-10 transform z-10">
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
          <div className="px-6 md:px-10">
            <div className="mb-2">
              <span className="inline-block rounded-md bg-transparent bg-opacity-20 text-green-500 px-3 py-1 text-base font-semibold mb-2 border border-green-500">
                • Industries We Help •
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Empowering All Industries with Smart IT Solutions.
            </h1>
            <p className="text-lg md:pr-20 mt-5 mb-10">
              We deliver intelligent IT solutions designed to meet the unique
              needs of every industry. From healthcare to finance, our
              technology empowers.
            </p>
            <AnimatedButton
              text="Learn More"
              onClick={() => alert("Button clicked!")}
            />
          </div>
        </div>
      </div>
      {/* Services List */}
      <div className="max-w-7xl mx-auto flex">
        <div className="md:w-1/2 hidden md:block"></div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 bg-white py-8">
          <div className="px-10 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10 text-gray-800 text-lg py-6">
              <div>
                <ul className="space-y-6">
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span>{" "}
                    Business Automation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span>{" "}
                    Digital Transformation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span> Legacy
                    System Issues
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span>{" "}
                    Downtime & Reliability
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-6">
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span> Remote
                    Work Enablement
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span>{" "}
                    Customer Experience Gaps
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span> System
                    Integration
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-block text-blue-600">✘</span>{" "}
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
