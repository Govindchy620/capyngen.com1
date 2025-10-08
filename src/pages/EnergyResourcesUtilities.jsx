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

const EnergyResourcesUtilities = () => {
  const faqItems = [
    {
      question: "What are banking software development services?",
      answer:
        "EnergyResourcesUtilities software development services involve multiple activities such as creating, constructing, and rolling out software solutions for banks which include core banking systems, mobile applications, payment gateways, customer relationship management, security systems, and digital transformation initiatives customized to banking requirements.",
    },
    {
      question:
        "Why is Capyngen the best banking software development company in India?",
      answer:
        "Capyngen stands out from the crowd by combining deep banking domain expertise, a successful track record with major financial institutions, state-of-the-art technology, a security-first approach, sound regulatory knowledge, and delivering tangible outcomes that make us a bank's trusted partner.",
    },
    {
      question: "What are core banking solutions?",
      answer:
        "Core banking solutions refer to software platforms that cover the whole range of banking operations such as account management, deposits, loans, and transactions. So, customer data and all the banking processes integration through the unified system enable centralized operations across branches.",
    },
    {
      question: "How secure are your banking applications?",
      answer:
        "The secure banking applications we develop go through top-notch security measures such as multi-factor authentication, encryption from end to end, biometric confirmation, fraud detection, regular security audits, compliance with PCI DSS, and RBI standards altogether that ensure the highest possible protection.",
    },
    {
      question: "Do you develop mobile banking software?",
      answer:
        "We definitely do! We are experts in mobile banking software development for both iOS and Android platforms by using native as well as cross-platform technologies. Our apps come with the following qualities: they have user-friendly interfaces, are well protected, have practically all the features you may need, and can easily correspond to the core banking systems.",
    },
    {
      question: "What is blockchain in banking, and how do you implement it?",
      answer:
        "The application of blockchain in banking allows for the provision of a ledger that is available to all involved parties, shows the history of the transaction, guarantees data security, and cyber-attack resistance. The team relies on implementing bank and finance-related blockchain projects using platforms like Hyperledger and Ethereum.",
    },
    {
      question: "How long does banking software development take?",
      answer:
        "Timeframes depend on the breadth of the project. The making of a mobile app with simple functions takes 3-4 months, whereas the building of a comprehensive core banking system may consume 8-12 months. We do our best: during planning, we lay out detailed milestones with respect to timeliness according to your particular wishes and difficulty.",
    },
    {
      question: "What is the cost of banking software development?",
      answer:
        "The amount spent is a function of the required features, complexity, technology used, integration needs, and support. We provide flexible working modes including fixed-price initiatives, time and material, and dedicated teams. Please get in touch with us if you want a tailored quote.",
    },
    {
      question: "Can you integrate with our existing banking systems?",
      answer:
        "Yes, sure! Our banking IT services comprise compatibility procedures with older systems that do not support new technologies, other software that is used by your bank, gateways that enable various payment methods, platforms that help banks comply with regulations and services that are outside your bank and accessed via APIs, middleware, and verified integration patterns that result in minimum disruption.",
    },
    {
      question: "Do you provide FinTech app development for startups?",
      answer:
        "Certainly! Our FinTech app development service targets new businesses, and the products we develop include digital wallets, lending platforms, investment apps, payment solutions, and other financial services that are innovative. We understand startups' needs for quick development, scalability and affordable prices.",
    },
    {
      question: "How do you ensure regulatory compliance?",
      answer:
        "We follow the guidelines of RBI, PCI DSS, GDPR, AML/KYC requirements and other international standards. Our digital solutions are equipped with compliance as a default function, for example, they have automatic reporting and audit trails.",
    },
    {
      question: "What technologies do you use for banking software?",
      answer:
        "We opt for a full tech stack that includes Java, .NET, Python for development, Oracle, MySQL, MongoDB for databases, AWS, Azure for cloud, AI/ML for intelligence, blockchain for security, and latest frameworks to make sure that we provide modern and scalable solutions.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Of course! Our services are very inclusive of a wide range of needs such as 24/7 monitoring, bug fixing, security updates, performance optimization, feature enhancement, and technical assistance all of which ensure that your banking software solutions are running smoothly and continue to evolve with the market trends and your requirements.",
    },
    {
      question:
        "Can you help with digital transformation for traditional banks?",
      answer:
        "Indeed! Our digital banking solutions and consulting services facilitate modernizing the outdated systems in traditional banks, adopting cloud technologies, implementing AI, leveraging blockchain, and revolutionizing customer experiences thus making them ready for a digital-first future.",
    },
    {
      question:
        "What makes your custom banking app development services unique?",
      answer:
        "Custom banking app development at our hands is the combination of banking domain expertise, user-centric design, most advanced technology, strong security, regulatory compliance, smooth integration capabilities, and proven delivery methods leading to solutions that are the real difference of your institution.",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Specialized EnergyResourcesUtilities Solutions",
      desc: "Of course, every financial institution is different in terms of necessities, processes, and objectives. Our custom banking application development services are yours alone so that your firm can implement the most suitable remedies to your workflow processes, customer demands, and strategic aspirations without having to adapt.",
    },
    {
      image: assets.bg1,
      title: "Security & Compliance First",
      desc: "Actually, banking is a security-oriented industry. Our practice includes multi-factor authentications, end-to-end encryptions, secure APIs, and the like, strictly following the top global security standards. Our products and service offerings comply with RBI guidelines, PCI DSS standards, GDPR, ISO 27001, and other regulatory frameworks, ensuring complete compliance and data protection.",
    },
    {
      image: assets.bg1,
      title: "Scalability & Performance",
      desc: "The structure of our banking software development projects ensures seamless scalability. Our systems maintain consistent performance across distributed environments—whether serving a few thousand or a few million customers—without compromising speed or reliability.",
    },
    {
      image: assets.bg1,
      title: "Innovative Technology Incorporation",
      desc: "We employ advanced technologies like AI for fraud detection, blockchain for financial transparency and security, cloud computing for easy accessibility, big data for actionable insights, and IoT to deliver next-generation banking services that keep you ahead of the competition.",
    },
    {
      image: assets.bg1,
      title: "Seamless Integration Abilities",
      desc: "Our banking products coexist harmoniously with your existing infrastructure, including legacy systems, third-party software, payment gateways, and regulatory reporting tools—ensuring smooth integration and uninterrupted operations.",
    },
    {
      image: assets.bg1,
      title: "Proven Track Record",
      desc: "As one of the top banking software development companies in India, we’ve successfully delivered transformative digital solutions to leading financial institutions—helping them overcome operational challenges and achieve measurable growth.",
    },
  ];
  const servicesData1 = [
    {
      image: assets.bg1,
      title: "Retail Banks",
      desc: "Comprehensive software solutions designed to streamline the daily operations of retail banks — including account management, deposits, loans, cards, and customer service. Our systems ensure smooth, secure, and personalized banking experiences for individual customers.",
    },
    {
      image: assets.bg1,
      title: "Corporate Banks",
      desc: "Robust enterprise banking platforms built to manage complex corporate relationships, trade finance, treasury operations, and cash management. Empower your business clients with tailored tools that support large-scale, high-value financial activities efficiently.",
    },
    {
      image: assets.bg1,
      title: "Investment Banks",
      desc: "Advanced trading platforms, portfolio management systems, risk analytics, and regulatory reporting tools — all integrated to support effective investment operations and wealth management with precision and compliance.",
    },
    {
      image: assets.bg1,
      title: "Microfinance Institutions",
      desc: "Purpose-built software that streamlines microfinance operations, including group lending, repayment tracking, mobile-first interfaces, and on-field support — enabling institutions to reach underserved communities efficiently and securely.",
    },
    {
      image: assets.bg1,
      title: "FinTech Startups",
      desc: "Next-generation fintech development for digital wallets, peer-to-peer lending platforms, robo-advisors, cryptocurrency exchanges, and disruptive financial applications that leverage the latest technologies for innovation and growth.",
    },
    {
      image: assets.bg1,
      title: "Payment Service Providers",
      desc: "End-to-end payment infrastructure covering payment gateway development, transaction processing platforms, merchant services, settlement systems, and aggregation solutions — creating open, fast, and reliable payment ecosystems.",
    },
  ];

  const typesData = [
    {
      icon: <FaCogs />,
      title: "Operational Efficiency Improved",
      desc: "Automate manual processes, streamline workflows, reduce processing time, and eliminate human errors. By optimizing resource utilization, your staff can focus on high-value, customer-centric tasks rather than repetitive operations.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Transactions that are Secure and Compliant",
      desc: "Enterprise-grade security ensures the protection of sensitive financial data, customer information, and transaction integrity. Our systems fully comply with RBI, PCI DSS, GDPR, and other global regulatory frameworks—minimizing risk and maintaining trust.",
    },
    {
      icon: <FaUsers />,
      title: "Customer Engagement Improved",
      desc: "Deliver personalized and omnichannel banking experiences with AI-driven assistance, proactive communication, and seamless self-service options. Enhance customer satisfaction, loyalty, retention, and lifetime value through intelligent digital interactions.",
    },
    {
      icon: <FaChartLine />,
      title: "Lowered Operational Costs",
      desc: "Leverage cloud infrastructure, automation, and optimized resource allocation to minimize manual effort and reduce operating expenses—while maintaining high-quality, reliable, and efficient banking services.",
    },
    {
      icon: <FaChartPie />,
      title: "Real-Time Analytics and Reporting",
      desc: "Access actionable insights on customer behavior, detect fraud in real time, fulfill regulatory reporting requirements, and support data-driven strategic decisions with intelligent, real-time analytics dashboards.",
    },
    {
      icon: <FaExpand />,
      title: "Expandability for Future Development",
      desc: "Future-ready, scalable systems designed to grow with your institution—capable of handling increasing customers, transactions, and data volumes without compromising performance, reliability, or security.",
    },
  ];
  const panels = [
    {
      image: assets.gallery1,
      title:
        "Breakthrough the EnergyResourcesUtilities with Future-type Software Solutions",
      desc: "A bank of the future that accepts and incorporates technology as much as it innovates customer experience within the banking space.",
    },
    {
      image: assets.gallery2,
      title: "Panel 2",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.gallery3,
      title: "Panel 3",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.gallery4,
      title: "SEO Speed Up Website",
      desc: "Digital Art • Illustrations",
    },
    {
      image: assets.blog3,
      title: "Panel 5",
      desc: "Digital Art • Illustrations",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Core EnergyResourcesUtilities Development Software",
      description:
        "Comprehensive and fully integrated core banking systems that enable smooth operation of accounts, deposits, loans, and transactions — all on a single unified platform.",
      icon: <FaDatabase className="text-4xl text-white" />,
    },
    {
      title: "Cell Phone & Internet EnergyResourcesUtilities Solutions",
      description:
        "Natively built and cross-platform mobile banking applications for iOS and Android, offering intuitive and secure user interfaces that enhance accessibility and convenience.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Payment Gateway & Transaction Solutions",
      description:
        "Robust payment systems that ensure timely and secure settlements, capable of handling high transaction volumes with accuracy, reliability, and uninterrupted performance.",
      icon: <FaCreditCard className="text-4xl text-white" />,
    },
    {
      title: "EnergyResourcesUtilities CRM & Customer Experience Solutions",
      description:
        "A unified customer engagement and transaction platform providing complete interaction history, intelligent analytics, and personalized dashboards for improved customer satisfaction.",
      icon: <FaUsers className="text-4xl text-white" />,
    },
    {
      title: "FinTech & Digital Transformation Advisory",
      description:
        "Strategic consulting and implementation for digital banking initiatives — including modernization, process automation, technology enhancement, and innovation-driven transformation.",
      icon: <FaLightbulb className="text-4xl text-white" />,
    },
    {
      title: "Security & Compliance Management",
      description:
        "End-to-end security frameworks designed for every system layer, ensuring full compliance with RBI, PCI DSS, GDPR, ISO, and other international data protection standards.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Programming Languages",
      description:
        "Java for enterprise-level scalability, .NET for seamless integration within the Microsoft ecosystem, Python for AI and machine learning capabilities, C++ for high-transaction processing, and Kotlin for developing modern Android banking applications.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Databases & Storage",
      description:
        "Oracle for core banking operations, MySQL for web-based services, MongoDB for flexible and adaptive data models, PostgreSQL for advanced database functionalities, and Redis for caching and real-time computations.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Frameworks & Libraries",
      description:
        "Spring Boot for building microservices architectures, Angular for dynamic web interfaces, React for responsive and interactive user experiences, Node.js for scalable backend development, and Flutter for creating cross-platform mobile applications.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cloud Platforms",
      description:
        "AWS for comprehensive cloud services, Azure for Microsoft-based environments, Google Cloud for AI and ML-driven solutions, IBM Cloud for enterprise-grade banking infrastructure, along with hybrid and multi-cloud deployment support.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Security Technologies",
      description:
        "Multi-factor authentication (MFA), end-to-end encryption, tokenization, biometric verification, blockchain for immutable transactions, SSL/TLS protocols, secure APIs, intrusion detection systems, and SIEM platforms for robust, multi-layered protection.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Analytics & AI",
      description:
        "Machine learning for fraud detection, predictive analytics for customer behavior forecasting, natural language processing for intelligent chatbots, big data platforms for deep insights, real-time dashboards, and business intelligence tools for data-driven decision-making.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
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
        title=""
        description={[
          "Contact me for no charge consultation. EnergyResourcesUtilities Innovations for Secure, Scalable, and Creative Technical Solutions From India's Leading Partner in EnergyResourcesUtilities Software!",
        ]}
        textSize="text-2xl"
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Industry Has Lastly Managed To Go The Tech Road"
        description={[
          `The financial sector is fast moving whereby banks and financial institutions should partner tech firms that are not only tech savvy but also well conversant with the industry-specific challenges so as to provide the right solutions. Capyngen is a top bank software development company in India, which is always on the front line, coming up with secure, scalable, and innovative bank software solutions that not only radically transform the way financial institutions work but also are adaptive to customer needs.`,
          `We have considerable experience in effectively providing banking industry solutions that include the retail and commercial business sectors along with corporate as well as investment banking and microfinance and fintech startups. We have a comprehensive array of banking software development services that include core banking solutions, mobile banking software, digital payment systems along with FinTech app development that can realize operation efficiency, customer satisfaction, and regulatory compliance.`,
        ]}
        imageHeight="md:aspect-[1/1]"
        image={assets.whyChooseUs}
        isHidden={true}
        background={assets.patternBg1}
      />
      <IndustryServices
        heading="Why Top Banks Rely on Capyngen"
        subheading=""
        services={servicesData}
      />
      <CardsSection
        heading="EnergyResourcesUtilities Software Solutions Development"
        subheading=""
        services={cardsSectionData1}
        headColor="text-white"
        cardBg="bg-gradient-to-br from-gray-900 to-blue-800"
        textSize="text-md"
        sectionBg="bg-gray-900"
        hoverBg="hover:from-indigo-800 hover:via-gray-800 hover:to-blue-900 hover:scale-105"
        textColor="text-white"
        hoverTextColor=""
      />
      <CardsSectionImage
        heading="New-age Tech Stack to Serve EnergyResourcesUtilities Excellence"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title=""
        description={[
          "Want to Totally Change Your EnergyResourcesUtilities Experience? Make an Appointment for a Free Demonstration & Find Out for Yourself How Capyngens EnergyResourcesUtilities Software Solutions Can Make Security, Efficiency, and Customer Satisfaction Grow!",
        ]}
        textSize="text-2xl"
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Making Banks Digitally Fit"
        subheading=""
        buttonText="Let's Contact"
        image="https://via.placeholder.com/300x550.png" // replace with actual phone image
        types={typesData}
      />
      <IndustryServices
        heading="Serving All EnergyResourcesUtilities & Financial Sectors"
        subheading=""
        services={servicesData1}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title=""
        description={[
          "Why Not Work with Us to Create the Future of EnergyResourcesUtilities – Contact Capyngen Today for Custom EnergyResourcesUtilities Software Development Services & Groundbreaking FinTech Solutions That Help You Get Ahead!",
        ]}
        textSize="text-2xl"
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default EnergyResourcesUtilities;
