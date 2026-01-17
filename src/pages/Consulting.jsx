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
import {
  CreditCard,
  LifeBuoy,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
} from "lucide-react";
import Banner10 from "../components/Banner10";
import GetStarted from "../components/GetStarted";
import CardsSectionGrid from "../components/CardsSectionGrid";
import CardsSection from "../components/CardsSection";
import {
  FaAndroid,
  FaApple,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaNetworkWired,
  FaProjectDiagram,
  FaVrCardboard,
  FaCloud,
  FaBriefcase,
  FaServer,
  FaHandshake,
  FaDigitalOcean,
  FaBuilding,
  FaMoneyBillWave,
  FaBullhorn,
  FaChartBar,
  FaHeadset,
  FaPuzzlePiece,
  FaTrophy,
} from "react-icons/fa";
import AppTypesSection from "../components/AppTypesSection";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/consulting#webpage",
  url: "https://www.capyngen.com/consulting",
  name: "Top Consulting Services in India | Business Consulting Services",
  description:
    "Get expert guidance from a trusted provider of top consulting services in India. Our consulting services help businesses improve strategy, operations, and growth.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/webDesign16-C6_hZC7f.png",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/consulting#service",
  name: "Top Consulting Services in India | Business Consulting Services",
  description:
    "Get expert guidance from a trusted provider of top consulting services in India. Our consulting services help businesses improve strategy, operations, and growth.",
  url: "https://www.capyngen.com/consulting",
  serviceType: "Business Consulting Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/consulting3-BQjnj5BA.png",
    caption: "Business Consulting Services by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What do you mean by IT consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT consulting services involve expert guidance and implementation of technology strategy, infrastructure, security, cloud adoption, and digital transformation. Consultants analyze existing systems, recommend improvements, and support solution implementation aligned with business goals.",
      },
    },
    {
      "@type": "Question",
      name: "Why do businesses hire IT consultants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses hire IT consultants for specialized expertise, industry experience, and objective insights that help avoid costly mistakes, accelerate technology adoption, optimize investments, and make informed technology decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Why is Capyngen a top consulting company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen combines over a decade of experience, proven methodologies, and industry-specific expertise with a customer-focused approach to deliver measurable outcomes, making it one of the top consulting companies in India.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer business consulting beyond IT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Along with IT consulting, Capyngen provides end-to-end business consulting including growth strategy, operational efficiency, financial planning, market research, and organizational development.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consulting costs vary based on project scope, duration, expertise required, and engagement model. Capyngen offers flexible pricing including hourly, project-based, and retainer models.",
      },
    },
    {
      "@type": "Question",
      name: "Are your consulting services affordable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen offers scalable and budget-friendly consulting packages tailored for startups and small to mid-sized businesses in India.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries does Capyngen serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen serves a wide range of industries including healthcare, finance, manufacturing, retail, education, government, technology, hospitality, logistics, and professional services.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical duration of a consulting engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement duration depends on project complexity. Quick assessments may take 2–4 weeks, while large-scale transformations can span 6–12 months.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support implementation or only provide recommendations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen supports the entire journey from strategy development to implementation and adoption, ensuring successful execution and measurable results.",
      },
    },
    {
      "@type": "Question",
      name: "What is digital transformation consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital transformation consulting helps businesses modernize operations, adopt new technologies, automate processes, improve customer experience, and manage organizational change.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure consulting recommendations are practical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our recommendations are based on detailed assessments, industry best practices, and your available resources, ensuring solutions are actionable and aligned with long-term strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Do you assist with cloud migration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our cloud consulting services include migration strategy, platform selection, application assessment, data migration, security setup, and post-migration optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide cybersecurity consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen offers cybersecurity consulting services including risk assessment, security architecture design, compliance guidance, incident response planning, and continuous monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle change management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We implement structured change management strategies involving stakeholder engagement, communication planning, training programs, and feedback mechanisms to ensure smooth adoption.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen consulting services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get started by booking a free initial consultation. Our team will assess your needs and propose a tailored consulting plan outlining scope, timeline, deliverables, and cost.",
      },
    },
  ],
};

