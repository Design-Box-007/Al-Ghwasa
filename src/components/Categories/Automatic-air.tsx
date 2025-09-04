import React from "react";
import ProductGrid from "@/components/Comman/ProductGrid";
import data from "@/data/products/category-gastec.json";

const AutomaticAir: React.FC = () => {
  return (
    <ProductGrid
      title="Automatic Air Sampling Pump"
      items={data["automatic-air-sampling-pump"]}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default AutomaticAir;
