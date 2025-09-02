"use client";

import React from "react";

const features = [
  "Continuous monitoring without interruption",
  "Provides TWA exposure levels for critical safety compliance",
  "Compact, lightweight, and easy to use with dositube holders",
];

const FeatureCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-10 px-5 pb-4">
      {features.map((feature, i) => (
        <div
          key={i}
          className="bg-custom-blue-1 text-white text-center rounded-lg px-5 py-8 shadow-md"
        >
          <p className="text-[16px] leading-relaxed">{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
