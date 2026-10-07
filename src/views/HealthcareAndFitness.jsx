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
import Banner11 from "../components/Banner11";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Healthcare and Fitness App Development | Capyngen",
  url: "https://www.capyngen.com/industries/healthcare-fitness",
  description:
    "Capyngen offers secure, innovative, and HIPAA-compliant healthcare and fitness app development solutions for hospitals, clinics, gyms, and wellness startups.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/images/logo.png",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.capyngen.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://www.capyngen.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Healthcare & Fitness",
        item: "https://www.capyngen.com/industries/healthcare-fitness",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/healthcare-fitness",
  name: "Healthcare and Fitness IT Solutions",
  serviceType:
    "Healthcare Management Systems, Fitness App Development, Telemedicine Solutions, Hospital ERP Software",
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
    "Capyngen provides cutting-edge digital solutions for the healthcare and fitness industry, including hospital management systems, telemedicine platforms, and fitness tracking applications that enhance patient care and wellness experiences.",
  url: "https://www.capyngen.com/industries/healthcare-fitness",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/healthcareFitness5-C4Cixs5L.jpg",
    caption:
      "Healthcare and Fitness IT Solutions | Telemedicine | Fitness Apps | Hospital ERP",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a healthcare app development company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It makes apps that are secure and conform to HIPAA for hospitals, clinics, and healthcare centers.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build telemedicine platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop telemedicine platforms that offer video call and patient management facilities besides keeping the data secure.",
      },
    },
    {
      "@type": "Question",
      name: "Are your solutions HIPAA compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. All our healthcare applications are within HIPAA guidelines for securing patients’ data.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer EHR software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we create custom EHR software that allows smooth management of patient data.",
      },
    },
    {
      "@type": "Question",
      name: "Can fitness centers benefit from your apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we create personalized fitness apps for gyms, trainers, and wellbeing startups.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer remote patient monitoring systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design IoT-enabled platforms that allow live health oversight.",
      },
    },
    {
      "@type": "Question",
      name: "Can small clinics use your software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our products are scalable and fit to be used by small and big healthcare providers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom fitness tracking apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we'd be happy to help you with a project that fits your needs exactly for a custom health and fitness app.",
      },
    },
    {
      "@type": "Question",
      name: "How is the security of patient data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We take advantage of encryption, HIPAA-compliant servers, and access control policies implemented for the utmost security.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer data analytics solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide software that collects and analyzes health data and presents insights in an understandable way.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for your solutions to integrate with legacy systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we have the capacity to ensure the smooth integration of your current healthcare infrastructure with our products.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support wearable device integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we produce apps that can be compatible with IoT technologies and wearable devices.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve hospitals, clinics, gyms, fitness brands, and telemedicine providers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer maintenance after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are always available for support and upgrades long after the product release.",
      },
    },
    {
      "@type": "Question",
      name: "What is the reason for choosing Capyngen for healthcare software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We come with experience, security, bespoke solutions, and new ideas to produce the best outcome.",
      },
    },
  ],
};

