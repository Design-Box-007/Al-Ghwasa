"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface OverviewProps {
  catalogUrl: string;
  catalogName: string;
}

interface KeyOverViewProps {
  title?: string;
  description?: string;
  overViewcategory?: OverviewProps[];
}

const Overview: React.FC<KeyOverViewProps> = ({
  title = "Overview",
  description,
  overViewcategory,
}) => {
  return (
    <section className="px-6 lg:px-10 py-5">
      <h2 className="text-h1 font-semibold text-custom-blue-1 mb-4">{title}</h2>
      <p className="text-text-color leading-relaxed md:text-h3 mb-6">
        {description}
      </p>

      {overViewcategory?.map((category, index) => (
        <Link
          key={index}
          href={category.catalogUrl}
          target="_blank"
          download
          className="inline-flex items-center gap-2 bg-neutral border border-gray-300 text-custom-blue-1 lg:font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition mr-5 text-paragraph"
        >
          {category.catalogName} <ArrowRight size={16}  className="text-white bg-custom-blue-1 rounded-2xl p-0.5"/>
        </Link>
      ))}
    </section>
  );
};

export default Overview;
