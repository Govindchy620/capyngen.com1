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
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaCode,
  FaCheckCircle,
  FaDatabase,
  FaCreditCard,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaChartLine,
  FaChartPie,
  FaExpand,
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
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://www.capyngen.com/industries/energy-resources-utilities#webpage",
  url: "https://www.capyngen.com/industries/energy-resources-utilities",
  name: "Capyngen delivers smart Energy, Resources & Utilities IT Solutions that drive sustainability, efficiency, and innovation across industries.",
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
    url: "https://www.capyngen.com/assets/energyResourcesBanner1-Bdq5_C_1.png",
    width: 1200,
    height: 800,
    caption: "Energy, Resources & Utilities Industry Solutions by Capyngen",
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
        name: "Energy, Resources & Utilities",
        item: "https://www.capyngen.com/industries/energy-resources-utilities",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.capyngen.com/industries/energy-resources-utilities#service",
  name: "Energy, Resources and Utilities IT Solutions",
  serviceType:
    "Energy Management Systems, Utility Billing Software, Renewable Energy Monitoring, Resource Optimization Solutions",
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
    "Capyngen develops advanced digital solutions for the Energy, Resources & Utilities sector, offering smart energy management systems, renewable energy monitoring platforms, and resource optimization software to promote sustainability and operational excellence.",
  url: "https://www.capyngen.com/industries/energy-resources-utilities",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/energyResourcesBanner1-Bdq5_C_1.png",
    caption:
      "Energy, Resources & Utilities IT Solutions | Energy Management | Resource Optimization | Smart Utilities",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are energy management software solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are software systems that help utilities, oil & gas, and renewable energy companies monitor, control, and optimize the energy they produce and distribute.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for Capyngen to design smart grid software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, Capyngen specializes in smart grid software development, enabling efficient energy flow and real-time supervision.",
      },
    },
    {
      "@type": "Question",
      name: "Does your company provide utility billing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software streamlines invoicing, payment collection, and reporting for the utilities sector.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to develop renewable energy software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we build advanced software for solar, wind, and hydro energy generation and management.",
      },
    },
    {
      "@type": "Question",
      name: "Which business areas or branches do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve companies in power, utilities, oil & gas, renewable energy, and smart grid sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Is your software scalable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our energy management software is scalable and adaptable for businesses of all sizes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide integration with IoT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our solutions integrate with smart meters, sensors, and IoT devices for real-time monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop custom oil & gas management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer custom ERP and management systems for oil & gas companies.",
      },
    },
    {
      "@type": "Question",
      name: "What is energy analytics software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Energy analytics software processes energy data to deliver insights that improve efficiency and reduce waste.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support smart meter data management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our tools support monitoring, management, and accurate reporting of smart meter data.",
      },
    },
    {
      "@type": "Question",
      name: "Are your solutions compliant with industry regulations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all our software solutions comply with major energy sector regulations and standards.",
      },
    },
    {
      "@type": "Question",
      name: "Could a small utility firm use your software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software is suitable for both small utilities and large energy enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide ongoing updates and dedicated support for smooth software operation.",
      },
    },
    {
      "@type": "Question",
      name: "Can your software integrate with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software easily integrates with legacy infrastructure and ERP systems.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen for energy management software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We combine expertise, innovation, flexibility, and dedicated support to deliver the best energy management solutions.",
      },
    },
  ],
};

