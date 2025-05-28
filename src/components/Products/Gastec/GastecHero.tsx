'use client'
import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import RevealComponent from '@/components/Comman/RevealComponent'

const GlideText = () => {
    return (
        <RevealComponent outerClass="relative overflow-hidden w-full z-[14]">
            <motion.div
                className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-custom-blue-1"
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                }}
            >
                <span className="mr-10">
                    Fast, Reliable, & Precise On-Site Gas Analysis
                </span>
                <span className="mr-10">
                    Fast, Reliable, & Precise On-Site Gas Analysis
                </span>
            </motion.div>
        </RevealComponent>
    )
}

const GastecHero = () => {
    return (
        <header className="relative rounded-3xl custom-linear-gradient-white px-4 sm:px-6 overflow-hidden md:px-10 pt-[20px] md:pt-28 lg:pt-32 pb-20 md:pb-32">
            <div className="relative z-20 flex flex-col overflow-hidden gap-6 md:gap-8">

                <RevealComponent direction='bottom' outerClass='w-full md:w-3/4 lg:w-1/2'>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight md:leading-[1.4] lg:leading-[1.5] w-full">
                        Gastec Gas Detector Tubes
                    </h1>
                </RevealComponent>

                <GlideText />

                <RevealComponent outerClass="self-start md:self-end w-full md:w-[70%] lg:w-[40%] space-y-6">
                    <p className="text-base md:text-lg font-normal">
                        {" Designed for industrial safety, environmental monitoring, and compliance testing, Gastec's advanced gas detection tubes offer quick and accurate measurements with no need for complex equipment."}
                    </p>
                    {/* <button className="flex items-center gap-3 bg-black text-white p-2 px-4 rounded-full hover:bg-gray-800 transition">
                        <span className="font-medium text-base">Learn More</span>
                        <FaArrowRight />
                    </button> */}
                </RevealComponent>
                <RevealComponent>
                    <Image
                        src={images.Gastec2}
                        alt="gastec-hero-obj"
                        width={1000}
                        height={238}
                        className="block lg:hidden z-[15] rotate-180 w-full object-contain object-center"
                    />
                </RevealComponent>
            </div>

            <div className='hidden lg:block absolute z-[20] rotate-0 lg:-rotate-45 w-[90%] sm:w-[100%] md:w-4/5 lg:w-3/4 custom-translate-center-2 bottom-2 lg:top-[25%] lg:left-[70%]'>
                <RevealComponent direction='left' outerClass='w-full'>
                    <Image
                        src={images.Gastec2}
                        alt="gastec-hero-obj"
                        width={1000}
                        height={238}
                        className="w-full object-contain object-center"
                    />
                </RevealComponent>
            </div>
        </header>
    )
}

export default GastecHero
