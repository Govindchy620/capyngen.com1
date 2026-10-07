import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaChartPie,
  FaExpand,
  FaDatabase,
  FaMobileAlt,
  FaCreditCard,
  FaLightbulb,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import ExpandableGallery from "../components/ExpandableGallery";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/banking#webpage",
  url: "https://www.capyngen.com/industries/banking",
  name: "Banking Software Development Services",
  description:
    "Capyngen provides secure and scalable banking software development services. From FinTech apps to mobile banking software, we build next-gen digital solutions.",
  inLanguage: "en",
  keywords:
    "Banking software development services, Banking software development, FinTech app development, Mobile banking software, Core banking solutions, Banking IT services, Digital banking solutions, Secure banking applications",
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
    "Banking software development services, Banking software development, FinTech app development, Mobile banking software, Core banking solutions, Banking IT services, Digital banking solutions, Secure banking applications",
  name: "Banking Software Development Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://www.capyngen.com/industries/banking",
  description:
    "Capyngen provides secure and scalable banking software development services. From FinTech apps to mobile banking software, we build next-gen digital solutions.",
  keywords:
    "Banking software development services, Banking software development, FinTech app development, Mobile banking software, Core banking solutions, Banking IT services, Digital banking solutions, Secure banking applications",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact-us",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "Banking Software & Digital Solutions",
  serviceOutput:
    "Capyngen provides secure and scalable banking software development services. From FinTech apps to mobile banking software, we build next-gen digital solutions.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are banking software development services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Banking software development services involve creating, constructing, and rolling out software solutions for banks, including core banking systems, mobile applications, payment gateways, customer relationship management, security systems, and digital transformation initiatives customized to banking requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Capyngen the best banking software development company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines deep banking domain expertise, a strong track record with major financial institutions, advanced technology, a security-first approach, regulatory knowledge, and the ability to deliver measurable outcomes, making it a trusted partner for banks.",
      },
    },
    {
      "@type": "Question",
      name: "What are core banking solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core banking solutions are software platforms that manage account operations, deposits, loans, and transactions. They integrate customer data and banking processes through a unified system, enabling centralized operations across all branches.",
      },
    },
    {
      "@type": "Question",
      name: "How secure are your banking applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our banking applications follow strict security measures such as multi-factor authentication, end-to-end encryption, biometric verification, fraud detection, regular security audits, and compliance with PCI DSS and RBI standards to ensure maximum protection.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop mobile banking software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop mobile banking software for both iOS and Android using native and cross-platform technologies. Our apps are secure, user-friendly, feature-rich, and seamlessly integrated with core banking systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is blockchain in banking, and how do you implement it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain in banking provides a shared, tamper-proof ledger that enhances transaction transparency, data security, and cyberattack resistance. We implement blockchain solutions for banks using platforms like Hyperledger and Ethereum.",
      },
    },
    {
      "@type": "Question",
      name: "How long does banking software development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on the project scope. A simple mobile app may take 3 to 4 months, while a full core banking system can take 8 to 12 months. We provide clear milestones during planning based on project complexity and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of banking software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs depend on features, complexity, technology stack, integrations, and support. We offer flexible engagement models such as fixed-price, time and material, and dedicated teams. A tailored quote is available upon request.",
      },
    },
  ],
};

