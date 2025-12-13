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
import Banner11 from "../components/Banner11";
import Banner8 from "../components/Banner8";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import {
  FaBrain,
  FaChartBar,
  FaCloud,
  FaDatabase,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";
import CardsSection from "../components/CardsSection";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/enterprise-solutions#webpage",
  url: "https://www.capyngen.com/enterprise-solutions",
  name: "Enterprise IT Solutions | Capyngen",
  description:
    "Capyngen offers end-to-end Enterprise IT Solutions designed to optimize operations, enhance productivity, and scale your business with robust digital infrastructure and smart automation.",
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
    url: "https://www.capyngen.com/assets/enterprise1-CY627fNw.jpg",
    caption: "Enterprise IT Solutions | Digital Transformation | Capyngen",
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/enterprise-solutions#service",
  name: "Enterprise Solutions",
  serviceType:
    "Enterprise Software Development, Cloud Migration Services, Scalable IT Platforms, Enterprise App Solutions",
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
    "Capyngen provides enterprise-grade digital transformation solutions including cloud migration, scalable software platforms and enterprise app development to support growth and optimize operations.",
  url: "https://www.capyngen.com/enterprise-solutions",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/enterprise1-CY627fNw.jpg",
    caption:
      "Enterprise Solutions | Cloud Migration | Scalable Software | Enterprise Apps",
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What type of enterprise solutions can also be provided by Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen has covered the whole with a complete line-up of Enterprise software solutions, Enterprise IT solutions, Enterprise cloud solutions, Enterprise application solutions, Enterprise security solutions, data analytics, and IT consulting that can be tailored to meet your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen design solutions to fit the needs of individual industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely! We are the ideal enterprise solutions vendor in the manufacturing sector, health, finance, retail, logistics and professional services. It is our sector experts who know the industry peculiar problems, regulations, and how things should be done that will provide you with solutions that would actually fit your business like a glove.",
      },
    },
    {
      "@type": "Question",
      name: "Are your business solutions secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "And first, security at home! Our enterprise security offerings include our enhanced monitoring of threats, advanced firewall on multiple levels, intrusion detection, encryption, access controls, compliance management and 24/7 monitoring of the company security operations centre that will ensure that you are safe forever and ever, amen.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have cloud-based enterprise solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We boast of being cloud-based enterprise solutions service providers to both small and large businesses, like cloud migration, hybrid cloud architecture, multi-cloud management, and cloud-native application development. We are partners with all the leading cloud providers such as AWS, Azure and Google Cloud.",
      },
    },
    {
      "@type": "Question",
      name: "Enterprise solutions are only supported for a finite time, right?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen offers 24/7 support, which is complete and effortless, an aspect of our best it services of providing. The services that our able-to-help teams will provide you with, which ensure your running system without any problem, with almost no downtimes, are application management, cloud services, security monitoring, infrastructure maintenance, etc.",
      },
    },
    {
      "@type": "Question",
      name: "How long can enterprise solutions be implemented?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration within which the implementation will occur will be based on the scope and complexity of the project. An example is 4-8 weeks to make simple cloud migrations and 6-12 months to make multidimensional digital transformation projects. At the planning stage, we project estimate and communicate project schedules.",
      },
    },
    {
      "@type": "Question",
      name: "What are the costs of enterprise solutions at Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices are calculated according to the complexity, size, technology layer, and support. These are project-based, subscription-based, and managed services. Request a personal quote of one of the best IT company Enterprise services.",
      },
    },
    {
      "@type": "Question",
      name: "Are you capable of integrating the new innovations into our existing infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely! Business applications and merger methods skillfully practices are skilled in bonding solutions, which are fresh, with the legacy systems, third-party programs and the databases. We continue to go on with data without glitches and we do operations with only one available synchronous technology across your tech environment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide enterprise solutions to small and medium organizations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We primarily focus on solutions of enterprise significance but we do have a variety of solutions that can fit an enterprise that is still undergoing growth. Enterprise solutions services offered by us can be deployed in the small businesses and grow along with your venture to ensure that you acquire Enterprise capabilities with appropriate level of investment.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Capyngen the best Indian enterprise IT solutions company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our experience in the industry, full-spectrum, 24/7, and security assurance, and established record combine. We have the best IT firm in Delhi which is known to have enterprise solutions success.",
      },
    },
    {
      "@type": "Question",
      name: "What do you do to sustain the business in the process?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our implementation and testing phases are done in phases, our testing in the support environments, we run off-peak hour deployments, parallel systems to support changeover and we also offer extensive training to reduce any inconveniences to your normal work.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies do you apply to enterprise solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our offerings include the most recent technology like cloud applications (AWS, Azure, Google Cloud), enterprise software (SAP, Oracle, Microsoft) and programming languages (Java, .NET, Python), databases (SQL, NoSQL) and new technologies (AI, ML, IoT, blockchain).",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide training to our staff on the new enterprise system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Our training is rather thorough, and it is customised to various user functions like end-users, administrators, and technical team. The training plan will be part of documentation, practice, video training, and knowledge transfer learning.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle data migration in the new enterprise systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our process of data migration adheres to steps of data migration procedure which comprises of appropriate data evaluation, cleaning, mapping, validation and testing. Our tools and strategies are dependable and ensure a successful and safe transfer of data with a minimum downtime and zero loss of data.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen helpful in no fewer than developing a digital transformation strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure! Our enterprise consulting service is comprised of the creation of a digital transformation strategy in its entirety. We assess your situation now, calculate the opportunities, draw the plans, propose the technologies, as well as provide the facilita-tion to become accustomed to your transformation objectives.",
      },
    },
  ],
};

