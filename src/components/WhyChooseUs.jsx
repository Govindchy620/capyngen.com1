import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

export default function WhyChooseUs() {
  return (
    <div className=" text-white w-full relative overflow-hidden">
      <BestHeading title="" highlight="Why Choose Us" />
      <div className="container px-4 md:px-6 lg:px-12 max-w-[90rem] mx-auto pt-5 md:pt-0">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-12">
          {/* Right Image (comes first on mobile) */}
          <div className="w-full lg:w-1/3 pr-5 md:pr-0 mx-auto flex justify-center mt-6 md:mt-20 order-1 lg:order-2">
            <div className="relative w-full max-w-sm md:max-w-md md:aspect-[4/5]">
              {/* Purple border (background layer) */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500 transform translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-0" />

              {/* Image (foreground layer) */}
              <img
                src={assets.whyChooseUs}
                alt="Business people collaborating"
                className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg animate-diagonalBounce"
              />
            </div>
          </div>

          {/* Left Content (comes second on mobile) */}
          <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-white">
              Why Choose Capyngen: Innovative, Reliable IT Services that Drive
              Success
            </h1>
            <p className="text-base md:text-lg my-6 text-white max-w-2xl mx-auto lg:mx-0">
              We provide businesses with innovative, dependable, and tailored
              digital solutions that help them grow, come up with new ideas, and
              get measurable results. We are experts in enterprise-grade cloud
              computing, advanced business intelligence, next-generation
              cybersecurity, custom mobile app development, strong enterprise
              software, strategic digital transformation, intelligent
              automation, responsive web platforms, and scalable IT strategies.
              These things help businesses grow and succeed in the long term.
            </p>
            <div className="flex justify-start">
              <AnimatedButton
                text="Get in Touch"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-5">
          {[
            {
              icon: <UserRoundSearch className="w-7 h-7 text-indigo-600" />,
              title: "Customer Focused",
              desc: "Capyngen provides digital solutions that are tailored to the unique demands of your organization so that you may flourish in the long run.",
            },
            {
              icon: <BarChart3 className="w-7 h-7 text-pink-600" />,
              title: "Strategic Marketing",
              desc: "We combine both technology and creativity to come up with clever digital plans that help you expand quicker and remain ahead of the competition.",
            },
            {
              icon: <Sparkles className="w-7 h-7 text-yellow-500" />,
              title: "Experience & Expertise",
              desc: "Capyngen uses its comprehensive understanding of the industry and proven skills to ensure your firm receives IT solutions that are scalable, and future-ready.",
            },
            {
              icon: <LifeBuoy className="w-7 h-7 text-green-600" />,
              title: "24/7 Customer Support",
              desc: "You can count on our devoted support staff to always be there for you, providing reliable assistance so you won't have to worry about anything going wrong.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/50 
                 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 
                 transition-all duration-300 h-full flex flex-col"
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl 
                      bg-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                {icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
