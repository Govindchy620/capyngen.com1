import React from "react";
import JoinUs from "../components/JoinUs";
import CareersAbout from "../components/CareersAbout";
import CareersFeatures from "../components/CareersFeatures";
import FAQSection2 from "../components/FAQSection2";
import HiringProcess from "../components/HiringProcess";
import ScrollRevealEffect from "../components/ScrollRevealEffect";

const Careers = () => {
  const faqItems = [
    {
      question: "Value add",
      answer:
        "You’ll have a video call with the hiring manager to get to know you and see if you have potential to be a great addition to the team.",
    },
    {
      question: "What is the minimum deposit requirement?",
      answer:
        "PrimeForex Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method. ",
    },
    {
      question: "Are there any fees associated with depositing funds?",
      answer: "No, PrimeForex Markets charges no fees for depositing funds.",
    },
  ];

  return (
    <div>
      <JoinUs />
      <CareersAbout />
      <CareersFeatures />
      <FAQSection2
        title="Our Hiring Process"
        desc="Learn about our hiring process and how it aligns with our remote culture."
        items={faqItems}
      />
      <HiringProcess />
    </div>
  );
};

export default Careers;
