// TeamMemberCard.jsx
import React from "react";

const TeamMemberCard = ({ image, name, title }) => (
  <div className="relative w-72 h-80 rounded-lg overflow-hidden group shadow-lg bg-white mx-auto">
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-opacity duration-200"
    />
    <div
      className="
        absolute bottom-0 left-0 w-full
        bg-white/90
        p-6
        transition-transform duration-300
        translate-y-24
        group-hover:translate-y-0
        shadow-md
      "
    >
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-gray-600 text-sm mt-2">{title}</p>
      {/* Add social icons or more content as needed */}
    </div>
  </div>
);

export default function HomeBlogs() {
  // Sample data
  const members = [
    {
      image: "/images/member1.jpg",
      name: "Person One",
      title: "Project Manager",
    },
    {
      image: "/images/member2.jpg",
      name: "Savannah Nguyen",
      title: "Sr. Web Developer",
    },
    {
      image: "/images/member3.jpg",
      name: "Person Three",
      title: "UI/UX Designer",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h3 className="text-center text-3xl font-bold mb-8">
        Expert IT Team Driving <br /> Business Success Forward.
      </h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {members.map((m, idx) => (
          <TeamMemberCard key={idx} {...m} />
        ))}
      </div>
    </div>
  );
}
