import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { slugify } from "../utils/slugify";
import { createSlug } from "../utils/slug";

const API_URL = "https://api.capyngen.com/api/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(API_URL);
      const data = await res.json();

      const blogs = Array.isArray(data.blogs) ? data.blogs : [];

      const found = blogs.find((b) => createSlug(b.title) === createSlug(slug));

      setBlog(found || null);

      if (found) {
        setRelated(
          blogs
            .filter((b) => b._id !== found._id)
            .filter((b) => b.tags?.some((t) => found.tags?.includes(t)))
            .slice(0, 3)
        );
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return (
      <div className="text-center py-40 text-slate-400">Blog not found</div>
    );
  }

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>{blog.title} | Capyngen</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => navigate("/news-and-updates")}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-10"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blogs
          </button>

          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
            {blog.title}
          </h1>

          <div className="flex gap-6 text-slate-400 text-sm mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {blog.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* IMAGE FIXED */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[420px] lg:h-[700px] object-scale-down rounded-xl mb-12 block"
          />

          <div
            className="prose prose-invert max-w-none mb-16 text-white"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-16">
            {blog.tags?.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-md flex items-center gap-2"
              >
                <Tag className="w-4 h-4 text-cyan-400" />
                {tag}
              </span>
            ))}
          </div>

          {/* RELATED */}
          {related.length > 0 && (
            <>
              <h3 className="text-white text-2xl font-bold mb-6">
                Related Blogs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((b) => (
                  <div
                    key={b._id}
                    onClick={() =>
                      navigate(`/news-and-updates/${createSlug(b.title)}`)
                    }
                    className="cursor-pointer bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-cyan-400 transition"
                  >
                    <img
                      src={b.image}
                      className="h-56 w-full object-cover block"
                    />
                    <div className="p-4">
                      <h4 className="text-white text-sm font-semibold line-clamp-2">
                        {b.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
