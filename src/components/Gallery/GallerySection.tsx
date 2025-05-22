'use client'

import React, { useState } from "react";
import { FaTint, FaConciergeBell, FaShieldAlt } from "react-icons/fa";
import ProductFilterBtn from "../Comman/ProductFilterBtn";
import { ProductFilterBtnProps } from "@/types";
import images from "@/data/assets";
import Image from "next/image";


const filters: ProductFilterBtnProps[] = [
    {
        title: "Hydration", icon: FaTint, images: [

            images.mx3DeviceHp,
            images.mx3Device2,
            images.mx3DeviceKit,
        ]
    },
    {
        title: "Hospitality", icon: FaConciergeBell, images: [
            images.oilTesterHp,
            images.oilTesterStraws,
            images.oilTesterKit,

        ]
    },
    {
        title: "Safety", icon: FaShieldAlt, images: [

            images.gastec860_2,
            images.gastecGHS_501FT_1,
            images.gastecGHS_8AT_EX_1,
        ]
    },
];

const FilterSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>("Hydration");

    const activeImages = filters.find(filter => filter.title === activeFilter)?.images || [];

    return (
        <div className="space-y-8">
            {/* Filter Buttons */}
            <div className="mt-4 overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-2 whitespace-nowrap scrollbar-hide">
                    {filters.map((filter, index) => (
                        <div key={index} className="flex items-center gap-3">
                            <ProductFilterBtn
                                title={filter.title}
                                icon={filter.icon}
                                isActive={activeFilter === filter.title}
                                onClick={() => setActiveFilter(filter.title)}
                            />
                            {index !== filters.length - 1 && <span className="mx-2 text-gray-500 text-[32px] font-medium">/</span>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Dynamic Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeImages.length > 0 && (
                    <>
                        {/* Large Image */}
                        <div className="h-[300px] lg:h-[400px] overflow-hidden rounded-2xl md:col-span-2">
                            <Image
                                src={activeImages[0]}
                                alt="active-image-1"
                                width={1360}
                                height={600}
                                className="object-center object-cover w-full h-full"
                            />
                        </div>

                        {/* Two Smaller Images */}
                        <div className="h-[300px] lg:h-[400px] overflow-hidden rounded-2xl">
                            <Image
                                src={activeImages[1]}
                                alt="active-image-2"
                                width={674}
                                height={600}
                                className="object-center object-cover w-full h-full"
                            />
                        </div>
                        <div className="h-[300px] lg:h-[400px] overflow-hidden rounded-2xl">
                            <Image
                                src={activeImages[2]}
                                alt="active-image-3"
                                width={674}
                                height={600}
                                className="object-center object-cover w-full h-full"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const GallerySection = () => {
    return (
        <section className='p-6 space-y-10'>
            <h1 className="font-semibold text-[50px] lg:text-[70px]">
                Our Experience Center
            </h1>
            <FilterSection />
        </section>
    )
}

export default GallerySection