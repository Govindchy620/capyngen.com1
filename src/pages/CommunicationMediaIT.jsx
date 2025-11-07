import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import SeoToolsSection from "../components/SeoToolsSection";
import SeoStatsSection from "../components/SeoStatsSection";
import Timeline from "../components/Timeline";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import StartupAgency from "../components/StartupAgency";
import SeoAgency from "../components/SeoAgency";
import {
  FaStore,
  FaCogs,
  FaCode,
  FaUsers,
  FaShieldAlt,
  FaChartLine,
  FaChartPie,
  FaExpand,
  FaVideo,
  FaWordpress,
  FaPlug,
  FaRobot,
  FaBullhorn,
  FaGlobe,
  FaChartBar,
  FaCreditCard,
  FaHeadset,
  FaNewspaper,
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
import WhyChoose from "../components/WhyChoose";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/communication-media-it#webpage",
  url: "https://www.capyngen.com/industries/communication-media-it",
  name: "IT Solutions for Media & Communication | Digital Transformation – Capyngen",
  description:
    "Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate.",
  inLanguage: "en",
  keywords:
    "Media and communication software solutions, Broadcasting software development",
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
    "IT Solutions for Media & Communication | Digital Transformation – Capyngen",
  name: "IT Solutions for Media & Communication | Digital Transformation – Capyngen",
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
  url: "https://www.capyngen.com/industries/communication-media-it",
  description:
    "Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate.",
  keywords:
    "Media and communication software solutions, Broadcasting software development",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "Media & Communication IT Solutions",
  serviceOutput:
    "Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kinds of communication solutions do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our communication solutions include unified communication platforms, VoIP systems, messaging apps, video conferencing solutions, and collaboration tools.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to create custom chat applications for the business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certainly, our work involves setting up a secure and scalable internal and external communication chat app for a business.",
      },
    },
    {
      "@type": "Question",
      name: "Are you providing any solutions for video conferencing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, in creating a top-notch video conferencing app, we also add the features of screen sharing, recording, and collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to have messaging and email integrated into one platform by you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we create a unified communication platform that brings together chat, email, and notification.",
      },
    },
    {
      "@type": "Question",
      name: "Are you developing mobile communication apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We create iOS and Android apps for instant messaging, video call, and VoIP communication.",
      },
    },
    {
      "@type": "Question",
      name: "Can your solutions be combined with CRM systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, communication platforms that we have can be linked up with CRM to improve customer engagement and support.",
      },
    },
    {
      "@type": "Question",
      name: "Would you be able to provide VoIP-based calling solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide VoIP apps with safe and quality call features for businesses, startups and companies in general.",
      },
    },
    {
      "@type": "Question",
      name: "Would it be possible for you to add real-time collaboration features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Real-time features, including file sharing, whiteboards, task management, and instant updates, can be added.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide AI-powered chatbots for communication apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we install AI chatbots in instant messaging for support including automatic response and user assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Are your platforms capable of handling large-scale enterprise communication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, they are designed to be adaptable and scalable, so they can serve as many as thousands of concurrent users without any trouble.",
      },
    },
    {
      "@type": "Question",
      name: "Are you offering cloud-based communication solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have communication platforms that are hosted on the cloud and are flexible and safe.",
      },
    },
    {
      "@type": "Question",
      name: "Can your products be integrated with social media platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, we allow users to send messages and receive notifications directly from apps like WhatsApp, Facebook and Slack which are already there.",
      },
    },
    {
      "@type": "Question",
      name: "Are privacy and encrypted data transmission among the features of your communication apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we follow best industry practices and employ top encryption methods and privacy protocols.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for you to design AI-powered analytics for communication platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the analytics activity will track the use, the participation, and the performance which will foster the decision-making process.",
      },
    },
    {
      "@type": "Question",
      name: "Are you willing to take care of communication solutions that require continuous upkeep and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer maintenance and continuous support services for all communication solutions we develop.",
      },
    },
  ],
};

