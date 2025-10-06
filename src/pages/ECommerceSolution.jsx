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
import CardsSectionGrid from "../components/CardsSectionGrid";
import { ShoppingCart, CreditCard, Smartphone, Store } from "lucide-react";
import CardsSection from "../components/CardsSection";
import {
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
  FaTools,
  FaDollarSign,
  FaUsers,
  FaShieldAlt,
  FaBullhorn,
  FaHeart,
} from "react-icons/fa";
import Banner5 from "../components/Banner5";
import GetStarted from "../components/GetStarted";
import CardsSectionImage from "../components/CardsSectionImage";

const ECommerceSolution = () => {
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
  const technologies = [
    { name: "JavaScript", logo: assets.js },
    { name: "Python", logo: assets.python },
    { name: "CSS3", logo: assets.css3 },
    { name: "C++", logo: assets.cplusplus },
    { name: "PHP", logo: assets.php },
    { name: "React", logo: assets.react },
    { name: "Vue.js", logo: assets.vuejs },
    { name: "AngularJS", logo: assets.angular },
    { name: "JQuery", logo: assets.jquery },
    { name: "Next.js", logo: assets.nextjs },
    { name: "MongoDB", logo: assets.mongodb },
    { name: "MySQL", logo: assets.mysql },
    { name: "PostgreSQL", logo: assets.postgresql },
    { name: "Node.js", logo: assets.nodejs },
    { name: "Laravel", logo: assets.laravel },
    { name: "Express.js", logo: assets.expressjs },
    { name: "Azure", logo: assets.azure },
    { name: "AWS", logo: assets.aws },
    { name: "Google Cloud", logo: assets.googlecloud },
  ];
  const solutionsData = [
    {
      title: "Casino Game Web App",
      desc: "Launch captivating casino game websites with secure payment gateways, real-time gaming experiences, and engaging user interfaces that keep players returning for more.",
    },
    {
      title: "Web App like CandyAI",
      desc: "RichestSoft develops high-end and user-friendly web apps, such as Candy AI, and other AR VR dating apps, using advanced AI algorithms and reliable frameworks.",
    },
    {
      title: "Educational Websites",
      desc: "Deliver interactive learning experiences with educational websites designed by our E-Commerce Solutions company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our E-Commerce Solutions services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our E-Commerce Solutions company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive E-Commerce Solutions solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our E-Commerce Solutions company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our E-Commerce Solutions services, that enhance donor engagement and effectively communicate your mission.",
    },
    {
      title: "Entertainment Website Development",
      desc: "Engage audiences with dynamic entertainment and OTT websites featuring multimedia integration, interactive features, and responsive design, all tailored to your brand's unique needs.",
    },
    {
      title: "Event Website Development",
      desc: "Seamlessly manage events with custom event websites that offer ticketing systems, live streaming, and real-time updates, enhancing attendee experiences and engagement.",
    },
    {
      title: "Consulting Website Development",
      desc: "Establish your consulting brand online with professional websites that showcase your expertise, client testimonials, and service offerings, designed to convert visitors into clients.",
    },
  ];
  const servicesData = [
    {
      title: "Custom Enterprise Web Portals",
      desc: "Our E-Commerce Solutions company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced E-Commerce Solutions services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our E-Commerce Solutions solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const cardsSectionGridData1 = [
    {
      title: "Ecommerce App Development",
      description:
        "We create a mobile-friendly app with an ecommerce foundation to provide fantastic on-the-go access to any screen size.",
      icon: <Smartphone className="w-6 h-6 text-orange-500" />,
      iconBg: "bg-orange-100",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Increase business accommodations and user association by integrating excellent payment gateway modes into popular ecommerce schemas.",
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      iconBg: "bg-green-100",
    },
    {
      title: "Responsive Shopping Application",
      description:
        "We provide you with dynamic potential from data query, analysis, and enterprise reporting to complete check-out analysis.",
      icon: <Store className="w-6 h-6 text-lime-500" />,
      iconBg: "bg-lime-100",
    },
    {
      title: "Shopping Cart Development",
      description:
        "Our well-tailored shopping cart development services enhance customer engagement and the latest business adaptations.",
      icon: <ShoppingCart className="w-6 h-6 text-red-500" />,
      iconBg: "bg-red-100",
    },
  ];
  const cardsSectionDifferentColorData = [
    {
      title: "Quality Assurance",
      description:
        "Our developers use prominent app development solutions ensuring better quality of product is delivered.",
      icon: <FaLightbulb className="text-4xl" />,
      cardBg: "bg-red-100",
    },
    {
      title: "Real Time Support",
      description:
        "We offer full range of support for our clients in real-time: phone, e-mail, and online.",
      icon: <FaChartLine className="text-4xl" />,
      cardBg: "bg-blue-100",
    },
    {
      title: "Cost Effectiveness",
      description:
        "We provide affordable and superb quality services that fit your budget.",
      icon: <FaCogs className="text-4xl" />,
      cardBg: "bg-purple-100",
    },
    {
      title: "Quality Assurance",
      description:
        "Our developers use prominent app development solutions ensuring better quality of product is delivered.",
      icon: <FaLightbulb className="text-4xl" />,
      cardBg: "bg-gray-100",
    },
    {
      title: "Real Time Support",
      description:
        "We offer full range of support for our clients in real-time: phone, e-mail, and online.",
      icon: <FaChartLine className="text-4xl" />,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Cost Effectiveness",
      description:
        "We provide affordable and superb quality services that fit your budget.",
      icon: <FaCogs className="text-4xl" />,
      cardBg: "bg-green-100",
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
  const cardsSectionImageData1 = [
    {
      title: "Enhanced User Engagement & Retention",
      description:
        "Start building user-centered and interactive offerings which attract users to come back thus increasing loyalty and long-term engagement. User-engagement platforms keep users discovering more about your platform and coming back regularly.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },

    {
      title: "Improved Conversion Rates",
      description:
        "Selecting layouts and workflows that engage visitors is the main factor in motivating visitors to take the desired action, thus increasing sales, sign-ups, and leads. Strategically placed call-to-actions and persuasive design elements take conversions a step further.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Intuitive, Responsive, and Accessible Design",
      description:
        "Make sure that the user experience is equally good on all devices, including those for users with disabilities. Accessibility-focused design widens your audience base and strengthens your brand image.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Faster Load Times & Optimized Performance",
      description:
        "Fast-loading pages, easy navigation, and efficient apps decrease visits that leave immediately. Optimized performance improves user delight and promotes longer sessions.",
      image: assets.careersAbout1,
      cardBg: "bg-pink-100",
    },
    {
      title: "Scalable Architecture for Growth",
      description:
        "Develop changes that would be able to absorb more traffic, new features, and bigger geographic features without losing quality. Scalable systems give room for businesses to grow with stability and without needing to redesign the platform.",
      image: assets.careersAbout1,
      cardBg: "bg-purple-100",
    },
    {
      title: "Strong Branding & Visual Identity",
      description:
        "Appealing, regular, designs bring across the company’s ideals to its customers in a clear and somewhat memorable manner. One visual identity at the core of recognition and trust with users.",
      image: assets.appDevelopment,
      cardBg: "bg-red-100",
    },
    {
      title: "Seamless Integration with Tools & Services",
      description:
        "Connect CRMs, payment gateways, analytics, or any other third-party services to form a complete ecosystem. Integration guarantees operational efficiency as well as a better user experience.",
      image: assets.customAiSolution,
      cardBg: "bg-blue-100",
    },

    {
      title: "Data-Driven Decision Making",
      description:
        "With the help of analytics and understanding of user behavior, you can improve UI/UX, marketing strategies, and product offerings. Optimization on a daily basis engages users further, their loyalty increases, which in turn leads to a higher overall ROI.",
      image: assets.appDevelopment,
      cardBg: "bg-green-100",
    },
    {
      title: "Security & Privacy Compliance",
      description:
        "Employ all the security measures that are in line with the industry provisions and the best cybersecurity practices to secure users' data. Adhering to compliance and gaining users' trust will make your platform reliable as well as safe for all users.",
      image: assets.customAiSolution,
      cardBg: "bg-yellow-100",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "B2C (Business to Consumer) Stores",
      description:
        "These are direct online retail stores created to sell products to end customers.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "B2B (Business to Business) Platforms",
      description:
        "These are scalable ecommerce services that are developed to meet the needs of wholesale and enterprise.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Multi-Vendor Marketplaces",
      description:
        "Multiple vendors can list their products and sell them through your platform.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Subscription-Based Ecommerce",
      description:
        "This is a perfect billing model for recurring transactions such as subscription boxes and memberships.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Dropshipping Stores",
      description:
        "You can start an ecommerce business with a small amount of money and no stock.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Social Commerce Solutions",
      description:
        "With the help of integrated shopping features, you can sell directly on social media platforms.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="">
        <Banner5
          title={
            <>
              <span className="text-2xl md:text-4xl">
                Transform Your Business with{" "}
              </span>
              <span className="text-blue-600">Smart E-Commerce Solutions</span>
            </>
          }
          description="Use the efficient and intuitive e-commerce solution provided by Capyngen to construct, expand and prosper your online store keeping in mind the contemporary business trends."
          primaryBtnText="Start your Store Today"
          primaryBtnLink="#"
          image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title=""
          description={[
            "Get your ecommerce business up and running with Capyngen’s intuitive ecommerce solutions. We don’t only design, develop and market; we also take you and your store to the other side of the world to make you thrive.",
          ]}
          textSize="text-2xl"
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Why Your Business Needs an E-Commerce Solution"
          description={[
            `It is no longer enough to have an ecommerce platform that you can rely on - it is now essential. By employing a well-crafted ecommerce web development plan, your enterprise is capable of:`,
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-8 text-gray-300">
                {[
                  {
                    title: "",
                    text: "Getting in touch with a worldwide audience and selling products at any time of a day or night.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Lowering your business expenses compared to traditional stores.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Establishing customer confidence through payment systems that are safe.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Effectively controlling stocks and orders.",
                    color: "text-blue-500",
                  },
                  {
                    title: "",
                    text: "Giving customers the opportunity to have a quick and easy shopping experience.",
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
                The web solutions that Capyngen has for the ecommerce are
                designed to align with your business objectives, whether you are
                a newcomer to the market or planning to go abroad.
              </p>
            </>,
          ]}
          image={assets.whyChooseUs}
          isHidden={true}
          background={assets.patternBg1}
        />
        <CardsSectionImage
          heading="E-Commerce Solutions Services We Offer"
          subheading="We create a comprehensive set of online store solutions that are industry-specific and depend on the size of the business, ranging from:"
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <CardsSection
          heading="Why Choose Capyngen for Web Development?"
          subheading=""
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Book a Free Consultation"
          description={[
            "Schedule a call with our online business experts to learn about our ecommerce development services that can revamp your enterprise. Sharing your online victory with us is made easy.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="Top-Rated E-Commerce Solutions Company"
          description={[
            `RichestSoft provides top-notch and oriented E-Commerce Solutions solutions to our clients after a proper analysis is completed. Our expert web developers undergo various tests for the project through well-structured planning or strategy to ensure the quality of the product is exclusive. We offer our client's project superior functionality, clarity, and great dynamism, which will facilitate the user's experience on your website.`,
            `RichestSoft has a team of innovators, problem solvers, and out-of-box thinkers who have been delivering top-notch E-Commerce Solutions services since 2007. We ensure that your website is functional and easy for users to rank highly in Google. Being the best E-Commerce Solutions company in India, we provide best-in-class E-Commerce Solutions services.`,
          ]}
          image={assets.whyChooseUs}
          background={assets.patternBg1}
          reverse
        />
        <CardsSectionGrid
          heading="Absolute Ecommerce Mobile App Development Solutions"
          description={[
            "We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development Company services are globally renowned for providing avant-garde and reliable mobile app solutions.",
            "Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs.",
            "If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
          ]}
          services={cardsSectionGridData1}
        />

        <BenefitsSection
          heading="E-Commerce Solutions Solutions We Offer"
          desc="A web page is the fundamental element of the Internet, composed of texts, multimedia content, and links to other pages. At RichestSoft, we design and program the web pages best adapted to the different needs of each project. From strategic and rigorous thinking, we define and execute the Internet strategy with in-depth analysis. We focus on and effectively solve the challenges of each project with innovative answers."
          benefits={solutionsData}
        />
        <CardsSectionGrid
          heading="Absolute Ecommerce Mobile App Development Solutions"
          description={[
            "We are a reliable Ecommerce application developer specializing in developing highly-scalable on-demand ecommerce development services. Our knowledgeable Ecommerce mobile app development Company services are globally renowned for providing avant-garde and reliable mobile app solutions.",
            "Our team of experts is capable of creating highly-customizable mobile solutions for business-specified Ecommerce needs.",
            "If you are willing to lead your business globally and connect with your customers worldwide, rely on our dependable Ecommerce development services.",
          ]}
          services={cardsSectionGridData1}
          reverse={true}
        />
        <HowWeWork
          heading="Comprehensive Web Development Process"
          desc="Capyngen offers a whole web development process, from initial exploration and planning to design, development, testing, and deployment. This ensures that you get custom, high-performing solutions that help you reach your business goals."
          steps={steps}
        />
        <WhyChoose />
        <CardsSection
          heading="Transform Your App Vision with Our App Development Consulting Services"
          subheading="Partner with us to bring your app ideas to life with our services, leveraging the latest technologies and expert guidance for exceptional results."
          services={cardsSectionDifferentColorData}
          height="h-76"
          cardBg="bg-gray-50"
          hoverBg=""
          textColor="text-gray-800"
          hoverTextColor=""
        />
        <BenefitsSection
          heading="E-Commerce Solutions Services We Offer"
          desc="Partner with RichestSoft for enterprise-level E-Commerce Solutions services, delivering custom solutions, API integration, cloud-based apps, and advanced e-commerce platforms that drive business growth and efficiency."
          benefits={servicesData}
          reverse
        />
        <TechnologiesCarousel
          title="E-Commerce Solutions Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <OurServices />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default ECommerceSolution;
