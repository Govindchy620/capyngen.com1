import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Eye,
  Server,
  Zap,
} from "lucide-react";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/cybersecurity#webpage",
  url: "https://www.capyngen.com/cybersecurity",
  name: "Managed Cybersecurity Services Provider in India | Capyngen",
  description:
    "Capyngen is a trusted managed cybersecurity services provider offering advanced cyber security solutions and Indian cybersecurity solutions to protect businesses and financial services.",
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
  "@id": "https://www.capyngen.com/cybersecurity#service",
  name: "Cybersecurity Services",
  serviceType:
    "Managed cybersecurity, IT security, Network security, Data protection, Cloud security, Cybersecurity consulting",
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
    "Capyngen is a trusted managed cybersecurity services provider offering advanced cyber security solutions and Indian cybersecurity solutions to protect businesses and financial services.",
  url: "https://www.capyngen.com/cybersecurity",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cybersecurity refers to all the strategies against hackers to secure the networks, systems, and data of an organisation with full-scale cybersecurity managed services.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of cybersecurity to businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key advantages of cybersecurity services are the following: no data leakage, safety of informational assets of sensitive information, law observance, and preservation of customer trust.",
      },
    },
    {
      "@type": "Question",
      name: "What are managed security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some of the managed cybersecurity services include ongoing monitoring, threat detection, incident response, vulnerability management, and recovery from a disaster due to a cybersecurity service provider.",
      },
    },
    {
      "@type": "Question",
      name: "Do security services positively influence startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. Capyngen provides on-demand cyber security services to startups at a fraction of the regular cost to secure valuable information and continue doing business.",
      },
    },
    {
      "@type": "Question",
      name: "What is network security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Network protection against unauthorised access and cyber-attacks to computers, servers and other connected devices of the hardware via cybersecurity solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Which data protection strategy does Capyngen have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As part of our cybersecurity consulting services, we ensure confidential data is encrypted, securely stored in another way, backed up, and access controls are in place.",
      },
    },
    {
      "@type": "Question",
      name: "Are your cybersecurity services applicable in case I have an enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, of course. Working staff on demand and high-quality and broad-based cybersecurity services are among the propositions Capyngen has to offer corporations.",
      },
    },
    {
      "@type": "Question",
      name: "What is penetration testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penetration testing simulates hackers to demonstrate the vulnerabilities existing in a system, and in a very short period, they can discover and exploit them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer cloud security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The cloud, applications and storage environments that we provide are secure with industry standards in security measures that are provided through experience as a cyber security solutions provider.",
      },
    },
    {
      "@type": "Question",
      name: "How can ransomware attacks be prevented using cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The cybersecurity company offers endpoint security, threat monitoring, and backups, which are some of the measures used to combat ransomware.",
      },
    },
    {
      "@type": "Question",
      name: "What do you do to track cybersecurity threats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIEM tools are combined with 24/7 monitoring, intrusion detection and analytics to identify and respond to threats using cybersecurity managed services.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries are vulnerable to the cyber security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finance, healthcare, retail, education, IT, travel, and in general, any data-driven company that involves sensitive customer information gains the benefits of cybersecurity services.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fees for cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices vary across the board based on the size of business, security needs and services. Capyngen provides affordable and scalable cybersecurity solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What are IT security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen provides basic cyber security services, which include endpoint protection, network security, patch management, anti-virus and employee training.",
      },
    },
    {
      "@type": "Question",
      name: "What is the entry mode of Capyngen cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a free consultation on how to assess your security needs and have this reliable managed cybersecurity services provider create a business-specific cybersecurity plan.",
      },
    },
  ],
};

