import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const ProductHero = () => {
    return (
        <header className="h-screen w-full bg-white">
            <div className="h-full flex flex-col justify-center items-center p-6 md:p-c-20 lg:pt-28justify-between relative overflow-hidden rounded-[20px]">
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
                            <h1 className="font-semibold  text-center tracking-wide text-4xl md:text-6xl lg:text-[74px] leading-tight">
                                {"Discover High-Performance Solutions for Every Industry"}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ProductHero