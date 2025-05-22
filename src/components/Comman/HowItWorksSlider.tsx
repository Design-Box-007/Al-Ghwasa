'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { IHowItWorks } from '@/types';
import Image from 'next/image';

interface HowItWorksSliderProps {
    data: IHowItWorks;
    autoPlayInterval?: number; // in milliseconds
}

const HowItWorksSlider: React.FC<HowItWorksSliderProps> = ({ data, autoPlayInterval = 100000 }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + (100 / (autoPlayInterval / 100)); // Smooth filling
            });
        }, 100); // Update every 100ms

        return () => clearInterval(interval);
    }, [autoPlayInterval]);

    useEffect(() => {
        setProgress(0); // Reset current progress on slide change
    }, [slideIndex]);

    return (
        <div className="bg-[#333333] text-white rounded-lg overflow-hidden p-4 sm:p-6 relative flex flex-col gap-8">
            {/* Title and Description */}
            <div className="space-y-4 self-start">
                <h2 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] xl:text-[140px] font-medium leading-tight">
                    How It Works
                </h2>
                <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-gray-300 font-medium">
                    {data.description}
                </p>
            </div>

            {/* Swiper Slider */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden w-full flex flex-col">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    autoplay={{
                        delay: autoPlayInterval,
                        disableOnInteraction: false,
                    }}
                    loop
                    className="w-full h-full"
                    onSlideChange={(swiper) => {
                        setSlideIndex(swiper.realIndex);
                    }}
                >
                    {data.sliderData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-full flex items-end justify-end px-2 sm:px-6">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.content}
                                    width={1031}
                                    height={540}
                                    className="object-cover w-full sm:w-4/5 h-full rounded-md z-[15] brightness-75 shadow-lg"
                                />

                                {/* Content over image */}
                                <p className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-white">
                                    {item.content}
                                </p>

                                {/* Big Index Number */}
                                <div className="absolute -rotate-90 md:top-1/2 md:-translate-y-1/2 md:left-1 text-[100px] sm:text-[200px] md:text-[280px] lg:text-[340px] text-white z-[10] text-opacity-10 font-medium">
                                    {"0" + (slideIndex + 1)}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Progress Bars */}
                <div className="flex gap-2 mt-4 w-full sm:w-4/5 self-end px-2 sm:px-0">
                    {data.sliderData.map((_, index) => (
                        <div key={index} className="flex-1 h-[4px] bg-white rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-100"
                                style={{
                                    width:
                                        index < slideIndex
                                            ? "100%"
                                            : index === slideIndex
                                                ? `${progress}%`
                                                : "0%",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default HowItWorksSlider;
