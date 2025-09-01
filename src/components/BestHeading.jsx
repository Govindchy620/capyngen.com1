"use client";

import ScrollFloat from "./ScrollFloat";

export default function BestHeading({
  title = "Our Best",
  highlight = "Work",
}) {
  return (
    <div className=" flex flex-col md:flex-row items-center md:items-start justify-center">
      {title && (
        <h1 className="text-[#0A2351] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-4">
          {title}
        </h1>
      )}
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="top center"
        scrollEnd="bottom center"
        stagger={0.03}
        containerClassName="gradient-text"
        textClassName="text-5xl font-extrabold"
      >
        {highlight}
      </ScrollFloat>
    </div>
  );
}
