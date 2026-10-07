import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import FAQSection2 from "../components/FAQSection2";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaArrowRight,
  FaShieldAlt,
  FaChartLine,
  FaCode,
  FaCheckCircle,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const CompanyOverview = () => {
  const features = [
    {
      title: "Results That Speak Louder Than Words",
      description:
        "While others give promises, we give results that can be quantified. Our data-driven campaigns not only expose your brand to new audiences but convert them into loyal customers.",
    },
    {
      title: "One-Stop Digital Powerhouse",
      description:
        "We merge the diverse industries of startups and enterprises under a single innovative umbrella that caters to various industries. Regardless of your field, we have the knowledge to take your online presence to the next level.",
    },
    {
      title: "Transparency You Can Trust",
      description:
        "Every campaign, every click, and every conversion – you will have access to it all. Our detailed reporting system will keep you in the driver's seat of your digital journey.",
    },
    {
      title: "Our Mission",
      description:
        "To remake your digital fantasies into realities that dominate the market. We are not a service meant to help you compete; we are the ones that help you lead.",
    },
  ];

  const values = [
    {
      title: "Expertise, Tested in Battle",
      description:
        "Our team is not just highly trained, but they are also digital marketing and IT veterans who have mastered the art of raising brand authority with verified outcomes.",
      icon: <FaShieldAlt className="text-2xl text-blue-600" />,
    },
    {
      title: "Leading the Way Every Time",
      description:
        "We don't just keep up with the times, we set the pace. The range of our creativity and engineering radar is always scanning for the next big technological leap.",
      icon: <FaChartLine className="text-2xl text-blue-600" />,
    },
    {
      title: "Your Brand, Your Code",
      description:
        "We don't do cookie-cutter campaigns. We get into the depths of your story, objectives, and challenges to engineer solutions tailored to your market reality.",
      icon: <FaCode className="text-2xl text-blue-600" />,
    },
    {
      title: "Truth is in the Numbers",
      description:
        "Designed to move the needle, every deployment is monitored, optimized, and evaluated to ensure maximal Return on Investment for your bottom line.",
      icon: <FaCheckCircle className="text-2xl text-blue-600" />,
    },
    {
      title: "Passionate About Your Success",
      description:
        "We don't just do the job for you – we build with you. Your milestones are our victories, and we dedicate ourselves to greatly exceeding your expectations.",
      icon: <FaUsers className="text-2xl text-blue-600" />,
    },
    {
      title: "Working as One Unified Team",
      description:
        "We function as an elite extension of your leadership. We welcome your input and hold that world-class outcomes emerge from seamless cross-functional collaboration.",
      icon: <FaCogs className="text-2xl text-blue-600" />,
    },
  ];

  const expertise = [
    {
      title: "Search Engine Optimization",
      desc: "Get your business on top of search results with algorithmic precision and qualified traffic.",
      img: assets.seo1,
    },
    {
      title: "Website Design & Development",
      desc: "Fast, responsive, and aesthetically commanding platforms built to convert visitors into clients.",
      img: assets.webdevBanner3,
    },
    {
      title: "Social Media Marketing",
      desc: "Highly engaged community architectures that amplify brand reach and build loyal audiences.",
      img: assets.smm9,
    },
    {
      title: "Pay Per Click Advertising",
      desc: "Maximize ad spend efficiency with precision audience targeting and high-intent acquisition funnels.",
      img: assets.ppc1,
    },
    {
      title: "Mobile App Development",
      desc: "High-performance iOS and Android native apps designed for fluid UX and scalable backend loads.",
      img: assets.appDev2,
    },
    {
      title: "Corporate Branding & Identity",
      desc: "Bespoke brand identities and visual style guides that command authority across global markets.",
      img: assets.branding1,
    },
  ];

  const faqItems = [
    {
      question: "What makes Capyngen different from other technology and marketing agencies?",
      answer:
        "We combine engineering excellence with performance-driven marketing under one roof. Instead of fragmented vendors, you get an integrated team delivering custom software, design, and growth marketing aligned with measurable business metrics.",
    },
    {
      question: "Do you work with startups or only enterprise corporations?",
      answer:
        "We partner with ambitious startups, fast-growing mid-market companies, and large enterprises worldwide. Our engagement models and technology stacks are tailored to scale with your organization's exact growth stage.",
    },
    {
      question: "Where is Capyngen located?",
      answer:
        "Capyngen is headquartered at Tower B3, Spaze I-Tech Park, Sector 49, Gurgaon, Haryana, India, serving a diverse roster of clients globally.",
    },
    {
      question: "What is your approach to transparency and progress tracking?",
      answer:
        "Every client receives dedicated access to project roadmaps, sprint dashboards, and live performance metrics. We conduct regular sprint reviews and provide comprehensive reporting so you are always in complete control.",
    },
    {
      question: "How do we get started working with Capyngen?",
      answer:
        "You can schedule a free discovery consultation through our contact form. Our technical and strategy leads will assess your goals and present a clear, actionable roadmap within 24 to 48 hours.",
    },
  ];

  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Company Overview | Capyngen – Empowering Brands with Digital Excellence
        </title>
        <meta
          name="description"
          content="Capyngen is a full-service digital marketing and technology agency driven by creativity, innovation, and results. From SEO and web development to performance marketing and branding — we help businesses grow smarter and faster."
        />
        <meta
          name="keywords"
          content="Company Overview | Capyngen – Empowering Brands with Digital Excellence"
        />
      </Helmet>

      {/* Hero Section preserved 100% untouched */}
      <Banner
        title="About Capyngen"
        overlayBg="bg-black/70"
        backgroundImage={assets.companyOverview3}
        description={
          <>
            <h2 className="pb-10 text-3xl md:text-5xl font-extrabold">
              Your Success Story Starts Here
            </h2>
            <p>
              At Capyngen, we don't merely sell digital marketing, we create
              digital experiences that have a practical impact on businesses and
              attract new clients.
            </p>
          </>
        }
      />

      {/* Section 1: Who We Are / Overview */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Empowering Brands with Digital & Technological Excellence
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
                <p>
                  We are digital strategists, software architects, and growth
                  specialists dedicated to building modern market leaders.
                  Acting as your strategic technology partner, we help you
                  navigate the evolving digital ecosystem and place your brand
                  exactly where it commands authority.
                </p>
                <p>
                  At Capyngen, our focus is transforming capital investments
                  into self-sustaining engines of business growth. We discard
                  hollow metrics in favor of qualified revenue pipelines,
                  resilient software platforms, and durable customer loyalty.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 rounded-none">
                      <FaCheck className="text-xs" />
                    </div>
                    <div>
                      <h4
                        className="text-base font-bold text-[#070e1d]"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {feat.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-0.5">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#070e1d] hover:bg-blue-600 text-white font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Schedule Consultation <FaArrowRight className="text-xs" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3.5 text-sm uppercase tracking-wider rounded-none transition-colors"
                >
                  Explore Capabilities
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 bg-gray-50 p-2 rounded-none">
              <img
                src={assets.companyOverview2}
                alt="Capyngen Overview"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Sets Us Apart & Our Methodology */}
      <section className="bg-[#070e1d] py-20 px-4 md:px-8 border-b border-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What Sets Us Apart
            </h2>
            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              In a crowded landscape of generic agencies, we don't sell
              cookie-cutter templates. We engineer bespoke digital competitive
              advantages that turn business ambitions into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-[#0b162c] border border-gray-800 p-8 rounded-none relative group hover:border-blue-500 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Zero Copy-Paste Solutions
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  While competitors force pre-packaged playbooks onto your business,
                  we uncover what makes your value proposition distinct. Every
                  architecture and ad funnel is custom-crafted for your operational
                  reality.
                </p>
              </div>

              <div className="bg-[#0b162c] border border-gray-800 p-8 rounded-none relative group hover:border-blue-500 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Our Method — Simple Yet Powerful
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our strategic team investigates customer intent, bottleneck points,
                  and operational goals. We formulate hypothesis-driven execution
                  sprints, deploying code and marketing assets designed to win.
                </p>
              </div>

              <div className="bg-[#0b162c] border border-gray-800 p-8 rounded-none relative group hover:border-blue-500 transition-colors">
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  The Outcome
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Data-backed tactics that do not merely capture casual eye-balls,
                  but systematically convince decision-makers to convert, contract,
                  and retain.
                </p>
              </div>
            </div>

            <div className="border border-gray-800 bg-[#0b162c] p-2 rounded-none">
              <img
                src={assets.companyOverview4}
                alt="Research and Strategy"
                className="w-full h-auto object-cover rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values & Philosophy */}
      <section className="bg-white py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Why Partner With Capyngen?
            </h2>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              The foundational values that shape our code, client relationships,
              and strategic decisions every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-none group hover:border-blue-600 transition-colors duration-200 relative flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors">
                    {val.icon}
                  </div>

                  <h3
                    className="text-xl font-bold text-[#070e1d] mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {val.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>FOUNDATIONAL VALUE</span>
                  <span className="text-blue-600 font-semibold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Our Expertise (5th Section: Royal Blue) */}
      <section className="bg-[#2563eb] py-20 px-4 md:px-8 border-b border-blue-500/30 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Core Areas of Expertise
            </h2>
            <p className="mt-4 text-blue-100 text-base leading-relaxed">
              Full-lifecycle digital services engineered for scalability,
              conversion optimization, and technological resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0b162c] border border-gray-800 rounded-none p-8 relative group transition-colors duration-200 hover:border-blue-400 flex flex-col justify-between shadow-2xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-blue-400 transition-colors" />

                <div>
                  <div className="w-full h-48 mb-6 overflow-hidden border border-gray-800 rounded-none">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-none"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>DISCIPLINE SPEC</span>
                  <span className="text-blue-400 font-semibold">0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: High-Impact CTA Banner (6th Section: White) */}
      <section className="bg-white py-20 px-4 md:px-8 text-center border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            className="text-3xl md:text-5xl font-extrabold text-[#070e1d] leading-tight mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Ready for a Complete Digital Transformation?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            In the modern era, playing the game well is not enough. You have to
            be memorable. Let's convert your business vision into an undeniable
            digital authority.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block bg-[#2563eb] hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-none shadow-lg transition-colors uppercase tracking-wider text-sm"
            >
              Let’s Transform Together
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent text-[#070e1d] border-2 border-[#070e1d] hover:bg-[#070e1d] hover:text-white font-bold px-8 py-3.5 rounded-none transition-colors uppercase tracking-wider text-sm"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: FAQs (7th Section: Dark Black Blue) */}
      <FAQSection2 items={faqItems} bgColor="bg-[#070e1d]" />
    </div>
  );
};

export default CompanyOverview;
