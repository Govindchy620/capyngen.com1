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
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import HowWeWork from "../components/HowWeWork";
import { Helmet } from "react-helmet-async";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/public-service#webpage",
  url: "https://www.capyngen.com/industries/public-service",
  name: "Capyngen delivers digital transformation and technology-driven solutions for the public service sector, empowering governance and citizen engagement.",
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
    url: "https://www.capyngen.com/assets/publicServiceBanner3-C8PGX3jz.jpg",
    width: 1200,
    height: 800,
    caption: "Public Service Industry Solutions by Capyngen",
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
        name: "Public Service",
        item: "https://www.capyngen.com/industries/public-service",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/industries/public-service#service",
  name: "Public Service IT Solutions",
  serviceType:
    "eGovernance Solutions, Citizen Service Portals, Smart City Applications, Public Data Management Systems",
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
    "Capyngen delivers innovative digital transformation solutions for the public service sector, including eGovernance platforms, smart city applications, and citizen engagement systems that enhance transparency and efficiency.",
  url: "https://www.capyngen.com/industries/public-service",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/publicServiceBanner3-C8PGX3jz.jpg",
    caption:
      "Public Service IT Solutions | eGovernance | Smart City | Citizen Engagement",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Are Public Service Digital Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are technology-driven platforms that help not only governments but also public organizations improve their efficiency, clarity, and citizen engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you Provide E-Governance Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, we work on the development of e-Governance platforms that are safe and easy for users to access.",
      },
    },
    {
      "@type": "Question",
      name: "Are you Able to Construct Citizen Service Applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, as our team can do mobile apps for public services such as bill payments, complaint tracking, and document requests.",
      },
    },
    {
      "@type": "Question",
      name: "Do you Provide Smart City Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certainly, our company is fully dedicated to the development of IoT-based smart city solutions for traffic, energy, and waste management.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Healthcare System of the Public Sector Able to be Improved by Your Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we build comprehensive digital healthcare systems for hospitals, health monitoring, and vaccination drives.",
      },
    },
    {
      "@type": "Question",
      name: "Are You Creating Educational Platforms for Government Use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely, we do e-learning portals and digital classrooms for public education.",
      },
    },
    {
      "@type": "Question",
      name: "Can You Deliver Data Analytics for Public Services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build data visualizations that allow policy makers to grasp critical public data trends.",
      },
    },
    {
      "@type": "Question",
      name: "Are You Producing Apps for the Safety of the Public?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We make public safety apps for the areas of emergency response, disaster management, and law enforcement.",
      },
    },
    {
      "@type": "Question",
      name: "Are You Able to Integrate Your Solutions with Current Government Systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, our integration into ERP, legacy systems, and third-party APIs goes effortlessly.",
      },
    },
    {
      "@type": "Question",
      name: "Do You Offer Solutions for the Identification of a Digital Identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we design the identity verification and identity authentication systems in a secured manner.",
      },
    },
  ],
};

