"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeatureSection from "./TubeComponent";

interface OverviewProps {
  catalogUrl: string;
  catalogName: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

interface KeyOverViewProps {
  title?: string;
  description?: string;
  overViewcategory?: OverviewProps[];
  showImage?: boolean;
  imageUrl?: string;
  features?: FeatureProps[];
  showFeatureSection?: boolean; // ✅ optional prop
  leftFeatures?: FeatureProps[];
  rightFeatures?: FeatureProps[];
}

const Overview: React.FC<KeyOverViewProps> = ({
  title = "Overview",
  description,
  overViewcategory,
  features,
  showFeatureSection = false,
  leftFeatures,
  rightFeatures,
}) => {
  return (
    <section className="px-6 lg:px-10 py-5">
      {/* Title */}
      <h2 className="text-h1 font-semibold text-custom-blue-1 mb-4">{title}</h2>

      {/* Description */}
      {description && (
        <p className="text-text-color leading-relaxed md:text-h3 mb-6">
          {description}
        </p>
      )}

      {/* ✅ Conditionally Render FeatureSection */}
      {showFeatureSection && (
        <FeatureSection
          leftFeatures={leftFeatures || []}
          rightFeatures={rightFeatures || []}
          // imageSrc="/images/sample.png"
        />
      )}

      {/* Download Buttons */}
      {overViewcategory?.map((category, index) => (
        <Link
          key={index}
          href={category.catalogUrl}
          target="_blank"
          download
          className="inline-flex items-center gap-2 bg-neutral border border-gray-300 text-custom-blue-1 lg:font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition mr-5 text-paragraph"
        >
          {category.catalogName}
          <ArrowRight
            size={16}
            className="text-white bg-custom-blue-1 rounded-2xl p-0.5"
          />
        </Link>
      ))}

      {/* Feature Cards (Optional) */}
      {features && features.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-5 shadow-sm bg-neutral flex flex-col gap-6"
            >
              <h4 className="font-semibold text-custom-blue-1 text-h3">
                {feature.title}
              </h4>
              <p className="text-text-color text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Overview;
