import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Shield,
  ShieldCheck,
  Layers,
  Cpu,
  Coins,
  Globe,
  Lock,
  Zap,
  Check,
} from "lucide-react";
import {
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaExpand,
  FaDatabase,
  FaMobileAlt,
  FaCreditCard,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import blockchainHeroBg from "../assets/BLOC_KCH_AIN/1.png";
import blockchainGlobalSphere from "../assets/BLOC_KCH_AIN/2.png";
import FAQSection2 from "../components/FAQSection2";
import TechStack from "../components/TechStack";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/blockchain-development#webpage",
  url: "https://www.capyngen.com/blockchain-development",
  name: "Blockchain Development Solutions – India’s Best Blockchain Development Services",
  description:
    "Transform your business with our Blockchain Development Solutions – India’s trusted experts delivering secure, scalable, and cutting-edge blockchain services.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/blockchain3-CMJUCBo7.png",
    caption:
      "Blockchain Development Solutions | Best Blockchain Development Services in India",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/blockchain-development#service",
  name: "Blockchain Development Solutions – India’s Best Blockchain Development Services",
  description:
    "Transform your business with our Blockchain Development Solutions – India’s trusted experts delivering secure, scalable, and cutting-edge blockchain services.",
  url: "https://www.capyngen.com/blockchain-development",
  serviceType: "Blockchain Development Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/blockchain3-CMJUCBo7.png",
    caption: "Blockchain Development Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is blockchain development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain development solutions involve creating and deploying secure, decentralized systems where data is stored on distributed ledgers using professional blockchain development practices.",
      },
    },
    {
      "@type": "Question",
      name: "Why should my business choose blockchain technology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain brings transparency, tamper-proof security, automated smart contract execution, and eliminates intermediaries to reduce overall operational costs.",
      },
    },
    {
      "@type": "Question",
      name: "Which blockchain platforms do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with Ethereum, Solana, Polygon, Binance Smart Chain, Hyperledger Fabric, Polkadot, and Avalanche depending on your project needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is blockchain secure for enterprise businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cryptographic hashing, consensus algorithms, and decentralized distributed architectures make blockchain far more resilient to unauthorized tampering than conventional databases.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a blockchain development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical blockchain project timeline ranges from 4 to 12 weeks depending on smart contract complexity, auditing, and platform architecture requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer smart contract auditing and consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We conduct rigorous security audits, vulnerability assessments, and strategic architectural consulting from ideation to mainnet deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate blockchain with our existing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build custom middleware, Web3 RPC bridges, and REST/GraphQL APIs that connect decentralized ledgers directly into your existing ERP, CRM, and web applications.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom crypto tokens and NFTs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop ERC-20, ERC-721, ERC-1155, and SPL tokens along with custom minting mechanisms, royalty contracts, and marketplace portals.",
      },
    },
  ],
};

