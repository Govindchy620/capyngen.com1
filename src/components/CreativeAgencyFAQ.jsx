import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CreativeAgencyFAQ = ({
  slides = [],
  slideDuration = 4000,
  headingClass = "text-3xl lg:text-5xl font-black leading-loose mb-8",
  descClass = "text-xl leading-relaxed mb-8 max-w-xl",
  priceLabel = "Monthly Price",
  buttonLabel = "READ MORE",
  buttonGradient = "from-purple-500 to-pink-500",
  containerClass = "min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden",
}) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Start autoplay with reset logic
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, slideDuration);
  };

  useEffect(() => {
    if (slides.length > 0) startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [slides, slideDuration]);

  const handleDotClick = (i) => {
    setIndex(i);
    startAutoplay();
  };

  const variants = {
    enter: { rotateX: -90, opacity: 0, y: -100 },
    center: {
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: {
      rotateX: 90,
      opacity: 0,
      y: 100,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  if (slides.length === 0) return null;

  return (
    <div className={containerClass}>
      <div className="max-w-7xl mx-auto flex items-center gap-8 lg:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 lg:gap-16"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
          >
            {/* Left Side - Image with pagination */}
            <div className="relative flex-shrink-0">
              <img
                src={slides[index].image}
                alt={slides[index].heading || "Slide image"}
                className="w-full h-full max-h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === index
                        ? "bg-purple-600 scale-110"
                        : "bg-gray-400 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className={headingClass}>{slides[index].heading}</h1>
              <div className={descClass}>{slides[index].description}</div>

              {slides[index].price && (
                <div className="flex items-center gap-8">
                  <div className="text-5xl font-black">
                    {slides[index].price}
                  </div>
                  <div className="text-xl">{priceLabel}</div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CreativeAgencyFAQ;
