'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import RevealComponent from './RevealComponent'

interface CTAItem {
    title: string
    link: string
    color: string
}

interface ProductPageCTAProps {
    items: CTAItem[]
}

const ProductPageCTA: React.FC<ProductPageCTAProps> = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section>
            <div className="flex flex-col md:flex-row gap-4 w-full h-auto relative z-30">
                {items.map((data, index) => {
                    const isHovered = hoveredIndex === index
                    return (
                        <RevealComponent
                            key={index}
                            outerClass="flex-1" // Ensures it takes up proper flex space
                            backgroundClass='bg-white'
                        >
                            <Link
                                href={data.link}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="border border-solid space-y-4 px-4 py-6 rounded-2xl transition-colors duration-300 block h-full"
                                style={{
                                    backgroundColor: isHovered ? data.color : 'white',
                                    color: isHovered ? 'white' : data.color,
                                    borderColor: data.color,
                                }}
                            >
                                <h5 className="lg:text-4xl md:text-3xl text-xl font-bold">{data.title}</h5>
                                <div className="text-lg sm:text-xl font-light flex justify-between">
                                    <span>Click here to know more</span>
                                    <FaArrowRight />
                                </div>
                            </Link>
                        </RevealComponent>
                    )
                })}

            </div>
        </section>
    )
}

export default ProductPageCTA
