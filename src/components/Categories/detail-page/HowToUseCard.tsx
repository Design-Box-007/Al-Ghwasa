"use client";
import Image from "next/image";
import React from "react";

interface Step {
  step: string;
  title: string;
  details: string[];
  image?: string;
}

interface StepsGridProps {
  heading?: React.ReactNode;
  steps?: Step[];
}

const StepsGrid: React.FC<StepsGridProps> = ({ steps, heading }) => {
  return (
    <div className="px-5 md:px-10 py-10">
      {/* Heading */}
      <h2 className="text-h1 font-bold mb-6 text-heading">{heading}</h2>
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
               <div></div>
            )} 
          

            {/* Content */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-black font-bold">{item.step}</span>
              </div>
              <ul className="list-disc list-outside space-y-1 text-sm text-text-color ml-3 text-paragraph">
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
