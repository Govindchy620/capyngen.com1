import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Cloud,
  Cpu,
  Database,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/enterprise-solutions#webpage",
  url: "https://www.capyngen.com/enterprise-solutions",
  name: "Enterprise IT Solutions | Capyngen",
  description:
    "Capyngen offers end-to-end Enterprise IT Solutions designed to optimize operations, enhance productivity, and scale your business with robust digital infrastructure and smart automation.",
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
    url: "https://www.capyngen.com/assets/enterprise1-CY627fNw.jpg",
    caption: "Enterprise IT Solutions | Digital Transformation | Capyngen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/enterprise-solutions#service",
  name: "Enterprise Solutions",
  serviceType:
    "Enterprise Software Development, Cloud Migration Services, Scalable IT Platforms, Enterprise App Solutions",
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
    "Capyngen provides enterprise-grade digital transformation solutions including cloud migration, scalable software platforms and enterprise app development to support growth and optimize operations.",
  url: "https://www.capyngen.com/enterprise-solutions",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/enterprise1-CY627fNw.jpg",
    caption:
      "Enterprise Solutions | Cloud Migration | Scalable Software | Enterprise Apps",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What type of enterprise solutions can also be provided by Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen has covered the whole with a complete line-up of Enterprise software solutions, Enterprise IT solutions, Enterprise cloud solutions, Enterprise application solutions, Enterprise security solutions, data analytics, and IT consulting that can be tailored to meet your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen design solutions to fit the needs of individual industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely! We are the ideal enterprise solutions vendor in the manufacturing sector, health, finance, retail, logistics and professional services. It is our sector experts who know the industry peculiar problems, regulations, and how things should be done that will provide you with solutions that would actually fit your business like a glove.",
      },
    },
    {
      "@type": "Question",
      name: "Are your business solutions secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "And first, security at home! Our enterprise security offerings include our enhanced monitoring of threats, advanced firewall on multiple levels, intrusion detection, encryption, access controls, compliance management and 24/7 monitoring of the company security operations centre that will ensure that you are safe forever and ever, amen.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have cloud-based enterprise solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We boast of being cloud-based enterprise solutions service providers to both small and large businesses, like cloud migration, hybrid cloud architecture, multi-cloud management, and cloud-native application development. We are partners with all the leading cloud providers such as AWS, Azure and Google Cloud.",
      },
    },
    {
      "@type": "Question",
      name: "Enterprise solutions are only supported for a finite time, right?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen offers 24/7 support, which is complete and effortless, an aspect of our best it services of providing. The services that our able-to-help teams will provide you with, which ensure your running system without any problem, with almost no downtimes, are application management, cloud services, security monitoring, infrastructure maintenance, etc.",
      },
    },
    {
      "@type": "Question",
      name: "How long can enterprise solutions be implemented?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration within which the implementation will occur will be based on the scope and complexity of the project. An example is 4-8 weeks to make simple cloud migrations and 6-12 months to make multidimensional digital transformation projects. At the planning stage, we project estimate and communicate project schedules.",
      },
    },
    {
      "@type": "Question",
      name: "What are the costs of enterprise solutions at Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices are calculated according to the complexity, size, technology layer, and support. These are project-based, subscription-based, and managed services. Request a personal quote of one of the best IT company Enterprise services.",
      },
    },
    {
      "@type": "Question",
      name: "Are you capable of integrating the new innovations into our existing infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely! Business applications and merger methods skillfully practices are skilled in bonding solutions, which are fresh, with the legacy systems, third-party programs and the databases. We continue to go on with data without glitches and we do operations with only one available synchronous technology across your tech environment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide enterprise solutions to small and medium organizations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily focus on solutions of enterprise significance but we do have a variety of solutions that can fit an enterprise that is still undergoing growth. Enterprise solutions services offered by us can be deployed in the small businesses and grow along with your venture to ensure that you acquire Enterprise capabilities with appropriate level of investment.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Capyngen the best Indian enterprise IT solutions company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our experience in the industry, full-spectrum, 24/7, and security assurance, and established record combine. We have the best IT firm in Delhi which is known to have enterprise solutions success.",
      },
    },
    {
      "@type": "Question",
      name: "What do you do to sustain the business in the process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our implementation and testing phases are done in phases, our testing in the support environments, we run off-peak hour deployments, parallel systems to support changeover and we also offer extensive training to reduce any inconveniences to your normal work.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you apply to enterprise solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offerings include the most recent technology like cloud applications (AWS, Azure, Google Cloud), enterprise software (SAP, Oracle, Microsoft) and programming languages (Java, .NET, Python), databases (SQL, NoSQL) and new technologies (AI, ML, IoT, blockchain).",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide training to our staff on the new enterprise system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our training is rather thorough, and it is customised to various user functions like end-users, administrators, and technical team. The training plan will be part of documentation, practice, video training, and knowledge transfer learning.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle data migration in the new enterprise systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our process of data migration adheres to steps of data migration procedure which comprises of appropriate data evaluation, cleaning, mapping, validation and testing. Our tools and strategies are dependable and ensure a successful and safe transfer of data with a minimum downtime and zero loss of data.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen helpful in no fewer than developing a digital transformation strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure! Our enterprise consulting service is comprised of the creation of a digital transformation strategy in its entirety. We assess your situation now, calculate the opportunities, draw the plans, propose the technologies, as well as provide the facilita-tion to become accustomed to your transformation objectives.",
      },
    },
  ],
};

