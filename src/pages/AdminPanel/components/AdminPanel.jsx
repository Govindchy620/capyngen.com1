import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import BlogTable from "./BlogTable";
import BlogModal from "./BlogModal";
import EmptyState from "./EmptyState";
import ConfirmModal from "./ConfirmModal";
import { BlogService } from "../services/blogService";
import { useToast } from "../hooks/useToast";
import { getErrorMessage } from "../services/api";
import AdminNavbar from "./AdminNavbar";

export default function AdminPanel() {
  const { push } = useToast();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deletedCount, setDeletedCount] = useState(0);

  // ✅ NEW FOR PROFESSIONAL DELETE
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const adminName = "Admin";

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await BlogService.list();
      setBlogs(data);
    } catch (err) {
      push("error", getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ✅ CREATE → SAME AS BEFORE (TOAST ONLY)
  const handleCreate = async (payload, errMsg) => {
    if (errMsg) return push("error", errMsg);
    try {
      const created = await BlogService.create(payload);
      setBlogs((b) => [created, ...b]);
      setOpenModal(false);
      push("success", "✅ Blog created successfully");
    } catch (err) {
      push("error", getErrorMessage(err));
    }
  };

  // ✅ EDIT → SAME AS BEFORE (TOAST ONLY)
  const handleEdit = async (payload, errMsg) => {
    if (errMsg) return push("error", errMsg);
    try {
      const updated = await BlogService.update(editing._id, payload);
      setBlogs((b) =>
        b.map((x) => (x._id === editing._id ? { ...x, ...updated } : x))
      );
      setEditing(null);
      setOpenModal(false);
      push("success", "✏️ Blog updated successfully");
    } catch (err) {
      push("error", getErrorMessage(err));
    }
  };

  // ✅ DELETE → OPEN PROFESSIONAL MODAL (NO confirm())
  const handleDelete = (blog) => {
    setSelectedBlog(blog);
    setConfirmOpen(true);
  };

  // ✅ ACTUAL DELETE AFTER CONFIRM
  const confirmDelete = async () => {
    try {
      await BlogService.remove(selectedBlog._id);
      setBlogs((b) => b.filter((x) => x._id !== selectedBlog._id));
      setDeletedCount((c) => c + 1);
      push("success", "🗑️ Blog deleted successfully");
    } catch (err) {
      push("error", getErrorMessage(err));
    } finally {
      setConfirmOpen(false);
      setSelectedBlog(null);
    }
  };

  const totalBlogs = useMemo(() => blogs.length, [blogs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white">
      <AdminNavbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* ✅ HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 shadow-xl mb-10 flex justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {adminName} 👋</h1>
            <p className="text-sm opacity-90 mt-1">
              Manage all your blogs from one powerful dashboard
            </p>
          </div>

          <button
            onClick={() => {
              setEditing(null);
              setOpenModal(true);
            }}
            className="px-6 py-2 rounded-xl bg-black/80 hover:bg-black"
          >
            + Create Blog
          </button>
        </motion.div>

        {/* ✅ STATS */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="p-6 rounded-2xl bg-[#111827] shadow-lg">
            <p>Total Blogs</p>
            <p className="text-3xl font-bold">{totalBlogs}</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#111827] shadow-lg">
            <p>Deleted Blogs</p>
            <p className="text-3xl font-bold">{deletedCount}</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#111827] shadow-lg">
            <p>Status</p>
            <p className="text-green-400">Online ✅</p>
          </div>
        </div>

        {/* ✅ TABLE */}
        <div className="mt-10 bg-[#020617] p-6 rounded-3xl shadow-2xl">
          {loading ? (
            <div className="animate-pulse h-52 rounded-xl bg-white/10" />
          ) : blogs.length === 0 ? (
            <EmptyState
              action={
                <button
                  onClick={() => setOpenModal(true)}
                  className="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700"
                >
                  Create your first blog
                </button>
              }
            />
          ) : (
            <BlogTable
              blogs={blogs}
              onEdit={(b) => {
                setEditing(b);
                setOpenModal(true);
              }}
              onDelete={handleDelete} // ✅ NOW PROFESSIONAL
            />
          )}
        </div>
      </div>

      {/* ✅ BLOG MODAL */}
      <BlogModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditing(null);
        }}
        onSave={editing ? handleEdit : handleCreate}
        initial={editing}
      />

      {/* ✅ PROFESSIONAL CONFIRM DELETE POPUP */}
      <ConfirmModal
        open={confirmOpen}
        title="Delete Blog?"
        message={`Are you sure you want to delete "${selectedBlog?.title}"?`}
        confirmText="Yes, Delete"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
