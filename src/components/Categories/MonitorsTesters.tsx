"use client";

import React from "react";
import ProductGrid from "@/components/Comman/ProductGrid";
import { digitalMonitors } from "@/data/products/category-gastec";

const DigitalMonitors: React.FC = () => {
  return (
    <ProductGrid
      title="Hydrogen Sulphide Data Logger"
      items={digitalMonitors}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default DigitalMonitors;
