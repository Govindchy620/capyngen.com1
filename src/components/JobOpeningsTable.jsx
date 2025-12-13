import React, { useState, useEffect } from "react";

const JobOpeningsTable = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Live API endpoint
  const API_URL = "https://api.capyngen.com/api/careers";

  // ✅ Fetch careers from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data.ok && Array.isArray(data.careers)) {
          setJobs(data.careers);
        } else {
          setError("Unexpected API response format");
        }
      } catch (err) {
        console.error("Error fetching careers:", err);
        setError("Failed to load job openings");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  // ✅ Loading state
  if (loading)
    return (
      <div className="text-center text-gray-400 py-10 text-lg">
        Loading job openings...
      </div>
    );

  // ✅ Error state
  if (error)
    return (
      <div className="text-center text-red-500 py-10 text-lg">{error}</div>
    );

  return (
    <section className="bg-black py-16 px-4 sm:px-8 lg:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
          Current Job Openings
        </h2>

        {/* Table Container */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
          <table className="min-w-full border-collapse">
            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <tr>
                <th className="py-4 px-4 text-center text-sm sm:text-base font-semibold">
                  Title
                </th>
                <th className="py-4 px-4 text-center text-sm sm:text-base font-semibold">
                  Department
                </th>
                <th className="py-4 px-4 text-center text-sm sm:text-base font-semibold">
                  Location
                </th>
                <th className="py-4 px-4 text-center text-sm sm:text-base font-semibold">
                  Type
                </th>
                <th className="py-4 px-4 text-center text-sm sm:text-base font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-gray-800">
              {jobs.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-8 text-gray-500 text-lg"
                  >
                    No job openings available currently.
                  </td>
                </tr>
              )}

              {jobs.map((job, index) => (
                <React.Fragment key={job._id || index}>
                  {/* Main Row */}
                  <tr className="hover:bg-blue-50 transition-colors duration-200">
                    <td className="py-4 px-4 font-semibold text-center text-gray-900">
                      {job.title}
                    </td>
                    <td className="py-4 px-4 text-center">{job.department}</td>
                    <td className="py-4 px-4 text-center">{job.location}</td>
                    <td className="py-4 px-4 text-center">{job.jobType}</td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => toggleExpand(index)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md transition-all"
                      >
                        {expandedRow === index
                          ? "Hide Details"
                          : "View Details"}
                      </button>
                    </td>
                  </tr>

                  {/* Expanded Details */}
                  <tr>
                    <td colSpan="5" className="p-0">
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedRow === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="bg-gray-50 p-6 border-t border-gray-200">
                          <div className="text-left space-y-4">
                            <p className="text-gray-900 font-semibold text-lg">
                              Description:
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              {job.description}
                            </p>

                            <p className="text-gray-900 font-semibold text-lg mt-4">
                              Requirements:
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                              {job.requirements}
                            </p>

                            {job.applyLink && (
                              <p className="mt-4">
                                <a
                                  href={job.applyLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 font-semibold hover:underline"
                                >
                                  Apply Here
                                </a>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-lg sm:text-xl text-gray-300 font-medium">
            ✉️ For applying, please mail us at{" "}
            <a
              href="mailto:careers@example.com"
              className="text-blue-400 font-semibold hover:underline"
            >
              careers@example.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsTable;
