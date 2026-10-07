import React from "react";
import { assets } from "../assets/assets";
import Banner4 from "../components/Banner4";
import CardsSectionImage from "../components/CardsSectionImage";
import FAQSection2 from "../components/FAQSection2";
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
  FaUserCog,
  FaMicrochip,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import HowWeWork from "../components/HowWeWork";
import TopRatedCompany from "../components/TopRatedCompany";
import BenefitsSection from "../components/BenefitsSection";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/insurance#webpage",
  url: "https://www.capyngen.com/industries/insurance",
  name: "IT Solutions for Insurance Industry | Best Digital & Software Services",
  description:
    "Capyngen provides innovative IT solutions for the insurance industry. We build custom software and digital platforms to automate, secure, and grow your business.",
  inLanguage: "en-US",
  keywords: [
    "Insurance software development",
    "Insurance mobile applications",
    "Health insurance software",
  ],
  isPartOf: {
    "@type": "WebSite",
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
    },
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "IT Solutions for Insurance Industry | Best Digital & Software Services",
  name: "IT Solutions for Insurance Industry | Best Digital & Software Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  url: "https://www.capyngen.com/industries/insurance",
  description:
    "Capyngen provides innovative IT solutions for the insurance industry. We build custom software and digital platforms to automate, secure, and grow your business.",
  keywords: [
    "Insurance software development",
    "Insurance mobile applications",
    "Health insurance software",
  ],
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What type of insurance software solutions do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our work ranges from custom insurance apps, CRM systems, claims management platforms, and policy management portals to anything else that is necessary for the insurance sector.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop a digital platform for policy management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. We are crafting such platforms that allow users to purchase, renew, and monitor their policies with no problem.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide insurance mobile app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, we create iOS and Android apps for life, health, auto, and general insurance companies.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build AI-powered claim settlement systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our AI-driven solutions handle the automation of the claims process and minimize fraud.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create customer self-service portals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, in fact, we create self-service portals where buyers can purchase policies, get renewals, and register claims.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate chatbots into insurance apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we embed AI chatbots for instant customer support and policy recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide solutions for health insurance companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design apps and portals for health insurance companies with features like claim tracking and telemedicine integration.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop auto insurance apps with telematics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the auto insurance applications that we produce incorporates telematics that allows the use of usage-based insurance models.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer solutions for life insurance companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provision platforms for life insurance that come with premium calculators, reminders, and policy management features.",
      },
    },
    {
      "@type": "Question",
      name: "Can your software reduce claim processing time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The automation by AI and digital workflows benefits claim settlements by speeding up the process greatly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide cloud-based insurance solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we set the insurance platforms on the cloud that is scalable, safe, and without any downtimes.",
      },
    },
    {
      "@type": "Question",
      name: "Can your insurance solutions help reduce fraud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the combination of AI and data analytics unveil the cases of fraudulent claims and identify the risky patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate payment gateways for insurance premiums?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, along with the integration of different payment methods such as cards, UPI, and wallets, we ensure the security of the transactions.",
      },
    },
    {
      "@type": "Question",
      name: "Can your platforms integrate with third-party systems like hospitals or vehicle databases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By building APIs, we enable the connection with external systems to result in faster data verification.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support for insurance applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we do full cycle development, maintenance, and support services.",
      },
    },
  ],
};

