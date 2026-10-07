import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import SeoToolsSection from "../components/SeoToolsSection";
import SeoStatsSection from "../components/SeoStatsSection";
import Timeline from "../components/Timeline";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import StartupAgency from "../components/StartupAgency";
import SeoAgency from "../components/SeoAgency";
import {
  FaBuilding,
  FaTasks,
  FaStore,
  FaPuzzlePiece,
  FaMoneyBillWave,
  FaCogs,
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";
import {
  FaUserTie,
  FaHome,
  FaGavel,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import TypesWeDevelop from "../components/TypesWeDevelop";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import BenefitsSection from "../components/BenefitsSection";
import Banner4 from "../components/Banner4";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/life-science#webpage",
  url: "https://www.capyngen.com/industries/life-science",
  name: "Capyngen delivers advanced Life Science IT Solutions for clinical trials, laboratory systems & biotech innovation.",
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
    url: "https://www.capyngen.com/assets/lifeScience3-8zF7A5Bm.png",
    width: 1200,
    height: 800,
    caption: "Life Science Industry Solutions by Capyngen",
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
        name: "Life Science",
        item: "https://www.capyngen.com/industries/life-science",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/life-science#service",
  name: "Life Science IT Solutions",
  serviceType:
    "Clinical Trial Management Systems, Laboratory Information Management System (LIMS), Biotech Software, Regulatory Compliance Platforms",
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
    "Capyngen develops specialized digital solutions for the life science and biotechnology sector—covering clinical trial platforms, lab management software, and regulatory compliance applications to accelerate innovation and ensure data integrity.",
  url: "https://www.capyngen.com/industries/life-science",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/lifeScience3-8zF7A5Bm.png",
    caption:
      "Life Science IT Solutions | Clinical Trials | LIMS | Biotech Software",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are life sciences software solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are software systems that save time and money in the pharmaceutical, biotechnology, clinical trials, and medical fields.",
      },
    },
    {
      "@type": "Question",
      name: "Are you providing clinical trial management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop secure and compliant Clinical Trial Management Systems (CTMS) for efficient trial management.",
      },
    },
    {
      "@type": "Question",
      name: "What is the way LIMS can assist Laboratories?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LIMS ensures error-free process management, improving workflow accuracy and speeding up sample tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Are your technological solutions compatible with rules and regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our software solutions comply with HIPAA, FDA, and GDPR standards for data security and privacy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide services for big pharmaceutical companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer scalable pharma IT services tailored to meet the needs of large pharmaceutical companies.",
      },
    },
    {
      "@type": "Question",
      name: "Can you make software specifically for clinical trials?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in building customized CTMS software for complex clinical trial requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create digital healthcare solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, including telemedicine platforms, patient portals, and hospital management systems.",
      },
    },
    {
      "@type": "Question",
      name: "What measures do you take to guarantee that patient data will be kept private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use encryption, regulatory compliance standards, and strict user authentication controls to protect patient data.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for your software to connect to IoT gadgets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software integrates with IoT devices such as wearables, laboratory instruments, and health monitors.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of technologies are you dealing with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with technologies such as AI, ML, Cloud, IoT, and secure data analytics.",
      },
    },
    {
      "@type": "Question",
      name: "Can it be considered a research tool that is scalable from you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software solutions are scalable and adaptable to fit the evolving needs of your research institution.",
      },
    },
    {
      "@type": "Question",
      name: "Do you partner with the medical research industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop research-focused software for data analysis and scientific reporting.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the average development time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically, our projects take around 8–16 weeks, depending on complexity and requirements.",
      },
    },
    {
      "@type": "Question",
      name: "For what reason should one decide to work with Capyngen for life sciences software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine domain expertise, innovation, and strong security to deliver reliable and compliant life sciences software.",
      },
    },
    {
      "@type": "Question",
      name: "Can we expect you to keep supporting the software after the release?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our support team provides continuous maintenance, updates, and technical assistance post-launch.",
      },
    },
  ],
};

