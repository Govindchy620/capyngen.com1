"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../utils/utils";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const cardLength = content.length;

  // Listen to whole-page scroll for the section's scroll range
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, idx) =>
        Math.abs(latest - breakpoint) < Math.abs(latest - cardsBreakpoints[acc])
          ? idx
          : acc,
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <section
      ref={ref}
      className="relative min-h-[200vh] flex items-start justify-center px-8 py-16"
    >
      <div className="flex w-full max-w-6xl gap-8">
        {/* Left: Scrollable content */}
        <div className="flex-1 flex flex-col">
          {content.map((item, index) => (
            <div key={item.title + index} className="py-32">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-8 text-lg max-w-lg text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
        {/* Right: Sticky image */}
        <div
          className={cn(
            "w-96 shrink-0 sticky top-24 self-start rounded-md overflow-hidden bg-white flex items-center justify-center min-h-80",
            contentClassName
          )}
        >
          {content[activeCard].image ? (
            <img
              src={content[activeCard].image}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            content[activeCard].content ?? null
          )}
        </div>
      </div>
    </section>
  );
};
