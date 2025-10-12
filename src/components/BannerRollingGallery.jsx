import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";

const IMGS = [
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=3774&auto=format&fit=crop",
];

const BannerRollingGallery = ({
  autoplay = true,
  pauseOnHover = true,
  images = [],
}) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(
    window.innerWidth <= 640
  );
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1200 : 2400;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.7; // ✅ fixed
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(
    rotation,
    (val) => `rotate3d(0,1,0,${val}deg)`
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

  return (
    <section className="bg-black text-white w-full pt-30">
      {/* Heading + Subheading */}
      <div className="text-center  max-w-[90vw] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build Future-Ready Websites with Capyngen
        </h1>
        <p className="text-lg md:text-xl max-w-6xl mx-auto pt-5">
          Convert your concepts to interactive, responsive, and scalable
          websites. Attract customers, increase your brand value, and maintain
          your advantage in the digital world by availing our professional
          website development services.
        </p>
      </div>

      {/* Gallery */}
      <div className="relative h-[600px] w-full overflow-hidden">
        {/* fade edges */}
        <div
          className="absolute top-0 left-0 h-full w-[80px] z-10"
          style={{
            background: "linear-gradient(to left, rgba(0,0,0,0) 0%, #000 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-[80px] z-10"
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
                  className="pointer-events-none h-[250px] w-[400px] md:h-[320px] md:w-[500px] rounded-xl border-[4px] border-white object-cover shadow-lg
                             transition-transform duration-300 ease-out group-hover:scale-105"
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
