import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={{
          background: { color: "#0a0a0a" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
            modes: {
              repulse: { distance: 120 },
              push: { quantity: 4 },
            },
          },
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: 0.6 },
          },
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-snug">
          Innovating Today,
          <br /> Empowering Tomorrow
        </h1>

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
