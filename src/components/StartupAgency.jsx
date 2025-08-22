"use client";

import { useState, useEffect, useRef } from "react";
import { Laptop, Megaphone, Lightbulb, ChevronRight } from "lucide-react";

const StartupAgency = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.2 } // 20% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Background container */}
        <div
          className={`absolute right-0 top-0 bg-gray-100 shadow-xl rounded-4xl w-4/5 h-[28rem] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />

        {/* Left section */}
        <div className="relative z-10 pt-16">
          <div className="max-w-2xl">
            {/* Heading */}
            <h1
              className={`text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8 transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Welcome to Our
              <br />
              Start-up Agency
            </h1>

            {/* Services */}
            <div
              className={`space-y-4 mb-8 transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {["SEO Audit", "Keyword Research", "Content Marketing"].map(
                (service, index) => (
                  <div
                    key={service}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-3"
                    }`}
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
                  >
                    <span className="text-gray-800 text-xl font-semibold">
                      {service}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Button */}
            <button
              className={`group bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <span className="text-lg font-semibold">Learn More</span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ChevronRight className="text-black w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Right description */}
          <div
            className={`absolute right-8 top-24 max-w-xl text-gray-600 text-xl leading-relaxed transition-all duration-700 delay-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-5"
            }`}
          >
            We are 100+ professional software engineers with more than 10 years
            of experience in delivering superior products. Believe it because
            you’ve seen it. Here are real numbers.
          </div>
        </div>

        {/* Bottom cards */}
        <div className="absolute -bottom-12 right-0">
          <div className="flex justify-end pr-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
              {[
                {
                  title: "Digital Marketing",
                  icon: <Laptop />,
                  delay: "1400ms",
                  description: "The easiest way to improve your site speed",
                },
                {
                  title: "Social Marketing",
                  icon: <Megaphone />,
                  delay: "1600ms",
                  description: "The easiest way to improve your site speed",
                },
                {
                  title: "Strategic Planning",
                  icon: <Lightbulb />,
                  delay: "1800ms",
                  description: "The easiest way to improve your site speed",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: card.delay }}
                >
                  <div className="text-center space-y-4">
                    <div className="flex justify-center text-4xl text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-md leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupAgency;
