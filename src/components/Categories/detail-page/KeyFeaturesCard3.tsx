"use client";

import React from "react";

interface KeyFeaturesCardProps {
  title: string;
  features: React.ReactNode[];
}

const KeyFeaturesCard3: React.FC<KeyFeaturesCardProps> = ({ title, features }) => {
  return (
    <div className=" py-5 w-full lg:px-20 md:px-10 px-5">
      {/* Title */}
      <h2 className="lg:text-5xl text-3xl md:text-4xl text-[#143c66] font-semibold mb-4">{title}</h2>

      {/* Feature List */}
      <ul className="list-disc list-outside space-y-2 px-5 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="leading-relaxed lg:text-2xl">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeaturesCard3;