const EnterpriseSolutions = () => {
  const faqItems = [
    {
      question:
        "What type of enterprise solutions can also be provided by Capyngen?",
      answer:
        "Capyngen has covered the whole with a complete line-up of Enterprise software solutions, Enterprise IT solutions, Enterprise cloud solutions, Enterprise application solutions, Enterprise security solutions, data analytics, and IT consulting that can be tailored to meet your business requirements.",
    },
    {
      question:
        "Can Capyngen design solutions to fit the needs of individual industries?",
      answer:
        "Definitely! We are the ideal enterprise solutions vendor in the manufacturing sector, health, finance, retail, logistics and professional services. It is our sector experts who know the industry peculiar problems, regulations, and how things should be done that will provide you with solutions that would actually fit your business like a glove.",
    },
    {
      question: "Are your business solutions secure?",
      answer:
        "And first, security at home! Our enterprise security offerings include our enhanced monitoring of threats, advanced firewall on multiple levels, intrusion detection, encryption, access controls, compliance management and 24/7 monitoring of the company security operations centre that will ensure that you are safe forever and ever, amen.",
    },
    {
      question: "Do you have cloud-based enterprise solutions?",
      answer:
        "Absolutely! We boast of being cloud-based enterprise solutions service providers to both small and large businesses, like cloud migration, hybrid cloud architecture, multi-cloud management, and cloud-native application development. We are partners with all the leading cloud providers such as AWS, Azure and Google Cloud.",
    },
    {
      question:
        "Enterprise solutions are only supported for a finite time, right?",
      answer:
        "Capyngen offers 24/7 support, which is complete and effortless, an aspect of our best it services of providing. The services that our able-to-help teams will provide you with, which ensure your running system without any problem, with almost no downtimes, are application management, cloud services, security monitoring, infrastructure maintenance, etc.",
    },
    {
      question: "How long can enterprise solutions be implemented?",
      answer:
        "The duration within which the implementation will occur will be based on the scope and complexity of the project. An example is 4-8 weeks to make simple cloud migrations and 6-12 months to make multidimensional digital transformation projects. At the planning stage, we project estimate and communicate project schedules.",
    },
    {
      question: "What are the costs of enterprise solutions at Capyngen?",
      answer:
        "Prices are calculated according to the complexity, size, technology layer, and support. These are project-based, subscription-based, and managed services. Request a personal quote of one of the best IT company Enterprise services.",
    },
    {
      question:
        "Are you capable of integrating the new innovations into our existing infrastructure?",
      answer:
        "Definitely! Business applications and merger methods skillfully practices are skilled in bonding solutions, which are fresh, with the legacy systems, third-party programs and the databases. We continue to go on with data without glitches and we do operations with only one available synchronous technology across your tech environment.",
    },
    {
      question:
        "Do you provide enterprise solutions to small and medium organizations?",
      answer:
        "We primarily focus on solutions of enterprise significance but we do have a variety of solutions that can fit an enterprise that is still undergoing growth. Enterprise solutions services offered by us can be deployed in the small businesses and grow along with your venture to ensure that you acquire Enterprise capabilities with appropriate level of investment.",
    },
    {
      question:
        "Why is Capyngen the best Indian enterprise IT solutions company?",
      answer:
        "Our experience in the industry, full-spectrum, 24/7, and security assurance, and established record combine. We have the best IT firm in Delhi which is known to have enterprise solutions success.",
    },
    {
      question: "What do you do to sustain the business in the process?",
      answer:
        "Our implementation and testing phases are done in phases, our testing in the support environments, we run off-peak hour deployments, parallel systems to support changeover and we also offer extensive training to reduce any inconveniences to your normal work.",
    },
    {
      question: "What technologies do you apply to enterprise solutions?",
      answer:
        "Our offerings include the most recent technology like cloud applications (AWS, Azure, Google Cloud), enterprise software (SAP, Oracle, Microsoft) and programming languages (Java, .NET, Python), databases (SQL, NoSQL) and new technologies (AI, ML, IoT, blockchain).",
    },
    {
      question:
        "Do you provide training to our staff on the new enterprise system?",
      answer:
        "Absolutely! Our training is rather thorough, and it is customised to various user functions like end-users, administrators, and technical team. The training plan will be part of documentation, practice, video training, and knowledge transfer learning.",
    },
    {
      question:
        "How do you handle data migration in the new enterprise systems?",
      answer:
        "Our process of data migration adheres to steps of data migration procedure which comprises of appropriate data evaluation, cleaning, mapping, validation and testing. Our tools and strategies are dependable and ensure a successful and safe transfer of data with a minimum downtime and zero loss of data.",
    },
    {
      question:
        "Is Capyngen helpful in no fewer than developing a digital transformation strategy?",
      answer:
        "Sure! Our enterprise consulting service is comprised of the creation of a digital transformation strategy in its entirety. We assess your situation now, calculate the opportunities, draw the plans, propose the technologies, as well as provide the facilita-tion to become accustomed to your transformation objectives.",
    },
  ];
  const solutionsData = [
    {
      title: "Proven Track Record",
      desc: "As one of the most prominent service providers of Enterprise solutions in India, Capyngen has not just achieved the feat but has also been credited with providing solutions that transformed the face of many enterprises in other sectors of the industry.",
    },
    {
      title: "Industry Expertise",
      desc: "The organization supports the needs of individual enterprise software of the production market, healthcare, finance, retail, logistics, and professional services. We have been one of the best enterprise solutions providers in the various industries.",
    },
    {
      title: "Complete Competencies",
      desc: "It is what Capyngen is offering in its services that include the first consultation to the services of development and integration of enterprise applications and integration services that include the cloud management and the support services that will be offered under one umbrella.",
    },
    {
      title: "Well-Received Cloud Solutions",
      desc: "The status that we have received because of customer acknowledgment is one of the best IT company in Delhi cloud enterprise solution providers, and we achieve this by allowing businesses to get the most out of cloud technology in terms of agility, scalability and cost savings.",
    },
    {
      title: "Scalable And Ready For The Future",
      desc: "Our solutions are designed to meet your development. Whether you plan to expand the scale of your business, arrive in new destinations or simply introduce new features, our Enterprise solutions services will follow suit the change of the needs without even the slightest hiccups.",
    },
    {
      title: "Innovations At Reasonable Prices",
      desc: "We offer solutions to businesses at the best standards and within your financial capability. Our primary focus is on the return on investment as every technological investment should become the one to move the business forward, introduce efficiency, and ensure the ability to retain the advantage over the competition. Enterprise services today with the best it company for Enterprise services.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Enterprise Network & IT Solutions",
      description:
        "A scalable IT infrastructure to support the emergence of a business, you receive everything that is needed to keep your day-to-day running without a glitch, like an excellent architecture, high bandwidth connections, best network services, data centre solutions, integrated communications, IT asset management, and a disaster recovery plan.",
      image: assets.enterprise3,
      cardBg: "bg-blue-100",
    },

    {
      title: "Enterprise Cloud Solutions",
      description:
        "In essence, the cloud migration services, hybrid cloud architecture, multi-cloud management, secure cloud storage, advanced cloud security, and continuous cloud optimisation will make businesses more cost-effective and scalable. Capyngen has a reputation for offering the best IT company for Enterprise services solutions on the cloud.",
      image: assets.enterprise4,
      cardBg: "bg-green-100",
    },
    {
      title: "Enterprise Application Solutions",
      description:
        "Certain of these services that have been offered to aid the processes below to be made easier in businesses are listed, as follows: custom application development, application integration, legacy modernisation, mobile enterprise apps, API development and overall application maintenance. This will be included in our best managed services for enterprise software.",
      image: assets.enterprise5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Enterprise Security Solutions",
      description:
        "The high threat protection, security compliance management, identity, and access management, security audits, incident response controls, and security awareness training provided by them are classified under the category of critical business assets. Capyngen provides the best IT services for enterprise solutions.",
      image: assets.enterprise6,
      cardBg: "bg-pink-100",
    },
    {
      title: "Enterprise Consulting Services",
      description:
        "The digital transformation strategy, IT governance frameworks, process optimisation, technology roadmap planning, vendor management, and change management guidance are some of the services that we will always be willing to offer to you as the first in the struggle of innovation and operational excellence. These services are known as the Best Enterprise solutions company in Gurgaon.",
      image: assets.enterprise7,
      cardBg: "bg-purple-100",
    },
    {
      title: "Enterprise Data & Analytics Solutions",
      description:
        "These services offered by us to transform the unstructured data into the insights that can be acted upon by your business are business intelligence dashboards, data warehousing, predictive analytics, data governance, real-time analytics and smooth data migration. Enterprise solutions with analytics excellence partner with one of the best IT company for enterprise solutions in India.",
      image: assets.enterprise8,
      cardBg: "bg-red-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "To start with, we carry out intensive discovery sessions so as to learn your enterprise purposes, present issues, technology status and vision. It is on the basis of such a comprehensive analysis that Enterprise solutions services can be provided on a tailor-made basis.",
    },
    {
      step: "Step 02",
      title: "Strategic Planning",
      description:
        "Our experts will design the enterprise IT solutions, cloud adoption, security implementation, and application development through a detailed roadmap. Our selections and rankings of initiatives are based on their impact to the business, feasibility, and ROI.",
    },
    {
      step: "Step 03",
      title: "Deployment & Integration",
      description:
        "Using our tried and tested processes, we implement the solutions that are least disruptive to the current processes. Our step-by-step approach would ensure a successful implementation of enterprise application solutions, cloud systems, and security measures.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Enterprise-Grade Security",
      points: [
        "Continuous monitoring of A.I. threat monitoring",
        "Zero-trust access security",
        "Standards management of business conduct",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Cloud-Based Enterprise Solutions",
      points: [
        "Types of cloud of choice deployment: hybrid, multicloud, and private",
        "Unlimited scalability when the business increases",
        "Worldwide availability of any type of device at any place",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Custom Enterprise Software Solutions",
      points: [
        "Household programs that are tailored to the requirements of your industry, such as manufacturing, health and finance",
        "Software designs that can adjust to developments and the expansion of your business",
        "The simple and clean way software is designed makes it workers to work in their natural flow",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Scalable IT Infrastructure",
      points: [
        "Scalability is limited by employing cloud technology",
        "Different technologies, which allow load balancing to achieve maximum performance",
        "Fast deployment of resources, which is non-manual",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "End-to-End Application Development & Integration",
      points: [
        "Full-stack development of various languages and technologies (DevOps development services)",
        "Retention of most of your existing investments is ensured by compatibility between old and new systems",
        "Linking up with a third-party API to make the product more functional",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Data-Driven Decision Making",
      points: [
        "Fast decision-making business visual aids",
        "Deploying AI and predictive analytics, machine learning",
        "Reporting solutions that are compatible with your special measures",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Enterprise Solutions | Scalable IT & Cloud Software – Capyngen
        </title>
        <meta
          name="description"
          content="Empower your business with Capyngen's enterprise solutions. We deliver scalable enterprise software, IT, and cloud solutions designed for growth and efficiency."
        />
        <meta
          name="keywords"
          content="Enterprise Solutions | Scalable IT & Cloud Software – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Banner8
        titleMain="Enterprise Solutions"
        titlePrefix="Advanced"
        titleSuffix="To Transform Your Business"
        description={`Capyngen is the principal provider of Enterprise IT solutions and Enterprise solutions services, which are scalable, safe, and efficient, developed with the intention of elevating and digitalising the different arenas of industries. We are also the Best IT company in Delhi, as we provide the best innovation and support with our best enterprise solutions.`}
        imageSrc={assets.enterprise1}
        imageAlt="Enterprise Solutions Illustration"
        bgColor="bg-gray-900"
        iconColor="bg-blue-700"
        reverse={false}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title=""
        description={[
          "Establish a free Enterprise Consultation with our team of experts and develop solutions to your business rise and digital transformation! India experiences one of the best enterprise solutions approaches.",
        ]}
        textSize="text-2xl"
        buttonText="Get In Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Innovate and Grow Enterprises by Technology and Innovation"
        description={[
          <>
            <p>
              The large and complex enterprises need more than the technology of
              yesterday; they need to know how to go about it. They must rely on
              the experience acquired by their partners who have already gone
              through their type of problems and can introduce a breakthrough
              solution.
            </p>
            <p>
              <Link to={"/"}>Capyngen</Link> is the solved provider of
              Enterprise solutions services that transforms hard sailing to
              smooth sailing for your organisation.
            </p>
            <p>
              Using custom solutions in running businesses, Capyngen can provide
              you with an outstanding customer experience, which integrates
              modern technology and the top standards of the industry, and is
              dedicated to making you successful. We are also among the best IT
              company for enterprise solutions in India.
            </p>
          </>,
        ]}
        image={assets.enterprise2}
        background={assets.patternBg1}
        isHidden="hidden"
        imageHeight="aspect-[4/3] md:aspect-[1/1]"
      />
      <CardsSectionImage
        heading="Capyngen Complete Enterprise Solutions Services"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <BenefitsSection
        heading="Why Choose Capyngen for Enterprise Solutions Services"
        desc=""
        image={assets.enterprise9}
        benefits={solutionsData}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Want to Revolutionize Your Business?"
        description={[
          "Call Capyngen on the move towards excellent IT, cloud and security solutions that can transform into true business growth and outcomes. We are among the best IT company for enterprise solutions in India.",
        ]}
        textSize="text-2xl"
        buttonText="Get In Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <HowWeWork
        heading="Our Enterprise Solutions Services Process"
        desc=""
        steps={steps}
      />
      <FullSizeImageSection
        backgroundImage={assets.enterpriseSolFullSize}
        title="Empower Your Enterprise with Innovation"
        description="We are not just providing solutions, but also providing solutions to complex business-related issues using Enterprise solutions services."
        buttonText="Explore Solutions"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <CardsSection
        heading="Key Features of Our Enterprise Solutions Services"
        subheading=""
        services={cardsSectionData2}
        sectionBg="bg-gray-900"
        headColor="text-white"
        cardBg="bg-black border border-white transition-all duration-400"
        hoverBg=" hover:-translate-y-2"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title="Free Enterprise Technology Assessment"
        description={[
          "Book now and know how we can assist you in reducing costs, accelerating innovation and simplifying your business using Enterprise solutions services.",
        ]}
        textSize="text-2xl"
        buttonText="Get In Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      {/* <ScrollRevealEffect /> */}
    </div>
  );
};

export default EnterpriseSolutions;
