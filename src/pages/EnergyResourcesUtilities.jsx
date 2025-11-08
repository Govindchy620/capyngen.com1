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
          <Link to={"/artificial-intelligence"}>AI and Machine Learning</Link>{" "}
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
      <ExpandableGallery panels={panels} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Start efficiency making possible through renewable & oil & gas software"
        description={[
          "Utilize cutting-edge energy analytics software to make better decisions and attain resource-saving goals.",
        ]}
        buttonText="Expert Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Industry Has Lastly Managed To Go The Tech RoadLeading Energy Management Software Solutions for Modern Utilities"
        description={[
          <span>
            <Link to={"/"}>Capyngen</Link> is an energy management software
            solutions leader that provides the smart grid software, utility
            billing software, and renewable energy software.
          </span>,
          `Energy analytics software and IoT solutions for energy and utilities that accompany us to the store of news agents are the same as those that allow us to automate operations, optimize energy distribution, and enhance sustainability in our businesses.`,
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                {
                  text: "Power and utilities advanced software",
                  color: "text-blue-500",
                },
                {
                  text: "Oil, gas, and renewable scalable solutions",
                  color: "text-blue-500",
                },
                {
                  text: "Energy analytics software driven by data for wise decision-making",
                  color: "text-blue-500",
                },
                {
                  text: "Real-time monitoring with smart grid solutions",
                  color: "text-blue-500",
                },
                {
                  text: "Utility software for automated billing and consumption tracking",
                  color: "text-blue-500",
                },
                {
                  text: "IoT integrations for smart energy management",
                  color: "text-blue-500",
                },
              ].map(({ title, text, color }, idx) => (
                <li
                  key={idx}
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  {text}
                </li>
              ))}
            </ul>
          </>,
        ]}
        image={assets.energyResources6}
        isHidden={true}
        background={assets.patternBg1}
      />
      <IndustryServices
        heading="Our Energy & Utility Software Solutions"
        subheading=""
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Realize Smart Grid & Energy Utility Solutions"
        description={[
          "Become a Capyngen partner to achieve smart grid software installation and billing system automation.",
        ]}
        buttonText="Schedule a Free Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <CardsSection
        heading="Why Top Energy Companies Rely on Capyngen"
        subheading=""
        services={cardsSectionData1}
        headColor="text-white"
        sectionBg="bg-gray-900"
        cardBg="bg-transparent"
        hoverBg="shadow-xl hover:shadow-lg hover:shadow-white transition-all"
        textColor="text-white"
        hoverTextColor=""
      />
      <CardsSectionSlider
        heading="Every Segment of the Energy Industry has been catered to."
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
      <CardsSection
        heading="Why Choose Capyngen for Application Solutions"
        subheading=""
        services={cardsSectionData2}
        sectionBg="bg-gray-900"
        cardBg="border-2 border-white shadow-2xl shadow-gray-800"
        hoverBg=""
        height="h-72"
        textColor="text-white"
        hoverTextColor=""
        headColor="text-white"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Make the most of your energy resources today"
        description={[
          "Increase productivity and lower your expenses with the help of Capyngen software solutions for energy management.",
        ]}
        buttonText="Request a demo"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default EnergyResourcesUtilities;
