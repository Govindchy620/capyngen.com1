import React from "react";
import Banner11 from "../components/Banner11";
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
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import {
  FaBullhorn,
  FaChartLine,
  FaDollarSign,
  FaHeart,
  FaRocket,
  FaShieldAlt,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import FullSizeImageSection from "../components/FullSizeImageSection";
import { Link } from "react-router-dom";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capyngen.com/digital-marketing#webpage",
  url: "https://www.capyngen.com/digital-marketing",
  name: "Company Overview | Capyngen – Empowering Brands with Digital Excellence",
  description:
    "Capyngen is a full-service digital marketing and technology agency driven by creativity, innovation, and results. From SEO and web development to performance marketing and branding — we help businesses grow smarter and faster. Discover our story, values, and vision that power success.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.capyngen.com/#website",
    name: "Capyngen",
    url: "https://www.capyngen.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
      width: 250,
      height: 80,
    },
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://www.capyngen.com/assets/seoAndContent-DdAby_d6.png",
    width: 1200,
    height: 800,
    caption: "Digital Marketing Services by Capyngen",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Services",
        item: "https://www.capyngen.com/services",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Digital Marketing",
        item: "https://www.capyngen.com/digital-marketing",
      },
    ],
  },
};
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.capyngen.com/digital-marketing#service",
  serviceType: "Digital Marketing Services",
  name: "Digital Marketing Services",
  alternateName: "Online Marketing Solutions",
  url: "https://www.capyngen.com/digital-marketing",
  description:
    "Capyngen provides data-driven digital marketing services including SEO, PPC, social media management, content marketing, and analytics to help businesses increase visibility, leads, and ROI.",
  provider: {
    "@type": "Organization",
    name: "Capyngen",
    url: "https://www.capyngen.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://www.capyngen.com/assets/capyngenLogo-C_7gSXiJ.png",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  audience: {
    "@type": "Audience",
    audienceType: [
      "Startups",
      "Small Businesses",
      "E-commerce Brands",
      "Enterprises",
    ],
  },
  offers: {
    "@type": "Offer",
    url: "https://www.capyngen.com/contact",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    price: "0",
    eligibleRegion: {
      "@type": "Place",
      name: "Worldwide",
    },
    description:
      "Get a free consultation for our 360° digital marketing services including SEO, PPC, social media, and content strategy.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization (SEO)",
          description:
            "Improve your website visibility and ranking through expert SEO strategies.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pay-Per-Click Advertising (PPC)",
          description:
            "Maximize ROI with targeted Google Ads and paid campaigns.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
          description:
            "Boost engagement and brand awareness with creative social campaigns.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Marketing",
          description:
            "Drive organic growth through valuable, optimized content strategies.",
        },
      },
    ],
  },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.capyngen.com/digital-marketing#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing is a form of promotional marketing undertaken digitally using online media, which includes social media, search engines, e-mail, and websites.",
      },
    },
    {
      "@type": "Question",
      name: "What is the importance of digital marketing to business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It enables companies to become more familiar, lure visitors to their web pages, acquire potential clients and, accordingly, make more purchases, in addition to building the brand stronger in the digital environment by the means of the internet.",
      },
    },
    {
      "@type": "Question",
      name: "What services are offered by a digital marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: (
          <>
            Some of the services offered by the agency include search engine
            optimisation (SEO), pay-per-click (PPC) advertising, social media
            marketing, and content marketing, as well as email campaigns, among
            others, and analytics.
          </>
        ),
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to grow a small business with the help of digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed. The online promotional procedures are highly adaptable, cost-effective, and highly focused on reaching potential buyers.",
      },
    },
    {
      "@type": "Question",
      name: "How does a digital marketing company differ from an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is also similar that they are both marketing service providers. Unlike the agencies that are often capable of providing more detailed solutions, companies tend to focus on developing tailor-made strategies or providing consulting.",
      },
    },
    {
      "@type": "Question",
      name: "What is the time to break even in digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The various outputs of the different channels and approaches tend to last 3-6 months under the SEO and content marketing, whereas the paid campaigns may provide instant outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer tailored digital marketing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Capyngen can develop custom digital marketing campaigns that can be relevant to the business objectives and industry of your organisation.",
      },
    },
    {
      "@type": "Question",
      name: "Are you able to handle the online marketing of startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, surely. We provide digital marketing services to startups with the objective of making swift steps and becoming a regular in the global market.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide online digital marketing services to international companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Capyngen, the professional global international digital marketing agency, is the answer to the issues of your enterprise and global business ventures.",
      },
    },
    {
      "@type": "Question",
      name: "What is your measurement of campaign success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some of the main alterations in the performance indicators are the object of the tracking activity, like the number of people visiting the site, leads, the transformation of the latter into customers and ROI, also the interaction of the audience with the brand.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer social media marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed. Our participation is in the planning, content development, execution of advertising and measuring success in three big social media networks.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to sell more through digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indeed. Once the right audience is drawn, and the optimisation of the campaigns is conducted, the digital marketing tool will open the path to achieving more conversions and increased revenues.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide PPC and SEO services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are a full-fledged digital marketing company, the services of which involve the optimisation of search engines and paid advertisements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cost of digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The prices are set depending on the degree of the service, size and the duration of the campaign. Capyngen has the facility to scale businesses based on their size and price.",
      },
    },
    {
      "@type": "Question",
      name: "Where do I begin with the digital marketing services of Capyngen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Begin with a free consultation to discuss your goals and receive a company-specific plan of digital marketing.",
      },
    },
  ],
};

