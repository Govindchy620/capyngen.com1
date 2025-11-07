import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import {
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import FAQSection2 from "../components/FAQSection2";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/travel-logistics#webpage",
  url: "https://www.capyngen.com/industries/travel-logistics",
  name: "IT Solutions for Travel & Logistics | Best IT Solutions for Logistics Companies",
  description:
    "Optimize your operations with Capyngen’s IT solutions for travel and logistics. We provide custom software, web, and digital solutions to enhance business efficiency.",
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
    url: "https://www.capyngen.com/assets/travel10-ZxsQiAke.png",
    width: 1200,
    height: 800,
    caption: "IT Solutions for Travel & Logistics by Capyngen",
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
        name: "Travel & Logistics",
        item: "https://www.capyngen.com/industries/travel-logistics",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Solutions for Travel and Logistics Industry",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://twitter.com/capyngen",
    ],
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  url: "https://www.capyngen.com/industries/travel-logistics",
  description:
    "Capyngen provides travel and logistics businesses with high-performance websites, digital marketing campaigns, and data analytics solutions to optimize operations and customer engagement.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel & Logistics Industry Digital Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Travel Website & App Development",
          description:
            "Custom-built travel and logistics platforms with real-time booking systems, maps integration, and optimized user experiences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing for Travel & Logistics",
          description:
            "Data-driven PPC, SEO, and content marketing strategies to increase visibility, traffic, and bookings for travel companies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design for Travel Platforms",
          description:
            "Intuitive and visually appealing UI/UX designs that improve user journeys for travel portals and logistics dashboards.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Analytics and Automation",
          description:
            "Advanced analytics and automation tools to help logistics companies optimize routes, costs, and performance.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/travel12-CUXFNTZg.png",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/industries/travel-logistics#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are IT solutions for travel and logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They refer to digital systems and software created to automate, optimize, and upgrade the processes of travel and logistics industries—from bookings to delivery tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How do Capyngen’s digital solutions help logistics companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen’s IT solutions for logistics companies help automate operations, improve tracking accuracy, and enhance supply chain visibility for greater efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of web development do you offer for travel and logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build custom websites and mobile apps for online booking, cargo tracking, and customer service, all optimized for performance and user experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build custom software for logistics management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our tailor-made software for travel and logistics handles fleet management, inventory, dispatching, and analytics—customized for each client’s needs.",
      },
    },
    {
      "@type": "Question",
      name: "Are your systems cloud-based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We specialize in cloud-based platforms that provide real-time access, scalability, and robust security for travel and logistics operations.",
      },
    },
    {
      "@type": "Question",
      name: "How do AI and analytics improve logistics performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI and analytics help with demand forecasting, predictive maintenance, and route optimization—saving time, reducing costs, and improving efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Do you ensure data security and compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We follow strict security and data protection standards such as ISO 27001, GDPR, and PCI DSS to ensure complete compliance.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing ERP or CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our systems are designed for seamless integration with your existing ERP or CRM using secure APIs and middleware.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-deployment support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide comprehensive post-deployment support, including maintenance, updates, and performance monitoring to ensure smooth operation.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose Capyngen for IT solutions in travel and logistics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because we deliver scalable, secure, and intelligent digital solutions that keep your travel and logistics business efficient, connected, and future-ready.",
      },
    },
  ],
};

