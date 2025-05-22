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
        <section className="px-5 space-y-10 w-full mx-auto">
            <div className="space-y-4 sm:space-y-6">
                <h2 className="text-[48px] sm:text-[80px] leading-[1.3] sm:leading-[1.4] font-semibold max-w-full">
                    Advanced Testing
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-light max-w-md sm:max-w-lg">
                    for Safer, Cost-Effective Cooking Oil Management
                </p>
            </div>

            <div>
                <Image
                    src={images.OilTester05}
                    alt="gastec-product"
                    width={1342}
                    height={377}
                    className="w-full h-auto object-contain"
                    priority
                />
            </div>

            <Swiper
                slidesPerView={1.5}
                spaceBetween={15}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                }}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {fryingOilTesterFeatures.map((feature: IFeature, index: number) => (
                    <SwiperSlide key={index} className="max-w-[320px] sm:max-w-none">
                        <Feature
                            feature={feature}
                            featureClassName={{
                                featureClass: 'bg-[#FAF9F9] py-[30px] px-[20px] rounded-lg shadow-sm',
                                titleClass: 'text-[#EB1D1D] font-semibold',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default FOTAbout

