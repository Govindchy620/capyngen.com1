import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import "./ScrollFloat.css";

const ScrollFloat = ({
  children,
  scrollContainerRef,
  triggerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");
    const triggerEl =
      triggerRef && triggerRef.current ? triggerRef.current : el;

    // Ensure elements are visible
    gsap.set(charElements, {
      visibility: "visible",
      display: "inline-block",
    });

    const fromState = {
      willChange: "opacity, transform",
      opacity: 0,
      yPercent: 200,
      scaleY: 3,
      scaleX: 0.5,
      transformOrigin: "50% 0%",
      filter: "blur(10px)",
    };

    const toState = {
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      filter: "blur(0px)",
      ease,
      duration: animationDuration,
      stagger,
    };

    // Start hidden
    gsap.set(charElements, fromState);

    // Build timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        scroller,
        start: scrollStart,
        end: scrollEnd,
        scrub: 0.8,
        markers: false,
      },
    });

    tl.to(charElements, toState, 0);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [
    scrollContainerRef,
    triggerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
  ]);

  return (
    <h2
      ref={containerRef}
      className={`scroll-float bg-black text-center ${containerClassName}`}
    >
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
