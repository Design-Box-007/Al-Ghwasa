'use client'

import React, { useState } from 'react'

// Import your Gastec components
import Gastec1 from '../../../data/products/gastec-repo/Gastec1'
import Gastec2 from '../../../data/products/gastec-repo/Gastec2'
import Gastec3 from '../../../data/products/gastec-repo/Gastec3'
import Gastec4 from '../../../data/products/gastec-repo/Gastec4'
import Gastec5 from '../../../data/products/gastec-repo/Gastec5'
import Gastec6 from '../../../data/products/gastec-repo/Gastec6'

interface GastecDataType {
    title: string;
    category: string;
    gastec: string;
}

const productData: GastecDataType[] = [
    { title: "About Gastec", category: "Fundamentals", gastec: "Gastec1" },
    { title: "GHS-8AT-EX-Explosion Proof Pump", category: "Technical Guide", gastec: "Gastec2" },
    { title: "GASTEC GV-100 GV-110S Gas Sampling Pumps", category: "Safety", gastec: "Gastec3" },
    { title: "Gastec Products", category: "How-To", gastec: "Gastec4" },
    { title: "Gastec Extension Pole - 350BP-2", category: "Support", gastec: "Gastec5" },
    { title: "Gastec Polytec Tube System", category: "Research", gastec: "Gastec6" },
];

// Map component string to actual React component
const gastecComponentMap: Record<string, React.ElementType> = {
    Gastec1,
    Gastec2,
    Gastec3,
    Gastec4,
    Gastec5,
    Gastec6,
}

const GastecMain = () => {
    const [selectedProductData, setSelectedProductData] = useState<GastecDataType>(productData[0])

    const SelectedComponent = gastecComponentMap[selectedProductData.gastec]

    return (
        <section className='bg-[#F1F1F1] rounded-[20px] px-[30px] py-[40px]'>
            <h2 className='font-medium text-[54px] text-black capitalize'>
                All About Gastec Devices
            </h2>

            <div className="w-full mt-10 grid grid-cols-7 gap-2.5">
                <div className='col-span-2 bg-white rounded-3xl p-4 space-y-4'>
                    <ul className='space-y-1'>
                        {productData.map((item, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer px-3 py-2 rounded-lg text-sm font-medium 
                                    ${item.title === selectedProductData.title ? 'bg-gray-200 text-black' : 'text-gray-600 hover:bg-gray-100'}`}
                                onClick={() => setSelectedProductData(item)}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='col-span-5 bg-white rounded-3xl flex justify-center items-start px-4'>
                    <SelectedComponent />
                </div>
            </div>
        </section>
    )
}

export default GastecMain
