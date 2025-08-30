"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductHeroProps {
  name: string;
  images: string[];
  category?: string;
  subName?: string;
  showBreadcrumb?: boolean;
  className?: string
  className2?: string
  className3?: string
}

const ProductHero: React.FC<ProductHeroProps> = ({
  name,
  images,
  category,
  subName,
  showBreadcrumb = true,
  className = "",
  className2 = "",
  className3 = "",
}) => {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={className || `lg:px-15 px-5 py-10 lg:mt-20 mt-20 md:px-10`}>
      {/* ✅ Breadcrumb (optional) */}
      {showBreadcrumb && (
        <div className="lg:text-lg text-gray-500 mb-4 space-x-1 text-sm md:text-[15px]">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>{">"}</span>
          <Link href="/categories" className="hover:underline">
            Products
          </Link>
          {category && (
            <>
              <span>{">"}</span>
              <Link href={`/categories`} className="hover:underline">
                {category}
              </Link>
            </>
          )}
          <span>{">"}</span>
          <span className="text-[#143C66] font-bold">{name}</span>
        </div>
      )}

      {/* Title */}
      <div className="flex justify-between mb-6 items-end">
        <h1 className="lg:text-5xl text-2xl lg:font-medium font-bold md:text-3xl md:font-semibold">
          {name}
        </h1>
        <p className="lg:text-[26px]">{subName}</p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main Image */}
        <div className={ className2 || `relative lg:w-[900px] lg:h-[500px]`}>
          <Image
            src={images[current]}
            alt={name}
            width={2000}
            height={700}
            className="rounded-[30px] shadow-lg object-cover mx-auto w-full h-full"
          />

          {/* ✅ Arrows only if multiple images */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer"
              >
                <ChevronLeft size={40} />
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}
        </div>

        {/* ✅ Thumbnails only if multiple images */}
        {images.length > 1 && (
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`border-2 rounded-md p-1 ${
                  index === current ? "border-blue-500" : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt={`${name} ${index + 1}`}
                  width={100}
                  height={100}
                  className={className3 || `rounded w-full h-full object-cover"`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductHero;
