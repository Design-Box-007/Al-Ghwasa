"use client";

import React from "react";
import Image from "next/image";
import Table from "@/components/Categories/detail-page/FeaturesCard";

interface ProductShowcaseProps {
  title?: string;
  imageUrl?: string; // optional image
  features?: string[];
  className?: string;
  tableTitle?: string | false; // table title can be string or false
  tableColumns?: string[];
  tableData?: (string | number)[][]; // 2D array for table
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title = "Polytec I (No.107)",
  imageUrl,
  features,
  className,
  tableTitle = false,
  tableColumns,
  tableData,
}) => {
  return (
    <section className={className || `md:px-10 px-5 pb-10`}>
      {/* Title */}
      <h2 className="text-h1 font-semibold text-custom-blue-1 mb-4">{title}</h2>

      {/* Image or Placeholder */}
      <div className="w-full lg:h-[500px] bg-gray-300 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={500}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-600"></span>
        )}
      </div>

      {/* Features Grid (optional) */}
      {features && features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral text-center rounded-md px-6 py-10 shadow-sm"
            >
              <p className="text-h3 text-custom-blue-1 font-medium leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Table (optional) */}
      {tableColumns && tableData && (
        <Table
          showHeader={true}
          title={tableTitle}
          columns={tableColumns}
          data={tableData}
          className="px-0 mb-10"
        />
      )}
    </section>
  );
};

export default ProductShowcase;
