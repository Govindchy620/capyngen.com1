import React from "react";
import HomeAboutUs from "../components/HomeAboutUs";
import HorizontalProcessSection from "../components/HorizontalProcessSection";
import HomeIndustries from "../components/HomeIndustries";
import TestimonialCarousel from "../components/TestimonialCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import BestHeading from "../components/BestHeading";
import WhyChooseUs from "../components/WhyChooseUs";
import LetTalkDiagonal from "../components/LetTalkDiagonal";
import HomeServices from "../components/HomeServices";

const Homepage = () => {
  return (
    <div>
      <HomeAboutUs />

      <HorizontalProcessSection />
      <HomeAboutUs />
      <HomeIndustries />
      <TestimonialCarousel />
      <ServicesCarousel />
      <BestHeading />
      <WhyChooseUs />
      <LetTalkDiagonal />
      <HomeServices />
    </div>
  );
};

export default Homepage;
