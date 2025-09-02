"use client";

export default function BestHeading2({ highlight = "Work" }) {
  return (
    <div className="flex justify-center items-center text-center overflow-visible">
      <div className="md:leading-34 tracking-wider max-w-full pb-4 inline-grid">
        {/* Shadow Layer */}
        <h1
          className="col-start-1 row-start-1 text-gray-400 font-extrabold 
          text-[clamp(2.5rem,12vw,8rem)] z-0 translate-x-[3px] translate-y-[3px]
          md:translate-x-[6px] md:translate-y-[6px]"
          style={{ transform: "scaleX(0.9)" }}
        >
          {highlight}
        </h1>
        {/* Main Outlined Text */}
        <h1
          className="col-start-1 row-start-1 text-outline-only font-extrabold 
          text-[clamp(2.5rem,12vw,8rem)] z-10"
          style={{ transform: "scaleX(0.9)" }}
        >
          {highlight}
        </h1>
      </div>
    </div>
  );
}
