"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from '@/data/assets';
import Image from 'next/image';

const AboutSwiperComponent: React.FC = () => {
    return (
        <div className="w-full h-[500px] flex justify-center">
            <Swiper
                modules={[Pagination, Autoplay]} 
                slidesPerView={1.5}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 3000, // 3 seconds per slide
                    disableOnInteraction: false, // Keeps autoplay after user interaction
                }}
                className="w-full h-full"
            >
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={1360} height={700} className='w-full h-full object-cover' src={images.AboutSliderHero1} alt={"hero"} />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={1360} height={700} className='w-full h-full object-cover' src={images.AboutSliderHero2} alt={"hero"} />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={1360} height={700} className='w-full h-full object-cover' src={images.AboutSliderHero3} alt={"hero"} />
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-xl">
                    <Image width={1360} height={700} className='w-full h-full object-cover' src={images.AboutSliderHero4} alt={"hero"} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AboutSwiperComponent;

