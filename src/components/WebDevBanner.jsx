import React from "react";
import { motion } from "framer-motion";
import BestHeading2 from "./BestHeading2";

const WebDevBanner = ({
  backgroundImage,
  title = "Web Development Solutions",
  description = "We craft scalable, high-performing, and visually engaging websites tailored to your business needs. From responsive design to custom web applications, we deliver digital experiences that drive results.",
}) => {
  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 animate-gradient-x" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BestHeading2 title="Innovative" highlight={title} />

          <motion.p
            className="max-w-3xl mx-auto mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-500/40 to-purple-500/40 rounded-full blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
    </section>
  );
};

export default WebDevBanner;
