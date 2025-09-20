"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Homepage1 = () => {
  const ref = useRef(null);

  // Track scroll relative to whole page
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax effect for image
  const y = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "40%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.2, 1]); // zoom out while scrolling
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.8]); // fade slightly

  return (
    <div ref={ref} className="relative w-full h-[300vh] bg-gray-100">
      {/* Hero Image */}
      <motion.div
        style={{ y, scale, opacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center"
      >
        <img
          src="https://picsum.photos/1600/900"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Section */}
      <div className="relative z-10 mt-[100vh] bg-white rounded-t-3xl shadow-lg">
        <section className="max-w-4xl mx-auto py-24 px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is a parallax homepage built with Framer Motion. The hero image
            smoothly transitions as you scroll down, creating a dynamic feel.
            You can replace this with your brand visuals, product showcase, or
            anything else.
          </p>
        </section>

        <section className="max-w-4xl mx-auto py-24 px-6">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            sapien nec arcu ultricies viverra. Integer in ex id lectus ultrices
            pretium.
          </p>
        </section>

        <section className="max-w-4xl mx-auto py-24 px-6">
          <h2 className="text-3xl font-semibold mb-4">Services</h2>
          <p className="text-gray-600 leading-relaxed">
            Our services are crafted with love and dedication. Scroll-triggered
            animations make everything feel more interactive and modern.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Homepage1;
