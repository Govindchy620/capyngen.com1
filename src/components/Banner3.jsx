import React from "react";
import { assets } from "../assets/assets";

export default function Banner3({
  title = "Custom AI Solution",
  subtitle = "Transforming the future of healthcare with AI-driven innovations.",
  backgroundImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
}) {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-black">
      {/* Image + Diagonal SVG Overlay */}
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <div className="relative w-full h-full">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={backgroundImage}
            alt=""
          />
          {/* Improved SVG: now with semi-transparent dark fill for blend and clarity */}
          <svg
            className="absolute left-0 top-0 hidden h-full text-black/90 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
            style={{ zIndex: 2 }}
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
        </div>
      </div>
      {/* Content Section */}
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl z-10">
        <div className="mb-16 lg:my-40 lg:max-w-xl lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl md:text-5xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none drop-shadow-md">
            {title}
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-200 md:text-lg drop-shadow">
            {subtitle}
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
