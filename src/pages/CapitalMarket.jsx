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
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/capital-market#webpage",
  url: "https://www.capyngen.com/industries/capital-market",
  name: "Capital Market Software Solutions – Capyngen",
  description:
    "Capyngen delivers advanced capital market software solutions. From stock trading and wealth management to algorithmic platforms — power your FinTech innovation.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/capital-market#service",
  name: "Capital Market Software Solutions",
  serviceType: "Capital Market IT Solutions, Trading Platform Software",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Capyngen delivers advanced capital market software solutions. From stock trading and wealth management to algorithmic platforms — power your FinTech innovation.",
  url: "https://www.capyngen.com/industries/capital-market",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/capitalMarketbanner3-DwPulF0d.png",
    caption: "Capital Market Software Solutions – Capyngen",
  },
  offers: {
    "@type": "Offer",
    price: "Custom",
    priceCurrency: "INR",
    availability: "InStock",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/industries/capital-market#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the software solutions of capital markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are online products applied in the trading, investment, and wealth management that contribute to increasing the speed, security, and analytics.",
      },
    },
    {
      "@type": "Question",
      name: "What can be done with the help of stock trading software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is offering real-time trading, quick trading and smarter investment decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Are you an algorithmic trading platform builder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is a user-friendly automated trading platform, which is AI-driven and designed to serve customers.",
      },
    },
    {
      "@type": "Question",
      name: "Is your software safe and in-house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. All products are in line with international financial requirements and contain superior security provisions.",
      },
    },
    {
      "@type": "Question",
      name: "Will it be compatible with our current system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admittedly, Capyngen software is compatible with legacy and third-party systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer real-time data and analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, there is live trading, portfolio and market insights through our dashboards.",
      },
    },
    {
      "@type": "Question",
      name: "What is unique about your portfolio software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It enables tracking of multiple assets, artificial intelligence, and integrating with other software with ease.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is the platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is encrypted and includes MFA and regular audits to protect your data.",
      },
    },
    {
      "@type": "Question",
      name: "Does it support multi-asset trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, such as stocks, forex, options, as well as futures.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries benefit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Done VC, Brokerage, Hedge Funds, Family Office, and FinTech Startup.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer cloud solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, there are safe, scaled, and user friendly cloud services.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can it be deployed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White-label: weeks. Custom: 2-4 months, based on features.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to develop wealth software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, advisors can use dashboards, reporting, and tools that were modified.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide after sales service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, 24/7 support is offered, updates, and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have been in FinTech years, have scalable and reliable platforms and fully end to end support.",
      },
    },
  ],
};

