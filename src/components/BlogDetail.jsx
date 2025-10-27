import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const makeSlug = (title = "") =>
  title
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_BASE = "https://capyngen-backendv2-1.onrender.com/api/blogs";

  useEffect(() => {
    const fetchBySlug = async () => {
      setLoading(true);
      setError("");

      try {
        // ✅ Try direct slug endpoint
        const trySlugEndpoint = await fetch(`${API_BASE}/slug/${slug}`);
        if (trySlugEndpoint.ok) {
          const data = await trySlugEndpoint.json();
          setBlog(data.blog || data);
          return;
        }

        // ✅ Try ID fallback
        const tryIdEndpoint = await fetch(`${API_BASE}/${slug}`);
        if (tryIdEndpoint.ok) {
          const data = await tryIdEndpoint.json();
          setBlog(data.blog || data);
          return;
        }

        // ✅ Fallback: fetch all and match by generated slug
        const res = await fetch(API_BASE);
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const data = await res.json();
        const list = data.blogs || data.data || data;
        const match = list.find((b) => makeSlug(b.title || "") === slug);

        if (!match) throw new Error("Blog not found");
        setBlog(match);
      } catch (err) {
        console.error("BlogDetail error:", err);
        setError(err.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBySlug();
  }, [slug]);

  if (loading)
    return <p className="text-center text-gray-500 py-20">Loading...</p>;

  if (error) return <p className="text-center text-red-600 py-20">{error}</p>;

  if (!blog) return null;

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
      <Link
        to="/news-and-updates"
        className="text-sm text-purple-600 hover:text-purple-800 mb-6 inline-block"
      >
        ← Back to Articles
      </Link>

      {/* Blog Image */}
      {blog.image && (
        <div className="w-full mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {blog.title}
      </h1>

      {/* Author and Date */}
      <div className="text-gray-500 mb-8 text-sm md:text-base">
        {blog.createdAt && (
          <>
            {" "}
            •{" "}
            {new Date(blog.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </>
        )}
      </div>

      {/* Description */}
      {blog.description && (
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {blog.description}
        </p>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        {typeof blog.content === "string" &&
        /<\/?[a-z][\s\S]*>/i.test(blog.content) ? (
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        ) : (
          <p>{blog.content || "No detailed content available."}</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
