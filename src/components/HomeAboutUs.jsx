"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

const demoPeople = [assets.team1, assets.team2, assets.team3, assets.team4];

const aboutCards = [
  {
    id: "software",
    image: assets.homeAboutUs2,
    title: "Software Development Company in India",
    desc: "Equipped with the latest technologies, we develop scalable software and digital platforms with an individual approach for every client.",
    link: "/company-overview",
    badge: "ENGINEERING",
  },
  {
    id: "marketing",
    image: assets.digitalMarketing,
    title: "Digital Marketing Agency in Gurgaon",
    desc: "Superior to traditional agencies, crafting customized strategies aligned with client objectives, brand concepts, and target markets.",
    link: "/company-overview",
    badge: "MARKETING",
  },
  {
    id: "innovation",
    image: assets.workProcess1,
    title: "Blending Creativity with Technology",
    desc: "Our interest in innovations blends creativity with technical excellence to create bespoke strategies that deliver measurable growth.",
    link: "/company-overview",
    badge: "INNOVATION",
  },
  {
    id: "team",
    image: assets.homeAboutUs1,
    title: "Our Talented Team",
    desc: "You'll be talking directly with our talented team of senior technical engineers and strategic marketing consultants.",
    link: "/contact-us",
    badge: "CONSULTATION",
    hasAvatars: true,
  },
];

export default function HomeAboutUs() {
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
      className="relative w-full overflow-hidden bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-100"
      aria-label="About Capyngen"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header Row with Title and Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="block mb-2 text-xs font-bold tracking-widest text-blue-600 uppercase">
              Who We Are
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Capyngen –{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600">
                Your Partner
              </span>
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`flex h-12 w-12 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none cursor-pointer ${
                canScrollPrev ? "" : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`flex h-12 w-12 items-center justify-center border border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900 focus:outline-none cursor-pointer ${
                canScrollNext ? "" : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Cards Container */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-2" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6">
            {aboutCards.map((card) => (
              <div
                key={card.id}
                className="flex-[0_0_85vw] sm:flex-[0_0_320px] md:flex-[0_0_340px] max-w-[340px] min-w-0"
              >
                <article
                  onClick={() => navigate(card.link)}
                  className="group flex h-full cursor-pointer flex-col overflow-hidden border border-slate-100 bg-white transition-shadow duration-300 hover:shadow-lg"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6 justify-between">
                    <div>
                      <h3
                        className="mb-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500 font-sans">
                        {card.desc}
                      </p>
                    </div>

                    {/* Team Avatars */}
                    {card.hasAvatars && (
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                        <div className="flex -space-x-2">
                          {demoPeople.map((src, idx) => (
                            <img
                              key={idx}
                              src={src}
                              alt={`Team member ${idx + 1}`}
                              className="w-8 h-8 rounded-full border-2 border-white shadow-sm object-cover"
                              loading="lazy"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-600 font-semibold font-sans">
                          Senior IT Experts
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
