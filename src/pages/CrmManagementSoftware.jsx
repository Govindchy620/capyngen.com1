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
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/crm-management-software#webpage",
  url: "https://www.capyngen.com/crm-management-software",
  name: "CRM Management Services – India’s Best CRM Software Provider",
  description:
    "Get powerful CRM & management software designed to streamline sales, marketing, and customer relationships. Choose the best CRM management software for your business growth.",
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
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    caption: "CRM Management Services | Best CRM Software Provider in India",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/crm-management-software#service",
  name: "CRM Management Services – India’s Best CRM Software Provider",
  description:
    "Get powerful CRM & management software designed to streamline sales, marketing, and customer relationships. Choose the best CRM management software for your business growth.",
  url: "https://www.capyngen.com/crm-management-software",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "CRM Management Services",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/crm6-BQ4chRUW.png",
    caption: "CRM Management Services and CRM Software Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is CRM mainly used to do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The primary objective of a customer relationship management software solution is to systematise client data, track leads, increase sales, and enhance overall customer experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Can small businesses benefit from CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our CRM software development company offers cloud-based CRM solutions that are cost-effective, scalable, and ideal for small businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How different is ERP from CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ERP focuses on managing internal business processes, while CRM & management software is designed to handle sales activities and customer interactions.",
      },
    },
    {
      "@type": "Question",
      name: "How much should a CRM system cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM development company in India offers flexible pricing plans suitable for businesses of all sizes and operational requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Does CRM boost sales performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the best CRM software helps sales teams manage leads efficiently and improve conversions, resulting in higher sales performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide tailored CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen is a custom CRM software development company that builds CRM systems tailored to match your unique business workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Is CRM compatible with current tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide professional CRM software development integration and connector services to ensure compatibility with your existing tools.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries benefit most from CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM platforms are flexible and suitable for multiple industries, including e-commerce, healthcare, finance, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Does CRM improve customer retention?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, CRM management software helps track customer history and forecast needs, which improves customer loyalty and retention.",
      },
    },
    {
      "@type": "Question",
      name: "Does CRM have a mobile version?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our CRM software development solutions ensure full mobile compatibility for easy access on the go.",
      },
    },
    {
      "@type": "Question",
      name: "What about migrating from an existing CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen offers secure CRM migration and upgrade services to safely transfer data to your new CRM software solution.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide CRM training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all clients receive onboarding support and comprehensive training materials from our CRM development team.",
      },
    },
    {
      "@type": "Question",
      name: "How does CRM help in decision-making?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRM lead management software includes built-in analytics and dashboards that enable accurate reporting and faster decision-making.",
      },
    },
    {
      "@type": "Question",
      name: "How secure are Capyngen CRM systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM software is fully encrypted and includes access controls and compliance measures to ensure data security.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen CRM solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our CRM software development services team offers free consultations to help you plan your CRM solution and implementation roadmap.",
      },
    },
  ],
};

