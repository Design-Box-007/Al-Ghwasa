"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import images from "@/data/assets";

const HeroSection: React.FC = () => {
  return (
    <header className="relative lg:min-h-[600px] rounded-3xl overflow-hidden mt-[140px] lg:mt-30 mx-4 sm:mx-6 lg:mx-8 h-[400px] md:h-[600px]">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0F2D46] via-[#214265] to-[#121213]" />

      {/* Detector tubes image anchored to bottom center */}
      <div className="absolute inset-x-0 bottom-0 z-[1] flex justify-center pointer-events-none select-none">
        <Image
          src={images.DetectionTubeHero}
          alt="GASTEC detector tubes"
          width={1200}
          height={600}
          className="w-full max-w-[980px] md:max-w-[1040px] lg:max-w-[1080px] xl:max-w-[700px] object-contain object-bottom"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 h-full">
        <div className="w-full flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white font-semibold tracking-tight text-[25px] lg:text-6xl md:text-[45px] leading-[1.1]"
          >
            GASTEC Detector Tubes for Fast,
            <br className="hidden sm:block" /> Accurate Results
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6"
          >
            {/* <Link
              href="/gastec/product-data"
              className="group inline-flex items-center justify-between gap-4 rounded-full bg-white text-[#0F2F4D] lg:px-6 px-3 md:px-8 py-2 md:h-12 font-medium shadow-md hover:bg-gray-50 transition-colors"
            >
              <span className="text-base md:text-lg">Browse Detector Tubes</span>
              <span className="grid place-items-center w-8 h-8 rounded-full bg-[#0F2F4D] text-white transition-transform group-hover:scale-105">
                <FaArrowRight size={14} />
              </span>
            </Link> */}
          </motion.div>
        </div>
      </div>

      {/* Bottom corner captions overlaid on the image */}
      <div className="absolute inset-x-0 bottom-25 px-6 z-[3]">
        <div className="flex items-center justify-between text-white text-sm sm:text-base font-medium max-w-[1360px] mx-auto">
          <p className="max-w-[260px] leading-tight">
            Measure Over 500 Gases
            <br />
            with Proven GASTEC Precision
          </p>
          <p className="text-right max-w-[260px] leading-tight">
            Reliable Gas Detection,
            <br />
            Wherever You Need It
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
