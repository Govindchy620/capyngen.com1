import React from "react";

const articles = [
  {
    date: "27/08/2025",
    title:
      "ChatGPT-5: Everything You Need to Know About the Next Generation of AI",
    summary:
      "From 80% lower error rates and smarter integrations to longer memory and deeper reasoning, ChatGPT-5 sets a new standard in AI performance. Discover its key features, benchmarks, and business impact.",
    image: "/path/to/gpt5_image.jpg", // Replace with your image source
  },
  {
    date: "22/08/2025",
    title:
      "Monolith to Microservices Migration: Turning Architectural Liabilities into Competitive Strengths",
    summary:
      "Both staff augmentation and consulting have unique advantages but vary in impact, cost, and approach. Learn the key differences between them to choose the best option for your business.",
    image: "/path/to/microservices_image.jpg",
  },
  {
    date: "27/08/2025",
    title:
      "ChatGPT-5: Everything You Need to Know About the Next Generation of AI",
    summary:
      "From 80% lower error rates and smarter integrations to longer memory and deeper reasoning, ChatGPT-5 sets a new standard in AI performance. Discover its key features, benchmarks, and business impact.",
    image: "/path/to/gpt5_image.jpg", // Replace with your image source
  },
  {
    date: "22/08/2025",
    title:
      "Monolith to Microservices Migration: Turning Architectural Liabilities into Competitive Strengths",
    summary:
      "Both staff augmentation and consulting have unique advantages but vary in impact, cost, and approach. Learn the key differences between them to choose the best option for your business.",
    image: "/path/to/microservices_image.jpg",
  },
  {
    date: "27/08/2025",
    title:
      "ChatGPT-5: Everything You Need to Know About the Next Generation of AI",
    summary:
      "From 80% lower error rates and smarter integrations to longer memory and deeper reasoning, ChatGPT-5 sets a new standard in AI performance. Discover its key features, benchmarks, and business impact.",
    image: "/path/to/gpt5_image.jpg", // Replace with your image source
  },
  {
    date: "22/08/2025",
    title:
      "Monolith to Microservices Migration: Turning Architectural Liabilities into Competitive Strengths",
    summary:
      "Both staff augmentation and consulting have unique advantages but vary in impact, cost, and approach. Learn the key differences between them to choose the best option for your business.",
    image: "/path/to/microservices_image.jpg",
  },
  {
    date: "27/08/2025",
    title:
      "ChatGPT-5: Everything You Need to Know About the Next Generation of AI",
    summary:
      "From 80% lower error rates and smarter integrations to longer memory and deeper reasoning, ChatGPT-5 sets a new standard in AI performance. Discover its key features, benchmarks, and business impact.",
    image: "/path/to/gpt5_image.jpg", // Replace with your image source
  },
  {
    date: "22/08/2025",
    title:
      "Monolith to Microservices Migration: Turning Architectural Liabilities into Competitive Strengths",
    summary:
      "Both staff augmentation and consulting have unique advantages but vary in impact, cost, and approach. Learn the key differences between them to choose the best option for your business.",
    image: "/path/to/microservices_image.jpg",
  },
  // ... Add other articles
];

const ArticleCard = ({ article }) => (
  <div className="relative group w-80 m-4">
    <img
      src={article.image}
      alt=""
      className="rounded-xl w-full h-56 object-cover"
    />
    <div className="mt-2 flex items-center gap-2">
      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
        Article
      </span>
      <span className="text-gray-500 text-sm">{article.date}</span>
    </div>
    <div className="mt-2 font-semibold text-lg">{article.title}</div>
    {/* Overlay on hover */}
    <div className="absolute inset-0 bg-purple-900 bg-opacity-80 text-white p-6 rounded-xl flex flex-col justify-center opacity-0 group-hover:opacity-100 transition duration-300">
      <div className="font-semibold text-xl mb-2">{article.title}</div>
      <div className="text-base">{article.summary}</div>
      <span className="absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2 text-white">
        ↗
      </span>
    </div>
  </div>
);

export default function ArticleGrid() {
  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article, idx) => (
        <ArticleCard key={idx} article={article} />
      ))}
    </div>
  );
}