const CapitalMarket = () => {
  const faqItems = [
    {
      question: "What are the software solutions of capital markets?",
      answer:
        "They are online products applied in the trading, investment, and wealth management that contribute to increasing the speed, security, and analytics.",
    },
    {
      question: "What can be done with the help of stock trading software?",
      answer:
        "It is offering real-time trading, quick trading and smarter investment decisions.",
    },
    {
      question: "Are you an algorithmic trading platform builder?",
      answer:
        "Yes, it is a user-friendly automated trading platform, which is AI-driven and designed to serve customers.",
    },
    {
      question: "Is your software safe and in-house?",
      answer:
        "Definitely. All products are in line with international financial requirements and contain superior security provisions.",
    },
    {
      question: "Will it be compatible with our current system?",
      answer:
        "Admittedly, Capyngen software is compatible with legacy and third-party systems.",
    },
    {
      question: "Do you offer real-time data and analytics?",
      answer:
        "Yes, there is live trading, portfolio and market insights through our dashboards.",
    },
    {
      question: "What is unique about your portfolio software?",
      answer:
        "It enables tracking of multiple assets, artificial intelligence, and integrating with other software with ease.",
    },
    {
      question: "How secure is the platform?",
      answer:
        "It is encrypted and includes MFA and regular audits to protect your data.",
    },
    {
      question: "Does it support multi-asset trading?",
      answer: "Yes, such as stocks, forex, options, as well as futures.",
    },
    {
      question: "Which industries benefit?",
      answer:
        "Done VC, Brokerage, Hedge Funds, Family Office, and FinTech Startup.",
    },
    {
      question: "Do you offer cloud solutions?",
      answer:
        "Yes, there are safe, scaled, and user friendly cloud services.",
    },
    {
      question: "How fast can it be deployed?",
      answer: "White-label: weeks. Custom: 2-4 months, based on features.",
    },
    {
      question: "Is it possible to develop wealth software?",
      answer:
        "Yes, advisors can use dashboards, reporting, and tools that were modified.",
    },
    {
      question: "Do you provide after sales service?",
      answer: "Of course, 24/7 support is offered, updates, and maintenance.",
    },
    {
      question: "Why choose Capyngen?",
      answer:
        "We have been in FinTech years, have scalable and reliable platforms and fully end to end support.",
    },
  ];
  const servicesData = [
    {
      image: assets.capitalMarket9,
      title: "Live trading and investment management",
      desc: "",
    },
    {
      image: assets.capitalMarket10,
      title: "AI-based predictive analytics to make investments smarter",
      desc: "",
    },
    {
      image: assets.capitalMarket11,
      title: "Multi-asset trading platform interoperability",
      desc: "",
    },
    {
      image: assets.capitalMarket12,
      title: "Risk and compliance management at an advanced level",
      desc: "",
    },
    {
      image: assets.capitalMarket13,
      title: "Easy integration financial system API",
      desc: "",
    },
    {
      image: assets.capitalMarket14,
      title: "FinTech security and regulation",
      desc: "",
    },
  ];
  const cardsSectionData1 = [
    {
      title:
        "Old trading systems that are not performing well with regard to the speed of execution",
      description: "",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Difficult regulatory compliance and reporting",
      description: "",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title:
        "Lack of coordination and inconsistency of data between trading, investment, and wealth management platforms",
      description: "",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title:
        "The deficit of up-to-the-minute portfolio data to be able to make sound decisions",
      description: "",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title:
        "Risk of algorithmic trading and high-frequency trading security breaches",
      description: "",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title:
        "The lack of efficiency of the integration between the front, middle and back-office systems",
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
            <li>Just-in-time order management and implementation</li>
            <li>Extradiegetic charting and analytics</li>
            <li>
              It was made possible by machine learning, which facilitated
              predictive trading
            </li>
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
            <li>Monitors on performances</li>
            <li>Secure teamwork between numerous users</li>
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
            <li>
              Firm-specific <Link to={"/crm-management-software"}>CRM</Link> and
              advisor-specific CRM
            </li>
            <li>Client portfolio value management</li>
            <li>Automation of compliance</li>
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
              How can you make your strategy more testing-specific, make new
              rules, etc?
            </li>
            <li>Execution of trade, which does not involve human participation</li>
            <li>Make more money in the super-fast operations</li>
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
            <li>Monitoring and reporting of assets of various types</li>
            <li>
              Risk management tools that are included in your investment
              strategies
            </li>
            <li>Integration with easy access to brokerage accounts</li>
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
            <li>Flexible API-based integrations</li>
            <li>
              Scalable and regulation-compliant fintech environments, such as
              Capmarket liquidity bridge and secure Capmarket server hosting
            </li>
          </ul>
        </>
      ),
      image: assets.capitalMarket7,
      cardBg: "bg-blue-100",
    },
  ];
  const solutionsData = [
    {
      title: "Faster trading, increased trust and increased security",
      desc: "",
    },
    {
      title: "Smart decisions are made by using on-the-fly data analytics",
      desc: "",
    },
    {
      title: "Scalable long-term cloud-based infrastructure",
      desc: "",
    },
    {
      title: "Easy migration of old systems to new advanced systems",
      desc: "",
    },
    {
      title: "Complete deployment, service and after-sales",
      desc: "",
    },
  ];
  const slidesData = [
    {
      image: assets.capitalMarketbanner1,
      heading:
        "Digital Transformation of Capital Markets with the Best IT Solutions for Capital Market",
      description: (
        <>
          <p>
            Transform trading and risk management by adopting AI-based systems
            supported by the best IT solutions for the capital market and
            advanced capital markets technology.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.capitalMarketbanner2,
      heading: "Keep Traders Up-to-Date with Real-Time Data",
      description: (
        <>
          <p>
            Exploit the best out of capital market platforms in terms of
            reliability, compliance and high-performance through our capital
            market software products and capital markets software solutions.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.capitalMarketbanner3,
      heading:
        "Accelerate Trading with Innovative Capital Market Technology Solutions",
      description: (
        <>
          <p>
            Market operations can be facilitated by utilising capital markets
            technology solutions in India and advanced fintech tools, making
            them transparent, fast, and analytical.
          </p>
        </>
      ),
      price: "",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>Capital Market Software Solutions</title>
        <meta
          name="description"
          content="Capyngen delivers advanced capital market software solutions. From stock trading and wealth management to algorithmic platforms — power your FinTech innovation."
        />
        <meta name="keywords" content="Capital Market Software Solutions" />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
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
          "Capyngen provides capital market software solutions to experience the revolution in trading, investment and managing portfolios. Why not get a free demo and scale your business in an intelligent manner with the help of the best IT solutions for capital market?",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Innovative Software Solutions for Capital Markets to Achieve Remarkable Results"
        description={[
          <>
            <p>
              <Link to={"/"}>Capyngen</Link> is a provider of the capital
              market, which provides a full set of software services to
              financial institutions, trading companies, and investment firms.
              In addition to our highly developed stock trading software, we
              also offer a wealth management platform that is developed on
              capital markets technology and enables businesses to automate
              their operations, be compliant, and remain competitive in the
              financial world.
            </p>
            <p>
              Our capital markets FinTech allows firms the authority to apply an
              algorithmic trading platform, portfolio management software and
              Capmarket platform development to make their capital work
              effectively and generate long-term, regular results. Our own
              Capmarket white-label services is also supported to be deployed
              quickly.
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
        subheading="Capyngen will provide the best-fit solutions that are aimed at ultimately substituting and automating trade and investment processes of a firm, which makes it a reliable Capmarket technology provider."
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
          "Find tomorrow stock trader software, wealth-management, and algorithmic trading software that will make you financially prosperous with the best IT solutions for capital market. Get a demo today!",
        ]}
        buttonText="Book Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="Benefits of Choosing Capyngen"
        desc={
          <>
            Why Capyngen is the Capital Market{" "}
            <Link to={"/"}>IT Services</Link> Partner. We know everything about
            the capital market software that you need, starting with a clean
            sheet of paper to the completed product. Our solutions, which are
            termed as the best IT solutions in capital market in India provide:
          </>
        }
        benefits={solutionsData}
        image={assets.capitalMarket8}
        footerNote=""
      />
      <IndustryServices
        heading="Our Capital Market Software Solutions"
        subheading="Features You Can't Get Along"
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Work Together with the Best IT Solutions for Capital Market"
        description={[
          "Have your own stock trading platform developed, investment management software, and advanced FinTech in capital markets to grow your business with services to best IT solutions for capital market.",
        ]}
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default CapitalMarket;
