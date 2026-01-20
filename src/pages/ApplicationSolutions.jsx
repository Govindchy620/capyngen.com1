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
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/application-solutions#webpage",
  url: "https://www.capyngen.com/application-solutions",
  name: "Best Application Solutions for Business – India’s Top Custom Application Solutions",
  description:
    "Get India’s top Custom Application Solutions for businesses – secure, scalable, and tailored to your needs for seamless digital transformation.",
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
    url: "https://www.capyngen.com/assets/applicationSolution5-BrBtAszh.png",
    caption: "Custom Application Solutions for Business by Capyngen",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/application-solutions#service",
  name: "Best Application Solutions for Business – India’s Top Custom Application Solutions",
  description:
    "Get India’s top Custom Application Solutions for businesses – secure, scalable, and tailored to your needs for seamless digital transformation.",
  url: "https://www.capyngen.com/application-solutions",
  serviceType: "Custom Application Solutions",
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
    url: "https://www.capyngen.com/assets/applicationSolution5-BrBtAszh.png",
    caption: "Custom Application Solutions for Business by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are application solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Application solutions are software systems designed to solve business challenges and support growth through web, mobile, and cloud-based custom application solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Why should businesses invest in custom application solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom application solutions provide greater flexibility, functionality, and optimization compared to generic software, giving businesses a competitive advantage.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen offer enterprise application solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen delivers scalable and reliable enterprise application solutions designed to handle complex business processes.",
      },
    },
    {
      "@type": "Question",
      name: "Which technologies do you use to develop applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use modern technologies such as React, Node.js, Flutter, AWS, and Kubernetes to build scalable and high-performance application solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop both mobile and web applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop custom mobile and web applications based on your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Can Capyngen build cloud-native applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We specialize in cloud-native application solutions that are scalable, flexible, and cost-effective.",
      },
    },
    {
      "@type": "Question",
      name: "Do you upgrade and modernize legacy applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We modernize legacy applications to align with current technologies and evolving business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve multiple industries including healthcare, finance, commerce, education, entertainment, software, and telecommunications.",
      },
    },
    {
      "@type": "Question",
      name: "Are your applications secure and scalable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We follow strict security standards and develop highly scalable application solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide SaaS application development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We develop cloud-based SaaS application solutions that enable businesses to deliver recurring services.",
      },
    },
    {
      "@type": "Question",
      name: "Can your applications integrate with existing systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our APIs are designed for seamless integration with existing platforms and software.",
      },
    },
    {
      "@type": "Question",
      name: "How long does application development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Application development timelines typically range from 4 to 10 weeks, depending on project complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer comprehensive post-launch support, maintenance, and upgrade services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We collaborate with startups as well as large enterprises to deliver effective application solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get started by scheduling a free consultation. Our team will recommend the best application development solutions for your business.",
      },
    },
  ],
};

