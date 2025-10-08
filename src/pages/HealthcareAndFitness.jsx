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
import Banner11 from "../components/Banner11";

const HealthcareAndFitness = () => {
  const faqItems = [
    {
      question: "What does a healthcare app development company do?",
      answer:
        "It makes apps that are secure and conform to HIPAA for hospitals, clinics, and healthcare centers.",
    },
    {
      question: "Can you build telemedicine platforms?",
      answer:
        "We develop telemedicine platforms that offer video call and patient management facilities besides keeping the data secure.",
    },
    {
      question: "Are your solutions HIPAA compliant?",
      answer:
        "Definitely. All our healthcare applications are within HIPAA guidelines for securing patients’ data.",
    },
    {
      question: "Do you offer EHR software?",
      answer:
        "Yes, we create custom EHR software that allows smooth management of patient data.",
    },
    {
      question: "Can fitness centers benefit from your apps?",
      answer:
        "Yes, we create personalized fitness apps for the gym, trainer, and wellbeing startup.",
    },
    {
      question: "Do you offer remote patient monitoring systems?",
      answer:
        "Yes, we design IoT-enabled platforms that allow live health oversight.",
    },
    {
      question: "Can small clinics use your software?",
      answer:
        "Yes. Our products are scalable and fit to be used by small and big healthcare providers.",
    },
    {
      question: "Do you build custom fitness tracking apps?",
      answer:
        "Yes, we'd be happy to help you with a project that fits your needs exactly for custom health and fitness app.",
    },
    {
      question: "How is the security of patient data?",
      answer:
        "We take advantage of encryption, HIPAA-compliant servers, and access control policies implemented for the utmost security.",
    },
    {
      question: "Do you offer data analytics solutions?",
      answer:
        "Yes, we provide the software that collects and analyzes health data and presents the insights in an understandable way.",
    },
    {
      question:
        "Is it possible for your solutions to integrate with legacy systems?",
      answer:
        "Yes, we have the capacity to ensure the smooth integration of your current healthcare infrastructure with our products.",
    },
    {
      question: "Do you support wearable device integration?",
      answer:
        "Yes, we produce apps that can be compatible with the IoT technologies and wearable devices.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve hospitals, clinics, gyms, fitness brands, and telemedicine providers.",
    },
    {
      question: "Do you offer maintenance after launch?",
      answer:
        "Yes, we are always available for support and upgrades long after the product release.",
    },
    {
      question:
        "What is the reason for choosing Capyngen for healthcare software?",
      answer:
        "We come with experience, security, bespoke solutions, and new ideas to produce the best outcome.",
    },
  ];

  const servicesData = [
    {
      image: assets.bg1,
      title: "Hospital Management Software",
      desc: "Make patient data digital, simplify billing, and create decision-making dashboards through automation of workflows.",
    },
    {
      image: assets.bg1,
      title: "Telemedicine Platforms",
      desc: "Provide a variety of services such as: remote pre-consultations, video calls, appointment scheduling, and monitoring of patient's health.",
    },
    {
      image: assets.bg1,
      title: "Digital Fitness Solutions",
      desc: "Gym, personal trainer, and wellness brand app development of customized fitness to increase engagement.",
    },
    {
      image: assets.bg1,
      title: "Patient Management Systems",
      desc: "The system securely stores patient history, appointments, treatment plans, and insurance details.",
    },
    {
      image: assets.bg1,
      title: "EHR Software Solutions",
      desc: "Facilitate the storage, sharing, and real-time data access for medical professionals, all in accordance with HIPAA regulations.",
    },
    {
      image: assets.bg1,
      title: "Healthcare Data Analytics",
      desc: "Implement health data analytics software that supports the development of insights, the activity of forecasting, and the improvement of organization.",
    },
  ];
  const typesData = [
    {
      icon: <FaBuilding />,
      title:
        "Extensive experience in healthcare software development that is HIPAA-compliant.",
      desc: "",
    },
    {
      icon: <FaUserFriends />,
      title: "IT solutions which are customizable, scalable, and secure.",
      desc: "",
    },
    {
      icon: <FaGavel />,
      title:
        "The track record of Capyngen includes healthcare app development and the fitness sector.",
      desc: "",
    },
    {
      icon: <FaHome />,
      title:
        "Support for every stage of the product lifecycle: from strategy to implementation to product enhancement.",
      desc: "",
    },
    {
      icon: <FaUserTie />,
      title: "Top-tier technology stack with AI, Cloud, and Big Data.",
      desc: "",
    },
    {
      icon: <FaGlobe />,
      title:
        "The company has received excellent client feedback and always delivers on time.",
      desc: "",
    },
  ];
  const slidesData = [
    {
      id: 1,
      title:
        "Creative and Technical IT Solutions for the HealthcareAndFitnessal Sector",
      subtitle:
        "Offering HealthcareAndFitnessal organizations digital tools, cloud services and data-driven learning management System that are futuristic and versatile.",
      image: assets.applicationSolution,
      ctaText: "Explore Projects",
      ctaLink: "#projects",
    },
    {
      id: 2,
      title: "Seamless Performance",
      subtitle: "Mobile-first, future-ready solutions.",
      image:
        "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1920",
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Complicated healthcare data management",
      description: "",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Unproductive care and record tracking of the patients",
      description: "",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title:
        "Absence of completely safe telemedicine and remote monitoring devices",
      description: "",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title:
        "Health clubs that are suffering from poor management of routine operations",
      description: "",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Difficulties of regulatory compliance and HIPAA",
      description: "",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title:
        "Lack of interoperability between digital platforms and legacy systems",
      description: "",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "AI & Machine Learning",
      description:
        "The main areas of AI application in healthcare are predictive health analytics and personalization of healthcare services.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },
    {
      title: "Cloud Platforms",
      description:
        "Hospitals and fitness centers use cloud platforms for securely storing and managing their data and for offering scalability of their services to customers.",
      image: assets.customAiSolution,
      cardBg: "bg-green-100",
    },
    {
      title: "Mobile & Web Development Frameworks",
      description:
        "These are one of the main technologies that enable the building of high-performance mobile and web applications.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Data Security & HIPAA Compliance Tools",
      description:
        "These are networks of security measures that ensure privacy, and enhance the trust of healthcare professionals and their clients.",
      image: assets.customAiSolution,
      cardBg: "bg-purple-100",
    },
    {
      title: "IoT & Wearables Integration",
      description:
        "A remote patient monitoring system is an example of the Internet of Things (IoT) and wearable devices integration.",
      image: assets.customAiSolution,
      cardBg: "bg-pink-100",
    },
    {
      title: "Analytics & Dashboards",
      description:
        "Continuous, plugged-in, quantitative data is one source for real-time reporting, allowing users to make informed decisions.",
      image: assets.customAiSolution,
      cardBg: "bg-orange-100",
    },
  ];

  const marketingCards = [
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-1.jpg",
      alt: "Christmas background 3D cartoon",
      text: "SEO & Content",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-2.jpg",
      alt: "A beautiful glowing flower",
      text: "Social Media Marketing",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-3.jpg",
      alt: "A magical leopard",
      text: "Paid Advertising",
    },
    {
      img: "https://raw.githubusercontent.com/mobalti/open-props-interfaces/refs/heads/main/ai-hero-chat-popover/assets/img-4.jpg",
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Email Campaigns",
    },
  ];

  return (
    <div className="">
      <Banner11
        heading=" with IT Solutions Beyond Imagination"
        highlight="Transforming Healthcare & Fitness"
        description="One of the innovative ways to improve patient care is developing software which will automate the process of hospitals, clinics and fitness centres."
        cards={marketingCards}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Want to Make a Difference in Your Healthcare or Fitness Business?"
        description={[
          "Coordinate a meeting with our professionals and perceive how digital solutions can turn round your operations.",
        ]}
        buttonText="Schedule a Free Strategy Session"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        reverse={true}
        title="Healing & Fitness Revolutioned by IT"
        description={[
          <>
            <p>
              Capyngen is a healthcare app development company that can be
              relied on to come up with practically implementing healthcare
              mobile applications and telemedicine software solutions which
              simplify operations and promote patient welfare.
            </p>
            <p>
              We are the enablers of hospitals, clinics, and fitness centers to
              undergo a digital transformation process that is smooth and
              efficient, meeting standards, and increasing the engagement of
              patients and clients.
            </p>
            <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
              {[
                {
                  title: "",
                  text: "Health & fitness digital transformation",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "Boosted operational efficiency and better communication",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "Patient empowerment via technology",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "Flexible solutions for any healthcare facility",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "Systems designed for trust & regulatory compliance",
                  color: "text-blue-500",
                },
                {
                  title: "",
                  text: "IT services for a healthcare system that leads the future",
                  color: "text-blue-500",
                },
              ].map(({ title, text, color }, idx) => (
                <li
                  key={idx}
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  {text}
                </li>
              ))}
            </ul>
          </>,
        ]}
        image={assets.whyChooseUs}
        background={assets.patternBg1}
        isHidden="hidden"
      />
      <IndustryServices
        heading="Complete Healthcare & Fitness IT Services"
        subheading=""
        services={servicesData}
      />
      <CardsSection
        heading="Industry Challenges We Solve"
        subheading="Working on the most necessary medical and health problems"
        services={cardsSectionData2}
        sectionBg="bg-black"
        cardBg="bg-gradient-to-br from-[#000]/90 to-gray-800/90 hover:bg-gradient-to-tl hover:-translate-y-1 transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-white/30"
        headColor="text-white"
        hoverBg=" hover:bg-gray-700"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
        height="h-72"
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Book Your Personalized Demo"
        description={[
          "Gain first-hand experience of futuristic HealthcareAndFitness IT solutions with Capyngen. Arrange a live LMS demo, and find out how we can revolutionize your learning ecosystem.",
        ]}
        buttonText="Book Now"
        backgroundVideo={assets.backgroundVideo}
      />
      <TypesWeDevelop
        heading="Why Choose Capyngen?"
        subheading="Your trusted IT partner for the healthcare and fitness sector."
        buttonText="Let's Contact"
        image="https://via.placeholder.com/300x550.png" // replace with actual phone image
        types={typesData}
      />
      <CardsSectionImage
        heading="Technologies We Use"
        subheading="Modern Tech Stack for Healthcare & Fitness Solutions"
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
        title="Digitize Your Healthcare Operations Today"
        description={[
          "Boost patient care and operational efficiency with HIPAA-compliant healthcare software solutions.",
        ]}
        buttonText="Get a Free Consultation"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default HealthcareAndFitness;
