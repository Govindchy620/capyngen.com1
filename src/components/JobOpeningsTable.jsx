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
      <div id="hrms-careers-widget"
        data-company-id="69cc27055f98df1f87e9a01a"
        data-api-base="https://api.orinite.com/api/v1/public/recruitment">
      </div>
      <script src="https://api.orinite.com/careers-v1.js" defer></script>
    </section>
  );
};

export default JobOpeningsTable;
