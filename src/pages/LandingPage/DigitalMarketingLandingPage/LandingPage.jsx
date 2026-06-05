import React, { Suspense, lazy, useEffect, useState } from "react";
import Hero from "./Hero";

const Navbar = lazy(() => import("./Navbar").then((module) => ({ default: module.Navbar })));
const ExitPopup = lazy(() => import("./ExitPopup"));
const OfferSection = lazy(() => import("./OfferSection"));
const Services = lazy(() => import("./Services"));
const GameChanger = lazy(() => import("./GameChanger"));
const GrowthPipeline = lazy(() => import("./GrowthPipeline"));
const WhyChooseCapyngen = lazy(() => import("./WhyChooseCapyngen"));
const WhoCanBenefit = lazy(() => import("./WhoCanBenefit"));
const ExplosiveGrowth = lazy(() => import("./ExplosiveGrowth"));
const NextSteps = lazy(() => import("./NextSteps"));
const Footer = lazy(() => import("./Footer"));

const SectionFallback = () => null;

const LandingPage = () => {
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(
        () => setShowDeferredSections(true),
        { timeout: 1200 },
      );
      return () => window.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(() => setShowDeferredSections(true), 350);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="overflow-hidden scroll-smooth">
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <div id="home"></div>
      <Hero />
      {showDeferredSections && (
        <Suspense fallback={<SectionFallback />}>
          <ExitPopup />
          <div id="offer"></div>
          <OfferSection />
          <div id="services"></div>
          <Services />
          <div id="gamechanger"></div>
          <GameChanger />
          <div id="process"></div>
          <GrowthPipeline />
          <div id="whychoose"></div>
          <WhyChooseCapyngen />
          <div id="who"></div>
          <WhoCanBenefit />
          <div id="growth"></div>
          <ExplosiveGrowth />
          <div id="nextsteps"></div>
          <NextSteps />
          <Footer />
        </Suspense>
      )}
    </div>
  );
};

export default LandingPage;
