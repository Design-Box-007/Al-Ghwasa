import images from '@/data/assets'
import { gastecFeatures } from '@/data/features'
import Image from 'next/image'
import React from 'react'
import { IFeature } from '@/types'
import Feature from '@/components/Comman/Feature'

const GastecSecondSection = () => {
    return (
        <section className="px-4 sm:px-6 space-y-10 py-12">
            <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] xl:text-[120px] leading-snug sm:leading-[1.2] lg:leading-[1.3] font-semibold whitespace-pre-line">
                    {"Reliable Gas Detection \nMade Simple"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light">
                    {
                        "Gastec Gas Detector Tubes provide a fast, precise, and low-cost solution for detecting hazardous gases in various industrial environments. Unlike bulky electronic analyzers, these manual tubes require no power source, ensuring reliable operation anytime, anywhere. Whether you're in oil & gas, chemical plants, confined spaces, or environmental monitoring, Gastec’s cutting-edge gas detection system guarantees accurate measurements with minimal effort."
                    }
                </p>
            </div>

            <div>
                <Image
                    src={images.Gastec3}
                    alt="gastec-product"
                    width={1342}
                    height={377}
                    className="w-full h-auto object-contain"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gastecFeatures.map((feature: IFeature, index: number) => (
                    <Feature feature={feature} key={index} />
                ))}
            </div>
        </section>

    )
}

export default GastecSecondSection


