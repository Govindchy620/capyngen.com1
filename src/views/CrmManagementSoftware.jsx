import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Users,
  LineChart,
  Layers,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  Zap,
  TrendingUp,
  Settings,
  Database,
  Shield,
  Smartphone,
  Cpu,
  Heart,
  Megaphone,
  Briefcase,
  Sliders,
  Share2,
  Check,
} from "lucide-react";
import { assets } from "../assets/assets";
import crmHeroBg from "../assets/CRM/1.png";
import crmAnalyticsImg from "../assets/CRM/2.png";
import crmSupportImg from "../assets/CRM/3.png";
import crmMobileImg from "../assets/CRM/4.png";
import crmEnterpriseImg from "../assets/CRM/5.png";
import TechStack from "../components/TechStack";
import FAQSection2 from "../components/FAQSection2";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/crm-management-software#webpage",
  url: "https://www.capyngen.com/crm-management-software",
  name: "CRM Management Services – India’s Best CRM Software Provider",
  description:
    "Get powerful CRM & management software designed to streamline sales, marketing, and customer relationships. Choose the best CRM management software for your business growth.",
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
    url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    caption: "CRM Management Services | Best CRM Software Provider in India",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/crm-management-software#service",
  name: "CRM Management Services – India’s Best CRM Software Provider",
  description:
    "Get powerful CRM & management software designed to streamline sales, marketing, and customer relationships. Choose the best CRM management software for your business growth.",
  url: "https://www.capyngen.com/crm-management-software",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "CRM Management Services",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/crm6-BQ4chRUW.png",
    caption: "CRM Management Services and CRM Software Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CRM mainly used to do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM software helps businesses manage customer data, track interactions, automate sales pipelines, and improve customer satisfaction.",
      },
    },
    {
      "@type": "Question",
      name: "Can small businesses benefit from CRM software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Small businesses can benefit by organizing customer information, automating routine tasks, and improving lead conversions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between ERP and CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP manages backend business processes such as inventory and supply chain, while CRM focuses on customer-facing activities like sales and support.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom CRM development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on features, complexity, and integrations. Capyngen offers tailored pricing models to match your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can CRM software increase sales conversions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. By tracking customer journeys, managing follow-ups, and providing actionable analytics, CRM helps sales teams close deals faster.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom CRM software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen designs and develops fully bespoke CRM software aligned with your unique business workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen CRM integrate with existing business tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide seamless API integrations with ERP systems, marketing tools, communication channels, and accounting software.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries can use Capyngen CRM software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM solutions are flexible and serve e-commerce, healthcare, real estate, finance, education, and hospitality sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Does CRM software improve customer retention?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With complete communication histories and automated support ticketing, businesses can deliver personalized service that drives retention.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen CRM accessible on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer responsive web platforms and dedicated mobile apps so your team can access CRM dashboards anywhere.",
      },
    },
    {
      "@type": "Question",
      name: "Can you migrate data from our existing CRM system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide complete CRM data migration services with data cleansing and zero downtime.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide employee training for the new CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer hands-on onboarding sessions, documentation, and continuous technical support for smooth adoption.",
      },
    },
    {
      "@type": "Question",
      name: "How does CRM improve business decision-making?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Built-in analytics and real-time dashboards deliver deep insights into sales performance, customer trends, and campaign effectiveness.",
      },
    },
    {
      "@type": "Question",
      name: "How secure are Capyngen CRM systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM software is fully encrypted and includes access controls and compliance measures to ensure data security.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM software development services team offers free consultations to help you plan your CRM solution and implementation roadmap.",
      },
    },
  ],
};

