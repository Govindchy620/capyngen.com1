import React from "react";
import ShuffleHero from "../components/ShuffleHero";
import TopRatedCompany from "../components/TopRatedCompany";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import IndustryServices from "../components/IndustryServices";
import {
  FaAndroid,
  FaApple,
  FaBullhorn,
  FaHandsHelping,
  FaNetworkWired,
  FaPalette,
  FaSearch,
  FaTags,
  FaUsers,
  FaVrCardboard,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";
import AppTypesSection from "../components/AppTypesSection";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id":
    "https://www.capyngen.com/industries/manufacturing-and-automotive#webpage",
  url: "https://www.capyngen.com/industries/manufacturing-and-automotive",
  name: "Manufacturing Software Solutions | Smart Factory & ERP Systems – Capyngen",
  description:
    "Capyngen delivers advanced manufacturing software solutions. From smart factory automation to ERP, IoT, and supply chain software — we drive industrial innovation.",
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
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.capyngen.com/industries/manufacturing-and-automotive#service",
  name: "Manufacturing & Automotive Industry Solutions",
  serviceType:
    "Industry 4.0 Automation, Industrial Software, Connected Automotive Technology Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Capyngen delivers advanced manufacturing software solutions. From smart factory automation to ERP, IoT, and supply chain software — we drive industrial innovation. :contentReference[oaicite:0]{index=0}",
  url: "https://www.capyngen.com/industries/manufacturing-and-automotive",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/manufacturingBanner5-CyEqHCvn.png",
    caption:
      "Manufacturing Software Solutions | Smart Factory & ERP Systems – Capyngen",
  },
  offers: {
    "@type": "Offer",
    price: "Custom",
    priceCurrency: "INR",
    availability: "InStock",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/industries/manufacturing-and-automotive#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Manufacturing & Automotive digital solutions are what?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These are software systems and digital platforms that automate production, supply chain, and automotive operations at the factory level.",
      },
    },
    {
      "@type": "Question",
      name: "Do you make custom ERP for manufacturing companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen builds custom ERP software from scratch for inventory, production, workforce, and distribution management.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to improve automotive supply chain management by your solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our SCM software optimizes structure, logistics, tracking, and vendor coordination to improve supply chain management.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have IoT-based manufacturing solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop IoT-enabled smart factory systems that offer real-time machine condition monitoring and predictive maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you utilize AI to automate production lines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, our AI-powered automation enhances energy efficiency, reduces human error, and improves production accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create MES (Manufacturing Execution Systems)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our MES technologies monitor production, quality, and machine performance to ensure optimal factory efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Will your solutions be able to help automotive plants eliminate downtime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, by using predictive analytics and IoT alerts, our systems help reduce equipment failures and eliminate downtime.",
      },
    },
    {
      "@type": "Question",
      name: "Are you the one creating digital twin solutions for automotive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we create digital twin solutions for vehicle design, testing, and performance optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate manufacturing robotics with your solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer robotic process automation (RPA) and robotic assembly line integration for manufacturing systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create automotive dealership apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we build apps that enable automotive dealerships to manage inventory, sales, and customer relationships efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "Can you develop fleet management systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen develops GPS-enabled fleet management platforms tailored for logistics and automotive businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do your solutions integrate with Industry 4.0?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our systems combine AI, IoT, Big Data, and automation to deliver fully integrated Industry 4.0 solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to create AR/VR apps for automotive training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we develop AR/VR applications for workforce training, vehicle simulation, and safety demonstrations.",
      },
    },
    {
      "@type": "Question",
      name: "How reliable are your manufacturing solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our manufacturing solutions follow industry security standards, use encryption, and role-based access to ensure full reliability.",
      },
    },
    {
      "@type": "Question",
      name: "Factory and automotive clients can receive support from you at any time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides continuous monitoring, system upgrades, and 24/7 technical support for all manufacturing and automotive clients.",
      },
    },
  ],
};

