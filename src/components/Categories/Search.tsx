"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Calibration from "./Calibration";
import DigitalMonitors from "./MonitorsTesters";
import GasSampling from "./SamplingPumps";
import SpecializedKits from "./SpecializedKits";
import ProductGrid from "../Comman/ProductGrid";
import data from "@/data/products/category-gastec.json";

const SearchSection = () => {
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const productDetails: Record<string, React.ReactNode> = {
    "Specialized Sampling Kits": (
      <div id="Specialized Sampling Kits">
        <Calibration />
        <DigitalMonitors />
        <GasSampling />
        <SpecializedKits />
      </div>
    ),
    "Gas Generator": (
      <div id="Gas Generator">
        <ProductGrid
          title="Digital Monitors & Testers"
          items={data["gas-detection-passive-2"]}
          ctaLabel="View Tubes"
          ctaHref="#"
          actionVariant="arrow"
          topDivider
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        />
      </div>
    ),
    Accessories: (
      <div id="Accessories">
        <ProductGrid
          title="Calibration Equipment & Accessories"
          items={data["Calibration-Equipment"]}
          ctaLabel="View Tubes"
          ctaHref="#"
          actionVariant="arrow"
          topDivider
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        />
      </div>
    ),
    "Gas Detection Passive Monitoring": (
      <div id="Gas Detection Passive Monitoring">
        <ProductGrid
          title="Gas Detection Passive Monitoring"
          items={data["gas-detection-passive"]}
          ctaLabel="View Tubes"
          ctaHref="#"
          actionVariant="arrow"
          topDivider
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        />
      </div>
    ),
  };

  // Step 1: decide which product to show
  useEffect(() => {
    const categoryFromQuery = searchParams.get("category");
    const saved = localStorage.getItem("selectedProduct");

    if (categoryFromQuery && productDetails[categoryFromQuery]) {
      setSelectedProduct(categoryFromQuery);
    } else if (saved && productDetails[saved]) {
      setSelectedProduct(saved);
    } else {
      setSelectedProduct("Specialized Sampling Kits");
    }
  }, [searchParams]);

  // Step 2: scroll *after* render when selectedProduct changes
  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem("selectedProduct", selectedProduct);

      // give React time to render DOM
      const timeout = setTimeout(() => {
        const el = document.getElementById(selectedProduct);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);  

      return () => clearTimeout(timeout);
    }
  }, [selectedProduct]);

  return (
    <div className="w-full mx-auto p-6 space-y-6">
      <hr />
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Trending Searches</h3>
        <div className="flex flex-wrap gap-3">
          {Object.keys(productDetails).map((item) => (
            <button
              key={item}
              onClick={() => setSelectedProduct(item)}
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
