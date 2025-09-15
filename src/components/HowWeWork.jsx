import React from "react";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";

const HowWeWork = ({
  heading = "Mobile App Development Process",
  desc = "We follow a rigorous, high-standard development methodology to deliver robust, error-free, and high-performance mobile applications. Our team ensures each stage is meticulously executed for maximum efficiency and business impact.",

  steps = [
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
    {
      step: "Step 04",
      title: "Inspection",
      description:
        "Proper inspection of a website with the best tools for the next stage.",
    },
    {
      step: "Step 05",
      title: "Deep Optimization",
      description:
        "Optimizing the website with special strategies by covering all its needs.",
    },
  ],
}) => {
  return (
    <section className="bg-black text-white py-10 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">{desc}</p>
      </div>

      {/* Mobile: Single column layout */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        {steps.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
              <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
                {item.step}
              </p>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
                {item.description}
              </p>
            </div>
            {idx !== steps.length - 1 && (
              <ChevronDown size={24} className="text-blue-500" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: 3-2 Grid layout with flow arrows */}
      <div className="hidden md:block">
        {/* First Row - Steps 1, 2, 3 */}
        <div className="flex items-center justify-center gap-8 mb-8">
          {/* Step 1 */}
          <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
            <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
              {steps[0].step}
            </p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
              {steps[0].title}
            </h3>
            <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
              {steps[0].description}
            </p>
          </div>

          {/* Arrow 1 → 2 */}
          <ChevronRight size={44} className="text-blue-500" />

          {/* Step 2 */}
          <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
            <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
              {steps[1].step}
            </p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
              {steps[1].title}
            </h3>
            <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
              {steps[1].description}
            </p>
          </div>

          {/* Arrow 2 → 3 */}
          <ChevronRight size={44} className="text-blue-500" />

          {/* Step 3 */}
          <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
            <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
              {steps[2].step}
            </p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
              {steps[2].title}
            </h3>
            <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
              {steps[2].description}
            </p>
          </div>
        </div>

        {/* Connecting arrow from Step 3 to Step 4 */}
        <div className="flex justify-end mb-8">
          <div className="mr-44">
            <ChevronDown size={44} className="text-blue-500" />
          </div>
        </div>

        {/* Second Row - Steps 5, 4 (right to left flow) */}
        <div className="flex items-center justify-end gap-8">
          {/* Step 5 */}
          <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
            <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
              {steps[5].step}
            </p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
              {steps[5].title}
            </h3>
            <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
              {steps[5].description}
            </p>
          </div>
          {/* Arrow 6 ← 5 */}
          <ChevronLeft size={44} className="text-blue-500" />

          {/* Step 5 */}
          <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
            <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
              {steps[4].step}
            </p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
              {steps[4].title}
            </h3>
            <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
              {steps[4].description}
            </p>
          </div>

          {/* Arrow 5 ← 4 */}
          <ChevronLeft size={44} className="text-blue-500" />

          {/* Step 4 */}
          <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105">
            <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
              {steps[3].step}
            </p>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
              {steps[3].title}
            </h3>
            <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
              {steps[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
