'use client';

import images from '@/data/assets';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const trackingSliderImages: string[] = [
    images.MX33,
    images.MX311,
    images.MX310,
    images.MX312,
];

const MX3TrackingSlider = () => {
    return (
        <section className="bg-white px-3 sm:px-4 md:px-6 space-y-6 sm:space-y-8 py-10 sm:py-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 sm:gap-8">
                <h4 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[70px] font-medium flex-2 leading-tight">
                    Track Hydration Trends <br className="hidden sm:block" /> with Smart Data
                </h4>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal flex-1">
                    Syncs effortlessly with the MX3 mobile app, allowing users to monitor hydration levels over time, track trends, and optimize performance.
                </p>
            </div>

            <div className="w-full mx-auto overflow-hidden pl-0 sm:pl-4 md:pl-6 lg:pl-8">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2.2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="!overflow-visible"
                    slidesOffsetBefore={0}
                    slidesOffsetAfter={0}
                    centeredSlides={false}
                >
                    {trackingSliderImages.map((img, index) => (
                        <SwiperSlide key={index} className="flex justify-center h-full w-full">
                            <div className="w-full h-full overflow-hidden max-w-[280px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[404px]">
                                <Image
                                    src={img}
                                    alt={`Tracking Image ${index + 1}`}
                                    width={404}
                                    height={801}
                                    className="rounded-xl w-full h-auto object-cover object-center"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MX3TrackingSlider;
