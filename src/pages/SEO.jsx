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
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/seo#webpage",
  url: "https://www.capyngen.com/seo",
  name: "Best SEO Company in India | Professional AI SEO Services",
  description:
    "Capyngen is the best SEO company in India providing professional SEO services like technical SEO, on-page SEO, off-page SEO, local SEO near you. :contentReference[oaicite:0]{index=0}",
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
  "@id": "https://www.capyngen.com/seo#service",
  name: "Search Engine Optimization (SEO) Services",
  serviceType:
    "SEO,ON PAGE SEO,OFF PAGE SEO,AI+SEO,TECHNICAL SEO, Search Engine Optimization, Organic Search Optimization",
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
    "Capyngen is the best SEO company in India providing professional SEO services like technical SEO, on-page SEO, off-page SEO, local SEO near you.([capyngen.com/seo](https://www.capyngen.com/seo))",
  url: "https://www.capyngen.com/seo",
  image: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/seoHero-B9XLly_w.png",
    caption: "SEO Services – Capyngen",
  },
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
      name: "What is Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process of making your webpage more attractive to search engine to attract more organic traffic of acceptable quality is known as Search Engine Optimization (SEO).",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of Search Engine Optimization (SEO) to my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By the best seo agency, SEO services India will ensure that your site is on the first page of different search engines, with the right people to see your site, with increased visitors and consequently sales or leads and all this in accordance with your business model by best seo agency.",
      },
    },
    {
      "@type": "Question",
      name: "What is the duration of seeing the results of Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a rule, the results of SEO services can be observed in 3-6 months in case of the mediocre competition, good health of the website, and adequacy of the strategy provided by seo company in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "So what is the difference between online and offline SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content optimization and web structure are the primary on-page SEO services activities, but the activities of off-page SEO typically imply backlinks, social media, PR, and other external circumstances by seo services in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "What are the keywords in search engine optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The phrases that searchers utilise are known as keywords. The right keyword targeting will mean that people who have to find the information that you give will find your site through the best SEO services.",
      },
    },
    {
      "@type": "Question",
      name: "What roles do contents play in Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Content that is of high quality and is relevant to what the user is requesting will perform better in ranking, as well as make the user stay longer and ultimately get more links with seo company in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is link building in Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Link building is the process of connecting other websites to your website to gain power, trust, and ranking among the search results are enhanced by an SEO service provider in India.",
      },
    },
    {
      "@type": "Question",
      name: "What are meta tags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta tags also provide hints to the search engine on the subject of a web page, fonts used and the title, description, and keywords that are optimized by the best SEO company in India.",
      },
    },
    {
      "@type": "Question",
      name: "What is the impact of mobile optimization on Search Engine Optimization (SEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Designing websites to be user-friendly through mobile devices is also under the design of ensuring that the user experiences are positive, and the desktop and mobile rankings are thus higher since the search engines prioritise the mobile-friendly sites through the seo agency India.",
      },
    },
    {
      "@type": "Question",
      name: "What is local SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The local SEO services helps businesses to be located in an efficient way in local searches and it then brings local customers to the business brought about by the seo services India.",
      },
    },
    {
      "@type": "Question",
      name: "What is Search Engine Optimization (SEO) performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Install Google Analytics, Google Search and utilise other SEO services software to monitor the traffic, ranking and conversion completion of the Top Digital marketing company.",
      },
    },
    {
      "@type": "Question",
      name: "Does Search engine optimization (SEO) ensure the number one ranking in Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO services do not assure top rankings quite easily, but it visually raises the traffic and the likelihood of the site appearing in the highest results of competitors in the search engine by using ppc services provider.",
      },
    },
    {
      "@type": "Question",
      name: "What is techno SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical SEO services imply that the websites are incredibly fast in their loading, present the appropriate information to the search engine due to accessibility, can be easily indexed, securely encrypted, and even permit the search engines to work with structured data provided by the seo company in Gurgaon.",
      },
    },
    {
      "@type": "Question",
      name: "What should the frequency of Search engine optimization (SEO) be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a highly dynamic field as the strategy, techniques, and objectives are to be adjusted according to trends and altering algorithms that implies in the real world that a strategy is regularly revised by the best seo agency.",
      },
    },
    {
      "@type": "Question",
      name: "Why should it be a professional SEO company in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One similar to Capyngen possesses an SEO consultant and a team of experts that provide custom-made SEO services, continuous Search Engine Optimization (SEO), and measurable evidences that can work in your business development and growth online.",
      },
    },
  ],
};

