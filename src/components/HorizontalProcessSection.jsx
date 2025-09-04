"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestHeading from "./BestHeading";

gsap.registerPlugin(ScrollTrigger);

const HorizontalProcessSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [pinReadyKey, setPinReadyKey] = useState(null);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description:
        "We start by getting to know your company, your audience, and your objectives. This helps us create a solid foundation for unique digital and IT solutions.",
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
      title: "Planning and Strategy",
      description:
        "Our professionals come up with sensible, data-driven strategies that leverage new ideas and technology to make sure that we can expand and stay ahead of the competition in the long run.",
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
      title: "Design & Development",
      description:
        "We make contemporary, easy-to-use, and intuitive solutions, and we also construct powerful IT frameworks that operate well on all platforms.",
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
      title: "Testing & Optimization",
      description:
        "Before going live, every solution is put through a lot of testing and optimization to make sure it is secure, scalable, and dependable.",
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
    {
      id: 5,
      title: "Launch & Maintenance",
      description:
        "We ensure your project goes online smoothly and stays updated with maintenance and enhancements, keeping your firm future-ready and competitive.",
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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const totalWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;

    // ✅ Mobile-aware padding: keep your +200 on desktop, 0 on mobile to remove tail gap
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const scrollDistance = Math.max(
      0,
      totalWidth - viewportWidth + (window.innerWidth > 768 ? 100 : 0)
    );

    // Main pin ScrollTrigger (desktop keeps same feel)
    const st = ScrollTrigger.create({
      id: "processPin",
      trigger: section,
      start: "top top",
      end: `+=${scrollDistance}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true, // <- small stability boost
    });

    setPinReadyKey(st.start);

    // Horizontal scroll animation
    const horizontalScroll = gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => st.start,
        end: () => st.end,
        scrub: true,
        invalidateOnRefresh: true, // <- keeps end aligned on resize/orientation
      },
    });

    // Animate cards (unchanged)
    processSteps.forEach((_, index) => {
      const card = container.querySelector(`.process-card-${index}`);
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalScroll,
            start: "left 80%",
            end: "left 20%",
            scrub: 0.8,
          },
        }
      );

      const dotContainer = container.querySelector(`.dotted-line-${index}`);
      if (dotContainer) {
        const dotGroup = dotContainer.querySelectorAll(".dot");
        gsap.fromTo(
          dotGroup,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.05,
            stagger: { each: 0.05, from: "start" },
            scrollTrigger: {
              trigger: dotContainer,
              containerAnimation: horizontalScroll,
              start: "left 90%",
              end: "left 10%",
              scrub: true,
            },
          }
        );
      }
    });

    return () => {
      st.kill();
      horizontalScroll.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      <div className="h-screen overflow-hidden relative z-10">
        <div
          ref={containerRef}
          className="flex items-center h-full px-4 md:px-8"
          style={{ width: "max-content" }}
        >
          <div className="flex-shrink-0 w-screen flex items-center justify-center px-8 relative">
            <div className="text-center max-w-7xl relative z-10">
              <BestHeading title="" highlight="Our Work Process" />
              <div className="mt-16">
                {" "}
                {/* <- mt-15 -> mt-16 (valid) */}
                <p className="text-white/90 text-base md:text-xl leading-relaxed max-w-4xl mx-auto font-medium">
                  Our way of doing things at Capyngen is simple, works together,
                  and gets results. We work closely with your team to figure out
                  what you want to achieve, come up with new ways to do it, and
                  then show you how well it worked. We help businesses reach
                  their goals faster, smarter, and with lasting effects for
                  long-term success by combining creativity, technology, and
                  expertise.
                </p>
              </div>
            </div>
          </div>

          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center justify-center">
              <div
                className={`process-card process-card-${index} relative w-[80vw] sm:w-80 md:w-96 mx-6 md:mx-12`}
              >
                <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-2xl rounded-3xl shadow-2xl">
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <span className="text-white font-black text-lg relative z-10">
                        {step.id}
                      </span>
                    </div>

                    <div className="mb-8">
                      <div
                        className={`w-full h-56 ${step.color} rounded-t-2xl flex items-center justify-center text-white`}
                      >
                        <div className="text-center p-6 relative z-10">
                          <div className="mb-3">{step.icon}</div>
                          <div className="text-base opacity-90 font-semibold">
                            Replace with Image
                          </div>
                          <div className="text-sm opacity-70 mt-2">
                            Recommended: 400x240px
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-2 px-2">
                      <h3 className="text-2xl font-black text-gray-800 mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <div className="px-6 pb-6 rounded-2xl">
                        <p className="text-gray-700 text-base leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <div
                  className={`dotted-line-${index} flex items-center mx-2 relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-purple-300/40 to-pink-200/40 h-2 rounded-full blur-md"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-200/20 to-pink-100/20 h-1 rounded-full blur-sm"></div>
                  <div className="flex space-x-3 relative z-10">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} className="dot relative">
                        <div
                          className="w-4 h-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 rounded-full shadow-lg transition-all duration-300"
                          style={{
                            opacity: 0.6 + Math.sin(i * 0.4) * 0.3,
                            transform: `scale(${
                              0.7 + Math.sin(i * 0.2) * 0.4
                            })`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Spacer: keep desktop "breathing room", remove on mobile to eliminate tail gap */}
          <div className="hidden md:block w-96 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProcessSection;
