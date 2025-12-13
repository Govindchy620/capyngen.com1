import React, { useState, useEffect } from "react";

/* ---------------- Icons ---------------- */

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronDownIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-5 w-5 text-cyan-200 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

/* -------- Content Data (All Sections) -------- */

const introSection = {
  title: "Best CRM Management Company in the World",
  content:
    "The modern digital era is marked by a high level of speed and the necessity of the business to have sophisticated tools to interact with customers and promote development. The CRM management software provided by Capyngen fits that perfectly - it provides smooth automation, robust analytics, and compatibility with the cloud. Capyngen is considered to be one of the best CRM management solutions in India, offering innovative, secure as well as scaled systems that organizations in any industry trust.",
};

const uniqueSection = {
  title: "What Capyngen Does Uniquely",
  content:
    "Next-generation CRM management software is provided by Capyngen that is aimed at changing the way customers are turned into the focus, enhance efficiency, and speed up business development. As a provider of some of the Best CRM management solutions in India, Capyngen is a combination of AI and automation tools and simple cloud interfaces that engage small, medium, and large businesses. Their personalized service meets the demand of the Cloud-based CRM systems India companies require, whereas the support and innovation are distinguishing this Top CRM software company. Regardless of whether the business is located in Delhi, Gurugram or elsewhere, the business uses Capyngen secure, scalable and integrated CRM tools to promote sales, marketing and service excellence.",
};

const definitionSection = {
  title: "What are CRM Management Solutions?",
  content:
    "CRM management solutions are used to store customer information, workflow automation, and analytics to make more intelligent decisions. Core Systems enable the businesses to create, sustain and maximize relationships with the customers by monitoring leads, sales, messages and support requests. Capyngen offers CRM solutions in Gurugram and the entire of India with easy-to-use dashboards and strong back-end infrastructure. Their solutions also allow the teams to work together, react more quickly to the needs of clients and personalize each contact to be more retained and developed. Such targeted CRM management solutions in Gurugram in a densely populated market are the key to sustainable competitive advantage.",
};

const trustSection = {
  title: "Why Businesses Trust Capyngen",
  content:
    "Capyngen has become a well-known company with trustworthy, inventive and customer-oriented CRM products with some of the Top 10 CRM management company India. Their Cloud-based CRM systems India can easily fit both the mobile and desktop environment that would fit the modern hybrid work environment. The clients love the transparent pricing offered by the company, its responsive customer services and constant updating of features according to the Industry trends. Being the innovative CRM software providers Gurugram and across the country, Capyngen will constantly keep the business data safe and workflow effective due to its compliance, security, and scalability practices.",
};

const advantagesSection = {
  title: "Advantages of Implementing CRM Management Solutions",
  intro:
    "The use of CRM management software has several advantages that comprise:",
  items: [
    "Increased customer interaction by giving them personalized and timely messages.",
    "Higher conversion of sales through automated lead nurturing and pipeline tracking.",
    "Instant access to customer information among teams enhancing work and service quality.",
    "Statistical information and reporting enhancing strategy and marketing.",
    "Saved operational expenses through work simplification and removal of manual work.",
  ],
  outro:
    "Organizations also enjoy the benefits of increased revenue and customer satisfaction which can be measured by investing in a reputable CRM software company in Delhi such as Capyngen.",
};

const varietiesSection = {
  title: "CRM Management Solutions Varieties",
  intro:
    "The variations of CRM provided by Capyngen are customized to meet various business requirements:",
  items: [
    "Sales Force Automation: Optimize sales cycles and prospects.",
    "Marketing Automation: Carry out segmentation campaigns and monitor ROI.",
    "Customer Service & Support: Ticket management and improving client support journeys.",
    "Analytics & Reporting: Calculate performance using configurable dashboards.",
    "Mobile CRM: Be productive with mobile access to distant teams.",
    "Industry-Specific Solutions: Industry-specific features such as finance, retail and healthcare.",
  ],
  outro:
    "These varieties put Capyngen towards the list of the Top 10 CRM management in Gurugram and others.",
};

