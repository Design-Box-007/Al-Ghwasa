import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import ProductCard from '../Comman/ProductCard'
import { FaShop } from 'react-icons/fa6'
import { TfiAngleDoubleRight } from 'react-icons/tfi'

const ProductHero = () => {
    return (
        <header className="min-h-screen w-full bg-white">
            <div className="h-full flex flex-col items-start p-6 md:p-c-20 lg:pt-28 lg:pb-40 justify-between relative overflow-hidden rounded-[20px]">
                {/* Background Image */}
                <Image
                    src={images.ProductOverview36}
                    alt="home-hero"
                    width={1360}
                    height={683}
                    className="absolute inset-0 w-full h-full z-10 object-cover object-center rounded-[20px]"
                />

                {/* Hero Content */}
                <div className="relative z-20 text-white w-full space-y-6">
                    <div className="flex flex-col lg:flex-row justify-between w-full items-center h-auto pb-6 md:pb-8 gap-6">
                        {/* Text Content */}
                        <div className="flex flex-col gap-4 w-full">
                            <h1 className="font-semibold tracking-wide text-4xl md:text-6xl lg:text-[74px] leading-tight">
                                {"Discover High-Performance Solutions for Every Industry"}
                            </h1>
                            <p className="font-normal text-lg md:text-2xl">
                                {"Find the perfect solution for your industry. Search or filter by category to browse our selection of hospitality, hydration, safety, marine, and industrial equipment."}
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className='relative z-20 w-full flex flex-col'>
                    <div className='flex justify-between w-fit gap-4'>
                        <button className="my-button">
                            <FaShop color='#fff' />
                            <span>Browser Categories</span>
                        </button>
                        <button className="my-button">
                            <FaShop color='#fff' />
                            <span>View all products</span>
                        </button>
                    </div>

                    <div className='self-end'>
                        <ProductCard
                            imgSrc={images.Thermometer}
                            name='Thermometer'
                        />
                    </div>
                </div>

                <div className='relative z-20 my-5 gap-3 flex items-center justify-between text-white'>
                    <p>
                        {"Some Featured Products to your likings"}
                    </p>
                    <TfiAngleDoubleRight />
                </div>

                <div className='relative z-20 bg-white h-[2px] w-full'></div>

            </div>
        </header>
    )
}

export default ProductHero