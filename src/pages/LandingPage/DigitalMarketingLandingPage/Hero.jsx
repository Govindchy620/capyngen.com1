import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../../ui/Reveal";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-brand-dark">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-glow/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <Reveal delay={0.1}>
            <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Capyngen -{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-brand-accent to-blue-500 animate-gradient">
                A Result-Driven Digital Marketing Agency for Growth-Focused
                Brands
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              Capyngen assists brands in expanding their use of digital
              performance marketing. Not clicks and impressions, but{" "}
              <span className="text-white font-semibold">real customers</span>,{" "}
              <span className="text-white font-semibold">
                quantifiable outcomes
              </span>
              , and <span className="text-white font-semibold">ROI</span> in the
              long-term.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-brand-dark font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full bg-brand-glow opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Free Strategy Session{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#services"
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-all hover:border-white/40 flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                View Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-brand-accent rounded-full"></div>
                <span>Google Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-brand-glow rounded-full"></div>
                <span>Meta Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                <span>HubSpot Certified</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero Image/Graphic */}
        <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-accent/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop"
                alt="Digital Growth Visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Background glow for image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/10 blur-3xl -z-10 rounded-full"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-brand-glow rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
