import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedButton from "./AnimatedButton";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Innovative IT Solutions That Enhance Efficiency, Drive Growth, and
              Deliver Sustainable Business Success"
        heading="About Us."
      >
        <Content1 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Why Choose Capyngen: Innovative, Reliable IT Services that Drive Success"
        heading="Why Choose Us"
      >
        <Content2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <Content1 />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl max-w-5xl mx-auto">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const Content1 = () => (
  <div className="md:min-h-[100vh] mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 pb-24 pt-24 md:grid-cols-2 text-white">
    <h2 className="text-3xl font-bold">
      Additional content explaining the above card here
    </h2>
    <div className="">
      <p className="mb-4 text-xl  md:text-2xl">
        We deliver tailored IT solutions to streamline operations and boost
        efficiency. From infrastructure to cybersecurity, we empower your
        business with cutting-edge technology, innovative cloud solutions,
        advanced data analytics, digital transformation strategies, and scalable
        enterprise software for long-term growth and success.
      </p>
      <p className="mb-8 text-xl  md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <AnimatedButton
        text="Know More About Us"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  </div>
);
const Content2 = () => (
  <div className="md:h-[100vh] mx-auto grid max-w-7xl grid-cols-1 gap-20 px-4 pb-24 pt-24 md:grid-cols-2 text-white">
    <h2 className="text-3xl font-bold">
      Additional content explaining the above card here
    </h2>
    <div className="">
      <p className="mb-4 text-xl  md:text-2xl">
        We provide businesses with innovative, dependable, and tailored digital
        solutions that help them grow, come up with new ideas, and get
        measurable results. We are experts in enterprise-grade cloud computing,
        advanced business intelligence, next-generation cybersecurity, custom
        mobile app development, strong enterprise software, strategic digital
        transformation, intelligent automation, responsive web platforms, and
        scalable IT strategies. These things help businesses grow and succeed in
        the long term.
      </p>
      <p className="mb-8 text-xl  md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <AnimatedButton
        text="Know More About Us"
        onClick={() => alert("Button clicked!")}
      />
    </div>
  </div>
);
