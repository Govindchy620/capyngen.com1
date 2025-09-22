import React from "react";
import HomeAboutUs from "../components/HomeAboutUs";
import HorizontalProcessSection from "../components/HorizontalProcessSection";
import HomeIndustries from "../components/HomeIndustries";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeServices from "../components/HomeServices";
import HomeBlogs from "../components/HomeBlogs";
import HeroSection from "../components/HeroSection";
import FAQSection from "../components/FAQSection";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import { StickyScroll } from "../components/StickyScroll";
import { TextParallaxContentExample } from "../components/TextParallaxContent";

const Homepage = () => {
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
  const demoContent = [
    {
      title: "Card 1",
      description: "This is the first card’s description.",
      content: (
        <div className="p-4 text-white">🧊 First card content here!</div>
      ),
    },
    {
      title: "Card 2",
      description: "This is the second card’s description.",
      content: (
        <div className="p-4 text-white">🔥 Second card content here!</div>
      ),
    },
    {
      title: "Card 3",
      description: "This is the third card’s description.",
      content: (
        <div className="p-4 text-white">💧 Third card content here!</div>
      ),
    },
  ];

  // useSplitTextAnimation("h1");

  return (
    <div className="relative">
      {/* Fixed Background (HeroSection) */}

      <HeroSection />
      <StickyScroll content={demoContent} />
      <TextParallaxContentExample />
      <HomeAboutUs />
      <WhyChooseUs />
      <HorizontalProcessSection />
      <ServicesCarousel />
      <HomeServices />
      <HomeIndustries />
      <TestimonialCarousel />
      <HomeBlogs />
      <FAQSection items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default Homepage;
