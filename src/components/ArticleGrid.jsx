import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { slugify } from "../utils/slugify";

const API_URL = "https://api.capyngen.com/api/blogs";
const PAGE_SIZE = 6;

const ArticleGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  /* ======================
      FETCH BLOGS
  ======================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (err) {
        console.error("Failed to fetch blogs", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* ======================
      PAGINATION
  ======================= */
  const totalPages = Math.ceil(blogs.length / PAGE_SIZE);
  const paginatedBlogs = blogs.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) {
    return (
      <div className="text-center py-40 text-slate-400">Loading blogs...</div>
    );
  }

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Blogs | Capyngen</title>
        <meta
          name="description"
          content="Latest blogs, insights, and product updates from Capyngen."
        />
      </Helmet>

      <div className="w-full bg-black py-24">
        <section className="max-w-[90vw] mx-auto w-full">
          {/* HEADER */}
          <div className="flex justify-between items-end mb-12">
            <h1 className="text-white text-5xl font-extrabold">Blogs</h1>
          </div>

          {/* BLOG GRID — SAME AS BLOGS PAGE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedBlogs.map((post) => (
              <article
                key={post._id}
                onClick={() =>
                  navigate(`/news-and-updates/${slugify(post.title)}`)
                }
                className="cursor-pointer bg-slate-900 border border-slate-800 rounded-md overflow-hidden hover:border-slate-600 hover:-translate-y-1 transition-all"
              >
                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />

                  {/* CATEGORY BADGE */}
                  {post.category && (
                    <div className="absolute top-4 left-4 text-xs bg-slate-900/80 border border-slate-700 px-3 py-1 rounded-md text-white uppercase">
                      {post.category}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-white text-xl font-bold mb-3 hover:text-cyan-400">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex justify-between items-center border-t border-slate-800 pt-4 mt-auto">
                    {/* TAGS */}
                    <div className="flex gap-2">
                      {post.tags?.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300 flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DATE */}
                    <span className="text-xs text-slate-500">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* EMPTY STATE */}
          {blogs.length === 0 && (
            <div className="text-center py-20 bg-slate-900/50 rounded-xl border border-slate-800 mt-20">
              <div className="w-16 h-16 mx-auto bg-slate-800 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-white text-xl mb-2">No blogs found</h3>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-14">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-40"
              >
                Prev
              </button>

              <span className="text-slate-400">
                Page {page} of {totalPages}
              </span>

              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 bg-slate-800 text-white rounded disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default ArticleGrid;
