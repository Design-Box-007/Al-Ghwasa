"use client";

import React from "react";
import ProductGrid, { ProductGridItem } from "@/components/Comman/ProductGrid";
import data from "@/data/products/gastec3.json"

// const guides: ProductGridItem[] = [
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
//     name: "GASTEC Detector Tube Handbook",
//     description:
//       "Includes specs, shelf life, cross-sensitivity, color chart samples",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
//     name: "GV-100 & GV-110 Pump Operation Manual",
//     description: "Step-by-step use guide with maintenance tips",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
//     name: "Sampling Techniques Guidebook",
//     description:
//       "Covers standard operating procedures and industry best practices",
//   },
// ];

const InstructionalGuidesAndManuals: React.FC = () => {
  return (
    <ProductGrid
      title="Instructional Guides & Manuals"
      subtitle="Step-by-step resources for safe and accurate gas detection."
      items={data["gas-detection-passive-monitoring"]}
      ctaLabel="View Accessories"
      ctaHref="#"
      actionVariant="dot"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default InstructionalGuidesAndManuals;
