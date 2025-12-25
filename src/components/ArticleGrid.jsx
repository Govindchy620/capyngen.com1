import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "slugify";
import { createSlug } from "../utils/slug";
import {
  Calendar,
  FileText,
  Tag,
  ArrowLeft,
  User,
  Sparkles,
} from "lucide-react";

/* ======================
   FILTER GROUPS
====================== */
const FILTER_GROUPS = [
  {
    label: "Education",
    filters: ["Articles", "Library", "Presentation", "Product Guides"],
  },
  { label: "News", filters: ["Product Updates", "Corporate", "Industry"] },
  { label: "Events", filters: ["Webinars", "Expo"] },
  { label: "Other", filters: ["Videos", "Media"] },
];

const ArticleGrid = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ======================
     FETCH BLOGS
  ====================== */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://api.capyngen.com/api/blogs");
        const data = await res.json();

        const list = Array.isArray(data)
          ? data
          : Array.isArray(data.blogs)
          ? data.blogs
          : [];

        setBlogs(list);
      } catch (err) {
        console.error("Blog fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* ======================
     SELECT BLOG BY SLUG
  ====================== */
  useEffect(() => {
    if (!slug || blogs.length === 0) return;

    const found = blogs.find((b) => createSlug(b.title) === createSlug(slug));

    if (found) {
      setSelectedBlog(found);
      document
        .getElementById("media-hub")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [slug, blogs]);

  /* ======================
     RELATED BLOGS
  ====================== */
  useEffect(() => {
    if (!selectedBlog) return;

    const related = blogs
      .filter((post) => {
        if (post._id === selectedBlog._id) return false;

        const categoryMatch = post.category === selectedBlog.category;
        const tagMatch =
          post.tags?.some((t) => selectedBlog.tags?.includes(t)) ?? false;

        return categoryMatch || tagMatch;
      })
      .slice(0, 3);

    setRelatedBlogs(related);
  }, [selectedBlog, blogs]);

  /* ======================
     FILTER LOGIC
  ====================== */
  const filteredData =
    activeFilter === "All"
      ? blogs
      : blogs.filter(
          (item) =>
            item.category === activeFilter || item.tags?.includes(activeFilter)
        );

  const openBlog = (blog) => {
    navigate(`/news-and-updates/${createSlug(blog.title)}`);

    setSelectedBlog(blog);
  };

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    setActiveFilter(tag);
    navigate("/news-and-updates");
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div className="w-full bg-black py-32 text-center text-slate-400">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="w-full bg-black py-24">
      <section className="max-w-[90vw] mx-auto w-full" id="media-hub">
        {/* ========================
           SINGLE BLOG VIEW
        ========================= */}
        {selectedBlog ? (
          <div>
            <button
              onClick={() => {
                navigate(`/news-and-updates/${slugify(post.title)}`);
                setSelectedBlog(null);
              }}
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4 text-slate-400 text-sm mb-4">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs">
                  {selectedBlog.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedBlog.date}
                </span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-3 mb-10">
                <User className="w-5 h-5 text-slate-300" />
                <span className="text-slate-300">{selectedBlog.author}</span>
              </div>

              <img
                src={selectedBlog.image}
                className="w-full h-[350px] object-cover rounded-md mb-10"
                alt={selectedBlog.title}
              />

              <div className="prose prose-invert max-w-none mb-16">
                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedBlog.content,
                  }}
                />
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-16">
                {selectedBlog.tags?.map((tag) => (
                  <button
                    key={tag}
                    onClick={(e) => handleTagClick(e, tag)}
                    className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-300"
                  >
                    <Tag className="inline w-4 h-4 mr-1" />
                    {tag}
                  </button>
                ))}
              </div>

              {/* RELATED */}
              {relatedBlogs.length > 0 && (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-cyan-400" />
                    <h3 className="text-white text-2xl font-bold">
                      Related Insights
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedBlogs.map((post) => (
                      <div
                        key={post._id}
                        onClick={() => openBlog(post)}
                        className="cursor-pointer bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                      >
                        <img
                          src={post.image}
                          className="h-32 w-full object-cover"
                        />
                        <div className="p-4">
                          <h4 className="text-white text-sm font-bold">
                            {post.title}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* ========================
               LIST VIEW
            ========================= */}
            <h2 className="text-white text-5xl font-extrabold mb-12">Blogs</h2>
            {activeFilter !== "All" && (
              <button
                onClick={() => {
                  setActiveFilter("All");
                  navigate("/news-and-updates");
                }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/40 text-cyan-400 rounded-md hover:bg-cyan-500/10 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                View All Blogs
              </button>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredData.map((post) => (
                <article
                  key={post._id}
                  onClick={() => openBlog(post)}
                  className="cursor-pointer bg-slate-900 border border-slate-800 rounded-md overflow-hidden"
                >
                  <img
                    src={post.image}
                    className="h-64 w-full object-cover"
                    alt={post.title}
                  />
                  <div className="p-4">
                    <h3 className="text-white text-xl font-bold mb-3">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                      {post.description}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <button
                          key={tag}
                          onClick={(e) => handleTagClick(e, tag)}
                          className="text-xs px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                        >
                          #{tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-20 text-slate-400">
                <FileText className="mx-auto mb-4" />
                No articles found
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ArticleGrid;
