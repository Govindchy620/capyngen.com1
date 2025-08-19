import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

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
    { bg: "bg-yellow-400", text: "About The" },
    { bg: "bg-cyan-400", text: "Project" },
    {
      bg: "",
      text: "Form",
      style: {
        backgroundImage: `url(${assets.bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
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
          style={{
            zIndex: sections.length - i,
            ...(section.style || {}),
          }}
        >
          {section.text === "Form" ? (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 text-white">
              {/* Left Content */}
              <div className="max-w-xl space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Let’ <span className="text-white">Talk</span> <br />
                  About The <br />
                  <span className="text-cyan-400">Project.</span>
                </h1>

                <div className="flex items-center gap-3 mt-6">
                  {/* Email Icon */}
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md shadow-lg">
                    <span className="text-black text-xl">@</span>
                  </div>
                  <a
                    href="mailto:info@themexriver.co.uk"
                    className="text-cyan-400 text-xl md:text-2xl font-medium hover:underline"
                  >
                    info@themexriver.co.uk
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-black">
              {section.text}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
}