const BlockchainDevelopment = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const faqItems = [
    {
      question: "What is blockchain development?",
      answer:
        "The blockchain development solutions imply the creation of secure and decentralised systems in which the data is stored in distributed registries. The transaction records enable blockchain technology solutions to promote trust, security, and transparency compared to the case of normal databases.",
    },
    {
      question: "Why should my business choose blockchain technology?",
      answer:
        "Blockchain development solutions change industries by providing better protection with cryptographic encryption, transparent logs, lower costs, and international availability.",
    },
    {
      question: "Which blockchain platforms do you work with?",
      answer:
        "Our blockchain development services company uses Ethereum, Hyperledger, Solana, Binance Smart Chain, Polkadot, Cardano, and others, depending on the needs of customers.​",
    },
    {
      question: "Is blockchain safe for businesses?",
      answer:
        "Yes. Cryptography and decentralised networks are part of the enterprise blockchain solution that is more resistant to hacking than conventional systems.​",
    },
    {
      question: "What is the duration of blockchain development?",
      answer:
        "Generally, 4-12 weeks based on the complexity of the project, with our company in India, with expertise in Blockchain development.​",
    },
    {
      question: "Do you provide blockchain consulting services?",
      answer:
        "Yes, we offer complete-service blockchain development solutions, consultation services, and up to implementation.​",
    },
    {
      question: "Will Capyngen integrate blockchain with my existing systems?",
      answer:
        "Yes, we have a smooth integration with your current systems based on blockchain software development.​",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we offer affordable blockchain solutions for businesses, which can be used by startups as a Custom blockchain development company.​",
    },
    {
      question: "Do you offer after-sales service?",
      answer:
        "Yes, with maintenance, updates and continuous support on the project of enterprise blockchain development company.​",
    },
    {
      question: "Can blockchain be operationalised on a global basis?",
      answer:
        "Yes, through the right architecture, blockchain technology solutions can serve global-scale transactions and users.​",
    },
    {
      question:
        "What is my path to making my blockchain project with Capyngen?",
      answer:
        "The specialists of our blockchain development services will customise a professional blockchain development plan, free of charge, and in addition, they will request a consultation.​",
    },
  ];

  const benefitsSection1 = [
    {
      title: "Increased Security and Data Protection",
      desc: "The blockchain development solutions reduce breaches, fraud, and unauthorised access through the application of difficult encryption and distributed networks.",
    },
    {
      title: "Transparency & Traceability",
      desc: "Shared ledger logs are easy to verify transactions and enhance the trust of the stakeholders.",
    },
    {
      title: "Reduced Transaction Costs",
      desc: "By removing middlemen, the company will reduce costs and overheads to run operations at low costs.",
    },
    {
      title: "Quickened Processes and Payments",
      desc: "Blockchain software development facilitates an almost instantaneous execution, which reduces time wastage by intermediaries.",
    },
    {
      title: "Trustless Systems and Decentralisation",
      desc: "There is no one power in charge of the network; the trust is established through encryption.",
    },
    {
      title: "Immutable & Tamper-Proof Records",
      desc: "Information stored can never be changed or erased and that guarantees the existence of permanent records.",
    },
    {
      title: "Better Supply Chain Management",
      desc: "Complete disclosure will decrease fraud, delays and errors in supply chains.",
    },
    {
      title: "Smart Contract Automation",
      desc: "Electronic implementation of contracts decreases paper and human errors.",
    },
    {
      title: "International Availability and Scalability",
      desc: "Available on the global scale, scaled to the increasing user base and demands.",
    },
  ];

  const slides = [
    {
      image: assets.blockchainBanner1,
      title:
        "Instant Blockchain Development Solutions – Get India’s #1 Trusted Blockchain Development Service",
      subtitle:
        "Simplify your business, earn customer trust, and access new business opportunities with the reliable, transparent and scalable blockchain development solutions offered by Capyngen.",
    },
    {
      image: assets.blockchainBanner2,
      title:
        "Revolutionize Your Business with Cutting-Edge Blockchain Development",
      subtitle:
        "Change your processes, earn customer loyalty, and open new horizons with the help of blockchain development solutions and blockchain development services, which are reliable, transparent, and scalable and use Capyngen.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Enterprise Blockchain Solutions",
      subtitle:
        "Enterprise blockchain solutions will help improve security, simplify business operations, and enable massive corporate operations.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Knowing the business requirements and the scope of the project to fit perfectly.",
    },
    {
      step: "Step 02",
      title: "Blockchain Platform Selection",
      description:
        "Select a suitable platform depending on scalability, security and use case.",
    },
    {
      step: "Step 03",
      title: "Design & Architecture",
      description:
        "Structure the network nodes, consensus mechanisms, and cryptographic model.",
    },
    {
      step: "Step 04",
      title: "Smart Contract & Core Coding",
      description:
        "Develop bug-free, gas-optimized smart contracts and decentralized business logic.",
    },
    {
      step: "Step 05",
      title: "Rigorous Auditing & Testnet Testing",
      description:
        "Audit vulnerabilities, simulate edge cases, and test network performance.",
    },
    {
      step: "Step 06",
      title: "Mainnet Deployment & Node Management",
      description:
        "Deploy to live networks with continuous node health monitoring and upgrades.",
    },
  ];

  const servicesData = [
    {
      image: assets.blockchain2,
      title: "Smart Contract Development",
      desc: "Smart contracts make it easy to secure and simplify the operation of your agreements.",
    },
    {
      image: assets.blockchain3,
      title: "Development of Decentralised Application (DApp)",
      desc: "Develop a blockchain application development based on reliability and security.",
    },
    {
      image: assets.blockchain4,
      title: "Private Blockchain Solutions",
      desc: "Programmed blockchain networks to serve internal business.",
    },
    {
      image: assets.blockchain5,
      title: "Public Blockchain Solutions",
      desc: "Use publicly available blockchain networks to access large numbers of people.",
    },
    {
      image: assets.blockchain6,
      title: "Token Development (Crypto Tokens & NFTs)",
      desc: "Digitise your business by issuing tokens, digital assets or NFTs.",
    },
    {
      image: assets.blockchain7,
      title: "Blockchain Integration with Existing Systems",
      desc: (
        <>
          The smooth integration of the current applications and blockchain
          technology solutions, such as the{" "}
          <a
            href="https://www.capyngen.com/website-design-company-india"
            className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
          >
            ecommerce website design
          </a>
          .
        </>
      ),
    },
  ];

  const techStack = [
    {
      title: "Blockchain Platforms",
      items: [
        {
          name: "Ethereum",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
        },
        {
          name: "Solana",
          icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
        },
        {
          name: "Polygon",
          icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png",
        },
        {
          name: "Hyperledger",
          icon: "https://avatars.githubusercontent.com/u/7657900?s=200&v=4",
        },
        {
          name: "Binance Smart Chain",
          icon: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png",
        },
      ],
    },
    {
      title: "Frontend & Web3",
      items: [
        {
          name: "React",
          icon: assets.react,
        },
        {
          name: "Next.js",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
          name: "Web3.js",
          icon: "https://docs.web3js.org/img/web3js.svg",
        },
        {
          name: "Ethers.js",
          icon: "https://avatars.githubusercontent.com/u/37898297?s=200&v=4",
        },
        {
          name: "MetaMask",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
        },
      ],
    },
    {
      title: "Developer Tools",
      items: [
        {
          name: "Hardhat",
          icon: "https://avatars.githubusercontent.com/u/73118775?s=200&v=4",
        },
        {
          name: "Truffle",
          icon: "https://avatars.githubusercontent.com/u/23352888?s=200&v=4",
        },
        {
          name: "Ganache",
          icon: "https://avatars.githubusercontent.com/u/22558608?s=200&v=4",
        },
      ],
    },
  ];

  return (
    <div className="relative font-sans text-slate-900 bg-white selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Blockchain Development Solutions – India’s Best Blockchain Development
          Services
        </title>
        <meta
          name="description"
          content="Transform your business with our Blockchain Development Solutions – India’s trusted experts delivering secure, scalable, and cutting-edge blockchain services."
        />
        <meta
          name="keywords"
          content="blockchain development solutions, Best blockchain development services"
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
      {/* 1. HERO SECTION (Sharp Edges / Zero Rounded Corners / Clean Tech Look)     */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[activeSlide].image})`,
        }}
        aria-label="Blockchain Development Solutions Banner"
      >
        {/* Dark Tech Gradient Overlay for Crystal Clear Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b17] via-[#070e1d]/90 to-[#050b17]/75 backdrop-blur-[1px]" />

        {/* Subtle Background Tech Grid Lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl text-left">
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.14] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {slides[activeSlide].title}
            </h1>

            <p className="text-slate-200 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl font-normal">
              {slides[activeSlide].subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Sharp Navigation Tabs / Indicators */}
            <div className="flex items-center gap-3 mt-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-none cursor-pointer ${
                    activeSlide === idx
                      ? "w-12 bg-blue-500 shadow-sm"
                      : "w-6 bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION: Blockchain Services We Offer (Directly Below Hero Section)     */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              CAPABILITIES
            </div>
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Blockchain Services We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Full blockchain development solutions for startups and enterprises of a leading blockchain development company and Custom blockchain development company:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 rounded-none flex flex-col group"
              >
                <div className="h-52 w-full overflow-hidden bg-slate-100 relative rounded-none border-b border-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SECTION 1: What is Blockchain Development Technology? (Split)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
              <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                DISTRIBUTED TRUST
              </div>
              <h2
                className="text-slate-900 leading-[1.2] tracking-tight text-2xl sm:text-3xl lg:text-[38px] xl:text-[44px] font-bold"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                What is Blockchain Development{" "}
                <span className="text-blue-600">Technology?</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                The blockchain development solutions imply the creation of secure and decentralised systems in which the data is stored in distributed registries. The transaction records enable blockchain technology solutions to promote trust, security, and transparency compared to the case of normal databases.
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                As a trusted custom blockchain development provider, Capyngen assists businesses to innovative of blockchain application development using smart contracts, tokens and decentralised networks to develop apps with high levels of trust.​
              </p>

              <p className="text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed">
                Capyngen will be your preferred choice of state-of-the-art, high-security, and scalable blockchain solutions for businesses. As one of the largest blockchain development company in the world, we accelerate the innovation of your business and keep it at the forefront of the competition.​
              </p>
            </div>

            {/* Right Visual Image (Sharp Edges, rounded-none) */}
            <div className="lg:col-span-5 flex">
              <div className="border border-slate-300 bg-slate-950 shadow-xl rounded-none w-full overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[440px] lg:min-h-[480px]">
                <img
                  src={blockchainGlobalSphere}
                  alt="Blockchain Development - Capyngen"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION 2: Importance of Blockchain in Modern Businesses (6 Cards)      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="text-xs font-bold tracking-widest text-cyan-400 mb-3 uppercase">
              ENTERPRISE VALUE
            </div>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Importance of Blockchain in Modern Businesses
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              The enterprise blockchain solutions provided by Capyngen will help companies to modernise operations and become the market leader in terms of digitalisation, being ranked as the best blockchain development services provider.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cryptographic Encryption",
                desc: "Better protection with cryptographic encryption for complete integrity.",
                icon: <Lock className="text-cyan-400 w-6 h-6" />,
              },
              {
                title: "Transparent Audit Logs",
                desc: "Verifiable transaction logs that are completely transparent and verifiable.",
                icon: <ShieldCheck className="text-cyan-400 w-6 h-6" />,
              },
              {
                title: "Lower Operational Costs",
                desc: "Lower prices through the removal of middlemen and automated settlement.",
                icon: <Coins className="text-cyan-400 w-6 h-6" />,
              },
              {
                title: "Instant Cross-Border Settlement",
                desc: "Rapid cross-border transactions without banking delays or friction.",
                icon: <Zap className="text-cyan-400 w-6 h-6" />,
              },
              {
                title: "Immutable Storage",
                desc: "Unalterable non-repudiated data storage that guarantees absolute truth.",
                icon: <Layers className="text-cyan-400 w-6 h-6" />,
              },
              {
                title: "Global Scalability",
                desc: "International availability in favour of successful enterprise expansion.",
                icon: <Globe className="text-cyan-400 w-6 h-6" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 p-8 shadow-xl flex flex-col justify-between group transition-all duration-300 rounded-none relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />

                <div>
                  <div className="w-14 h-14 bg-[#101b38] border border-slate-700 flex items-center justify-center rounded-none mb-6 group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors"
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
      {/* 5. SECTION: How Blockchain Development Works (Steps 01 - 06)              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              DEPLOYMENT WORKFLOW
            </div>
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How Blockchain Development Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              Our structured custom blockchain development model guarantees highly beneficial blockchain development solutions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-500 p-8 rounded-none relative group transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-all duration-300 rounded-none" />

                <h3
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {st.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SECTION 4: Benefits of Blockchain Solutions (9 Bento Cards)            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="text-xs font-bold tracking-widest text-cyan-400 mb-3 uppercase">
              STRATEGIC ADVANTAGES
            </div>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Blockchain Solutions
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Business solutions Capyngen offers blockchain solutions for businesses, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsSection1.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 p-8 shadow-xl flex flex-col justify-between group transition-all duration-300 rounded-none relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />

                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors"
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
      {/* 7. FULL-SIZE INTERSTITIAL IMAGE SECTION 2                                */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.blockchainDevFullSize2}
            alt="Power your ideas with blockchain technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Power your ideas with blockchain technology
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            With the experience of Enterprise blockchain development company, we support the implementation of smart contract to cryptocurrency platform innovation.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
          >
            CONTACT US <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SECTION 5: Tech Stack (Clean, Sharp Edges, Light Theme)                */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200">
        <TechStack
          heading="Transform Your Blockchain Architecture with Our Expert Tech Stack"
          categories={techStack}
          theme="light"
        />
      </div>

      {/* ========================================================================= */}
      {/* 9. SECTION 7: Launch Your Blockchain Project with Confidence              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Launch Your Blockchain Project with Confidence
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              We provide fast, secure, and constantly innovative enterprise blockchain solutions. Future with your blockchain technology solutions.​
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Launch Your Project Now
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />

      {/* ========================================================================= */}
      {/* 11. FULL-SIZE INTERSTITIAL IMAGE SECTION (Bottom Below FAQs)              */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.blockchainDevFullSize}
            alt="Secure your future with blockchain innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Secure your future with blockchain innovation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            With the provision of our blockchain development services, you will benefit from an open and decentralised blockchain software development system that suits your business requirements perfectly.​
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all shadow-xl"
          >
            Start Building <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlockchainDevelopment;
