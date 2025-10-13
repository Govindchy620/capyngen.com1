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
import { LifeBuoy, Sparkles, Users } from "lucide-react";

import { ShoppingCart, CreditCard, Smartphone, Store } from "lucide-react";
import CardsSection from "../components/CardsSection";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaFileContract,
  FaClipboardCheck,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
  FaLock,
  FaDollarSign,
  FaBolt,
  FaSearchLocation,
  FaGlobe,
  FaUsers,
  FaTools,
  FaHeadset,
  FaServer,
  FaCloud,
  FaFileAlt,
  FaChartBar,
  FaShoppingCart,
} from "react-icons/fa";
import GetStarted from "../components/GetStarted";
import CardsSectionGrid from "../components/CardsSectionGrid";
import Banner4 from "../components/Banner4";
import IndustryServices from "../components/IndustryServices";
import TechStack from "../components/TechStack";

const BlockchainDevelopment = () => {
  const faqItems = [
    {
      question: "What is blockchain development?",
      answer:
        "Blockchain development refers to the process of designing and implementing secure and decentralized systems that store their data on distributed ledgers.",
    },
    {
      question: "Why is blockchain important for businesses?",
      answer:
        "Blockchain is important as it optimizes trust, security, and efficiency, thus helping businesses to lower expenses and raise loyalty with consumers and business partners.",
    },
    {
      question: "Does Capyngen offer custom blockchain development?",
      answer:
        "Absolutely. We offer custom-made blockchain services to the extent your business goals and requirements of the blockchain network.",
    },
    {
      question: "Can you build smart contracts?",
      answer:
        "Definitely. By our team, we develop smart contracts for different platforms, such as Ethereum, BSC, Solana, etc.",
    },
    {
      question: "Do you provide blockchain app development?",
      answer:
        "Yes, we build blockchain-based decentralized applications (DApps) that are secure, scalable, and have a user-friendly interface.",
    },
    {
      question: "Which industries can use blockchain solutions?",
      answer:
        "Blockchain is one of the new technologies that the healthcare, finance, insurance, supply chain, education, transport, retail, and so on industries can adopt.",
    },
    {
      question: "What blockchain platforms do you work with?",
      answer:
        "We use a variety of different blockchain platforms depending on the client's needs. Some of the main platforms include Ethereum, Hyperledger, Solana, Binance Smart Chain, Polkadot, Cardano, etc.",
    },
    {
      question: "Is blockchain secure for enterprises?",
      answer:
        "Yes, it is. Blockchain employs cryptography and decentralized networks that make it difficult for hackers to penetrate compared to traditional systems.",
    },
    {
      question: "How long does blockchain development take?",
      answer:
        "The period of time to develop a blockchain project depends on how detailed it is. Usually, it would take from 4 to 12 weeks for most of the projects.",
    },
    {
      question: "Do you offer blockchain consulting services?",
      answer:
        "Indeed. We provide the whole service of blockchain consulting, from planning to putting it into action, resulting in successful projects.",
    },
    {
      question: "Can Capyngen integrate blockchain into my existing systems?",
      answer:
        "Yes. We provide blockchain integration services as a seamless way to connect your existing systems securely.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes. One of the main reasons why we're among the top blockchain development companies for startups is because we're offering cost-effective solutions for all kinds of projects.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. Capyngen is the answer for all the continuous needs of maintenance, updates, and support for all blockchain solutions.",
    },
    {
      question: "Is blockchain scalable for global operations?",
      answer:
        "Yes. Blockchain can easily be scaled to handle global transactions and users with the proper architecture.",
    },
    {
      question: "How do I start my blockchain project with Capyngen?",
      answer:
        "Just fill in the form to request a free consultation. Our specialists will examine your aims and come up with a comprehensive blockchain strategy for you.",
    },
  ];
  const benefitsSection1 = [
    {
      title: "Enhanced Security & Data Protection",
      desc: "Blockchain protects data by employing complex encryption and distributed networks. In this way, the potential for breaches, fraud, and unauthorized access is minimized.",
    },
    {
      title: "Transparency & Traceability",
      desc: "Each transaction is logged on a shared ledger, so the transaction can be traced and verified with great ease. By doing so, trust among stakeholders is enhanced, and the commitment to social responsibility is ensured.",
    },
    {
      title: "Reduced Transaction Costs",
      desc: "By using blockchain to eliminate intermediaries, businesses can significantly reduce transaction fees and overhead, making operations more cost-effective.",
    },
    {
      title: "Faster Transactions & Settlements",
      desc: "Blockchain enables near-instant execution of transactions without delays caused by intermediaries. What once took days can now be completed in minutes.",
    },
    {
      title: "Decentralization & Trustless Systems",
      desc: "With no single authority controlling the network, blockchain ensures fairness and reliability. Trust is built into the system through encryption, not intermediaries.",
    },
    {
      title: "Immutable & Tamper-Proof Records",
      desc: "Once stored on the blockchain, data cannot be altered or deleted, ensuring a permanent and secure record of all transactions.",
    },
    {
      title: "Improved Supply Chain Management",
      desc: "Blockchain provides full transparency and traceability across the supply chain, reducing fraud, delays, and errors while improving efficiency.",
    },
    {
      title: "Smart Contract Automation",
      desc: "Smart contracts execute agreed actions automatically when conditions are met, reducing paperwork, errors, and manual intervention.",
    },
    {
      title: "Global Accessibility & Scalability",
      desc: "Blockchain networks are accessible worldwide and can scale to support growing user bases and business demands without centralized control.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Understanding business objectives, obstacles, and project breadth to lay down a solid base. This step guarantees that the blockchain solution fits perfectly with the organization's needs.",
    },
    {
      step: "Step 02",
      title: "Blockchain Platform Selection",
      description:
        "Picking the most fitting blockchain platform such as Ethereum, Hyperledger, or Solana. Such a choice is determined by scalability, security, transaction feasibility, and the proper use of the product.",
    },
    {
      step: "Step 03",
      title: "Design & Architecture",
      description:
        "The system scheme is designed which includes nodes, network topologies, and the type of governance model. The security and scalability that are the main features of the system are ensured by the great architecture.",
    },
    {
      step: "Step 04",
      title: "Smart Contract Development",
      description:
        "Code the business workflows and then automate with smart contracts. These contracts facilitate operations by reducing manual intervention and increasing transparency.",
    },
    {
      step: "Step 05",
      title: "Decentralized Application (DApp) Development",
      description:
        "Build easy-to-use DApps that bring actual benefits and practicality to the end-users. These applications operate on the blockchain and deliver decentralized functionality.",
    },
    {
      step: "Step 06",
      title: "Integration with Existing Systems",
      description:
        "Develop blockchain solutions that are compatible with your existing databases, ERP systems, and applications. This ensures smooth data transfer and uninterrupted operations.",
    },
    {
      step: "Step 07",
      title: "Testing & Security Audit",
      description:
        "Smart contracts are tested for functionality, performance, limitations, and security. Audits help identify flaws early, ensuring a safe and reliable environment.",
    },
    {
      step: "Step 08",
      title: "Deployment",
      description:
        "Implement the blockchain network, DApps, and smart contracts in a walk-through version. This ensures full component functionality and secure user access.",
    },
    {
      step: "Step 09",
      title: "Maintenance & Upgrades",
      description:
        "Support, updates, and scalability improvements are available round-the-clock after launch. Maintenance ensures security, efficiency, and adaptability to evolving demands.",
    },
  ];
  const slides = [
    {
      image: assets.blockchainBanner1,
      title: "Begin your blockchain transformation with our expert team.",
      subtitle:
        "Use Capyngen's dependable, clear, and scalable blockchain solutions to simplify your operations, gain customer trust, and open up new business possibilities.",
    },
    {
      image: assets.blockchainBanner2,
      title:
        "Revolutionize Your Business with Cutting-Edge Blockchain Development",
      subtitle:
        "Utilize the Capyngen blockchain technology that is reliable, transparent, and scalable to change your processes, gain customer loyalty, and open up new horizons.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Enterprise Blockchain Solutions",
      subtitle:
        "Improve security, streamline processes, and open up opportunities for large scale corporate activity.",
    },
  ];
  const servicesData = [
    {
      image: assets.blockchain2,
      title: "Smart Contract Development",
      desc: "Secure and simplify the operation of your agreements using smart contracts through our service.",
    },
    {
      image: assets.blockchain3,
      title: "Decentralized Application (DApp) Development",
      desc: "Design and develop reliable and secure applications on the blockchain platform.",
    },
    {
      image: assets.blockchain4,
      title: "Private Blockchain Solutions",
      desc: "Customized blockchain networks that are specially designed for your business internal use.",
    },
    {
      image: assets.blockchain5,
      title: "Public Blockchain Solutions",
      desc: "Utilize publicly available blockchain networks to gain the most extensive access.",
    },
    {
      image: assets.blockchain6,
      title: "Token Development (Crypto Tokens & NFTs)",
      desc: "Digitize your business through issuing tokens, digital assets, or NFTs.",
    },
    {
      image: assets.blockchain7,
      title: "Blockchain Integration with Existing Systems",
      desc: "The process of connecting the current applications with blockchain technology continues without causing any interruption.",
    },
  ];
  const techStack = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://cdn.worldvectorlogo.com/logos/ios-1.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.worldvectorlogo.com/logos/android-4.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Oracle",
          icon: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
        },
      ],
    },
    {
      title: "UI/UX",
      items: [
        {
          name: "Adobe XD",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "InVision",
          icon: "https://cdn.worldvectorlogo.com/logos/invision-1.svg",
        },
      ],
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner4 slides={slides} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Build the Future with Blockchain"
        description="Capyngen is your go-to-place for cutting-edge, secure, and scalable blockchain solutions to transform your business. Our team of specialists will assist you in innovating more rapidly and maintaining your competitive advantage in the international market."
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        reverse={true}
        title="What is Blockchain Development Technology?"
        desCcription={[
          `Blockchain development is basically building systems that are safe from hacking, have no middlemen and store data in the most honest and unbreakable way. In contrast to standard databases, the blockchain relies on transaction records from distributed ledgers, which is why it is very suitable for industries that demand trust, security, and transparency.`,
          `Capyngen offers blockchain software development and blockchain app development to help businesses build innovative digital solutions powered by smart contracts, tokens, and decentralized networks.`,
        ]}
        image={assets.blockchainDevelopmentCompany}
        background={assets.patternBg1}
        isHidden={true}
        imageHeight="aspect-[1/1]"
      />
      <TopRatedCompany
        title="Importance of Blockchain in Modern Businesses"
        description={[
          <>
            <p className="mb-3 font-semibold">
              Blockchain technology has been shaking up the whole world from one
              industry to another. Its decentralized design delivers businesses
              with:
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                {
                  text: "Improved security utilizing encryption through cryptography",
                  color: "text-blue-500",
                },
                {
                  text: "Open and verifiable logs for better trustworthiness",
                  color: "text-blue-500",
                },
                {
                  text: "Reduced operating expenses due to the elimination of intermediaries",
                  color: "text-blue-500",
                },
                {
                  text: "Quicker cross-border transactions",
                  color: "text-blue-500",
                },
                {
                  text: "Data storage that is immutable, hence tamper-proof",
                  color: "text-blue-500",
                },
                {
                  text: "Accessibility at the global level, making it possible for enterprises to grow effectively",
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
            <p>
              Capyngen’s blockchain development services are the solution for
              businesses to upgrade their processes and be the leaders of the
              digital era.
            </p>
          </>,
        ]}
        image={assets.blockchain1}
        isHidden={true}
        background={assets.patternBg1}
      />
      <IndustryServices
        heading="Blockchain Services We Offer"
        subheading="Capyngen, being the top custom blockchain development company, offers comprehensive services to both startups and enterprises:"
        cardBg="bg-gray-700"
        cardText="text-white"
        cardDescText="text-white"
        services={servicesData}
      />
      <TechStack
        heading="Transform Your Web Development and Consulting with Our Expert Tech Stack"
        subheading=""
        categories={techStack}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Schedule a Free Blockchain Consultation"
        description="Set up a meeting with our blockchain experts to learn what the best method for your business is. Capyngen is with you all the way from idea to implementation."
        buttonText="Schedule a Consulation"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="Benefits of Blockchain Solutions"
        desc="Capyngen’s blockchain solutions have the potential to impact the business in a real way:"
        benefits={benefitsSection1}
        image={assets.blockchainApplications}
        footerNote=""
      />
      <HowWeWork
        heading="How Blockchain Development Works"
        desc="Capyngen uses a well-organized development process to cater blockchain solutions which are extremely useful:"
        steps={steps}
      />
      <TopRatedCompany
        title="Why Choose Capyngen for Blockchain Development"
        description={[
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                {
                  text: "Experienced and Skilled Blockchain Developers",
                  color: "text-blue-500",
                },
                {
                  text: "Complete Solutions from Concept to Implementation",
                  color: "text-blue-500",
                },
                {
                  text: "Tailored Blockchain Strategies That Match the Unique Business of You",
                  color: "text-blue-500",
                },
                {
                  text: "Trusted and Safe Blockchain Executions",
                  color: "text-blue-500",
                },
                {
                  text: "Regular Upkeep and Problem Solving Assistance",
                  color: "text-blue-500",
                },
                {
                  text: "Industry-Leading Technology Stack and Trendy Solutions",
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
            <p>
              Capyngen is acknowledged as one of the top blockchain development
              companies for startups and enterprises. We empower companies
              worldwide to bring their blockchain-based ideas to life with our
              onshore, nearshore, and offshore delivery models.
            </p>
          </>,
        ]}
        image={assets.blockchain8}
        isHidden={true}
        background={assets.patternBg1}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Launch Your Blockchain Project"
        description="Capyngen achieves the delivery of the enterprise blockchain solutions with great speed, high security, and continuous innovation. Why don’t we create your blockchain-powered future?"
        buttonText="Launch your Project Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default BlockchainDevelopment;
