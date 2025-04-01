import images from '@/data/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import ProductCTA from '../Comman/ProductCTA'

const Hero = () => {
    return (
        <header className="p-4 md:px-c-20 min-h-screen lg:min-h-[700px] lg:h-[800px] w-full bg-white pb-30">
            <div className="h-full flex flex-col lg:flex-row items-end p-6 md:p-c-20 relative overflow-hidden rounded-[20px]">
                {/* Background Image */}
                <Image
                    src={images.HomeHero1}
                    alt="home-hero"
                    fill
                    className="absolute inset-0 z-10 object-cover object-center rounded-[20px]"
                />

                {/* Hero Content */}
                <div className="relative z-20 text-white w-full space-y-6">
                    <div className="flex flex-col lg:flex-row justify-between w-full items-center h-auto lg:h-[372px] pb-6 md:pb-8 border-b border-white gap-6">
                        {/* Text Content */}
                        <div className="flex flex-col gap-4 w-full lg:w-2/3">
                            <h1 className="font-medium tracking-wide text-4xl md:text-6xl lg:text-[80px] leading-tight">
                                {"Innovative Solutions for Hospitality, Hydration & Safety"}
                            </h1>
                            <p className="font-normal text-lg md:text-2xl">
                                {"Advanced Equipment for Precision, Performance & Protection."}
                            </p>
                        </div>

                        {/* Product Card */}
                        <div className="w-full lg:w-1/3 flex justify-end">
                            <div className="bg-background p-c-10 rounded-[20px] w-full max-w-[350px] text-custom-green-1 text-lg">
                                <Image
                                    src={images.Thermometer}
                                    alt="thermometer"
                                    width={357}
                                    height={308}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                                <div className="flex items-center justify-between mt-4">
                                    <span>Thermometers</span>
                                    <span className="border border-custom-green-1 rounded-full p-1">
                                        <FaArrowRight />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Explore Products */}
                        <div className="flex items-center gap-2">
                            <span>Explore our Products</span>
                            <span className="border border-white rounded-full p-1">
                                <FaArrowRight />
                            </span>
                        </div>

                        {/* Product Categories */}
                        <div className="flex flex-wrap gap-3 font-semibold">
                            <ProductCTA link="/" name="Hydration" imgSrc={images.Thermometer} className="text-custom-green-1" />
                            <ProductCTA link="/" name="Safety" imgSrc={images.Thermometer} className="text-custom-red-light" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
