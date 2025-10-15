import React from "react";
import Banner16 from "../components/Banner16";
import { assets } from "../assets/assets";
import BenefitsSection from "../components/BenefitsSection";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import { Helmet } from "react-helmet-async";

const CpgDistribution = () => {
  const solutionsData = [
    {
      title: "IT and Web Solutions",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-4 text-lg w-full lg:max-w-3xl mx-auto mt-8 text-gray-300">
            {[
              {
                title: "B2B and B2C E-commerce Portals",
                text: "Custom online ordering platforms with product catalogs and bulk order functionality.",
                color: "text-blue-500",
              },
              {
                title: "ERP and Inventory Management Systems",
                text: "Real-time stock tracking with inventory management solutions for efficiency.",
                color: "text-blue-500",
              },
              {
                title: "CRM Integration",
                text: "Manage retailer, wholesaler, and distributor relationships seamlessly.",
                color: "text-blue-500",
              },
              {
                title: "Cloud and Hosting Solutions",
                text: "Secure, scalable platforms for high-volume global transactions.",
                color: "text-blue-500",
              },
              {
                title: "API Integration",
                text: "Connect systems with logistics, payment gateways, and vendor tools.",
                color: "text-blue-500",
              },
              {
                title: "Maintenance and Support",
                text: "Continuous updates and technical monitoring for reliable operation.",
                color: "text-blue-500",
              },
            ].map(({ title, text, color }, idx) => (
              <li
                key={idx}
                className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
              >
                <strong className={`${color} drop-shadow-md`}>{title}</strong> –{" "}
                {text}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Digital Marketing Solution For CPG industry",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-4 text-lg w-full lg:max-w-3xl mx-auto mt-8 text-gray-300">
            {[
              {
                title: "SEO for Distributor Websites",
                text: "Get higher rankings for retail distribution software and product searches.",
                color: "text-blue-500",
              },
              {
                title: "Paid Ads & Lead Generation",
                text: "Reach out to retailers, resellers, and B2B buyers in any part of the world.",
                color: "text-blue-500",
              },
              {
                title: "Social Media Marketing",
                text: "Carry out product promotions on LinkedIn, Instagram, and Facebook to attract buyers.",
                color: "text-blue-500",
              },
              {
                title: "Content Marketing",
                text: "Create product guides, case studies, and distributor success stories.",
                color: "text-blue-500",
              },
              {
                title: "Email & Automation Campaigns",
                text: "Make sure retailers receive updates, offers, and alerts regularly.",
                color: "text-blue-500",
              },
              {
                title: "Marketplace Integration",
                text: "Get connected with Amazon, Flipkart, and B2B marketplaces all over the world.",
                color: "text-blue-500",
              },
            ].map(({ title, text, color }, idx) => (
              <li
                key={idx}
                className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
              >
                <strong className={`${color} drop-shadow-md`}>{title}</strong> –{" "}
                {text}
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Streamlined Supply Chain Management",
      description:
        "Reduce the complexity of your operations using consumer packaged supply chain software.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Scalable Platforms for B2B and B2C Operations",
      description:
        "Open up the whole world as your market and you will no longer be confined by any limits.",
      image: assets.customAiSolution,
      cardBg: "bg-green-100",
    },
    {
      title: "Lead Generation Strategies for Wholesale Growth",
      description:
        "Produce more leads to retail and buy products by attracting new stores and buyers.",
      image: assets.customAiSolution,
      cardBg: "bg-purple-100",
    },
    {
      title: "Stronger Retailer and Distributor Engagement",
      description:
        "Keep up with loyalty and happiness through consistent engagement.",
      image: assets.customAiSolution,
      cardBg: "bg-pink-100",
    },
    {
      title: "Secure IT Systems with Real-Time Insights",
      description: "Data you can rely on and which is always actionable.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Custom IT Services for CPG Distribution",
      description:
        "ERP, warehouse, and product lifecycle management software for manufacturers — highly customized and tailored to your needs.",
      image: assets.customAiSolution,
      cardBg: "bg-orange-100",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.bg1,
      title: "Food and Beverage Distributors",
    },
    {
      image: assets.bg1,
      title: "Personal Care and Home Products",
    },
    {
      image: assets.bg1,
      title: "Healthy Lifestyle Products",
    },
    {
      image: assets.bg1,
      title: "Clothing and Fashion Distribution",
    },
    {
      image: assets.bg1,
      title: "Electronics and Consumer Goods",
    },
    {
      image: assets.bg1,
      title: "FMCG Wholesalers and Aggregators",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Consultation & Requirement Analysis",
      description:
        "We will understand your distribution model and business objectives.",
    },
    {
      step: "Step 02",
      title: "Strategy & Planning",
      description:
        "Create digital transformation of IT services for CPG distribution that perfectly fit the needs of your distribution channel.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description:
        "Manufacture ERP, CRM, e-commerce portals, and warehouse management solutions.",
    },
    {
      step: "Step 04",
      title: "Marketing Campaigns",
      description:
        "Launch lead generation and brand awareness campaigns anywhere in the world.",
    },
    {
      step: "Step 05",
      title: "Testing & Optimization",
      description:
        "Allow for top quality, security and scalability for global operations.",
    },
    {
      step: "Step 06",
      title: "Support & Growth",
      description: "Regular updates, promotion, and support.",
    },
  ];
  const faqItems = [
    {
      question: "What are consumer packaged goods software solutions?",
      answer:
        "They come with supply chain software, ERP systems, and inventory management solutions that allow CPG distributors to manage their operations in an easier and faster way.",
    },
    {
      question: "Why choose Capyngen for CPG software development?",
      answer:
        "Capyngen is a worldwide pioneer and the foremost Software development for CPG company in India, known for its custom supply chain software for CPG companies.",
    },
    {
      question: "Do you provide retail distribution software?",
      answer:
        "Yes, we have retail distribution management software solutions that can take care of orders, deliveries, and retailer relationships.",
    },
    {
      question: "Can you create custom ERP software for CPG businesses?",
      answer:
        "For sure. We make CPG ERP software for the needs of the manufacturers, distributors, and wholesalers.",
    },
    {
      question: "Do you provide inventory management solutions?",
      answer:
        "Yes, we deliver the inventory optimization of the consumer goods of the software-industry that eases real-time stock tracking and provides efficient supply chains.",
    },
    {
      question: "Do you develop warehouse management solutions?",
      answer:
        "Yes, our offerings simplify storage, picking, and distribution to save time and money.",
    },
    {
      question: "Can your software handle both B2B and B2C operations?",
      answer:
        "Yes, the platforms are flexible enough for worldwide B2B and B2C transactions.",
    },
    {
      question: "Do you offer marketplace integration?",
      answer:
        "Yes, our software connects easily with Amazon, Flipkart, and other B2B marketplaces all over the world.",
    },
    {
      question: "Are your CPG software solutions secure?",
      answer:
        "Yes, every software solution for consumer packaged goods is done with highly secure and fully compliant IT systems.",
    },
    {
      question: "Do you provide end-to-end support?",
      answer:
        "Yes, Capyngen provides it for you, which assures regular maintenance, technical support, and upgrades.",
    },
    {
      question: "Can you integrate APIs with logistics and payment systems?",
      answer:
        "Sure, our API integration is the key that opens up a seamless flow for all systems.",
    },
    {
      question:
        "Do you provide digital marketing services for CPG distributors?",
      answer:
        "Yes, that includes SEO, social media marketing, paid ads, content marketing, and email campaigns.",
    },
    {
      question: "Can you provide insights and analytics for decision-making?",
      answer:
        "Yes, all platforms are equipped with real-time insights and reports to provide data-based business solutions.",
    },
    {
      question: "Do you offer global deployment for CPG software?",
      answer:
        "Yes, Capyngen’s offers are versatile to meet the needs of international operations and multi-region programs.",
    },
    {
      question: "How long does it take to develop CPG software solutions?",
      answer:
        "The time depends on the complexity of the product; however, the majority of the projects are completed within 3 to 6 months for full-featured platforms.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          IT Solutions for CPG Distribution | Best IT Services for CPG Industry
        </title>
        <meta
          name="description"
          content="Capyngen delivers innovative IT solutions for CPG distribution. From software development to digital marketing, we help CPG brands grow and optimize operations."
        />
        <meta
          name="keywords"
          content="IT Solutions for CPG Distribution | Best IT Services for CPG Industry "
        />
      </Helmet>
      <Banner16 />
      <BenefitsSection
        heading="Reasons why digital transformation is necessary for CPG distributors"
        desc="The consumer packaged goods (CPG) sector is particularly dependent on the fast movement of stocks, well-functioning supply chains, and brand visibility. Consumers who opt for digital channels demand simple ordering processes, live product availability, and an easy-to-use delivery tracking system. By the fusion of Digital Marketing Solution For CPG industry. Capyngen is allowing distributors around the globe to not only simplify their workflows and boost their revenue but also to establish a closer relationship with retailers and consumers."
        benefits={solutionsData}
        image={assets.blockchainDevelopment}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title=""
        description={[
          "Looking for inventory management solutions or IT services for CPG distribution ERP software? Partner with Capyngen, the Best IT solutions for the CPG industry in India, to optimize your operations worldwide.",
        ]}
        buttonText="Partner with Us"
        textSize="text-2xl"
        backgroundVideo={assets.backgroundVideo}
      />
      <CardsSectionImage
        heading="Key Features and Benefits"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
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
      />{" "}
      <HowWeWork heading="Our Process" desc="" steps={steps} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title=""
        description={[
          "Transform your distribution network with Capyngen’s consumer packaged goods software solutions. Contact us for custom supply chain software for CPG companies and retail distribution management software solutions.",
        ]}
        textSize="text-2xl"
        buttonText="Get a Free Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default CpgDistribution;
