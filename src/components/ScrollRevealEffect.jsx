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
              {/* Contact Form */}
              <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Let’s <span className="text-cyan-400">Talk</span> About Your{" "}
                  <span className="text-cyan-400">Project</span>
                </h2>

                <form className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      placeholder="Write your message..."
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-300 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
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
