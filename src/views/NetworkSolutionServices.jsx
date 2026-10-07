import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Network,
  Wifi,
  ShieldCheck,
  Cloud,
  Server,
  Activity,
} from "lucide-react";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/network-solutions#webpage",
  url: "https://www.capyngen.com/network-solutions",
  name: "Network Solutions Company | Reliable IT Infrastructure – Capyngen",
  description:
    "Capyngen provides advanced network solutions for businesses, including secure connectivity, infrastructure setup, and network optimization. Build a high-performance and reliable network system with Capyngen. {Source page}.",
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
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/network1-DC_0-9zV.jpg",
    caption: "Network Solutions | Secure Connectivity | Capyngen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/network-solutions#service",
  name: "Network Solutions",
  serviceType:
    "Network Infrastructure Design, IT Networking, Cloud Networking, Cybersecurity Solutions",
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
    "Capyngen provides secure and scalable network infrastructure solutions for enterprises, including cloud networking, system integration, and cybersecurity to ensure high performance and data safety.",
  url: "https://www.capyngen.com/network-solutions",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/network1-DC_0-9zV.jpg",
    caption:
      "Network Solutions | IT Networking | Cloud Infrastructure | Cybersecurity",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are network solutions and services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Network solutions and services comprise the creation, implementation, administration, and upkeep of IT network infrastructure. Along with hardware, software, and security measures, the services also include cloud integration and the provision of continuous support to ensure an enterprise's optimal connectivity and performance.",
      },
    },
    {
      "@type": "Question",
      name: "Why do businesses need managed network services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Managed network services allow for the work of experts who provide proactive monitoring, maintenance, and optimization of your network infrastructure. Consequently, the network experiences less downtime, security is improved, operational costs are lowered, and the in-house team is allowed to deal with the primary business activities instead of IT troubleshooting.",
      },
    },
    {
      "@type": "Question",
      name: "How Capyngen can improve network security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen incorporates a multi-layered security approach consisting of an advanced firewall, intrusion detection systems, VPNs, continuous monitoring, vulnerability assessments, and incident response planning. We design the security safeguards to suit your industry's needs and compliance requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What differentiates on-premise from cloud network services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-premises networks are physically located within your site and use hardware that you own and manage. Cloud network services operate on remote servers, offering benefits like greater scalability, flexibility, lower infrastructure costs, and global accessibility through the internet.",
      },
    },
    {
      "@type": "Question",
      name: "How much do network solutions and services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost varies depending on the size, complexity, and specific needs of your business. Capyngen provides flexible and scalable network service options to suit any budget—from affordable managed services for small businesses to comprehensive enterprise-grade solutions. Contact us for a custom estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a 24/7 support provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, Capyngen provides complete 24/7 network monitoring and support services. Our dedicated team is always ready to resolve issues, respond to queries, and ensure uninterrupted network operations.",
      },
    },
    {
      "@type": "Question",
      name: "What industries are served by Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cater to diverse industries including healthcare, finance, retail, manufacturing, education, professional services, and hospitality. Each solution is customized to meet specific compliance and operational needs of the sector.",
      },
    },
    {
      "@type": "Question",
      name: "Could you assist in our network migration to the cloud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most definitely, yes! Cloud migration services are a core expertise of Capyngen. We assess your current setup, design a smooth and secure migration plan, execute it with minimal downtime, and provide continuous cloud management and optimization.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement network solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration of implementation largely depends on the project’s scope and complexity. While basic configurations may take just a few days, full enterprise network overhauls might take several weeks. We provide a detailed project timeline during the planning phase and work efficiently to minimize business disruption.",
      },
    },
    {
      "@type": "Question",
      name: "What is network consulting and do I need it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Network consulting involves experts assessing and planning your IT infrastructure strategically. If you're facing performance or security issues, planning expansion, or upgrading systems, consulting helps you make cost-effective and future-ready network decisions.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure network uptime and reliability?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We maintain reliability through proactive monitoring, backup systems, routine maintenance, automated alerts, rapid incident response, and continuous optimization. Our goal is to achieve 99.9%+ uptime for clients.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen support remote and hybrid work environments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in building secure network infrastructures for remote and hybrid work environments, including VPN configuration, secure remote access, cloud collaboration tools, and endpoint security for distributed teams.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if there is a network emergency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In case of a network emergency, Capyngen’s 24/7 support team responds immediately. We have established protocols for rapid incident resolution, client communication, and system restoration to ensure minimal disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide network solutions for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, definitely! Capyngen offers cost-effective and scalable managed network services tailored for small businesses. Our solutions can grow with your business, ensuring you receive enterprise-grade reliability at an affordable price.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Capyngen's network services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is simple! Contact us via our website, phone, or email to book a free consultation. We’ll conduct a network assessment, discuss your goals, and recommend customized solutions — no obligations attached.",
      },
    },
  ],
};