const DigitalMarketing = () => {
  const faqItems = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing is a form of promotional marketing undertaken digitally using online media, which includes social media, search engines, e-mail, and websites.",
    },
    {
      question: "What is the importance of digital marketing to business?",
      answer:
        "It enables companies to become more familiar, lure visitors to their web pages, acquire potential clients and, accordingly, make more purchases, in addition to building the brand stronger in the digital environment by the means of the internet.",
    },
    {
      question: "What services are offered by a digital marketing agency?",
      answer:
        "Some of the services offered by the agency include search engine optimisation (SEO), pay-per-click (PPC) advertising, social media marketing, and content marketing, as well as email campaigns, among others, and analytics.",
    },
    {
      question:
        "Is it possible to grow a small business with the help of digital marketing?",
      answer:
        "Indeed. The online promotional procedures are highly adaptable, cost-effective, and highly focused on reaching potential buyers.",
    },
    {
      question: "How does a digital marketing company differ from an agency?",
      answer:
        "It is also similar that they are both marketing service providers. Unlike the agencies that are often capable of providing more detailed solutions, companies tend to focus on developing tailor-made strategies or providing consulting.",
    },
    {
      question: "What is the time to break even in digital marketing?",
      answer:
        "The various outputs of the different channels and approaches tend to last 3-6 months under the SEO and content marketing, whereas the paid campaigns may provide instant outcomes.",
    },
    {
      question: "Do you offer tailored digital marketing services?",
      answer:
        "Absolutely. Capyngen can develop custom digital marketing campaigns that can be relevant to the business objectives and industry of your organisation.",
    },
    {
      question: "Are you able to handle the online marketing of startups?",
      answer:
        "Yes, surely. We provide digital marketing services to startups with the objective of making swift steps and becoming a regular in the global market.",
    },
    {
      question:
        "Do you provide online digital marketing services to international companies?",
      answer:
        "Yes. Capyngen, the professional global international digital marketing agency, is the answer to the issues of your enterprise and global business ventures.",
    },
    {
      question: "What is your measurement of campaign success?",
      answer:
        "Some of the main alterations in the performance indicators are the object of the tracking activity, like the number of people visiting the site, leads, the transformation of the latter into customers and ROI, also the interaction of the audience with the brand.",
    },
    {
      question: "Do you offer social media marketing?",
      answer:
        "Indeed. Our participation is in the planning, content development, execution of advertising and measuring success in three big social media networks.",
    },
    {
      question: "Is it possible to sell more through digital marketing?",
      answer:
        "Indeed. Once the right audience is drawn, and the optimisation of the campaigns is conducted, the digital marketing tool will open the path to achieving more conversions and increased revenues.",
    },
    {
      question: "Do you provide PPC and SEO services?",
      answer:
        "Yes. We are a full-fledged digital marketing company, the services of which involve the optimisation of search engines and paid advertisements.",
    },
    {
      question: "What is the cost of digital marketing?",
      answer:
        "The prices are set depending on the degree of the service, size and the duration of the campaign. Capyngen has the facility to scale businesses based on their size and price.",
    },
    {
      question:
        "Where do I begin with the digital marketing services of Capyngen?",
      answer:
        "Begin with a free consultation to discuss your goals and receive a company-specific plan of digital marketing.",
    },
  ];
  const solutionsData = [
    {
      title: "Search Engine Optimisation (SEO)",
      desc: (
        <>
          <p>
            SEO is the acronym for the fundamental structural marketing of
            digital marketing. The SEO companies within the group of the company
            rank your site with more favourable influences than unfavourable
            ones with the search engines of the renowned Search Engines for such
            relevant keywords.
          </p>
          <p>The company provides search optimisation by:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>On-page optimisation (meta tags, content, URL structure)</li>
            <li>Backlinks (off-page optimisation)</li>
            <li>Technical SEO (site speed, mobile-friendliness, indexing)</li>
            <li>Local search (optimisation of Google My Business, maps)</li>
            <li>Key-word research and competitor research</li>
          </ul>
          <p>
            With the adoption of SEO, your company will have the capacity to
            gain natural visitors and benefit in the long run in terms of
            exposure.
          </p>
        </>
      ),
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: (
        <>
          <p>
            Your customers spend most of their time on social media. We enable
            you to be socially active in terms of such platforms as Facebook,
            Instagram, LinkedIn, Twitter, and YouTube.
          </p>
          <p>What we do:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Social media planning, strategy</li>
            <li>Designing posts and developing content</li>
            <li>Google Ads (Facebook Ads, Instagram Ads, LinkedIn Ads)</li>
            <li>Participation & neighbourhood development</li>
            <li>Influencer collaborations</li>
          </ul>
          <p>
            The advantages of brand awareness and customer engagement are
            attainable with SMM.
          </p>
        </>
      ),
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      desc: (
        <>
          <p>
            PPC advertisements provide instant exposure on social media and
            Google. Our accredited PPC experts manage campaigns, producing lead
            volumes that are of the best quality at the lowest cost per click
            (CPC).
          </p>
          <p>We provide full PPC service, including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Google (Search, Display, Shopping) Ads</li>
            <li>Social media advertising (Meta, LinkedIn, Twitter, TikTok)</li>
            <li>Retargeting/remarketing advertisements</li>
            <li>Conversion tracking & reporting</li>
          </ul>
          <p>PPC produces quick results and quality leads.</p>
        </>
      ),
    },
    {
      title: "Content Marketing",
      desc: (
        <>
          <p>
            Content is the most useful tool of digital marketing. Our content is
            valuable, engaging, and optimised to appeal to search engines,
            thereby becoming trust-building and authoritative to your brand.
          </p>
          <p>We carry out content marketing campaigns like:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Article marketing and blog writing</li>
            <li>Landing pages and content on the website</li>
            <li>Video marketing & scripts</li>
            <li>Visual storytelling and infographics</li>
            <li>Case studies, eBooks and whitepapers</li>
          </ul>
          <p>
            Through content marketing, you get to attract, engage, and convert
            customers.
          </p>
        </>
      ),
    },
    {
      title: "Email Marketing",
      desc: (
        <>
          <p>
            The email marketing channel is one of the channels with the highest
            returns on investment. We build customised leads, cultivating
            campaigns that encourage cross-selling.
          </p>
          <p>What we do:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Newsletter creation</li>
            <li>Automated drip campaigns</li>
            <li>Product launch emails</li>
            <li>Customer retention programs</li>
            <li>Performance tracking & analytics</li>
          </ul>
          <p>
            When using email, it is possible to retain customers and add
            lifetime value.
          </p>
        </>
      ),
    },
    {
      title: "Conversion Rate Optimisation (CRO)",
      desc: (
        <>
          <p>
            The increased traffic on the websites may not be enough unless the
            visitors are converted into customers. Our CRO specialists optimise
            your site and landing pages to the utmost level of acquiring more
            conversions.
          </p>
          <p>We enhance the process of the CRO by improving:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Heatmap & behaviour analysis</li>
            <li>A/B testing</li>
            <li>Optimising call-to-action (CTA) buttons</li>
            <li>Smoothing out the checkout process</li>
            <li>Mobile-friendly design</li>
          </ul>
          <p>Visitors are turned into loyal customers with CRO.</p>
        </>
      ),
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Global Reach",
      description: "Users outside of your local district.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Targeted Marketing",
      description:
        "It is not worth wasting resources to sell to people who are not interested, but focus on groups that are highly likely to convert.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Cost-Efficient",
      description:
        "The digital advertisements are likely to be cheaper compared to TV, radio, and billboard advertisements.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Tailored Impact independently",
      description:
        "Connect through multiple digital platforms/ calls to action by tracking the exits through data regarding the number of clicks, impressions, leads and sales.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "High Interaction Levels",
      description:
        "Demand personal connection with your customers and win brand loyalty online.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Greater ROI",
      description:
        "Monitor your capital returns at all times with the help of strategised analytics.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Research & Analysis",
      description: "Know your business, competition, and customers.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description: "Develop a custom online marketing strategy.",
    },
    {
      step: "Step 03",
      title: "Execution",
      description:
        "Use the SEO, advertisements, content, and social campaigns.",
    },
    {
      step: "Step 04",
      title: "Tracking & Optimisation",
      description: "Monitoring KPIs and maximising productivity.",
    },
    {
      step: "Step 05",
      title: "Reporting",
      description: "Issue with simple and clear reports.",
    },
    {
      step: "Step 06",
      title: "Continuous Improvement",
      description:
        "Periodically re-examine marketing results and optimise ways of maintaining a growth curve.",
    },
  ];
  const features = [
    {
      icon: <FaRocket className="text-4xl text-blue-400" />,
      title: "Tailored Strategies",
      description: "Neither a universal nor a standard approach.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "Past Performance Success",
      description: "The years of experience in different industries.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
      title: "Professional Team",
      description:
        "Google Ads certified, Meta Ads certified and SEO certified specialists.",
    },
    {
      icon: <FaChartLine className="text-4xl text-pink-400" />,
      title: "Analytics-based Campaigns",
      description: "We rely on statistics instead of our feelings.",
    },
    {
      icon: <FaChartLine className="text-4xl text-pink-400" />,
      title: "Open Reporting",
      description: "Clear monthly reports with results.",
    },
  ];
  const marketingCards = [
    {
      img: assets.seoAndContent,
      alt: "Christmas background 3D cartoon",
      text: "SEO & Content",
    },
    {
      img: assets.socialMediaMarketing,
      alt: "A beautiful glowing flower",
      text: "Social Media Marketing",
    },
    {
      img: assets.paidAdvertising,
      alt: "A magical leopard",
      text: "Paid Advertising",
    },
    {
      img: assets.emailCampaigns,
      alt: "A female 3D cartoon holding a wrapped gift box",
      text: "Email Campaigns",
    },
  ];

  useSplitTextAnimation("h1");
  return (
    <div className="relative">
      <Helmet>
        <title>
          Best Digital Marketing Services | End-to-End Marketing Solutions
        </title>
        <meta
          name="description"
          content="Looking for the best digital marketing services in India? Capyngen offers end-to-end digital marketing services to increase traffic, leads, and sales for your business."
        />
        <meta
          name="keywords"
          content="Digital Marketing Services | Result-Driven Marketing Agency – Capyngen"
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
        <Banner11
          heading="to Grow Your Business"
          highlight="Digital Marketing Services"
          description="Increase exposure, interactions and purchases through personalised digital marketing services based on your brand. Expand your company through appropriate marketing strategies, enhanced by cybersecurity measures for safe online operations and e commerce services integration."
          cards={marketingCards}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative lg:z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Expand Your Company through the Introduction of the appropriate Marketing Strategies."
          description={[""]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What is Digital Marketing?"
          description={[
            `Digital marketing can be defined as the promotional activities of the brands, products or services, both online and using digital technologies. It gives businesses an opportunity to zoom in on the specific consumers and quantify the success of the efforts, and enhance in-house campaigns on the spot, as compared to traditional marketing.`,
            <>
              <p className="mb-3 font-semibold">It includes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <a
                    href="https://www.capyngen.com/seo"
                    className="text-blue-500 font-bold"
                  >
                    Search Engine Optimisation (SEO)
                  </a>
                </li>
                <li>Social Media Marketing (SMM)</li>
                <li>
                  <a
                    href="https://www.capyngen.com/ppc"
                    className="text-blue-500 font-bold"
                  >
                    Pay-Per-Click Advertising (PPC)
                  </a>
                </li>
                <li>Content Marketing</li>
                <li>Email Marketing</li>
                <li>Influencer Marketing</li>
                <li>Conversion Rate Optimisation (CRO)</li>
              </ul>
              <br />
              <p>
                In case you choose to make a digital marketing strategy happen
                and do it properly, you might not only increase the number of
                visits to the site but also get helpful leads in terms of sales.
              </p>
            </>,
          ]}
          image={assets.digitalMarketing1}
          alt="Best Digital Marketing Services | End-to-End Marketing Solutions"
          isHidden={true}
          background={assets.patternBg1}
        />
        <CardsSection
          heading="Why Choose Capyngen for Digital Marketing Services?"
          subheading="Investing in digital marketing services is a must-have now and not an option. The list below demonstrates the reasoning why many companies invest in this type of marketing, particularly when selecting one of the top digital marketing agencies or even the best digital marketing company in India:"
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
          height="h-72"
        />
        <FullSizeImageSection
          backgroundImage={assets.digitalMarketingFullSize}
          title="Expand your brand in the digital world"
          description="We collaborate with you to find, interact and transform customers using any channel."
          buttonText="Boost My Business"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <BenefitsSection
          heading="Our Digital Marketing Services"
          desc={
            <>
              This is because we take pleasure in providing internet solutions
              that are best suited and comprehensive in fulfilling numerous
              business goals over the internet. <Link to={"/"}>Capyngen</Link>{" "}
              is ranked in the top 10 digital marketing company in the market by
              many global companies.
            </>
          }
          benefits={solutionsData}
          image={assets.digitalMarketing2}
          alt="Best Digital Marketing Services | End-to-End Marketing Solutions"
          footerNote=""
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Take Your Digital Presence to the Next Level"
          description={[
            "Adapt the alteration in your business to the custom digital marketing services of Capyngen, which is geared towards the delivery of traffic, engagement, and sales to you in any part of the world. We ensure you remain ahead of the competition because we are one of the best providers of best global digital marketing services.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="Our Digital Marketing Process"
          desc="Our practice is based on a mindful and evidence-driven approach. Our own practice will ensure maximum growth outcomes per campaign."
          steps={steps}
        />
        <FullSizeImageSection
          backgroundImage={assets.digitalMarketingFullSize2}
          title="Turn clicks into customers"
          description="Our marketers strategise sharp, information-oriented measures to realise quantifiable growth."
          buttonText="CONTACT US"
          buttonLink="/contact-us"
          overlayColor="bg-black/40"
        />
        <WhyChoose
          heading="What makes us the perfect partner for your digital marketing?"
          intro=""
          features={features}
        />
        <TopRatedCompany
          reverse={true}
          title="Why is it beneficial to work with a digital marketing agency?"
          description={[
            `Working with us, you do not just receive services, but also get solutions to grow.`,
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>Waste less time and invest it in your business.</li>
                <li>Make use of the latest tools and technologies.</li>
                <li>
                  You are able to modify your campaigns according to your budget
                  and performance.
                </li>
                <li>
                  You are able to obtain long-term brand loyalty and
                  reliability. <Link to={"/"}>Capyngen</Link> is the subject of
                  many surveys that suggest it is one of the top 10 digital
                  marketing company in Delhi and a reliable international
                  digital marketing agency in India.
                </li>
              </ul>
            </>,
          ]}
          image={assets.digitalMarketing3}
          alt="Best Digital Marketing Services | End-to-End Marketing Solutions"
          imageHeight="aspect-[1/1]"
          isHidden={true}
          background={assets.patternBg1}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-black"
          textColor="text-white"
          title="Enhance Your Web Presence Now"
          description={[
            "Digital marketing involves more than simply advertisements and content on social media platforms, but also involves designing an online presence that can be maintained and lead to actual business development.",
            "By using the right mix of SEO, PPC, social media and content marketing, it will be possible to have more visitors, enable the creation of qualified leads and make more sales.",
            "To be above the competition, my digital marketing services can be the weapon to get your business to the next stage and to do it efficiently and effectively in the modern cutthroat market.",
          ]}
          buttonText="Contact Us"
          image={assets.digitalMarketing4}
          alt="Best Digital Marketing Services | End-to-End Marketing Solutions"
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-black"
          textColor="text-white"
          title="Free of Charge Digital Marketing Consultation"
          description={[
            "Discuss the digital marketing services with our experts and determine the most appropriate services that your business can use to expand effectively online.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        {/* <ScrollRevealEffect /> */}
      </div>
    </div>
  );
};

export default DigitalMarketing;
