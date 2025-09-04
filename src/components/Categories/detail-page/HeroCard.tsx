"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductHeroProps {
  name: string;
  images: string[];
  category?: string;
  subName?: string;
  showBreadcrumb?: boolean;
  className?: string;
  className2?: string;
  className3?: string;
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const prevImage = () => {
    setCurrent((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  const nextImage = () => {
    setCurrent((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      scrollToThumbnail(newIndex);
      return newIndex;
    });
  };

  // ✅ Smooth scroll to thumbnail when main image changes
  const scrollToThumbnail = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const thumbnail = container.children[index] as HTMLElement;
    if (thumbnail) {
      container.scrollTo({
        left:
          thumbnail.offsetLeft -
          container.clientWidth / 2 +
          thumbnail.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={className || `md:px-10 px-5 py-10 lg:mt-20 mt-20`}>
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
        <h1 className="text-h1 lg:font-medium font-bold md:font-semibold">
          {name}
        </h1>
        <p className="lg:text-[26px]">{subName}</p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main Image */}
        <div className={className2 || `md:h-[600px]`}>
          <Image
            src={images[current]}
            alt={name}
            width={2000}
            height={700}
            className="rounded-[30px] shadow-lg object-cover mx-auto w-full h-full"
          />

          {/* ✅ Use same arrows to also scroll thumbnails */}
          {/* {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer"
              >
                <ChevronLeft
                  size={40}
                  className="bg-white rounded-full ml-1 text-custom-blue-1"
                />
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
              >
                <ChevronRight
                  size={40}
                  className="bg-white rounded-full mr-1 text-custom-blue-1"
                />
              </button>
            </>
          )} */}
          
        </div>

        {/* ✅ Thumbnails Row (scrollable in one row) */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4 w-full">
            {/* Left Arrow */}
            <button onClick={prevImage}>
              <ChevronLeft size={40} />
            </button>

            {/* Scrollable Thumbnails */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth px-2 scrollbar-hide"
            >
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    scrollToThumbnail(index);
                  }}
                  className={`border-2 rounded-md flex-shrink-0 p-1 ${
                    index === current ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${name} ${index + 1}`}
                    width={80}
                    height={80}
                    className={className3 || "rounded object-cover"}
                  />
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button onClick={nextImage}>
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductHero;
