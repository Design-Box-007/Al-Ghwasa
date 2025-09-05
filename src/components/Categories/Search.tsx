"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Calibration from "./Calibration";
import DigitalMonitors from "./MonitorsTesters";
import SpecializedKits from "./SpecializedKits";
import ProductGrid from "../Comman/ProductGrid";
import { calibrationEquipment, gasDetectionPassive, gasDetectionPassive2, gasDetectorTubeSystem } from "@/data/products/category-gastec";
import AutomaticAir from "./Automatic-air";

const productDetails: Record<string, React.ReactNode> = {
  "Specialized Sampling Kits": (
    <>
      <Calibration />
      <DigitalMonitors />
      <AutomaticAir />
      <SpecializedKits />
    </>
  ),
  "Gas Generator Solutions": (
    <ProductGrid
      title="Calibration Gas Generation System"
      items={gasDetectionPassive2}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  ),
  Accessories: (
    <ProductGrid
      title="Calibration Equipment & Accessories"
      items={calibrationEquipment}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  ),
  "Gas Detection Passive Monitoring": (
    <ProductGrid
      title="Gas Detection Passive Monitoring"
      items={gasDetectionPassive}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  ),
  "Gas Detector Tube System": (
    <ProductGrid
      title="Gas sampling pump"
      items={gasDetectorTubeSystem}
      ctaLabel="View Tubes"
      ctaHref="#"
      actionVariant="arrow"
      topDivider
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    />
  ),
};

const SearchSection = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  useEffect(() => {
    const categoryFromQuery = searchParams.get("category");
    if (categoryFromQuery && productDetails[categoryFromQuery]) {
      setSelectedProduct(categoryFromQuery);
    } else {
      setSelectedProduct("Specialized Sampling Kits");
    }
  }, [searchParams]);

  const handleClick = (item: string) => {
    setSelectedProduct(item);
    router.push(`/categories?category=${encodeURIComponent(item)}`);
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6">
      <hr />
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Trending Searches</h3>
        <div className="flex flex-wrap gap-3">
          {Object.keys(productDetails).map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedProduct === item
                  ? "bg-[#0A2540] text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && <div>{productDetails[selectedProduct]}</div>}
    </div>
  );
};

export default SearchSection;
