import React from "react";

export default function Banner15() {
  const image = ""; // Add image path here if needed

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left: Background/Image + Text */}
      <div className="relative flex-1 flex items-center justify-center lg:justify-start px-6 py-16 lg:pl-16  bg-black overflow-hidden">
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
            <span className="text-blue-500">
              IT solutions for CPG distribution
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            We assist distributors and wholesalers of foreign markets to make
            their business easier to conduct their business fully, leverage
            their supply chain and earn more, by means of smart consumer
            packaged goods software solutions and tailor-made Digital Marketing
            Solution for CPG industry campaigns. We assist distributors and
            wholesalers of foreign markets to make their business easier to
            conduct their business fully, leverage their supply chain and earn
            more, by means of smart consumer packaged goods software solutions
            and tailor-made Digital Marketing Solution for CPG industry
            campaigns. We are also specialised in the provision of high-quality
            CPG distribution services with modern technology.
          </p>
          <p className="mt-6 text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            Increase efficiency through product life cycle management software,
            warehouse management software solutions, and end-to-end consumer
            packaged goods software solutions. Call Capyngen today and get a
            formidable CPG software solution and IT services for CPG!
          </p>
        </div>
      </div>

      {/* Right: Offer/Points */}
      <aside className="flex-1 max-w-xl w-full mx-auto lg:mx-0 flex flex-col justify-center bg-gray-700 p-10 lg:p-10 lg:pt-24 relative z-10">
        <h2 className="text-3xl font-bold text-white leading-snug">
          Why Choose{" "}
          <span className="text-blue-600 italic font-extrabold">Capyngen</span>{" "}
          ?
        </h2>
        <p className="mt-6 text-white text-base lg:text-xl max-w-2xl leading-relaxed">
          International Knowledge in IT solutions for CPG distribution and
          Digital Marketing - The most appropriate solutions to distributors
          worldwide were developed, particularly the businesses that seek to
          grow with CPG distribution services products.
        </p>
        <p className="mt-6 text-white text-base lg:text-xl max-w-2xl leading-relaxed">
          Scalable Systems – Our advanced IT solutions in cpg distribution
          sector in India ensure that you feel free to expand your businesses in
          other locations.
        </p>
        <p className="mt-6 text-white text-base lg:text-xl max-w-2xl leading-relaxed">
          Best-tested Strategies to win Retailers and Buyers - We can make you
          grow with highly targeted campaigns by a well-known CPG software
          company.
        </p>
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
