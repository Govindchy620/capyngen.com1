import React from "react";
import { Users, Laptop, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Professional Team",
    description:
      "Our experienced developers craft seamless and innovative solutions tailored to your business needs.",
  },
  {
    icon: <Laptop className="w-10 h-10 text-blue-500" />,
    title: "Customized Website Designs",
    description:
      "We design impactful websites customized to your unique business requirements and goals.",
  },
  {
    icon: <Award className="w-10 h-10 text-blue-500" />,
    title: "Quality Services",
    description:
      "Leveraging the latest UI/UX trends, we deliver designs that help you stand out from competitors.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-blue-500" />,
    title: "Client Support",
    description:
      "Round-the-clock client support ensures reliable services that build long-term trust.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}

        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Why Choose Us
        </h1>
        <p className="mt-4 max-w-2xl text-lg mx-auto text-gray-300">
          We create impactful digital experiences that help businesses grow. Our
          team blends creativity, strategy, and technology to craft innovative
          and user-friendly solutions.
        </p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-blue-500/40"
            >
              <div className="flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
