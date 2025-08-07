'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import images from '@/data/assets';

const Gastec2Hero = () => {
    return (
        <header className="relative min-h-[600px] lg:min-h-[700px] rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={images.Gastec2Hero}
                    alt="GASTEC GV-100 / GV-110 Gas Sampling Pump Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12 h-full flex flex-col">
                {/* Marketing Headlines - Right Side */}
                <div className="absolute top-[15%] right-0 lg:right-8 z-10">
                    <div className="text-right space-y-2">
                        <motion.h2 
                            className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Engineered for Accuracy.
                        </motion.h2>
                        <motion.h2 
                            className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Built for the Field.
                        </motion.h2>
                    </div>
                </div>

                {/* Combined Product Info and CTA Section - Bottom */}
                <div className="mt-100">
                    <motion.div 
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 lg:gap-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Left Side - Product Information */}
                        <div className="flex flex-col items-start gap-4 lg:gap-5 max-w-2xl">
                            {/* Product Title */}
                            <motion.h1 
                                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                GV-100 / GV-110 GASTEC Pump
                            </motion.h1>
                            
                            {/* Subtitle */}
                            <motion.h3 
                                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                Manual Precision for Critical <br /> Environments
                            </motion.h3>

                            {/* Description */}
                            <motion.p 
                                className="text-sm sm:text-base text-white leading-relaxed max-w-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.0 }}
                            >
                                A rugged, manual piston-style gas sampling pump designed for accurate field measurements with GASTEC detector tubes — no batteries, no calibration, just reliable results.
                            </motion.p>

                            {/* Call-to-Action Buttons */}
                            <motion.div 
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                <motion.button 
                                    className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base border border-gray-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Request a Quote
                                </motion.button>

                                <motion.button 
                                    className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base border border-gray-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Download Brochure
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Right Side - View Compatible Tubes Button */}
                        <motion.button 
                            className="bg-white text-gray-800 px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-sm sm:text-base border border-gray-200 self-end"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            View Compatible Tubes
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Gastec2Hero;
