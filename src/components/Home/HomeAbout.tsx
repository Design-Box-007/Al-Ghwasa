"use client";

import Image from "next/image";
import React from "react";
import images from "@/data/assets";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";
import Link from "next/link";
import RevealComponent from "../Comman/RevealComponent";

const HomeAbout = () => {
  return (
    <section className="space-y-6 p-6">
      {/* Title */}
      <RevealComponent
        backgroundClass="bg-background"
        outerClass="text-lg sm:text-xl font-medium text-secondary w-full flex flex-row justify-between"
        direction="right"
      >
        <div className="flex gap-2 items-center">
          <FaLightbulb className="text-custom-red-light" />
          <p className="font-inter text-xl">About Al Ghwasa</p>
        </div>
      </RevealComponent>

      {/* Image + Content Side by Side */}
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* Left: Image */}
        <RevealComponent
          backgroundClass="bg-background"
          outerClass="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl"
          direction="left"
        >
          <Image
            loading="lazy"
            src={images.HomeAbout}
            alt="about"
            width={961}
            height={641}
            className="w-full h-full object-cover rounded-2xl"
          />
        </RevealComponent>

        {/* Right: Text */}
        <div className="flex flex-col justify-center flex-1 lg:px-4 lg:gap-40 gap-10">
          {/* Heading + Paragraph + Tags */}
          <div className="flex flex-col gap-5">
            <RevealComponent
              outerClass="font-medium text-3xl lg:text-[50px] capitalize"
              backgroundClass="bg-background"
              direction="right"
            >
              Over 30 Years of Excellence in industrial and marine
            </RevealComponent>

            <RevealComponent direction="bottom">
              <p className="md:text-xl font-light text-black">
                {
                  "With over 30 years of excellence in supplying high-quality industrial and marine equipment, Al Ghwasa has earned a trusted reputation across the Middle East for reliability, innovation, and technical expertise."
                }
              </p>
            </RevealComponent>

            <RevealComponent direction="bottom">
              <div className="flex flex-wrap gap-3">
                <button className="border px-4 py-1 rounded-3xl">
                  Reliability
                </button>
                <button className="border px-4 py-1 rounded-3xl">
                  Innovation
                </button>
                <button className="border px-4 py-1 rounded-3xl">
                  Customer Satisfaction
                </button>
              </div>
            </RevealComponent>
          </div>

          {/* Learn More */}
             <Link
              href="/about"
              passHref
              className="text-sm sm:text-base md:text-2xl font-medium text-custom-red-light"
            >
          <RevealComponent outerClass="flex flex-row items-center justify-between py-2 border-b border-b-custom-red-light">
         
              Learn More About us
           
            <span className="bg-transparent rounded-full p-1 sm:p-2">
              <FaArrowRight className="text-custom-red-light" />
            </span>
          </RevealComponent>
           </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
