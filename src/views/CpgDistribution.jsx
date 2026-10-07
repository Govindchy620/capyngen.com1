import React from "react";
import Banner16 from "../components/Banner16";
import { assets } from "../assets/assets";
import BenefitsSection from "../components/BenefitsSection";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.capyngen.com/industries/cpg-distribution",
  name: "IT Solutions for CPG Distribution | Best IT Services for CPG Industry",
  description:
    "Capyngen delivers innovative IT solutions for CPG distribution. From software development to digital marketing, we help CPG brands grow and optimize operations.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  keywords: "IT Solutions for CPG Distribution",
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "IT Solutions for CPG Distribution, Best IT Services for CPG Industry",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/industries/cpg-distribution",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  description:
    "Capyngen delivers innovative IT solutions for CPG distribution. From software development to digital marketing, we help CPG brands grow and optimize operations.",
  keywords: "IT Solutions for CPG Distribution",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are software solutions of consumer packaged goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are accompanied with supply chain software, ERP systems and inventory management solutions that enable CPG distributors to handle their operations easily and quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the reason to select Capyngen to develop CPG software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen is a global innovator and the leading Software development of CPG company in India which is the custom supply chain software of CPG company.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a retail distribution software vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we do have the retail distribution management software services that can manage orders, delivery, and relationship with retailers.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to develop tailored ERP software to CPG companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For sure. CPG ERP software is made to suit the requirements of the manufacturers, distributors, and wholesalers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer inventory management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide the inventory optimization of the consumer goods of the software-industry that facilitates the real-time tracking of stocks as well as offers the efficient supply chains.",
      },
    },
    {
      "@type": "Question",
      name: "Do you come up with warehouse management solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our products make the storage, picking and distribution easier to save time and money.",
      },
    },
    {
      "@type": "Question",
      name: "Does your software support B2B and B2C?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the platforms are expandable to global B2B and B2C deals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide marketplace integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software is compatible with Amazon, Flipkart, and other B2B markets everywhere in the world.",
      },
    },
    {
      "@type": "Question",
      name: "Do your CPG software solutions have security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all of the software solutions to consumer packaged goods are implemented using extremely secure and completely compliant IT systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer an end-to-end support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen is also offering it to you, which means frequent servicing, support and upgrades.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to incorporate APIs with logistics and payment systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, our API integration is the only key that opens up a smooth flow of all systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online marketing solutions to distributors of CPGs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it covers SEO, social media marketing, paid advertisement, content marketing as well as email campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to give insights and analytics towards decision-making?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, platforms are all provided with real-time insights and reports to present data-driven business solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Does it provide worldwide implementation of CPG software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, international operations and multi-region programs can have their needs fulfilled by the offers of Capyngen.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of the CPG software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time varies depending on the complexity of the product, but most of the projects take between 3 and 6 months to complete the full-featured platforms.",
      },
    },
  ],
};

