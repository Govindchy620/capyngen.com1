import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={assets.heroVideo}
          poster={assets.heroPoster || "/default-poster.jpg"}
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A3B]/90 via-[#0B1A3B]/75 to-[#0B1A3B]/95" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mb-8 sm:mb-12">
          {/* Title */}
          <h1
            className="text-white leading-[1.08] tracking-tight mb-8"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            }}
          >
            Designing Innovation,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 inline-block pb-1">
              Delivering Growth
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans"
          >
            Capyngen is a custom software development company and a digital
            marketing agency providing <strong>Web Development</strong>,{" "}
            <strong>CRM</strong>, <strong>SEO</strong>, <strong>AI</strong>, and{" "}
            <strong>IT Consulting</strong> services. We are a major{" "}
            <strong>IT company</strong> in World and offer the best solutions that
            are considered all over the world.
          </motion.p>
        </div>

        {/* Features Section - Full Width Distribution */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-4 sm:mt-6"
          role="list"
          aria-label="Core company features"
        >
          {[
            {
              title: "Innovative",
              gradient: "from-blue-400 to-cyan-400",
              description:
                "New ideas, future-word solutions of a leading IT Company in India.",
              boxClass: "w-full max-w-sm mr-auto",
              alignClass: "items-start text-left",
            },
            {
              title: "Trusted",
              gradient: "from-green-400 to-emerald-400",
              description:
                "Reliable reputation and that we are one of best IT company in India.",
              boxClass: "w-full max-w-sm md:mx-auto",
              alignClass: "items-start text-left md:items-center md:text-center",
            },
            {
              title: "Reliable",
              gradient: "from-purple-400 to-pink-400",
              description:
                "It will always deliver on our promise as a fast-growing IT company in world.",
              boxClass: "w-full max-w-sm md:ml-auto",
              alignClass: "items-start text-left md:items-end md:text-right",
            },
          ].map(({ title, gradient, description, boxClass, alignClass }) => (
            <motion.li
              key={title}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`flex flex-col select-text ${boxClass} ${alignClass}`}
              tabIndex={0}
              role="listitem"
            >
              <h3
                className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent select-text mb-1`}
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base font-sans">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default HeroSection;
