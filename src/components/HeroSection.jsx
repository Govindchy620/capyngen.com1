import { motion } from "framer-motion";
import React, { useRef } from "react";
import Particles from "./Particles";

const HeroSection = () => {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 sm:px-6 md:px-10"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={800}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/30 z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center pointer-events-none max-w-7xl mx-auto mt-10">
        {/* Heading */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-snug"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Innovating Today,
            <br /> Empowering Tomorrow
          </motion.h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 relative max-w-4xl"
        >
          In a world where digital is the first choice, we deliver secure,
          scalable, and innovation-driven IT solutions that drive efficiency,
          resilience, and measurable growth.
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 text-center"
        >
          {/* Feature 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Innovative
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Fresh ideas, future-ready solutions.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Trusted
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              A reputation built on reliability.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Reliable
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Always delivering on our promise.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