const Consulting = () => {
  const faqItems = [
    {
      question: "What do you mean by IT consulting services?",
      answer:
        "IT consulting services mean the presence of specialists, and the services consist of consulting and implementation of technology strategy, infrastructure, security, cloud adoption, and digital transformation. Consultants will analyse the existing systems, make recommendations and support the business with implementing solutions that are business-oriented.",
    },
    {
      question:
        "What is the rationale behind employing IT consultants by businesses?",
      answer:
        "IT consultants are the professionals who have very specialised knowledge, industry experience and objective opinions that cannot be offered to a company by an internal team. Through them, the businesses will be able to save costly mistakes, accelerate the process of embracing the new technology, put their investments into better use and seek proper advice on the tricky technology decisions.",
    },
    {
      question: "Why is Capyngen a top consulting company in India?",
      answer:
        "Capyngen is entrusted with the amalgamation of both the sound experience of more than a decade, tested methodology, and industry-specific knowledge supported by the richness of services, customer-oriented attitude, and reliable provision of quantifiable outcomes. Our accomplishments and recognition of our clients in the achievements and awards make us stand out from the lot hence ranking us as one of the top consulting company in India.",
    },
    {
      question: "Do you offer any other business consultations other than IT?",
      answer:
        "Indeed! We specialise in IT consulting; however, we can offer end-to-end business consultation solutions (growth strategy, operational effectiveness, financial planning, market research, and organisation development) all in a single package that will be completely integrated with technology recommendations.",
    },
    {
      question: "What is the price of consulting services?",
      answer:
        "The prices will vary depending on different factors, which include project scope, schedule, expertise involved and the type of interaction. We do price in various ways, such as hourly, project-specific fees and retainer. In order to get your individual quote within your financial capability, you can contact us.",
    },
    {
      question: "Are small businesses able to afford your consulting services?",
      answer:
        "Definitely! We offer high-quality IT consulting services that are fit in the small businesses in India that can scale up to meet various budgets. We have designed packages particularly for startups and SMBs since it is a low-cost business consulting company in India.",
    },
    {
      question: "Which industries does Capyngen target?",
      answer:
        "With a very huge number of client base in the world by varying industries and sectors, including but not limited to healthcare, finance, manufacturing, retail, education, government, technology, hospitality, logistics, and professional services, Capyngen knows all these industries and provides tailor-made solutions to each of them.",
    },
    {
      question: "What is the average length of a consulting engagement?",
      answer:
        "The duration of the engagement is based on the nature of the project. As an example, Quick evaluations can be conducted in 2-4 weeks, whereas extensive transformations can be conducted in 6-12 months. Initial discussions are detailed in the provision of timelines.",
    },
    {
      question:
        "Do you offer support for implementation or only recommendations?",
      answer:
        "We accompany the client with the entire process of coming up with the strategy to its actual implementation. Capyngen implements and supports the solution adoption, which is unlike consultants who do not implement solutions and do not provide guidance, hence guaranteeing successful implementation and adoption.",
    },
    {
      question: "What does digital transformation consulting mean?",
      answer:
        "Digital transformation consulting is a service offered to assist businesses to modernize their mode of operation, adopt new technologies and automate their operations. In addition to this, they are able to bring about organizational changes through digital transformation that may involve cloud computing, use of AI, redesigning the customer experience and cultural changes management.",
    },
    {
      question:
        "What is the best way of making consulting recommendations practical?",
      answer:
        "These suggestions are based on the careful evaluation, industry best practices, and your resources, limitations, and capabilities. Our solutions are based on what can be applied immediately without compromising on strategic long-term plans.",
    },
    {
      question: "Are you able to assist with cloud migration?",
      answer:
        "Certainly! Migration strategy, platform selection, application assessment, data migration, security implementation, and post-migration optimisation, including a clean transition with minimal downtime, are some of the activities involved in our cloud consulting exercises.",
    },
    {
      question: "Are you a cybersecurity consultant?",
      answer:
        "Yes, of course! Our web security services will incorporate risk assessment, architecture security design, compliance guidance, incident response planning, security awareness training, and continual monitoring of electronic assets recommendations.",
    },
    {
      question: "How are you tackling change management?",
      answer:
        "We understand well enough that the acceptance of people is a key determinant of the success of technology. We plan our change management approach where stakeholders will be engaged, communication strategies will be put in place, training will be instituted, and feedback systems will be established to ensure that there will be organisational buy-in and successful change transformation.",
    },
    {
      question: "What do I do when starting with Capyngen consulting services?",
      answer:
        "All you need to do is contact us and make a free initial consultation. We will learn about your problems, objectives and requirements and propose a tailored consulting engagement plan that defines the plan of action, time, output and cost involved.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Expert IT Advisors",
      description:
        "It is simply astounding that our team has experience in various sectors and technologies over the last few decades and is one of the top consulting services providers. Being one of the top management consulting services in India and in foreign countries, and growing start-ups and nurturing mature businesses, we deliver strategic direction, follow up with practical skills, and achieve success.",
      icon: <FaLightbulb className="text-4xl text-indigo-600" />,
    },
    {
      title: "Customized Solutions",
      description:
        "We do not believe that one formula can be applied in all situations, as it has been successful. Any business consulting solution will be tailored to your industry, company, situation, challenges, and objectives as a trustworthy consulting company. They will be the most pertinent and efficient for you because of our tailor-made strategies.",
      icon: <FaChartBar className="text-4xl text-indigo-600" />,
    },
    {
      title: "End-to-End Support",
      description:
        "Among the services that Capyngen can offer during your technology transformation, there is the first assessment and development of a strategy, all the way to the implementation, training, and optimisation borne out through continuous consulting services. We do not share the advice we give--we are partners.",
      icon: <FaNetworkWired className="text-4xl text-indigo-600" />,
    },
    {
      title: "Proven Track Record",
      description:
        "Our portfolio narrates about the effective transformations of IT projects of other industries that have quantifiable outcomes like reduced costs, increased efficiency, increased revenues, and enhanced customer satisfaction as the top consulting services. Our clients are the success stories that are testimonies of how well we can deliver.​",
      icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
    },
    {
      title: "Future-Ready Technology",
      description:
        "We, as an IT consulting company, intend to become the trendsetter in the world of technology. We will steer you in the implementation of the newest tools, platforms, and solutions, including cloud computing, artificial intelligence, automation, and analytics, that will enable your company to have a competitive advantage in the long run.",
      icon: <FaBullhorn className="text-4xl text-indigo-600" />,
    },
    {
      title: "Industry Recognition",
      description:
        "Capyngen is among the top consulting company in India. The firm has managed to build an effective reputation through its consistent delivery of good-quality consulting services, constant development of new solutions, and its constant determination in the success of its customers in various markets.​",
      icon: <FaMoneyBillWave className="text-4xl text-indigo-600" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "IT Strategy & Planning",
      description:
        "The development of the strategic IT road maps, which will combine the technology projects with business goals and the mission of the company as the management consulting services.​",
      image: assets.consulting2,
      cardBg: "bg-blue-100",
    },

    {
      title: "Cloud Consulting",
      description:
        "A cloud uptake plan that plots the most appropriate cloud approach (public, private, hybrid) to the requirements set by the consulting services.​",
      image: assets.consulting3,
      cardBg: "bg-green-100",
    },
    {
      title: "Cybersecurity Consulting",
      description:
        "The security risk assessment that identifies the security loopholes, intrusions, and potential attacks in the entire infrastructure by consulting company experience.​",
      image: assets.consulting4,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Streamlining of business processes through the selection of the appropriate RPA, AI, and workflow software that is to be applied to the automation procedure with the top consulting services.",
      image: assets.consulting5,
      cardBg: "bg-blue-100",
    },

    {
      title: "IT Infrastructure Consulting",
      description:
        "The advances in the network architecture that render network infrastructures high-performance, secure, and scaling to increase with growth as consulting services provider.​",
      image: assets.consulting6,
      cardBg: "bg-green-100",
    },
    {
      title: "Business Consulting Solutions",
      description:
        "Growth strategy, which constitutes of specific strategies to grow into new markets, launch of new products, and growth through consulting, is developed.​",
      image: assets.consulting7,
      cardBg: "bg-yellow-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Assessment",
      description:
        "The discovery workshops are the genesis of our appreciation of your IT environment, business goals, problems and prospects as the top consulting company in India. Among these sessions are technology audits, stakeholder interviews, process mapping, and competitive analysis, all of which form a strategy basis.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description:
        "Our team is composed of experts who will design a custom roadmap with the help of consulting services, depending on the results of the assessment and in accordance with your business objectives. A roadmap is made to contain prioritised recommendations, implementation schedules, budget planning, and expected ROI that puts the path ahead straight.",
    },
    {
      step: "Step 03",
      title: "Implementation Support",
      description:
        "We do not simply offer suggestions and leave. As management consulting services, our team accompanies yours throughout the implementation process, providing technical knowledge, project management, and simply ensuring that the implementation is underway with minimum inconvenience to the rest of the organisation.​",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: (
        <span>
          <Link to={"/industries/e-commerce"}>E-commerce & Retail</Link>
        </span>
      ),
      desc: "",
      image: assets.webDesign11,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/healthcare-fitness"}>
            Healthcare & Wellness
          </Link>
        </span>
      ),
      desc: "",
      image: assets.webDesign12,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/education"}>Education & E-learning</Link>
        </span>
      ),
      desc: "",
      image: assets.webDesign13,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/real-estate"}>Real Estate</Link>
        </span>
      ),
      desc: "",
      image: assets.webDesign14,
      textColor: "text-white",
    },
    {
      title: "IT & Software",
      desc: "",
      image: assets.webDesign15,
      textColor: "text-white",
    },
    {
      title: "Corporate & Enterprise Solutions",
      desc: "",
      image: assets.webDesign16,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/travel-logistics"}>Travel & Hospitality</Link>
        </span>
      ),
      desc: "",
      image: assets.webDesign17,
      textColor: "text-white",
    },
    {
      title: "Startups & Entrepreneurs",
      desc: "",
      image: assets.webDesign18,
      textColor: "text-white",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Top Consulting Services in India | Business Consulting Services
        </title>
        <meta
          name="description"
          content="Get expert guidance from a trusted provider of top consulting services in India. Our consulting services help businesses improve strategy, operations, and growth."
        />
        <meta
          name="keywords"
          content="Top consulting services in India, consulting services "
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="lg:sticky inset-0">
        <Banner10
          title="Instant consulting services in India"
          highlight=" – Get India’s #1 Trusted consulting services"
          description={
            <>
              The technology and digital consulting company consults with
              various companies in the same world, particularly Indian
              companies, in the form of consulting services. Our consulting is
              packed into Angola-adapted, and the main aim of the exercises is
              to simplify the processes in the businesses, make them more
              productive and extend with the help of the management consulting
              services into the market with support from the{" "}
              <a href="https://www.capyngen.com/ppc">
                best ppc services in India
              </a>
              .
            </>
          }
          buttonAria="Start Your Project"
          services={[
            "Custom IT Consulting",
            "Business Consulting Solutions",
            "IT Consulting Services",
            "Enterprise Consulting Company",
          ]}
          image={assets.consulting1}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Request for a Complimentary Consultation"
          description={[
            "You Know Our Strategic Technology Solutions and Grow with Us. Reaching Your Business to Grow with Us - Partner with one of the top consulting company in India!",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <FullSizeImageSection
          backgroundImage={assets.consultingFullSize}
          title="Strategic guidance for business success"
          description={
            <>
              Our expertise in consulting services providers is introduced to
              diagnose problems, come up with solutions and help you develop as
              a{" "}
              <a href="https://www.capyngen.com/seo">
                best seo service provider in india
              </a>
            </>
          }
          buttonText="Book Consultation"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <CardsSection
          heading={
            <span>
              Why should you choose <Link to={"/"}>Capyngen</Link> Consulting?
            </span>
          }
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-br from-[#000]/90 to-gray-800/90 hover:bg-gradient-to-tl hover:-translate-y-1 transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-white/30"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Request for a Complimentary Consultation"
          description={[
            "Would you like to transform your IT strategy and make it efficient? You can then contact the expert consulting services provider of Capyngen today and discover how your business can expand fast with a carefully thought-out technology strategy from us!",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSectionImage
          heading="Our Comprehensive Consulting Services"
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
        <HowWeWork
          heading="How We Deliver Results - Our Consulting Approach"
          desc=""
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.consultingFullSize2}
          title="Your vision, our expertise"
          description="Work with us in order to reach digital transformation and strategic initiatives."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Our free IT consulting services are available; why not use them? Our technology experts will first learn your needs and then design custom strategies that will actually take your company on a new level and will provide you with a payback on your investment!",
          ]}
          textSize="text-2xl"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default Consulting;
