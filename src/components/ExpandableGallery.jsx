import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

function ExpandableGallery({ panels = panels }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // Auto change panels every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % panels.length);
    }, 4000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [panels.length]);

  return (
    <main className="pt-16 md:pt-20 pb-5 md:pb-10 bg-black overflow-hidden">
      <div className="h-full w-full flex items-center justify-center p-4">
        <div className="flex w-full max-w-7xl h-[60vh] gap-3 md:gap-6 items-center justify-center">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                relative h-full rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-500 ease-in-out
                ${activeIndex === index ? "flex-[3]" : "flex-[0.5]"}
              `}
            >
              <img
                src={panel.image}
                alt={panel.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-end bg-black/30 p-6 text-white 
                transition-all duration-700 ease-in-out
                ${activeIndex === index ? "opacity-100" : "opacity-0"}
              `}
              >
                <h3 className="text-2xl font-bold">{panel.title}</h3>
                <p className="text-sm">{panel.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ExpandableGallery;
