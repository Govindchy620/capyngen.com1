import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

export default function WhyChooseUs() {
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: `url(${assets.patternBg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BestHeading title="" highlight="Why Choose Us" />
      <div className="container px-4 md:px-6 lg:px-12 max-w-[90rem] mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight text-white">
              Why Choose Capyngen:
              <br className="hidden sm:block" />
              Innovative, Reliable IT Services that Drive Success
            </h1>
            <p className="text-base md:text-lg my-6 text-white max-w-2xl mx-auto lg:mx-0">
              We provide businesses with innovative, dependable, and tailored
              digital solutions that help them grow, come up with new ideas, and
              get measurable results. We are experts in enterprise-grade cloud
              computing, advanced business intelligence, next-generation
              cybersecurity, custom mobile app development, strong enterprise
              software, strategic digital transformation, intelligent
              automation, responsive web platforms, and scalable IT strategies.
              These things help businesses grow and succeed in the long term.
            </p>
            <div className="flex justify-start">
              <AnimatedButton
                text="Get in Touch"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3 pr-5 md:pr-0 mx-auto flex justify-center mt-6 md:mt-20">
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
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-16">
          {[
            {
              icon: <UserRoundSearch className="w-6 h-6 text-gray-800" />,
              title: "Customer Focused",
              desc: "Capyngen provides digital solutions that are tailored to the unique demands of your organization so that you may flourish in the long run.",
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-gray-800" />,
              title: "Strategic Marketing",
              desc: "We combine both technology and creativity to come up with clever digital plans that help you expand quicker and remain ahead of the competition.",
            },
            {
              icon: <Sparkles className="w-6 h-6 text-gray-800" />,
              title: "Experience & Expertise",
              desc: "Capyngen uses its comprehensive understanding of the industry and proven skills to ensure your firm receives IT solutions that are scalable, and future-ready.",
            },
            {
              icon: <LifeBuoy className="w-6 h-6 text-gray-800" />,
              title: "24/7 Customer Support",
              desc: "You can count on our devoted support staff to always be there for you, providing reliable assistance so you won't have to worry about anything going wrong.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-gray-700 border-b-2 border-b-white p-2 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
            >
              <div className="space-y-2 h-full flex flex-col">
                {/* Icon and Title - Responsive Layout */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-md border-b-2 border-b-white bg-white flex-shrink-0">
                    {icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-white text-sm md:text-base leading-relaxed text-center sm:text-left">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
