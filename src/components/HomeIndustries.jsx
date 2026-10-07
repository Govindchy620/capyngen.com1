"use client";

import React from "react";
import {
  Cloud,
  ShieldCheck,
  Building2,
  Cpu,
  RefreshCw,
  Check,
} from "lucide-react";
import { assets } from "../assets/assets";

const pillarFeatures = [
  {
    icon: Cloud,
    title: "Next-Gen Cloud & IT Solutions",
    description: "Future-Proof, Secure, and Scalable.",
  },
  {
    icon: ShieldCheck,
    title: "State of the art Cybersecurity Services",
    description: "Protecting companies against emerging threats.",
  },
  {
    icon: Building2,
    title: "Industry-Targeted Innovation",
    description: "Our technology drives the growth of finance to healthcare.",
  },
  {
    icon: Cpu,
    title: "Artificial Intelligence and Data-driven insights",
    description: "More intelligent choices, quicker outcomes.",
  },
  {
    icon: RefreshCw,
    title: "Digital transformation without interruption",
    description: "Modernisation of enterprises with responsive solutions.",
  },
];

const capabilityItems = [
  "Business Automation",
  "Digital Transformation",
  "Legacy System Issues",
  "Downtime & Reliability",
  "Remote Work Enablement",
  "Customer Experience Gaps",
  "System Integration",
  "Industry Innovation",
];

const clientAvatars = [
  assets.team1 || "https://randomuser.me/api/portraits/men/32.jpg",
  assets.team2 || "https://randomuser.me/api/portraits/women/44.jpg",
  assets.team3 || "https://randomuser.me/api/portraits/women/68.jpg",
  assets.team4 || "https://randomuser.me/api/portraits/men/81.jpg",
];

export default function HomeIndustries() {
  return (
    <section
      className="w-full bg-[#f8fafc] text-slate-900 py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-t border-slate-200"
      aria-label="Technologies"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="block mb-2 text-xs font-bold tracking-widest text-blue-600 uppercase font-sans">
            Technologies &amp; Innovation
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-slate-900 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Smart Technologies That Drive Growth
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            We use innovation, latest IT services, tailored software development,
            Best web design services and digital solutions to develop scalable,
            secure, and future-ready systems to meet your business needs at
            Capyngen.
          </p>
        </div>

        {/* Clean Enterprise Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (8 cols): Why Our Technologies Stand Out */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between border border-slate-200 bg-white p-7 sm:p-9 lg:p-10 shadow-sm">
            <div>
              <div className="pb-6 mb-2 border-b border-slate-100">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Why Our Technologies Stand Out
                </h3>
              </div>

              {/* 5 Pillar Rows */}
              <div className="divide-y divide-slate-100">
                {pillarFeatures.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-start sm:items-center gap-4 sm:gap-5 py-5 transition-colors"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4
                          className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug"
                          style={{ fontFamily: "'Syne', sans-serif" }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-sm text-slate-500 font-sans mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Stat Card + Capabilities Checklist */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 justify-between">
            {/* Stat Card: 5.2k+ Customers */}
            <div className="bg-[#2563eb] text-white p-7 sm:p-8 shadow-md border border-blue-400/30 flex flex-col justify-between">
              <div>
                <span className="block text-xs font-bold tracking-widest uppercase text-cyan-200 mb-3">
                  Verified Clients
                </span>
                <div
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  5.2k+
                </div>
                <p className="text-sm text-blue-100 font-sans leading-relaxed">
                  Customers are satisfied with the services.
                </p>
              </div>

              {/* Avatar stack */}
              <div className="mt-6 pt-5 border-t border-white/20 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {clientAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Avatar ${i + 1}`}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span className="text-xs text-blue-100 font-sans font-medium">
                  Global Enterprise Clients
                </span>
              </div>
            </div>

            {/* Capabilities Checklist Card */}
            <div className="flex-1 border border-slate-200 bg-white p-7 sm:p-8 shadow-sm">
              <h4
                className="text-lg font-bold text-slate-900 mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Key Capabilities &amp; Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {capabilityItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 py-1.5"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-blue-50 text-blue-600 border border-blue-100">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-700 font-sans">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
