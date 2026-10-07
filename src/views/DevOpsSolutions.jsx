import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Server,
  Terminal,
  Cloud,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Workflow,
  Activity,
  GitBranch,
  Settings2,
  Lock,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Clock,
  Check,
} from "lucide-react";
import { assets } from "../assets/assets";
import devopsHeroBg from "../assets/Dev op Solution Service/10.png";
import devopsInfraImg from "../assets/Dev op Solution Service/1.png";
import devopsTeamImg from "../assets/Dev op Solution Service/11.png";
import devopsWorkflowImg from "../assets/Dev op Solution Service/2.png";
import devopsPipelineImg from "../assets/Dev op Solution Service/3.png";
import TechStack from "../components/TechStack";
import FAQSection2 from "../components/FAQSection2";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

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
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

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
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      tag: "SPEED & AGILITY",
    },
    {
      title: "Team Cooperation and Collaboration as its Best",
      desc: "The time saving, the removal of bottlenecks and efficient project upgrading are achieved due to good communication and collaboration between the development and operation teams.",
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
      tag: "ALIGNMENT",
    },
    {
      title: "Strengthened Scalability & Reliability",
      desc: "Even better, the account is that the number of users is high in order to keep the application running constantly and reliably. The business can then proceed to expand without any stability or user experience being compromised.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      tag: "HIGH UPTIME",
    },
    {
      title: "Automation of Deployment and Reduced of Human Errors",
      desc: "Automation of the deployment processes will allow reducing the number of errors and manual operations, which, in turn, will result in safer and more uniform software delivery.",
      icon: <RefreshCw className="w-6 h-6 text-indigo-400" />,
      tag: "ZERO DEFECTS",
    },
    {
      title: "Real-time System Health Checking and Increasing Performance",
      desc: "By continually observing them can discover the areas of the system that are causing delay as well as optimising it such that the application is always running at its optimal state.",
      icon: <Activity className="w-6 h-6 text-amber-400" />,
      tag: "OBSERVABILITY",
    },
    {
      title: "Cloud Management Made More Cost-Effective",
      desc: "You can leverage the cloud resources and infrastructure in a manner that makes you the most beneficial party hence providing the investment in its entirety whilst reducing your operation cost and maximising your efficiency.",
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      tag: "FINOPS & ROI",
    },
  ];

  const servicesData = [
    {
      image: assets.devOps4,
      title: "Scalable Cloud Infrastructure",
      desc: "Create a high-quality, flexible, and solid cloud environment that can make your business hiccup-free and expand with your demands.",
      badge: "INFRASTRUCTURE",
    },
    {
      image: assets.devOps5,
      title: "Automated Deployments in the Cloud",
      desc: "Ensuring there are completely automated deployment pipelines means having fewer and less people working on it and error-free release processes.",
      badge: "AUTOMATION",
    },
    {
      image: assets.devOps6,
      title: "Continuous Integration and Delivery (CI/CD)",
      desc: "Register the accelerated, safer, and more reliable program dispatch, which is propelled by automation of integration, testing and implementation.",
      badge: "CI / CD PIPELINES",
    },
    {
      image: assets.devOps7,
      title: "Cloud Security & Compliance",
      desc: "Protect applications and data by embracing security measures that meet the established standards in the industry and other regulatory provisions.",
      badge: "DEVSECOPS",
    },
    {
      image: assets.devOps8,
      title: "Infrastructure as Code (IaC)",
      desc: "Manage, configure and execute infrastructure efficiently with code to have easily repeatable installations and error-free installations.",
      badge: "TERRAFORM & IAC",
    },
    {
      image: assets.devOps9,
      title: "Multi-Cloud Optimisation",
      desc: "Use the best of various cloud providers to your benefit as you maintain the cost within your reach and utilise the resources of a cloud provider to the full.",
      badge: "MULTI-CLOUD",
    },
    {
      image: assets.devOps10,
      title: "Disaster Recovery Solutions",
      desc: "It should have powerful and resilient recovery programs to prevent both shutdowns and spontaneous destruction of important hardware and software programs.",
      badge: "RESILIENCE",
    },
    {
      image: assets.devOps11,
      title: "Monitoring and optimisation of performance",
      desc: "Continue to monitor the health of the application, locating the points where the flow of performance is being held back and ensuring that the software performs at optimum levels to provide great experiences to the users.",
      badge: "METRICS & LOGS",
    },
    {
      image: assets.devOps12,
      title: "Custom Cloud Solutions",
      desc: (
        <>
          Select the right cloud architectures and plans that are compatible
          with your business needs and objectives often enhanced with{" "}
          <Link
            to="/custom-ai-solutions"
            className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
          >
            custom AI development services
          </Link>{" "}
          for smarter automation and observability.
        </>
      ),
      badge: "BESPOKE ARCHITECTURE",
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

  const stats = [
    {
      end: 50,
      suffix: "%",
      decimals: 0,
      label: "Faster Deployment",
      detail: "Automated pipelines cut release friction",
    },
    {
      end: 99.9,
      suffix: "%",
      decimals: 1,
      label: "Uptime Achieved",
      detail: "High-availability multi-cloud architecture",
    },
    {
      end: 85,
      suffix: "%",
      decimals: 0,
      label: "Improvement in Software Quality",
      detail: "Automated test suites & lint gates",
    },
    {
      end: 100,
      suffix: "+",
      decimals: 0,
      label: "Successful DevOps Implementations",
      detail: "Enterprise deployments across industries",
    },
    {
      end: 60,
      suffix: "%",
      decimals: 0,
      label: "Increase in Team Productivity",
      detail: "Engineers focus on product rather than ops",
    },
  ];

  const modernDevOpsPoints = [
    {
      title: "Faster Software Release",
      text: " Have time to release better release cycles through pipelines.",
      color: "text-cyan-400",
    },
    {
      title: "Improved Co-operation",
      text: " Eliminate dev/ops team divisions.",
      color: "text-blue-400",
    },
    {
      title: "Scalability & Reliability",
      text: " Enable the software to work with any type of load, etc.",
      color: "text-emerald-400",
    },
    {
      title: "Security Features",
      text: " It has been enhanced over the years: Compliance and continuous monitoring minimize risk.",
      color: "text-purple-400",
    },
    {
      title: "Give Back to the Company",
      text: " With an effective management of the infrastructure, the operational costs are reduced.",
      color: "text-amber-400",
    },
    {
      title: "",
      text: "Climbing or descending in your ecommerce venture without hustle upon making.",
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
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

      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Reference Design: Full Background Image + Tag + Heading)  */}
      {/* ========================================================================= */}
      <section
        className="relative min-h-screen text-white flex items-center justify-start pt-28 sm:pt-32 pb-20 border-b border-slate-800 overflow-hidden bg-slate-950 bg-cover bg-right md:bg-[center_right]"
        style={{
          backgroundImage: `url(${assets.devOps1})`,
        }}
        aria-label="DevOps Solutions Banner"
      >
        {/* Dark Vignette / Gradient Overlay so Text is Crisp and Background Image is Visible */}
        <div className="absolute inset-0 bg-[#070e1d]/60 bg-gradient-to-r from-[#070e1d]/95 via-[#070e1d]/80 to-transparent pointer-events-none" />

        {/* Subtle Tech Grid Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-4xl text-left">
            {/* Top Tag: WHAT WE DO / SERVICES (Same to same as reference design) */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-slate-400" />
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-slate-300 font-bold">
                WHAT WE DO <span className="text-blue-400 mx-1">/</span> SERVICES
              </span>
              <div className="h-[1px] flex-1 max-w-xs bg-slate-600/50" />
            </div>

            {/* Main Heading */}
            <h1
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Instant devops solutions provider{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                – Get India’s #1 Trusted DevOps solutions
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW SECTION (White Background, Right-Side Image, No Strategy Tag) */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <p
                className="font-bold text-slate-900 text-xl sm:text-2xl lg:text-[26px] leading-snug"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Capyngen is the company that provides expert DevOps services and
                solutions to accelerate your software delivery and streamline
                operations.
              </p>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Capyngen is a global provider of DevOps services and solutions that are
                used to enhance teamwork, ease the development of software and ensure
                reliable, scalable, and secure infrastructure. We are not like other
                companies, but we are a DevOps services company and a trusted DevOps
                solutions provider, because we offer tailored solutions, full
                implementation, and 24/7 support to companies across different
                industries—making us a strategic partner for any modern{" "}
                <a
                  href="https://www.capyngen.com/application-solutions"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold transition-colors"
                >
                  apps solutions company
                </a>
                .
              </p>

              <div className="pt-2">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
                >
                  Start using the Capyngen DevOps Solutions
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-[540px] border border-slate-200 shadow-xl overflow-hidden rounded-none group bg-slate-900">
                <img
                  src={devopsWorkflowImg}
                  alt="Capyngen DevOps Solutions and Services Workflow"
                  className="w-full h-auto object-cover rounded-none group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. STATS STRIP (DRIVE BUSINESS VALUE)                                      */}
      {/* ========================================================================= */}
      <section
        ref={statsRef}
        className="bg-[#0a1628] text-white py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 border-b border-slate-800"
      >
        <div className="max-w-[1536px] mx-auto">
          <div className="text-center mb-10 lg:mb-12 max-w-3xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Drive Business Value With The Right Technology Partner
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 text-center">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-4 flex flex-col items-center group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-400 mb-2 font-mono tracking-tight group-hover:text-blue-400 transition-colors">
                  {statsInView ? (
                    <CountUp
                      start={0}
                      end={stat.end}
                      duration={1.8}
                      decimals={stat.decimals}
                    />
                  ) : (
                    0
                  )}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-2 leading-snug">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 leading-relaxed max-w-[200px]">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GET STARTED STRIP: INCREASE DELIVERY SPEED                              */}
      {/* ========================================================================= */}
      <section className="bg-[#09152e] text-white py-10 lg:py-12 border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-4xl space-y-2">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Increase Your Software Delivery Speed
            </h3>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Enhance your development and deployment pipelines with the professional DevOps solutions and services of Capyngen, which has been rated as one of the top DevOps services and solutions providers in the industry.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SPLIT INTRO: WHAT IS DEVOPS?                                           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="border border-slate-300 bg-slate-950 shadow-xl rounded-none overflow-hidden">
              <img
                src={devopsInfraImg}
                alt="What is DevOps consulting and automation by Capyngen"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-5 py-3 font-mono text-xs uppercase tracking-widest font-bold shadow-xl border border-blue-400 rounded-none hidden sm:block">
              CI/CD Automation & Architecture
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              EXPERT CONSULTING
            </div>
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What is DevOps?
            </h2>
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
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
                As a DevOps consultant of Capyngen, who works with DevOps
                companies, helps companies to deploy the DevOps strategies
                efficiently and effectively, and, therefore, attain improved
                productivity and ensure positive change with the help of DevOps
                consulting services and DevOps development services.
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
              >
                Consult Our DevOps Architects
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FULL SIZE IMAGE SECTION: ACCELERATE YOUR PIPELINE                       */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.devOpsFullSize}
            alt="Accelerate your delivery pipeline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <span className="text-xs uppercase font-mono tracking-widest px-3 py-1 bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 rounded-none inline-block font-bold">
            CONTINUOUS OPERATIONS
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Accelerate your delivery pipeline
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Through our DevOps service, businesses will enjoy a smooth flow of business operations and will be in a position to grow their projects at a greater speed through the DevOps automation services and solutions of experts.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Optimize Now
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. IMPORTANCE OF DEVOPS IN MODERN SOFTWARE DEVELOPMENT                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              TRANSFORMATIVE VALUE
            </div>
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Importance of DevOps in Modern Software Development
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              The current software environment is under the holistic responsibility of DevOps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modernDevOpsPoints.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between rounded-none group relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />

                <div>
                  {item.title ? (
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                  ) : (
                    <h3
                      className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      E-Commerce & Scale
                    </h3>
                  )}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-200 flex items-center text-xs font-semibold text-blue-600">
                  <Check className="w-4 h-4 mr-1.5" /> High Performance Standard
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900 text-slate-200 p-8 border-l-4 border-blue-500 rounded-none max-w-4xl shadow-md">
            <p className="text-base sm:text-lg leading-relaxed text-slate-200">
              With the help of Capyngen DevOps deployment services, companies will be able to manifest operational excellence, which is quantifiable and provide a distinct differentiating edge among the competition as the best DevOps company in India.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SERVICES WE OFFER (9 SERVICES GRID)                                     */}
      {/* ========================================================================= */}
      <section id="services-section" className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3 font-bold">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              DevOps Services We Offer
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Capyngen is an end-to-end DevOps services and solutions provider that is tailored to the needs of large enterprises, which makes us a trusted DevOps service provider:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, idx) => (
              <div
                key={idx}
                className="group bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between rounded-none overflow-hidden relative shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none z-10" />

                <div className="relative h-52 overflow-hidden bg-slate-900 border-b border-slate-800">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-none"
                  />
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {svc.title}
                    </h3>
                    <div className="text-slate-300 text-sm leading-relaxed">
                      {svc.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CONSULTATION CALLOUT (GET STARTED 2)                                    */}
      {/* ========================================================================= */}
      <section className="bg-[#09152e] text-white py-10 lg:py-12 border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold">
              FREE TECHNICAL DISCOVERY
            </span>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Schedule a Consultation for Free
            </h3>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Talk to our DevOps experts and receive customised plans for your business operations in the assistance of our best DevOps solution service provider team.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. BENEFITS OF CHOOSING CAPYNGEN DEVOPS SOLUTIONS                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">
              BUSINESS ADVANTAGE
            </div>
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Benefits of Choosing Capyngen DevOps Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-8 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between rounded-none shadow-sm hover:shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-slate-900 text-cyan-400 flex items-center justify-center rounded-none group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {benefit.icon}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 tracking-wider">
                      {benefit.tag}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> PROVEN OUTCOME
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 bg-slate-100 border border-slate-300 text-center max-w-4xl mx-auto rounded-none">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              DevOps consulting, along with the implementation services delivered by{" "}
              <Link to="/" className="text-blue-600 font-bold hover:underline">
                Capyngen
              </Link>
              , represents a potent tool to allow businesses to transform their IT operations in a manner that is free and fast, which explains why we are a powerful devops solutions provider.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. DEVOPS SOLUTION PROCESS AT CAPYNGEN (9 STEPS)                          */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3 font-bold">
              METHODOLOGY & ROADMAP
            </span>
            <h2
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              DevOps Solution Process at Capyngen
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
              Our systematic approach guarantees zero-downtime, continuous security validation, and measurable acceleration from initial assessment to ongoing optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 p-8 flex flex-col justify-between hover:border-blue-500 transition-all duration-300 rounded-none relative group shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-500 transition-all duration-300 rounded-none" />

                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {st.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. TECH STACK SHOWCASE                                                    */}
      {/* ========================================================================= */}
      <div className="bg-white border-b border-slate-200">
        <TechStack
          heading="Cloud Platforms & DevOps Tooling We Master"
          subheading="Accelerating development with industry-proven tools and scalable infrastructure."
          theme="light"
        />
      </div>

      {/* ========================================================================= */}
      {/* 12. FAQ SECTION                                                            */}
      {/* ========================================================================= */}
      <FAQSection2
        title="Frequently Asked Questions"
        desc="Got questions regarding DevOps adoption, pipelines, or cloud architectures? Find your answers here."
        items={faqItems}
      />

      {/* ========================================================================= */}
      {/* 13. CHECK OUR PACKAGES (Bottom Final CTA - below FAQs)                     */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#060e1d] text-white border-t border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block font-bold">
              ENTERPRISE PACKAGES
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Check Our DevOps Packages
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl mx-auto">
              Enhance high-performance, scale, and automate workflows through Capyngen enterprise level Devops services and solutions.
            </p>
            <div className="pt-2">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-all duration-300 shadow-xl hover:shadow-blue-500/25 group text-base"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsSolutions;