const NetworkSolutionServices = () => {
  const faqItems = [
    {
      question: "What are network solutions and services?",
      answer:
        "Network solutions and services comprise the creation, implementation, administration, and upkeep of IT network infrastructure. Along with hardware, software, and security measures, the services also include cloud integration and the provision of continuous support to ensure an enterprise's optimal connectivity and performance.",
    },
    {
      question: "Why do businesses need managed network services?",
      answer:
        "Managed network services allow for the work of experts who provide proactive monitoring, maintenance, and optimization of your network infrastructure. Consequently, the network experiences less downtime, security is improved, operational costs are lowered, and the in-house team is allowed to deal with the primary business activities instead of IT troubleshooting.",
    },
    {
      question: "How Capyngen can improve network security?",
      answer:
        "Capyngen incorporates a multi-layered security approach consisting of an advanced firewall, intrusion detection systems, VPNs, continuous monitoring, vulnerability assessments, and incident response planning. We design the security safeguards to suit your industry's needs and compliance requirements.",
    },
    {
      question: "What differentiates on-premise from cloud network services?",
      answer:
        "On-premises networks are physically located within your site and use hardware that you own and take care of. Cloud network services run on servers far away, giving you the advantages of more scalability, flexibility, less infrastructure costs, and being able to access it from anywhere with an internet connection.",
    },
    {
      question: "How much do network solutions and services cost?",
      answer:
        "The cost varies depending on the size, complexity, and specific needs of the business. Capyngen has solutions that are flexible and scalable for any budget – from small business managed network services that are budget-friendly to large enterprise solutions that are comprehensive. We would be glad to provide you with a personalized estimate if you get in touch with us.",
    },
    {
      question: "Are you a 24/7 support provider?",
      answer:
        "Indeed, Capyngen provides a comprehensive service that involves network monitoring and support 24/7. Our committed team is always available to solve problems, respond to your queries, and ensure the continued functioning of your network without a break.",
    },
    {
      question: "What industries are served by Capyngen?",
      answer:
        "We cater to the needs of various sectors like health, finance, retail, production, education, professional services, and hospitality among more. We customize our solutions to ensure that clients' industry-specific compliance and operational requirements are met.",
    },
    {
      question: "Could you assist in our network migration to the cloud?",
      answer:
        "Most definitely, yes! Cloud migration services are the specialty of Capyngen. We go over your current setup, choose a migration plan that is smooth and safe, do the change with the least possible downtime, and then continue cloud management and optimization.",
    },
    {
      question: "How long does it take to implement network solutions?",
      answer:
        "The period of implementation depends to a large extent on the scope and intricacy of the project. Some configurations might only require a couple of days to complete, while extensive enterprise network overhaul may take even a few weeks. We provide the detailed timeline during the planning phase and are committed to working efficiently to lessen the impact on the client.",
    },
    {
      question: "What is network consulting and do I need it?",
      answer:
        "Network consulting includes the activity of one or more experts examining and strategically planning your IT infrastructure. If you are experiencing performance issues, planning to grow, facing security issues, or thinking of upgrading your technology, getting consulted will help you make the right decisions and save you money in the long run.",
    },
    {
      question: "How do you ensure network uptime and reliability?",
      answer:
        "Reliability is guaranteed to a great extent through proactive monitoring, having backup systems in place, routine maintenance, automated alerts, fast reaction to incidents, and continual optimization.",
    },
    {
      question: "Can Capyngen support remote and hybrid work environments?",
      answer:
        "The answer is yes. We are the best at building secure networks for remote and hybrid work settings. This includes VPN set-up, safe remote access solutions, cloud cooperation tools, and endpoint security to keep your distributed workforce protected.",
    },
    {
      question: "What happens if there is a network emergency?",
      answer:
        "In the case of any network emergency, our 24/7 assistance team is on hand to take action right away. We have processes in place that allow for the speedy fixing of the problem, issue resolution, and informing. For managed service clients, we are usual.",
    },
    {
      question: "Do you provide network solutions for small businesses?",
      answer:
        "Yes, definitely! The managed network services for small businesses, which are affordable is what Capyngen offers. We realize that budgets can be tight and supply you with solutions that can be scaled up depending on your needs in terms of performance.",
    },
    {
      question: "How do I get started with Capyngen's network services?",
      answer:
        "It is very simple to get started! By either our website, phone, or email, you can reach us to schedule a consultation for free. First, we do a network checkup, then based on your requirements and objectives, we recommend individualized solutions with no binding commitment, and we help you find the best solution for your business.",
    },
  ];

  const servicesData = [
    {
      title: "Managed Network Services",
      description:
        "24/7 network monitoring with real-time telemetry and proactive issue mitigation to prevent business-disrupting downtime.",
      icon: <Activity className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Network Security Solutions",
      description:
        "Advanced perimeter firewall protection with multi-layered security preventing unauthorized infiltration and securing data.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Cloud Network Services",
      description:
        "Smooth cloud migration architectures connecting on-premises data centers with hybrid and multi-cloud hyperscalers.",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Network Consulting Services",
      description:
        "Full infrastructure audit inspecting topology, pinpointing bottlenecks, and architecting scalable enterprise growth roadmaps.",
      icon: <Network className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "IT Support & Maintenance Services",
      description:
        "Hardware installation, router configuration, cable management, and lifecycle patching for optimal hardware health.",
      icon: <Server className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Infrastructure Design & Implementation",
      description:
        "Bespoke high-availability network topologies engineered to scale effortlessly with multi-site corporate expansion.",
      icon: <Wifi className="w-8 h-8 text-blue-400" />,
    },
  ];

  const trustCards = [
    {
      image: assets.network3,
      title: "Expert IT Professionals",
      desc: "We are a team of certified network engineers and IT specialists with deep cross-industry experience in routing, switching, and security.",
    },
    {
      image: assets.network4,
      title: "Customized Solutions",
      desc: "Tailored network topologies adjusted to your distinct bandwidth needs, operational workflow, and budgetary parameters.",
    },
    {
      image: assets.network5,
      title: "Best Network Solutions Company in India",
      desc: "Capyngen is trusted across India for architecting resilient, secure, and ultra-high-speed network systems with verified success.",
    },
    {
      image: assets.network6,
      title: "Cost-Effective & Scalable",
      desc: "Elastic infrastructure designs engineered to optimize operational spending while expanding smoothly as traffic increases.",
    },
    {
      image: assets.network7,
      title: "Proactive Approach",
      desc: "We prevent outages before they happen through intelligent automated monitoring, redundant links, and predictive maintenance.",
    },
    {
      image: assets.network8,
      title: "24/7 Support & Monitoring",
      desc: "Continuous round-the-clock Network Operations Center (NOC) supervision guaranteeing 99.99% network uptime for clients.",
    },
  ];

  const industriesData = [
    {
      title: "Startups & Small Businesses",
      image: assets.webDev17,
      description: "Agile, cost-efficient office networking and secure Wi-Fi architectures built to support rapid scaling.",
    },
    {
      title: "E-commerce & Retail",
      image: assets.webDev18,
      description: "High-throughput store networks, POS system resilience, and secure PCI-compliant guest Wi-Fi networks.",
    },
    {
      title: "Healthcare & Education",
      image: assets.webDev19,
      description: "HIPAA-compliant hospital telemetry networks, campus-wide coverage, and secure student/staff segmentation.",
    },
    {
      title: "Real Estate & Logistics",
      image: assets.webDev20,
      description: "Distributed warehouse Wi-Fi, asset tracking connectivity, and real-time logistics communication pipelines.",
    },
    {
      title: "Corporate Enterprises",
      image: assets.webDev21,
      description: "Multi-branch SD-WAN routing, MPLS migration, high-density corporate Wi-Fi, and redundant data center links.",
    },
    {
      title: "FinTech & Trading Sites",
      image: assets.webDev22,
      description: "Deterministic sub-millisecond network architectures, redundant fiber backbones, and zero packet loss.",
    },
  ];

  const steps = [
    {
      title: "Discovery & Assessment",
      description:
        "The initial phase involves comprehensive audits grasping your current topology, hardware health, bottlenecks, and expansion plans.",
    },
    {
      title: "Strategic Planning & Topology Design",
      description:
        "Certified engineers create a bespoke network roadmap balancing bandwidth, security policies, redundancy, and budgeting.",
    },
    {
      title: "Implementation & Optimization",
      description:
        "Following strict SOPs and rigorous latency testing, we deploy your solution with near-zero disruption to ongoing business operations.",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Network Solutions | Managed IT & Cloud Network Services – Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers reliable network solutions for modern businesses. From IT and managed network services to security and cloud networking — we’ve got you covered."
        />
        <meta
          name="keywords"
          content="Network Solutions | Managed IT & Cloud Network Services – Capyngen"
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
      {/* 1. HERO SECTION (ORIGINAL BANNER14 DESIGN AS REQUESTED)                  */}
      {/* ========================================================================= */}
      <section
        className="pt-28 lg:pt-36 flex items-center py-16 bg-[#111927] text-white px-4 sm:px-6 lg:px-12 border-b border-slate-800"
        aria-label="Capyngen Network Solutions Banner"
      >
        <div className="w-full max-w-[1536px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
            {/* Left Content: Image with rounded-3xl as in original */}
            <div className="w-full lg:w-5/12 flex justify-center mb-6 lg:mb-0">
              <img
                src={assets.network1}
                alt="Network Solutions Illustration"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-7/12 py-4 text-left">
              <h1
                className="text-3xl sm:text-4xl lg:text-[46px] font-bold mb-6 leading-tight tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Creative{" "}
                <span className="text-blue-500 font-extrabold">
                  Network Solutions and Services
                </span>{" "}
                for Contemporary Businesses
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                Capyngen provides efficient, safe, and adaptable technology network solutions and services that assist your business in achieving maximum performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. NETWORK OVERVIEW & VALUE PROPOSITION (SPLIT LIGHT SECTION)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.network2}
                alt="Network Performance and Reliability"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Mission-Critical Connectivity for Modern Enterprises
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                In a digital-first economy, your network infrastructure is the lifeline of your business. At Capyngen, we understand that connectivity must operate without single points of failure, while maintaining top-tier security and throughput.
              </p>
              <p>
                From unified enterprise Wi-Fi to high-bandwidth multi-cloud interconnects, our certified engineers build robust networks that enable teams to collaborate without interruption.
              </p>
            </div>

            {/* Core Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>24/7 Proactive Monitoring</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Zero-Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Next-Gen Firewall Defense</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Hybrid Cloud Interconnect</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Infrastructure Assessment
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL SIZE BANNER 1: CONNECT WITH CONFIDENCE                            */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.networkSolFullSize}
            alt="Connect with confidence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Connect with confidence
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our team is committed to delivering quality networking solutions that are not only blazing fast and resilient but also impenetrable against unauthorized access.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Connect With Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR NETWORK SOLUTIONS & SERVICES (6 Cards - White Background)          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Network Solutions & Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Complete lifecycle infrastructure capabilities designed to engineer, deploy, monitor, and optimize your business network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
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
      {/* 5. WHY BUSINESSES TRUST CAPYNGEN (6 Cards with Images)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Businesses Trust Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We engineer dependable, secure, and future-ready network systems with proven uptime and dedicated client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustCards.map((item, idx) => (
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
      {/* 6. OUR PROCESS (3 Step Cards)                                             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Network Implementation Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A systematic engineering methodology designed to deliver seamless transitions with zero unplanned downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-400 mb-3 tracking-wider">
                    PHASE 0{idx + 1}
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
      {/* 7. INDUSTRIES WE SERVE (6 Industry Cards)                                 */}
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
              We design robust network backbones that address unique regulatory compliance, bandwidth intensity, and distributed site demands.
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
                      alt={item.title}
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
      {/* 8. GET STARTED / CONSULTATION BANNER                                      */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#030712] text-white border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Get Started Today with Capyngen
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Do not allow legacy network bottlenecks to hinder your business velocity. Connect with our certified engineers to build a resilient, high-bandwidth IT ecosystem.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Get in Touch
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

export default NetworkSolutionServices;
