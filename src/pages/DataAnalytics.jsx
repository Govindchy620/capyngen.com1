import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import OurServices from "../components/OurServices";
import HowWeWork from "../components/HowWeWork";
import WhyChoose from "../components/WhyChoose";
import TechnologiesCarousel from "../components/TechnologiesCarousel";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import BenefitsSection from "../components/BenefitsSection";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import TopRatedCompany from "../components/TopRatedCompany";
import { LifeBuoy, Sparkles } from "lucide-react";
import Banner5 from "../components/Banner5";
import CardsSection from "../components/CardsSection";
import { FaTachometerAlt, FaUsersCog, FaChartPie } from "react-icons/fa";
import CardsSectionSlider from "../components/CardsSectionSlider";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/data-analytics#webpage",
  url: "https://www.capyngen.com/data-analytics",
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
        item: "https://www.capyngen.com/data-analytics",
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
      "https://twitter.com/capyngen",
    ],
  },
  url: "https://www.capyngen.com/data-analytics",
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
    "https://www.capyngen.com/assets/images/services/data-analytics-banner.jpg",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/data-analytics#faq",
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
        "Of course! Tool-specific training, dashboard use, data analysis and interpretation, and industry best systems customized for every user role.Of course! Tool-specific training, dashboard use, data analysis and interpretation, and industry best systems customized for every user role.",
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
        "Visualization of data is the core of the strategic backbone of company goals planning and implementing the analytics base for successful use in the company.",
      icon: <FaTachometerAlt className="text-4xl" />,
    },
    {
      title: "Business Intelligence (BI) & Reporting",
      description:
        "On-demand real-time data visualization along with KPI monitoring enables instant insight through interactive custom dashboards.",
      icon: <FaUsersCog className="text-4xl" />,
    },
    {
      title: "Advanced Analytics & Data Modeling",
      description:
        "The challenge is to implement the use of machine learning algorithms as a predictive tool for most accurate trend and outcome setting in the future.",
      icon: <FaChartPie className="text-4xl" />,
    },
    {
      title: "Big Data & Cloud Analytics",
      description:
        "Big data services that are scalable on AWS, Azure, or Google Cloud can support large datasets without running into inefficiency.",
      icon: <FaTachometerAlt className="text-4xl" />,
    },
    {
      title: "Data Integration & Management",
      description:
        "Different data sources are being integrated seamlessly to provide a single source of truth for data analysis.",
      icon: <FaUsersCog className="text-4xl" />,
    },
    {
      title: "Data Security & Governance",
      description:
        "Enterprise security that covers encryption, access control, and conforms to standards like GDPR and HIPAA, etc. ",
      icon: <FaChartPie className="text-4xl" />,
    },
  ];

  const cardsSectionSliderData1 = [
    {
      title: "Retail & E-Commerce",
      desc: "The industries that might get the best benefits from data science technologies are customer behavior analytics, demand forecasting, and enterprise analytics for retail operations.",
      image: assets.eComm,
      textColor: "text-white",
    },
    {
      title: "Healthcare",
      desc: "Patient outcome prediction, operational efficiency, healthcare compliance through data analytics are the areas where machine learning can be applied.",
      image: assets.healthcare,
      textColor: "text-white",
    },
    {
      title: "Finance & Banking",
      desc: (
        <span>
          <Link to={"/banking"}>Banking Financial</Link> risk control, fraud
          detection, and investment advisory.
        </span>
      ),
      image: assets.banking,
      textColor: "text-white",
    },
    {
      title: "Education",
      desc: "Analysis of student engagement and academic output, enrollment monitoring, etc.",
      image: assets.education,
      textColor: "text-white",
    },
    {
      title: "Manufacturing",
      desc: "Complete supply chain visibility, production process streamlining, predictive maintenance.",
      image: assets.manufacturing,
      textColor: "text-white",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Assessment",
      description:
        "Exploration of data landscape, business objectives, and analytics maturity in detail.",
    },
    {
      step: "Step 02",
      title: "Data Collection & Integration",
      description:
        "Getting to the data in all the places where it is stored and establishing strong pipelines.",
    },
    {
      step: "Step 03",
      title: "Analysis & Modeling",
      description:
        "Building logical models with the help of advanced statistics and machine learning methods.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Top Data Analytics Firm of India",
      description:
        "The track record of the delivery of transformative solutions that have a positive impact on the ROI of enterprises worldwide is easily recognizable.",
      image: assets.dataAndAnalytics2,
      cardBg: "bg-blue-100",
    },

    {
      title: "State-of-the-art Technology",
      description:
        "The company uses the very latest technology including AI-driven analytics, machine learning, and automation of insights to achieve the target.",
      image: assets.dataAndAnalytics3,
      cardBg: "bg-green-100",
    },
    {
      title: "Personalized Solutions",
      description:
        "Just the right fit of data analytics services have been created specifically for your industry, business model, and goals.",
      image: assets.dataAndAnalytics4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cloud Mastery",
      description:
        "The top provider of cloud-based business intelligence and analytics services over all major platforms.",
      image: assets.dataAndAnalytics5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Domain Knowledge",
      description:
        "Deep Knowledge of Finance, Healthcare, Retail, Manufacturing, and the Technology sectors.",
      image: assets.dataAndAnalytics6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Assistance Anytime",
      description:
        "Fully committed to consulting, training, and support at any hour of the day or night which therefore guarantees the continuity of success.",
      image: assets.dataAndAnalytics7,
      cardBg: "bg-red-100",
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

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Data & Analytics | Best Data Analytics Company in India – Capyngen
        </title>
        <meta
          name="description"
          content="Turn data into decisions with Capyngen’s data & analytics services. We offer cloud-based analytics solutions to help businesses gain insights and scale faster."
        />
        <meta
          name="keywords"
          content="Data & Analytics | Best Data Analytics Company in India – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="lg:sticky inset-0">
        <Banner5
          title={
            <>
              <span className="text-3xl md:text-4xl ">
                Transform Your Business with Advanced{" "}
              </span>
              <span className="text-cyan-400">Data & Analytics Solutions</span>
            </>
          }
          description="Drive your enterprise with Capyngen’s data-driven approaches and analytic services that allow you to discover, automate, and lead the business to the growth that lasts."
          primaryBtnText="Get started"
          primaryBtnLink="/contact-us"
          image={assets.dataAndAnalytics}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Become Brilliant with Data Analytics"
          buttonText="Get Started"
          description={[
            "Your Data is the Gateway to the Smarter Business Decisions with Capyngen’s Proven Technology & Expert Services!",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Why Data & Analytics Are Necessary for Modern Businesses"
          description={[
            `We are in a market where data is king, and the digital economy era is the one we live in. Capyngen is the player that makes data do work for you by simplifying it and reporting the results in a way that decision-makers find easy to follow. As a data analytics company, we are the ones that take care of all the data-related needs from strategizing to implementing advanced analytics and visualizing the results. Our cloud data analytics efforts lead to companies uncovering more opportunities earlier than competitors, changing operations to utilize resources more efficiently, and finding trends with high accuracy. The question of how much the business is big or how complicated the BI level is, the answer is always Capyngen.`,
          ]}
          image={assets.dataAndAnalytics1}
          isHidden={true}
          imageHeight="aspect-[1/1]"
          background={assets.patternBg1}
        />
        <FullSizeImageSection
          backgroundImage={assets.dataAnalyticsFullSize}
          title="Turn data into business insights"
          description="With the support of powerful analytics solutions, we enable the business to make decisions based on data."
          buttonText="View Insights"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSection
          heading="Comprehensive Data & Analytics Solutions"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gray-800 hover:bg-gray-900 transition-all duration-400 ease-in-out hover:shadow-2xl hover:shadow-gray-700/70 hover:-translate-y-2"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-78"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          buttonText="Get Started"
          textSize="text-2xl"
          description={[
            "Turn off the lights, request a free demo, and discover how Capyngen analytics solutions can transform your business if you really want to harness the power of your data!",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSectionImage
          heading="Why Businesses Trust Capyngen"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />

        <CardsSectionSlider
          heading="Industries We Serve"
          subheading=""
          cardBg="bg-transparent"
          hoverBg=" hover:bg-blue-50"
          textColor="text-gray-800"
          hoverTextColor=""
          textSize="text-xl"
          sectionBg="bg-black/90"
          height="h-78"
          headColor="text-white"
          services={cardsSectionSliderData1}
        />
        <HowWeWork
          heading="Our Data & Analytics Process"
          desc=""
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.dataAnalyticsFullSize2}
          title="Discover opportunities hidden in your data"
          description="We help transform your ideas into powerful digital solutions with our expert web development services."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TechnologiesCarousel
          title="Data Analytics Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          textSize="text-2xl"
          buttonText="Get Started"
          description={[
            <span>
              You just need to make a single click and{" "}
              <Link to={"/"}>Capyngen</Link> experts will be available for a
              free consultation on data analytics. They are the only people who
              can locate your requirements, equip you with customized solutions
              and deliver visible business results.
            </span>,
          ]}
          backgroundVideo={assets.backgroundVideo}
        />

        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default DataAnalytics;
