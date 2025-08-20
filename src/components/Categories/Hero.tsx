"use client";
import Image from "next/image";
import React from "react";
import RevealComponent from "../Comman/RevealComponent";
import Link from "next/link";

const GalleryHero = () => {
  return (
    <header className="p-6 space-y-4 mt-[150px]">
      <RevealComponent
        direction="bottom"
        outerClass="w-full h-[1000px] relative overflow-hidden rounded-4xl p-8 flex items-end justify-start"
      >
        <p className="absolute top-20 left-1/2 -translate-x-1/2 z-40 text-white text-4xl lg:text-7xl lg:leading-[80px] text-center w-full">
          Specialized Sampling Kits for <br /> Precise & Safe Gas Measurement
        </p>
        <Image
          src={
            "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg"
          }
          alt={"hero-img"}
          width={1360}
          height={600}
          className="w-full h-full absolute inset-0 object-center object-cover z-10"
        />
        <div className="absolute inset-0 bg-black/30 z-20"></div>

        <div className="flex flex-col md:flex-row md:justify-between items-end lg:gap-110 gap-3.5 py-4 z-40">
          <p className="relative z-40 font-inter text-base lg:text-xl text-white">
            Engineered for challenging environments, these kits ensure accurate,
            reliable, <br /> and safe gas sampling across industrial applications.
          </p>

           <Link
                href="/products"
                className="group relative inline-flex items-center rounded-full bg-white text-black px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium shadow-md hover:bg-gray-100 z-40 "
              >
                Explore our Products
                <span className="ml-3 h-7 w-7 rounded-full bg-black text-white grid place-items-center text-xs">→</span>
              </Link>
        </div>
      </RevealComponent>
    </header>
  );
};

export default GalleryHero;
