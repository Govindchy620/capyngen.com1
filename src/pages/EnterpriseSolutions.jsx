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

const EnterpriseSolutions = () => {
  const faqItems = [
    {
      question: "What kinds of enterprise solutions can Capyngen deliver?",
      answer:
        "Capyngen has got it covered with a complete range of enterprise solutions that includes enter-prise software solutions, enterprise IT solutions, enterprise cloud solutions, enterprise appli-cation solutions, enterprise security solutions, data analytics, and IT consulting capable of adapting to your business needs.",
    },
    {
      question:
        "Is Capyngen capable of tailoring solutions to meet the requirements of specific sectors?",
      answer:
        "Definitely! We are the best at creating tailored enterprise solutions for the manufacturing industry, healthcare, finance, retail, logistics, and professional services. Our sector experts are the ones who know the industry-specific issues, rules, and ways to do things right to give you solutions that fit your business like a glove.",
    },
    {
      question: "Are your enterprise solutions safe?",
      answer:
        "Security comes first at our house! Our enterprise security solutions feature are advanced threat monitoring, multi-tier firewalls, intrusion detection systems, encrypt-ing, access controls, compliance management, and 24/7 security operations center monitoring that keeps you safe forever and ever, amen.",
    },
    {
      question: "Are your enterprise solutions on the cloud?",
      answer:
        "Absolutely! We are proud cloud-based enterprise solutions providers for small and big businesses such as cloud migration, hybrid cloud architecture, multi-cloud management, and cloud-native application development. We collaborate with every major cloud platform including AWS, Azure, and Google Cloud.",
    },
    {
      question:
        "Support for enterprise solutions is just for a certain period, right?",
      answer:
        "Capyngen takes care of all enterprise IT solutions with 24/7 support that is thorough and easy. Application management, cloud services, security monitoring, infrastructure maintenance, etc. are the services that our reliable support teams render to you guaranteeing your system running without a hitch and with hardly any downtime.",
    },
    {
      question: "What is the timeframe to implement enterprise solutions?",
      answer:
        "The time frame for the implementation depends on the project scope and complexity. For instance, simple cloud migrations may take 4-8 weeks while multidimensional digi-tal transformation projects can take 6-12 months. During the planning phase, we estimate and communicate project timelines.",
    },
    {
      question: "How much do enterprise solutions from Capyngen cost?",
      answer:
        "Charges for various things depend on how intricate the solution is, its magnitude, technology stack, and request for continuous support. We have various pricing platforms such as project-based, subscription-based, and managed services. Just reach out to us for a personalized estimate based on your budget.",
    },
    {
      question:
        "Will you be able to merge the new innovations with our current infrastructure?",
      answer:
        "Definitely! The implementation of business applications and merger proficiently methods are adept in linking solutions that are new with legacy systems, third-party programs, and databases. We keep going with data without glitches and operations are conducted with only one synchronous technology available across your tech environment.",
    },
    {
      question:
        "Do you deliver enterprise solutions for small and medium businesses?",
      answer:
        "We mainly concentrate on enterprise-grade solutions but we have a range of options that are adaptable to enterprises that are in the process of expansion. Our solutions can be implemented in small businesses and develop in scale as your venture grows ensuring that you get enterprise capabilities at the right level of investment.",
    },
    {
      question:
        "What are the reasons that Capyngen is the best Indian enterprise IT solutions company?",
      answer:
        "The distinctive features of Capyngen are deeply-rooted in the ability, knowledge of the industry, presence of the whole spectrum of services, promise for safety, 24/7 service, and history of transforming enterprises successfully regardless of sector diversity. The success stories of our customers tell a lot about us.",
    },
    {
      question:
        "How do you keep things going in the business during implementation?",
      answer:
        "We implement and test in stages, do testing in the support environments, run off-peak hour deployments, operate parallel systems for changeover, and distribute extensive training to lessen any disruptions to your routine work.",
    },
    {
      question: "Which technologies do you use in enterprise solutions?",
      answer:
        "We deal in the latest technology such as cloud platforms (AWS, Azure, Google Cloud), enterprise software (SAP, Oracle, Microsoft), programming languages (Java, .NET, Python), databases (SQL, NoSQL), and new technologies like AI, ML, IoT, and blockchain.",
    },
    {
      question:
        "Do you offer training for our team on the new enterprise system?",
      answer:
        "Absolutely! Training we offer is quite comprehensive and is tailored to different user roles such as end-users, administrators, and technical teams. The training program consists of documentation, practice sessions, video tutorials, and continuous knowledge transfer.",
    },
    {
      question:
        "What is your approach to dealing with data migration in new enterprise systems?",
      answer:
        "We follow data migration procedure stages that include proper data assessment, cleaning, mapping, validation, and testing. We employ reliable tools and methods that guarantee accurate, secure, and complete data transfer with minimum downtime and zero data loss.",
    },
    {
      question:
        "Can Capyngen be of service in creating a digital transformation strategy?",
      answer:
        "Sure! Our enterprise consulting services consist of the development of an all-emi-bracing digital transformation strategy. We evaluate your current condition, figure out the possibilities, draft the roadmaps, suggest the technologies, and give the facilita-tion to get familiar with your transformation goals.",
    },
  ];
  const solutionsData = [
    {
      title: "Proven Track Record",
      desc: "In India, as a leading provider of enterprise IT solutions, Capyngen has not only accomplished but has also been recognized for delivering the solutions that changed the face of the various enterprises in the different segments of the industry.",
    },
    {
      title: "Industry Expertise",
      desc: "The company addresses individual enterprise software requirements of the production sector, healthcare, finance, retail, logistics, and professional services.",
    },
    {
      title: "Complete Competencies",
      desc: "To have all your needs covered under one umbrella is what Capyngen offers in services ranging from the initial consultation to enterprise application development and integration services precisely to cloud management and ongoing support.",
    },
    {
      title: "Well-Received Cloud Solutions",
      desc: "One of the best cloud enterprise solution providers is the position we have earned through customer recognition, and we do all this by enabling businesses to make the most out of cloud technology with respect to agility, scalability, and cost savings.",
    },
    {
      title: "Scalable And Ready For The Future",
      desc: "We make our solutions to suit your growth. No matter whether you are going to increase the scale of your business, land in new locations, or just add new features, our enterprise solutions will adjust to the change of requirements without any hiccups.",
    },
    {
      title: "Innovations At Reasonable Prices",
      desc: "Solutions for businesses at the highest standards but within your budget range are what we provide. Emphasis on the return on investment is our main concern, letting every technological investment be the one that leads business forward, brings about efficiency, and helps maintain the edge over the competition.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Enterprise Network & IT Solutions",
      description:
        "A scalable IT infrastructure that is tailored to back a business's rise, you get all the things that are necessary for your daily routine to go on without a hitch such as robust architecture, high-speed connectivity, data center solutions, unified communications, IT asset management, and disaster recovery planning.",
      image: assets.enterprise3,
      cardBg: "bg-blue-100",
    },

    {
      title: "Enterprise Cloud Solutions",
      description:
        "Basically, business will be more cost-effective and scalable through cloud migration services, hybrid cloud architecture, multi-cloud management, secure cloud storage, advanced cloud security, and continuous cloud optimization.",
      image: assets.enterprise4,
      cardBg: "bg-green-100",
    },
    {
      title: "Enterprise Application Solutions",
      description:
        "Some of the services that have been provided as a means of helping the below processes to be simplified in businesses are enumerated as: custom application development, application integration, legacy modernization, mobile enterprise apps, API development, and comprehensive application maintenance.",
      image: assets.enterprise5,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Enterprise Security Solutions",
      description:
        "The advanced threat protection, security compliance management, identity, and access management, security audits, incident response protocols, and security awareness training offered to you belong to the critical business assets category.",
      image: assets.enterprise6,
      cardBg: "bg-pink-100",
    },
    {
      title: "Enterprise Consulting Services",
      description:
        "Some of the services that we are always ready to offer to you to be the first in the race of innovation and operational excellence include digital transformation strategy, IT governance frameworks, process optimization, technology roadmap planning, vendor management, and change management guidance.",
      image: assets.enterprise7,
      cardBg: "bg-purple-100",
    },
    {
      title: "Enterprise Data & Analytics Solutions",
      description:
        "The services that we provide to change the unstructured data into the insights which are actionable for your business include business intelligence dashboards, data warehousing, predictive analytics, data governance, real-time analytics, and seamless data migration.",
      image: assets.enterprise8,
      cardBg: "bg-red-100",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "First of all, we conduct intensive discovery sessions in order to understand your enterprise goals, current challenges, existing technology landscape, and future vision. Such a comprehensive analysis is the basis for tailor-made solutions.",
    },
    {
      step: "Step 02",
      title: "Strategic Planning",
      description:
        "Through a detailed roadmap, our specialists plan out the enterprise IT solutions, cloud adoption, security implementation, and application development. We rank and choose the most important initiatives by evaluating their business impact, feasibility, and ROI.",
    },
    {
      step: "Step 03",
      title: "Deployment & Integration",
      description:
        "By employing our proven procedures, we carry out the solutions that cause the least interruptions to the ongoing operations. Our step-by-step approach guarantees a successful deployment of enterprise application solutions, cloud systems, and security measures.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Enterprise-Grade Security",
      points: [
        "AI-driven threat detection with continuous monitoring",
        "Access security through zero-trust principles",
        "Governance of compliance with industry standards",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Cloud-Based Enterprise Solutions",
      points: [
        "Cloud of choice deployments: hybrid, multicloud, private",
        "Infinite scalability with business size growing",
        "Globe-trotting access of any device at any location",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Custom Enterprise Software Solutions",
      points: [
        "Custom software specialized in your industry's needs like manufacturing, healthcare, and finance",
        "Software structures that are adaptable to changes and growth of your business",
        "The clean and simple design of software which makes it easy for workers to use their natural flow of work",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Scalable IT Infrastructure",
      points: [
        "Use of cloud technology for limitless scalability",
        "Various technologies enabling load balancing for maximum performance",
        "Resource deployment that is non-manual for being fast",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "End-to-End Application Development & Integration",
      points: [
        "Full-stack programming across different languages and technologies",
        "Compatibility between old and new systems to keep most of your current investments",
        "Connecting with third-party API to increase the product's functionality",
      ],
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "Data-Driven Decision Making",
      points: [
        "Business visual aids for fast decisions",
        "Implementing AI and machine learning tools for predictive analytics.",
        "Reporting solutions that fit with your unique measures.",
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
          content="Empower your business with Capyngen’s enterprise solutions. We deliver scalable enterprise software, IT, and cloud solutions designed for growth and efficiency."
        />
        <meta
          name="keywords"
          content="Enterprise Solutions | Scalable IT & Cloud Software – Capyngen"
        />
      </Helmet>
      <Banner8
        titleMain="Enterprise Solutions"
        titlePrefix="Advanced"
        titleSuffix="To Transform Your Business"
        description={`Capyngen is the main source of enterprise IT solutions that are scalable, safe, and efficient, created for the purpose of raising up and digitally transforming the various fields of industries.`}
        imageSrc={assets.enterprise1}
        imageAlt="Ecommerce Design Illustration"
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
          "Start an Enterprise Consultation Free of Charge with Our Team of Experts – Tailored Solutions for Your Business Growth & Digital Transformation!",
        ]}
        textSize="text-2xl"
        buttonText="Get In Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="Innovate and Grow Enterprises by Technology and Innovation"
        description={[
          `To say the least, big and complicated businesses need more than yesterday's technology; they need partners who know how to do it. They have to count on the expertise of partners who have already encountered their kind of problems and are able to bring out breakthrough solutions.`,
          `Capyngen is the problem-solved provider of enterprise solutions that changes the whole game from hard to smooth sailing for your organization.`,
          `With enterprises running on custom solutions, Capyngen can give you an exceptional customer experience that combines modern technology, the best standards of the industry, and a commitment to your success.`,
        ]}
        image={assets.enterprise2}
        background={assets.patternBg1}
        isHidden="hidden"
        imageHeight="aspect-[4/3] md:aspect-[1/1]"
      />
      <CardsSectionImage
        heading="Capyngen Complete Enterprise Solutions"
        subheading=""
        services={cardsSectionImageData1}
        sectionBg="bg-gray-800"
        headColor="text-white"
        cardBg=""
        textSize="text-md"
        hoverBg="hover:bg-gray-200"
      />
      <BenefitsSection
        heading="Why Choose Capyngen for Enterprise Solutions"
        desc=""
        image={assets.enterprise9}
        benefits={solutionsData}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        title=""
        description={[
          "Want to Revolutionize Your Business? Reach out to Capyngen for Effective IT, Cloud & Security Solutions That Translate into Genuine Business Growth and Results!",
        ]}
        textSize="text-2xl"
        buttonText="Get In Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <HowWeWork
        heading="Our Enterprise Solutions Process"
        desc=""
        steps={steps}
      />
      <FullSizeImageSection
        backgroundImage={assets.enterpriseSolFullSize}
        title="Build your dream project with Capyngen"
        description="We help transform your ideas into powerful digital solutions with our expert web development services."
        buttonText="CONTACT US"
        buttonLink="/contact-us"
        overlayColor="bg-black/40"
      />
      <CardsSection
        heading="Key Features of Our Enterprise Solutions"
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
        title=""
        description={[
          "Free Enterprise Technology Assessment: Book with us to Learn How We Can Help You Cut Down Costs, Speed Up Innovation, and Facilitate Your Operations!",
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
