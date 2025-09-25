import React from "react";
import { UserRoundSearch, BarChart3, Sparkles, LifeBuoy } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { assets } from "../assets/assets";
import BestHeading from "./BestHeading";

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full overflow-hidden text-white"
      aria-label="Why Choose Capyngen Section"
    >
      <BestHeading title="" highlight="Why Choose Capyngen" />

      <div className="container max-w-[90rem] mx-auto px-6 md:px-8 lg:px-12 pt-6 md:pt-0">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-10 mx-auto">
          {/* Right Image (first on mobile) */}
          <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-20 order-1 lg:order-2 pr-5 md:pr-0">
            <div className="relative w-full max-w-sm md:max-w-md md:aspect-[4/5]">
              {/* Purple border background layer */}
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500 translate-x-4 md:translate-x-6 -translate-y-4 md:-translate-y-6 z-0" />
              {/* Image foreground */}
              <img
                src={assets.whyChooseUs}
                alt="Business people collaborating"
                className="relative z-10 w-full h-full object-cover rounded-xl shadow-lg animate-diagonalBounce"
              />
            </div>
          </div>

          {/* Left Content (second on mobile) */}
          <div className="w-full lg:w-2/3 text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-white mt-4">
              Innovative, Reliable IT & Digital Solutions That Deliver Results
            </h1>
            <p className="text-base md:text-lg my-6 max-w-7xl lg:max-w-full mx-auto lg:mx-0 text-white">
              Capyngen is the lifeline for businesses wanting to intensify their
              growth, innovation, and impact through the use of tailor-made,
              state-of-the-art solutions. We are specialists in IT services, IT
              consulting services, custom software development, web development,
              CRM management software, cloud IT services, cybersecurity
              services, and mobile app development, thus we always deliver
              enterprise-grade technology and strategic digital solutions. Thus,
              from responsive web platforms to intelligent automation, digital
              marketing services, and scalable IT strategies, our approach
              assures long-term success and sustainable business growth.
            </p>
            <div className="flex justify-start">
              <AnimatedButton
                text="Get in Touch"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
          {[
            {
              icon: <UserRoundSearch className="w-7 h-7 text-indigo-600" />,
              title: "Customer-Centric Solutions",
              desc: "Capyngen delivers custom software development and IT services that are specially designed to meet the unique needs of your business, thus guaranteeing the long-term growth and success of your enterprise.",
            },
            {
              icon: <BarChart3 className="w-7 h-7 text-pink-600" />,
              title: "Strategic Digital Marketing",
              desc: "We mix innovation and artistry to conceive digital marketing strategies, search engine optimization services, and social media & marketing campaigns which are the tools that will be used to attract and retain customers by you thus putting you way ahead of the competition.",
            },
            {
              icon: <Sparkles className="w-7 h-7 text-yellow-500" />,
              title: "Expertise You Can Trust",
              desc: "With the use of industry knowledge and skills that have been proven, Capyngen delivers IT consulting services, web development, and CRM management software solutions that are scalable, secure, and ready for the future.",
            },
            {
              icon: <LifeBuoy className="w-7 h-7 text-green-600" />,
              title: "Reliable 24/7 Support",
              desc: "Our dedicated team makes sure that you get uninterrupted assistance, providing reliable IT services company support so that your business can operate seamlessly without any downtime.",
            },
          ].map(({ icon, title, desc }, i) => (
            <article
              key={i}
              className="group bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700/50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              tabIndex={0}
              aria-labelledby={`feature-title-${i}`}
              aria-describedby={`feature-desc-${i}`}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <h3
                id={`feature-title-${i}`}
                className="text-lg md:text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300"
              >
                {title}
              </h3>
              <p
                id={`feature-desc-${i}`}
                className="mt-3 text-gray-300 text-sm md:text-base leading-relaxed"
              >
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
