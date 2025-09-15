import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Cloud } from "lucide-react";
import { assets } from "../assets/assets";

const AppDevBanner = () => {
  return (
    <section className="relative min-h-[100vh] py-20 md:pb-0 flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      {/* Background Animated Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_#2563eb_1px,_transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Right: Mobile Mockup (on top for small screens) */}
        <motion.div
          className="flex justify-center lg:justify-end relative order-1 lg:order-2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Glow behind the phone */}
          <motion.div
            className="absolute -inset-10 bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-pink-500/40 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Phone */}
          <motion.div
            className="relative w-[200px] h-[400px] sm:w-[220px] sm:h-[440px] md:w-[240px] md:h-[480px] lg:w-[260px] lg:h-[520px] bg-black rounded-[2.5rem] border-4 border-gray-700 shadow-2xl overflow-hidden"
            animate={{
              y: [0, -15, 0], // floating effect
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Screen */}
            <img
              src={assets.appDevelopment}
              alt="App Preview"
              className="w-full h-full object-cover"
            />
            {/* Top notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-28 md:w-32 h-5 sm:h-6 bg-black rounded-b-2xl" />
          </motion.div>
        </motion.div>

        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Scalable & Innovative
            <span className="text-blue-400"> App Solutions</span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            We build user-friendly, secure, and future-ready applications that
            help businesses scale and thrive in the digital era.
          </motion.p>

          {/* Feature Highlights (hidden on mobile) */}
          <motion.div
            className="hidden sm:grid mt-8 sm:mt-10 grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, delayChildren: 0.3 },
              },
            }}
          >
            {[
              {
                icon: (
                  <Smartphone className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                ),
                text: "Mobile First Design",
              },
              {
                icon: (
                  <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                ),
                text: "Robust Code Quality",
              },
              {
                icon: (
                  <Cloud className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
                ),
                text: "Cloud-Ready Solutions",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 bg-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-md hover:bg-white/20 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {item.icon}
                <span className="font-medium text-sm sm:text-base">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDevBanner;
