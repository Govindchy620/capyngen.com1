import React from "react";
import { motion } from "framer-motion";

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
    image:
      "https://www.boopin.com/wp-content/uploads/2024/02/Image-1-scaled.jpg",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
  },

  {
    number: "8",
    title: "CRM & \nManagement Software",
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
    image: "/mnt/data/0aedb2a9-7f3a-4ecd-98d0-460e3dee4d48.png",
  },
];

const DigitalTransformation = () => {
  return (
    <section className="w-full text-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10 space-y-20">
        {services.map((service, sectionIndex) => (
          <div
            key={sectionIndex}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
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
              <div className="flex items-start gap-7">
                <div className="text-5xl font-extrabold leading-none">
                  {service.number}
                </div>

                <div>
                  <h2 className="text-5xl uppercase font-extrabold leading-[1.05] whitespace-pre-line">
                    {service.title}
                  </h2>
                </div>
              </div>

              {/* Main Description */}
              <p className="mt-10 text-base md:text-lg max-w-2xl">
                {service.desc}
              </p>

              {/* Bullet List */}
              <div className="mt-5 space-y-4">
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
                    className="flex items-center gap-3"
                  >
                    <span className="text-[13px] md:text-sm tracking-widest font-medium">
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
                  className="mt-7 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed"
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
              <div className="relative w-full max-w-[440px]">
                <div className="overflow-hidden rounded-[28px] shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[400px] w-full object-cover"
                  />
                </div>

                {/* subtle highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-black/5" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalTransformation;
