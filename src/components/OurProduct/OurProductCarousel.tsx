'use client'

import images from '@/data/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';


const OurProductCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageData = [
        { label: "Commercial", src: images.HomeHero1 },
        { label: "Residential", src: images.HomeHero1 },
        { label: "Concept Design", src: images.HomeHero1 },
        { label: "Renovation & Remodeling", src: images.HomeHero1 },
        { label: "Laser Cutting", src: images.HomeHero1 },
    ];

    return (
        <section className="px-4 overflow-hidden flex flex-col justify-center min-h-[50vh]">

            <motion.h4
                className="text-[140px] font-semibold mb-6 sm:mb-8 text-center md:text-left"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                Our Specialized <br />
                <span className='text-custom-blue-1'>Product</span> Categories
            </motion.h4>
            <motion.p
                className="text-2xl mb-6 sm:mb-8 text-center md:text-left"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
            >
                {"From advanced industrial solutions to essential safety equipment, our curated product categories ensure you find exactly what your business needs."}
            </motion.p>




            {/* Image Container */}
            <section className="flex w-full h-full justify-center border border-solid border-primary items-center relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
                <div className="border-white flex justify-center items-center p-6 sm:p-10 md:p-12 lg:p-16 border-[3px] border-solid relative w-full h-full">

                    {/* Blurred Background Image */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.6, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="absolute z-10 w-full h-full"
                        >
                            <Image
                                src={imageData[currentIndex].src}
                                alt="gallery-image"
                                width={1360}
                                height={500}
                                className="w-full h-full object-cover blur-lg"
                                loading='lazy'
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Clear Centered Image */}
                    <div className="relative w-full h-full z-20 rounded-xl sm:rounded-2xl md:rounded-3xl border-white border-[3px] border-solid">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0.6, scale: 0.9 }}
                                transition={{ duration: 0.6 }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={imageData[currentIndex].src}
                                    alt="gallery-image"
                                    width={1360}
                                    height={500}
                                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl md:rounded-3xl"
                                    loading='lazy'
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Image Labels as Buttons */}
                        <div className="bg-white py-2 px-3 sm:px-5 w-full max-w-[90%] absolute -bottom-4 sm:-bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 rounded-full justify-start overflow-x-auto whitespace-nowrap no-scrollbar shadow-md">
                            {imageData.map((item, index) => (
                                <button
                                    key={index}
                                    className={`px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm flex flex-row items-center gap-1 sm:gap-2 cursor-pointer font-medium rounded-full transition-all duration-300 ${currentIndex === index ? 'text-custom-green-1' : 'text-black'
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <FaHome />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </section>
    );
};

export default OurProductCarousel;
