import React from "react";
import { assets } from "../assets/assets";

const CareersAbout = () => {
  return (
    <section className="py-24">
      <div className="">
        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-bold text-gray-900 text-center mb-24">
          All about Help Scout
        </h2>

        {/* Stats Section */}
        <div className="relative bg-[#E1EEF5] py-30 shadow-lg mt-80">
          {/* Top Cards */}
          <div className="max-w-6xl w-full absolute -top-1/2 left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {/* Card 1 */}
            <div className="bg-[#F6F1EE] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="pt-10">
                <div className="flex flex-col px-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Explore our product
                  </h3>
                  <p className="text-md leading-relaxed pb-5">
                    Discover our simple-yet-powerful tools
                  </p>
                </div>
                <img
                  src={assets.careersAbout1}
                  alt="Explore product"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F6F1EE] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="pt-10">
                <div className="flex flex-col px-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Explore our product
                  </h3>
                  <p className="text-md leading-relaxed pb-5">
                    Discover our simple-yet-powerful tools
                  </p>
                </div>
                <img
                  src={assets.careersAbout2}
                  alt="Explore product"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F6F1EE] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="pt-10">
                <div className="flex flex-col px-4">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Explore our product
                  </h3>
                  <p className="text-md leading-relaxed pb-5">
                    Discover our simple-yet-powerful tools
                  </p>
                </div>
                <img
                  src={assets.careersAbout3}
                  alt="Explore product"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-300 pt-20">
            {/* Stat 1 */}
            <div className="py-2 px-8 text-left">
              <div className="flex items-baseline mb-6">
                <h3 className="text-5xl font-light text-gray-900 mr-3">2011</h3>
                <div className=" rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Founded in 2011, our company powers conversations for over
                12,000 customers.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="py-2 px-8 text-left">
              <div className="flex items-baseline mb-6">
                <h3 className="text-5xl font-light text-gray-900 mr-3">140</h3>
                <div className=" rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Our small-but-mighty team is made of 140 folks in over 115
                cities across the globe.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="py-2 px-8 text-left">
              <div className="flex items-baseline mb-6">
                <h3 className="text-5xl font-light text-gray-900 mr-3">
                  1,830
                </h3>
                <div className=" rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1a3 3 0 000-6h-1m4 6V4a6 6 0 114 4.472M19.5 12A7.5 7.5 0 1012 4.5"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Custom-designed emoji can be found in our Slack workspace. Guess
                you could say we've got a knack for Slack.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="py-2 px-8 text-left">
              <div className="flex items-baseline mb-6">
                <h3 className="text-5xl font-light text-gray-900 mr-3">110</h3>
                <div className=" rounded-full p-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Hours our entire team has spent in the queue during Whole
                Company Support this year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersAbout;