const Banking = () => {
  const faqItems = [
    {
      question: "What are banking software development services?",
      answer:
        "Banking software development services involve designing, building, and deploying software solutions for banks — including core banking systems, mobile apps, payment gateways, CRM tools, and digital transformation initiatives.",
    },
    {
      question: "Why is Capyngen the best banking software company in India?",
      answer:
        "Capyngen stands out through deep domain expertise, proven success with global banks, a security-first approach, regulatory experience, and measurable results that make us a trusted fintech partner.",
    },
    {
      question: "What are core banking solutions?",
      answer:
        "Core banking solutions are integrated platforms that manage accounts, deposits, loans, and transactions, consolidating customer and operational data across multiple branches into a central system.",
    },
    {
      question: "How secure are your banking applications?",
      answer:
        "We implement multi-factor authentication, end-to-end encryption, biometric verification, fraud detection, and comply with PCI DSS, RBI, and GDPR standards to ensure maximum protection.",
    },
    {
      question: "Do you develop mobile banking applications?",
      answer:
        "Yes. We specialize in building native and cross-platform iOS and Android apps with seamless, secure integrations into core banking systems.",
    },
    {
      question: "Do you implement blockchain in banking?",
      answer:
        "Yes. We use blockchain for secure, transparent ledger management, fraud resistance, and transaction verification — using frameworks like Hyperledger and Ethereum.",
    },
    {
      question: "How long does banking software development take?",
      answer:
        "Timelines vary by complexity; mobile apps may take 3–4 months while full-scale banking systems may take 8–12 months with milestone-based delivery.",
    },
    {
      question: "What is the cost of developing banking software?",
      answer:
        "Costs depend on complexity, features, integration, and support. We offer flexible models including fixed-price, hourly, and dedicated teams with transparent estimation.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We integrate with legacy software, CRMs, payment gateways, compliance tools, and data platforms through APIs, middleware, and secure integration patterns.",
    },
    {
      question: "Do you provide FinTech app development for startups?",
      answer:
        "Absolutely. We create digital wallets, P2P lending, investment, and payment solution fintech apps designed for scalability and regulatory compliance.",
    },
    {
      question: "How do you ensure compliance?",
      answer:
        "We adhere to RBI, PCI DSS, GDPR, AML/KYC, and ISO 27001 standards. Our products support automatic logging, audit trails, encryption, and detailed reporting.",
    },
    {
      question: "What technologies do you use for banking systems?",
      answer:
        "Our stack includes Java, Python, .NET, Node.js, React, AWS, Azure, MongoDB, PostgreSQL, and blockchain technologies for performance, scalability, and innovation.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes. We provide 24/7 monitoring, patching, feature expansion, and upgrades to ensure peak reliability over time.",
    },
    {
      question: "Can you help with digital transformation?",
      answer:
        "Yes. We assist traditional banks with cloud migration, AI implementation, customer experience redesign, and modernization of legacy systems.",
    },
    {
      question: "What makes your banking services unique?",
      answer:
        "Our expertise combines secure architecture, user-first design, compliance, and innovation to deliver robust fintech transformation for banks of all sizes.",
    },
  ];

  const servicesData = [
    {
      image: assets.banking2,
      title: "Specialized Banking Solutions",
      desc: "Custom software tailored to your institution’s goals and workflows, powering modern and efficient customer engagements.",
    },
    {
      image: assets.banking3,
      title: "Security & Compliance First",
      desc: "Multi-layered protections including MFA, encryption, secure APIs, and global compliance frameworks (RBI, PCI, GDPR).",
    },
    {
      image: assets.banking4,
      title: "Scalable & High-Performance Systems",
      desc: "Engineered for consistency and speed, our banking systems seamlessly scale to millions of users worldwide.",
    },
    {
      image: assets.banking5,
      title: "Next-Gen Banking with AI & Blockchain",
      desc: "Artificial Intelligence, blockchain, and IoT technology empower smart, secure, customer-focused operations.",
    },
    {
      image: assets.banking6,
      title: "Smooth Integration with Legacy Systems",
      desc: "Seamless compatibility with legacy and third-party platforms ensuring uninterrupted core banking operations.",
    },
    {
      image: assets.banking7,
      title: "Trusted Global Clientele",
      desc: "We’ve delivered enterprise-scale digital transformation for major financial institutions worldwide.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Core Banking Software",
      description:
        "Unified platforms for account management, deposits, loans, and real-time transactions.",
      icon: <FaDatabase className="text-3xl text-blue-400" />,
    },
    {
      title: "Mobile & Internet Banking Solutions",
      description:
        "Cross-platform iOS and Android banking apps offering secure, intuitive user experiences.",
      icon: <FaMobileAlt className="text-3xl text-blue-400" />,
    },
    {
      title: "Payments & Gateway Solutions",
      description:
        "High-volume, secure, and anti-fraud payment systems with enterprise-grade uptime.",
      icon: <FaCreditCard className="text-3xl text-blue-400" />,
    },
    {
      title: "CRM & Customer Experience",
      description:
        "Centralized platforms for personalized analytics, dashboards, and user engagement.",
      icon: <FaUsers className="text-3xl text-blue-400" />,
    },
    {
      title: "FinTech Transformation Advisory",
      description:
        "Strategic consulting for modernization, automation, and high-tech digital banking evolution.",
      icon: <FaLightbulb className="text-3xl text-blue-400" />,
    },
    {
      title: "Regulatory & Security Frameworks",
      description:
        "Built-in data protection frameworks, ensuring ISO, PCI, GDPR, and national compliance.",
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Programming Languages",
      description:
        "Java, .NET, Python, C++, and Kotlin for modern, scalable, secure, and flexible backend systems.",
      image: assets.banking8,
    },
    {
      title: "Databases & Storage",
      description:
        "Oracle, MySQL, MongoDB, PostgreSQL, and Redis for secure and high-speed data management.",
      image: assets.banking9,
    },
    {
      title: "Frameworks & Libraries",
      description:
        "Spring Boot, React, Angular, Node.js, and Flutter for powerful, cross-platform architectures.",
      image: assets.banking10,
    },
    {
      title: "Cloud Platforms",
      description:
        "AWS, Azure, Google Cloud, and IBM Cloud for reliable, hybrid-ready hosting solutions.",
      image: assets.banking11,
    },
    {
      title: "Security Technologies",
      description:
        "MFA, blockchain, encryption, biometrics, SSL/TLS, and intrusion detection ensuring multi-layered security.",
      image: assets.banking12,
    },
    {
      title: "AI & Analytics",
      description:
        "Machine learning, predictive analytics, NLP chatbots, and real-time fraud detection dashboards.",
      image: assets.banking13,
    },
  ];

  const typesData = [
    {
      icon: <FaCogs className="text-3xl text-blue-600 mb-3" />,
      title: "Operational Efficiency",
      desc: "Automate processes, reduce errors, and free staff for high-value strategic tasks.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600 mb-3" />,
      title: "Enhanced Security",
      desc: "Enterprise-grade protection for all sensitive financial data and real-time transactions.",
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600 mb-3" />,
      title: "Customer Experience",
      desc: "Deliver omnichannel banking through responsive and personalized user interfaces.",
    },
    {
      icon: <FaChartLine className="text-3xl text-blue-600 mb-3" />,
      title: "Cost Efficiency",
      desc: "Lower operational overhead leveraging cloud elasticity and modern resource optimization.",
    },
    {
      icon: <FaChartPie className="text-3xl text-blue-600 mb-3" />,
      title: "Advanced Reporting",
      desc: "Gain deep visibility and detect suspicious anomalies with real-time analytics engines.",
    },
    {
      icon: <FaExpand className="text-3xl text-blue-600 mb-3" />,
      title: "Scalability",
      desc: "Microservices architectures built to scale gracefully to millions of concurrent users.",
    },
  ];

  const servicesData1 = [
    {
      image: assets.banking15,
      title: "Retail Banking",
      desc: "Streamlined retail banking software managing deposits, loans, cards, and customer inquiries.",
    },
    {
      image: assets.banking16,
      title: "Corporate Banking",
      desc: "Comprehensive treasury, trade, and client management solutions for enterprise-scale operations.",
    },
    {
      image: assets.banking17,
      title: "Investment Banking",
      desc: "Intuitive trading and risk analytics tools for smarter capital markets operations.",
    },
    {
      image: assets.banking18,
      title: "Microfinance Institutions",
      desc: "Mobile-first systems for group lending, repayments, analytics, and field operations.",
    },
    {
      image: assets.banking19,
      title: "FinTech Startups",
      desc: "Cutting-edge digital wallets, lending, and crypto systems for innovative fintech models.",
    },
    {
      image: assets.banking20,
      title: "Payment Providers",
      desc: "Full payment gateways, merchant platforms, and high-volume transaction systems.",
    },
  ];

  const panels = [
    {
      image: assets.bankingBanner1,
      title: "Empower Banking Through Digital Innovation",
      desc: "Lead the future of fintech with secure, cloud-based, and customer-focused banking solutions.",
    },
    {
      image: assets.bankingBanner2,
      title: "Redefine the Future of Banking",
      desc: "Achieve safer and smarter financial operations through technology-driven solutions.",
    },
    {
      image: assets.bankingBanner3,
      title: "Banking Transformation Starts Here",
      desc: "Enhance workflows, improve analytics, and optimize risk management effortlessly.",
    },
    {
      image: assets.bankingBanner4,
      title: "Secure, Scalable & Smart Banking Tech",
      desc: "Empower your institution with reliable and secure enterprise software.",
    },
    {
      image: assets.bankingBanner5,
      title: "The Future of Digital Finance Awaits",
      desc: "Implement AI and machine learning in real-time for a superior customer experience.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>Banking Software Development Services</title>
        <meta
          name="description"
          content="Capyngen provides secure and scalable banking software development services. From FinTech apps to mobile banking software, we build next-gen digital solutions."
        />
        <meta
          name="keywords"
          content="Banking Software Development Services"
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
      {/* 1. HERO SECTION (EXPANDABLE GALLERY - RETAINED EXACTLY AS REQUESTED)     */}
      {/* ========================================================================= */}
      <ExpandableGallery panels={panels} />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / BANKING DIGITAL TRANSFORMATION (SPLIT LIGHT SECTION)        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.banking1}
                alt="Banking Digital Transformation"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Banking Industry Meets Digital Transformation
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> partners with global financial institutions to build secure, scalable, and compliant digital infrastructures. Our banking software solutions redefine customer relationships, automate complex reconciliations, and ensure ironclad transactional reliability.
              </p>
              <p>
                We have deep experience working across retail, corporate, microfinance, and fintech ecosystems, offering end-to-end capabilities in core banking, digital payments, and{" "}
                <Link to="/artificial-intelligence-services" className="text-blue-600 hover:underline font-semibold">
                  AI-powered
                </Link>{" "}
                financial intelligence.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Banking Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY LEADING BANKS CHOOSE CAPYNGEN (6 Dark Cards with Images)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Leading Banks Choose Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Proven domain expertise, security-first architectures, and quantifiable outcomes for modern financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
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
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
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
      {/* 4. BANKING SOFTWARE SOLUTIONS (6 Clean Light Cards with Icons)            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Banking Software Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Enterprise digital solutions built specifically to automate operations, empower banking customers, and guarantee transaction integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
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
      {/* 5. MODERN TECH STACK FOR BANKING EXCELLENCE (6 Dark Cards with Images)    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Modern Tech Stack for Banking Excellence
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We leverage resilient, cloud-ready, and high-security technologies to power mission-critical banking operations.
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
      {/* 6. MAKING BANKS DIGITALLY FIT (6 Cards Grid)                              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Making Banks Digitally Fit
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Core strategic advantages realized when financial institutions modernise their platforms with Capyngen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-2">{item.icon}</div>
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
      {/* 7. SERVING EVERY BANKING & FINANCIAL SECTOR (6 Dark Cards with Images)    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Serving Every Banking & Financial Sector
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              From large retail networks to nimble fintech disruptors, we cater to the full financial spectrum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
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
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
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
      {/* 8. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#2563eb] text-white border-b border-blue-500/30 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Start Your Digital Transformation
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with Capyngen today to construct secure, scalable, and next-generation banking software that elevates the way your customers transact.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS                                             */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default Banking;
