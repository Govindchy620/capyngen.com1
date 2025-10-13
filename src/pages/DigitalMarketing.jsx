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

const DigitalMarketing = () => {
  const faqItems = [
    {
      question: "What is digital marketing?",
      answer:
        "Digital marketing is promotional activity carried out digitally through online channels such as social media, search engines, e-mail, and websites.",
    },
    {
      question: "Why is digital marketing important for businesses?",
      answer:
        "It allows companies to be more recognizable, attract visitors to their web pages, get potential clients and, therefore, generate more sales, besides establishing the brand better in the digital world through the internet.",
    },
    {
      question: "What services does a digital marketing agency provide?",
      answer:
        "The agency offers many services such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, and email campaigns, along with analytics.",
    },
    {
      question: "Can digital marketing help small businesses grow?",
      answer:
        "Indeed. The online promotional activities are very adjustable, budget-friendly, and well-targeted to get access to potential buyers.",
    },
    {
      question:
        "What is the difference between a digital marketing company and an agency?",
      answer:
        "There is a similarity in that both are providers of marketing services. Whereas agencies are normally equipped to offer more comprehensive solutions, companies are more likely to concentrate on creating custom strategies or delivering consulting services.",
    },
    {
      question: "How long does it take to see results from digital marketing?",
      answer:
        "The different results from the various channels and strategies usually take 3–6 months for SEO and content marketing, while paid campaigns can give immediate results.",
    },
    {
      question: "Do you provide custom digital marketing services?",
      answer:
        "Absolutely. Capyngen has the ability to create tailored digital marketing campaigns that fit the unique business goals and industry of your company.",
    },
    {
      question: "Can you manage digital marketing for startups?",
      answer:
        "Yes, surely. We offer digital marketing services for startups aiming to achieve rapid progress and position themselves in the international market.",
    },
    {
      question:
        "Do you offer online digital marketing services for international businesses?",
      answer:
        "Yes. The professional global digital marketing company Capyngen is the solution to the challenges of your enterprise and global ventures.",
    },
    {
      question: "How do you measure the success of campaigns?",
      answer:
        "Key changes in performance indicators are the focus of tracking efforts such as the amount of people visiting the website, leads generated, conversions of leads into customers and ROI also how the audience interacts with the brand.",
    },
    {
      question: "Do you provide social media marketing services?",
      answer:
        "Indeed. We are involved in the planning, knew content development, execution of advertising, and measuring success across three major social media platforms.",
    },
    {
      question: "Can digital marketing increase sales?",
      answer:
        "Indeed. When the proper audience is attracted, and campaigns are optimized, the digital marketing tool can become a gateway for realizing more conversions and higher revenues.",
    },
    {
      question: "Do you offer SEO and PPC services?",
      answer:
        "Yes. We are an all-encompassing digital marketing agency, who’s expertise includes search engine optimization and advertisement on a paid basis.",
    },
    {
      question: "How much does digital marketing cost?",
      answer:
        "Prices are based on the level of the service, scale, and campaign duration. Capyngen offers the option of scaling businesses of different sizes and prices.",
    },
    {
      question:
        "How can I get started with Capyngen’s digital marketing services?",
      answer:
        "Start with a no-cost consultation to talk over your ambitions and get a tailor-made company digital marketing plan.",
    },
  ];
  const solutionsData = [
    {
      title: "Search Engine Optimization (SEO)",
      desc: (
        <>
          <p>
            SEO stands for the basic structural support of digital marketing.
            The SEO providers in the group of the company position your website
            to be with more positive impacts than negative ones in the search
            indexes of famous Search Engines for relevant keywords.
          </p>
          <p>The company offers SEO through:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>On-page optimization (meta tags, content, URL structure)</li>
            <li>Off-page optimization (backlinks, authority building)</li>
            <li>Technical SEO (site speed, mobile-friendliness, indexing)</li>
            <li>Local SEO (Google My Business, maps optimization)</li>
            <li>Keyword research and competitor analysis</li>
          </ul>
          <p>
            Implementing SEO, it becomes possible for your company to attract
            organic visitors and enjoy long-term exposure.
          </p>
        </>
      ),
    },
    {
      title: "Social Media Marketing (SMM)",
      desc: (
        <>
          <p>
            Social media is the place where your customers are most of the time.
            We make it possible for you to have a strong social profile on such
            platforms as Facebook, Instagram, LinkedIn, Twitter, and YouTube.
          </p>
          <p>What we do:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Social media strategy & planning</li>
            <li>Creative post design & content creation</li>
            <li>
              Paid ad campaigns (Facebook Ads, Instagram Ads, LinkedIn Ads)
            </li>
            <li>Engagement & community building</li>
            <li>Influencer collaborations</li>
          </ul>
          <p>
            With SMM, you can get the benefits of brand awareness and engagement
            of customers.
          </p>
        </>
      ),
    },
    {
      title: "Pay-Per-Click Advertising (PPC)",
      desc: (
        <>
          <p>
            PPC ads offer immediate exposure on Google and social media
            platforms. Our certified PPC professionals oversee campaigns that
            create quality lead volumes with the lowest cost per click (CPC).
          </p>
          <p>We offer comprehensive PPC solutions such as:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Google Ads (Search, Display, Shopping)</li>
            <li>Social media ads (Meta, LinkedIn, Twitter, TikTok)</li>
            <li>Retargeting & remarketing ads</li>
            <li>Conversion tracking & reporting</li>
          </ul>
          <p>With PPC, you get fast results and high-quality leads.</p>
        </>
      ),
    },
    {
      title: "Content Marketing",
      desc: (
        <>
          <p>
            The most effective digital marketing tool is content. We make
            content that is valuable, engaging, and SEO-optimized, which in turn
            is trust-building and authoritative for your brand.
          </p>
          <p>We do content marketing campaigns such as:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Blog writing & article marketing</li>
            <li>Website content & landing pages</li>
            <li>Video marketing & scripts</li>
            <li>Infographics & visual storytelling</li>
            <li>Case studies, eBooks & whitepapers</li>
          </ul>
          <p>
            With content marketing, you attract, engage, and convert customers
            effectively.
          </p>
        </>
      ),
    },
    {
      title: "Email Marketing",
      desc: (
        <>
          <p>
            The email marketing channel still has one of the highest returns on
            investments. We develop personalized leads nurturing campaigns that
            stimulate cross-selling.
          </p>
          <p>What we do:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Newsletter creation</li>
            <li>Automated drip campaigns</li>
            <li>Product launch emails</li>
            <li>Customer retention campaigns</li>
            <li>Analytics & performance tracking</li>
          </ul>
          <p>
            With email, you can retain customers and increase lifetime value.
          </p>
        </>
      ),
    },
    {
      title: "Conversion Rate Optimization (CRO)",
      desc: (
        <>
          <p>
            The website traffic increase might not be sufficient if the visitors
            are not turned into customers. Our CRO professionals upgrade your
            website and landing pages to the fullest extent of getting more
            conversions.
          </p>
          <p>We improve the CRO process Through:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Heatmap & behavior analysis</li>
            <li> A/B testing</li>
            <li> Call-to-action (CTA) buttons optimizing</li>
            <li>Streamlining the checkout process</li>
            <li>Mobile-friendly design</li>
          </ul>
          <p>With CRO, you convert visitors into loyal customers.</p>
        </>
      ),
    },
  ];
  const cardsSectionData2 = [
    {
      title: "Global Reach",
      description: "Target users who are not in your local district.",
      icon: <FaTools className="text-4xl" />,
    },
    {
      title: "Targeted Marketing",
      description:
        "Don’t waste resources trying to sell to noninterested parties, but target groups that have a high probability of converting.",
      icon: <FaDollarSign className="text-4xl" />,
    },
    {
      title: "Cost-Efficient",
      description:
        "Digital ads tend to be less expensive than TV, radio, and billboard ads.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Independently Tailored Impact",
      description:
        "Engage through various digital platforms or calls to action by measuring exits via data on the number of clicks, impressions, leads, and sales.",
      icon: <FaShieldAlt className="text-4xl" />,
    },
    {
      title: "Elevated Interaction Levels",
      description:
        "Connect with your customers on a personal level and earn brand loyalty through online channels.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Greater ROI",
      description:
        "Keep a constant eye on your capital returns with the assistance of well-thought-out analytics.",
      icon: <FaHeart className="text-4xl" />,
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Research & Analysis",
      description: "Understand your business, competitors, and audience.",
    },
    {
      step: "Step 02",
      title: "Strategy Development",
      description: "Create a tailored digital marketing plan.",
    },
    {
      step: "Step 03",
      title: "Execution",
      description: "Implement SEO, ads, content, and socials campaigns.",
    },
    {
      step: "Step 04",
      title: "Tracking & Optimization",
      description:
        "Performance management by monitoring KPIs and optimizing productivity.",
    },
    {
      step: "Step 05",
      title: "Reporting",
      description: "Provide easily comprehensible and transparent reports.",
    },
  ];
  const features = [
    {
      icon: <FaRocket className="text-4xl text-blue-400" />,
      title: "Tailored Strategies",
      description: "Not a standard, universal method.",
    },
    {
      icon: <FaUsers className="text-4xl text-green-400" />,
      title: "Successful Past Performance",
      description: "Several years of experience in various sectors.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
      title: "Professional Team",
      description:
        "Specialists that are Google Ads, Meta Ads, and SEO-certified.",
    },
    {
      icon: <FaChartLine className="text-4xl text-pink-400" />,
      title: "Analytics-based Campaigns",
      description: "We depend on numbers rather than intuition.",
    },
    {
      icon: <FaChartLine className="text-4xl text-pink-400" />,
      title: "Open Reporting",
      description: "Unambiguous monthly reports with outcomes.",
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
      <div className="sticky inset-0">
        <Banner11
          heading="to Grow Your Business"
          highlight="Digital Marketing Services"
          description="Boost visibility, engagement, and conversions with tailored digital marketing strategies designed for your brand."
          cards={marketingCards}
        />
      </div>
      {/* Foreground Content (scrolls over background) */}
      <div className="relative z-10">
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Grow Your Business by Implementing the Right Marketing Strategies"
          description={[""]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <TopRatedCompany
          title="What is Digital Marketing?"
          description={[
            `Digital marketing refers to the methods of promoting the brands, products, or services online and through digital technologies. Compared to traditional marketing, it offers businesses the possibility to zoom-in on the exact consumers, measure the success of the efforts, and improve in-house campaigns right on the spot.`,
            <>
              <p className="mb-3 font-semibold">It includes:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Marketing (SMM)</li>
                <li>Pay-Per-Click Advertising (PPC)</li>
                <li>Content Marketing</li>
                <li>Email Marketing</li>
                <li>Influencer Marketing</li>
                <li>Conversion Rate Optimization (CRO)</li>
              </ul>
              <br />
              <p>
                If you decide to go for a digital marketing plan that is
                executed well, it is possible for you to not only enhance
                website visits but also obtain useful leads in turn of sales.
              </p>
            </>,
          ]}
          image={assets.digitalMarketing1}
          isHidden={true}
          background={assets.patternBg1}
        />
        <CardsSection
          heading="Why Choose Capyngen for Web Development?"
          subheading="Investing in digital marketing is currently a must-have option rather than a mere option. Below is a list reflecting the rationale for which numerous businesses dedicate resources to this form of marketing:"
          services={cardsSectionData2}
          headColor="text-white"
          cardBg="bg-gray-700"
          sectionBg="bg-gray-900"
          hoverBg="hover:bg-blue-800 hover:scale-98"
          textColor="text-white"
          hoverTextColor=""
          height="h-72"
        />
        <BenefitsSection
          heading="Our Digital Marketing Services"
          desc="We are delighted to offer digital solutions that are ideally comprehensive for achieving myriad business objectives online."
          benefits={solutionsData}
          image={assets.digitalMarketing2}
          footerNote=""
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-blue-900"
          textColor="text-white"
          title="Enhance Your Web Presence Now"
          description={[
            "Make the change in your business using Capyngen's custom digital marketing services targeted at bringing the traffic, engagement, and sales to you anywhere in the world.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <HowWeWork
          heading="Our Digital Marketing Process"
          desc="We operate on a thought-out and data-driven approach. Our practice guarantees the biggest growth results for each campaign."
          steps={steps}
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
            `When you collaborate with us, you don't merely receive services; you also gain solutions that drive growth.`,
            <>
              <ul className="list-disc list-inside space-y-2">
                <li>Save time and dedicate it to your business.</li>
                <li>Use the most recent tools and technologies.</li>
                <li>
                  You can adjust your campaigns depending on your budget and
                  their performance.
                </li>
                <li>You can gain long-term brand reliability and loyalty.</li>
              </ul>
            </>,
          ]}
          image={assets.digitalMarketing3}
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
            "Digital marketing entails not just the running of ads and posting on social media but also the creation of a sustainable online presence that results in real business growth.",
            "Employing the correct blend of SEO, PPC, social media, and content marketing, your company will be able to attract more visitors, facilitate the development of qualified leads, and increase sales.",
            "If you want to be ahead of the competition, my digital marketing services can be the tool to take your business up to the next level efficiently and effectively in today’s cutthroat market.",
          ]}
          buttonText="Contact Us"
          image={assets.digitalMarketing4}
        />
        <GetStarted
          reverse={false}
          backgroundColor="bg-black"
          textColor="text-white"
          title="Receive a Digital Marketing Consultation Free of Charge"
          description={[
            "Speak with our specialists and find out which digital marketing services are the most suitable for your business to grow efficiently online.",
          ]}
          buttonText="Contact Us"
          backgroundVideo={assets.backgroundVideo}
        />
        <FAQSection2 items={faqItems} />
        <ScrollRevealEffect />
      </div>
    </div>
  );
};

export default DigitalMarketing;
