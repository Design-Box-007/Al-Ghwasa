'use client'

import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const FOTHero = () => {
    return (
        <header className="relative w-full rounded-3xl flex flex-col items-start justify-between min-h-[800px] sm:min-h-[900px] lg:min-h-[1000px] overflow-hidden px-6 py-24 sm:py-32">
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative z-[18] w-full lg:w-1/2"
            >
                <h1 className="font-medium text-[42px] sm:text-[60px] lg:text-[82px] leading-tight">
                    Ensure the Oil <br />Quality with <br />Laboratory- <br />Grade Accuracy
                </h1>
            </motion.div>

            {/* Animated Description */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="bg-[#4B4B4B1A] w-full sm:w-3/5 lg:w-2/5 p-5 rounded-2xl relative z-[18] mt-6 sm:mt-10"
            >
                <p className="font-medium font-inter text-base sm:text-lg leading-relaxed">
                    {"The Alla Oil Quality Tester delivers instant, precise Total Polar Material (TPM) measurements, helping food businesses optimize oil usage, maintain high food quality, and comply with food safety regulations"}
                </p>
            </motion.div>

            {/* Static Background Image (OilTester03) */}
            <Image
                src={images.OilTester03}
                alt="gatec-hero-obj"
                width={1000}
                height={238}
                className="absolute inset-0 z-[15] w-full h-full object-cover object-center"
            />

            {/* Animated Image (OilTester04) */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-[16] w-[58%] max-w-[600px]"
            >
                <Image
                    src={images.OilTester04}
                    alt="gatec-hero-obj"
                    width={817}
                    height={779}
                    className="object-cover object-center"
                />
            </motion.div>

            {/* Static Divider Line */}
            <Image
                src={images.HeroDivider}
                alt="divider-line"
                width={817}
                height={779}
                className="absolute w-[95%] bottom-1 z-[17] left-1/2 -translate-x-1/2 max-w-full"
            />
        </header>
    )
}

export default FOTHero
