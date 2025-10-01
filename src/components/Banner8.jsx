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
    <section
      className={`relative min-h-screen ${bgColor} flex items-center justify-center px-6 sm:px-12 py-12`}
      aria-label="Ecommerce Design Banner"
    >
      <div
        className={`flex flex-col gap-6 pt-8 md:gap-12 sm:flex-row items-center w-full max-w-[90vw] rounded-xl ${
          reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        {/* Text Section */}
        <div className="max-w-2/3 flex-1 text-center sm:text-left px-4 md:px-8">
          <h1 className="font-extrabold leading-relaxed tracking-tight mb-10">
            <span className="block text-blue-500 text-lg sm:text-xl md:text-2xl mb-2 uppercase tracking-wide">
              {titlePrefix}
            </span>
            <span
              className="block text-white text-4xl sm:text-5xl md:text-6xl"
              tabIndex={0}
            >
              {titleMain}
            </span>
            <span className="block text-blue-500 text-xl sm:text-2xl md:text-3xl mt-2">
              {titleSuffix}
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-1/3 flex-1 mt-8 sm:mt-0 flex justify-center px-4 md:px-8">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-lg shadow-lg object-contain"
              loading="lazy"
              decoding="async"
              role="img"
            />
          )}
        </div>
      </div>
    </section>
  );
}
