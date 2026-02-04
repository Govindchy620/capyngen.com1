import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ============================================================================
// 1. STATIC IMPORTS (Critical Core Assets Only)
// ============================================================================
// We keep these static so the "shell" of the app loads instantly.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

// Admin Services (Lightweight functions)
import { isAdminLoggedIn } from "./pages/AdminPanel/services/authService";
import { ToastProvider } from "./pages/AdminPanel/hooks/useToast";

// ============================================================================
// 2. LAZY IMPORTS (Code Splitting)
// ============================================================================
// Each of these will now be a separate small JS file, loaded only on demand.

// Main Pages
const Homepage = lazy(() => import("./pages/Homepage"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const AppDevelopment = lazy(() => import("./pages/AppDevelopment"));
const CustomAiSolution = lazy(() => import("./pages/CustomAiSolution"));
const ECommerceSolution = lazy(() => import("./pages/ECommerceSolution"));
const BlockchainDevelopment = lazy(
  () => import("./pages/BlockchainDevelopment"),
);
const DevOpsSolutions = lazy(() => import("./pages/DevOpsSolutions"));
const ApplicationSolutions = lazy(() => import("./pages/ApplicationSolutions"));
const CrmManagementSoftware = lazy(
  () => import("./pages/CrmManagementSoftware"),
);

// Design Services
const UiUxDesign = lazy(() => import("./pages/UiUxDesign"));
const WebsiteDesign = lazy(() => import("./pages/WebsiteDesign"));
const BrandingIdentityDesign = lazy(
  () => import("./pages/BrandingIdentityDesign"),
);
const EcommerceDesign = lazy(() => import("./pages/EcommerceDesign"));
const CMSDesign = lazy(() => import("./pages/CMSDesign"));

// Marketing Services
const DigitalMarketing = lazy(() => import("./pages/DigitalMarketing"));
const SEO = lazy(() => import("./pages/SEO"));
const SMM = lazy(() => import("./pages/SMM"));
const PPC = lazy(() => import("./pages/PPC"));

// Tech Services
const ArtificialIntelligence = lazy(
  () => import("./pages/ArtificialIntelligence"),
);
const Cybersecurity = lazy(() => import("./pages/Cybersecurity"));
const NetworkSolutionServices = lazy(
  () => import("./pages/NetworkSolutionServices"),
);
const EnterpriseSolutions = lazy(() => import("./pages/EnterpriseSolutions"));
const DataAnalytics = lazy(() => import("./pages/DataAnalytics"));
const Consulting = lazy(() => import("./pages/Consulting"));

// Industries
const Industries = lazy(() => import("./pages/Industries"));
const Banking = lazy(() => import("./pages/Banking"));
const Education = lazy(() => import("./pages/Education"));
const CapitalMarket = lazy(() => import("./pages/CapitalMarket"));
const LifeScience = lazy(() => import("./pages/LifeScience"));
const HealthcareAndFitness = lazy(() => import("./pages/HealthcareAndFitness"));
const EnergyResourcesUtilities = lazy(
  () => import("./pages/EnergyResourcesUtilities"),
);
const ManufacturingAutomotive = lazy(
  () => import("./pages/ManufacturingAutomotive"),
);
const PublicService = lazy(() => import("./pages/PublicService"));
const ECommerceIndustry = lazy(() => import("./pages/ECommerceIndustry"));
const HighTech = lazy(() => import("./pages/HighTech"));
const TravelAndLogistics = lazy(() => import("./pages/TravelAndLogistics"));
const CpgDistribution = lazy(() => import("./pages/CpgDistribution"));
const Insurance = lazy(() => import("./pages/Insurance"));
const CommunicationMediaIT = lazy(() => import("./pages/CommunicationMediaIT"));
const RealEstate = lazy(() => import("./pages/RealEstate"));
const Gaming = lazy(() => import("./pages/Gaming"));

// Company & Misc
const CompanyOverview = lazy(() => import("./pages/CompanyOverview"));
const Careers = lazy(() => import("./pages/Careers"));
const NewsAndUpdates = lazy(() => import("./pages/NewsAndUpdates"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

// Landing Pages & Hidden Pages
const LandingPage = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPage/LandingPage"),
);
const SoftwareDevelopmentLandingPage = lazy(
  () =>
    import("./pages/LandingPage/SoftwareDevelopmentLandingPage/SoftwareDevelopmentLandingPage"),
);
const DesignLandingPage = lazy(
  () => import("./pages/LandingPage/DesignLandingPage/DesignLandingPage"),
);
const GreetingsPage = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPage/GreetingsPage"),
);
const WebDevelopmentHiddenPage = lazy(
  () => import("./pages/WebDevelopmentHiddenPage"),
);
const AppDevelopmentHiddenPage = lazy(
  () => import("./pages/AppDevelopmentHiddenPage"),
);
const CrmManagementSoftwareHiddenPage = lazy(
  () => import("./pages/CrmManagementSoftwareHiddenPage"),
);

// Admin Panel
const AdminLogin = lazy(
  () => import("./pages/AdminPanel/components/AdminLogin"),
);
const AdminLanding = lazy(
  () => import("./pages/AdminPanel/components/AdminLanding"),
);
const AdminPanel = lazy(
  () => import("./pages/AdminPanel/components/AdminPanel"),
);
const CareerAdminPanel = lazy(
  () => import("./pages/AdminPanel/components/CareerAdminPanel"),
);
const ViewReports = lazy(
  () => import("./pages/AdminPanel/components/ViewReports"),
);
const Settings = lazy(() => import("./pages/AdminPanel/components/Settings")); // Note: Settings was imported in your original code but not used in a route. I'll include it in imports.

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
