'use client'

import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
// import ProductCTA from '../Comman/ProductCTA'
import ProductCard from '../Comman/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'

const productIds = [1, 2, 3]

type ProductInfo = {
    imgSrc: string
    bgSrc: string
    name: string
    className: string
    textClass: string
    link: string;
}

const products: Record<number, ProductInfo> = {
    // 1: { imgSrc: images.oilTesterT, link: "/frying-oil-tester", bgSrc: images.oilTesterL, name: 'Frying Oil Tester', className: 'bg-custom-green-1', textClass: 'text-custom-green-1' },
    // 2: { imgSrc: images.mx3T, link: "/mx-3", bgSrc: images.mx3L, name: 'Hydration Measurement', className: 'bg-custom-blue-1', textClass: 'text-custom-blue-1' },
    1: { imgSrc: images.gastecT, link: "/gastec", bgSrc: images.gastecL, name: 'Gas Detection', className: 'bg-custom-red-light', textClass: 'text-custom-red-light' },
}

const Hero = () => {
    // const [activeIndex, setActiveIndex] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveIndex((prev) => (prev + 1) % productIds.length)
    //     }, 7000)
    //     return () => clearInterval(interval)
    // }, [])

    const productCardId = productIds[0]
    // const productCtaIds = productIds.filter((id) => id !== productCardId)

    return (
        <header className="w-full bg-white pt-[150px] px-c-20 lg:p-c-20 relative">
            <div className="relative overflow-hidden rounded-[20px] min-h-screen lg:min-h-[700px] lg:h-[800px] px-4 md:px-[5%] py-6 md:py-10 flex flex-col lg:flex-row items-end gap-8">
                {/* Background Image */}
                <Image
                    src={products[productCardId].bgSrc}
                    alt="home-hero"
                    width={1360}
                    height={683}
                    className="absolute inset-0 brightness-[.4] z-10 object-cover object-center w-full h-full rounded-[20px]"
                />

                {/* Content Layer */}
                <div className="relative z-20 w-full text-white space-y-10">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-white pb-6 md:pb-10">
                        {/* Animated Text Section */}
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-2/3 flex flex-col gap-4 text-center lg:text-left"
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-[64px] font-medium leading-tight tracking-wide">
                                Innovative Solutions for Hospitality, Hydration & Safety
                            </h1>
                            <p className="text-base md:text-xl lg:text-2xl font-normal">
                                Advanced Equipment for Precision, Performance & Protection.
                            </p>
                        </motion.div>

                        {/* Animated ProductCard Section */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={productCardId}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.6 }}
                                className="w-full max-w-sm lg:w-1/3 h-[400px] flex justify-center lg:justify-end"
                            >
                                <ProductCard
                                    imgSrc={products[productCardId].imgSrc}
                                    name={products[productCardId].name}
                                    className={products[productCardId].className}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Links */}
                    {/* <div className="flex flex-col md:flex-row justify-end items-center gap-6">
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 font-semibold text-center">
                            {productCtaIds.map((id: number) => (
                                <ProductCTA
                                    key={id}
                                    link={products[id].link}
                                    name={products[id].name}
                                    imgSrc={products[id].imgSrc}
                                    className={products[id].textClass}
                                />
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Hero
