"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface OverviewProps {
  title?: string;
  description: string;
  catalogUrl: string;
  catalogName: React.ReactNode;
}

const Overview: React.FC<OverviewProps> = ({
  title = "Overview",
  description,
  catalogUrl,
  catalogName,
}) => {
  return (
    <section className="px-6 lg:px-20 py-10">
      <h2 className="text-5xl font-semibold text-[#143C66] mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed text-3xl mb-6">
        {description}
      </p>

      <Link
        href={catalogUrl}
        target="_blank"
        download
        className="inline-flex items-center gap-2 bg-white border border-gray-300 text-[#143C66] font-medium px-4 py-2 rounded-full shadow-sm hover:bg-gray-100 transition"
      >
        {catalogName} <ArrowRight size={16} />
      </Link>
    </section>
  );
};

export default Overview;
