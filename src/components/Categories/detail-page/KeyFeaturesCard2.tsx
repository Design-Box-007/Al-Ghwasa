"use client";

import React from "react";

interface FeatureChipsProps {
  title?: string;
  items: string[];
}

const KeyFeatureCard2: React.FC<FeatureChipsProps> = ({ title, items }) => {
  return (
    <section className="md:px-10 px-5 py-10">
      {title && (
        <h2 className="text-h1 font-semibold mb-6 text-custom-blue-1">{title}</h2>
      )}

      <div className="flex flex-wrap gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="px-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm text-text-color md:text-h3"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatureCard2;
