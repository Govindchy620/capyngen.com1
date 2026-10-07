import React from "react";
import ExpandableGallery from "../components/ExpandableGallery";
import {
  FaStore,
  FaCode,
  FaVideo,
  FaWordpress,
  FaPlug,
  FaRobot,
  FaCreditCard,
  FaHeadset,
  FaNewspaper,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/industries/communication-media-it#webpage",
  url: "https://www.capyngen.com/industries/communication-media-it",
  name: "IT Solutions for Media & Communication | Digital Transformation – Capyngen",
  description:
    "Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate.",
  inLanguage: "en",
  keywords:
    "Media and communication software solutions, Broadcasting software development",
  isPartOf: {
    "@type": "WebSite",
    name: "Capyngen",
    url: "https://www.capyngen.com",
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
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType:
    "IT Solutions for Media & Communication | Digital Transformation – Capyngen",
  name: "IT Solutions for Media & Communication | Digital Transformation – Capyngen",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
  },
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  url: "https://www.capyngen.com/industries/communication-media-it",
  description:
    "Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate.",
  keywords:
    "Media and communication software solutions, Broadcasting software development",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "Media & Communication IT Solutions",
  serviceOutput:
    "Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kinds of communication solutions do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our communication solutions include unified communication platforms, VoIP systems, messaging apps, video conferencing solutions, and collaboration tools.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to create custom chat applications for the business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certainly, our work involves setting up a secure and scalable internal and external communication chat app for a business.",
      },
    },
    {
      "@type": "Question",
      name: "Are you providing any solutions for video conferencing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, in creating a top-notch video conferencing app, we also add the features of screen sharing, recording, and collaboration.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to have messaging and email integrated into one platform by you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, we create a unified communication platform that brings together chat, email, and notification.",
      },
    },
    {
      "@type": "Question",
      name: "Are you developing mobile communication apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We create iOS and Android apps for instant messaging, video call, and VoIP communication.",
      },
    },
    {
      "@type": "Question",
      name: "Can your solutions be combined with CRM systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, communication platforms that we have can be linked up with CRM to improve customer engagement and support.",
      },
    },
    {
      "@type": "Question",
      name: "Would you be able to provide VoIP-based calling solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide VoIP apps with safe and quality call features for businesses, startups and companies in general.",
      },
    },
    {
      "@type": "Question",
      name: "Would it be possible for you to add real-time collaboration features?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Real-time features, including file sharing, whiteboards, task management, and instant updates, can be added.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide AI-powered chatbots for communication apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we install AI chatbots in instant messaging for support including automatic response and user assistance.",
      },
    },
    {
      "@type": "Question",
      name: "Are your platforms capable of handling large-scale enterprise communication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, they are designed to be adaptable and scalable, so they can serve as many as thousands of concurrent users without any trouble.",
      },
    },
    {
      "@type": "Question",
      name: "Are you offering cloud-based communication solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have communication platforms that are hosted on the cloud and are flexible and safe.",
      },
    },
    {
      "@type": "Question",
      name: "Can your products be integrated with social media platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sure, we allow users to send messages and receive notifications directly from apps like WhatsApp, Facebook and Slack which are already there.",
      },
    },
    {
      "@type": "Question",
      name: "Are privacy and encrypted data transmission among the features of your communication apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we follow best industry practices and employ top encryption methods and privacy protocols.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible for you to design AI-powered analytics for communication platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the analytics activity will track the use, the participation, and the performance which will foster the decision-making process.",
      },
    },
    {
      "@type": "Question",
      name: "Are you willing to take care of communication solutions that require continuous upkeep and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer maintenance and continuous support services for all communication solutions we develop.",
      },
    },
  ],
};

