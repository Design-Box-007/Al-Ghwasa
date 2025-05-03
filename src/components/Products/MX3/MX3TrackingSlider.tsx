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
        <section className="bg-white px-4 space-y-8 py-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                <h4 className="text-[48px] lg:text-[70px] font-medium flex-2 leading-tight">
                    Track Hydration Trends <br /> with Smart Data
                </h4>
                <p className="text-2xl font-normal flex-1">
                    Syncs effortlessly with the MX3 mobile app, allowing users to monitor hydration levels over time, track trends, and optimize performance.
                </p>
            </div>

            <div className="w-full mx-auto overflow-hidden pl-8">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="!overflow-visible"
                    slidesOffsetBefore={350}        // ensures no left gap
                    slidesOffsetAfter={0}       // creates space on the right to show 0.5 of the next slide
                    centeredSlides={false}        // ensures slides start from the left
                >
                    {trackingSliderImages.map((img, index) => (
                        <SwiperSlide key={index} className="flex justify-center h-full w-full">
                            <div className='w-full h-full overflow-hidden'>
                                <Image
                                    src={img}
                                    alt={`Tracking Image ${index + 1}`}
                                    width={404}
                                    height={801}
                                    className="rounded-xl w-full h-full object-cover object-center"
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
