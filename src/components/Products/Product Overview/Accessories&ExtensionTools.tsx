"use client";

import React from "react";
import ProductGrid, { ProductGridItem } from "@/components/Comman/ProductGrid";
import data from "@/data/products/gastec3.json"

// const accessories: ProductGridItem[] = [
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/Extension Hoses Section 8.jpg",
//     name: "Extension Hose No. 1132-05",
//     description: "Sample safely in confined or hard-to-reach areas.",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/Extension Hoses Section 8.jpg",
//     name: "Hot Probe Adapter",
//     description: "Measure gases directly from high-temperature sources.",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/Extension Hoses Section 8.jpg",
//     name: "Low-Flow Adapter",
//     description: "Control airflow for sensitive measurements.",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/Extension Hoses Section 8.jpg",
//     name: "High Humidity Filter",
//     description: "Reduce moisture interference during sampling.",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/Extension Hoses Section 8.jpg",
//     name: "Tube Tip Breaker Replacement",
//     description: "Spare tip breaker for GV-100/110 pumps.",
//   },
//   {
//     imgSrc: "/images/Gastec/gastec-repo-assets-2/Extension Hoses Section 8.jpg",
//     name: "Air Sampling Probe",
//     description: "Safely sample from extended or elevated positions.",
//   },
// ];

const AccessoriesExtensionTools: React.FC = () => {
  return (
    <ProductGrid
      title="Accessories & Extension Tools"
      subtitle="Enhancing performance and extending your gas detection capabilities."
      items={data["gas-detection-accessories"]}
      ctaLabel="View Accessories"
      ctaHref="#"
      actionVariant="dot"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default AccessoriesExtensionTools;