const CrmManagementSoftware = () => {
  const faqItems = [
    {
      question: "What is CRM mainly used to do?",
      answer:
        "The primary objective of a customer relationship management software solution is to systematise the data about clients, follow the leads, and make more sales and contribute to enhanced customer experiences.",
    },
    {
      question: "Can small businesses benefit from CRM?",
      answer:
        "Absolutely. Our CRM software development company offers cloud models that are both competitive and scalable in terms of the cost of setup.",
    },
    {
      question: "How different is ERP from CRM?",
      answer:
        "ERP manages internal processes, whereas CRM & management software emphasise sales and customer interactions.",
    },
    {
      question: "How much should a CRM system cost?",
      answer:
        "Our CRM development company in India has flexible pricing plans that can work with most businesses of any size and operational requirements.",
    },
    {
      question: "Does CRM boost sales performance?",
      answer:
        "Yes, the Best CRM software in world enables your team to work efficiently with leads, following conversions.",
    },
    {
      question: "Do you provide tailored CRM solutions?",
      answer:
        "Capyngen is a Custom CRM software development company that develops systems that match your business workflow.",
    },
    {
      question: "Is CRM compatible with the current tools?",
      answer:
        "Yes- with professional CRM software development integration and connector services.",
    },
    {
      question: "What are the most effective industries of CRM?",
      answer:
        "We have our CRM software development company platforms that are flexible to any industry, whether it is e-commerce or in healthcare and finance.",
    },
    {
      question: "Does CRM improve retention?",
      answer:
        "In fact, CRM management software will assist in the tracking history and forecasting customer need in order to increase loyalty.",
    },
    {
      question: "Does it have a mobile version?",
      answer:
        "Yes- our CRM software development solutions company in India has guaranteed mobile compatibility to have on-the-go access.",
    },
    {
      question: "What about the issue of migrating to my existing CRM?",
      answer:
        "Capyngen offers migration and upgrade solutions to move data safely to your new CRM software solutions.",
    },
    {
      question: "Do you provide CRM training?",
      answer:
        "Yes, all clients of the top CRM development company are provided with onboarding and comprehensive system support materials.",
    },
    {
      question: "What is the benefit of CRM to decision-making?",
      answer:
        "Crm lead management software is created with in-built analytics and dashboards that stimulate precise reporting and quicker decision-making.",
    },
    {
      question: "What is the level of security of Capyngen systems?",
      answer:
        "Our best CRM software is fully encrypted and has access control and compliance.",
    },
    {
      question: "What will be my starting point with Capyngen CRM solutions?",
      answer:
        "First, schedule a consultation with our CRM software development services team. Then, we formulate a unique strategy tailored to your requirements.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Better Customer Relationships",
      description:
        "Connect better with clients with the help of personalisation based on data and the high-level insights provided by our CRM software development services.",
      icon: <Users className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Increased Sales & Revenue",
      description:
        "Automate the sales channels and manage the leads easily. The model of our CRM software development increases transparency and improves conversions - this is one of the main advantages of any CRM development company in India.",
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Better Productivity and Co-operation",
      description:
        "The best CRM management software is designed to work together, and hence the workforce is able to collaborate via the shared visualisation of the dashboards and workflow.",
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Examine and identify the customer behaviour patterns. The CRM software development solutions company in India is Capyngen, which incorporates analytical systems that facilitate strong reporting.",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Better Customer Retention and Loyalty",
      description:
        "Anticipate customer intention ahead of trouble - the tools of our CRM software development company foster the growth of long-lasting loyalty.",
      icon: <Heart className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Marketing Made Easier",
      description:
        "Design and deploy the campaign that is supported by the data and has built-in analytics delivered by our CRM software solutions, so that it can reach more people and generate higher ROI.",
      icon: <Megaphone className="w-6 h-6 text-blue-400" />,
    },
  ];

  const cardsSectionImageData2 = [
    {
      image: assets.crm4,
      title: "Customised CRM Software Development",
      desc: "Our Custom CRM software development company develops systems that perfectly fit your processes and goals.",
      tag: "BESPOKE ARCHITECTURE",
    },
    {
      image: assets.crm5,
      title: "CRM Integration Services",
      desc: "Our CRM & management software is linked to ERP, finance and marketing databases through seamless API connections.",
      tag: "API CONNECTORS",
    },
    {
      image: assets.crm6,
      title: "CRM Migration & Upgrade Solutions",
      desc: "Being one of the top CRM development company, we have no trouble with system transitions without losing any data.",
      tag: "ZERO DATA LOSS",
    },
    {
      image: assets.crm7,
      title: "CRM Consulting & Strategy",
      desc: "The CRM software development services are designed by our experts based on quantifiable outcomes, minimisation of downtime and cost of training.",
      tag: "ROADMAP & ROI",
    },
    {
      image: assets.crm8,
      title: "CRM Support & Maintenance",
      desc: "The CRM software development is responsive and secure due to continuous update and 24/7 support.",
      tag: "24/7 SLA",
    },
    {
      image: assets.crm9,
      title: "Mobile CRM Solutions",
      desc: "Anywhere access- Anywhere access Your dashboards via secure mobile applications, which are driven by our CRM software development company.",
      tag: "MOBILE APPS",
    },
  ];

  const cardsSectionData2 = [
    {
      title: "Operational CRM",
      description:
        "Automates daily sales and service operations to make communication fast and more accurate by CRM management software.",
      icon: <Sliders className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Analytical CRM",
      description:
        "Makes big data decisions, relating CRM & management software findings to business strategy.",
      icon: <LineChart className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Collaborative CRM",
      description:
        "Enhances collaboration with centralized access by departments- ideal with the CRM management software scalability.",
      icon: <Users className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Strategic CRM",
      description:
        "Concentrates on profitable company-customer relations in terms of preemptive contact and retention.",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Campaign Management CRM",
      description:
        "Makes marketing campaigns easier to execute in terms of segmentation and tracking of progress through the best CRM software platform.",
      icon: <Megaphone className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Social CRM",
      description:
        "Under modern CRM software development services, links your social channels.",
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Define Your Business Goals and Needs",
      description:
        "It is a good idea to clarify your sales, service, and marketing goals before you buy any CRM software solutions.",
      image: assets.crm10,
      step: "01",
    },
    {
      title: "List Necessary Features",
      description:
        "The key requirements to take into consideration during the review of CRM software development services are prioritisation on integrations, automation, and access via mobile devices.",
      image: assets.crm11,
      step: "02",
    },
    {
      title: "Assess Industry‑Specific Requirements",
      description:
        "Niche markets need flexible platforms- our team takes care of the best CRM software capability that fits your industry.",
      image: assets.crm12,
      step: "03",
    },
    {
      title: "Evaluate Ease of Use and Experience",
      description:
        "Select an easy-to-use CRM management software that requires minimal time to onboard and maximise efficiency.",
      image: assets.crm13,
      step: "04",
    },
    {
      title: "Check Integration with Existing Tools",
      description:
        "Our CRM software development firm provides a smooth integration in the ERP, project management, and CRM lead management software modules.",
      image: assets.crm14,
      step: "05",
    },
    {
      title: "Confirm Trusted Vendor Credentials",
      description:
        "The history of a top CRM development company ensures quality support, transparency, and successful adoption by Capyngen.",
      image: assets.crm15,
      step: "06",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          CRM Management Services – India’s Best CRM Software Solutions Provider
        </title>
        <meta
          name="description"
          content="Get powerful CRM & management software designed to streamline sales, marketing, and customer relationships. Choose the best CRM management software solutions for your business growth."
        />
        <meta
          name="keywords"
          content="CRM management software solutions, best crm management software, crm management services"
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
      {/* 1. HERO SECTION (Full Screen min-h-screen / Sharp Edges / High Contrast)   */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-screen text-white flex items-center justify-center pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-gradient-to-b from-[#070e1d] via-[#09152e] to-[#070e1d]"
        aria-label="CRM Management Software Banner"
      >
        {/* Subtle Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 sm:w-12 bg-slate-400" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-slate-300 font-bold">
                  WHAT WE DO <span className="text-blue-400 mx-1">/</span> SERVICES
                </span>
                <div className="h-[1px] flex-1 max-w-xs bg-slate-600/50" />
              </div>

              <h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.14] tracking-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Instant{" "}
                <span className="text-blue-500">
                  CRM Management Software Provider
                </span>{" "}
                – Get India’s #1 Trusted CRM Solution
              </h1>

              <div className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                <p>
                  Manage customer interactions, maximise sales, and develop customer
                  loyalty using the state of the art CRM & management software that
                  fits small, medium, and large businesses by Capyngen. As one of the{" "}
                  <a
                    href="https://www.capyngen.com/consulting"
                    className="text-blue-400 hover:text-blue-300 underline font-semibold transition-colors"
                  >
                    top consulting services in Gurgaon
                  </a>
                  , Capyngen helps organisations turn CRM into a real growth engine.
                </p>
              </div>

              <div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
                >
                  Schedule Free CRM Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[560px] xl:max-w-[600px] flex items-center justify-center overflow-hidden">
                <img
                  src={assets.crm1}
                  alt="CRM Management Services – India’s Best CRM Software Solutions Provider"
                  className="w-full h-auto object-contain rounded-none drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT CAPYNGEN DOES UNIQUELY                                            */}
      {/* ========================================================================= */}
      <section className="bg-[#081329] text-white py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-bold">
              DIFFERENTIATED VALUE
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What{" "}
              <Link to="/" className="text-blue-400 underline hover:text-blue-300">
                Capyngen
              </Link>{" "}
              Does Uniquely
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              The customer relationship management software offered by Capyngen is more than just any ordinary automation. Our CRM software solutions platforms are open, enterprise-level and highly customised to the customer requirements. Every system is designed to provide quantifiable outcomes with the help of our CRM software development company, as it helps provide engagement to the clients, automate the processes, and optimise the operations.
            </p>
            <div className="p-5 bg-[#0b162c] border-l-4 border-blue-600 text-slate-300 text-sm sm:text-base leading-relaxed rounded-none shadow-md">
              Our best CRM software can help you upgrade relationships, streamline work processes, and maximise growth. Arrange a meeting with Capyngen, a Custom CRM software development company listed among the Top CRM development company innovators in Asia.
            </div>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="border border-slate-700 bg-slate-900 p-2 shadow-2xl rounded-none w-full max-w-[500px]">
              <img
                src={assets.crm2}
                alt="CRM Management Services – India’s Best CRM Software Solutions Provider"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHAT ARE CRM MANAGEMENT SOLUTIONS? (SPLIT INTRO)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.crm3}
                alt="What Are CRM Management Solutions by Capyngen"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              FOUNDATIONAL ARCHITECTURE
            </div>
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Are CRM Management Solutions?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                CRM & management software are smart computers that help in tracking sales, managing communications, and automating business in a company. These channels collect information regarding customer behaviour, link departments, and facilitate business process management. The CRM software development services provided by Pyngen are aimed at ensuring that operations are smarter and assisting teams in creating long-term customer relationships.
              </p>
              <p>
                Bespoke cloud CRMs of Capyngen are developed on the basis of the best CRM software development architecture that offers businesses the power to work smarter. Our best CRM management software allows your company to emphasise loyalty, data trends, and revenue generation.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FULL SIZE BANNER 1: STRENGTHEN RELATIONSHIPS                           */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.crmSolFullSize}
            alt="Strengthen relationships, simplify management"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 bg-blue-950/80 text-blue-400 border border-blue-500/30 rounded-none inline-block font-bold">
            ENTERPRISE EFFICIENCY
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Strengthen relationships, simplify management
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our CRM software solutions are industry-specific, and productivity is optimised. Capyngen is a custom CRM software development company wherein each of the modules will lead to improved relationships, time management, and increased collaboration using CRM management software.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Try CRM Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ADVANTAGES OF IMPLEMENTING CRM MANAGEMENT SOLUTIONS                    */}
      {/* ========================================================================= */}
      <section id="advantages-section" className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3 font-bold">
              ROI & PERFORMANCE
            </span>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Advantages of Implementing CRM Management Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((adv, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-8 hover:border-blue-500 transition-colors duration-150 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none" />

                <div>
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mb-5 rounded-none border border-slate-800 group-hover:border-blue-500/40">
                    {adv.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {adv.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs font-mono text-slate-400 gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> MEASURABLE OUTCOME
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY BUSINESSES TRUST CAPYNGEN (6 IMAGE SERVICES)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              TRUSTED CREDENTIALS
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Businesses Trust Capyngen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData2.map((svc, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200 hover:border-blue-500 transition-colors duration-150 flex flex-col justify-between rounded-none overflow-hidden shadow-sm"
              >
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover rounded-none"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-150"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CRM MANAGEMENT SOLUTIONS VARIETIES (6 CATEGORIES)                      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block mb-3 font-bold">
              SPECIALIZED CLASSIFICATIONS
            </span>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              CRM Management Solutions varieties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((type, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-8 hover:border-blue-500 transition-colors duration-150 rounded-none flex flex-col justify-between relative group shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none" />

                <div>
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mb-5 rounded-none border border-slate-800 group-hover:border-blue-500/40">
                    {type.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {type.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FULL SIZE BANNER 2: MANAGE SMARTER, GROW FASTER                        */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.crmSolFullSize2}
            alt="Manage smarter, grow faster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 bg-blue-950/80 text-blue-400 border border-blue-500/30 rounded-none inline-block font-bold">
            EXPONENTIAL SCALING
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Manage smarter, grow faster
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Enhance performance with CRM & management software tailored to work processes in the contemporary era. Since Capyngen is a Custom CRM software development company, it guarantees excellent efficiency due to integration, automation, and analytics.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Start Managing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HOW TO CHOOSE THE BEST CRM MANAGEMENT SOLUTION (6 STEPS)               */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              BUYER'S GUIDE
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How to Choose the Best CRM Management Solution for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 p-6 flex flex-col justify-between rounded-none shadow-sm hover:border-blue-500 transition-colors duration-150"
              >
                <div>
                  <div className="relative h-48 overflow-hidden mb-5 bg-slate-200 border border-slate-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug"
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
      {/* 10. FUTURE TRENDS & WHY CHOOSE COMBINED SECTION                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Future Trends */}
          <div className="bg-[#0b162c] border border-slate-800 p-8 sm:p-10 rounded-none space-y-6 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-bold">
              NEXT-GEN HORIZONS
            </span>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Future Trends in CRM Management Solutions
            </h3>
            <div className="overflow-hidden border border-slate-800 mb-4 rounded-none">
              <img
                src={assets.crm16}
                alt="Future Trends in CRM Management Solutions"
                className="w-full h-48 object-cover rounded-none"
              />
            </div>
            <ul className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">AI and Machine Learning Integration:</strong> Intelligent CRM
                  software development will anticipate trends and customise the
                  customer experience.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Mobile CRM Preference:</strong> On-the-go Services Cloud-based
                  applications of major CRM software development services enable
                  mobile access.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Predictive Analytics:</strong> CRM software development company
                  tools predict customer preference and stimulate customer
                  engagement.
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Why Choose Our CRM Management Solutions */}
          <div className="bg-[#0b162c] border border-slate-800 p-8 sm:p-10 rounded-none space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-bold">
                CORE DIFFERENTIATORS
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Why Choose Our CRM Management Solutions?
              </h3>
              <ul className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Unique Features & Benefits:</strong> The CRM software development
                    services offered by Capyngen will be scalable and well-automated
                    to optimise each customer touch point.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Security & Compliance:</strong> The CRM software development company
                    that we have introduced applies encryption and GDPR-compliant
                    attributes to protect the information of its users.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Customer Success Stories:</strong> Capyngen is also among the Best CRM
                    software in world in the category of the best results that have
                    been delivered across industries, especially for clients seeking
                    the{" "}
                    <Link
                      to="/devops-solutions"
                      className="text-blue-400 font-semibold underline hover:text-blue-300"
                    >
                      best DevOps agency in Gurgaon
                    </Link>{" "}
                    level of reliability and performance in their CRM stack.
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-colors duration-150 shadow-xl rounded-none"
              >
                Request Custom CRM Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TECH STACK SHOWCASE                                                   */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200">
        <TechStack
          heading="CRM Technologies, Databases & Connectors"
          subheading="Accelerating development with industry-proven tools and scalable infrastructure."
          theme="light"
        />
      </div>

      {/* ========================================================================= */}
      {/* 12. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Got questions regarding CRM implementation, customization, pricing, or migration? Find your answers here."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 13. BOTTOM FINAL CTA BANNER (Below FAQs)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 block font-bold">
              START YOUR JOURNEY
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Partner with Capyngen to implement scalable, custom CRM and management software that accelerates sales, boosts customer retention, and powers enterprise growth.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrmManagementSoftware;
