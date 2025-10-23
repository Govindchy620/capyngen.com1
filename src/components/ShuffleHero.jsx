import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShuffleHero = ({
  heading = "Let's change it up a bit",
  subheading = "Better every day",
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in error repellat voluptatibus ad.",
  buttonText = "Find a class",
  onButtonClick = () => {},
  images = [],
  gridCols = 4,
  gridRows = 4,
  shuffleInterval = 3000,
  themeColor = "indigo",
  bgColor = "bg-black",
}) => {
  const navigate = useNavigate();
  return (
    <section className={`w-full min-h-screen pt-10 md:pt-28 ${bgColor}`}>
      <div className="max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Text Section */}
        <div className="text-white pt-10">
          {subheading && (
            <span
              className={`block mb-4 text-xs md:text-sm text-${themeColor}-500 font-medium`}
            >
              {subheading}
            </span>
          )}

          {heading && (
            <h3 className="text-4xl md:text-5xl leading-tight font-bold">
              {heading}
            </h3>
          )}

          {description && (
            <div className="text-base md:text-lg text-gray-300 my-4 md:my-6">
              {description}
            </div>
          )}

          {buttonText && (
            <button
              onClick={() => navigate("/contact-us")}
              className={`${themeColor} text-white font-medium py-4 px-8 text-lg rounded transition-all active:scale-95`}
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Dynamic Grid Section */}
        <ShuffleGrid
          images={images}
          gridCols={gridCols}
          gridRows={gridRows}
          shuffleInterval={shuffleInterval}
        />
      </div>
    </section>
  );
};

/* --- Helper: Shuffle function --- */
const shuffle = (array) => {
  const arr = [...array];
  let currentIndex = arr.length,
    randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};

/* --- Grid Shuffle Component --- */
const ShuffleGrid = ({ images, gridCols, gridRows, shuffleInterval }) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(() => generateSquares(images));

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares(images));
      timeoutRef.current = setTimeout(shuffleSquares, shuffleInterval);
    };

    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, [images, shuffleInterval]);

  return (
    <div
      className="grid h-[450px] gap-1"
      style={{
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
      }}
    >
      {squares.map((sq) => sq)}
    </div>
  );
};

/* --- Helper: Generate motion squares --- */
const generateSquares = (images) => {
  if (!images || images.length === 0) return [];
  return shuffle(images).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

export default ShuffleHero;
