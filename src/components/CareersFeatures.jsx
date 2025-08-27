// FeatureCard.jsx
const features = [
  {
    icon: "💰",
    title: "Competitive Salary",
    desc: "Everyone is paid based on a formula that’s public to employees and optimized for fairness.",
  },
  {
    icon: "🩺",
    title: "Health & Retirement",
    desc: "We invest in 100% health, vision, and dental for your family, insurance, and retirement savings (1% 401k match in US) for all teammates.",
  },
  {
    icon: "🕒",
    title: "Flexible Time Off",
    desc: "We offer flexible vacation time & holidays. Parents get twelve weeks for new family members. Stay 4 years and take a sabbatical!",
  },
  {
    icon: "✈️",
    title: "International Travel",
    desc: "Work at Help Scout, become a world traveler! Recent retreats: Portugal, Mexico, Ireland, US.",
  },
  {
    icon: "📄",
    title: "Stock Options",
    desc: "Every employee can be a shareholder and part of the company’s success. We have a public formula for option grants.",
  },
  {
    icon: "🤍",
    title: "Investment in You",
    desc: "Laptop and basics, we help fund your home office, personal development, and more.",
  },
];

export default function CareersFeatures() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Your best work can happen here
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-6 shadow-white shadow-lg flex flex-col items-start"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mb-4">{f.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              </div>
              <p className="">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
