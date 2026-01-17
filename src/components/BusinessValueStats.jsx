import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const BusinessValueStats = ({
  title = "Drive Business Value With The Right Technology Partner",
  subtitle = "Schedule Appointment",
  ctaText = "Speak with an Expert →",
  stats = [
    { value: 50, suffix: "%", label: "Faster Deployment" },
    { value: 99.9, suffix: "%", label: "Uptime Achieved" },
    { value: 85, suffix: "%", label: "Improvement in Software Quality" },
    { value: 100, suffix: "+", label: "Successful DevOps Implementations" },
    { value: 60, suffix: "%", label: "Increase in Team Productivity" },
  ],
  backgroundColor = "bg-[#0a1b2e]",
  textColor = "text-white",
  highlightColor = "text-red-500",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.2, // start animating when 20% visible
  });

  return (
    <section className={`${backgroundColor} py-12 px-6 md:px-12 lg:px-20`}>
      <div
        ref={ref}
        className="container max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10"
      >
        {/* Left Content */}
        <div className="flex-1">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4 ${textColor}`}
          >
            {title}
          </h2>
          <p className={`text-lg mb-6 ${textColor}`}>{subtitle}</p>
          <a
            href="/contact-us"
            className={`font-semibold text-lg underline decoration-2 underline-offset-4 hover:no-underline ${highlightColor}`}
          >
            {ctaText}
          </a>
        </div>

        {/* Stats Section */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3
                className={`text-2xl sm:text-3xl font-bold mb-2 ${textColor}`}
              >
                {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}{" "}
                {stat.suffix}
              </h3>
              <p className={`text-sm sm:text-base ${textColor}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessValueStats;
