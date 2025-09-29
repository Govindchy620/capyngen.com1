import React from "react";

export default function Banner9() {
  const image = ""; // Add image path here if needed

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left: Background/Image + Text */}
      <div className="relative flex-1 flex items-center justify-center lg:justify-start px-6 py-16 lg:pl-24 bg-black overflow-hidden">
        {image && (
          <img
            src={image}
            alt="Ecommerce app background"
            className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 leading-tight md:pt-16">
            <span className="text-blue-500">Artificial Intelligence</span>{" "}
            Solutions
            <br />
            <span className="inline-block mt-1 border-b-4 border-blue-600 rounded-full w-[60%]" />
            <br />
            <span className="mt-2 inline-block text-gray-300">
              for Business
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            Capyngen creates futuristic artificial intelligence applications and
            AI-enabled solutions to attract radical ideas, save time and
            revenue-making your business blossom. Besides this, custom AI
            development services and consulting empower your business.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 text-left max-w-2xl mx-auto lg:mx-0">
            <ul>
              <HeroCheckItem text="AI-Powered Personalized Product Recommendations" />
              <HeroCheckItem text="AI-Driven Payment Fraud Detection and Security" />
            </ul>
            <ul>
              <HeroCheckItem text="Intelligent Dynamic Pricing Optimization" />
              <HeroCheckItem text="AI-Enabled Visual and Voice Search" />
            </ul>
          </div>
        </div>
      </div>

      {/* Right: Offer/Points */}
      <aside className="flex-1 max-w-xl w-full mx-auto lg:mx-0 flex flex-col justify-center bg-gray-700 p-10 lg:p-16 relative z-10">
        <h2 className="text-2xl font-bold text-white leading-snug">
          Artificial Intelligence{" "}
          <span className="text-blue-600 italic font-extrabold">
            Solutions Tailored
          </span>{" "}
          for Your Business
        </h2>
        <ul className="mt-8 space-y-6">
          <OfferCheckItem text="Boost brand recognition with AI-powered ecommerce apps." />
          <OfferCheckItem text="Enhance marketing communication through intelligent automation." />
          <OfferCheckItem text="Deliver personalized customer experiences with AI solutions." />
          <OfferCheckItem text="Increase visitor engagement via smart ecommerce development." />
          <OfferCheckItem text="Achieve higher conversion rates compared to traditional web solutions." />
        </ul>
      </aside>
    </section>
  );
}

function HeroCheckItem({ text }) {
  return (
    <li className="flex items-center space-x-3 mb-3 md:h-15">
      <span
        className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

function OfferCheckItem({ text }) {
  return (
    <li className="flex items-start space-x-3">
      <span className="mt-1 text-blue-600 flex-shrink-0" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>
      <span className="text-white">{text}</span>
    </li>
  );
}
