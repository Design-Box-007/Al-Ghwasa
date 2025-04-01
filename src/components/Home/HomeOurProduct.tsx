'use client';

import { useState } from "react";
import { FaArrowCircleRight, FaArrowRight, FaChevronDown, FaChevronUp, FaLightbulb } from "react-icons/fa";
import ProductCard from "../Comman/ProductCard";
import { BsThermometerHalf } from "react-icons/bs";
import { MdExplore } from "react-icons/md";
import productsData from "@/data/productSectionData";
import Link from "next/link";
import { FaCircleXmark, FaX, FaXmark } from "react-icons/fa6";

interface Category {
    title: string;
    products: { imgSrc: string; name: string }[];
}

interface ProductSectionProps {
    number: string;
    title: string;
    categories: Category[];
    isOpen: boolean;
    onClick: () => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ number, title, categories, isOpen, onClick }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]?.title || "");

    return (
        <div className="py-4">
            <div className="flex justify-between items-center cursor-pointer py-4 border-b border-b-custom-gray" onClick={onClick}>
                <h2 className="text-xl font-semibold text-[54px] flex gap-8 items-center pb-2">
                    <span className="text-gray-500 mr-2 text-[32px]">{number}</span>
                    <span>{title}</span>
                </h2>
                {isOpen ?
                    <div className="bg-custom-red-light flex items-center justify-center size-11 rounded-full">
                        <FaXmark size={20} className="text-white" />
                    </div>
                    :
                    <div className="bg-custom-blue-1 flex items-center justify-center size-11 rounded-full">
                        <FaArrowRight size={20} className="text-white rotate-45" />
                    </div>
                }
            </div>

            {isOpen && (
                <div className="mt-4">
                    {/* Filter Bar */}
                    <div className="w-full flex justify-between items-center">
                        <div className="flex justify-evenly items-center gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.title}
                                    className={`py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-3xl cursor-pointer
                                        ${selectedCategory === category.title ? "bg-custom-green-1 text-white" : ""}`}
                                    onClick={() => setSelectedCategory(category.title)}
                                >
                                    <BsThermometerHalf width={12} height={16} />
                                    <span>{category.title}</span>
                                </button>
                            ))}
                        </div>

                        <div>
                            <Link href={'/'}>
                                <button className="py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-3xl">
                                    <MdExplore width={12} height={16} />
                                    <span>Explore More</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {categories
                            .find((category) => category.title === selectedCategory)
                            ?.products.map((product, index) => (
                                <ProductCard key={index} imgSrc={product.imgSrc} name={product.name} />
                            ))}
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
        <div className="p-6 bg-background">
            <div className="flex gap-2 items-center">
                <FaLightbulb className="text-custom-red-light" />
                <p className="font-inter text-xl">
                    Explore Our Industry-Leading Solutions
                </p>
            </div>
            <h1 className="text-[176px] font-semibold text-custom-blue-1 font-dm-sans mb-6">Our Products</h1>

            {productsData.map((section, index) => (
                <ProductSection
                    key={index}
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