const TravelAndLogistics = () => {
  const faqItems = [
    {
      question: "What are IT solutions for travel and logistics?",
      answer:
        "They refer to digital systems and software that are created for automation, optimization and upgrading the processes of travel and logistics industries along with the rest of the chain from bookings to delivery tracking.",
    },
    {
      question: "How do Capyngen’s digital solutions help logistics companies?",
      answer:
        "Our top IT solutions for logistics companies make it possible to automate operations, give better accuracy in tracking, and allow more visibility in the supply chain for better effectiveness.",
    },
    {
      question:
        "What kind of web development do you offer for travel and logistics?",
      answer:
        "We build custom websites and apps, optimized for mobile devices, which facilitate online booking, cargo tracking, and customer service.",
    },
    {
      question: "Do you build custom software for logistics management?",
      answer:
        "Yep. Our tailor-made software for travel and logistics takes care of fleet management, inventory, dispatching, and analytics, all customized for each project.",
    },
    {
      question: "Are your systems cloud-based?",
      answer:
        "Sure! We are all for cloud-based platforms with great features such as real-time access, scalability, and high security for travel and logistics operations.",
    },
    {
      question: "How do AI and analytics improve logistics performance?",
      answer:
        "The technology gives detailed information about demand forecasting, predictive maintenance, and route optimization, through which hours of work are saved while costs are lowered.",
    },
    {
      question: "Do you ensure data security and compliance?",
      answer:
        "Of course, we adopt security and data protection policies that meet the rigor of international standards. For example, ISO 27001, GDPR, and PCI DSS.",
    },
    {
      question: "Can you integrate with our existing ERP or CRM?",
      answer:
        "Certainly! Our services are architected in such a way that they would seamlessly plug into the existing enterprise systems; ERP or CRM without any hassle, using APIs and middleware which are secure.",
    },
    {
      question: "Do you offer post-deployment support?",
      answer:
        "Definitely! Our comprehensive service package, which includes continuous support, maintenance, and performance monitoring, is there to assure optimal operation.",
    },
    {
      question: "Why choose Capyngen for IT solutions in travel and logistics?",
      answer:
        "Just because we don't only come up with digital solutions for travel and logistics that are scalable, secure, and intelligent but also we make sure that it is the one that keeps your business efficient, connected, and future-ready.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "End-to-End Digital Transformation",
      description:
        "We create and implement digital solutions for the travel and logistics industries that automate bookings, dispatch, tracking, payments, and performance analytics — all unified into a single system.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Scalable and Custom IT Frameworks",
      description:
        "No two companies are alike. Our tailor-made software for transportation and logistics adapts to how your business operates, ensuring your digital ecosystem grows with your expansion.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Superior User Experience",
      description:
        "From booking portals to shipment tracking dashboards, our web development for travel and logistics prioritizes simple UI/UX designs that enhance smooth browsing and user engagement.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Data-Driven Decision-Making",
      description:
        "Leverage real-time data insights to optimize routes, understand customers, and forecast demand — empowering you to make smarter business decisions faster than ever before.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Security and Compliance",
      description:
        "We follow rigorous cybersecurity best practices to protect travel data, shipment details, and payment records while ensuring compliance with GDPR, PCI DSS, and other standards.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Seamless System Integration",
      description:
        "Our IT solutions integrate effortlessly with ERP, CRM, warehouse management, and transport systems, delivering transparent operations across your entire business workflow.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Enhanced Operational Efficiency",
      description:
        "Automate tasks that are typically manual, reduce errors, and gain full visibility over operations from booking to delivery for smoother management.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Seamless Travel Experiences",
      description:
        "Our digital solutions make booking faster, provide real-time updates, and offer personalized experiences for travelers.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Optimized Fleet & Route Planning",
      description:
        "Leverage AI algorithms to optimize transport routes, reduce fuel costs, and ensure timely vehicle operations.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Cloud-Powered Scalability",
      description:
        "Utilize secure cloud systems that handle high data volumes and multiple users, allowing your digital architecture to scale effortlessly.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Reduced Costs",
      description:
        "Automation and integration help minimize administrative overhead, resource waste, and delays, resulting in higher ROI.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Global Accessibility",
      description:
        "Whether managing a travel agency, logistics network, or courier company, our web and mobile systems allow you to oversee operations from anywhere in the world.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "Travel Agencies & Tour Operators",
      desc: "Control online bookings, adjust prices automatically, and maintain seamless communication with customers.",
      image: assets.travel14,
      textColor: "text-white",
    },
    {
      title: "Logistics & Transportation Firms",
      desc: "Trace operations in real time and automate route scheduling and tracking efficiently.",
      image: assets.travel15,
      textColor: "text-white",
    },
    {
      title: "Airlines & Rail Companies",
      desc: "Unified systems allow smooth ticketing, customer service, and scheduling for passenger comfort.",
      image: assets.travel16,
      textColor: "text-white",
    },
    {
      title: "Freight Forwarders & Warehouses",
      desc: "Integrate ERP and inventory systems to maintain a smooth and transparent supply chain.",
      image: assets.travel17,
      textColor: "text-white",
    },
    {
      title: "Courier & Delivery Services",
      desc: "Use GPS tracking and automation tools to ensure timely and reliable deliveries.",
      image: assets.travel18,
      textColor: "text-white",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Travel Booking & Management Platforms",
      description:
        "Build web platforms for tour operators, travel agencies, and transportation providers to handle reservations, ticketing, and payments quickly and securely through a unified system.",
      image: assets.travel1,
      cardBg: "bg-blue-100",
    },
    {
      title: "Fleet & Transport Management Systems",
      description:
        "Optimize logistics operations through real-time route planning, driver assignment management, and vehicle performance monitoring with smart IT solutions.",
      image: assets.travel2,
      cardBg: "bg-green-100",
    },
    {
      title: "Warehouse & Inventory Software",
      description:
        "Keep stock levels up to date, automate dispatch processes, and manage multi-location inventories with uninterrupted data synchronization.",
      image: assets.travel3,
      cardBg: "bg-yellow-100",
    },
    {
      title: "CRM & Customer Experience Platforms",
      description:
        "Enable travel and logistics companies to personalize communication, track interactions, and automate CRM workflows for better customer engagement and satisfaction.",
      image: assets.travel4,
      cardBg: "bg-purple-100",
    },
    {
      title: "Web & Mobile Development",
      description:
        "Create responsive web and mobile applications that provide seamless booking, tracking, and customer support experiences across the entire travel journey.",
      image: assets.travel5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Data Analytics & Predictive Intelligence",
      description:
        "Leverage AI-based predictive analytics to enhance logistics operations, forecast travel demand, and make smarter, data-driven decisions in real time.",
      image: assets.travel6,
      cardBg: "bg-orange-100",
    },
    {
      title: "Cloud & Infrastructure Solutions",
      description:
        "Adopt secure, scalable, and cost-efficient cloud systems that ensure 24/7 uptime and accessibility for travel and logistics operations worldwide.",
      image: assets.travel7,
      cardBg: "bg-indigo-100",
    },
    {
      title: "AI Chatbots & Automation Systems",
      description:
        "Integrate intelligent chatbots and automation tools for instant customer support, booking management, and query resolution, improving efficiency and engagement.",
      image: assets.travel8,
      cardBg: "bg-teal-100",
    },
    {
      title: "Blockchain & Smart Contracts for Logistics",
      description:
        "Enhance transparency, traceability, and trust in logistics and supply chain processes using blockchain and smart contract-based automation.",
      image: assets.travel9,
      cardBg: "bg-red-100",
    },
  ];
  const slidesData = [
    {
      image: assets.travel10,
      heading: "Drive Efficiency with Smart Travel & Logistics Solutions",
      description: (
        <>
          <p>
            Digital innovation enables simple routes, efficient supply chains,
            and customer experience enhancement.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.travel11,
      heading: "Connecting the World Through Technology",
      description: (
        <>
          <p>
            Make travel and logistics operations more powerful with the help of
            automation, AI, and real-time analytics.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.travel12,
      heading: "Smart Logistics for a Fast-Moving World",
      description: (
        <>
          <p>
            Digitalize operations to bring down your costs, improve your
            accuracy, and facilitate your movement with no interruptions.
          </p>
        </>
      ),
      price: "",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          IT Solutions for Travel & Logistics | Best IT Solutions for Logistics
          Companies
        </title>
        <meta
          name="description"
          content="Optimize your operations with Capyngen’s IT solutions for travel and logistics. We provide custom software, web, and digital solutions to enhance business efficiency."
        />
        <meta
          name="keywords"
          content="IT Solutions for Travel & Logistics | Best IT Solutions for Logistics Companies"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <CreativeAgencyFAQ
        slides={slidesData}
        slideDuration={4000}
        headingClass="text-4xl md:text-5xl font-extrabold mb-6"
        descClass="text-lg leading-relaxed mb-8 text-gray-300"
        buttonGradient="from-blue-500 to-purple-600"
        priceLabel=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Consult Me for Free!"
        description={[
          "Turn your travel or logistics business upside down with Capyngen’s digital solutions for travel and logistics – from automation to analytics, we create systems that revolutionize the world.",
        ]}
        buttonText="Consult With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <GetStarted
        reverse={true}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="IT Solution For Travel and logistics"
        description={[
          "The travel and logistics industry has been undergoing a series of rapid changes that mainly come from digital transformation, automation, and a rise in customer expectations. The need for smart systems that can do tasks like dynamic pricing, route optimization, online bookings, and end-to-end supply chain visibility is now a must for companies.",
          "Capyngen gives you the Best IT solutions for logistics companies that link every department of your company — from fleet management to customer engagement.",
        ]}
        image={assets.travel13}
      />

      <CardsSection
        heading="Why Travel & Logistics Companies Choose Capyngen"
        subheading=""
        services={cardsSectionData1}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
      />
      <CardsSectionImage
        heading="Capyngen’s Core Travel & Logistics IT Offerings"
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
        title="Do you want to update your transport or logistics business with the latest technology?"
        description={[
          "Why not have a chat with one of our specialists now? We will show you how Capyngen’s IT solutions for transport and logistics could be the key to your smart, speedy and profitable operations.",
        ]}
        buttonText="Chat With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <CardsSection
        heading="Advantages of Capyngen’s IT Solutions"
        subheading=""
        services={cardsSectionData2}
        sectionBg="bg-black"
        cardBg="bg-gray-800 hover:bg-gray-900 transition-all duration-400 ease-in-out hover:shadow-2xl hover:shadow-gray-700/70 hover:-translate-y-2"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
        height="h-78"
      />
      <CardsSectionSlider
        heading="Industries We Serve"
        subheading=""
        cardBg="bg-transparent"
        hoverBg=" hover:bg-blue-50"
        textColor="text-gray-800"
        hoverTextColor=""
        textSize="text-xl"
        sectionBg="bg-black/90"
        height="h-78"
        headColor="text-white"
        services={cardsSectionSliderData1}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Let’s Redefine the Future of Travel & Logistics!"
        description={[
          "Capyngen’s bespoke software for travel and logistics is the perfect recipe for your company to be operationally excellent, transparent, and customer delightful. Reach out to us when you’re ready to start.",
        ]}
        buttonText="Work With Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default TravelAndLogistics;
