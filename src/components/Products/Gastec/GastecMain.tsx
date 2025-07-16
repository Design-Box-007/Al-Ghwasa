'use client'

import React, { useState } from 'react'

// Import your Gastec components
import Gastec1 from '../../../data/products/gastec-repo/Gastec1'
import Gastec2 from '../../../data/products/gastec-repo/Gastec2'
import Gastec3 from '../../../data/products/gastec-repo/Gastec3'
import Gastec4 from '../../../data/products/gastec-repo/Gastec4'
import Gastec5 from '../../../data/products/gastec-repo/Gastec5'
import Gastec6 from '../../../data/products/gastec-repo/Gastec6'
import Gastec7 from '../../../data/products/gastec-repo/Gastec7'
import Gastec8 from '../../../data/products/gastec-repo/Gastec8'
import Gastec9 from '../../../data/products/gastec-repo/Gastec9'
import Gastec10 from '../../../data/products/gastec-repo/Gastec10'
import images from '@/data/assets'
import BlogHeader from '@/components/blog/BlogHeader'
import RevealComponent from '@/components/Comman/RevealComponent'

interface GastecDataType {
    title: string;
    category: string;
    gastec: string;
    imgSrc: string;
}

const productData: GastecDataType[] = [
    {
        title: "About Gastec: Precision Gas Detection for Safety, Research & the Environment",
        category: "Fundamentals",
        gastec: "Gastec1",
        imgSrc: images.Gastec_AboutPump1
    },
    {
        title: "Why Gastec: Industrial Safety, Environmental Monitoring & More",
        category: "Applications",
        gastec: "Gastec2",
        imgSrc: images.Gastec_AboutPump2
    },
    {
        title: "Gas Detector Tubes",
        category: "Technology",
        gastec: "Gastec3",
        imgSrc: images.Gastec_Tube1
    },
    {
        title: "Permeater PD-1C Calibration Generator",
        category: "Calibration",
        gastec: "Gastec4",
        imgSrc: images.Gastec_PD1C
    },
    {
        title: "GHS-8AT-EX: H₂S Sewer Gas Data Logger",
        category: "Monitoring",
        gastec: "Gastec5",
        imgSrc: images.Gastec_GHS501FT3
    },
    {
        title: "CG-1: Compressed Air Quality Testing System",
        category: "Breathing Air",
        gastec: "Gastec6",
        imgSrc: images.Gastec_CG1Image1
    },
    {
        title: "Automatic Air Sampling Pump GSP-501FT",
        category: "Sampling",
        gastec: "Gastec7",
        imgSrc: images.Gastec_GSP501FT_Step1
    },
    {
        title: "Extension Hoses: 351A-5/10/30 for Confined Spaces",
        category: "Accessories",
        gastec: "Gastec8",
        imgSrc: images.Gastec_ExtensionHosesSection8
    },
    {
        title: "Types of Detector Tubes",
        category: "Tube Types",
        gastec: "Gastec9",
        imgSrc: images.Gastec_Shortterm1
    },
    {
        title: "Pyrotec Pyrolyzer 860 & Fumigation Probe",
        category: "Specialty",
        gastec: "Gastec10",
        imgSrc: images.Gastec_PyrotecPyrolyzer
    },
];



// Gastec_No107PolytecTube
// 
// Gastec_PolytecIIINo26
// Gastec_PolytecIINo25
// Gastec_PolytecIVNo27
// Gastec_PolytecVNo28

// Map component string to actual React component
const gastecComponentMap: Record<string,
    React.ElementType> = {
    Gastec1,
    Gastec2,
    Gastec3,
    Gastec4,
    Gastec5,
    Gastec6,
    Gastec7,
    Gastec8,
    Gastec9,
    Gastec10,
}

const GastecMain = () => {
    const [selectedProductData,
        setSelectedProductData] = useState<GastecDataType>(productData[0])

    const SelectedComponent = gastecComponentMap[selectedProductData.gastec] || (() => <p>Component not found.</p>)

    return (
        <section className='bg-[#F1F1F1] rounded-[20px] px-4 lg:px-[30px] py-[40px]'>
  <RevealComponent>
    <h2 className='font-medium text-3xl lg:text-[54px] text-black capitalize'>
      All About Gastec Devices
    </h2>
  </RevealComponent>

  {/* Tabs on top */}
  <div className="w-full mt-10">
    <div className="bg-white rounded-2xl p-4 overflow-x-auto">
      <ul className="flex flex-wrap gap-3 min-w-max">
        {productData.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium border 
              ${item.title === selectedProductData.title
                ? 'bg-gray-200 text-black border-gray-400'
                : 'text-gray-600 hover:bg-gray-100 border-transparent'}`}
            onClick={() => setSelectedProductData(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Content in center */}
  <div className="w-full mt-6 flex flex-col justify-center items-center">
    <div className='bg-white w-full rounded-3xl p-4 max-w-[1200px]'>
      <BlogHeader blog={selectedProductData} imageClassName='brightness-75 object-center object-contain' />
      <SelectedComponent />
    </div>
  </div>
</section>

    )
}

export default GastecMain
