"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
// import ProductCTA from '../Comman/ProductCTA'
import { motion, AnimatePresence } from "framer-motion";
import images from "@/All-Image-Data/Data";

const productIds = [1, 2, 3];

type ProductInfo = {
  contentData: {
    title: string;
    subtitle: string;
  };
};

const products: Record<number, ProductInfo> = {
  // 1: { imgSrc: images.oilTesterT, link: "/frying-oil-tester", bgSrc: images.oilTesterL, name: 'Frying Oil Tester', className: 'bg-custom-green-1', textClass: 'text-custom-green-1' },
  // 2: { imgSrc: images.mx3T, link: "/mx-3", bgSrc: images.mx3L, name: 'Hydration Measurement', className: 'bg-custom-blue-1', textClass: 'text-custom-blue-1' },
  1: {
    contentData: {
      title:
        "Leading Gas Detection & Safety Solutions Provider in the UAE, GCC & Africa",
      subtitle:
        "Al Ghwasa is a regional leader in advanced gas detection and safety solutions, serving the UAE, Saudi Arabia, Kuwait, Oman, Bahrain, Iraq, and wider GCC and African markets. As the official dealer for Gastec products, we integrate world-class technologies with our expertise to deliver reliable and compliant solutions tailored to every industry.",
    },
  },
  2: {
    contentData: {
      title: "Safe Gas Detection Solutions for Every Industry",
      subtitle:
        "Al Ghwasa delivers advanced gas detection and safety systems across the region. As the official Gastec dealer, we supply authentic equipment with expert support to ensure safety, efficiency, and full compliance in critical operations.",
    },
  },
  3: {
    contentData: {
      title: "30+ Years of Trusted Leadership",
      subtitle:
        "With over three decades of experience, Al Ghwasa leads the market in gas detection and safety solutions. We combine proven expertise with genuine Gastec products to protect industries throughout the UAE, GCC, and Africa.",
    },
  },
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productIds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const productCardId = productIds[activeIndex];

  return (
    <header className="w-full bg-white pt-[150px] px-c-20 lg:p-c-20 relative">
      <div className="relative overflow-hidden rounded-[20px] h-90 lg:min-h-[700px] px-4 md:px-[5%] py-6 md:py-10 flex flex-col lg:flex-row items-end gap-8">
        {/* Background Image */}
        <Image
          src={images.GV110S}
          alt="home-hero"
          width={1360}
          height={683}
          className="absolute inset-0 brightness-[.4] z-10 object-cover object-center w-full h-full rounded-[20px]"
        />

        {/* Content Layer */}
        <div className="relative z-20 w-full text-white space-y-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-white pb-6 md:pb-10">
            {/* Animated Text Section */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full flex flex-col gap-4 text-center lg:text-left"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-5"
                >
                  <h1 className="text-2xl md:text-4xl lg:text-[50px] font-medium leading-tight tracking-wide">
                    {products[productCardId].contentData.title}
                  </h1>
                  <p className="text-base md:text-xl lg:text-2xl font-normal">
                    {products[productCardId].contentData.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
