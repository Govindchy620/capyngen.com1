import React from "react";
import { assets } from "../assets/assets";

const Banner7 = () => {
  return (
    <section className=" bg-black text-white py-28 mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid max-w-[90vw] mx-auto lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        {/* Left Content */}
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold sm:text-4xl md:text-5xl ">
            Transforming Ideas into Stunning Digital Experiences with UI/UX
            Design
          </h1>
          <p className="mt-3 text-lg ">
            Capyngen designs interfaces that intuitively meet the needs of your
            users, and are engaging, user-friendly, and customized for your
            users.Our services will not only bring delight to your target market
            but also result in more substantial engagement, conversions, and
            overall business growth.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <img
            className="w-full rounded-xl"
            src={assets.uiUx1}
            alt="Hero section illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner7;
