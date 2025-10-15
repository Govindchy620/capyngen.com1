import React from "react";
import Banner4 from "../components/Banner4";
import ExpandableGallery from "../components/ExpandableGallery";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import IndustryServices from "../components/IndustryServices";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import TechStack from "../components/TechStack";
import BenefitsSection from "../components/BenefitsSection";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import { assets } from "../assets/assets";
import {
  FaShieldAlt,
  FaCogs,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaExpand,
  FaDatabase,
  FaMobileAlt,
  FaCreditCard,
  FaUsers as FaUsersIcon,
} from "react-icons/fa";

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
        "Blockchain optimizes trust, security, and efficiency, helping businesses lower expenses and raise loyalty with consumers and partners.",
    },
    {
      question: "Does Capyngen offer custom blockchain development?",
      answer:
        "Absolutely. We offer custom blockchain services tailored to your business goals and blockchain network requirements.",
    },
    {
      question: "Can you build smart contracts?",
      answer:
        "Yes, our team develops smart contracts for platforms like Ethereum, BSC, Solana, etc.",
    },
    {
      question: "Do you provide blockchain app development?",
      answer:
        "Yes, we build secure, scalable, and user-friendly blockchain-based decentralized applications (DApps).",
    },
    {
      question: "Which industries can use blockchain solutions?",
      answer:
        "Industries like healthcare, finance, insurance, supply chain, education, transport, and retail can benefit from blockchain.",
    },
    {
      question: "What blockchain platforms do you work with?",
      answer:
        "We use Ethereum, Hyperledger, Solana, Binance Smart Chain, Polkadot, Cardano, and others based on client needs.",
    },
    {
      question: "Is blockchain secure for enterprises?",
      answer:
        "Yes. Blockchain uses cryptography and decentralized networks that are more resistant to hacking than traditional systems.",
    },
    {
      question: "How long does blockchain development take?",
      answer: "Typically 4 to 12 weeks depending on the project complexity.",
    },
    {
      question: "Do you offer blockchain consulting services?",
      answer:
        "Yes, we provide full-service blockchain consulting from planning to implementation.",
    },
    {
      question: "Can Capyngen integrate blockchain into my existing systems?",
      answer: "Yes, we offer seamless integration with your existing systems.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we provide cost-effective blockchain solutions suitable for startups.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, including maintenance, updates, and ongoing support.",
    },
    {
      question: "Is blockchain scalable for global operations?",
      answer:
        "Yes, with proper architecture blockchain can support global scale transactions and users.",
    },
    {
      question: "How do I start my blockchain project with Capyngen?",
      answer:
        "Request a free consultation and our specialists will tailor a comprehensive blockchain strategy for you.",
    },
  ];

  const benefitsSection1 = [
    {
      title: "Enhanced Security & Data Protection",
      desc: "Blockchain minimizes breaches, fraud, and unauthorized access using complex encryption and distributed networks.",
    },
    {
      title: "Transparency & Traceability",
      desc: "Shared ledger logs enable easy transaction verification improving trust among stakeholders.",
    },
    {
      title: "Reduced Transaction Costs",
      desc: "Eliminating intermediaries lowers fees and overhead for cost-effective operations.",
    },
    {
      title: "Faster Transactions & Settlements",
      desc: "Blockchain enables near-instant execution reducing delays caused by middlemen.",
    },
    {
      title: "Decentralization & Trustless Systems",
      desc: "No single authority controls the network; trust is built by encryption.",
    },
    {
      title: "Immutable & Tamper-Proof Records",
      desc: "Data once stored cannot be altered or deleted ensuring permanent records.",
    },
    {
      title: "Improved Supply Chain Management",
      desc: "Full transparency reduces fraud, delays, and errors across supply chains.",
    },
    {
      title: "Smart Contract Automation",
      desc: "Automated execution of contracts reduces paperwork and manual errors.",
    },
    {
      title: "Global Accessibility & Scalability",
      desc: "Accessible worldwide, scalable to growing user bases and demands.",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Understand business needs and project scope to ensure perfect fit.",
    },
    {
      step: "Step 02",
      title: "Blockchain Platform Selection",
      description:
        "Choose appropriate platform based on scalability, security, and use case.",
    },
    {
      step: "Step 03",
      title: "Design & Architecture",
      description:
        "Design nodes, network topology, governance model ensuring security and scalability.",
    },
    {
      step: "Step 04",
      title: "Smart Contract Development",
      description:
        "Develop business workflows and automate via smart contracts.",
    },
    {
      step: "Step 05",
      title: "Decentralized Application (DApp) Development",
      description:
        "Create user-friendly DApps delivering decentralized functionalities.",
    },
    {
      step: "Step 06",
      title: "Integration with Existing Systems",
      description:
        "Ensure compatibility with existing databases, ERPs and apps.",
    },
    {
      step: "Step 07",
      title: "Testing & Security Audit",
      description:
        "Test functionality and perform audits to identify and fix vulnerabilities.",
    },
    {
      step: "Step 08",
      title: "Deployment",
      description: "Implement all components with secure user access.",
    },
    {
      step: "Step 09",
      title: "Maintenance & Upgrades",
      description:
        "Provide ongoing support, updates, and scalability improvements.",
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
      desc: "Secure and simplify the operation of your agreements using smart contracts.",
    },
    {
      image: assets.blockchain3,
      title: "Decentralized Application (DApp) Development",
      desc: "Design and develop reliable and secure blockchain applications.",
    },
    {
      image: assets.blockchain4,
      title: "Private Blockchain Solutions",
      desc: "Customized blockchain networks designed for internal business use.",
    },
    {
      image: assets.blockchain5,
      title: "Public Blockchain Solutions",
      desc: "Utilize publicly available blockchain networks for extensive access.",
    },
    {
      image: assets.blockchain6,
      title: "Token Development (Crypto Tokens & NFTs)",
      desc: "Digitize your business through token, digital assets, or NFT issuance.",
    },
    {
      image: assets.blockchain7,
      title: "Blockchain Integration with Existing Systems",
      desc: "Seamless connection of existing applications with blockchain technology.",
    },
  ];

  const techStack = [
    {
      title: "Blockchain Platforms",
      items: [
        {
          name: "Ethereum",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg",
        },
        {
          name: "Solana",
          icon: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
        },
        {
          name: "Polygon",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Polygon_Icon.svg/504px-Polygon_Icon.svg.png",
        },
        {
          name: "Binance Smart Chain",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/BNB%2C_native_cryptocurrency_for_the_Binance_Smart_Chain.svg/1024px-BNB%2C_native_cryptocurrency_for_the_Binance_Smart_Chain.svg.png?20220816165226",
        },
        {
          name: "Polkadot",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Polkadot_Logo.png/1597px-Polkadot_Logo.png?20220602143035",
        },
      ],
    },
    {
      title: "Smart Contract Languages",
      items: [
        {
          name: "Solidity",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Solidity_logo.svg",
        },
        {
          name: "Rust",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        },
        {
          name: "Move",
          icon: "https://avatars.githubusercontent.com/u/105913937?s=200&v=4",
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Next.js",
          icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
          name: "Vue.js",
          icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
          name: "Python",
          icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        },
        {
          name: "Go",
          icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
        },
      ],
    },
    {
      title: "Blockchain Tools",
      items: [
        {
          name: "Hardhat",
          icon: "https://avatars.githubusercontent.com/u/73118775?s=200&v=4",
        },
        {
          name: "Truffle",
          icon: "https://avatars.githubusercontent.com/u/23352888?s=200&v=4",
        },
        {
          name: "Ganache",
          icon: "https://avatars.githubusercontent.com/u/22558608?s=200&v=4",
        },
        {
          name: "MetaMask",
          icon: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
        },
        {
          name: "Web3.js",
          icon: "https://docs.web3js.org/img/web3js.svg",
        },
        {
          name: "Ethers.js",
          icon: "https://avatars.githubusercontent.com/u/37898297?s=200&v=4",
        },
      ],
    },
  ];

  return (
    <div className="relative">
      <Banner4 slides={slides} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Build the Future with Blockchain"
        description="Capyngen is your go-to for cutting-edge, secure, and scalable blockchain solutions. We help your business innovate rapidly and maintain a competitive edge globally."
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        reverse={true}
        title="What is Blockchain Development Technology?"
        description={[
          `Blockchain development involves building secure, decentralized systems storing data on distributed ledgers. Unlike standard databases, blockchain uses transaction records to enhance trust, security, and transparency.`,
          `Capyngen helps businesses build innovative blockchain solutions using smart contracts, tokens, and decentralized networks.`,
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
              Blockchain technology transforms industries by delivering:
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                "Improved security through cryptographic encryption",
                "Transparent, verifiable transaction logs",
                "Reduced costs by eliminating intermediaries",
                "Faster cross-border transactions",
                "Immutable tamper-proof data storage",
                "Global accessibility supporting effective growth",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="hover:scale-105 transition-transform duration-300 cursor-default relative pl-4"
                >
                  {text}
                </li>
              ))}
            </ul>
            <p>
              Capyngen’s blockchain development services empower businesses to
              upgrade processes and lead digitally.
            </p>
          </>,
        ]}
        image={assets.blockchain1}
        background={assets.patternBg1}
        isHidden={true}
      />
      <IndustryServices
        heading="Blockchain Services We Offer"
        subheading="Comprehensive services for startups and enterprises from a top blockchain development company:"
        cardBg="bg-gray-700"
        cardText="text-white"
        cardDescText="text-white"
        services={servicesData}
      />
      <TechStack
        heading="Transform Your Web Development and Consulting with Our Expert Tech Stack"
        categories={techStack}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Schedule a Free Blockchain Consultation"
        description="Meet our blockchain experts to find the best solutions for your business from concept to implementation."
        buttonText="Schedule a Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="Benefits of Blockchain Solutions"
        desc="Blockchain solutions by Capyngen deliver actionable business impact such as:"
        benefits={benefitsSection1}
        image={assets.blockchainApplications}
      />
      <HowWeWork
        heading="How Blockchain Development Works"
        desc="Our organized development process ensures extremely useful blockchain solutions:"
        steps={steps}
      />
      <TopRatedCompany
        title="Why Choose Capyngen for Blockchain Development"
        description={[
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                "Experienced and Skilled Blockchain Developers",
                "Complete Solutions from Concept to Implementation",
                "Tailored Blockchain Strategies That Match Your Business",
                "Trusted and Safe Blockchain Executions",
                "Regular Upkeep and Problem Solving Assistance",
                "Industry-Leading Technology Stack and Trendy Solutions",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="hover:scale-105 transition-transform duration-300 cursor-default relative pl-4"
                >
                  {text}
                </li>
              ))}
            </ul>
            <p>
              Capyngen is globally acknowledged for empowering companies with
              blockchain solutions through onshore, nearshore, and offshore
              models.
            </p>
          </>,
        ]}
        image={assets.blockchain8}
        background={assets.patternBg1}
        isHidden={true}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Launch Your Blockchain Project"
        description="We deliver enterprise blockchain solutions with speed, security, and continuous innovation. Let’s create your blockchain-powered future."
        buttonText="Launch Your Project Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default BlockchainDevelopment;
