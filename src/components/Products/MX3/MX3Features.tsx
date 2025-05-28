'use client'

import Feature from '@/components/Comman/Feature';
import images from '@/data/assets';
import { mx3Features2 } from '@/data/features';
import { IFeature } from '@/types';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'
import RevealComponent from '@/components/Comman/RevealComponent';

interface TestKitProps {
    image: string;
    testKitName: string;
}

const TestKit: React.FC<TestKitProps> = ({ image, testKitName }) => {
    return (
        <RevealComponent direction='bottom'>
            <div className='w-full lg:w-auto h-auto space-y-6 sm:space-y-8 py-6 sm:py-8 px-6 sm:px-10 border border-[#B4B4B4] border-solid rounded-[30px] flex flex-col items-start flex-1'>
                <Image src={image} alt={testKitName} width={540} height={91} className='w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[540px] h-auto' />
                <h4 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-left font-medium'>
                    {testKitName}
                </h4>
            </div>
        </RevealComponent>
    );
};

const MX3Features = () => {
    return (
        <section className='px-2 sm:px-4'>
            <section className='bg-[#F5F4F4] rounded-4xl space-y-[40px] sm:space-y-[50px] lg:space-y-[60px] py-[60px] sm:py-[70px] lg:py-[80px] px-4 sm:px-6 lg:px-5'>
                <motion.h2
                    className='font-semibold text-[40px] sm:text-[60px] text-[#FF842C] leading-tight'
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 30 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    MX3 Can Do Lot More...
                </motion.h2>

                <div className='bg-[#EA721B] h-[2px] w-full'></div>

                <div className='flex flex-col lg:flex-row justify-between gap-6'>
                    <TestKit image={images.MX36} testKitName='Saliva Testing' />
                    <TestKit image={images.MX37} testKitName='Sweat Testing' />
                </div>

                <div className='space-y-4 sm:space-y-6'>
                    <RevealComponent>
                        <h2 className='font-semibold text-[32px] sm:text-[40px] md:text-[50px] leading-tight'>
                            {"Fast, Lab-Quality Hydration Analysis"}
                        </h2>
                    </RevealComponent>
                    <RevealComponent direction='bottom'>
                        <p className='font-medium text-base sm:text-lg md:text-xl'>
                            {"Saliva testing offers a quick, convenient, and scientifically validated method to assess hydration levels, making it perfect for routine monitoring and health assessments."}
                        </p>
                    </RevealComponent>
                </div>

                <div className='flex flex-col lg:flex-row gap-4 lg:gap-3.5'>
                    <div className='flex-1 bg-white py-6 sm:py-7 px-4 sm:px-[22px] rounded-4xl space-y-3'>
                        {mx3Features2.map((feature: IFeature, index: number) => (
                            <RevealComponent key={index} direction='bottom' backgroundClass='bg-white'>
                                <Feature
                                    feature={feature}
                                    featureClassName={{ titleClass: "text-[22px] sm:text-[28px] md:text-[30px] lg:text-[34px] font-medium" }}
                                />
                            </RevealComponent>
                        ))}
                    </div>

                    <RevealComponent direction='bottom' outerClass='relative overflow-hidden rounded-4xl flex items-center justify-center lg:justify-end flex-1 min-h-[300px] sm:min-h-[400px] lg:min-h-[unset]'>
                        <Image
                            src={images.MX38}
                            alt='running man'
                            width={672}
                            height={1042}
                            className='absolute inset-0 w-full h-full object-cover z-[14]'
                        />
                        <Image
                            src={images.MX39}
                            alt='mx-3 strip'
                            width={170}
                            height={697}
                            className='relative z-[15] max-w-[120px] sm:max-w-[150px] md:max-w-[170px] w-full'
                        />
                    </RevealComponent>
                </div>
            </section>
        </section>
    );
};

export default MX3Features;
