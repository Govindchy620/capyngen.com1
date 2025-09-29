import React from "react";
import {
  FaApple,
  FaAndroid,
  FaVrCardboard,
  FaNetworkWired,
} from "react-icons/fa";

const AppTypesSection = ({
  heading = "Understanding App Development",
  subheading1 = "What is App Development?",
  desc = "App development refers to the process of coming up with software applications that are intended to work with portable digital gadgets. Mobile apps focus on speed, usability, and efficiency rather than the features of traditional desktop programs, thus ensuring that users get quite smooth experiences on their smartphones and tablets.",
  cardHeight = "h-58",
  subheading2 = "What is App Development?",
  appTypes = [
    {
      title: "Business Operations",
      description:
        "Through enterprise app development solutions, workflow can be simplified.",
      icon: <FaApple className="text-4xl text-white" aria-hidden="true" />,
    },
    {
      title: "E-Commerce",
      description:
        "Your products can be marketed directly through custom app development services.",
      icon: <FaAndroid className="text-4xl text-white" aria-hidden="true" />,
    },
    {
      title: "Social Interaction",
      description:
        "Social networking apps can be used for community engagement.",
      icon: (
        <FaVrCardboard className="text-4xl text-white" aria-hidden="true" />
      ),
    },
    {
      title: "Education and Healthcare",
      description:
        "Remote learning and telemedicine can be the solutions offered.",
      icon: (
        <FaNetworkWired className="text-4xl text-white" aria-hidden="true" />
      ),
    },
  ],
}) => {
  return (
    <section
      className="bg-gray-900 text-white pt-12 px-6 md:px-12 min-h-[90vh]"
      aria-labelledby="app-types-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h1
          id="app-types-heading"
          className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl text-center"
        >
          {heading}
        </h1>
        <h2 className="mt-10 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          {subheading1}
        </h2>
        <p className="mt-2 mb-12 max-w-5xl text-lg leading-relaxed">{desc}</p>
        <h2 className="mt-10 text-2xl font-semibold sm:text-3xl lg:text-4xl">
          {subheading2}
        </h2>

        <div
          className="grid mt-10 gap-4 sm:grid-cols-2 lg:grid-cols-4 relative"
          role="list"
        >
          {appTypes.map((app, index) => (
            <article
              key={index}
              className={`bg-gray-800 ${cardHeight} hover:bg-[#132b6f] transition p-6 shadow-md text-left relative cursor-default`}
              style={{ marginTop: `${index * 30}px` }}
              tabIndex={0}
              role="listitem"
              aria-labelledby={`app-type-title-${index}`}
              aria-describedby={`app-type-desc-${index}`}
            >
              <div className="mb-4">{app.icon}</div>
              <h3
                id={`app-type-title-${index}`}
                className="text-lg font-semibold mb-2 underline"
              >
                {app.title}
              </h3>
              <p
                id={`app-type-desc-${index}`}
                className="text-gray-300 text-md leading-relaxed"
              >
                {app.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTypesSection;
