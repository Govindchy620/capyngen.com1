import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import BestHeading from "./BestHeading";

const FAQSection2 = ({ title, items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-10 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500">
        FAQs
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center">
        Clear All your queries with our comprehensive FAQ section. Get quick
        answers to common questions about our services, processes, and more.
      </p>
      <div className="max-w-4xl mx-auto  mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="group py-5 border-b border-gray-700"
          >
            <div className="w-full flex justify-between items-center text-left font-semibold text-2xl focus:outline-none">
              <span className="group-hover:text-blue-500">{item.question}</span>
              <span className="ml-4 text-lg">
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection2;
