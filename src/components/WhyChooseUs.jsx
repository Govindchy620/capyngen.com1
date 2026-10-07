"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const features = [
  {
    title: "Customer-Centric Solutions",
    desc: "Capyngen is the provider of both software development and IT services, which are uniquely tailored to fit the specific requirements of your business therefore ensuring the long-term expansion and success of your business with the help of Capyngen IT solutions.",
    image: assets.workProcess1,
  },
  {
    title: "Digital Marketing - Strategic",
    desc: "To think of digital marketing strategies, search engine optimization services, and social media and marketing campaigns are the tools that will be employed to draw in and keep customers with you hence placing you far afield the competition as the Best Digital Marketing Company in Gurgaon.",
    image: assets.digitalMarketing,
  },
  {
    title: "Expertise You Can Trust",
    desc: "Capyngen provides the IT consulting service, web development and CRM management software solutions that are scalable, secure and future ready using industry knowledge and skills that have been proven. Best web development services are incorporated to ensure greater efficiency.",
    image: assets.workProcess3,
  },
  {
    title: "Reliable 24/7 Support",
    desc: "Our commitment ensures that you receive continuous support and offer good IT services company services such that your business will run smoothly with no lapse time by one of the leading Top Digital Marketing Agency in Gurgaon.",
    image: assets.whyChooseUs,
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full bg-[#070e1d] text-white py-20 sm:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 overflow-hidden border-t border-slate-800"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto w-full max-w-[1536px]">
        {/* Top Split Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="mb-3 text-xs font-bold uppercase tracking-widest text-[#00e5ff]">
              Why Choose Capyngen
            </span>
            <h2
              id="why-choose-heading"
              className="mb-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Innovative, Reliable IT &amp; Digital Solutions That Deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
                Results
              </span>
            </h2>
            <p className="mb-8 text-base leading-relaxed text-slate-300 font-sans">
              Capyngen is the lifeline of business that wants to grow, innovate
              and make impact using custom-made solutions of the state of the
              art. As a leading IT Company In Gurugram, we focus on IT services,
              consulting, custom software development, web platform, CRM
              systems, cloud IT, cybersecurity and mobile app development. Our
              solutions are enterprise-grade, responsive web design, smart
              automation, and online marketing, which will lead to success in
              the long term and long-term growth.
            </p>
            <div>
              <button
                type="button"
                onClick={() => navigate("/contact-us")}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Image Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900">
              <img
                src={assets.homepageWhyChoose}
                alt="Capyngen professional team collaborating in a modern office"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070e1d]/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc }, i) => (
            <motion.article
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group relative flex flex-col justify-between border border-slate-800/90 bg-slate-900/80 p-7 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900"
            >
              <div>
                <h3
                  className="text-lg sm:text-xl font-bold text-white mb-3.5 leading-snug group-hover:text-cyan-300 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 font-sans">
                  {desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
