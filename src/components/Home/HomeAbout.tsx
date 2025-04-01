'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import images from '@/data/assets'
import { FaArrowRight, FaLightbulb } from 'react-icons/fa'
import TrustedPartners from '../Comman/TrustedPartners'

const aboutUsVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
}

const headingVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
}

const paragraphVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
}

const learnMoreVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}






const HomeAbout = () => {
    return (
        <section className="space-y-4 p-6">
            <motion.div
                className="text-lg sm:text-xl font-medium text-secondary w-full flex flex-row justify-between"
                variants={aboutUsVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                <div className="flex gap-2 items-center">
                    <FaLightbulb className="text-custom-red-light" />
                    <p className="font-inter text-xl">
                        About AI Ghwasa
                    </p>
                </div>
            </motion.div>
            <div className="flex flex-col lg:flex-row gap-2">
                <motion.h1
                    className="font-medium text-[56px] flex-1"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Over 30 Years of <br />Excellence in Industrial &<br /> Marine Equipment
                </motion.h1>
                <div className="flex flex-col gap-14 justify-around flex-1 px-2">
                    <motion.div
                        className="space-y-5"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p className='text-xl font-light text-black'>
                            {"Established in 1990 in Dubai, AI Ghwasa is a trusted leader in providing cutting-edge solutions in marine, industrial automation, and safety equipment."}
                        </p>
                        <div className='flex items-center gap-5 font-medium text-base'>
                            <div className='py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-2xl'>Reliablity</div>
                            <div className='py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-2xl'>Innovation</div>
                            <div className='py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-2xl'>Customer Satisfaction</div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-row justify-between py-2 border-b border-b-custom-red-light"
                        variants={learnMoreVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    >
                        <p className="text-sm sm:text-base md:text-2xl font-medium text-custom-red-light">Learn More About us</p>
                        <span className="bg-transparent rounded-full p-1 sm:p-2">
                            <FaArrowRight size={14} className="text-custom-red-light" />
                        </span>
                    </motion.div>
                </div>
            </div>
            {/* Image Reveal Animation using an overlay */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                    loading="lazy"
                    src={images.HomeHero1}
                    alt="about"
                    width={961}
                    height={641}
                    className="w-full h-full object-cover"
                />
                <motion.div
                    className="absolute top-0 right-0 h-full w-full bg-white"
                    initial={{ width: "100%" }}
                    whileInView={{ width: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            <TrustedPartners />
        </section>
    )
}

export default HomeAbout
