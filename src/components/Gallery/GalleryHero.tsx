import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import ProductCTA from '../Comman/ProductCTA'
import { FaArrowRight } from 'react-icons/fa'

const GalleryHero = () => {
    return (
        <header className='p-6 space-y-4'>
            <div className='flex flex-col lg:flex-row items-start justify-between lg:items-center py-4'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>
                    Experience Innovation in Action
                </h1>
                <p className='text-lg font-light'>
                    Experience the Power of Industrial & Marine Solutions in Action
                </p>
            </div>

            <div className='w-full h-[600px] relative overflow-hidden rounded-4xl p-8 flex items-end justify-start'>
                <Image src={images.HomeHero1} alt={"hero-img"} width={1360} height={600} className='w-full h-full absolute inset-0 object-center object-cover z-10' />
                <p className='relative z-20 font-inter text-base lg:text-xl'>
                    Discover how our cutting-edge products and solutions are used across marine, industrial, hospitality, safety, and hydration sectors. Browse through our Experience Center to see innovation at work.
                </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
                {/* Explore Products */}
                <div className="flex items-center gap-2">
                    <span>Explore our Products</span>
                    <span className="border border-white rounded-full p-1">
                        <FaArrowRight />
                    </span>
                </div>

                {/* Product Categories */}
                <div className="flex flex-wrap gap-3 font-semibold">
                    <ProductCTA link="/mx3" name="Hydration" imgSrc={images.Thermometer} className="text-custom-green-1" />
                    <ProductCTA link="/frying-oil-tester" name="Hospitality" imgSrc={images.Thermometer} className="text-custom-green-1" />
                    <ProductCTA link="/gastec" name="Safety" imgSrc={images.Thermometer} className="text-custom-red-light" />
                </div>
            </div>

        </header>
    )
}

export default GalleryHero