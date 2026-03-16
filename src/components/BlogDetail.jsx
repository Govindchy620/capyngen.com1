import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Share2,
  Check,
  Mail,
  ArrowRight,
  Clock,
  Sparkles,
  ExternalLink,
  Tag,
  User,
  MessageSquare,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { createSlug } from "../utils/slug";

const API_URL = "https://api.capyngen.com/api/blogs";
const CONTACT_API_URL = "https://api.capyngen.com/api/contact";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  // --- CONTACT FORM STATE ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactStatus, setContactStatus] = useState("idle"); // idle, success, error
  const [responseMsg, setResponseMsg] = useState("");

  // --- CONTENT STATE ---
  const [sidebarRelated, setSidebarRelated] = useState([]);
  const [bottomRelated, setBottomRelated] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  // --- INTERACTION STATE ---
  const [copied, setCopied] = useState(false);

  // 1. Handle Contact Form Submission (API Integration)
  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (contactLoading) return;
    setContactLoading(true);
    setContactStatus("idle");
    setResponseMsg("");

    // Split "Full Name" into First/Last for the API
    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "NA";

    const payload = {
      firstName,
      lastName: "NA", // API requires lastName, so defaulting to "NA" if not provided
      email: formData.email,
      phoneNumber: "N/A", // Defaulting to N/A to pass validation if strictly required
      topic: blog?.group || "Blog Sidebar Inquiry",
      message: formData.message,
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      // Track Lead Pixel
      if (window.fbq) {
        window.fbq("track", "Lead");
      }

      if (response.ok) {
        setContactStatus("success");
        setResponseMsg("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setContactStatus("idle");
          setResponseMsg("");
        }, 5000);
      } else {
        setContactStatus("error");
        setResponseMsg(data.message || "Failed to send.");
      }
    } catch (error) {
      setContactStatus("error");
      setResponseMsg("Network error. Please try again.");
    } finally {
      setContactLoading(false);
    }
  };

  // 3. Share Functionality
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
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  // 4. Fetch & Robust Search Logic
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_URL}?limit=1000`);
        const data = await res.json();
        const blogs = Array.isArray(data.blogs) ? data.blogs : [];
        const decodedSlug = decodeURIComponent(slug);

        // Helper: Strip all special chars to ensure loose matching
        // "UI/UX Design" -> "uiuxdesign"
        const normalize = (text) =>
          text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, "-") // Replace spaces with -
            .replace(/[^\w\-]+/g, "") // Remove all non-word chars (like /)
            .replace(/\-\-+/g, "-") // Replace multiple - with single -
            .replace(/^-+/, "") // Trim - from start
            .replace(/-+$/, ""); // Trim - from end

        const found = blogs.find((b) => {
          // 1. Try exact match if slug field exists
          if (b.slug === decodedSlug) return true;

          // 2. Try standard creation
          const standardSlug = createSlug(b.title);
          if (standardSlug === decodedSlug) return true;

          // 3. Try "aggressive" normalization (Fixes UI/UX issue)
          // This compares "custom-uiux-design..." with "custom-uiux-design..."
          const normalizedTitle = normalize(b.title);
          const normalizedSlug = normalize(decodedSlug);

          return normalizedTitle === normalizedSlug;
        });

        setBlog(found || null);

        if (found) {
          const otherBlogs = blogs.filter((b) => b._id !== found._id);
          const scoredBlogs = otherBlogs.map((b) => {
            let score = 0;
            if (b.group === found.group) score += 5;
            if (b.tags && found.tags) {
              const intersection = b.tags.filter((t) => found.tags.includes(t));
              score += intersection.length * 2;
            }
            score += new Date(b.createdAt).getTime() / 100000000000;
            return { ...b, score };
          });
          scoredBlogs.sort((a, b) => b.score - a.score);
          setSidebarRelated(scoredBlogs.slice(0, 6));
          setBottomRelated(scoredBlogs.slice(6, 12));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [slug]);

  const jsonLdSchema = blog
    ? JSON.stringify(
        blog.schema && typeof blog.schema === "object"
          ? blog.schema
          : {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              image: blog.image,
              author: {
                "@type": "Organization",
                name: blog.author || "Capyngen Team",
              },
              datePublished: blog.createdAt,
            },
      )
    : "";

  // MOVED ID TO OUTER DIV AND HANDLED LOADING STATE INTERNALLY
  return (
    <div className="bg-[#050505] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30 relative">
      {/* SEO META - Safe Access */}
      <Helmet>
        <title>
          {blog ? blog.metaTitle || blog.title : "Loading..."} | Capyngen
        </title>
        <meta name="description" content={blog?.metaDescription || ""} />
        {blog && (
          <>
            <meta property="og:title" content={blog.metaTitle} />
            <meta property="og:description" content={blog.metaDescription} />
            <meta property="og:image" content={blog.image} />
            <meta property="og:type" content="article" />
            {blog && <script type="application/ld+json">{jsonLdSchema}</script>}
          </>
        )}
      </Helmet>

      {/* CONDITIONAL RENDERING: LOADING VS CONTENT */}
      {!blog ? (
        /* LOADING STATE */
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-10 h-10 text-cyan-500 animate-spin" />
          <p className="text-slate-500 text-sm animate-pulse">
            Loading Article...
          </p>
        </div>
      ) : (
        /* MAIN CONTENT */
        <>
          {/* Reading Progress Bar */}
          <div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 z-50 transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />

          {/* --- HERO HEADER --- */}
          <header className="relative pt-24 md:pt-28 pb-14 sm:pb-16 lg:pb-20 border-b border-white/5 overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-cyan-500/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <button
                onClick={() => navigate("/news-and-updates")}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-cyan-400 transition-colors mb-10 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <span>Back to Insights</span>
              </button>

              <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 leading-[1.1] tracking-tight mb-10 drop-shadow-sm">
                  {blog.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-center gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10 text-slate-400 text-sm sm:text-base">
                  {/* Author */}
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-900 to-slate-900 border border-white/10 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {blog.author ? blog.author[0] : "C"}
                    </div>
                    <div className="flex flex-col leading-tight text-center sm:text-left">
                      <span className="font-semibold text-white">
                        {blog.author || "Capyngen Team"}
                      </span>
                      <span className="text-xs text-slate-500">Editor</span>
                    </div>
                  </div>

                  {/* Divider – desktop only */}
                  <div className="hidden sm:block w-px h-8 bg-white/10"></div>

                  {/* Meta info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-6 font-medium">
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors whitespace-nowrap">
                      <Calendar className="w-4 h-4 text-cyan-500" />
                      <span>
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="hidden sm:block w-px h-8 bg-white/10"></div>

                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors whitespace-nowrap">
                      <Clock className="w-4 h-4 text-cyan-500" />
                      <span>
                        {(() => {
                          const days = Math.floor(
                            (new Date() - new Date(blog.createdAt)) /
                              (1000 * 60 * 60 * 24),
                          );
                          return days > 0
                            ? `Posted ${days} day${days === 1 ? "" : "s"} ago`
                            : "Posted Today";
                        })()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16">
              {/* --- LEFT COLUMN: MAIN CONTENT --- */}
              <div className="w-full lg:w-2/3">
                <div className="relative group mb-16">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <img
                    src={blog.image}
                    className="relative w-full object-cover rounded-xl border border-white/10 shadow-2xl"
                    alt={blog.title}
                  />
                </div>

                <article
                  id="blog-detail-content"
                  data-blog-detail-content
                  className="prose prose-invert prose-base sm:prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold prose-headings:leading-tight
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 
                    prose-h3:text-xl prose-h3:text-cyan-100
                    prose-p:text-slate-400 prose-p:leading-8 prose-p:mb-6
                    prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-cyan-300 transition-colors
                    prose-strong:text-white prose-strong:font-semibold
                    prose-li:text-slate-400 prose-li:marker:text-cyan-500
                    prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-cyan-950/20 prose-blockquote:to-transparent prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-cyan-100
                    prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-img:shadow-lg prose-img:my-10"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                <div className="mt-20 pt-10 border-t border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {blog.tags?.map((t) => (
                        <span
                          key={t}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 rounded-full text-xs font-medium text-slate-400 hover:text-cyan-300 cursor-pointer transition-all"
                        >
                          <Tag className="w-3 h-3" />
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-cyan-500/10 text-sm font-medium text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/30 transition-all active:scale-95 group w-fit"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          <span className="text-green-400">Link Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                          <span>Share Article</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* --- RIGHT COLUMN: SIDEBAR --- */}
              <aside className="w-full lg:w-1/3 space-y-8 sm:space-y-10">
                {/* 1. API Connected Contact Form */}
                <div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px] -mr-10 -mt-10 group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      Get in Touch
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      Have questions about{" "}
                      {blog?.group ? blog.group.toLowerCase() : "tech"}? Send us
                      a message and our team will get back to you.
                    </p>

                    <form onSubmit={handleContactSubmit} className="space-y-3">
                      <div className="relative group/input">
                        <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:bg-white/10"
                        />
                      </div>

                      <div className="relative group/input">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                        <input
                          type="email"
                          required
                          placeholder="work@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:bg-white/10"
                        />
                      </div>

                      <div className="relative group/input">
                        <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors" />
                        <textarea
                          required
                          rows="3"
                          placeholder="How can we help?"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all focus:bg-white/10 resize-none"
                        />
                      </div>

                      {/* Feedback Message */}
                      {contactStatus === "error" && (
                        <div className="text-xs text-red-400 bg-red-900/20 p-2 rounded-lg flex items-center gap-2">
                          <AlertCircle className="w-3 h-3" /> {responseMsg}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={contactLoading || contactStatus === "success"}
                        className={`w-full text-sm font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-2
                                ${
                                  contactStatus === "success"
                                    ? "bg-green-600 text-white cursor-default"
                                    : "bg-cyan-600 hover:bg-cyan-500 text-white hover:shadow-[0_0_20px_rgba(8,145,178,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
                                }
                            `}
                      >
                        {contactLoading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />{" "}
                            Sending...
                          </>
                        ) : contactStatus === "success" ? (
                          <>
                            <Check className="w-4 h-4" /> Message Sent
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>

                {/* 2. Related Insights */}
                <div className="lg:sticky lg:top-16 z-10">
                  <div className="mt-10 pt-10 border-t border-dashed border-white/10">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                      Related to {blog.group}
                    </h4>
                    <div className="space-y-5">
                      {sidebarRelated.length > 0 ? (
                        sidebarRelated.map((post) => (
                          <div
                            key={post._id}
                            onClick={() =>
                              navigate(
                                `/news-and-updates/${post.slug || createSlug(post.title)}`,
                              )
                            }
                            className="group cursor-pointer flex gap-4 items-start p-3 sm:p-4 -mx-2 sm:-mx-3 rounded-xl hover:bg-white/5 transition-colors"
                          >
                            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 relative">
                              <img
                                src={post.image}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                alt=""
                              />
                            </div>
                            <div className="flex-1 min-w-0 py-1">
                              <h5 className="text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug mb-1.5">
                                {post.title}
                              </h5>
                              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                                <span>
                                  {new Date(
                                    post.createdAt,
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-slate-600 italic">
                          No related articles found.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 3. Services CTA Box */}
                  <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-cyan-900/20 to-transparent border border-cyan-500/20 text-center">
                    <h4 className="text-white font-bold mb-2">
                      Need help with this?
                    </h4>
                    <p className="text-xs text-slate-400 mb-4">
                      Our team specializes in{" "}
                      {blog.group || "digital solutions"}. Let's discuss your
                      project.
                    </p>
                    <button
                      onClick={() => navigate("/contact-us")}
                      className="w-full py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2"
                    >
                      Contact Experts <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </aside>
            </div>

            {/* --- BOTTOM SECTION: READ NEXT GRID --- */}
            {bottomRelated.length > 0 && (
              <div className="mt-32 pt-12 border-t border-white/10">
                <div className="flex items-end justify-between mb-12">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      More for you
                    </h2>
                    <p className="text-slate-400">
                      Handpicked articles based on your reading preferences.
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/news-and-updates")}
                    className="hidden md:flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 border border-cyan-500/20 px-4 py-2 rounded-full hover:bg-cyan-500/10 transition-all"
                  >
                    View all Articles <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
                  {bottomRelated.map((post) => (
                    <div
                      key={post._id}
                      onClick={() =>
                        navigate(
                          `/news-and-updates/${post.slug || createSlug(post.title)}`,
                        )
                      }
                      className="group cursor-pointer flex flex-col h-full"
                    >
                      <div className="aspect-[16/9] overflow-hidden rounded-md border border-white/10 relative mb-5">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        <div className="w-full md:w-fit max-w-2/3 absolute top-0 left-0 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                          {post.group || "Article"}
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />{" "}
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug">
                          {post.title}
                        </h4>

                        <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed mb-4 flex-1">
                          {post.metaDescription ||
                            "Explore the details of this topic and learn how it impacts the industry..."}
                        </p>

                        <span className="text-cyan-500 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read Now <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 md:hidden text-center">
                  <button
                    onClick={() => navigate("/news-and-updates")}
                    className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 border border-cyan-500/20 px-6 py-3 rounded-full"
                  >
                    View all Articles <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default BlogDetail;
