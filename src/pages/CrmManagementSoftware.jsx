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
import { LifeBuoy, Sparkles } from "lucide-react";
import CardSwap, { Card } from "../components/CardSwap";
import Banner14 from "../components/Banner14";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import {
  FaAndroid,
  FaApple,
  FaBullhorn,
  FaCheckCircle,
  FaCode,
  FaCogs,
  FaDollarSign,
  FaHeart,
  FaMobileAlt,
  FaShieldAlt,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import IndustryServices from "../components/IndustryServices";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/crm-management-software#webpage",
  url: "https://www.capyngen.com/crm-management-software",
  name: "CRM & Management Solutions | Cloud CRM for Smarter Businesses – Capyngen",
  description:
    "Streamline your business with Capyngen’s CRM & Management Solutions. From customer relationship management to cloud CRM, we help you grow smarter and faster.",
  inLanguage: "en",
  keywords: "CRM & Management Solutions",
  isPartOf: {
    "@type": "WebSite",
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
    },
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "CRM & Management Solutions, CRM Solutions, Customer Relationship Management Solutions, Business Management Solutions, Cloud CRM Solutions, Enterprise CRM Solutions, Project Management Solutions",
  name: "CRM & Management Solutions | Cloud CRM for Smarter Businesses – Capyngen",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://www.capyngen.com/crm-management-software",
  description:
    "Streamline your business with Capyngen’s CRM & Management Solutions. From customer relationship management to cloud CRM, we help you grow smarter and faster.",
  keywords: "CRM & Management Solutions",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "CRM & Business Management",
  serviceOutput:
    "Streamline your business with Capyngen’s CRM & Management Solutions. From customer relationship management to cloud CRM, we help you grow smarter and faster.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the primary function of CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM systems aim to facilitate the management of customer relationships by organizing customer data, pursuing sales leads, and improving customer loyalty as a way to increase sales and customer retention.",
      },
    },
    {
      "@type": "Question",
      name: "Is CRM a good fit for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure. Cloud-based and modular solutions make CRM available and manageable for small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How different is ERP from CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP deals with the internal affairs and necessary resources of a company meanwhile CRM takes care of all the customer relations, sales, and marketing aspects.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of a CRM system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depending on the features, number of users, and deployment type (cloud or on-premise) the prices vary. Capyngen has flexible packages available to fit any business size.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for CRM to enhance sales performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed, CRM makes the process of lead management more efficient, makes the opportunities tracking easier, and provides the insights necessary to the sales increase.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide custom CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen gives CRM software made to fit your business process and operations.",
      },
    },
    {
      "@type": "Question",
      name: "Without an issue, can CRM work with the tools that I am currently using?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, indeed. We provide services that allow CRM to integrate with ERP, marketing, or project management software.",
      },
    },
    {
      "@type": "Question",
      name: "Which sectors can benefit from the use of CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "From small businesses to enterprises, e-commerce, healthcare, real estate, finance, etc.",
      },
    },
    {
      "@type": "Question",
      name: "Does CRM contribute to customer retention?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CRM gathers the history of customer interactions, helps in the resolution of problems, and increases loyalty.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a mobile version of CRM available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mobile CRM applications allow the sales force to have access to customer information and operations anywhere, anytime.",
      },
    },
    {
      "@type": "Question",
      name: "How do I switch to a different CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen offers CRM migration & upgrade alternatives for a safe switch from old systems.",
      },
    },
    {
      "@type": "Question",
      name: "Is a CRM system training provided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide training and documentation to ensure teams can fully utilize the system.",
      },
    },
    {
      "@type": "Question",
      name: "Is CRM data used for the company’s decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, Analytical CRM leads the organization to make use of marketing, sales, and customer service plans by providing the required insights.",
      },
    },
    {
      "@type": "Question",
      name: "To what extent can the CRM system be considered safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM software includes encryption, access based on user roles, and follows the compliance standards thus securing the data.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start Capyngen CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact or book a free consultation to discuss your business requirements and together we will design the most efficient CRM strategy for your business.",
      },
    },
  ],
};

