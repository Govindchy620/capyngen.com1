"use client";

import TextType from "./TextType";

export default function BestHeading({
  title = "Our Best",
  highlight = "Work",
  textColor = "white",
}) {
  return (
    <div className=" flex flex-col md:flex-row items-center md:items-start justify-center">
      {title && (
        <h1 className="text-[#0A2351] font-bold text-4xl sm:text-5xl md:text-6xl pt-4">
          {title}
        </h1>
      )}
      <TextType
        text={highlight}
        typingSpeed={70}
        startOnVisible={true}
        showCursor={true}
        textColor={textColor}
        textSize="5rem"
        className="text-4xl font-extrabold"
      />
    </div>
  );
}
