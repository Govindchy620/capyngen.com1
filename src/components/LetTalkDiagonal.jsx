"use client";
import React, { useEffect, useState } from "react";

export default function LetTalkDiagonal() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(800); // Default height

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    // Set initial height
    setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate rotation angles based on scroll
  const getRotationAngle = (sectionIndex, scrollOffset = 0) => {
    const scrollProgress = Math.max(
      0,
      Math.min(1, (scrollY - scrollOffset) / windowHeight)
    );
    return scrollProgress * 90; // Rotate up to 90 degrees
  };

  const sections = [
    { bg: "bg-lime-400", text: "Let' Talk", offset: 0 },
    { bg: "bg-yellow-400", text: "Team", offset: windowHeight },
    { bg: "bg-teal-400", text: "Our", offset: windowHeight * 2 },
    { bg: "bg-lime-400", text: "Let' Talk", offset: windowHeight * 3 },
  ];

  return (
    <div className="relative" style={{ height: `${sections.length * 100}vh` }}>
      {/* Rotating sections */}
      {sections.map((section, index) => {
        const rotationAngle = getRotationAngle(index, section.offset);
        const isVisible =
          scrollY >= section.offset - windowHeight &&
          scrollY <= section.offset + windowHeight * 2;

        return (
          <div
            key={index}
            className={`fixed inset-0 ${section.bg} transition-transform duration-500 ease-out`}
            style={{
              transformOrigin: "0 0", // Pivot from top-left corner
              transform: `rotate(${rotationAngle}deg)`,
              zIndex: sections.length - index, // Stack order
              opacity: isVisible ? 1 : 0,
            }}
          >
            {/* Content container that counter-rotates to keep text upright */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
              style={{
                transformOrigin: "50% 50%",
                transform: `rotate(${-rotationAngle * 0.3}deg)`, // Counter-rotate text slightly
              }}
            >
              <h1
                className="text-8xl md:text-9xl font-bold text-black transition-all duration-500 ease-out"
                style={{
                  opacity:
                    rotationAngle < 45 ? 1 - (rotationAngle / 45) * 0.5 : 0.5,
                  transform: `scale(${Math.max(
                    0.8,
                    1 - rotationAngle * 0.003
                  )})`,
                }}
              >
                {section.text}
              </h1>
            </div>

            {/* Email contact for Team section */}
            {section.text === "Team" && (
              <div
                className="absolute bottom-20 right-20 transition-all duration-500 ease-out"
                style={{
                  opacity:
                    rotationAngle < 30
                      ? Math.max(0, 1 - rotationAngle * 0.05)
                      : 0,
                  transform: `rotate(${-rotationAngle * 0.5}deg) translateX(${
                    rotationAngle * 2
                  }px)`,
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">@</span>
                  </div>
                  <div className="text-black font-semibold">
                    info@themexriver.co.uk
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Background sections (revealed as top sections rotate away) */}
      {sections.map((section, index) => {
        if (index === 0) return null; // Skip first section as it's the base

        return (
          <div
            key={`bg-${index}`}
            className={`absolute inset-0 ${section.bg}`}
            style={{
              zIndex: 1, // Behind rotating sections
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl md:text-9xl font-bold text-black opacity-20">
                {section.text}
              </h1>
            </div>
          </div>
        );
      })}

      {/* Invisible scroll spacers */}
      {sections.map((_, index) => (
        <div key={`spacer-${index}`} className="h-screen" />
      ))}
    </div>
  );
}
