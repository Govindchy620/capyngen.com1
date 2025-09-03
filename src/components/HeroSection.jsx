import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";
import React, { useRef } from "react";
import Particles from "./Particles";
import RotatingImage from "./RotatingImage";
import { assets } from "../assets/assets";

const HeroSection = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a]"
    >
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
      {/* Content with dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/30 z-[1] pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center pointer-events-none max-w-[90rem] mt-10 ml-20">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 text-white pb-10 leading-30"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Innovating Today,
            <br /> Empowering Tomorrow
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 relative max-w-5xl"
        >
          <span className="">
            In a world where digital is the first choice, we deliver secure,
            scalable, and innovation-driven IT solutions that drive efficiency,
            resilience, and measurable growth. From cloud and cybersecurity to
            AI, automation, and digital transformation, our expertise helps
            businesses stay competitive, future-ready, and equipped to thrive.
          </span>
          <br />
          {/* <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            Explore
          </motion.span> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
