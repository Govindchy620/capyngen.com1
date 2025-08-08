import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function useSplitTextLinesAnimation(
  selector = ".split",
  triggerButtonSelector = null
) {
  const animationRef = useRef(null); // store GSAP animation instance

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Wait until fonts are ready
      document.fonts.ready.then(() => {
        gsap.set(selector, { opacity: 1 });

        SplitText.create(selector, {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
          onSplit: (self) => {
            animationRef.current = gsap.from(self.lines, {
              duration: 0.6,
              yPercent: 100,
              opacity: 0,
              stagger: 0.1,
              ease: "expo.out",
              paused: true, // paused so you can control play
            });
          },
        });

        // Optional trigger: a button
        if (triggerButtonSelector) {
          const button = document.querySelector(triggerButtonSelector);
          if (button) {
            button.addEventListener("click", () => {
              animationRef.current?.timeScale(0.2).play(0);
            });
          }
        }
      });
    });

    return () => ctx.revert(); // cleanup
  }, [selector, triggerButtonSelector]);

  return animationRef; // you can control it manually if needed
}
