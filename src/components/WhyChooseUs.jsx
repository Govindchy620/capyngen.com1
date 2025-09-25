import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

const features = [
  {
    icon: (
      <UserRoundSearch className="w-7 h-7 text-indigo-600" aria-hidden="true" />
    ),
    title: "Customer-Centric Solutions",
    desc: "Capyngen delivers custom software development and IT services designed for your business's unique needs, guaranteeing long-term growth and success.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-pink-600" aria-hidden="true" />,
    title: "Strategic Digital Marketing",
    desc: "We mix innovation and artistry to create digital marketing strategies, SEO, and campaigns that help you attract and retain customers, putting you ahead of the competition.",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-yellow-500" aria-hidden="true" />,
    title: "Expertise You Can Trust",
    desc: "Leveraging proven industry experience, Capyngen delivers IT consulting, web development, and CRM software solutions that are scalable and secure.",
  },
  {
    icon: <LifeBuoy className="w-7 h-7 text-green-600" aria-hidden="true" />,
    title: "Reliable 24/7 Support",
    desc: "Our team ensures continuous, dependable IT support, letting your business run smoothly and without downtime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full overflow-hidden text-white"
      aria-labelledby="why-choose-heading"
    >
      {/* SEO: Semantic and accessible heading */}
      <BestHeading title="" highlight="Why Choose Capyngen" />
      <div className="container max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-6 md:pt-0">
        {/* Hero Row */}
        <div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-10 mx-auto">
          {/* Visual: Appears first on mobile, order swapped on large */}
          <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-20 order-1 lg:order-2 pr-0 lg:pr-5">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-[4/5]">
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500 translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-0 pointer-events-none" />
              <img
                src={assets.whyChooseUs}
                alt="Professional team collaborating in a modern office"
                className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg animate-diagonalBounce"
                loading="lazy"
              />
            </div>
          </div>
          {/* Content: Text and button */}
          <div className="w-full lg:w-2/3 text-left order-2 lg:order-1">
            <h1
              id="why-choose-heading"
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white mt-4"
            >
              Innovative, Reliable IT &amp; Digital Solutions That Deliver
              Results
            </h1>
            <p className="text-base md:text-lg my-6 max-w-7xl lg:max-w-full mx-auto lg:mx-0 text-white">
              Capyngen is the lifeline for businesses wanting to intensify their
              growth, innovation, and impact through the use of tailor-made,
              state-of-the-art solutions. We are specialists in IT services, IT
              consulting services, custom software development, web development,
              CRM management software, cloud IT services, cybersecurity
              services, and mobile app development, thus we always deliver
              enterprise-grade technology and strategic digital solutions. Thus,
              from responsive web platforms to intelligent automation, digital
              marketing services, and scalable IT strategies, our approach
              assures long-term success and sustainable business growth.
            </p>
            <div className="flex justify-start">
              <AnimatedButton
                text="Get in Touch"
                aria-label="Contact Capyngen team"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>
        </div>
        {/* Features: Responsive cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {features.map(({ icon, title, desc }, i) => (
            <article
              key={i}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              tabIndex={0}
              role="region"
              aria-labelledby={`feature-title-${i}`}
              aria-describedby={`feature-desc-${i}`}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {icon}
              </div>
              <h3
                id={`feature-title-${i}`}
                className="text-lg md:text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300"
              >
                {title}
              </h3>
              <p
                id={`feature-desc-${i}`}
                className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed"
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
