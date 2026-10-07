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
      answer: "Yes, there are safe, scaled, and user friendly cloud services.",
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
            <li>
              Execution of trade, which does not involve human participation
            </li>
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
      title: "",
      desc: "We know everything about the capital market software that you need, starting with a clean sheet of paper to the completed product. Our solutions, which are termed as the best IT solutions in capital market in India provide.",
    },
    {
      title: "",
      desc: "Faster trading, increased trust and increased security",
    },
    {
      title: "",
      desc: "Smart decisions are made by using on-the-fly data analytics",
    },
    {
      title: "",
      desc: "Scalable long-term cloud-based infrastructure",
    },
    {
      title: "",
      desc: "Easy migration of old systems to new advanced systems",
    },
    {
      title: "",
      desc: "Complete deployment, service and after-sales",
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
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (CREATIVEAGENCYFAQ - RETAINED EXACTLY AS REQUESTED)       */}
      {/* ========================================================================= */}
      <CreativeAgencyFAQ
        slides={slidesData}
        slideDuration={5000}
        headingClass="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white mb-6 leading-tight"
        descClass="text-base sm:text-lg leading-relaxed mb-8 text-slate-300 max-w-xl"
        buttonLabel="Schedule Capital Market Consultation"
        buttonLink="/contact-us"
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / CAPITAL MARKETS (SPLIT LIGHT SECTION)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.capitalMarket1}
                alt="Capital Market Software Solutions"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Innovative Software Solutions for Capital Markets
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> provides end-to-end software engineering for financial institutions, brokerages, investment firms, and FinTech innovators. Our capital markets technology allows organizations to automate operations, navigate strict regulatory compliance, and dominate high-speed financial ecosystems.
              </p>
              <p>
                From custom algorithmic trading engines and wealth management platforms to Capmarket liquidity bridges and white-label trading suites, we build low-latency, resilient digital backbones for modern finance.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Sub-millisecond execution and reliable algorithmic order routing.",
                "Automated multi-jurisdiction compliance and risk assessment frameworks.",
                "Unified front, middle, and back-office integration across multi-asset classes.",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-none bg-blue-600 mt-2 shrink-0" />
                  <p className="text-slate-700 text-sm sm:text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Capital Market Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CHALLENGES IN CAPITAL MARKET SECTOR (DARK CARDS GRID)                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Challenges in Capital Market Sector
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Tackling latency bottlenecks, regulatory complexity, and fragmented data ecosystems across trading desks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-400 text-3xl mb-5">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-300 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ADVANCING INNOVATION WITH CAPITAL MARKET SOFTWARE (LIGHT CARDS)        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Capital Market Software Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Best-fit solutions engineered to automate trading, wealth advisory, and investment lifecycle processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-md relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 border border-slate-200 overflow-hidden rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR CAPITAL MARKET SOFTWARE CAPABILITIES (6 DARK CARDS)                */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Enterprise Capital Market Features
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Advanced technical capabilities powering modern brokerage and investment management infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 overflow-hidden border border-slate-800 rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BENEFITS OF CHOOSING CAPYNGEN (SPLIT LIGHT SECTION)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.capitalMarket8}
                alt="Capital Market Benefits"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Choosing Capyngen
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We bring comprehensive technical acumen to capital markets, ensuring swift time-to-market and robust architectural integrity:
            </p>

            <div className="space-y-4 pt-2">
              {solutionsData.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-blue-600 transition-colors duration-150"
                >
                  <div className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                  <div>
                    {benefit.title && (
                      <h4
                        className="font-bold text-slate-900 text-sm sm:text-base mb-1"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {benefit.title}
                      </h4>
                    )}
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Transform Your Capital Market Operations Today
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Have your proprietary stock trading platform developed, alongside advanced investment management tools and FinTech integrations to scale your business.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-[#2563eb] font-bold py-4 px-10 rounded-none shadow-lg transition-colors duration-150 shadow-xl group text-base"
              >
                Work With Us
                <span className="text-white group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default CapitalMarket;
