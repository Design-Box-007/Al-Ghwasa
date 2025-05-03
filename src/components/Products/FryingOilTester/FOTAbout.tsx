'use client'

import Feature from '@/components/Comman/Feature'
import images from '@/data/assets'
import { fryingOilTesterFeatures } from '@/data/features'
import { IFeature } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const FOTAbout = () => {
    return (
        <section className='px-5 space-y-10'>
            <div className='space-y-6'>
                <h2 className='text-[120px] leading-[1.5] font-semibold'>
                    {"Advanced Testing"}
                </h2>
                <p className='text-2xl font-light'>
                    {"for Safer, Cost-Effective Cooking Oil Management"}
                </p>
            </div>
            <div>
                <Image src={images.OilTester05} alt={'gastec-product'} width={1342} height={377} className='w-full' />
            </div>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={20}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {fryingOilTesterFeatures.map((feature: IFeature, index: number) => (
                    <SwiperSlide key={index}>
                        <Feature
                            feature={feature}
                            featureClassName={{
                                featureClass: 'bg-[#FAF9F9] py-[30px] px-[20px]',
                                titleClass: 'text-[#EB1D1D]',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default FOTAbout

