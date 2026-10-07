import React from "react";
import { assets } from "../assets/assets";
import Banner4 from "../components/Banner4";
import CardsSectionImage from "../components/CardsSectionImage";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import GetStarted from "../components/GetStarted";
import IndustryServices from "../components/IndustryServices";
import {
  FaSearch,
  FaExpand,
  FaShieldAlt,
  FaPlug,
  FaUniversalAccess,
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaLock,
  FaRobot,
  FaBalanceScale,
  FaHandsHelping,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import HowWeWork from "../components/HowWeWork";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/public-service#webpage",
  url: "https://www.capyngen.com/industries/public-service",
  name: "Capyngen delivers digital transformation and technology-driven solutions for the public service sector, empowering governance and citizen engagement.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
      width: 250,
      height: 80,
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/publicServiceBanner3-C8PGX3jz.jpg",
    width: 1200,
    height: 800,
    caption: "Public Service Industry Solutions by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Industries",
        item: "https://www.capyngen.com/industries",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Public Service",
        item: "https://www.capyngen.com/industries/public-service",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/public-service#service",
  name: "Public Service IT Solutions",
  serviceType:
    "eGovernance Solutions, Citizen Service Portals, Smart City Applications, Public Data Management Systems",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Capyngen delivers innovative digital transformation solutions for the public service sector, including eGovernance platforms, smart city applications, and citizen engagement systems that enhance transparency and efficiency.",
  url: "https://www.capyngen.com/industries/public-service",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/publicServiceBanner3-C8PGX3jz.jpg",
    caption:
      "Public Service IT Solutions | eGovernance | Smart City | Citizen Engagement",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Are Public Service Digital Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are technology-driven platforms that help not only governments but also public organizations improve their efficiency, clarity, and citizen engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you Provide E-Governance Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, we work on the development of e-Governance platforms that are safe and easy for users to access.",
      },
    },
    {
      "@type": "Question",
      name: "Are you Able to Construct Citizen Service Applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, as our team can do mobile apps for public services such as bill payments, complaint tracking, and document requests.",
      },
    },
    {
      "@type": "Question",
      name: "Do you Provide Smart City Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certainly, our company is fully dedicated to the development of IoT-based smart city solutions for traffic, energy, and waste management.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Healthcare System of the Public Sector Able to be Improved by Your Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we build comprehensive digital healthcare systems for hospitals, health monitoring, and vaccination drives.",
      },
    },
    {
      "@type": "Question",
      name: "Are You Creating Educational Platforms for Government Use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely, we do e-learning portals and digital classrooms for public education.",
      },
    },
    {
      "@type": "Question",
      name: "Can You Deliver Data Analytics for Public Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build data visualizations that allow policy makers to grasp critical public data trends.",
      },
    },
    {
      "@type": "Question",
      name: "Are You Producing Apps for the Safety of the Public?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We make public safety apps for the areas of emergency response, disaster management, and law enforcement.",
      },
    },
    {
      "@type": "Question",
      name: "Are You Able to Integrate Your Solutions with Current Government Systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, our integration into ERP, legacy systems, and third-party APIs goes effortlessly.",
      },
    },
    {
      "@type": "Question",
      name: "Do You Offer Solutions for the Identification of a Digital Identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we design the identity verification and identity authentication systems in a secured manner.",
      },
    },
  ],
};

