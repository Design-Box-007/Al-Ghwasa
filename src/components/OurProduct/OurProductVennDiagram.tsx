import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const OurProductVennDiagram = () => {
    return (
        <section className='space-y-20 px-4'>
            <div className='w-3/4 mx-auto space-y-10 text-center'>
                <h1 className='font-medium text-[54px]'>
                    Why Choose Our Products
                </h1>
                <p className='font-normal text-lg'>
                    {"Our products are trusted by global industry leaders for their durability, innovative features, and compliance with international safety standards."}
                </p>
            </div>
            <Image
                src={images.ProductVennDiagram}
                alt='map-image'
                className='w-full h-full object-cover object-centerf'
                width={1440}
                height={565}
            />
        </section>
    )
}

export default OurProductVennDiagram