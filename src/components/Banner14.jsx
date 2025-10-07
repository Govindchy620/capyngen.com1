import React, { memo } from "react";

const Banner14 = ({
  imageSrc,
  imageAlt = "Banner Illustration",
  title = "",
  highlighted = "",
  subtitle = "",
  description = "",
  reverse = false, // lets you flip image + content
}) => {
  return (
    <section
      className="pt-28 flex items-center py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-8"
      aria-label="Capyngen Network Solutions Banner"
    >
      <div className="container max-w-[90vw] mx-auto">
        <div
          className={`lg:flex justify-center items-center gap-12 ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Left Content: Responsive image */}
          <div className="w-full lg:w-5/12 flex justify-center mb-8 lg:mb-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-3xl shadow-2xl w-full object-cover"
              loading="lazy"
              decoding="async"
              role="img"
              srcSet={`${imageSrc} 1x, ${imageSrc} 2x`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-7/12 py-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {title.split(highlighted)[0]}
              <span className="text-blue-500 text-3xl md:text-5xl font-extrabold">
                {highlighted}
              </span>
              {subtitle}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Banner14);
