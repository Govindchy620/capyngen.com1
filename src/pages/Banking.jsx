import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import SeoToolsSection from "../components/SeoToolsSection";
import SeoStatsSection from "../components/SeoStatsSection";
import Timeline from "../components/Timeline";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import StartupAgency from "../components/StartupAgency";
import SeoAgency from "../components/SeoAgency";

const Industries = () => {
  return (
    <div className="overflow-x-hidden">
      <ExpandableGallery />
      <SeoToolsSection />
      <SeoStatsSection />
      <Timeline />
      <CreativeAgencyFAQ />
      <StartupAgency />
      <SeoAgency />
    </div>
  );
};

export default Industries;
