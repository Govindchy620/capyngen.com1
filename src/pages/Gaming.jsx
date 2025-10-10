import React from "react";
import ShuffleHero from "../components/ShuffleHero";
import TopRatedCompany from "../components/TopRatedCompany";
import { assets } from "../assets/assets";
import GetStarted from "../components/GetStarted";
import CardsSection from "../components/CardsSection";
import IndustryServices from "../components/IndustryServices";
import {
  FaAndroid,
  FaApple,
  FaBullhorn,
  FaEnvelopeOpenText,
  FaGamepad,
  FaHandsHelping,
  FaNetworkWired,
  FaPalette,
  FaSearch,
  FaTags,
  FaUsers,
  FaVideo,
  FaVrCardboard,
} from "react-icons/fa";
import CardsSectionImage from "../components/CardsSectionImage";
import AppTypesSection from "../components/AppTypesSection";
import FAQSection2 from "../components/FAQSection2";
import ScrollRevealEffect from "../components/ScrollRevealEffect";
import BenefitsSection from "../components/BenefitsSection";
import CardsSectionSlider from "../components/CardsSectionSlider";
import HowWeWork from "../components/HowWeWork";

const Gaming = () => {
  const faqItems = [
    {
      question: "What is a Game app development software company?",
      answer:
        "The company deals with the creation of custom game engines, mobile, PC, and console games, VR/AR solutions, and multiplayer platforms.",
    },
    {
      question: "What is Mobile Game App Development?",
      answer:
        "iOS Game App Development, Android Game App Development, and cross-platform mobile devices with the focus on performance and user engagement.",
    },
    {
      question: "What is PC Game Development & console game development?",
      answer:
        "The high-performance Windows, Mac, PlayStation, Xbox, and Nintendo games development.",
    },
    {
      question: "What is VR game software?",
      answer:
        "The gaming Industry involves Virtual reality technology meant for the consumer to enjoy an immersive experience with the VR headset and motion controls.",
    },
    {
      question: "What is AR game development?",
      answer:
        "AR games are games that bring digital components to the physical space for easy interaction.",
    },
    {
      question: "What are multiplayer Game app development?",
      answer:
        "Products and server systems that allow different users to play real-time games at different locations.",
    },
    {
      question: "How does Capyngen help gaming businesses grow?",
      answer:
        "We deliver flexible IT resolutions, online-offline promotional activities, and data to spur gaming and moneymaking.",
    },
    {
      question: "Do you offer custom Mobile Game App Development services?",
      answer:
        "Definitely! We are also more than capable of making unique mobile games for your video game company and that specifically target your intended demographic of players.",
    },
    {
      question: "Can you build multiplayer Game app development online games?",
      answer:
        "Of course! Stable servers and seamless gameplay are what we base the development of online multiplayer games on.",
    },
    {
      question: "How do you handle game analytics?",
      answer:
        "We make use of the latest and the best tools in the industry to collect data about various factors relating to the game and the players' living habits.",
    },
    {
      question: "Do you provide Cloud gaming?",
      answer:
        "Yes, we provide Cloud gaming with great efficiency which can manage players up to thousands concurrently.",
    },
    {
      question: "What is your experience with VR & AR games?",
      answer:
        "We develop immersive VR and AR solutions for gaming, simulation, and amusement applications.",
    },
    {
      question: "Can you help with esports and community engagement?",
      answer:
        "Sure, we plan and execute the outreach programs targeted at player engagement, influencer partnership, and esports promotion.",
    },
    {
      question: "How long does game development take?",
      answer:
        "Depending upon the platform, game complexity, and features, the production schedule can be generally from 3–12 months.",
    },
    {
      question: "Why choose Capyngen for game development?",
      answer:
        "We combine the knowledge and strategies of IT, promotion, and the field of gaming to offer gaming solutions that are flexible, interesting, and profit-generating.",
    },
  ];
  const heroImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 8,
      src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
    },
  ];
  const servicesData = [
    {
      image: assets.bg1,
      title: "Custom Game Portals and Game app development",
      desc: "Just a few clicks and you can download, stream and interact with players.",
    },
    {
      image: assets.bg1,
      title: "Multiplayer Server Setup and Management",
      desc: "The right servers with scalability make it possible to have smooth online gaming experiences.",
    },
    {
      image: assets.bg1,
      title: "API and Payment Gateway Integration",
      desc: "All in-game transactions and purchases that are made will be quite safe and secure.",
    },
    {
      image: assets.bg1,
      title: "Cloud gaming",
      desc: "The hosting service is of the highest performance to allow the most number of players to play at the same time.",
    },
    {
      image: assets.bg1,
      title: "Gaming Analytics Solutions",
      desc: "To collect data on player behavior, engagement, and monetization.",
    },
    {
      image: assets.bg1,
      title: "Maintenance and Support",
      desc: "Make sure the gaming platforms function normally, add security, and provide regular updates.",
    },
  ];
  const cardsSectionData2 = [
    {
      title: "SEO for Gaming Websites",
      description:
        "Get the attention of your target audience by using SEO when they search for the latest games, reviews, or news. Our customised SEO strategies make sure your gaming platform is ranked high and draws in organic, long-term visitors.",
      icon: <FaSearch className="text-4xl" />,
    },
    {
      title: "Community Building & Social Media Marketing",
      description:
        "Players will find you by setting up engaging online communities. We assist you in creating an active fanbase on Discord, Reddit, and social media channels that prompt loyalty and interaction.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Influencer & Esports Marketing",
      description:
        "Put yourself where your audience is. Partner with streamers, gaming influencers, and esports professionals to elevate your brand presence and create excitement before and after your game release.",
      icon: <FaGamepad className="text-4xl" />,
    },
    {
      title: "Video & Content Marketing",
      description:
        "Make compelling content that resonates with gamers. We produce the same trade for your story to reach millions from gameplay trailers to behind-the-scenes videos with emotional impact and exhilaration.",
      icon: <FaVideo className="text-4xl" />,
    },
    {
      title: "Paid Ads for Game Launches",
      description:
        "Put yourself in the perfect spot at the perfect time. Our paid ad methods on Google, Meta, and the gaming platform will get your title seen and downloaded on day one.",
      icon: <FaBullhorn className="text-4xl" />,
    },
    {
      title: "Email & Retention Marketing",
      description:
        "Players who were with you at the release of the game but have moved away from the game can be brought back. Give updates, reward packages, and event announcements to keep your audience active and coming back to play.",
      icon: <FaEnvelopeOpenText className="text-4xl" />,
    },
  ];
  const solutionsData = [
    {
      title: "Fast and Reliable IT Solutions for the Gaming Industry",
      desc: "Our customized backend systems provide the same performance, speed of loading, and the ability of the audience to play their games without interruptions worldwide, in all parts of the world.",
    },
    {
      title: "People-Oriented Marketing that Drives Engagement",
      desc: "We create digital campaigns that speak emotionally to the players, motivating them to create more substantial community and brand trust relations.",
    },
    {
      title: "Secure and Scalable Gaming Platforms",
      desc: "We build solid structures that offer security to users' data and platform stability, allowing for the easy handling of high traffic during tournaments, launches, or live events.",
    },
    {
      title: "Advanced Player Analytics and Insights",
      desc: "Make the most of our customer satisfaction survey tools using data-driven methods to track, monitor user behavior, and offer personalized solutions to drive management and revenue growth.",
    },
    {
      title: "End-to-End Technical and Marketing Support",
      desc: "The team of professionals staying with you is not only there during the time of the game, but they are still there with you in the post-launch scaling and pre-launch preparation as well, through every stage of your success.",
    },
  ];
  const cardsSectionSliderData1 = [
    {
      image: assets.bg1,
      title: "Game app development and Studios",
    },
    {
      image: assets.bg1,
      title: "Esports Teams and Platforms",
    },
    {
      image: assets.bg1,
      title: "Gaming Communities and Forums",
    },
    {
      image: assets.bg1,
      title: "Streaming and Content Creators",
    },
    {
      image: assets.bg1,
      title: "Online Gaming Marketplaces",
    },
    {
      image: assets.bg1,
      title: "VR and AR Gaming Startups",
    },
  ];
  const steps = [
    {
      step: "Step 01",
      title: "Consultation and Requirement Analysis",
      description:
        "Understand your game concept, intended users, and goals with us.",
    },
    {
      step: "Step 02",
      title: "Strategy and Planning",
      description:
        "IT infrastructure, marketing roadmap, and game expansion strategies.",
    },
    {
      step: "Step 03",
      title: "Development and Integration",
      description:
        "Work on portals, servers, game engines, and VR/AR platforms.",
    },
    {
      step: "Step 04",
      title: "Marketing Campaigns",
      description:
        "Awareness campaigns, user acquisition strategies, and community engagement programs put into action.",
    },
    {
      step: "Step 05",
      title: "Testing and Optimization",
      description:
        "Quality assurance and product reliability, participate in bug testing and use cases to maximize participation.",
    },
    {
      step: "Step 06",
      title: "Ongoing Support",
      description:
        "Continuity of supported campaigns, regular updates, and customer engagement.",
    },
  ];

  return (
    <div>
      <ShuffleHero
        heading={
          <>
            IT Solutions for
            <span className="text-blue-500"> Gaming Industry</span> for the Next
            Level
          </>
        }
        subheading=""
        description="Our services have been the choice of game studios, esports brands, and developers who need business strategies that are sustainable, customer engagement, and community growth through personal Mobile Game App Development, innovative VR/AR game software, and multiplayerGame app development solutions."
        buttonText="Explore Now"
        themeColor="bg-blue-500 hover:bg-blue-600"
        bgColor="bg-gray-900"
        images={heroImages}
        gridCols={4}
        gridRows={4}
        shuffleInterval={3000}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Boost Your Gaming Projects with Smart Tech Solutions"
        description={[
          "Turn on the bright lights for your brand with Capyngen’s tailor-made IT solutions for the gaming sector, which covers everything from mobile to cloud gaming.",
        ]}
        buttonText="Receive a Game Tech Consultation at No Cost"
        backgroundVideo={assets.backgroundVideo}
      />
      <TopRatedCompany
        title="How Gaming Business Benefit from Digital Innovation"
        description={[
          "The industry of gaming is one of those sectors that have been recognized as rapidly developing areas of the digital world where the user experience and community engagement become a crucial factor.",
          "Particularly the IT infrastructure of the right kind is the indisputable foundation for the smooth running of the Game app development , secure transaction, and scalable performance to support large-scale concurrent users.",
          "Gaming companies by mere digital marketing practices can attract the right crowd, build a faithful customer base, and make a flow of revenue that would be sustainable through the successful implementation of campaigns.",
        ]}
        image={assets.whyChooseUs}
        isHidden="hidden"
        imageHeight="aspect-[4/3] md:aspect-[1/1]"
      />
      <IndustryServices
        heading="IT Solutions for Gaming industry"
        subheading=""
        services={servicesData}
      />
      <CardsSection
        heading="Digital Marketing Solutions"
        subheading=""
        services={cardsSectionData2}
        sectionBg="bg-gray-900"
        headColor="text-white"
        cardBg="bg-black border border-white transition-all duration-400"
        hoverBg=" hover:-translate-y-2"
        textColor="text-white"
        hoverTextColor=""
        textSize="text-md"
      />
      <BenefitsSection
        heading="Key Features & Benefits"
        desc=""
        benefits={solutionsData}
        image={assets.blockchainDevelopment}
        footerNote=""
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-gray-700"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Creating is done. Playing begins. Scaling follows."
        description={[
          "Moreover, our services extend to Android and iOS game development, PC, and cloud gaming, enabling studios to build-finish-launch the next-gen gaming experiences.",
        ]}
        buttonText="Take Off Your Gaming Venture Now!"
        backgroundVideo={assets.backgroundVideo}
      />
      <CardsSectionSlider
        heading="Industries We Serve"
        subheading=""
        cardBg="bg-transparent"
        hoverBg=" hover:bg-blue-50"
        textColor="text-gray-800"
        hoverTextColor=""
        textSize="text-xl"
        sectionBg="bg-black/90"
        height="h-78"
        headColor="text-white"
        services={cardsSectionSliderData1}
      />
      <HowWeWork heading="Our Process" desc="" steps={steps} />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Why Choose Capyngen?"
        description={[
          "We possess the knowledge required for the gaming IT infrastructure and digital marketing.",
          "Working plans for engaging and keeping players.",
          "Gaming solutions that are both scalable and completable by security for startups as well as enterprise-level gaming companies.",
          "Open plan from the technological and economic point of view",
          "Customer service closer to the talents of the industry",
        ]}
        buttonText="Get a Free Consultation"
        image={assets.applicationSolution}
      />
      <GetStarted
        reverse={false}
        backgroundColor="bg-blue-900"
        textColor="text-white"
        buttonColor="bg-white hover:scale-105"
        buttonTextColor="text-black"
        title="Get in touch with Capyngen right now!"
        description={[
          "So are you willing to boost your gaming company with the help of the latest IT and digital marketing solutions?",
        ]}
        buttonText="Get in Touch"
        backgroundVideo={assets.backgroundVideo}
      />
      <FAQSection2 items={faqItems} />
      <ScrollRevealEffect />
    </div>
  );
};

export default Gaming;
