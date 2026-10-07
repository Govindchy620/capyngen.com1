import React from "react";
import ShuffleHero from "../components/ShuffleHero";
import TopRatedCompany from "../components/TopRatedCompany";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import IndustryServices from "../components/IndustryServices";
import {
  FaAndroid,
  FaApple,
  FaBullhorn,
  FaHandsHelping,
  FaNetworkWired,
  FaPalette,
  FaSearch,
  FaTags,
  FaUsers,
  FaVrCardboard,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";
import AppTypesSection from "../components/AppTypesSection";
import FAQSection2 from "../components/FAQSection2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://www.capyngen.com/industries/manufacturing-and-automotive#webpage",
  url: "https://www.capyngen.com/industries/manufacturing-and-automotive",
  name: "Manufacturing Software Solutions | Smart Factory & ERP Systems – Capyngen",
  description:
    "Capyngen delivers advanced manufacturing software solutions. From smart factory automation to ERP, IoT, and supply chain software — we drive industrial innovation.",
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
  "@id":
    "https://www.capyngen.com/industries/manufacturing-and-automotive#service",
  name: "Manufacturing & Automotive Industry Solutions",
  serviceType:
    "Industry 4.0 Automation, Industrial Software, Connected Automotive Technology Solutions",
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
    "Capyngen delivers advanced manufacturing software solutions. From smart factory automation to ERP, IoT, and supply chain software — we drive industrial innovation. :contentReference[oaicite:0]{index=0}",
  url: "https://www.capyngen.com/industries/manufacturing-and-automotive",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/manufacturingBanner5-CyEqHCvn.png",
    caption:
      "Manufacturing Software Solutions | Smart Factory & ERP Systems – Capyngen",
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
  "@id": "https://www.capyngen.com/industries/manufacturing-and-automotive#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Manufacturing & Automotive digital solutions are what?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are software systems and digital platforms that automate production, supply chain, and automotive operations at the factory level.",
      },
    },
    {
      "@type": "Question",
      name: "Do you make custom ERP for manufacturing companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen builds custom ERP software from scratch for inventory, production, workforce, and distribution management.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to improve automotive supply chain management by your solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our SCM software optimizes structure, logistics, tracking, and vendor coordination to improve supply chain management.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have IoT-based manufacturing solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop IoT-enabled smart factory systems that offer real-time machine condition monitoring and predictive maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you utilize AI to automate production lines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, our AI-powered automation enhances energy efficiency, reduces human error, and improves production accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create MES (Manufacturing Execution Systems)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our MES technologies monitor production, quality, and machine performance to ensure optimal factory efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Will your solutions be able to help automotive plants eliminate downtime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, by using predictive analytics and IoT alerts, our systems help reduce equipment failures and eliminate downtime.",
      },
    },
    {
      "@type": "Question",
      name: "Are you the one creating digital twin solutions for automotive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we create digital twin solutions for vehicle design, testing, and performance optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate manufacturing robotics with your solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer robotic process automation (RPA) and robotic assembly line integration for manufacturing systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create automotive dealership apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we build apps that enable automotive dealerships to manage inventory, sales, and customer relationships efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop fleet management systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops GPS-enabled fleet management platforms tailored for logistics and automotive businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do your solutions integrate with Industry 4.0?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our systems combine AI, IoT, Big Data, and automation to deliver fully integrated Industry 4.0 solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to create AR/VR apps for automotive training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop AR/VR applications for workforce training, vehicle simulation, and safety demonstrations.",
      },
    },
    {
      "@type": "Question",
      name: "How reliable are your manufacturing solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our manufacturing solutions follow industry security standards, use encryption, and role-based access to ensure full reliability.",
      },
    },
    {
      "@type": "Question",
      name: "Factory and automotive clients can receive support from you at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides continuous monitoring, system upgrades, and 24/7 technical support for all manufacturing and automotive clients.",
      },
    },
  ],
};

