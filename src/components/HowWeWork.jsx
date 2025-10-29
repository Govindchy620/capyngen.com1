import React from "react";
import { ChevronRight, ChevronDown, ChevronLeft } from "lucide-react";

const StepCard = ({ step, title, description }) => (
  <article
    className="rounded-sm py-10 px-5 text-center w-full max-w-sm transition-all duration-300
      bg-gray-800 hover:bg-blue-800 group hover:shadow-lg hover:scale-105 min-h-[260px]
      flex flex-col justify-center cursor-default"
    aria-labelledby={`step-title-${step}`}
    aria-describedby={`step-desc-${step}`}
    tabIndex={0}
  >
    <p
      id={`step-step-${step}`}
      className="mb-3 text-sm font-medium text-blue-600 group-hover:text-white transition-all duration-300"
      aria-hidden="true"
    >
      {step}
    </p>
    <h3
      id={`step-title-${step}`}
      className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300"
    >
      {title}
    </h3>
    <p
      id={`step-desc-${step}`}
      className="text-md leading-relaxed group-hover:text-white transition-colors duration-300"
    >
      {description}
    </p>
  </article>
);

const HowWeWork = ({
  heading = "Mobile App Development Process",
  desc = "We follow a rigorous, high-standard development methodology to deliver robust, error-free, and high-performance mobile applications. Our team ensures each stage is meticulously executed for maximum efficiency and business impact.",
  steps = [],
}) => {
  // Group steps in chunks of 3 for each row
  const rows = [];
  const chunkSize = 3;
  for (let i = 0; i < steps.length; i += chunkSize) {
    rows.push(steps.slice(i, i + chunkSize));
  }

  return (
    <section
      className="bg-black text-white py-10 px-6 md:px-12 lg:px-20"
      aria-label="How We Work Process"
    >
      {/* Heading */}
      <header className="text-center mb-16">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        <p className="mt-4 max-w-6xl text-lg mx-auto text-gray-300">{desc}</p>
      </header>

      {/* Mobile: stacked with down arrows */}
      <div
        className="flex flex-col items-center gap-6 md:hidden"
        aria-label="Steps mobile view"
      >
        {steps.map((item, idx) => (
          <React.Fragment key={idx}>
            <StepCard {...item} />
            {idx !== steps.length - 1 && (
              <ChevronDown
                size={24}
                className="text-blue-600 animate-arrow-down"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Desktop: alternating aligned rows */}
      <div
        className="hidden md:flex flex-col gap-12"
        aria-label="Steps desktop view"
      >
        {rows.map((rowSteps, rowIdx) => {
          const isForward = rowIdx % 2 === 0;
          const stepsInRow = isForward ? rowSteps : [...rowSteps].reverse();

          return (
            <React.Fragment key={rowIdx}>
              <div
                className={`flex items-center ${
                  isForward ? "justify-center" : "justify-end"
                } gap-8`}
                role="list"
              >
                {stepsInRow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <StepCard {...step} />
                    {idx !== stepsInRow.length - 1 &&
                      (isForward ? (
                        <ChevronRight
                          size={180}
                          className="text-blue-600 animate-arrow-right"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronLeft
                          size={180}
                          className="text-blue-600 animate-arrow-left"
                          aria-hidden="true"
                        />
                      ))}
                  </React.Fragment>
                ))}
              </div>

              {/* Down arrow between rows except last */}
              {rowIdx < rows.length - 1 && (
                <div
                  className={`flex ${
                    isForward ? "justify-end mr-44" : "justify-start ml-44"
                  }`}
                >
                  <ChevronDown
                    size={44}
                    className="text-blue-600 animate-arrow-down"
                    aria-hidden="true"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Custom animation styles */}
      <style jsx="true">{`
        @keyframes arrow-right {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes arrow-left {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes arrow-down {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-arrow-right {
          animation: arrow-right 1.6s ease-in-out infinite;
        }

        .animate-arrow-left {
          animation: arrow-left 1.6s ease-in-out infinite;
        }

        .animate-arrow-down {
          animation: arrow-down 1.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;
