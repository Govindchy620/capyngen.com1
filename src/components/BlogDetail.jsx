import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Share2,
  ChevronRight,
  Check, // Added for feedback
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { createSlug } from "../utils/slug";

const API_URL = "https://api.capyngen.com/api/blogs";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [related, setRelated] = useState([]);
  const [copied, setCopied] = useState(false); // State for feedback

  // Share Functionality
  const handleShare = async () => {
    const shareData = {
      title: blog.title,
      text: blog.metaDescription || `Check out this article: ${blog.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2s
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const blogs = Array.isArray(data.blogs) ? data.blogs : [];
        const found = blogs.find(
          (b) => createSlug(b.title) === createSlug(slug),
        );
        setBlog(found || null);
        if (found) {
          setRelated(blogs.filter((b) => b._id !== found._id).slice(0, 4));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0); // Scroll to top on slug change
  }, [slug]);

  if (!blog) return <div className="min-h-screen bg-black" />;

  return (
    <div
      id="blog-detail-content"
      className="bg-[#050505] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30"
    >
      <Helmet>
        <title>{blog.metaTitle || blog.title} | Capyngen</title>
        <meta name="description" content={blog.metaDescription} />
      </Helmet>

      {/* Hero Header */}
      <header className="relative pt-28 pb-5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate("/news-and-updates")}
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>All Articles</span>
          </button>

          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-tighter">
                {blog.group || "Business"}
              </span>
              <span className="text-slate-600 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight pt-5">
              {blog.title}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT: CONTENT COLUMN */}
          <div className="lg:w-2/3">
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={blog.image}
                className="relative w-full aspect-[16/9] object-cover rounded-xl border border-white/10 shadow-2xl"
                alt={blog.title}
              />
            </div>

            <article
              className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-bold
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-strong:text-cyan-400 prose-li:text-slate-400
              prose-img:rounded-xl prose-img:border prose-img:border-white/10"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {blog.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-md text-xs text-slate-400 cursor-pointer transition-colors border border-white/5"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Share Button with Feedback */}
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-sm text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-all active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-green-500 font-medium">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Share Article</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: STICKY SIDEBAR */}
          <aside className="lg:w-1/3 space-y-10">
            <div className="sticky top-24 space-y-10">
              <div className="p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-slate-500">
                  Written By
                </h4>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-lg font-black text-white">
                    {blog.author?.[0] || "C"}
                  </div>
                  <div>
                    <p className="text-white font-bold">
                      {blog.author || "Capyngen Team"}
                    </p>
                    <p className="text-xs text-slate-500">Digital Specialist</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6 flex items-center justify-between">
                  <span>Related Insights</span>
                  <ChevronRight className="w-4 h-4 text-cyan-500" />
                </h4>
                <div className="space-y-6">
                  {related.map((post) => (
                    <div
                      key={post._id}
                      onClick={() =>
                        navigate(`/news-and-updates/${createSlug(post.title)}`)
                      }
                      className="group cursor-pointer flex gap-4 items-center"
                    >
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
                        <img
                          src={post.image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          alt=""
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                          {post.title}
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
