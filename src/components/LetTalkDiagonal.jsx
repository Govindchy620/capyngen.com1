"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LetTalkDiagonal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 70]);

  const card1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);

  const card2Opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);

  const card3Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const card3Y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[350vh] bg-black text-white flex items-start justify-center overflow-hidden"
    >
      <div className="sticky top-0 flex flex-col items-center justify-center h-screen w-full max-w-6xl px-4 py-16">
        <motion.h3
          className="text-7xl md:text-[9rem] lg:text-[11rem] font-extrabold leading-none whitespace-nowrap origin-bottom-left"
          style={{ rotate }}
        >
          Let&apos;s Talk
        </motion.h3>
        <h3 className="text-7xl md:text-[9rem] lg:text-[11rem] font-extrabold leading-none mt-4">
          Our
        </h3>
        <h3 className="text-7xl md:text-[9rem] lg:text-[11rem] font-extrabold leading-none mt-4 flex items-center gap-4">
          Team
        </h3>
        <a
          href="mailto:info@themexriver.co.uk"
          className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400 hover:text-white transition-colors duration-300 mt-8"
        >
          info@themexriver.co.uk
        </a>

        {/* Cards */}
        <div className="absolute bottom-16 flex flex-col gap-8 w-full max-w-md">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            style={{ opacity: card1Opacity, y: card1Y }}
          >
            <h4 className="text-2xl font-bold mb-2">
              Card 1: Innovative Solutions
            </h4>
            <p className="text-gray-300">
              We bring fresh ideas and cutting-edge technology to solve your
              toughest challenges.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            style={{ opacity: card2Opacity, y: card2Y }}
          >
            <h4 className="text-2xl font-bold mb-2">
              Card 2: Dedicated Support
            </h4>
            <p className="text-gray-300">
              Our team is committed to providing exceptional support every step
              of the way.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            style={{ opacity: card3Opacity, y: card3Y }}
          >
            <h4 className="text-2xl font-bold mb-2">Card 3: Proven Results</h4>
            <p className="text-gray-300">
              Partner with us to achieve measurable success and drive your
              business forward.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
