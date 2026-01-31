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
  name: "Managed Cybersecurity Services Provider in India | Capyngen",
  description:
    "Capyngen is a trusted managed cybersecurity services provider offering advanced cyber security solutions and Indian cybersecurity solutions to protect businesses and financial services.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
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
  "@id": "https://www.capyngen.com/cybersecurity#service",
  name: "Cybersecurity Services",
  serviceType:
    "Managed cybersecurity, IT security, Network security, Data protection, Cloud security, Cybersecurity consulting",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Capyngen is a trusted managed cybersecurity services provider offering advanced cyber security solutions and Indian cybersecurity solutions to protect businesses and financial services.",
  url: "https://www.capyngen.com/cybersecurity",
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
      name: "What is cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cybersecurity refers to all the strategies against hackers to secure the networks, systems, and data of an organisation with full-scale cybersecurity managed services.",
      },
    },
    {
      "@type": "Question",
      name: "What is the significance of cybersecurity to businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key advantages of cybersecurity services are the following: no data leakage, safety of informational assets of sensitive information, law observance, and preservation of customer trust.",
      },
    },
    {
      "@type": "Question",
      name: "What are managed security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some of the managed cybersecurity services include ongoing monitoring, threat detection, incident response, vulnerability management, and recovery from a disaster due to a cybersecurity service provider.",
      },
    },
    {
      "@type": "Question",
      name: "Do security services positively influence startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely. Capyngen provides on-demand cyber security services to startups at a fraction of the regular cost to secure valuable information and continue doing business.",
      },
    },
    {
      "@type": "Question",
      name: "What is network security?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Network protection against unauthorised access and cyber-attacks to computers, servers and other connected devices of the hardware via cybersecurity solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Which data protection strategy does Capyngen have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As part of our cybersecurity consulting services, we ensure confidential data is encrypted, securely stored in another way, backed up, and access controls are in place.",
      },
    },
    {
      "@type": "Question",
      name: "Are your cybersecurity services applicable in case I have an enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, of course. Working staff on demand and high-quality and broad-based cybersecurity services are among the propositions Capyngen has to offer corporations.",
      },
    },
    {
      "@type": "Question",
      name: "What is penetration testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Penetration testing simulates hackers to demonstrate the vulnerabilities existing in a system, and in a very short period, they can discover and exploit them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer cloud security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The cloud, applications and storage environments that we provide are secure with industry standards in security measures that are provided through experience as a cyber security solutions provider.",
      },
    },
    {
      "@type": "Question",
      name: "How can ransomware attacks be prevented using cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The cybersecurity company offers endpoint security, threat monitoring, and backups, which are some of the measures used to combat ransomware.",
      },
    },
    {
      "@type": "Question",
      name: "What do you do to track cybersecurity threats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SIEM tools are combined with 24/7 monitoring, intrusion detection and analytics to identify and respond to threats using cybersecurity managed services.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries are vulnerable to the cyber security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finance, healthcare, retail, education, IT, travel, and in general, any data-driven company that involves sensitive customer information gains the benefits of cybersecurity services.",
      },
    },
    {
      "@type": "Question",
      name: "What are the fees for cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prices vary across the board based on the size of business, security needs and services. Capyngen provides affordable and scalable cybersecurity solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What are IT security services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen provides basic cyber security services, which include endpoint protection, network security, patch management, anti-virus and employee training.",
      },
    },
    {
      "@type": "Question",
      name: "What is the entry mode of Capyngen cybersecurity services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Book a free consultation on how to assess your security needs and have this reliable managed cybersecurity services provider create a business-specific cybersecurity plan.",
      },
    },
  ],
};
const Cybersecurity = () => {
  const faqItems = [
    {
      question: "What is cybersecurity?",
      answer:
        "Cybersecurity refers to all the strategies against hackers to secure the networks, systems, and data of an organisation with full-scale cybersecurity managed services.",
    },
    {
      question: "What is the significance of cybersecurity to businesses?",
      answer:
        "The key advantages of cybersecurity services are the following: no data leakage, safety of informational assets of sensitive information, law observance, and preservation of customer trust.",
    },
    {
      question: "What are managed security services?",
      answer:
        "Some of the managed cybersecurity services include ongoing monitoring, threat detection, incident response, vulnerability management, and recovery from a disaster due to a cybersecurity service provider.",
    },
    {
      question: "Do security services positively influence startups?",
      answer:
        "Definitely. Capyngen provides on-demand cyber security services to startups at a fraction of the regular cost to secure valuable information and continue doing business.",
    },
    {
      question: "What is network security?",
      answer:
        "Network protection against unauthorised access and cyber-attacks to computers, servers and other connected devices of the hardware via cybersecurity solutions.",
    },
    {
      question: "Which data protection strategy does Capyngen have?",
      answer:
        "As part of our cybersecurity consulting services, we ensure confidential data is encrypted, securely stored in another way, backed up, and access controls are in place.",
    },
    {
      question:
        "Are your cybersecurity services applicable in case I have an enterprise?",
      answer:
        "Yes, of course. Working staff on demand and high-quality and broad-based cybersecurity services are among the propositions Capyngen has to offer corporations.",
    },
    {
      question: "What is penetration testing?",
      answer:
        "Penetration testing simulates hackers to demonstrate the vulnerabilities existing in a system, and in a very short period, they can discover and exploit them.",
    },
    {
      question: "Do you offer cloud security services?",
      answer:
        "Yes. The cloud, applications and storage environments that we provide are secure with industry standards in security measures that are provided through experience as a cyber security solutions provider.",
    },
    {
      question: "How can ransomware attacks be prevented using cybersecurity?",
      answer:
        "Yes. The cybersecurity company offers endpoint security, threat monitoring, and backups, which are some of the measures used to combat ransomware.",
    },
    {
      question: "What do you do to track cybersecurity threats?",
      answer:
        "SIEM tools are combined with 24/7 monitoring, intrusion detection and analytics to identify and respond to threats using cybersecurity managed services.",
    },
    {
      question:
        "Which industries are vulnerable to the cyber security services?",
      answer:
        "Finance, healthcare, retail, education, IT, travel, and in general, any data-driven company that involves sensitive customer information gains the benefits of cybersecurity services.",
    },
    {
      question: "What are the fees for cybersecurity services?",
      answer:
        "Prices vary across the board based on the size of business, security needs and services. Capyngen provides affordable and scalable cybersecurity solutions.",
    },
    {
      question: "What are IT security services?",
      answer:
        "Capyngen provides basic cyber security services, which include endpoint protection, network security, patch management, anti-virus and employee training.",
    },
    {
      question: "What is the entry mode of Capyngen cybersecurity services?",
      answer:
        "Book a free consultation on how to assess your security needs and have this reliable managed cybersecurity services provider create a business-specific cybersecurity plan.",
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
      title: "Fire Walls and Intrusion Detection Systems (IDS/IPS)",
      description: "",
      image: assets.cyberSecurity9,
      cardBg: "bg-blue-100",
    },
    {
      title: "Anti-Virus Software & Anti-Malware Software",
      description: "",
      image: assets.cyberSecurity10,
      cardBg: "bg-pink-100",
    },
    {
      title: "Security Information and Event Management (SIEM)",
      description: "",
      image: assets.cyberSecurity11,
      cardBg: "bg-green-100",
    },
    {
      title: "Data Backup Solutions and Data Encryption",
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
          Managed Cybersecurity Services Provider in India | Capyngen
        </title>
        <meta
          name="description"
          content="Capyngen is a trusted managed cybersecurity services provider offering advanced cyber security solutions and Indian cybersecurity solutions to protect businesses and financial services."
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
          description={
            <>
              We provide information technology security, network security, and
              security administration of the organisation through cybersecurity
              programs to secure your information, systems, and business
              processes. Capyngen is an effective global provider of business
              cybersecurity solutions, offering tailored solutions to address
              the challenges faced by small, medium, and large businesses as a
              top cybersecurity service provider. Our{" "}
              <a
                href="https://www.capyngen.com/ppc"
                className="text-blue-500 font-bold"
              >
                Pay-Per-Click Advertising (PPC)
              </a>{" "}
              campaigns also help promote these essential services effectively.
            </>
          }
          primaryBtnText="Protect Your Business"
          primaryBtnLink="/contact-us"
          image={assets.cyberSecurity1}
          alt="Managed Cybersecurity Services Provider in India | Capyngen"
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
            <>
              With our managed cybersecurity services, you can secure your
              systems, networks, and data, and enjoy round-the-clock protection
              for your data and networks through a top-notch cyber security
              services company.{" "}
              <a
                href="https://www.capyngen.com/seo"
                className="text-blue-500 font-bold"
              >
                Search Engine Optimisation
              </a>{" "}
              ensures businesses discover our protection when searching for
              reliable defence solutions.
            </>,
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What is Cybersecurity?"
          description={[
            ` Cybersecurity is concerned with the safety of systems, networks, and data against digital attacks, theft, and destruction. The business world has been the target of various forms of hackers, malware infections, and information leakage on a constant basis. Capyngen offers qualified cybersecurity consulting services to corporations, startups, and small and medium enterprises that assist in eliminating the cyber threat, securing less expensive data and ensuring unbroken business continuity.​`,
            <>
              <p className="mb-3 font-semibold">
                Significance of Cybersecurity in Modern Businesses.
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "Protect Sensitive Data",
                    text: "Protect and secure customer data, employee and finance.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Avert Financial Loss",
                    text: "The costs associated with the breach are minimized and the cost of downtime and data theft is minimised.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Assure Regulatory Compliance",
                    text: "Achieve conformity to international standards like GDPR, HIPAA and ISO.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Sustenance of Customer Confidence",
                    text: "Show clients that their information remains safe with your firm.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Increase Operational Security",
                    text: "Get security on your networks and the endpoints, as well as on the cloud infrastructure.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Support Business Continuity",
                    text: "Be not among the first hit by cyber attacks.",
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
                With the top cybersecurity services offered by Capyngen, your
                business will not be compromised and vulnerable since it is a
                reputable cybersecurity company.
              </p>
            </>,
          ]}
          image={assets.cyberSecurity2}
          alt="Managed Cybersecurity Services Provider in India | Capyngen"
          isHidden={true}
          background={assets.patternBg1}
        />
        <FullSizeImageSection
          backgroundImage={assets.cybersecurityFullSize}
          title="Protect what matters most"
          description="Under our protection, your information, infrastructure, and reputations will be secure against any form of digital attacks with end-to-end capabilities of cyber security solutions provider."
          buttonText="Secure My Business"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <IndustryServices
          heading="Cybersecurity Services We Offer"
          subheading="As a leading managed cybersecurity services provider, we offer an array of cybersecurity solutions, which are used to support businesses against malicious threats and safely advance their operations within the market.​"
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
            "Contact our experts and discover the best cybersecurity services to your company that will prevent breaches and confidential information lost to this cyber security services provider.",
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
                    title: "24/7 Protection and Monitoring",
                    text: "Enjoy 24 Hour cybersecurity.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Lower Risk of Data Alterations",
                    text: "Secure your business and customer data.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Global Standards Compliance",
                    text: "Achieve GDPR, ISO, HIPAA and other standards.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Cost-Effective Security Solutions",
                    text: "Cybersecurity solutions that the startups and SMBs can afford.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Professional Advice and Assistance",
                    text: "Enterprise cybersecurity consulting services by an expert.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Relax with Confidence",
                    text: "You just focus on the business development, and we secure it.",
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
          alt="Managed Cybersecurity Services Provider in India | Capyngen"
          background={assets.patternBg1}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <FullSizeImageSection
          backgroundImage={assets.cybersecurityFullSize2}
          title="Build trust through security"
          description="As a committed cybersecurity company, our team of cybersecurity experts is at your disposal at all times to defend your business and provide it with safety."
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
            "Meet our specialists and find out the most suitable cybersecurity services for businesses to avoid breaches and information loss by using our expert option of the cyber security solutions provider method.",
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
