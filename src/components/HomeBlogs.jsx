// TeamMemberCard.jsx
import React from "react";
import BestHeading from "./BestHeading";
import { assets } from "../assets/assets";

const TeamMemberCard = ({ image, name, title }) => (
  <div className="relative w-84 h-100 rounded-lg overflow-hidden group shadow-lg mx-auto">
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
        translate-y-30
        group-hover:translate-y-0
        shadow-md
      "
    >
      <p className="text-2xl text-black font-semibold">{name}</p>
      <p className="text-gray-600 text-md mt-2">{title}</p>
      {/* Add social icons or more content as needed */}
    </div>
  </div>
);

export default function HomeBlogs() {
  // Sample data
  const members = [
    {
      image: assets.blog1,
      name: "Person One",
      title: "Project Manager",
    },
    {
      image: assets.blog2,
      name: "Savannah Nguyen",
      title: "Sr. Web Developer",
    },
    {
      image: assets.blog3,
      name: "Person Three",
      title: "UI/UX Designer",
    },
    {
      image: assets.blog4,
      name: "Person Three",
      title: "UI/UX Designer",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className=" max-w-[90rem] mx-auto">
        <BestHeading title="" highlight="News & Updates" />
        <h1 className="text-center text-3xl font-bold mb-8 mt-10">
          Expert IT Team Driving <br /> Business Success Forward.
        </h1>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {members.map((m, idx) => (
            <TeamMemberCard key={idx} {...m} />
          ))}
        </div>
      </div>
    </div>
  );
}
