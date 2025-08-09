"use client"

import React from 'react'
import ProductGrid from '@/components/Comman/ProductGrid'

// GASTEC Product Data based on the image
const gastecProducts = [
    {
        imgSrc: "/images/Gastec2/GV_100S.jpg",
        name: "GASTEC Calibration Kit",
        description: "Portable kit for gas detector calibration.",
    },
    {
        imgSrc: "/images/Gastec2/GHS_8AT_EX.jpg",
        name: "GASTEC Flow Regulator",
        description: "Controls gas flow during sampling.",
    },
    {
        imgSrc: "/images/Gastec2/CG_1.jpg",
        name: "Pressure Regulator",
        description: "Standard regulator for calibration gas.",
    },
    {
        imgSrc: "/images/Gastec2/GHS_8AT_EX.jpg",
        name: "GHS-8AT EX Monitor",
        description: "Digital explosion-proof gas monitor.",
    },
    {
        imgSrc: "/images/Gastec2/GHS_8AT_EX.jpg",
        name: "GHS-8AT EX Starter Kit",
        description: "Monitor with full accessory kit.",
    },
    {
        imgSrc: "/images/Gastec2/GHS_501FT.jpg",
        name: "GHS-501FT Fit Tester",
        description: "Digital qualitative fit tester.",
    },
]

const ProductGridCol3: React.FC = () => {
    return (
        <ProductGrid
            title="Explore Our GASTEC Products"
            subtitle="Tailored kits for advanced, low-level, or remote gas detection applications."
            items={gastecProducts}
            ctaLabel="View Tubes"
        />
    )
}

export default ProductGridCol3
