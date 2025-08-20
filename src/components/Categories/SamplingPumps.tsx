"use client";

import React from "react";
import ProductGrid, { ProductGridItem } from "@/components/Comman/ProductGrid";

const tubes: ProductGridItem[] = [
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/Tube1.jpg",
    name: "GASTEC No. 4LL",
    description: "Hydrogen Sulfide Detector Tube",
    metaRight: "0.2 to 6 ppm",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets/Detector-tube-image_1.jpg",
    name: "GASTEC No. 81",
    description: "Carbon Monoxide Detector Tube",
    metaRight: "5 to 2000 ppm",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/Shortterm 1.jpg",
    name: "GASTEC No. 91PL",
    description: "Ammonia Detector Tube",
    metaRight: "0.5 to 80 ppm",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/Polytec tubes.jpg",
    name: "GASTEC No. 126",
    description: "Benzene Detector Tube",
    metaRight: "1 to 20 ppm",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets/351A_5_GV_100.jpg",
    name: "GASTEC No. 172",
    description: "Formaldehyde Detector Tube",
    metaRight: "0.05 to 1.2 ppm",
  },
  {
    imgSrc: "/images/Gastec/gastec-repo-assets-2/PD1C.jpg",
    name: "GASTEC No. 102L",
    description: "Sulfur Dioxide Detector Tube",
    metaRight: "1 to 50 ppm",
  }
];

const GasSampling: React.FC = () => {
  return (
    <ProductGrid
      title="Gas Sampling Pumps"
      items={tubes}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default  GasSampling;
