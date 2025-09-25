import React, { useState, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import BestHeading from "./BestHeading";

const FAQItem = ({ item, isActive, onToggle }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="group py-5 border-b border-gray-700 cursor-pointer"
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* Question */}
      <div className="flex justify-between items-center text-left font-semibold text-2xl">
        <span className="group-hover:text-blue-500">{item.question}</span>
        <span className="ml-4 text-lg">
          {isActive ? <FaMinus /> : <FaPlus />}
        </span>
      </div>

      {/* Answer with dynamic height */}
      <div
        ref={contentRef}
        className="transition-all duration-500 ease-in-out overflow-hidden"
        style={{
          maxHeight: isActive ? contentRef.current?.scrollHeight : 0,
          opacity: isActive ? 1 : 0,
          marginTop: isActive ? "0.5rem" : 0,
        }}
      >
        <div className="text-gray-300 text-xl leading-relaxed pl-1">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ title = "FAQs", items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="text-white pb-16 px-4 md:px-10">
      <BestHeading title="" highlight={title} />
      <div className="max-w-4xl mx-auto mt-10">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isActive={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
