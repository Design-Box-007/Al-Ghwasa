"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from '@/data/assets';
import Image from 'next/image';

const AboutSwiperComponent: React.FC = () => {
    return (
        <div className="w-full h-[500px] flex justify-center">
            <Swiper
                modules={[Pagination]}
                slidesPerView={1.5} // Shows 0.5 previous & next slides
                spaceBetween={10} // Adjusts gap between slides
                centeredSlides={true} // Centers the active slide
                pagination={{ clickable: true }} // Enables pagination dots
                loop={true} // Enables infinite scrolling
                className="w-full h-full"
            >
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={674} height={425} className='w-full h-full object-cover' src={images.HomeHero1} alt={"hero"} />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={674} height={425} className='w-full h-full object-cover' src={images.HomeHero1} alt={"hero"} />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={674} height={425} className='w-full h-full object-cover' src={images.HomeHero1} alt={"hero"} />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={674} height={425} className='w-full h-full object-cover' src={images.HomeHero1} alt={"hero"} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AboutSwiperComponent;

