import React, { useEffect, useRef } from "react";
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
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("h1").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // when top of h1 hits 80% of viewport
            toggleActions: "play none none none", // play only once
            markers: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <div className="overflow-x-hidden" ref={containerRef}>
      <Navbar />
      <div>
        <Homepage />
      </div>
      <Footer />
    </div>
  );
};

export default App;
