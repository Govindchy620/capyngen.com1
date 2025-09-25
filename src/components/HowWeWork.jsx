import React from "react";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";

const StepCard = ({ step, title, description }) => (
  <div className="rounded-sm p-10 text-center w-full max-w-sm transition-all duration-300 bg-gray-800 hover:bg-blue-500 group hover:shadow-lg hover:scale-105 min-h-[320px] flex flex-col justify-center">
    <p className="mb-3 text-sm font-medium text-blue-500 group-hover:text-white transition-all duration-300">
      {step}
    </p>
    <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors duration-300">
      {title}
    </h3>
    <p className="text-md leading-relaxed group-hover:text-black transition-colors duration-300">
      {description}
    </p>
  </div>
);

const HowWeWork = ({
  heading = "Mobile App Development Process",
  desc = "We follow a rigorous, high-standard development methodology to deliver robust, error-free, and high-performance mobile applications. Our team ensures each stage is meticulously executed for maximum efficiency and business impact.",
  steps = [],
}) => {
  // Group steps into chunks of 3 (first row) and 2 (second row), alternating
  const rows = [];
  let i = 0;
  let forward = true;
  while (i < steps.length) {
    const chunkSize = forward ? 3 : 3; // 3 steps forward row, 2 steps backward row
    rows.push({
      forward,
      steps: steps.slice(i, i + chunkSize),
    });
    i += chunkSize;
    forward = !forward;
  }

  return (
    <section className="bg-black text-white py-10 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        <p className="mt-4 max-w-6xl text-lg mx-auto text-gray-300">{desc}</p>
      </div>

      {/* Mobile: stacked with ↓ arrows */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        {steps.map((item, idx) => (
          <React.Fragment key={idx}>
            <StepCard {...item} />
            {idx !== steps.length - 1 && (
              <ChevronDown size={24} className="text-blue-500" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: alternating rows */}
      <div className="hidden md:flex flex-col gap-12">
        {rows.map((row, rowIdx) => (
          <React.Fragment key={rowIdx}>
            <div
              className={`flex items-center ${
                row.forward ? "justify-center" : "justify-end"
              } gap-8`}
            >
              {/* If backward row, reverse steps so arrows flow correctly */}
              {(row.forward ? row.steps : [...row.steps].reverse()).map(
                (step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <StepCard {...step} />
                    {idx !== arr.length - 1 &&
                      (row.forward ? (
                        <ChevronRight size={44} className="text-blue-500" />
                      ) : (
                        <ChevronLeft size={44} className="text-blue-500" />
                      ))}
                  </React.Fragment>
                )
              )}
            </div>

            {/* Down arrow between rows */}
            {rowIdx < rows.length - 1 && (
              <div
                className={`flex ${
                  row.forward ? "justify-end mr-44" : "justify-start ml-44"
                }`}
              >
                <ChevronDown size={44} className="text-blue-500" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
