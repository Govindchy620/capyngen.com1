import ConversionCTA from "./ConversionCTA";
import FinalCTA from "./FinalCTA";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PerfectForCompanies from "./PerfectForCompanies";
import ProblemsSolved from "./ProblemsSolved";
import RealResults from "./RealResults";
import ServicesSection from "./ServicesSection";
import WhyCapyngen from "./WhyCapyngen";
import BusinessImpactStats from "./BusinessImpactStats";
import WorkProcess from "./WorkProcess";

function DesignLandingPage() {
  return (
    <>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="stats">
        <BusinessImpactStats />
      </section>

      <section id="problems">
        <ProblemsSolved />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="why-capyngen">
        <WhyCapyngen />
      </section>

      <section id="process">
        <WorkProcess />
      </section>

      <section id="industries">
        <PerfectForCompanies />
      </section>

      <section id="results">
        <RealResults />
      </section>

      <section id="consultation">
        <ConversionCTA />
      </section>

      <section id="contact">
        <FinalCTA />
      </section>
    </>
  );
}

export default DesignLandingPage;
