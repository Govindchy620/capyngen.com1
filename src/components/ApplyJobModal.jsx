import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Upload,
  CheckCircle2,
  Loader2,
  MapPin,
  AlertCircle,
  FileText,
} from "lucide-react";
import { fetchCountries, submitApplication } from "../services/api";

const ApplyJobModal = ({ job, onClose }) => {
  const modalRef = useRef(null);

  const [countries, setCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    state: "",
    country: "India",
    workExperience: "Fresher",
    experienceYears: "",
    introduction: "",
    resume: null,
  });

  /* ---------------- Effects ---------------- */

  // Close modal on outside click or ESC
  useEffect(() => {
    const handleClose = (e) => {
      if (e.key === "Escape") onClose();
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, [onClose]);

  // Fetch countries
  useEffect(() => {
    fetchCountries()
      .then((res) => setCountries(res || []))
      .finally(() => setLoadingCountries(false));
  }, []);

  /* ---------------- Handlers ---------------- */

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setError("Only PDF files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Resume size must be under 5MB.");
      return;
    }

    setForm((prev) => ({ ...prev, resume: file }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    setError("");

    if (!job?.title) {
      setError("Job designation missing.");
      return;
    }

    if (!form.resume) {
      setError("Resume is required.");
      return;
    }

    if (form.workExperience === "Experienced" && !form.experienceYears) {
      setError("Please select experience.");
      return;
    }

    setSubmitting(true);

    const payload = new FormData();

    payload.append("name", form.name.trim());
    payload.append("mobile", form.mobile.trim());
    payload.append("email", form.email.trim());
    payload.append("city", form.city.trim());
    payload.append("state", form.state.trim());
    payload.append("country", form.country);
    payload.append("workExperience", form.workExperience);
    payload.append("experienceYears", form.experienceYears || "0");
    payload.append("introduction", form.introduction.trim());
    payload.append("resume", form.resume);
    payload.append("designation", job.title);

    try {
      await submitApplication(payload);
      setSuccess(true);
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ---------------- Success Screen ---------------- */

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
        <div className="bg-zinc-900 rounded-2xl p-10 max-w-md w-full text-center">
          <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">
            Application Submitted
          </h3>
          <p className="text-zinc-400 mb-6">
            We’ve received your application for{" "}
            <b className="text-white">{job.title}</b>.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- Modal ---------------- */

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="w-full max-w-3xl bg-zinc-900 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Apply for {job.title}
            </h2>
            <p className="text-sm text-zinc-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {job.location}
            </p>
          </div>
          <button onClick={onClose} className="text-zinc-400 hover:text-white">
            <X />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          {error && (
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-300 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Full Name"
              required
              className="input"
              onChange={updateField}
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              required
              className="input"
              onChange={updateField}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input md:col-span-2"
              onChange={updateField}
            />
            <input
              name="city"
              placeholder="City"
              className="input"
              onChange={updateField}
            />
            <input
              name="state"
              placeholder="State"
              className="input"
              onChange={updateField}
            />

            <select
              name="country"
              className="input md:col-span-2 bg-zinc-900 max-w-[80vw]"
              onChange={updateField}
            >
              {loadingCountries ? (
                <option>Loading countries…</option>
              ) : (
                countries.map((c) => (
                  <option key={c.cca2} value={c.name.common}>
                    {c.name.common}
                  </option>
                ))
              )}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              name="workExperience"
              className="input bg-zinc-900"
              onChange={updateField}
            >
              <option>Fresher</option>
              <option>Experienced</option>
            </select>

            {form.workExperience === "Experienced" && (
              <select
                name="experienceYears"
                className="input bg-zinc-900"
                required
                onChange={updateField}
              >
                <option value="">Years of Experience</option>
                {Array.from({ length: 16 }, (_, i) => (
                  <option key={i}>
                    {i === 15 ? "15+ Years" : `${i}-${i + 1} Years`}
                  </option>
                ))}
              </select>
            )}
          </div>

          <textarea
            name="introduction"
            rows="4"
            placeholder="Why are you a right fit for this job?"
            className="w-full input md:col-span-2"
            onChange={updateField}
          />

          {/* Resume */}
          <label className="border border-dashed border-white/20 rounded-xl p-5 flex flex-col items-center text-sm text-zinc-400 cursor-pointer hover:border-white/40">
            {form.resume ? (
              <>
                <FileText className="w-6 h-6 text-green-400 mb-1" />
                {form.resume.name}
              </>
            ) : (
              <>
                <Upload className="w-6 h-6 mb-1" />
                Upload Resume (PDF, max 5MB)
              </>
            )}
            <input type="file" hidden accept=".pdf" onChange={handleFile} />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold text-white flex justify-center items-center gap-2 disabled:opacity-60"
          >
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobModal;
