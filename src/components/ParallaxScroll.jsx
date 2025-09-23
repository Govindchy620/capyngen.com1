import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "../utils/utils";
import BestHeading from "./BestHeading";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);

  // Use default scroll container (window)
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"], // Start when component top hits viewport bottom; end when component bottom hits viewport top
  });

  // Adjust translate ranges to your liking
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third - 1);
  const thirdPart = images.slice(2 * third - 1);

  return (
    <div className={cn("w-full mt-20", className)} ref={gridRef}>
      <BestHeading title="" highlight="Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 pt-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <img
                src={el}
                className="h-70 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="h-70 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <img
                src={el}
                className="h-70 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
