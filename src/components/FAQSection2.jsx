"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection2 = ({
  title = "FAQs",
  desc = "",
  items = [],
  bgColor = "bg-white",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isLight =
    bgColor === "bg-white" ||
    bgColor === "#ffffff" ||
    bgColor?.includes("white");

  return (
    <section
      className={`w-full ${
        isLight ? "bg-white text-slate-900" : "bg-slate-950 text-white"
      } pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-100`}
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Centered Heading */}
        <div className="relative flex flex-col items-center justify-center text-center mb-10 sm:mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {title}
          </h2>
          {desc ? (
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-500 font-sans font-normal">
              {desc}
            </p>
          ) : null}
        </div>

        {/* Clean Accordion List */}
        <div className="max-w-4xl mx-auto divide-y divide-slate-200/90">
          {items.map((item, index) => {
            const isOpen = activeIndex === index;
            const questionText = item.question || item.q;
            const answerText = item.answer || item.a;

            return (
              <div
                key={index}
                className="py-4.5 sm:py-5 cursor-pointer group transition-colors"
                onClick={() => toggle(index)}
              >
                <div className="w-full flex justify-between items-center text-left gap-4">
                  <h3
                    className={`text-base sm:text-lg font-medium transition-colors leading-snug ${
                      isOpen
                        ? "text-blue-600 font-semibold"
                        : "text-slate-900 group-hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {questionText}
                  </h3>

                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-none transition-all shrink-0 ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={2.2} />
                    ) : (
                      <Plus size={16} strokeWidth={2.2} />
                    )}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-sans font-normal pt-3.5 pr-8">
                        {answerText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection2;