const EnterpriseSolutions = () => {
  const faqItems = [
    {
      question:
        "What type of enterprise solutions can also be provided by Capyngen?",
      answer:
        "Capyngen has covered the whole with a complete line-up of Enterprise software solutions, Enterprise IT solutions, Enterprise cloud solutions, Enterprise application solutions, Enterprise security solutions, data analytics, and IT consulting that can be tailored to meet your business requirements.",
    },
    {
      question:
        "Can Capyngen design solutions to fit the needs of individual industries?",
      answer:
        "Definitely! We are the ideal enterprise solutions vendor in the manufacturing sector, health, finance, retail, logistics and professional services. It is our sector experts who know the industry peculiar problems, regulations, and how things should be done that will provide you with solutions that would actually fit your business like a glove.",
    },
    {
      question: "Are your business solutions secure?",
      answer:
        "And first, security at home! Our enterprise security offerings include our enhanced monitoring of threats, advanced firewall on multiple levels, intrusion detection, encryption, access controls, compliance management and 24/7 monitoring of the company security operations centre that will ensure that you are safe forever and ever, amen.",
    },
    {
      question: "Do you have cloud-based enterprise solutions?",
      answer:
        "Absolutely! We boast of being cloud-based enterprise solutions service providers to both small and large businesses, like cloud migration, hybrid cloud architecture, multi-cloud management, and cloud-native application development. We are partners with all the leading cloud providers such as AWS, Azure and Google Cloud.",
    },
    {
      question:
        "Enterprise solutions are only supported for a finite time, right?",
      answer:
        "Capyngen offers 24/7 support, which is complete and effortless, an aspect of our best it services of providing. The services that our able-to-help teams will provide you with, which ensure your running system without any problem, with almost no downtimes, are application management, cloud services, security monitoring, infrastructure maintenance, etc.",
    },
    {
      question: "How long can enterprise solutions be implemented?",
      answer:
        "The duration within which the implementation will occur will be based on the scope and complexity of the project. An example is 4-8 weeks to make simple cloud migrations and 6-12 months to make multidimensional digital transformation projects. At the planning stage, we project estimate and communicate project schedules.",
    },
    {
      question: "What are the costs of enterprise solutions at Capyngen?",
      answer:
        "Prices are calculated according to the complexity, size, technology layer, and support. These are project-based, subscription-based, and managed services. Request a personal quote of one of the best IT company Enterprise services.",
    },
    {
      question:
        "Are you capable of integrating the new innovations into our existing infrastructure?",
      answer:
        "Definitely! Business applications and merger methods skillfully practices are skilled in bonding solutions, which are fresh, with the legacy systems, third-party programs and the databases. We continue to go on with data without glitches and we do operations with only one available synchronous technology across your tech environment.",
    },
    {
      question:
        "Do you provide enterprise solutions to small and medium organizations?",
      answer:
        "We primarily focus on solutions of enterprise significance but we do have a variety of solutions that can fit an enterprise that is still undergoing growth. Enterprise solutions services offered by us can be deployed in the small businesses and grow along with your venture to ensure that you acquire Enterprise capabilities with appropriate level of investment.",
    },
    {
      question:
        "Why is Capyngen the best Indian enterprise IT solutions company?",
      answer:
        "Our experience in the industry, full-spectrum, 24/7, and security assurance, and established record combine. We have the best IT firm in Delhi which is known to have enterprise solutions success.",
    },
    {
      question: "What do you do to sustain the business in the process?",
      answer:
        "Our implementation and testing phases are done in phases, our testing in the support environments, we run off-peak hour deployments, parallel systems to support changeover and we also offer extensive training to reduce any inconveniences to your normal work.",
    },
    {
      question: "What technologies do you apply to enterprise solutions?",
      answer:
        "Our offerings include the most recent technology like cloud applications (AWS, Azure, Google Cloud), enterprise software (SAP, Oracle, Microsoft) and programming languages (Java, .NET, Python), databases (SQL, NoSQL) and new technologies (AI, ML, IoT, blockchain).",
    },
    {
      question:
        "Do you provide training to our staff on the new enterprise system?",
      answer:
        "Absolutely! Our training is rather thorough, and it is customised to various user functions like end-users, administrators, and technical team. The training plan will be part of documentation, practice, video training, and knowledge transfer learning.",
    },
    {
      question:
        "How do you handle data migration in the new enterprise systems?",
      answer:
        "Our process of data migration adheres to steps of data migration procedure which comprises of appropriate data evaluation, cleaning, mapping, validation and testing. Our tools and strategies are dependable and ensure a successful and safe transfer of data with a minimum downtime and zero loss of data.",
    },
    {
      question:
        "Is Capyngen helpful in no fewer than developing a digital transformation strategy?",
      answer:
        "Sure! Our enterprise consulting service is comprised of the creation of a digital transformation strategy in its entirety. We assess your situation now, calculate the opportunities, draw the plans, propose the technologies, as well as provide the facilita-tion to become accustomed to your transformation objectives.",
    },
  ];

  const solutionsData = [
    {
      title: "Proven Track Record",
      desc: "As one of the most prominent service providers of Enterprise solutions in India, Capyngen has transformed technological operations across diverse enterprise sectors.",
    },
    {
      title: "Industry Expertise",
      desc: "We support the unique software demands of manufacturing, healthcare, finance, retail, logistics, and professional business services.",
    },
    {
      title: "Complete Competencies",
      desc: "From initial enterprise consulting to development, integration, cloud orchestration, and round-the-clock managed maintenance under one roof.",
    },
    {
      title: "Well-Received Cloud Solutions",
      desc: "Delivering modern cloud agility, unlimited scalability, and massive infrastructure cost savings via AWS, Microsoft Azure, and Google Cloud.",
    },
    {
      title: "Scalable & Ready For The Future",
      desc: "Engineered to scale with your expansion. Whether entering international markets or scaling transactional volume, our architectures adjust seamlessly.",
    },
    {
      title: "High ROI Engineering",
      desc: "Focused on high capital return on technology investment—delivering true efficiency, automated workflows, and a distinct competitive advantage.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Enterprise Network & IT Solutions",
      description:
        "Scalable IT infrastructure to support corporate operations: high-bandwidth architectures, enterprise data center design, unified communications, IT asset management, and disaster recovery.",
      image: assets.enterprise3,
    },
    {
      title: "Enterprise Cloud Solutions",
      description:
        "Cloud migration, hybrid cloud topology, multi-cloud management, high-throughput storage, zero-trust cloud security, and continuous cost optimization across AWS, Azure, and GCP.",
      image: assets.enterprise4,
    },
    {
      title: "Enterprise Application Solutions",
      description:
        "Bespoke enterprise application development, legacy modernization, workflow automation, enterprise mobile apps, secure API ecosystems, and full application lifecycle management.",
      image: assets.enterprise5,
    },
    {
      title: "Enterprise Security Solutions",
      description:
        "Advanced threat defense, compliance governance (ISO 27001, SOC 2, HIPAA), Identity & Access Management (IAM), automated security audits, and continuous 24/7 SOC surveillance.",
      image: assets.enterprise6,
    },
    {
      title: "Enterprise Consulting Services",
      description:
        "Digital transformation roadmapping, IT governance frameworks, business process re-engineering, vendor management, and enterprise change management guidance.",
      image: assets.enterprise7,
    },
    {
      title: "Enterprise Data & Analytics Solutions",
      description:
        "Transforming fragmented data into actionable corporate intelligence: BI dashboards, data warehousing, predictive ML models, governance, and zero-loss data migration pipelines.",
      image: assets.enterprise8,
    },
  ];

  const steps = [
    {
      title: "Requirement Analysis & Discovery",
      description:
        "Intensive discovery sessions evaluating corporate goals, architectural bottlenecks, technology stack readiness, and digital transformation milestones.",
    },
    {
      title: "Strategic Architecture Planning",
      description:
        "Senior enterprise architects design a phased implementation roadmap prioritizing high business impact, security posture, and maximum ROI.",
    },
    {
      title: "Deployment & Integration",
      description:
        "Disciplined rollout leveraging parallel run models, automated testing environments, and knowledge transfer to guarantee zero operational interruption.",
    },
  ];

  const featuresData = [
    {
      title: "Enterprise-Grade Security",
      points: [
        "Continuous AI-driven threat monitoring",
        "Zero-trust Identity & Access Management (IAM)",
        "Strict compliance with ISO 27001, GDPR & SOC 2",
      ],
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Cloud-Based Enterprise Solutions",
      points: [
        "Flexible deployment: Hybrid, Multi-cloud & Private Cloud",
        "Elastic scalability supporting surging user loads",
        "Global geo-redundant data center availability",
      ],
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Custom Enterprise Software",
      points: [
        "Purpose-built ERP, CRM & supply chain tools",
        "Modular microservices architecture for longevity",
        "Intuitive workflows maximizing employee adoption",
      ],
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Scalable IT Infrastructure",
      points: [
        "Elastic auto-scaling compute and load balancing",
        "Automated continuous deployment and DevOps pipelines",
        "Predictable high-performance throughput",
      ],
      icon: <Layers className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "End-to-End Application Integration",
      points: [
        "Seamless synchronization between legacy and cloud tools",
        "Robust enterprise API gateways and messaging queues",
        "Preservation of existing technology investments",
      ],
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Data-Driven Decision Making",
      points: [
        "Executive business intelligence dashboards",
        "Embedded predictive modeling and machine learning",
        "Real-time KPI telemetry across departments",
      ],
      icon: <Database className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Enterprise Solutions | Scalable IT & Cloud Software – Capyngen
        </title>
        <meta
          name="description"
          content="Empower your business with Capyngen's enterprise solutions. We deliver scalable enterprise software, IT, and cloud solutions designed for growth and efficiency."
        />
        <meta
          name="keywords"
          content="Enterprise Solutions | Scalable IT & Cloud Software – Capyngen"
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
        aria-label="Enterprise Solutions Hero"
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
                NEXT-GENERATION ENTERPRISE ARCHITECTURE
              </div>

              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.12] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Advanced Enterprise IT & Cloud Solutions
              </h1>

              <p className="text-blue-400 text-lg sm:text-xl font-medium mb-4">
                Empowering Global Enterprises with Scalable Systems & Digital Transformation
              </p>

              <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-normal">
                Capyngen is the principal provider of scalable, secure, and modern Enterprise IT platforms. We engineer resilient technology stacks, cloud architectures, and intelligent custom software that elevate operational efficiency across industries.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-8 rounded-none transition-colors duration-150 shadow-lg text-base"
                >
                  Explore Enterprise Solutions
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-3.5 px-7 rounded-none transition-colors duration-150 text-base"
                >
                  Book Architecture Assessment
                </Link>
              </div>

              {/* Quick Tech Badges */}
              <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Multi-Cloud Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Zero-Downtime Rollout</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>SOC 2 & ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>24/7 Managed Support</span>
                </div>
              </div>
            </div>

            {/* Right Graphic: Showcase with floating glass chips */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="w-full max-w-[540px] xl:max-w-[600px] relative">
                {/* Floating Glassmorphic Chip Top */}
                <div className="hidden sm:flex items-center gap-3 absolute -top-6 -left-6 z-20 border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-none shadow-2xl">
                  <div className="w-8 h-8 rounded-none bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <Cloud className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Multi-Cloud Scalability</div>
                    <div className="text-[11px] text-slate-400">AWS, Azure & Google Cloud</div>
                  </div>
                </div>

                {/* Main Showcase Image */}
                <div className="relative border border-slate-800 bg-[#070e1d] p-3 shadow-2xl rounded-none overflow-hidden">
                  <img
                    src={assets.enterprise1}
                    alt="Enterprise Solutions Illustration"
                    className="w-full h-auto object-cover rounded-none"
                  />
                </div>

                {/* Floating Glassmorphic Chip Bottom */}
                <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -right-6 z-20 border border-slate-700/80 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-none shadow-2xl">
                  <div className="w-8 h-8 rounded-none bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">Zero-Downtime Migration</div>
                    <div className="text-[11px] text-slate-400">Enterprise High-Availability SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ENTERPRISE OVERVIEW & STRATEGIC VISION (SPLIT LIGHT SECTION)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.enterprise2}
                alt="Innovate and Grow Enterprises"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Innovate and Grow Enterprises through Modern Technology
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Large and complex enterprises need more than the technology of yesterday; they require seasoned partners who have solved multidimensional architectural bottlenecks and delivered transformative enterprise solutions.
              </p>
              <p>
                Capyngen integrates state-of-the-art cloud ecosystems, mission-critical custom applications, and rigorous industry governance to turn complex challenges into effortless business acceleration.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Cloud Modernization & DevOps</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Custom ERP & CRM Architectures</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Zero-Trust Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Predictive Big Data Analytics</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Technology Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL SIZE BANNER: EMPOWER YOUR ENTERPRISE WITH INNOVATION               */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.enterpriseSolFullSize}
            alt="Empower Your Enterprise with Innovation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Empower Your Enterprise with Innovation
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We engineer high-performance platforms that resolve complex enterprise operational challenges, streamline cross-functional workflows, and unlock massive revenue opportunities.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPLETE ENTERPRISE SOLUTIONS SERVICES (6 Cards with Images)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Complete Enterprise Solutions Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              From resilient IT backbones to bespoke applications and intelligent analytics, our capabilities support your entire digital enterprise ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
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
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. KEY ARCHITECTURAL FEATURES (6 Dark Cards with Points)                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Key Features of Our Enterprise Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Architectural advantages engineered into every enterprise system we build and manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR ENTERPRISE PROCESS (3 Step Cards)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Enterprise Solutions Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A phased, low-risk execution methodology designed to guarantee smooth transitions with zero impact on active business operations.
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
      {/* 7. WHY CHOOSE CAPYNGEN FOR ENTERPRISE (SPLIT LIGHT SECTION)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen for Enterprise Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We deliver complete lifecycle expertise from strategic design to implementation, cloud orchestration, and continuous proactive maintenance.
            </p>

            <div className="space-y-4 pt-2">
              {solutionsData.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-semibold">{point.title}</strong>
                    <span className="text-slate-600"> – {point.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.enterprise9}
                alt="Why Choose Capyngen for Enterprise Solutions"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FREE ENTERPRISE TECHNOLOGY ASSESSMENT (CTA BANNER)                     */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#030712] text-white border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Free Enterprise Technology Assessment
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Book a complimentary session with our senior architects to evaluate your technology stack, identify cost-reduction opportunities, and design a modern enterprise roadmap.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Get In Touch
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

export default EnterpriseSolutions;
