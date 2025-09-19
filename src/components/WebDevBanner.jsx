import React from "react";
import BestHeading2 from "./BestHeading2";

const WebDevBanner = ({
  backgroundImage,
  title = "Web Development Solutions",
  description = "We craft scalable, high-performing, and visually engaging websites tailored to your business needs. From responsive design to custom web applications, we deliver digital experiences that drive results.",
}) => {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center text-white">
        <BestHeading2 title="Innovative" highlight={title} />
        <p className="max-w-3xl mx-auto mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-pink-500/40 to-purple-500/40 rounded-full blur-3xl" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-2xl" />
    </section>
  );
};

export default WebDevBanner;
