"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

const processSteps = [
  {
    title: "Goal Setting & Strategy",
    description:
      "We begin by defining business goals and setting up on key performance indicators (KPIs) that are in line with your vision. This strategy will ensure that all digital marketing services will have quantifiable positive impact of a Top IT Company in World.",
    image: assets.homepageGoal,
  },
  {
    title: "Audience Research & Insights",
    description:
      "We drill in the figures to identify the most desirable customers to your company. With the identification of their needs and wants, we are able to create products that will be appealing to them and will keep them occupied by the solutions offered by Capyngen digital marketing agency.",
    image: assets.homepageAudience,
  },
  {
    title: "Data-Driven Performance",
    description:
      "We are provided with the latest data by which each act we do is followed. As we identify trends and opportunities, we will change our approach to ensure that your SEO, social media and marketing will provide the highest returns to your investment.",
    image: assets.homepageDataDriven,
  },
  {
    title: "Execution & Continuous Optimization",
    description:
      "We are so attentive in executing our programs up to the point of the takeoff to the landing. We always ensure that our team is busy with the minor components of the programs, thereby making sure that your IT services and online marketing will be profitable in the long run with the help of the modern devops consulting services.",
    image: assets.homepageExecution,
  },
  {
    title: "Reporting & Transparent Communication",
    description:
      "We are also available of reports and keep you informed at every stage thereby allowing a complete realization and measurable results of your IT consulting services and custom software development programs developed by a top IT company in World.",
    image: assets.homepageReporting,
  },
];

const HorizontalProcessSection = () => {
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
      className="w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-100"
      aria-label="Capyngen Process Section"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header Row with Title and Scroll Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-14 gap-6">
          <div className="max-w-3xl">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Process
            </span>
            <h2
              className="mb-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              The Capyngen Approach
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-sans">
              We do your strategic work at Capyngen with smart, data driven steps
              to make it more effective and grow it. All the personalization of the
              software and application solutions, as well as cloud platforms and
              digital strategies, are customized to your business goals.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`flex h-12 w-12 items-center justify-center border border-slate-200 text-slate-600 transition-all focus:outline-none cursor-pointer ${
                canScrollPrev
                  ? "hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm"
                  : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`flex h-12 w-12 items-center justify-center border border-slate-200 text-slate-600 transition-all focus:outline-none cursor-pointer ${
                canScrollNext
                  ? "hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-sm"
                  : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel: 3 Cards Visible at a Time on Desktop */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-2" ref={emblaRef}>
          <div className="flex gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex-[0_0_88%] sm:flex-[0_0_calc((100%-1.5rem)/2)] lg:flex-[0_0_calc((100%-3rem)/3)] min-w-0"
              >
                <article
                  className="group relative h-[440px] sm:h-[460px] w-full overflow-hidden border border-slate-200/90 bg-slate-950 shadow-md transition-all duration-500 hover:shadow-2xl hover:border-blue-500/60 cursor-pointer"
                  tabIndex={0}
                  role="article"
                >
                  {/* Card Image */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/95 via-[#081226]/65 to-transparent group-hover:from-[#081226]/98 group-hover:via-[#081226]/85 group-hover:to-[#081226]/50 transition-all duration-500" />

                  {/* Bottom Content: Title visible, description expands on hover */}
                  <div className="relative z-10 flex flex-col justify-end p-7 sm:p-8 h-full pointer-events-none">
                    <h3
                      className="text-xl sm:text-2xl font-semibold text-white mb-2 leading-snug transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {step.title}
                    </h3>

                    {/* Description: Reveals smoothly on hover */}
                    <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300 font-sans opacity-0 max-h-0 overflow-hidden transform translate-y-3 group-hover:opacity-100 group-hover:max-h-60 group-hover:translate-y-0 transition-all duration-500 ease-out">
                      {step.description}
                    </p>

                    {/* Hover Indicator Line */}
                    <div className="mt-3.5 h-0.5 w-8 bg-blue-500 transition-all duration-500 group-hover:w-16 group-hover:bg-[#00e5ff]" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProcessSection;
