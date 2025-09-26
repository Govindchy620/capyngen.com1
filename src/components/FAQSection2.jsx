import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import BestHeading from "./BestHeading";

const FAQSection2 = ({ title = "FAQs", desc = "", items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-10 pb-16 px-4 md:px-10 flex flex-col items-center">
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">{desc}</p>
      <div className="max-w-6xl mx-auto  mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => toggle(index)}
            className="group py-5 border-b border-gray-700 cursor-pointer"
          >
            <div className="w-full flex justify-between items-center text-left font-semibold text-xl focus:outline-none">
              <div>
                <span className="text-blue-400 font-mono mr-2 select-none">{`${
                  index < 9 ? "0" : ""
                }${index + 1}.`}</span>
                <span className="group-hover:text-blue-500">
                  {item.question}
                </span>
              </div>
              <span className="ml-4 text-xl">
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
              <div className="text-gray-300 text-lg leading-relaxed pl-1">
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
