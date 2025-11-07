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
import Banner5 from "../components/Banner5";
import GetStarted from "../components/GetStarted";
import IndustryServices from "../components/IndustryServices";
import CardsSectionImage from "../components/CardsSectionImage";
import CardsSectionSlider from "../components/CardsSectionSlider";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/cybersecurity#webpage",
  url: "https://www.capyngen.com/cybersecurity",
  name: "Cybersecurity Solutions | IT & Network Security Services – Capyngen",
  description:
    "Protect your business with Capyngen’s cybersecurity services. We provide advanced IT and network security solutions to safeguard your data and digital assets.",
  inLanguage: "en",
  keywords: "Cybersecurity Solutions, IT & Network Security Services",
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
  serviceType: [
    "Cybersecurity services",
    "Cybersecurity solutions",
    "IT security services",
    "Network security services",
    "Data protection services",
    "Best Cybersecurity services",
    "Managed cybersecurity services",
  ],
  name: "Cybersecurity Solutions | IT & Network Security Services – Capyngen",
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
  url: "https://www.capyngen.com/cybersecurity",
  description:
    "Protect your business with Capyngen’s cybersecurity services. We provide advanced IT and network security solutions to safeguard your data and digital assets.",
  keywords: "Cybersecurity Solutions, IT & Network Security Services",
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  category: "Cybersecurity & IT Security Services",
  serviceOutput:
    "Protect your business with Capyngen’s cybersecurity services. We provide advanced IT and network security solutions to safeguard your data and digital assets.",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cybersecurity entails all measures against hackers to protect the networks, systems, and data of an organization.",
      },
    },
    {
      "@type": "Question",
      name: "Why is cybersecurity important to businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main benefits of cybersecurity are the following: no leak of data, the security of sensitive informational assets, the observance of the law, and maintenance of customer trust.",
      },
    },
    {
      "@type": "Question",
      name: "What are managed security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Such services consist of continuous monitoring, threat detection, incident response, vulnerability management, and disaster recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Do security services have a positive impact on startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. Capyngen delivers on-demand security to startups at a fraction of the usual price to protect their valuable information and keep their business going.",
      },
    },
    {
      "@type": "Question",
      name: "What is network security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Network security is the protection of internal networks against unauthorized entry and cyber-attacks to computers, servers, and other connected hardware devices.",
      },
    },
    {
      "@type": "Question",
      name: "What is Capyngen's data protection approach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We protect confidential data through encryption, safe storage, backup, and by using access controls.",
      },
    },
    {
      "@type": "Question",
      name: "Can your cybersecurity services help if I have an enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, of course. Among the offers Capyngen has for corporations, there is staff on call for professional advice and guidance with wide-ranging security solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What is penetration testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hackers are simulated in penetration testing to show vulnerabilities present in a system that could be exploited by attackers.",
      },
    },
    {
      "@type": "Question",
      name: "Are you providing cloud security solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer secure environments for cloud applications and storage using security measures that comply with industry standards.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any means to stop ransomware attacks through cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Measures to fight ransomware include threat monitoring, backups, and endpoint security.",
      },
    },
    {
      "@type": "Question",
      name: "How do you monitor cybersecurity threats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use SIEM tools paired with 24/7 monitoring, intrusion detection, and analytics to identify and respond to threats.",
      },
    },
    {
      "@type": "Question",
      name: "What are the industries that could gain from cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finance, healthcare, retail, education, IT, travel — basically any data-driven company dealing with sensitive customer information.",
      },
    },
    {
      "@type": "Question",
      name: "How much do cybersecurity services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies depending on business size, security requirements, and the services needed. Capyngen offers scalable and affordable cybersecurity solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What services are IT security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT security services include endpoint protection, network security, patch management, anti-virus, and employee training.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with Capyngen cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schedule a free consultation to evaluate your security requirements and receive a custom-made cybersecurity plan for your business.",
      },
    },
  ],
};

