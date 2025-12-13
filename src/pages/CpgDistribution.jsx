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
import { Link } from "react-router-dom";
import TopRatedCompany from "../components/TopRatedCompany";
import CardsSection from "../components/CardsSection";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.capyngen.com/industries/cpg-distribution",
  name: "IT Solutions for CPG Distribution | Best IT Services for CPG Industry",
  description:
    "Capyngen delivers innovative IT solutions for CPG distribution. From software development to digital marketing, we help CPG brands grow and optimize operations.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  keywords: "IT Solutions for CPG Distribution",
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "IT Solutions for CPG Distribution, Best IT Services for CPG Industry",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/industries/cpg-distribution",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  description:
    "Capyngen delivers innovative IT solutions for CPG distribution. From software development to digital marketing, we help CPG brands grow and optimize operations.",
  keywords: "IT Solutions for CPG Distribution",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are software solutions of consumer packaged goods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They are accompanied with supply chain software, ERP systems and inventory management solutions that enable CPG distributors to handle their operations easily and quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What is the reason to select Capyngen to develop CPG software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen is a global innovator and the leading Software development of CPG company in India which is the custom supply chain software of CPG company.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a retail distribution software vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we do have the retail distribution management software services that can manage orders, delivery, and relationship with retailers.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to develop tailored ERP software to CPG companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For sure. CPG ERP software is made to suit the requirements of the manufacturers, distributors, and wholesalers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer inventory management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide the inventory optimization of the consumer goods of the software-industry that facilitates the real-time tracking of stocks as well as offers the efficient supply chains.",
      },
    },
    {
      "@type": "Question",
      name: "Do you come up with warehouse management solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our products make the storage, picking and distribution easier to save time and money.",
      },
    },
    {
      "@type": "Question",
      name: "Does your software support B2B and B2C?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the platforms are expandable to global B2B and B2C deals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide marketplace integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our software is compatible with Amazon, Flipkart, and other B2B markets everywhere in the world.",
      },
    },
    {
      "@type": "Question",
      name: "Do your CPG software solutions have security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all of the software solutions to consumer packaged goods are implemented using extremely secure and completely compliant IT systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer an end-to-end support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen is also offering it to you, which means frequent servicing, support and upgrades.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to incorporate APIs with logistics and payment systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course, our API integration is the only key that opens up a smooth flow of all systems.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online marketing solutions to distributors of CPGs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it covers SEO, social media marketing, paid advertisement, content marketing as well as email campaigns.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to give insights and analytics towards decision-making?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, platforms are all provided with real-time insights and reports to present data-driven business solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Does it provide worldwide implementation of CPG software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, international operations and multi-region programs can have their needs fulfilled by the offers of Capyngen.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of the CPG software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time varies depending on the complexity of the product, but most of the projects take between 3 and 6 months to complete the full-featured platforms.",
      },
    },
  ],
};

