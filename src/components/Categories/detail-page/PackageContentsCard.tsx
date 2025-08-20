"use client";
import React from "react";

interface PackageContentsCardProps {
  title: string;
  items: string[];
}

const PackageContentsCard: React.FC<PackageContentsCardProps> = ({ title, items }) => {
  return (
    <section className="px-20 py-15">
    <div>
      <h3 className="text-5xl font-semibold mb-8 text-[#143C66] ">{title}</h3>

      <div className="flex flex-wrap gap-6">
        {items.map((item, index) => (
          <span
            key={index}
            className="border rounded-full px-4 py-3 border-gray-400 text-3xl text-gray-700 bg-gray-200"
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
