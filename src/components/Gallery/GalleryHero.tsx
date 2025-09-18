"use client";

import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import RevealComponent from "../Comman/RevealComponent";
import Link from "next/link";
import images from "@/data/assets";

const GalleryHero = () => {
  return (
    <header className="py-5 lg:px-10 p-5">
      <RevealComponent
        direction="bottom"
        outerClass="flex flex-col lg:flex-row items-start justify-between lg:items-center py-4 gap-3"
      >
        <h1 className="text-3xl lg:text-5xl font-semibold">
          Experience Innovation in Action
        </h1>
        <p className="text-lg font-light">
          Experience the Power of Solutions in Action
        </p>
      </RevealComponent>

      <RevealComponent
        direction="bottom"
        outerClass="w-full lg:h-[500px] h-[400px] relative overflow-hidden rounded-4xl p-8 flex items-end justify-start"
      >
        {/* Background Image */}
        <Image
          src={images.ExperienceCenterv4}
          alt={"hero-img"}
          width={1360}
          height={600}
          className="w-full h-full absolute inset-0 object-center object-cover z-10 brightness-85"
        />

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-x-0 bottom-0 lg:h-40 h-60 bg-gradient-to-t from-[#143C66] to-transparent z-20"></div>

        {/* Content */}
        <div className="relative z-30 flex flex-col lg:flex-row justify-between items-center w-full lg:gap-10 gap-3">
          <p className="font-inter text-base lg:text-xl text-white">
            Leading Gas Detection & Safety Solutions Provider in the UAE, GCC & Africa
          </p>

          {/* Explore Products Button in One Line */}
          <button className="flex items-center gap-2 font-bold whitespace-nowrap bg-white p-2.5 rounded-3xl">
            <Link href={"/categories"}>Explore our Products</Link>
            <span className="border border-white rounded-full p-1 flex items-center justify-center">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </RevealComponent>

      {/* Navigation Links */}
      {/* <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4">
                <RevealComponent outerClass="flex flex-wrap gap-3 font-semibold">
                    <ProductCTA link="/gastec" name="Gastec" imgSrc={images.gastecSmall} className="text-custom-green-1" />
                    <ProductCTA link="/mx-3" name="MX3" imgSrc={images.mx3Small} className="text-custom-green-1" />
                    <ProductCTA link="/frying-oil-tester" name="Oil Tester" imgSrc={images.fryingOilTesterSmall} className="text-custom-red-light" />
                </RevealComponent>
            </div> */}
    </header>
  );
};

export default GalleryHero;