const HealthcareAndFitness = () => {
  const faqItems = [
    {
      question: "What does a healthcare app development company do?",
      answer:
        "It makes apps that are secure and conform to HIPAA for hospitals, clinics, and healthcare centers.",
    },
    {
      question: "Can you build telemedicine platforms?",
      answer:
        "We develop telemedicine platforms that offer video call and patient management facilities besides keeping the data secure.",
    },
    {
      question: "Are your solutions HIPAA compliant?",
      answer:
        "Definitely. All our healthcare applications are within HIPAA guidelines for securing patients’ data.",
    },
    {
      question: "Do you offer EHR software?",
      answer:
        "Yes, we create custom EHR software that allows smooth management of patient data.",
    },
    {
      question: "Can fitness centers benefit from your apps?",
      answer:
        "Yes, we create personalized fitness apps for the gym, trainer, and wellbeing startup.",
    },
    {
      question: "Do you offer remote patient monitoring systems?",
      answer:
        "Yes, we design IoT-enabled platforms that allow live health oversight.",
    },
    {
      question: "Can small clinics use your software?",
      answer:
        "Yes. Our products are scalable and fit to be used by small and big healthcare providers.",
    },
    {
      question: "Do you build custom fitness tracking apps?",
      answer:
        "Yes, we'd be happy to help you with a project that fits your needs exactly for custom health and fitness app.",
    },
    {
      question: "How is the security of patient data?",
      answer:
        "We take advantage of encryption, HIPAA-compliant servers, and access control policies implemented for the utmost security.",
    },
    {
      question: "Do you offer data analytics solutions?",
      answer:
        "Yes, we provide the software that collects and analyzes health data and presents the insights in an understandable way.",
    },
    {
      question:
        "Is it possible for your solutions to integrate with legacy systems?",
      answer:
        "Yes, we have the capacity to ensure the smooth integration of your current healthcare infrastructure with our products.",
    },
    {
      question: "Do you support wearable device integration?",
      answer:
        "Yes, we produce apps that can be compatible with the IoT technologies and wearable devices.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve hospitals, clinics, gyms, fitness brands, and telemedicine providers.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes, we are always available for support and upgrades long after the product release.",
    },
    {
      question:
        "What is the reason for choosing Capyngen for healthcare software?",
      answer:
        "We come with experience, security, bespoke solutions, and new ideas to produce the best outcome.",
    },
  ];

  const servicesData = [
    {
      image: assets.healthcareFitness6,
      title: "Hospital Management Software",
      desc: "Make patient data digital, simplify billing, and create decision-making dashboards through automation of workflows.",
    },
    {
      image: assets.healthcareFitness7,
      title: "Telemedicine Platforms",
      desc: "Provide a variety of services such as: remote pre-consultations, video calls, appointment scheduling, and monitoring of patient's health.",
    },
    {
      image: assets.healthcareFitness8,
      title: "Digital Fitness Solutions",
      desc: "Gym, personal trainer, and wellness brand app development of customized fitness to increase engagement.",
    },
    {
      image: assets.healthcareFitness9,
      title: "Patient Management Systems",
      desc: "The system securely stores patient history, appointments, treatment plans, and insurance details.",
    },
    {
      image: assets.healthcareFitness10,
      title: "EHR Software Solutions",
      desc: "Facilitate the storage, sharing, and real-time data access for medical professionals, all in accordance with HIPAA regulations.",
    },
    {
      image: assets.healthcareFitness11,
      title: "Healthcare Data Analytics",
      desc: "Implement health data analytics software that supports the development of insights, the activity of forecasting, and the improvement of organization.",
    },
  ];
  const typesData = [
    {
      icon: <FaBuilding />,
      title:
        "Extensive experience in healthcare software development that is HIPAA-compliant.",
      desc: "",
    },
    {
      icon: <FaUserFriends />,
      title: "IT solutions which are customizable, scalable, and secure.",
      desc: "",
    },
    {
      icon: <FaGavel />,
      title:
        "The track record of Capyngen includes healthcare app development and the fitness sector.",
      desc: "",
    },
    {
      icon: <FaHome />,
      title:
        "Support for every stage of the product lifecycle: from strategy to implementation to product enhancement.",
      desc: "",
    },
    {
      icon: <FaUserTie />,
      title: "Top-tier technology stack with AI, Cloud, and Big Data.",
      desc: "",
    },
    {
      icon: <FaGlobe />,
      title:
        "The company has received excellent client feedback and always delivers on time.",
      desc: "",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Complicated healthcare data management",
      description: "",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Unproductive care and record tracking of the patients",
      description: "",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title:
        "Absence of completely safe telemedicine and remote monitoring devices",
      description: "",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title:
        "Health clubs that are suffering from poor management of routine operations",
      description: "",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Difficulties of regulatory compliance and HIPAA",
      description: "",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title:
        "Lack of interoperability between digital platforms and legacy systems",
      description: "",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "AI & Machine Learning",
      description:
        "The main areas of AI application in healthcare are predictive health analytics and personalization of healthcare services.",
      image: assets.healthcareFitness12,
      cardBg: "bg-blue-100",
    },
    {
      title: "Cloud Platforms",
      description:
        "Hospitals and fitness centers use cloud platforms for securely storing and managing their data and for offering scalability of their services to customers.",
      image: assets.healthcareFitness13,
      cardBg: "bg-green-100",
    },
    {
      title: "Mobile & Web Development Frameworks",
      description:
        "These are one of the main technologies that enable the building of high-performance mobile and web applications.",
      image: assets.healthcareFitness14,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Data Security & HIPAA Compliance Tools",
      description:
        "These are networks of security measures that ensure privacy, and enhance the trust of healthcare professionals and their clients.",
      image: assets.healthcareFitness15,
      cardBg: "bg-purple-100",
    },
    {
      title: "IoT & Wearables Integration",
      description:
        "A remote patient monitoring system is an example of the Internet of Things (IoT) and wearable devices integration.",
      image: assets.healthcareFitness16,
      cardBg: "bg-pink-100",
    },
    {
      title: "Analytics & Dashboards",
      description:
        "Continuous, plugged-in, quantitative data is one source for real-time reporting, allowing users to make informed decisions.",
      image: assets.healthcareFitness17,
      cardBg: "bg-orange-100",
    },
  ];

  const marketingCards = [
    {
      img: assets.healthcareFitness1,
      alt: "Christmas background 3D cartoon",
      text: "Digital Health Connection to Care",
    },
    {
      img: assets.healthcareFitness2,
      alt: "A beautiful glowing flower",
      text: "Making Healthy Decisions Smarter",
    },
    {
      img: assets.healthcareFitness3,
      alt: "A magical leopard",
      text: "When Fitness Meets Technology",
    },
    {
      img: assets.healthcareFitness4,
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Digital Transformation of a Healthier Future",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>Healthcare & Fitness App Development Company | Capyngen</title>
        <meta
          name="description"
          content="Capyngen develops custom healthcare & fitness apps — from hospital management to telemedicine and gym solutions, enhancing efficiency and patient care."
        />
        <meta
          name="keywords"
          content="Healthcare & Fitness App Development Company | Capyngen"
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
      {/* 1. HERO SECTION (BANNER11 - RETAINED EXACTLY AS REQUESTED)                */}
      {/* ========================================================================= */}
      <Banner11
        heading=" with IT Solutions Beyond Imagination"
        highlight="Transforming Healthcare & Fitness"
        description="One of the innovative ways to improve patient care is developing software which will automate the process of hospitals, clinics and fitness centres."
        cards={marketingCards}
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / HEALTHCARE & FITNESS (SPLIT LIGHT SECTION)                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.healthcareFitness5}
                alt="Healthcare and Fitness IT Revolution"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Healthcare & Fitness Revolutionized by IT
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> is a trusted healthcare and fitness app development company engineering HIPAA-compliant mobile applications, telemedicine software, and hospital management ecosystems that elevate patient outcomes.
              </p>
              <p>
                We enable hospitals, private practices, and fitness studios to undergo friction-free digital transformation, enhancing member retention and clinical workflow efficiency.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Strict HIPAA & GDPR compliance built into every database and API layer.",
                "Real-time telehealth consultations and secure electronic health records (EHR).",
                "Connected fitness tracking apps integrating wearable devices and IoT hardware.",
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
                Schedule Healthcare Strategy Session
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INDUSTRY CHALLENGES WE SOLVE (DARK CARDS GRID)                         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industry Challenges We Solve
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Eliminating administrative friction, securing confidential patient health records, and enabling connected fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, idx) => (
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
      {/* 4. COMPLETE HEALTHCARE & FITNESS IT SERVICES (LIGHT CARDS)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Complete Healthcare & Fitness IT Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Custom-built architectures crafted for hospitals, digital clinics, telehealth providers, and gym networks.
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
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGIES WE USE (6 DARK CARDS)                                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Technologies We Use
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Modern tech stacks engineered for resilient security, cloud scale, and real-time biometric metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
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
      {/* 6. WHY CHOOSE CAPYNGEN (SPLIT LIGHT SECTION)                             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.healthcare}
                alt="Why Choose Capyngen Healthcare"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Your trusted technological partner for hospital grade stability and HIPAA-governed product development:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {typesData.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-blue-600 transition-colors duration-150"
                >
                  <div className="text-blue-600 text-2xl mt-1 shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-slate-900 text-sm sm:text-base leading-snug"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {benefit.title}
                    </h4>
                    {benefit.desc && (
                      <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                        {benefit.desc}
                      </p>
                    )}
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
              Digitize Your Healthcare & Fitness Operations Today
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Boost patient care, operational efficiency, and member retention with HIPAA-compliant healthcare and fitness software solutions.
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

export default HealthcareAndFitness;
