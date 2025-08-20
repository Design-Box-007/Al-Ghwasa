"use client";

import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  title?: string;
  features: Feature[];
}

const Table: React.FC<KeyFeaturesProps> = ({
  title = "Key Features",
  features,
}) => {
  return (
    <section className="px-6 lg:px-20 py-10">
      <h2 className="text-5xl font-semibold text-[#143C66] mb-6">{title}</h2>
      <div className="overflow-hidden rounded-lg border-2 border-gray-400">
        <table className="w-full">
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <td className="px-4 py-6 font-medium text-[20px] text-gray-800 w-1/3">
                  {feature.title}
                </td>
                <td className="px-4 py-3 text-gray-600 text-[20px]">{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
