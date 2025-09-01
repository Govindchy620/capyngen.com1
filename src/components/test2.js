import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

export default function WhyChooseUs() {
  return (
    <section className="bg-black">
      <BestHeading title="" highlight="Why Choose Us" />

      <div className="container px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-snug text-white">
              Why Choose Technox:
              <br className="hidden sm:block" />
              Smart, Reliable IT Solutions that Deliver.
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 text-gray-200 max-w-2xl mx-auto lg:mx-0">
              Technox delivers smart, reliable IT solutions tailored to drive
              your business forward with innovation and efficiency.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <AnimatedButton
                text="Get in Touch"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5]">
              {/* Purple border (background layer) */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500 transform translate-x-3 sm:translate-x-4 md:translate-x-6 -translate-y-3 sm:-translate-y-4 md:-translate-y-6 z-0" />

              {/* Image (foreground layer) */}
              <img
                src={assets.whyChooseUs}
                alt="Business people collaborating"
                className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 md:mt-16">
          {[
            {
              icon: <UserRoundSearch className="w-6 h-6 text-gray-800" />,
              title: "Customer Focused",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business forward.",
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-gray-800" />,
              title: "Strategic Marketing",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business forward.",
            },
            {
              icon: <Sparkles className="w-6 h-6 text-gray-800" />,
              title: "Experience & Expertise",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business forward.",
            },
            {
              icon: <LifeBuoy className="w-6 h-6 text-gray-800" />,
              title: "24/7 Customer Support",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business forward.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-gray-800 border-b-2 border-b-purple-400 p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left gap-4">
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md border border-gray-300 bg-white flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
