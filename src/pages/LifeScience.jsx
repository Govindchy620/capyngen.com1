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
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
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
import Banner6 from "../components/Banner6";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import BenefitsSection from "../components/BenefitsSection";
import Banner4 from "../components/Banner4";

const LifeScience = () => {
  const faqItems = [
    {
      question: "What are life sciences software solutions?",
      answer:
        "In short, they are software that makes it possible to save time and money in the pharmaceutical, biotechnology, clinical trials, and medical fields.",
    },
    {
      question: "Are you providing clinical trial management software?",
      answer:
        "Indeed we do. To accomplish efficient trial management, we create secure and compliant CTMS platforms.",
    },
    {
      question: "What is the way LIMS can assist Laboratories?",
      answer:
        "First of all, it is humanly error-free process managing and thus greatly improves accuracy of your workflow. Finally, it also gives the sample tracking a speed way of operation.",
    },
    {
      question:
        "Are your technological solutions compatible with rules and regulations?",
      answer:
        "Indeed yes, they comply with HIPAA, FDA, and GDPR standards, which are the references in the field of data security and privacy.",
    },
    {
      question: "Do you provide services for big pharmaceutical companies?",
      answer:
        "Yes, we can provide the pharma IT service that suits the capacity of the pharma IT services for big companies.",
    },
    {
      question:
        "Just to confirm, can you make the software specifically for clinical trials?",
      answer:
        "Sure, we are experienced in creating bespoke CTMS for the difficult trials cases.",
    },
    {
      question: "Do you create digital healthcare solutions?",
      answer:
        "Yes, e.g., telemedicine platforms, patient portals, and the hospital management systems.",
    },
    {
      question:
        "What measures do you take to guarantee that patient data will be kept private?",
      answer:
        "The main protective measures are encryption, the implementation of standards for compliance, and control over user identification.",
    },
    {
      question: "Is it possible for your software to connect to IoT gadgets?",
      answer:
        "For instance, the software can work with wearables, instruments in the lab, and devices for monitoring your health.",
    },
    {
      question: "What kind of technologies are you dealing with?",
      answer:
        "We include AI, ML, cloud, IoT, and secure analytics in the portfolio of our solutions.",
    },
    {
      question:
        "Can it be considered a research tool that is scalable from you?",
      answer:
        "Yes, the functionalities and features of our software evolve to match with your institute's requirements.",
    },
    {
      question: "Do you partner with the medical research industry?",
      answer:
        "Yes, we develop medical research software for data analysis and reporting.",
    },
    {
      question: "How long is the average development time?",
      answer:
        "Roughly 8–16 weeks with the timeline being flexible and dependent on the project complexity.",
    },
    {
      question:
        "For what reason should one decide to work with Capyngen for life sciences software?",
      answer:
        "We do it by merging domain expertise, innovation, and security to provide clients with the solutions they can trust.",
    },
    {
      question:
        "Can we expect you to keep supporting the software after the release?",
      answer:
        "Yes, the customer care team is always present to handle all requests as well as perform updates and carry out maintenance throughout the whole time the product functions.",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Cloud-enabled platforms aimed at scalability and efficiency",
      desc: "",
    },
    {
      image: assets.bg1,
      title:
        "AI and Machine Learning for forecasting analytics and data insights",
      desc: "",
    },
    {
      image: assets.bg1,
      title:
        "Information safety and regulatory compliance with HIPAA, FDA, and GDPR",
      desc: "",
    },
    {
      image: assets.bg1,
      title:
        "The assimilation of IoT and wearable devices for live data capturing",
      desc: "",
    },
    {
      image: assets.bg1,
      title:
        "The use of flexible software design for on-the-fly development and implementation",
      desc: "",
    },
    {
      image: assets.bg1,
      title:
        "The use of sophisticated data analysis for medical research and healthcare decision-making",
      desc: "",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Clinical Trial Management Software (CTMS)",
      description:
        "You can hold the reins of your trials starting from planning to reporting. By this way, compliance will be assured, progress will be tracked, and data will be managed in a time saving manner.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Laboratory Information Management Systems (LIMS)",
      description:
        "Through automation of lab procedures, raising the standard of sample tracking, and executing data accuracy in biotech, and pharma sectors.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Digital Healthcare Solutions",
      description:
        "The patient and telemedicine sectors can be transformed entirely through using perfectly meshed digital platforms that will handle care and management.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Pharma IT Services",
      description:
        "IT assistance that covers the whole spectrum of pharmaceutical companies through processes such as the product line, security, and maintenance.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Medical Research Software",
      description:
        "The software can simplify the process of data collection, data analysis, and reporting for medical research, as well as, biotech research institutions.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Biotech Software Solutions",
      description:
        "Software solutions that are made to the custom specifications of the biotech industry to improve laboratory Practices, manage data, and R&D processes effectively.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
  ];
  const solutionsData = [
    {
      title:
        "Deep knowledge gained through working with pharmaceutical, biotech, and healthcare IT industries",
      desc: "",
    },
    {
      title:
        "Specialized software developed that not only meets the needs of the client but also aligns with the regulatory compliance and industry standards",
      desc: "",
    },
    {
      title:
        "Creative solutions for efficient management of data and quality healthcare",
      desc: "",
    },
    {
      title:
        "Platforms that are both scalable and secure for handling various life sciences processes",
    },
    {
      title:
        "Seamless integration with cutting-edge technologies such as AI, ML, and IoT",
      desc: "",
    },
    {
      title:
        "Customer-focused caring and continuous service for a long time of trustworthiness",
      desc: "",
    },
  ];
  const slides = [
    {
      image: assets.blockchainBanner1,
      title:
        "Life sciences software solutions suitable for the new healthcare & pharma",
      subtitle:
        "One of the main sources of pharmaceutical, biotech, and healthcare companies' strength is the digital solution that is coming from IT.",
    },
    {
      image: assets.blockchainBanner2,
      title:
        "Revolutionize Your Business with Cutting-Edge Blockchain Development",
      subtitle:
        "Utilize the Capyngen blockchain technology that is reliable, transparent, and scalable to change your processes, gain customer loyalty, and open up new horizons.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Enterprise Blockchain Solutions",
      subtitle:
        "Improve security, streamline processes, and open up opportunities for large scale corporate activity.",
    },
  ];

  return (
    <div className="">
      <Banner4 slides={slides} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Schedule a Demo for Pharma IT Services"
        description={[
          "Experience secure, scalable pharma IT services and clinical trial management software.",
        ]}
        textSize="text-2xl"
        buttonText="Schedule a Demo"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Transforming Life Sciences with Cutting-Edge Software."
        description={[
          "Capyngen delivers custom life sciences software solutions with the objective to simplify clinical trials, the laboratory information management system, and to open new digital healthcare solutions. We are experts in pharma IT services, biotech, and research and use these skills to help organizations raise their productivity, accuracy, and compliance levels while also inviting innovation.",
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
        imageHeight="aspect-[1/1]"
        isHidden="hidden"
      />
      <CardsSectionImage
        heading="Life Sciences Software Solutions from Our Side"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Partner with a Trusted Life Sciences Software Development Company"
        description={[
          "Capyngen builds custom biotech software solutions and medical research software for growth.",
        ]}
        buttonText="Talk to Our Experts"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="Why Capyngen for Life Sciences Software?"
        desc=""
        reverse={true}
        benefits={solutionsData}
        image={assets.blockchainDevelopment}
        footerNote=""
      />
      <IndustryServices
        heading="Technologies We Use"
        subheading="Leading-Edge Technological Solutions for Life Sciences"
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Ready to Transform Your Life Sciences Operations?"
        description={[
          "Empower your pharmaceutical, biotech, or research organization with secure and scalable digital solutions.",
        ]}
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default LifeScience;
