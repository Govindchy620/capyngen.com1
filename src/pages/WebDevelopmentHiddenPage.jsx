import React, { useState } from "react";
import {
  Sparkles,
  Cpu,
  Palette,
  Target,
  Plus,
  Code2,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Layout,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  TrendingUp,
  Users,
  ShieldCheck,
  Award,
  HeartHandshake,
  Briefcase,
  ShoppingBag,
  Rocket,
  Building2,
  Stethoscope,
  MessageSquare,
  Mail,
  Search,
  PenTool,
  Settings,
  Zap,
  HelpCircle,
  Minus,
} from "lucide-react";

const WebDevelopmentHiddenPage = () => {
  const services = [
    {
      title: "CSS, JavaScript, and HTML Development",
      description:
        "Templates do not exist in our system. Every site that we develop is an individual site that is designed with clean HTML, CSS and JavaScript so as to portray the personality of your brand. The end-result is a fast, sleek and user-friendly site capable of being lightweight, high-performance, and able to provide high-speed and stability. Being a leading web development company in Gurgaon, we make sure that your presence on the web is impeccable on any device.",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop",
    },
    {
      title: "WordPress Development",
      description:
        "Our WordPress professionals create and create user-friendly websites that are scalable and optimized on search engines. It could be a portfolio, blog or a corporate site, but it is a WordPress web development agency leaving you with total control of the content management and updates. Our concentration is on developing beautiful websites that are attractive, engaging and converting websites.",
      image:
        "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Shopify and E-commerce platforms",
      description:
        "Online business is made easier by Capyngen with our eCommerce website development services. We create quick, secure and high converting Shopify and bespoke eCommerce websites that provide hassle-free shopping experiences, secure check-outs and online payments, assisting you to increase sales and customer satisfaction.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "React & Angular Development",
      description:
        "React web application development and Angular web development services provided by Capyngen offer services that are dynamic, interactive and scalable. Our front-end technologies are the most current technologies used to make user interfaces very smooth to work with and yet they perform exceptionally well on all desktops, tablets, and smartphones.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "PHP & Laravel Development",
      description:
        "We use powerful frameworks such as PHP and Laravel designed by our backend developers to come up with high-performance, scalable, and secure systems. In our web development services, your site is recession-proof, it can easily scale and grow your business long-term.",
      image:
        "https://images.unsplash.com/photo-1599507593499-a3f7d7d97663?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "CMS & Custom Solutions",
      description:
        "Our specialty is to develop tailor CMS based on WordPress, Joomla, Drupal, and more. The services we are offering on CMS development enable you to develop and control your website easily and freely, enabling you to operate easily and have full control on the content and performance.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    },
  ];
  const features = [
    {
      title: "Custom Website Development",
      description:
        "We plan and create websites which reflect the actual identity of your brand. Each design aspect, feature, and interaction is designed with a strategic purpose of being in line with your business goals.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Mobile-Friendly Design Awareness",
      description:
        "Being a leading web development company in Gurgaon, Capyngen will make sure that your site will offer an equally outstanding experience to all your devices desktop, mobile, or tablet.",
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "E-commerce Development",
      description:
        "We develop smooth and user-friendly online shops that make the purchasing process less challenging to your customers. We create websites that are easy to use that help increase conversion rates.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "CMS Development",
      description:
        "WordPress, Joomla and Drupal, we develop effective user-friendly CMS which make it easy to manage the websites for any business.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Web Application Development",
      description:
        "Being a market leader in web application development, we develop high-power, scalable web applications that provide performance, flexibility, and engagement to the user.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Progressive Web Apps (PWA)",
      description:
        "Capyngen builds PWAs, which are similar to native mobile apps, fast, responsive, and reliable, without an internet connection.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "API Integration Services",
      description:
        "We amalgamate APIs, CRMs, payment gateways and third-party applications to make sure your site functions perfectly and helps your operations to be more efficient.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Web site Back-ups and Support",
      description:
        "Our maintenance services will keep your website safe, secure, and performance-optimized, so that your business is not left behind.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Performance Optimization",
      description:
        "We optimize all the features: the images, code, caching, and loading speed to provide high performance and the outstanding user experience.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "SEO-Friendly Development",
      description:
        "We will base our process of website development on the best practices of Google in terms of SEO. We create fast, structurally and search engine optimized websites.",
      image:
        "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "UI/UX Design Services",
      description:
        "We are creative and functional to design user interfaces that capture the attention of visitors, have better usability, and increase conversion rates.",
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Multilingual Support",
      description:
        "Grow your international business through multilingual websites that resonate with the various people you reach.",
      image:
        "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cloud-Based Web Solutions",
      description:
        "Our cloud-based solutions will help us to create secure, scalable, and high-performance websites which will meet your business needs as they grow.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Landing Page Development",
      description:
        "Our landing pages are designed with high conversion to gain leads, make sales and even improve on marketing campaigns.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Analytics Integration",
      description:
        "We use such tools as Google Analytics and Hotjar to monitor the user behavior, optimize the performance of the site and also, to advance the marketing understanding.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop",
    },
  ];
  const reasons = [
    {
      title: "Knowledge of the most recent Technologies",
      description:
        "Our frameworks and tools are modern in order to provide strong web development solutions.",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
    },
    {
      title: "Affordable, reliable, and scalable Solutions",
      description:
        "Gurgaon based web development services are offered to startups, SMEs, and big businesses.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
    },
    {
      title: "Professional Crew with easy to use designs",
      description:
        "Interactive, mobile-friendly and responsive websites are designed by our developers.",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Focus on Safety, Speed & SEO",
      description:
        "All our projects of website development are safe, fast and search-friendly.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      title: "Brand Recognition and Credibility",
      description:
        "A well-developed web site makes your business credible and trusted by the customers.",
      icon: <Award className="w-6 h-6 text-white" />,
    },
    {
      title: "Increased Customer Loyalty and Engagement",
      description:
        "Web application development improves our interaction, satisfaction, and conversions.",
      icon: <HeartHandshake className="w-6 h-6 text-white" />,
    },
  ];
  const industries = [
    {
      name: "Healthcare & Education",
      description: "Authoritative, convenient websites of institutions.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
      icon: <Stethoscope className="w-6 h-6 text-white" />,
    },
    {
      name: "Real Estates and Travel",
      description: "Appealing and educative sites.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
      icon: <Building2 className="w-6 h-6 text-white" />,
    },
    {
      name: "Startups & Small Businesses",
      description: "Low-cost and scalable digital solutions.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      name: "E-commerce & Retail",
      description: "Online stores with high performance to achieve sales.",
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop",
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
    },
    {
      name: "Corporate Enterprises",
      description: "Custom and enterprise level web solutions.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      icon: <Briefcase className="w-6 h-6 text-white" />,
    },
    {
      name: "Trading Sites",
      description: "Rapid, safe and quick web sites in trade business.",
      image:
        "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
    },
  ];
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis and Planning",
      description:
        "We know about your business objectives, target market and project specifications.",
      icon: <Search className="w-6 h-6 text-white" />,
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description:
        "The approval and refinement of wireframes and design prototypes are done.",
      icon: <PenTool className="w-6 h-6 text-white" />,
    },
    {
      number: "03",
      title: "Front-End and Back-End Development",
      description: "Our websites are responsive, functional and scaleable.",
      icon: <Code2 className="w-6 h-6 text-white" />,
    },
    {
      number: "04",
      title: "Quality Assurance and Testing",
      description:
        "Our quality assurance team will provide perfection in the functionality of every device and browser.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      number: "05",
      title: "Launch & Deployment",
      description:
        "Your site is launched with complete security and performance optimization.",
      icon: <Rocket className="w-6 h-6 text-white" />,
    },
    {
      number: "06",
      title: "Maintenance & Support",
      description:
        "Constant improvements, backups and maintenance to ensure that your site is current.",
      icon: <Settings className="w-6 h-6 text-white" />,
    },
  ];
  const faqData = [
    {
      question: "What is website development?",
      answer:
        "The art of creating and sustaining websites, such as design, writing, and optimization is known as website development.",
    },
    {
      question:
        "What is the importance of professional development of a website?",
      answer:
        "A professional site makes your brand image better, it improves the user experience and it boosts the conversions.",
    },
    {
      question: "What are the services involved in development of sites?",
      answer:
        "It involves web design, front-end and back-end development, search engine optimization, and maintenance.",
    },
    {
      question: "The time spent in building a website?",
      answer:
        "Most of the projects require 3-8 weeks depending on the level of complexity.",
    },
    {
      question: "Is Capyngen capable of doing custom website development?",
      answer:
        "Yes, we are specialists in custom website development that suit the individual needs of the clients.",
    },
    {
      question: "Do you offer responsive site design?",
      answer:
        "Absolutely. All Capyngen websites are responsive and can be used in any device.",
    },
    {
      question: "What CMS systems do you deal with?",
      answer:
        "Our websites are developed on WordPress, Joomla, Drupal and custom CMS.",
    },
    {
      question: "Are you able to design e-commerce websites?",
      answer: "Yes, we develop Shopify and WooCommerce.",
    },
    {
      question: "Are you a web application development company?",
      answer:
        "Our web application development team is able to create secure, dynamic, and scalable web applications.",
    },
    {
      question: "What do you do to assure SEO development?",
      answer:
        "We also adhere to the most relevant SEO principles, optimize the organization of sites and their speed.",
    },
    {
      question: "Is it possible to incorporate third-party APIs and tools?",
      answer: "Yes, we have full API integration services by our developers.",
    },
    {
      question: "Is it a maintenance company of websites?",
      answer:
        "Yes, we provide constant support, updates and performance tracking.",
    },
    {
      question: "Why is Capyngen the best web development corporation?",
      answer:
        "We are different in the web development industry because we combine creativity, technology and strategy.",
    },
    {
      question: "Are you able to create multilingual websites?",
      answer:
        "Yes, we can provide multilingual website development to reach the international audience.",
    },
    {
      question: "Do you provide landing page development?",
      answer:
        "Yes, we create landing pages that are high converting and increase leads and sales.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  const renderFAQItem = (item, originalIndex) => {
    const isOpen = openIndex === originalIndex;
    return (
      <div
        key={originalIndex}
        className={`group rounded-xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? "bg-slate-900/80 border-brand-500/50 shadow-lg shadow-brand-500/10"
            : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
        }`}
      >
        <button
          onClick={() => toggleFAQ(originalIndex)}
          className="w-full text-left p-5 flex items-start justify-between gap-4"
        >
          <span
            className={`font-semibold text-lg transition-colors ${
              isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
            }`}
          >
            {item.question}
          </span>
          <span
            className={`mt-1 p-1 rounded-full border transition-all duration-300 ${
              isOpen
                ? "bg-brand-500 text-white border-brand-500 rotate-180"
                : "bg-slate-800 text-slate-400 border-slate-700 group-hover:border-slate-600"
            }`}
          >
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
            {item.answer}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section className="relative py-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-500 opacity-20 blur-[100px]"></div>
          <div className="absolute right-[-100px] bottom-[-100px] -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600 opacity-10 blur-[120px] animate-blob"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                  Build Future-Ready Websites with Capyngen
                </h2>

                <div className="flex flex-wrap gap-8 mt-14">
                  <div className="flex items-center gap-5 bg-slate-800/50 rounded-lg px-8 py-5 border border-slate-700/50">
                    <div className="p-2 bg-brand-500/20 rounded-md">
                      <Code2 className="w-5 h-5 text-brand-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium">
                        Tech Stack
                      </span>
                      <span className="text-sm text-slate-200 font-bold">
                        Cutting-Edge
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 bg-slate-800/50 rounded-lg px-8 py-5 border border-slate-700/50">
                    <div className="p-2 bg-indigo-500/20 rounded-md">
                      <Globe className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 font-medium">
                        Global Reach
                      </span>
                      <span className="text-sm text-slate-200 font-bold">
                        Scalable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="prose prose-lg prose-invert text-slate-300">
                <p className="leading-relaxed text-lg md:text-xl font-light">
                  With{" "}
                  <span className="font-semibold text-white">Capyngen</span>,
                  the number-one web development company in India, you can
                  change your ideas into interactive and responsive ones along
                  with scalable digital experiences.
                </p>
                <br />
                <p className="leading-relaxed text-lg">
                  With our web development services professionally, we assist
                  businesses in winning over customers as well as adding value
                  to their brands and keep pace in the digital arena.
                </p>
                <br />
                <p className="leading-relaxed text-lg">
                  Be it a startup or a big organization, our professional
                  developers will make sure that your site provides even better
                  performance, aesthetics as well as business development.
                </p>
              </div>

              <div>
                <button className="border border-white group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 overflow-hidden">
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
              Why Does Web Development Matter Today?
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full" />
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-indigo-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <p className="text-slate-300 leading-relaxed text-lg">
                  The necessity to have a good online presence has ceased to be
                  an option in the modern competitive market space. As a
                  reputable web development company, Capyngen is of the opinion
                  that any business is founded on a web site. Our website
                  development services enable the companies to gain credibility,
                  visitors, and engagement.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-slate-900 p-8 rounded-2xl border border-slate-800">
                <p className="text-slate-300 leading-relaxed text-lg">
                  No matter what company you are in and how big you are, our
                  tailor-made custom website development will make your brand
                  shine. Stunning UI/UX design to feature-rich functionality
                  will make each aspect of your web application development
                  creation precise. The web development skills of Capyngen will
                  ensure that your online experience is easy to use and
                  interesting to your audience to enhance your online presence.
                </p>
              </div>
            </div>
          </div>

          {/* The Equation Visualized */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <p className="text-2xl md:text-4xl font-bold text-slate-200">
                Web Development =
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
              {/* Technologies */}
              <div className="flex flex-col items-center p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 rounded-full bg-brand-500/10 text-brand-400 mb-4">
                  <Cpu size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Technologies
                </h3>
                <p className="text-sm text-slate-400 text-center">
                  Robust Foundations
                </p>
              </div>

              {/* Plus Sign */}
              <div className="hidden md:flex justify-center text-slate-600 absolute left-1/3 -ml-3 pointer-events-none">
                <Plus size={24} />
              </div>

              {/* Creativity */}
              <div className="flex flex-col items-center p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 mb-4">
                  <Palette size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Creativity
                </h3>
                <p className="text-sm text-slate-400 text-center">
                  Unique Design
                </p>
              </div>

              {/* Plus Sign */}
              <div className="hidden md:flex justify-center text-slate-600 absolute right-1/3 -mr-3 pointer-events-none">
                <Plus size={24} />
              </div>

              {/* Strategy */}
              <div className="flex flex-col items-center p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
                <p className="text-sm text-slate-400 text-center">
                  Business Growth
                </p>
              </div>
            </div>

            <div className="text-center mt-12 text-slate-500 text-sm md:hidden">
              (Technologies + Creativity + Strategy)
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Our Web Development Services
            </h2>
            <div className="h-1 w-20 bg-brand-500 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-lg">
              Comprehensive solutions tailored to elevate your digital presence.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-md overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors line-clamp-2">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 lg:py-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-brand-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-500/10 via-slate-950 to-slate-950" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Transform Your Online Presence with Capyngen
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We will ensure that we create digital experiences that attract as
            well as retain your customers. Collaborate with Capyngen, which is
            the best web development company in India, to make your brand vision
            come true.
          </p>

          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-full transition-all duration-300 hover:bg-brand-50 hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)]">
            <span>Get Started Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <Layout className="w-3 h-3" />
              <span>Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-3xl">
              Our Web Development Features
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full" />
          </div>

          {/* Masonry-like Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-md overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-20" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content */}
                <div className="p-8 pt-2 flex-1 flex flex-col relative z-30 -mt-10">
                  <div className="bg-slate-800 w-12 h-12 rounded-lg flex items-center justify-center border border-slate-700 shadow-lg mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 overflow-hidden bg-slate-950">
        {/* Background with distinctive gradient to separate from previous section */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/40 via-slate-950 to-slate-950" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-image-gradient" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm shadow-2xl overflow-hidden relative">
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Book Expert Consulting Now!
                </h2>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    Transform your concepts into effective online experiences.
                    Use{" "}
                    <span className="text-white font-semibold">Capyngen</span>,
                    the best web development company in India, to help you with
                    professional custom-built sites that would provide results.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                  <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl transition-all duration-300 hover:bg-brand-50 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    <Calendar className="w-5 h-5 text-brand-600" />
                    <span>Schedule Free Call</span>
                  </button>
                  <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-slate-800 hover:border-slate-600">
                    <span>View Portfolio</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    <span>No Obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    <span>Direct Expert Access</span>
                  </div>
                </div>
              </div>

              {/* Visual Representation / Card */}
              <div className="w-full lg:w-1/2 relative hidden md:block">
                <div className="relative mx-auto max-w-md bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                  {/* Header of the card */}
                  <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center font-bold text-white">
                        CP
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">
                          Capyngen Expert
                        </h4>
                        <p className="text-xs text-slate-400">
                          Senior Consultant
                        </p>
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 text-xs px-2 py-1 rounded font-medium border border-emerald-500/20">
                      Online
                    </div>
                  </div>

                  {/* Calendar simulation */}
                  <div className="space-y-4">
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 flex items-center justify-between group cursor-pointer hover:border-brand-500/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="bg-slate-800 p-2 rounded text-slate-400">
                          10:00 AM
                        </div>
                        <div className="text-slate-300 text-sm">
                          Strategy Session
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-500" />
                    </div>
                    <div className="bg-slate-900 rounded-lg p-4 border border-slate-800 flex items-center justify-between group cursor-pointer hover:border-brand-500/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="bg-slate-800 p-2 rounded text-slate-400">
                          02:00 PM
                        </div>
                        <div className="text-slate-300 text-sm">
                          Technical Audit
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-500" />
                    </div>
                    <div className="bg-brand-600 rounded-lg p-4 border border-brand-500 flex items-center justify-between shadow-lg shadow-brand-500/20 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-2 rounded text-white font-bold">
                          04:30 PM
                        </div>
                        <div className="text-white text-sm font-bold">
                          Your Project Discussion
                        </div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-brand-600" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom note */}
                  <div className="mt-8 text-center">
                    <p className="text-xs text-slate-500">
                      Secure your spot for a transformative session.
                    </p>
                  </div>
                </div>

                {/* Background decorative blob behind card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/20 blur-[80px] -z-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Glow Orbs */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Why Choose Capyngen for Web Development?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Partner with a team dedicated to excellence, innovation, and your
              business growth through cutting-edge digital solutions.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/60 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative w-14 h-14 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-full h-full bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center shadow-inner group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-purple-600 transition-all duration-300">
                      {reason.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-100 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-slate-950">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
              Tailored digital expertise across diverse business landscapes.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-500 transition-colors duration-300">
                      {industry.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {industry.name}
                    </h3>

                    <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-slate-300 text-sm leading-relaxed pt-2">
                        {industry.description}
                      </p>
                    </div>

                    {/* Always visible on mobile */}
                    <p className="text-slate-400 text-sm leading-relaxed md:hidden">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
              Contact Us
            </h2>

            <h3 className="text-xl md:text-2xl text-slate-200 font-medium mb-6">
              Are you willing to make your business shine on the internet?
            </h3>

            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact <span className="text-white font-semibold">Capyngen</span>{" "}
              which is your reliable web development company in India to get
              custom website development services according to your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-full transition-all duration-300 hover:bg-brand-50 hover:scale-105 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] w-full sm:w-auto">
                <Mail className="w-5 h-5 text-brand-600" />
                <span>Contact Capyngen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 border border-slate-700 text-white font-semibold rounded-full transition-all duration-300 hover:bg-slate-800 hover:border-slate-600 w-full sm:w-auto">
                <MessageSquare className="w-5 h-5" />
                <span>Start a Chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Our Development Process
            </h2>
            <p className="text-slate-400 text-lg">
              Our web development process is systematic and effective in order
              to achieve smooth and effective web development outcomes:
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand-500 to-transparent opacity-50"></div>
            </div>

            <div className="space-y-12 md:space-y-24">
              {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 w-full pl-20 md:pl-0 md:w-auto">
                      <div
                        className={`relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-brand-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 group ${
                          isEven ? "md:ml-12" : "md:mr-12"
                        }`}
                      >
                        {/* Step Number */}
                        <div className="absolute -top-6 right-8 text-6xl font-black text-slate-800/50 select-none group-hover:text-slate-800 transition-colors">
                          {step.number}
                        </div>

                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="md:hidden w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center border border-brand-500/20">
                              {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-slate-400 leading-relaxed text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 z-20 group-hover:border-brand-500 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(14,165,233,0.6)]"></div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Value Proposition */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Create Powerful Websites <br />
                That Perform
              </h2>

              <div className="prose prose-lg prose-invert text-slate-400">
                <p className="leading-relaxed">
                  We are interested in the success of your business. Through the
                  company,{" "}
                  <span className="text-white font-medium">
                    Capyngen web development services
                  </span>
                  , you will have responsive, high speed and scalable websites
                  that will boost your web presence.
                </p>
              </div>

              {/* Performance Metrics Visualization */}
              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">
                    100%
                  </span>
                  <span className="text-sm text-slate-500">
                    Responsive Design
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col">
                  <span className="text-3xl font-bold text-white mb-1">
                    90+
                  </span>
                  <span className="text-sm text-slate-500">
                    Google PageSpeed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-500 via-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/20">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Get in Touch
                    </h3>
                    <p className="text-brand-400 text-sm font-medium text-white">
                      Start your digital journey
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <p className="text-xl text-white font-medium leading-snug">
                    Desire a site that works in favor of your business?
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Contact{" "}
                    <span className="text-white font-semibold">Capyngen</span>,
                    the best web development company in India, to develop
                    tailor-made websites that are aesthetically pleasing, easy
                    to use and optimized to the search engines.
                  </p>
                </div>

                <button className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-slate-950 font-bold rounded-xl transition-all duration-300 hover:bg-brand-50 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-lg">
              Find answers to common questions about our web development
              services, processes, and technologies.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col gap-4">
              {leftColumn.map((item, index) => renderFAQItem(item, index))}
            </div>
            <div className="flex flex-col gap-4">
              {rightColumn.map((item, index) =>
                renderFAQItem(item, index + midPoint)
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentHiddenPage;
