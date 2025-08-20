"use client";
import Image from "next/image";
import React from "react";

interface Step {
  step: string;
  title: string;
  details: string[];
  image?: string; // optional image support
}

interface StepsGridProps {
  steps?: Step[];
  heading: string;
}

const StepsGrid: React.FC<StepsGridProps> = ({ steps, heading }) => {
  return (
    <div className="px-20 py-10">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6">{heading}</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps?.map((item, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-2xl shadow-sm p-4 flex flex-col bg-white hover:shadow-md transition"
          >
            {/* Image or placeholder */}
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full object-cover rounded-xl mb-4"
              />
              
            ) : (
              <div className="w-full h-80 bg-gray-100 rounded-xl mb-4"></div>
            )}
           

            {/* Content */}
            <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <span className="text-gray-400 font-medium">{item.step}</span>
            </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsGrid;