const CrmManagementSoftware = () => {
  const faqItems = [
    {
      question: "What is the primary function of CRM?",
      answer:
        "CRM systems aim to facilitate the management of customer relationships by organizing customer data, pursuing sales leads, and improving customer loyalty as a way to increase sales and customer retention.",
    },
    {
      question: "Is CRM a good fit for small businesses?",
      answer:
        "Sure. Cloud-based and modular solutions make CRM available and manageable for small businesses.",
    },
    {
      question: "How different is ERP from CRM?",
      answer:
        "ERP deals with the internal affairs and necessary resources of a company meanwhile CRM takes care of all the customer relations, sales, and marketing aspects.",
    },
    {
      question: "What is the price of a CRM system?",
      answer:
        "Depending on the features, number of users, and deployment type (cloud or on-premise) the prices vary. Capyngen has flexible packages available to fit any business size.",
    },
    {
      question: "Is it possible for CRM to enhance sales performance?",
      answer:
        "Indeed, CRM makes the process of lead management more efficient, makes the opportunities tracking easier, and provides the insights necessary to the sales increase.",
    },
    {
      question: "Do you provide custom CRM solutions?",
      answer:
        "Yes. Capyngen gives CRM software made to fit your business process and operations.",
    },
    {
      question:
        "Without an issue, can CRM work with the tools that I am currently using?",
      answer:
        "Yes, indeed. We provide services that allow CRM to integrate with ERP, marketing, or project management software.",
    },
    {
      question: "Which sectors can benefit from the use of CRM?",
      answer:
        "From small businesses to enterprises, e-commerce, healthcare, real estate, finance, etc.",
    },
    {
      question: "Does CRM contribute to customer retention?",
      answer:
        "Yes. CRM gathers the history of customer interactions, helps in the resolution of problems, and increases loyalty.",
    },
    {
      question: "Is there a mobile version of CRM available?",
      answer:
        "Yes. Mobile CRM applications allow the sales force to have access to customer information and operations anywhere, anytime.",
    },
    {
      question: "How do I switch to a different CRM?",
      answer:
        "Capyngen offers CRM migration & upgrade alternatives for a safe switch from old systems.",
    },
    {
      question: "Is a CRM system training provided?",
      answer:
        "Yes. We provide training and documentation to ensure teams can fully utilize the system.",
    },
    {
      question: "Is CRM data used for the company’s decisions?",
      answer:
        "Definitely, Analytical CRM leads the organization to make use of marketing, sales, and customer service plans by providing the required insights.",
    },
    {
      question: "To what extent can the CRM system be considered safe?",
      answer:
        "Our CRM software includes encryption, access based on user roles, and follows the compliance standards thus securing the data.",
    },
    {
      question: "How do I start Capyngen CRM solutions?",
      answer:
        "Contact or book a free consultation to discuss your business requirements and together we will design the most efficient CRM strategy for your business.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Improved Customer Relationships",
      description:
        "Turn clients into loyal supporters by knowing each detail of your relationship with them and personalizing the way you communicate.",
      icon: <FaAndroid className="text-4xl text-white" />,
    },
    {
      title: "Increased Sales & Revenue",
      description:
        "Sales procedures can be automated and made more efficient and leads can be better managed in such a way that the rate of conversion of sales will increase.",
      icon: <FaApple className="text-4xl text-white" />,
    },
    {
      title: "Improved Productivity & Collaboration",
      description:
        "Employees can have access to customer data and can also use project management software to interact with no friction.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Analyze the consumption behavior patterns of customers and use the business as a measuring tool to set criteria for taking appropriate actions.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "Improved Customer Loyalty & Retention",
      description:
        "Understand customer needs before they even become aware of them and witness the dependency and loyalty grow.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "Marketing Activities Made Easier",
      description:
        "Use integrated CRM analytics for the planning and execution of your targeted campaigns.",
      icon: <FaCogs className="text-4xl text-white" />,
    },
  ];
  const cardsSectionImageData2 = [
    {
      image: assets.crm4,
      title: "Development of CRM Software tailored to your needs",
      desc: "Solutions of customer relationship management that are ideally suited for your specific business processes and goals.",
    },
    {
      image: assets.crm5,
      title: "CRM Integration Services",
      desc: "Use a connector to link your CRM to other enterprise software, such as ERP, marketing, and sales tools.",
    },
    {
      image: assets.crm6,
      title: "CRM Migration & Upgrade Solutions",
      desc: "Systematic transition from old to new, scalable CRM platforms without any complications.",
    },
    {
      image: assets.crm7,
      title: "CRM Consulting & Strategy",
      desc: "Expert guidance in selecting, installing, and making efficient use of the suitable CRM product.",
    },
    {
      image: assets.crm8,
      title: "CRM Support & Maintenance",
      desc: "The continued effort to solve the problem of the smoothness of the system and its updates.",
    },
    {
      image: assets.crm9,
      title: "Mobile CRM Solutions",
      desc: "Feel free to access CRM tools via handy and user-friendly mobile applications while on the go.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Operational CRM",
      description:
        "It is a software that is created to handle the automation of the daily customer interactions processes which include sales, marketing, and service.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Analytical CRM",
      description:
        "Gather customer data for generating useful insights and making the decision facilitation process easier.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Collaborative CRM",
      description:
        "Is an instrument used for the improvement of communication and the collaboration of departments as well as teams that lie within the same organization.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Strategic CRM",
      description:
        "Focuses mostly on building up the long-term relationships with customers and updating the company growth strategies.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Management of Campaign CRM",
      description:
        "Makes it easier to carry out marketing campaigns using functions such as tracking, segmentation, and reporting.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Social CRM",
      description: "Permits the coupling of social media channels.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Define Your Business Goals and Needs",
      description:
        "Prior to defining the specific needs you have, you should simply figure out what goals in sales, marketing, and customer support you want to achieve.",
      image: assets.crm10,
      cardBg: "bg-blue-100",
    },
    {
      title: "Put a List of Necessary Features",
      description:
        "Set a priority for features like analytics, automation, reporting, and integration.",
      image: assets.crm11,
      cardBg: "bg-green-100",
    },
    {
      title: "Consider the Industry-Specific Requirements",
      description:
        "Try a CRM for your business and narrowly focus on the best results that you could have in the business area.",
      image: assets.crm12,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Evaluate Ease of Use and User Experience",
      description:
        "Check if the platform is user-friendly and it is easy for your team to get familiar with it.",
      image: assets.crm13,
      cardBg: "bg-pink-100",
    },
    {
      title: "Confirm Integration Capabilities with Existing Tools",
      description:
        "Ensure that the software is compatible with all the other software you use such as ERP, email marketing, and project management tools.",
      image: assets.crm14,
      cardBg: "bg-purple-100",
    },
    {
      title: "Check if the Software Vendor Is Trusted",
      description:
        "Are there positive reviews written by their customers? Make sure the vendor has a proven track record of reliability and support.",
      image: assets.crm15,
      cardBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          CRM & Management Solutions | Cloud CRM for Smarter Businesses –
          Capyngen
        </title>
        <meta
          name="description"
          content="Streamline your business with Capyngen’s CRM & Management Solutions. From customer relationship management to cloud CRM, we help you grow smarter and faster."
        />
        <meta
          name="keywords"
          content="CRM & Management Solutions | Cloud CRM for Smarter Businesses – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Banner14
        imageSrc={assets.crm1}
        imageAlt="Blockchain development illustration"
        title="Powerful "
        highlighted="CRM Management Solutions"
        subtitle=" to Grow Your Business"
        description="Organize client communications, increase revenue, and nurture customer loyalty with Capyngen’s state-of-the-art CRM tools tailored for small, medium, and large businesses."
        reverse={false}
      />

      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="What Capyngen Does Uniquely"
          description={[
            "Our products are customer relationship management system (CRM)software solutions that are customizable to client needs and are also enterprise-grade systems that produce business growth through customer engagement, process automation, and business optimization.",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          image={assets.crm2}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Upgrade customer relations, simplify business operations, and increase your revenue through the CRM management solutions offered by Capyngen. Reserve your session and experience the power of efficient business relationship management.",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What Are CRM Management Solutions?"
          description={[
            `CRM Management Solutions products are computer programs developed to facilitate customer relationship processes in companies, sales tracking, and making a business work on its own. These systems collect data on a customer's buying trends, enable the exchange of data between the various departments and, most importantly, assist in business process management solutions that boost productivity through organization and time-saving.`,
            `Capyngen bespoke cloud CRM solutions and CRM software development have the power to simplify business operations, win better customer relations and increase the business of your company.`,
          ]}
          image={assets.crm3}
          isHidden={true}
          imageHeight="aspect-[1/1]"
          background={assets.patternBg1}
        />
        <FullSizeImageSection
          backgroundImage={assets.crmSolFullSize}
          title="Strengthen relationships, simplify management"
          description="Our CRM systems are tailored to the needs of your business and designed to enhance connectivity and productivity."
          buttonText="Try CRM Demo"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSection
          heading="Advantages of Implementing CRM Management Solutions"
          subheading=""
          services={cardsSectionData1}
          headColor="text-white"
          cardBg="bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900"
          textSize="text-md"
          sectionBg="bg-gray-900"
          hoverBg="hover:from-indigo-800 hover:via-gray-800 hover:to-blue-900 hover:scale-105"
          textColor="text-white"
          hoverTextColor=""
        />
        <IndustryServices
          heading="Why Businesses Trust Capyngen"
          subheading=""
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={cardsSectionImageData2}
        />
        <CardsSection
          heading="CRM Management Solutions varieties"
          subheading=""
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
        />
        <FullSizeImageSection
          backgroundImage={assets.crmSolFullSize2}
          title="Manage smarter, grow faster"
          description="Use efficient methods to handle business activities easily, and at the same time increase overall performance, with the help of resourceful CRM instruments."
          buttonText="Start Managing"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSectionImage
          heading="How to Choose the Best CRM Management Solution for Your Business"
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
          title="Future Trends in CRM Management Solutions"
          description={[
            <>
              <li>
                The application of AI and machine learning in CRM – Better
                anticipation of the customer needs with the customization of the
                customer journeys.
              </li>
              <li>
                CRM solutions designed primarily for mobile devices – Get your
                customer information on the go, at any time, or any place.
              </li>
              <li>
                Customer insights through predictive analytics – To make the
                right strategic decisions by forecasting the market trends and
                customer behavior.
              </li>
            </>,
          ]}
          image={assets.crm16}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Why Choose Our CRM Management Solutions?"
          description={[
            <>
              <li>
                Unique features & benefits – Customised solutions that fit your
                company specifications.
              </li>
              <li>
                Security & compliance – Keep your customers' data safe using
                security procedures that are up to par with the industry's
                standards.
              </li>
              <li>
                Customer success stories – A history that shows increased
                customer engagement, sales, and retention worldwide.
              </li>
            </>,
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default CrmManagementSoftware;
