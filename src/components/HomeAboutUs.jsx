import React from "react";
import { assets } from "../assets/assets";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";
import ScrollFloat from "./ScrollFloat";

const demoMainImg = assets.homeAboutUs1;
const demoTeamImg = assets.homeAboutUs2;
const demoPeople = [assets.team1, assets.team2, assets.team3, assets.team4];

const HomeAboutUs = () => {
  return (
    <section className="bg-black">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="top center"
        scrollEnd="bottom center"
        stagger={0.03}
        containerClassName="gradient-text"
        textClassName="text-xl md:text-7xl font-extrabold"
      >
        About Us
      </ScrollFloat>
      <div
        className="bg-black text-white w-full relative overflow-hidden"
        style={{
          backgroundImage: `url(${assets.homeAboutUsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-12 gap-10 md:gap-20">
          {/* Left Section: Text */}
          <div className="w-full md:w-2/3 flex flex-col space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Innovative IT Solutions That Enhance Efficiency, Drive Growth, and
              Deliver Sustainable Business Success
            </h1>

            {/* Team Row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
              {/* Avatars */}
              <div className="flex flex-wrap gap-2 items-center">
                {demoPeople.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="team member"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-sm"
                  />
                ))}
                <span className="text-sm sm:text-base md:text-lg ml-2">
                  You’ll be talking with our <br className="hidden md:block" />{" "}
                  talented team.
                </span>
              </div>

              {/* Middle Small Image */}
              <div className="w-full md:w-64 lg:w-72 aspect-video overflow-hidden shadow-md rounded-md">
                <img
                  src={demoTeamImg}
                  alt="team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Description + Button */}
            <div className="flex flex-col gap-5 md:gap-8">
              <p className="text-base sm:text-lg font-medium text-[#eaeaea] md:w-4/5">
                We deliver tailored IT solutions to streamline operations and
                boost efficiency. From infrastructure to cybersecurity, we
                empower your business with cutting-edge technology, innovative
                cloud solutions, advanced data analytics, digital transformation
                strategies, and scalable enterprise software for long-term
                growth and success.
              </p>

              <AnimatedButton
                text="Know About Us"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>

          {/* Right Section: Main Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={demoMainImg}
                alt="IT Server Room"
                className="w-full h-auto object-cover shadow-lg max-w-md md:max-w-none md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
