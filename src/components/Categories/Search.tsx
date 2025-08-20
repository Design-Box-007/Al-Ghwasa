"use client";

import React from "react";

const SearchSection = () => {
  return (
    <div className="w-full mx-auto p-6 space-y-6 px-10 rounded-lg">
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

      <hr/>

      {/* Trending Searches */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Trending Searches</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-full bg-[#0A2540] text-white text-sm font-medium">
            Smoke Tester Kit
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
            Gas Generator
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
            Accessories
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
            Passive Monitoring
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
            Sampling Kits
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
