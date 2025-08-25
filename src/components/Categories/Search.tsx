"use client";

import React, { useState } from "react";
import Calibration from "./Calibration";
import DigitalMonitors from "./MonitorsTesters";
import GasSampling from "./SamplingPumps";
import SpecializedKits from "./SpecializedKits";
import ProductGrid from "../Comman/ProductGrid";
import data from "@/data/products/category-gastec.json";

const SearchSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(
    "Smoke Tester Kit"
  );

  // Dummy product details (replace with your real data)
  const productDetails: Record<string, React.ReactNode> = {
    "Smoke Tester Kit": (
      <>
        <Calibration />
        <DigitalMonitors />
        <GasSampling />
        <SpecializedKits />
      </>
    ),
    "Gas Generator": (
      <ProductGrid
        title="Digital Monitors & Testers"
        items={data["gas-detection-passive-2"]}
        ctaLabel="View Tubes"
        ctaHref="#"
        actionVariant="arrow"
        topDivider
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      />
    ),

    Accessories: (
      <ProductGrid
        title="Digital Monitors & Testers"
        items={data["Calibration-Equipment"]}
        ctaLabel="View Tubes"
        ctaHref="#"
        actionVariant="arrow"
        topDivider
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      />
    ),
    "Passive Monitoring": (
      <ProductGrid
        title="Digital Monitors & Testers"
        items={data["gas-detection-passive"]}
        ctaLabel="View Tubes"
        ctaHref="#"
        actionVariant="arrow"
        topDivider
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      />
    ),
    "Sampling Kits":
      "Comprehensive kits for air and gas sampling in the field.",
  };

  return (
    <div className="w-full mx-auto p-6 space-y-6">
      {/* Search Bar */}
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Search by name, fields, inputs..."
          className="flex-grow px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none text-sm sm:text-base"
        />
        <button className="bg-[#0A2540] text-white px-6 py-3 rounded-r-full font-medium">
          Search
        </button>
      </div>

      {/* Radio Options */}
      <div className="flex flex-wrap gap-10 text-sm sm:text-base">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="searchType" className="accent-[#0A2540]" />
          <span>Substance to be Measured</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="searchType" className="accent-[#0A2540]" />
          <span>Product Name</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="searchType" className="accent-[#0A2540]" />
          <span>Product Number</span>
        </label>
      </div>

      <hr />

      {/* Trending Searches */}
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

      {/* Product Details */}
      {selectedProduct && <div>{productDetails[selectedProduct]}</div>}
    </div>
  );
};

export default SearchSection;
