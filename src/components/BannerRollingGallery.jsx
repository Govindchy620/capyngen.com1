import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import { assets } from "../assets/assets";
import energyHero from "../assets/energyHero.png";

const IMGS = [
  assets.webdevBanner1,
  assets.webdevBanner2,
  assets.webdevBanner3,
  assets.webdevBanner4,
  assets.webdevBanner5,
  assets.webdevBanner6,
  assets.webdevBanner7,
  assets.webdevBanner8,
  assets.webdevBanner9,
  assets.webdevBanner10,
];

const BannerRollingGallery = ({
  autoplay = true,
  pauseOnHover = true,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  // Detect screen sizes with breakpoint for sm (640px)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust cylinderWidth and image sizes based on screen width
  // Larger screens get bigger carousel, smaller screens get scaled down
  const cylinderWidth = windowWidth <= 640 ? 900 : 2400;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.7;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`,
  );

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  // Image size adjustments based on screen width for responsive scaling
  const getImageSizes = () => {
    if (windowWidth <= 640) {
      return { height: 180, width: 280 };
    } else if (windowWidth <= 1024) {
      return { height: 250, width: 400 };
    } else {
      return { height: 320, width: 500 };
    }
  };
  const { height: imgHeight, width: imgWidth } = getImageSizes();

  // Responsive container height scaling (tightened to remove dead space)
  const containerHeight = windowWidth <= 640 ? 300 : 420;

  return (
    <>
      {/* 1. HERO SECTION: Reference Design with Left-Aligned Content, Gradient Overlay & Action Buttons */}
      <section className="relative w-full flex items-center overflow-hidden min-h-[85vh] lg:min-h-screen pt-28 pb-20 sm:pb-28 lg:pb-36 bg-[#0a192f]">
        {/* Background Image Layer mapped to energyHero */}
        <div className="absolute inset-0 z-0">
          <img
            src={energyHero}
            alt="Web Development Hero Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Gradient Overlay from left-to-right (navy blue to transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/85 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 via-transparent to-[#0a192f]/90 z-0 pointer-events-none" />

        {/* Left-Aligned Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
          <div className="max-w-4xl flex flex-col items-start text-white pt-8 sm:pt-12 pb-12">
            
            {/* Main Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Instant Web Development – Get India’s #1 Trusted Best website development company in India
            </h1>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-10 leading-relaxed max-w-3xl font-normal">
              Turn your ideas into interactive, responsive and scalable websites. Make customers attracted, your brand more valuable, and retain your competitive edge in the digital world by offering our best web development services provided by the{" "}
              <a
                href="https://www.capyngen.com/consulting"
                className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
              >
                best consulting company in India
              </a>{" "}
              and the best web development company in India.
            </p>

            {/* Action Buttons (Strictly rounded-none) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-none flex justify-center items-center transition-colors duration-300 text-sm md:text-base shadow-lg"
              >
                Connect With Our Experts
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <button
                type="button"
                onClick={() => {
                  document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent border border-gray-300 hover:border-white text-white font-semibold py-3 px-6 rounded-none flex justify-center items-center transition-colors duration-300 text-sm md:text-base"
              >
                Examine Web Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Scroll Indicator Prompt fixed to screen bottom with sharp badge */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-300 text-[11px] font-semibold uppercase tracking-widest animate-bounce px-4 py-1.5 bg-[#07132b]/80 border border-blue-500/30 rounded-none shadow-lg">
          <span>Scroll to explore</span>
          <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. ROLLING GALLERY SECTION: Matching Seamless Background (#f8fafc) & No Border Line */}
      <section className="bg-[#f8fafc] text-slate-900 w-full py-6 sm:py-8 overflow-hidden">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: containerHeight }}
        >
        {/* fade edges in matching #f8fafc */}
        <div
          className="absolute top-0 left-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #f8fafc 0%, rgba(248,250,252,0) 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, #f8fafc 0%, rgba(248,250,252,0) 100%)",
          }}
        />

        <div className="flex h-full items-center justify-center [perspective:1400px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            animate={controls}
            onUpdate={handleUpdate}
            style={{
              transform: transform,
              rotateY: rotation,
              width: cylinderWidth,
              transformStyle: "preserve-3d",
            }}
            className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
          >
            {images.map((url, i) => (
              <div
                key={i}
                className="group absolute flex h-fit items-center justify-center p-[6%] [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    (360 / faceCount) * i
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <img
                  src={url}
                  alt="gallery"
                  className="pointer-events-none rounded-none border-[3px] border-slate-900 object-cover shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105"
                  style={{ height: imgHeight, width: imgWidth }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  </>
);
};

export default BannerRollingGallery;
