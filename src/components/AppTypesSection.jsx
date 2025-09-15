import React from "react";
import {
  FaApple,
  FaAndroid,
  FaVrCardboard,
  FaNetworkWired,
} from "react-icons/fa";

const appTypes = [
  {
    title: "iOS App Development",
    description:
      "High-performance iPhone and iPad apps with seamless functionality, robust security, and elegant designs for Apple users.",
    icon: <FaApple className="text-4xl text-white" />,
  },
  {
    title: "Android App Development",
    description:
      "Scalable and optimized Android apps powered by the latest frameworks, delivering speed, reliability, and advanced features.",
    icon: <FaAndroid className="text-4xl text-white" />,
  },
  {
    title: "AR/VR/XR App Development",
    description:
      "Immersive AR, VR, and XR applications that redefine interaction and maximize engagement across industries.",
    icon: <FaVrCardboard className="text-4xl text-white" />,
  },
  {
    title: "IoT-Based Applications",
    description:
      "Smart IoT apps that connect devices, enable real-time insights, and enhance efficiency across multiple sectors.",
    icon: <FaNetworkWired className="text-4xl text-white" />,
  },
];

const AppTypesSection = () => {
  return (
    <section className="bg-gray-900 text-white pt-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Advanced Portfolio of Custom Mobile Application Solutions
        </h1>
        <p className="mt-6 mb-12 max-w-4xl mx-auto text-lg">
          We craft powerful and scalable custom mobile apps across Android, iOS,
          hybrid, and AI-driven platforms. From enterprise solutions to
          consumer-focused applications, our portfolio ensures secure,
          innovative, and seamless mobile experiences tailored to your business
          needs.
        </p>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 relative">
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
              <p className="text-gray-300 text-sm">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTypesSection;
