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

const CapitalMarket = () => {
  const faqItems = [
    {
      question: "What are capital market software solutions?",
      answer:
        "They are digital tools used for trading, investment, and wealth management that help improve speed, security, and analytics.",
    },
    {
      question: "How can stock trading software help?",
      answer:
        "It makes available real-time trading, fast execution, and smarter investment decisions.",
    },
    {
      question: "Do you build algorithmic trading platforms?",
      answer:
        "Yes, we design AI-driven, user-friendly automated trading platforms for customers.",
    },
    {
      question: "Is your software secure and compliant?",
      answer:
        "Definitely. All products strictly comply with global financial standards and incorporate the most advanced security measures.",
    },
    {
      question: "Can it integrate with our existing system?",
      answer:
        "Sure, Capyngen software fits in easily with your legacy and third-party systems.",
    },
    {
      question: "Do you provide real-time data and analytics?",
      answer:
        "Yes, live trading, portfolio, and market insights are provided via our dashboards.",
    },
    {
      question: "What makes your portfolio software special?",
      answer:
        "It allows multi-asset tracking, AI insights, and effortless integration with other software.",
    },
    {
      question: "How secure is the platform?",
      answer:
        "Encryption, MFA, and regular audits are among the security measures that we implement to ensure that your data is fully protected.",
    },
    {
      question: "Does it support multi-asset trading?",
      answer: "Yes, including stocks, forex, options, and futures.",
    },
    {
      question: "Which industries benefit?",
      answer:
        "Venture Capital, Brokerage, Hedge Funds, Family Offices, and FinTech Startups.",
    },
    {
      question: "Do you offer cloud solutions?",
      answer:
        "Yes, you can have a secure, scalable, and user-friendly cloud option without any difficulty.",
    },
    {
      question: "How fast can it be deployed?",
      answer:
        "White-label: weeks. Custom: 2–4 months, subjected to the features.",
    },
    {
      question: "Can wealth software be customized?",
      answer:
        "Yes, dashboards, reporting, and tools are made according to the needs of the advisors.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Sure, support is available 24/7, and so are updates and maintenance.",
    },
    {
      question: "Why choose Capyngen?",
      answer:
        "We’ve been working in the FinTech area for a long time, are very sure of our software which can be scaled fast and easy, and we are always there for you with our full support.",
    },
  ];
  const servicesData = [
    {
      image: assets.capitalMarket9,
      title: "Real-time trading and portfolio analytics",
      desc: "",
    },
    {
      image: assets.capitalMarket10,
      title: "Predictive analytics powered by AI for smarter investment",
      desc: "",
    },
    {
      image: assets.capitalMarket11,
      title: "Trading platform interoperability with multi-asset management",
      desc: "",
    },
    {
      image: assets.capitalMarket12,
      title: "Advanced risk and compliance management",
      desc: "",
    },
    {
      image: assets.capitalMarket13,
      title: "Financial system API for easy integration",
      desc: "",
    },
    {
      image: assets.capitalMarket14,
      title: "Security for FinTech and compliance with regulation",
      desc: "",
    },
  ];
  const cardsSectionData1 = [
    {
      title:
        "The use of old trading systems that are underperforming in terms of execution speed",
      description: "",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Complicated regulatory compliance as well as reporting",
      description: "",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title:
        "Data that is uncoordinated and inconsistent across trading, investment, and wealth management platforms",
      description: "",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title:
        "The shortage of up-to-the-minute portfolio information to facilitate sound decision-making",
      description: "",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title:
        "The possibility of security breaches in algorithmic and high-frequency trading operations",
      description: "",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title:
        "The integration that is not efficient between the front, middle, and back-office systems",
      description: "",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Stock Trading Software",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>Just in time order management and execution</li>
            <li>Incised charting and analytics</li>
            <li>Machine learning enabled predictive trading</li>
          </ul>
        </>
      ),
      image: assets.capitalMarket2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Investment Management Software",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>Investor-friendly workflows</li>
            <li>Performance monitoring interfaces</li>
            <li>Safe collaboration among multiple users</li>
          </ul>
        </>
      ),
      image: assets.capitalMarket3,
      cardBg: "bg-blue-100",
    },
    {
      title: "Wealth Management Software",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>Advisor and firm specific CRM</li>
            <li>Client portfolio value tracking</li>
            <li>Compliance automation tools</li>
          </ul>
        </>
      ),
      image: assets.capitalMarket4,
      cardBg: "bg-blue-100",
    },
    {
      title: "Algorithmic Trading Platforms",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>
              Ways you can tailor your testing, create new rules, etc., for your
              strategy
            </li>
            <li>Trade execution that requires no human intervention</li>
            <li>Super-fast operations to make more money</li>
          </ul>
        </>
      ),
      image: assets.capitalMarket5,
      cardBg: "bg-blue-100",
    },
    {
      title: "Portfolio Management Software",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>Tracking and analyzing assets of different types</li>
            <li>
              Tools for risk management that are part of your investment
              strategies
            </li>
            <li>Easy access to brokerage accounts through integration</li>
          </ul>
        </>
      ),
      image: assets.capitalMarket6,
      cardBg: "bg-blue-100",
    },
    {
      title: "FinTech for Capital Markets",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>Cloud-native architecture</li>
            <li>API-based integrations for flexibility</li>
            <li>Scalable & regulation-compliant fintech ecosystems</li>
          </ul>
        </>
      ),
      image: assets.capitalMarket7,
      cardBg: "bg-blue-100",
    },
  ];
  const solutionsData = [
    {
      title:
        "We have the full knowledge from scratch to the finished product of capital market software specific to your needs.",
      desc: "",
    },
    {
      title:
        "Accelerated trading processes, opened up to being more trustworthy, and securitized.",
      desc: "",
    },
    {
      title: "On-the-fly data analytics for deciding in a wiser manner.",
      desc: "",
    },
    {
      title:
        "Your long-term cloud-based infrastructure that is easy to be expanded over",
    },
    {
      title:
        "Without interruptions, we made the transition from old systems to new ones.",
      desc: "",
    },
    {
      title: "Wrap up the process of deployment with maintenance and support.",
      desc: "",
    },
  ];
  const slidesData = [
    {
      image: assets.creativeAgencyFAQ,
      heading: "Accelerate Trading with Capital Market Innovative Solutions",
      description: (
        <>
          <p>
            Facilitate the market operations with the help of transparency,
            speed, and analytics.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.creativeAgencyFAQ,
      heading: "Digital Transformation of Capital Markets",
      description: (
        <>
          <p>
            Revolutionize trading and risk management by implementing AI-driven
            systems.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.creativeAgencyFAQ,
      heading: "Keep Traders Up-to-Date with Real-Time Data",
      description: (
        <>
          <p>
            Get the most out of capital market platforms from the perspective of
            reliability, compliance, and high-performance.
          </p>
        </>
      ),
      price: "",
    },
  ];

  return (
    <div className="">
      <CreativeAgencyFAQ
        slides={slidesData}
        slideDuration={4000}
        headingClass="text-4xl md:text-5xl font-extrabold mb-6"
        descClass="text-lg leading-relaxed mb-8 text-gray-300"
        buttonGradient="from-blue-500 to-purple-600"
        priceLabel=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Transform Your Capital Market Operations Today"
        description={[
          "Experience the revolution in trading, investment, and portfolio management through Capyngen’s capital market software solutions. Why don’t you take a free demo and scale your business the smart way?",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Innovative Software Solutions for Capital Markets to Achieve Remarkable Results"
        description={[
          <>
            <p>
              Capyngen offers a complete package of software solutions for the
              capital market which caters to the needs of the financial
              institutions, trading companies, and investment firms. Besides
              stock trading software, we become the source of the wealth
              management platform for businesses to facilitate their processes,
              make the right choices, and lead the game in the ever-changing
              financial landscape.
            </p>
            <p>
              Our FinTech for capital markets gives the firms the power to
              utilize an algorithmic trading platform and portfolio management
              software to make their capital work efficiently and achieve a set
              of results that are sustainable over time.
            </p>
          </>,
        ]}
        image={assets.capitalMarket1}
        background={assets.patternBg1}
        imageHeight="aspect-[1/1]"
        isHidden="hidden"
      />
      <CardsSection
        heading="Challenges in Capital Market Sector"
        subheading=""
        services={cardsSectionData1}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
      />
      <CardsSectionImage
        heading="Advancing Innovation with the Help of Capital Market Software Solutions"
        subheading="Capyngen offers best-fit solutions that are designed to eventually replace and streamline the trade and investment processes of a firm."
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
        title="Book Your Capital Market Software Demo"
        description={[
          "Discover future stock trading software, wealth management platforms, and algorithmic trading solutions designed to make you financially successful. Get a demo today!",
        ]}
        buttonText="Book Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="Benefits of Choosing Capyngen"
        desc="Why Partner with Capyngen for Capital Market IT Services"
        benefits={solutionsData}
        image={assets.capitalMarket8}
        footerNote=""
      />
      <IndustryServices
        heading="Our Capital Market Software Solutions "
        subheading="Features You Can't Get Along"
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Work Together with the Best Capital Market IT Experts"
        description={[
          "Customize your stock trading platform with our development, get investment management software with us and use advanced FinTech for capital markets to increase your business.",
        ]}
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default CapitalMarket;
