import {
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaProjectDiagram,
  FaRobot,
  FaCloud,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import Banner11 from "../components/Banner11";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/high-tech#webpage",
  url: "https://www.capyngen.com/industries/high-tech",
  name: "IT Solutions for High-Tech Industry | Cloud & AI Services – Capyngen",
  description:
    "Empower innovation with Capyngen’s IT solutions for the high-tech industry. From Gen AI and cloud platforms to cybersecurity and software solutions — we deliver results.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
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
      width: 250,
      height: 80,
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/highTech7-BwFiz86O.png",
    width: 1200,
    height: 800,
    caption: "High-Tech Industry IT Solutions by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Industries",
        item: "https://www.capyngen.com/industries",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "High-Tech",
        item: "https://www.capyngen.com/industries/high-tech",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "High-Tech Industry Digital Transformation Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/images/logo.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://x.com/capyngen",
    ],
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  url: "https://www.capyngen.com/industries/high-tech",
  description:
    "Capyngen empowers high-tech companies with cutting-edge digital marketing, data analytics, web design, and automation solutions to accelerate innovation and business growth.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "High-Tech Industry Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "High-Tech Website Development",
          description:
            "Custom, responsive, and high-performance websites designed for tech companies to showcase innovation and expertise.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing for Tech Brands",
          description:
            "Comprehensive marketing campaigns including PPC, SEO, and content strategies for high-tech businesses.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Analytics & AI Solutions",
          description:
            "Data-driven insights and AI-powered analytics to optimize decision-making and improve operational performance.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design for Tech Platforms",
          description:
            "Intuitive and modern UI/UX design tailored for SaaS platforms, apps, and enterprise software.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/highTech7-BwFiz86O.png",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/industries/high-tech#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are IT solutions for the high-tech industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Such solutions are products and services based on specific needs, consisting of software, AI, cloud, and cybersecurity. These four pillars of technical progress—AI, cloud, cybersecurity, and software—help companies increase productivity, scalability, and innovation.",
      },
    },
    {
      "@type": "Question",
      name: "How can Gen AI solutions for high-tech improve operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gen AI improves operations by automating repetitive tasks, accelerating research through faster data processing, and enhancing design and testing processes via intelligent automation—making operations more efficient and innovative.",
      },
    },
    {
      "@type": "Question",
      name: "What is the role of cloud platforms for high-tech companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloud platforms enable scalability, efficiency, and digital transformation. They help teams collaborate seamlessly and deploy digital systems globally while reducing infrastructure costs and complexity.",
      },
    },
    {
      "@type": "Question",
      name: "How important is cybersecurity for high-tech businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cybersecurity is crucial for protecting sensitive intellectual property, proprietary code, and customer data from cyber threats, breaches, and data leaks.",
      },
    },
    {
      "@type": "Question",
      name: "What type of software solutions do you develop for high-tech companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen develops enterprise-grade software, IoT systems, data analytics platforms, and AI tools designed to improve productivity and growth for companies in the high-tech sector.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support digital transformation for established tech enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen helps replace legacy systems, migrate operations to the cloud, and empower enterprises with AI and automation tools to accelerate digital transformation.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen handle large-scale cloud migrations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Capyngen has extensive experience implementing hybrid and multi-cloud infrastructures for high-tech enterprises, ensuring smooth, scalable migration processes.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Capyngen’s cybersecurity approach unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our approach is based on a zero-trust architecture that limits user access, combined with an encryption-first model and real-time threat tracking—providing maximum protection against attacks and data leaks.",
      },
    },
    {
      "@type": "Question",
      name: "How do Gen AI and analytics contribute to R&D in high-tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gen AI and analytics shorten R&D cycles, improve quality, and enable innovation by generating new product ideas based on historical and live data insights.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen offer support after project completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen provides post-project maintenance, monitoring, and upgrades to ensure your software and cloud systems remain secure, scalable, and optimized.",
      },
    },
  ],
};

