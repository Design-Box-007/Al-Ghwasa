import React from "react";
import ProductGrid from "@/components/Comman/ProductGrid";
import { automaticAirSamplingPump } from "@/data/products/category-gastec";

const AutomaticAir: React.FC = () => {
  return (
    <ProductGrid
      title="Automatic Air Sampling Pump"
      items={automaticAirSamplingPump}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default AutomaticAir;
