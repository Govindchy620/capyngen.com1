// hooks/useParallaxScroll.js
import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

/**
 * useParallaxScroll
 * @param {Object} options
 * @param {Array} options.offset - Scroll offset (default: ["start start", "end start"])
 * @param {Object} options.springConfig - Spring configuration for animations
 * @param {Function[]} options.transforms - Array of transform definitions
 *
 * Example transform definition:
 * {
 *   name: "translateX",
 *   input: [0, 1],
 *   output: [0, 1000],
 *   useSpring: true
 * }
 */
export const useParallaxScroll = ({
  offset = ["start start", "end start"],
  springConfig = { stiffness: 300, damping: 30, bounce: 100 },
  transforms = [],
} = {}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset });

  // Dynamically generate transforms
  const values = {};
  transforms.forEach(
    ({ name, input, output, useSpring: withSpring = true }) => {
      const t = useTransform(scrollYProgress, input, output);
      values[name] = withSpring ? useSpring(t, springConfig) : t;
    }
  );

  return { ref, scrollYProgress, ...values };
};
