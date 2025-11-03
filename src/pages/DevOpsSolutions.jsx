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

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/devops-solutions#webpage",
  url: "https://www.capyngen.com/devops-solutions",
  name: "DevOps Solutions | Capyngen",
  description:
    "Capyngen delivers powerful DevOps solutions to automate workflows, accelerate software delivery, and enhance collaboration between development and operations teams. Empower your business with continuous integration and deployment strategies.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/devOps1-sEg4yvLt.png",
    width: 1200,
    height: 630,
  },
  inLanguage: "en-US",
  mainEntity: {
    "@type": "Service",
    name: "DevOps Solutions",
    serviceType: "DevOps Consulting and Automation",
    provider: {
      "@type": "Organization",
      name: "Capyngen",
      url: "https://www.capyngen.com",
    },
    areaServed: {
      "@type": "Place",
      name: "India",
    },
    description:
      "Professional DevOps solutions from Capyngen help streamline development processes, integrate automation, and improve efficiency through CI/CD pipelines and cloud infrastructure management.",
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/devops-solutions#service",
  name: "DevOps Solutions and Services",
  serviceType:
    "Continuous Integration, Continuous Deployment (CI/CD), Cloud Automation, Infrastructure as Code, DevOps Consulting",
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
    "Capyngen delivers end-to-end DevOps solutions to accelerate software delivery, enhance collaboration, and automate deployment pipelines. Streamline your development and operations workflow with our expert DevOps services. :contentReference[oaicite:0]{index=0}",
  url: "https://www.capyngen.com/devops-solutions",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/devOps1-sEg4yvLt.png",
    caption: "DevOps Solutions | CI/CD | Cloud Automation | Capyngen",
  },
  offers: {
    "@type": "Offer",
    price: "Custom",
    priceCurrency: "INR",
    availability: "InStock",
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
        text: "DevOps is the combination of software development and IT operations with the main goal of more rapid and reliable delivery of applications.",
      },
    },
    {
      "@type": "Question",
      name: "Why is DevOps important for modern software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DevOps improves communication, reduces errors, and enables faster, more stable, and scalable release cycles—resulting in more reliable applications.",
      },
    },
    {
      "@type": "Question",
      name: "Does Capyngen provide DevOps consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen has a team of certified specialists offering expert DevOps consulting services to guide businesses in adopting the right tools, workflows, and practices.",
      },
    },
    {
      "@type": "Question",
      name: "Can you implement automated deployments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Of course. We help businesses establish and maintain automated deployments through CI/CD pipelines to ensure fast, secure, and reliable application delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What industries can benefit from DevOps solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries such as finance, healthcare, e-commerce, IT, telecommunications, media, education, and travel can greatly benefit from DevOps solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer managed DevOps services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen offers fully managed DevOps services that include monitoring, optimization, and ongoing maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Which cloud platforms do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide scalable DevOps solutions for Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with multi-cloud optimization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We ensure optimal performance and cost-efficiency by balancing workloads across multiple cloud providers through multi-cloud optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide disaster recovery solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our DevOps solutions include robust disaster recovery and backup strategies to ensure business continuity in case of unforeseen incidents.",
      },
    },
    {
      "@type": "Question",
      name: "How do you monitor performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use advanced monitoring, logging, and alerting tools to maintain high uptime and optimal performance across your DevOps infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "Do you integrate DevOps with software development teams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we seamlessly integrate DevOps practices within development teams to create a smooth, collaborative, and efficient workflow.",
      },
    },
    {
      "@type": "Question",
      name: "Are your DevOps solutions suitable for enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our enterprise-grade DevOps solutions deliver scalable, secure, and performance-optimized infrastructure for large organizations.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a DevOps implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The implementation timeline depends on complexity, but most DevOps transformations take between 4 to 12 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all Capyngen DevOps services include continuous monitoring, optimization, and 24/7 technical support.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Capyngen DevOps Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting started is easy! Schedule a free consultation with our experts, and we’ll design a tailored DevOps strategy based on your specific business requirements.",
      },
    },
  ],
};