const PublicService = () => {
  const slides = [
    {
      image: assets.publicServiceBanner1,
      title: "Empowering Governance Through Digital Transformation",
      subtitle:
        "Efficient, transparent, and citizen-centric are the services offered through the use of technology.",
    },
    {
      image: assets.publicServiceBanner2,
      title: "Building Smart Governments for a Digital Future",
      subtitle:
        "The use of data, automation, and cloud solutions will become a pillar for improving the delivery of public service.",
    },
    {
      image: assets.publicServiceBanner3,
      title: "Transform Public Services with Innovation",
      subtitle:
        "Governments can automate processes, make services more accessible for citizens, and deliver those services using digital tools.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Public Sector ERP Solutions",
      description:
        "Financials, HR, procurement and administrative software that enhance transparency and operational effectiveness.",
      image: assets.publicService1,
      cardBg: "bg-blue-100",
    },
    {
      title: "Citizen Service Portals",
      description:
        "Self-service payments, permit, registration and record platforms that eliminate queues and enhance satisfaction.",
      image: assets.publicService2,
      cardBg: "bg-green-100",
    },
    {
      title: "E-Government Solutions",
      description:
        "Automating workflow, case management, and electronic forms to accelerate approvals and enhance accountability.",
      image: assets.publicService3,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Smart City Platforms",
      description:
        "IoT-based services for energy, waste, lighting and public safety converged into a single dashboard.",
      image: assets.publicService4,
      cardBg: "bg-pink-100",
    },
    {
      title: "Healthcare IT for Government",
      description:
        "Secure EHR integrations, telemedicine portals, and public health analytics.",
      image: assets.publicService5,
      cardBg: "bg-purple-100",
    },
    {
      title: "Education & Learning Portals",
      description:
        "Virtual classrooms, student management, and distance learning systems built for scale.",
      image: assets.publicService6,
      cardBg: "bg-red-100",
    },
    {
      title: "Transport & Mobility IT",
      description:
        "Ticketing automation, fleet management, and traffic monitoring to enhance urban mobility.",
      image: assets.publicService7,
      cardBg: "bg-indigo-100",
    },
    {
      title: "Utility Management Software",
      description:
        "Metering, billing, complaint tracking and maintenance workflows for water, gas, and electricity utilities.",
      image: assets.publicService8,
      cardBg: "bg-teal-100",
    },
    {
      title: "Public Safety & Emergency Response Systems",
      description:
        "Real-time monitoring, alerting, and coordination platforms for disaster management, law enforcement, and citizen safety.",
      image: assets.publicService9,
      cardBg: "bg-orange-100",
    },
  ];
  const faqItems = [
    {
      question: "What Are Public Service Digital Solutions?",
      answer:
        "They are technology-driven platforms that help not only governments but also public organizations improve their efficiency, clarity, and citizen engagement.",
    },
    {
      question: "Do you Provide E-Governance Solutions?",
      answer:
        "Indeed, we work on the development of e-Governance platforms that are safe and easy for users to access.",
    },
    {
      question: "Are you Able to Construct Citizen Service Applications?",
      answer:
        "Sure, as our team can do mobile apps for public services such as bill payments, complaint tracking, and document requests.",
    },
    {
      question: "Do you Provide Smart City Solutions?",
      answer:
        "Certainly, our company is fully dedicated to the development of IoT-based smart city solutions for traffic, energy, and waste management.",
    },
    {
      question:
        "Is the Healthcare System of the Public Sector Able to be Improved by Your Solutions?",
      answer:
        "Definitely, we build comprehensive digital healthcare systems for hospitals, health monitoring, and vaccination drives.",
    },
    {
      question: "Are You Creating Educational Platforms for Government Use?",
      answer:
        "Absolutely, we do e-learning portals and digital classrooms for public education.",
    },
    {
      question: "Can You Deliver Data Analytics for Public Services?",
      answer:
        "We build data visualizations that allow policy makers to grasp critical public data trends.",
    },
    {
      question: "Are You Producing Apps for the Safety of the Public?",
      answer:
        "We make public safety apps for the areas of emergency response, disaster management, and law enforcement.",
    },
    {
      question:
        "Are You Able to Integrate Your Solutions with Current Government Systems?",
      answer:
        "Of course, our integration into ERP, legacy systems, and third-party APIs goes effortlessly.",
    },
    {
      question:
        "Do You Offer Solutions for the Identification of a Digital Identity?",
      answer:
        "Definitely, we design the identity verification and identity authentication systems in a secured manner.",
    },
    {
      question: "How Safe Are Your Public Service Solutions?",
      answer:
        "We have implemented a fully encrypted security system, we comply with international standards and we also do the secure hosting of the cloud.",
    },
    {
      question: "Are You Able to Automate Government Workflows?",
      answer:
        "Yes, we can offer services for process automation that include approvals, file tracking, and document management.",
    },
    {
      question: "Are You Creators of Portals for Public Grievances?",
      answer:
        "Yes, we create and design complaint management systems that work in ways that are transparent regarding the handling of complaints.",
    },
    {
      question:
        "Can Your Solutions Be Made to Support Multi-Language Accessibility?",
      answer:
        "Yes, it is possible to create bilingual, trilingual, or multilingual platforms depending on the needs of the local community.",
    },
    {
      question: "Do You Provide Support for Public Service Projects?",
      answer:
        "In fact, our team offers assistance in the form of 24/7 support, control, and routine system upgrades.",
    },
  ];
  const servicesData = [
    {
      image: assets.publicService10,
      title: "Citizen Portals",
      desc: "Rapid access to services, status monitoring, and secure payments via integrated e-commerce capabilities for public sector requirements.",
    },
    {
      image: assets.publicService11,
      title: "Smart City Platforms",
      desc: "Unified dashboards melding IoT feeds and analytics and AI solutions for public sector planning.",
    },
    {
      image: assets.publicService12,
      title: "Public Finance ERP",
      desc: "Transparent budgeting, payroll, and reporting to facilitate compliant fiscal management.",
    },
    {
      image: assets.publicService13,
      title: "Healthcare Systems",
      desc: "Telehealth and interoperable patient records to increase access to care.",
    },
    {
      image: assets.publicService14,
      title: "E-Government Apps",
      desc: "Outreach and mobile-first services enhancing citizen engagement.",
    },
    {
      image: assets.publicService15,
      title: "Education IT",
      desc: "Remote and blended learning supported by LMS and admin systems.",
    },
    {
      image: assets.publicService16,
      title: "Transport Systems",
      desc: "Automation of route optimization, ticketing, and real-time commuter information.",
    },
    {
      image: assets.publicService17,
      title: "Data Analytics & AI",
      desc: "Predictive analytics and ML models for efficient resource prioritization and enhanced public outcomes.",
    },
    {
      image: assets.publicService18,
      title: "Custom Software Solutions for Public Sector",
      desc: "From custom case management applications to enterprise-wide integrations that sunset legacy silos.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Transparency & Auditability",
      description:
        "Unambiguous audit trails and public-facing dashboards to establish trust.",
      icon: <FaSearch className="text-4xl text-white" />,
    },
    {
      title: "Scalability",
      description:
        "Architectures that support city-wide use and national rollouts.",
      icon: <FaExpand className="text-4xl text-white" />,
    },
    {
      title: "Industry-specific Security & Compliance",
      description:
        "Encryption, role-based access, and compliance mapping for local laws and standards.",
      icon: <FaShieldAlt className="text-4xl text-white" />,
    },
    {
      title: "Integration",
      description: "Integrate legacy systems with new APIs and data platforms.",
      icon: <FaPlug className="text-4xl text-white" />,
    },
    {
      title: "Accessible UI/UX",
      description:
        "Accessible design and UI/UX for public sector websites to satisfy WCAG and accessibility standards.",
      icon: <FaUniversalAccess className="text-4xl text-white" />,
    },
    {
      title: "Real-Time Monitoring",
      description:
        "Operations dashboards and alerting for mission-critical services.",
      icon: <FaChartLine className="text-4xl text-white" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Proven Results",
      description:
        "Implementing the finest IT solutions for public sector customers, with quantifiable service delivery improvements.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "End-to-End Delivery",
      description:
        "Strategy, UI/UX design for public sector websites, build, deployment and 24/7 support.",
      icon: <FaCogs className="text-4xl text-white" />,
    },
    {
      title: "Custom & Secure",
      description:
        "We design custom software solutions for public sector workflows, not one-size-fits-all products.",
      icon: <FaLock className="text-4xl text-white" />,
    },
    {
      title: "AI-Led Efficiency",
      description:
        "Practical AI solutions for public sector use-cases such as demand forecasting, fraud detection, and case prioritization.",
      icon: <FaRobot className="text-4xl text-white" />,
    },
    {
      title: "Transparent Governance",
      description: "Clear progress tracking, SLAs, and stakeholder reporting.",
      icon: <FaBalanceScale className="text-4xl text-white" />,
    },
    {
      title: "Long-Term Support",
      description:
        "Training, operations, and continuous improvement to keep services running reliably.",
      icon: <FaHandsHelping className="text-4xl text-white" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Consultation & Needs Capture",
      description:
        "Identify policy objectives, data regulations, and citizen requirements.",
    },
    {
      step: "Step 02",
      title: "Design & Compliance Planning",
      description:
        "Architecture, security, and accessibility (WCAG) design — including UI/UX design for government websites.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description: "Secure coding, API integration, and legacy migration.",
    },
    {
      step: "Step 04",
      title: "Testing & Certification",
      description:
        "Performance, security, and accessibility testing to ensure audit compliance.",
    },
    {
      step: "Step 05",
      title: "Deployment & Training",
      description: "Phased deployment, admin training, and change management.",
    },
    {
      step: "Step 06",
      title: "Operate & Optimize",
      description: "Monitoring, analytics, and iterative feature delivery.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for Public Sector Industry | AI & E-commerce Services –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen provides innovative IT solutions for the public sector. From AI to e-commerce platforms, we help government and public organizations go digital securely."
        />
        <meta
          name="keywords"
          content="IT Solutions for Public Sector Industry | AI & E-commerce Services – Capyngen"
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
      <CardsSectionImage
        heading="Explore Our Presence: Public Sector Solutions We Offer"
        subheading="We offer end-to-end public sector solutions designed specifically for local, regional, and national organizations:"
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Initiate a Public Sector Transformation"
        description={[
          "Book a complimentary discovery call to examine IT solutions for public sector modernization and ask for a customized roadmap.",
        ]}
        buttonText="Book Now!"
        backgroundVideo={assets.backgroundVideo}
      />
      <IndustryServices
        heading="Empowering Governance with Modern Public IT Services"
        subheading="Capyngen services assist agencies in becoming more efficient and building citizen trust:"
        services={servicesData}
      />
      <CardsSection
        heading="Public Sector IT Solutions — Main Features"
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
      <CardsSection
        heading="Why Choose Capyngen for Public Sector IT Solutions?"
        subheading=""
        services={cardsSectionData2}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg="bg-black border border-black transition-all duration-400"
        hoverBg=" hover:border-white"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
        height="h-64"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Ask for an AI Pilot for Government Services"
        description={[
          "Experience how AI public sector solutions can better utilize resource allocation—schedule a 2-week pilot to show returns.",
        ]}
        buttonText="Schedule Now!"
        backgroundVideo={assets.backgroundVideo}
      />
      <HowWeWork
        heading="How we implement public sector projects"
        desc=""
        steps={steps}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Ready to Modernize Public Services?"
        description={[
          "Capyngen is poised to collaborate on initiatives that transform citizen experience and operational effectiveness. We craft and deploy reliable IT solutions for public sector Industry that scale and secure public value.",
        ]}
        image={assets.publicService19}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Introduce Secure Digital Payments & Portals"
        description={[
          "Enforce compliant public sector e-commerce solutions for public sector fee collection and licensing with accelerated time-to-value.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default PublicService;
