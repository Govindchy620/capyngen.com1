import React, { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HeroSection = () => {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);

  // Variants for motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Memoized particles config (prevents re-renders)
  const particlesOptions = useMemo(
    () => ({
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
        number: { value: 100, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 150,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 1 },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.6 },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        options={particlesOptions}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center max-w-7xl mx-auto mt-10">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white leading-snug text-center sm:text-left"
        >
          Innovating Today,
          <br /> Empowering Tomorrow
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 relative max-w-3xl text-center sm:text-left"
        >
          In a world where digital is the first choice, we deliver secure,
          scalable, and innovation-driven IT solutions that drive efficiency,
          resilience, and measurable growth.
        </motion.p>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 text-center"
        >
          {/* Feature Items */}
          {[
            {
              title: "Innovative",
              desc: "Fresh ideas, future-ready solutions.",
              gradient: "from-blue-400 to-cyan-400",
            },
            {
              title: "Trusted",
              desc: "A reputation built on reliability.",
              gradient: "from-green-400 to-emerald-400",
            },
            {
              title: "Reliable",
              desc: "Always delivering on our promise.",
              gradient: "from-purple-400 to-pink-400",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center px-4"
            >
              <h3
                className={`text-lg sm:text-xl font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
