import React from "react";
import {
  FaBuilding,
  FaUserTie,
  FaMoneyBillWave,
  FaHome,
  FaStore,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";

const TypesWeDevelop = ({ heading, subheading, buttonText, image, types }) => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT COLUMN (sticky content) */}
        <div className="md:sticky md:top-24 self-start h-fit">
          {heading && (
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="mt-4 text-gray-600 max-w-lg">{subheading}</p>
          )}

          {/* CTA */}
          {buttonText && (
            <button className="mt-6 inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 transition-all">
              {buttonText} <span className="ml-2">→</span>
            </button>
          )}

          {/* Phone Image */}
          {image && (
            <div className="mt-10">
              <img
                src={image}
                alt="Real estate app"
                className="max-h-[550px] mx-auto lg:mx-0 rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (2-column grid types) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {types?.map((app, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="text-3xl text-indigo-600 mb-3">{app.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {app.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypesWeDevelop;