const CommunicationMediaIT = () => {
  const faqItems = [
    {
      question: "What kinds of communication solutions do you provide?",
      answer:
        "Our communication solutions include unified communication platforms, VoIP systems, messaging apps, video conferencing solutions, and collaboration tools.",
    },
    {
      question:
        "Are you able to create custom chat applications for the business?",
      answer:
        "Certainly, our work involves setting up a secure and scalable internal and external communication chat app for a business.",
    },
    {
      question: "Are you providing any solutions for video conferencing?",
      answer:
        "Sure, in creating a top-notch video conferencing app, we also add the features of screen sharing, recording, and collaboration.",
    },
    {
      question:
        "Is it possible to have messaging and email integrated into one platform by you?",
      answer:
        "Definitely, we create a unified communication platform that brings together chat, email, and notification.",
    },
    {
      question: "Are you developing mobile communication apps?",
      answer:
        "Yes! We create iOS and Android apps for instant messaging, video call, and VoIP communication.",
    },
    {
      question: "Can your solutions be combined with CRM systems?",
      answer:
        "Definitely, communication platforms that we have can be linked up with CRM to improve customer engagement and support.",
    },
    {
      question: "Would you be able to provide VoIP-based calling solutions?",
      answer:
        "We provide VoIP apps with safe and quality call features for businesses, startups and companies in general.",
    },
    {
      question:
        "Would it be possible for you to add real-time collaboration features?",
      answer:
        "Yes. Real-time features, including file sharing, whiteboards, task management, and instant updates, can be added.",
    },
    {
      question: "Do you provide AI-powered chatbots for communication apps?",
      answer:
        "Yes, we install AI chatbots in instant messaging for support including automatic response and user assistance.",
    },
    {
      question:
        "Are your platforms capable of handling large-scale enterprise communication?",
      answer:
        "Yes, they are designed to be adaptable and scalable, so they can serve as many as thousands of concurrent users without any trouble.",
    },
    {
      question: "Are you offering cloud-based communication solutions?",
      answer:
        "We have communication platforms that are hosted on the cloud and are flexible and safe.",
    },
    {
      question: "Can your products be integrated with social media platforms?",
      answer:
        "Sure, we allow users to send messages and receive notifications directly from apps like WhatsApp, Facebook and Slack which are already there.",
    },
    {
      question:
        "Are privacy and encrypted data transmission among the features of your communication apps?",
      answer:
        "Yes, we follow best industry practices and employ top encryption methods and privacy protocols.",
    },
    {
      question:
        "Is it possible for you to design AI-powered analytics for communication platforms?",
      answer:
        "Yes, the analytics activity will track the use, the participation, and the performance which will foster the decision-making process.",
    },
    {
      question:
        "Are you willing to take care of communication solutions that require continuous upkeep and support?",
      answer:
        "Yes, we do offer continued support, upgrades, and troubleshooting until the solution is functioning smoothly.",
    },
  ];
  const servicesData = [
    {
      image: assets.communicationMedia2,
      title:
        "Lead Generation Through Digital Solutions For Media and Communication",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Responsive platforms for all devices.</li>
            <li>Boost visibility with SEO design.</li>
            <li>Build engaged digital communities.</li>
            <li>Run targeted Google and social media ads.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.communicationMedia3,
      title: "Reduction in Operational Costs",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Optimize broadcasting workflows.</li>
            <li>Lower integration costs with operators.</li>
            <li>Manage services via automation.</li>
            <li>Cut infrastructure costs with cloud streaming.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.communicationMedia4,
      title: "Sales & Engagement Expansion",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Launch new streaming and subscription channels.</li>
            <li>Promote brand with interactive media.</li>
            <li>Offer personalization to boost retention.</li>
            <li>Increase ARPU with premium solutions.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.communicationMedia5,
      title: "Predicted Results",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Improve customer engagement and loyalty.</li>
            <li>Increase average order and subscriptions.</li>
            <li>Grow exposure to high-margin digital products.</li>
            <li>Enhance cross-selling and upselling.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.communicationMedia6,
      title: "Advanced Communication Infrastructure",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Use reliable digital solutions in broadcasting.</li>
            <li>Cloud-based platforms for smooth communication.</li>
            <li>AI-powered data routing speeds responses.</li>
            <li>Unified chat, video, and voice platforms.</li>
          </ul>
        </>
      ),
    },
    {
      image: assets.communicationMedia7,
      title: "Smart Media Analytics & Audience Insights",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time engagement and trend monitoring.</li>
            <li>AI audience segmentation for smart targeting.</li>
            <li>Data visualization with actionable insights.</li>
            <li>Analytics that simplify marketing ROI.</li>
          </ul>
        </>
      ),
    },
  ];
  const panels = [
    {
      image: assets.communicationMediaBanner1,
      title: "Digital Solutions for the Connected Media World",
      desc: "Define the demand, and develop the transformation of the communication and media sectors through the usage of up-to-date IT solutions.",
    },
    {
      image: assets.communicationMediaBanner2,
      title: "Empowering the Digital Communication Era",
      desc: "Develop communication platforms based on content, powered by data, and massaged with a customer-centric approach.",
    },
    {
      image: assets.communicationMediaBanner3,
      title: "Media Meets Technology",
      desc: "Offer seamlessly immersive experiences with the use of automation, analytics, and intelligent systems.",
    },
    {
      image: assets.communicationMediaBanner4,
      title: "Transform Communication & Media with Innovation",
      desc: "Make the digitally enabled consumer engagement become the fastest way to access content and accelerate sales.",
    },
    {
      image: assets.communicationMediaBanner5,
      title: "The Future of Media is Digital",
      desc: "Through the marriage of latest tech innovations, creativity and connectivity have been brought to your fingertip delight.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Streaming Platform Development",
      description: "OTT, VOD, IPTV, and live streaming platforms.",
      icon: <FaVideo className="text-4xl text-white" />,
    },
    {
      title: "CMS for Media Industry",
      description:
        "WordPress, Joomla, and Drupal solutions for media companies.",
      icon: <FaWordpress className="text-4xl text-white" />,
    },
    {
      title: "Frameworks & Languages",
      description:
        "Laravel, Yii, CodeIgniter, CakePHP, and Core PHP development.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "Custom APIs",
      description: "Integration of third-party tools and telecom services.",
      icon: <FaPlug className="text-4xl text-white" />,
    },
    {
      title: "Ecosystem Platforms",
      description:
        "Shopify, Magento, and OpenCart for digital media solutions.",
      icon: <FaStore className="text-4xl text-white" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Enhance content personalization, automate moderation, and optimize streaming quality.",
      icon: <FaRobot className="text-4xl text-white" />,
    },
  ];
  const features = [
    {
      icon: <FaVideo className="text-4xl text-blue-400" />,
      title: "Instant streaming & broadcasting apps",
    },
    {
      icon: <FaCreditCard className="text-4xl text-green-400" />,
      title: "Subscription and billing-enabled media apps",
    },
    {
      icon: <FaHeadset className="text-4xl text-yellow-400" />,
      title: "Telecom customer service and workflow apps",
    },
    {
      icon: <FaNewspaper className="text-4xl text-pink-400" />,
      title: "Interactive Content management for Media Industry apps",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          IT Solutions for Media & Communication | Digital Transformation –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate."
        />
        <meta
          name="keywords"
          content="IT Solutions for Media & Communication | Digital Transformation – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <ExpandableGallery panels={panels} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Power Your Media with Intelligent IT Solutions"
        description={[
          "Transform the way you create and share your content with Capyngen’s cutting-edge digital solutions for Media and Communication.",
        ]}
        buttonText="Seize a Free Consultation Right Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Software solutions For Media and communication"
        description={[
          <span>
            Capyngen delivers future <Link to={"/"}>IT solutions</Link> For
            Media and communication that are designed based on the needs of
            broadcasting networks, telecom operators, streaming platforms, and
            Digital Transformation for Media Industry publishers. Their
            platforms are not only scalable, self-managed but also responsive,
            so these companies can decide their content, broadcasting, and
            digital workflows efficiently even without having technical skills
            of a high level.
          </span>,
          `The extensive range of software solutions For Media and communication that we offer encompasses software broadcasting, digital media platform, telecom software solution, streaming platform development, and Content management for Media Industry that stabilize business growth, scalability, and innovation.`,
          `With Capyngen, however, you are not only buying software but also the technology, guidance, and experience that are essential for your success in the media and communication field.`,
        ]}
        imageHeight="md:aspect-[1/1]"
        image={assets.communicationMedia1}
        isHidden={true}
        background={assets.patternBg1}
      />
      <IndustryServices
        heading="The Solutions We Offer"
        subheading=""
        services={servicesData}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Innovate. Engage. Transform."
        description={[
          "Mobilize the efficacy with software solutions for Media and Communication that are tailor-made for quickness and creative thinking.",
        ]}
        buttonText="Have a Conversation with Our Experts"
        backgroundVideo={assets.backgroundVideo}
      />
      <CardsSection
        heading="On Which Platforms Do We Work To Make Media More Effective"
        subheading={
          <>
            <p>
              To achieve success, both the performance, and the scalability of
              your software media and communication product have to rest upon a
              solid base. Capyngen adopts a variety of platforms and frameworks
              for different cases to provide tailored solutions.
            </p>
            <h3 className="text-3xl md:text-4xl pt-5 font-semibold">
              Broadcasting software solutions For Media and communication:
              Software designed for telecom & broadcasting networks
            </h3>
          </>
        }
        services={cardsSectionData1}
        headColor="text-white"
        cardBg="bg-gradient-to-br from-gray-900 to-blue-800"
        textSize="text-md"
        sectionBg="bg-gray-900"
        hoverBg="hover:from-indigo-800 hover:via-gray-800 hover:to-blue-900 hover:scale-105"
        textColor="text-white"
        hoverTextColor=""
      />
      <WhyChoose
        heading="Mobile and Web Media Apps"
        intro="We create mobile and web applications that allow businesses from different sectors to facilitate broadcasting, content delivery, and user engagement."
        features={features}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Go Digital Confidently"
        description={[
          "Rethink your processes with the digital overhaul of the Media Industry facilitated by Capyngen.",
        ]}
        textSize="text-2xl"
        buttonText="Grab a Demo Right Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default CommunicationMediaIT;
