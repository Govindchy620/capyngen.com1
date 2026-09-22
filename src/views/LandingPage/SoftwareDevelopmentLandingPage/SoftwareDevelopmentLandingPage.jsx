import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CTASection from "./CTASection";
import DigitalTransformation from "./DigitalTransformation";
import WhyTrustCapyngen from "./WhyTrustCapyngen";
import DevelopmentProcess from "./DevelopmentProcess";
import FullSizeImageSection from "../../../components/FullSizeImageSection";
import { assets } from "../../../assets/assets";
import StatsSection from "./StatsSection";
import ExitPopup from "./ExitPopup";

const SoftwareDevelopmentLandingPage = () => {
  return (
    <div className="bg-black max-w-screen overflow-hidden">
      <Navbar />
      <ExitPopup />

      <div id="home" className="scroll-mt-24"></div>
      <HeroSection />

      <StatsSection />

      <div id="ourservices" className="scroll-mt-24"></div>
      <DigitalTransformation />

      <div className="mt-16"></div>
      <FullSizeImageSection
        backgroundImage={assets.webDevFullSize}
        title="Transform your online presence with Capyngen"
        description="We are committed to provide top-notch software development services that attract and retain customers."
        buttonText="CONTACT US"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <div className="mt-16"></div>

      <div id="whytrustcapyngen" className="scroll-mt-24"></div>
      <WhyTrustCapyngen />

      <div id="developmentprocess" className="scroll-mt-24"></div>
      <DevelopmentProcess />

      <div className="mt-16"></div>
      <FullSizeImageSection
        backgroundImage={assets.webDevFullSize2}
        title="Create powerful websites that perform"
        description="Our main focus is on your business; thus, we make sure your website is responsive, fast, and scalable."
        buttonText="Get Started"
        buttonLink="https://www.capyngen.com/"
        overlayColor="bg-black/40"
      />
      <div className="mt-16"></div>

      <div id="contact" className="scroll-mt-24"></div>
      <CTASection />
    </div>
  );
};

export default SoftwareDevelopmentLandingPage;
