"use client";

export default function BestHeading({
  title = "Our Best",
  highlight = "Work",
}) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center text-center md:text-left">
      {/* Title */}
      {title && (
        <h1 className="text-[#0A2351] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl pt-2 md:pt-4">
          {title}
        </h1>
      )}

      {/* Highlight */}
      <div className="relative ml-0 mt-2 md:mt-0 leading-none">
        {/* Shadow Layer (scales with font size) */}
        <h1
          className="absolute text-[#4D85FF] font-extrabold text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl z-0 md:whitespace-nowrap leading-tight"
          style={{
            transform: "scaleX(0.85)",
            top: "0.05em", // relative to font size
            left: "0.05em", // relative to font size
          }}
        >
          {highlight}
        </h1>

        {/* Main Outlined Text */}
        <h1
          className="relative font-extrabold text-outline-only text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl z-10 md:whitespace-nowrap leading-tight"
          style={{ transform: "scaleX(0.85)" }}
        >
          {highlight}
        </h1>
      </div>
    </div>
  );
}
