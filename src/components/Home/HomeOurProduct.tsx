"use client";

import { useState } from "react";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import ProductCard from "../Comman/ProductCard";
import { MdExplore } from "react-icons/md";
import productsData from "@/data/productSectionData";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import RevealComponent from "../Comman/RevealComponent";

interface Products {
  imgSrc: string;
  name: string;
  href?: string;
}

interface ProductSectionProps {
  number: string;
  title: string;
  images: Products[];
  isOpen: boolean;
  link: string;
  onClick: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  number,
  title,
  images,
  isOpen,
  onClick,
  link,
}) => {
  return (
    <div className="py-2">
      <RevealComponent
        backgroundClass="bg-background"
        outerClass=""
        direction="right"
      >
        <div
          className="flex md:items-center justify-between gap-3 cursor-pointer md:flex-row flex-col"
          onClick={onClick}
        >
          {/* Title and number */}
          <div className="flex md:items-center lg:gap-46 md:gap-3.5 md:flex-row flex-col">
            <h2 className="md:text-3xl flex items-center gap-4">
              <span className="text-gray-500 text-xl md:text-2xl">
                {number}
              </span>
              <span>{title}</span>
            </h2>
          </div>

          <div className="flex gap-2.5 items-center">
            {/* Explore More button */}
            {link && (
              <Link href={link}>
                <button className="hidden lg:flex py-2 px-4 border border-[#4A4A4A] items-center gap-2 rounded-3xl text-sm sm:text-base md:ml-3.5">
                  <MdExplore />
                  <span>Explore More</span>
                </button>
              </Link>
            )}
            <div className="flex justify-between items-center md:self-auto">
              {link && (
                <Link href={link}>
                  <button className="flex lg:hidden py-2 px-4 border border-[#4A4A4A] items-center gap-2 rounded-3xl text-sm sm:text-base mr-5">
                    <MdExplore />
                    <span>Explore More</span>
                  </button>
                </Link>
              )}
              {isOpen ? (
                <div className="bg-custom-red-light flex items-center justify-center size-11 rounded-full">
                  <FaXmark size={20} className="text-white" />
                </div>
              ) : (
                <div className="bg-custom-blue-1 flex items-center justify-center size-11 rounded-full">
                  <FaArrowRight size={20} className="text-white rotate-45" />
                </div>
              )}
            </div>
          </div>

          {/* Toggle Icon */}
        </div>
      </RevealComponent>

      {isOpen && (
        <div className="mt-4">
          {/* Products Grid */}
          <div className="mt-4">
            <div
              className="
                          grid 
                          grid-cols-1        
                          md:grid-cols-2     
                          lg:grid-cols-3      
                          gap-6 
                          place-items-center  
                          "
            >
              {images.map((product, index) => (
                <RevealComponent
                  backgroundClass="bg-background"
                  outerClass="w-full h-[400px] flex justify-center"
                  direction="bottom"
                  key={index}
                >
                  <ProductCard
                    imgSrc={product.imgSrc}
                    name={product.name}
                    href={product.href}
                    className="h-full max-w-[500px] w-full"
                  />
                </RevealComponent>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HomeOurProducts = () => {
  const [openSection, setOpenSection] = useState<number | null>(1);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="px-8 py-8 bg-background">
      {/* Heading */}

      <RevealComponent
        backgroundClass="bg-background"
        outerClass="mb-6"
        direction="right"
      >
        <div className="flex flex-wrap gap-2 items-center">
          <FaLightbulb className="text-custom-red-light text-xl sm:text-2xl" />
          <p className="font-inter text-base sm:text-lg md:text-xl">
            Explore Our Industry-Leading Solutions
          </p>
        </div>
      </RevealComponent>

      <RevealComponent
        backgroundClass="bg-background"
        outerClass="mb-0"
        direction="right"
      >
        <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-custom-blue-1 font-dm-sans leading-tight mb-0">
          Our Product
        </h1>
      </RevealComponent>

      {/* Product Sections */}

      {productsData.map((section, index: number) => (
        <ProductSection
          key={index}
          link={section.link}
          number={section.number}
          title={section.title}
          isOpen={openSection === index + 1}
          onClick={() => toggleSection(index + 1)}
          images={section.images}
        />
      ))}
    </div>
  );
};

export default HomeOurProducts;
