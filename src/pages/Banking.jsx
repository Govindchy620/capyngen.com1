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
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaCode,
  FaCheckCircle,
  FaDatabase,
  FaCreditCard,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaChartLine,
  FaChartPie,
  FaExpand,
  FaUserTie,
  FaHome,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";

const Banking = () => {
  const faqItems = [
    {
      question: "What are banking software development services?",
      answer:
        "Banking software development services involve multiple activities such as creating, constructing, and rolling out software solutions for banks which include core banking systems, mobile applications, payment gateways, customer relationship management, security systems, and digital transformation initiatives customized to banking requirements.",
    },
    {
      question:
        "Why is Capyngen the best banking software development company in India?",
      answer:
        "Capyngen stands out from the crowd by combining deep banking domain expertise, a successful track record with major financial institutions, state-of-the-art technology, a security-first approach, sound regulatory knowledge, and delivering tangible outcomes that make us a bank's trusted partner.",
    },
    {
      question: "What are core banking solutions?",
      answer:
        "Core banking solutions refer to software platforms that cover the whole range of banking operations such as account management, deposits, loans, and transactions. Customer data and banking processes are integrated through a unified system enabling centralized operations across branches.",
    },
    {
      question: "How secure are your banking applications?",
      answer:
        "The secure banking applications we develop go through top-notch security measures such as multi-factor authentication, end-to-end encryption, biometric confirmation, fraud detection, regular security audits, and compliance with PCI DSS and RBI standards to ensure the highest protection.",
    },
    {
      question: "Do you develop mobile banking software?",
      answer:
        "We are experts in mobile banking software development for iOS and Android platforms using native and cross-platform technologies with user-friendly interfaces and strong security.",
    },
    {
      question: "What is blockchain in banking, and how do you implement it?",
      answer:
        "Blockchain in banking provides a shared ledger for transactions with enhanced security and cyber-attack resistance. Our team uses platforms like Hyperledger and Ethereum for bank and finance-related blockchain projects.",
    },
    {
      question: "How long does banking software development take?",
      answer:
        "Timelines vary with project scope: simple mobile apps take 3-4 months, comprehensive core banking systems 8-12 months, with detailed milestones tailored to requirements.",
    },
    {
      question: "What is the cost of banking software development?",
      answer:
        "Costs depend on features, complexity, technology, integration, and support. Flexible models including fixed-price, time & material, and dedicated teams are available. Contact us for tailored quotes.",
    },
    {
      question: "Can you integrate with our existing banking systems?",
      answer:
        "Yes, including legacy systems, payment gateways, regulatory platforms, and third-party services via APIs and middleware with minimal disruption.",
    },
    {
      question: "Do you provide FinTech app development for startups?",
      answer:
        "Yes, we create digital wallets, lending platforms, investment apps, payment solutions, and other innovative financial services tailored to startups' needs for quick development and scalability.",
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer:
        "We comply with RBI, PCI DSS, GDPR, AML/KYC and other standards with automatic reporting and audit trails integrated in digital solutions.",
    },
    {
      question: "What technologies do you use for banking software?",
      answer:
        "We use Java, .NET, Python, Oracle, MySQL, MongoDB, AWS, Azure, AI/ML, blockchain, and latest frameworks for modern scalable solutions.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, including 24/7 monitoring, bug fixing, security updates, performance optimization, and feature enhancement.",
    },
    {
      question:
        "Can you help with digital transformation for traditional banks?",
      answer:
        "Yes, we help modernize traditional banks with cloud, AI, blockchain technologies, and customer experience enhancements.",
    },
    {
      question:
        "What makes your custom banking app development services unique?",
      answer:
        "We combine domain expertise, user-centric design, advanced technology, strong security, regulatory compliance, seamless integration, and proven delivery for outstanding solutions.",
    },
  ];

  const servicesData = [
    {
      image: assets.banking2,
      title: "Specialized Banking Solutions",
      desc: "Custom solutions tailored to your firm's unique workflow, customer demands, and strategic goals.",
    },
    {
      image: assets.banking3,
      title: "Security & Compliance First",
      desc: "Multi-factor authentication, encryption, secure APIs following global security standards including RBI, PCI DSS, and GDPR.",
    },
    {
      image: assets.banking4,
      title: "Scalability & Performance",
      desc: "Seamless scalability and consistent performance for thousands to millions of customers.",
    },
    {
      image: assets.banking5,
      title: "Innovative Technology Incorporation",
      desc: "AI for fraud detection, blockchain, cloud computing, big data, and IoT for next-gen banking.",
    },
    {
      image: assets.banking6,
      title: "Seamless Integration Abilities",
      desc: "Harmonious co-existence with legacy systems, third-party software, payment gateways, and reporting tools.",
    },
    {
      image: assets.banking7,
      title: "Proven Track Record",
      desc: "Delivered transformative digital solutions to leading financial institutions with measurable growth.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Core Banking Development Software",
      description:
        "Integrated core banking systems for smooth accounts, deposits, loans, and transactions.",
      icon: <FaDatabase className="text-4xl text-white" />,
    },
    {
      title: "Cell Phone & Internet Banking Solutions",
      description:
        "Native and cross-platform mobile banking apps for intuitive, secure access.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Payment Gateway & Transaction Solutions",
      description:
        "Robust systems for timely, secure settlements handling high transaction volumes.",
      icon: <FaCreditCard className="text-4xl text-white" />,
    },
    {
      title: "Banking CRM & Customer Experience Solutions",
      description:
        "Unified platforms with analytics and personalized dashboards for enhanced satisfaction.",
      icon: <FaUsers className="text-4xl text-white" />,
    },
    {
      title: "FinTech & Digital Transformation Advisory",
      description:
        "Strategic consulting for modernization, automation, and innovation-driven transformation.",
      icon: <FaLightbulb className="text-4xl text-white" />,
    },
    {
      title: "Security & Compliance Management",
      description:
        "End-to-end security frameworks ensuring compliance with international standards.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Programming Languages",
      description:
        "Java, .NET, Python, C++, Kotlin – scalable, integrated, AI-capable, high-performance.",
      image: assets.banking8,
      cardBg: "bg-blue-100",
    },
    {
      title: "Databases & Storage",
      description:
        "Oracle, MySQL, MongoDB, PostgreSQL, Redis – flexible, real-time, reliable storage.",
      image: assets.banking9,
      cardBg: "bg-green-100",
    },
    {
      title: "Frameworks & Libraries",
      description:
        "SpringBoot, Angular, React, Node.js, Flutter – modern, scalable architectures and UI.",
      image: assets.banking10,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cloud Platforms",
      description:
        "AWS, Azure, Google Cloud, IBM Cloud – enterprise-grade cloud with hybrid support.",
      image: assets.banking11,
      cardBg: "bg-pink-100",
    },
    {
      title: "Security Technologies",
      description:
        "MFA, encryption, biometric verification, blockchain, SSL/TLS, intrusion detection, SIEM.",
      image: assets.banking12,
      cardBg: "bg-purple-100",
    },
    {
      title: "Analytics & AI",
      description:
        "ML fraud detection, predictive analytics, NLP chatbots, big data, BI dashboards.",
      image: assets.banking13,
      cardBg: "bg-red-100",
    },
  ];

  const typesData = [
    {
      icon: <FaCogs />,
      title: "Operational Efficiency Improved",
      desc: "Automate processes, streamline workflows, reduce errors; free staff for high-value tasks.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transactions that are Secure and Compliant",
      desc: "Enterprise-grade security ensuring data protection and regulatory compliance.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Engagement Improved",
      desc: "Personalized, omnichannel experiences with AI assistance enhance satisfaction and retention.",
    },
    {
      icon: <FaChartLine />,
      title: "Lowered Operational Costs",
      desc: "Cloud infrastructure and automation reduce expenses while preserving quality.",
    },
    {
      icon: <FaChartPie />,
      title: "Real-Time Analytics and Reporting",
      desc: "Actionable data insights, fraud detection, regulatory reports, and strategic decisions.",
    },
    {
      icon: <FaExpand />,
      title: "Expandability for Future Development",
      desc: "Scalable systems to grow with your institution without compromising performance.",
    },
  ];

  const panels = [
    {
      image: assets.bankingBanner1,
      title: "Empower Banking Through Digital Innovation",
      desc: "Lead growth and safety with fintech and cloud tech tailored for future banking.",
    },
    {
      image: assets.bankingBanner2,
      title: "Redefine the Future of Banking",
      desc: "Smooth, secure, client-centered financial activities with digital banking solutions.",
    },
    {
      image: assets.bankingBanner3,
      title: "Banking Transformation Starts Here",
      desc: "Streamline workflows and increase morale with automation, analytics, risk management.",
    },
    {
      image: assets.bankingBanner4,
      title: "Secure, Scalable & Smart IT Banking Solutions",
      desc: "Prepare infrastructure for reliable and easy banking customer peace of mind.",
    },
    {
      image: assets.bankingBanner5,
      title: "The Future of Digital Finance",
      desc: "Real-time, mobile-first, AI-driven banking enabling market first-mover advantage.",
    },
  ];

  return (
    <div className="">
      <ExpandableGallery panels={panels} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        description={[
          "Contact me for no charge consultation. Banking Innovations for Secure, Scalable, and Creative Technical Solutions From India's Leading Partner in Banking Software!",
        ]}
        textSize="text-2xl"
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Industry Has Lastly Managed To Go The Tech Road"
        description={[
          `The financial sector is fast moving whereby banks and financial institutions should partner tech firms that are not only tech savvy but also well conversant with the industry-specific challenges so as to provide the right solutions. Capyngen is a top bank software development company in India, which is always on the front line, coming up with secure, scalable, and innovative bank software solutions that not only radically transform the way financial institutions work but also are adaptive to customer needs.`,
          `We have considerable experience in effectively providing banking industry solutions including retail, commercial, corporate, investment banking, microfinance, and fintech startups. Our services include core banking, mobile banking, payment systems, and fintech app development to realize efficiency, satisfaction, and compliance.`,
        ]}
        imageHeight="md:aspect-[1/1]"
        image={assets.banking1}
        isHidden={true}
        background={assets.patternBg1}
      />
      <IndustryServices
        heading="Why Top Banks Rely on Capyngen"
        services={servicesData}
      />
      <CardsSection
        heading="Banking Software Solutions Development"
        services={cardsSectionData1}
        headColor="text-white"
        cardBg="bg-gradient-to-br from-gray-900 to-blue-800"
        textSize="text-md"
        sectionBg="bg-gray-900"
        hoverBg="hover:from-indigo-800 hover:via-gray-800 hover:to-blue-900 hover:scale-105"
        textColor="text-white"
      />
      <CardsSectionImage
        heading="New-age Tech Stack to Serve Banking Excellence"
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        hoverBg="hover:bg-gray-200"
        textSize="text-md"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        description={[
          "Want to Totally Change Your Banking Experience? Make an Appointment for a Free Demonstration & Find Out How Capyngen’s Banking Software Solutions Can Grow Security, Efficiency, and Customer Satisfaction!",
        ]}
        textSize="text-2xl"
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Making Banks Digitally Fit"
        buttonText="Let's Contact"
        image={assets.banking14}
        types={typesData}
      />
      <IndustryServices
        heading="Serving All Banking & Financial Sectors"
        services={servicesData1}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        description={[
          "Why Not Work with Us to Create the Future of Banking – Contact Capyngen Today for Custom Banking Software Development Services & Groundbreaking FinTech Solutions That Help You Get Ahead!",
        ]}
        textSize="text-2xl"
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default Banking;
