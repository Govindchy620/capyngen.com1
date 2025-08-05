import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef, useLayoutEffect, useState } from "react";

const AnimatedButton = ({ text = "Click Me", onClick }) => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [text]);

  const iconShift = textWidth + 30; // move icon just past the text
  const textShift = -40; // general shift to the left

  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      onClick={onClick}
      className="relative w-fit inline-flex items-center h-[56px] bg-gradient-to-r from-blue-600 to-purple-500 rounded-xl overflow-hidden px-6 cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        variants={{
          initial: { x: 0 },
          hover: { x: iconShift },
        }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-lg text-blue-600 z-10"
      >
        <ChevronRight size={25} />
      </motion.div>

      {/* Dynamic Text */}
      <motion.span
        ref={textRef}
        variants={{
          initial: { x: 0 },
          hover: { x: textShift },
        }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="text-white text-lg font-bold whitespace-nowrap ml-12"
      >
        {text}
      </motion.span>
    </motion.button>
  );
};

export default AnimatedButton;
