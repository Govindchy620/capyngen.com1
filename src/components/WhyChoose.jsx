import React from "react";
import PropTypes from "prop-types";

const WhyChoose = ({
  heading = "Why Partner with Capyngen",
  intro = "We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions.",
  features = [],
}) => {
  return (
    <section
      className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-12"
      aria-label="Why Choose Capyngen"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        {heading && (
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {heading}
          </h1>
        )}
        {intro && (
          <p className="mt-4 max-w-6xl text-base sm:text-lg md:text-xl mx-auto text-gray-300 leading-relaxed">
            {intro}
          </p>
        )}

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
          {features.map((feature, i) => (
            <article
              key={i}
              className="flex flex-col items-center justify-center p-5 sm:p-6
        bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg
        transform transition duration-300 hover:scale-105 hover:shadow-blue-500/40
        h-full min-h-[230px] flex-1 basis-[18%] max-w-[18%]"
              role="region"
              aria-labelledby={`feature-title-${i}`}
              aria-describedby={`feature-desc-${i}`}
              tabIndex={0}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                id={`feature-title-${i}`}
                className="text-lg sm:text-xl font-semibold mb-2"
              >
                {feature.title}
              </h3>
              <p
                id={`feature-desc-${i}`}
                className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed"
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

WhyChoose.propTypes = {
  heading: PropTypes.string,
  intro: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default WhyChoose;
