import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import CTASection from "./CTASection";
import CleanCodeSection from "./CleanCodeSection";
import TechStackSection from "./TechStackSection";
import Process from "./Process";

const DesignLandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurServices />
      <CTASection />
      <CleanCodeSection />
      <CTASection />
      <TechStackSection />
      <CTASection />
      <Process />
    </div>
  );
};

export default DesignLandingPage;
