"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestHeading from "./BestHeading";

const HorizontalProcessSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTriggerRefs = useRef([]);

  const processSteps = [
    {
      id: 1,
      title: "Consultation & Requirement Analysis",
      description:
        "We start with a detailed consultation to understand your business needs and goals. Through thorough requirement analysis, we identify key challenges and opportunities.",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      icon: (
        <svg
          className="w-10 h-10"
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
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      icon: (
        <svg
          className="w-10 h-10"
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
      color: "bg-gradient-to-br from-green-400 to-green-600",
      icon: (
        <svg
          className="w-10 h-10"
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
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      icon: (
        <svg
          className="w-10 h-10"
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

    // Kill only the ScrollTrigger instances created by this component
    scrollTriggerRefs.current.forEach((trigger) => {
      if (trigger) trigger.kill();
    });
    scrollTriggerRefs.current = [];

    gsap.set(container.querySelectorAll(".process-card"), {
      opacity: 0,
      y: 100,
      scale: 0.8,
    });
    gsap.set(container.querySelectorAll(".dot"), { opacity: 0, scale: 0 });

    // Wait for the next frame to ensure all elements are rendered
    requestAnimationFrame(() => {
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Calculate the scroll distance to ensure the last card is properly centered
      // Add extra space to account for the last card and padding
      const scrollDistance = Math.max(0, totalWidth - viewportWidth + 200);

      const horizontalScroll = gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          markers: false, // Set to true for debugging
        },
      });

      // Store the main ScrollTrigger reference
      if (horizontalScroll.scrollTrigger) {
        scrollTriggerRefs.current.push(horizontalScroll.scrollTrigger);
      }

      processSteps.forEach((_, index) => {
        const card = container.querySelector(`.process-card-${index}`);
        if (!card) return;

        const cardAnimation = gsap.to(card, {
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

        // Store the card ScrollTrigger reference
        if (cardAnimation.scrollTrigger) {
          scrollTriggerRefs.current.push(cardAnimation.scrollTrigger);
        }

        // Fix dot animation to fill from left to right properly
        const dotContainer = container.querySelector(`.dotted-line-${index}`);
        if (dotContainer) {
          const dotGroup = dotContainer.querySelectorAll(".dot");

          // Create a timeline for this dot group
          gsap.set(dotGroup, { opacity: 0, scale: 0 });

          const dotAnimation = gsap.to(dotGroup, {
            opacity: 1,
            scale: 1,
            duration: 0.02,
            stagger: {
              each: 0.05,
              from: "start",
            },
            scrollTrigger: {
              trigger: dotContainer,
              containerAnimation: horizontalScroll,
              start: "left 80%",
              end: "left 20%",
              scrub: 1,
            },
          });

          // Store the dot ScrollTrigger reference
          if (dotAnimation.scrollTrigger) {
            scrollTriggerRefs.current.push(dotAnimation.scrollTrigger);
          }
        }
      });
    });

    return () => {
      // Kill only the ScrollTrigger instances created by this component
      scrollTriggerRefs.current.forEach((trigger) => {
        if (trigger) trigger.kill();
      });
      scrollTriggerRefs.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        
      </div>

      <div className="h-screen overflow-hidden relative z-10">
        <div
          ref={containerRef}
          className="flex items-center h-full px-8"
          style={{ width: "max-content" }}
        >
          <div className="flex-shrink-0 w-screen flex items-center justify-center px-8 relative">
            

            <div className="text-center max-w-4xl relative z-10">
              
              <BestHeading title="" highlight="Our Work Process" />

              <div className="mt-15">
                <p className="text-white/90 text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                  We begin by understanding your business goals and identifying
                  the right technology solutions. Our team then designs,
                  implements, and supports systems to ensure optimal performance.
                </p>
              </div>

              
            </div>
          </div>

          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center justify-center">
              {/* Enhanced Card Design */}
              <div
                className={`process-card process-card-${index} relative max-w-md mx-12`}
              >
                {/* Premium Card Background */}
                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/30 overflow-hidden hover:shadow-3xl transition-all duration-700">
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50 rounded-3xl"></div>

                  {/* Animated Premium Border */}
                  <div className="absolute inset-0 rounded-3xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-500/30 to-pink-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                    <div className="absolute inset-[1px] bg-gradient-to-br from-white/95 via-white/90 to-white/85 rounded-3xl"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
                  <div className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse delay-500"></div>

                  <div className="relative z-10">
                    {/* Enhanced Step Number Badge */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                      <span className="text-white font-black text-lg relative z-10">
                        {step.id}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full animate-pulse"></div>
                    </div>

                    {/* Enhanced Image/Icon Area */}
                    <div className="mb-8 relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-2xl blur-lg"></div>
                      <div
                        className={`relative w-full h-56 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02]`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 rounded-2xl"></div>
                        {/* Replace this div with your image */}
                        <div className="text-center p-6 relative z-10">
                          <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                          <div className="text-base opacity-90 font-semibold">
                            Replace with Image
                          </div>
                          <div className="text-sm opacity-70 mt-2">
                            Recommended: 400x240px
                          </div>
                        </div>

                        {/* Image Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-black text-gray-800 mb-4 leading-tight group-hover:text-indigo-700 transition-colors duration-300">
                        {step.title}
                      </h3>

                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100/50 shadow-inner">
                        <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Shadow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 rounded-3xl transform translate-y-4 -z-20 group-hover:translate-y-2 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/10 rounded-3xl transform translate-y-6 -z-30 group-hover:translate-y-3 transition-transform duration-500"></div>
              </div>

              {/* Enhanced Dotted Connection */}
              {index < processSteps.length - 1 && (
                <div
                  className={`dotted-line-${index} flex items-center mx-2 relative`}
                >
                  {/* Advanced Glowing Line Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-300/40 to-pink-200/40 h-2 rounded-full blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-200/20 to-pink-100/20 h-1 rounded-full blur-sm"></div>

                  {/* Enhanced Dots with Better Animation */}
                  <div className="flex space-x-3 relative z-10">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="dot relative">
                        {/* Main Dot */}
                        <div
                          className={`w-4 h-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full shadow-lg transition-all duration-300`}
                          style={{
                            opacity: 0.6 + Math.sin(i * 0.4) * 0.3,
                            transform: `scale(${
                              0.7 + Math.sin(i * 0.2) * 0.4
                            })`,
                          }}
                        ></div>
                        {/* Glow Effect */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-blue-300/50 via-purple-400/50 to-pink-300/50 rounded-full blur-sm animate-pulse"
                          style={{
                            animationDelay: `${i * 0.1}s`,
                          }}
                        ></div>
                      </div>
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
