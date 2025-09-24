import React from "react";
import { assets } from "../assets/assets";

export default function Banner8({
  titleMain = "Ecommerce Design",
  titlePrefix = "Professional",
  titleSuffix = "Transforms Your Digital Store",
  description = `A professionally designed store is the best way to let your products
    and services shine through. In short, the process of ecommerce UI
    design, ecommerce app UI design, and ecommerce database design turns
    out to be a story of creating eye-popping as well as high-functional
    platforms that create engagement, convert sales and turn the
    business into rake revenue. The best part of your next endeavor
    could be teaming up with an established ecommerce website designing
    company.`,
  imageSrc = assets.eCommerceDesign,
  imageAlt = "Ecommerce Design Illustration",
  bgColor = "bg-gray-900",
  iconColor = "bg-blue-700",
  reverse = false,
}) {
  return (
    <div
      className={`relative min-h-screen ${bgColor} flex items-center justify-center`}
    >
      {/* Content */}
      <div
        className={`flex flex-col gap-12 sm:flex-row items-center px-12 py-12 rounded-xl w-full max-w-7xl ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        {/* Left - Text Section */}
        <div className="flex-1 text-center">
          <p className="text-blue-500 text-lg font-bold mb-2"></p>
          <h1 className="text-4xl sm:text-4xl font-black leading-tight">
            <span className="text-blue-500">{titlePrefix} </span>
            <br />
            <span className="text-white text-5xl whitespace-nowrap">
              {titleMain}
            </span>
            <br />
            <span className="text-blue-500">{titleSuffix}</span>
          </h1>
          <p className="mt-4 text-gray-400 text-lg">{description}</p>
        </div>

        {/* Right - Figure and Services */}
        <div className="flex-1 mt-8 sm:mt-0 flex flex-col items-center">
          {imageSrc && <img src={imageSrc} alt={imageAlt} />}
        </div>
      </div>
    </div>
  );
}
