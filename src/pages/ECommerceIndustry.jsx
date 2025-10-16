import React from "react";
import { assets } from "../assets/assets";
import Banner6 from "../components/Banner6";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import {
  FaBuilding,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaExpand,
  FaGlobe,
  FaHeartbeat,
  FaIndustry,
  FaMoneyBillWave,
  FaRocket,
  FaShoppingCart,
  FaUniversity,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import GetStarted from "../components/GetStarted";
import BenefitsSection from "../components/BenefitsSection";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";

const ECommerceIndustry = () => {
  const faqItems = [
    {
      question: "What are IT solutions for e-commerce?",
      answer:
        "These are technology services that provide online businesses with the development, management, and growth of their sites efficiently, including AI, CRM, DevOps, and UI/UX design.",
    },
    {
      question:
        "In what ways can Internet sites' online shopping experience be enhanced and perfected through artificial intelligence-based solutions?",
      answer:
        "AI personalizes the purchasing experience, streamlines customer service, predicts trends, and boosts sales through data-driven decision-making.",
    },
    {
      question:
        "What is the specific duty and contribution that is given by DevOps in the scenario of e-commerce?",
      answer:
        "DevOps facilitates rapid development, predictable performance, and scalability for e-commerce platforms and applications.",
    },
    {
      question:
        "Why is CRM software critical in e-commerce businesses that are operating in today's internet market?",
      answer:
        "CRM helps with the management of customer data, automates marketing processes, and increases customer retention through personalized interaction.",
    },
    {
      question: "In what ways does UI/UX design impact online sales?",
      answer:
        "An interface that is user-friendly guides the customer journey, builds credibility, and increases conversions through a seamless purchase experience.",
    },
    {
      question:
        "What exactly does digital transformation mean in the context of the e-commerce sector?",
      answer:
        "It entails incorporating modern technologies to automate operations, enhance customer experience, and foster a culture of innovation in business.",
    },
    {
      question:
        "Do these solutions possess the correct features and functionalities implemented in them that can efficiently handle and support international e-commerce operations?",
      answer:
        "Yes, our products are scalable and support worldwide traffic, multiple languages, and global compliance.",
    },
    {
      question: "Can your AI products be customized to fit varying businesses?",
      answer:
        "Without a doubt — we tailor and customize every artificial intelligence model and integration uniquely to match your business requirements.",
    },
    {
      question:
        "How long would it take on average to properly install these different IT solutions?",
      answer:
        "The time frame depends on the project scope — small setups may take a few weeks, while full-scale transformations can take several months.",
    },
    {
      question:
        "Will you provide maintenance and support after the initial introduction phase?",
      answer:
        "Yes, we offer routine maintenance, timely updates, and optimization to ensure your site performs at the highest level.",
    },
    {
      question: "Can the app be mobile-first and cross-platform?",
      answer:
        "Yes, we create responsive and cross-platform e-commerce apps to ensure seamless user experiences across all devices.",
    },
    {
      question: "How do you ensure excellent UI/UX for e-commerce apps?",
      answer:
        "We deliver e-commerce apps that follow industry UI/UX standards, user-centric design principles, and responsive layouts to maximize engagement.",
    },
    {
      question: "Are analytics and reporting features included?",
      answer:
        "Yes, analytics and reporting are included — giving you access to sales reports, customer behavior insights, and performance tracking to plan growth effectively.",
    },
    {
      question:
        "Can you migrate my existing online store to a custom e-commerce platform?",
      answer:
        "Yes, we handle migrations seamlessly from Shopify, Magento, or WooCommerce to fully customized e-commerce solutions.",
    },
    {
      question: "Do your services cover both B2B and B2C e-commerce solutions?",
      answer:
        "We specialize in developing tailored B2B and B2C e-commerce applications, marketplace platforms, and online stores for all business types.",
    },
  ];
  const slidesData = [
    {
      id: 1,
      title: "Redefine Online Retail with Scalable E-Commerce Solutions",
      subtitle:
        "Creating digital stores that are fast, safe, and optimized for conversions is what makes you reach worldwide markets.",
      image: assets.eCommIndustry11,
      ctaText: "Explore Projects",
      ctaLink: "#projects",
    },
    {
      id: 2,
      title: "Powering the Next-Gen Online Marketplace",
      subtitle:
        "Offerings that are personalized, data-focused, and designed mobility-first are what characterize next-generation e-commerce flows.",
      image: assets.eCommIndustry2,
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
    {
      id: 3,
      title: "Sell Smarter, Grow Faster",
      subtitle:
        "One action that has the potential of completely changing your e-commerce business is automating it and using AI-driven analytics to guide your decisions.",
      image: assets.eCommIndustry3,
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "",
      description:
        "Our personalized information technology solutions accurately meet every facet of the development and management process that is involved with e-commerce.",
      icon: <FaRocket className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "E-Commerce Application and Website Development: Focus on the design and development of secure, scalable, high-performance, and easy-to-use online stores that offer better user experience and convenient transactions for the customers.",
      icon: <FaBuilding className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "AI-Powered Tools: Personalization engines, intelligent recommendations, and predictive analysis to drive sales.",
      icon: <FaHeartbeat className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "CRM Integration involves the comprehensive management of leads, the automation of marketing processes, and strategies aimed at significantly improving customer retention rates.",
      icon: <FaShoppingCart className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "DevOps Implementation: More regular releases, greater stability, and smoother running.",
      icon: <FaIndustry className="text-4xl text-indigo-600" />,
    },
    {
      title: "",
      description:
        "UI/UX Optimization: Create friction-free, responsive experiences that drive conversions.",
      icon: <FaUniversity className="text-4xl text-indigo-600" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Increased Operating Effectiveness",
      description: "Integration and automation of systems decrease labor work.",
      image: assets.eCommIndustry4,
      cardBg: "bg-blue-100",
    },
    {
      title: "More Conversions",
      description:
        "With streamlined UI/UX and AI technology, user interaction is enhanced.",
      image: assets.eCommIndustry5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalability",
      description:
        "Cloud and DevOps services allow the business to grow instantly.",
      image: assets.eCommIndustry6,
      cardBg: "bg-purple-100",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Forecast trends, know customer activity, and make data-driven decisions.",
      image: assets.eCommIndustry7,
      cardBg: "bg-red-100",
    },
    {
      title: "Global Reach",
      description:
        "Make easy online purchase experiences across geographies and devices.",
      image: assets.eCommIndustry8,
      cardBg: "bg-gray-100",
    },
    {
      title: "Cost Optimization",
      description: "Minimize overheads by optimal backend system streamlining.",
      image: assets.eCommIndustry9,
      cardBg: "bg-blue-100",
    },
  ];
  const solutionsData = [
    {
      title: "AI-Powered Product Intelligence",
      desc: (
        <>
          <p>
            Identify customer preferences and leverage intelligent insights to
            increase sales through upselling and cross-selling strategies.
          </p>
          <p className="py-5">Key capabilities include:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Product-specific Advice: Identify the specific products and
              product features that customers favor.
            </li>
            <li>
              Predictive Analytics: Increase efficiency in demand forecasting,
              automate inventory management, and design better price strategies.
            </li>
            <li>
              Virtual Assistants & Chatbots: Offer real-time support and enhance
              customer satisfaction.
            </li>
            <li>
              AI Marketing Automation: Reach the right audience effectively
              through data-informed campaigns.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "DevOps for E-Commerce Companies",
      desc: (
        <>
          <p>
            Our DevOps practices designed specifically for e-commerce businesses
            accelerate the development process, improve stability, and drive
            sustainable growth.
          </p>
          <p className="py-5">We focus on:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Continuous Integration & Deployment: Deploy faster without
              downtime.
            </li>
            <li>
              Increased Reliability: Automated testing and monitoring for
              consistent site performance.
            </li>
            <li>
              Scalable Infrastructure: Easily scale and handle large traffic
              bursts efficiently.
            </li>
            <li>
              Less Time-to-Market: Ship features quickly and stay ahead of
              competition.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "CRM Software for E-Commerce Businesses",
      desc: (
        <>
          <p>
            Efficient customer data management is key to e-commerce success. Our
            CRM software centralizes all customer interactions, boosting
            retention and satisfaction.
          </p>
          <p className="py-5">Core functionalities include:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Centralized Database: View all customer histories in a single
              dashboard.
            </li>
            <li>
              Automated Campaigns: Run email, SMS, and remarketing campaigns
              effortlessly.
            </li>
            <li>
              Behavioral Tracking: Personalize promotions and experiences based
              on user behavior.
            </li>
            <li>
              Seamless Integrations: Connect easily with existing tools and
              systems.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "UI/UX Design for E-Commerce Sites",
      desc: (
        <>
          <p>
            We create e-commerce designs that not only look stunning but also
            drive conversions by offering intuitive, mobile-first, and
            user-centric experiences.
          </p>
          <p className="py-5">Our design strengths include:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Intuitive Navigation and Search Functions: Help users find
              products easily.
            </li>
            <li>
              Mobile-First Thinking: Ensure consistent experiences on all
              devices.
            </li>
            <li>
              High-Quality Visuals: Showcase products beautifully to encourage
              purchases.
            </li>
            <li>
              Streamlined Checkout: Reduce drop-offs and cart abandonments.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Digital Transformation in the E-Commerce Industry",
      desc: (
        <>
          <p>
            To stay competitive, e-commerce brands must adopt digital
            transformation strategies that optimize operations and enhance
            customer engagement.
          </p>
          <p className="py-5">Our digital transformation services cover:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              Modern Cloud Infrastructure: Scale quickly, efficiently, and
              cost-effectively.
            </li>
            <li>
              Automated Order & Inventory Systems: Improve speed and accuracy in
              fulfillment.
            </li>
            <li>
              Integrated Customer Service: Centralize communication for better
              user experiences.
            </li>
            <li>
              Artificial Intelligence and Analytics: Gain insights and refine
              marketing strategies for greater effectiveness.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for E-Commerce | AI, CRM & DevOps for Online Stores –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers tailored IT solutions for e-commerce. From AI and CRM to UI/UX design and DevOps, we empower online shopping platforms to scale and perform."
        />
        <meta
          name="keywords"
          content="IT Solutions for E-Commerce | AI, CRM & DevOps for Online Stores – Capyngen"
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
      <CardsSection
        heading="Capyngen’s Approaches towards IT Solutions for E-commerce"
        subheading=""
        services={cardsSectionData1}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
        height=""
      />
      <CardsSectionImage
        heading="Advantages of our Information Technology Solutions for E-Commerce"
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
        title="Start Today with Our Offer"
        description={[
          "Power and accelerate your business through the latest and smarter IT solutions that provide better speed, better security, and better user experiences across all users. It's high time that you take that initial step and get started today!",
        ]}
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <BenefitsSection
        heading="AI solutions for online shopping platforms For Online Retail Sites"
        desc="The way online businesses work and function on a day-to-day basis is being heavily disrupted by Artificial Intelligence. We create new-age AI products that are specially designed for online e-commerce sites that not only redesign and enhance customer experience but also increase overall profitability across multiple areas of their operations."
        benefits={solutionsData}
        image={assets.eCommIndustry10}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Fuel the Growth of Your E-Commerce Enterprise through the Potential of Technology"
        description={[
          "Join Capyngen and incorporate AI, DevOps, and CRM into your business. Speaking with our team today.",
        ]}
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="What are the reasons that make Capyngen the best destination to
              get E-Commerce IT Solutions?"
        reverse={false}
        description={[
          <>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-4 text-gray-300">
              {[
                {
                  title: "Industry Expertise",
                  text: "Possessing comprehensive and widespread knowledge regarding the extensive trends and technologies that are shaping the face of e-retail.",
                  color: "text-blue-500",
                },
                {
                  title: "End-to-End Solutions",
                  text: "Right from development, through deployment, all the way through.",
                  color: "text-blue-500",
                },
                {
                  title: "Global Delivery",
                  text: "Scale-friendly solutions that suit businesses ranging from small startups to enterprises.",
                  color: "text-blue-500",
                },
                {
                  title: "Security and Compliance",
                  text: "Offering enterprise-class protection that is able to keep your valuable data as well as the individuals that handle the data secure.",
                  color: "text-blue-500",
                },
                {
                  title: "Individual Strategies",
                  text: "We provide solutions that uniquely meet the particular goals of your brand, as well as reach and connect effectively with your target marketplace.",
                  color: "text-blue-500",
                },
              ].map(({ title, text, color }, idx) => (
                <li
                  key={idx}
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  <strong className={`${color} drop-shadow-md`}>{title}</strong>{" "}
                  - {text}
                </li>
              ))}
            </ul>
          </>,
        ]}
        image={assets.eCommIndustry1}
        background={assets.patternBg1}
        isHidden="hidden"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Collaboratively, Let's Develop and Build Your Superior High-Performance E-Commerce PlatformFrom smart AI to seamless UI/UX"
        description={[
          "We’ll power your digital store for success. Get in touch with us today.",
        ]}
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default ECommerceIndustry;
