import React from "react";
import { assets } from "../assets/assets";

const Banner7 = () => {
  return (
    <section className=" bg-black text-white py-20 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid max-w-[90vw] mx-auto lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        {/* Left Content */}
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl ">
            Build Better Products
          </h1>
          <p className="mt-3 text-lg ">
            Introducing a new way for your brand to reach the creative
            community.
          </p>

          {/* Brands */}
          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium uppercase ">Trusted by:</span>

            <div className="mt-4 flex gap-x-8">
              {/* Logo 1 */}
              <svg
                className="w-20 h-auto"
                width="106"
                height="36"
                viewBox="0 0 106 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG PATHS */}
              </svg>

              {/* Logo 2 */}
              <svg
                className="w-20 h-auto"
                width="140"
                height="47"
                viewBox="0 0 140 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG PATHS */}
              </svg>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <img
            className="w-full rounded-xl"
            src={assets.uiUxDesign}
            alt="Hero section illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner7;
