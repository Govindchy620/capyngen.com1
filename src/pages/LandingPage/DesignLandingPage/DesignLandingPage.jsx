import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import OurServices from "./OurServices";
import CTASection from "./CTASection";
import CleanCodeSection from "./CleanCodeSection";
import TechStackSection from "./TechStackSection";
import Process from "./Process";
import DigitalTransformation from "./DigitalTransformation";
import WhyTrustCapyngen from "./WhyTrustCapyngen";

const DesignLandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <DigitalTransformation />
      <WhyTrustCapyngen />
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
