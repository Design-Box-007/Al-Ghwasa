import Feature from '@/components/Comman/Feature';
import images from '@/data/assets';
import { mx3Features2 } from '@/data/features';
import { IFeature } from '@/types';
import Image from 'next/image';
import React from 'react'

interface TestKitProps {
    image: string;
    testKitName: string;
}

const TestKit: React.FC<TestKitProps> = ({ image, testKitName }) => {
    return (
        <div className='w-auto h-auto space-y-10 py-8 px-14 border border-[#B4B4B4] border-solid rounded-[30px]'>
            <Image src={image} alt={testKitName} width={540} height={91} />
            <h4 className='text-[40px] text-left font-medium'>{testKitName}</h4>
        </div>
    );
}

const MX3Features = () => {
    return (
        <section className='px-1'>
            <section className=' bg-[#F5F4F4] rounded-4xl space-y-[60px] py-[80px] px-5'>
                <h2 className='font-semibold text-[112px] text-[#FF842C]'>
                    {"MX3 Can Do Lot More..."}
                </h2>
                <div className='bg-[#EA721B] h-[2px] w-full'></div>
                <div className='flex flex-col lg:flex-row justify-between gap-5'>
                    <TestKit image={images.MX36} testKitName='Saliva Testing' />
                    <TestKit image={images.MX37} testKitName='Sweat Testing' />
                </div>
                <div className='space-y-6'>
                    <h2 className='font-semibold text-[60px]'>{"Fast, Lab-Quality Hydration Analysis"}</h2>
                    <p className='font-medium text-2xl'>{"Saliva testing offers a quick, convenient, and scientifically validated method to assess hydration levels, making it perfect for routine monitoring and health assessments."}</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-3.5'>
                    <div className='flex-1 bg-white py-7 px-[22px] rounded-4xl space-y-2.5'>
                        {mx3Features2.map((feature: IFeature, index: number) => (
                            <Feature feature={feature} key={index} featureClassName={{ titleClass: "text-[34px] font-medium" }} />
                        ))}
                    </div>
                    <div className='relative overflow-hidden rounded-4xl flex items-center justify-end flex-1'>
                        <Image src={images.MX38} alt='running man' width={672} height={1042} className='absolute inset-0 w-full h-full object-cover z-[14]' />
                        <Image src={images.MX39} alt='running man' width={170} height={697} className='relative z-[15]' />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default MX3Features


