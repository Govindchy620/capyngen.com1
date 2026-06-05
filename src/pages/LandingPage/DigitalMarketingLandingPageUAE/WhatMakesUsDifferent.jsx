import React from "react";
import { FadeIn } from "../../../ui/Reveal";
import { FileText, Handshake } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatMakesUsDifferent = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      className="relative py-24 overflow-hidden bg-black"
      id="difference"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/90 z-10" />

        <motion.div style={{ y }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
            alt="Global Network"
            className="w-full h-[120%] object-cover opacity-40"
          />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            What Makes Capyngen Different?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Capyngen does not emphasize services, but rather{" "}
            <span className="text-brand-glow font-semibold">performance</span>,{" "}
            <span className="text-brand-glow font-semibold">transparency</span>,
            and{" "}
            <span className="text-brand-glow font-semibold">
              long-term partnership
            </span>
            .
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-16">
          <FadeIn delay={0.1}>
            <div className="bg-brand-surface/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-accent/40 transition-colors h-full hover:bg-brand-surface group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <Handshake className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Strategic Partnership
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                We start by getting to know your business, market, and
                objectives and develop a strategy that provides short-term
                victories and long-term increases in the brand. None of the
                standard packages, just specialized and outcome-oriented
                solutions.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-brand-surface/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-brand-accent/40 transition-colors h-full hover:bg-brand-surface group">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                <FileText className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Clear Communication
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Growth is optimized by obvious data. Capyngen works on weekly or
                monthly updates with practical insights, transparent ROI
                monitoring in SEO, paid-search advertising, and social media
                promotions, and consistent revising of the strategy to keep the
                campaigns on track and streamline their delivery.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
