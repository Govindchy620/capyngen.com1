"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LetTalkDiagonal() {
  const containerRef = useRef(null);
  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([s2.current, s3.current], { xPercent: 100 });
      gsap.set([t1.current, t2.current, t3.current], { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(s1.current, { xPercent: -30, ease: "none", duration: 1 }, 0)
        .to(s2.current, { xPercent: 0, ease: "none", duration: 1 }, 0.2)
        .to(s1.current, { xPercent: -60, ease: "none", duration: 1 }, 0.6)
        .to(s2.current, { xPercent: -30, ease: "none", duration: 1 }, 0.6)
        .to(s3.current, { xPercent: 0, ease: "none", duration: 1 }, 1);

      gsap.to(t1.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          scrub: true,
        },
      });

      gsap.to(t2.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          scrub: true,
        },
      });

      gsap.to(t3.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[180vh] overflow-hidden"
    >
      {/* Section 1 */}
      <div
        ref={s1}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg,#9AE65C,#7FD14A)",
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
        }}
      />
      {/* Section 2 */}
      <div
        ref={s2}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg,#FFE066,#FFD93D)",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 30% 100%)",
        }}
      />
      {/* Section 3 */}
      <div
        ref={s3}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg,#4ECDC4,#26B5AC)",
          clipPath: "polygon(70% 0, 100% 0, 100% 100%, 85% 100%)",
        }}
      />

      {/* Text */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-4">
        <h3 ref={t1} className="text-6xl md:text-8xl font-extrabold">
          Let’s Talk
        </h3>
        <h3 ref={t2} className="text-6xl md:text-8xl font-extrabold">
          Our
        </h3>
        <h3 ref={t3} className="text-4xl md:text-6xl font-extrabold">
          Team{" "}
          <a
            href="mailto:info@themexriver.co.uk"
            className="text-blue-600 underline"
          >
            info@themexriver.co.uk
          </a>
        </h3>
      </div>
    </section>
  );
}
