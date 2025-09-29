import React from "react";

const Banner5 = ({
  title = "DevOps Solutions",
  description = "When it comes to software delivery, DevOps Solutions are no longer an optional add-on, rather, they are an integral component of the process. Businesses in modern times need more than speed, they need swift, secure, and ideal synchronized collaboration. With the appropriate DevOps services, one can establish an operational and developmental interface that optimally removes silos and facilitates innovative breakthroughs.",
  primaryBtnText = "Get started",
  primaryBtnLink = "#",
  image = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
}) => {
  return (
    <section className="bg-gray-900 pt-20" aria-label="DevOps Solutions Banner">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:grid-cols-12">
        {/* Left Content */}
        <div className="mr-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <h1 className="max-w-3xl mb-4 text-4xl font-extrabold leading-tight md:text-5xl text-white">
            {title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg">
            {description}
          </p>

          {/* Buttons */}
          {primaryBtnText && (
            <a
              href={primaryBtnLink}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white text-center rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900 transition"
              aria-label={primaryBtnText}
            >
              {primaryBtnText}
              <svg
                className="w-5 h-5 ml-2 -mr-1"
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
            </a>
          )}
        </div>

        {/* Right Image */}
        {image && (
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
            <img
              src={image}
              alt="DevOps solutions mockup"
              className="max-w-full h-auto rounded-md shadow-lg"
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