const ManufacturingAutomotive = () => {
  const faqItems = [
    {
      question: "Manufacturing & Automotive digital solutions are what?",
      answer:
        "These are software and platforms that automate production, supply chain, and automotive operations at the factory level.",
    },
    {
      question: "Do you make custom ERP for manufacturing companies?",
      answer:
        "Indeed, we are from scratch creating ERP software for inventory, production, workforce, and distribution management.",
    },
    {
      question:
        "Is it possible to improve automotive supply chain management by your solutions?",
      answer:
        "Our SCM software is aimed at structure optimization, which includes logistics, tracking, and vendor coordination.",
    },
    {
      question: "Do you have IoT-based manufacturing solutions?",
      answer:
        "We create smart, IoT-enabled factories where machines have real-time condition monitoring and predictive maintenance is in place.",
    },
    {
      question: "Can you utilize AI to automate production lines?",
      answer:
        "Definitely, we bring in AI-powered automation that is of great energy saving and is error-free or reduced error rate is realized.",
    },
    {
      question: "Do you create MES (Manufacturing Execution Systems)?",
      answer:
        "Our MES technologies identify production, quality, and performance changes in machines.",
    },
    {
      question:
        "Will your solutions be able to help automotive plants eliminate downtime?",
      answer:
        "Yes, they make provisions for failures through predictive analytics, and they reduce downtime through IoT alerts.",
    },
    {
      question:
        "Are you the one creating digital twin solutions for automotive?",
      answer:
        "Yes, we make digital twins for vehicle design, testing, and performance enhancement.",
    },
    {
      question: "You can integrate manufacturing robotics with your solutions?",
      answer:
        "Given yes, we provide robotic process automation (RPA) and robotic assembly line integration.",
    },
    {
      question: "Do you create automotive dealership apps?",
      answer:
        "Yes, we develop apps allowing dealerships to better control their inventories, sales, and customers.",
    },
    {
      question: "Can you develop fleet management systems?",
      answer:
        "We have such fleet management platform that are GPS-enabled and built for logistics and automotive companies.",
    },
    {
      question: "Do your solutions integrate with Industry 4.0?",
      answer:
        "Indeed, we use AI, IoT, Big Data, and automation together so as to achieve smart manufacturing.",
    },
    {
      question: "Are you able to create AR/VR apps for automotive training?",
      answer:
        "Yes, we produce AR/VR apps that can be used for workforce training and vehicle simulation.",
    },
    {
      question: "How reliable are your manufacturing solutions?",
      answer:
        "We employ encrypted systems, role-based access, and compliance with industry standards.",
    },
    {
      question:
        "Factory and automotive clients can receive support from you at any time?",
      answer:
        "Yes, we are always available to provide continuous monitoring, upgrades, and technical support.",
    },
  ];
  const heroImages = [
    {
      id: 1,
      src: assets.manufacturingBanner1,
    },
    {
      id: 2,
      src: assets.manufacturingBanner2,
    },
    {
      id: 3,
      src: assets.manufacturingBanner3,
    },
    {
      id: 4,
      src: assets.manufacturingBanner4,
    },
    {
      id: 5,
      src: assets.manufacturingBanner5,
    },
    {
      id: 6,
      src: assets.manufacturingBanner6,
    },
    {
      id: 7,
      src: assets.manufacturingBanner7,
    },
    {
      id: 8,
      src: assets.manufacturingBanner8,
    },
    {
      id: 9,
      src: assets.manufacturingBanner9,
    },
    {
      id: 10,
      src: assets.manufacturingBanner10,
    },
    {
      id: 11,
      src: assets.manufacturingBanner11,
    },
    {
      id: 12,
      src: assets.manufacturingBanner12,
    },
    {
      id: 13,
      src: assets.manufacturingBanner13,
    },
    {
      id: 14,
      src: assets.manufacturingBanner14,
    },
    {
      id: 15,
      src: assets.manufacturingBanner15,
    },
    {
      id: 16,
      src: assets.manufacturingBanner16,
    },
  ];
  const cardsSectionDifferentColorData1 = [
    {
      title: "",
      description:
        "Manufacturing software specially crafted by the user to meet the production requirements of the factory with no less than the needed functionalities.",
      icon: (
        <FaHandsHelping className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e3a8a] to-[#1e40af] hover:from-[#1d4ed8] hover:to-[#2563eb]", // deep to vibrant blue
    },
    {
      title: "",
      description:
        " Just one of the many already connected factories where the implementation of AI, IoT, and automation has been made for better, smarter, and more effective production lines.",
      icon: (
        <FaSearch className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#111827] to-[#374151] hover:from-[#1f2937] hover:to-[#4b5563]", // black to gray
    },
    {
      title: "",
      description:
        "Advanced ERP system for the manufacturing industry that covers resources planning, supply of materials and operations, and inventory management.",
      icon: (
        <FaTags className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-blue-500 to-[#1e293b] hover:from-blue-500 hover:to-blue-500", // navy black to slate gray
    },
    {
      title: "",
      description:
        "Implement smart systems to supervise and manage every aspect of the supply chain starting from logistics and the purchase of goods up to the collaboration with the suppliers.",
      icon: (
        <FaPalette className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#374151] to-[#6b7280] hover:from-[#4b5563] hover:to-[#9ca3af]", // mid gray to light gray
    },
    {
      title: "",
      description:
        "New technologies, such as automated workflows, robotics, and real-time monitoring, are the means for which the efficiency of the company will be greatly improved.",
      icon: (
        <FaBullhorn className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e293b] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa]", // dark navy to bright blue
    },
    {
      title: "",
      description:
        "Enable machines, devices, and systems to gather performance data and even predict problems by allowing them to be connected seamlessly through IoT technology.",
      icon: (
        <FaUsers className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#0f172a] to-[#4b5563] hover:from-[#1e293b] hover:to-[#6b7280]", // dark slate to gray
    },
    {
      title: "",
      description:
        "Use AI & ML to open up the complete treasure of data one has and then use it for the forecasting of business, and for the purpose of cutting down on expenses.",
      icon: (
        <FaHandsHelping className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e3a8a] to-[#1e40af] hover:from-[#1d4ed8] hover:to-[#2563eb]", // deep to vibrant blue
    },
    {
      title: "",
      description:
        "With the aid of dashboard features, one can not only track but also manage and optimize the fleets and assets of the industry.",
      icon: (
        <FaSearch className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#111827] to-[#374151] hover:from-[#1f2937] hover:to-[#4b5563]", // black to gray
    },
    {
      title: "",
      description:
        "Manufacturing Cybersecurity Solutions, Secure operations, data, and networks with enterprise-grade protection.",
      icon: (
        <FaTags className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-blue-500 to-[#1e293b] hover:from-blue-500 hover:to-blue-500", // navy black to slate gray
    },
  ];
  const servicesData = [
    {
      image: assets.manufacturing2,
      title: "IoT in Manufacturing",
      desc: "Just-in-time data sharing and prediction of maintenance.",
    },
    {
      image: assets.manufacturing3,
      title: "Artificial Intelligence (AI/ML)",
      desc: "More intelligent creation planning and quality assurance.",
    },
    {
      image: assets.manufacturing4,
      title: "Cloud Computing",
      desc: "Easily expandable storage, off-site control, and uninterrupted connection.",
    },
    {
      image: assets.manufacturing5,
      title: "Blockchain",
      desc: "Open and safe supply chain administration.",
    },
    {
      image: assets.manufacturing6,
      title: "AR/VR",
      desc: (
        <span>
          Fascinating <Link to={"/industries/education"}>education</Link> and
          distant supervision facilities.
        </span>
      ),
    },
    {
      image: assets.manufacturing7,
      title: "Cybersecurity",
      desc: "Strong security against the industrial enemies.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Real-time Production Monitoring",
      description: "",
      image: assets.manufacturing8,
      cardBg: "bg-blue-100",
    },

    {
      title: "User-Friendly Dashboards",
      description: "",
      image: assets.manufacturing9,
      cardBg: "bg-green-100",
    },
    {
      title: "Machine & IoT Connectivity",
      description: "",
      image: assets.manufacturing10,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Predictive Analytics & Reporting",
      description: "",
      image: assets.manufacturing11,
      cardBg: "bg-pink-100",
    },
    {
      title: "Remote Diagnostics & Updates",
      description: "",
      image: assets.manufacturing12,
      cardBg: "bg-purple-100",
    },
    {
      title: "Customizable Modules",
      description: "",
      image: assets.manufacturing13,
      cardBg: "bg-red-100",
    },
  ];
  const appTypes = [
    {
      title: "ERP Software for Manufacturing",
      description: "",
      icon: <FaApple className="text-4xl text-white" aria-hidden="true" />,
    },
    {
      title: "Supply Chain Management Software",
      description: "",
      icon: <FaAndroid className="text-4xl text-white" aria-hidden="true" />,
    },
    {
      title: "IoT-Enabled Smart Factory Platforms",
      description: "",
      icon: (
        <FaVrCardboard className="text-4xl text-white" aria-hidden="true" />
      ),
    },
    {
      title: "Custom Fleet Management Solutions",
      description: "",
      icon: (
        <FaNetworkWired className="text-4xl text-white" aria-hidden="true" />
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          Manufacturing Software Solutions | Smart Factory & ERP Systems –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers advanced manufacturing software solutions. From smart factory automation to ERP, IoT, and supply chain software — we drive industrial innovation."
        />
        <meta
          name="keywords"
          content="Manufacturing Software Solutions | Smart Factory & ERP Systems – Capyngen"
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
      {/* 1. HERO SECTION (SHUFFLEHERO - RETAINED EXACTLY AS REQUESTED)             */}
      {/* ========================================================================= */}
      <ShuffleHero
        heading={
          <>
            Smart Software for{" "}
            <span className="text-blue-500">
              Manufacturing and Automotive Industries
            </span>
          </>
        }
        subheading=""
        description={
          <>
            <p>
              The Manufacturing sector is undergoing significant changes due to
              the adoption of Industry 4.0, the use of robots and machines, IoT,
              and smart technologies that are changing the way of manufacturing
              and supply chains.
            </p>
            <p className="pt-5">
              <Link to={"/"}>Capyngen</Link> is one of the best companies that
              provide software solutions for the manufacturing industry. No
              matter if you are looking for smart factory software, ERP for the
              manufacturing industry, or industrial automation software, we make
              it easy to manage operations, cut down on expenses, and optimize
              output.
            </p>
          </>
        }
        buttonText="Explore Now"
        themeColor="bg-blue-500 hover:bg-blue-600"
        bgColor="bg-gray-900"
        images={heroImages}
        gridCols={4}
        gridRows={4}
        shuffleInterval={3000}
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / MANUFACTURING & AUTOMOTIVE (SPLIT LIGHT SECTION)            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.manufacturing1}
                alt="Manufacturing Software Development"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Top Manufacturing Software Development Company
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                To stay competitive, industrial leaders are digitizing factory floors with the Internet of Things (IoT),{" "}
                <Link to="/enterprise-solutions" className="text-blue-600 hover:underline font-semibold">
                  Enterprise Resource Planning (ERP)
                </Link>{" "}
                platforms, and{" "}
                <Link to="/artificial-intelligence-services" className="text-blue-600 hover:underline font-semibold">
                  AI-powered predictive maintenance
                </Link>
                .
              </p>
              <p>
                At <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link>, we deliver custom manufacturing software solutions that energize assembly plants, Tier-1 automotive OEMs, and logistics supply chains with future-ready digital foundations.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Smart factory automation and real-time telemetry from shop-floor machinery.",
                "Custom ERP systems streamlining procurement, bill of materials, and inventory.",
                "Fleet tracking, asset health scoring, and predictive maintenance algorithms.",
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
                Schedule Factory Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. HIGH-END MANUFACTURING DEVELOPMENT SERVICES (DARK CARDS GRID)         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              High-End Manufacturing Software Development
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Intelligent, secure, and tailored software solutions for factory floor automation and supply chain optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionDifferentColorData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-400 text-3xl mb-4">
                    {item.icon}
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ADVANCED TECHNOLOGY INTEGRATIONS (LIGHT CARDS)                         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Advanced Technology Integrations in Manufacturing
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We integrate the latest Industry 4.0 innovations to future-proof your manufacturing enterprise.
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
                    className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FEATURES WE BUILD IN MANUFACTURING SOFTWARE (6 DARK CARDS)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Features We Build in Manufacturing Software
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Industrial capabilities designed for uptime, operator safety, and comprehensive production line visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MODULAR PREBUILT & CUSTOM PLATFORMS (SPLIT LIGHT SECTION)              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.manufacturing14}
                alt="Manufacturing Software Systems"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Manufacturing Software Solutions Made Simple
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our prebuilt modules and bespoke engineering make your digital manufacturing and automotive journey efficient and cost-effective:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {appTypes.map((app, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-slate-200 bg-slate-50 flex items-start gap-4 hover:border-blue-600 transition-colors duration-150"
                >
                  <div className="text-blue-600 text-2xl mt-1 shrink-0">
                    {app.icon}
                  </div>
                  <div>
                    <h4
                      className="font-bold text-slate-900 text-base leading-snug"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {app.title}
                    </h4>
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
              Create More Intelligent Manufacturing & Automotive Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Take advantage of our automotive software and industrial automation solutions designed specifically for your manufacturing lines to achieve scalable operations and maximum ROI.
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

export default ManufacturingAutomotive;
