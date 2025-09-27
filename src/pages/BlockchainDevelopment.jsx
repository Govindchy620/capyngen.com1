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

const BlockchainDevelopment = () => {
  const faqItems = [
    {
      question: "What is Blockchain Development?",
      answer:
        "Blockchain Development is the process of building digital systems that are decentralized, secure, and transparent by using the distributed ledger technology.",
    },
    {
      question: "What services does a blockchain development company offer?",
      answer:
        "A blockchain development company offers blockchain development, smart contract development, blockchain application development, and enterprise blockchain solutions.",
    },
    {
      question: "What is smart contract development?",
      answer:
        "Smart contract development makes automated, self-executing contracts possible, blockchain being the platform that ensures safety, clarity, and that no inefficiency occurs.",
    },
    {
      question: "How can blockchain app development help my business?",
      answer:
        "Blockchain app development not only ensures secure transactions but also opens the way for traceability as well as decentralized functionalities for start-ups, big businesses, and financial systems.",
    },
    {
      question: "What are enterprise blockchain solutions?",
      answer:
        "Enterprise blockchain solutions are technologies that are implemented on a big scale to manage multifarious business operations, merge with old systems and make the transparency better.",
    },
    {
      question: "What is custom blockchain development?",
      answer:
        "Custom blockchain development is the process of redesigning blockchain technology to specifically accommodate your business's needs, providing scalability, security, and flexibility.",
    },
    {
      question: "What is blockchain software development?",
      answer:
        "Blockchain Software Development comprises creating blockchain apps, tokenization mechanisms, smart contracts, and safe networks for business use.",
    },
    {
      question: "How can blockchain consulting services benefit my company?",
      answer:
        "Blockchain consulting services only come in the form of guidance that includes strategy, feasibility, and actualization, making sure that blockchain projects are flawless and valuable.",
    },
    {
      question: "Are there blockchain development services in India?",
      answer:
        "Yes, there are blockchain development services in India that provide the blockchain solutions in India for startups, enterprises, and enterprise-grade blockchain solutions.",
    },
    {
      question:
        "What makes a company the best blockchain development company for startups?",
      answer:
        "One of the best blockchain development companies for startups is made so by factors like the company's expertise in custom blockchain development, the company's innovation, scalability, and the company's provision of being a cost-effective solution tailored for emerging businesses.",
    },
    {
      question: "Can blockchain development integrate with existing systems?",
      answer:
        "Yes. Enterprise blockchain solutions as well as blockchain app development can work with the current IT setup without any issues.",
    },
    {
      question: "How secure is blockchain development?",
      answer:
        "Blockchain Development services secure their projects through cryptography, decentralization, and by ensuring that the information cannot be changed thus achieving high-security systems.",
    },
    {
      question: "What is the role of a custom blockchain development company?",
      answer:
        "The company will come up with, build, and deliver the blockchain system that is genuinely engineered to fulfill your business requirements while also providing smart contract development and consulting.",
    },
    {
      question:
        "Can blockchain software development support multiple industries?",
      answer:
        "Absolutely! The blockchain app development and enterprise blockchain solutions have already demonstrated the benefits that the finance, supply chain, healthcare, and logistics sectors can gain, among the numerous other industries, through the adoption of distributed ledger technology.",
    },
    {
      question: "How long does blockchain development take?",
      answer:
        "The duration varies with the specific project scope—developing smaller applications might be accomplished in several weeks, whereas it is easy to expect that enterprise blockchain solutions will take quite a few months to complete.",
    },
  ];
  const technologies = [
    { name: "JavaScript", logo: assets.js },
    { name: "Python", logo: assets.python },
    { name: "CSS3", logo: assets.css3 },
    { name: "C++", logo: assets.cplusplus },
    { name: "PHP", logo: assets.php },
    { name: "React", logo: assets.react },
    { name: "Vue.js", logo: assets.vuejs },
    { name: "AngularJS", logo: assets.angular },
    { name: "JQuery", logo: assets.jquery },
    { name: "Next.js", logo: assets.nextjs },
    { name: "MongoDB", logo: assets.mongodb },
    { name: "MySQL", logo: assets.mysql },
    { name: "PostgreSQL", logo: assets.postgresql },
    { name: "Node.js", logo: assets.nodejs },
    { name: "Laravel", logo: assets.laravel },
    { name: "Express.js", logo: assets.expressjs },
    { name: "Azure", logo: assets.azure },
    { name: "AWS", logo: assets.aws },
    { name: "Google Cloud", logo: assets.googlecloud },
  ];
  const benefitsSection1 = [
    {
      title: "Blockchain in UX Design",
      desc: "Blockchain enhances the user experience with transparency and secure interaction. Secure, tamper-proof transaction records and decentralized authentication build trust. Token-based rewards and smart contract operations create higher engagement and better operations. Users can verify ownership and action without trusting central powers to create a secure, trustworthy, and user-friendly digital world.",
    },
    {
      title: "Blockchain in Data Management",
      desc: "Blockchain revolutionizes data management by offering decentralized, tamper-evident storage. Every record is encrypted and signed by various nodes, ensuring integrity and security. Smart contracts and real-time monitoring regulate and abide automatically. This gives organizations the ability to access accurate, auditable, and reliable data, facilitating better decision-making and operational efficiency.",
    },
    {
      title: "Blockchain in Ride Sharing",
      desc: "Decentralized blockchain networks increase ride-sharing platforms via secure identification verification, transparent transactions, and automatic payments via smart contracts. Inherited ride histories avoid disputes, and live tracking and decentralized storage enhance reliability. Blockchain reduces the expense of middlemen and creates trust between riders, drivers, and service providers.",
    },
    {
      title: "Blockchain in Supply Chains",
      desc: "Blockchain enables end-to-end traceability across supply chains, with each product movement from source to delivery documented. Decentralized ledgers prevent errors, fraud, and delays, and automation of payment and order processing with smart contracts. Real-time access to unalterable information increases collaboration, transparency, and operating efficiency for customers and businesses.",
    },
    {
      title: "Blockchain in Digital Identity",
      desc: "Blockchain offers safe, decentralized digital identities. Individuals control personal information with private keys, exposing only what's needed. Authentication and access are delegated through smart contracts, protecting against identity theft and fraud. Indelible ledgers foster trust, privacy, and auditable histories for people and organizations in digital interactions.",
    },
    {
      title: "Blockchain on Social Networking",
      desc: "Blockchain disrupts social networks by decentralizing data ownership and giving transparency. Crowdfunding and reward schemes work with smart contracts, ensuring secure, transparent contribution. Users control their content, privacy, and digital property, while immutable records reduce censorship and fraud, building community-led, safe social networks.",
    },
    {
      title: "Blockchain in Asset Management",
      desc: "Blockchain provides secure and transparent asset tracking within investments, physical holdings, and digital assets. Immutable ledgers safeguard against fraud and errors, smart contracts enable automatic transactions, compliance, and payments. Real-time data can be authenticated by a variety of stakeholders, ensuring efficiency, security, and confidence in asset management processes.",
    },
    {
      title: "Blockchain in Healthcare",
      desc: "Blockchain secures medical records and patient data in tamper-resistant, decentralized ledgers. Provider-to-provider, lab-to-provider, and payer-to-provider interoperability is improved, and automated consent and claims are made easy through smart contracts. Faults, frauds, and delays are reduced, and secure, transparent, and efficient healthcare administration is provided to patients and institutions.",
    },
    {
      title: "Blockchain in Real Estate",
      desc: "Blockchain streamlines real estate transactions by making ownership of property, transfers, and contracts unalterable. Smart contracts facilitate payment, leasing, and transferring of assets automatically, reducing delays and fraud. Decentralized verification increases transparency, while tokenization facilitates fractional ownership. Blockchain secures, makes transparent, and efficient real estate transactions.",
    },
    {
      title: "Blockchain in Voting Systems",
      desc: "Blockchain enables secure, transparent voting by casting votes immutably. Safe voter identity authentication and accurate counting are ensured by smart contracts. Manipulation is prevented through decentralization, and auditability allows independent verification without invading privacy. Blockchain builds trustworthy and responsible electoral systems.",
    },
    {
      title: "Blockchain in Financial Services",
      desc: "Blockchain improves financial transactions through tamper-proof ledgers and real-time settlement. Smart contracts execute trading, lending, and compliance automatically with fewer errors and less fraud. Decentralized finance enables peer-to-peer lending and trading. Blockchain delivers secure, efficient, and transparent financial services.",
    },
    {
      title: "Blockchain in Intellectual Property Management",
      desc: "Blockchain protects intellectual property by storing copyrights, patents, and trademarks in unalterable ledgers. Smart contracts enforce royalties and licenses to ensure that creators are given a rightful share. Clear provenance and ownership reduce conflicts, providing secure, verifiable, and globally accessible IP management.",
    },
  ];

  const cardsSectionDifferentColorData1 = [
    {
      title: "Security & Transparency",
      description:
        "Blockchain information is saved in a decentralized and tamper-evident manner. Each transaction or piece of data is saved in a secure ledger that can't be modified, providing total transparency and minimizing the likelihood of fraud.",
      icon: <FaShieldAlt className="text-4xl text-white drop-shadow-md" />,
      cardBg: "bg-[#ed5565] hover:bg-[#da4453]",
    },
    {
      title: "Decentralization & Reliability",
      description:
        "In contrast to other systems, blockchain is decentralized, so there is no common point of failure. This enhances reliability, keeps data available at all times, and guards against cyberattacks.",
      icon: <FaNetworkWired className="text-4xl text-white drop-shadow-md" />,
      cardBg: "bg-[#5d9cec] hover:bg-[#4a89dc]",
    },
    {
      title: "Smart Contract Automation",
      description:
        "Smart contracts on the blockchain execute agreements automatically on conditions being met. This reduces intermediaries' requests, saves funds, and speeds up processes while ensuring rules' application to the letter.",
      icon: <FaFileContract className="text-4xl text-white drop-shadow-md" />,
      cardBg: "bg-[#ac92ec] hover:bg-[#967adc]",
    },
    {
      title: "Scalability & Future-Readiness",
      description:
        "Blockchain technology is designed to scale with increasing user requirements. Blockchain is future-proof and can handle more transactions without compromising performance.",
      icon: (
        <FaProjectDiagram className="text-4xl text-gray-800 drop-shadow-md" />
      ),
      cardBg: "bg-[#ccd1d9] hover:bg-[#aab2bd]",
    },
    {
      title: "Traceability & Auditability",
      description:
        "All transactions within a blockchain are kept, dated, and are verifiable. This enables full traceability, thus making audits, compliance, and reporting transparent and simple.",
      icon: <FaClipboardCheck className="text-4xl text-white drop-shadow-md" />,
      cardBg: "bg-[#ffce54] hover:bg-[#f6bb42]",
    },
    {
      title: "Enhanced Trust & Customer Confidence",
      description:
        "Securing data and making it transparent and verifiable, blockchain encourages stakeholders and users to trust each other. Blockchain ensures accountability and promotes trust in digital transactions and interactions.",
      icon: <FaHandshake className="text-4xl text-white drop-shadow-md" />,
      cardBg: "bg-[#a0d468] hover:bg-[#8cc152]",
    },
  ];
  const cardsSectionGridData1 = [
    {
      title: "Transparency and Immutability",
      description:
        "Blockchain makes sure each transaction is stored forever on a decentralized ledger, which becomes immutable and transparent. Data cannot be deleted or changed once added, offering complete trust and accountability to both customers and businesses.",
      icon: <FaLock className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Improved Security",
      description:
        "The cryptographic procedures that underlie blockchain, as well as its decentralized network, mean that data is extremely secure. Access or interference by unauthorized users is practically impossible, and transactions, users' information, and companies' records are preserved in a safe manner at all times.",
      icon: <FaShieldAlt className="w-6 h-6 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Decentralization",
      description:
        "Blockchain eliminates the need for intermediaries such as banks or payment gateways third parties. It reduces expenses, avoids a single point of failure, and enhances operational efficiency in the system through dispersing power among a network of nodes.",
      icon: <FaNetworkWired className="w-6 h-6 text-lime-500" />,
      iconBg: "bg-lime-100",
    },
    {
      title: "Smart Contracts",
      description:
        "Smart contracts are programmed software that runs automatically on the blockchain. They automatically enforce stipulated conditions, without the need for human involvement. This enables faster, faultless operations while ensuring all parties stick to agreed premises.",
      icon: <FaFileContract className="w-6 h-6 text-red-500" />,
      iconBg: "bg-red-100",
    },
    {
      title: "Cost Effectiveness",
      description:
        "Freeing processes from middlemen intervention and automation, blockchain minimizes administrative burden, reduces errors, and streamlines operations. This delivers significant cost reduction while maintaining accuracy and reliability.",
      icon: <FaDollarSign className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Faster Transactions",
      description:
        "Blockchain offers near real-time settlement of transactions compared to traditional systems. Payments, product transfer, and contract execution can be made virtually in real-time, improving efficiency and accelerating business operations.",
      icon: <FaBolt className="w-6 h-6 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Improved Traceability",
      description:
        "Every transaction on a blockchain can be tracked and audited to the very last. Businesses can monitor the entire history of products or assets, from the origin to the final delivery, for greater accountability, regulatory compliance, and supply chain transparency.",
      icon: <FaSearchLocation className="w-6 h-6 text-lime-500" />,
      iconBg: "bg-lime-100",
    },
    {
      title: "World-Wide Access",
      description:
        "Blockchain makes borderless transactions possible without traditional limitations, opening up opportunities to truly service global markets. Business entities can engage with customers around the world while carrying out secure, transparent, and compliant operations.",
      icon: <FaGlobe className="w-6 h-6 text-red-500" />,
      iconBg: "bg-red-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Begin with defining business goals and what blockchain can add value to. Define processes that can benefit from decentralization, smart contracts, or secure ledgers to make sure the solution aligns with strategic and operational objectives.",
    },
    {
      step: "Step 02",
      title: "Platform Selection",
      description:
        "Choose a blockchain platform that fits project requirements, considering scalability, consensus algorithms, security options, and integration capacity to enable simple and effective deployment.",
    },
    {
      step: "Step 03",
      title: "Architecture & Technical Design",
      description:
        "Design the blockchain system architecture, APIs, node setups, and database schemas to support secure integration with front-end applications and seamless communication between all components.",
    },
    {
      step: "Step 04",
      title: "Smart Contract Development",
      description:
        "Create smart contracts to execute agreements, transactions, and workflow processes automatically. Design them secure, effective, and in line with business logic to avoid errors and limit manual interventions.",
    },
    {
      step: "Step 05",
      title: "Application Development",
      description:
        "Build the blockchain solution by pairing front-end interfaces with decentralized ledgers and smart contracts. Prioritize usability, scalability, and security in building a strong and user-friendly product.",
    },
    {
      step: "Step 06",
      title: "Testing & Validation",
      description:
        "Thoroughly test all blockchain components such as nodes, smart contracts, and interfaces. Validate functionality, security, and performance to confirm error-free operation and data integrity.",
    },
    {
      step: "Step 07",
      title: "Deployment",
      description:
        "Deploy the blockchain application onto the chosen network. Implement nodes, smart contracts, and supporting infrastructure to enable the system to function well and securely in production.",
    },
    {
      step: "Step 08",
      title: "Monitoring & Maintenance",
      description:
        "Regularly monitor blockchain performance, apply updates, and fix vulnerabilities. Regular maintenance ensures security, scalability, and long-term reliability of the blockchain solution. ",
    },
    {
      step: "Step 09",
      title: "Handover & Documentation",
      description:
        "Achieve a complete, safe transfer of the blockchain application thoroughly documented. Enable stakeholders to operate, maintain, and grow the system with confidence.",
    },
  ];
  const slides = [
    {
      image: assets.blockchainBanner1,
      title: "Blockchain Development",
      subtitle:
        "Transforming business through future-proof, scalable, and secure solutions.",
    },
    {
      image: assets.blockchainBanner2,
      title: "Smart Contract Development",
      subtitle:
        "Implement our smart contract solutions to maximize reduction of human error, enhance transparency, and automate contracts.",
    },
    {
      image: assets.blockchainDevelopment,
      title: "Enterprise Blockchain Solutions",
      subtitle:
        "Improve security, streamline processes, and open up opportunities for large scale corporate activity.",
    },
  ];
  const features = [
    {
      icon: <FaUsers className="w-10 h-10 text-blue-500" />,
      title: "Expert Blockchain Team",
      description:
        "With experienced developers on our team, we develop seamless and secure blockchain solutions which are customized to your business requirements.",
    },
    {
      icon: <FaTools className="w-10 h-10 text-blue-500" />,
      title: "Customized Solutions",
      description:
        "We develop different blockchain applications and platforms according to your customized business requirements and cutting-edge technologies of the digital age.",
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-blue-500" />,
      title: "Quality & Innovation",
      description:
        "Leveraging standards in Indian blockchain development services and using the latest UI/UX features, we provide solutions that burst, engage the user, and excel on performance.",
    },
    {
      icon: <FaHeadset className="w-10 h-10 text-blue-500" />,
      title: "Client Specific Support",
      description:
        "Our 24/7 client support ensures your blockchain platforms operate without disruption, and delivers steadfast service while you and your department build enduring trust with the solutions that we provide.",
    },
  ];
  const cardsSectionData = [
    {
      title: "Enterprise Web Portals",
      description:
        "We create secure, scalable, and integrated enterprise web portals that are designed to support complex business requirements through the implementation of custom blockchain development.",
      icon: <FaServer className="text-4xl text-white" />,
    },
    {
      title: "API Integration",
      description:
        "We develop and deploy robust API to enable data to flow and function efficiently across your enterprise system.",
      icon: <FaProjectDiagram className="text-4xl text-white" />,
    },
    {
      title: "Cloud Apps",
      description:
        "Our cloud based blockchain apps facilitate high availability, secure access and scalable architecture to execute globally.",
      icon: <FaCloud className="text-4xl text-white" />,
    },
    {
      title: "Smart CMS",
      description:
        "Manage content more easily via tailored enterprise CMS solutions with flexibility, robust tools, and interlinking with blockchain.",
      icon: <FaFileAlt className="text-4xl text-white" />,
    },
    {
      title: "Analytics Dashboards",
      description:
        "Get business insight in real time with interactive dashboards designed to assist enterprise to make business decisions immediately.",
      icon: <FaChartBar className="text-4xl text-white" />,
    },
    {
      title: "Enterprise Grade E Commerce",
      description:
        "Implement securely, and custom e-commerce platforms that are powered by blockchain solutions, which makes possible performance in business optimization.",
      icon: <FaShoppingCart className="text-4xl text-white" />,
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner4 slides={slides} />

      <CardsSection
        heading="Characteristics of Blockchain Technology"
        subheading="Blockchain is a cutting-edge technology that rediscovers data and transaction management. It provides transparency, security, and efficiency in various industries, infusing trust and accountability into digital systems."
        services={cardsSectionDifferentColorData1}
        cardBg=""
        headColor="text-white"
        sectionBg="bg-black"
        hoverBg=""
        textColor="text-gray-800"
        hoverTextColor="hover:text-gray-900 transition-all"
      />
      <TopRatedCompany
        title="Innovative Blockchain Development Company"
        description={[
          `Capyngen is Blockchain Development Innovative Company that delivers customized blockchain solutions to businesses globally. Our developers adopt a methodical process that allows each project to attain high functioning, smooth operation, and engaging user interfaces.`,
          `Since our inception in 2022, Capyngen has built a team of creators, thinkers, and problem solvers with the objective of delivering cutting edge solutions that are blockchain driven. Our work today consists of developing applications that are scalable, working, and user optimized so that your users have an uninterrupted and immersed experience.`,
          `Capyngen offers premier end to end blockchain services as a leading Blockchain Development Company in India, enabling businesses to adopt decentralized technologies and seamlessly integrate measurable results.`,
        ]}
        image={assets.blockchainDevelopmentCompany}
        background={assets.patternBg1}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Turn Your Ideas into Reality with Our Blockchain Development Solutions"
        description="There is full consulting & development assistance available that can assist you to propel your project from concept to market with scalable, secure and high-performing apps."
        buttonText="Contact Us"
        image={assets.getStarted}
      />
      <CardsSectionGrid
        heading="Benefits of Blockchain Development"
        description={[
          "Blockchain technology, being decentralized and having the properties of smart contracts, provides a strong base for secure, trusted, and transparent digital transactions. This is how it restructures business processes and customer experience.",
          "Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs.",
          "If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
        ]}
        services={cardsSectionGridData1}
        reverse
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="What Blockchain Development Services You Can Expect"
        description={[
          "Capyngen offers complete proof Blockchain Consulting Services and Enterprise Blockchain Services to meet your specific enterprise needs. We integrate strategic planning, rigorous analysis, and critical thinking to construct and deploy blockchain solutions that solve complex problems in an economical manner.",
          "We strive to deliver custom, high-value solutions to improve operational efficiency, introduce transparency, and allow business to leverage the full potential of blockchain technology. We approach each project with precision to deploy on scalability, security, and business requirements to fit your existing business environment.",
        ]}
        backgroundVideo={assets.backgroundVideo}
      />

      <BenefitsSection
        heading="Blockchain Applications"
        desc="Blockchain extends far beyond cryptocurrencies, finding innovative uses across industries. From enhancing user experience and data management to revolutionizing healthcare, finance, supply chains, and even voting systems, blockchain’s decentralized, secure, and transparent structure builds trust, reduces fraud, and streamlines operations."
        benefits={benefitsSection1}
        image={assets.blockchainApplications}
      />
      <HowWeWork
        heading="How Blockchain Development Works"
        desc="Blockchain development follows a structured process designed to ensure security, transparency, and efficiency at every stage. From analyzing requirements and selecting the right platform to smart contract creation, testing, deployment, and long-term maintenance, each phase ensures that the final solution aligns with business objectives while being reliable, scalable, and user-friendly."
        steps={steps}
      />
      <WhyChoose
        heading="Why Partner with Capyngen"
        intro="At the best Custom Blockchain Development Company, we offer powerful digital experiences that let your company succeed. We combine strategy and imagination with cutting-edge blockchain technology to deliver groundbreaking, scalable, and user-focused solutions tailored for you."
        features={features}
      />
      <CardsSection
        heading="Blockchain Services We Provide"
        subheading="Collaborate with Capyngen, a leading Blockchain Development Company in India, to craft business level blockchain solutions that include bespoke applications, API integration, cloud based platforms, and e-commerce solutions that provide growth and efficiency."
        services={cardsSectionData}
        sectionBg="bg-gray-900"
        cardBg="border-2 border-white shadow-2xl shadow-gray-800"
        hoverBg=""
        height="h-72"
        textColor="text-white"
        hoverTextColor=""
        headColor="text-white"
      />
      <TechnologiesCarousel
        title="The Blockchain Technologies We Use"
        description="At Capyngen, we utilize the latest blockchain technologies to develop secure, scalable, and easy-to-use solutions for companies. Our staff blends meticulous planning with innovative thinking and the latest technology to design digital experiences that grow and evolve your company."
        technologies={technologies}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
        buttonTextColor="text-white"
        title="Enabling Businesses with Blockchain"
        description={[
          "Using emerging blockchain technologies, Capyngen creates solutions that are secure, fast and simple to use. Our experts combine emerging thinking, innovation and leading edge technology to create digital experiences that drive business success and keep you ahead of your rivals.",
          "Our emphasis on bespoke development includes blockchain development, smart contract, enterprise and cloud solutions; offering scalable, secure and future proofed solutions that suit your business needs.",
        ]}
        buttonText="Contact Us"
        image={assets.enablingBusinessBlockchain}
      />

      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default BlockchainDevelopment;
