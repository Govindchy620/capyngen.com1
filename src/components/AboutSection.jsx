import React from "react";
import { assets } from "../assets/assets";

const AboutSection = () => {
  const features = [
    {
      title: "Results That Speak Louder Than Words",
      description:
        "While others give promises, we give results that can be quantified. Our data-driven campaigns not only expose your brand to new audiences but convert them into loyal customers.",
    },
    {
      title: "One-Stop Digital Powerhouse",
      description:
        "We merge the diverse industries of startups and enterprises under a single innovative umbrella that caters to various industries. Regardless of your field, we have the knowledge to take your online presence to the next level.",
    },
    {
      title: "Transparency You Can Trust",
      description:
        "Every campaign, every click, and every conversion – you will have access to it all. Our detailed reporting system will keep you in the driver's seat of your digital journey.",
    },
    {
      title: "Our Mission",
      description:
        "To remake your digital fantasies into realities that dominate the market. We are not a service meant to help you compete; we are the ones that help you lead.",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row relative overflow-hidden"
      style={{ background: `url(${assets.patternBg1})` }}
    >
      {/* Left Column - Image */}
      <div className="w-full md:w-1/2 bg-black relative flex items-center justify-center">
        <img
          src={assets.companyOverview2}
          alt="Overview"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Right Column - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 bg-black relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Who We Are
        </h2>

        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-12">
          We are the digital strategists, creatives, and growth hackers who are
          passionate about and are successful in the digital world. We are like
          your digital co-pilots that will help you maneuver through the
          ever-changing world of the internet and get your brand exactly at the
          place that it deserves.
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          What Makes Us Different
        </h2>

        {/* Glass Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
              hover:border-blue-400/60 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/20 
              transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h3 className="relative text-xl sm:text-2xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="relative text-gray-200 text-base sm:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
