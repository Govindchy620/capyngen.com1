import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import { assets } from "../assets/assets";

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

  // Responsive container height scaling
  const containerHeight = windowWidth <= 640 ? 400 : 600;

  return (
    <section className="bg-black text-white w-full pt-20">
      {/* Heading + Subheading */}
      <div className="text-center max-w-[90vw] mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Instant Web Development – Get India’s #1 Trusted Best website
          development company in India
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-6xl mx-auto pt-5 leading-relaxed">
          Turn your ideas into interactive, responsive and scalable websites.
          Make customers attracted, your brand more valuable, and retain your
          competitive edge in the digital world by offering our best web
          development services provided by the{" "}
          <a
            href="https://www.capyngen.com/consulting"
            className="text-blue-500 font-semibold"
          >
            best consulting company in India
          </a>{" "}
          and the best web development company in India.
        </p>
      </div>

      {/* Gallery */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: containerHeight }}
      >
        {/* fade edges */}
        <div
          className="absolute top-0 left-0 h-full w-16 z-10"
          style={{
            background: "linear-gradient(to left, rgba(0,0,0,0) 0%, #000 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-16 z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, #000 100%)",
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
                  className="pointer-events-none rounded-xl border-[4px] border-white object-cover shadow-lg transition-transform duration-300 ease-out group-hover:scale-105"
                  style={{ height: imgHeight, width: imgWidth }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannerRollingGallery;
