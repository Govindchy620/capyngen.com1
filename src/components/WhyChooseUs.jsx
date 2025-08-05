import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-[90rem] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2">
            <div className="inline-block rounded-md bg-transparent bg-opacity-20 text-green-500 px-3 py-1 text-base font-semibold mb-2 border border-green-500">
              • why Choose Technox IT Solutions •
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Why Choose Technox:
              <br className="hidden md:block" />
              Smart, Reliable IT Solutions that Deliver.
            </h1>
            <p className="text-lg my-5">
              Technox delivers smart, reliable IT solutions tailored to drive
              your <br className="hidden md:block" />
              business forward with innovation and efficiency.
            </p>
            <AnimatedButton
              text="Get in Touch"
              onClick={() => alert("Button clicked!")}
            />
          </div>
          <div className="relative flex justify-center w-1/2">
            <div className="relative w-full max-w-sm aspect-[5/6]">
              {/* Purple border (background layer) */}
              <div className="absolute inset-0 rounded-xl border border-purple-500 transform translate-x-6 -translate-y-6 z-0" />

              {/* Image (foreground layer) */}
              <img
                src={assets.whyChooseUs}
                alt="Business people collaborating"
                className="relative z-10 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              icon: <UserRoundSearch className="w-6 h-6 text-gray-800" />,
              title: "Customer Focused",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business",
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-gray-800" />,
              title: "Strategic Marketing",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business",
            },
            {
              icon: <Sparkles className="w-6 h-6 text-gray-800" />,
              title: "Experience & Expertise",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business",
            },
            {
              icon: <LifeBuoy className="w-6 h-6 text-gray-800" />,
              title: "24/7 Customer Support",
              desc: "Technox delivers smart, reliable IT solutions tailored to drive your business",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-[#E1EFF6] border-b border-b-gray-600 p-6 rounded-lg shadow-sm"
            >
              <div className="p-0 space-y-4">
                <div className="flex items-center space-x-10 mb-4 ">
                  <div className="flex items-center justify-center w-16 h-16 rounded-md border-b border-b-gray-600 bg-white">
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                </div>
                <p className="text-gray-800 text-lg">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
