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
import GetStarted from "../components/GetStarted";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";
import { LifeBuoy, Sparkles } from "lucide-react";
import CardsSection from "../components/CardsSection";
import WebDevBanner from "../components/WebDevBanner";
import Banner2 from "../components/Banner2";
import TechStack from "../components/TechStack";
import BannerRollingGallery from "../components/BannerRollingGallery";

const WebDevelopment = () => {
  const faqItems = [
    {
      question: "How long does it take for funds to show in my wallet?",
      answer:
        "The time it takes for funds to appear in your wallet depends on the deposit method. Most funding methods are instantaneous. ",
    },
    {
      question: "What is the minimum deposit requirement?",
      answer:
        "PrimeForex Markets requires no minimum deposit, however, a minimum amount may be required by your preferred funding method. ",
    },
    {
      question: "Are there any fees associated with depositing funds?",
      answer: "No, PrimeForex Markets charges no fees for depositing funds.",
    },
  ];
  const techStack = [
    {
      title: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
        {
          name: "Kotlin",
          icon: "https://cdn.worldvectorlogo.com/logos/kotlin-1.svg",
        },
      ],
    },
    {
      title: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
        {
          name: "Ruby on Rails",
          icon: "https://cdn.worldvectorlogo.com/logos/rails-1.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-14.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.worldvectorlogo.com/logos/php-1.svg",
        },
      ],
    },
    {
      title: "Platforms",
      items: [
        {
          name: "iOS",
          icon: "https://cdn.worldvectorlogo.com/logos/ios-1.svg",
        },
        {
          name: "Android",
          icon: "https://cdn.worldvectorlogo.com/logos/android-4.svg",
        },
        {
          name: "React Native",
          icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        },
        {
          name: "Flutter",
          icon: "https://cdn.worldvectorlogo.com/logos/flutter.svg",
        },
      ],
    },
    {
      title: "Database",
      items: [
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "Oracle",
          icon: "https://cdn.worldvectorlogo.com/logos/oracle-6.svg",
        },
      ],
    },
    {
      title: "UI/UX",
      items: [
        {
          name: "Adobe XD",
          icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg",
        },
        {
          name: "Sketch",
          icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "Figma",
          icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
        },
        {
          name: "InVision",
          icon: "https://cdn.worldvectorlogo.com/logos/invision-1.svg",
        },
      ],
    },
  ];
  const solutionsData = [
    {
      title: "Casino Game Web Apps",
      desc: "Create exciting casino game websites with safe payment options, live gaming experiences, and user-friendly interfaces that keep gamers coming back for more.",
    },
    {
      title: "AI-Powered Web Apps (like CandyAI)",
      desc: "Capyngen makes high-end and easy-to-use web apps like Candy AI and other AR VR dating apps. They do this by leveraging advanced AI algorithms and trustworthy frameworks.",
    },
    {
      title: "Educational Website Development",
      desc: "Our web development business can create educational websites that offer interactive learning experiences by adding e-learning tools, course administration, and student interaction elements.",
    },
    {
      title: "Portfolio Website Design",
      desc: "Showcase your work with visually attractive portfolio websites developed by our web development services to emphasize your talents and attract new clients.",
    },
    {
      title: "Offer & Deal Websites",
      desc: "Promoted bargains work well with bespoke offer websites made by our web development firm. These websites have responsive designs and easy-to-use navigation for a better customer experience.",
    },
    {
      title: "Business Listing Websites",
      desc: "Promote deals work well with custom offer websites made by our web development company. These websites have responsive designs and easy-to-use navigation for a better user experience.",
    },
    {
      title: "Wiki & Knowledge Websites",
      desc: "Our website development firm can help you make dynamic listing websites with comprehensive search features and filters for real estate, job boards, and more.",
    },
    {
      title: "E-Commerce Website Solutions",
      desc: "Our web development firm can help you boost sales with strong e-commerce websites that have secure payment gateways, inventory management, and user journeys that are optimized.",
    },
    {
      title: "Non-Profit Website Development",
      desc: "Our web development services can help you build interesting non-profit websites that get donors more involved and clearly explain your objective.",
    },
    {
      title: "Entertainment Website Solutions",
      desc: "Use dynamic entertainment and OTT websites with multimedia integration, interactive features, and responsive design to get people to pay attention to your business.",
    },
    {
      title: "Event Website Development",
      desc: "Custom event websites with ticketing systems, live streaming, and real-time updates make it easy to manage events and improve the experience and engagement of attendees.",
    },
    {
      title: "Consulting Website Solutions",
      desc: "Set up your consulting brand online with excellent websites that show off your skills, client reviews, and service options. These sites should be geared to turn visitors into clients.",
    },
  ];
  const cardsSectionData3 = [
    {
      title: "Custom Enterprise Web Portal Development",
      description:
        "Our web development company builds enterprise web portals with seamless integration, strong security, and scalable architecture that can handle even the most complicated business needs.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "API Development & Seamless Integration",
      description:
        "Use our advanced web development services to create and connect powerful APIs that will make it easier for your business systems to share data and work better together.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Cloud-Based Web Application Solutions",
      description:
        "Our company makes cloud-based web apps for businesses all over the world that are always available, can grow with the business, and are safe to use.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Enterprise CMS Design & Development",
      description:
        "Our custom-built enterprise CMS solutions make it easy to manage large amounts of content by giving you powerful features and flexibility.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Advanced Data Analytics Dashboards",
      description:
        "Use our web development services to make interactive data analytics dashboards that give you real-time business insights and help you make smart decisions at the enterprise level.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Enterprise-Grade E-Commerce Solutions",
      description:
        "Our website building company can help you grow your online business with enterprise-level e-commerce systems. These systems have advanced customisation, security, and the flexibility to grow.",
      icon: <FaTasks className="text-4xl" />,
    },
  ];
  const servicesData = [
    {
      title: "Custom Enterprise Web Portals",
      desc: "Our web development company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced web development services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
    },
    {
      title: "Cloud-Based Web Applications",
      desc: "Our website development company specializes in creating cloud-based web applications that offer high availability, scalability, and secure access for global enterprises.",
    },
    {
      title: "Enterprise CMS Development",
      desc: "Simplify content management with our custom-built enterprise CMS solutions, which offer powerful features and flexibility for effortlessly managing large volumes of content.",
    },
    {
      title: "Data Analytics Dashboards",
      desc: "Utilize our web development solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Strategic Planning",
      description:
        "Our web development company starts with a comprehensive investigation and planning phase to make sure that our services fit with your business goals and target audience.",
    },
    {
      step: "Step 02",
      title: "Custom Design & Prototyping",
      description:
        "As a top web development firm, we make unique designs and prototypes that are personalized to your business identity. We offer web development solutions that are both visually appealing and user-friendly.",
    },
    {
      step: "Step 03",
      title: "Front-End Development",
      description:
        "Our web development services focus on front-end development and employ the latest technology to create responsive, dynamic, and visually attractive websites that are optimized for performance and user experience.",
    },
    {
      step: "Step 04",
      title: "Back-End Development",
      description:
        "Our web development firm focuses on strong back-end development, which means we can make web development solutions that are safe, scalable, and efficient, and that can handle complex tasks and manage data smoothly.",
    },
    {
      step: "Step 05",
      title: "Quality Assurance & Testing",
      description:
        "Our web development services include strict quality assurance and testing processes to make sure your site meets the greatest requirements for performance, security, and ease of use.",
    },
    {
      step: "Step 06",
      title: "Deployment & Ongoing Maintenance",
      description:
        "After the website is up and running, our website creation firm will keep it up to date, safe, and completely optimized for continued success.",
    },
  ];
  const cardsSectionDifferentColorData = [
    {
      title: "Custom AI",
      description:
        "Our web development firm adds specialized AI solutions to your web development services. This lets you make decisions based on data, give users a more personalized experience, and automate more of your business.",
      icon: <FaLightbulb className="text-5xl" />,
      cardBg: "bg-red-100",
    },
    {
      title: "Intelligent AI Chatbots",
      description:
        "AI-powered chatbots that are built right into your web development solutions can help you connect with customers more. They can provide instant support and tailored conversations 24/7.",
      icon: <FaChartLine className="text-5xl" />,
      cardBg: "bg-blue-100",
    },
    {
      title: "Advanced RPA Solutions",
      description:
        "Integrate RPA into your business to streamline operations. This will let our web development services automate repetitive jobs, cut down on mistakes, and make your systems work more efficiently.",
      icon: <FaCogs className="text-5xl" />,
      cardBg: "bg-purple-100",
    },
    {
      title: "AI-Powered Data Analytics",
      description:
        "Use our website development company's knowledge of AI-driven data analytics to get useful information, improve business processes, and help your organization expand with cutting-edge web development solutions.",
      icon: <FaLightbulb className="text-5xl" />,
      cardBg: "bg-gray-100",
    },
    {
      title: "Machine Learning Solutions",
      description:
        "Our web development company uses machine learning algorithms in the services we offer to build your website. This lets us do things like predictive analytics, adaptive content distribution, and better user experiences.",
      icon: <FaChartLine className="text-5xl" />,
      cardBg: "bg-yellow-100",
    },
    {
      title: "AI-Driven Security",
      description:
        "Add AI-driven security features to your web development solutions to safeguard your enterprise-level web apps by finding and stopping attacks in real time.",
      icon: <FaCogs className="text-5xl" />,
      cardBg: "bg-green-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      {/* <WebDevBanner backgroundImage={assets.webDevelopment} /> */}
      <BannerRollingGallery autoplay={true} pauseOnHover={true} />

      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <TopRatedCompany
          title="Top Web Development Company"
          description={[
            `We are known worldwide as the best web development company, trusted by hundreds of clients in 90+ countries. With the perfect blend of award-winning designers and expert web developers, we are a one-stop solution for all your digital needs. Capyngen is committed to delivering exceptional results by using advanced data-driven strategies and smart digital marketing.`,
            `We specialize in creating responsive websites, eCommerce development, and custom web development services that are innovative and future-ready. Clients can rely on our expertise in Magento development, Drupal development, WordPress development, HTML5, JavaScript, Joomla, and CSS3 to transform their ideas into reality.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />
        <GetStarted
          backgroundColor="bg-gray-900"
          textColor="text-white"
          buttonColor="bg-blue-900 hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="The best web development company to help your business grow"
          description="Capyngen is a certified web development company that offers truly professional services for hiring web developers."
          buttonText="Contact Us"
        />
        <TopRatedCompany
          title="Globally Trusted Web Development Partner"
          description={[
            `After doing a thorough analysis, Capyngen gives our clients the best and most focused web development solutions. Our skilled web developers go through a number of tests for the project as part of a well-planned strategy to make sure the product is of the highest quality. We give our clients' projects better functionality, clarity, and dynamism, which will make it easier for users to use your website.`,
            `Capyngen has been providing top-notch web development services since 2007. Their team includes innovators, problem solvers, and people who think outside the box. We make sure that your website works and is easy for people to use so that it ranks well in Google. We are the best web development company in India, and we offer the best web development services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />

        <BenefitsSection
          heading="Cutting-Edge Web Development Solutions We Deliver"
          desc="A web page is the basic building block of the Internet. It has text, multimedia, and links to other pages. At Capyngen, we make and code web pages that are best suited to the needs of each project. We come up with and carry out the Internet strategy through careful and strategic thinking. We come up with new ways to solve the problems that come up on each project."
          benefits={solutionsData}
        />
        <CardsSection
          heading="Expert Web Development Services Designed for Your Success"
          subheading="Capyngen can help you with enterprise-level web development by creating custom solutions, integrating APIs, building cloud-based apps, and advanced e-commerce platforms that help your business grow and work more efficiently."
          services={cardsSectionData3}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
        />
        <HowWeWork
          heading="Comprehensive Web Development Process"
          desc="Capyngen offers a whole web development process, from initial exploration and planning to design, development, testing, and deployment. This ensures that you get custom, high-performing solutions that help you reach your business goals."
          steps={steps}
        />
        <GetStarted
          backgroundColor="bg-gray-900"
          textColor="text-white"
          buttonColor="bg-blue-900 hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Transform Your Vision into Reality with Us"
          description="We worked with some of the top companies and ideas from around the world that were truly groundbreaking."
          buttonText="Get Started"
        />
        <CardsSection
          heading="Integrating Advanced Technologies into Web Development"
          subheading="Add advanced technologies like AI, machine learning, blockchain, and cloud computing to your web projects to make sure you get web development services that are new, safe, and ready to grow with your organization."
          services={cardsSectionDifferentColorData}
          height="h-94"
          sectionBg="bg-gray-900"
          headColor="text-white"
          cardBg="bg-gray-50"
          hoverBg=""
          cardHeadSize="text-2xl"
          textSize="text-lg"
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <WhyChoose />
        <BenefitsSection
          heading="Web Development Services We Offer"
          desc="Partner with RichestSoft for enterprise-level web development services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <TechStack
          heading="Transform Your Web Development and Consulting with Our Expert Tech Stack"
          subheading="With our diverse and cutting-edge tech stack, we build innovative solutions that meet the highest standards of quality and functionality."
          categories={techStack}
        />
        <OurServices />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default WebDevelopment;
