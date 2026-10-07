import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  LineChart,
  PieChart,
  Database,
  Cpu,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import TechnologiesCarousel from "../components/TechnologiesCarousel";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/data-analytics-services#webpage",
  url: "https://www.capyngen.com/data-analytics-services",
  name: "Data & Analytics | Best Data Analytics Company in India – Capyngen",
  description:
    "Turn data into decisions with Capyngen’s data & analytics services. We offer cloud-based analytics solutions to help businesses gain insights and scale faster.",
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
    url: "https://www.capyngen.com/assets/dataAndAnalytics-CujmVm5V.png",
    width: 1200,
    height: 800,
    caption: "Data & Analytics Solutions by Capyngen",
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
        name: "Data & Analytics",
        item: "https://www.capyngen.com/data-analytics-services",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Data Analytics Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://x.com/capyngen",
    ],
  },
  url: "https://www.capyngen.com/data-analytics-services",
  description:
    "Capyngen provides advanced data analytics services to help businesses make data-driven decisions, optimize performance, and enhance digital marketing ROI through actionable insights.",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Data Analytics Solutions",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Analytics",
          description:
            "Analyze campaign performance and customer behavior to optimize digital marketing strategies for better ROI.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Intelligence (BI)",
          description:
            "Transform raw data into actionable dashboards and visual insights to support strategic decision-making.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predictive Analytics",
          description:
            "Use machine learning and AI models to forecast trends, customer behavior, and business outcomes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Visualization",
          description:
            "Create clear, interactive dashboards and reports for real-time business intelligence tracking.",
        },
      },
    ],
  },
  image:
    "https://www.capyngen.com/assets/images/services/data-analytics-services-banner.jpg",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/data-analytics-services#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are data analytics services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data analytics services refer to the collection, processing, analysis, and visualization of business data for the purpose of extracting actionable insights. The range of services may include business intelligence, predictive analytics, data modeling, and strategic consulting.",
      },
    },
    {
      "@type": "Question",
      name: "Why should businesses invest in data analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data analytics helps uncover customer behavior, streamline operations, identify new opportunities, reduce costs, predict trends, and gain a competitive advantage—making businesses more profitable and efficient.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Capyngen the best data analytics company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines technical expertise, industry experience, and advanced technologies to deliver end-to-end analytics solutions. With a proven record of success, tailored engagements, and dedicated support, we are among the top data analytics service providers in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between business intelligence and data analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business intelligence focuses on descriptive analytics through dashboards and reports, while data analytics encompasses all stages of data processing, including predictive modeling and machine learning for deeper insights.",
      },
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple BI dashboards typically take 4–6 weeks, while comprehensive analytics platforms may require 3–6 months. Timelines are refined during the discovery phase based on project scope and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What are cloud data analytics services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cloud data analytics services use cloud platforms such as AWS, Azure, and Google Cloud for scalable, cost-efficient, and accessible data storage, processing, and analysis without the need for heavy infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "How much do data analytics services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on project scope, data volume, complexity, and technologies used. Capyngen offers flexible pricing models including project-based, subscription, and managed service options. Contact us for a custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "Can analytics work with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our data integration solutions work with nearly all systems—legacy databases, cloud applications, ERP, CRM, IoT, or API-based platforms—ensuring seamless compatibility.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure data security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement enterprise-grade security with encryption, strict access controls, audit trails, and compliance with major standards including GDPR, HIPAA, and SOC 2.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Capyngen serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen delivers customized data analytics solutions for industries such as banking and finance, healthcare, retail, manufacturing, IT, professional services, education, and hospitality.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer comprehensive training on tools, dashboards, data analysis, and best practices, tailored to user roles and business needs.",
      },
    },
    {
      "@type": "Question",
      name: "What is predictive analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Predictive analytics uses historical data and machine learning to forecast future outcomes like sales demand, customer churn, risks, and trends—empowering proactive decision-making.",
      },
    },
    {
      "@type": "Question",
      name: "Can small businesses benefit from analytics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Capyngen provides scalable and cost-effective analytics solutions designed for small and medium-sized businesses to harness the power of data-driven insights.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We define KPIs aligned with business objectives such as ROI, cost savings, revenue growth, productivity improvement, prediction accuracy, and user adoption rates.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between data analytics and data science?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data analytics focuses on analyzing existing data to answer business questions, while data science involves advanced modeling, algorithm design, and machine learning. Capyngen provides both analytics and data science services.",
      },
    },
  ],
};

