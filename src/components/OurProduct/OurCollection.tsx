"use client"

import React, { useState } from "react"
import ProductFilterBtn from "../Comman/ProductFilterBtn"
import ProductCard from "../Comman/ProductCard"
import { FaTint, FaHotel, FaShieldAlt, FaIndustry, FaWater } from "react-icons/fa" // sample icons

const productData = [
    {
        title: "Hydration",
        icon: FaTint,
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Smart Water Bottle" },
            { imgSrc: "/images/Thermometer.png", name: "Collapsible Flask" },
            { imgSrc: "/images/Thermometer.png", name: "Portable Purifier" },
            { imgSrc: "/images/Thermometer.png", name: "Hydration Backpack" },
            { imgSrc: "/images/Thermometer.png", name: "Water Tracking Mug" },
            { imgSrc: "/images/Thermometer.png", name: "Filtered Cap Bottle" },
        ],
    },
    {
        title: "Hospitality",
        icon: FaHotel,
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Smart Room Key" },
            { imgSrc: "/images/Thermometer.png", name: "Luxury Slippers" },
            { imgSrc: "/images/Thermometer.png", name: "Scent Diffuser" },
            { imgSrc: "/images/Thermometer.png", name: "Noise-Cancel Pods" },
            { imgSrc: "/images/Thermometer.png", name: "Mini Espresso Maker" },
            { imgSrc: "/images/Thermometer.png", name: "Heated Towels" },
        ],
    },
    {
        title: "Safety",
        icon: FaShieldAlt,
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Emergency Alarm" },
            { imgSrc: "/images/Thermometer.png", name: "Smart Lock" },
            { imgSrc: "/images/Thermometer.png", name: "Fireproof Case" },
            { imgSrc: "/images/Thermometer.png", name: "Carbon Detector" },
            { imgSrc: "/images/Thermometer.png", name: "Smart Thermometer" },
            { imgSrc: "/images/Thermometer.png", name: "Wearable Tracker" },
        ],
    },
    {
        title: "Marine",
        icon: FaWater, // or another suitable icon
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Waterproof Radio" },
            { imgSrc: "/images/Thermometer.png", name: "Marine Compass" },
            { imgSrc: "/images/Thermometer.png", name: "Floating Flashlight" },
            { imgSrc: "/images/Thermometer.png", name: "Sea Safety Kit" },
            { imgSrc: "/images/Thermometer.png", name: "Boat GPS Tracker" },
            { imgSrc: "/images/Thermometer.png", name: "Anti-Rust Tools" },
        ],
    },
    {
        title: "Industrial",
        icon: FaIndustry, // or any suitable icon
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Thermal Scanner" },
            { imgSrc: "/images/Thermometer.png", name: "Heavy-Duty Helmet" },
            { imgSrc: "/images/Thermometer.png", name: "Smart Welding Mask" },
            { imgSrc: "/images/Thermometer.png", name: "Noise Protection Gear" },
            { imgSrc: "/images/Thermometer.png", name: "Industrial Gloves" },
            { imgSrc: "/images/Thermometer.png", name: "Multi-Gas Detector" },
        ],
    },
]

const OurCollection = () => {
    const [selectedCategory, setSelectedCategory] = useState(productData[0].title);

    const handleFilterClick = (title: string) => {
        setSelectedCategory(title);
    };

    const activeCategory = productData.find((cat) => cat.title === selectedCategory);

    return (
        <section className="space-y-[38px]">
            <div className="flex flex-col lg:flex-row items-center gap-6 py-10 border-b border-black border-solid">
                <h1 className="text-[48px] md:text-[72px] lg:text-[110px] leading-tight font-medium w-full lg:w-4/5 text-center lg:text-left">
                    Our Collection
                </h1>
                <p className="text-base md:text-lg font-medium text-center lg:text-left max-w-xl">
                    Explore some of our most sought-after products, known for their durability, reliability,
                    and superior quality.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-start">
                {productData.map(({ title, icon }, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <ProductFilterBtn
                            title={title}
                            icon={icon}
                            isActive={title === selectedCategory}
                            onClick={() => handleFilterClick(title)}
                        />
                        {index !== productData.length - 1 && (
                            <span className="mx-2 text-gray-500 text-[24px] md:text-[32px] font-medium">/</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory?.dataset.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
};



export default OurCollection
