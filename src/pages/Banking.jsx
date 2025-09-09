import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import SeoToolsSection from "../components/SeoToolsSection";
import SeoStatsSection from "../components/SeoStatsSection";
import Timeline from "../components/Timeline";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import StartupAgency from "../components/StartupAgency";
import SeoAgency from "../components/SeoAgency";
import {
  FaBuilding,
  FaTasks,
  FaStore,
  FaPuzzlePiece,
  FaMoneyBillWave,
  FaCogs,
} from "react-icons/fa";
import {
  FaUserTie,
  FaHome,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";

const Industries = () => {
  const servicesData = [
    {
      image: assets.bg1,
      title: "Custom Real Estate CRM Development",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "Property Management Systems",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "Real Estate ERP Solutions",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "Real Estate Marketplace Development",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "MLS Integration Services",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "Real Estate Investment Software",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "Real Estate Marketplace Development",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "MLS Integration Services",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
    {
      image: assets.bg1,
      title: "Real Estate Investment Software",
      desc: "Get a tailored real estate CRM to manage customer relationships efficiently, track business leads, and streamline business communication. We build with ASP.NET MVC, SQL, IIS, Azure, Avoma, etc technologies.",
    },
  ];

  const typesData = [
    {
      icon: <FaBuilding />,
      title: "Property Listing Apps",
      desc: "RichestSoft’s dedicated real estate app developers build and deploy high-end property listing applications suitable for Android, iOS, and cross-platform use.",
    },
    {
      icon: <FaUserFriends />,
      title: "Tenant and Landlord Apps",
      desc: "Collect rent, manage properties, renew/end possession, raise requests.",
    },
    {
      icon: <FaGavel />,
      title: "Auction Apps",
      desc: "Rich and secure real estate auction apps with transparent bidding.",
    },
    {
      icon: <FaHome />,
      title: "Homebuyer Apps",
      desc: "Mobile apps integrated with AI to observe buyer behavior.",
    },
    {
      icon: <FaUserTie />,
      title: "Agent Management Apps",
      desc: "Manage property agents, commissions, listings, and possession updates.",
    },
    {
      icon: <FaGlobe />,
      title: "Metaverse Real Estate",
      desc: "Take your real estate business into the Metaverse virtual platform.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Real Estate Investment Apps",
      desc: "AI-powered investment apps with secure payment gateways.",
    },
    {
      icon: <FaStore />,
      title: "Rental Management Apps",
      desc: "Manage rental listings, tenants, and rental agreements efficiently.",
    },
  ];

  return (
    <div className="">
      <ExpandableGallery />
      <IndustryServices
        heading="Real Estate Software Development Services"
        subheading="Get high-end real estate software development services from experienced developers."
        services={servicesData}
      />
      <TypesWeDevelop
        heading="Types of Real Estate Apps We Develop for Businesses"
        subheading="RichestSoft provides a wide range of real estate apps to launch a business on the online marketplace."
        buttonText="Let's Contact"
        image="https://via.placeholder.com/300x550.png" // replace with actual phone image
        types={typesData}
      />
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
