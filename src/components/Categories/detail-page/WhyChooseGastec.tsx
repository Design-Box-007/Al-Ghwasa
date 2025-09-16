"use client";

import React from "react";
import Image from "next/image";
import RevealComponent from "@/components/Comman/RevealComponent";

interface FeatureCardProps {
  featureImage?: string;
  featureTitle?: string;
  description?: string;
}

interface WhyChooseProps {
  imageUrl?: string;
  title?: string;
  title2?: string;
  features?: FeatureCardProps[];
  description?: string;
  description2?: string;
  className?: string;
  titleClass?: string;
  imageClass?: string;
}

const WhyChooseGastec: React.FC<WhyChooseProps> = ({
  imageUrl,
  title,
  title2,
  features,
  description,
  description2,
  className,
  titleClass,
  imageClass,
}) => {
  return (
    <section className="px-6 lg:px-10 py-8">
      {/* Top Image */}
      {imageUrl && (
        <RevealComponent direction="left" backgroundClass="bg-white">
          <div className="w-full flex justify-center mb-10">
            <Image
              src={imageUrl}
              alt="Why Choose GASTEC"
              width={900}
              height={500}
              className={imageClass || `rounded-2xl object-contain`}
            />
          </div>
        </RevealComponent>
      )}

      {/* Section Title (only if title exists) */}
      {title && (
        <h2
          className={
            titleClass || `text-h1 font-semibold text-custom-blue-1 mb-6`
          }
        >
          {title}
        </h2>
      )}

      {/* Description Container (only if description exists) */}
      {description && (
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          {title2 && (
            <h2 className="text-h1 font-semibold text-custom-blue-1 w-full lg:w-1/2">
              {title2}
            </h2>
          )}
          <p className="text-text-color w-full lg:w-1/2">{description}</p>
        </div>
      )}

      {description2 && (
        <div className="mb-5">
          <p>{description2}</p>
        </div>
      )}

      {/* Features Grid */}
      <div
        className={
          className || `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
        }
      >
        {features?.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-2xl shadow-sm p-4 flex flex-col bg-white hover:shadow-md transition"
          >
            {/* Image with fixed height */}
            {item.featureImage ? (
              <div className="w-full h-70 mb-4">
                {" "}
                {/* Fixed height for all images */}
                <Image
                  src={item.featureImage}
                  alt={item.featureTitle || "Feature"}
                  width={400}
                  height={240}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ) : (
              <div className="w-full h-60 bg-neutral rounded-xl mb-4"></div>
            )}

            {/* Content spaced with flex-grow */}
            <div className="flex flex-col justify-between flex-grow gap-3">
              {item.featureTitle && (
                <h3 className="font-semibold text-lg text-custom-blue-1">
                  {item.featureTitle}
                </h3>
              )}
              {item.description && (
                <p className="text-text-color">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseGastec;
