import { assets } from "../assets/assets";
import HowWeWork from "../components/HowWeWork";
import FAQSection2 from "../components/FAQSection2";
import useSplitTextAnimation from "../hooks/useSplitTextAnimation";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import TopRatedCompany from "../components/TopRatedCompany";
import Banner5 from "../components/Banner5";
import CardsSection from "../components/CardsSection";
import {
  FaSearch,
  FaFileAlt,
  FaLink,
  FaWrench,
  FaMapMarkerAlt,
  FaMicrophone,
} from "react-icons/fa";
import GetStarted from "../components/GetStarted";
import SeoStatsSection from "../components/SeoStatsSection";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";

const SEO = () => {
  const faqItems = [
    {
      question: "What is SEO?",
      answer:
        "Search Engine Optimization (SEO) is the process where you make your website more eye-catching to search engines to draw in more organic traffic of fair quality.",
    },
    {
      question: "Why is SEO important for my business?",
      answer:
        "SEO makes your website rank on the first page of various search engines, targeting the right audience, increasing the visitors, and thus sales or leads, providing better results according to your business model.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "Generally, the outcomes of SEO are seen within 3-6 months if the competition is moderate, the website is in good standing, and the strategy is sufficient.",
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer:
        "The main on-page SEO activities consist of content optimization and website structure, whereas off-page SEO generally refers to backlinks, social media, PR, and other external factors.",
    },
    {
      question: "What are keywords in SEO?",
      answer:
        "Keywords are the phrases searchers use. If you use the right keywords targeting, people looking for the information you provide will come across your website.",
    },
    {
      question: "How does content affect SEO?",
      answer:
        "High-quality, relevant content to the user's request tends to rank better, keeps users around longer, and eventually gets more links.",
    },
    {
      question: "What is link building in SEO?",
      answer:
        "Link building refers to the activity of connecting other websites' backlinks to your website with the objectives of authority, trust, and positioning in the search results are improved.",
    },
    {
      question: "What are meta tags?",
      answer:
        "Meta tags give clues to the search engine about the topic of a web page, the font used, and the title, description, and keywords.",
    },
    {
      question: "How does mobile optimization affect SEO?",
      answer:
        "Creating mobile-friendly websites is part of ensuring that users have a positive experience and rankings on the desktop and mobile are consequently higher as the search engines, give priority to the mobile-responsive sites.",
    },
    {
      question: "What is local SEO?",
      answer:
        "Local SEO assists businesses to be found effectively through local searches and then attracts the locality customers into the business.",
    },
    {
      question: "How do I track SEO performance?",
      answer:
        "Install Google Analytics, Google Search Console, and make use of other SEO software to check the traffic, ranking, and conversion completion.",
    },
    {
      question: "Can SEO guarantee #1 rankings on Google?",
      answer: `SEO does not guarantee top rankings quite simply, however, it visibly increases traffic and the chances of the website showing up in the top results of competitors in the search engine.`,
    },
    {
      question: "What is technical SEO?",
      answer:
        "Technical SEO means websites that load really fast, show the correct information to search engines by accessibility, can be easily indexed, are safely encrypted, and even allow search engines to deal with structured data.",
    },
    {
      question: "How often should SEO strategies be updated?",
      answer:
        "SEO is a very dynamic area where strategies, methods, and goals should be adapted to trends and changing algorithms which means in practice that a strategy always be updated periodically.",
    },
    {
      question: "Why choose a professional SEO company?",
      answer:
        "One like Capyngen has an SEO consultant and a team of professionals who deliver tailor-made solutions, ongoing SEO, and quantifying proofs that work for your business online growth and expansion.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Increase Visibility",
      description:
        "Make presence known by getting on top of search results by utilizing SEO services in India and other Google rankings.",
      icon: <FaSearch className="text-4xl" />,
    },
    {
      title: "Affordable Solutions",
      description:
        "If you are a startup, this is just the solution that you need. Our cost-effective SEO package is designed to help you grow within a budget.",
      icon: <FaFileAlt className="text-4xl" />,
    },
    {
      title: "Drive Traffic & Leads",
      description:
        "By implementing the right SEO marketing strategies, the desired high-quality traffic and leads will be available for you.",
      icon: <FaLink className="text-4xl" />,
    },
    {
      title: "Custom SEO Strategies",
      description:
        "By understanding your business and its strengths we craft a bespoke solution just for you.",
      icon: <FaWrench className="text-4xl" />,
    },
    {
      title: "Trusted Agency",
      description:
        "A best SEO company in India with a history of accomplishing results is the one you should choose as your partner.",
      icon: <FaMapMarkerAlt className="text-4xl" />,
    },
    {
      title: "Boost ROI",
      description:
        "Make the most of your returns by benefiting from our full range of services offered by our SEO agency in India.",
      icon: <FaMicrophone className="text-4xl" />,
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
  const cardsSectionImageData1 = [
    {
      title: "SEO Audit & Strategy",
      description:
        "Thorough audits & tailored search engine optimization strategies that unearth the potential for expansion.",
      image: assets.seo1,
      cardBg: "bg-blue-100",
    },

    {
      title: "On-Page SEO",
      description:
        "Along with keyword optimization, meta tags, structured data & internal linking is done for improved search visibility.",
      image: assets.seo2,
      cardBg: "bg-green-100",
    },
    {
      title: "Off-Page SEO & Link Building",
      description:
        "Safety backlink purchase options that provide power and ranking are the features of services offered by us.",
      image: assets.seo3,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Technical SEO",
      description:
        "Combined efforts of site speed, crawlability, mobile-friendliness, and indexation bring the technical upgrades to your website.",
      image: assets.seo4,
      cardBg: "bg-pink-100",
    },
    {
      title: "Local SEO",
      description:
        "City/region-specific optimization solutions are available for you as the SEO service provider in India.",
      image: assets.seo5,
      cardBg: "bg-purple-100",
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Blogs, articles, landing pages focusing on the best search engine optimization services for businesses.",
      image: assets.seo6,
      cardBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>Search Engine Optimization | Best SEO Company – Capyngen</title>
        <meta
          name="description"
          content="Rank higher with Capyngen’s search engine optimization services. We deliver on-page, off-page, and technical SEO to boost your visibility and organic growth."
        />
        <meta
          name="keywords"
          content="Search Engine Optimization | Best SEO Company – Capyngen"
        />
      </Helmet>
      <div className="lg:sticky inset-0">
        <Banner5
          title={
            <>
              <span className="text-3xl md:text-4xl">
                Boost Your Brand Visibility with{" "}
              </span>
              <br />
              <span className="text-blue-600">SEO Services</span>
            </>
          }
          description="Capyngen is the best SEO company in India delivering cost-effective SEO solutions for startups, small businesses, and enterprises. Be the owner of the steady online success of yours with our skillful SEO services; get the visibility, traffic, and ROI that you desire."
          primaryBtnText="Improve Your Website Rankings"
          primaryBtnLink="#"
          image={assets.seoHero}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <CardsSectionImage
          heading="Our SEO Services"
          subheading=""
          services={cardsSectionImageData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg=""
          textSize="text-md"
          hoverBg="hover:bg-gray-200"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Schedule a SEO Consultation"
          description={[
            "Learn the power of our SEO services in India which can bring you more visitors, enhance the sales, and offer you a return on investment that you can track.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <CardsSection
          heading="Features & Benefits"
          subheading=""
          services={cardsSectionData1}
          sectionBg="bg-gray-800"
          headColor="text-white"
          cardBg="bg-black border border-black transition-all duration-400"
          hoverBg=" hover:border-white"
          textColor="text-white"
          hoverTextColor=""
          textSize="text-md"
          height="h-72"
        />
        <FullSizeImageSection
          backgroundImage={assets.seoFullSize}
          title="Build your dream project with Capyngen"
          description="We help transform your ideas into powerful digital solutions with our expert web development services."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <SeoStatsSection />
        <HowWeWork heading="SEO Process" desc="" steps={steps} />
        <FullSizeImageSection
          backgroundImage={assets.seoFullSize2}
          title="Build your dream project with Capyngen"
          description="We help transform your ideas into powerful digital solutions with our expert web development services."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
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
          image={assets.seo7}
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Take Your Business to the Top of Search Results"
          description={[
            "Partner with Capyngen, the best SEO company in India, for measurable traffic, leads, and revenue growth.",
          ]}
          buttonText="Book Your Free SEO Consultation Today"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default SEO;
