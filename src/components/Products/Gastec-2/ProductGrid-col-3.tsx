'use client'

import React from 'react'
import Image from 'next/image'

// GASTEC Product Data based on the image
const gastecProducts = [
    {
        imgSrc: "/images/Gastec2/GV_100S.jpg",
        name: "GASTEC Calibration Kit",
        description: "Portable kit for gas detector calibration."
    },
    {
        imgSrc: "/images/Gastec2/GHS_8AT_EX.jpg",
        name: "GASTEC Flow Regulator",
        description: "Controls gas flow during sampling."
    },
    {
        imgSrc: "/images/Gastec2/CG_1.jpg",
        name: "Pressure Regulator",
        description: "Standard regulator for calibration gas."
    },
    {
        imgSrc: "/images/Gastec2/GHS_8AT_EX.jpg",
        name: "GHS-8AT EX Monitor",
        description: "Digital explosion-proof gas monitor."
    },
    {
        imgSrc: "/images/Gastec2/GHS_8AT_EX.jpg",
        name: "GHS-8AT EX Starter Kit",
        description: "Monitor with full accessory kit."
    },
    {
        imgSrc: "/images/Gastec2/GHS_501FT.jpg",
        name: "GHS-501FT Fit Tester",
        description: "Digital qualitative fit tester."
    }
]

const ProductGridCol3: React.FC = () => {
    return (
        <section className='w-full bg-white py-16'>
            <div className="w-full px-4">
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-left">
                            Explore Our GASTEC Products
                        </h2>
                        <p className="text-lg text-gray-600 text-left max-w-2xl">
                            Tailored kits for advanced, low-level, or remote gas detection applications.
                        </p>
                    </div>
                    <div className="flex-shrink-0 ml-8">
                        <div className="mb-2">
                            <button className="inline-flex items-center gap-3 bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors">
                                <span>View Tubes</span>
                                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gastecProducts.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                            <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                                <Image 
                                    src={product.imgSrc} 
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {product.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0 ml-4">
                                    <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductGridCol3