const DevOpsSolutions = () => {
  const faqItems = [
    {
      question: "What is DevOps?",
      answer:
        "DevOps is the combination of software development and IT operations with the main goal of more rapid and reliable delivery of applications.",
    },
    {
      question: "Why is DevOps important for modern software development?",
      answer:
        "Communication is improved, so fewer errors happen, the release cycles become faster and at the same time are more stable and scalable, and that makes the applications more reliable.",
    },
    {
      question: "Does Capyngen provide DevOps consulting?",
      answer:
        "Yes, we are a team of certified specialists that confidently offer our expertise in the field of DevOps, guiding business leaders about the right tools and practices to adopt to.",
    },
    {
      question: "Can you implement automated deployments?",
      answer:
        "Of course, we help you establish and maintain automated deployments via the use of the CI/CD pipeline that will be quick, safe, and reliable.",
    },
    {
      question: "What industries can benefit from DevOps solutions?",
      answer:
        "The list of such industries goes on, but in general, the mentioned ones are among the most common such as finance, healthcare, e-commerce, information technology, telecommunication, media, education, and travel industries.",
    },
    {
      question: "Do you offer managed DevOps services?",
      answer:
        "We at Capyngen are committed to giving you our fully managed DevOps services that cover monitoring, optimization, and maintenance for you.",
    },
    {
      question: "Which cloud platforms do you support?",
      answer:
        "Particularly, cloud solutions for scalable requirements on Amazon Web Services, Microsoft Azure, and Google Cloud are all offered by us.",
    },
    {
      question: "Can you help with multi-cloud optimization?",
      answer:
        "Sure thing. Our work consists of making sure that both performance and cost-effectiveness are optimized when the workload is divided between more than one cloud service provider.",
    },
    {
      question: "Do you provide disaster recovery solutions?",
      answer:
        "Yes. Our DevOps solutions have strong disaster recovery plans, which is a big plus for business' continuity and success in case of unfortunate events.",
    },
    {
      question: "How do you monitor performance?",
      answer:
        "We ensure maximum uptime and performance through the employment of cutting-edge monitoring, logging, and alerting tools.",
    },
    {
      question: "Do you integrate DevOps with software development teams?",
      answer:
        "Definitely. We do a perfect synchronization between DevOps and the development teams in order to have a smooth workflow.",
    },
    {
      question: "Are your DevOps solutions suitable for enterprises?",
      answer:
        "We provide enterprises with the best DevOps solutions ranging from scalable and secure infrastructure to the other ones.",
    },
    {
      question: "How long does a DevOps implementation take?",
      answer:
        "The timeframe varies depending on the complexity, but digital transformation through DevOps is usually completed within 4 to 12 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, you're never alone. All our DevOps services come with the package of continuous monitoring, optimization, and support.",
    },
    {
      question: "How can I get started with Capyngen DevOps Solutions?",
      answer:
        "First, schedule a free consultation with us to analyze your requirements. After that, we'll come up with a specific and tailor-made DevOps strategy for your company.",
    },
  ];
  const solutionsData = [
    {
      title: "More Efficient Software Delivery & Early Market Access",
      desc: "You can extend your development timelines and deliver software in a short time while ensuring quality and security. Thus, your company would be able to remain a step ahead of the competition.",
    },
    {
      title: "Team Cooperation & Collaboration at its Best",
      desc: "Good communication and teamwork among development and operations teams lead to time saving, elimination of bottleneck and project efficient upgrading.",
    },
    {
      title: "Strengthened Scalability & Reliability",
      desc: "To keep the application running smoothly and reliably, it is even better if the number of users is high. The company can then continue to grow without causing stability or the user experience to be compromised.",
    },
    {
      title: "Automation of Deployment & Reduced Human Errors",
      desc: "The number of mistakes and the manual interventions can be minimized by automating the deployment processes, which in turn ensures software delivery that is safer and more consistent.",
    },
    {
      title: "Real-Time System Health Checking & Performance Increasing",
      desc: "Through constant monitoring they can identify the parts of the system that cause delay and even improve performance so that the application is always running at its best.",
    },
    {
      title: "Cloud Management Made More Cost-Effective",
      desc: "You can use the cloud resources and infrastructure in a way that benefits you the most thus giving back the investment in full while at the same time lowering your operational costs and increasing your efficiency.",
    },
  ];
  const servicesData = [
    {
      image: assets.devOps4,
      title: "Scalable Cloud Infrastructure",
      desc: "Establish a cloud environment that is solid, adaptable, and of top quality that is capable of scaling your business needs without any hiccup.",
    },
    {
      image: assets.devOps5,
      title: "Automated Cloud Deployments",
      desc: "Facilitate and speed up the release cycles by having fully automated deployment pipelines resulting in fewer manual efforts and error-free releases.",
    },
    {
      image: assets.devOps6,
      title: "Continuous Integration & Delivery (CI/CD)",
      desc: "Sign up for faster, safer, and more dependable software delivery that is driven by automation of integration, testing, and deployment.",
    },
    {
      image: assets.devOps7,
      title: "Cloud Security & Compliance",
      desc: "Secure your applications and data by adopting security practices that comply with the set standards in the industry and other regulatory requirements.",
    },
    {
      image: assets.devOps8,
      title: "Infrastructure as Code (IaC)",
      desc: "Efficiently manage, set up, and provision infrastructure using code for easily repeatable and error-free installations.",
    },
    {
      image: assets.devOps9,
      title: "Multi-Cloud Optimization",
      desc: "Use the most attractive features of different cloud providers to your advantage while you keep your expenses at bay and make full use of the resources of the cloud provider.",
    },
    {
      image: assets.devOps10,
      title: "Disaster Recovery Solutions",
      desc: "Protect essential hardware and software programs from shutdowns or sudden destructions with recovery programs that are strong and reliable.",
    },
    {
      image: assets.devOps11,
      title: "Performance Monitoring & Optimization",
      desc: "Keep on tracking the health of the application, finding the places where the flow of performance is slowed down, and making the software work at its best to give users great experiences.",
    },
    {
      image: assets.devOps12,
      title: "Custom Cloud Solutions",
      desc: "Design cloud plans and cloud architectures that are the right fit for your business requirements and growth goals.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Requirement Analysis & Strategy",
      description:
        "Analyze business objectives, workflows, and project requirements that lead to the creation of a roadmap for DevOps implementation as well as long-term success.",
    },
    {
      step: "Step 02",
      title: "Planning & Roadmap Design",
      description:
        "Identify key elements of a custom-made digital strategy for the DevOps project, pick the proper tools, and construct a flexible and viable infrastructure plan that matches your business goals.",
    },
    {
      step: "Step 03",
      title: "Environment Setup",
      description:
        "Set up and optimize cloud platforms, servers, and their supporting infrastructure through installation, configuration, and maintenance aiming at a stable and efficient development environment.",
    },
    {
      step: "Step 04",
      title: "Version Control & Code Management",
      description:
        "Start Git-based repositories to manage code which is efficient, collaborative, easy to change simultaneously among different development teams and is to be updated version by version.",
    },
    {
      step: "Step 05",
      title: "Continuous Integration (CI)",
      description:
        "Make code building, testing, and integration automated so issues can be found at their very beginning stage and guarantee software delivery of high quality and reliability.",
    },
    {
      step: "Step 06",
      title: "Continuous Deployment (CD)",
      description:
        "The automated release stage assists you in carrying out activities with lower manual efforts and thereby speed operation cycles are shortened and by-products reach market faster than before.",
    },
    {
      step: "Step 07",
      title: "Monitoring & Logging",
      description:
        "In a real-time manner, keep on closely monitoring the application that involves its health, performance, as well as, security so that the problem can be fixed before it becomes a source of trouble.",
    },
    {
      step: "Step 08",
      title: "Feedback & Optimization",
      description:
        "Use the user's opinion along with the data on performance to develop processes, enhance system reliability and cut down on the time when the system is not available.",
    },
    {
      step: "Step 09",
      title: "Scaling & Continuous Improvement",
      description:
        "Through process optimization, the firm can support its expansion, keep its tasks stable, and make operational reliability its great-term solution.",
    },
  ];
  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          DevOps Solutions | DevOps Services & Managed Consulting – Capyngen
        </title>
        <meta
          name="description"
          content="Accelerate your development with Capyngen’s DevOps solutions. We offer expert DevOps services, consulting, and managed support to streamline your workflow."
        />
        <meta
          name="keywords"
          content="DevOps Solutions | DevOps Services & Managed Consulting – Capyngen"
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
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Increase Your Software Delivery Speed"
          description={[
            "Make your development and deployment pipelines more efficient using the expert DevOps solutions and services of Capyngen.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What is DevOps?"
          description={[
            `DevOps refers to the implementation of specific practices that integrate software development (Dev) and IT operations (Ops) with the aim of reducing the software development lifecycle while maintaining the quality of the software. The main characteristics of DevOps are the use of automation, teamwork, continuous integration, and continuous deployment, these being some of the requirements for achieving a fast and reliable software release.`,
            `Capyngen’s DevOps consultant working with DevOps companies guides companies to implement DevOps strategies in an efficient and effective way, thereby gaining better productivity and fostering positive change.`,
          ]}
          image={assets.devOps2}
          isHidden={true}
          background={assets.patternBg1}
          imageHeight="aspect-[1/1]"
        />
        <FullSizeImageSection
          backgroundImage={assets.devOpsFullSize}
          title="Accelerate your delivery pipeline"
          description="By using our DevOps services, companies will experience seamless business operations and will be able to develop projects at a faster pace."
          buttonText="Optimize Now"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TopRatedCompany
          title="Importance of DevOps in Modern Software Development"
          description={[
            `DevOps is Comprehensively responsible for the present software environment:`,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "Quicker Software Delivery",
                    text: "Get time to market improved release cycles through your pipelines.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Better Collaboration",
                    text: "Get rid of ‘walls’ or ‘barriers’ between dev and ops teams.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Scalability & Reliability",
                    text: "Make it possible for software to perform well under any kind of load… etc.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Security Features Improved Over Time",
                    text: "Risk is reduced through compliance and continuous monitoring.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Give Back to the Company",
                    text: "Efficient management of the infrastructure leads to operational costs getting lower.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Going up or down in your ecommerce business without any hustle when you gain.",
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
                Thanks to Capyngen's DevOps deployment services, businesses can
                realize operational excellence that is measurable and gain a
                unique advantage over their competitors.
              </p>
            </>,
          ]}
          image={assets.devOps3}
          isHidden={true}
          background={assets.patternBg1}
        />
        <IndustryServices
          heading="DevOps Services We Offer"
          subheading="Capyngen offers end-to-end DevOps services that are specifically designed for large enterprises needs:"
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
            "Discuss with our DevOps specialists and get tailor-made strategies for your business operations.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <BenefitsSection
          heading="Benefits of Choosing Capyngen DevOps Solutions"
          desc=""
          benefits={solutionsData}
          image={assets.devops}
          footerNote="Capyngen’s DevOps consulting and implementation services are a powerful lever for businesses to change their IT operations with freedom and velocity."
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
            "Expand infrastructure, increase performance, and workflow automation with Capyngen’s enterprise-grade DevOps solutions.",
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
