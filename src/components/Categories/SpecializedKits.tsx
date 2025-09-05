import React from "react";
import ProductGrid from "@/components/Comman/ProductGrid";
import { specializedKits } from "@/data/products/category-gastec";

const SpecializedKits: React.FC = () => {
  return (
    <ProductGrid
      title=" Toxic Gas detection kit"
      items={specializedKits}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default SpecializedKits;
