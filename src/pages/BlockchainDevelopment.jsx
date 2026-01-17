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
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/blockchain-development#webpage",
  url: "https://www.capyngen.com/blockchain-development",
  name: "Blockchain Development Solutions – India’s Best Blockchain Development Services",
  description:
    "Transform your business with our Blockchain Development Solutions – India’s trusted experts delivering secure, scalable, and cutting-edge blockchain services.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/blockchain3-CMJUCBo7.png",
    caption:
      "Blockchain Development Solutions | Best Blockchain Development Services in India",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/blockchain-development#service",
  name: "Blockchain Development Solutions – India’s Best Blockchain Development Services",
  description:
    "Transform your business with our Blockchain Development Solutions – India’s trusted experts delivering secure, scalable, and cutting-edge blockchain services.",
  url: "https://www.capyngen.com/blockchain-development",
  serviceType: "Blockchain Development Solutions",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/blockchain3-CMJUCBo7.png",
    caption: "Blockchain Development Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is blockchain development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain development solutions involve creating and deploying secure, decentralized systems where data is stored on distributed ledgers using professional blockchain development practices.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of blockchain for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain development services enhance security, transparency, and performance, helping businesses reduce costs and build trust with customers and partners through custom blockchain solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen provide custom blockchain development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen offers custom blockchain development services tailored to your business goals, network requirements, and use cases.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop smart contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop secure smart contracts on platforms such as Ethereum, Binance Smart Chain (BSC), Solana, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer blockchain application development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build secure, scalable, and user-friendly blockchain applications (DApps) using our best blockchain development services.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries can use blockchain solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain solutions are widely used across industries including healthcare, finance, insurance, supply chain, education, transportation, and retail.",
      },
    },
    {
      "@type": "Question",
      name: "Which blockchain platforms do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our blockchain development services support platforms such as Ethereum, Hyperledger, Solana, Binance Smart Chain, Polkadot, Cardano, and more based on project needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is blockchain safe for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enterprise blockchain solutions use cryptography and decentralized networks, making them more secure and resistant to hacking than traditional systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does blockchain development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blockchain development typically takes between 4 to 12 weeks, depending on the project complexity and business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide blockchain consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer end-to-end blockchain consulting services, from strategy and planning to development and implementation.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen integrate blockchain with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We ensure seamless blockchain integration with your existing systems using advanced blockchain software development techniques.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide affordable and scalable blockchain solutions suitable for startups and growing businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-launch support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide ongoing maintenance, updates, and continuous support for enterprise blockchain development projects.",
      },
    },
    {
      "@type": "Question",
      name: "Can blockchain solutions operate globally?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. With the right architecture, blockchain technology solutions can support global-scale users and transactions.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start my blockchain project with Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start by booking a free consultation. Our blockchain development specialists will create a customized blockchain roadmap based on your project requirements.",
      },
    },
  ],
};

