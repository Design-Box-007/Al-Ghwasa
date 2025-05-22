import Feature from '@/components/Comman/Feature';
import images from '@/data/assets';
import { mx3Features } from '@/data/features';
import { FeatureClassName, IFeature } from '@/types';
import Image from 'next/image';
import React from 'react';

const MX3About = () => {
    const mx3FeatureClass: FeatureClassName = {
        iconClass: "text-custom-blue-1",
        titleClass: "text-[34px] text-[#EA721B]",
        contentClass: "font-normal",
        featureClass: "py-[30px] px-5 space-y-[10px] rounded-[40px] bg-[#F4F4F4] w-full lg:w-[445px] lg:h-[410px] flex flex-col items-start justify-center"
    };

    const features1: IFeature[] = mx3Features.slice(0, 3);
    const features2: IFeature[] = mx3Features.slice(3, 7);

    return (
        <section className='bg-white px-4 space-y-8'>
            <div className='space-y-6'>
                <div className='flex flex-col lg:flex-row justify-between items-start gap-6'>
                    <h4 className='text-[36px] sm:text-[48px] md:text-[60px] lg:text-[76px] font-medium flex-1 leading-tight'>
                        {"Market’s Leading"}
                    </h4>
                    <p className='text-base sm:text-lg md:text-xl lg:text-xl font-light flex-1'>
                        {"The MX3 Hydration Testing System delivers real-time, non-invasive hydration analysis, providing fast, lab-quality results for professionals in sports, industrial environments, and healthcare."}
                    </p>
                </div>
                <h3 className='text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-medium leading-tight'>
                    {"Sweat & Saliva Hydration Tester"}
                </h3>
            </div>

            <div className='bg-[#EA721B] h-[2px] w-full'></div>

            <div className='flex flex-col lg:flex-row gap-8 lg:gap-[67px] py-8 items-center lg:items-stretch'>
                <div className='space-y-[26px] w-full flex flex-col items-center'>
                    {features1.map((feature, index) => (
                        <Feature key={index} feature={feature} featureClassName={mx3FeatureClass} />
                    ))}
                </div>

                <Image
                    src={images.MX35}
                    alt='mx-3-thermometer'
                    width={230}
                    height={949}
                    className='object-contain w-[336px] h-full'
                />

                <div className='space-y-[26px] w-full flex flex-col items-center'>
                    {features2.map((feature, index) => (
                        <Feature key={index} feature={feature} featureClassName={mx3FeatureClass} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MX3About;
