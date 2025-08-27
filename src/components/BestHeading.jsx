"use client";

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
      <div className="relative leading-none tracking-[0.5rem]">
        {/* Shadow Layer */}
        <h1
          className="absolute top-[4px] xl:top-[7px] left-[4px] xl:left-[7px] text-[#4D85FF] font-extrabold text-6xl md:text-9xl z-0 whitespace-nowrap inline-block"
          style={{ transform: "scaleX(0.8)" }}
        >
          {highlight}
        </h1>
        {/* Main Outlined Text */}
        <h1
          className="relative text-outline-only font-extrabold text-6xl md:text-9xl z-10 whitespace-nowrap inline-block"
          style={{ transform: "scaleX(0.8)" }}
        >
          {highlight}
        </h1>
      </div>
    </div>
  );
}