const HighTech = () => {
  const faqItems = [
    {
      question: "What are IT solutions for the high-tech industry?",
      answer:
        "Such solutions are products and services based on particular needs consisting of software, AI, cloud, and cybersecurity. Solutions based on technology take from four pillars of technical progress: AI, cloud, cybersecurity, and software. This can help companies increase productivity, scalability, and novelty.",
    },
    {
      question: "How can Gen AI solutions for high-tech improve operations?",
      answer:
        "Essentially by letting the AI-driven system handle all the mundane tasks. But that isn’t all — research is getting faster because of the data-processing power and real-world simulations. In addition, through intelligent automation, design and testing have become faster and more efficient.",
    },
    {
      question: "What is the role of cloud platforms for high-tech companies?",
      answer:
        "The cloud can solve major operational challenges and enable digital transformation. It offers scalability, agility, and efficiency, helping teams work seamlessly while deploying digital systems globally.",
    },
    {
      question: "How important is cybersecurity for high-tech businesses?",
      answer:
        "It is extremely important. Cybersecurity ensures the protection of sensitive intellectual property, proprietary code, and customer data from cyber threats and data breaches.",
    },
    {
      question:
        "What type of software solutions do you develop for high-tech companies?",
      answer:
        "We build enterprise-grade applications, IoT systems, data analytics platforms, and AI tools — all designed to enhance productivity, innovation, and growth for companies in the high-tech sector.",
    },
    {
      question:
        "Do you support digital transformation for established tech enterprises?",
      answer:
        "Yes. We modernize legacy systems, migrate operations to the cloud, and empower enterprises with AI and automation to drive efficiency and innovation.",
    },
    {
      question: "Can Capyngen handle large-scale cloud migrations?",
      answer:
        "Absolutely. We have extensive experience implementing hybrid and multi-cloud infrastructures for high-tech enterprises with seamless scalability and uptime.",
    },
    {
      question: "What makes Capyngen’s cybersecurity approach unique?",
      answer:
        "Our zero-trust framework grants minimal access to users while our encryption-first approach secures all data. Combined with real-time threat tracking, this ensures maximum protection against potential cyber risks.",
    },
    {
      question: "How do Gen AI and analytics contribute to R&D in high-tech?",
      answer:
        "They accelerate R&D timelines, enhance quality, and generate innovative product ideas by leveraging both historical and live data for predictive insights.",
    },
    {
      question: "Does Capyngen offer support after project completion?",
      answer:
        "Yes. We provide ongoing maintenance, performance monitoring, and system upgrades to keep your software and cloud infrastructure secure, efficient, and scalable.",
    },
  ];
  const servicesData = [
    {
      image: assets.highTech13,
      title: "Operational Agility",
      desc: "Experience rapid execution and increased efficiency through the implementation of advanced digital transformation technologies.",
    },
    {
      image: assets.highTech14,
      title: "Enhanced Security",
      desc: "Protect your company’s valuable resources and data with our enterprise-grade cybersecurity solutions built for high-tech infrastructures.",
    },
    {
      image: assets.highTech15,
      title: "Data-Driven Decision-Making",
      desc: "Leverage analytics and automation to make real-time, informed decisions across R&D, manufacturing, and customer engagement processes.",
    },
    {
      image: assets.highTech16,
      title: "Reduced Costs with Cloud Efficiency",
      desc: "Migrate to our high-value cloud platforms to lower infrastructure costs while improving performance, uptime, and operational reliability.",
    },
    {
      image: assets.highTech17,
      title: "Innovation Through Gen AI",
      desc: "Utilize AI models for data generation, predictive simulation, and prototype testing—empowering teams to innovate faster and smarter.",
    },
    {
      image: assets.highTech18,
      title: "Sustainable Scalability",
      desc: "Deploy adaptive IT systems that scale automatically with your business growth, user base expansion, and future innovations.",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.highTech22,
      title: "Electronics & Semiconductor Manufacturing",
      desc: "Use AI-driven insights to predict defects, optimize yield, and enhance the overall semiconductor manufacturing process.",
    },
    {
      image: assets.highTech23,
      title: "Telecommunication Providers",
      desc: "Adopt cloud-based platforms to boost service delivery speed, scalability, and customer experience for telecom operations.",
    },
    {
      image: assets.highTech19,
      title: "AI & Robotics Firms",
      desc: "Empower AI and robotics innovations with advanced ML frameworks and automation tools for greater accuracy and flexibility.",
    },
    {
      image: assets.highTech20,
      title: "Aerospace & Defense Tech",
      desc: "Build and maintain secure, compliant digital systems adhering to the highest cybersecurity and operational standards.",
    },
    {
      image: assets.highTech21,
      title: "Consumer Technology Companies",
      desc: "Transform the customer journey—from product design to after-sales support—through seamless digital transformation solutions.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Create AI systems that process vast data sets, automate decision-making, and deliver predictive insights using Gen AI technologies tailored for high-tech industries.",
      image: assets.highTech1,
      cardBg: "bg-blue-100",
    },
    {
      title: "Cloud Engineering & Modernization",
      description:
        "Transform your digital infrastructure with our cloud platforms for high-tech enterprises — ensuring agility, scalability, and effortless deployment.",
      image: assets.highTech2,
      cardBg: "bg-green-100",
    },
    {
      title: "Cybersecurity & Compliance Systems",
      description: (
        <span>
          Rely on enterprise-grade{" "}
          <Link to={"/cybersecurity"}>cybersecurity</Link> built with robust
          encryption, real-time threat detection, and compliance audits to
          safeguard R&D and intellectual property data.
        </span>
      ),
      image: assets.highTech3,
      cardBg: "bg-purple-100",
    },
    {
      title: "IoT & Edge Computing",
      description:
        "Enhance operational efficiency, predictive maintenance, and innovation by enabling real-time connectivity across devices and systems.",
      image: assets.highTech4,
      cardBg: "bg-pink-100",
    },
    {
      title: "Software Solutions for High-Tech",
      description:
        "Develop state-of-the-art, custom software that simplifies workflows, boosts development productivity, and reduces time-to-market for your products.",
      image: assets.highTech5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Data Analytics & Intelligence Platforms",
      description:
        "Turn raw data into strategic insights with AI-powered dashboards, big data mining, and real-time visualization tools for informed decision-making.",
      image: assets.highTech6,
      cardBg: "bg-orange-100",
    },
  ];
  const marketingCards = [
    {
      img: assets.highTech7,
      alt: "Driving the Digital Revolution.",
      text: "Driving the Digital Revolution.",
    },
    {
      img: assets.highTech8,
      alt: "Business Changing Technology.",
      text: "Business Changing Technology.",
    },
    {
      img: assets.highTech9,
      alt: "Innovate Without Limits",
      text: "Innovate Without Limits",
    },
    {
      img: assets.highTech10,
      alt: "Growth is meant to be accelerated using smart tech solutions.",
      text: "Growth is meant to be accelerated using smart tech solutions.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Domain-Specific Expert",
      description:
        "We fully realize the problems that are associated with high-tech firms. Among them are the accelerated innovation pace, multifaceted data environment, and high security requirements. Our high tech IT solutions ensure they are in line with the pace and accuracy of your operations.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Security-First Approach",
      description:
        "Our IT solutions for high-tech industry in India deliver the best cybersecurity against systems, data, and intellectual property as cyber threats keep changing. We provide the next-gen encryption, zero-trust architecture, and adherence to such standards as the ISO 27001 and GDPR.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Scalable Cloud Platforms",
      description:
        "The high-tech businesses implemented with the help of our cloud platforms are guaranteed with integration, scalability, and collaboration in real-time. Hybrid or multi-cloud, Capyngen provides a reliable and performance service hence becoming one of the best IT services for high-tech industry.",
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Smart Innovation using Gen AI",
      description:
        "Our Gen AI products allow increasing the automation of workflows, proactive analysis, and design-to-production processes and changing the way technological businesses innovate and develop products.",
      icon: <FaRobot className="text-4xl" />,
    },
    {
      title: "End-to-End Integration",
      description:
        "Capyngen guarantees smooth transition between the old systems and the new applications. Our adaptable architecture approach provides future-proof and unified digital ecosystem.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Proven Track Record",
      description:
        "Capyngen has been providing high tech IT solutions, which are faster, secure and efficient to both startups and global technology enterprises.",
      icon: <FaCheckCircle className="text-4xl" />,
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          IT Solutions for High-Tech Industry | Cloud & AI Services – Capyngen
        </title>
        <meta
          name="description"
          content="Empower innovation with Capyngen’s IT solutions for the high-tech industry. From Gen AI and cloud platforms to cybersecurity and software solutions — we deliver results."
        />
        <meta
          name="keywords"
          content="IT Solutions for High-Tech Industry | Cloud & AI Services – Capyngen"
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
        heading=" Driving the High-Tech Industry"
        highlight="Intelligent IT Solutions"
        description="By making technologies, software, and products simple, secure, and adaptable to suit the needs of varying markets, we not only give the future to the high-tech industry but also help our businesses evolve and prosper. Capyngen offers high tech IT solutions that enable organisations to remain digital."
        cards={marketingCards}
      />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / HIGH-TECH (SPLIT LIGHT SECTION)                             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.highTech12}
                alt="High-Tech Digital Solutions"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Shaping the High-Tech Industry with Next-Gen Engineering
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Automation, cloud computing, Internet of Things (IoT), and Artificial Intelligence are fundamentally redefining high-tech product velocity. Organizations must not only keep pace, but lead with intelligent, secure, and resilient digital backbones.
              </p>
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> provides data-driven engineering excellence to both ambitious tech startups and global technology enterprises across semiconductors, telecommunications, robotics, and SaaS platforms.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Zero-trust cybersecurity architectures safeguarding valuable intellectual property.",
                "High-performance cloud platforms and edge computing telemetry.",
                "Generative AI integration accelerating engineering design-to-production cycles.",
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
                Schedule High-Tech Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY GLOBAL TECH LEADERS TRUST CAPYNGEN (DARK CARDS GRID)              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Global Technology Leaders Trust Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Domain expertise, zero-trust cybersecurity, multi-cloud scalability, and practical Gen AI integration.
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
      {/* 4. HIGH-TECH SOFTWARE DEVELOPMENT (LIGHT CARDS)                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              High-Tech Software Development Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Transforming raw ideas into production-ready platforms using modern engineering standards.
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
                  <div className="text-slate-600 text-sm leading-relaxed mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EMPOWERING HIGH-TECH THROUGH DIGITAL TRANSFORMATION (6 DARK CARDS)     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Digital Transformation Outcomes
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Delivering quantifiable velocity, cost efficiency, and unyielding intellectual property protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
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
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. INDUSTRIES WE EMPOWER IN HIGH-TECH (LIGHT CARDS)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Empower in the High-Tech Ecosystem
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Specialized domain engineering serving every segment of advanced electronics, telecom, and robotics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionSliderData1.map((item, idx) => (
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
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
              Ready to Lead the Future of High-Tech Innovation?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Empower your enterprise with scalable cloud platforms, Gen AI automation, and zero-trust security engineered for high-tech competitiveness.
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

export default HighTech;
