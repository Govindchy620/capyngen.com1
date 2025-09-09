import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Updated SVG icons to match the image design
const CalendarIcon = () => (
  <svg
    className="w-12 h-12 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M8 2v4M16 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const CustomersIcon = () => (
  <svg
    className="w-12 h-12 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-12 h-12 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const EmployeesIcon = () => (
  <svg
    className="w-12 h-12 mx-auto text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
  >
    <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

// Stats with numeric values for CountUp
const stats = [
  {
    icon: <CalendarIcon />,
    value: 19,
    suffix: "+ YEARS",
  },
  {
    icon: <CustomersIcon />,
    value: 500,
    suffix: "+ CUSTOMERS",
  },
  {
    icon: <LocationIcon />,
    value: 5,
    suffix: " LOCATIONS",
  },
  {
    icon: <EmployeesIcon />,
    value: 1650,
    suffix: "+ EMPLOYEES",
  },
];

const centers = [
  {
    title: "Trivandrum",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Technopark_main_building%2C_Trivandrum.jpg/320px-Technopark_main_building%2C_Trivandrum.jpg",
    address: (
      <>
        Thejaswini Building, 407
        <br />
        Technopark Campus
      </>
    ),
  },
  {
    title: "Trivandrum",
    image:
      "https://media.istockphoto.com/id/1177711747/photo/technopark-campus-in-trivandrum.webp?b=1&s=170667a&w=0&k=20&c=KMRTGyYeCKZoUuJFf9p60rxo7gAQylnEC-zWyblJvO4=",
    address: (
      <>
        B-5, Gayatri Building,
        <br />
        Technopark Campus
      </>
    ),
  },
  {
    title: "Kochi",
    image: "https://infopark.in/documents/10181/533664/athulya-building.png",
    address: (
      <>
        4th Floor, Athulya Building,
        <br />
        Infopark SEZ, Kakkanad
      </>
    ),
  },
  {
    title: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=320&q=80",
    address: (
      <>
        Trend India Workspaces
        <br />
        HM Tower (5th floor)
        <br />
        No.58 Brigade Road
      </>
    ),
  },
];

const AtAGlance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full bg-gradient-to-br from-red-500 via-red-600 to-pink-600 relative overflow-hidden">
      {/* Background overlay for texture */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      <div className="relative z-10" ref={ref}>
        {/* At a Glance Section */}
        <div className="pb-14">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <h2 className="text-white text-5xl md:text-6xl font-bold text-center mb-16">
              At a Glance
            </h2>

            {/* Stats Container */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="transform transition-all duration-300 group-hover:scale-110 mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-gray-800 font-semibold text-lg tracking-wide group-hover:text-red-600 transition-colors duration-300">
                      {inView && (
                        <CountUp
                          start={0}
                          end={stat.value}
                          duration={2}
                          separator=","
                        />
                      )}
                      {stat.suffix}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Centers Section */}
        <div className="pb-16">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
              Development Centers
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {centers.map((center, i) => (
                <div
                  key={i}
                  className="rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white text-gray-800 hover:bg-gray-50 group"
                >
                  <div className="p-6">
                    <img
                      src={center.image}
                      alt={center.title}
                      className="w-full h-40 object-cover rounded-2xl mb-6"
                    />
                    <h3
                      className={`text-2xl font-bold mb-4 text-center ${
                        center.highlight ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {center.title}
                    </h3>
                    <div
                      className={`text-center text-base leading-relaxed ${
                        center.highlight ? "text-red-100" : "text-gray-600"
                      }`}
                    >
                      {center.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