const Cybersecurity = () => {
  const faqItems = [
    {
      question: "What is cybersecurity?",
      answer:
        "Cybersecurity refers to all the strategies against hackers to secure the networks, systems, and data of an organisation with full-scale cybersecurity managed services.",
    },
    {
      question: "What is the significance of cybersecurity to businesses?",
      answer:
        "The key advantages of cybersecurity services are the following: no data leakage, safety of informational assets of sensitive information, law observance, and preservation of customer trust.",
    },
    {
      question: "What are managed security services?",
      answer:
        "Some of the managed cybersecurity services include ongoing monitoring, threat detection, incident response, vulnerability management, and recovery from a disaster due to a cybersecurity service provider.",
    },
    {
      question: "Do security services positively influence startups?",
      answer:
        "Definitely. Capyngen provides on-demand cyber security services to startups at a fraction of the regular cost to secure valuable information and continue doing business.",
    },
    {
      question: "What is network security?",
      answer:
        "Network protection against unauthorised access and cyber-attacks to computers, servers and other connected devices of the hardware via cybersecurity solutions.",
    },
    {
      question: "Which data protection strategy does Capyngen have?",
      answer:
        "As part of our cybersecurity consulting services, we ensure confidential data is encrypted, securely stored in another way, backed up, and access controls are in place.",
    },
    {
      question:
        "Are your cybersecurity services applicable in case I have an enterprise?",
      answer:
        "Yes, of course. Working staff on demand and high-quality and broad-based cybersecurity services are among the propositions Capyngen has to offer corporations.",
    },
    {
      question: "What is penetration testing?",
      answer:
        "Penetration testing simulates hackers to demonstrate the vulnerabilities existing in a system, and in a very short period, they can discover and exploit them.",
    },
    {
      question: "Do you offer cloud security services?",
      answer:
        "Yes. The cloud, applications and storage environments that we provide are secure with industry standards in security measures that are provided through experience as a cyber security solutions provider.",
    },
    {
      question: "How can ransomware attacks be prevented using cybersecurity?",
      answer:
        "Yes. The cybersecurity company offers endpoint security, threat monitoring, and backups, which are some of the measures used to combat ransomware.",
    },
    {
      question: "What do you do to track cybersecurity threats?",
      answer:
        "SIEM tools are combined with 24/7 monitoring, intrusion detection and analytics to identify and respond to threats using cybersecurity managed services.",
    },
    {
      question:
        "Which industries are vulnerable to the cyber security services?",
      answer:
        "Finance, healthcare, retail, education, IT, travel, and in general, any data-driven company that involves sensitive customer information gains the benefits of cybersecurity services.",
    },
    {
      question: "What are the fees for cybersecurity services?",
      answer:
        "Prices vary across the board based on the size of business, security needs and services. Capyngen provides affordable and scalable cybersecurity solutions.",
    },
    {
      question: "What are IT security services?",
      answer:
        "Capyngen provides basic cyber security services, which include endpoint protection, network security, patch management, anti-virus and employee training.",
    },
    {
      question: "What is the entry mode of Capyngen cybersecurity services?",
      answer:
        "Book a free consultation on how to assess your security needs and have this reliable managed cybersecurity services provider create a business-specific cybersecurity plan.",
    },
  ];

  const servicesData = [
    {
      image: assets.cyberSecurity3,
      title: "Managed Cybersecurity Services",
      desc: "A service that offers continuous monitoring, threat detection, and incident response.",
    },
    {
      image: assets.cyberSecurity4,
      title: "IT Security Services",
      desc: "The security of the system, server, and endpoint against vulnerabilities.",
    },
    {
      image: assets.cyberSecurity5,
      title: "Network Security Services",
      desc: "The use of firewalls, VPNs, and intrusion prevention systems for safe networks.",
    },
    {
      image: assets.cyberSecurity6,
      title: "Data Protection Services",
      desc: "The use of encryption, backup, and secure storage solutions for sensitive data.",
    },
    {
      image: assets.cyberSecurity7,
      title: "Cloud Security Solutions",
      desc: "The security of cloud applications, storage, and virtual environments.",
    },
    {
      image: assets.cyberSecurity8,
      title: "Cybersecurity Consulting",
      desc: "The strategic guidance to put in place the robust security frameworks.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Firewalls & Intrusion Detection (IDS/IPS)",
      description: "Next-generation perimeter defense inspecting packet traffic against exploit signatures.",
      image: assets.cyberSecurity9,
    },
    {
      title: "Anti-Virus & Anti-Malware Software",
      description: "Heuristic machine-learning endpoint protection blocking malicious software in real time.",
      image: assets.cyberSecurity10,
    },
    {
      title: "Security Information & Event Management (SIEM)",
      description: "Centralized log aggregation, correlation, and automated alert telemetry.",
      image: assets.cyberSecurity11,
    },
    {
      title: "Data Backup Solutions & Encryption",
      description: "Military-grade AES-256 data-at-rest encryption and automated immutable backups.",
      image: assets.cyberSecurity12,
    },
    {
      title: "Cloud Security Platforms (AWS, Azure, GCP)",
      description: "Continuous compliance and workload protection across all leading cloud hyperscalers.",
      image: assets.cyberSecurity13,
    },
    {
      title: "VPNs & Secure Remote Access",
      description: "Encrypted Zero-Trust tunnel connections facilitating safe distributed workforce access.",
      image: assets.cyberSecurity14,
    },
  ];

  const industriesData = [
    {
      title: "Startups & Small Businesses",
      description: "High-impact, lightweight cyber protection preventing early-stage IP leakage and phishing.",
      image: assets.webDev17,
    },
    {
      title: "E-commerce & Retail",
      description: "PCI-DSS compliance, credit card fraud shielding, and anti-scraping storefront defenses.",
      image: assets.webDev18,
    },
    {
      title: "Healthcare & Education",
      description: "HIPAA-grade electronic medical records encryption and secure academic research portals.",
      image: assets.webDev19,
    },
    {
      title: "Real Estate & Logistics",
      description: "Protection for proprietary deal workflows, tenant databases, and supply chain telemetry.",
      image: assets.webDev20,
    },
    {
      title: "Corporate Enterprises",
      description: "Comprehensive enterprise SOC, multi-factor zero-trust policies, and insider threat controls.",
      image: assets.webDev21,
    },
    {
      title: "FinTech & Trading Sites",
      description: "Ultra-low-latency financial transaction security, anti-DDoS, and automated audit trails.",
      image: assets.webDev22,
    },
  ];

  const significancePoints = [
    {
      title: "Protect Sensitive Data",
      text: "Protect and secure customer data, employee records, and confidential financial intelligence.",
    },
    {
      title: "Avert Financial Loss",
      text: "The costs associated with a breach are minimized; eliminate ransomware downtime and data theft.",
    },
    {
      title: "Assure Regulatory Compliance",
      text: "Achieve strict conformity to international compliance standards like GDPR, HIPAA, and ISO 27001.",
    },
    {
      title: "Sustenance of Customer Confidence",
      text: "Demonstrate to clients that their sensitive data remains impenetrable under your custody.",
    },
    {
      title: "Increase Operational Security",
      text: "Harden your internal networks, hybrid endpoints, and multi-cloud virtual infrastructure.",
    },
    {
      title: "Support Business Continuity",
      text: "Eliminate downtime risks with proactive incident mitigation and resilient disaster recovery.",
    },
  ];

  const benefitsPoints = [
    {
      title: "24/7 Protection and Monitoring",
      text: "Continuous round-the-clock Security Operations Center (SOC) surveillance.",
    },
    {
      title: "Lower Risk of Data Alterations",
      text: "Prevent unauthorized data tampering and safeguard mission-critical business data.",
    },
    {
      title: "Global Standards Compliance",
      text: "Meet regulatory frameworks including GDPR, ISO, HIPAA, and SOC 2.",
    },
    {
      title: "Cost-Effective Security Solutions",
      text: "Flexible managed security models built to fit startups, SMBs, and enterprises alike.",
    },
    {
      title: "Professional Advice & Assistance",
      text: "Dedicated enterprise security analysts and virtual CISOs guiding your defense posture.",
    },
    {
      title: "Relax with Total Confidence",
      text: "Focus on growing your revenue while our security engineers safeguard your digital assets.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Managed Cybersecurity Services Provider in India | Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen is a trusted managed cybersecurity services provider offering advanced cyber security solutions and Indian cybersecurity solutions to protect businesses and financial services."
        />
        <meta
          name="keywords"
          content="Cybersecurity Solutions | IT & Network Security Services – Capyngen"
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
      {/* 1. HERO SECTION (APPLE-STYLE MINIMALIST TECH HERO)                        */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-[90vh] lg:min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800/80 overflow-hidden bg-[#030712]"
        aria-label="Cybersecurity Services Hero"
      >
        {/* Ambient Top Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />

        {/* Subtle Tech Grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Tech Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-slate-700/60 bg-slate-900/60 backdrop-blur-md rounded-none text-xs font-mono text-blue-400 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                ZERO-TRUST ARCHITECTURE & CYBER DEFENSE
              </div>

              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Protect Your Business from Cyber Threats
              </h1>

              <p className="text-blue-400 text-lg sm:text-xl font-medium mb-4">
                Comprehensive Managed Cybersecurity, Threat Intelligence & Cloud Defense
              </p>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Capyngen provides end-to-end information security, network protection, and 24/7 SOC administration to safeguard your mission-critical systems, databases, and digital business processes against modern threats.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-8 rounded-none transition-colors duration-150 shadow-lg text-base"
                >
                  Protect Your Business
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-3.5 px-7 rounded-none transition-colors duration-150 text-base"
                >
                  Schedule Security Audit
                </Link>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>24/7 SOC Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Zero-Trust Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>ISO 27001 & GDPR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Threat Intelligence</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Showcase with floating glass chips */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="w-full max-w-[540px] xl:max-w-[600px] relative">
                {/* Floating Glassmorphic Chip Top */}
                <div className="hidden sm:flex items-center gap-3 absolute -top-6 -left-6 z-20 border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-none shadow-2xl">
                  <div className="w-8 h-8 rounded-none bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">24/7 SOC Surveillance</div>
                    <div className="text-[11px] text-slate-400">Proactive Threat Neutralization</div>
                  </div>
                </div>

                {/* Main Showcase Image */}
                <div className="relative border border-slate-800 bg-[#070e1d] p-3 shadow-2xl rounded-none overflow-hidden">
                  <img
                    src={assets.cyberSecurity1}
                    alt="Managed Cybersecurity Solutions"
                    className="w-full h-auto object-cover rounded-none"
                  />
                </div>

                {/* Floating Glassmorphic Chip Bottom */}
                <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 z-20 border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-none shadow-2xl">
                  <div className="w-8 h-8 rounded-none bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Zero-Trust Protocol</div>
                    <div className="text-[11px] text-slate-400">Military-Grade AES-256</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT IS CYBERSECURITY & STRATEGIC VALUE (SPLIT LIGHT SECTION)          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.cyberSecurity2}
                alt="Cybersecurity Strategy and Compliance"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What is Cybersecurity?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Cybersecurity encompasses the proactive protection of networks, connected devices, cloud infrastructure, and sensitive databases against unauthorized access, malicious attacks, ransomware, and digital sabotage.
              </p>
              <p>
                Capyngen delivers seasoned cybersecurity consulting and managed security services to startups, growing businesses, and established enterprises—securing enterprise IP and guaranteeing uninterrupted operational continuity.
              </p>
            </div>

            {/* Significance list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {significancePoints.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">{item.title}:</strong>{" "}
                    <span className="text-slate-600">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Security Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL SIZE BANNER 1: PROTECT WHAT MATTERS MOST                          */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.cybersecurityFullSize}
            alt="Protect what matters most"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Protect what matters most
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Under our protection, your confidential data, hybrid infrastructure, and enterprise reputation remain impenetrable against any form of digital threat.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Secure My Business
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CYBERSECURITY SERVICES WE OFFER (6 Cards with Service Visuals)         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Cybersecurity Services We Offer
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              As a premier managed cybersecurity provider, we deliver multi-layered defense frameworks that harden your perimeter and prevent threats proactively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
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
      {/* 5. TECHNOLOGIES & TOOLS USED IN CYBERSECURITY (6 Dark Cards)              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Technologies & Tools Used in Cybersecurity
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We leverage advanced enterprise-grade cybersecurity tools, encryption protocols, and monitoring systems to secure every vector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
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
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULL SIZE BANNER 2: BUILD TRUST THROUGH SECURITY                       */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.cybersecurityFullSize2}
            alt="Build trust through security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Build trust through security
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            As a committed cybersecurity company, our security engineers are at your disposal around the clock to protect your organization and keep your data safe.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BENEFITS OF CHOOSING CAPYNGEN (6 Dark Cards)                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Choosing Capyngen Cybersecurity Services
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Why leading organizations trust Capyngen to safeguard their IT architecture and defend their most critical assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-10 h-10 mb-4 bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INDUSTRIES WE SERVE (6 Industry Cards with Illustrations)              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Targeted cyber defense frameworks built around the exact regulatory and threat profiles of key business verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-44 mb-6 bg-slate-900 p-2 flex items-center justify-center rounded-none overflow-hidden border border-slate-800">
                    <img
                      src={item.image}
                      alt={typeof item.title === 'string' ? item.title : 'Industry'}
                      className="max-h-full max-w-full object-cover"
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
      {/* 9. GET STARTED / CONSULTATION BANNER                                      */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#030712] text-white border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get a Free Cybersecurity Consultation
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Meet our security specialists and discover tailored defense frameworks to prevent breaches, eliminate vulnerabilities, and protect your enterprise.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Get a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FREQUENTLY ASKED QUESTIONS                                           */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default Cybersecurity;
