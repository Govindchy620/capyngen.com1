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
import BusinessValueStats from "../components/BusinessValueStats";
import CardsSection from "../components/CardsSection";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import GetStarted from "../components/GetStarted";
import Banner5 from "../components/Banner5";
import IndustryServices from "../components/IndustryServices";
import TechStack from "../components/TechStack";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/devops-solutions#webpage",
  url: "https://www.capyngen.com/devops-solutions",
  name: "DevOps Solutions Provider | Scalable DevOps Solutions",
  description:
    "Capyngen is a reliable DevOps solutions provider to automate workflows and accelerate deployments. Our DevOps solutions improve performance and scalability.",
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
    url: "https://www.capyngen.com/assets/devOpsFullSize-Pq0c5IOE.png",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/devops-solutions#service",
  name: "DevOps Solutions Provider | Scalable DevOps Solutions",
  description:
    "Capyngen is a reliable DevOps solutions provider to automate workflows and accelerate deployments. Our DevOps solutions improve performance and scalability.",
  url: "https://www.capyngen.com/devops-solutions",
  serviceType: "DevOps Solutions",
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
    url: "https://www.capyngen.com/assets/devOpsFullSize-Pq0c5IOE.png",
    caption: "DevOps Solutions by Capyngen",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DevOps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevOps is a combination of software development and IT operations aimed at delivering applications faster and more reliably. Capyngen’s DevOps solutions help improve efficiency, collaboration, and overall outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of DevOps in present-day software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevOps enhances communication between teams, reduces errors, enables faster release cycles, and ensures stable and scalable applications, making modern software more reliable.",
      },
    },
    {
      "@type": "Question",
      name: "Is Capyngen a consulting firm for DevOps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen is a DevOps consulting firm with experienced professionals who guide businesses on the right DevOps tools, strategies, and best practices.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide automated deployments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we help set up and manage automated deployments using CI/CD pipelines that are fast, secure, and reliable.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries can benefit from DevOps solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries such as finance, healthcare, e-commerce, information technology, telecommunications, media, education, and travel can significantly benefit from DevOps services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer managed DevOps services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen provides fully managed DevOps services including monitoring, optimization, and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Which cloud platforms do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud.",
      },
    },
    {
      "@type": "Question",
      name: "Can you assist with multi-cloud optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we optimize workloads across multiple cloud providers to ensure maximum performance and cost efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide disaster recovery solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our DevOps solutions include scalable disaster recovery strategies to ensure business continuity during unexpected events.",
      },
    },
    {
      "@type": "Question",
      name: "What is your approach to performance monitoring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use advanced monitoring, logging, and alerting tools to ensure maximum uptime and optimal application performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you collaborate with DevOps and software development teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we work closely with DevOps and development teams to ensure seamless collaboration and efficient workflows.",
      },
    },
    {
      "@type": "Question",
      name: "Are your DevOps solutions suitable for enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We deliver enterprise-grade DevOps solutions with scalable, secure, and high-performance infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical duration of a DevOps implementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The implementation timeline depends on project complexity and typically ranges from 4 to 12 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide continuous support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, continuous monitoring, optimization, and support are included with all our DevOps services.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen DevOps Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start by booking a free consultation. We assess your requirements and create a customized DevOps strategy tailored to your business.",
      },
    },
  ],
};

