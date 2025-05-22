'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const MX3SubPageLinks = () => {

    const mx3SubLinks = [
        { title: "Athletics", link: "/mx-3/athletics", color: "#00897B" },
        { title: "Military", link: "/mx-3/military", color: "#0277BD" },
        { title: "Workplace safety", link: "/mx-3/workplace-safety", color: "#FF6B6B" },
    ]

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section>
            <div className='flex flex-col md:flex-row gap-4 w-full h-auto relative z-30'>
                {mx3SubLinks.map((data, index) => {
                    const isHovered = hoveredIndex === index
                    return (
                        <Link
                            href={data.link}
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="flex-1 border border-solid space-y-4 px-4 py-6 rounded-2xl transition-colors duration-300"
                            style={{
                                backgroundColor: isHovered ? data.color : 'white',
                                color: isHovered ? 'white' : data.color,
                                borderColor: data.color,
                            }}
                        >
                            <h5 className="text-3xl sm:text-4xl font-bold">{data.title}</h5>
                            <div className="text-lg sm:text-xl font-light flex justify-between">
                                <span>Click here to know more</span>
                                <FaArrowRight />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default MX3SubPageLinks