const LifeScience = () => {
  const faqItems = [
    {
      question: "What are life sciences software solutions?",
      answer:
        "In short, they are software that makes it possible to save time and money in the pharmaceutical, biotechnology, clinical trials, and medical fields.",
    },
    {
      question: "Are you providing clinical trial management software?",
      answer:
        "Indeed we do. To accomplish efficient trial management, we create secure and compliant CTMS platforms.",
    },
    {
      question: "What is the way LIMS can assist Laboratories?",
      answer:
        "First of all, it is humanly error-free process managing and thus greatly improves accuracy of your workflow. Finally, it also gives the sample tracking a speed way of operation.",
    },
    {
      question:
        "Are your technological solutions compatible with rules and regulations?",
      answer:
        "Indeed yes, they comply with HIPAA, FDA, and GDPR standards, which are the references in the field of data security and privacy.",
    },
    {
      question: "Do you provide services for big pharmaceutical companies?",
      answer:
        "Yes, we can provide the pharma IT service that suits the capacity of the pharma IT services for big companies.",
    },
    {
      question:
        "Just to confirm, can you make the software specifically for clinical trials?",
      answer:
        "Sure, we are experienced in creating bespoke CTMS for the difficult trials cases.",
    },
    {
      question: "Do you create digital healthcare solutions?",
      answer:
        "Yes, e.g., telemedicine platforms, patient portals, and the hospital management systems.",
    },
    {
      question:
        "What measures do you take to guarantee that patient data will be kept private?",
      answer:
        "The main protective measures are encryption, the implementation of standards for compliance, and control over user identification.",
    },
    {
      question: "Is it possible for your software to connect to IoT gadgets?",
      answer:
        "For instance, the software can work with wearables, instruments in the lab, and devices for monitoring your health.",
    },
    {
      question: "What kind of technologies are you dealing with?",
      answer:
        "We include AI, ML, cloud, IoT, and secure analytics in the portfolio of our solutions.",
    },
    {
      question:
        "Can it be considered a research tool that is scalable from you?",
      answer:
        "Yes, the functionalities and features of our software evolve to match with your institute's requirements.",
    },
    {
      question: "Do you partner with the medical research industry?",
      answer:
        "Yes, we develop medical research software for data analysis and reporting.",
    },
    {
      question: "How long is the average development time?",
      answer:
        "Roughly 8–16 weeks with the timeline being flexible and dependent on the project complexity.",
    },
    {
      question:
        "For what reason should one decide to work with Capyngen for life sciences software?",
      answer:
        "We do it by merging domain expertise, innovation, and security to provide clients with the solutions they can trust.",
    },
    {
      question:
        "Can we expect you to keep supporting the software after the release?",
      answer:
        "Yes, the customer care team is always present to handle all requests as well as perform updates and carry out maintenance throughout the whole time the product functions.",
    },
  ];
  const servicesData = [
    {
      image: assets.lifeScience12,
      title: "Cloud-enabled platforms aimed at scalability and efficiency",
      desc: "",
    },
    {
      image: assets.lifeScience13,
      title:
        "AI and Machine Learning for forecasting analytics and data insights",
      desc: "",
    },
    {
      image: assets.lifeScience14,
      title:
        "Information safety and regulatory compliance with HIPAA, FDA, and GDPR",
      desc: "",
    },
    {
      image: assets.lifeScience15,
      title:
        "The assimilation of IoT and wearable devices for live data capturing",
      desc: "",
    },
    {
      image: assets.lifeScience16,
      title:
        "The use of flexible software design for on-the-fly development and implementation",
      desc: "",
    },
    {
      image: assets.lifeScience17,
      title:
        "The use of sophisticated data analysis for medical research and healthcare decision-making",
      desc: "",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Clinical Trial Management Software (CTMS)",
      description:
        "You can hold the reins of your trials starting from planning to reporting. By this way, compliance will be assured, progress will be tracked, and data will be managed in a time saving manner.",
      image: assets.lifeScience5,
      cardBg: "bg-blue-100",
    },
    {
      title: "Laboratory Information Management Systems (LIMS)",
      description:
        "Through automation of lab procedures, raising the standard of sample tracking, and executing data accuracy in biotech, and pharma sectors.",
      image: assets.lifeScience6,
      cardBg: "bg-blue-100",
    },
    {
      title: "Digital Healthcare Solutions",
      description:
        "The patient and telemedicine sectors can be transformed entirely through using perfectly meshed digital platforms that will handle care and management.",
      image: assets.lifeScience7,
      cardBg: "bg-blue-100",
    },
    {
      title: "Pharma IT Services",
      description:
        "IT assistance that covers the whole spectrum of pharmaceutical companies through processes such as the product line, security, and maintenance.",
      image: assets.lifeScience8,
      cardBg: "bg-blue-100",
    },
    {
      title: "Medical Research Software",
      description:
        "The software can simplify the process of data collection, data analysis, and reporting for medical research, as well as, biotech research institutions.",
      image: assets.lifeScience9,
      cardBg: "bg-blue-100",
    },
    {
      title: "Biotech Software Solutions",
      description:
        "Software solutions that are made to the custom specifications of the biotech industry to improve laboratory Practices, manage data, and R&D processes effectively.",
      image: assets.lifeScience10,
      cardBg: "bg-blue-100",
    },
  ];
  const solutionsData = [
    {
      title: (
        <span>
          Deep knowledge gained through working with pharmaceutical, biotech,
          and{" "}
          <Link to={"/industries/healthcare-fitness"}>
            healthcare IT industries
          </Link>
        </span>
      ),
      desc: "",
    },
    {
      title:
        "Specialized software developed that not only meets the needs of the client but also aligns with the regulatory compliance and industry standards",
      desc: "",
    },
    {
      title:
        "Creative solutions for efficient management of data and quality healthcare",
      desc: "",
    },
    {
      title:
        "Platforms that are both scalable and secure for handling various life sciences processes",
    },
    {
      title:
        "Seamless integration with cutting-edge technologies such as AI, ML, and IoT",
      desc: "",
    },
    {
      title:
        "Customer-focused caring and continuous service for a long time of trustworthiness",
      desc: "",
    },
  ];
  const slides = [
    {
      image: assets.lifeScience1,
      title: "Digitally Intelligent Life Sciences Innovation",
      subtitle:
        "Rethink life sciences challenges with technology that reinvent research, manufacturing, and patient outcomes.",
    },
    {
      image: assets.lifeScience2,
      title: "Discovery in Life Sciences Made Faster",
      subtitle:
        "Get the most out of your research and development(July) compliance and data-driven insights with smart solutions.",
    },
    {
      image: assets.lifeScience3,
      title: "Leading the Future of Biotech and Pharma",
      subtitle:
        "Fast track clinical research with the use of AI and the implementation of automation for better outcomes.",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          Life Sciences Software Solutions | Digital Healthcare by Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers advanced life sciences software for biotech & healthcare — CTMS, LIMS, and digital healthcare solutions ensuring accuracy & compliance."
        />
        <meta
          name="keywords"
          content="Life Sciences Software Solutions | Digital Healthcare by Capyngen"
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
      {/* 1. HERO SECTION (BANNER4 - RETAINED EXACTLY AS REQUESTED)                 */}
      {/* ========================================================================= */}
      <Banner4 slides={slides} />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / LIFE SCIENCES (SPLIT LIGHT SECTION)                         */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.lifeScience4}
                alt="Life Sciences Software Solutions"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Transforming Life Sciences with Cutting-Edge Software
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> delivers custom life sciences software solutions engineered to simplify clinical trials, modernize laboratory information systems (LIMS), and power new digital healthcare ecosystems.
              </p>
              <p>
                We partner with pharmaceutical giants, biotech innovators, and medical research institutes to heighten productivity, maintain rigorous FDA and HIPAA compliance, and accelerate life-saving discovery.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Strict compliance with HIPAA, FDA 21 CFR Part 11, and GDPR guidelines.",
                "Real-time sample tracking and automated laboratory management protocols.",
                "Seamless integration with medical IoT, laboratory instruments, and cloud analytics.",
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
                Schedule Pharma Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. LIFE SCIENCES SOFTWARE SOLUTIONS (6 DARK CARDS)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Life Sciences Software Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Specialized platforms accelerating clinical discovery, laboratory operations, and healthcare delivery.
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
      {/* 4. TECHNOLOGIES WE USE (LIGHT CARDS)                                      */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Technologies We Leverage
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Leading-edge technical capabilities engineered for speed, high precision, and unyielding compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
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
                    className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.desc && (
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                      {item.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHY CAPYNGEN FOR LIFE SCIENCES (SPLIT DARK SECTION)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
            <div className="border border-slate-700 overflow-hidden shadow-xl rounded-none w-full max-w-[480px]">
              <img
                src={assets.lifeScience11}
                alt="Why Capyngen for Life Sciences"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Capyngen for Life Sciences?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We synthesize clinical domain knowledge with state-of-the-art engineering to deliver reliable healthcare platforms:
            </p>

            <div className="space-y-4 pt-2">
              {solutionsData.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-4 border border-slate-800 bg-[#070e1d] flex items-start gap-4 hover:border-blue-500 transition-colors duration-150"
                >
                  <div className="w-2.5 h-2.5 rounded-none bg-blue-500 mt-2 shrink-0" />
                  <div>
                    <h4
                      className="font-bold text-white text-sm sm:text-base leading-snug"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {benefit.title}
                    </h4>
                    {benefit.desc && (
                      <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                        {benefit.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION BANNER                                                  */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#2563eb] text-white border-b border-blue-500/30">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to Transform Your Life Sciences Operations?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Empower your pharmaceutical, biotech, or research organization with secure, scalable, and compliant digital solutions.
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
      {/* 7. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default LifeScience;