const DevOpsSolutions = () => {
  const faqItems = [
    {
      question: "What is DevOps?",
      answer:
        "DevOps is a mix of software development and IT operations and the primary objective is to deliver applications faster and more reliably. Our best devOps solution service provider model increases the outcomes.",
    },
    {
      question:
        "What is the significance of DevOps in present-day software development?",
      answer:
        "The communication has been enhanced, and hence less mistakes occur, they get faster release cycles, and at the same time are stable and scalable, and this makes the applications more reliable.",
    },
    {
      question: "Is Capyngen a consulting firm on DevOps?",
      answer:
        "Indeed, we are a group of qualified professionals who are confident to convey our experience in the sphere of DevOps and explain to business leaders what tools and practices they should follow.",
    },
    {
      question: "Are you able to make automated deployments?",
      answer:
        "Naturally, we assist you in setting up and supporting the automated deployments through the application of the CI/CD pipeline that will be prompt, secure, and dependable.",
    },
    {
      question:
        "What are the industries that can take advantage of DevOps solutions?",
      answer:
        "The list of those industries continues, yet overall, the above-stated are some of the most prevalent industries, which include finance, healthcare, e-commerce, information technology, telecommunication, media, education, and travel industries, which enjoy the DevOps services and solutions.",
    },
    {
      question: "Do you sell managed DevOps services?",
      answer:
        "We at Capyngen are determined to give you our fully managed DevOps services, which include monitoring, optimisation and maintenance of your services.",
    },
    {
      question: "What do you support as cloud platforms?",
      answer:
        "We specifically offer cloud solutions to meet the scalable needs of Amazon Web Services, Microsoft Azure, and Google Cloud.",
    },
    {
      question: "Are you able to assist in multi-cloud optimisation?",
      answer:
        "Sure thing. We do what is necessary to ensure that not only is the performance maximized, but also the cost-effectiveness, in case the workload is distributed among a number of more than one cloud service providers.",
    },
    {
      question: "Are you a disaster recovery provider?",
      answer:
        "Yes. Our DevOps solutions are well scalable in terms of disaster recovery, and this is a big plus towards the continuity and success of business in the event of unfortunate events.",
    },
    {
      question: "What is your performance monitoring method?",
      answer:
        "Maximum uptime and performance are guaranteed by the use of state-of-the-art monitoring, logging, and alerting systems.",
    },
    {
      question: "Do you apply DevOps and software development teams?",
      answer:
        "Definitely. We perform an ideal synchronisation with DevOps and the development teams so as to have a smooth flow of work.",
    },
    {
      question: "Do your DevOps solutions apply to enterprises?",
      answer:
        "We offer the most appropriate and suitable DevOps solutions to enterprises, including the scalable and secure infrastructure, among others.",
    },
    {
      question: "What will be the duration of a DevOps implementation?",
      answer:
        "The timeframe takes a different duration depending on the complexity, which is normally done between 4 and 12 weeks through digital transformation using DevOps.",
    },
    {
      question: "Do you undertake continuous support?",
      answer:
        "Yes, you're never alone. Continuous monitoring, optimisation and support is added to all our DevOps services.",
    },
    {
      question: "What are the starting points of Capyngen DevOps Solutions?",
      answer:
        "First, book a free consultation with us and analyse your needs. Then, we will develop a definite and unique DevOps plan for your company.",
    },
  ];
  const solutionsData = [
    {
      title: "More Efficient Software Delivery and Early Market Access",
      desc: "You are able to expand your development timeframes and provide software within a short period of time, as well as ensure quality and safety. In this way, your company could be at an advantage over the competition with enterprise-grade DevOps services and solutions.",
    },
    {
      title: "Team Cooperation and Collaboration as its Best",
      desc: "The time saving, the removal of bottlenecks and efficient project upgrading are achieved due to good communication and collaboration between the development and operation teams.",
    },
    {
      title: "Strengthened Scalability & Reliability",
      desc: "Even better, the account is that the number of users is high in order to keep the application running constantly and reliably. The business can then proceed to expand without any stability or user experience being compromised.",
    },
    {
      title: "Automation of Deployment and Reduced of Human Errors",
      desc: "Automation of the deployment processes will allow reducing the number of errors and manual operations, which, in turn, will result in safer and more uniform software delivery.",
    },
    {
      title: "Real-time System Health Checking and Increasing Performance",
      desc: "By continually observing them can discover the areas of the system that are causing delay as well as optimising it such that the application is always running at its optimal state.",
    },
    {
      title: "Cloud Management Made More Cost-Effective",
      desc: "You can leverage the cloud resources and infrastructure in a manner that makes you the most beneficial party hence providing the investment in its entirety whilst reducing your operation cost and maximising your efficiency.",
    },
  ];
  const servicesData = [
    {
      image: assets.devOps4,
      title: "Scalable Cloud Infrastructure",
      desc: "Create a high-quality, flexible, and solid cloud environment that can make your business hiccup-free and expand with your demands.",
    },
    {
      image: assets.devOps5,
      title: "Automated Deployments in the Cloud",
      desc: "Ensuring there are completely automated deployment pipelines means having fewer and less people working on it and error-free release processes.",
    },
    {
      image: assets.devOps6,
      title: "Continuous Integration and Delivery (CI/CD)",
      desc: "Register the accelerated, safer, and more reliable program dispatch, which is propelled by automation of integration, testing and implementation.",
    },
    {
      image: assets.devOps7,
      title: "Cloud Security & Compliance",
      desc: "Protect applications and data by embracing security measures that meet the established standards in the industry and other regulatory provisions.",
    },
    {
      image: assets.devOps8,
      title: "Infrastructure as Code (IaC)",
      desc: "Manage, configure and execute infrastructure efficiently with code to have easily repeatable installations and error-free installations.",
    },
    {
      image: assets.devOps9,
      title: "Multi-Cloud Optimisation",
      desc: "Use the best of various cloud providers to your benefit as you maintain the cost within your reach and utilise the resources of a cloud provider to the full.",
    },
    {
      image: assets.devOps10,
      title: "Disaster Recovery Solutions",
      desc: "It should have powerful and resilient recovery programs to prevent both shutdowns and spontaneous destruction of important hardware and software programs.",
    },
    {
      image: assets.devOps11,
      title: "Monitoring and optimisation of performance",
      desc: "Continue to monitor the health of the application, locating the points where the flow of performance is being held back and ensuring that the software performs at optimum levels to provide great experiences to the users.",
    },
    {
      image: assets.devOps12,
      title: "Custom Cloud Solutions",
      desc: "Select the right cloud architectures and plans that are compatible with your business needs and objectives.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis and Strategy",
      description:
        "Examine business goals, processes, and project demands that result in the development of the roadmap of the DevOps services and solutions implementation and the long-term achievement.",
    },
    {
      step: "Step 02",
      title: "Planning and Roadmap Design",
      description:
        "Find the main components of a tailored digital strategy to the DevOps initiative, select the appropriate tools and build a scalable and feasible infrastructure plan to fit your business objectives.",
    },
    {
      step: "Step 03",
      title: "Environment Setup",
      description:
        "Installation, configuration, and maintainability of cloud platforms, servers, and supporting infrastructure with the primary goal of creating a stable and efficient development environment.",
    },
    {
      step: "Step 04",
      title: "Version Control & Code Management",
      description:
        "Create Git-based repositories to coordinate, efficiently and simply, across-development team code.",
    },
    {
      step: "Step 05",
      title: "Continuous Integration (CI)",
      description:
        "Automate code building, testing and integration to enable problems to be detected early to ensure quality delivery of the software.",
    },
    {
      step: "Step 06",
      title: "Continuous Deployment (CD)",
      description:
        "The automated release step helps you conduct operations with reduced manual efforts and quicker delivery to the market.",
    },
    {
      step: "Step 07",
      title: "Monitoring & Logging",
      description:
        "Real-time In a real-time fashion, observing the application that concerns its health, performance, and security is important to ensure that issues are resolved prior to disruption.",
    },
    {
      step: "Step 08",
      title: "Feedback & Optimization",
      description:
        "Reliability can be improved by using feedbacks of users and performance data to minimize system downtimes.",
    },
    {
      step: "Step 09",
      title: "Scaling & Continuous Improvement",
      description:
        "By means of process optimization, the company will be able to contribute to its growth, maintain the tasks at a given level, and establish operational consistency as the long-term remedy.",
    },
  ];
  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>DevOps Solutions Provider | Scalable DevOps Solutions</title>
        <meta
          name="description"
          content="Capyngen is a reliable DevOps solutions provider to automate workflows and accelerate deployments. Our DevOps solutions improve performance and scalability."
        />
        <meta
          name="keywords"
          content="devops solutions provider, DevOps solutions"
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
        <Banner5 />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <BusinessValueStats
          title="Drive Business Value With The Right Technology Partner"
          subtitle="Schedule Appointment"
          ctaText="Speak with an Expert →"
          stats={[
            { value: 50, suffix: "%", label: "Faster Deployment" },
            { value: 99.9, suffix: "%", label: "Uptime Achieved" },
            {
              value: 85,
              suffix: "%",
              label: "Improvement in Software Quality",
            },
            {
              value: 100,
              suffix: "+",
              label: "Successful DevOps Implementations",
            },
            { value: 60, suffix: "%", label: "Increase in Team Productivity" },
          ]}
          backgroundColor="bg-[#0a1b2e]"
          textColor="text-white"
          highlightColor="text-red-500"
        />
        <TopRatedCompany
          title="DevOps Solutions"
          description={[
            <>
              <p>
                <Link to={"/"}>Capyngen</Link> is the company that provides
                expert DevOps services and solutions to accelerate your software
                delivery and streamline operations.
              </p>
              <p>
                Capyngen is a global provider of DevOps services and solutions
                that are used to enhance teamwork, ease the development of
                software and ensure reliable, scalable, and secure
                infrastructure. We are not like other companies, but we are a
                DevOps services company and a trusted DevOps solutions provider,
                because we offer tailored solutions, full implementation, and
                24/7 support to companies across different industries.
              </p>
            </>,
          ]}
          image={assets.devOps1}
          isHidden={true}
          background={assets.patternBg1}
          imageHeight="aspect-[1/1]"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Increase Your Software Delivery Speed"
          description={[
            "Enhance your development and deployment pipelines with the professional DevOps solutions and services of Capyngen, which has been rated as one of the top DevOps services and solutions providers in the industry.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What is DevOps?"
          description={[
            <>
              <p>
                DevOps is the adoption of particular practices that entail the
                combination of software development (Dev) and IT operations
                (Ops) to minimise the software development life cycle without
                the need to compromise the quality of the software. Automation,
                teamwork, continuous integration, and continuous deployment are
                the key features of DevOps, and these are some of the conditions
                to realise fast and reliable software launch.
              </p>
              <p>
                As a DevOps consultant of <Link to={"/"}>Capyngen</Link>, who
                works with DevOps companies, helps companies to deploy the
                DevOps strategies efficiently and effectively, and, therefore,
                attain improved productivity and ensure positive change with the
                help of DevOps consulting services and DevOps development
                services.
              </p>
            </>,
          ]}
          image={assets.devOps2}
          isHidden={true}
          background={assets.patternBg1}
          imageHeight="aspect-[1/1]"
        />
        <FullSizeImageSection
          backgroundImage={assets.devOpsFullSize}
          title="Accelerate your delivery pipeline"
          description="Through our DevOps service, businesses will enjoy a smooth flow of business operations and will be in a position to grow their projects at a greater speed through the DevOps automation services and solutions of experts."
          buttonText="Optimize Now"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TopRatedCompany
          title="Importance of DevOps in Modern Software Development"
          description={[
            `The current software environment is under the holistic responsibility of DevOps:`,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "Faster Software Release",
                    text: " Have time to release better release cycles through pipelines.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Improved Co-operation",
                    text: " Eliminate dev/ops team divisions.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Scalability & Reliability",
                    text: " Enable the software to work with any type of load, etc.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Security Features",
                    text: " It has been enhanced over the years: Compliance and continuous monitoring minimize risk.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Give Back to the Company",
                    text: " With an effective management of the infrastructure, the operational costs are reduced.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Climbing or descending in your ecommerce venture without hustle upon making.",
                    color: "text-blue-500",
                  },
                ].map(({ title, text, color }, idx) => (
                  <li
                    key={idx}
                    className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                  >
                    <strong className={`${color} drop-shadow-md`}>
                      {title}
                    </strong>
                    {text}
                  </li>
                ))}
              </ul>
              <p>
                With the help of Capyngen DevOps deployment services, companies
                will be able to manifest operational excellence, which is
                quantifiable and provide a distinct differentiating edge among
                the competition as the best DevOps company in India.
              </p>
            </>,
          ]}
          image={assets.devOps3}
          isHidden={true}
          background={assets.patternBg1}
        />
        <IndustryServices
          heading="DevOps Services We Offer"
          subheading="Capyngen is an end-to-end DevOps services and solutions provider that is tailored to the needs of large enterprises, which makes us a trusted DevOps service provider:"
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Schedule a Consultation for Free"
          description={[
            "Talk to our DevOps experts and receive customised plans for your business operations in the assistance of our best DevOps solution service provider team.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <BenefitsSection
          heading="Benefits of Choosing Capyngen DevOps Solutions"
          desc=""
          benefits={solutionsData}
          image={assets.devops}
          footerNote={
            <>
              <span>
                DevOps consulting, along with the implementation services
                delivered by <Link to={"/"}>Capyngen</Link>, represents a potent
                tool to allow businesses to transform their IT operations in a
                manner that is free and fast, which explains why we are a
                powerful devops solutions provider.
              </span>
            </>
          }
        />
        <HowWeWork
          heading="DevOps Solution Process at Capyngen"
          desc=""
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Check Our DevOps Packages"
          description={[
            "Enhance high-performance, scale, and automate workflows through Capyngen enterprise level Devops services and solutions.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default DevOpsSolutions;
