import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RotatingImage = ({ src, alt }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    // Kill any existing triggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Scroll-triggered animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "+=800", // adjust based on scroll length
          scrub: true,
          // markers: true,
        },
      })
      .to(image, {
        scale: 8,
        rotate: 360,
        ease: "none",
        transformOrigin: "center center",
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-24 h-24 will-change-transform"
        draggable="false"
      />
    </div>
  );
};

export default RotatingImage;
