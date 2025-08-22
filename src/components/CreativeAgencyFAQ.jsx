import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const slides = [
  {
    image: assets.creativeAgencyFAQ,
    heading: "ANSWERS TO YOUR COMMON QUESTIONS",
    description:
      "Every pleasure is to be welcomed and every pain avoided. certain circumstances and owing to the claims welcomed and every pain avoided certain circumstances",
    price: "$16.32",
  },
  {
    image: assets.creativeAgencyFAQ,
    heading: "CREATIVE SOLUTIONS FOR YOUR BUSINESS",
    description:
      "We create impactful digital solutions that transform ideas into scalable products.",
    price: "$29.99",
  },
  {
    image: assets.creativeAgencyFAQ,
    heading: "DISCOVER NEW STRATEGIES",
    description:
      "Unlock modern tools and innovative workflows to boost productivity.",
    price: "$49.99",
  },
  {
    image: assets.creativeAgencyFAQ,
    heading: "TRANSFORM YOUR DIGITAL PRESENCE",
    description:
      "Revolutionize the way your business connects with the audience.",
    price: "$99.99",
  },
];

const SLIDE_DURATION = 4000; // 4 seconds

const CreativeAgencyFAQ = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoplay = () => {
    // Clear any existing interval before starting a new one
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i);
    startAutoplay(); // reset timer when user clicks
  };

  const variants = {
    enter: {
      rotateX: -90,
      opacity: 0,
      y: -100,
    },
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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center gap-8 lg:gap-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="flex items-center gap-8 lg:gap-16"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
          >
            {/* Left Side - Image with pagination dots */}
            <div className="relative flex-shrink-0">
              <img
                src={slides[index].image}
                alt="Creative professional"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === index
                        ? "bg-purple-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-black text-black leading-tight mb-8">
                {slides[index].heading}
              </h1>

              <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-xl">
                {slides[index].description}
              </p>

              <div className="flex items-center gap-8">
                <div className="text-5xl font-black text-black">
                  {slides[index].price}
                </div>
                <div className="text-xl">Monthly Price</div>
              </div>

              <button className="bg-gradient-to-r from-purple-500 to-pink-500 mt-5 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:shadow-lg transition-shadow">
                READ MORE
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CreativeAgencyFAQ;
