import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Code2, Cpu, Sparkles } from "lucide-react";
import { assets } from "../assets/assets";

export default function AppTopRatedCompany({
  title = "Transform Your Ideas into Powerful Mobile Applications",
  description = `We specialize in creating high-performance, scalable, and user-friendly mobile applications tailored to your business goals. From concept to deployment, we build cross-platform apps that deliver seamless experiences, robust security, and future-ready solutions.`,
  image = assets.appDev, // Pass your image from assets
  background = assets.patternBg3, // Custom background
  accentColor = "from-purple-500 via-pink-500 to-red-500",
}) {
  return (
    <div
      className="relative py-16 overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Floating Gradient Circles */}
      <div className="absolute top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-600/40 to-pink-600/40 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-10 w-56 h-56 rounded-full bg-gradient-to-tr from-red-600/40 to-purple-600/40 blur-3xl animate-ping" />

      <div className="container px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text animate-text bg-gradient-to-r ${accentColor}">
              {title}
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-200 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Animated Icon Highlights */}
            <div className="grid grid-cols-2 sm:flex sm:gap-6 mt-10 justify-center lg:justify-start">
              {[
                { icon: Smartphone, label: "Cross-Platform" },
                { icon: Code2, label: "Custom Solutions" },
                { icon: Cpu, label: "High Performance" },
                { icon: Sparkles, label: "Modern UI/UX" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center text-white group"
                >
                  <item.icon className="w-10 h-10 mb-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                  <span className="text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image with Animation */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative max-w-sm md:max-w-md lg:max-w-lg">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-md animate-pulse" />
              <img
                src={image}
                alt="App development showcase"
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