const CpgDistribution = () => {
  const solutionsData = [
    {
      title: "IT and Web Solutions",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base w-full text-slate-800 mt-4 leading-relaxed">
            {[
              {
                title: "B2B and B2C E-commerce Portals",
                text: "Custom online ordering systems that have product lists and orders in large quantities, which are best used when a brand requires CPG distribution services and a streamlined digital presence.",
              },
              {
                title: "ERP and Inventory Management Systems",
                text: "Real-time stock monitoring and inventory management solutions that are efficient with an advanced cpg software solution.",
              },
              {
                title: "CRM Integration",
                text: "The retailer, wholesaler, and distributor relationships are fully controlled with the assistance of a top CPG software company.",
              },
              {
                title: "Cloud and Hosting Solutions",
                text: "It offers secure and scalable solutions of high volume and worldwide transactions, which are driven by its IT solutions to cpg distribution sector in India.",
              },
              {
                title: "API Integration",
                text: "API makes systems integrate with logistics, payment gateways, and vendor tools to provide more CPG distribution services and automation.",
              },
              {
                title: "Postage and service",
                text: "Repeated updates and monitoring of the technical functioning.",
              },
            ].map(({ title, text }, idx) => (
              <li
                key={idx}
                className="cursor-default relative pl-1 text-slate-800"
              >
                <strong className="text-[#2563eb] font-bold">{title}</strong>{" "}
                <span className="text-slate-700">– {text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: (
        <span>
          <Link to={"/digital-marketing"}>Digital Marketing Solution</Link> For
          CPG industry
        </span>
      ),
      desc: (
        <>
          <ul className="list-disc list-inside space-y-4 text-sm sm:text-base w-full text-slate-800 mt-4 leading-relaxed">
            {[
              {
                title: "SEO of Distributor Websites",
                text: "Soar higher in the search results of retail distribution software and product searches with our expert-led CPG software solution.",
              },
              {
                title: "Paid Ads & Lead Generation",
                text: "Target retailers, resellers, and B2B purchasers anywhere in the globe with outcome-based IT services to cpg distribution sector in India.",
              },
              {
                title: "Social Media Marketing",
                text: "Conduct marketing of the product on LinkedIn, Instagram and Facebook to get buyers.",
              },
              {
                title: "Content Marketing",
                text: "Prepare product guides, case studies and distributor success stories to support your CPG distribution services.",
              },
              {
                title: "Emailing and automation campaigns",
                text: "ensure that retailers are notified of their updates, offers and alerts regularly.",
              },
              {
                title: "Marketplace Integration",
                text: "Get hooked up with Amazon, Flipkart and B2B marketplaces throughout the globe with our integrated CPG distribution services products.",
              },
            ].map(({ title, text }, idx) => (
              <li
                key={idx}
                className="cursor-default relative pl-1 text-slate-800"
              >
                <strong className="text-[#2563eb] font-bold">{title}</strong>{" "}
                <span className="text-slate-700">– {text}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Automated Supply Chain Management",
      description:
        "Elaborate on the simplicity of your operations with consumer packaged supply chain software and global-level CPG distribution services.",
      image: assets.cpg2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Scalable B2B and B2C Operation Platforms",
      description:
        "Open the entire world and make the world your market, and you will not be restricted by any boundaries by using modern IT solutions of cpg distribution sector in India.",
      image: assets.cpg3,
      cardBg: "bg-green-100",
    },
    {
      title: "Wholesale Growth Lead Generating Strategies",
      description:
        "Increased production results in retail and purchase merchandise by attracting new stores and customers using the efficient CPG software solution.",
      image: assets.cpg4,
      cardBg: "bg-purple-100",
    },
    {
      title: "More Intense Retailer-Distributor Interaction",
      description:
        "Stay loyal and happy through constant communication with our premium CPG distribution services.",
      image: assets.cpg5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Powerful IT Systems with Real-Time Insights",
      description:
        "Information that is reliable and that can be taken into action.",
      image: assets.cpg6,
      cardBg: "bg-yellow-100",
    },
    {
      title: "CPG Distribution Custom IT Services",
      description: (
        <span>
          Manufacturers' ERP, warehouse, and product{" "}
          <Link to={"/crm-management-software"}>
            lifecycle management software
          </Link>{" "}
          - very customised and built to your requirements through trusted it
          services to CPG.
        </span>
      ),
      image: assets.cpg7,
      cardBg: "bg-orange-100",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.cpg9,
      title: "Personal care and Home products",
    },
    {
      image: assets.cpg10,
      title: "Healthy lifestyle products",
    },
    {
      image: assets.cpg11,
      title: "Clothing and fashion distribution",
    },
    {
      image: assets.cpg12,
      title: "Electronic and consumer goods",
    },
    {
      image: assets.cpg13,
      title: "FMCG wholesaler and aggregators",
    },
    {
      image: assets.cpg8,
      title: "Food and beverage distributions",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis and Consultation",
      description:
        "We will know your CPG distribution service based distribution model and business goals.",
    },
    {
      step: "Step 02",
      title: "Strategy & Planning",
      description:
        "Digitally transform IT services of CPG distribution that best align with your distribution channel.",
    },
    {
      step: "Step 03",
      title: "Development and Integration",
      description:
        "Production ERP, CRM, e-commerce portal, and warehouse management systems constructed using advanced cpg software solution.",
    },
    {
      step: "Step 04",
      title: "Marketing Campaigns",
      description:
        "Carry out lead generation and brand awareness in any part of the globe.",
    },
    {
      step: "Step 05",
      title: "Testing & Optimisation",
      description:
        "Support high quality, security and scalability of international operations.",
    },
    {
      step: "Step 06",
      title: "Support & Growth",
      description: "Regular updates, promotion and support.",
    },
  ];
  const faqItems = [
    {
      question: "What are software solutions of consumer packaged goods?",
      answer:
        "They are accompanied with supply chain software, ERP systems and inventory management solutions that enable CPG distributors to handle their operations easily and quickly.",
    },
    {
      question:
        "What is the reason to select Capyngen to develop CPG software?",
      answer:
        "Capyngen is a global innovator and the leading Software development of CPG company in India which is the custom supply chain software of CPG company.",
    },
    {
      question: "Are you a retail distribution software vendor?",
      answer:
        "Yes, we do have the retail distribution management software services that can manage orders, delivery, and relationship with retailers.",
    },
    {
      question:
        "Are you able to develop tailored ERP software to CPG companies?",
      answer:
        "For sure. CPG ERP software is made to suit the requirements of the manufacturers, distributors, and wholesalers.",
    },
    {
      question: "Do you offer inventory management services?",
      answer:
        "Yes, we provide the inventory optimization of the consumer goods of the software-industry that facilitates the real-time tracking of stocks as well as offers the efficient supply chains.",
    },
    {
      question: "Do you come up with warehouse management solutions?",
      answer:
        "Yes, our products make the storage, picking and distribution easier to save time and money.",
    },
    {
      question: "Does your software support B2B and B2C?",
      answer: "Yes, the platforms are expandable to global B2B and B2C deals.",
    },
    {
      question: "Do you provide marketplace integration?",
      answer:
        "Yes, our software is compatible with Amazon, Flipkart, and other B2B markets everywhere in the world.",
    },
    {
      question: "Do your CPG software solutions have security?",
      answer:
        "Yes, all of the software solutions to consumer packaged goods are implemented using extremely secure and completely compliant IT systems.",
    },
    {
      question: "Do you offer an end-to-end support?",
      answer:
        "Capyngen is also offering it to you, which means frequent servicing, support and upgrades.",
    },
    {
      question:
        "Is it possible to incorporate APIs with logistics and payment systems?",
      answer:
        "Of course, our API integration is the only key that opens up a smooth flow of all systems.",
    },
    {
      question:
        "Do you offer online marketing solutions to distributors of CPGs?",
      answer:
        "Yes, it covers SEO, social media marketing, paid advertisement, content marketing as well as email campaigns.",
    },
    {
      question:
        "Are you able to give insights and analytics towards decision-making?",
      answer:
        "Yes, platforms are all provided with real-time insights and reports to present data-driven business solutions.",
    },
    {
      question: "Does it provide worldwide implementation of CPG software?",
      answer:
        "Yes, international operations and multi-region programs can have their needs fulfilled by the offers of Capyngen.",
    },
    {
      question: "What is the duration of the CPG software development?",
      answer:
        "The time varies depending on the complexity of the product, but most of the projects take between 3 and 6 months to complete the full-featured platforms.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for CPG Distribution | Best IT Services for CPG Industry
        </title>
        <meta
          name="description"
          content="Capyngen delivers innovative IT solutions for CPG distribution. From software development to digital marketing, we help CPG brands grow and optimize operations."
        />
        <meta
          name="keywords"
          content="IT Solutions for CPG Distribution | Best IT Services for CPG Industry "
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
      {/* 1. HERO SECTION (BANNER16 - RETAINED EXACTLY AS REQUESTED)                */}
      {/* ========================================================================= */}
      <Banner16 />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / CPG DISTRIBUTION (SPLIT LIGHT SECTION)                      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.cpg1}
                alt="CPG Distribution Digital Transformation"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Digital Transformation in CPG Distribution
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Fast inventory velocity, resilient supply chains, and transparent retailer-distributor relationships are critical in the consumer packaged goods (CPG) sector. Modern omnichannel buyers require instant stock visibility and automated reordering.
              </p>
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> equips distributors, manufacturers, and FMCG wholesalers worldwide with modern CPG ERP software, warehouse automation, and customized retail distribution platforms.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Real-time multi-warehouse inventory optimization and automated dispatch tracking.",
                "Seamless integration with Amazon, Flipkart, and global B2B procurement marketplaces.",
                "Custom CPG ERP software streamlining order lifecycle, billing, and supplier collaboration.",
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
                Schedule CPG Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. KEY FEATURES AND DISTRIBUTION SOLUTIONS (DARK CARDS GRID)              */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Key Features & Distribution Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Automated supply chains, scalable B2B/B2C platforms, and real-time inventory telemetry for modern consumer brands.
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
                    className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-300 text-sm leading-relaxed mt-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. STRATEGIC CAPABILITIES FOR CPG BRANDS (LIGHT CARDS)                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Strategic Capabilities for CPG Brands
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Empowering distributors and wholesalers with end-to-end supply chain visibility and digital market reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-150 p-8 rounded-none shadow-md relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <h3
                  className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-150"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {item.title}
                </h3>
                <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CONSUMER GOODS VERTICALS WE SERVE (DARK CARDS)                         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Consumer Goods Verticals We Serve
            </h2>
            <p className="text-blue-100 text-base sm:text-lg mt-3 leading-relaxed">
              Proven software solutions serving FMCG, apparel, consumer electronics, and food & beverage distribution networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionSliderData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-400 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
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
                    className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OUR CPG IMPLEMENTATION PROCESS (LIGHT CARDS)                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our CPG Implementation Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              A structured multi-phase rollout ensuring seamless data migration and uninterrupted supply chain operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-200 bg-slate-50 rounded-none hover:border-blue-600 transition-colors duration-150 relative group"
              >
                <div className="text-blue-600 font-mono text-sm font-semibold tracking-wider mb-2">
                  {step.step}
                </div>
                <h3
                  className="text-lg font-bold text-slate-900 mb-2 leading-snug"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Revamp Your Distribution Channels with Capyngen
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect with us to deploy tailored supply chain software, warehouse automation, and retail distribution management solutions.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-none shadow-lg transition-colors duration-150 shadow-xl group text-base"
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

export default CpgDistribution;
