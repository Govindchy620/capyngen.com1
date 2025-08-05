"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalProcessSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      title: "Consultation & Requirement Analysis",
      description:
        "We start with a detailed consultation to understand your business needs and goals. Through thorough requirement analysis, we identify key challenges and opportunities.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Strategic Planning and Proposal",
      description:
        "Based on our analysis, we create a comprehensive strategic plan with detailed proposals, timelines, and resource allocation for optimal results.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Implementation and Integration",
      description:
        "Our expert team implements the solution with precision, ensuring seamless integration with your existing systems and minimal disruption to operations.",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Ongoing Support and Optimization",
      description:
        "We provide continuous support, monitoring, and optimization to ensure your solution performs at its best and evolves with your business needs.",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    ScrollTrigger.getAll().forEach((t) => t.kill()); // cleanup on re-run

    gsap.set(container.querySelectorAll(".process-card"), {
      opacity: 0,
      y: 100,
      scale: 0.8,
    });
    gsap.set(container.querySelectorAll(".dot"), { opacity: 0, scale: 0 });

    const totalWidth = container.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    const horizontalScroll = gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    processSteps.forEach((_, index) => {
      const card = container.querySelector(`.process-card-${index}`);
      if (!card) return;

      gsap.to(card, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalScroll,
          start: "left 90%",
          end: "left 10%",
          scrub: 0.5,
        },
      });

      const dotGroup = container.querySelectorAll(`.dotted-line-${index} .dot`);
      dotGroup.forEach((dot, dotIndex) => {
        gsap.to(dot, {
          scrollTrigger: {
            trigger: dot,
            containerAnimation: horizontalScroll,
            start: "left 70%",
            end: "left 30%",
            scrub: 0.3,
            onUpdate: (self) => {
              const progress = self.progress;
              const dotProgress = Math.max(
                0,
                Math.min(1, progress * dotGroup.length - dotIndex)
              );
              gsap.to(dot, {
                opacity: dotProgress,
                scale: dotProgress,
                duration: 0.1,
              });
            },
          },
        });
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex items-center h-full px-8"
          style={{ width: "max-content" }}
        >
          <div className="flex-shrink-0 w-screen flex items-center justify-center px-8">
            <div className="text-center max-w-4xl">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-gray-200">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-blue-600 text-sm font-semibold tracking-wide">
                  WORK PROCESS TECHNOX
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                How Our Works{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Process.
                </span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
                We begin by understanding your business goals and identifying
                the right technology solutions. Our team then designs,
                implements, and supports systems to ensure optimal performance.
              </p>
            </div>
          </div>

          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`process-card process-card-${index} flex flex-col items-center text-center max-w-sm mx-12`}
              >
                <div
                  className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300`}
                >
                  {step.icon}
                </div>
                <div className="w-14 h-14 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-gray-700 font-bold text-lg">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg max-w-xs">
                  {step.description}
                </p>
              </div>
              {index < processSteps.length - 1 && (
                <div className={`dotted-line-${index} flex items-center mx-16`}>
                  <div className="flex space-x-3">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="dot w-2 h-2 bg-gray-400 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="w-96 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProcessSection;
