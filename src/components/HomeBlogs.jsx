"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const stories = [
  {
    tag: "SAAS",
    image: assets.news1,
    name: "Tech Updates",
    desc: "Latest trends in IT, AI automation, and scalable cloud solutions.",
  },
  {
    tag: "E-COMMERCE",
    image: assets.news2,
    name: "Marketing Buzz",
    desc: "Boosting digital presence, ROI, and modern performance marketing.",
  },
  {
    tag: "ENTERPRISE",
    image: assets.homepageIndustryBlog,
    name: "Industry Blog",
    desc: "Cross-industry insights, enterprise transformation, and strategic growth.",
  },
  {
    tag: "FINANCE",
    image: assets.homepageCapyngenNews,
    name: "Capyngen News",
    desc: "Company milestones, technology partnerships, and recent achievements.",
  },
  {
    tag: "ARCHITECTURE",
    image: assets.blog1,
    name: "Software Engineering",
    desc: "Architecting resilient, mission-critical systems for high throughput.",
  },
  {
    tag: "INNOVATION",
    image: assets.blog2,
    name: "Digital Transformation",
    desc: "Empowering businesses through smart automation and intelligent apps.",
  },
];

export default function HomeBlogs() {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="w-full bg-[#f8fafc] text-slate-900 pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-200/80"
      aria-label="News and Updates"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="block mb-2 text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              Insights That Inspire Innovation
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              News &amp; Updates
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal font-sans">
              Discover what’s new and what’s next in our journey of growth.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous story"
              className={`flex h-12 w-12 items-center justify-center bg-white border border-slate-200 text-slate-600 transition-all focus:outline-none cursor-pointer ${
                canScrollPrev
                  ? "hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next story"
              className={`flex h-12 w-12 items-center justify-center bg-white border border-slate-200 text-slate-600 transition-all focus:outline-none cursor-pointer ${
                canScrollNext
                  ? "hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Stories */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-2" ref={emblaRef}>
          <div className="flex gap-6">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="flex-[0_0_88%] sm:flex-[0_0_46%] lg:flex-[0_0_31%] xl:flex-[0_0_23.5%] min-w-0"
              >
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => navigate("/news-and-updates")}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400/60"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                      loading="lazy"
                    />
                  </div>

                  {/* Content & Action */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      <h3
                        className="mb-1.5 text-base sm:text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {story.name}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
                        {story.desc}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      <span>Read More</span>
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
