import React from "react";
import ArticleGrid from "../components/ArticleGrid";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import { Helmet } from "react-helmet-async";

const NewsAndUpdates = () => {
  return (
    <div>
      <Helmet>
        <title>
          Capyngen News & Updates | Insights, Announcements & Innovations
        </title>
        <meta
          name="description"
          content="Stay in the loop with the latest from Capyngen — our announcements, digital marketing trends, tech innovations, company milestones and more. Dive into insights that shape the future of digital growth."
        />
        <meta
          name="keywords"
          content="Capyngen News & Updates | Insights, Announcements & Innovations"
        />
      </Helmet>
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
