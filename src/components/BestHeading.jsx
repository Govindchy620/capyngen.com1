"use client";

export default function BestHeading({
  title = "Our Best",
  highlight = "Work",
}) {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start px-8">
      <h1 className="text-[#0A2351] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl pt-4">
        {title}
      </h1>
      <div className="relative leading-none tracking-[0.5rem]">
        {/* Shadow Layer */}
        <h1
          className="absolute top-[6px] xl:top-[10px] left-[6px] xl:left-[10px] text-[#DCDEE0] font-extrabold text-[7rem] md:text-[10rem] z-0 whitespace-nowrap inline-block"
          style={{ transform: "scaleX(0.8)" }}
        >
          {highlight}
        </h1>
        {/* Main Outlined Text */}
        <h1
          className="relative text-outline-only font-extrabold text-[7rem] md:text-[10rem] z-10 whitespace-nowrap inline-block"
          style={{ transform: "scaleX(0.8)" }}
        >
          {highlight}
        </h1>
      </div>
    </div>
  );
}
