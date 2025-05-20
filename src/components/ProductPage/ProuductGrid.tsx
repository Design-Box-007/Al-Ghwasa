'use client'

import React, { useState } from 'react'
import { FiSearch, FiSend } from "react-icons/fi"
import ProductFilterBtn from '../Comman/ProductFilterBtn'
import ProductCard from '../Comman/ProductCard'
import { ProductFilterBtnProps } from '@/types'
import { FaShieldAlt, FaThermometer } from 'react-icons/fa'
import { FaDroplet } from 'react-icons/fa6'

// Sample Product Data
const productData = [
    {
        title: "Hydration Essentials",
        icon: FaDroplet,
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Smart Water Bottle" },
            { imgSrc: "/images/Thermometer.png", name: "Collapsible Flask" },
            { imgSrc: "/images/Thermometer.png", name: "Portable Purifier" },
        ],
    },
    {
        title: "Thermometers",
        icon: FaThermometer,
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Smart Room Key" },
            { imgSrc: "/images/Thermometer.png", name: "Luxury Slippers" },
            { imgSrc: "/images/Thermometer.png", name: "Scent Diffuser" },
        ],
    },
    {
        title: "Food Safety Devices",
        icon: FaShieldAlt,
        dataset: [
            { imgSrc: "/images/Thermometer.png", name: "Emergency Alarm" },
            { imgSrc: "/images/Thermometer.png", name: "Smart Lock" },
            { imgSrc: "/images/Thermometer.png", name: "Fireproof Case" },
        ],
    }
]

interface FilterProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const FilterProducts: React.FC<FilterProps> = ({
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 z-10 p-6 rounded-3xl border border-gray-200 shadow-sm w-[95%] mx-auto bg-white">
            {/* Search Bar */}
            <div className="relative mb-6">
                <FiSearch className="absolute left-4 top-3.5 text-gray-400 text-xl" />
                <input
                    type="text"
                    placeholder="Search by product name, category, or specification…"
                    className="w-full pl-12 pr-12 py-3 rounded-full bg-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="absolute right-4 top-3.5 text-xl text-gray-500">
                    <FiSend />
                </button>
            </div>

            {/* Categories */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Hospitality Equipment</h2>
                <div className="flex gap-3 flex-wrap">
                    {productData.map((cat, index) => (
                        <ProductFilterBtn
                            key={index}
                            title={cat.title}
                            icon={cat.icon}
                            isActive={cat.title === selectedCategory}
                            onClick={() => setSelectedCategory(cat.title)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const ProductGrid: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("Hydration Essentials")
    const [searchTerm, setSearchTerm] = useState("")

    // Find dataset for selected category
    const category = productData.find(cat => cat.title === selectedCategory)
    const products = category?.dataset || []

    // Optional: filter by search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <section className='relative w-full bg-[#F1F1F1] rounded-[20px] p-9 pt-32'>
            <FilterProducts
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index} {...product} className='w-full'/>
                ))}
            </div>
        </section>
    )
}

export default ProductGrid
