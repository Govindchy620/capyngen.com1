import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

const features = [
  {
    Icon: UserRoundSearch,
    color: "from-indigo-400 via-indigo-500 to-indigo-600",
    title: "Customer-Centric Solutions",
    desc: "Capyngen delivers custom software development and IT services that are specially designed to meet the unique needs of your business, thus guaranteeing the long-term growth and success of your enterprise.",
  },
  {
    Icon: BarChart3,
    color: "from-pink-400 via-fuchsia-500 to-pink-600",
    title: "Strategic Digital Marketing",
    desc: "We mix innovation and artistry to conceive digital marketing strategies, search engine optimization services, and social media & marketing campaigns which are the tools that will be used to attract and retain customers by you thus putting you way ahead of the competition.",
  },
  {
    Icon: Sparkles,
    color: "from-yellow-300 via-amber-400 to-orange-500",
    title: "Expertise You Can Trust",
    desc: "With the use of industry knowledge and skills that have been proven, Capyngen delivers IT consulting services, web development, and CRM management software solutions that are scalable, secure, and ready for the future.",
  },
  {
    Icon: LifeBuoy,
    color: "from-emerald-400 via-green-500 to-teal-500",
    title: "Reliable 24/7 Support",
    desc: "Our dedicated team makes sure that you get uninterrupted assistance, providing reliable IT services company support so that your business can operate seamlessly without any downtime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full overflow-hidden text-white px-4 sm:px-6 md:px-12 lg:px-20"
      aria-labelledby="why-choose-heading"
      role="region"
    >
      <BestHeading title="" highlight="Why Choose Capyngen" />

      <div className="max-w-7xl mx-auto pt-10 md:pt-14">
        {/* Hero Row */}
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          {/* Visual */}
          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5]">
              {/* Decorative Border */}
              <div
                className="absolute inset-0 rounded-2xl border-2 border-purple-500 translate-x-5 md:translate-x-6 -translate-y-5 md:-translate-y-6 pointer-events-none z-0"
                aria-hidden="true"
              />
              <img
                src={assets.whyChooseUs}
                alt="Capyngen professional team collaborating in a modern office"
                className="relative z-10 w-full h-full object-cover rounded-2xl animate-diagonalBounce"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                sizes="(max-width: 640px) 20rem, (max-width: 768px) 24rem, 33vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1 text-center lg:text-left">
            <h2
              id="why-choose-heading"
              className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight text-white drop-shadow-lg"
            >
              Innovative, Reliable IT &amp; Digital Solutions That Deliver{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">
                Results
              </span>
            </h2>
            <p className="text-[clamp(1rem,1.4vw,1.15rem)] my-6 max-w-3xl lg:max-w-full mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
              Capyngen is the lifeline for businesses seeking growth,
              innovation, and impact through tailor-made, state-of-the-art
              solutions. We specialize in IT services, consulting, custom
              software development, web platforms, CRM systems, cloud IT,
              cybersecurity, and mobile app development. From responsive web
              design to intelligent automation and digital marketing, our
              enterprise-grade solutions ensure long-term success and
              sustainable growth.
            </p>
            <div className="flex justify-center lg:justify-start">
              <AnimatedButton
                text="Get in Touch"
                aria-label="Contact Capyngen team"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {features.map(({ Icon, color, title, desc }, i) => (
            <article
              key={i}
              className="group bg-gradient-to-b from-blue-500/80 to-black/90 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              tabIndex={0}
              role="article"
              aria-labelledby={`feature-title-${i}`}
              aria-describedby={`feature-desc-${i}`}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${color} shadow-md mb-4 group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                <Icon className="w-7 h-7 text-white drop-shadow-sm" />
              </div>
              <h3
                id={`feature-title-${i}`}
                className="text-lg md:text-xl font-semibold text-white transition-colors duration-300"
              >
                {title}
              </h3>
              <p
                id={`feature-desc-${i}`}
                className="mt-3 text-sm md:text-base leading-relaxed"
              >
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
