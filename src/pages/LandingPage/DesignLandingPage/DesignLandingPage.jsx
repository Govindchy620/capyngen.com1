import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CTASection from "./CTASection";
import DigitalTransformation from "./DigitalTransformation";
import WhyTrustCapyngen from "./WhyTrustCapyngen";
import DevelopmentProcess from "./DevelopmentProcess";

const DesignLandingPage = () => {
  return (
    <div className="bg-black max-w-screen overflow-hidden">
      <Navbar />

      <div id="home" className="scroll-mt-24"></div>
      <HeroSection />

      <div id="ourservices" className="scroll-mt-24"></div>
      <DigitalTransformation />

      <div id="whytrustcapyngen" className="scroll-mt-24"></div>
      <WhyTrustCapyngen />

      <div id="developmentprocess" className="scroll-mt-24"></div>
      <DevelopmentProcess />

      <div id="contact" className="scroll-mt-24"></div>
      <CTASection />
    </div>
  );
};

export default DesignLandingPage;
