"use client";
import React from "react";

interface PackageContentsCardProps {
  title: string;
  items: string[];
}

const PackageContentsCard: React.FC<PackageContentsCardProps> = ({ title, items }) => {
  return (
    <section className="px-5 md:px-10 py-10">
    <div>
      <h3 className="text-h1 font-semibold mb-8 text-heading">{title}</h3>

      <div className="flex flex-wrap gap-6">
        {items.map((item, index) => (
          <span
            key={index}
            className="border rounded-full px-4 py-3 border-gray-400 text-h3 text-text-color bg-neutral"
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
