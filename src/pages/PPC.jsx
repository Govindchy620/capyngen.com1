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
import Banner3 from "../components/Banner3";
import Banner8 from "../components/Banner8";
import GetStarted from "../components/GetStarted";
import {
  FaCheckCircle,
  FaDraftingCompass,
  FaExchangeAlt,
  FaRocket,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/ppc#webpage",
  url: "https://www.capyngen.com/ppc",
  name: "PPC Management Services | Capyngen",
  description:
    "Capyngen helps brands grow through innovative digital marketing, website design, e-commerce development, and data-driven strategies tailored for success.",
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://www.instagram.com/capyngen",
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Pay-Per-Click (PPC) Advertising Services",
    serviceType: "PPC Campaign Management",
    provider: {
      "@type": "Organization",
      name: "Capyngen",
      url: "https://www.capyngen.com",
    },
    areaServed: {
      "@type": "Place",
      name: "Global",
    },
    description:
      "Capyngen delivers data-driven PPC advertising solutions for Google Ads, Bing, Meta, and YouTube. Our certified experts optimize ad spend and boost lead generation for businesses worldwide.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "PPC Service Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Google Ads Management",
          description:
            "Comprehensive Google Ads setup, optimization, and reporting for better conversions.",
        },
        {
          "@type": "Offer",
          name: "YouTube Ads Campaigns",
          description:
            "Video-based ad strategy and targeting for brand awareness and audience engagement.",
        },
        {
          "@type": "Offer",
          name: "Bing & Display Ads",
          description:
            "Cross-platform ad management to expand your digital reach.",
        },
      ],
    },
  },
  inLanguage: "en",
  isPartOf: {
    "@type": "WebSite",
    url: "https://www.capyngen.com",
    name: "Capyngen",
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Pay-Per-Click (PPC) Advertising Services",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    sameAs: [
      "https://www.facebook.com/capyngen",
      "https://www.instagram.com/capyngen",
      "https://www.linkedin.com/company/capyngen",
      "https://twitter.com/capyngen",
    ],
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  url: "https://www.capyngen.com/ppc",
  description:
    "Capyngen offers result-driven PPC services designed to boost your online visibility, generate leads, and increase ROI through targeted Google Ads, YouTube Ads, and social media campaigns.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PPC Advertising Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
          description:
            "Comprehensive Google Ads management to optimize search, display, and shopping campaigns for maximum conversions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "YouTube Video Advertising",
          description:
            "Create and manage YouTube ad campaigns to increase brand reach and engagement with targeted video ads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media PPC Campaigns",
          description:
            "Run paid ads across Facebook, Instagram, and LinkedIn to boost engagement and generate high-quality leads.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "PPC Audit and Optimization",
          description:
            "Detailed audits and performance tracking to ensure efficient ad spend and improve ROI on all active campaigns.",
        },
      },
    ],
  },
  image: "https://www.capyngen.com/assets/ppc1-HKkEwlmX.png",
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is PPC advertising?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPC (Pay-Per-Click) advertising is a model where advertisers pay a fee each time their ad is clicked. It’s a fast and measurable way to drive targeted traffic to your website.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I invest in PPC services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPC provides instant visibility on search engines and social platforms, delivering faster results than organic marketing. It’s ideal for lead generation and brand awareness.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms do you manage PPC campaigns on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Capyngen manages PPC campaigns across Google Ads, YouTube, Facebook, Instagram, and LinkedIn — optimized for your industry and audience.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure PPC campaign success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track key performance indicators like CTR, conversion rate, cost-per-acquisition, and ROI. Our reports give full visibility into campaign performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free PPC audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Capyngen offers a free 30-day PPC trial and initial audit to analyze your current campaigns and identify improvement opportunities.",
      },
    },
  ],
};

