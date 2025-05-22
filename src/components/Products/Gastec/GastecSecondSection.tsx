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
                <h2 className="text-4xl sm:text-5xl md:text-6xl leading-snug sm:leading-[1.2] lg:leading-[1.3] font-semibold whitespace-pre-line">
                    {"Reliable Gas Detection \nMade Simple"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-light">
                    {
                        "Al Ghwasa has been the factory-authorized distributor of GASTEC products in the Middle East for over a decade, known for competitive pricing and prompt service. The GASTEC Standard Detector Tube System, including the GV-100S/GV-110S pump and over 600 types of pre-calibrated tubes, enables fast, accurate on-site gas and vapor detection. These easy-to-use, long-shelf-life tubes offer quick results with fewer pump strokes and are certified by SEI and manufactured in an ISO-9001 facility, making them a reliable solution for air, soil, and water analysis."
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


