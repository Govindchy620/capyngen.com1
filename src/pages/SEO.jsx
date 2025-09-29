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
import CardsSection from "../components/CardsSection";
import {
  FaSearch,
  FaFileAlt,
  FaLink,
  FaWrench,
  FaMapMarkerAlt,
  FaMicrophone,
  FaShoppingCart,
  FaPenFancy,
  FaChartBar,
  FaEye,
  FaMoneyBillWave,
  FaUsers,
  FaPuzzlePiece,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import GetStarted from "../components/GetStarted";

const SEO = () => {
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
      desc: "Deliver interactive learning experiences with educational websites designed by our SEO company, integrating e-learning tools, course management, and student engagement features.",
    },
    {
      title: "Portfolio Websites",
      desc: "Showcase your work with visually compelling portfolio websites crafted by our SEO services to highlight your skills and attract potential clients.",
    },
    {
      title: "Offer Websites",
      desc: "Promote deals effectively with custom offer websites built by our SEO company, featuring responsive designs and seamless navigation for a better user experience.",
    },
    {
      title: "Listing Websites",
      desc: "Create dynamic listing websites with advanced search functionalities and filters developed by our website development company for real estate, job boards, and more.",
    },
    {
      title: "Wiki Websites",
      desc: "Build informative wiki websites with collaborative tools and easy content management using our comprehensive SEO solutions tailored to your needs.",
    },
    {
      title: "E-Commerce Websites",
      desc: "Drive sales with robust e-commerce websites designed by our SEO company, featuring secure payment gateways, inventory management, and optimized user journeys.",
    },
    {
      title: "Non-Profit Websites",
      desc: "Support your cause with engaging non-profit websites, developed by our SEO services, that enhance donor engagement and effectively communicate your mission.",
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
      desc: "Our SEO company designs enterprise web portals with seamless integration, robust security, and scalable architecture tailored to meet complex business needs.",
    },
    {
      title: "API Development and Integration",
      desc: "Leverage our advanced SEO services to build and integrate powerful APIs, ensuring smooth data exchange and enhanced functionality across your enterprise systems.",
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
      desc: "Utilize our SEO solutions to create interactive data analytics dashboards, enabling real-time business insights and informed decision-making at the enterprise level.",
    },
    {
      title: "Enterprise E-Commerce Solutions",
      desc: "Elevate your online business with enterprise-grade e-commerce platforms developed by our website development company. These platforms feature advanced customization, security, and scalability.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "SEO Audit & Strategy",
      description:
        "Thorough audits & tailored search engine optimization strategies that unearth the potential for expansion.",
      icon: <FaSearch className="text-4xl" />,
    },
    {
      title: "On-Page SEO",
      description:
        "Along with keyword optimization, meta tags, structured data & internal linking is done for improved search visibility.",
      icon: <FaFileAlt className="text-4xl" />,
    },
    {
      title: "Off-Page SEO & Link Building",
      description:
        "Safety backlink purchase options that provide power and ranking are the features of services offered by us.",
      icon: <FaLink className="text-4xl" />,
    },
    {
      title: "Technical SEO",
      description:
        "Combined efforts of site speed, crawlability, mobile-friendliness, and indexation bring the technical upgrades to your website.",
      icon: <FaWrench className="text-4xl" />,
    },
    {
      title: "Local SEO",
      description:
        "City/region-specific optimization solutions are available for you as the SEO service provider in India.",
      icon: <FaMapMarkerAlt className="text-4xl" />,
    },
    {
      title: "Voice Search Optimization",
      description:
        "Prepare your website content for the growing voice search trend by focusing on conversational queries, natural language, and featured snippets.",
      icon: <FaMicrophone className="text-4xl" />,
    },
    {
      title: "E-Commerce SEO",
      description:
        "Optimize product pages, categories, and user experience for better visibility on search engines and higher conversions for online stores.",
      icon: <FaShoppingCart className="text-4xl" />,
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Blogs, articles, landing pages focusing on the best search engine optimization services for businesses.",
      icon: <FaPenFancy className="text-4xl" />,
    },
    {
      title: "SEO Monitoring & Reporting",
      description:
        "Collect data through analytics & monthly reports to observe the efficiency.",
      icon: <FaChartBar className="text-4xl" />,
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Increase Visibility",
      description:
        "Make presence known by getting on top of search results by utilizing SEO services in India and other Google rankings.",
      icon: <FaEye className="text-4xl" />,
    },
    {
      title: "Affordable Solutions",
      description:
        "If you are a startup, this is just the solution that you need. Our cost-effective SEO package is designed to help you grow within a budget.",
      icon: <FaMoneyBillWave className="text-4xl" />,
    },
    {
      title: "Drive Traffic & Leads",
      description:
        "By implementing the right SEO marketing strategies, the desired high-quality traffic and leads will be available for you.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Custom SEO Strategies",
      description:
        "By understanding your business and its strengths we craft a bespoke solution just for you.",
      icon: <FaPuzzlePiece className="text-4xl" />,
    },
    {
      title: "Trusted Agency",
      description:
        "A best SEO company in India with a history of accomplishing results is the one you should choose as your partner.",
      icon: <FaHandshake className="text-4xl" />,
    },
    {
      title: "Boost ROI",
      description:
        "Make the most of your returns by benefiting from our full range of services offered by our SEO agency in India.",
      icon: <FaChartLine className="text-4xl" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Goal Setting",
      description: "get to know your business, target market, and competitors",
    },
    {
      step: "Step 02",
      title: "Audit & Keyword Research",
      description:
        "Uncover areas to improve & concentrate on SEO keywords such as long-tail like custom search engine optimization strategies.",
    },
    {
      step: "Step 03",
      title: "Strategy Development",
      description:
        "Technical corrections, publication of content, link building, local SEO.",
    },
    {
      step: "Step 04",
      title: "Implementation",
      description:
        "Carry out the SEO services that include on-page SEO, off-page SEO, and content optimization.",
    },
    {
      step: "Step 05",
      title: "Monitoring & Optimization",
      description:
        "Regular upgrades, position tracking, and performance tuning.",
    },
    {
      step: "Step 06",
      title: "Reporting & Feedback",
      description:
        "Clear monthly reports; check out the share of profit and put new steps in motions.",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <div className="sticky inset-0">
        <Banner5
          title={
            <>
              <span className="text-blue-600">Search Engine Optimization</span>{" "}
              Services for Businesses
            </>
          }
          description="Capyngen is the best SEO company in India delivering cost-effective SEO solutions for startups, small businesses, and enterprises. Be the owner of the steady online success of yours with our skillful SEO services; get the visibility, traffic, and ROI that you desire."
          primaryBtnText="Get Free SEO Consultation"
          primaryBtnLink="#"
          image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <CardsSection
          heading="Our SEO Services"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg="bg-black border border-black transition-all duration-400"
          hoverBg=" hover:border-white"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height=""
        />
        <CardsSection
          heading="Features & Benefits"
          subheading=""
          services={cardsSectionData2}
          sectionBg="bg-black"
          cardBg="bg-gradient-to-br from-[#000]/90 to-gray-800/90 hover:bg-gradient-to-tl hover:-translate-y-1 transition-all ease-in-out shadow-xl shadow-gray-700/50 hover:shadow-white/30"
          headColor="text-white"
          hoverBg=" hover:bg-gray-700"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-72"
        />
        <HowWeWork heading="SEO Process" desc="" steps={steps} />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          buttonColor="bg-black hover:scale-105 hover:bg-white hover:text-black"
          buttonTextColor="text-white"
          title="Take Your Business to the Top of Search Results"
          description={[
            "Partner with Capyngen, the best SEO company in India, for measurable traffic, leads, and revenue growth.",
          ]}
          buttonText="Book Your Free SEO Consultation Today"
        />
        <TopRatedCompany
          title="Why Choose Capyngen as Your SEO Partner"
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "Proven Track Record",
                    text: "Delivering best SEO services for small businesses in India & enterprises.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Custom Strategies",
                    text: "Tailored custom search engine optimization strategies.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Affordable Packages",
                    text: "Affordable SEO solutions for startups.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Transparent Reporting",
                    text: "Clear insights on progress & ROI.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Dedicated Support",
                    text: "Real-time assistance from our SEO agency in India experts.",
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
          image={assets.whyChooseUs}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <TechnologiesCarousel
          title="SEO Technologies We Use"
          description="We create impactful digital experiences that help businesses grow. Our team blends creativity, strategy, and technology to craft innovative and user-friendly solutions."
          technologies={technologies}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default SEO;
