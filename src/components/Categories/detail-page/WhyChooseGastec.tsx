"use client";

import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  featureImage?: string;
  featureTitle?: string;
  description?: string;
}

interface WhyChooseProps {
  imageUrl: string;
  title?: string;
  features?: FeatureCardProps[];
}

const WhyChooseGastec: React.FC<WhyChooseProps> = ({
  imageUrl,
  title = "Why Choose GASTEC?",
  features,
}) => {
  return (
    <section className="px-6 lg:px-10 py-8">
      {/* Top Image */}
      <div className="w-full flex justify-center mb-10">
        <Image
          src={imageUrl}
          alt="Why Choose GASTEC"
          width={900}
          height={500}
          className="rounded-2xl object-contain shadow-md"
        />
      </div>

      {/* Section Title */}
      <h2 className="text-h2 font-semibold text-custom-blue-1 mb-6">{title}</h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features?.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-2xl shadow-sm p-4 flex flex-col bg-white hover:shadow-md transition"
          >
            {/* Image or placeholder */}
            {item.featureImage ? (
              <Image
                src={item.featureImage}
                alt={title}
                width={400}
                height={400}
                className="w-full object-cover rounded-xl mb-4"
              />
            ) : (
              <div className="w-full h-80 bg-neutral rounded-xl mb-4"></div>
            )}

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg">{item.featureTitle}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseGastec;
