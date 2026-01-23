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
            alt="Social Media Marketing Agency in India | Growth-Driven SMM Services"
            className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="relative z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-400 leading-tight md:pt-16">
            <span className="text-blue-500">Social Media Marketing</span>{" "}
            Services
            <br />
            <span className="inline-block mt-1 border-b-4 border-blue-600 rounded-full w-[60%]" />
            <br />
            <span className="text-3xl md:text-4xl mt-2 inline-block text-gray-300">
              That Build Brands & Drive Growth
            </span>
          </h1>
          <p className="mt-6 text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            The current world has become digital, and therefore, social media
            marketing is nearly compulsory. The diverse number of users on
            Facebook, Instagram, LinkedIn, Twitter (X) and YouTube has made
            social media the strongest tool that a brand can use to position,
            engage and build itself. We are a rising brand of providing social
            media services in India, and we make sure that your business comes
            out.
          </p>
          <p className="mt-6 text-gray-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            As a trusted social media marketing firm, we provide business
            solutions based on analytics-based strategies, creative content, and
            focused social media advertisements. In growing your brand through
            the best social media services in India, our services in social
            media marketing services can be used to fulfil quantifiable
            objectives provided that you are seeking to promote your brand,
            attract the right kind of clientele or boost sales.
          </p>
        </div>
      </div>

      {/* Right: Offer/Points */}
      <aside className="flex-1 max-w-xl w-full mx-auto lg:mx-0 flex flex-col justify-center bg-gray-700 p-10 lg:p-10 lg:pt-24 relative z-10">
        <h2 className="text-2xl font-bold text-white leading-snug">
          What is{" "}
          <span className="text-blue-600 italic font-extrabold">
            Social Media Marketing
          </span>{" "}
          ?
        </h2>
        <p className="mt-6 text-white text-base lg:text-lg max-w-2xl leading-relaxed">
          Social Media Marketing (SMM) is a process that is directed at
          promoting products, services, or brands through social media. It
          entails creating appealing content, running sponsored campaigns and
          creating a positive rapport with the target market. Brand is ensured
          by the community social network structure:
        </p>
        <ul className="mt-6 space-y-4">
          <OfferCheckItem text="Targets the right audience." />
          <OfferCheckItem text="Holds the summit of the adversaries." />
          <OfferCheckItem text="Earn confidence and the name." />
          <OfferCheckItem text="Pulls the sales and right leads." />
        </ul>
        <p className="mt-6 text-white text-base lg:text-lg max-w-2xl leading-relaxed">
          More precisely, the social media services in India are the new means
          of reaching your consumers via your brand, backed by the social media
          campaigns that facilitate the growth.
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
