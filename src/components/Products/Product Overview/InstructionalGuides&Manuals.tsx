"use client";

import React from "react";
import ProductGrid, { ProductGridItem } from "@/components/Comman/ProductGrid";

const guides: ProductGridItem[] = [
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
    name: "GASTEC Detector Tube Handbook",
    description:
      "Includes specs, shelf life, cross-sensitivity, color chart samples",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
    name: "GV-100 & GV-110 Pump Operation Manual",
    description: "Step-by-step use guide with maintenance tips",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
    name: "Sampling Techniques Guidebook",
    description:
      "Covers standard operating procedures and industry best practices",
  },
];

const InstructionalGuidesAndManuals: React.FC = () => {
  return (
    <ProductGrid
      title="Instructional Guides & Manuals"
      subtitle="A range of optional components to extend functionality, enhance access, and ensure safe sampling."
      items={guides}
      ctaLabel="View Accessories"
      ctaHref="#"
      actionVariant="dot"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default InstructionalGuidesAndManuals;