const ApplicationSolutions = () => {
  const faqItems = [
    {
      question: "What are application solutions?",
      answer:
        "Application solutions refer to systems where the software is used to address business issues and grow the business by Web, Mobile, and Cloud-based custom application solutions.​",
    },
    {
      question:
        "Why then consider investing in custom application solutions by businesses?",
      answer:
        "The general one does not provide as many functionalities, which allows the enterprise to be a competitive advantage through application development services by being more specific and more optimized.​",
    },
    {
      question:
        "Does enterprise application solutions are offered by Capyngen?",
      answer:
        "Absolutely. As the application development company, we create application solutions that are scalable with the reliability of enterprise-level systems when it comes to complex business processes.​",
    },
    {
      question: "Which technologies do you apply to develop apps?",
      answer:
        "The primary technologies that we employ to run the application solutions smoothly and scale to our clients are mainly React, Node.js, Flutter, AWS, and Kubernetes.​",
    },
    {
      question: "Do you create mobile as well as web applications?",
      answer:
        "Certainly. We create and build applications to both the mobile devices and the web based on your application solutions in Gurgaon requirements.​",
    },
    {
      question: "Is Capyngen able to construct cloud-native applications?",
      answer:
        "Exactly. We specialize in offering cloud application solutions which are scalable, flexible and cost effective through global applications solution approach.​",
    },
    {
      question: "Do you upgrade old applications?",
      answer:
        "A definite Yes. We modernise old software to suit new levels of business and technology application solutions.​",
    },
    {
      question: "What are your served industries?",
      answer:
        "In the best application solutions for business, we deal with medical, financial, commercial, educational, entertainment, software, and telecommunication sectors.​",
    },
    {
      question: "Do you have secure and scalable applications?",
      answer:
        "Certainly. We use strict security requirements and develop scalable products for application solutions.​",
    },
    {
      question: "Does it offer SaaS application development?",
      answer:
        "Yes. We develop cloud-based solutions of SaaS applications that assist companies in providing recurring services using an app development company in India.​",
    },
    {
      question: "Is your application able to work with existing systems?",
      answer:
        "Yes. Our APIs are designed to be synchronised with other platforms and software through application management services easily.​",
    },
    {
      question: "What is the duration of the construction of an application?",
      answer:
        "The timelines are dependent on the complexity of the project, ranging from 4 to 10 weeks in application development services.​",
    },
    {
      question: "Do you provide after-sales services?",
      answer:
        "Yes. Our services also include full support services in maintenance and upgrades after deploying custom application solutions.​",
    },
    {
      question:
        "Do you have solutions that are appropriate to startups and enterprises?",
      answer:
        "Indeed. We collaborate with small or even large-scale businesses to provide effective application solutions.​",
    },
    {
      question: "What should I do in order to start with Capyngen?",
      answer:
        "Establish a free consultation with us to come up with the best application development solutions for your business.​",
    },
  ];

  const servicesData = [
    {
      image: assets.applicationSolution4,
      title: "Web Application Development",
      desc: "We develop slick, secure and also purpose built web applications according to your business objectives that will enable enhancing search rankings and user base as global applications solution providers.",
    },
    {
      image: assets.applicationSolution5,
      title: "Mobile Application Development",
      desc: "Our services in the custom Android app development and iOS software development company can create high-performing native and cross-platform mobile applications with a modern and stylish look and substantial engagement.​​",
    },
    {
      image: assets.applicationSolution6,
      title: "Enterprise Application Solutions",
      desc: "Both Business suites (stable and extendable) to enhance communication, productivity and interaction with employees through application management services.",
    },
    {
      image: assets.applicationSolution7,
      title: "Cloud-Native Applications",
      desc: "Cloud-based applications with the ability of freedom of features, easy upgrades, and fast computing, such that application solutions in Gurgaon could grow exponentially.​",
    },
    {
      image: assets.applicationSolution8,
      title: "Custom Software Solutions",
      desc: "India Custom software to meet the complex corporate requirements, guaranteeing innovations, assurance, and client retention as the App development company in India.​",
    },
    {
      image: assets.applicationSolution9,
      title: "E-Commerce Applications",
      desc: "Complete online stores dedicated to easy user experiences and checkout.",
    },
    {
      image: assets.applicationSolution10,
      title: "SaaS (Software as a Service) Applications",
      desc: "Budget-friendly, fast to develop, scalable, and secure subscription-based cloud applications.",
    },
    {
      image: assets.applicationSolution12,
      title: "App Development on a cross-platform",
      desc: "Software offers a uniform experience to users regardless of the devices without multiple apps.",
    },
    {
      image: assets.applicationSolution13,
      title: "Development and integration of API",
      desc: "Design of an API that allows the exchange of data easily and facilitates access to better business operations.",
    },
    {
      image: assets.applicationSolution14,
      title: "Application modernisation: Legacy applications",
      desc: "Modifying the old software to achieve modern standards in terms of speed, safety, and ease of use.",
    },
    {
      image: assets.applicationSolution15,
      title: "CRM and ERP Solution applications",
      desc: "CRM and ERP systems that improve business intelligence and relationships with clients.",
    },
    {
      image: assets.applicationSolution16,
      title: "AI-Powered Applications",
      desc: "Smart AI and ML systems that assist companies in spending less time and predicting.",
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis",
      description:
        "Learn business requirements, issues and user expectations in order to establish a platform of scalable custom application solutions.​",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      description:
        "Develop attractive, user-friendly, and user retention interfaces.",
    },
    {
      step: "Step 03",
      title: "Development & Integration",
      description:
        "As an application development company, we develop secure, high performance applications that integrate readily with third-party tools and databases.",
    },
    {
      step: "Step 04",
      title: "Testing & QA",
      description:
        "Carry out comprehensive testing in order to verify functionality, security, compatibility and high performance.",
    },
    {
      step: "Step 05",
      title: "Deployment & Support",
      description:
        "Install programs effectively and offer continuous technical maintenance and support through application mangement services.​",
    },
    {
      step: "Step 06",
      title: "Optimization in Permanence",
      description:
        "Ensure the excellence of apps through performance analysis, user feedback, and tech updates to be competitive.",
    },
  ];

  const slidesData = [
    {
      image: assets.applicationSolution1,
      heading:
        "Instant Custom Application Solutions – Get India’s #1 Trusted Business Application Service",
      description: (
        <>
          <p>
            As the best application development company, we develop scalable
            custom application solutions that meet your business's unique
            requirements, whether on web or mobile.​{" "}
          </p>
          <p className="mt-3">
            Capyngen is a global leader in providing effective digital products,
            such as enterprise, cloud and mobile applications, and the best
            application development solutions.​
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
            Develop secure, reliable, and scalable applications with Capyngen to
            make your business smarter and faster with our Apps Solutions
            company knowledge.​
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
            Application development services. We deploy the use of modern
            technologies and strategies to provide safe, scalable, customised
            application solutions to start-ups, enterprises and global brands.
            Capyngen also partners with you as a strategic{" "}
            <a
              href="https://www.capyngen.com/consulting"
              className="text-blue-500 font-semibold"
            >
              consulting services provider
            </a>
            , helping you align technology with long-term business goals.
          </p>
        </>
      ),
      price: "",
    },
  ];

  const cardsSectionData1 = [
    {
      title:
        "Competencies to develop customised, cloud, mobile and web application solutions.",
      description: "",
      icon: <FaPuzzlePiece className="text-4xl text-white" />,
    },
    {
      title:
        "A total development package, which takes a product through all development phases.",
      description: "",
      icon: <FaLaptopCode className="text-4xl text-white" />,
    },
    {
      title:
        "A highly qualified development and design team at Apps Solutions company.",
      description: "",
      icon: <FaAppStore className="text-4xl text-white" />,
    },
    {
      title:
        "The capability to perform on a global scale and be as secure as big companies.",
      description: "",
      icon: <FaMoneyBillWave className="text-4xl text-white" />,
    },
    {
      title: "Focus on invention, expandability and user-friendliness.",
      description: "",
      icon: <FaBuilding className="text-4xl text-white" />,
    },
    {
      title: (
        <>
          Application software services for solving problems of the corporates
          worldwide, and digital growth support that rivals even the{" "}
          <a
            href="https://www.capyngen.com/digital-marketing"
            className="text-blue-500 font-semibold"
          >
            Best digital marketing services Provider
          </a>{" "}
          in impact on revenue.
        </>
      ),
      description: "",
      icon: <FaIndustry className="text-4xl text-white" />,
    },
  ];

  useSplitTextAnimation("h1");

  return (
    <div className="relative">
      <Helmet>
        <title>
          Best Application Solutions for Business – India’s Top Custom
          Application Solutions
        </title>
        <meta
          name="description"
          content="Get India’s top Custom Application Solutions for businesses – secure, scalable, and tailored to your needs for seamless digital transformation."
        />
        <meta
          name="keywords"
          content="Best application solutions for business, application solutions"
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
          subheading="We complete a package of business application solutions with the focus on the diverse industry needs, with application software services:"
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
            <>
              <span>
                Talk to one of our brilliant employees and define the best
                application solutions that suit your company as the best
                application solutions for business. Another mighty project is in
                the process of construction.
              </span>
            </>,
          ]}
          buttonText="Book Your Consultation Now"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Benefits of Our Application Solutions"
          description={[
            "Client-built custom application solution, Capyngen business wins can be quantitatively measured as follows:  ",
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "More Efficiency and Productivity",
                    text: "Automation of tasks and workflow.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Increase in Customer Interaction",
                    text: "Easy-to-use apps enhance customer relationships.",
                    color: "text-blue-500",
                  },
                  {
                    title:
                      "Secure, Scale-able, and Future Orientated Applications",
                    text: "Built using the latest technology to support businesses.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Shorter Route to Sales",
                    text: "Fast business development before competitors.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Integration With No Ado",
                    text: "Easily access existing systems or third-party applications.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Low-priced solutions",
                    text: "Optimized development uses less on operations.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}:
                    </strong>{" "}
                    {text}
                  </li>
                ))}
              </ul>
              <p>
                The Capyngen application solutions, which are best used in the
                business, are developed in a way that leaves a lasting
                impression that is lasting.
              </p>
            </>,
          ]}
          image={assets.applicationSolution17}
          isHidden={true}
          background={assets.patternBg1}
        />
        <FullSizeImageSection
          backgroundImage={assets.applicationSolFullSize}
          title="Smart applications for modern businesses"
          description="We are fervent about developing software that is scalable and efficient, and that fulfils the requirements of the business in the 21st century by providing end-to-end application development services."
          buttonText="Discover More"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <HowWeWork
          heading="Our Application Development Process"
          desc="Our process is transparent and well structured from start to end to ensure that all application solutions are of the best standards:"
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Start Your Digital Transformation Journey"
          description={[
            "Capyngen develops custom application solutions collabors to the business community, which are enjoyable to access and help the company develop more quickly, as high as worldwide, with the best application development solutions.",
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