const CpgDistribution = () => {
  const whyChooseData = [
    {
      title:
        "International Knowledge in IT solutions for CPG distribution and Digital Marketing - The most appropriate solutions to distributors worldwide were developed, particularly the businesses that seek to grow with CPG distribution services products.",
      description: "",
    },
    {
      title:
        "Scalable Systems – Our advanced IT solutions in cpg distribution sector in India ensure that you feel free to expand your businesses in other locations.",
      description: "",
    },
    {
      title:
        "Best-tested Strategies to win Retailers and Buyers - We can make you grow with highly targeted campaigns by a well-known CPG software company.",
      description: "",
    },
  ];
  const solutionsData = [
    {
      title: "IT and Web Solutions",
      desc: (
        <>
          <ul className="list-disc list-inside space-y-4 text-lg w-full lg:max-w-3xl mx-auto mt-8 text-gray-300">
            {[
              {
                title: "B2B and B2C E-commerce Portals",
                text: "Custom online ordering systems that have product lists and orders in large quantities, which are best used when a brand requires CPG distribution services and a streamlined digital presence.",
                color: "text-blue-500",
              },
              {
                title: "ERP and Inventory Management Systems",
                text: "Real-time stock monitoring and inventory management solutions that are efficient with an advanced cpg software solution.",
                color: "text-blue-500",
              },
              {
                title: "CRM Integration",
                text: "The retailer, wholesaler, and distributor relationships are fully controlled with the assistance of a top CPG software company.",
                color: "text-blue-500",
              },
              {
                title: "Cloud and Hosting Solutions",
                text: "It offers secure and scalable solutions of high volume and worldwide transactions, which are driven by its IT solutions to cpg distribution sector in India.",
                color: "text-blue-500",
              },
              {
                title: "API Integration",
                text: "API makes systems integrate with logistics, payment gateways, and vendor tools to provide more CPG distribution services and automation.",
                color: "text-blue-500",
              },
              {
                title: "Postage and service",
                text: "Repeated updates and monitoring of the technical functioning.",
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
      title: (
        <span>
          <Link to={"/digital-marketing"}>Digital Marketing Solution</Link> For
          CPG industry
        </span>
      ),
      desc: (
        <>
          <ul className="list-disc list-inside space-y-4 text-lg w-full lg:max-w-3xl mx-auto mt-8 text-gray-300">
            {[
              {
                title: "SEO of Distributor Websites",
                text: "Soar higher in the search results of retail distribution software and product searches with our expert-led CPG software solution.",
                color: "text-blue-500",
              },
              {
                title: "Paid Ads & Lead Generation",
                text: "Target retailers, resellers, and B2B purchasers anywhere in the globe with outcome-based IT services to cpg distribution sector in India.",
                color: "text-blue-500",
              },
              {
                title: "Social Media Marketing",
                text: "Conduct marketing of the product on LinkedIn, Instagram and Facebook to get buyers.",
                color: "text-blue-500",
              },
              {
                title: "Content Marketing",
                text: "Prepare product guides, case studies and distributor success stories to support your CPG distribution services.",
                color: "text-blue-500",
              },
              {
                title: "Emailing and automation campaigns",
                text: "ensure that retailers are notified of their updates, offers and alerts regularly.",
                color: "text-blue-500",
              },
              {
                title: "Marketplace Integration",
                text: "Get hooked up with Amazon, Flipkart and B2B marketplaces throughout the globe with our integrated CPG distribution services products.",
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
      title: "Automated Supply Chain Management",
      description:
        "Elaborate on the simplicity of your operations with consumer packaged supply chain software and global-level CPG distribution services.",
      image: assets.cpg2,
      cardBg: "bg-blue-100",
    },
    {
      title: "Scalable B2B and B2C Operation Platforms",
      description:
        "Open the entire world and make the world your market, and you will not be restricted by any boundaries by using modern IT solutions of cpg distribution sector in India.",
      image: assets.cpg3,
      cardBg: "bg-green-100",
    },
    {
      title: "Wholesale Growth Lead Generating Strategies",
      description:
        "Increased production results in retail and purchase merchandise by attracting new stores and customers using the efficient CPG software solution.",
      image: assets.cpg4,
      cardBg: "bg-purple-100",
    },
    {
      title: "More Intense Retailer-Distributor Interaction",
      description:
        "Stay loyal and happy through constant communication with our premium CPG distribution services.",
      image: assets.cpg5,
      cardBg: "bg-pink-100",
    },
    {
      title: "Powerful IT Systems with Real-Time Insights",
      description:
        "Information that is reliable and that can be taken into action.",
      image: assets.cpg6,
      cardBg: "bg-yellow-100",
    },
    {
      title: "CPG Distribution Custom IT Services",
      description: (
        <span>
          Manufacturers' ERP, warehouse, and product{" "}
          <Link to={"/crm-management-software"}>
            lifecycle management software
          </Link>{" "}
          - very customised and built to your requirements through trusted it
          services to CPG.
        </span>
      ),
      image: assets.cpg7,
      cardBg: "bg-orange-100",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.cpg9,
      title: "Personal care and Home products",
    },
    {
      image: assets.cpg10,
      title: "Healthy lifestyle products",
    },
    {
      image: assets.cpg11,
      title: "Clothing and fashion distribution",
    },
    {
      image: assets.cpg12,
      title: "Electronic and consumer goods",
    },
    {
      image: assets.cpg13,
      title: "FMCG wholesaler and aggregators",
    },
    {
      image: assets.cpg8,
      title: "Food and beverage distributions",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis and Consultation",
      description:
        "We will know your CPG distribution service based distribution model and business goals.",
    },
    {
      step: "Step 02",
      title: "Strategy & Planning",
      description:
        "Digitally transform IT services of CPG distribution that best align with your distribution channel.",
    },
    {
      step: "Step 03",
      title: "Development and Integration",
      description:
        "Production ERP, CRM, e-commerce portal, and warehouse management systems constructed using advanced cpg software solution.",
    },
    {
      step: "Step 04",
      title: "Marketing Campaigns",
      description:
        "Carry out lead generation and brand awareness in any part of the globe.",
    },
    {
      step: "Step 05",
      title: "Testing & Optimisation",
      description:
        "Support high quality, security and scalability of international operations.",
    },
    {
      step: "Step 06",
      title: "Support & Growth",
      description: "Regular updates, promotion and support.",
    },
  ];
  const faqItems = [
    {
      question: "What are software solutions of consumer packaged goods?",
      answer:
        "They are accompanied with supply chain software, ERP systems and inventory management solutions that enable CPG distributors to handle their operations easily and quickly.",
    },
    {
      question:
        "What is the reason to select Capyngen to develop CPG software?",
      answer:
        "Capyngen is a global innovator and the leading Software development of CPG company in India which is the custom supply chain software of CPG company.",
    },
    {
      question: "Are you a retail distribution software vendor?",
      answer:
        "Yes, we do have the retail distribution management software services that can manage orders, delivery, and relationship with retailers.",
    },
    {
      question:
        "Are you able to develop tailored ERP software to CPG companies?",
      answer:
        "For sure. CPG ERP software is made to suit the requirements of the manufacturers, distributors, and wholesalers.",
    },
    {
      question: "Do you offer inventory management services?",
      answer:
        "Yes, we provide the inventory optimization of the consumer goods of the software-industry that facilitates the real-time tracking of stocks as well as offers the efficient supply chains.",
    },
    {
      question: "Do you come up with warehouse management solutions?",
      answer:
        "Yes, our products make the storage, picking and distribution easier to save time and money.",
    },
    {
      question: "Does your software support B2B and B2C?",
      answer: "Yes, the platforms are expandable to global B2B and B2C deals.",
    },
    {
      question: "Do you provide marketplace integration?",
      answer:
        "Yes, our software is compatible with Amazon, Flipkart, and other B2B markets everywhere in the world.",
    },
    {
      question: "Do your CPG software solutions have security?",
      answer:
        "Yes, all of the software solutions to consumer packaged goods are implemented using extremely secure and completely compliant IT systems.",
    },
    {
      question: "Do you offer an end-to-end support?",
      answer:
        "Capyngen is also offering it to you, which means frequent servicing, support and upgrades.",
    },
    {
      question:
        "Is it possible to incorporate APIs with logistics and payment systems?",
      answer:
        "Of course, our API integration is the only key that opens up a smooth flow of all systems.",
    },
    {
      question:
        "Do you offer online marketing solutions to distributors of CPGs?",
      answer:
        "Yes, it covers SEO, social media marketing, paid advertisement, content marketing as well as email campaigns.",
    },
    {
      question:
        "Are you able to give insights and analytics towards decision-making?",
      answer:
        "Yes, platforms are all provided with real-time insights and reports to present data-driven business solutions.",
    },
    {
      question: "Does it provide worldwide implementation of CPG software?",
      answer:
        "Yes, international operations and multi-region programs can have their needs fulfilled by the offers of Capyngen.",
    },
    {
      question: "What is the duration of the CPG software development?",
      answer:
        "The time varies depending on the complexity of the product, but most of the projects take between 3 and 6 months to complete the full-featured platforms.",
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
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Banner16 />
      <TopRatedCompany
        title="IT Solutions for CPG Distribution"
        description={[
          <>
            <p>
              We assist distributors and wholesalers of foreign markets to make
              their business easier to conduct their business fully, leverage
              their supply chain and earn more, by means of smart consumer
              packaged goods software solutions and tailor-made{" "}
              <Link to={"/digital-marketing"}>Digital Marketing Solution</Link>{" "}
              for CPG industry campaigns. We are also specialised in the
              provision of high-quality CPG distribution services with modern
              technology.
            </p>
            <p>
              Increase efficiency through product life cycle management
              software, warehouse management software solutions, and end-to-end
              consumer packaged goods software solutions. Call{" "}
              <Link to={"/"}>Capyngen</Link> today and get a formidable CPG
              software solution and IT services for CPG!
            </p>
          </>,
        ]}
        image={assets.cpg1}
        background={assets.patternBg1}
        imageHeight="aspect-[1/1]"
        isHidden="hidden"
      />
      <CardsSection
        heading="Why Choose Capyngen ?"
        subheading=""
        services={whyChooseData}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
      />
      <BenefitsSection
        heading="Reasons why digital transformation is necessary for CPG distributors"
        desc={
          <span>
            Fast stock flow, properly operating supply chains, and brand
            recognition are especially required in the consumer packaged goods
            (CPG) sector. Consumers who utilise digital channels require easy
            ordering, availability of products in real time, and the ease of the
            delivery tracking system. Through the integration of Digital
            Marketing Solution for the CPG industry and modern CPG software
            solution, <Link to={"/"}>Capyngen</Link> is enabling the
            distributors worldwide not only to streamline their operations and
            increase their revenues but also to make a better connection with
            the retailers and consumers, using the help of reliable CPG
            distribution services and the tailor-made IT services for CPG
            distribution sector in India.
          </span>
        }
        benefits={solutionsData}
        image={assets.cpg1}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Need inventory management solutions or IT services for the CPG distribution ERP software?"
        description={[
          "Collaborate with Capyngen, the CPG industry's best IT solutions in India, to streamline your business globally with reliable CPG distribution services.",
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
      />
      <HowWeWork heading="Our Process" desc="" steps={steps} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Revamp your distribution channel using the consumer packaged goods software solutions of Capyngen"
        description={[
          "Call us to receive tailored supply chain software to CPG firms and retail distribution management software solutions. Get the next level of CPG distribution services with a reliable partner in technology across the globe.",
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