const Cybersecurity = () => {
  const faqItems = [
    {
      question: "What is cybersecurity?",
      answer:
        "Cybersecurity entails all measures against hackers to protect the networks, systems, and data of an organization.",
    },
    {
      question: "Why is cybersecurity important to businesses?",
      answer:
        "The main benefits of cybersecurity are the following: no leak of data, the security of sensitive informational assets, the observance of the law, and maintenance of customer trust.",
    },
    {
      question: "What are managed security services?",
      answer:
        "Such services consist of continuous monitoring, threat detection, incident response, vulnerability management, and disaster recovery.",
    },
    {
      question: "Do security services have a positive impact on startups?",
      answer:
        "Definitely. Capyngen delivers on-demand security to startups at a fraction of the usual price to protect their valuable information and keep their business going.",
    },
    {
      question: "What is network security?",
      answer:
        "Network structure is the protection of internal networks against unauthorized entry and cyber-attacks to computers, servers, and other connected hardware devices.",
    },
    {
      question: "What is Capyngen's data protection approach?",
      answer:
        "We protect confidential data through encryption, other means of safe storage, backup, and by using access controls.",
    },
    {
      question: "Can your cybersecurity services help if I have an enterprise?",
      answer:
        "Yes, of course. Among the offers Capyngen has for corporations, there is working staff on call for professional advice and guidance well-structured and wide-ranged security.",
    },
    {
      question: "What is penetration testing?",
      answer:
        "Hackers are simulated in penetration testing, in order to show the vulnerabilities present in a system, and which greatly, in a very short time, they can be found and used by the attackers.",
    },
    {
      question: "Are you providing cloud security solutions?",
      answer:
        "The answer is yes. We offer secure environments for the cloud, as well as for applications and storage using security measures that comply with industry standards.",
    },
    {
      question:
        "Are there any means to stop ransomware attacks through cybersecurity?",
      answer:
        "Yes. Some of the measures that are used to fight ransomware against include threat monitoring, backups, and endpoint security.",
    },
    {
      question: "How do you monitor cybersecurity threats?",
      answer:
        "We use SIEM tools paired with 24/7 monitoring, intrusion detection, and analytics to spot and react to threats.",
    },
    {
      question:
        "What are the industries that could gain from cyber security services?",
      answer:
        "Finance, healthcare, retail, education, IT, travel — basically any data-driven company dealing with sensitive customer information.",
    },
    {
      question: "How much do cybersecurity services cost?",
      answer:
        "There is a variety of prices depending on the size of the business, security requirements, and the services needed. Capyngen offers scalable and affordable cybersecurity solutions.",
    },
    {
      question: "What services are IT security services?",
      answer:
        "Endpoint protection, network security, patch management, anti-virus, and employee training.",
    },
    {
      question: "How do I get started with Capyngen cybersecurity services?",
      answer:
        "Schedule a free consultation to evaluate your security requirements and receive a custom-made cybersecurity plan for your business.",
    },
  ];
  const servicesData = [
    {
      image: assets.cyberSecurity3,
      title: "Managed Cybersecurity Services",
      desc: "A service that offers continuous monitoring, threat detection, and incident response.",
    },
    {
      image: assets.cyberSecurity4,
      title: "IT Security Services",
      desc: "The security of the system, server, and endpoint against vulnerabilities.",
    },
    {
      image: assets.cyberSecurity5,
      title: "Network Security Services",
      desc: "The use of firewalls, VPNs, and intrusion prevention systems for safe networks.",
    },
    {
      image: assets.cyberSecurity6,
      title: "Data Protection Services",
      desc: "The use of encryption, backup, and secure storage solutions for sensitive data.",
    },
    {
      image: assets.cyberSecurity7,
      title: "Cloud Security Solutions",
      desc: "The security of cloud applications, storage, and virtual environments.",
    },
    {
      image: assets.cyberSecurity8,
      title: "Cybersecurity Consulting",
      desc: "The strategic guidance to put in place the robust security frameworks.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "Firewalls & Intrusion Detection Systems (IDS/IPS)",
      description: "",
      image: assets.cyberSecurity9,
      cardBg: "bg-blue-100",
    },
    {
      title: "Anti-Malware & Anti-Virus Software",
      description: "",
      image: assets.cyberSecurity10,
      cardBg: "bg-pink-100",
    },
    {
      title: "Security Information & Event Management (SIEM)",
      description: "",
      image: assets.cyberSecurity11,
      cardBg: "bg-green-100",
    },
    {
      title: "Data Encryption & Backup Solutions",
      description: "",
      image: assets.cyberSecurity12,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cloud Security Platforms (AWS, Azure, GCP)",
      description: "",
      image: assets.cyberSecurity13,
      cardBg: "bg-purple-100",
    },
    {
      title: "VPNs & Secure Remote Access",
      description: "",
      image: assets.cyberSecurity14,
      cardBg: "bg-red-100",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      title: "Startups & Small Businesses",
      desc: "",
      image: assets.webDev17,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/e-commerce"}>E-commerce & Retail</Link>
        </span>
      ),
      desc: "",
      image: assets.webDev18,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/healthcare-fitness"}>
            Healthcare & Education
          </Link>
        </span>
      ),
      desc: "",
      image: assets.webDev19,
      textColor: "text-white",
    },
    {
      title: (
        <span>
          <Link to={"/industries/real-estate"}>Real Estate</Link> &{" "}
          <Link to={"/industries/travel-logistics"}>Travel</Link>
        </span>
      ),
      desc: "",
      image: assets.webDev20,
      textColor: "text-white",
    },
    {
      title: "Corporate Enterprises",
      desc: "",
      image: assets.webDev21,
      textColor: "text-white",
    },
    {
      title: "Trading Sites",
      desc: "",
      image: assets.webDev22,
      textColor: "text-white",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Cybersecurity Solutions | IT & Network Security Services – Capyngen
        </title>
        <meta
          name="description"
          content="Protect your business with Capyngen’s cybersecurity services. We provide advanced IT and network security solutions to safeguard your data and digital assets."
        />
        <meta
          name="keywords"
          content="Cybersecurity Solutions | IT & Network Security Services – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="">
        <Banner5
          title={
            <>
              <span className="text-2xl md:text-4xl">
                Protect your business from cyber threats with{" "}
              </span>
              <span className="text-blue-600">
                Capyngen’s comprehensive cybersecurity services
              </span>
            </>
          }
          description="In order to protect your information, systems, and business processes, we offer security for information technology, security for networks, and the administration of security for the organization through cybersecurity programs. Capyngen is a reliable worldwide supplier of all kinds of business cybersecurity software that offers solutions to problems faced by small, medium, and large enterprises."
          primaryBtnText="Protect Your Business"
          primaryBtnLink="/contact-us"
          image={assets.cyberSecurity1}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Keep Your Business Safe from Cyber Threats"
          description={[
            "Protect your systems, networks, and data with our managed cybersecurity services at Capyngen and enjoy round-the-clock security.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What is Cybersecurity?"
          description={[
            `Cybersecurity revolves around the protection of the systems, networks, and data from any form of digital attacks, stealing, or destruction. The corporate world, today, is being targeted constantly by different types of hackers, malware infections, and data leaks. Capyngen provides the well-qualified cybersecurity consulting services catered for corporates, startups, and small and medium enterprises which help to eradicate the cyber risks, protect the less expensive data and maintain the uninterruptible business flow.`,
            <>
              <p className="mb-3 font-semibold">
                Importance of Cybersecurity in Modern Businesses
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "Protect Sensitive Data",
                    text: "Protect and secure data of customers, employees, and finance.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Prevent Financial Loss",
                    text: "Extent the breach-related costs are reduced significantly alongside the costs of downtime and data theft.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Ensure Regulatory Compliance",
                    text: "Attain compliance with standards from all over the world such as GDPR, HIPAA, and ISO.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Maintain Customer Trust",
                    text: "Demonstrate to clients that their data is in safe hands when it comes to your company.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Enhance Operational Security",
                    text: "Obtain security for your networks, endpoints as well as for the cloud infrastructure.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Support Business Continuity",
                    text: "Be the last one to be impacted by cyber incidents.",
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
                    – {text}
                  </li>
                ))}
              </ul>
              <p>
                By using Capyngen’s leading cybersecurity solutions, your
                business will remain unstoppable and non-vulnerable.
              </p>
            </>,
          ]}
          image={assets.cyberSecurity2}
          isHidden={true}
          background={assets.patternBg1}
        />
        <FullSizeImageSection
          backgroundImage={assets.cybersecurityFullSize}
          title="Protect what matters most"
          description="Through us, your data, systems, and good name will remain safe from any kind of digital threats."
          buttonText="Secure My Business"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <IndustryServices
          heading="Cybersecurity Services We Offer"
          subheading="We provide a range of cybersecurity solutions that serve to keep businesses safe from malicious threats and ensure their safe progression in the market."
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={servicesData}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Get a consultation on Cybersecurity"
          description={[
            "Reach out to our specialists and find out the most effective cybersecurity solutions for your company which will help you avoid breaches and loss of data.",
          ]}
          buttonText="Get a Consultation"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSectionImage
          heading="Technologies & Tools Used in Cybersecurity"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <TopRatedCompany
          title="Benefits of Choosing Capyngen Cybersecurity Services"
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "24/7 Protection & Monitoring",
                    text: "Enjoy security all day and night.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Reduced Risk of Data Breaches",
                    text: "Keep your business and customer data safe.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Compliance with Global Standards",
                    text: "Achieve GDPR, ISO, HIPAA, and other regulatory requirements.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Cost-Effective Security Solutions",
                    text: "Cybersecurity solutions at a price that startups and SMBs can afford.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Expert Guidance & Support",
                    text: "Cybersecurity consulting service by a professional for enterprises.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Relax with Confidence",
                    text: "Concentrating on business development is yours while we safeguard it.",
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
                    – {text}
                  </li>
                ))}
              </ul>
            </>,
          ]}
          image={assets.cyberSecurity15}
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <FullSizeImageSection
          backgroundImage={assets.cybersecurityFullSize2}
          title="Build trust through security"
          description="Our team of cybersecurity professionals is always ready to protect your business and ensure its safety around the clock."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
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
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Get a Free Cybersecurity Consultation"
          description={[
            "Talk to our experts and discover the best cybersecurity services for businesses to prevent breaches and data loss.",
          ]}
          buttonText="Get a Consultation"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default Cybersecurity;
