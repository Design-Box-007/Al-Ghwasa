import images from '@/data/assets'
import Image from 'next/image'
import React from 'react'
import { FaLightbulb } from 'react-icons/fa'
import { FcGallery } from 'react-icons/fc'
import { ImImages } from 'react-icons/im'

const HomeProductApplications = () => {
    return (
        <section className='px-6 py-10'>
            <div className='w-full flex items-center justify-between'>
                <div className='space-y-8'>
                    <div className="flex gap-2 items-center">
                        <FaLightbulb className="text-custom-red-light" />
                        <p className="font-inter text-xl">
                            Product Applications
                        </p>
                    </div>

                    <p className='font-medium text-2xl'>
                        See Our Products in Action
                    </p>
                </div>
                <h1 className='font-medium text-[100px]'>
                    Experience Center
                </h1>
            </div>


            Full Experience Center

            Full Experience Center

            Full Experience Center

            <div className='h-screen space-y-4'>
                <div className='flex items-center h-1/2 gap-4'>
                    <div className='w-[60%] h-full rounded-xl overflow-hidden flex items-end relative p-c-10'>
                        <Image src={images.HomeHero1} alt='grid-image' className='absolute z-10 inset-0 w-full h-full object-cover' width={788} height={469} />
                        <div className='flex items-center justify-between relative z-20 w-full'>
                            <h5 className='font-semibold text-2xl text-white'>
                                Gas Detection & Workplace Safety
                            </h5>
                            <button className='bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl'>
                                <ImImages size={24} />
                                <span className='capitalize'>
                                    Full Experience Center
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='w-[40%] h-full rounded-xl overflow-hidden flex items-end relative p-c-10'>
                        <Image src={images.HomeHero1} alt='grid-image' className='absolute z-10 inset-0 w-full h-full object-cover' width={788} height={469} />
                        <div className='flex items-center justify-between relative z-20 w-full'>
                            <h5 className='font-semibold text-2xl text-white'>
                                MX3 Hydration Test
                            </h5>
                            <button className='bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl'>
                                <ImImages size={24} />
                                <span className='capitalize'>
                                    full experience center
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse items-center h-1/2 gap-4'>
                    <div className='w-[60%] h-full rounded-xl overflow-hidden flex items-end relative p-c-10'>
                        <Image src={images.HomeHero1} alt='grid-image' className='absolute z-10 inset-0 w-full h-full object-cover' width={788} height={469} />
                        <div className='flex items-center justify-between relative z-20 w-full'>
                            <h5 className='font-semibold text-2xl text-white'>Hydration monitoring in sports & workforce</h5>
                            <button className='bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl'>
                                <ImImages size={24} />
                                <span className='capitalize'>
                                    full experience center
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='w-[40%] h-full rounded-xl overflow-hidden flex items-end relative p-c-10'>
                        <Image src={images.HomeHero1} alt='grid-image' className='absolute z-10 inset-0 w-full h-full object-cover' width={788} height={469} />
                        <div className='flex items-center justify-between relative z-20 w-full'>
                            <h5 className='font-semibold text-2xl text-white'>Food Solutions</h5>
                            <button className='bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl'>
                                <ImImages size={24} />
                                <span className='capitalize'>
                                    full experience center
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProductApplications