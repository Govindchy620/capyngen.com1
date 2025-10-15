import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import FAQSection2 from "../components/FAQSection2";
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
import { Helmet } from "react-helmet-async";

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
      icon: <FaDatabase className="text-4xl text-white" />,
    },
    {
      title: "Mobile & Internet Banking Solutions",
      description:
        "Cross-platform iOS and Android banking apps offering secure, intuitive user experiences.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Payments & Gateway Solutions",
      description:
        "High-volume, secure, and anti-fraud payment systems with enterprise-grade uptime.",
      icon: <FaCreditCard className="text-4xl text-white" />,
    },
    {
      title: "CRM & Customer Experience",
      description:
        "Centralized platforms for personalized analytics, dashboards, and user engagement.",
      icon: <FaUsers className="text-4xl text-white" />,
    },
    {
      title: "FinTech Transformation Advisory",
      description:
        "Strategic consulting for modernization, automation, and high-tech digital banking evolution.",
      icon: <FaLightbulb className="text-4xl text-white" />,
    },
    {
      title: "Regulatory & Security Frameworks",
      description:
        "Built-in data protection frameworks, ensuring ISO, PCI, GDPR, and national compliance.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Programming Languages",
      description:
        "Java, .NET, Python, C++, and Kotlin for modern, scalable, secure, and flexible backend systems.",
      image: assets.banking8,
      cardBg: "bg-blue-100",
    },
    {
      title: "Databases & Storage",
      description:
        "Oracle, MySQL, MongoDB, PostgreSQL, and Redis for secure and high-speed data management.",
      image: assets.banking9,
      cardBg: "bg-green-100",
    },
    {
      title: "Frameworks & Libraries",
      description:
        "Spring Boot, React, Angular, Node.js, and Flutter for powerful, cross-platform architectures.",
      image: assets.banking10,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cloud Platforms",
      description:
        "AWS, Azure, Google Cloud, and IBM Cloud for reliable, hybrid-ready hosting solutions.",
      image: assets.banking11,
      cardBg: "bg-pink-100",
    },
    {
      title: "Security Technologies",
      description:
        "MFA, blockchain, encryption, biometrics, SSL/TLS, and intrusion detection ensuring multi-layered security.",
      image: assets.banking12,
      cardBg: "bg-purple-100",
    },
    {
      title: "AI & Analytics",
      description:
        "Machine learning, predictive analytics, NLP chatbots, and real-time fraud detection dashboards.",
      image: assets.banking13,
      cardBg: "bg-red-100",
    },
  ];

  const typesData = [
    {
      icon: <FaCogs />,
      title: "Operational Efficiency",
      desc: "Automate processes, reduce errors, and free staff for high-value tasks.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Enhanced Security",
      desc: "Enterprise-grade protection for all data and transactions.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Experience",
      desc: "Deliver omnichannel banking through personalized interfaces.",
    },
    {
      icon: <FaChartLine />,
      title: "Cost Efficiency",
      desc: "Lower operational costs using cloud and resource optimization.",
    },
    {
      icon: <FaChartPie />,
      title: "Advanced Reporting",
      desc: "Gain insights and detect fraud with real-time data analytics.",
    },
    {
      icon: <FaExpand />,
      title: "Scalability",
      desc: "Systems built to expand seamlessly without performance loss.",
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
    <div className="">
      <Helmet>
        <title>Banking Software Development Services</title>
        <meta
          name="description"
          content="Capyngen provides secure and scalable banking software development services. From FinTech apps to mobile banking software, we build next-gen digital solutions."
        />
        <meta
          name="keywords"
          content="Banking Software Development Services "
        />
      </Helmet>
      <ExpandableGallery panels={panels} />
      <GetStarted
        backgroundColor="bg-blue-900"
        textColor="text-white"
        description={[
          "Contact us for a free consultation. Experience next-gen secure, scalable, and innovative banking software with Capyngen — India’s leading fintech partner.",
        ]}
        buttonText="Get Started"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Banking Industry Meets Digital Transformation"
        description={[
          `Capyngen partners with global financial institutions to build secure, scalable, and compliant digital infrastructures. Our banking software solutions redefine customer relationships and operational performance.`,
          `We have deep experience working across retail, corporate, microfinance, and fintech ecosystems, offering end-to-end solutions in core banking, digital payments, and AI-powered financial intelligence.`,
        ]}
        image={assets.banking1}
        background={assets.patternBg1}
        isHidden
      />
      <IndustryServices
        heading="Why Leading Banks Choose Capyngen"
        services={servicesData}
      />
      <CardsSection
        heading="Banking Software Solutions"
        services={cardsSectionData1}
        headColor="text-white"
        cardBg="bg-gradient-to-br from-gray-900 to-blue-800"
        sectionBg="bg-gray-900"
        textColor="text-white"
      />
      <CardsSectionImage
        heading="Modern Tech Stack for Banking Excellence"
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        hoverBg="hover:bg-gray-200"
      />
      <GetStarted
        backgroundColor="bg-blue-900"
        textColor="text-white"
        description={[
          "Want to modernize your banking systems? Schedule a free demo and discover how Capyngen’s solutions make banking smarter, safer, and customer-driven.",
        ]}
        buttonText="Book a Demo"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Making Banks Digitally Fit"
        image={assets.banking14}
        types={typesData}
      />
      <IndustryServices
        heading="Serving Every Banking & Financial Sector"
        services={servicesData1}
      />
      <GetStarted
        backgroundColor="bg-blue-900"
        textColor="text-white"
        description={[
          "Work with Capyngen today to build custom fintech and banking software that transforms the way your customers interact and transact.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default Banking;