const CrmManagementSoftware = () => {
  const faqItems = [
    {
      question: "What is CRM mainly used to do?",
      answer:
        "The primary objective of a customer relationship management software solution is to systematise the data about clients, follow the leads, and make more sales and contribute to enhanced customer experiences.",
    },
    {
      question: "Can small businesses benefit from CRM?",
      answer:
        "Absolutely. Our CRM software development company offers cloud models that are both competitive and scalable in terms of the cost of setup.",
    },
    {
      question: "How different is ERP from CRM?",
      answer:
        "ERP manages internal processes, whereas CRM & management software emphasise sales and customer interactions.",
    },
    {
      question: "How much should a CRM system cost?",
      answer:
        "Our CRM development company in India has flexible pricing plans that can work with most businesses of any size and operational requirements.",
    },
    {
      question: "Does CRM boost sales performance?",
      answer:
        "Yes, the Best CRM software in world enables your team to work efficiently with leads, following conversions.",
    },
    {
      question: "Do you provide tailored CRM solutions?",
      answer:
        "Capyngen is a Custom CRM software development company that develops systems that match your business workflow.",
    },
    {
      question: "Is CRM compatible with the current tools?",
      answer:
        "Yes- with professional CRM software development integration and connector services.",
    },
    {
      question: "What are the most effective industries of CRM?",
      answer:
        "We have our CRM software development company platforms that are flexible to any industry, whether it is e-commerce or in healthcare and finance.",
    },
    {
      question: "Does CRM improve retention?",
      answer:
        "In fact, CRM management software will assist in the tracking history and forecasting customer need in order to increase loyalty.",
    },
    {
      question: "Does it have a mobile version?",
      answer:
        "Yes- our CRM software development solutions company in India has guaranteed mobile compatibility to have on-the-go access.",
    },
    {
      question: "What about the issue of migrating to my existing CRM?",
      answer:
        "Capyngen offers migration and upgrade solutions to move data safely to your new CRM software solutions.",
    },
    {
      question: "Do you provide CRM training?",
      answer:
        "Yes, all clients of the top CRM development company are provided with onboarding and comprehensive system support materials.",
    },
    {
      question: "What is the benefit of CRM to decision-making?",
      answer:
        "Crm lead management software is created with in-built analytics and dashboards that stimulate precise reporting and quicker decision-making.",
    },
    {
      question: "What is the level of security of Capyngen systems?",
      answer:
        "Our best CRM software is fully encrypted and has access control and compliance.",
    },
    {
      question: "What will be my starting point with Capyngen CRM solutions?",
      answer:
        "The team of CRM software development services is offering free consultations to help you plan your dream solution and roadmap.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Better Customer Relationships",
      description:
        "Connect better with clients with the help of personalisation based on data and the high-level insights provided by our CRM software development services.",
      icon: <FaAndroid className="text-4xl text-white" />,
    },
    {
      title: "Increased Sales & Revenue",
      description:
        "Automate the sales channels and manage the leads easily. The model of our CRM software development increases transparency and improves conversions - this is one of the main advantages of any CRM development company in India.",
      icon: <FaApple className="text-4xl text-white" />,
    },
    {
      title: "Better Productivity and Co-operation",
      description:
        "The best CRM management software is designed to work together, and hence the workforce is able to collaborate via the shared visualisation of the dashboards and workflow.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Data-Driven Decision Making",
      description:
        "Examine and identify the customer behaviour patterns. The CRM software development solutions company in India is Capyngen, which incorporates analytical systems that facilitate strong reporting.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "Better Customer Retention and Loyalty",
      description:
        "Anticipate customer intention ahead of trouble - the tools of our CRM software development company foster the growth of long-lasting loyalty.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "Marketing Made Easier",
      description:
        "Design and deploy the campaign that is supported by the data and has built-in analytics delivered by our CRM software solutions, so that it can reach more people and generate higher ROI.",
      icon: <FaCogs className="text-4xl text-white" />,
    },
  ];
  const cardsSectionImageData2 = [
    {
      image: assets.crm4,
      title: "Customised CRM Software Development",
      desc: "Our Custom CRM software development company develops systems that perfectly fit your processes and goals.",
    },
    {
      image: assets.crm5,
      title: "CRM Integration Services",
      desc: "Our CRM & management software is linked to ERP, finance and marketing databases through seamless API connections.",
    },
    {
      image: assets.crm6,
      title: "CRM Migration & Upgrade Solutions",
      desc: "Being one of the top CRM development company, we have no trouble with system transitions without losing any data.",
    },
    {
      image: assets.crm7,
      title: "CRM Consulting & Strategy",
      desc: "The CRM software development services are designed by our experts based on quantifiable outcomes, minimisation of downtime and cost of training.",
    },
    {
      image: assets.crm8,
      title: "CRM Support & Maintenance",
      desc: "The CRM software development is responsive and secure due to continuous update and 24/7 support.",
    },
    {
      image: assets.crm9,
      title: "Mobile CRM Solutions",
      desc: "Anywhere access- Anywhere access Your dashboards via secure mobile applications, which are driven by our CRM software development company.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Operational CRM",
      description:
        "Automates daily sales and service operations to make communication fast and more accurate by CRM management software.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Analytical CRM",
      description:
        "Makes big data decisions, relating CRM & management software findings to business strategy.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Collaborative CRM",
      description:
        "Enhances collaboration with centralized access by departments- ideal with the CRM management software scalability.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Strategic CRM",
      description:
        "Concentrates on profitable company-customer relations in terms of preemptive contact and retention.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Campaign Management CRM",
      description:
        "Makes marketing campaigns easier to execute in terms of segmentation and tracking of progress through the best CRM software platform.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Social CRM",
      description:
        "Under modern CRM software development services, links your social channels.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Define Your Business Goals and Needs",
      description:
        "It is a good idea to clarify your sales, service, and marketing goals before you buy any CRM software solutions.",
      image: assets.crm10,
      cardBg: "bg-blue-100",
    },
    {
      title: "List Necessary Features",
      description:
        "The key requirements to take into consideration during the review of CRM software development services are prioritisation on integrations, automation, and access via mobile devices.",
      image: assets.crm11,
      cardBg: "bg-green-100",
    },
    {
      title: "Assess Industry‑Specific Requirements",
      description:
        "Niche markets need flexible platforms- our team takes care of the best CRM software capability that fits your industry.",
      image: assets.crm12,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Evaluate Ease of Use and Experience",
      description:
        "Select an easy-to-use CRM management software that requires minimal time to onboard and maximise efficiency.",
      image: assets.crm13,
      cardBg: "bg-pink-100",
    },
    {
      title: "Check Integration with Existing Tools",
      description:
        "Our CRM software development firm provides a smooth integration in the ERP, project management, and CRM lead management software modules.",
      image: assets.crm14,
      cardBg: "bg-purple-100",
    },
    {
      title: "Confirm Trusted Vendor Credentials",
      description:
        "The history of a top CRM development company ensures quality support, transparency, and successful adoption by Capyngen.",
      image: assets.crm15,
      cardBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          CRM Management Services – India’s Best CRM Software Provider
        </title>
        <meta
          name="description"
          content="Get powerful CRM & management software designed to streamline sales, marketing, and customer relationships. Choose the best CRM management software for your business growth."
        />
        <meta
          name="keywords"
          content="CRM management software, best crm management software, crm management services"
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
        imageAlt="CRM management software, best crm management software, crm management services"
        title="Instant "
        highlighted="CRM Management Software Provider"
        subtitle=" – Get India’s #1 Trusted CRM Solution"
        description={
          <>
            Manage customer interactions, maximise sales, and develop customer
            loyalty using the state of the art CRM & management software that
            fits small, medium, and large businesses by Capyngen. As one of the{" "}
            <a
              href="https://www.capyngen.com/consulting"
              className="text-blue-500 font-semibold"
            >
              top consulting services in Gurgaon
            </a>
            , Capyngen helps organisations turn CRM into a real growth engine.
          </>
        }
        reverse={false}
      />

      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title={
            <span>
              What <Link to={"/"}>Capyngen</Link> Does Uniquely
            </span>
          }
          description={[
            "The customer relationship management software offered by Capyngen is more than just any ordinary automation. Our CRM software solutions platforms are open, enterprise-level and highly customised to the customer requirements. Every system is designed to provide quantifiable outcomes with the help of our CRM software development company, as it helps provide engagement to the clients, automate the processes, and optimise the operations.",
          ]}
          textSize="text-lg"
          buttonText="Get in Touch"
          image={assets.crm2}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Our best CRM software can help you upgrade relationships, streamline work processes, and maximise growth. Arrange a meeting with Capyngen, a Custom CRM software development company listed among the Top CRM development company innovators in Asia.",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What Are CRM Management Solutions?"
          description={[
            `CRM & management software are smart computers that help in tracking sales, managing communications, and automating business in a company. These channels collect information regarding customer behaviour, link departments, and facilitate business process management. The CRM software development services provided by Pyngen are aimed at ensuring that operations are smarter and assisting teams in creating long-term customer relationships.`,
            `Bespoke cloud CRMs of Capyngen are developed on the basis of the best CRM software development architecture that offers businesses the power to work smarter. Our best CRM management software allows your company to emphasise loyalty, data trends, and revenue generation.`,
          ]}
          image={assets.crm3}
          isHidden={true}
          imageHeight="aspect-[1/1]"
          background={assets.patternBg1}
        />
        <FullSizeImageSection
          backgroundImage={assets.crmSolFullSize}
          title="Strengthen relationships, simplify management"
          description="Our CRM software solutions are industry-specific, and productivity is optimised. Capyngen is a custom CRM software development company wherein each of the modules will lead to improved relationships, time management, and increased collaboration using CRM management software."
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
          description="Enhance performance with CRM & management software tailored to work processes in the contemporary era. Since Capyngen is a Custom CRM software development company, it guarantees excellent efficiency due to integration, automation, and analytics."
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
                <b>AI and Machine Learning Integration:</b> Intelligent CRM
                software development will anticipate trends and customise the
                customer experience.
              </li>
              <li>
                <b>Mobile CRM Preference:</b> On-the-go Services Cloud-based
                applications of major CRM software development services enable
                mobile access.
              </li>
              <li>
                <b>Predictive Analytics:</b> CRM software development company
                tools predict customer preference and stimulate customer
                engagement.
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
                Unique Features & Benefits - The CRM software development
                services offered by Capyngen will be scalable and well-automated
                to optimise each customer touch point.
              </li>
              <li>
                Security & Compliance - The CRM software development company
                that we have introduced applies encryption and GDPR-compliant
                attributes to protect the information of its users.
              </li>
              <li>
                Customer Success Stories - Capyngen is also among the Best CRM
                software in world in the category of the best results that have
                been delivered across industries, especially for clients seeking
                the{" "}
                <a
                  href="https://www.capyngen.com/devops-solutions"
                  className="text-blue-500 font-semibold"
                >
                  best DevOps agency in Gurgaon
                </a>{" "}
                level of reliability and performance in their CRM stack.
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
