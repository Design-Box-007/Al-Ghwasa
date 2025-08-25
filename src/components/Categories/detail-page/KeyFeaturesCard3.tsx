"use client";

import React from "react";

interface KeyFeaturesCardProps {
  title: string;
  features: React.ReactNode[];
}

const KeyFeaturesCard3: React.FC<KeyFeaturesCardProps> = ({ title, features }) => {
  return (
    <div className="p-6 w-full px-20">
      {/* Title */}
      <h2 className="text-5xl text-[#143c66] font-semibold mb-4">{title}</h2>

      {/* Feature List */}
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="leading-relaxed text-2xl">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeaturesCard3;
