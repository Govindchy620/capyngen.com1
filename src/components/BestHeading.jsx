"use client";

import TextType from "./TextType";

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
      <TextType
        text={highlight}
        typingSpeed={80}
        startOnVisible={true}
        showCursor={true}
        className="text-5xl font-extrabold"
      />
    </div>
  );
}