const CommunicationMediaIT = () => {
  const faqItems = [
    {
      question: "What kinds of communication solutions do you provide?",
      answer:
        "Our communication solutions include unified communication platforms, VoIP systems, messaging apps, video conferencing solutions, and collaboration tools.",
    },
    {
      question:
        "Are you able to create custom chat applications for the business?",
      answer:
        "Certainly, our work involves setting up a secure and scalable internal and external communication chat app for a business.",
    },
    {
      question: "Are you providing any solutions for video conferencing?",
      answer:
        "Sure, in creating a top-notch video conferencing app, we also add the features of screen sharing, recording, and collaboration.",
    },
    {
      question:
        "Is it possible to have messaging and email integrated into one platform by you?",
      answer:
        "Definitely, we create a unified communication platform that brings together chat, email, and notification.",
    },
    {
      question: "Are you developing mobile communication apps?",
      answer:
        "Yes! We create iOS and Android apps for instant messaging, video call, and VoIP communication.",
    },
    {
      question: "Can your solutions be combined with CRM systems?",
      answer:
        "Definitely, communication platforms that we have can be linked up with CRM to improve customer engagement and support.",
    },
    {
      question: "Would you be able to provide VoIP-based calling solutions?",
      answer:
        "We provide VoIP apps with safe and quality call features for businesses, startups and companies in general.",
    },
    {
      question:
        "Would it be possible for you to add real-time collaboration features?",
      answer:
        "Yes. Real-time features, including file sharing, whiteboards, task management, and instant updates, can be added.",
    },
    {
      question: "Do you provide AI-powered chatbots for communication apps?",
      answer:
        "Yes, we install AI chatbots in instant messaging for support including automatic response and user assistance.",
    },
    {
      question:
        "Are your platforms capable of handling large-scale enterprise communication?",
      answer:
        "Yes, they are designed to be adaptable and scalable, so they can serve as many as thousands of concurrent users without any trouble.",
    },
    {
      question: "Are you offering cloud-based communication solutions?",
      answer:
        "We have communication platforms that are hosted on the cloud and are flexible and safe.",
    },
    {
      question: "Can your products be integrated with social media platforms?",
      answer:
        "Sure, we allow users to send messages and receive notifications directly from apps like WhatsApp, Facebook and Slack which are already there.",
    },
    {
      question:
        "Are privacy and encrypted data transmission among the features of your communication apps?",
      answer:
        "Yes, we follow best industry practices and employ top encryption methods and privacy protocols.",
    },
    {
      question:
        "Is it possible for you to design AI-powered analytics for communication platforms?",
      answer:
        "Yes, the analytics activity will track the use, the participation, and the performance which will foster the decision-making process.",
    },
    {
      question:
        "Are you willing to take care of communication solutions that require continuous upkeep and support?",
      answer:
        "Yes, we do offer continued support, upgrades, and troubleshooting until the solution is functioning smoothly.",
    },
  ];

  const servicesData = [
    {
      image: assets.communicationMedia2,
      title:
        "Lead Generation Through Digital Solutions For Media and Communication",
      bullets: [
        "Responsive platforms for all devices.",
        "Boost visibility with SEO design.",
        "Build engaged digital communities.",
        "Run targeted Google and social media ads.",
      ],
    },
    {
      image: assets.communicationMedia3,
      title: "Reduction in Operational Costs",
      bullets: [
        "Optimize broadcasting workflows.",
        "Lower integration costs with operators.",
        "Manage services via automation.",
        "Cut infrastructure costs with cloud streaming.",
      ],
    },
    {
      image: assets.communicationMedia4,
      title: "Sales & Engagement Expansion",
      bullets: [
        "Launch new streaming and subscription channels.",
        "Promote brand with interactive media.",
        "Offer personalization to boost retention.",
        "Increase ARPU with premium solutions.",
      ],
    },
    {
      image: assets.communicationMedia5,
      title: "Predicted Results",
      bullets: [
        "Improve customer engagement and loyalty.",
        "Increase average order and subscriptions.",
        "Grow exposure to high-margin digital products.",
        "Enhance cross-selling and upselling.",
      ],
    },
    {
      image: assets.communicationMedia6,
      title: "Advanced Communication Infrastructure",
      bullets: [
        "Use reliable digital solutions in broadcasting.",
        "Cloud-based platforms for smooth communication.",
        "AI-powered data routing speeds responses.",
        "Unified chat, video, and voice platforms.",
      ],
    },
    {
      image: assets.communicationMedia7,
      title: "Smart Media Analytics & Audience Insights",
      bullets: [
        "Real-time engagement and trend monitoring.",
        "AI audience segmentation for smart targeting.",
        "Data visualization with actionable insights.",
        "Analytics that simplify marketing ROI.",
      ],
    },
  ];

  const panels = [
    {
      image: assets.communicationMediaBanner1,
      title: "Digital Solutions for the Connected Media World",
      desc: "Define the demand, and develop the transformation of the communication and media sectors through the usage of up-to-date IT solutions.",
    },
    {
      image: assets.communicationMediaBanner2,
      title: "Empowering the Digital Communication Era",
      desc: "Develop communication platforms based on content, powered by data, and massaged with a customer-centric approach.",
    },
    {
      image: assets.communicationMediaBanner3,
      title: "Media Meets Technology",
      desc: "Offer seamlessly immersive experiences with the use of automation, analytics, and intelligent systems.",
    },
    {
      image: assets.communicationMediaBanner4,
      title: "Transform Communication & Media with Innovation",
      desc: "Make the digitally enabled consumer engagement become the fastest way to access content and accelerate sales.",
    },
    {
      image: assets.communicationMediaBanner5,
      title: "The Future of Media is Digital",
      desc: "Through the marriage of latest tech innovations, creativity and connectivity have been brought to your fingertip delight.",
    },
  ];

  const cardsSectionData1 = [
    {
      title: "Streaming Platform Development",
      description: "OTT, VOD, IPTV, and live streaming platforms.",
      icon: <FaVideo className="text-3xl text-blue-500" />,
    },
    {
      title: "CMS for Media Industry",
      description:
        "WordPress, Joomla, and Drupal solutions for media companies.",
      icon: <FaWordpress className="text-3xl text-blue-500" />,
    },
    {
      title: "Frameworks & Languages",
      description:
        "Laravel, Yii, CodeIgniter, CakePHP, and Core PHP development.",
      icon: <FaCode className="text-3xl text-blue-500" />,
    },
    {
      title: "Custom APIs",
      description: "Integration of third-party tools and telecom services.",
      icon: <FaPlug className="text-3xl text-blue-500" />,
    },
    {
      title: "Ecosystem Platforms",
      description:
        "Shopify, Magento, and OpenCart for digital media solutions.",
      icon: <FaStore className="text-3xl text-blue-500" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Enhance content personalization, automate moderation, and optimize streaming quality.",
      icon: <FaRobot className="text-3xl text-blue-500" />,
    },
  ];

  const features = [
    {
      icon: <FaVideo className="text-3xl text-blue-400" />,
      title: "Instant streaming & broadcasting apps",
      desc: "High-performance low-latency live video feeds, real-time encoding, and multi-device OTT distribution architectures.",
    },
    {
      icon: <FaCreditCard className="text-3xl text-emerald-400" />,
      title: "Subscription and billing-enabled media apps",
      desc: "Seamless recurring billing, microtransactions, tiered paywalls, and cross-border payment gateway integrations.",
    },
    {
      icon: <FaHeadset className="text-3xl text-amber-400" />,
      title: "Telecom customer service and workflow apps",
      desc: "Self-service portals, automated ticketing, VoIP routing, and CRM-connected agent dashboards.",
    },
    {
      icon: <FaNewspaper className="text-3xl text-rose-400" />,
      title: "Interactive Content management for Media Industry apps",
      desc: "Headless CMS pipelines, dynamic editorial workflows, multi-channel syndication, and digital asset asset repositories.",
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>
          IT Solutions for Media & Communication | Digital Transformation –
          Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen delivers smart IT solutions for the media and communication industry. From content management to digital transformation, we empower brands to innovate."
        />
        <meta
          name="keywords"
          content="IT Solutions for Media & Communication | Digital Transformation – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero preserved untouched */}
      <ExpandableGallery panels={panels} />

      {/* Overview Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
                DIGITAL TRANSFORMATION FOR MEDIA & IT
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Software Solutions For Media and Communication
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Capyngen delivers future{" "}
                  <Link
                    to={"/"}
                    className="text-blue-600 font-semibold underline underline-offset-4 hover:text-blue-800"
                  >
                    IT solutions
                  </Link>{" "}
                  For Media and communication that are designed based on the needs
                  of broadcasting networks, telecom operators, streaming
                  platforms, and Digital Transformation for Media Industry
                  publishers. Their platforms are not only scalable,
                  self-managed but also responsive, so these companies can
                  decide their content, broadcasting, and digital workflows
                  efficiently even without having technical skills of a high
                  level.
                </p>
                <p>
                  The extensive range of software solutions For Media and
                  communication that we offer encompasses software broadcasting,
                  digital media platform, telecom software solution, streaming
                  platform development, and Content management for Media Industry
                  that stabilize business growth, scalability, and innovation.
                </p>
                <p>
                  With Capyngen, however, you are not only buying software but
                  also the technology, guidance, and experience that are
                  essential for your success in the media and communication field.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#070e1d] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Schedule Consultation <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Our Tech Stack
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="border border-gray-200 bg-gray-50 p-2 rounded-none">
                <img
                  src={assets.communicationMedia1}
                  alt="Media & Communication IT"
                  className="w-full h-auto object-cover rounded-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#070e1d] py-20 px-4 md:px-8 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              CAPABILITIES & ARCHITECTURE
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              The Solutions We Offer
            </h2>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              End-to-end digital engineering and strategic IT capabilities built
              for modern broadcasting, streaming networks, and telecom ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-[#0b162c] border border-gray-800 rounded-none p-8 relative group transition-colors duration-200 hover:border-blue-500 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="border border-gray-800 mb-6 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-44 object-cover"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {service.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-gray-400 text-sm flex items-start gap-2.5"
                      >
                        <FaCheck className="text-blue-500 text-xs mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>CAPYNGEN MEDIA IT</span>
                  <span className="text-blue-400 font-semibold">0{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Architecture Section */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              PLATFORMS & ARCHITECTURE
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              On Which Platforms Do We Work To Make Media More Effective
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              To achieve success, both the performance and the scalability of
              your software media and communication product have to rest upon a
              solid base. Capyngen adopts a variety of platforms and frameworks
              for different cases to provide tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardsSectionData1.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-none group hover:border-blue-600 transition-colors duration-200 relative flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />
                <div>
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-[#070e1d] mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>ENTERPRISE SPEC</span>
                  <span>[ACTIVE]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile and Web Media Apps Section */}
      <section className="bg-[#0b162c] py-20 px-4 md:px-8 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
              CROSS-PLATFORM DEPLOYMENTS
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Mobile and Web Media Apps
            </h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              We create mobile and web applications that allow businesses from
              different sectors to facilitate broadcasting, content delivery,
              and high-retention user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="bg-[#070e1d] border border-slate-800 p-8 rounded-none relative group hover:border-blue-500 transition-colors duration-200 flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />
                <div>
                  <div className="w-14 h-14 bg-[#070e1d] border border-slate-800 flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {feat.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-gray-500 font-mono">
                  READY FOR SCALE
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA Banner */}
      <section className="bg-[#2563eb] py-20 px-4 md:px-8 text-white text-center border-b border-blue-500/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/20 border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-none">
            START YOUR TRANSFORMATION
          </div>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Go Digital Confidently with Capyngen Media Solutions
          </h2>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Rethink your processes with the digital overhaul of the Media
            Industry facilitated by Capyngen. Mobilize efficacy with software
            solutions tailor-made for high performance and creative innovation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-white text-[#2563eb] hover:bg-slate-100 font-bold px-8 py-3.5 rounded-none shadow-lg transition-colors uppercase tracking-wider text-sm"
            >
              Grab a Demo Right Now
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent text-white border-2 border-white font-bold px-8 py-3.5 rounded-none hover:bg-white hover:text-[#2563eb] transition-colors uppercase tracking-wider text-sm"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection2 items={faqItems} />
    </div>
  );
};

export default CommunicationMediaIT;
