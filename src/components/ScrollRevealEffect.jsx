import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealEffect() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  // Track local triggers
  const localTriggers = useRef([]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const sections = sectionsRef.current;
      const container = containerRef.current;

      if (!container || !sections.length) {
        console.warn("Refs not ready");
        return;
      }

      // CLEANUP: Kill only triggers created inside this component
      localTriggers.current.forEach((trigger) => trigger.kill());
      localTriggers.current = [];

      // Pin the container
      const pinTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${sections.length * window.innerHeight}`,
        pin: true,
        scrub: true,
        pinSpacing: true,
      });
      localTriggers.current.push(pinTrigger);

      // Animate each section in sequence
      sections.forEach((section, i) => {
        if (i === sections.length - 1) return;
        const trigger = gsap.to(section, {
          rotate: 90,
          transformOrigin: "0 0",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => `${i * window.innerHeight} top`,
            end: () => `${(i + 1) * window.innerHeight} top`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }).scrollTrigger;
        localTriggers.current.push(trigger);
      });
    });

    return () => {
      // CLEANUP: Only kill component's triggers
      localTriggers.current.forEach((trigger) => trigger.kill());
      localTriggers.current = [];
    };
  }, []);

  const sections = [
    { bg: "bg-lime-400", text: "Let's Talk" },
    { bg: "bg-yellow-400", text: "Our" },
    { bg: "bg-cyan-400", text: "Team" },
    { bg: "bg-black", text: "Team" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {sections.map((section, i) => (
        <div
          key={i}
          ref={(el) => (sectionsRef.current[i] = el)}
          className={`absolute inset-0 flex items-center justify-center ${section.bg}`}
          style={{ zIndex: sections.length - i }}
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-black">
            {section.text}
          </h1>
        </div>
      ))}
    </div>
  );
}
