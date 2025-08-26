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
  overViewcategory?: OverviewProps[]
}

const Overview: React.FC<KeyOverViewProps> = ({
  title = "Overview",
  description,
  overViewcategory,
}) => {
  return (
    <section className="px-6 lg:px-20 py-5">
      <h2 className="lg:text-5xl text-3xl md:text-4xl font-semibold text-heading mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed lg:text-3xl md:text-2xl mb-6">
        {description}
      </p>

      {
        overViewcategory?.map((category, index) => (
        
        <Link
        key={index}
        href={category.catalogUrl}
        target="_blank"
        download
        className="inline-flex items-center gap-2 bg-white border border-gray-300 text-[#143C66] lg:font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition mr-5"
      >
        {category.catalogName} <ArrowRight size={16} />
      </Link>
    
        ))
      }
     
    </section>
  );
};

export default Overview;
