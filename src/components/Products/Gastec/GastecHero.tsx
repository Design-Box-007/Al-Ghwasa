'use client'
import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const GlideText = () => {
    return (
        <div className="relative overflow-hidden w-full">
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
        </div>
    )
}

const GastecHero = () => {
    return (
        <header className="relative rounded-3xl min-h-screen custom-linear-gradient-white px-4 sm:px-6 md:px-10 pt-[20px] md:pt-28 lg:pt-32 pb-20 md:pb-32">
            <div className="relative z-20 flex flex-col overflow-hidden gap-6 md:gap-8">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-semibold leading-tight md:leading-[1.4] lg:leading-[1.5] w-full md:w-3/4 lg:w-1/2">
                    Gastec Gas Detector Tubes
                </h1>

                <GlideText />

                <div className="self-start md:self-end w-full md:w-[70%] lg:w-[40%] space-y-6">
                    <p className="text-base md:text-lg font-normal">
                        Designed for industrial safety, environmental monitoring, and compliance testing, Gastec's advanced gas detection tubes offer quick and accurate measurements with no need for complex equipment.
                    </p>
                    <button className="flex items-center gap-3 bg-black text-white p-2 px-4 rounded-full hover:bg-gray-800 transition">
                        <span className="font-medium text-base">Learn More</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <Image
                src={images.Gastec2}
                alt="gastec-hero-obj"
                width={1000}
                height={238}
                className="absolute z-[15] rotate-0 lg:-rotate-45 w-[90%] sm:w-[100%] md:w-4/5 lg:w-3/4 object-contain object-center custom-translate-center bottom-2 lg:top-[5%] md:top-[10%]"
            />
        </header>
    )
}

export default GastecHero
