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
          if (entry.isIntersecting) {
            const el = entry.target;

            // Ensure element is visible
            gsap.set(el, { opacity: 1 });

            // Split into words
            const split = new SplitText(el, {
              type: "words",
              wordsClass: "word",
            });

            // Animate: start small & grow to original size
            gsap.from(split.words, {
              scale: 0.1, // start at half size
              opacity: 0, // fade in
              y: 50, // still rise up slightly
              stagger: 0.2,
              ease: "back.out(1.7)", // "springy" feel
              duration: 0.8,
            });

            // Stop observing once animated
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
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
