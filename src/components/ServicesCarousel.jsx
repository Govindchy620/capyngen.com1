"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const cards = [
  {
    title: "Custom AI Solution",
    desc: "Specially made AI-based solutions that enable jobs to be faster and enable businesses to succeed better.",
    href: "/custom-ai-solutions",
    image: assets.customAiSolution,
  },
  {
    title: "Web Development",
    desc: "The secure, responsive websites where the users can enjoy themselves and the companies can flourish during the use of the services of the Best web design.",
    href: "/web-development",
    image: assets.webDevelopment,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Smarter online shops that are designed to maximize purchases, customer satisfaction, and interaction.",
    href: "/ecommerce-solutions",
    image: assets.eCommerceSolution,
  },
  {
    title: "Blockchain Development",
    desc: "Safe, transparent, and trustworthy blockchain solutions to conducting digital transactions.",
    href: "/blockchain-development",
    image: assets.blockchainDevelopment,
  },
  {
    title: "DevOps Solutions",
    desc: "Easy DevOps solutions that allow you to develop software faster, with greater reliability and efficiency.",
    href: "/devops-solutions",
    image: assets.devops,
  },
  {
    title: "Application Solutions",
    desc: "Complete utilization of new ideas, better company performance, and simplified smooth work.",
    href: "/application-solutions",
    image: assets.applicationSolution,
  },
  {
    title: "CRM & Management Software",
    desc: "Tailored customer relationship management systems that actually assist in sales, relationships and customer involvement.",
    href: "/crm-management-software",
    image: assets.crmManagement,
  },
  {
    title: "UI/UX Design",
    desc: "UI/UX design that focuses on the user to ensure that interactions are not difficult to understand and use by users.",
    href: "/ui-ux-design-services",
    image: assets.uiUxDesign,
  },
  {
    title: "Website Design",
    desc: "Engaging, receptive and effective websites built to enhance online presence.",
    href: "/website-design-company-india",
    image: assets.websiteDesign,
  },
  {
    title: "Branding & Identity Design",
    desc: "Good branding solutions to make an identity and reach your audience.",
    href: "/branding-identity-design",
    image: assets.branding1 || assets.creativeAgencyFAQ,
  },
  {
    title: "Ecommerce Design",
    desc: "Contemporary ecommerce layouts that enhance purchasing, confidence, and shopping experiences of customers.",
    href: "/ecommerce-website-design",
    image: assets.eCommerceDesign,
  },
  {
    title: "CMS Design",
    desc: "CMS templates that assist you in managing your contents to a better extent and enhance the performance of the site.",
    href: "/cms-website-design",
    image: assets.cms,
  },
  {
    title: "Search Engine Optimization",
    desc: "Proper search engine optimization to enhance the ranking, visibility, and the long-term online expansion.",
    href: "/seo",
    image: assets.seo,
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Participation in SMM campaigns that create brand awareness and reach out to audiences.",
    href: "/smm",
    image: assets.smm2 || assets.socialMediaMarketing,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Outcome-based PPC advertisements, which lead to the highest ROI and acquisition of qualified leads in the shortest time possible.",
    href: "/ppc",
    image: assets.paidAdvertising || assets.digitalMarketing1,
  },
  {
    title: "Artificial Intelligence",
    desc: "Innovation, smarter automation, and business transformation through state-of-the-art AI services.",
    href: "/artificial-intelligence-services",
    image: assets.customAiSolution,
  },
  {
    title: "Cybersecurity",
    desc: "Solid cybersecurity measures to protect information, networks, and computer networks.",
    href: "/cybersecurity",
    image: assets.cybersecurity,
  },
  {
    title: "Network Services and Solutions",
    desc: "Breakthrough Network solutions that provide reliable, scalable and secure network infrastructure.",
    href: "/network-solutions",
    image: assets.technologiesImg,
  },
  {
    title: "Business Solutions",
    desc: "Enterprise solutions designed to be scalable and streamline operations and speed up digital transformation.",
    href: "/enterprise-solutions",
    image: assets.applicationSolution,
  },
  {
    title: "Data and Analysis",
    desc: "Service analytics Actionable information analytics services transforming raw data into business insights.",
    href: "/data-analytics-services",
    image: assets.seoTool1,
  },
  {
    title: "Consulting",
    desc: "IT consulting services to make technology work with your business growth objectives.",
    href: "/consulting",
    image: assets.companyOverview,
  },
  {
    title: "App Development",
    desc: "Mobile device apps that are robust, scalable and easy to use, and are aimed at assisting organisations in achieving their goals.",
    href: "/app-development",
    image: assets.appDevelopment,
  },
];

const ServicesCarousel = () => {
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
      id="services"
      className="w-full bg-[#2563eb] py-16 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 scroll-mt-10"
      aria-label="Technology Solutions"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header Row */}
        <div className="mb-10 lg:mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Technology Solutions That Drive Growth
          </h2>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className={`flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none cursor-pointer ${
                canScrollPrev ? "" : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className={`flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 focus:outline-none cursor-pointer ${
                canScrollNext ? "" : "opacity-40 cursor-not-allowed"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-2" ref={emblaRef}>
          <div className="flex gap-6 sm:gap-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex-[0_0_85vw] sm:flex-[0_0_360px] md:flex-[0_0_400px] max-w-[400px] min-w-0"
              >
                <article
                  onClick={() => navigate(card.href)}
                  className="group flex h-full cursor-pointer flex-col border border-white/10 bg-[#1e293b] p-6 sm:p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                >
                  {/* Card Image */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="mt-6 sm:mt-8 flex flex-1 flex-col justify-between">
                    <div>
                      <h3
                        className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-white"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans">
                        {card.desc}
                      </p>
                    </div>
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

export default ServicesCarousel;