const BlockchainDevelopment = () => {
  const faqItems = [
    {
      question: "What is blockchain development?",
      answer:
        "The term blockchain development solutions is a process of creating and deploying secure and decentralised systems in which their data is stored in distributed ledgers by professional blockchain development.​",
    },
    {
      question: "What is the importance of blockchain to businesses?",
      answer:
        "Blockchain Development services that are based on blockchain maximise credibility, safety, and performance, assisting companies to reduce costs and increase loyalty among consumers and partners with the help of custom blockchain development.​",
    },
    {
      question: "Does Capyngen provide custom blockchain development?",
      answer:
        "Absolutely. Our services are custom blockchain development based on your business objectives and network requirements of your blockchain development company.​",
    },
    {
      question: "Are you able to develop smart contracts?",
      answer:
        "Yes, we create smart contracts on such platforms as Ethereum, BSC, Solana, etc. as a blockchain application development.​",
    },
    {
      question: "Do you offer development of blockchain apps?",
      answer:
        "Yes, we develop secure, scalable and user-friendly blockchain application development (DApps) using our best blockchain development services.​",
    },
    {
      question: "What industries are able to utilise blockchain solutions?",
      answer:
        "Blockchain solutions for businesses can be used in industries such as healthcare, finance, insurance, supply chain, education, transport, and retail.​",
    },
    {
      question: "Which blockchain platforms are you involved with?",
      answer:
        "Our blockchain development services company uses Ethereum, Hyperledger, Solana, Binance Smart Chain, Polkadot, Cardano, and others, depending on the needs of customers.​",
    },
    {
      question: "Is blockchain safe for businesses?",
      answer:
        "Yes. Cryptography and decentralised networks are part of the enterprise blockchain solution that is more resistant to hacking than conventional systems.​",
    },
    {
      question: "What is the duration of blockchain development?",
      answer:
        "Generally, 4-12 weeks based on the complexity of the project, with our company in India, with expertise in Blockchain development.​",
    },
    {
      question: "Do you provide blockchain consulting services?",
      answer:
        "Yes, we offer complete-service blockchain development solutions, consultation services, and up to implementation.​",
    },
    {
      question: "Will Capyngen integrate blockchain with my existing systems?",
      answer:
        "Yes, we have a smooth integration with your current systems based on blockchain software development.​",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we offer affordable blockchain solutions for businesses, which can be used by startups as a Custom blockchain development company.​",
    },
    {
      question: "Do you offer after-sales service?",
      answer:
        "Yes, with maintenance, updates and continuous support on the project of enterprise blockchain development company.​",
    },
    {
      question: "Can blockchain be operationalised on a global basis?",
      answer:
        "Yes, through the right architecture, blockchain technology solutions can serve global-scale transactions and users.​",
    },
    {
      question:
        "What is my path to making my blockchain project with Capyngen?",
      answer:
        "The specialists of our blockchain development services will customise a professional blockchain development plan, free of charge, and in addition, they will request a consultation.​",
    },
  ];

  const benefitsSection1 = [
    {
      title: "Increased Security and Data Protection",
      desc: "The blockchain development solutions reduce breaches, fraud, and unauthorised access through the application of difficult encryption and distributed networks.",
    },
    {
      title: "Transparency & Traceability",
      desc: "Shared ledger logs are easy to verify transactions and enhance the trust of the stakeholders.",
    },
    {
      title: "Reduced Transaction Costs",
      desc: "By removing middlemen, the company will reduce costs and overheads to run operations at low costs.",
    },
    {
      title: "Quickened Processes and Payments",
      desc: "Blockchain software development facilitates an almost instantaneous execution, which reduces time wastage by intermediaries.",
    },
    {
      title: "Trustless Systems and Decentralisation",
      desc: "There is no one power in charge of the network; the trust is established through encryption.",
    },
    {
      title: "Immutable & Tamper-Proof Records",
      desc: "Information stored can never be changed or erased and that guarantees the existence of permanent records.",
    },
    {
      title: "Better Supply Chain Management",
      desc: "Complete disclosure will decrease fraud, delays and errors in supply chains.",
    },
    {
      title: "Smart Contract Automation",
      desc: "Electronic implementation of contracts decreases paper and human errors.",
    },
    {
      title: "International Availability and Scalability",
      desc: "Available on the global scale, scaled to the increasing user base and demands.",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Knowing the business requirements and the scope of the project to fit perfectly.",
    },
    {
      step: "Step 02",
      title: "Blockchain Platform Selection",
      description:
        "Select a suitable platform depending on scalability, security and use case.",
    },
    {
      step: "Step 03",
      title: "Design & Architecture",
      description:
        "Design nodes, topology of a network and governance model that guarantees security and scalability.",
    },
    {
      step: "Step 04",
      title: "Smart Contract Development",
      description:
        "Build business processes and automate through smart contracts.",
    },
    {
      step: "Step 05",
      title: "Decentralized Application (DApp) Development",
      description:
        "CDevelop user-friendly DApps that provide decentralised features",
    },
    {
      step: "Step 06",
      title: "Integration with Existing Systems",
      description:
        "Make sure that it is compatible with current databases, ERPs and apps.",
    },
    {
      step: "Step 07",
      title: "Testing & Security Audit",
      description:
        "Functionality test and audit to determine and correct vulnerabilities.",
    },
    {
      step: "Step 08",
      title: "Deployment",
      description: "Apply secure user access to all parts.",
    },
    {
      step: "Step 09",
      title: "Maintenance & Upgrades",
      description: "Offer continuous support, updates, and scalability.",
    },
  ];

  const slides = [
    {
      image: assets.blockchainBanner1,
      title:
        "Instant Blockchain Development Solutions – Get India’s #1 Trusted Blockchain Development Service",
      subtitle:
        "Simplify your business, earn customer trust, and access new business opportunities with the reliable, transparent and scalable blockchain development solutions offered by Capyngen.",
    },
    {
      image: assets.blockchainBanner2,
      title:
        "Revolutionize Your Business with Cutting-Edge Blockchain Development",
      subtitle:
        "Change your processes, earn customer loyalty, and open new horizons with the help of blockchain development solutions and blockchain development services, which are reliable, transparent, and scalable and use Capyngen.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Enterprise Blockchain Solutions",
      subtitle:
        "Enterprise blockchain solutions will help improve security, simplify business operations, and enable massive corporate operations.",
    },
  ];

  const servicesData = [
    {
      image: assets.blockchain2,
      title: "Smart Contract Development",
      desc: "Smart contracts make it easy to secure and simplify the operation of your agreements.",
    },
    {
      image: assets.blockchain3,
      title: "Development of Decentralised Application (DApp)",
      desc: "Develop a blockchain application development based on reliability and security.",
    },
    {
      image: assets.blockchain4,
      title: "Private Blockchain Solutions",
      desc: "Programmed blockchain networks to serve internal business.",
    },
    {
      image: assets.blockchain5,
      title: "Public Blockchain Solutions",
      desc: "Use publicly available blockchain networks to access large numbers of people.",
    },
    {
      image: assets.blockchain6,
      title: "Token Development (Crypto Tokens & NFTs)",
      desc: "Digitise your business by issuing tokens, digital assets or NFTs.",
    },
    {
      image: assets.blockchain7,
      title: "Blockchain Integration with Existing Systems",
      desc: (
        <>
          The smooth integration of the current applications and blockchain
          technology solutions, such as the{" "}
          <a href="https://www.capyngen.com/website-design">
            ecommerce website design
          </a>
          .
        </>
      ),
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
      <Helmet>
        <title>
          Blockchain Development Solutions – India’s Best Blockchain Development
          Services
        </title>
        <meta
          name="description"
          content="Transform your business with our Blockchain Development Solutions – India’s trusted experts delivering secure, scalable, and cutting-edge blockchain services."
        />
        <meta
          name="keywords"
          content="blockchain development solutions, Best blockchain development services"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Banner4 slides={slides} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Build the Future with Blockchain"
        description="Capyngen will be your preferred choice of state-of-the-art, high-security, and scalable blockchain solutions for businesses. As one of the largest blockchain development company in the world, we accelerate the innovation of your business and keep it at the forefront of the competition.​"
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        reverse={true}
        title="What is Blockchain Development Technology?"
        description={[
          `The blockchain development solutions imply the creation of secure and decentralised systems in which the data is stored in distributed registries. The transaction records enable blockchain technology solutions to promote trust, security, and transparency compared to the case of normal databases.`,
          `As a trusted custom blockchain development provider, Capyngen assists businesses to innovative of blockchain application development using smart contracts, tokens and decentralised networks to develop apps with high levels of trust.​`,
        ]}
        image={assets.blockchainDevelopmentCompany}
        background={assets.patternBg1}
        isHidden={true}
        imageHeight="aspect-[1/1]"
      />
      <FullSizeImageSection
        backgroundImage={assets.blockchainDevFullSize}
        title="Secure your future with blockchain innovation"
        description="With the provision of our blockchain development services, you will benefit from an open and decentralised blockchain software development system that suits your business requirements perfectly.​"
        buttonText="Start Building"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <TopRatedCompany
        title="Importance of Blockchain in Modern Businesses"
        description={[
          <>
            <p className="mb-3 font-semibold">
              The blockchain development solutions change industries by
              providing:
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                "Better protection with cryptographic encryption.",
                "Verifiable transaction logs that are transparent.",
                "Lower prices through the removal of middlemen.",
                "Rapid cross-border transactions.",
                "Unalterable non-repudiated data storage.",
                "International availability in favour of successful expansion.",
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
              The enterprise blockchain solutions provided by Capyngen will help
              companies to modernise operations and become the market leader in
              terms of digitalisation, being ranked as the best blockchain
              development services provider.
            </p>
          </>,
        ]}
        image={assets.blockchain1}
        background={assets.patternBg1}
        isHidden={true}
      />
      <IndustryServices
        heading="Blockchain Services We Offer"
        subheading="Full blockchain development solutions for startups and enterprises of a leading blockchain development company and Custom blockchain development company:"
        cardBg="bg-gray-700"
        cardText="text-white"
        cardDescText="text-white"
        services={servicesData}
      />
      <TechStack
        heading={
          <span>
            Transform Your <Link to={"/web-development"}>Web Development</Link>{" "}
            and <Link to={"/consulting"}>Consulting</Link> with Our Expert Tech
            Stack
          </span>
        }
        categories={techStack}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Schedule a Free Blockchain Consultation"
        description="Introduce yourself to the blockchain development services company to identify the most suitable professional blockchain development solutions of your business idea to implementation."
        buttonText="Schedule a Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="Benefits of Blockchain Solutions"
        desc="Business solutions Capyngen offers blockchain solutions for businesses, including:"
        benefits={benefitsSection1}
        image={assets.blockchainApplications}
        footerNote={
          <>
            A destination of development and maintenance of the{" "}
            <a href="https://www.capyngen.com/ecommerce-solutions">
              best e-commerce software solutions
            </a>{" "}
            to guarantee hassle-free shopping experiences.
          </>
        }
      />
      <FullSizeImageSection
        backgroundImage={assets.blockchainDevFullSize2}
        title="Power your ideas with blockchain technology"
        description="With the experience of Enterprise blockchain development company, we support the implementation of smart contract to cryptocurrency platform innovation."
        buttonText="CONTACT US"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <HowWeWork
        heading="How Blockchain Development Works"
        desc="Our structured custom blockchain development model guarantees highly beneficial blockchain development solutions:"
        steps={steps}
      />
      <TopRatedCompany
        title="Why Choose Capyngen for Blockchain Development"
        description={[
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
              {[
                "Expert and Proficient Blockchain programmers.",
                "Full blockchain development services, from concept to implementation.",
                "Tailored Blockchain development company in India, strategies that best fit your Business.",
                "Reliable and Secure enterprise blockchain solutions implementations.",
                "Periodical Maintenance and Troubleshooting Support.",
                "Top-of-the-line Technology Stack and Fashionable blockchain solutions for businesses remedies.",
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
              Capyngen is recognised worldwide as an empowerment company based
              on blockchain development solutions on the onshore, nearshore, and
              offshore models, as the Blockchain development company in India.​
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
        description="We provide fast, secure, and constantly innovative enterprise blockchain solutions. Future with your blockchain technology solutions.​"
        buttonText="Launch Your Project Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default BlockchainDevelopment;
