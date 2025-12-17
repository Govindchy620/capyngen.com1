import React, { useState, useEffect } from "react";
import ApplyJobModal from "./ApplyJobModal";

const JobOpeningsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const API_URL = "https://api.capyngen.com/api/careers";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        if (data.ok) setJobs(data.careers || []);
        else throw new Error();
      } catch {
        setError("Failed to load job openings");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  /* ================= STATES ================= */

  if (loading)
    return (
      <div className="text-center text-gray-400 py-20 text-lg">
        Loading job openings…
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 py-20 text-lg">{error}</div>
    );

  /* ================= UI ================= */

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Current Job Openings
        </h2>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-white/10">
          <table className="min-w-full text-white">
            <thead className="bg-blue-900">
              <tr>
                {["Title", "Department", "Location", "Type", "Action"].map(
                  (h) => (
                    <th
                      key={h}
                      className="py-4 px-4 text-lg font-semibold text-center"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {jobs.map((job) => (
                <React.Fragment key={job._id}>
                  <tr className="hover:bg-white/5 transition">
                    <td className="py-4 px-4 font-semibold text-center">
                      {job.title}
                    </td>
                    <td className="py-4 px-4 text-center">{job.department}</td>
                    <td className="py-4 px-4 text-center">{job.location}</td>
                    <td className="py-4 px-4 text-center">{job.jobType}</td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => toggleExpand(job._id)}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold"
                      >
                        {expandedRow === job._id
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </td>
                  </tr>

                  {expandedRow === job._id && (
                    <tr className="text-left">
                      <td colSpan="5" className="bg-black p-6">
                        <div className="space-y-4">
                          <div
                            className="prose prose-invert max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: job.description,
                            }}
                          />
                          {job.requirements && (
                            <div>
                              <h2 className="text-2xl font-semibold mt-10 mb-3">
                                Requirements:
                              </h2>
                              <p className="text-lg">{job.requirements}</p>
                            </div>
                          )}
                          <button
                            onClick={() => setSelectedJob(job)}
                            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg font-semibold"
                          >
                            Apply Here
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-zinc-900/80 border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>

              <div className="text-sm text-gray-400 space-y-1">
                <p>
                  <span className="font-medium text-white">Department:</span>{" "}
                  {job.department}
                </p>
                <p>
                  <span className="font-medium text-white">Location:</span>{" "}
                  {job.location}
                </p>
                <p>
                  <span className="font-medium text-white">Type:</span>{" "}
                  {job.jobType}
                </p>
              </div>

              <button
                onClick={() => toggleExpand(job._id)}
                className="mt-4 w-full bg-blue-600 py-2 rounded-lg font-semibold"
              >
                {expandedRow === job._id ? "Hide Details" : "View Details"}
              </button>

              {expandedRow === job._id && (
                <div className="mt-4 space-y-4 text-gray-300 text-left">
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: job.description,
                    }}
                  />
                  {job.requirements && (
                    <div>
                      <h2 className="text-xl font-semibold">Requirements:</h2>
                      <p className="">{job.requirements}</p>
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="w-full bg-green-600 py-2 rounded-lg font-semibold"
                  >
                    Apply Here
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= APPLY MODAL ================= */}
      {selectedJob && (
        <ApplyJobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  );
};

export default JobOpeningsTable;
