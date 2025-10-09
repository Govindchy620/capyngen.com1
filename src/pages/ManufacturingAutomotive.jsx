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
      src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 8,
      src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
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
      image: assets.bg1,
      title: "IoT in Manufacturing",
      desc: "Just-in-time data sharing and prediction of maintenance.",
    },
    {
      image: assets.bg1,
      title: "Artificial Intelligence (AI/ML)",
      desc: "More intelligent creation planning and quality assurance.",
    },
    {
      image: assets.bg1,
      title: "Cloud Computing",
      desc: "Easily expandable storage, off-site control, and uninterrupted connection.",
    },
    {
      image: assets.bg1,
      title: "Blockchain",
      desc: "Open and safe supply chain administration.",
    },
    {
      image: assets.bg1,
      title: "AR/VR",
      desc: "Fascinating education and distant supervision facilities.",
    },
    {
      image: assets.bg1,
      title: "Cybersecurity",
      desc: "Strong security against the industrial enemies.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Real-time Production Monitoring",
      description: "",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },

    {
      title: "User-Friendly Dashboards",
      description: "",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Machine & IoT Connectivity",
      description: "",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Predictive Analytics & Reporting",
      description: "",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Remote Diagnostics & Updates",
      description: "",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Customizable Modules",
      description: "",
      image: assets.appDevelopment,
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
          "Utilize Capyngen’s manufacturing software solutions which comprise smart factory software, ERP, and industrial automation software to your energy.",
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
          "To stay competitive, manufacturers are going digital with the Internet of Things for manufacturing, Enterprise Resource Planning platforms, and AI-powered analytics.",
          "We provide custom manufacturing software solutions that energize the factories, Original Equipment Manufacturers, and supply chains with a digital solution that is digital, scalable, and future-ready at Capyngen.",
        ]}
        buttonText="Get in touch now!"
        image={assets.getStarted}
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
        image={assets.whyChooseUs}
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
      <ScrollRevealEffect />
    </div>
  );
};

export default ManufacturingAutomotive;