const ManufacturingAutomotive = () => {
  const faqItems = [
    {
      question: "Manufacturing & Automotive digital solutions are what?",
      answer:
        "These are software and platforms that automate production, supply chain, and automotive operations at the factory level.",
    },
    {
      question: "Do you make custom ERP for manufacturing companies?",
      answer:
        "Indeed, we are from scratch creating ERP software for inventory, production, workforce, and distribution management.",
    },
    {
      question:
        "Is it possible to improve automotive supply chain management by your solutions?",
      answer:
        "Our SCM software is aimed at structure optimization, which includes logistics, tracking, and vendor coordination.",
    },
    {
      question: "Do you have IoT-based manufacturing solutions?",
      answer:
        "We create smart, IoT-enabled factories where machines have real-time condition monitoring and predictive maintenance is in place.",
    },
    {
      question: "Can you utilize AI to automate production lines?",
      answer:
        "Definitely, we bring in AI-powered automation that is of great energy saving and is error-free or reduced error rate is realized.",
    },
    {
      question: "Do you create MES (Manufacturing Execution Systems)?",
      answer:
        "Our MES technologies identify production, quality, and performance changes in machines.",
    },
    {
      question:
        "Will your solutions be able to help automotive plants eliminate downtime?",
      answer:
        "Yes, they make provisions for failures through predictive analytics, and they reduce downtime through IoT alerts.",
    },
    {
      question:
        "Are you the one creating digital twin solutions for automotive?",
      answer:
        "Yes, we make digital twins for vehicle design, testing, and performance enhancement.",
    },
    {
      question: "You can integrate manufacturing robotics with your solutions?",
      answer:
        "Given yes, we provide robotic process automation (RPA) and robotic assembly line integration.",
    },
    {
      question: "Do you create automotive dealership apps?",
      answer:
        "Yes, we develop apps allowing dealerships to better control their inventories, sales, and customers.",
    },
    {
      question: "Can you develop fleet management systems?",
      answer:
        "We have such fleet management platform that are GPS-enabled and built for logistics and automotive companies.",
    },
    {
      question: "Do your solutions integrate with Industry 4.0?",
      answer:
        "Indeed, we use AI, IoT, Big Data, and automation together so as to achieve smart manufacturing.",
    },
    {
      question: "Are you able to create AR/VR apps for automotive training?",
      answer:
        "Yes, we produce AR/VR apps that can be used for workforce training and vehicle simulation.",
    },
    {
      question: "How reliable are your manufacturing solutions?",
      answer:
        "We employ encrypted systems, role-based access, and compliance with industry standards.",
    },
    {
      question:
        "Factory and automotive clients can receive support from you at any time?",
      answer:
        "Yes, we are always available to provide continuous monitoring, upgrades, and technical support.",
    },
  ];
  const heroImages = [
    {
      id: 1,
      src: assets.manufacturingBanner1,
    },
    {
      id: 2,
      src: assets.manufacturingBanner2,
    },
    {
      id: 3,
      src: assets.manufacturingBanner3,
    },
    {
      id: 4,
      src: assets.manufacturingBanner4,
    },
    {
      id: 5,
      src: assets.manufacturingBanner5,
    },
    {
      id: 6,
      src: assets.manufacturingBanner6,
    },
    {
      id: 7,
      src: assets.manufacturingBanner7,
    },
    {
      id: 8,
      src: assets.manufacturingBanner8,
    },
    {
      id: 9,
      src: assets.manufacturingBanner9,
    },
    {
      id: 10,
      src: assets.manufacturingBanner10,
    },
    {
      id: 11,
      src: assets.manufacturingBanner11,
    },
    {
      id: 12,
      src: assets.manufacturingBanner12,
    },
    {
      id: 13,
      src: assets.manufacturingBanner13,
    },
    {
      id: 14,
      src: assets.manufacturingBanner14,
    },
    {
      id: 15,
      src: assets.manufacturingBanner15,
    },
    {
      id: 16,
      src: assets.manufacturingBanner16,
    },
  ];
  const cardsSectionDifferentColorData1 = [
    {
      title: "",
      description:
        "Manufacturing software specially crafted by the user to meet the production requirements of the factory with no less than the needed functionalities.",
      icon: (
        <FaHandsHelping className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e3a8a] to-[#1e40af] hover:from-[#1d4ed8] hover:to-[#2563eb]", // deep to vibrant blue
    },
    {
      title: "",
      description:
        " Just one of the many already connected factories where the implementation of AI, IoT, and automation has been made for better, smarter, and more effective production lines.",
      icon: (
        <FaSearch className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#111827] to-[#374151] hover:from-[#1f2937] hover:to-[#4b5563]", // black to gray
    },
    {
      title: "",
      description:
        "Advanced ERP system for the manufacturing industry that covers resources planning, supply of materials and operations, and inventory management.",
      icon: (
        <FaTags className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-blue-500 to-[#1e293b] hover:from-blue-500 hover:to-blue-500", // navy black to slate gray
    },
    {
      title: "",
      description:
        "Implement smart systems to supervise and manage every aspect of the supply chain starting from logistics and the purchase of goods up to the collaboration with the suppliers.",
      icon: (
        <FaPalette className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#374151] to-[#6b7280] hover:from-[#4b5563] hover:to-[#9ca3af]", // mid gray to light gray
    },
    {
      title: "",
      description:
        "New technologies, such as automated workflows, robotics, and real-time monitoring, are the means for which the efficiency of the company will be greatly improved.",
      icon: (
        <FaBullhorn className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e293b] to-[#3b82f6] hover:from-[#2563eb] hover:to-[#60a5fa]", // dark navy to bright blue
    },
    {
      title: "",
      description:
        "Enable machines, devices, and systems to gather performance data and even predict problems by allowing them to be connected seamlessly through IoT technology.",
      icon: (
        <FaUsers className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#0f172a] to-[#4b5563] hover:from-[#1e293b] hover:to-[#6b7280]", // dark slate to gray
    },
    {
      title: "",
      description:
        "Use AI & ML to open up the complete treasure of data one has and then use it for the forecasting of business, and for the purpose of cutting down on expenses.",
      icon: (
        <FaHandsHelping className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#1e3a8a] to-[#1e40af] hover:from-[#1d4ed8] hover:to-[#2563eb]", // deep to vibrant blue
    },
    {
      title: "",
      description:
        "With the aid of dashboard features, one can not only track but also manage and optimize the fleets and assets of the industry.",
      icon: (
        <FaSearch className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-[#111827] to-[#374151] hover:from-[#1f2937] hover:to-[#4b5563]", // black to gray
    },
    {
      title: "",
      description:
        "Manufacturing Cybersecurity Solutions, Secure operations, data, and networks with enterprise-grade protection.",
      icon: (
        <FaTags className="text-4xl text-white transition-transform duration-300" />
      ),
      cardBg:
        "bg-gradient-to-tr from-blue-500 to-[#1e293b] hover:from-blue-500 hover:to-blue-500", // navy black to slate gray
    },
  ];
  const servicesData = [
    {
      image: assets.manufacturing2,
      title: "IoT in Manufacturing",
      desc: "Just-in-time data sharing and prediction of maintenance.",
    },
    {
      image: assets.manufacturing3,
      title: "Artificial Intelligence (AI/ML)",
      desc: "More intelligent creation planning and quality assurance.",
    },
    {
      image: assets.manufacturing4,
      title: "Cloud Computing",
      desc: "Easily expandable storage, off-site control, and uninterrupted connection.",
    },
    {
      image: assets.manufacturing5,
      title: "Blockchain",
      desc: "Open and safe supply chain administration.",
    },
    {
      image: assets.manufacturing6,
      title: "AR/VR",
      desc: "Fascinating education and distant supervision facilities.",
    },
    {
      image: assets.manufacturing7,
      title: "Cybersecurity",
      desc: "Strong security against the industrial enemies.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Real-time Production Monitoring",
      description: "",
      image: assets.manufacturing8,
      cardBg: "bg-blue-100",
    },

    {
      title: "User-Friendly Dashboards",
      description: "",
      image: assets.manufacturing9,
      cardBg: "bg-green-100",
    },
    {
      title: "Machine & IoT Connectivity",
      description: "",
      image: assets.manufacturing10,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Predictive Analytics & Reporting",
      description: "",
      image: assets.manufacturing11,
      cardBg: "bg-pink-100",
    },
    {
      title: "Remote Diagnostics & Updates",
      description: "",
      image: assets.manufacturing12,
      cardBg: "bg-purple-100",
    },
    {
      title: "Customizable Modules",
      description: "",
      image: assets.manufacturing13,
      cardBg: "bg-red-100",
    },
  ];
  const appTypes = [
    {
      title: "ERP Software for Manufacturing",
      description: "",
      icon: <FaApple className="text-4xl text-white" aria-hidden="true" />,
    },
    {
      title: "Supply Chain Management Software",
      description: "",
      icon: <FaAndroid className="text-4xl text-white" aria-hidden="true" />,
    },
    {
      title: "IoT-Enabled Smart Factory Platforms",
      description: "",
      icon: (
        <FaVrCardboard className="text-4xl text-white" aria-hidden="true" />
      ),
    },
    {
      title: "Custom Fleet Management Solutions",
      description: "",
      icon: (
        <FaNetworkWired className="text-4xl text-white" aria-hidden="true" />
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          Manufacturing Software Solutions | Smart Factory & ERP Systems –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers advanced manufacturing software solutions. From smart factory automation to ERP, IoT, and supply chain software — we drive industrial innovation."
        />
        <meta
          name="keywords"
          content="Manufacturing Software Solutions | Smart Factory & ERP Systems – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <ShuffleHero
        heading={
          <>
            Smart Software for{" "}
            <span className="text-blue-500">
              Manufacturing and Automotive Industries
            </span>
          </>
        }
        subheading=""
        description={
          <>
            <p>
              The Manufacturing sector is undergoing significant changes due to
              the adoption of Industry 4.0, the use of robots and machines, IoT,
              and smart technologies that are changing the way of manufacturing
              and supply chains.
            </p>
            <p className="pt-5">
              Capyngen is one of the best companies that provide software
              solutions for the manufacturing industry. No matter if you are
              looking for smart factory software, ERP for the manufacturing
              industry, or industrial automation software, we make it easy to
              manage operations, cut down on expenses, and optimize output.
            </p>
          </>
        }
        buttonText="Explore Now"
        themeColor="bg-blue-500 hover:bg-blue-600"
        bgColor="bg-gray-900"
        images={heroImages}
        gridCols={4}
        gridRows={4}
        shuffleInterval={3000}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Revolutionize Your Manufacturing Processes"
        description={[
          <>
            Utilize Capyngen’s manufacturing{" "}
            <Link to={"/"}>software solutions</Link> which comprise smart
            factory software, ERP, and industrial automation software to your
            energy.
          </>,
        ]}
        buttonText="Get in touch now!"
        backgroundVideo={assets.backgroundVideo}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Top Manufacturing Software Development Company"
        description={[
          <>
            To stay competitive, manufacturers are going digital with the
            Internet of Things for manufacturing,{" "}
            <Link to={"/enterprise-solutions"}>Enterprise Resource</Link>{" "}
            Planning platforms, and{" "}
            <Link to={"/artificial-intelligence"}>AI-powered</Link> analytics.
          </>,
          "We provide custom manufacturing software solutions that energize the factories, Original Equipment Manufacturers, and supply chains with a digital solution that is digital, scalable, and future-ready at Capyngen.",
        ]}
        buttonText="Get in touch now!"
        image={assets.manufacturing1}
      />
      <CardsSection
        heading="High-End Manufacturing Software Development Services"
        subheading="We are the experts in creating intelligent, safe, and tailored
            software solutions for the manufacturing sector. Our solutions
            spread the pace of growth and innovation in the areas of factory
            floor automation and supply chain optimization."
        services={cardsSectionDifferentColorData1}
        cardBg=""
        headColor="text-white"
        sectionBg="bg-black"
        hoverBg=""
        height="h-72"
        textColor="text-white"
        hoverTextColor="transition-all"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Make Your Supply Chain & Production More Efficient"
        description={[
          "Adopt supply chain management software of the latest technology and IoT for manufacturing that will help you standardize your production process, have minimum downtime, and create maximum ROI.",
        ]}
        buttonText="Get in touch now!"
        backgroundVideo={assets.backgroundVideo}
      />
      <IndustryServices
        heading="Advanced Technology Integrations in Manufacturing Software"
        subheading="We integrate the latest innovations to future-proof your manufacturing business:"
        services={servicesData}
      />
      <CardsSectionImage
        heading="Features We Add in Manufacturing Software Solutions"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <AppTypesSection
        heading="Manufacturing Software Solutions Made Easy"
        subheading1=""
        desc="Our prebuilt and customizable solutions make your digital manufacturing journey more efficient."
        textAlign="text-center mx-auto"
        cardHeight="h-54"
        subheading2=""
        appTypes={appTypes}
      />
      <TopRatedCompany
        title="Expand the production of your manufacturing business with the help of our software solutions"
        description={[
          `Manufacturing software solutions enable businesses to automate practically everything via IoT, ERP, supply chain management, etc. We offer smart factory software, industrial automation solutions for production lines, and various other high-tech tools which ultimately lead to the lowering of expenses while increasing productivity.`,
          `Make a call to us today and take your manufacturing operations to the next level with the help of Capyngen.`,
        ]}
        image={assets.manufacturing14}
        isHidden={true}
        imageHeight="aspect-[1/1]"
        background={assets.patternBg1}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Create More Intelligent Manufacturing & Automotive Solutions"
        description={[
          "Take advantage of our automotive software and industrial automation solution designed specifically for your manufacturing to have the operations that are scalable and innovative.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default ManufacturingAutomotive;
