import React, { memo } from "react";
import { assets } from "../assets/assets";

const Banner14 = () => {
  return (
    <section
      className="min-h-screen pt-20 flex items-center py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 sm:px-6 lg:px-8"
      aria-label="Capyngen Network Solutions Banner"
    >
      <div className="container max-w-[90vw] mx-auto">
        <div className="lg:flex justify-center items-center gap-12">
          {/* Left Content: Responsive image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <img
              src={assets.blockchainDevelopment}
              alt="Illustration representing network and blockchain solutions"
              className="rounded-3xl shadow-2xl w-full object-cover"
              loading="lazy"
              decoding="async"
              role="img"
              srcSet={`${assets.blockchainDevelopment} 1x, ${assets.blockchainDevelopment} 2x`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-7/12 py-5">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Creative <br />
                <span className="text-blue-500 text-3xl md:text-5xl font-extrabold">
                  Network Solutions and Services
                </span>{" "}
                <br />
                for Contemporary Businesses
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed">
                Capyngen provides efficient, safe, and adaptable technology
                network solutions and services that assist your business in
                achieving maximum performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Banner14);
