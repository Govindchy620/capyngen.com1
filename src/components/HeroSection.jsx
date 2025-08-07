import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ onEnd }) => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const [hideSection, setHideSection] = useState(false);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=600", // adjust as needed
        scrub: true,
        onUpdate: (self) => {
          if (self.progress >= 0.95 && !hideSection) {
            setHideSection(true);
            if (typeof onEnd === "function") onEnd();
          }
        },
      },
    });
    tl.to(logoRef.current, {
      scale: 4,
      rotate: 360,
      ease: "none",
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [hideSection, onEnd]);

  if (hideSection) return null;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#101023] to-[#2E2967] overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8 text-center">
          Transforming Your Business <br />
          Through IT Excellence.
        </h1>
        <p className="max-w-lg text-white/80 mb-8 text-center">
          We deliver tailored IT solutions to streamline operations and boost
          efficiency.
          <br />
          From infrastructure to cybersecurity, we empower your business with
          cutting technology.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          <span className="mr-2">{">"}</span>
          Discover Now
        </a>
        <div className="flex justify-center items-center mt-16">
          <img
            ref={logoRef}
            src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
            alt="Logo"
            className="w-24 h-24 md:w-40 md:h-40 will-change-transform"
            draggable="false"
            style={{ transformOrigin: "center center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
