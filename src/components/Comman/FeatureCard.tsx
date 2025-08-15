"use client";
import React from "react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  feature: {
    title: string;
    description?: string;
    icon?: IconType;
  };
  cardClasses?: string;
  iconClasses?: string;
  titleClasses?: string;
  descriptionClasses?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const Icon = feature.icon;
  const cardClasses =
    "bg-gray-100 p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 min-h-[320px] md:min-h-[360px] flex flex-col justify-center";
  const iconClasses = "w-16 h-16 flex items-center justify-center";
  const titleClasses = "text-xl font-bold text-blue-900 mb-3";
  const descriptionClasses = "text-gray-600 leading-relaxed";
  return (
    <div className={cardClasses}>
      <div className="text-center space-y-4">
        {Icon && (
          <div className="flex justify-center">
            <div className={iconClasses}>
              <Icon />
            </div>
          </div>
        )}
        <div>
          <h3 className={titleClasses}>{feature.title}</h3>
          {feature.description && (
            <p className={descriptionClasses}>{feature.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
