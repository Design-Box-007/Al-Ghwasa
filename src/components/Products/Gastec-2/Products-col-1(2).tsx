'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductsCol12 = () => {
    return (
        <section className="py-16 lg:py-24 bg-white w-full">
            <div className="w-full">
                <motion.div 
                    className="rounded-2xl flex flex-col gap-[14px] justify-between overflow-hidden shadow-md bg-gray-100 border border-gray-200 p-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Product Photograph Section */}
                    <div className="relative w-full h-200">
                        <Image
                            src="/images/Gastec2/GV_100S.jpg"
                            alt="GASTEC GV-110S Gas Sampling Pump"
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    {/* Text Information Section */}
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            {/* Left Content Area - Wider */}
                            <motion.div 
                                className="lg:col-span-2 space-y-6"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 text-left">
                                    GASTEC GV-110S Gas Sampling Pump
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg text-left">
                                    Reliable piston-style pump for use with all GASTEC detector tubes. Includes tip breaker, <br /> dust filter, handle strap, and hard case.
                                </p>
                                
                                {/* Call to Action Button */}
                                <motion.button
                                    className="flex items-center gap-3 bg-white border border-gray-300 text-gray-900 px-8 py-2 rounded-full font-medium hover:bg-gray-50 transition-all duration-200 shadow-sm"
                                    whileHover={{ scale: 1.02, shadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="text-base">View GV-110S Pump</span>
                                    <div className="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.button>
                            </motion.div>

                            {/* Right Information Card - Narrower */}
                            <motion.div 
                                className="bg-white rounded-xl shadow-lg p-6 space-y-4"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-semibold text-gray-900 text-left">
                                    Manual Gas Sampling Pump with Durable Case
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-600 text-left">
                                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>No batteries or power needed</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-left">
                                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Easy operation and maintenance</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600 text-left">
                                        <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Carry case and spares included</span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsCol12;
