"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const AboutSwiperComponent: React.FC = () => {
  const sliderImages = [
    "/images/All-Product-Images/About Us/about1.jpg",
    "/images/All-Product-Images/About Us/about2.jpg",
    "/images/All-Product-Images/About Us/about3.jpg",
    "/images/All-Product-Images/About Us/about4.jpg",
    "/images/All-Product-Images/About Us/about5.jpg",
   ];

  return (
    <div className="lg:w-full lg:h-[500px] flex justify-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1.5}
        spaceBetween={10}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="lg:w-full lg:h-full"
      >
        {sliderImages.map((src, index) => (
          <SwiperSlide key={index} className="overflow-hidden rounded-xl">
            <Image
              width={1360}
              height={700}
              className="lg:w-full lg:h-full h-[300px] md:h-[400px] object-cover"
              src={src}
              alt={`hero-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSwiperComponent;
