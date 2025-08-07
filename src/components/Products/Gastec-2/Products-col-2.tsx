'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

const ProductsCol2 = () => {
    return (
        <section className="py-16 lg:py-24 bg-white w-full">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-8 lg:gap-16 w-full">
                    
                    {/* Left Product: GASTEC H₂S Data Logger */}
                    <motion.div 
                        className="rounded-2xl flex flex-col gap-[14px] justify-between overflow-hidden shadow-md bg-gray-100 border border-gray-200 p-5 h-[900px] flex-1 max-w-[652px]"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-150">
                            <Image
                                src="/images/Gastec2/GHS_8AT_EX.jpg"
                                alt="GASTEC H₂S Data Logger with accessories"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        
                        {/* Product Content */}
                        <div className="space-y-4">
                            <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                                GASTEC H₂S Data Logger (GHS-8AT-EX)
                            </h3>
                            <p className="text-lg font-medium text-gray-900">
                                Hydrogen Sulfide Logger with Full Accessories
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Real-time H₂S exposure logging with downloadable digital reports. Comes with mounting rope, CD software, batteries, clips, and USB cable.
                            </p>
                            
                            {/* Bullet Points */}
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Continuous H₂S exposure logging</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Compact & explosion-proof</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Full set of deployment tools included</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Call to Action Button */}
                        <div className="flex justify-end -mt-13">
                            <button className="flex items-center gap-3 bg-white border border-gray-300 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm">
                                <span className="text-base">View Data Logger</span>
                                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Product: Personal Air Sampler */}
                    <motion.div 
                        className="rounded-2xl flex flex-col gap-[14px] justify-between overflow-hidden shadow-md bg-gray-100 border border-gray-200 p-5 h-[900px] flex-1 max-w-[652px]"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-150">
                            <Image
                                src="/images/Gastec2/GHS_501FT.jpg"
                                alt="Personal Air Sampler with accessories"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        
                        {/* Product Content */}
                        <div className="space-y-4">
                            <h3 className="text-2xl lg:text-3xl font-bold text-blue-900">
                                Personal Air Sampler (GSP-501FT)
                            </h3>
                            <p className="text-lg font-medium text-gray-900">
                                Digital Air Sampling Pump for Precise Flow Control
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Highly portable sampler with programmable settings and accessories for accurate collection of airborne contaminants.
                            </p>
                            
                            {/* Bullet Points */}
                            <ul className="space-y-2">
                                <li className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Adjustable timer and flow modes</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Long battery life</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-600">
                                    <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                    <span>Ideal for workplace monitoring</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Call to Action Button */}
                        <div className="flex justify-end -mt-13">
                            <button className="flex items-center gap-3 bg-white border border-gray-300 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm">
                                <span className="text-base">View Air Sampler</span>
                                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductsCol2;
