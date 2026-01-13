import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import WhyChooseCapyngen from "./WhyChooseCapyngen";
import ExitPopup from "./ExitPopup";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Services from "./Services";
import Strategy from "./Strategy";
import WhatMakesUsDifferent from "./WhatMakesUsDifferent";
import Audience from "./Audience";
import Footer from "./Footer";

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
      <div id="whychoose"></div>
      <WhyChooseCapyngen />
      <div id="services"></div>
      <Services />
      <div id="strategy"></div>
      <Strategy />
      <div id="different"></div>
      <WhatMakesUsDifferent />
      <div id="audience"></div>
      <Audience />

      <div id="about"></div>
      <Footer />
    </div>
  );
};

export default LandingPage;