const SEO = () => {
  const faqItems = [
    {
      question: "What is Search Engine Optimization (SEO)?",
      answer:
        "The process of making your webpage more attractive to search engine to attract more organic traffic of acceptable quality is known as Search Engine Optimization (SEO).",
    },
    {
      question:
        "What is the importance of Search Engine Optimization (SEO) to my business?",
      answer:
        "By the best seo agency, SEO services India will ensure that your site is on the first page of different search engines, with the right people to see your site, with increased visitors and consequently sales or leads and all this in accordance with your business model by best seo agency.",
    },
    {
      question:
        "What is the duration of seeing the results of Search Engine Optimization (SEO)?",
      answer:
        "As a rule, the results of SEO services can be observed in 3-6 months in case of the mediocre competition, good health of the website, and adequacy of the strategy provided by seo company in Gurgaon.",
    },
    {
      question:
        "So what is the difference between online and offline SEO services?",
      answer:
        "Content optimization and web structure are the primary on-page SEO services activities, but the activities of off-page SEO typically imply backlinks, social media, PR, and other external circumstances by seo services in Gurgaon.",
    },
    {
      question: "What are the keywords in search engine optimization (SEO)?",
      answer:
        "The phrases that searchers utilise are known as keywords. The right keyword targeting will mean that people who have to find the information that you give will find your site through the best SEO services.",
    },
    {
      question:
        "What roles do contents play in Search Engine Optimization (SEO)?",
      answer:
        "Content that is of high quality and is relevant to what the user is requesting will perform better in ranking, as well as make the user stay longer and ultimately get more links with seo company in India.",
    },
    {
      question: "What is link building in Search Engine Optimization (SEO)?",
      answer:
        "Link building is the process of connecting other websites to your website to gain power, trust, and ranking among the search results are enhanced by an SEO service provider in India.",
    },
    {
      question: "What are meta tags?",
      answer:
        "Meta tags also provide hints to the search engine on the subject of a web page, fonts used and the title, description, and keywords that are optimized by the best SEO company in India.",
    },
    {
      question:
        "What is the impact of mobile optimization on Search Engine Optimization (SEO)?",
      answer:
        "Designing websites to be user-friendly through mobile devices is also under the design of ensuring that the user experiences are positive, and the desktop and mobile rankings are thus higher since the search engines prioritise the mobile-friendly sites through the seo agency India.",
    },
    {
      question: "What is local SEO services?",
      answer:
        "The local SEO services helps businesses to be located in an efficient way in local searches and it then brings local customers to the business brought about by the seo services India.",
    },
    {
      question: "What is Search Engine Optimization (SEO) performance?",
      answer:
        "Install Google Analytics, Google Search and utilise other SEO services software to monitor the traffic, ranking and conversion completion of the Top Digital marketing company.",
    },
    {
      question:
        "Does Search engine optimization (SEO) ensure the number one ranking in Google?",
      answer:
        "SEO services do not assure top rankings quite easily, but it visually raises the traffic and the likelihood of the site appearing in the highest results of competitors in the search engine by using ppc services provider.",
    },
    {
      question: "What is techno SEO services?",
      answer:
        "Technical SEO services imply that the websites are incredibly fast in their loading, present the appropriate information to the search engine due to accessibility, can be easily indexed, securely encrypted, and even permit the search engines to work with structured data provided by the seo company in Gurgaon.",
    },
    {
      question:
        "What should the frequency of Search engine optimization (SEO) be?",
      answer:
        "SEO is a highly dynamic field as the strategy, techniques, and objectives are to be adjusted according to trends and altering algorithms that implies in the real world that a strategy is regularly revised by the best seo agency.",
    },
    {
      question: "Why should it be a professional SEO company in India?",
      answer:
        "One similar to Capyngen possesses an SEO consultant and a team of experts that provide custom-made SEO services, continuous Search Engine Optimization (SEO), and measurable evidences that can work in your business development and growth online.",
    },
  ];
  const cardsSectionData1 = [
    {
      title: "Increase Visibility",
      description:
        "Become visible by appearing on top of search results through the use of SEO services in India and other Google rankings of the top digital marketing company.",
      icon: <FaSearch className="text-4xl" />,
    },
    {
      title: "Affordable Solutions",
      description:
        "This is the right solution that you need in case you are a startup. Our affordable SEO services package would enable you to expand at a manageable cost.",
      icon: <FaFileAlt className="text-4xl" />,
    },
    {
      title: "Drive Traffic & Leads",
      description:
        "Through proper SEO marketing strategies, you will have the intended quality traffic and leads through ppc services provider.",
      icon: <FaLink className="text-4xl" />,
    },
    {
      title: "Custom SEO Strategies",
      description:
        "Knowing your business and business strength, we develop a unique solution that fits only you as seo company in Gurgaon.",
      icon: <FaWrench className="text-4xl" />,
    },
    {
      title: "Trusted Agency",
      description:
        "A seo agency India company partner should be a firm that has a track record of achieving its objectives in the field of seo.",
      icon: <FaMapMarkerAlt className="text-4xl" />,
    },
    {
      title: "Boost ROI",
      description:
        "Optimise your returns and enjoy all the services that our SEO agency in India has to offer.",
      icon: <FaMicrophone className="text-4xl" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Goal Setting",
      description:
        "understand your business, target audience and your competitors.",
    },
    {
      step: "Step 02",
      title: "Audit & Keyword Research",
      description:
        "Identify areas to be developed and focus on SEO keywords, such as custom Search Engine Optimization (SEO) strategies that the best seo agency uses.",
    },
    {
      step: "Step 03",
      title: "Strategy Development",
      description:
        "Technical adjustments, content publication, link building, and local SEO by seo service provider in India.",
    },
    {
      step: "Step 04",
      title: "Implementation",
      description:
        "Provide the SEO services comprising the on-page SEO, the off-page SEO, and the content optimization by seo services in Gurgaon.",
    },
    {
      step: "Step 05",
      title: "Monitoring & Optimization",
      description:
        "Frequent updates, location tracking, and performance optimization.",
    },
    {
      step: "Step 06",
      title: "Reporting & Feedback",
      description:
        "Clearly written monthly reports; verify the percentage of profit and place new measures in the motions with best SEO services.",
    },
  ];
  const cardsSectionImageData1 = [
    {
      title: "SEO Audit & Strategy",
      description:
        "Detailed auditing and customised Search Engine Optimization (SEO) solutions that unlock the prospects of growth with the help of seo agency India knowledge.",
      image: assets.seo1,
      cardBg: "bg-blue-100",
    },

    {
      title: "On-Page SEO",
      description:
        "Meta tags, structured data and internal linking are also performed along with optimization of keywords so that the seo company in Gurgaon is well portrayed in search results.",
      image: assets.seo2,
      cardBg: "bg-green-100",
    },
    {
      title: "Off-Page SEO & Link Building",
      description:
        "The features of services that we offer as the best seo agency are safe backlink purchase options, which offer power and ranking.",
      image: assets.seo3,
      cardBg: "bg-yellow-100",
    },
    {
      title: "Technical SEO",
      description:
        "The technical upgrades of your site include combined efforts in terms of site speed, crawlability, mobile-friendliness, and indexation through seo services in Gurgaon.",
      image: assets.seo4,
      cardBg: "bg-pink-100",
    },
    {
      title: "Local SEO",
      description:
        "As the SEO service provider in India, you can have solutions based on city/region optimization.",
      image: assets.seo5,
      cardBg: "bg-purple-100",
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Blogs, articles, and landing pages with the best SEO services to businesses of seo company in India.",
      image: assets.seo6,
      cardBg: "bg-red-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>Best SEO Company in India | Professional AI SEO Services</title>
        <meta
          name="description"
          content="Capyngen is the best SEO company in India providing professional SEO services like technical SEO, on-page SEO, off-page SEO, local SEO near you."
        />
        <meta
          name="keywords"
          content="Search Engine Optimization | Best SEO Company – Capyngen"
        />
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
          description={
            <>
              Capyngen is the best SEO company in India that provides affordable
              search engine optimization services to startups, small businesses,
              and enterprises. Make the online success of your steadfast with
              our expertise Search Engine Optimization (SEO) services; acquire
              the visibility, traffic and ROI of the kind that you seek with the
              services of seo services india and best SEO services.​ Complement
              your strategy with{" "}
              <a
                href="https://www.capyngen.com/smm"
                className="text-blue-500 font-bold"
              >
                Social Media Marketing (SMM)
              </a>{" "}
              for maximum reach.
            </>
          }
          primaryBtnText="Improve Your Website Rankings"
          primaryBtnLink="/contact-us"
          image={assets.seoHero}
          alt="Best SEO Company in India | Professional AI SEO Services"
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
            "Discover the strength of our online SEO services in India that can make you receive more visitors, increase sales, and provide you with the favorable payback on the investment that you can follow with the help of the best SEO company in India.",
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
          title="Rank higher, reach further"
          description="Through Search Engine Optimization (SEO) best practices, we do all that the search engines do with your site to increase the exposure level, traffic and purchases."
          buttonText="Improve Ranking"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <SeoStatsSection />
        <HowWeWork heading="SEO Process" desc="" steps={steps} />
        <FullSizeImageSection
          backgroundImage={assets.seoFullSize2}
          title="Let your brand be found first"
          description="And improve your ranking in the search list using proven and best search engine optimization (SEO) in seo company in India."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TopRatedCompany
          title={
            <span>
              Why Choose <Link to={"/"}>Capyngen</Link> as Your SEO Partner
            </span>
          }
          description={[
            <>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-8 text-gray-300">
                {[
                  {
                    title: "Established History",
                    text: "The company has a history of providing best SEO services to small companies in India and companies.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Custom Strategies",
                    text: "Custom Tailored Search Engine Optimization (SEO) strategies.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Affordable Packages",
                    text: (
                      <>
                        Affordable SEO solutions for start-ups by the Top
                        <a
                          href="https://www.capyngen.com/digital-marketing"
                          className="text-blue-500 font-bold"
                        >
                          Digital marketing company
                        </a>
                        .
                      </>
                    ),
                    color: "text-blue-500",
                  },
                  {
                    title: "Open Reporting",
                    text: "Understand the progress and ROI.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Dedicated Support",
                    text: "Real-time support of our SEO agency in India professionals through ppc services provider.",
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
          alt="Best SEO Company in India | Professional AI SEO Services"
          isHidden="hidden"
          imageHeight="aspect-[4/3] md:aspect-[1/1]"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Take Your Business to the Top of Search Results"
          description={[
            "Get the best SEO company in India, Capyngen, to partner with so as to achieve measurable growth in traffic, leads, and revenue by use of seo services India.",
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
