import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ onEnd }) => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  console.log("sectionRef:", sectionRef.current);
  console.log("logoRef:", logoRef.current);

  useEffect(() => {
    requestAnimationFrame(() => {
      const section = sectionRef.current;
      const logo = logoRef.current;

      if (!section || !logo) {
        console.warn("Refs not ready");
        return;
      }

      console.log("sectionRef:", sectionRef.current);
      console.log("logoRef:", logoRef.current);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true,
          pinSpacing: true,
          // markers: true,
          onLeave: () => {
            if (typeof onEnd === "function") {
              onEnd();
            }
          },
        },
      });

      tl.to(logo, {
        scale: 8,
        rotate: 360,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onEnd]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${assets.heroSectionBg})`,
      }}
    >
      <div className="z-10 max-w-[90rem] mx-auto px-6 w-full flex flex-col lg:flex-row justify-between items-center py-20">
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mt-4 leading-tight text-white">
            Transforming Your Business Through IT Excellence.
          </h1>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-1/2 flex flex-col justify-end items-end text-right">
          <p className="text-lg font-semibold text-[#eaeaea] md:w-2/3 text-right mb-10">
            We deliver tailored IT solutions to streamline operations and boost
            efficiency. From infrastructure to cyber security, we empower your
            business with cutting technology.
          </p>
          <AnimatedButton
            text="Discover More"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          ref={logoRef}
          src={assets.capyngenFavIcon}
          alt="Logo"
          className="w-24 h-24 md:w-10 md:h-10 will-change-transform"
          draggable="false"
          style={{ transformOrigin: "center center" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
