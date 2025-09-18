"use client";
import Image from "next/image";
import React from "react";
import RevealComponent from "../Comman/RevealComponent";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";

const heroData: Record<
  string,
  { title: string; description: string; img: string }
> = {
  "Specialized Sampling Kits": {
    title: "Specialized Sampling Kits for Precise & Safe Gas Measurement",
    description:
      "Engineered for challenging environments, these kits ensure accurate, reliable, and safe gas sampling across industrial applications.",
    img: "/images/Gastec3/gas-detection-specialized-sampling-kits/GHS_8AT_EX_4.jpg",
  },
  "Gas Generator Solutions": {
    title: "High-Performance Gas Generators",
    description:
      "Delivering consistent and reliable gas generation solutions for industrial and laboratory use.",
    img: "/images/Gastec3/gas-generator-solutions/PD_1C_1.jpg",
  },
  Accessories: {
    title: "Calibration Equipment & Accessories",
    description:
      "Ensure accuracy and reliability with our comprehensive calibration tools and accessories.",
    img: "/images/Gastec3/gas-detection-accessories/380_1.jpg",
  },
  "Gas Detection Passive Monitoring": {
    title: "Gas Detection Passive Monitoring Solutions",
    description:
      "Passive monitoring for long-term and efficient gas detection across diverse applications.",
    img: "/images/Gaslit/21.png",
  },
  "Gas Detector Tube System": {
    title: "Gas Detector Tube System",
    description:
      "Passive monitoring for long-term and efficient gas detection across diverse applications.",
    img: "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100S.jpg",
  },
};

const GalleryHero = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const { title, description, img } =
    (category && heroData[category]) || heroData["Specialized Sampling Kits"];
  return (
    <header className="p-6 space-y-4 lg:mt-[1px] mt-[140px]">
      <RevealComponent
        direction="bottom"
        outerClass="w-full lg:h-[700px] h-[350px] md:h-[450px] relative overflow-hidden rounded-4xl p-8 flex items-end justify-start"
      >
        <p className="absolute px-10 lg:top-40 top-10 left-1/2 -translate-x-1/2 z-40 text-white text-2xl md:text-4xl lg:text-6xl lg:leading-[80px] text-center w-full">
          {title}
        </p>
        <Image
          src={img}
          alt={"hero-img"}
          width={1360}
          height={600}
          className="w-full h-full absolute inset-0 object-center object-cover z-10"
        />
        <div className="absolute inset-0 bg-black/40 z-20"></div>

        <div className="flex flex-col md:flex-row md:justify-between items-end lg:gap-110 gap-3.5 py-4 z-40">
          <p className="relative z-40 font-inter text-base lg:text-xl text-center text-white">
            {description}
          </p>

          {/* <Link
            href="/categories"
            className="group relative inline-flex items-center rounded-full bg-white text-black px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium shadow-md hover:bg-gray-100 z-40 "
          >
            Explore our Products
            <span className="ml-3 h-7 w-7 rounded-full bg-black text-white grid place-items-center text-xs">
              →
            </span>
          </Link> */}
        </div>
      </RevealComponent>
    </header>
  );
};

export default GalleryHero;
