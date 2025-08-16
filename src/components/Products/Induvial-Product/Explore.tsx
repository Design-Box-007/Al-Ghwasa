"use client";

import React from "react";
import ProductGrid from "@/components/Comman/ProductGrid";
import data from "@/data/products/gastec3.json"


const Explore: React.FC = () => {
  return (
    <ProductGrid
      title="Explore More of our GASTEC Products"
      subtitle="Tailored kits for advanced, low-level, or remote gas detection applications."
      items={data["gas-detection-specialized-samplingkits"]}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="dot"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      className="px-5"
    />
  );
};

export default Explore;
