import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Inspection",
    description:
      "Proper inspection of a website with the best tools for the next stage.",
  },
  {
    step: "Step 02",
    title: "Deep Optimization",
    description:
      "Optimizing the website with special strategies by covering all its needs.",
  },
  {
    step: "Step 03",
    title: "Analyze Growth",
    description:
      "Expert analysis of website data for deploying a strategy for further growth.",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          How We Work
        </h1>
        <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">
          Comprehensive Website Services to Ignite Your Online Success. Empower
          Your Business with Powerful Online Services from our Website.
        </p>
      </div>

      {/* Steps with arrows */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-8">
        {steps.map((item, idx) => (
          <React.Fragment key={idx}>
            {/* Card */}
            <div
              className={`rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105`}
            >
              {/* Step Number */}
              <p
                className={`mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300`}
              >
                {item.step}
              </p>

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-md leading-relaxed group-hover:text-black transition-colors duration-300`}
              >
                {item.description}
              </p>
            </div>

            {/* Arrow (only if not last) */}
            {idx !== steps.length - 1 && (
              <>
                {/* Mobile: Down arrow */}
                <ChevronDown
                  size={24}
                  className="text-blue-500 my-6 md:hidden"
                />
                {/* Desktop: Right arrow, perfectly centered between cards */}
                <ChevronRight
                  size={44}
                  className="hidden md:block text-blue-500"
                />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
