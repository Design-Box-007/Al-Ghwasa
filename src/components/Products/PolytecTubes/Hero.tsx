import RevealComponent from "@/components/Comman/RevealComponent";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="p-6 space-y-4 lg:mt-[1px] mt-[100px]">
      <RevealComponent
        direction="bottom"
        outerClass="w-full lg:h-[700px] h-[350px] md:h-[450px] relative overflow-hidden rounded-4xl p-8 flex items-end justify-start"
      >
        <p className="absolute px-10 lg:top-40 top-10 left-1/2 -translate-x-1/2 z-40 text-white text-2xl md:text-4xl lg:text-6xl lg:leading-[80px] text-center w-full">
          Accurate Gas Detection, Made Simple
        </p>
        <Image
          src={"/images/Gastec Polytec Tubes.jpg"}
          alt={"hero-img"}
          width={1360}
          height={600}
          className="w-full h-full absolute inset-0 object-center object-cover z-10"
        />
        <div className="absolute inset-0 bg-black/20 z-20"></div>

        <div className="flex flex-col md:flex-row md:justify-between items-end lg:gap-110 gap-3.5 py-4 z-40">
          <p className="relative z-40 font-inter text-base lg:text-xl text-center text-white">
            Gas Detector Corporation’s detector tubes are the trusted choice for
            industries worldwide, offering quick, cost-effective, and precise
            measurement of hazardous gases.
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

export default Hero;
