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
                className="whitespace-nowrap text-9xl font-semibold text-custom-blue-1"
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
        <header className='relative rounded-3xl min-h-screen custom-linear-gradient-white px-2 pt-32 pb-48'>
            <div className='relative z-20 flex flex-col overflow-hidden gap-8'>
                <h1 className='text-8xl font-semibold w-1/2 leading-[1.5]'>
                    {"Gastec Gas Detector Tubes"}
                </h1>
                <GlideText />
                <div className='self-end w-[40%] space-y-8'>
                    <p className='font-normal text-lg'>
                        {"Designed for industrial safety, environmental monitoring, and compliance testing, Gastec's advanced gas detection tubes offer quick and accurate measurements with no need for complex equipment."}
                    </p>
                    <button className="flex items-center gap-3 bg-black text-white p-1.5 pl-3.5 rounded-full hover:bg-gray-800 transition">
                        <span className='font-medium text-base text-white'>Learn More</span>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <Image
                src={images.Gastec2}
                alt="gatec-hero-obj"
                width={1000}
                height={238}
                className="absolute z-[15] -rotate-45 w-3/4 object-contain object-center custom-translate-center top-[10%]"
            />

        </header>
    )
}

export default GastecHero
