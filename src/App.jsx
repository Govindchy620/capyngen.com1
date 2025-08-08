import React from "react";
import Homepage from "./pages/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once for the entire application
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
