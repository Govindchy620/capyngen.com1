import React from "react";
import {
  FaApple,
  FaAndroid,
  FaVrCardboard,
  FaNetworkWired,
} from "react-icons/fa";

const appTypes = [
  {
    title: "Business Operations",
    description:
      "Through enterprise app development solutions, workflow can be simplified.",
    icon: <FaApple className="text-4xl text-white" />,
  },
  {
    title: "E-Commerce",
    description:
      "Your products can be marketed directly through custom app development services.",
    icon: <FaAndroid className="text-4xl text-white" />,
  },
  {
    title: "Social Interaction",
    description: "Social networking apps can be used for community engagement.",
    icon: <FaVrCardboard className="text-4xl text-white" />,
  },
  {
    title: "Education and Healthcare",
    description:
      "Remote learning and telemedicine can be the solutions offered.",
    icon: <FaNetworkWired className="text-4xl text-white" />,
  },
];

const AppTypesSection = () => {
  return (
    <section className="bg-gray-900 text-white pt-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-center">
          Understanding App Development
        </h1>
        <h2 className="mt-10 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          What is App Development?
        </h2>
        <p className="mt-2 mb-12 max-w-5xl text-lg">
          App development refers to the process of coming up with software
          applications that are intended to work with portable digital gadgets.
          Mobile apps focus on speed, usability, and efficiency rather than the
          features of traditional desktop programs, thus ensuring that users get
          quite smooth experiences on their smartphones and tablets.
        </p>
        <h2 className="mt-10 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Mobile apps can be multifunctional:
        </h2>

        <div className="grid mt-10 gap-2 sm:grid-cols-2 lg:grid-cols-4 relative">
          {appTypes.map((app, index) => (
            <div
              key={index}
              className={`bg-gray-800 h-58 hover:bg-[#132b6f] transition p-6 shadow-md text-left
                relative`}
              style={{ marginTop: `${index * 30}px` }} // shift each card lower
            >
              <div className="mb-4">{app.icon}</div>
              <h3 className="text-lg font-semibold mb-2 underline">
                {app.title}
              </h3>
              <p className="text-gray-300 text-md">{app.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <p className="text-xl">
            <span className="font-semibold">Keyword Integration:</span> A top
            mobile app development company in India realizes these needs and
            guarantees high-quality mobile application testing for seamless
            performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppTypesSection;
