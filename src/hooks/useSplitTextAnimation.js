import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function useSplitTextAnimation(selector = "h1") {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            // If previously split, revert before re-splitting
            if (el.splitText) {
              el.splitText.revert();
            }

            // Split into words
            const split = new SplitText(el, {
              type: "words",
              wordsClass: "word",
            });
            el.splitText = split;

            // Animate
            gsap.fromTo(
              split.words,
              { scale: 0.1, opacity: 0, y: 50 },
              {
                scale: 1,
                opacity: 1,
                y: 0,
                stagger: 0.2,
                ease: "back.out(1.7)",
                duration: 0.8,
              }
            );
          } else {
            // Reset when out of view so it can play again
            if (el.splitText) {
              gsap.set(el.splitText.words, { opacity: 0, scale: 0.1, y: 50 });
            }
          }
        });
      },
      { threshold: 0.2 } // triggers once 20% of element is visible
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        if (el.splitText) {
          el.splitText.revert();
        }
      });
    };
  }, [selector]);
}
