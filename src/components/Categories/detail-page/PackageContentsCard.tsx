"use client";
import React from "react";

interface PackageContentsCardProps {
  title: string;
  items: string[];
}

const PackageContentsCard: React.FC<PackageContentsCardProps> = ({ title, items }) => {
  return (
    <section className="lg:px-20 px-5 md:px-10 py-10">
    <div>
      <h3 className="lg:text-5xl text-3xl md:text-4xl font-semibold mb-8 text-heading">{title}</h3>

      <div className="flex flex-wrap gap-6">
        {items.map((item, index) => (
          <span
            key={index}
            className="border rounded-full px-4 py-3 border-gray-400 lg:text-3xl md:text-[20px] text-gray-700 bg-gray-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    </section>
  );
};

export default PackageContentsCard;
