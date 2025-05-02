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

const HowItWorksSlider: React.FC<HowItWorksSliderProps> = ({ data, autoPlayInterval = 10000 }) => {
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
        <div className="bg-[#333333] text-white rounded-lg overflow-hidden p-6 relative flex flex-col">
            {/* Title and Description */}
            <div className="mb-6 space-y-4 self-start">
                <h2 className="text-[140px] font-medium">How It Works</h2>
                <p className="text-gray-300 font-medium text-[40px]">{data.description}</p>
            </div>

            {/* Swiper Slider */}
            <div className="relative h-[500px] overflow-hidden w-full self-end flex flex-col">
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
                            <div className="relative w-full h-full flex flex-col items-end">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.content}
                                    width={1031}
                                    height={540}
                                    className="object-cover relative w-4/5 h-full rounded-md z-[15] brightness-75 shadow-lg"
                                />
                                {/* Content over image */}
                                <p className="absolute bottom-6 z-20 right-6 text-white text-[40px]">{item.content}</p>

                                {/* Big Index number */}
                                <div className="absolute -rotate-90 top-1/2 -translate-y-1/2 left-[1%] text-[340px] text-white z-[14] text-opacity-10 font-medium">
                                    {"0" + (slideIndex + 1)}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Progress Bars for Each Slide */}
                <div className="flex gap-2 mt-4 w-4/5 self-end">
                    {data.sliderData.map((_, index) => (
                        <div key={index} className="flex-1 h-[4px] bg-white rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-100"
                                style={{
                                    width:
                                        index < slideIndex
                                            ? '100%'
                                            : index === slideIndex
                                                ? `${progress}%`
                                                : '0%',
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
