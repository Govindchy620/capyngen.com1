import React from "react";
import { assets } from "../assets/assets";
import AnimatedButton from "./AnimatedButton";
import BestHeading from "./BestHeading";

const demoMainImg = assets.homeAboutUs1;
const demoTeamImg = assets.homeAboutUs2;
const demoPeople = [assets.team1, assets.team2, assets.team3, assets.team4];

const HomeAboutUs = () => {
  return (
    <div>
      <BestHeading title="" highlight="About Us" />
      <div
        className=" bg-[#0D2665] text-white w-full min-h-[100vh] relative overflow-x-hidden"
        style={{ backgroundImage: `url(${assets.homeAboutUsBg})` }}
      >
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-12 lg:px-24 space-y-8 md:space-y-0 md:gap-20">
          {/* Left Section: Text */}
          <div className="md:w-2/3 flex flex-col space-y-6">
            <div>
              <span className="inline-block rounded-md bg-transparent bg-opacity-20 text-green-500 px-3 py-1 text-base font-semibold mb-2 border border-green-500">
                • About Us Technox •
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Comprehensive IT Solutions That Drive Innovation, Efficiency,
                &amp; Growth for Your Business Success.
              </h1>
            </div>

            {/* Team Row */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
              <div className="flex space-x-2 items-center">
                {demoPeople.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="team member"
                    className="w-12 h-12 object-cover rounded-sm"
                  />
                ))}
                <span className="text-md md:text-lg ml-2">
                  You’ll be talking with our <br className="hidden md:block" />{" "}
                  talented team.
                </span>
              </div>

              {/* Middle Small Image */}
              <div className="w-full md:w-72 h-40 overflow-hidden mx-auto md:mx-0 shadow-md">
                <img
                  src={demoTeamImg}
                  alt="team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 md:gap-10">
              {/* Description Text */}
              <p className="text-lg font-semibold text-[#eaeaea] md:w-2/3 ">
                We deliver tailored IT solutions to streamline operations and
                boost efficiency. From infrastructure to cybersecurity, we
                empower your business cutting technology.
              </p>

              <AnimatedButton
                text="Know About Us"
                onClick={() => alert("Button clicked!")}
              />
            </div>
          </div>

          {/* Right Section: Main Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end items-center">
            <div className="relative">
              <img
                src={demoMainImg}
                alt="IT Server Room"
                className="shadow-lg w-full max-w-md md:max-w-none md:h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
