import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const userActivityData = [
  { day: "01", value: 0 },
  { day: "05", value: 300 },
  { day: "10", value: 700 },
  { day: "15", value: 900 },
  { day: "20", value: 1700 },
  { day: "25", value: 2500 },
];

const performanceData = [
  { day: "Sun", before: 100, after: 120 },
  { day: "Mon", before: 40, after: 50 },
  { day: "Tue", before: 60, after: 70 },
  { day: "Wed", before: 140, after: 160 },
];

// Stats data for before and after SEO
const statsData = {
  before: {
    traffic: 3240,
    keywords: 1850,
    roi: 185,
  },
  after: {
    traffic: 10265,
    keywords: 8426,
    roi: 726,
  },
};

function SeoStatsSection() {
  const [seoActive, setSeoActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentStats, setCurrentStats] = useState(statsData.before);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleToggle = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSeoActive(!seoActive);
      setCurrentStats(seoActive ? statsData.before : statsData.after);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section
      ref={ref}
      className="w-full py-16 px-6 bg-black text-white text-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1 rounded-lg bg-blue-100 text-blue-600 font-semibold text-sm">
          SEO Agency of the Year
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-light leading-tight">
          Expect great things <br />
          <span className="font-bold">from your SEO Agency</span>
        </h2>
        <p className="mt-4 text-white max-w-2xl mx-auto">
          Believe it because you've seen it. Here are real numbers from just one
          successful Victorious partner.
        </p>

        {/* Charts */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* User Activity Line Chart */}
          <div>
            <h4 className="text-white font-semibold mb-3">User Activity</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userActivityData}>
                <XAxis dataKey="day" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#22c55e"
                  strokeWidth={3}
                  fill="#22c55e"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Toggle + Stats */}
          <div>
            <div className="flex justify-center items-center gap-4 mb-6">
              <span
                className={`text-sm font-medium ${
                  !seoActive ? "text-white" : "text-gray-400"
                }`}
              >
                BEFORE SEO
              </span>
              <button
                onClick={handleToggle}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 hover:scale-110 ${
                  seoActive
                    ? "bg-blue-600 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    seoActive ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  seoActive ? "text-white" : "text-gray-400"
                }`}
              >
                AFTER SEO
              </span>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div
                className={`transform transition-all duration-500 hover:scale-105 p-2 rounded-xl  ${
                  isTransitioning
                    ? "opacity-50 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <p
                  className={`text-4xl font-bold transition-colors duration-300 ${
                    seoActive ? "text-green-600" : "text-blue-700"
                  }`}
                >
                  {inView && (
                    <CountUp
                      key={`traffic-${seoActive}`}
                      end={currentStats.traffic}
                      duration={2}
                      separator=","
                    />
                  )}
                </p>
                <p className="text-white mt-2 font-medium">
                  Annual Organic Traffic
                </p>
              </div>
              <div
                className={`transform transition-all duration-500 hover:scale-105 p-2 rounded-xl ${
                  isTransitioning
                    ? "opacity-50 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <p
                  className={`text-4xl font-bold transition-colors duration-300 ${
                    seoActive ? "text-green-600" : "text-blue-700"
                  }`}
                >
                  {inView && (
                    <CountUp
                      key={`keywords-${seoActive}`}
                      end={currentStats.keywords}
                      duration={2}
                      separator=","
                    />
                  )}
                </p>
                <p className="text-white mt-2 font-medium">Ranking Keywords</p>
              </div>
              <div
                className={`transform transition-all duration-500 hover:scale-105 p-2 rounded-xl ${
                  isTransitioning
                    ? "opacity-50 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <p
                  className={`text-4xl font-bold transition-colors duration-300 ${
                    seoActive ? "text-green-600" : "text-blue-700"
                  }`}
                >
                  {inView && (
                    <CountUp
                      key={`roi-${seoActive}`}
                      end={currentStats.roi}
                      duration={2}
                      suffix="%"
                    />
                  )}
                </p>
                <p className="text-white mt-2 font-medium">
                  Return on Investment
                </p>
              </div>
            </div>
          </div>

          {/* Performance Bar Chart */}
          <div>
            <h4 className="text-white font-semibold mb-3">Performance</h4>
            <div className="flex justify-center gap-4 mb-3">
              <button className="text-sm px-3 py-1 rounded-lg bg-blue-600 text-white">
                Week
              </button>
              <button className="text-sm px-3 py-1 rounded-lg bg-gray-200 text-gray-600">
                Month
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <XAxis dataKey="day" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip />
                <Legend />
                <Bar dataKey="before" fill="#3b82f6" />
                <Bar dataKey="after" fill="#facc15" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoStatsSection;
