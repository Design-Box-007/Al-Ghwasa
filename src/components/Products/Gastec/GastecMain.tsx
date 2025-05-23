'use client'

import React, { useState } from 'react'

// Import your Gastec components
import Gastec1 from '../../../data/products/gastec-repo/Gastec1'
import Gastec2 from '../../../data/products/gastec-repo/Gastec2'
import Gastec3 from '../../../data/products/gastec-repo/Gastec3'
import Gastec4 from '../../../data/products/gastec-repo/Gastec4'
import Gastec5 from '../../../data/products/gastec-repo/Gastec5'
import Gastec6 from '../../../data/products/gastec-repo/Gastec6'
import images from '@/data/assets'
import BlogHeader from '@/components/blog/BlogHeader'

interface GastecDataType {
    title: string;
    category: string;
    gastec: string;
    imgSrc: string;
}

const productData: GastecDataType[] = [
    { title: "About Gastec", category: "Fundamentals", gastec: "Gastec1", imgSrc: images.Gastec_AboutGastecImage },
    { title: "GHS-8AT-EX-Explosion Proof Pump", category: "Technical Guide", gastec: "Gastec2", imgSrc: images.Gastec_GHS8ATEX4コピー },
    { title: "GASTEC GV-100 GV-110S Gas Sampling Pumps", category: "Safety", gastec: "Gastec3", imgSrc: images.Gastec_GV100S },
    { title: "Gastec Products", category: "How-To", gastec: "Gastec4", imgSrc: images.Gastec_DetectorTubeImage1 },
    { title: "Gastec Extension Pole - 350BP-2", category: "Support", gastec: "Gastec5", imgSrc: images.Gastec_351A5GV100 },
    { title: "Gastec Polytec Tube System", category: "Research", gastec: "Gastec6", imgSrc: images.Gastec_20 },
];

// Gastec_No107PolytecTube
// 
// Gastec_PolytecIIINo26
// Gastec_PolytecIINo25
// Gastec_PolytecIVNo27
// Gastec_PolytecVNo28

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
        <section className='bg-[#F1F1F1] rounded-[20px] px-4 lg:px-[30px] py-[40px]'>
            <h2 className='font-medium text-[54px] text-black capitalize'>
                All About Gastec Devices
            </h2>

            <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-7 gap-2.5">
                <div className='lg:col-span-2 bg-white rounded-3xl p-4 space-y-4'>
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

                <div className='lg:col-span-5 bg-white rounded-3xl flex flex-col justify-center items-start p-4'>
                    <BlogHeader blog={selectedProductData} imageClassName='brightness-75 object-center object-contain' />
                    <SelectedComponent />
                </div>
            </div>
        </section>
    )
}

export default GastecMain
