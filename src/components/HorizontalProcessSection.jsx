"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestHeading from "./BestHeading";
import { assets } from "../assets/assets";

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
      image: assets.workProcess1, // <-- new image
    },
    {
      id: 2,
      title: "Planning and Strategy",
      description:
        "Our professionals come up with sensible, data-driven strategies that leverage new ideas and technology to make sure that we can expand and stay ahead of the competition in the long run.",
      image: assets.workProcess2,
    },
    {
      id: 3,
      title: "Design & Development",
      description:
        "We make contemporary, easy-to-use, and intuitive solutions, and we also construct powerful IT frameworks that operate well on all platforms.",
      image: assets.workProcess3,
    },
    {
      id: 4,
      title: "Testing & Optimization",
      description:
        "Before going live, every solution is put through a lot of testing and optimization to make sure it is secure, scalable, and dependable.",
      image: assets.workProcess4,
    },
    {
      id: 5,
      title: "Launch & Maintenance",
      description:
        "We ensure your project goes online smoothly and stays updated with maintenance and enhancements, keeping your firm future-ready and competitive.",
      image: assets.workProcess5,
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const updateScroll = () => {
      const viewportWidth = window.innerWidth;
      const cardElements = container.querySelectorAll(".process-card");
      const lastCard = cardElements[cardElements.length - 1];
      const lastCardRightEdge = lastCard
        ? lastCard.offsetLeft + lastCard.offsetWidth
        : 0;
      const buffer = 200;

      const scrollDistance = Math.max(
        0,
        lastCardRightEdge - viewportWidth + buffer // Add 20px buffer, tweak as needed
      );

      if (container) {
        container.style.paddingRight = `${viewportWidth}px`;
      }

      // Clear previous ScrollTriggers if any
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Create main pin ScrollTrigger
      const st = ScrollTrigger.create({
        id: "processPin",
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
        },
      });

      // Animate cards (unchanged)
      processSteps.forEach((_, index) => {
        const card = container.querySelector(`.process-card-${index}`);
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: index % 2 === 0 ? -100 : 100, // Top cards from above, bottom cards from below
            scale: 0.3,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalScroll,
              start: "left 90%",
              end: "left 70%",
              scrub: 0.8,
            },
          }
        );
      });

      return () => {
        st.kill();
        horizontalScroll.scrollTrigger?.kill();
      };
    };
    const cleanup = updateScroll();

    window.addEventListener("resize", () => {
      cleanup?.();
      updateScroll();
    });

    window.addEventListener("orientationchange", () => {
      cleanup?.();
      updateScroll();
    });

    return () => {
      cleanup?.();
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("orientationchange", updateScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${assets.patternBg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            <div
              key={step.id}
              className={`flex items-center justify-center h-full`}
              style={{ width: "calc(30vw)" }}
            >
              <div
                className={`flex flex-col justify-${
                  index % 2 === 0 ? "start" : "end"
                } h-[24rem] md:h-[80vh] w-full sm:w-80 md:w-96 mx-6 md:mx-6`}
              >
                <div
                  className={`process-card process-card-${index} relative bg-white backdrop-blur-2xl rounded-3xl shadow-2xl`}
                >
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      <span className="text-white font-black text-lg relative z-10">
                        {step.id}
                      </span>
                    </div>

                    <div className="mb-8">
                      <div className="w-full h-44 rounded-t-2xl overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-center space-y-2 px-2">
                      <h3 className="text-2xl font-black text-gray-800 mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <div className="px-2 xl:px-6 pb-2 xl:pb-6 rounded-2xl">
                        <p className="text-gray-700 text-base leading-relaxed font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
