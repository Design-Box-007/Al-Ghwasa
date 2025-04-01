'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import images from '@/data/assets'


const headingVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
}

const paragraphVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
}


const AboutUsSecond = () => {

    const aboutUsSecondContent = [
        {

            title: "Integrity",
            content: "We build trust through transparency.",
            color: "#3A5088"
        },
        {

            title: "Innovation",
            content: "We embrace cutting-edge solutions.",
            color: "#FF6B6B"
        },
        {

            title: "Reliability",
            content: "Our clients can always count on us.",
            color: "#00897B"
        },
    ]

    return (
        <section className="space-y-4 py-5 px-c-20">
            <div className="flex flex-col lg:flex-row gap-2">
                <motion.h1
                    className="font-medium text-[60px] flex-1"
                    variants={headingVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    A Legacy of Innovation, Reliability, and Growth
                </motion.h1>
                <div className="flex flex-col gap-2 justify-around flex-1">
                    <motion.p
                        className="text-xl font-light text-secondary"
                        variants={paragraphVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        {"Founded in 1988, Al Ghwasa has become a trusted name in providing high-quality industrial and marine equipment. Our journey reflects a commitment to quality, customer satisfaction, and technological advancement—helping businesses across the UAE operate with efficiency and confidence."}
                    </motion.p>
                </div>
            </div>
            {/* Image Reveal Animation using an overlay */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden flex items-end p-4">
                <Image
                    loading="lazy"
                    src={images.HomeHero1}
                    alt="about"
                    width={961}
                    height={641}
                    className="absolute inset-0 z-10 w-full h-full object-cover"
                />

                <div className='flex flex-row gap-4 h-[200px] relative z-30'>
                    {
                        aboutUsSecondContent.map((data, index) => (
                            <div className={`space-y-4 bg-white px-4 py-6 rounded-2xl`} style={{ color: data.color }} key={index}>
                                <h5 className='text-5xl'>{data.title}</h5>
                                <p className='text-[28px] font-inter'>{data.content}</p>
                            </div>
                        ))
                    }
                </div>
                {/* <motion.div
                    className="absolute top-0 right-0 h-full w-full bg-white"
                    initial={{ width: "100%" }}
                    whileInView={{ width: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                /> */}
            </div>
        </section>
    )
}

export default AboutUsSecond
