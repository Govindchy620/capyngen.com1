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
      title:
        "Revolutionize Your Energy Activities By Using The Most Sophisticated Energy Management Software Solutions",
      desc: "Capyngen provides tech-forward IT solutions for utilities, oil & gas, renewable energy, and smart grids that enable you to save money, improve efficiency, and promote sustainable practices.",
    },
    {
      image: assets.energyResourcesBanner2,
      title: "Panel 2",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.energyResourcesBanner3,
      title: "Panel 3",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.energyResourcesBanner4,
      title: "SEO Speed Up Website",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.energyResourcesBanner5,
      title: "Panel 5",
      desc: "Digital Art • Illustrations",
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
      title:
        "The use of AI and Machine Learning is made for setting up predictive energy analytics.",
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
          `Capyngen is an energy management software solutions leader that provides the smart grid software, utility billing software, and renewable energy software.`,
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
      <ScrollRevealEffect />
    </div>
  );
};

export default EnergyResourcesUtilities;
