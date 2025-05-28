'use client'

import Image from 'next/image'
import React from 'react'
import images from '@/data/assets'
import { FaArrowRight, FaLightbulb } from 'react-icons/fa'
import Link from 'next/link'
import RevealComponent from '../Comman/RevealComponent'

const HomeAbout = () => {
    return (
        <section className="space-y-4 p-6">

            <RevealComponent
                backgroundClass="bg-background"
                outerClass="text-lg sm:text-xl font-medium text-secondary w-full flex flex-row justify-between"
                direction="right"
            >
                <div className="flex gap-2 items-center">
                    <FaLightbulb className="text-custom-red-light" />
                    <p className="font-inter text-xl">
                        About Al Ghwasa
                    </p>
                </div>
            </RevealComponent>

            <div className="flex flex-col lg:flex-row gap-2">
                <RevealComponent
                    outerClass="font-medium text-3xl lg:text-[56px] flex-1 capitalize"
                    backgroundClass='bg-background'
                    direction='right'
                >
                    Over 30 Years of <br />Excellence in industrial and marine
                </RevealComponent>
                <div className="flex flex-col gap-14 justify-around flex-1 lg:px-2">
                    <RevealComponent
                        outerClass="space-y-5"
                        direction='bottom'
                    >
                        <p className='text-xl font-light text-black'>
                            {"With over 30 years of excellence in supplying high-quality industrial and marine equipment, Al Ghwasa has earned a trusted reputation across the Middle East for reliability, innovation, and technical expertise."}
                        </p>
                        {/* <div className='flex items-center gap-5 font-medium text-base'>
                            <div className='py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-2xl'>Reliablity</div>
                            <div className='py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-2xl'>Innovation</div>
                            <div className='py-2.5 px-4 border border-[#4A4A4A] flex items-center gap-1.5 rounded-2xl'>Customer Satisfaction</div>
                        </div> */}
                    </RevealComponent>
                    <RevealComponent
                        outerClass="flex flex-row justify-between py-2 border-b border-b-custom-red-light"

                    >
                        <Link href="/about" passHref className="text-sm sm:text-base md:text-2xl font-medium text-custom-red-light">Learn More About us</Link>
                        <span className="bg-transparent rounded-full p-1 sm:p-2">
                            <FaArrowRight className="text-custom-red-light" />
                        </span>
                    </RevealComponent>
                </div>
            </div>
            {/* Image Reveal Animation using an overlay */}
            <RevealComponent
                backgroundClass="bg-background"
                outerClass="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl"
                direction="right"
            >
                <Image
                    loading="lazy"
                    src={images.HomeAbout}
                    alt="about"
                    width={961}
                    height={641}
                    className="w-full h-full object-cover"
                />
            </RevealComponent>

            {/* <TrustedPartners /> */}
        </section>
    )
}

export default HomeAbout