const PPC = () => {
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

  const solutionsData = [
    {
      title: "Google Ads Management",
      desc: (
        <>
          <p>
            We create and implement Google Ads pay per click, which brings
            specific visitors and maximises the return on investment.
          </p>
          <p className="py-5">
            The following are services that we offer in the google ppc agency:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Search Ads (intent-based searches)</li>
            <li>Display Ads (brand visibility)</li>
            <li>Shopping Ads (to e-commerce stores)</li>
            <li>Video Ads (on YouTube)</li>
            <li>Remarketing Ads (to re-appeal to lost visitors)</li>
          </ul>
        </>
      ),
    },
    {
      title: "Social Media PPC Advertising",
      desc: (
        <>
          <p>
            Customers can be found mostly on social media sites. With our social
            media advertisement campaigns, the brands can achieve the right
            audience using the ppc marketing agency knowledge.
          </p>
          <p className="py-5">Our strengths are the following platforms:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Facebook &amp; Instagram Ads</li>
            <li>LinkedIn Ads (b2b is the best fit)</li>
            <li>Twitter (X) Ads</li>
            <li>TikTok Ads</li>
            <li>Influencer-supported promotions</li>
          </ul>
        </>
      ),
    },
    {
      title: "PPC Management Services",
      desc: (
        <>
          <p>
            It is not a matter of just having ads, but the optimisation makes
            the difference. With our ppc management services, you are confident
            of having your campaigns in their best.
          </p>
          <p className="py-5">We handle:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Keyword research &amp; targeting</li>
            <li>Ad copy creation &amp; A/B testing</li>
            <li>Bid strategy optimisation</li>
            <li>Landing page optimization</li>
            <li>Conversion tracking/reporting</li>
          </ul>
        </>
      ),
    },
    {
      title: "E-commerce PPC Advertising",
      desc: (
        <>
          <p>
            In online stores, pay-per-click (PPC) advertising campaign is now
            vital, as far as survival is concerned. Through Best ppc services in
            India, we assist e-commerce brands to make more sales by attracting
            and re-marketing their audience well.
          </p>
          <p className="py-5">
            E-commerce PPC package that we present to the table include:
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li>Google Shopping Ads</li>
            <li>Amazon PPC</li>
            <li>Retargeting of products dynamically</li>
            <li>
              Paid advertising in the marketplace (Flipkart, Myntra, etc.)
            </li>
          </ul>
        </>
      ),
    },
  ];

  const steps = [
    {
      step: "Step 01",
      title: "Business Analysis",
      description: "Breaking down your goals, market and your competition.",
    },
    {
      step: "Step 02",
      title: "Keyword Research",
      description: "Obtaining low-cost and high-converting keywords.",
    },
    {
      step: "Step 03",
      title: "Campaign Setup",
      description: "Campaign design involves ad groups, targeting and bidding.",
    },
    {
      step: "Step 04",
      title: "Ad Creation",
      description: "A beautiful blend of the promotion text with graphics.",
    },
    {
      step: "Step 05",
      title: "Launch & Monitoring",
      description:
        "With real-time monitoring, it is possible to implement campaigns and monitor them at the same time.",
    },
    {
      step: "Step 06",
      title: "Optimisation",
      description:
        "Revision of the bids, targeting and creatives based on the performance attained as Top ppc ad expert in India.",
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle className="w-10 h-10 text-blue-500" />,
      title: "Expert Team",
      description:
        "The fields where our professionals have acquired their certifications are Google Ads pay per click and Meta Ads.",
    },
    {
      icon: <FaDraftingCompass className="w-10 h-10 text-blue-500" />,
      title: "Personalized Strategies",
      description:
        "The ever-customised campaigns to suit your needs by the Google ppc agency.",
    },
    {
      icon: <FaRocket className="w-10 h-10 text-blue-500" />,
      title: "Results Measured by Data",
      description: "Decision-making using analytics alone.",
    },
    {
      icon: <FaExchangeAlt className="w-10 h-10 text-blue-500" />,
      title: "Comprehensive Performance Measures",
      description:
        "Observe regular reports in easy-to-understand charts and tables on ROI.",
    },
  ];

  const cardsSectionImageData1 = [
    {
      title: "SEO",
      description: "An incremental process that builds credibility.",
      image: assets.ppc6,
      cardBg: "bg-blue-100",
    },
    {
      title: "Social Media Marketing",
      description:
        "Good brand awareness, but might not necessarily translate to immediate gain.",
      image: assets.ppc7,
      cardBg: "bg-pink-100",
    },
    {
      title: "PPC Marketing",
      description:
        "Makes real-time customer contacts and offers accountable ROI with ppc management services.",
      image: assets.ppc8,
      cardBg: "bg-pink-100",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Pay-Per-Click Advertising Company in India | Best PPC Services
        </title>
        <meta
          name="description"
          content="Capyngen offers expert pay-per-click advertising in India with data-driven PPC strategies to increase traffic, leads, and conversions."
        />
        <meta
          name="keywords"
          content="Pay-Per-Click Advertising | ROI-Driven Ad Campaigns"
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
        <Banner8
          titleMain="Pay-Per-Click Advertising Services"
          titlePrefix=""
          titleSuffix="That Drive Instant Results"
          description={
            <>
              <p className="text-sm md:text-lg">
                The necessity of fast and high-quality leads is the primary
                concern of any organisation to emerge in the digital market of
                the modern world. Even though the best seo services and SEO are
                successful in the long term, businesses still need visibility
                that is immediate and that they can measure their return on
                investment. The case is simply that Pay-Per-Click Advertising
                (PPC) would serve as a remedy for a ppc marketing agency.​
              </p>
              <p className="text-sm md:text-lg">
                As the leading google ppc agency, we are the professionals in
                accomplishing Pay-Per-Click Advertising (PPC) ad campaigns that
                succeed and introduce the appropriate pool of visitors, trigger
                the leads and establish grounds to proceed with the conversions
                further by utilizing ppc services. Whether you are a startup or
                an existing brand, the pay per click services offered to you by
                our Pay-per-Click Advertising (PPC) are avenues that can help
                you to stay ahead of your competitors as a pay per click
                marketing agency.​
              </p>
            </>
          }
          imageSrc={assets.ppc1}
          imageAlt="Pay-Per-Click Advertising Company in India | Best PPC Services"
          bgColor="bg-gray-900"
          iconColor="bg-blue-700"
          reverse={false}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <TopRatedCompany
          title="What is Pay-Per-Click Advertising?"
          description={[
            <>
              <p>
                Pay-per-Click is an online advertising platform in which
                marketers pay a fee as long as their advertisement is clicked.
                By doing this, businesses would not only appear on the search
                engine but also on the social media platform, thereby gaining
                visitors and possible customers without necessarily relying on
                the organic results using ppc management services.
              </p>
              <p className="pt-4">
                Part of the key contenders of the PPC package are:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-4 text-gray-300">
                {[
                  {
                    title:
                      "Google Ads pay per click advertisement (Search, Display, Shopping, YouTube).",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "Microsoft Ads (Bing Ads)",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "Meta Ads (Facebook and Instagram ads).",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "LinkedIn Sponsored Content",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "Twitter (X) Ads",
                    text: "",
                    color: "text-blue-500",
                  },
                  {
                    title: "E-commerce Advertisements (Amazon, Flipkart, etc.)",
                    text: "",
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
                    {text}
                  </li>
                ))}
              </ul>
              <p className="pt-4">
                The ideal pay per click ads management services enable you to
                bring the appropriate message to the appropriate audience at the
                appropriate time using Best ppc services in India.​
              </p>
            </>,
          ]}
          image={assets.ppc2}
          alt="Pay-Per-Click Advertising Company in India | Best PPC Services"
          background={assets.patternBg1}
          isHidden="hidden"
        />
        <FullSizeImageSection
          backgroundImage={assets.ppcFullSize}
          title="Maximize ROI with smart PPC campaigns"
          description="Through the process of running data-driven Ads, we can convert the traffic of clients to flow of money to the clients adopting Top ppc ad expert in India strategies."
          buttonText="Start Campaign"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <TopRatedCompany
          title="Why Choose Pay-Per-Click Marketing?"
          reverse={true}
          description={[
            <>
              <p>
                In case, you would like to understand why businesses would
                invest so much in pay per click marketing, this is the case with
                our ppc services:
              </p>
              <p className="pt-4">
                These are some of the primary Pay-Per-Click Advertising (PPC)
                sites:
              </p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto mt-4 text-gray-300">
                {[
                  {
                    title: "Immediate Publicity",
                    text: "Be top of Google in a few hours.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Very Niche Campaigns",
                    text: "Advertisements can be listed based on keyword, demographic, interests, and behavior.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Budget Control",
                    text: "It is your own decision on how much money you will use per day, week or month.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Measurable ROI",
                    text: "All the clicks, impressions and conversions are measurable.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Improved Conversion",
                    text: "Pay-Per-Click Advertising (PPC) advertisement targets individuals who have already shown interest in your product/service.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Scalable Marketing",
                    text: "Start small and add more and more campaigns as they prove to be successful.",
                    color: "text-blue-500",
                  },
                  {
                    title: "Competitive Advantage",
                    text: "Be at the top before the search results comes to your rivals.",
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
                    - {text}
                  </li>
                ))}
              </ul>
              <p className="pt-4">
                That is why the pay per click services can be discussed as the
                most effective paid marketing services.​
              </p>
            </>,
          ]}
          image={assets.ppc3}
          alt="Pay-Per-Click Advertising Company in India | Best PPC Services"
          background={assets.patternBg1}
          isHidden="hidden"
        />
        <BenefitsSection
          heading="Our Pay-Per-Click Advertising Services"
          desc="Being a ppc management services company and a result-oriented company, we offer comprehensive paid advertising that is results-oriented and is fully tailored to achieve the objectives of your business as a Digital marketing company in Gurgaon."
          benefits={solutionsData}
          image={assets.ppc4}
          footerNote=""
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Remarketing & Retargeting Campaigns"
          description={[
            "The majority of visitors do not buy anything or convert the first time they come there. Our remarketing programs will continue to bring them back until they decide to purchase or initiate contact with you through pay per click ads.",
            "Therefore, you can always be in contact with the leads that are the most important to you.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="How We Develop Custom AI Solutions"
          desc=""
          steps={steps}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Benefits of Working With a PPC Company"
          description={[
            "Working with an experienced Pay-Per-Click Advertising (PPC) company, you will not worry about receiving the expert recommendations, the maximum profit, and a competitive advantage over competitors in the form of pay per click marketing agency.",
            <>
              <p>The advantages associated with it include:</p>
              <ul className="list-disc list-inside space-y-4 text-lg max-w-3xl mx-auto my-4 ">
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  You have certified ppc services at your disposal.
                </li>
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  The industry and analytics: the most effective tools.
                </li>
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  The exchange rates increase.
                </li>
                <li
                  className={`hover:scale-105 transition-transform duration-300 cursor-default relative pl-4`}
                >
                  Wasteful expenditure on advertisements is reduced.
                </li>
              </ul>
              <p>
                In addition, returns on investment are greater since there is
                constant optimization.​
              </p>
            </>,
          ]}
          image={assets.ppc5}
          alt="Pay-Per-Click Advertising Company in India | Best PPC Services"
        />
        <FullSizeImageSection
          backgroundImage={assets.ppcFullSize2}
          title="Get instant visibility online"
          description="The targeted pay per click advertising strategy aims at generating traffic and interested leads in the product or service being advertised."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <WhyChoose
          heading="Why Choose  Us"
          intro="Proven Experience -Unknown Success in executing up to 10K+ Pay-Per-Click Advertising (PPC) campaigns."
          features={features}
        />
        <CardsSectionImage
          heading="Pay-Per-Click Advertising vs. Other Promotion Channels"
          subheading={
            <>
              <p>
                Although tools such as SEO, content production, and social media
                are effective in the long term, Pay-Per-Click Advertising (PPC)
                would give agility and precision of focus that no other tool
                will give a Digital marketing company in Gurgaon. A combination
                of Pay-Per-Click Advertising (PPC) + SEO + Social Media is the
                most potent digital strategy.
              </p>
            </>
          }
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
          title="Conclusion"
          description={[
            "However, in the digital space, one cannot afford to wait months before getting results. This is, however, the fact that lots of businesses use pay per click services campaigns; it allows them to get an immediate exposure, precise targeting, and ROI can be measured.",
            "Whether you are a small company or a large corporation, our ppc services will enable you be able to think big and implement Pay-Per-Click Advertising (PPC) ad campaigns that will help you grow your business significantly.",
            <>
              <a
                href="https://www.capyngen.com/cybersecurity"
                className="font-bold text-blue-500"
              >
                Cybersecurity
              </a>
              -protected platforms ensure safe transactions while our{" "}
              <a
                href="https://www.capyngen.com/ecommerce-design"
                className="text-blue-500 font-bold"
              >
                E commerce Services
              </a>{" "}
              complement PPC for online stores.
            </>,
            "In case you are seeking a reputable pay per click advertising company that will provide high-quality pay per click marketing agency in India and other parts of the world, then you have arrived at the right destination.",
          ]}
          backgroundVideo={assets.backgroundVideo}
        />
        {/* <FAQSection2 items={faqItems} /> */}
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default PPC;
