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
import HomeBlogs from "../components/HomeBlogs";
import HeroSection from "../components/HeroSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <HomeAboutUs />
      <WhyChooseUs />
      <HorizontalProcessSection />
      <ServicesCarousel />
      <HomeServices />
      <HomeIndustries />
      <TestimonialCarousel />
      <BestHeading />
      <LetTalkDiagonal />
      <HomeBlogs />
    </div>
  );
};

export default Homepage;
