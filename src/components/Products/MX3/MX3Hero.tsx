import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const MX3Hero = () => {
    return (
        <header className="py-4 h-screen lg:min-h-[700px] lg:h-[800px] w-full bg-white lg:pb-30">
            <div className="h-full flex flex-col lg:flex-row items-center justify-center p-6 md:p-c-20 relative overflow-hidden rounded-[20px]">
                {/* Background Image */}
                <Image
                    src={images.MX34}
                    alt="home-hero"
                    width={1360}
                    height={683}
                    className="absolute h-full w-full inset-0 z-10 object-cover object-center rounded-[20px] brightness-90"
                />

                {/* Hero Content */}
                <div className="relative z-20 text-white w-full space-y-6">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[84px] font-medium text-center">
                        {"Advanced Hydration Testing"} <br />
                        {"for Precision and Performance"}
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default MX3Hero