const chooseSection = {
  title: "How to Choose the Best CRM Management Solution for Your Business",
  intro: "In choosing the appropriate CRM system, one has to evaluate:",
  items: [
    "Growth flexibility with your business.",
    "Simplicity of compatibility with other software.",
    "Mobile accessibility and simplicity to the user interface.",
    "Security capabilities were in line with the laws of data protection.",
    "Flexible automation that supports your processes.",
    "Vendor customer training and support.",
  ],
  outro:
    "In looking at alternatives, CRM management solutions in Gurugram such as Capyngen that provide end-to-end demos, customer reviews, and business-support are worth considering to support the alignment of the business objectives.",
};

const trendsSection = {
  title: "Future Trends in CRM Management Solutions",
  content:
    "In the future, CRM management software will be enhanced with additional AI-driven predictive analytics, natural language processing and more intensified IoT connections to provide immediate customer information. Hyper-personalization, omnichannel interaction, and data security secured with blockchains to establish trust and transparency are becoming increasingly popular. Capyngen does not lag behind in these technologies, as it remains in the list of Top 10 CRM software providers India that companies trust to keep their lead.",
};

const whyChooseSection = {
  title: "Why Choose Our CRM Management Solutions?",
  intro:
    "The CRM management software used by Capyngen is unique as it features:",
  items: [
    "Multilingual local support in India.",
    "Flexible Cloud-based CRM systems India reducing the initial infrastructure investment.",
    "High security standards in accordance with India data regulation model.",
    "Constant updates and innovation on the basis of the user feedback.",
    "Pricing that is affordable to start-ups to companies.",
    "Relied upon by both large and small corporations.",
  ],
  outro:
    "An investment in Capyngen will guarantee intelligent investment in scalable and forward-looking CRM technology that will help optimize business value in India.",
};

const faqs = [
  {
    q: "Q1. So what is CRM management software?",
    a: "It is a software that assists in handling customer information and auto-sales, marketing and support.",
  },
  {
    q: "Q2. What are the Top CRM management solutions in India?",
    a: "Capyngen is one of the top companies that provide scalable and secure Cloud-based CRM systems India which businesses trust.",
  },
  {
    q: "Q3. What is a Cloud-based CRM system in India?",
    a: "It is an online, anytime CRM, which is flexible and reduces the infrastructure expenses.",
  },
  {
    q: "Q4. Where do you get the best CRM software company?",
    a: "Find established track records, license, customer reviews and strong features such as Capyngen.",
  },
  {
    q: "Q5. What is Capyngen, the CRM software company in Delhi?",
    a: "Local knowledge and global technology, regulatory, and customized service.",
  },
  {
    q: "Q6. Does Gurugram have CRM management solutions?",
    a: "Yes, Capyngen will provide them with regional support and customized features.",
  },
  {
    q: "Q7. What are the benefits of CRM solutions in Gurugram to businesses?",
    a: "They enhance the level of customer engagement, workflow automation, and provide real-time insights.",
  },
  {
    q: "Q8. What are the best aspects of the solutions of the Top 10 CRM management company India?",
    a: "Ease of use, analytics, smooth integrations, and mobile availability.",
  },
  {
    q: "Q9. What is the speed of the implementation of CRM by Capyngen?",
    a: "Implementation schedules depend, but in most cases, clients are in operation in a few weeks.",
  },
  {
    q: "Q10. Which assistance does CRM software supplier Gurugram offer?",
    a: "24/7 customer services, training, and customized consulting.",
  },
];

/* ---------------- UI Components ---------------- */

const Background = () => (
  <div className="fixed inset-0 -z-10 bg-slate-900"></div>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`glass rounded-2xl p-8 ${className}`}>{children}</div>
);

