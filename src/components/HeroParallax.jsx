import React from "react";
import { motion } from "framer-motion";
import { useParallaxScroll } from "../hooks/useParallaxScroll";

export const HeroParallax = ({ products }) => {
  const {
    ref,
    translateX,
    translateXReverse,
    rotateX,
    rotateZ,
    translateY,
    opacity,
  } = useParallaxScroll({
    transforms: [
      { name: "translateX", input: [0, 1], output: [0, 1000] },
      { name: "translateXReverse", input: [0, 1], output: [0, -1000] },
      { name: "rotateX", input: [0, 0.2], output: [15, 0] },
      { name: "opacity", input: [0, 0.2], output: [0.2, 1] },
      { name: "rotateZ", input: [0, 0.2], output: [20, 0] },
      { name: "translateY", input: [0, 0.2], output: [-700, 500] },
    ],
  });

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-gray-900 overflow-hidden antialiased flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* Hero Header */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Parallax Content */}
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="mt-[40vh]"
      >
        {/* First Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Second Row */}
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>

        {/* Third Row */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 md:py-40 text-center">
      <h1 className="text-4xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> Development Studio
      </h1>
      <p className="max-w-2xl mx-auto text-base md:text-xl mt-6 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        Our passionate developers and designers craft experiences that stand out
        in the digital world.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black transition-opacity"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold">
        {product.title}
      </h2>
    </motion.div>
  );
};
