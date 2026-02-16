import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import WhyChooseCapyngen from "./WhyChooseCapyngen";
import ExitPopup from "./ExitPopup";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import OfferSection from "./OfferSection";
import Services from "./Services";
import WhoCanBenefit from "./WhoCanBenefit";
import NextSteps from "./NextSteps";
import Footer from "./Footer";
import ExplosiveGrowth from "./ExplosiveGrowth";
import GameChanger from "./GameChanger";
import GrowthPipeline from "./GrowthPipeline";

const LandingPage = () => {
  useEffect(() => {
    // Load gtag script dynamically
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-11496002695";
    script.async = true;
    document.head.appendChild(script);

    // Inline script
    const scriptInline = document.createElement("script");
    scriptInline.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11496002695');
    `;
    document.head.appendChild(scriptInline);
  }, []);

  return (
    <div className="overflow-hidden scroll-smooth">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11496002695"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-11496002695');
      `,
          }}
        />
      </Helmet>
      <Navbar />
      <ExitPopup />
      <div id="home"></div>
      <Hero />
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
    </div>
  );
};

export default LandingPage;
