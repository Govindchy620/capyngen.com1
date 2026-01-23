import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner5 = ({
  title = "Instant devops solutions provider – Get India’s #1 Trusted DevOps solutions",
  description = (
    <>
      <p className="my-4 font-bold text-xl">
        Capyngen is the company that provides expert DevOps services and
        solutions to accelerate your software delivery and streamline
        operations.
      </p>
      <p>
        Capyngen is a global provider of DevOps services and solutions that are
        used to enhance teamwork, ease the development of software and ensure
        reliable, scalable, and secure infrastructure. We are not like other
        companies, but we are a DevOps services company and a trusted DevOps
        solutions provider, because we offer tailored solutions, full
        implementation, and 24/7 support to companies across different
        industries—making us a strategic partner for any modern{" "}
        <a
          href="https://www.capyngen.com/application-solutions"
          className="text-blue-500 font-semibold"
        >
          apps solutions company
        </a>
        .
      </p>
    </>
  ),
  primaryBtnText = "Start using the Capyngen DevOps Solutions",
  primaryBtnLink = "/contact-us",
  image = assets.devOps1,
  alt = "Best SEO Company in India | Professional AI SEO Services",
}) => {
  return (
    <section className="bg-gray-900 pt-20" aria-label="DevOps Solutions Banner">
      <div className="grid max-w-[90vw] md:px-4 py-8 mx-auto lg:grid-cols-12 lg:gap-8 xl:gap-0 lg:pb-16">
        {/* Left Content */}
        <div className="mx-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <h1 className="mb-4 font-extrabold leading-tight text-white text-3xl sm:text-3xl md:text-5xl">
            {title}
          </h1>
          <div className="max-w-3xl mx-auto mb-6 font-light text-gray-300 lg:mb-8 text-sm sm:text-base md:text-lg">
            {description}
          </div>

          {/* Buttons */}
          {primaryBtnText && (
            <Link
              to={primaryBtnLink}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-sm sm:text-base font-medium text-white text-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900 transition"
              aria-label={primaryBtnText}
            >
              {primaryBtnText}
              <svg
                className="w-4 h-4 ml-2 -mr-1 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                      1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                      11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                      1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          )}
        </div>

        {/* Right Image */}
        {image && (
          <div className="flex lg:col-span-5 lg:justify-center justify-center mt-20 lg:mt-0">
            <img
              src={image}
              alt={alt}
              className="max-w-full h-auto rounded-md object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner5;
