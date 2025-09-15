import Image from "next/image";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
 import RevealComponent from "../Comman/RevealComponent";

const HomeProductApplications = () => {
  return (
    <section className="px-6 py-10">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start gap-6">
        <div className="space-y-2">
          <RevealComponent outerClass="flex gap-2 items-center">
            <FaLightbulb className="text-custom-red-light" />
            <p className="font-inter text-xl">Product Applications</p>
          </RevealComponent>
          <RevealComponent direction="bottom">
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-medium leading-tight">
              Experience Center
            </h1>
          </RevealComponent>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[75vh]">
          <RevealComponent outerClass="w-full rounded-xl overflow-hidden flex items-end relative p-c-10 min-h-[250px]">
            <Image
              src={"/images/Home/Experience-Center-1.png"}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                Gas Detection & Workplace Safety
              </h5>
              {/* <button className="bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl text-sm">
                <ImImages size={20} />
                <span className="capitalize">Full Experience Center</span>
              </button> */}
            </div>
          </RevealComponent>

          <RevealComponent
            direction="bottom"
            outerClass="lg:w-[60%] w-full rounded-xl overflow-hidden flex items-end relative p-c-10 min-h-[250px]"
          >
            <Image
              src={"/images/Home/Experience-Center-2.png"}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                GASTEC Calibration Kit
              </h5>
              {/* <button className="bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl text-sm">
                <ImImages size={20} />
                <span className="capitalize">Full Experience Center</span>
              </button> */}
            </div>
          </RevealComponent>
        </div>

        {/* Second Row (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse gap-4 h-auto lg:h-[50vh]">
          <RevealComponent
            direction="left"
            outerClass="lg:w-[60%] w-full rounded-xl overflow-hidden flex items-end relative p-c-10 min-h-[250px]"
          >
            <Image
              src={"/images/Home/Experience-Center-4.png"}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                GHS-8AT EX Monitor
              </h5>
              {/* <button className="bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl text-sm">
                <ImImages size={20} />
                <span className="capitalize">Full Experience Center</span>
              </button> */}
            </div>
          </RevealComponent>

          <RevealComponent
            direction="top"
            outerClass="lg:w-[40%] w-full rounded-xl overflow-hidden flex items-end relative p-c-10 min-h-[250px]"
          >
            <Image
              src={"/images/Home/Experience-Center-3.png"}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                GHS-501FT Fit Tester
              </h5>
              {/* <button className="bg-white flex w-fit px-c-10 py-1.5 gap-2 rounded-xl text-sm">
                <ImImages size={20} />
                <span className="capitalize">Full Experience Center</span>
              </button> */}
            </div>
          </RevealComponent>
        </div>
      </div>
    </section>
  );
};

export default HomeProductApplications;
