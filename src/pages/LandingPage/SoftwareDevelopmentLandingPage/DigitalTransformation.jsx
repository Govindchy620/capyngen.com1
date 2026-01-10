import React from "react";
import { motion } from "framer-motion";
import { assets } from "../../../assets/assets";

const services = [
  {
    number: "1",
    title: "Web \nDevelopment",
    desc: (
      <>
        We need really fast web platforms. <br />
        We deliver
      </>
    ),
    points: [
      "Clean, modern, and SEO, friendly designs",
      "Mobile, first responsive performance",
      "Conversion-oriented user journeys",
      "Secure and scalable web architecture",
    ],
    note: (
      <>
        When we talk about user journeys, we are really talking about
        conversion-oriented user journeys. These are the paths that people take
        when they are using a product or a service.
      </>
    ),
    image: assets.designLanding2,
  },

  {
    number: "2",
    title: "App \nDevelopment",
    desc: (
      <>
        Mobile apps built for real users, not just feature lists. <br />
        Our app solutions include:
      </>
    ),
    points: [
      "Smooth, intuitive user experience",
      "Native Android & iOS development",
      "Secure data handling and APIs",
      "Scalable, high-performance backends",
    ],
    note: (
      <>
        From something basic to a big company solution, Capyngen makes sure that
        apps work well even when a lot of people are using them at the same
        time.
      </>
    ),
    image: assets.designLanding3,
  },

  {
    number: "3",
    title: "Custom AI \nSolutions",
    desc: (
      <>
        Integrate intelligence into your software to automate, predict, and
        enhance outcomes. <br />
        We have some cool things our artificial intelligence can do, these
        include:
      </>
    ),
    points: [
      "Workflows that use automation are really smart.",
      "Predictive insights and forecasting",
      "Personalized and adaptive user experiences",
      "Data-driven decision systems",
    ],
    note: (
      <>
        We make Artificial Intelligence features that actually help with the
        problems people face every day when they are working, not things that
        look really cool in a demonstration. Artificial Intelligence features
        are what we are talking about here.
      </>
    ),
    image: assets.designLanding4,
  },

  {
    number: "4",
    title: "Ecommerce \nSolutions",
    desc: (
      <>
        These online stores make it simple for me to find what I want and pay
        for it. Online stores are great because they sell products and are
        easier to use. <br />
        <br />
        The ecommerce results we focus on include things like sales and customer
        satisfaction.
      </>
    ),
    points: [
      "Clear product visibility and navigation",
      "Secure payment gateway integrations",
      "Inventory & order automation",
      "Scalable architecture for growth",
    ],
    note: (
      <>
        We are here to help you build shopping experiences that customers really
        trust and that they enjoy using. We do this for ecommerce experiences
        that customers trust and enjoy.
      </>
    ),
    image: assets.designLanding5,
  },

  {
    number: "5",
    title: "Blockchain \nDevelopment",
    desc: (
      <>
        We need systems that&apos;re safe and easy to see through. These systems
        should help businesses work better. <br />
        <br />
        Here are the things that make Blockchain strong that we deliver:
      </>
    ),
    points: [
      "Smart contract implementation",
      "Decentralized applications (DApps)",
      "Secure transaction layers",
      "Tamper-proof data integrity",
    ],
    note: (
      <>
        The things that make Blockchain strong are the things that we deliver.
        Blockchain is the best way to do things.
      </>
    ),
    image: assets.designLanding6,
  },

  {
    number: "6",
    title: "DevOps & \nInfrastructure",
    desc: (
      <>
        Efficient delivery pipelines and scalable infrastructure. <br />
        <br />
        The focus of DevOps includes:
      </>
    ),
    points: [
      "Continuous integration & deployment",
      "Cloud optimization (AWS / GCP / Azure)",
      "Monitoring and uptime automation",
      "Security-first implementation",
    ],
    note: (
      <>
        This keeps your systems running, it keeps them up, and it makes your
        systems resilient.
      </>
    ),
    image: assets.designLanding7,
  },

  {
    number: "7",
    title: "Application \nSolutions",
    desc: (
      <>
        We can make systems for businesses that make things easier to do. These
        systems are made for the company and help with daily operations. <br />
        <br />
        The benefits you get from the application are:
      </>
    ),
    points: [
      "Process automation",
      "Unified data dashboards",
      "Domain-specific workflows",
      "Improved internal controls",
    ],
    note: (
      <>
        Capyngen makes things that help people understand things easily by
        getting rid of complicated stuff and making it clear. Capyngen does this
        by building systems that are simple and easy to use, which is what
        Capyngen is all about: making things clear and easy to understand with
        the systems that Capyngen builds.
      </>
    ),
    image: assets.designLanding8,
  },

  {
    number: "8",
    title: "CRM & Management \nSoftware",
    desc: (
      <>
        This program should have everything you need to know about your leads,
        sales and customer interactions. <br />
        <br />
        This is the value that Customer Relationship Management systems deliver.
      </>
    ),
    points: [
      "Organized lead pipelines",
      "Performance reporting & insights",
      "Task automation & reminders",
      "Integrated communication tools",
    ],
    note: <>These systems help you convert more leads into loyal customers.</>,
    image: assets.designLanding9,
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const DigitalTransformation = () => {
  return (
    <section className="w-full text-white py-12 sm:py-14 md:py-20">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        custom={0}
      >
        Trusted Software Development Services
      </motion.h2>
      <p className="text-center text-md md:text-xl pb-20">
        Below is a snapshot of the core areas where Capyngen excels — all
        designed to deliver high performance and real business impact:
      </p>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 space-y-16 sm:space-y-28">
        {services.map((service, sectionIndex) => (
          <div
            key={sectionIndex}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start group"
          >
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              {/* Heading */}
              <div className="flex items-start gap-4 sm:gap-7">
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none shrink-0">
                  {service.number}
                </div>

                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold leading-[1.05] whitespace-pre-line">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Main Description */}
              <p className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg max-w-full sm:max-w-2xl leading-relaxed text-white/90">
                {service.desc}
              </p>

              {/* Bullet List */}
              <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                {service.points.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[12px] sm:text-[13px] md:text-sm tracking-wide sm:tracking-widest font-medium leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Extra Note */}
              {service.note && (
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                  className="mt-6 sm:mt-7 text-xs sm:text-sm md:text-base text-white/75 max-w-full sm:max-w-2xl leading-relaxed"
                >
                  {service.note}
                </motion.p>
              )}
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 90, y: 70, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 flex lg:justify-end"
            >
              <div className="relative w-full max-w-full sm:max-w-[440px]">
                <div className="overflow-hidden rounded-2xl sm:rounded-[28px] shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full object-cover h-[240px] sm:h-[320px] md:h-[400px] lg:grayscale group-hover:grayscale-0 transition-all duration-200"
                  />
                </div>

                {/* subtle highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-[28px] ring-1 ring-black/5" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalTransformation;
