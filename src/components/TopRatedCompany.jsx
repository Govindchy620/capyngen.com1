import React from "react";
import { assets } from "../assets/assets";

export default function TopRatedCompany({
  title = "Why Choose Capyngen: Innovative, Reliable IT Services that Drive Success",
  description = `We provide businesses with innovative, dependable, and tailored
    digital solutions that help them grow, come up with new ideas, and
    get measurable results. We are experts in enterprise-grade cloud
    computing, advanced business intelligence, next-generation
    cybersecurity, custom mobile app development, strong enterprise
    software, strategic digital transformation, intelligent
    automation, responsive web platforms, and scalable IT strategies.
    These things help businesses grow and succeed in the long term.`,
  image = assets.whyChooseUs,
  bgColor = "bg-black",
  background = assets.patternBg2,
  reverse = false,
}) {
  return (
    <div
      className={`${bgColor} pb-10`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 md:px-6 lg:px-12 max-w-[90rem] mx-auto text-white">
        {/* Hero Section */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Left/Right Content */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="mt-2 text-3xl font-bold leading-none sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <div className="text-base md:text-lg my-6 text-white max-w-3xl mx-auto lg:mx-0 space-y-4">
              {Array.isArray(description) ? (
                description.map((para, idx) => <p key={idx}>{para}</p>)
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>

          {/* Right/Left Image */}
          <div className="w-full lg:w-1/3 mx-auto flex justify-center mt-6 md:mt-20">
            <div className="relative w-full max-w-sm md:max-w-md md:aspect-[4/5]">
              {/* Purple border */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500 transform translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-0" />

              {/* Image */}
              <img
                src={image}
                alt="Business people collaborating"
                className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
