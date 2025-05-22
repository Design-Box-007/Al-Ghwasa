'use client';

import { useState } from "react";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import ProductCard from "../Comman/ProductCard";
import { BsThermometerHalf } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import productsData from "@/data/productSectionData";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

interface Category {
    title: string;
    products: { imgSrc: string; name: string }[];
}

interface ProductSectionProps {
    number: string;
    title: string;
    categories: Category[];
    isOpen: boolean;
    link: string;
    onClick: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ number, title, categories, isOpen, onClick, link }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]?.title || "");

    return (
        <div className="py-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 cursor-pointer py-4 border-b border-b-custom-gray" onClick={onClick}>
                {/* Title and number */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 flex-1">
                    <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold flex items-center gap-4">
                        <span className="text-gray-500 text-xl md:text-2xl">{number}</span>
                        <span>{title}</span>
                    </h2>

                    {/* Explore More button */}
                    {link && (
                        <Link href={link}>
                            <button className="hidden lg:flex py-2 px-4 border border-[#4A4A4A] items-center gap-2 rounded-3xl text-sm sm:text-base">
                                <MdExplore />
                                <span>Explore More</span>
                            </button>
                        </Link>
                    )}
                </div>

                {/* Toggle Icon */}
                <div className="flex justify-between items-center md:self-auto">
                    {link && (
                        <Link href={link}>
                            <button className="flex lg:hidden py-2 px-4 border border-[#4A4A4A] items-center gap-2 rounded-3xl text-sm sm:text-base">
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

            {isOpen && (
                <div className="mt-4">
                    {/* Filter Bar */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                        {/* Filter buttons */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.title}
                                    className={`py-2 px-3 border border-[#4A4A4A] flex items-center gap-2 rounded-3xl text-sm sm:text-base
          ${selectedCategory === category.title ? "bg-custom-green-1 text-white" : ""}`}
                                    onClick={() => setSelectedCategory(category.title)}
                                >
                                    <BsThermometerHalf />
                                    <span>{category.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Explore More */}
                    </div>


                    {/* Products Grid */}
                    <div className="mt-4 overflow-x-auto">
                        <div className="flex md:justify-between gap-4 pb-2 no-scrollbar">
                            {categories
                                .find((category) => category.title === selectedCategory)
                                ?.products.map((product, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <ProductCard imgSrc={product.imgSrc} name={product.name} />
                                    </div>
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
            <div className="flex flex-wrap gap-2 items-center mb-4">
                <FaLightbulb className="text-custom-red-light text-xl sm:text-2xl" />
                <p className="font-inter text-base sm:text-lg md:text-xl">
                    Explore Our Industry-Leading Solutions
                </p>
            </div>

            <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-custom-blue-1 font-dm-sans leading-tight mb-8">
                Our Products
            </h1>

            {/* Product Sections */}
            {productsData.map((section, index) => (
                <ProductSection
                    key={index}
                    link={section.link}
                    number={section.number}
                    title={section.title}
                    categories={section.categories}
                    isOpen={openSection === index + 1}
                    onClick={() => toggleSection(index + 1)}
                />
            ))}
        </div>

    );
};

export default HomeOurProducts;
