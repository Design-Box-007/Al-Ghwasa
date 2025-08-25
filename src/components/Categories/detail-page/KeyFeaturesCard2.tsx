"use client";

import React from "react";

interface FeatureChipsProps {
  title?: string;
  items: string[];
}

const KeyFeatureCard2: React.FC<FeatureChipsProps> = ({ title, items }) => {
  return (
    <section className="px-20 py-10">
      {title && (
        <h2 className="text-5xl font-semibold mb-6 text-[#143C66]">{title}</h2>
      )}

      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 text-2xl"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatureCard2;
