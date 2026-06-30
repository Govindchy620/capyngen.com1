import React, { useEffect, Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

// Admin Services (Lightweight functions)
import { isAdminLoggedIn } from "./pages/AdminPanel/services/authService";
import { ToastProvider } from "./pages/AdminPanel/hooks/useToast";
import usePageTracking from "./hooks/usePageTracking";

// ============================================================================
// 2. LAZY IMPORTS (Code Splitting)
// ============================================================================
// Each of these will now be a separate small JS file, loaded only on demand.

// Main Pages
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
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
const CountryCareers = lazy(() => import("./pages/CountryCareers"));
const CareerSearch = lazy(() => import("./pages/CareerSearch"));
const CareerJobDetail = lazy(() => import("./pages/CareerJobDetail"));
const JobApplicationForm = lazy(() => import("./pages/JobApplicationForm"));
const NewsAndUpdates = lazy(() => import("./pages/NewsAndUpdates"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));

// Landing Pages & Hidden Pages
const LandingPage = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPage/LandingPage"),
);
const LandingPageForeign = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPageUSA/LandingPageForeign"),
);
const LandingPageUAE = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPageUAE/LandingPageUAE"),
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
const GreetingsPageForeign = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPageUSA/GreetingsPageForeign"),
);
const GreetingsPageUAE = lazy(
  () => import("./pages/LandingPage/DigitalMarketingLandingPageUAE/GreetingsPageUAE"),
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
const Settings = lazy(() => import("./pages/AdminPanel/components/Settings"));

const ProtectedRoute = ({ children }) => {
  const loggedIn = isAdminLoggedIn();
  if (!loggedIn) return <Navigate to="/admin-login" replace />;
  return children;
};

const PageLoader = () => (
  <div style={{ height: "100vh", backgroundColor: "#050505" }}></div>
);

const injectScript = (src, { id, async = true, defer = false } = {}) => {
  if (id && document.getElementById(id)) return;
  if (!id && document.querySelector(`script[src="${src}"]`)) return;

  const script = document.createElement("script");
  script.src = src;
  script.async = async;
  script.defer = defer;
  if (id) script.id = id;
  document.head.appendChild(script);
};

const runAfterInitialPaint = (callback) => {
  let cleanupIdle = () => {};
  const frameId = window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(callback, { timeout: 2500 });
        cleanupIdle = () => window.cancelIdleCallback?.(idleId);
        return;
      }

      const timeoutId = window.setTimeout(callback, 1200);
      cleanupIdle = () => window.clearTimeout(timeoutId);
    });
  });

  return () => {
    window.cancelAnimationFrame(frameId);
    cleanupIdle();
  };
};

const loadMarketingScripts = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  injectScript("https://www.googletagmanager.com/gtm.js?id=GTM-NB2SNHDC", {
    id: "gtm-script",
  });
  injectScript("https://www.googletagmanager.com/gtag/js?id=AW-17183563041", {
    id: "gtag-aw-script",
  });

  window.gtag("js", new Date());
  window.gtag("config", "AW-17183563041");
  window.gtag("config", "G-57J9W85WBB");

  if (!window.fbq) {
    const fbq = function () {
      fbq.callMethod
        ? fbq.callMethod.apply(fbq, arguments)
        : fbq.queue.push(arguments);
    };
    window.fbq = fbq;
    window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    injectScript("https://connect.facebook.net/en_US/fbevents.js", {
      id: "meta-pixel-script",
    });
    fbq("init", "870013968909327");
    fbq("track", "PageView");
  }

  injectScript("https://t.contentsquare.net/uxa/730ef13edd313.js", {
    id: "contentsquare-script",
    defer: true,
  });

  window._tfa = window._tfa || [];
  window._tfa.push({ notify: "event", name: "page_view", id: 1961592 });
  injectScript("//cdn.taboola.com/libtrc/unip/1961592/tfa.js", {
    id: "tb_tfa_script",
  });
};

const AppContent = () => {
  const location = useLocation();
  usePageTracking();

  const noLayoutRoutes = [
    "/digital-marketing-landing-page",
    "/digital-marketing-landing-page-uae",
    "/digital-marketing-landing-page-usa",
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
      {!hideLayout && (
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
      )}

      <div style={{ minHeight: "100vh", width: "100%" }}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/custom-ai-solutions" element={<CustomAiSolution />} />
            <Route
              path="/ecommerce-solutions"
              element={<ECommerceSolution />}
            />
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
            <Route
              path="/data-analytics-services"
              element={<DataAnalytics />}
            />
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
            <Route path="/country-careers" element={<CountryCareers />} />
            <Route path="/career-search" element={<CareerSearch />} />
            <Route path="/career-job-detail" element={<CareerJobDetail />} />
            <Route path="/job-application" element={<JobApplicationForm />} />
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
              path="/digital-marketing-landing-page-usa"
              element={<LandingPageForeign />}  
            />
            <Route
              path="/digital-marketing-landing-page-uae"
              element={<LandingPageUAE />}  
            />
            <Route
              path="/software-development-landing-page"
              element={<SoftwareDevelopmentLandingPage />}
            />
            <Route
              path="/design-landing-page"
              element={<DesignLandingPage />}
            />
            <Route path="/greetings" element={<GreetingsPage />} />
            <Route path="/greetings-offer" element={<GreetingsPageForeign />} />
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
        </Suspense>
      </div>

      {!hideLayout && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </>
  );
};

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [loadingState, setLoadingState] = useState({
    progress: 0,
    message: "Configuring core modules...",
    isComplete: false,
  });

  useEffect(() => {
    return runAfterInitialPaint(loadMarketingScripts);
  }, []);

  useEffect(() => {
    if (!showPreloader) return;

    const startedAt = performance.now();
    const minVisibleMs = 750;
    const fallbackReadyMs = 1600;
    let rafId = null;
    let hideTimeoutId = null;
    let lastStateUpdate = 0;
    let completed = false;
    let loaded = document.readyState === "complete";

    const milestoneMessage = (progress) => {
      if (progress >= 100) return "Ready";
      if (progress >= 75) return "Finalizing assets...";
      if (progress >= 50) return "Preparing experience...";
      if (progress >= 25) return "Optimizing rendering...";
      return "Configuring core modules...";
    };

    const complete = () => {
      if (completed) return;
      completed = true;
      setLoadingState({
        progress: 100,
        message: "Ready",
        isComplete: true,
      });
      hideTimeoutId = window.setTimeout(() => setShowPreloader(false), 700);
    };

    const tick = (now) => {
      const elapsed = now - startedAt;
      const progressCap = loaded ? 98 : 88;
      const progress = Math.min(progressCap, (elapsed / minVisibleMs) * progressCap);

      if (now - lastStateUpdate > 50) {
        lastStateUpdate = now;
        setLoadingState({
          progress: Number(progress.toFixed(2)),
          message: milestoneMessage(progress),
          isComplete: false,
        });
      }

      if (loaded && elapsed >= minVisibleMs) {
        complete();
        return;
      }

      rafId = window.requestAnimationFrame(tick);
    };

    const handleLoad = () => {
      loaded = true;
    };

    if (!loaded) window.addEventListener("load", handleLoad, { once: true });
    const fallbackId = window.setTimeout(handleLoad, fallbackReadyMs);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(fallbackId);
      window.clearTimeout(hideTimeoutId);
      window.removeEventListener("load", handleLoad);
    };
  }, [showPreloader]);

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
      {showPreloader && <Preloader state={loadingState} />}
    </Router>
  );
};

export default App;
