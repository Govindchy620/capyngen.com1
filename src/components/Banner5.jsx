import React from "react";

const Banner5 = ({
  title = "DevOps Solutions",
  description = (
    <>
      <p className="my-4 font-bold text-xl">
        Accelerate your software delivery and streamline operations with
        Capyngen’s expert DevOps solutions.
      </p>
      <p>
        Capyngen delivers DevOps solutions worldwide which help to improve
        teamwork, simplify the delivery of software, and maintain infrastructure
        that is secure, scalable, and reliable. By delivering customized plans,
        complete implementation, and round-the-clock assistance for companies of
        various sectors, we are different.
      </p>
    </>
  ),
  primaryBtnText = "Start using the Capyngen DevOps Solutions",
  primaryBtnLink = "#",
  image = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
}) => {
  return (
    <section className="bg-gray-900 pt-20" aria-label="DevOps Solutions Banner">
      <div className="grid max-w-[90vw] px-4 py-8 mx-auto lg:grid-cols-12 lg:gap-8 xl:gap-0 lg:pb-16">
        {/* Left Content */}
        <div className="mx-auto place-self-center lg:col-span-7 text-center lg:text-left">
          <h1 className="mb-4 font-extrabold leading-tight text-white text-3xl sm:text-3xl md:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl mx-auto mb-6 font-light text-gray-300 lg:mb-8 text-sm sm:text-base md:text-lg">
            {description}
          </p>

          {/* Buttons */}
          {primaryBtnText && (
            <a
              href={primaryBtnLink}
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
            </a>
          )}
        </div>

        {/* Right Image */}
        {image && (
          <div className="flex lg:col-span-5 lg:justify-center justify-center mt-20 lg:mt-0">
            <img
              src={image}
              alt="DevOps solutions mockup"
              className="max-w-full h-auto rounded-md"
              loading="lazy"
              decoding="async"
              style={{ maxWidth: "350px" }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Banner5;
