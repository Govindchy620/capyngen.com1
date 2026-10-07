import React from "react";
import { assets } from "../assets/assets";

// Default tech stack categories when none are provided
const defaultCategories = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: assets.react },
      { name: "Angular", icon: assets.angular },
      { name: "Vue.js", icon: assets.vuejs },
      { name: "Next.js", icon: assets.nextjs },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: assets.nodejs },
      { name: "Python", icon: assets.python },
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      { name: "PHP", icon: assets.laravel },
    ],
  },
  {
    title: "Platforms & Cloud",
    items: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        name: "iOS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
      },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: assets.mongodb },
      { name: "MySQL", icon: assets.mysql },
      { name: "PostgreSQL", icon: assets.postgresql },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
];

// Single Category Component (Strictly Sharp / rounded-none)
const TechCategory = ({ title, items = [], isLight = false }) => {
  return (
    <div
      className={`${
        isLight
          ? "bg-slate-50 border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md"
          : "bg-[#0b1329] border border-slate-800 hover:border-blue-500 shadow-md"
      } w-full h-full transition-all duration-300 rounded-none py-8 px-6 flex flex-col items-center`}
    >
      <h3
        className={`text-xl font-bold mb-6 tracking-wide ${
          isLight ? "text-slate-900" : "text-white"
        }`}
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {(items || []).map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2 group">
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-none border p-3 transition-all duration-300 group-hover:border-blue-500 group-hover:scale-105 shadow-sm ${
                isLight
                  ? "border-slate-200 bg-white"
                  : "border-slate-700 bg-[#070e1d]"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-10 h-10 object-contain transition-transform duration-300 rounded-none"
                loading="lazy"
              />
            </div>
            <span
              className={`text-xs font-medium text-center max-w-[80px] transition-colors duration-300 ${
                isLight
                  ? "text-slate-700 group-hover:text-blue-600"
                  : "text-slate-300 group-hover:text-blue-400"
              }`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Tech Stack Section
const TechStack = ({
  heading = "Technologies & Frameworks We Excel At",
  subheading = "Accelerating development with industry-proven tools and scalable infrastructure.",
  categories = defaultCategories,
  theme = "dark",
}) => {
  const isLight = theme === "light";
  const safeCategories =
    Array.isArray(categories) && categories.length > 0
      ? categories
      : defaultCategories;

  return (
    <section
      className={`py-12 lg:py-16 px-4 sm:px-6 md:px-12 max-w-[1536px] mx-auto ${
        isLight ? "text-slate-900" : "text-white"
      }`}
    >
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-12">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight ${
            isLight ? "text-slate-900" : "text-white"
          }`}
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {heading}
        </h2>
        {subheading && (
          <p
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              isLight ? "text-slate-600" : "text-slate-400"
            }`}
          >
            {subheading}
          </p>
        )}
      </div>

      {/* Layout */}
      <div className="space-y-6">
        {/* Top Row: 2 Boxes (Frontend, Backend) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {safeCategories.slice(0, 2).map((category, index) => (
            <TechCategory
              key={index}
              title={category.title}
              items={category.items}
              isLight={isLight}
            />
          ))}
        </div>

        {/* Bottom Row: Remaining Boxes */}
        {safeCategories.length > 2 && (
          <div
            className={
              safeCategories.slice(2).length === 1
                ? "flex justify-center"
                : safeCategories.slice(2).length === 2
                ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
            {safeCategories.slice(2).map((category, index) => (
              <div
                key={index}
                className={
                  safeCategories.slice(2).length === 1
                    ? "w-full lg:max-w-[calc(50%-12px)]"
                    : "w-full"
                }
              >
                <TechCategory
                  title={category.title}
                  items={category.items}
                  isLight={isLight}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;
