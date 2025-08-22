import { useState } from "react";
import { assets } from "../assets/assets";

function ExpandableGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      image: assets.gallery1,
      title: "Panel 1",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.gallery2,
      title: "Panel 2",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.gallery3,
      title: "Panel 3",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.gallery4,
      title: "SEO Speed Up Website",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.blog3,
      title: "Panel 5",
      desc: "Digital Art • Illustrations",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <main className="w-screen h-screen bg-black overflow-hidden">
      <div className="h-full w-full flex items-center justify-center p-4">
        <div className="flex w-full max-w-7xl h-[60vh] gap-6 items-center justify-center">
          {panels.map((panel, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`
                relative h-full rounded-2xl overflow-hidden cursor-pointer
                transition-all duration-400 ease-in-out
                ${activeIndex === index ? "flex-[3]" : "flex-[0.5]"}
              `}
            >
              <img
                src={panel.image}
                alt=""
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0  flex flex-col justify-end p-6 text-white 
                transition-all duration-600 ease-in-out
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
