import React from "react";
import Homepage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebDevelopment from "./pages/WebDevelopment";
import ScrollToTop from "./components/ScrollToTop";
import Industries from "./pages/Industries";
import ContactUs from "./pages/ContactUs";
import Banking from "./pages/Banking";
import AppDevelopment from "./pages/AppDevelopment";
import CustomAiSolution from "./pages/CustomAiSolution";
import ECommerceSolution from "./pages/ECommerceSolution";
import BlockchainDevelopment from "./pages/BlockchainDevelopment";
import DevOpsSolutions from "./pages/DevOpsSolutions";
import ApplicationSolutions from "./pages/ApplicationSolutions";
import CrmManagementSoftware from "./pages/CrmManagementSoftware";
import Careers from "./pages/Careers";
import CompanyOverview from "./pages/CompanyOverview";
import NewsAndUpdates from "./pages/NewsAndUpdates";
import UiUxDesign from "./pages/UiUxDesign";
import WebsiteDesign from "./pages/WebsiteDesign";
import BrandingIdentityDesign from "./pages/BrandingIdentityDesign";
import EcommerceDesign from "./pages/EcommerceDesign";
import CMSDesign from "./pages/CMSDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
import SEO from "./pages/SEO";
import SMM from "./pages/SMM";
import PPC from "./pages/PPC";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import Cybersecurity from "./pages/Cybersecurity";
import NetworkSolutionServices from "./pages/NetworkSolutionServices";
import EnterpriseSolutions from "./pages/EnterpriseSolutions";
import DataAnalytics from "./pages/DataAnalytics";
import Consulting from "./pages/Consulting";
import Education from "./pages/Education";
import CapitalMarket from "./pages/CapitalMarket";
import LifeScience from "./pages/LifeScience";
import HealthcareAndFitness from "./pages/HealthcareAndFitness";
import EnergyResourcesUtilities from "./pages/EnergyResourcesUtilities";
import ManufacturingAutomotive from "./pages/ManufacturingAutomotive";
import PublicService from "./pages/PublicService";
import ECommerceIndustry from "./pages/ECommerceIndustry";
import HighTech from "./pages/HighTech";
import TravelAndLogistics from "./pages/TravelAndLogistics";
import CpgDistribution from "./pages/CpgDistribution";
import Gaming from "./pages/Gaming";
import CommunicationMediaIT from "./pages/CommunicationMediaIT";
import Insurance from "./pages/Insurance";
import RealEstate from "./pages/RealEstate";

// Register ScrollTrigger once for the entire application
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/custom-ai-solutions" element={<CustomAiSolution />} />
          <Route path="/ecommerce-solutions" element={<ECommerceSolution />} />
          <Route
            path="/blockchain-development"
            element={<BlockchainDevelopment />}
          />
          <Route path="/devops-solutions" element={<DevOpsSolutions />} />
          <Route
            path="/application-solutions"
            element={<ApplicationSolutions />}
          />
          <Route
            path="/crm-management-software"
            element={<CrmManagementSoftware />}
          />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route
            path="/branding-and-identity-design"
            element={<BrandingIdentityDesign />}
          />
          <Route path="/ecommerce-design" element={<EcommerceDesign />} />
          <Route path="/cms-design" element={<CMSDesign />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/smm" element={<SMM />} />
          <Route path="/ppc" element={<PPC />} />
          <Route
            path="/artificial-intelligence"
            element={<ArtificialIntelligence />}
          />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route
            path="/network-solutions"
            element={<NetworkSolutionServices />}
          />
          <Route
            path="/enterprise-solutions"
            element={<EnterpriseSolutions />}
          />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/consulting" element={<Consulting />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/banking" element={<Banking />} />
          <Route path="/industries/education" element={<Education />} />
          <Route
            path="/industries/capital-market"
            element={<CapitalMarket />}
          />
          <Route path="/industries/life-science" element={<LifeScience />} />
          <Route
            path="/industries/healthcare-fitness"
            element={<HealthcareAndFitness />}
          />
          <Route
            path="/industries/energy-resources-utilities"
            element={<EnergyResourcesUtilities />}
          />
          <Route
            path="/industries/manufacturing-and-automotive"
            element={<ManufacturingAutomotive />}
          />
          <Route
            path="/industries/public-service"
            element={<PublicService />}
          />
          <Route
            path="/industries/e-commerce"
            element={<ECommerceIndustry />}
          />
          <Route path="/industries/high-tech" element={<HighTech />} />
          <Route
            path="/industries/travel-logistics"
            element={<TravelAndLogistics />}
          />
          <Route
            path="/industries/cpg-distribution"
            element={<CpgDistribution />}
          />
          <Route path="/industries/insurance" element={<Insurance />} />
          <Route
            path="/industries/communication-media-it"
            element={<CommunicationMediaIT />}
          />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/gaming" element={<Gaming />} />

          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news-and-updates" element={<NewsAndUpdates />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
