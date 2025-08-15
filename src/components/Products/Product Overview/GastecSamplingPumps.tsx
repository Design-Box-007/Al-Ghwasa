"use client";

import React from "react";
import ProductGrid, { ProductGridItem } from "@/components/Comman/ProductGrid";
import data from "@/data/products/gastec3.json"

const pumps: ProductGridItem[] = [
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/Pump1.jpg",
    name: "GASTEC GV-100 Gas Sampling Pump",
    description: "Standard 100 mL piston pump with stroke counter.",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/Pump1.jpg",
    name: "GASTEC GV-110 Gas Sampling Pump",
    description: "Upgraded design with enhanced durability and grip.",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/Pump1.jpg",
    name: "GASTEC GV-50 Compact Pump",
    description: "Lightweight and portable pump for tight spaces.",
  },
];

const GastecSamplingPumps: React.FC = () => {
  return (
    <ProductGrid
      title="GASTEC Sampling Pumps"
      subtitle="Precision hand pumps engineered for seamless compatibility with GASTEC tubes. Lightweight, durable, and easy to operate."
      items={data["gas-detection-accessories"]}
      ctaLabel="View Pumps"
      ctaHref="#"
      actionVariant="dot"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default GastecSamplingPumps;
