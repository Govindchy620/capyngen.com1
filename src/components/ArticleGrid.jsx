// src/pages/ArticleGrid.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";

const ArticleCard = ({ article }) => (
  <div className="relative group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 w-full h-full flex flex-col">
    <div className="relative overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        crossOrigin="anonymous"
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          console.error("🧩 Image failed to load:", article.image);
          e.currentTarget.src =
            "https://via.placeholder.com/400x300?text=Image+Not+Found";
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm">
          {article.category}
        </span>
      </div>
    </div>

    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
        <span className="text-gray-500 text-sm font-medium">
          {article.date}
        </span>
      </div>

      <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
        {article.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
        {article.summary}
      </p>

      <div className="flex items-center justify-between mt-auto">
        <Link
          to={`/news-and-updates/${article.slug}`}
          className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors duration-300 group/btn"
        >
          Read More
          <svg
            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-blue-900/95 text-white rounded-2xl flex flex-col justify-center p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {article.category}
        </span>
      </div>

      <h3 className="font-bold text-2xl mb-4 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 leading-tight">
        {article.title}
      </h3>

      <p className="text-white/90 text-base leading-relaxed mb-6 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300">
        {article.summary}
      </p>

      <Link
        to={`/news-and-updates/${article.slug}`}
        className="self-start bg-white text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-400 flex items-center gap-2"
      >
        Read Full Article
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  </div>
);

export default function ArticleGrid() {
  const [allArticles, setAllArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [visibleCount, setVisibleCount] = useState(2); // initially show 2

  const API_URL = "http://api.capyngen.com/api/blogs";

  // Helper: generate slug from title
  const makeSlug = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setErrorMsg("");
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        const blogs = data.blogs || data.data || data;

        if (!Array.isArray(blogs) || blogs.length === 0) {
          setErrorMsg("No articles found.");
          setAllArticles([]);
          setVisibleArticles([]);
          return;
        }

        // Format blogs and include slug & _id
        const formatted = blogs.map((blog) => {
          const title = blog.title || "Untitled Blog";
          const slug = blog.slug || makeSlug(title); // prefer backend slug if present
          return {
            _id: blog._id,
            slug,
            title,
            summary:
              blog.description ||
              (blog.content
                ? blog.content.slice(0, 120) + "..."
                : "No description available"),
            image:
              blog.image ||
              assets.news1 ||
              "https://via.placeholder.com/400x300?text=No+Image",
            createdAt: blog.createdAt,
            date: blog.createdAt
              ? new Date(blog.createdAt).toLocaleDateString("en-GB")
              : "Unknown Date",
            category: blog.tags?.[0] || "General",
            raw: blog, // keep original payload if needed
          };
        });

        setAllArticles(formatted);
        setVisibleArticles(formatted.slice(0, 2));
      } catch (err) {
        console.error("Fetch error:", err);
        setErrorMsg("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    const nextCount = visibleCount + 10;
    setVisibleCount(nextCount);
    setVisibleArticles(allArticles.slice(0, nextCount));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Stay Updated with Our
          <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Latest Articles
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover insights, trends, and expert perspectives on technology,
          development, and digital innovation.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-600">Loading articles...</p>
        ) : errorMsg ? (
          <p className="text-center text-red-600">{errorMsg}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 gap-8">
            {visibleArticles.map((article, idx) => (
              <div
                key={article._id || idx}
                className="flex"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Load More */}
      {!loading && allArticles.length > visibleArticles.length && (
        <div className="max-w-7xl mx-auto text-center mt-16">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto disabled:opacity-50"
          >
            Load More Articles
            <svg
              className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
