"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";

const showcaseItems = [
  { title: "Web Development", category: "ENGINEERING", image: assets.webDevelopment },
  { title: "Custom AI Solution", category: "INNOVATION", image: assets.customAiSolution },
  { title: "E-Commerce Solutions", category: "COMMERCE", image: assets.eCommerceSolution },
  { title: "Blockchain Development", category: "FINTECH", image: assets.blockchainDevelopment },
  { title: "DevOps Solutions", category: "INFRASTRUCTURE", image: assets.devops },
  { title: "Application Solutions", category: "ENTERPRISE", image: assets.applicationSolution },
  { title: "CRM & Management", category: "MANAGEMENT", image: assets.crmManagement },
  { title: "UI/UX Design", category: "DESIGN", image: assets.uiUxDesign },
  { title: "Website Design", category: "CREATIVE", image: assets.websiteDesign },
  { title: "Digital Marketing", category: "GROWTH", image: assets.digitalMarketing },
  { title: "SEO Services", category: "VISIBILITY", image: assets.seo },
  { title: "Cybersecurity", category: "SECURITY", image: assets.cybersecurity },
];

export default function WorkShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative w-full bg-[#070e1d] text-white py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden border-t border-slate-800/80"
      aria-label="Our Work in Motion"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-14 gap-6">
          <div className="max-w-2xl">
            <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#00e5ff]">
              Our Work in Motion
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Explore Capyngen
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed">
              Innovating at the intersection of design, engineering, and artificial intelligence.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center border border-slate-700/80 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-500 focus:outline-none cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center border border-slate-700/80 bg-slate-900/60 text-slate-300 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white hover:border-slate-500 focus:outline-none cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Showcase */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {showcaseItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex-[0_0_85%] sm:flex-[0_0_46%] lg:flex-[0_0_31%] xl:flex-[0_0_24%] min-w-0"
              >
                <div className="group relative h-[360px] sm:h-[380px] overflow-hidden border border-slate-800/80 bg-slate-900 shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d] via-[#070e1d]/50 to-transparent" />

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex items-end justify-between gap-3">
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-slate-950">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
