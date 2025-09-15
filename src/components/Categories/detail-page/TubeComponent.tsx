"use client";

import React from "react";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface FeatureSectionProps {
  leftFeatures: Feature[];
  rightFeatures: Feature[];
  imageSrc?: string; // Optional image
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  leftFeatures,
  rightFeatures,
  imageSrc,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#F6F6F6] p-5">
      {/* Left Features */}
      <div className="flex flex-col gap-6 bg-white p-3 rounded-3xl">
        {leftFeatures.map((feature, idx) => (
          <div key={idx}>
            <h3 className="md:text-2xl text-lg font-semibold text-custom-blue-1">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Center Image / Placeholder */}
      <div className="flex items-center justify-center ">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Feature Image"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
        ) : (
          <div className="w-100 h-full min-h-[400px] bg-[#D9D9D9] rounded-lg"></div>
        )}
      </div>

      {/* Right Features */}
      <div className="flex flex-col gap-6 bg-white p-3 rounded-3xl">
        {rightFeatures.map((feature, idx) => (
          <div key={idx}>
            <h3 className="md:text-2xl text-lg font-semibold text-custom-blue-1">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
