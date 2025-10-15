import React from "react";
import { assets } from "../assets/assets";
import Banner4 from "../components/Banner4";
import CardsSectionImage from "../components/CardsSectionImage";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import GetStarted from "../components/GetStarted";
import IndustryServices from "../components/IndustryServices";
import {
  FaSearch,
  FaExpand,
  FaShieldAlt,
  FaPlug,
  FaUniversalAccess,
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaLock,
  FaRobot,
  FaBalanceScale,
  FaHandsHelping,
  FaUserCog,
  FaMicrochip,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import HowWeWork from "../components/HowWeWork";
import TopRatedCompany from "../components/TopRatedCompany";
import BenefitsSection from "../components/BenefitsSection";
import { Helmet } from "react-helmet-async";

const Insurance = () => {
  const slides = [
    {
      image: assets.blockchainBanner1,
      title: "InsurTech Solutions for the Digital Age",
      subtitle:
        "Redesign the functions of underwriting, claims, and customer service with the help of next-gen insurance software.",
    },
    {
      image: assets.blockchainBanner2,
      title: "Powering Insurance Transformation",
      subtitle:
        "Implement AI, analytics, and automation for simpler processes and higher customer trust.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Secure, Smart & Scalable Insurance Platforms",
      subtitle:
        "Develop measurement systems that use data to offer better insurance coverage and faster services.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Cellular Insurance Apps",
      description:
        "Design insurance mobile apps for iOS and Android that will process basic activities such as policy delivery, claim registration, and fraud detection automatically.",
      image: assets.insurance2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Policy Management System",
      description:
        "For policy management software, we develop the kind that will fully automate the whole policy lifecycle from creation through renewal while remaining accurate, compliant, and scalable software.",
      image: assets.insurance3,
      cardBg: "bg-green-100",
    },
    {
      title: "Claims Management System",
      description:
        "The right step is to develop a highly technologically sophisticated claims management system through which all such operations such as submission of claims, checking thereof, identification of frauds/wrong claims, if any, and payment thereof are conducted speedily and conveniently.",
      image: assets.insurance4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Insurance CRM Solutions",
      description:
        "The installation of a tailored CRM for the benefit of the insurers is the key to a successful customer relationship management system as it enables the offering of personalized services, customer tracking, and the use of integrated help panels.",
      image: assets.insurance5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Health & Life Insurance Software",
      description:
        "Capyngen provides life insurance software and health insurance software featuring robust reporting along with analytics powered by artificial intelligence and integration.",
      image: assets.insurance6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Insurance ERP Development",
      description:
        "Insurance ERP software is the easiest way to consolidate all the activities of the company that involves engaging agents, customers, policyholders, and regulatory compliance.",
      image: assets.insurance7,
      cardBg: "bg-red-100",
    },
  ];
  const faqItems = [
    {
      question: "What type of insurance software solutions do you provide?",
      answer:
        "Our work ranges from custom insurance apps, CRM systems, claims management platforms, and policy management portals to anything else that is necessary for the insurance sector.",
    },
    {
      question: "Can you develop a digital platform for policy management?",
      answer:
        "Definitely. We craft platforms that allow users to purchase, renew, and monitor their policies with ease and security.",
    },
    {
      question: "Do you provide insurance mobile app development?",
      answer:
        "Of course, we create iOS and Android apps for life, health, auto, and general insurance companies.",
    },
    {
      question: "Can you build AI-powered claim settlement systems?",
      answer:
        "Yes, our AI-driven solutions automate the claims process and help in detecting and minimizing fraudulent activities.",
    },
    {
      question: "Do you create customer self-service portals?",
      answer:
        "Yes, we develop self-service portals where policyholders can purchase policies, renew them, and register claims effortlessly.",
    },
    {
      question: "Can you integrate chatbots into insurance apps?",
      answer:
        "Yes, we embed AI chatbots for instant customer support, claim assistance, and personalized policy recommendations.",
    },
    {
      question: "Do you provide solutions for health insurance companies?",
      answer:
        "Yes, we design apps and portals for health insurance companies featuring claim tracking, policy management, and telemedicine integration.",
    },
    {
      question: "Can you develop auto insurance apps with telematics?",
      answer:
        "Yes, our auto insurance apps incorporate telematics that enable usage-based insurance models and real-time tracking.",
    },
    {
      question: "Do you offer solutions for life insurance companies?",
      answer:
        "Yes, we provide platforms for life insurance companies with premium calculators, reminders, and policy management tools.",
    },
    {
      question: "Can your software reduce claim processing time?",
      answer:
        "Through AI automation and digital workflows, our software significantly accelerates claim settlement processes.",
    },
    {
      question: "Do you provide cloud-based insurance solutions?",
      answer:
        "Yes, we deploy cloud-based insurance platforms that are scalable, secure, and ensure uninterrupted service availability.",
    },
    {
      question: "Can your insurance solutions help reduce fraud?",
      answer:
        "Yes, we leverage AI and data analytics to detect fraudulent claims and uncover suspicious activity patterns.",
    },
    {
      question: "Do you integrate payment gateways for insurance premiums?",
      answer:
        "Yes, we integrate secure payment gateways supporting cards, UPI, wallets, and net banking for smooth premium transactions.",
    },
    {
      question:
        "Can your platforms integrate with third-party systems like hospitals or vehicle databases?",
      answer:
        "Yes, we build APIs that enable seamless integration with external systems for faster data verification and claim validation.",
    },
    {
      question: "Do you offer ongoing support for insurance applications?",
      answer:
        "Yes, we provide complete lifecycle support, including development, maintenance, updates, and continuous monitoring.",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Robotic Process Automation (RPA)",
      desc: "Automate routine insurance processes to significantly reduce manual workloads involved in claims processing, renewals, and compliance tasks.",
    },
    {
      image: assets.bg1,
      title: "AI Chatbot Integration",
      desc: "Deploy intelligent assistants to provide 24/7 customer support, instantly resolving policy, claim, and inquiry issues while enhancing user satisfaction.",
    },
    {
      image: assets.bg1,
      title: "Blockchain in Insurance",
      desc: "Implement blockchain-based solutions for fraud prevention, secure policy validation, and tamper-proof smart contracts across insurance workflows.",
    },
    {
      image: assets.bg1,
      title: "Cloud Integration",
      desc: "Enable secure, scalable, and cost-efficient deployment of insurance software through seamless cloud infrastructure integration and maintenance.",
    },
    {
      image: assets.bg1,
      title: "Web3 & InsurTech Solutions",
      desc: "Leverage decentralized technologies to create next-generation, user-owned insurance platforms with transparent operations and digital asset support.",
    },
    {
      image: assets.bg1,
      title: "Predictive Analytics for Risk Assessment",
      desc: "Use advanced data analytics and machine learning models to predict customer behavior, assess risk, and optimize underwriting accuracy and pricing.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Customer-Specific Solutions",
      description:
        "Our insurance application development solutions are carefully crafted to meet your organization’s unique business and operational needs.",
      icon: <FaUserCog className="text-4xl text-white" />,
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We build future-ready insurance software empowered with AI, RPA, blockchain, and cloud innovations for maximum efficiency and scalability.",
      icon: <FaMicrochip className="text-4xl text-white" />,
    },
    {
      title: "Robust Security",
      description:
        "Implementing multi-factor authentication, advanced data encryption, and full compliance with insurance data protection standards.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
    {
      title: "Trusted Experience",
      description:
        "With over 15 years of experience in insurance and financial software development, we deliver solutions trusted worldwide.",
      icon: <FaHandshake className="text-4xl text-white" />,
    },
    {
      title: "Support 24/7",
      description:
        "Continuous technical support, maintenance, and updates to ensure your application’s uninterrupted performance and reliability.",
      icon: <FaHeadset className="text-4xl text-white" />,
    },
    {
      title: "Regulatory Compliance Expertise",
      description:
        "Our systems are developed in line with industry regulations, ensuring compliance with standards like GDPR, HIPAA, and ISO 27001.",
      icon: <FaBalanceScale className="text-4xl text-white" />,
    },
  ];
  const solutionsData = [
    {
      title: "Insurance App Consultation",
      desc: "360-degree consultation for policy management, claims processing, and digital insurance workflow optimization.",
    },
    {
      title: "Custom Insurance Software Solutions",
      desc: "Fully managed software solutions covering claims, policy administration, and customer relationship management systems.",
    },
    {
      title: "Digital Transformation for Insurance Companies",
      desc: "Empowering insurers to move beyond traditional data processing with next-generation InsurTech-driven digital ecosystems.",
    },
    {
      title: "Mobile Insurance Development",
      desc: "Develop secure, scalable, and user-friendly mobile insurance applications with a focus on data protection and reliability.",
    },
    {
      title: "Blockchain Integration",
      desc: "Integrate blockchain to enable transparent, tamper-proof, and trusted insurance transactions and smart contracts.",
    },
    {
      title: "Regulatory Compliance Solutions",
      desc: "Ensure full compliance with AML, KYC, HIPAA, GDPR, and other regulatory standards for global insurance operations.",
    },
    {
      title: "Business Intelligence Integration",
      desc: "Execute real-time data visualization, analytics, and reporting to enhance strategic decision-making and efficiency.",
    },
    {
      title: "Cybersecurity Solutions",
      desc: "Protect insurance data storage and transmission from vulnerabilities through multi-layered cybersecurity frameworks.",
    },
    {
      title: "Insurance CRM System",
      desc: "Deliver easy-to-use, interactive CRM systems with personalized dashboards for agents, brokers, and customers.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for Insurance Industry | Best Digital & Software Services
        </title>
        <meta
          name="description"
          content="Capyngen provides innovative IT solutions for the insurance industry. We build custom software and digital platforms to automate, secure, and grow your business."
        />
        <meta
          name="keywords"
          content="IT Solutions for Insurance Industry | Best Digital & Software Services"
        />
      </Helmet>
      <Banner4 slides={slides} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Book a meeting with our CPG tech experts, it will be a great opportunity to start digitalizing your business."
        description={[
          "Utilize Capyngen’s innovative IT solutions for CPG distribution to revolutionize your supply chain — tailored to simplify logistics, elevate productivity, and expand your market presence.",
        ]}
        buttonText="Book Now!"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        reverse={false}
        title="Trusted Insurance Software Development Services for Insurers"
        description={[
          "Transform your insurance company's fate with IT solutions for the insurance industry, Capyngen's cutting-edge software development services. We create customized policy admin solutions, claim management systems along with InsurTech applications that fundamentally change the process of digital Solution for insurance companies. The digital transformation process that is the latest one consists of safety, automated activities along with effortless interaction with the customer, which align with our insurance app development services.",
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
        isHidden="hidden"
      />
      <CardsSectionImage
        heading="Insurance Software Development Experience"
        subheading="We are an insurance software development team fully dedicated to building the right, scalable, and secure solutions for all situations, in general, and all types of industries."
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <IndustryServices
        heading="Latest Technology We Implement"
        subheading="Today, we are blending the best IT solutions for insurance industry cutting-edge and advanced technology with time-tested insurance software services that are most dependable, hence coming out with successful applications that have such qualities as speed, precision, and revolutionary."
        services={servicesData}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Future of IT solutions for insurance industry"
        description={[
          "Insurance technology solutions (InsurTech), artificial-intelligence-driven claims processing, and digital policy platforms are the future of the insurance industry. With Capyngen in simple terms, it's incredibly simple and fast to execute the process of completely overhauling the outdated systems, uplifting customer interaction, and merging cloud insurance platforms.",
        ]}
        image={assets.getStarted}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Introduce Smart Tech to Your CPG Distribution Network to Lift It Up"
        description={[
          "Why not work together now on creating a smart and connected network that will be the engine of your growth and will please your customers?",
        ]}
        buttonText="Contact Our Experts for a Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <CardsSection
        heading="Why Capygen for Insurance Software Development?"
        subheading=""
        services={cardsSectionData1}
        sectionBg="bg-gray-900"
        cardBg="border-2 border-white shadow-2xl shadow-gray-800"
        hoverBg=""
        height="h-64"
        textColor="text-white"
        hoverTextColor=""
        headColor="text-white"
      />
      <BenefitsSection
        heading="Insurance Software Solutions Development Services"
        desc="We are open-to-close insurance software development providers to attain precision, creativity, and customer satisfaction in the insurance sector."
        image={assets.eCommerceSolution}
        benefits={solutionsData}
        footerNote=""
      />
      <TopRatedCompany
        reverse={false}
        title="Life Application Insurance Health Insurance Program"
        description={[
          "Take Advantage of the Unique and Exceptional Software development For insurance companiesCapyngen is one of India's foremost providers of insurtech that offers you sustainable, flexible and user-friendly solutions. We specialize in policy management software, claims management systems and developing proprietary insurance apps. That not only enables us to offer you highly scalable solutions but highly secure ones as well. Schedule your free consultation today",
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
        imageHeight="aspect-[4/3]"
        isHidden="hidden"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Request Your Free Demo & Strategy Session Right Now"
        description={[
          "Work closely with us to build the brand’s future-proof systems that are adaptable and scalable for long-term benefits.",
        ]}
        buttonText="Request Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default Insurance;