const EnergyResourcesUtilities = () => {
  const faqItems = [
    {
      question: "What are energy management software solutions?",
      answer:
        "These are the software that assists the utilities, oil & gas, and renewable companies to easily see, control, and maintain the energy that they produce and distribute.",
    },
    {
      question: "Is it possible for Capyngen to design smart grid software?",
      answer:
        "Of course, we are the ones who bring smart grid technology to life and thus facilitate energy flow that is more efficient with up-to-the-minute supervision.",
    },
    {
      question: "Does your company provide utility billing software?",
      answer:
        "Definitely, our software is designed to simplify invoicing, collecting payments, and reporting for the utilities sector.",
    },
    {
      question:
        "Are you able to do the development for the renewable energy software?",
      answer:
        "We specialize in the renewable energy industry to work out the solar, wind, and hydro energy generation and the management as well.",
    },
    {
      question: "Which business areas or branches do you cover?",
      answer:
        "We are the ones to offer our services to companies in the power, utilities, oil & gas, renewable energy, and smart grid sectors.",
    },
    {
      question: "Is your software scalable?",
      answer:
        "Our energy management software solutions are adaptable or adjustable to any size of enterprises, be it small or large ones.",
    },
    {
      question: "Do you provide for integration with IoT?",
      answer:
        "Yes, our solutions sync up with smart meters, sensors, and IoT gadgets to bring about real-time monitoring.",
    },
    {
      question: "Can you develop custom oil & gas management software?",
      answer:
        "Yes, we create highly personalized ERP and management solutions for oil & gas companies.",
    },
    {
      question: "What is energy analytics software?",
      answer:
        "Software that ingests energy data and then generates actionable business intelligence, which in turn fosters customer engagement and reduces energy waste.",
    },
    {
      question: "Do you support smart meter data management?",
      answer:
        "Yes, we have the tools that help with smart meter data monitoring, management, and reporting without errors.",
    },
    {
      question: "Are your solutions compliant with industry regulations?",
      answer:
        "Yes, we make sure that our products and services adhere to the regulations and standards for the energy sector.",
    },
    {
      question:
        "Could a small utility firm be capable of harnessing your software?",
      answer:
        "Yes, the software which we have developed is equally compatible with small utilities and large energy enterprises.",
    },
    {
      question: "Do you provide maintenance and support?",
      answer:
        "Yes, we definitely do. We provide continuous updates and support to the customer so that they can go about their daily activities without disruptions.",
    },
    {
      question:
        "What about software that you have if it can work nicely with old systems?",
      answer:
        "Yes, it is very simple and convenient to communicate with previously installed infrastructure and ERP systems through our software.",
    },
    {
      question:
        "What are the factors that can lead to Capyngen being the preferred one for giving off energy management software?",
      answer:
        "We harness professional knowledge, technical advancements, flexibility, and committed assistance to create the most effective energy solutions for you.",
    },
  ];
  const servicesData = [
    {
      image: assets.energyResources7,
      title: "Smart Grid Software",
      desc: "Implement predictive analytics, load balancing, and real-time monitoring to manage energy distribution in an effective manner.",
    },
    {
      image: assets.energyResources8,
      title: "Utility Billing Software",
      desc: "Facilitate the processes of invoicing, payment collection, and billing through the use of software for electricity, water, and gas utilities.",
    },
    {
      image: assets.energyResources9,
      title: "Renewable Energy Software",
      desc: "Make efficient solar, wind, and hydro energy generation, storage, and distribution.",
    },
    {
      image: assets.energyResources10,
      title: "Oil & Gas ERP Solutions",
      desc: "Develop easy methods for exploration, production, supply chain, and reporting operations.",
    },
    {
      image: assets.energyResources11,
      title: "Energy Analytics Software",
      desc: "Make good use of utilities and power plants through advanced analytics, real-time dashboards, and performance reporting.",
    },
    {
      image: assets.energyResources12,
      title: "Smart Meter Data Management",
      desc: "Measure consumption in the most accurate way, organize smart meters, and communicate usage trends well.",
    },
  ];
  const panels = [
    {
      image: assets.energyResourcesBanner1,
      title: "Powering Progress with Digital Energy Solutions",
      desc: "Get the energy you need to run your business in the most efficient and environmentally friendly way by implementing energy management systems that are smart and simple to use.",
    },
    {
      image: assets.energyResourcesBanner2,
      title: "The Future of Clean & Connected Energy",
      desc: "Utilize Internet of Things(IoT), Artificial Intelligence (AI), and advanced analytics to utilities get a facelift and resource ease their operations beyond imagination.",
    },
    {
      image: assets.energyResourcesBanner3,
      title: "Smarter Energy for a Smarter Planet",
      desc: "Become electric utility networked systems to the point of energy saving through transparency and sustainability.",
    },
    {
      image: assets.energyResourcesBanner4,
      title: "Driving Digital Transformation in Utilities",
      desc: "Make the transition to automation, predictive insights, and innovation complete with your energy ecosystem.",
    },
    {
      image: assets.energyResourcesBanner5,
      title: "Reshape Energy Operations with Technology",
      desc: "Digital excellence is what will be doing for you; it will turn the waste reduction into a safe operation and reliable through quality improvement.",
    },
  ];
  const cardsSectionData1 = [
    {
      title:
        "Demonstrated knowledge in the creation of tailored software to manage oil & gas activities.",
      description: "",
      icon: <FaDatabase className="text-4xl text-white" />,
    },
    {
      title:
        "Expandable IoT solutions for the energy and utilities industries.",
      description: "",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title:
        "Measurement of energy use software carried out in the present to promote energy saving in operations.",
      description: "",
      icon: <FaCreditCard className="text-4xl text-white" />,
    },
    {
      title:
        "Intelligent network solutions that allow for the distribution of energy in a more effective way.",
      description: "",
      icon: <FaUsers className="text-4xl text-white" />,
    },
    {
      title: "No barriers when linking with older systems.",
      description: "",
      icon: <FaLightbulb className="text-4xl text-white" />,
    },
    {
      title:
        "A support and care service that guarantees the proper functioning.",
      description: "",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Scalable software deployment is done through cloud platforms.",
      description: "",
      icon: <FaDatabase className="text-4xl text-white" />,
    },
    {
      title: (
        <span>
          The use of{" "}
          <Link to={"/artificial-intelligence-services"}>
            AI and Machine Learning
          </Link>{" "}
          is made for setting up predictive energy analytics.
        </span>
      ),
      description: "",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title:
        "Energy monitoring through IoT which is made up of smart meters, and sensors.",
      description: "",
      icon: <FaCreditCard className="text-4xl text-white" />,
    },
    {
      title:
        "The use of data visualization and dashboards has made it possible for businesses to have insights that are actionable.",
      description: "",
      icon: <FaUsers className="text-4xl text-white" />,
    },
    {
      title:
        "The use of blockchain has been the way for energy transactions to be made secure.",
      description: "",
      icon: <FaLightbulb className="text-4xl text-white" />,
    },
    {
      title: "Integration tools for ERP and legacy energy systems",
      description: "",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "Power and Utilities Companies",
      desc: "",
      image: assets.energyResources15,
      textColor: "text-white",
    },
    {
      title: "Oil and Gas Enterprises",
      desc: "",
      image: assets.energyResources14,
      textColor: "text-white",
    },
    {
      title: "Producers of Renewable Energy",
      desc: "",
      image: assets.energyResources13,
      textColor: "text-white",
    },
    {
      title: "Smart Grid Networks",
      desc: "",
      image: assets.energyResources17,
      textColor: "text-white",
    },
    {
      title: "Energy Analytics and IoT Integration Providers",
      desc: "",
      image: assets.energyResources18,
      textColor: "text-white",
    },
    {
      title: "Utility Management Enterprises",
      desc: "",
      image: assets.energyResources16,
      textColor: "text-white",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          Energy Management Software Solutions | Smart Grid & ERP Systems –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen offers intelligent energy management software solutions. From smart grids to renewable energy, billing, and ERP systems — power your business efficiently."
        />
        <meta
          name="keywords"
          content="Energy Management Software Solutions | Smart Grid & ERP Systems – Capyngen"
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
      {/* 1. HERO SECTION (EXPANDABLEGALLERY - RETAINED EXACTLY AS REQUESTED)       */}
      {/* ========================================================================= */}
      <ExpandableGallery panels={panels} />

      {/* ========================================================================= */}
      {/* 2. OVERVIEW / ENERGY & UTILITIES (SPLIT LIGHT SECTION)                    */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex justify-center">
            <div className="border border-slate-200 overflow-hidden shadow-xl rounded-none w-full max-w-[540px]">
              <img
                src={assets.energyResources6}
                alt="Energy and Utilities Software Solutions"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Leading Energy Management Software Solutions
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                <Link to="/" className="text-blue-600 hover:underline font-semibold">Capyngen</Link> is an energy management software solutions provider delivering smart grid infrastructure, utility billing platforms, and renewable energy ERP systems.
              </p>
              <p>
                Our advanced energy analytics and IoT telemetry empower power utilities and oil & gas enterprises to automate grid operations, balance peak electrical loads, and drive sustainable resource efficiency.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                "Real-time grid load balancing and automated smart meter consumption tracking.",
                "Custom ERP systems tailored for oil, gas, solar, and hydro supply chains.",
                "Predictive analytics engines minimizing transmission loss and equipment downtime.",
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
                Schedule Energy Consultation
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-150">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR ENERGY & UTILITY SOFTWARE SOLUTIONS (6 DARK CARDS)                 */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Energy & Utility Software Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Targeted digital applications crafted to streamline exploration, grid management, and billing administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, idx) => (
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
      {/* 4. WHY TOP ENERGY COMPANIES RELY ON CAPYNGEN (6 LIGHT CARDS)             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Top Energy Companies Rely on Capyngen
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Proven domain expertise, seamless legacy integration, and dependable support for critical utility assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-600 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-md relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-600 text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEGMENTS SERVED ACROSS THE ENERGY ECOSYSTEM (6 DARK CARDS)            */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Segments Served Across the Energy Landscape
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Tailored software architectures serving every sector of the modern utilities value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionSliderData1.map((item, idx) => (
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
                  {item.desc && (
                    <p className="text-slate-300 text-sm leading-relaxed">
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
      {/* 6. ARCHITECTURAL & TECHNOLOGY PILLARS (LIGHT CARDS)                       */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Architectural & Technology Pillars
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Building dependable, cloud-native utility software powered by telemetry, analytics, and resilient security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData2.map((item, idx) => (
              <div
                key={idx}
                className="p-6 border border-slate-200 bg-slate-50 flex flex-col justify-between rounded-none shadow-sm hover:border-blue-600 transition-colors duration-150 relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-blue-600 text-3xl mb-4">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  )}
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
              Make the Most of Your Energy Resources Today
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Increase productivity, lower expenses, and modernize customer management with Capyngen software solutions for energy and utilities.
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

export default EnergyResourcesUtilities;
