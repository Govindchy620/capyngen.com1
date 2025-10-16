import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const NewsAndUpdates = () => {
  return (
    <div>
      <Banner
        title="News & Updates"
        overlayBg="bg-black/60"
        backgroundImage={assets.news}
        description=""
      />
      <ArticleGrid />
    </div>
  );
};

export default NewsAndUpdates;
