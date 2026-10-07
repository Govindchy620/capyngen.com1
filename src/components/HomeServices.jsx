"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const servicesData = [
  {
    id: "banking",
    title: "Banking",
    image: assets.homepageBanking,
    subtitle: "Secure Core & Digital Banking",
    description:
      "Enabling financial institutions to have scalable, secure, and state-of-the-art digital solutions.",
    features: [
      "Mobile Banking Applications",
      "Upgraded Core Banking",
      "Secure Payment Systems",
    ],
  },
  {
    id: "education",
    title: "Education",
    image: assets.homepageEducation,
    subtitle: "Next-Gen EdTech & Classrooms",
    description:
      "Digitising learning in schools, colleges and online with a high-level digital solution.",
    features: [
      "Learning Technology Solutions",
      "Learning Management Systems",
      "Online Classrooms and E-Learning",
      "Student Information Systems",
    ],
  },
  {
    id: "capital-market",
    title: "Capital Market",
    image: assets.capitalMarket1,
    subtitle: "Trading & Real-Time Analytics",
    description:
      "Operating smarter and safer capital market operations based on credible IT solutions.",
    features: [
      "Trading Platform Development",
      "Capital Market Software",
      "Market Analytics",
      "Secure Transactions",
    ],
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    image: assets.homepageLifeScience,
    subtitle: "Pharma & Biotech Innovations",
    description:
      "Developing IT-based healthcare, biotech and pharma innovation with enterprise compliance.",
    features: [
      "Clinical Data Management",
      "Research & Development",
      "Regulatory Compliance",
      "Patient-Centric Systems",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare and fitness",
    image: assets.homepageHealth,
    subtitle: "Telehealth & Wearable Tech",
    description:
      "Providing customized digital services to patients, healthcare providers, and wellness enterprises.",
    features: [
      "Telemedicine Platforms",
      "Fitness & Wellness Apps",
      "Electronic Health Records",
      "Wearable Device Integration",
    ],
  },
  {
    id: "energy",
    title: "Energy and Utilities",
    image: assets.homepageEnergy,
    subtitle: "Smart Grids & Resource Optimization",
    description:
      "Creating efficiency and sustainability in the energy and utilities industry through automated systems.",
    features: [
      "Smart Grid Solutions",
      "Energy Monitoring & Analytics",
      "Resource Planning Systems",
      "Utility Management Platforms",
    ],
  },
  {
    id: "more-industries",
    title: "More Industries",
    image: assets.homepageIndustries,
    subtitle: "Enterprise Transformation",
    description:
      "Driving scalable IT, cloud and digital innovations across retail, manufacturing, logistics and beyond.",
    features: [
      "Healthcare Tech Solutions",
      "Fintech Platforms & Security",
      "Retail & E-Commerce",
      "Smart Manufacturing",
    ],
  },
];

export default function HomeServices() {
  const navigate = useNavigate();
  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);
  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section
      className="w-full bg-white text-slate-900 py-16 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-100"
      aria-label="Industries We Serve"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-14">
          <span className="mb-2 block text-xs font-bold tracking-widest text-[#2563eb] uppercase">
            Trusted Across Industries
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-slate-900 leading-[1.1]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            INDUSTRIES WE SERVE
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-stretch">
          {/* Left Column: Interactive Featured Showcase Card */}
          <div className="lg:col-span-6 relative w-full min-h-[480px] lg:min-h-[580px] overflow-hidden shadow-2xl bg-slate-950 flex flex-col justify-between p-7 sm:p-9 lg:p-11 border border-slate-200">
            {/* Background Image with AnimatePresence crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061129]/98 via-[#061129]/80 to-[#061129]/35" />
              </motion.div>
            </AnimatePresence>

            {/* Bottom Card Content */}
            <div className="relative z-10 mt-auto pt-8">
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {activeService.title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-sans mb-6">
                {activeService.description}
              </p>

              {/* Feature Highlights */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/15 mb-7">
                {activeService.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200"
                  >
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Explore {activeService.title} Solutions</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Interactive Navigation List */}
          <div className="lg:col-span-6 flex flex-col justify-between border border-slate-200/90 bg-white p-3 sm:p-4 shadow-sm divide-y divide-slate-100">
            {servicesData.map((service) => {
              const isActive = activeServiceId === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group flex w-full items-center justify-between py-4 sm:py-4.5 px-4 sm:px-5 text-left transition-all duration-200 focus:outline-none cursor-pointer ${
                    isActive
                      ? "bg-blue-50/80 text-blue-600 shadow-xs"
                      : "text-slate-800 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 scale-125 ring-4 ring-blue-100"
                          : "bg-slate-300 group-hover:bg-blue-400"
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg transition-colors font-medium ${
                        isActive
                          ? "font-bold text-blue-600"
                          : "text-slate-800 group-hover:text-blue-600"
                      }`}
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {service.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`hidden sm:inline-block text-xs font-sans transition-colors ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "text-slate-600 group-hover:text-blue-600"
                      }`}
                    >
                      {service.subtitle}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`transition-transform duration-200 ${
                        isActive
                          ? "text-blue-600 translate-x-1"
                          : "text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
