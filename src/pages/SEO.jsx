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
      question: "What is SEO and why is it important for my business?",
      answer:
        "SEO (Search Engine Optimization) is a tool that can lead your website to real, or organic, traffic if it is properly implemented, and this is quite a powerful tool for businesses as it nearly doubles their customer base. In a few words, SEO makes your website be able to appear on the first pages of search engines which automatically means that more people will visit your site and some of these will turn out to be your potential customers.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "Usually, the first SEO outcomes are seen within 3 to 6 months. But the timeframe of success largely depends on competition, website health, and the quality of the content produced.",
    },
    {
      question: "Do you provide on-page and off-page SEO?",
      answer:
        "Yes, we offer a complete on-page (content, meta tags, structure) and off-page (backlinks, social signals) SEO service reaching every aspect of your website.",
    },
    {
      question: "Can you optimize my website for local searches?",
      answer:
        "Definitely, Local SEO is one of our core strengths and we can help you gain more local visitors by making sure your website is easily discoverable for local searches.",
    },
    {
      question: "What industries do you provide SEO services for?",
      answer:
        "We take on SEO projects from all industries, including the likes of e-commerce, healthcare, finance, education, travel, and many more.",
    },
    {
      question: "Will SEO improve my website’s traffic?",
      answer:
        "SEO is definitely the key to your website becoming more visible on the web and as a result, the number of visitors will be organically increased.",
    },
    {
      question: "Do you provide keyword research services?",
      answer:
        "SURE! Keyword research is a major part of our services. We try to find those top-performing keywords in each niche, that would be generally easy to rank for, yet would bring in the largest search volume.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We look at different key figures like number of visits, keyword rankings, average time on site, bounce rate, and conversion rate to name a few.",
    },
    {
      question: "Is SEO a one-time service or ongoing?",
      answer:
        "SEO is a continuous improvement journey in which the possibility of a sudden drop in rankings can always be there. It is very important that, even after moving up the ranks, ranking positions are constantly maintained, engine updates are always taken into consideration and competitors are constantly kept at bay.",
    },
    {
      question: "Can you optimize my website for mobile SEO?",
      answer:
        "Yes, we work on the mobile version of your website to make sure that it is easy to access, loads quickly, looks good, and works well on mobile devices, and so your website ranks higher in mobile searches.",
    },
    {
      question: "Do you provide SEO-friendly content creation?",
      answer:
        "We have teams of writers who create content around specific keywords, and this content is engaging and also meets the SEO requirements of search engines like Google. These contents could be in blogs, websites, product pages, etc.",
    },
    {
      question: "Will my website be penalized by Google during SEO?",
      answer: `No, we only adopt "white-hat" SEO techniques which are completely in line with Google's guidelines aimed at safe optimizations, thus, never resulting in penalties.`,
    },
    {
      question: "Do you provide SEO for e-commerce websites?",
      answer:
        "Of course, we assist e-commerce websites with SEO in a number of aspects such as product pages and category pages optimization, and the addition of structured data to make e-commerce SEO more friendly for search engines.",
    },
    {
      question: "Can you fix my existing website’s SEO issues?",
      answer:
        "Yeah, we check the complete health of your website, figure out the performance barriers, and suggest the easiest and fastest ways to the solution that will increase the ranking of your site.",
    },
    {
      question: "Do you offer SEO reporting and analytics?",
      answer:
        "Yes, the SEO reports we produce are based on routine work done on ranking positions, traffic, and performance metrics.",
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
