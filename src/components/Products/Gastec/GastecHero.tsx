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
                {/* top-left content */}
                <RevealComponent direction='bottom' outerClass='w-full md:w-3/4 lg:w-1/2'>
                    <h1 className="text-4xl sm:text-6xl font-semibold leading-tight md:leading-[1.4] lg:leading-[1.5] w-full">
                        Gastec Gas <br /> Detector Tubes
                    </h1>
                </RevealComponent>

                {/* center right to left text content */}
                <GlideText />

                {/* bottom right content */}
                <RevealComponent outerClass="self-start md:self-end w-full md:w-[70%] lg:w-[40%] space-y-6">
                    <p className="text-base md:text-lg font-normal">
                        {" Designed for industrial safety, environmental monitoring, and compliance testing, Gastec's advanced gas detection tubes offer quick and accurate measurements with no need for complex equipment."}
                    </p>
                    {/* <button className="flex items-center gap-3 bg-black text-white p-2 px-4 rounded-full hover:bg-gray-800 transition">
                        <span className="font-medium text-base">Learn More</span>
                        <FaArrowRight />
                    </button> */}
                </RevealComponent>

                {/* gastec tube (visible only in mobile*/}
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
            {/* gastec tube visible only in desktop mode */}
            <div className="hidden lg:block absolute z-[20] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="rotate-45 origin-center w-[225px] h-[999px] h-fit">
                    <Image
                        src={images.Gastec2A}
                        alt="gastec-hero-obj"
                        width={1000}
                        height={238}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>

        </header>
    )
}

export default GastecHero
