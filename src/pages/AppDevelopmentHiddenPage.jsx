import React, { useState } from "react";

// --- SVGs & Icons ---
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
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

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0"
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
    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
      isOpen ? "transform rotate-180" : ""
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

// --- Content Data ---
const techStack = {
  languages: "Java, Kotlin, Swift, React Native, Flutter, Angular, and others.",
  data: "Firebase, MySQL, MongoDB, and PostgreSQL.",
  cloud: "Microsoft Azure, Google Cloud, AWS.",
  tools: "Android Studio, Xcode, Visual Studio Code, Figma, Zeplin.",
  qa: "Automated and manual testing to achieve perfect results.",
};

const processSteps = [
  {
    title: "Requirement Analysis",
    desc: "Know what you want to do and what your target audience is.",
  },
  {
    title: "UI/UX Design",
    desc: "The design of user interfaces that are easy to use.",
  },
  {
    title: "Prototype & Wireframes",
    desc: "Constructing initial images of the features of your app.",
  },
  {
    title: "Agile Development",
    desc: "Rapid and agile mobile app development solutions.",
  },
  {
    title: "Quality Assurance",
    desc: "Intense testing to produce bugs free delivery.",
  },
  {
    title: "Deployment",
    desc: "This is the publishing of your app in the stores or through enterprise solutions.",
  },
  { title: "Maintenance & Support", desc: "Ongoing enhancement and growth." },
];

const faqs = [
  {
    q: "Q1. What is application development and how will it help my business?",
    a: "App development develops programs on phones to enhance the levels of engagement and sales.",
  },
  {
    q: "Q2. Which company should I select in the development of an app?",
    a: "Choose a mobile app development firm that has experience and has good customer reviews.",
  },
  {
    q: "Q3. Why is Capyngen regarded as the best app development services in Gurgaon?",
    a: "We are the finest mobile app development company in Gurgaon because of our technical prowess and customer-centric nature of the business.",
  },
  {
    q: "Q4. Do you offer both Android and iOS application development?",
    a: "Yes, we are a cross-platform experienced android app company.",
  },
  {
    q: "Q5. Why is your mobile application development special?",
    a: "Our in-house application development offers an agile approach and high design.",
  },
  {
    q: "Q6. What is the time required to build a mobile application?",
    a: "As a professional app development agency, we guarantee quality timelines of delivery in a fast manner.",
  },
  {
    q: "Q7. Do you have the capability to upgrade an already existing mobile application?",
    a: "Yes, we also have a mobile app development company which also does redesign and upgrade.",
  },
  {
    q: "Q8. How is custom app development services secured?",
    a: "All apps are based on encryption, secure API, and data protection standards.",
  },
  {
    q: "Q9. Do you provide your services of app development not only in Gurgaon or Delhi NCR?",
    a: "Without a doubt, we are rated highly in terms of our app development services in India and elsewhere across the world.",
  },
  {
    q: "Q10. What should I do with Capyngen to begin my project?",
    a: "Today, consult with the most appropriate app development company in Gurgaon.",
  },
];

const AppDevelopmentHiddenPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) =>
    setOpenFaqIndex(openFaqIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <header className="relative bg-blue-900 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1920/1080?random=1"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/90 to-blue-800/50" />

        <div className="relative max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl font-bold max-w-4xl">
            Transform Your Business with Capyngen — India’s Trusted App
            Development Company
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl">
            In the modern dynamic digital environment, app development is
            becoming a key component of influencing businesses, innovating, and
            increasing customer interaction. The correct app development company
            can make or break your digital success regardless of whether you are
            a startup or an enterprise. Capyngen is considered one of the top
            mobile app development company in the states of Gurgaon and Delhi
            NCR and also best website design services, providing innovative app
            development services in India that is a combination of creativity,
            technology, and strategy to achieve outstanding outcomes.
          </p>
          <a
            href="#introduction"
            className="mt-10 inline-block bg-white text-blue-900 px-8 py-3 rounded-full shadow-xl hover:bg-blue-50 transition"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* INTRODUCTION */}
      <section id="introduction" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">
          <img
            className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            src="https://picsum.photos/800/800?random=2"
            alt=""
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Introduction to App Development
            </h2>
            <p className="text-lg mb-6">
              The current information age has turned to the development of apps
              as an important business transformation tool and a means of
              interaction with customers. With the evolution of businesses in
              India and in the world overall, there has never been an increase
              in the demand for mobile app development solutions that are
              reliable, innovative, and scalable. A strong app is not only a
              technical good but also a continuation of your brand and one of
              the most effective means of reaching out to your audience.
            </p>
            <p className="text-lg text-gray-600 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              You are planning Android or iOS or cross platform, Capyngen is the
              company that can deliver high performance and user-friendly mobile
              apps. A mobile app development company in Delhi NCR and Gurgaon
              which is leading its industry and providing outstanding results in
              terms of ideas to launch.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="mt-2 text-3xl font-extrabold">
              Our App Development Services
            </p>
            <p className="mt-4 text-xl">
              Capyngen is a provider of app development services in India that
              offer the services to companies of all sizes and industries, both
              start-up and international. Our custom app development services
              are modelled as per your vision, technology preference and
              business objectives.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-sm border p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Core Offerings:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "iOS, Android, and hybrid mobile apps development solutions.",
                "Full-scale custom app development services of B2B and B2C.",
                "Creation of native and cross-platform applications using the newest frameworks.",
                "UI/UX design made to be seamless.",
                "Mobility in the enterprise, business process and mobile commerce.",
                "Scalable architecture solutions, API integration, and cloud backends.",
                "Post-launch support and maintenance as well as upgrades.",
              ].map((service, i) => (
                <p key={i} className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-700">{service}</span>
                </p>
              ))}
            </div>
          </div>

          <p className="text-center italic text-lg">
            "Capyngen is the ideal choice of the best app development services
            in Gurgaon, and has a long history of providing revolutionary mobile
            application development projects."
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-20 bg-black">
        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5  md:sticky">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Why Use Capyngen for Mobile Application Development
            </h2>
            <p className="text-lg mb-8">
              Selecting the appropriate app development agency is an important
              factor to project success. This is the reason why Capyngen is a
              better choice of mobile application development partner than other
              companies:
            </p>
            <img
              src="https://picsum.photos/600/800?random=3"
              className="hidden lg:block w-full h-96 rounded-xl shadow-lg object-cover"
              alt=""
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            {[
              {
                title: "Relied on Experience:",
                desc: "During its ten years of experience as a mobile app development company, the company has served Indian and international clients.",
              },
              {
                title: "Custom Expertise:",
                desc: "Our custom app development solutions guarantee that your application meets your specific business requirements in retail, healthcare, fintech, or enterprise.",
              },
              {
                title: "End-to-End Services:",
                desc: "We take care of concept, wireframe, design, code, test and launch and scaling.",
              },
              {
                title: "Recent Technology Stack:",
                desc: "We are a well-developed android application development firm, and we use the latest technology to prepare products within the required times.",
              },
              {
                title: "Best Talent:",
                desc: "This is due to the fact that we are the best mobile app development company in Gurgaon as developed by our team.",
              },
              {
                title: "Openness:",
                desc: "Have regular updates, detailed reports and easy tracking of projects.",
              },
              {
                title: "Security Commitment:",
                desc: "We care about the security and compliance of data in the course of the app development.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 max-w-7xl mx-auto text-center text-xl italic">
          Join a list of loyal clients who will refer Capyngen to their family
          members and friends as their preferred choice of an app development
          company in Gurgaon and beyond.
        </p>
      </section>

      {/* TECH STACK */}
      <section id="tech-stack" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Transform Your Mobile Development and Consulting with Our Expert
              Tech Stack
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              The reason why Capyngen is the best mobile app development company
              in Gurgaon and Delhi NCR is that we believe in the latest
              technology and rapid development.
            </p>
          </div>
          <h2 className="mb-10 text-2xl font-bold">Expert Tech Stack:</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-800/50 p-6 rounded-md border border-blue-700">
              <h3 className="text-xl font-bold">Language</h3>
              <p>{techStack.languages}</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-md border border-blue-700">
              <h3 className="text-xl font-bold">Data storage systems</h3>
              <p>{techStack.data}</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-md border border-blue-700">
              <h3 className="text-xl font-bold">Cloud Services</h3>
              <p>{techStack.cloud}</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-md border border-blue-700">
              <h3 className="text-xl font-bold">Development Tools</h3>
              <p>{techStack.tools}</p>
            </div>
            <div className="bg-blue-800/50 p-6 rounded-md border border-blue-700 md:col-span-2 lg:col-span-2">
              <h3 className="text-xl font-bold">QA/Testing</h3>
              <p>{techStack.qa}</p>
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-7xl mx-auto text-center text-xl italic">
          Our team will ensure that your mobile application development is
          scaled, secure, and speedy. Being a reputable dress app development
          agency, we continuously improve our systems and models to offer
          optimal app development services in Gurgaon and in the rest of India.
        </p>
      </section>

      {/* PROCESS TIMELINE */}
      <section id="process" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Our App Development Process
          </h2>
          <p className="text-xl mb-12">
            It takes creativity as well as discipline to provide the excellent
            app development services in India and Network solutions company in
            India. And here is how we would go about it step-by-step to make
            certain that we are excellent:
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 h-full w-1 bg-blue-100"></div>
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    i % 2 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-5/12 w-full">
                    <div className="p-6 rounded-xl shadow-lg border bg-white">
                      <h3 className="text-xl text-black font-bold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                  <div className="absolute lg:flex hidden left-1/2 -translate-x-1/2 bg-blue-600 text-white w-12 h-12 rounded-full items-center justify-center font-bold border-4 border-white">
                    {i + 1}
                  </div>
                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 max-w-7xl mx-auto text-center text-xl italic">
          Under Capyngen as your mobile app development company, you are offered
          end to end services that are reliable, transparent, and world class.
        </p>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 ">
            Benefits of Our App Development Services
          </h2>
          <p className="mb-6 text-xl">
            By selecting Capyngen as your application development firm in
            Gurgaon, you are getting:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Growth of Business:",
                desc: "Reach the world with the development of mobile applications.",
              },
              {
                title: "Enhanced Brand Value:",
                desc: "Reform credibility with a branded app.",
              },
              {
                title: "Growth More Rapidly:",
                desc: "Scale with analytics and automation.",
              },
              {
                title: "Competitive Edge:",
                desc: "Be on the frontline with new mobile application development.",
              },
              {
                title: "Smooth Customer Interaction:",
                desc: "Custom application functionality guarantees enhanced retention.",
              },
              {
                title: "Local Market Knowledge:",
                desc: "We are one of the top mobile app development company in Gurgaon and are aware of the local and the international digital environment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-black p-6 rounded-xl shadow-sm hover:-translate-y-1 transition"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 max-w-7xl mx-auto text-center text-xl italic">
          The app development services in India allow our businesses to innovate
          and stay on top with digital excellence.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
            Frequently Asked Questions
          </h2>
          <div className="text-left space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border rounded-lg overflow-hidden text-white"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-4 flex justify-between items-center"
                >
                  <span className="font-medium ">{faq.q}</span>
                  <ChevronDownIcon isOpen={openFaqIndex === i} />
                </button>
                {openFaqIndex === i && (
                  <div className="px-6 py-4  border-t">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentHiddenPage;
