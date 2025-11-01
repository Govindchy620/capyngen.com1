import React from "react";
import HeroSection from "./HeroSection";
import { Navbar } from "./Navbar";
import { FeaturesSection } from "./FeaturesSection";
import GetStarted from "./GetStarted";
import { assets } from "../../../assets/assets";
import GrowPresenceSection from "./GrowPresenceSection";
import WhyChooseCapyngen from "./WhyChooseCapyngen";
import CapyngenComparisonTable from "./CapyngenComparisonTable";
import ResultsSection from "./ResultsSection";
import { ServicesSection } from "./ServicesSection";
import TermsAndConditions from "./TermsAndConditions";
import About from "./About";
import ExitPopup from "./ExitPopup";

const LandingPage = () => {
  return (
    <div className="overflow-hidden scroll-smooth">
      <Navbar />
      <ExitPopup />
      <HeroSection />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Trusted by 1000+ Businesses"
        description={[
          "Capyngen has collaborated with global brands, startups, and enterprises to help them achieve exceptional digital success.",
          "We believe every business — big or small — deserves a strong and lasting online presence.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
        textSize="text-lg md:text-xl"
      />

      <FeaturesSection />
      <div id="whychoose"></div>
      <WhyChooseCapyngen />
      <GrowPresenceSection />
      <div id="whycapyngenbetter"></div>
      <CapyngenComparisonTable />
      <ResultsSection />
      <div id="ourservices"></div>
      <ServicesSection />
      <TermsAndConditions />
      <div id="about"></div>
      <About />
    </div>
  );
};

export default LandingPage;
