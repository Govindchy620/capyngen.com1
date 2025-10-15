import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import OurServices from "../components/OurServices";
import HowWeWork from "../components/HowWeWork";
import WhyChoose from "../components/WhyChoose";
import TechnologiesCarousel from "../components/TechnologiesCarousel";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import TopRatedCompany from "../components/TopRatedCompany";
import CreativeAgencyFAQ from "../components/CreativeAgencyFAQ";
import IndustryServices from "../components/IndustryServices";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSection from "../components/CardsSection";
import {
  FaAppStore,
  FaBuilding,
  FaIndustry,
  FaLaptopCode,
  FaMoneyBillWave,
  FaPuzzlePiece,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ApplicationSolutions = () => {
  const faqItems = [
    {
      question: "What are application solutions?",
      answer:
        "Application solutions are systems that utilize software to solve business problems and increase business through Web, Mobile, and Cloud-based solutions.",
    },
    {
      question: "Why should businesses invest in custom application solutions?",
      answer:
        "Custom solutions allow the businesses to be more specific, optimized, and offer more functionalities than the general ones, thus giving an enterprise a competitive advantage.",
    },
    {
      question: "Does Capyngen offer enterprise application solutions?",
      answer:
        "Absolutely. We develop applications with the scalability and reliability of enterprise-grade systems for intricate business processes.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "We mainly use technologies such as React, Node.js, Flutter, AWS, and Kubernetes for smooth running and scalability of applications of our clients.",
    },
    {
      question: "Do you develop mobile and web applications?",
      answer:
        "Certainly. We design and develop applications for mobile devices as well as for the web according to the needs of you.",
    },
    {
      question: "Can Capyngen build cloud-native apps?",
      answer:
        "Exactly. We are experts in providing cloud solutions that are scalable, flexible, and cost-effective.",
    },
    {
      question: "Do you modernize legacy applications?",
      answer:
        "A definite Yes. We upgrade legacy software to new standards of business and technology application.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with industries such as medical, financial, commercial, educational, entertainment, software, and telecommunication sectors.",
    },
    {
      question: "Are your applications secure and scalable?",
      answer:
        "Certainly. We adhere to rigorous security standards and build scalable products.",
    },
    {
      question: "Do you offer SaaS application development?",
      answer:
        "Yes. We create cloud-hosted SaaS applications that help businesses deliver recurring services.",
    },
    {
      question: "Can your applications integrate with existing systems?",
      answer:
        "Yes. We design APIs for easy synchronization with other platforms and software.",
    },
    {
      question: "How long does it take to build an application?",
      answer:
        "Timelines depend on project complexity, generally between 4-10 weeks.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes. We provide full support for maintenance and updates after deployment.",
    },
    {
      question: "Are your solutions suitable for startups and enterprises?",
      answer:
        "Indeed. We partner with any size business to deliver efficient application solutions.",
    },
    {
      question: "How can I get started with Capyngen?",
      answer:
        "Set up a no-cost consultation with us to devise feasible application solutions for your enterprise.",
    },
  ];

  const servicesData = [
    {
      image: assets.applicationSolution4,
      title: "Web Application Development",
      desc: "We create slick, secure, and purpose-built web applications tailored to your business goals, helping improve search rankings and user base.",
    },
    {
      image: assets.applicationSolution5,
      title: "Mobile Application Development",
      desc: "We build top-performing native and cross-platform mobile apps with modern styling and great engagement.",
    },
    {
      image: assets.applicationSolution6,
      title: "Enterprise Application Solutions",
      desc: "Stable and extensible business suites to improve communication, productivity, and employee interaction.",
    },
    {
      image: assets.applicationSolution7,
      title: "Cloud-Native Applications",
      desc: "Cloud-based apps offering feature freedom, simple updates, and quick performance enabling scalable growth.",
    },
    {
      image: assets.applicationSolution8,
      title: "Custom Software Solutions",
      desc: "Custom software tailored to complex corporate needs ensuring innovation, security, and customer loyalty.",
    },
    {
      image: assets.applicationSolution9,
      title: "E-Commerce Applications",
      desc: "Fully functional digital shops focused on smooth user journeys and checkout processes.",
    },
    {
      image: assets.applicationSolution10,
      title: "SaaS (Software as a Service) Applications",
      desc: "Scalable, secure subscription-based cloud apps that are budget-friendly and fast to develop.",
    },
    {
      image: assets.applicationSolution12,
      title: "Cross-Platform Application Development",
      desc: "Software providing consistent user experience across devices without needing multiple apps.",
    },
    {
      image: assets.applicationSolution13,
      title: "API Development & Integration",
      desc: "API design enabling easy data exchange and improved business operation connectivity.",
    },
    {
      image: assets.applicationSolution14,
      title: "Legacy Application Modernization",
      desc: "Upgrading legacy software for speed, safety, and user-friendliness to meet modern standards.",
    },
    {
      image: assets.applicationSolution15,
      title: "CRM & ERP Application Solutions",
      desc: "Integrated CRM and ERP systems enhancing business intelligence and client connections.",
    },
    {
      image: assets.applicationSolution16,
      title: "AI-Powered Applications",
      desc: "Intelligent AI and ML applications helping companies save time and gain predictive insights.",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Understand business goals, challenges, and user expectations to set the foundation for scalable solutions.",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description:
        "Create engaging, intuitive, and accessible interfaces that enhance user retention and satisfaction.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description:
        "Develop secure, high-performance applications integrated smoothly with third-party tools and databases.",
    },
    {
      step: "Step 04",
      title: "Testing & QA",
      description:
        "Conduct thorough testing to ensure functionality, security, compatibility, and high performance.",
    },
    {
      step: "Step 05",
      title: "Deployment & Support",
      description:
        "Deploy applications efficiently and provide ongoing technical support and maintenance.",
    },
    {
      step: "Step 06",
      title: "Continuous Optimization",
      description:
        "Maintain app excellence with performance analysis, user feedback, and tech updates for competitiveness.",
    },
  ];

  const slidesData = [
    {
      image: assets.applicationSolution1,
      heading: "Custom Application Solutions to Power Your Business Growth",
      description: (
        <>
          <p>
            We create scalable applications tailored to your unique business
            needs on web or mobile.
          </p>
          <p className="mt-3">
            Capyngen leads globally in delivering impactful digital products,
            including enterprise, cloud, and mobile apps.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.applicationSolution2,
      heading: "Transform Your Business with Custom Applications",
      description: (
        <>
          <p>
            Build safe, stable, and scalable apps powered by Capyngen to grow
            your business smarter and faster.
          </p>
        </>
      ),
      price: "",
    },
    {
      image: assets.applicationSolution3,
      heading: "Top-Rated Application Solutions Company",
      description: (
        <>
          <p>
            We use modern technologies and strategies to deliver safe, scalable,
            tailor-made software for startups, enterprises, and global brands.
          </p>
        </>
      ),
      price: "",
    },
  ];

  const cardsSectionData1 = [
    {
      title:
        "Skills in creating tailored, cloud, mobile, and web app solutions.",
      description: "",
      icon: <FaPuzzlePiece className="text-4xl text-white" />,
    },
    {
      title:
        "Complete development services covering every stage from concept to implementation.",
      description: "",
      icon: <FaLaptopCode className="text-4xl text-white" />,
    },
    {
      title: "Highly skilled development and design team.",
      description: "",
      icon: <FaAppStore className="text-4xl text-white" />,
    },
    {
      title:
        "Ability to operate worldwide with security at the level of large enterprises.",
      description: "",
      icon: <FaMoneyBillWave className="text-4xl text-white" />,
    },
    {
      title:
        "Concentration on invention, expandability, and user-friendliness.",
      description: "",
      icon: <FaBuilding className="text-4xl text-white" />,
    },
    {
      title:
        "Used by corporates all over the globe to solve application problems.",
      description: "",
      icon: <FaIndustry className="text-4xl text-white" />,
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
      <Helmet>
        <title>
          Application Solutions | Business & Custom App Solutions – Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers powerful application solutions for businesses. Get custom, scalable, and efficient app development tailored to your enterprise goals."
        />
        <meta
          name="keywords"
          content="Application Solutions | Business & Custom App Solutions – Capyngen"
        />
      </Helmet>
      <div className="lg:sticky inset-0">
        <CreativeAgencyFAQ
          slides={slidesData}
          slideDuration={4000}
          headingClass="text-4xl md:text-5xl font-extrabold mb-6"
          descClass="text-lg leading-relaxed mb-8 text-gray-300"
          buttonGradient="from-blue-500 to-purple-600"
          priceLabel=""
        />
      </div>

      <div className="relative z-10">
        <IndustryServices
          heading="Application Solutions We Offer"
          subheading="We offer a comprehensive suite of business application solutions centered around varied industry requirements:"
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Book Your Free Consultation Today"
          description={[
            "Have a chat with one of our knowledgeable staff and identify the finest application development solutions tailor-made for your firm. Our next powerful venture is waiting to be built.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Benefits of Our Application Solutions"
          description={[
            `Custom application-building services from Capyngen result in business wins that can be quantitatively measured:`,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "Increased Efficiency and Productivity",
                    text: "Simplified workflow and task automation.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Boost in Customer Engagement",
                    text: "User-friendly apps improve customer relationships.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Safe, Scalable, and Future-Oriented Apps",
                    text: "Designed with latest tech for business compatibility.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Shorter Route to Sales",
                    text: "Rapid business growth ahead of competitors.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Integration Without Any Hassle",
                    text: "Easily access current systems or third-party tools.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Solutions that are Affordable",
                    text: "Optimized development saves operational costs.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>{" "}
                    {text}
                  </li>
                ))}
              </ul>
              <p>
                The business best application solutions of Capyngen are
                formulated to create a powerful impression that lasts.
              </p>
            </>,
          ]}
          image={assets.applicationSolution17}
          isHidden={true}
          background={assets.patternBg1}
        />
        <HowWeWork
          heading="Our Application Development Process"
          desc="We adhere to a transparent and well-organized process from start to finish to guarantee that every application meets the highest standards:"
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Start Your Digital Transformation Journey"
          description={[
            "Capyngen builds tailored app solutions for the corporate world that are fun to use and make the company grow faster, up to the global level.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Why Choose Capyngen for Application Solutions"
          services={cardsSectionData1}
          sectionBg="bg-gray-900"
          cardBg="border-2 border-white shadow-2xl shadow-gray-800"
          height="h-72"
          textColor="text-white"
          headColor="text-white"
        />
        <FAQSection2 items={faqItems} />
      </div>
    </div>
  );
};

export default ApplicationSolutions;
