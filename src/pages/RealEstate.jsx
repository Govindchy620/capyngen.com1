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
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
  FaMapMarkerAlt,
  FaVideo,
  FaBullseye,
  FaExpand,
  FaChartLine,
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
import Banner6 from "../components/Banner6";
import GetStarted from "../components/GetStarted";
import TopRatedCompany from "../components/TopRatedCompany";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import CardsSection from "../components/CardsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";

const RealEstate = () => {
  const faqItems = [
    {
      question: "What are real estate software development services?",
      answer:
        "Real estate software development services refer to the creation of property websites, portals, mobile apps, and custom management software that is aimed at easing real estate transactions.",
    },
    {
      question: "What is property management software?",
      answer:
        "Efficient software for managing listings, tenants, payments, maintenance, and overall property operations.",
    },
    {
      question: "What are real estate CRM solutions?",
      answer:
        "Real estate CRM solutions bring about lead tracking, relationship management, and quicker deal closure.",
    },
    {
      question: "What is real estate portal development?",
      answer:
        "A process of designing portals or platforms that show a range of properties for sale or rent and which allow users to apply filters or make inquiries.",
    },
    {
      question: "How can a tenant management system help property owners?",
      answer:
        "The system facilitates tenant onboarding, rent tracking, and the whole communication process making the property management easier.",
    },
    {
      question: "What is construction project management software?",
      answer:
        "Efficient software for planning, scheduling, and managing construction projects, budgets, and teams.",
    },
    {
      question: "Do you offer real estate mobile applications?",
      answer:
        "Sure, Capyngen is one of the companies that build mobile apps for property searches, lead management, and virtual tours.",
    },
    {
      question: "Can you create custom property management software?",
      answer:
        "Absolutely, we customize solutions for the specific real estate needs of your business.",
    },
    {
      question: "How does Capyngen improve lead generation?",
      answer:
        "Capyngen attracts qualified buyers and tenants through diverse marketing channels such as SEO, local SEO, social media campaigns, and targeted ads.",
    },
    {
      question: "Do you provide CRM integration with real estate websites?",
      answer:
        "Yes, we connect the CRM systems with websites to make the process of getting leads, following them up, and closing sales more efficient.",
    },
    {
      question: "What industries benefit from your real estate solutions?",
      answer:
        "Inter alia, real estate agencies, property brokers, developers, listing portals, rental businesses, the luxury real estate market.",
    },
    {
      question: "Is your real estate software scalable?",
      answer:
        "Yes, solutions are built with scalability from varying sizes of agencies to large property portals in mind.",
    },
    {
      question: "How secure is the property data?",
      answer:
        "We implement security measures that are up to industry-standard in order to secure information on clients, tenants, and properties.",
    },
    {
      question: "How long does it take to develop a property portal?",
      answer:
        "Feature dependent, the usually full deployment time will be within 8–16 weeks.",
    },
    {
      question: "Why choose Capyngen for real estate software development?",
      answer:
        "The best of both worlds with IT, real estate, and digital marketing at the forefront, we go the whole nine yards to provide you with end-to-end, scalable, and ROI-driven solutions.",
    },
  ];
  const servicesData1 = [
    {
      image: assets.realEstate3,
      title: "Real Estate Websites & Apps",
      desc: "You can make user-friendly property listing websites by implementing UI & UX Design for Real estate Industry along with advanced search, filter and contact features.",
    },
    {
      image: assets.realEstate4,
      title: "MLS/IDX Integration",
      desc: "Directly link your site with the most significant multiple listing service databases to keep your property listings up to date and get market insights.",
    },
    {
      image: assets.realEstate5,
      title: "3D Virtual Tours & AR/VR",
      desc: "Enable buyers to take a feel of your property through immersive visualizations and, in such way, you can attract them.",
    },
    {
      image: assets.realEstate6,
      title: "CRM Integration",
      desc: "Manage the generated leads, follow-ups, and deals in an efficient way.",
    },
    {
      image: assets.realEstate7,
      title: "Cloud & Hosting",
      desc: "The provision of safe, fast, and powerful platforms for seamless data storage and transfer is ensured by us.",
    },
    {
      image: assets.realEstate8,
      title: "Maintenance & Support",
      desc: "Offer a service that will keep your real estate sites updated and accessible to anyone at any time.",
    },
  ];
  const servicesData2 = [
    {
      image: assets.realEstate9,
      title: "SEO for Real Estate Websites",
      desc: "By getting listed on local property-related queries, your website's traffic will increase.",
    },
    {
      image: assets.realEstate10,
      title: "Local SEO & Maps Optimization",
      desc: "Find local buyers using Google Maps who are searching for your property.",
    },
    {
      image: assets.realEstate11,
      title: "Social Media Marketing",
      desc: "Effortlessly gain more visibility on Facebook, Instagram, and LinkedIn.",
    },
    {
      image: assets.realEstate12,
      title: "Lead Gen Ads",
      desc: "Run targeted Google and social campaigns which are specifically designed to deliver qualified leads.",
    },
    {
      image: assets.realEstate13,
      title: "Content & Video Advertising",
      desc: "Build brand trust through blogs, reels, and walkthroughs.",
    },
    {
      image: assets.realEstate14,
      title: "Email & Automation",
      desc: "Nurture your leads with updates and promotions regarding the property.",
    },
  ];
  const typesData = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Localized Targeting",
      desc: "Reach potential buyers of specific towns or regions in a highly effective manner.",
    },
    {
      icon: <FaVideo />,
      title: "Virtual Property Exhibitions",
      desc: "Combine serious buyers and save time.",
    },
    {
      icon: <FaBullseye />,
      title: "Lead Generation Focused",
      desc: "Improve ROI by concentrating on targeted efforts.",
    },
    {
      icon: <FaExpand />,
      title: "Scalable Solutions",
      desc: "Suiting from small brokers to large portals.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Data Handling",
      desc: "Protect the property, buyer, and seller information.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics & Insights",
      desc: "Track user behavior, campaign performance, and property engagement for data-driven decisions.",
    },
  ];
  const slidesData = [
    {
      id: 1,
      title: "Real Estate Powered by Technology",
      subtitle:
        "Digital platforms enabled by AI have the power to simplify everything from property management to listings and customer interactions.",
      image: assets.realEstateBanner1,
      ctaText: "Explore Projects",
      ctaLink: "#projects",
    },
    {
      id: 2,
      title: "Digital Solutions for Modern Real Estate Businesses",
      subtitle:
        "Safeguarded, automated, and AI-infused solutions are the shortest and easiest way to get buyers, sellers, and agents connected.",
      image: assets.realEstateBanner3,
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
    {
      id: 3,
      title: "Transforming Real Estate with Innovation",
      subtitle:
        "The use of data analytics and automation in real estate sector has resulted in the increased visibility of properties and profits made on them.",
      image: assets.realEstateBanner2,
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.realEstate15,
      title: "Real Estate Agencies & Brokers",
    },
    {
      image: assets.realEstate16,
      title: "Property Developers & Builders",
    },
    {
      image: assets.realEstate17,
      title: "Property Listing Portals",
    },
    {
      image: assets.realEstate18,
      title: "Rental & Leasing Businesses",
    },
    {
      image: assets.realEstate19,
      title: "Co-working & Commercial Spaces",
    },
    {
      image: assets.realEstate20,
      title: "Luxury Real Estate Brands",
    },
  ];

  return (
    <div className="">
      <Helmet>
        <title>
          IT Solutions for Real Estate | Web & UI/UX Design Services – Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen provides innovative IT solutions for the real estate industry. From web design to UI/UX services, we help real estate brands go digital and grow faster."
        />
        <meta
          name="keywords"
          content="IT Solutions for Real Estate | Web & UI/UX Design Services – Capyngen"
        />
      </Helmet>
      <Banner6
        slides={slidesData}
        autoplay={true}
        autoplaySpeed={4000}
        showDots={true}
        textColor="text-white"
        arrowColor="text-white"
        bgHover="hover:bg-white/20"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Turn Your Real Estate Business Around Today"
        description={[
          "Lead the real estate market with a variety of IT Services for Real Estate that empower you to create leads, close deals faster, and build a strong online presence.",
        ]}
        buttonText="Contact Us"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="IT Solutions for Real Estate"
        description={[
          "Day by day, technology is rapidly evolving and so are said technologies have to be applied in the real estate sector. Hence, real estate businesses have to adopt modern IT tools to keep up their competitive advantages over their rivals, improve the customer experience, and simplify their operational processes.",
          "Our company offers real estate IT solutions which are uniquely tailored to the specific requirements of the real estate sector. If you are a real estate developer, agent, or broker, we can help you work more efficiently with our IT solutions in the real estate field through listings, process flows, and client interaction, etc.",
        ]}
        image={assets.realEstate1}
        background={assets.patternBg1}
        isHidden="hidden"
        imageHeight="aspect-[1/1]"
      />
      <TopRatedCompany
        title="Why Real Estate Needs Digital Transformation"
        description={[
          "The real estate market has changed big time. However, just before making the final purchase offline, the first thing that buyers and investors now do is to look for options online.",
          "Adding a robust online presence supplemented by IT solutions for property is turning out to be a winning strategy as it creates trust, brings more visibility, and speeds up the process of reaching out to potential customers.",
          "Capyngen's Web Designing for Real Estate combines both technology and strategy to provide real estate businesses with the tools to showcase the properties effectively, save on marketing expenses, and make more profits through real estate CRM solutions, property management software, and enhanced web design for real estate.",
        ]}
        image={assets.realEstate2}
        background={assets.patternBg1}
        reverse={true}
        isHidden="hidden"
      />
      <h2 className="bg-black text-center text-white text-5xl font-extrabold">
        Best IT Solutions for Real Estate
      </h2>
      <IndustryServices
        heading="IT & Web Solutions"
        subheading=""
        services={servicesData1}
      />
      <IndustryServices
        heading="Digital Marketing Solutions"
        subheading=""
        services={servicesData2}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Book Your Free Real Estate IT Consultation"
        description={[
          "Schedule a call with our professionals, give them your goals, and let them show you the finest IT services for property professionals to uplift your property business.",
        ]}
        buttonText="Schedule a Call Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Features & Benefits"
        subheading=""
        buttonText="Let's Contact"
        image={assets.realEstate14}
        types={typesData}
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
        title="Why Capyngen?"
        description={[
          "Capyngen brings real estate IT solutions tailored for performance and growth. Combining marketing and IT under one roof, we provide seamless implementation, better lead generation, and faster growth. Our expertise in real estate web design, property management software, and CRM integration undoubtedly makes you the market leader.",
          "If you want to sell properties faster, get more leads, and enhance your brand, then Capyngen is the tech partner for you.",
        ]}
        image={assets.realEstate21}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Kick Off with Capyngen's Real Estate Solutions"
        description={[
          "Collaborate with one of the leading providers of real estate IT solutions and revolutionize your property business via cost-effective digital solutions.",
        ]}
        textSize="text-2xl"
        buttonText="Collaborate with Us Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default RealEstate;
