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
import Banner14 from "../components/Banner14";
import GetStarted from "../components/GetStarted";
import IndustryServices from "../components/IndustryServices";
import CardsSection from "../components/CardsSection";
import {
  FaAndroid,
  FaApple,
  FaCheckCircle,
  FaCode,
  FaCogs,
  FaMobileAlt,
} from "react-icons/fa";
import CardsSectionSlider from "../components/CardsSectionSlider";

const NetworkSolutionServices = () => {
  const faqItems = [
    {
      question: "What are network solutions and services?",
      answer:
        "Network solutions and services comprise the creation, implementation, administration, and upkeep of IT network infrastructure. Along with hardware, software, and security measures, the services also include cloud integration and the provision of continuous support to ensure an enterprise's optimal connectivity and performance.",
    },
    {
      question: "Why do businesses need managed network services?",
      answer:
        "Managed network services allow for the work of experts who provide proactive monitoring, maintenance, and optimization of your network infrastructure. Consequently, the network experiences less downtime, security is improved, operational costs are lowered, and the in-house team is allowed to deal with the primary business activities instead of IT troubleshooting.",
    },
    {
      question: "How Capyngen can improve network security?",
      answer:
        "Capyngen incorporates a multi-layered security approach consisting of an advanced firewall, intrusion detection systems, VPNs, continuous monitoring, vulnerability assessments, and incident response planning. We design the security safeguards to suit your industry's needs and compliance requirements.",
    },
    {
      question: "What differentiates on-premise from cloud network services?",
      answer:
        "On-premises networks are physically located within your site and use hardware that you own and take care of. Cloud network services run on servers far away, giving you the advantages of more scalability, flexibility, less infrastructure costs, and being able to access it from anywhere with an internet connection.",
    },
    {
      question: "How much do network solutions and services cost?",
      answer:
        "The cost varies depending on the size, complexity, and specific needs of the business. Capyngen has solutions that are flexible and scalable for any budget – from small business managed network services that are budget-friendly to large enterprise solutions that are comprehensive. We would be glad to provide you with a personalized estimate if you get in touch with us.",
    },
    {
      question: "Are you a 24/7 support provider?",
      answer:
        "Indeed, Capyngen provides a comprehensive service that involves network monitoring and support 24/7. Our committed team is always available to solve problems, respond to your queries, and ensure the continued functioning of your network without a break.",
    },
    {
      question: "What industries are served by Capyngen?",
      answer:
        "We cater to the needs of various sectors like health, finance, retail, production, education, professional services, and hospitality among more. We customize our solutions to ensure that clients' industry-specific compliance and operational requirements are met.",
    },
    {
      question: "Could you assist in our network migration to the cloud?",
      answer:
        "Most definitely, yes! Cloud migration services are the specialty of Capyngen. We go over your current setup, choose a migration plan that is smooth and safe, do the change with the least possible downtime, and then continue cloud management and optimization.",
    },
    {
      question: "How long does it take to implement network solutions?",
      answer:
        "The period of implementation depends to a large extent on the scope and intricacy of the project. Some configurations might only require a couple of days to complete, while extensive enterprise network overhaul may take even a few weeks. We provide the detailed timeline during the planning phase and are committed to working efficiently to lessen the impact on the client.",
    },
    {
      question: "What is network consulting and do I need it?",
      answer:
        "Network consulting includes the activity of one or more experts examining and strategically planning your IT infrastructure. If you are experiencing performance issues, planning to grow, facing security issues, or thinking of upgrading your technology, getting consulted will help you make the right decisions and save you money in the long run.",
    },
    {
      question: "How do you ensure network uptime and reliability?",
      answer:
        "Reliability is guaranteed to a great extent through proactive monitoring, having backup systems in place, routine maintenance, automated alerts, fast reaction to incidents, and continual optimization.",
    },
    {
      question: "Can Capyngen support remote and hybrid work environments?",
      answer:
        "The answer is yes. We are the best at building secure networks for remote and hybrid work settings. This includes VPN set-up, safe remote access solutions, cloud cooperation tools, and endpoint security to keep your distributed workforce protected.",
    },
    {
      question: "What happens if there is a network emergency?",
      answer:
        "In the case of any network emergency, our 24/7 assistance team is on hand to take action right away. We have processes in place that allow for the speedy fixing of the problem, issue resolution, and informing. For managed service clients, we are usual.",
    },
    {
      question: "Do you provide network solutions for small businesses?",
      answer:
        "Yes, definitely! The managed network services for small businesses, which are affordable is what Capyngen offers. We realize that budgets can be tight and supply you with solutions that can be scaled up depending on your needs in terms of performance,",
    },
    {
      question: "How do I get started with Capyngen's network services?",
      answer:
        "It is very simple to get started! By either our website, phone, or email, you can reach us to schedule a consultation for free. First, we do a network checkup, then based on your requirements and objectives, we recommend individualized solutions with no binding commitment, and we help you find the best solution for your business.",
    },
  ];
  const cardsSectionImageData2 = [
    {
      image: assets.network3,
      title: "Expert IT Professionals",
      desc: "We are a team of certified network engineers and IT specialists, who have accumulated a lot of experience in different industries. We keep ourselves updated with the latest technologies and best practices to provide state-of-the-art solutions.",
    },
    {
      image: assets.network4,
      title: "Customized Solutions",
      desc: "We do not believe in universal solutions. If you are looking for affordable managed network services for a small business or if you are looking for a network security solution provider for enterprise capabilities, we will adjust our services to meet your specific requirements and budget.",
    },
    {
      image: assets.network5,
      title: "Best Network Solutions Company in India",
      desc: "Capyngen has been able to convince companies all over India that it is the best solution for the network by offering such services as the most reliable, secure, and high-performing as necessary without fail. -No need for us to say it, our Incidents of Success already tell the story well enough.",
    },
    {
      image: assets.network6,
      title: "Cost-Effective & Scalable",
      desc: "We are aware of how important it is to optimize the budget. Our services are aimed at providing you with the best value while still being flexible enough to scale up as your business develops.",
    },
    {
      image: assets.network7,
      title: "Proactive Approach",
      desc: "We don't just react to problems – we prevent them. Our preventive care through watchful monitoring and upkeep, reduces the time your network is off and keeps your network at its maximum output.",
    },
    {
      image: assets.network8,
      title: "24/7 Support & Monitoring",
      desc: "Work hours for business are never just from 9 to 5 and our working hours for support and monitoring services are never 0. So it is basically the same as businesses not sleeping. -Inadequate situation is always rejected, as even the strictest off-duty observation and support leave only restoration of their network uninterrupted operations.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Managed Network Services",
      description:
        "24/7 network monitoring with real-time alerts and proactive issue detection to stop the minimal time of network downtime from going under your business operations.",
      icon: <FaAndroid className="text-4xl text-white" />,
    },
    {
      title: "Network Security Solutions",
      description:
        "Advanced firewall protection with multi-layered security for preventing unauthorized access while encrypting your sensitive business data.",
      icon: <FaApple className="text-4xl text-white" />,
    },
    {
      title: "Cloud Network Services",
      description:
        "Cloud migration services guide you through the process of moving from the server to cloud with less downtime and higher productivity.",
      icon: <FaMobileAlt className="text-4xl text-white" />,
    },
    {
      title: "Network Consulting Services",
      description:
        "Infrastructure assessment studying your current network setup; recognizing bottlenecks, and advising feasible solutions for the company to grow.",
      icon: <FaCode className="text-4xl text-white" />,
    },
    {
      title: "IT Network Support & Maintenance Services",
      description:
        "Equipment installation and configuration making sure that all network hardware is properly set up, fully efficient, and easily connected.",
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "Network Infrastructure Design & Implementation",
      description:
        "Custom network design fabricating the most perfect network architectures which not only support your business requirements and industry but also strengthen your future plans.",
      icon: <FaCogs className="text-4xl text-white" />,
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
      title: "E-commerce & Retail",
      desc: "",
      image: assets.webDev18,
      textColor: "text-white",
    },
    {
      title: "Healthcare & Education",
      desc: "",
      image: assets.webDev19,
      textColor: "text-white",
    },
    {
      title: "Real Estate & Travel",
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
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Assessment",
      description:
        "The initial phase of our work involves comprehensive assessments aimed at grasping your current network infrastructure, business objectives, challenges, and expansion plans.",
    },
    {
      step: "Step 02",
      title: "Strategic Planning",
      description:
        "We have skilled professionals develop a tailored communication strategy that meets your unique requirements and takes into account the aspects of scalability, security, and budgeting.",
    },
    {
      step: "Step 03",
      title: "Implementation",
      description:
        "Following the standard operating procedures and undergoing the rigorous testing phases, we accomplish your network solution with the least possible downtime in your services.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Banner14
        imageSrc={assets.network1}
        imageAlt="Blockchain development illustration"
        title="Creative"
        highlighted="Network Solutions and Services"
        subtitle="for Contemporary Businesses"
        description="Capyngen provides efficient, safe, and adaptable technology network solutions and services that assist your business in achieving maximum performance."
        reverse={false}
      />

      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Not a minute to lose, book your free consult with us today - Get the network revolution started!",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Network Solution"
          description={[
            `We live in a world where everything must be done digitally and therefore your network becomes the most important thing in the chain of your business operations. At Capyngen, we know very well that your connectivity processes must be without any type of failure, and besides that, security and performance must be also at their zenith. Hence we provide the kind of customer and business solutions that enable organizations of any size to achieve their greatest potential.`,
            `We are your one-stop shop for all things related to networking, including solutions that are hosted on windows and to support round the clock. With Capyngen, your organization would become a move powered by network services professionals are better you can get.`,
          ]}
          image={assets.network2}
          isHidden={true}
          imageHeight="aspect-[1/1]"
          background={assets.patternBg1}
        />
        <CardsSection
          heading="Our Network Solutions & Services"
          subheading=""
          services={cardsSectionData1}
          headColor="text-white"
          cardBg="bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900"
          textSize="text-md"
          sectionBg="bg-gray-900"
          hoverBg="hover:from-indigo-800 hover:via-gray-800 hover:to-blue-900 hover:scale-105"
          textColor="text-white"
          hoverTextColor=""
        />
        <IndustryServices
          heading="Why Businesses Trust Capyngen"
          subheading=""
          cardBg="bg-gray-700"
          cardText="text-white"
          cardDescText="text-white"
          services={cardsSectionImageData2}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Want to enhance your network? Get in touch with Capyngen for a professional solution right away!",
          ]}
          textSize="text-2xl"
          buttonText="Get in Touch"
          backgroundVideo={assets.backgroundVideo}
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
        <HowWeWork heading="Our Process" desc="" steps={steps} />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Get Started Today"
          description={[
            "Do not allow your old or unstable network system to slow down your business. No matter if you require a cloud-based network solution for businesses, complete security, or continuous managed services, Capyngen is the partner that you can always rely on to get the results you want.",
          ]}
          textSize="text-xl"
          buttonText="Get Started"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default NetworkSolutionServices;
