import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  BarChart3,
  Network,
  Laptop,
  Megaphone,
  Trophy,
} from "lucide-react";
import { assets } from "../assets/assets";
import Banner10 from "../components/Banner10";
import FAQSection2 from "../components/FAQSection2";

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
        "Our team has decades of cross-sector technology advisory experience. As a premier consulting services provider in India and abroad, we deliver clear strategic direction paired with actionable execution capabilities.",
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Customized Solutions",
      description:
        "We never force generic templates. Every business consulting solution is tailored to your industry verticals, operational challenges, and growth goals to deliver maximum measurable impact.",
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "End-to-End Support",
      description:
        "From initial technology audits and strategic roadmaps through active implementation, employee change management, and continuous optimization, we serve as your invested long-term partner.",
      icon: <Network className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Proven Track Record",
      description:
        "Our portfolio demonstrates verified business transformations with quantifiable ROI: reduced overhead, streamlined operational throughput, and sustainable revenue growth.",
      icon: <Laptop className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Future-Ready Technology",
      description:
        "We guide enterprises in embracing cutting-edge cloud computing, AI automation, and advanced analytics architectures that provide a lasting, sustainable competitive edge.",
      icon: <Megaphone className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Industry Recognition",
      description:
        "Capyngen is among the top consulting companies in India, recognized for consistent advisory excellence, client centricity, and innovative digital problem-solving.",
      icon: <Trophy className="w-8 h-8 text-blue-400" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "IT Strategy & Planning",
      description:
        "Development of strategic IT roadmaps aligning corporate technology initiatives with core enterprise revenue targets.",
      image: assets.consulting2,
    },
    {
      title: "Cloud Consulting",
      description:
        "Comprehensive cloud adoption roadmaps identifying optimal architectures (public, private, hybrid) tailored to your operational demands.",
      image: assets.consulting3,
    },
    {
      title: "Cybersecurity Consulting",
      description:
        "Holistic security risk assessments identifying vulnerabilities, threat perimeters, and regulatory compliance postures across infrastructure.",
      image: assets.consulting4,
    },
    {
      title: "Digital Transformation Consulting",
      description:
        "Process modernization incorporating automated workflow software, RPA, and artificial intelligence into legacy business models.",
      image: assets.consulting5,
    },
    {
      title: "IT Infrastructure Consulting",
      description:
        "Architectural reviews delivering high-throughput, secure, and elastic networks ready to scale seamlessly with corporate growth.",
      image: assets.consulting6,
    },
    {
      title: "Business Consulting Solutions",
      description:
        "Expansion blueprints providing concrete go-to-market strategies, operational bottleneck resolution, and new product initiatives.",
      image: assets.consulting7,
    },
  ];

  const steps = [
    {
      title: "Discovery & Assessment",
      description:
        "Discovery workshops conducting comprehensive technology audits, stakeholder interviews, process mapping, and competitive gap analyses.",
    },
    {
      title: "Strategy Development",
      description:
        "Architecting a bespoke transformation roadmap with prioritized recommendations, budget milestones, and forecasted ROI.",
    },
    {
      title: "Implementation Support",
      description:
        "Our consultants work directly alongside your teams, delivering project oversight, technical expertise, and seamless change management.",
    },
  ];

  const industriesData = [
    {
      title: "E-commerce & Retail",
      image: assets.webDesign11,
      link: "/industries/e-commerce",
    },
    {
      title: "Healthcare & Wellness",
      image: assets.webDesign12,
      link: "/industries/healthcare-fitness",
    },
    {
      title: "Education & E-learning",
      image: assets.webDesign13,
      link: "/industries/education",
    },
    {
      title: "Real Estate",
      image: assets.webDesign14,
      link: "/industries/real-estate",
    },
    {
      title: "IT & Software",
      image: assets.webDesign15,
      link: "/industries",
    },
    {
      title: "Corporate & Enterprise",
      image: assets.webDesign16,
      link: "/enterprise-solutions",
    },
    {
      title: "Travel & Hospitality",
      image: assets.webDesign17,
      link: "/industries/travel-logistics",
    },
    {
      title: "Startups & Entrepreneurs",
      image: assets.webDesign18,
      link: "/contact-us",
    },
  ];

  return (
    <div className="relative bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
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
          content="Top consulting services in India, consulting services"
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
      {/* 1. HERO SECTION (BANNER10 RETAINED AS REQUESTED)                          */}
      {/* ========================================================================= */}
      <div>
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
              <a
                href="https://www.capyngen.com/ppc"
                className="text-blue-400 font-semibold underline"
              >
                best ppc services in India
              </a>
              .
            </>
          }
          buttonText="Start Your Project"
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

      {/* ========================================================================= */}
      {/* 2. FULL SIZE BANNER 1: STRATEGIC GUIDANCE                                 */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.consultingFullSize}
            alt="Strategic guidance for business success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Strategic guidance for business success
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our expertise in consulting services is designed to diagnose operational bottlenecks, architect future-ready technology roadmaps, and accelerate your commercial expansion.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE CAPYNGEN CONSULTING? (6 Cards - White Background)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Choose Capyngen Consulting?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We combine seasoned strategic acumen, technical mastery, and measurable business deliverables to elevate organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-sm relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3
                    className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPREHENSIVE CONSULTING SERVICES (6 Dark Cards with Images)           */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Comprehensive Consulting Services
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Strategic, architectural, and operational guidance across all domains of digital enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionImageData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-6 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-48 mb-6 overflow-hidden border border-slate-800 rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. OUR CONSULTING PROCESS (3 Step Cards)                                  */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#0b162c] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              How We Deliver Results – Our Consulting Approach
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A disciplined, three-step execution framework ensuring actionable clarity and zero disruption to your active operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#070e1d] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-8 flex flex-col justify-between rounded-none shadow-xl relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="text-xs font-mono font-semibold text-blue-400 mb-3 tracking-wider">
                    PHASE 0{idx + 1}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FULL SIZE BANNER 2: YOUR VISION, OUR EXPERTISE                          */}
      {/* ========================================================================= */}
      <section className="relative py-16 lg:py-20 px-4 sm:px-6 md:px-12 flex items-center justify-center text-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={assets.consultingFullSize2}
            alt="Your vision, our expertise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#070e1d]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Your vision, our expertise
          </h2>
          <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Collaborate with Capyngen to realize digital transformation, optimize enterprise architectures, and achieve lasting strategic milestones.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl group text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INDUSTRIES WE SERVE (8 Cards with Visuals)                             */}
      {/* ========================================================================= */}
      <section className="py-12 lg:py-16 bg-[#070e1d] text-white border-b border-slate-800">
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mb-8 lg:mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Industries We Serve
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              We provide tailored strategic consulting designed specifically around the regulatory and technology demands of critical commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="bg-[#0b162c] border border-slate-800 hover:border-blue-500 transition-colors duration-150 p-5 flex flex-col justify-between rounded-none shadow-xl relative group block"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 rounded-none z-10" />
                <div>
                  <div className="w-full h-36 mb-4 bg-slate-900 p-2 flex items-center justify-center rounded-none overflow-hidden border border-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-150"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. REQUEST FOR COMPLIMENTARY CONSULTATION (CTA BANNER)                    */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#030712] text-white border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(37,99,235,0.18),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Request a Complimentary Consultation
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our strategic technology frameworks. Connect with Capyngen's principal advisors today to evaluate your systems and design a high-ROI growth roadmap.
          </p>
          <div className="pt-2">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-9 rounded-none transition-colors duration-150 shadow-xl text-base"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FREQUENTLY ASKED QUESTIONS                                             */}
      {/* ========================================================================= */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default Consulting;
