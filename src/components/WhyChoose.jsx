import React from "react";
import PropTypes from "prop-types";

const WhyChoose = ({
  heading = "Why Partner with Capyngen",
  intro = "We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions.",
  features = [],
}) => {
  return (
    <section className="relative min-h-[100vh] bg-black text-white py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        {heading && (
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {heading}
          </h1>
        )}
        {intro && (
          <p className="mt-4 max-w-6xl text-base sm:text-lg md:text-xl mx-auto text-gray-300">
            {intro}
          </p>
        )}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-5 sm:p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-blue-500/40 h-full min-h-[230px]"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                {f.description}
              </p>
            </div>
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
