import React from "react";
import { assets } from "../assets/assets";
import Banner4 from "../components/Banner4";

const PublicService = () => {
  const slides = [
    {
      image: assets.blockchainBanner1,
      title: "Public Sector IT Solutions Company",
      subtitle:
        "If you are a government agency or a public institution looking for IT solutions in the public sector, Capyngen is the right partner for you. We provide safe and scalable government software development that enables effectiveness, openness, and citizen interaction. Our team is facilitating your digital transformation process from e-government solutions to smart city platforms, and the process is smooth and impressive.",
    },
    {
      image: assets.blockchainBanner2,
      title:
        "Revolutionize Your Business with Cutting-Edge Blockchain Development",
      subtitle:
        "Utilize the Capyngen blockchain technology that is reliable, transparent, and scalable to change your processes, gain customer loyalty, and open up new horizons.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Enterprise Blockchain Solutions",
      subtitle:
        "Improve security, streamline processes, and open up opportunities for large scale corporate activity.",
    },
  ];
  return (
    <div>
      <Banner4 slides={slides} />
    </div>
  );
};

export default PublicService;
