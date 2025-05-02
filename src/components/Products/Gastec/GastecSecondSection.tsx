import images from '@/data/assets'
import { gastecFeatures } from '@/data/features'
import Image from 'next/image'
import React from 'react'
import { IFeature } from '@/types'
import Feature from '@/components/Comman/Feature'

const GastecSecondSection = () => {
    return (
        <section className='px-5 space-y-10'>
            <div className='space-y-6'>
                <h2 className='text-[120px] leading-[1.5] font-semibold'>
                    {"Reliable Gas Detection \nMade Simple"}
                </h2>
                <p className='text-2xl font-light'>
                    {"Gastec Gas Detector Tubes provide a fast, precise, and low-cost solution for detecting hazardous gases in various industrial environments. Unlike bulky electronic analyzers, these manual tubes require no power source, ensuring reliable operation anytime, anywhere. Whether you're in oil & gas, chemical plants, confined spaces, or environmental monitoring, Gastec’s cutting-edge gas detection system guarantees accurate measurements with minimal effort."}
                </p>
            </div>
            <div>
                <Image src={images.Gastec3} alt={'gastec-product'} width={1342} height={377} className='w-full' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {gastecFeatures.map((feature: IFeature, index: number) => (
                    <Feature feature={feature} key={index} />
                ))}
            </div>
        </section>
    )
}

export default GastecSecondSection


