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
import CardsSectionImage from "../components/CardsSectionImage";

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
      title: "Requirement Gathering",
      description:
        "Understand business goals, essential features, target audience, and user behavior to define the website’s purpose and scope.",
    },
    {
      step: "Step 02",
      title: "Prototyping & Design",
      description:
        "Create wireframes and prototypes aligned with the user journey. Apply UI/UX principles to ensure the site is visually appealing and easy to navigate.",
    },
    {
      step: "Step 03",
      title: "Front-End Development",
      description:
        "Build the user interface using technologies like HTML, CSS, JavaScript, ReactJS, or Angular, ensuring seamless interaction for users.",
    },
    {
      step: "Step 04",
      title: "Back-End Development",
      description:
        "Develop the server-side functionality, databases, APIs, and logic using tools such as PHP, Laravel, Node.js, or Python. This ensures data security and smooth functionality.",
    },
    {
      step: "Step 05",
      title: "Full-Stack Development & Integration",
      description:
        "Some developers handle both front-end and back-end tasks, integrating all components—including the database—for a complete, cohesive project.",
    },
    {
      step: "Step 06",
      title: "Testing, Launch & Maintenance",
      description:
        "Perform quality assurance to fix bugs and check performance, compatibility, speed, and security. Launch the website and provide ongoing maintenance to keep it up-to-date and fully functional.",
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
  const cardsSectionData1 = [
    {
      title: "Credibility & Trust",
      description:
        "The establishment of trust is performed by a well-designed website. Customers are more willing to do business with companies that own modern, secure, and informative websites of their own.",
      icon: <FaLightbulb className="text-4xl" />,
    },
    {
      title: "Brand Identity",
      description:
        "Websites are the medium through which a company can communicate its distinctive attributes, not only through colors, design, and messaging, but also through other means. Custom development ensures that the brand can maintain its uniqueness.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Accessibility",
      description:
        "The reach of a physical store is limited by its location. However, a website is not bound by geography, thus making it worldwide. With adequate development, companies can cater to international audiences around the clock.",
      icon: <FaCogs className="text-4xl" />,
    },
    {
      title: "Growth for Small Businesses",
      description:
        "For the startup entrepreneurs, purchasing affordable website development services for small businesses is the deciding factor. A small and modestly designed website, for one, can bring in clients, act as a platform for products, and also create a professional image.",
      icon: <FaLaptopCode className="text-4xl" />,
    },
    {
      title: "Competitive Advantage",
      description:
        "Features like interactive chat systems, e-commerce stores, online reservation services, and electronic payment integration help companies to keep up with or even outclass their rivals are only available for businesses that have had a website developed with the latest technologies.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Customer Engagement",
      description:
        "Websites allow companies to actively engage with their customers through blogs, newsletters, feedback forms, and social media integration. This interaction helps build lasting relationships and keeps customers coming back.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "Custom Website Development",
      description:
        "Not every company can make a generic template work for the website. Custom website development is about creating one-of-a-kind services that fit the needs of particular industries. As a matter of illustration, client portals might be the answer for a law firm whereas learning management systems could be the way for an educational institution. Customization is the reassurance of the three benefits such as adaptability, upgradability, and longevity.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },

    {
      title: "Good Design",
      description:
        "The necessity of responsive designing can be drawn just from the simple fact that over 50% of web traffic are mobile visitors. A responsive website adjusts its shows to any screen size without any loss in quality. It implies that users who switch between desktop, tablets, and smartphones are guaranteed a smooth viewing experience there.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Maintenance for Website",
      description:
        "Web building is only the beginning, of course. Apart from regular updates, even security, restoration, and performance optimization are very important. Website maintenance services keep the sites performing excellent, stop downtime and customer satisfaction are some of the outcomes regarding maintenance services.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Ecommerce Website Development Services",
      description:
        "Online shopping is getting more and more popular. The services of e-commerce web development cover the building of secure stores that have product listings, shopping carts, and so forth. In addition to the basic functions, various features such as inventory management, order tracking, and customer accounts make shopping convenient and fully satisfactory.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Search Engine Optimization (SEO) Services",
      description:
        "A beautifully designed website is ineffective if potential customers cannot find it. SEO services optimize a website’s content, structure, and metadata to improve visibility on search engines like Google. This ensures that businesses attract more organic traffic, generate leads, and reach their target audience efficiently.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Content Management System (CMS) Integration",
      description:
        "A website needs regular updates to remain relevant and informative. CMS integration allows businesses to manage and publish content easily without technical knowledge. Platforms like WordPress, Drupal, or custom CMS solutions provide flexibility, scalability, and control over the website’s content, saving time and reducing reliance on developers.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
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
          title="What is Website Development?"
          description={[
            `Basically, the processes of building, maintaining, and updating websites form website development. It is the fusion of artistic design, logical programming, and market strategy that yields platforms that satisfy the needs of businesses as well as users. Compared to traditional print advertising or offline marketing, websites that are accessible 24 hours a day, seven days a week have turned them into one of the most powerful tools for global reach.`,
            `Professional website development is not only about static HTML pages. It covers the creation of interactive features, linking of secure payment systems, ensuring the adaptability of mobile devices, search engine optimization, and the maintenance of scalability of the platform as the business grows.`,
            `Custom website development also gives businesses the opportunity to create websites that are more than just templates. By doing so, developers are able to create special features that not only match the needs of the industry but also of the company in question, for example, healthcare portals, real estate listing, educational LMS platforms, or e-commerce marketplace.`,
            <p
              key="equation"
              className="text-2xl font-bold text-cyan-400 text-center mt-6"
            >
              Web Development ={" "}
              <span className="text-purple-400">Technology</span> +{" "}
              <span className="text-pink-400">Creativity</span> +{" "}
              <span className="text-green-400">Strategy</span>
            </p>,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
        />
        <CardsSection
          heading="Why Businesses Need Website Development Services"
          subheading="Nowadays, the competition between the businesses is to get access to the online eyeballs. Without a well-designed website, a company's potential customers are more likely to find their way to competitors who offer faster, more comfortable, and more fascinating experiences. Firstly, let's examine the major benefits of website development services:"
          services={cardsSectionData1}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-b from-[#000]/90 to-[#0010A2]/90 hover:bg-gradient-to-t transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-2xl hover:shadow-gray-700/70"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-90"
        />
        <CardsSectionImage
          heading="Types of Services for Website Development"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
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
