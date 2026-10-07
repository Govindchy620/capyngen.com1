"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    title: "Web Developer At ThemeXriver",
    companyLogo: assets.testimonial2,
    companyName: "Europa",
    rating: 5,
    quote:
      "The online marketing efforts of Capyngen boosted our online presence to the ceiling. Our leads are becoming qualified more regularly, and our brand is becoming engaged on all platforms much more regularly.",
  },
  {
    id: 2,
    name: "Emma Markson",
    title: "Web Developer At ThemeXriver",
    companyLogo: assets.testimonial3,
    companyName: "EasyTax",
    rating: 4,
    quote:
      "Capyngen developed a mobile phone and tablet fitness application to our company. The whole process was simple and not complicated, including the development of the UI/UX to ensuring that everything was working as planned.",
  },
  {
    id: 3,
    name: "Brooklyn Simmons",
    title: "IT Lead, Financial Services",
    companyLogo: assets.testimonial4,
    companyName: "CreativeFlow",
    rating: 5,
    quote:
      "The Capyngen insights, which are AI-powered, transformed our thoughts about the behavior of customers. Their data analytics solution assisted us in surpassing the competition.",
  },
  {
    id: 4,
    name: "Kristin Watson",
    title: "Manager, Logistics Company",
    companyLogo: assets.testimonial5,
    companyName: "InnovateCo",
    rating: 5,
    quote:
      "The cybersecurity solutions of Capyngen made us safe to conduct business. Their risk management and active monitoring is simply incredible.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-slate-700 text-slate-700"
          }`}
        />
      ))}
    </div>
  );
};

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
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
      className="w-full bg-[#070e1d] text-white py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-800"
      aria-label="Client Testimonials"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Heading & Overall Rating */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="mb-2 block text-xs font-bold tracking-widest text-[#00e5ff] uppercase">
              Client Feedback
            </span>
            <h2
              className="mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Our Clients Say About Capyngen
            </h2>

            {/* Overall Rating Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8 max-w-sm">
              <div
                className="text-4xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                4.9
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Based on 150+ verified enterprise client reviews
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-500 focus:outline-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all hover:bg-slate-800 hover:text-white hover:border-slate-500 focus:outline-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Embla Carousel Testimonial Cards */}
          <div className="lg:col-span-7 overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_88%] md:flex-[0_0_80%] lg:flex-[0_0_85%] min-w-0"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/90 p-8 sm:p-9 shadow-xl backdrop-blur-sm"
                  >
                    <div>
                      {/* Top Row: Stars + Quote Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <StarRating rating={item.rating} />
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400">
                          <Quote className="h-5 w-5 rotate-180" />
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-base sm:text-lg leading-relaxed text-slate-200 font-sans mb-8">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Bottom Author Row */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                      <div>
                        <h4
                          className="text-base sm:text-lg font-bold text-white"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {item.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans">
                          {item.title}
                        </p>
                      </div>

                      {item.companyLogo && (
                        <div className="flex h-10 w-24 items-center justify-end">
                          <img
                            src={item.companyLogo}
                            alt={item.companyName}
                            className="max-h-8 max-w-full object-contain opacity-80"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
