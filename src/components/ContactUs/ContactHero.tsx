import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'

const ContactHero = () => {
    return (
        <header className="py-c-20 h-screen lg:min-h-[700px] lg:h-[800px] w-full bg-white">
            <div className="h-full flex flex-col lg:flex-row justify-end items-end p-6 md:p-c-20 relative overflow-hidden rounded-[20px]">
                {/* Background Image */}
                <Image
                    src={images.HomeHero1}
                    alt="home-hero"
                    fill
                    className="absolute inset-0 z-10 object-cover object-center rounded-[20px]"
                />

                {/* Hero Content */}
                <div className="relative z-20 text-white w-full space-y-1">
                    <p className='text-20px lg:text-[50px] font-medium'>
                        Connect with
                    </p>
                    <h1 className='font-medium text-[68px] md:text-[100px] lg:text-[250px] text-white leading-[1]'>
                        AL Ghwasa
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default ContactHero