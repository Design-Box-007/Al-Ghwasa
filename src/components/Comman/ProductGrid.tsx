"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";

export interface ProductGridItem {
  imgSrc: string;
  name: string;
  description?: string;
  href?: string;
  metaRight?: string;
  slug?: string;
}

export type ProductGridActionVariant = "arrow" | "dot" | "none";

export interface ProductGridProps {
  title: string;
  subtitle?: string;
  items: ProductGridItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  gridClassName?: string;
  actionVariant?: ProductGridActionVariant;
  titleTopLine?: boolean;
  topDivider?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  subtitle,
  items,
  ctaLabel,
  ctaHref,
  className,
  gridClassName,
  actionVariant = "arrow",
  titleTopLine = false,
  topDivider = false,
}) => {
  return (
    <section className={`w-full bg-background py-10 ${className ?? ""}`}>
      <div className="w-full ">
        {topDivider ? <div className="w-full border-t border-gray-300 mb-8" /> : null}
        <div className="flex lg:justify-between lg:flex-row flex-col gap-2 items-start mb-6">
          <div className="flex-1">
            {titleTopLine ? (
              <div className="w-14 h-1.5 bg-gray-900 rounded-full mb-4" />
            ) : null}
            <h2 className="lg:text-4xl text-2xl font-bold text-gray-900 mb-4 text-left">{title}</h2>
            {subtitle ? (
              <p className="text-lg text-gray-600 text-left max-w-2xl">{subtitle}</p>
            ) : null}
          </div>
          {ctaLabel ? (
            <div className="flex-shrink-0">
              {ctaHref ? (
                
                <Link
                  href={"/Detection-table"}
                  className="inline-flex items-center gap-3 bg-gray-800 text-white lg:px-6 lg:py-2 px-3 py-2 rounded-full hover:bg-gray-900 transition-colors"
                >
                  <span>{ctaLabel}</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              ) : (
                <button className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                  <span>{ctaLabel}</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              )}
            </div>
          ) : null}
        </div>

        <div
          className={
            gridClassName ??
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {items.map((product, index) => (
            <div
              key={`${product.name}-${index}`}
              className="relative bg-neutral rounded-2xl border border-gray-200 hover:border-gray-300 transition-colors p-4 sm:p-6"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-xl border border-gray-200">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  width={600}
                  height={450}
                />
              </div>

              <div className="pr-14">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-gray-600 text-base truncate">{product.description}</p>
                  {product.metaRight ? (
                    <span className="text-sm text-gray-900 font-medium whitespace-nowrap">{product.metaRight}</span>
                  ) : null}
                </div>
              </div>

              {actionVariant === "arrow" ? (
                <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6">
                  {product.name ? (
                    <Link
                      href={`/categories/${formatToHyphenated(product.name)}`}
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  ) : (
                    <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ) : null}

              {actionVariant === "dot" ? (
                <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6">
                  <button
                    aria-label="More options"
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  >
                    <span className="block w-1 h-1 bg-gray-500 rounded-full" />
                  </button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;