const NavLink = ({ href, children, mobile = false, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${
      mobile ? "block py-3 text-lg" : "px-4 py-2"
    } text-gray-300 hover:text-white transition font-medium`}
  >
    {children}
  </a>
);

/* ----------------- Main Component ----------------- */

const CrmManagementSoftwareHiddenPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (idx) => setOpenFaqIndex(openFaqIndex === idx ? null : idx);

  return (
    <div className="text-slate-100 min-h-screen bg-[#0B1120]">
      <Background />

      {/* HERO */}
      <header className="py-30 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-12 text-white leading-normal">
          Best CRM Management <br /> Company in the World
        </h1>
        <p className="text-xl max-w-5xl mx-auto">{introSection.content}</p>
      </header>

      {/* CONTENT SECTIONS */}
      <main className="max-w-7xl mx-auto px-4 py-24">
        {/* Unique Section */}
        <section id="unique">
          <GlassCard className="transform hover:-translate-y-1">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 pb-5">
                  {uniqueSection.title}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {uniqueSection.content}
                </p>
              </div>
              <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden glass border-0">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="CRM Dashboard Analytics"
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </GlassCard>
        </section>

        {/* Definition & Trust Grid */}
        <section id="solutions" className="grid md:grid-cols-2 gap-8 my-20">
          <GlassCard className="h-full flex flex-col justify-center border-l-4 border-l-cyan-500">
            <h2 className="text-2xl font-bold mb-4 text-cyan-100">
              {definitionSection.title}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {definitionSection.content}
            </p>
          </GlassCard>
          <GlassCard className="h-full flex flex-col justify-center border-l-4 border-l-purple-500">
            <h2 className="text-2xl font-bold mb-4 text-purple-100">
              {trustSection.title}
            </h2>
            <p className="text-slate-300 leading-relaxed">
              {trustSection.content}
            </p>
          </GlassCard>
        </section>

        {/* Advantages List Section */}
        <section id="benefits my-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl -z-10 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
              {advantagesSection.title}
            </h2>
            <GlassCard>
              <p className="text-xl text-slate-300 mb-8 font-light">
                {advantagesSection.intro}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {advantagesSection.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                  >
                    <CheckCircleIcon />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
                <p className="text-lg text-cyan-100 italic">
                  {advantagesSection.outro}
                </p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Varieties & How to Choose */}
        <section id="varieties" className="space-y-12 my-20">
          {/* Varieties */}
          <GlassCard className="border-t-4 border-t-pink-500">
            <h2 className="text-3xl font-bold mb-6 text-pink-100">
              {varietiesSection.title}
            </h2>
            <p className="text-slate-300 mb-8">{varietiesSection.intro}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {varietiesSection.items.map((item, idx) => {
                const [title, desc] = item.split(": ");
                return (
                  <div
                    key={idx}
                    className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors border border-white/5 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-pink-400 font-bold">{idx + 1}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-slate-400">{desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-slate-400 text-sm border-t border-white/10 pt-4">
              {varietiesSection.outro}
            </p>
          </GlassCard>

          {/* How to Choose */}
          <GlassCard className="border-t-4 border-t-yellow-500 my-20">
            <h2 className="text-3xl font-bold mb-6 text-yellow-100">
              {chooseSection.title}
            </h2>
            <p className="text-slate-300 mb-8">{chooseSection.intro}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              {chooseSection.items.map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 rounded-full border border-yellow-500/30 bg-yellow-500/5 text-yellow-100 hover:bg-yellow-500/10 transition-colors cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-300 border-l-4 border-yellow-500 pl-6 py-2 bg-white/5 rounded-r-lg">
              {chooseSection.outro}
            </p>
          </GlassCard>
        </section>

        {/* Trends & Why Choose Us */}
        <section className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <GlassCard className="h-full">
              <h2 className="text-3xl font-bold mb-6">{trendsSection.title}</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="leading-relaxed text-slate-300">
                  {trendsSection.content}
                </p>
              </div>
            </GlassCard>
          </div>
          <div className="md:col-span-2">
            <GlassCard className="h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {whyChooseSection.title}
              </h2>
              <p className="mb-6 text-slate-300">{whyChooseSection.intro}</p>
              <ul className="space-y-4 mb-8">
                {whyChooseSection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-slate-200"
                  >
                    <span className="mr-3 text-cyan-400">•</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-cyan-200 font-medium">
                {whyChooseSection.outro}
              </p>
            </GlassCard>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="my-20">
          <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>

          <div className="space-y-4 max-w-7xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-xl">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <span>{faq.q}</span>
                  <ChevronDownIcon isOpen={openFaqIndex === i} />
                </button>

                {openFaqIndex === i && (
                  <div className="px-6 pb-4 text-slate-300 text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CrmManagementSoftwareHiddenPage;
