import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const OurProductHero = () => {
    return (
        <header className='flex gap-3.5'>
            <div className='flex-1 space-y-6'>
                <h2 className='font-medium text-6xl leading-[1.5]'>
                    Innovative Solutions for Every Industry Need
                </h2>
                <p className='font-normal text-base'>{"Discover Al Ghwasa’s extensive range of high-quality products, designed to meet the evolving needs of industrials"}</p>
                <div className='flex gap-4'>
                    <div className='w-1/2 h-full rounded-lg overflow-hidden'>
                        <Image src={images.Thermometer} alt='placeholder' className='w-full h-full object-center object-cover' width={170} height={148} />
                    </div>
                    <div className='w-1/2 h-full rounded-lg overflow-hidden'>
                        <Image src={images.Thermometer} alt='placeholder' className='w-full h-full object-center object-cover' width={170} height={148} />
                    </div>
                </div>
            </div>
            <div className='flex gap-2 self-end pb-2'>
                <button className='rounded-full size-5 bg-custom-blue-1 flex justify-center items-center'>
                    <FaArrowLeft color='white' size={11} />
                </button>
                <button className='rounded-full size-5 bg-custom-blue-1 flex justify-center items-center'>
                    <FaArrowRight color='white' size={11} />
                </button>
            </div>
            <div className='flex-1 w-[287] h-full rounded-lg'>
                <Image src={images.Thermometer} className='w-full h-full object-cover object-center' width={287} height={286} alt='image' />
            </div>
        </header>
    )
}

export default OurProductHero