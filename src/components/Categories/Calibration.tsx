import React from "react";
import ProductGrid from "@/components/Comman/ProductGrid";
import { calibrationRegulators } from "@/data/products/category-gastec";

const Calibration: React.FC = () => {
  return (
    <ProductGrid
      title="Calibration & Regulators"
      items={calibrationRegulators}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  );
};

export default Calibration;
