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

  const [page, setPage] = useState(1);
const [limit] = useState(10);
const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [page]);

  /* ======================
     FETCH BLOGS
  ====================== */
  useEffect(() => {
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://api.capyngen.com/api/blogs?page=${page}&limit=${limit}`
      );

      const data = await res.json();

      const list = Array.isArray(data.blogs) ? data.blogs : [];

      setBlogs(list);
      setTotalPages(data.pagination?.totalPages || 1);

    } catch (err) {
      console.error("Blog fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  fetchBlogs();
}, [page, limit]);

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
            item.category === activeFilter || item.tags?.includes(activeFilter),
        );

  const openBlog = (blog) => {
    navigate(`/news-and-updates/${createSlug(blog.title)}`);

    setSelectedBlog(blog);
  };

  const handleTagClick = (e, tag) => {
    e.stopPropagation();
    setActiveFilter(tag);
    setPage(1);
    navigate("/news-and-updates");
    setSelectedBlog(null);
  };

  if (loading) {
    return (
      <div className="w-full bg-white py-32 text-center text-slate-500">
        Loading blogs...
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-16 lg:py-24 text-slate-900 border-b border-slate-200">
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
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blogs
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="flex gap-4 text-slate-500 text-sm mb-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold">
                  {selectedBlog.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {selectedBlog.date}
                </span>
              </div>

              <h1 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                {selectedBlog.title}
              </h1>

              <div className="flex items-center gap-3 mb-10">
                <User className="w-5 h-5 text-slate-400" />
                <span className="text-slate-600 font-medium">{selectedBlog.author}</span>
              </div>

              <img
                src={selectedBlog.image}
                className="w-full h-[350px] object-cover rounded-md mb-10 shadow-sm border border-slate-200"
                alt={selectedBlog.title}
              />

              <div className="prose max-w-none mb-16 text-slate-700">
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
                    className="px-4 py-2 bg-slate-100 border border-slate-200 rounded-md text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition"
                  >
                    <Tag className="inline w-4 h-4 mr-1 text-slate-400" />
                    {tag}
                  </button>
                ))}
              </div>

              {/* RELATED */}
              {relatedBlogs.length > 0 && (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-blue-600" />
                    <h3 className="text-slate-900 text-2xl font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                      Related Insights
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedBlogs.map((post) => (
                      <div
                        key={post._id}
                        onClick={() => openBlog(post)}
                        className="cursor-pointer bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-md transition-all rounded-lg overflow-hidden"
                      >
                        <img
                          src={post.image}
                          className="h-32 w-full object-cover"
                        />
                        <div className="p-4">
                          <h4 className="text-slate-900 text-sm font-bold">
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
            {activeFilter !== "All" && (
              <button
                onClick={() => {
                  setActiveFilter("All");
                  setPage(1);
                  navigate("/news-and-updates");
                }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                View All Blogs
              </button>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((post) => (
                <article
                  key={post._id}
                  onClick={() => openBlog(post)}
                  className="cursor-pointer bg-slate-50 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all rounded-md overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <img
                      src={post.image}
                      className="w-full h-52 object-cover"
                      alt={post.title}
                    />
                    <div className="p-5">
                      <h3 className="text-slate-900 text-lg xl:text-xl font-bold mb-3 hover:text-blue-600 transition-colors" style={{ fontFamily: "'Syne', sans-serif" }}>
                        {post.title}
                      </h3>

                      <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                        {post.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <button
                          key={tag}
                          onClick={(e) => handleTagClick(e, tag)}
                          className="text-xs px-2.5 py-1 bg-white border border-slate-300 rounded-md text-slate-700 hover:text-blue-600 hover:border-blue-400 transition"
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
              <div className="text-center py-20 text-slate-500">
                <FileText className="mx-auto mb-4 w-10 h-10 text-slate-400" />
                No articles found
              </div>
            )}
          </>
        )}
      </section>
      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">

  {/* Previous */}
  <button
    disabled={page === 1}
    onClick={() => setPage((p) => p - 1)}
    className="px-4 py-2 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-md disabled:opacity-40"
  >
    Prev
  </button>

  {/* Page Numbers */}
  {Array.from({ length: totalPages }).map((_, i) => {
    const pageNumber = i + 1;

    return (
      <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className={`px-4 py-2 rounded-md border transition-colors
        ${
          page === pageNumber
            ? "bg-[#2563eb] text-white border-[#2563eb] font-semibold"
            : "border-slate-300 text-slate-700 bg-white hover:bg-slate-100"
        }`}
      >
        {pageNumber}
      </button>
    );
  })}

  {/* Next */}
  <button
    disabled={page === totalPages}
    onClick={() => setPage((p) => p + 1)}
    className="px-4 py-2 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-md disabled:opacity-40"
  >
    Next
  </button>

</div>
    </div>
  );
};

export default ArticleGrid;
