import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import BestHeading from "./BestHeading";

const FAQSection = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-10">
      <BestHeading title="" highlight="FAQs" />
      <div className="max-w-4xl mx-auto space-y-6 mt-10">
        {items.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-2xl focus:outline-none"
            >
              <span>{item.question}</span>
              <span className="ml-4 text-lg">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {/* Animated content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                activeIndex === index
                  ? "max-h-96 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="text-gray-300 text-xl leading-relaxed pl-1">
                {item.answer}
              </div>
            </div>

            <hr className="mt-4 border-gray-700" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
