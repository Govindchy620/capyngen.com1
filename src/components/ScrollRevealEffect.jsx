"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollRevealEffect() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  // optional: clear refs each render to avoid stale nodes
  sectionsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = sectionsRef.current.filter(Boolean);

      // reset initial state
      gsap.set(panels, {
        rotate: 0,
        transformOrigin: "0 0",
        willChange: "transform",
      });

      // timeline: each panel (except last) rotates out over 1 "scroll unit"
      const tl = gsap.timeline({ defaults: { ease: "none", duration: 1 } });
      panels.forEach((panel, i) => {
        if (i < panels.length - 1) tl.to(panel, { rotate: 90 }, i);
      });

      // pin whole sequence and scrub through the timeline
      ScrollTrigger.create({
        animation: tl,
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + (panels.length - 1) * window.innerHeight, // 1 viewport per rotation
        pin: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // ensure correct measurements after fonts/images load
      requestAnimationFrame(() => ScrollTrigger.refresh());
      window.addEventListener("load", ScrollTrigger.refresh);
    }, containerRef);

    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh);
      ctx.revert(); // kills timeline + ScrollTriggers
    };
  }, []);

  const sections = [
    { bg: "bg-lime-400", text: "Let's Talk" },
    { bg: "bg-yellow-400", text: "Our" },
    { bg: "bg-cyan-400", text: "Team" },
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
