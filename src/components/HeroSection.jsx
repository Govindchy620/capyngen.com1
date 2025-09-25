import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 sm:px-6 md:px-12 overflow-hidden"
      aria-label="Hero Section"
      role="region"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={assets.heroVideo}
        poster="/path-to-poster-image.jpg"
        preload="auto" // preload for performance
        loading="lazy" // loading attribute for lazy load
        aria-hidden="true" // hide from screen readers since decorative
      />
      text
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-10 w-[90vw] max-w-[90rem] flex flex-col justify-center space-y-8 sm:space-y-6 md:space-y-12 mt-16 md:mt-20 lg:mt-20">
        <h1 className="font-extrabold text-white leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Designing Innovation,
          <br /> Delivering Growth
        </h1>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 max-w-full sm:max-w-4xl md:max-w-5xl text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          Capyngen is a custom software development company and a digital
          marketing agency that provides web development, CRM, SEO, AI, and IT
          consulting services.
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 text-center mt-10"
          role="list"
          aria-label="Core company features"
        >
          {[
            {
              title: "Innovative",
              gradient: "from-blue-400 to-cyan-400",
              description: "Fresh ideas, future-ready solutions.",
            },
            {
              title: "Trusted",
              gradient: "from-green-400 to-emerald-400",
              description: "A reputation built on reliability.",
            },
            {
              title: "Reliable",
              gradient: "from-purple-400 to-pink-400",
              description: "Always delivering on our promise.",
            },
          ].map(({ title, gradient, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
              role="listitem"
              tabIndex={0} // Make focusable for accessibility
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
              >
                {title}
              </h3>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
