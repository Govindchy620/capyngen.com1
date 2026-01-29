import React, { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import WebDevelopment from "./pages/WebDevelopment";
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
import BlogDetail from "./components/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import LandingPage from "./pages/LandingPage/DigitalMarketingLandingPage/LandingPage";
import WebDevelopmentHiddenPage from "./pages/WebDevelopmentHiddenPage";
import AppDevelopmentHiddenPage from "./pages/AppDevelopmentHiddenPage";
import CrmManagementSoftwareHiddenPage from "./pages/CrmManagementSoftwareHiddenPage";
import GreetingsPage from "./pages/LandingPage/DigitalMarketingLandingPage/GreetingsPage";
import AdminLogin from "./pages/AdminPanel/components/AdminLogin";
import { isAdminLoggedIn } from "./pages/AdminPanel/services/authService";
import AdminLanding from "./pages/AdminPanel/components/AdminLanding";
import AdminPanel from "./pages/AdminPanel/components/AdminPanel";
import CareerAdminPanel from "./pages/AdminPanel/components/CareerAdminPanel";
import ViewReports from "./pages/AdminPanel/components/ViewReports";
import Settings from "./pages/AdminPanel/components/Settings";
import { ToastProvider } from "./pages/AdminPanel/hooks/useToast";
import SoftwareDevelopmentLandingPage from "./pages/LandingPage/SoftwareDevelopmentLandingPage/SoftwareDevelopmentLandingPage";
import DesignLandingPage from "./pages/LandingPage/DesignLandingPage/DesignLandingPage";

import Preloader from "./components/Preloader";

gsap.registerPlugin(ScrollTrigger);

const ProtectedRoute = ({ children }) => {
  const loggedIn = isAdminLoggedIn();
  if (!loggedIn) return <Navigate to="/admin-login" replace />;
  return children;
};

const AppContent = () => {
  const location = useLocation();

  const noLayoutRoutes = [
    "/digital-marketing-landing-page",
    "/design-landing-page",
    "/software-development-landing-page",
    "/greetings",
    "/admin-login",
    "/admin-dashboard",
    "/admin-blogs",
    "/admin-careers",
    "/admin-reports",
    "/admin-settings",
  ];

  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <div style={{ minHeight: "100vh", width: "100%" }}>
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
          <Route path="/ui-ux-design-services" element={<UiUxDesign />} />
          <Route
            path="/website-design-company-india"
            element={<WebsiteDesign />}
          />
          <Route
            path="/branding-identity-design"
            element={<BrandingIdentityDesign />}
          />
          <Route
            path="/ecommerce-website-design"
            element={<EcommerceDesign />}
          />
          <Route path="/cms-website-design" element={<CMSDesign />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/smm" element={<SMM />} />
          <Route path="/ppc" element={<PPC />} />
          <Route
            path="/artificial-intelligence-services"
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
          <Route path="/data-analytics-services" element={<DataAnalytics />} />
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
          <Route path="/news-and-updates/:slug" element={<BlogDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />

          <Route
            path="/digital-marketing-landing-page"
            element={<LandingPage />}
          />
          <Route
            path="/software-development-landing-page"
            element={<SoftwareDevelopmentLandingPage />}
          />
          <Route path="/design-landing-page" element={<DesignLandingPage />} />
          <Route path="/greetings" element={<GreetingsPage />} />
          <Route
            path="/web-development-hidden-page"
            element={<WebDevelopmentHiddenPage />}
          />
          <Route
            path="/app-development-hidden-page"
            element={<AppDevelopmentHiddenPage />}
          />
          <Route
            path="/crm-management-software-hidden-page"
            element={<CrmManagementSoftwareHiddenPage />}
          />

          <Route path="/admin-login" element={<AdminLogin />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <AdminLanding />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-blogs"
            element={
              <ProtectedRoute>
                <ToastProvider>
                  <AdminPanel />
                </ToastProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-careers"
            element={
              <ProtectedRoute>
                <ToastProvider>
                  <CareerAdminPanel />
                </ToastProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-reports"
            element={
              <ProtectedRoute>
                <ViewReports />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeProp, setFadeProp] = useState({ opacity: 1, zIndex: 9999 });

  const [loadingState, setLoadingState] = useState({
    progress: 0,
    message: "Configuring core modules...",
    isComplete: false,
  });

  useEffect(() => {
    if (!isLoading) return;

    const milestoneMessage = (p) => {
      if (p >= 100) return "Ready";
      if (p >= 75) return "Finalizing assets...";
      if (p >= 50) return "Securing quantum link...";
      if (p >= 25) return "Optimizing rendering engine...";
      return "Configuring core modules...";
    };

    let rafId = null;
    let start = performance.now();
    let progress = 0;
    let domLoaded = false;

    const easeOutQuint = (t) => 1 - Math.pow(1 - t, 5);

    // ✅ update only every 66ms (15 FPS) -> NO jitter
    let lastUIUpdate = 0;

    const DURATION_BEFORE_LOAD = 900;
    const DURATION_AFTER_LOAD = 450;

    const tick = (now) => {
      const duration = domLoaded ? DURATION_AFTER_LOAD : DURATION_BEFORE_LOAD;
      const elapsed = Math.max(0, now - start);
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutQuint(t);

      if (!domLoaded) progress = eased * 90;
      else progress = 90 + eased * 10;

      progress = Math.max(0, Math.min(100, progress));
      const stable = Number(progress.toFixed(2));

      // ✅ throttle setState
      if (now - lastUIUpdate > 66 || stable >= 100) {
        lastUIUpdate = now;

        setLoadingState({
          progress: stable,
          message: milestoneMessage(stable),
          isComplete: stable >= 100,
        });
      }

      if (domLoaded && stable >= 100) {
        cancelAnimationFrame(rafId);
        return;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const handleLoad = () => {
      domLoaded = true;
      progress = Math.max(progress, 90);
      start = performance.now();
    };

    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    const fallback = setTimeout(() => handleLoad(), 1800);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(fallback);
      window.removeEventListener("load", handleLoad);
    };
  }, [isLoading]);

  useEffect(() => {
    if ((loadingState?.progress || 0) < 100) return;

    const t1 = setTimeout(() => {
      setFadeProp({ opacity: 0, zIndex: 9999 });

      const t2 = setTimeout(() => {
        setIsLoading(false);
        setFadeProp({ opacity: 0, zIndex: -1 });
        ScrollTrigger.refresh();
      }, 800);

      return () => clearTimeout(t2);
    }, 200);

    return () => clearTimeout(t1);
  }, [loadingState?.progress]);

  return (
    <Router>
      <ScrollToTop />

      <div
        className="preloader-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#050505",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "opacity 0.8s ease-in-out",
          pointerEvents: isLoading ? "auto" : "none",
          ...fadeProp,
        }}
      >
        <Preloader state={loadingState} />
      </div>

      <AppContent />
    </Router>
  );
};

export default App;
