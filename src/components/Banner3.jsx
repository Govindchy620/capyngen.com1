import React from "react";
import { assets } from "../assets/assets";

export default function Banner3({
  title = "Custom AI Solution",
  subtitle = "Transforming the future of healthcare with AI-driven innovations.",
  backgroundImage = "",
  overlayColor, // Will be replaced with gradient now
}) {
  return (
    <section
      className="relative w-full min-h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Gradient overlay with diagonal bottom */}
      <div
        className="absolute inset-0 flex pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-600 "
        style={{
          clipPath: "polygon(0 0, 100% 0, 70% 0%, 50% 100%, 0 100%)",
        }}
      >
        <div className="w-[90vw] mx-auto py-16">
          {/* Text */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-5xl font-bold text-white leading-[1.1]">
              {title}
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
