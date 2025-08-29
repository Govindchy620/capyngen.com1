import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const NewsAndUpdates = () => {
  return (
    <div>
      <Banner
        title="News & Updates"
        overlayBg="bg-black/70"
        backgroundImage={assets.bg1}
        description="Unlock the Power of App Presence with our Professional Appsite Designing Service! Elevate Your Online Presence with Stunning Appsite Designs."
      />
      <ArticleGrid />
    </div>
  );
};

export default NewsAndUpdates;
