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
          <Route path="/ai-solutions" element={<CustomAiSolution />} />
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
          <Route path="/industries" element={<Industries />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/industries/banking" element={<Banking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
