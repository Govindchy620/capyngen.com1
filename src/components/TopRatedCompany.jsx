import React from "react";
import { assets } from "../assets/assets";

export default function TopRatedCompany({
  title = "Why Choose Capyngen: Innovative, Reliable IT Services that Drive Success",
  description = `We provide businesses with innovative, dependable, and tailored
    digital solutions that help them grow, come up with new ideas, and
    get measurable results. We are experts in enterprise-grade cloud
    computing, advanced business intelligence, next-generation
    cybersecurity, custom mobile app development, strong enterprise
    software, strategic digital transformation, intelligent
    automation, responsive web platforms, and scalable IT strategies.
    These things help businesses grow and succeed in the long term.`,
  image = assets.whyChooseUs,
  bgColor = "bg-black",
  background = "",
  reverse = false,
  isHidden = "",
  imageHeight = "md:aspect-[4/5]",
}) {
  return (
    <section
      className={`${bgColor} py-15 bg-no-repeat bg-center bg-cover transition-colors duration-700`}
      style={{ backgroundImage: `url(${background})` }}
      aria-label="Top rated company information section"
    >
      <div className="container px-4 md:px-6 lg:px-12 max-w-[90rem] mx-auto text-white">
        <div
          className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <article className="w-full lg:w-2/3 text-left max-w-4xl mx-auto lg:mx-0">
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold leading-tight drop-shadow-lg text-center md:text-left">
              {title}
            </h1>
            <div className="mt-10 md:mt-12 text-base md:text-lg space-y-6 max-w-3xl mx-auto lg:mx-0 text-white/90 drop-shadow-md">
              {Array.isArray(description) ? (
                description.map((para, idx) => <div key={idx}>{para}</div>)
              ) : (
                <p>{description}</p>
              )}
            </div>
          </article>

          {/* Image Content */}
          <figure
            className={`w-full lg:w-1/3 mx-auto flex justify-center mt-6 md:mt-20`}
          >
            <div
              className={`relative w-full max-w-sm md:max-w-md ${imageHeight}`}
            >
              {/* Purple border with smooth shadow */}
              <div
                className={`${
                  isHidden && "hidden"
                } absolute inset-0 rounded-xl border-2 border-purple-500 transform translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-0 shadow-lg`}
                aria-hidden="true"
              />

              {/* Image */}
              <img
                src={image}
                alt="Business people collaborating"
                className="relative z-10 w-full h-full object-contain rounded-xl shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