const DataAnalytics = () => {
  const faqItems = [
    {
      question: "What are data analytics services?",
      answer:
        "Data analytics services refer to the collection, processing, analysis, and visualization of business data for the purpose of extracting actionable insights. The range of services may include business intelligence, predictive analytics, data modeling, and strategic consulting.",
    },
    {
      question: "Why should businesses invest in data analytics?",
      answer:
        "Data analytics is a means to uncover how customers behave, streamline processes, identify new opportunities, lower expenses, predict trends, and obtain a competitive edge all which lead to a company becoming more profitable and efficient.",
    },
    {
      question: "What makes Capyngen the best data analytics company in India?",
      answer:
        "Leveraging technology and expertise, Capyngen has the edge of technical skill, industry experience and the use of the latest technology, with a track record of success with enterprise clients, tailored customer engagements, end-to-end services, and committed support as one of the top providers of data analytics solutions.",
    },
    {
      question:
        "What is the difference between business intelligence and data analytics?",
      answer:
        "Business intelligence mainly relies on descriptive analytics, that is, the presentation of data through reports and dashboards. Data analytics refers to all kinds of analytics depending on the stage of the data journey from collection to the use of AI and machine learning.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "We usually say 4-6 weeks for the completion of Simple BI dashboards whereas a comprehensive analytics platform of 3-6 months is required. We tailor a more precise schedule according to the project during the discovery phase.",
    },
    {
      question: "What are cloud data analytics services?",
      answer:
        "Cloud data analytics services mean they make use of different cloud platforms (AWS, Azure, Google Cloud) for storage, data processing, and analysis that are simply scalable, cost-efficient, and have high accessibility without any major infrastructure investment upfront.",
    },
    {
      question: "How much do data analytics services cost?",
      answer:
        "The cost will be determined depending upon the scope, the volume of data, how complex it is, and the technology used. We have many pricing options to choose from to best suit our clients which include project-based, subscriptions, and managed services. Get in touch with us for tailored quotes.",
    },
    {
      question: "Can analytics work with existing systems?",
      answer:
        "Definitely! Our solutions for data integration permit access to nearly every source, be it abandoned databases, cloud software, ERP, CRM, IoT, or API interface.",
    },
    {
      question: "How do you ensure data security?",
      answer:
        "Our enterprise-grade security system is complete with encryption, rigorous access control, detailed audit trails, and compliance with different security and privacy regulations, such as GDPR, HIPAA, and SOC 2.",
    },
    {
      question: "What industries does Capyngen serve?",
      answer:
        "With demographic-specific modifications, we deliver that solution to the banking and finance industry, healthcare, retail, industrial sectors, IT, professional services, and education as well as hotels and restaurants.",
    },
    {
      question: "Do you provide training?",
      answer:
        "Of course! Tool-specific training, dashboard use, data analysis and interpretation, and industry best systems customized for every user role.",
    },
    {
      question: "What is predictive analytics?",
      answer:
        "Through the use of historical data as well as machine learning, predictive analytics aims to foresee the most likely scenarios in the future such as sales demand, customer churn, risks, and trends, thus empowering decision-making to be proactive.",
    },
    {
      question: "Can small businesses benefit from analytics?",
      answer:
        "For sure! We are tailoring and scaling flexible custom data analytics services for all business sizes and database our engagement with growing clientele on essentials of BI.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We set KPIs that are congruent with business imperatives like ROI, cost-cutting, revenue increase, productivity enhancement, prediction precision, and user onboarding rates.",
    },
    {
      question:
        "What's the difference between data analytics and data science?",
      answer:
        "Data analytics focuses on existing data to find answers to business questions. Data science is broader and includes advanced modeling, machine learning, and algorithm development. Capyngen provides both.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Data Strategy & Consulting",
      description:
        "Define an actionable analytics roadmap aligning data collection, pipeline architecture, and enterprise KPIs with executive business targets.",
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Business Intelligence (BI) & Reporting",
      description:
        "On-demand real-time data visualization along with KPI monitoring enables instant operational visibility through interactive custom dashboards.",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Advanced Analytics & Data Modeling",
      description:
        "Deploy advanced machine learning algorithms and statistical models as predictive tools for highly accurate trend and revenue forecasting.",
      icon: <LineChart className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Big Data & Cloud Analytics",
      description:
        "High-performance cloud data warehouses (AWS Redshift, Snowflake, BigQuery, Azure Synapse) processing billions of records with sub-second latency.",
      icon: <Database className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Data Integration & ETL Management",
      description:
        "Unify disparate operational sources—CRMs, ERPs, transactional databases, and APIs—into a single synchronized source of truth.",
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Data Security & Governance",
      description:
        "Enterprise-grade protection with end-to-end encryption, automated audit logs, and adherence to GDPR, HIPAA, and SOC 2 frameworks.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Top Data Analytics Firm of India",
      description:
        "A proven track record delivering transformative enterprise analytics solutions that drive measurable ROI for global corporations.",
      image: assets.dataAndAnalytics2,
    },
    {
      title: "State-of-the-Art Technology",
      description:
        "We harness cutting-edge AI-driven analytics, automated ML pipelines, and real-time visualization frameworks to deliver strategic intelligence.",
      image: assets.dataAndAnalytics3,
    },
    {
      title: "Personalized Solutions",
      description:
        "Bespoke analytics suites custom-built to match your unique data schemas, commercial model, margins, and growth objectives.",
      image: assets.dataAndAnalytics4,
    },
    {
      title: "Cloud Analytics Mastery",
      description:
        "Certified cloud engineers orchestrating scalable data lakes and analytics platforms across AWS, Azure, and Google Cloud.",
      image: assets.dataAndAnalytics5,
    },
    {
      title: "Deep Domain Knowledge",
      description:
        "Specialized data architects with extensive industry experience across Banking, Healthcare, Retail, Manufacturing, and Tech.",
      image: assets.dataAndAnalytics6,
    },
    {
      title: "24/7 Ongoing Assistance",
      description:
        "Continuous support, dashboard maintenance, periodic retraining of predictive models, and proactive optimization around the clock.",
      image: assets.dataAndAnalytics7,
    },
  ];

  const industriesData = [
    {
      title: "Retail & E-Commerce",
      desc: "Customer cohort analytics, dynamic pricing models, cart abandonment optimization, and predictive inventory demand forecasting.",
      image: assets.eComm,
    },
    {
      title: "Healthcare",
      desc: "Patient outcome prediction, clinical workflow efficiency, hospital resource allocation, and HIPAA-compliant healthcare data lakes.",
      image: assets.healthcare,
    },
    {
      title: "Finance & Banking",
      desc: "Real-time payment fraud detection, algorithmic risk modeling, customer credit scoring, and automated regulatory reporting.",
      image: assets.banking,
    },
    {
      title: "Education",
      desc: "Student learning trajectory analytics, course retention metrics, dynamic enrollment forecasting, and institutional resource planning.",
      image: assets.education,
    },
    {
      title: "Manufacturing",
      desc: "IoT equipment telemetry, predictive maintenance, end-to-end supply chain visibility, and quality assurance anomaly detection.",
      image: assets.manufacturing,
    },
  ];

  const steps = [
    {
      title: "Discovery & Assessment",
      description:
        "Exploration of your existing data landscape, schema structures, business KPIs, and analytics maturity in comprehensive detail.",
    },
    {
      title: "Data Collection & ETL Integration",
      description:
        "Aggregating distributed data from cloud apps, legacy SQL, and APIs into automated, clean, and reliable data pipelines.",
    },
    {
      title: "Analysis, Modeling & Visualization",
      description:
        "Engineering predictive ML models and deploying interactive Power BI, Tableau, or custom React executive dashboards.",
    },
  ];

  const technologies = [
    { name: "JavaScript", logo: assets.js },
    { name: "Python", logo: assets.python },
    { name: "CSS3", logo: assets.css3 },
    { name: "C++", logo: assets.cplusplus },
    { name: "PHP", logo: assets.php },
    { name: "React", logo: assets.react },
    { name: "Vue.js", logo: assets.vuejs },
    { name: "AngularJS", logo: assets.angular },
    { name: "JQuery", logo: assets.jquery },
    { name: "Next.js", logo: assets.nextjs },
    { name: "MongoDB", logo: assets.mongodb },
    { name: "MySQL", logo: assets.mysql },
    { name: "PostgreSQL", logo: assets.postgresql },
    { name: "Node.js", logo: assets.nodejs },
    { name: "Laravel", logo: assets.laravel },
    { name: "Express.js", logo: assets.expressjs },
    { name: "Azure", logo: assets.azure },
    { name: "AWS", logo: assets.aws },
    { name: "Google Cloud", logo: assets.googlecloud },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      <Helmet>
        <title>
          Data Analytics Services – Best Data Analytics Company in India
        </title>
        <meta
          name="description"
          content="Professional data analytics services in India. We provide actionable insights, dashboards, and reporting to help businesses make data-driven decisions."
        />
        <meta
          name="keywords"
          content="data analytics services, data analytics company India, business data analytics, data reporting services, best data analytics company, data analytics services gurgaon"
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
      {/* 1. HERO SECTION (ORIGINAL BANNER5 DESIGN AS REQUESTED)                   */}
      {/* ========================================================================= */}
      <section
        className="pt-28 lg:pt-36 flex items-center py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-12 border-b border-slate-800"
        aria-label="Data Analytics Services Banner"
      >
        <div className="w-full max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <h1
                className="mb-6 font-extrabold leading-tight tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl block text-white mb-3">
                  Best Data Analytics Services in India
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl block text-cyan-400 font-extrabold leading-tight">
                  Delivering Actionable Insights, Dashboards, and Reporting for Businesses
                </span>
              </h1>

              <p className="max-w-2xl mb-8 text-base sm:text-lg lg:text-xl font-light text-gray-300 leading-relaxed">
                Drive your enterprise with Capyngen’s data-driven approaches and analytic services that allow you to discover, automate, and lead the business to the growth that lasts.
              </p>

              <div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded-none bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg gap-2"
                >
                  Get started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <img
                src={assets.dataAndAnalytics}
                alt="Best Data Analytics Services in India"
                className="w-full max-w-[540px] h-auto rounded-md object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW & BUSINESS VALUE (SPLIT LIGHT SECTION)                        */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[520px]">
              <img
                src={assets.dataAndAnalytics1}
                alt="Business Intelligence and Analytics Architecture"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Data & Analytics Are Necessary for Modern Businesses
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                In today's digital economy, data is the foundation of competitive leadership. Capyngen helps enterprises unlock the real value of their records by simplifying complex information pipelines and transforming them into crystal-clear executive reports.
              </p>
              <p>
                From foundational data modeling to multi-cloud data warehousing and AI-powered forecasting, we enable leaders to anticipate market trends earlier and allocate capital with total statistical confidence.
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Interactive BI Dashboards</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Predictive Forecasting ML</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Automated Cross-System ETL</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Enterprise Data Governance</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-none transition-colors duration-150 shadow-md group text-base"
              >
                Schedule Analytics Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FULL SIZE BANNER 1: TURN DATA INTO BUSINESS INSIGHTS                   */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.dataAnalyticsFullSize}
            alt="Turn data into business insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Turn data into business insights
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            With the support of our analytics architectures, we empower your company to make decisions backed by hard empirical evidence and real-time operational feedback.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              View Insights
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPREHENSIVE DATA & ANALYTICS SOLUTIONS (6 Cards - White BG)          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Comprehensive Data & Analytics Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We architect end-to-end data systems that extract, transform, model, and display your business information with crystal clarity.
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
      {/* 5. WHY BUSINESSES TRUST CAPYNGEN (6 Cards with Images)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Businesses Trust Capyngen
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              We blend engineering rigor, modern BI tooling, and cross-industry experience to deliver dependable analytics solutions.
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
      {/* 6. FULL SIZE BANNER 2: DISCOVER OPPORTUNITIES                             */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.dataAnalyticsFullSize2}
            alt="Discover opportunities hidden in your data"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-slate-900 space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Discover opportunities hidden in your data
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Transform hidden operational patterns into actionable strategic leverage with Capyngen's business intelligence and data science solutions.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. OUR PROCESS (3 Step Cards)                                             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Data & Analytics Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A disciplined, three-step execution framework ensuring data hygiene, model integrity, and seamless reporting.
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
      {/* 8. INDUSTRIES WE SERVE (5 Industry Cards)                                 */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Targeted data science implementations built specifically around vertical data formats, regulatory compliance, and commercial models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-600 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-sm relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-44 mb-6 bg-slate-100 p-2 flex items-center justify-center rounded-none overflow-hidden border border-slate-200">
                    <img
                      src={item.image}
                      alt={typeof item.title === 'string' ? item.title : 'Industry'}
                      className="max-h-full max-w-full object-cover"
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
      {/* 9. TECHNOLOGIES CAROUSEL                                                  */}
      {/* ========================================================================= */}
      <TechnologiesCarousel
        title="Data Analytics Technologies We Use"
        description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
        technologies={technologies}
      />

      {/* ========================================================================= */}
      {/* 10. GET STARTED / CONSULTATION BANNER                                     */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white text-slate-900 border-b border-slate-200 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Become Brilliant with Data Analytics
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Your data is the gateway to smarter business decisions. Connect with Capyngen's analytics experts today for a comprehensive, obligation-free consultation.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FREQUENTLY ASKED QUESTIONS                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} bgColor="bg-[#070e1d]" />
    </div>
  );
};

export default DataAnalytics;
