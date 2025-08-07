import React from 'react'
import Gastec2Hero from './Herosection'
import ProductCol1 from './Product-col-1'
import ProductsCol12 from './Products-col-1(2)'
import ProductsCol2 from './Products-col-2'
import ProductGridCol3 from './ProductGrid-col-3'
import FeatureGridSection from './FeatureGridSection'
import TableSection from './TableSection'
import FAQ from './FAQ'
import images from '@/data/assets'
import TestimonialCard from '@/components/Comman/TestimonialCard'

const Gastec2 = () => {
    return (
        <main className='px-4 pt-[150px] lg:pt-[22px] bg-white'>
            <Gastec2Hero />
            <ProductCol1 />             
            <ProductsCol2 />
            <ProductsCol12 /> 
            <FeatureGridSection /> 
            <TestimonialCard
                testimonial={{
                    imageSrc: images.Gastec4,          // Full product image
                    userImageSrc: images.Gastec5,        // Dr. Ahmed Al Mansoori image
                    userName: "Dr. Ahmed Al Mansoori",
                    userRole: "Food Safety Auditor",
                    testimonial:
                        "The Alla Oil Quality Tester has been an essential tool in ensuring food consistency and safety while saving costs, A reliable, accurate, and easy-to-use device for food quality inspections.",
                }}
                customHeading="Hear From the Professionals"
            />
            <TableSection />
            <ProductGridCol3 />
            <FAQ />
        </main>
    )
}

export default Gastec2
