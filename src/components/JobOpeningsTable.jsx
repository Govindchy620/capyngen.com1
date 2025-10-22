import React, { useState } from "react";

const JobOpeningsTable = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const jobData = [
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      jobType: "Full-time",
      description:
        "Develop modern web applications using React.js, ensuring high performance and responsiveness. Collaborate with backend developers and designers to create seamless user experiences.",
      requirements:
        "2+ years experience in React.js, proficiency in JavaScript (ES6+), strong understanding of REST APIs, Git, and responsive design principles.",
    },
    {
      title: "Backend Developer",
      department: "Engineering",
      location: "Bangalore, India",
      jobType: "Full-time",
      description:
        "Build and maintain scalable backend systems with Node.js and Express. Design efficient APIs and ensure robust server-side performance.",
      requirements:
        "3+ years experience in Node.js, familiarity with MongoDB, and experience deploying cloud-based applications.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

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
              {jobData.map((job, index) => (
                <React.Fragment key={index}>
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

                  {/* Animated Expandable Section */}
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

        {/* Apply Info */}
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