const PublicService = () => {
  const slides = [
    {
      image: assets.publicServiceBanner1,
      title: "Empowering Governance Through Digital Transformation",
      subtitle:
        "Efficient, transparent, and citizen-centric are the services offered through the use of technology.",
    },
    {
      image: assets.publicServiceBanner2,
      title: "Building Smart Governments for a Digital Future",
      subtitle:
        "The use of data, automation, and cloud solutions will become a pillar for improving the delivery of public service.",
    },
    {
      image: assets.publicServiceBanner3,
      title: "Transform Public Services with Innovation",
      subtitle:
        "Governments can automate processes, make services more accessible for citizens, and deliver those services using digital tools.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Public Sector ERP Solutions",
      description:
        "Financials, HR, procurement and administrative software that enhance transparency and operational effectiveness.",
      image: assets.publicService1,
      cardBg: "bg-blue-100",
    },
    {
      title: "Citizen Service Portals",
      description:
        "Self-service payments, permit, registration and record platforms that eliminate queues and enhance satisfaction.",
      image: assets.publicService2,
      cardBg: "bg-green-100",
    },
    {
      title: "E-Government Solutions",
      description:
        "Automating workflow, case management, and electronic forms to accelerate approvals and enhance accountability.",
      image: assets.publicService3,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Smart City Platforms",
      description:
        "IoT-based services for energy, waste, lighting and public safety converged into a single dashboard.",
      image: assets.publicService4,
      cardBg: "bg-pink-100",
    },
    {
      title: "Healthcare IT for Government",
      description:
        "Secure EHR integrations, telemedicine portals, and public health analytics.",
      image: assets.publicService5,
      cardBg: "bg-purple-100",
    },
    {
      title: "Education & Learning Portals",
      description:
        "Virtual classrooms, student management, and distance learning systems built for scale.",
      image: assets.publicService6,
      cardBg: "bg-red-100",
    },
    {
      title: "Transport & Mobility IT",
      description:
        "Ticketing automation, fleet management, and traffic monitoring to enhance urban mobility.",
      image: assets.publicService7,
      cardBg: "bg-indigo-100",
    },
    {
      title: "Utility Management Software",
      description:
        "Metering, billing, complaint tracking and maintenance workflows for water, gas, and electricity utilities.",
      image: assets.publicService8,
      cardBg: "bg-teal-100",
    },
    {
      title: "Public Safety & Emergency Response Systems",
      description:
        "Real-time monitoring, alerting, and coordination platforms for disaster management, law enforcement, and citizen safety.",
      image: assets.publicService9,
      cardBg: "bg-orange-100",
    },
  ];
  const faqItems = [
    {
      question: "What Are Public Service Digital Solutions?",
      answer:
        "They are technology-driven platforms that help not only governments but also public organizations improve their efficiency, clarity, and citizen engagement.",
    },
    {
      question: "Do you Provide E-Governance Solutions?",
      answer:
        "Indeed, we work on the development of e-Governance platforms that are safe and easy for users to access.",
    },
    {
      question: "Are you Able to Construct Citizen Service Applications?",
      answer:
        "Sure, as our team can do mobile apps for public services such as bill payments, complaint tracking, and document requests.",
    },
    {
      question: "Do you Provide Smart City Solutions?",
      answer:
        "Certainly, our company is fully dedicated to the development of IoT-based smart city solutions for traffic, energy, and waste management.",
    },
    {
      question:
        "Is the Healthcare System of the Public Sector Able to be Improved by Your Solutions?",
      answer:
        "Definitely, we build comprehensive digital healthcare systems for hospitals, health monitoring, and vaccination drives.",
    },
    {
      question: "Are You Creating Educational Platforms for Government Use?",
      answer:
        "Absolutely, we do e-learning portals and digital classrooms for public education.",
    },
    {
      question: "Can You Deliver Data Analytics for Public Services?",
      answer:
        "We build data visualizations that allow policy makers to grasp critical public data trends.",
    },
    {
      question: "Are You Producing Apps for the Safety of the Public?",
      answer:
        "We make public safety apps for the areas of emergency response, disaster management, and law enforcement.",
    },
    {
      question:
        "Are You Able to Integrate Your Solutions with Current Government Systems?",
      answer:
        "Of course, our integration into ERP, legacy systems, and third-party APIs goes effortlessly.",
    },
    {
      question:
        "Do You Offer Solutions for the Identification of a Digital Identity?",
      answer:
        "Definitely, we design the identity verification and identity authentication systems in a secured manner.",
    },
    {
      question: "How Safe Are Your Public Service Solutions?",
      answer:
        "We have implemented a fully encrypted security system, we comply with international standards and we also do the secure hosting of the cloud.",
    },
    {
      question: "Are You Able to Automate Government Workflows?",
      answer:
        "Yes, we can offer services for process automation that include approvals, file tracking, and document management.",
    },
    {
      question: "Are You Creators of Portals for Public Grievances?",
      answer:
        "Yes, we create and design complaint management systems that work in ways that are transparent regarding the handling of complaints.",
    },
    {
      question:
        "Can Your Solutions Be Made to Support Multi-Language Accessibility?",
      answer:
        "Yes, it is possible to create bilingual, trilingual, or multilingual platforms depending on the needs of the local community.",
    },
    {
      question: "Do You Provide Support for Public Service Projects?",
      answer:
        "In fact, our team offers assistance in the form of 24/7 support, control, and routine system upgrades.",
    },
  ];
  const servicesData = [
    {
      image: assets.publicService10,
      title: "Citizen Portals",
      desc: "Rapid access to services, status monitoring, and secure payments via integrated e-commerce capabilities for public sector requirements.",
    },
    {
      image: assets.publicService11,
      title: "Smart City Platforms",
      desc: (
        <span>
          Unified dashboards melding IoT feeds and analytics and{" "}
          <Link to={"/custom-ai-solutions"}>AI solutions</Link>
          for public sector planning.
        </span>
      ),
    },
    {
      image: assets.publicService12,
      title: "Public Finance ERP",
      desc: "Transparent budgeting, payroll, and reporting to facilitate compliant fiscal management.",
    },
    {
      image: assets.publicService13,
      title: "Healthcare Systems",
      desc: "Telehealth and interoperable patient records to increase access to care.",
    },
    {
      image: assets.publicService14,
      title: "E-Government Apps",
      desc: "Outreach and mobile-first services enhancing citizen engagement.",
    },
    {
      image: assets.publicService15,
      title: "Education IT",
      desc: "Remote and blended learning supported by LMS and admin systems.",
    },
    {
      image: assets.publicService16,
      title: "Transport Systems",
      desc: "Automation of route optimization, ticketing, and real-time commuter information.",
    },
    {
      image: assets.publicService17,
      title: "Data Analytics & AI",
      desc: "Predictive analytics and ML models for efficient resource prioritization and enhanced public outcomes.",
    },
    {
      image: assets.publicService18,
      title: "Custom Software Solutions for Public Sector",
      desc: "From custom case management applications to enterprise-wide integrations that sunset legacy silos.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Transparency & Auditability",
      description:
        "Unambiguous audit trails and public-facing dashboards to establish trust.",
      icon: <FaSearch className="text-4xl text-white" />,
    },
    {
      title: "Scalability",
      description:
        "Architectures that support city-wide use and national rollouts.",
      icon: <FaExpand className="text-4xl text-white" />,
    },
    {
      title: "Industry-specific Security & Compliance",
      description:
        "Encryption, role-based access, and compliance mapping for local laws and standards.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
    {
      title: "Integration",
      description: "Integrate legacy systems with new APIs and data platforms.",
      icon: <FaPlug className="text-4xl text-white" />,
    },
    {
      title: "Accessible UI/UX",
      description:
        "Accessible design and UI/UX for public sector websites to satisfy WCAG and accessibility standards.",
      icon: <FaUniversalAccess className="text-4xl text-white" />,
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Operations dashboards and alerting for mission-critical services.",
      icon: <FaChartLine className="text-4xl text-white" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Proven Results",
      description:
        "Implementing the finest IT solutions for public sector customers, with quantifiable service delivery improvements.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "End-to-End Delivery",
      description:
        "Strategy, UI/UX design for public sector websites, build, deployment and 24/7 support.",
      icon: <FaCogs className="text-4xl text-white" />,
    },
    {
      title: "Custom & Secure",
      description:
        "We design custom software solutions for public sector workflows, not one-size-fits-all products.",
      icon: <FaLock className="text-4xl text-white" />,
    },
    {
      title: "AI-Led Efficiency",
      description:
        "Practical AI solutions for public sector use-cases such as demand forecasting, fraud detection, and case prioritization.",
      icon: <FaRobot className="text-4xl text-white" />,
    },
    {
      title: "Transparent Governance",
      description: "Clear progress tracking, SLAs, and stakeholder reporting.",
      icon: <FaBalanceScale className="text-4xl text-white" />,
    },
    {
      title: "Long-Term Support",
      description:
        "Training, operations, and continuous improvement to keep services running reliably.",
      icon: <FaHandsHelping className="text-4xl text-white" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Consultation & Needs Capture",
      description:
        "Identify policy objectives, data regulations, and citizen requirements.",
    },
    {
      step: "Step 02",
      title: "Design & Compliance Planning",
      description:
        "Architecture, security, and accessibility (WCAG) design — including UI/UX design for government websites.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description: "Secure coding, API integration, and legacy migration.",
    },
    {
      step: "Step 04",
      title: "Testing & Certification",
      description:
        "Performance, security, and accessibility testing to ensure audit compliance.",
    },
    {
      step: "Step 05",
      title: "Deployment & Training",
      description: "Phased deployment, admin training, and change management.",
    },
    {
      step: "Step 06",
      title: "Operate & Optimize",
      description: "Monitoring, analytics, and iterative feature delivery.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for Public Sector Industry | AI & E-commerce Services –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen provides innovative IT solutions for the public sector. From AI to e-commerce platforms, we help government and public organizations go digital securely."
        />
        <meta
          name="keywords"
          content="IT Solutions for Public Sector Industry | AI & E-commerce Services – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (BANNER4 - RETAINED EXACTLY AS REQUESTED)                 */}
      {/* ========================================================================= */}
      <Banner4 slides={slides} />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / PUBLIC SERVICE (SPLIT LIGHT SECTION)                        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.publicService19}
                alt="Public Service Digital Transformation"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Empowering Governance & Citizen Engagement
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> delivers digital transformation and technology-driven solutions for public sector organizations, empowering governance, municipal responsiveness, and citizen engagement.
              </p>
              <p>
                From inclusive e-Governance portals and smart city IoT dashboards to secure fee collection systems and administrative workflows, we build compliant, accessible, and audit-ready public IT systems.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Strict compliance with government data regulations, WCAG, and ISO standards.",
                "High-capacity digital identity verification and transparent public audit trails.",
                "Mobile-first citizen portals for seamless grievance redressal, utility payments, and licensing.",
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
                Schedule Public Sector Discovery Call
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PUBLIC SECTOR SOLUTIONS WE OFFER (DARK CARDS GRID)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Public Sector Solutions We Offer
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              End-to-end public sector software architectures designed specifically for local, regional, and national institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-5 flex flex-col justify-between rounded-none shadow-xl relative group"
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
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. EMPOWERING GOVERNANCE WITH MODERN IT (LIGHT CARDS)                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Modern Public IT Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Assisting agencies in enhancing administrative efficiency and reinforcing citizen trust:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
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
                    className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-600 text-sm leading-relaxed mt-2">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CORE PUBLIC SECTOR IT FEATURES (DARK CARDS)                            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Public Sector IT Solutions — Core Features
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Architectures engineered to handle city-wide throughput, stringent role-based access, and uninterrupted reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-400 text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY CHOOSE CAPYNGEN FOR PUBLIC SECTOR (LIGHT CARDS)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Public Sector IT?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We bring transparent governance, strict security protocols, and continuous support to government engagements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-200 bg-slate-50 flex flex-col justify-between rounded-none shadow-sm hover:border-blue-600 transition-colors duration-150 relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-600 text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PROJECT IMPLEMENTATION PROCESS (TIMELINE)                              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How We Implement Public Sector Projects
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A structured, audit-proof delivery model minimizing risk and accelerating time-to-value for government stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-6 rounded-none relative group hover:border-blue-500 transition-colors duration-150"
              >
                <div className="text-blue-400 font-mono text-sm font-semibold tracking-wider mb-2">
                  {step.step}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2 leading-snug"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Modernize Public Services?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Capyngen is poised to collaborate on initiatives that transform citizen experience, secure data privacy, and deliver lasting public value.
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
      {/* 9. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default PublicService;