const Insurance = () => {
  const slides = [
    {
      image: assets.insuranceBanner1,
      title: "InsurTech Solutions for the Digital Age",
      subtitle:
        "Redesign the functions of underwriting, claims, and customer service with the help of next-gen insurance software.",
    },
    {
      image: assets.insuranceBanner2,
      title: "Powering Insurance Transformation",
      subtitle:
        "Implement AI, analytics, and automation for simpler processes and higher customer trust.",
    },
    {
      image: assets.insuranceBanner3,
      title: "Secure, Smart & Scalable Insurance Platforms",
      subtitle:
        "Develop measurement systems that use data to offer better insurance coverage and faster services.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Cellular Insurance Apps",
      description: (
        <span>
          Design <Link to={"/app-development"}>insurance mobile apps</Link> for
          iOS and Android that will process basic activities such as policy
          delivery, claim registration, and fraud detection automatically.
        </span>
      ),
      image: assets.insurance2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Policy Management System",
      description:
        "For policy management software, we develop the kind that will fully automate the whole policy lifecycle from creation through renewal while remaining accurate, compliant, and scalable software.",
      image: assets.insurance3,
      cardBg: "bg-green-100",
    },
    {
      title: "Claims Management System",
      description:
        "The right step is to develop a highly technologically sophisticated claims management system through which all such operations such as submission of claims, checking thereof, identification of frauds/wrong claims, if any, and payment thereof are conducted speedily and conveniently.",
      image: assets.insurance4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Insurance CRM Solutions",
      description:
        "The installation of a tailored CRM for the benefit of the insurers is the key to a successful customer relationship management system as it enables the offering of personalized services, customer tracking, and the use of integrated help panels.",
      image: assets.insurance5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Health & Life Insurance Software",
      description:
        "Capyngen provides life insurance software and health insurance software featuring robust reporting along with analytics powered by artificial intelligence and integration.",
      image: assets.insurance6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Insurance ERP Development",
      description:
        "Insurance ERP software is the easiest way to consolidate all the activities of the company that involves engaging agents, customers, policyholders, and regulatory compliance.",
      image: assets.insurance7,
      cardBg: "bg-red-100",
    },
  ];
  const faqItems = [
    {
      question: "What type of insurance software solutions do you provide?",
      answer:
        "Our work ranges from custom insurance apps, CRM systems, claims management platforms, and policy management portals to anything else that is necessary for the insurance sector.",
    },
    {
      question: "Can you develop a digital platform for policy management?",
      answer:
        "Definitely. We craft platforms that allow users to purchase, renew, and monitor their policies with ease and security.",
    },
    {
      question: "Do you provide insurance mobile app development?",
      answer:
        "Of course, we create iOS and Android apps for life, health, auto, and general insurance companies.",
    },
    {
      question: "Can you build AI-powered claim settlement systems?",
      answer:
        "Yes, our AI-driven solutions automate the claims process and help in detecting and minimizing fraudulent activities.",
    },
    {
      question: "Do you create customer self-service portals?",
      answer:
        "Yes, we develop self-service portals where policyholders can purchase policies, renew them, and register claims effortlessly.",
    },
    {
      question: "Can you integrate chatbots into insurance apps?",
      answer:
        "Yes, we embed AI chatbots for instant customer support, claim assistance, and personalized policy recommendations.",
    },
    {
      question: "Do you provide solutions for health insurance companies?",
      answer:
        "Yes, we design apps and portals for health insurance companies featuring claim tracking, policy management, and telemedicine integration.",
    },
    {
      question: "Can you develop auto insurance apps with telematics?",
      answer:
        "Yes, our auto insurance apps incorporate telematics that enable usage-based insurance models and real-time tracking.",
    },
    {
      question: "Do you offer solutions for life insurance companies?",
      answer:
        "Yes, we provide platforms for life insurance companies with premium calculators, reminders, and policy management tools.",
    },
    {
      question: "Can your software reduce claim processing time?",
      answer:
        "Through AI automation and digital workflows, our software significantly accelerates claim settlement processes.",
    },
    {
      question: "Do you provide cloud-based insurance solutions?",
      answer:
        "Yes, we deploy cloud-based insurance platforms that are scalable, secure, and ensure uninterrupted service availability.",
    },
    {
      question: "Can your insurance solutions help reduce fraud?",
      answer:
        "Yes, we leverage AI and data analytics to detect fraudulent claims and uncover suspicious activity patterns.",
    },
    {
      question: "Do you integrate payment gateways for insurance premiums?",
      answer:
        "Yes, we integrate secure payment gateways supporting cards, UPI, wallets, and net banking for smooth premium transactions.",
    },
    {
      question:
        "Can your platforms integrate with third-party systems like hospitals or vehicle databases?",
      answer:
        "Yes, we build APIs that enable seamless integration with external systems for faster data verification and claim validation.",
    },
    {
      question: "Do you offer ongoing support for insurance applications?",
      answer:
        "Yes, we provide complete lifecycle support, including development, maintenance, updates, and continuous monitoring.",
    },
  ];
  const servicesData = [
    {
      image: assets.insurance8,
      title: "Robotic Process Automation (RPA)",
      desc: "Automate routine insurance processes to significantly reduce manual workloads involved in claims processing, renewals, and compliance tasks.",
    },
    {
      image: assets.insurance9,
      title: "AI Chatbot Integration",
      desc: "Deploy intelligent assistants to provide 24/7 customer support, instantly resolving policy, claim, and inquiry issues while enhancing user satisfaction.",
    },
    {
      image: assets.insurance10,
      title: "Blockchain in Insurance",
      desc: "Implement blockchain-based solutions for fraud prevention, secure policy validation, and tamper-proof smart contracts across insurance workflows.",
    },
    {
      image: assets.insurance11,
      title: "Cloud Integration",
      desc: "Enable secure, scalable, and cost-efficient deployment of insurance software through seamless cloud infrastructure integration and maintenance.",
    },
    {
      image: assets.insurance12,
      title: "Web3 & InsurTech Solutions",
      desc: "Leverage decentralized technologies to create next-generation, user-owned insurance platforms with transparent operations and digital asset support.",
    },
    {
      image: assets.insurance13,
      title: "Predictive Analytics for Risk Assessment",
      desc: "Use advanced data analytics and machine learning models to predict customer behavior, assess risk, and optimize underwriting accuracy and pricing.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Customer-Specific Solutions",
      description:
        "Our insurance application development solutions are carefully crafted to meet your organization’s unique business and operational needs.",
      icon: <FaUserCog className="text-4xl text-white" />,
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We build future-ready insurance software empowered with AI, RPA, blockchain, and cloud innovations for maximum efficiency and scalability.",
      icon: <FaMicrochip className="text-4xl text-white" />,
    },
    {
      title: "Robust Security",
      description:
        "Implementing multi-factor authentication, advanced data encryption, and full compliance with insurance data protection standards.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
    {
      title: "Trusted Experience",
      description:
        "With over 15 years of experience in insurance and financial software development, we deliver solutions trusted worldwide.",
      icon: <FaHandshake className="text-4xl text-white" />,
    },
    {
      title: "Support 24/7",
      description:
        "Continuous technical support, maintenance, and updates to ensure your application’s uninterrupted performance and reliability.",
      icon: <FaHeadset className="text-4xl text-white" />,
    },
    {
      title: "Regulatory Compliance Expertise",
      description:
        "Our systems are developed in line with industry regulations, ensuring compliance with standards like GDPR, HIPAA, and ISO 27001.",
      icon: <FaBalanceScale className="text-4xl text-white" />,
    },
  ];
  const solutionsData = [
    {
      title: "Insurance App Consultation",
      desc: "360-degree consultation for policy management, claims processing, and digital insurance workflow optimization.",
    },
    {
      title: "Custom Insurance Software Solutions",
      desc: "Fully managed software solutions covering claims, policy administration, and customer relationship management systems.",
    },
    {
      title: "Digital Transformation for Insurance Companies",
      desc: "Empowering insurers to move beyond traditional data processing with next-generation InsurTech-driven digital ecosystems.",
    },
    {
      title: "Mobile Insurance Development",
      desc: "Develop secure, scalable, and user-friendly mobile insurance applications with a focus on data protection and reliability.",
    },
    {
      title: "Blockchain Integration",
      desc: "Integrate blockchain to enable transparent, tamper-proof, and trusted insurance transactions and smart contracts.",
    },
    {
      title: "Regulatory Compliance Solutions",
      desc: "Ensure full compliance with AML, KYC, HIPAA, GDPR, and other regulatory standards for global insurance operations.",
    },
    {
      title: "Business Intelligence Integration",
      desc: "Execute real-time data visualization, analytics, and reporting to enhance strategic decision-making and efficiency.",
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Protect insurance data storage and transmission from vulnerabilities through multi-layered cybersecurity frameworks.",
    },
    {
      title: "Insurance CRM System",
      desc: "Deliver easy-to-use, interactive CRM systems with personalized dashboards for agents, brokers, and customers.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for Insurance Industry | Best Digital & Software Services
        </title>
        <meta
          name="description"
          content="Capyngen provides innovative IT solutions for the insurance industry. We build custom software and digital platforms to automate, secure, and grow your business."
        />
        <meta
          name="keywords"
          content="IT Solutions for Insurance Industry | Best Digital & Software Services"
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
      {/* 2. OVERVIEW / INSURANCE (SPLIT LIGHT SECTION)                             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.insurance1}
                alt="Insurance Software Development Services"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Trusted Insurance Software Development Services
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Transform your insurance operations with <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen's</Link> cutting-edge digital platforms. We engineer customized policy administration portals, automated claims settlement systems, and scalable InsurTech mobile applications.
              </p>
              <p>
                Our solutions integrate AI-driven risk scoring, multi-channel customer self-service, and ironclad regulatory compliance across life, health, auto, and commercial insurance providers.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Strict compliance with GDPR, HIPAA, KYC, AML, and insurance regulatory standards.",
                "Automated claims verification and real-time fraud pattern detection with AI.",
                "Omnichannel agent and policyholder portals with seamless premium payment gateways.",
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
                Schedule Insurance Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CAPYNGEN FOR INSURANCE (DARK CARDS GRID)                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Insurance Software
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Customer-specific architectures, financial domain expertise, robust multi-layer encryption, and strict regulatory compliance.
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
                  <div className="text-blue-400 text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
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
      {/* 4. INSURANCE SOFTWARE DEVELOPMENT SOLUTIONS (LIGHT CARDS)                 */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Insurance Software Development Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Fully dedicated to building scalable, automated, and secure digital foundations for insurance enterprises.
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
                    className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
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
      {/* 5. LATEST TECHNOLOGY WE IMPLEMENT (DARK CARDS)                            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Latest Technology We Implement
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Blending robotic process automation, predictive analytics, AI assistants, and blockchain smart contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-400 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
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
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INSURANCE SOFTWARE SUITE (SPLIT LIGHT SECTION)                         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.insurance15}
                alt="Insurance Software Development Services"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Enterprise Insurance Software Capabilities
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Full lifecycle software engineering tailored to achieve precision, fraud reduction, and elevated policyholder satisfaction:
            </p>

            <div className="space-y-4 pt-2">
              {solutionsData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-blue-600 transition-colors duration-150"
                >
                  <div className="w-2.5 h-2.5 rounded-none bg-blue-600 mt-2 shrink-0" />
                  <div>
                    <h4
                      className="font-bold text-slate-900 text-base mb-1"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {item.desc}
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
      <section className="py-14 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Transform Your Insurance Enterprise with Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Deploy AI-powered claims processing, cloud policy administration, and friction-free mobile InsurTech applications.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-none shadow-lg transition-colors duration-150 shadow-xl group text-base"
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

export default Insurance;
