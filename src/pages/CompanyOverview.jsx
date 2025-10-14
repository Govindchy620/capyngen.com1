import React from "react";
import AboutSection from "../components/AboutSection";
import OurValues from "../components/OurValues";
import AtAGlance from "../components/AtAGlance";
import CustomerCountries from "../components/CustomerCountries";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";

const CompanyOverview = () => {
  const faqItems = [
    {
      question: "How long does it take for funds to show in my wallet?",
      answer:
        "The time it takes for funds to appear in your wallet depends on the deposit method. Most funding methods are instantaneous. ",
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
      <Banner
        title="Company Overview"
        overlayBg="bg-black/70"
        backgroundImage={assets.companyOverview}
        description="Unlock the Power of App Presence with our Professional Appsite Designing Service! Elevate Your Online Presence with Stunning Appsite Designs."
      />
      <AboutSection />
      <OurValues />
      <AtAGlance />
      <CustomerCountries />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default CompanyOverview;
