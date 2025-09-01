"use client";

import React from "react";

interface KeyFeaturesCardProps {
  title: string;
  features: React.ReactNode[];
}

const KeyFeaturesCard3: React.FC<KeyFeaturesCardProps> = ({ title, features }) => {
  return (
    <div className=" py-5 w-full md:px-10 px-5">
      {/* Title */}
      <h2 className="text-h1 text-custom-blue-1 font-semibold mb-4">{title}</h2>

      {/* Feature List */}
      <ul className="list-disc list-outside space-y-2 px-5 text-text-color">
        {features.map((feature, index) => (
          <li key={index} className="leading-relaxed text-h3">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeaturesCard3;
