import React from "react";
import CardsSection from "./CardsSection";
import {
  FaAndroid,
  FaApple,
  FaCheckCircle,
  FaCode,
  FaCogs,
  FaMobileAlt,
} from "react-icons/fa";

const cardsSectionData1 = [
  {
    title: "Expertize, Tested in Battle",
    description:
      "Our team is not just highly trained, but they are also digital marketing veterans who have mastered the art of raising the profile of brands. Every piece of strategy implemented by us is connected with actual working experience and verified outcomes.",
    icon: <FaAndroid className="text-4xl text-white" />,
  },
  {
    title: "Leading the Way Every Time",
    description:
      "We don’t just keep up with the times, we set the pace. The range of our creativity, i.e., the radar is always scanning for the next big thing in digital marketing, allowing your brand to be far ahead of the competition.",
    icon: <FaApple className="text-4xl text-white" />,
  },
  {
    title: "Your Brand, Your Code",
    description:
      "We don’t do cookie-cutter campaigns. We get into the depths of your awesome story, objectives, and problems to produce the perfect solutions for you. That is because the business you have deserves a strategy that is as different as your insight.",
    icon: <FaMobileAlt className="text-4xl text-white" />,
  },
  {
    title: "Truth is in the Yeast",
    description:
      "Our results are what patents we trust. Designed for the purpose of moving the needle, every campaign is executed, optimized, and evaluated in such a way that it is most effective for the lowest one of your bottom lines. We take pleasure in delivering to you your Return on Investments like a report card for your studies in school.",
    icon: <FaCode className="text-4xl text-white" />,
  },
  {
    title: "We Are Crazy About Your Success",
    description:
      "We don't just do the job for your sake – we do it with you and for you. Your triumphs are the reasons for our joys as well, and we will do everything in our power to not only meet your expectations but to exceed them greatly.",
    icon: <FaCheckCircle className="text-4xl text-white" />,
  },
  {
    title: "Working as One Team Rather Than Just Service",
    description:
      "We take on the role of your marketing team beyond your immediate sphere. We treasure your advice, invite your input, and hold that the best outcomes come from genuine cooperation. Every step of the way, your voice is what guides our decisions.",
    icon: <FaCogs className="text-4xl text-white" />,
  },
];

const OurValues = () => (
  <CardsSection
    heading="Why choose Capyngen?"
    subheading="Do you want to work with a digital marketing team that really understands you? So, continuing on from the other things that distinguish us from the crowd, here is another one."
    services={cardsSectionData1}
    headColor="text-white"
    cardBg="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900"
    textSize="text-md"
    sectionBg="bg-gray-900"
    hoverBg=" hover:scale-105"
    textColor="text-white"
    hoverTextColor=""
  />
);

export default OurValues;
