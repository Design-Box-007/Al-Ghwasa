import Image from "next/image";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
 import RevealComponent from "../Comman/RevealComponent";
import images from "@/data/assets";

const HomeProductApplications = () => {
  return (
    <section className="md:px-6 px-4 py-10">
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
              src={images.ExperienceCenterv1}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                Technicians using Gastec detectors in industrial settings
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
              src={images.ExperienceCenterv2}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                Signs or setups showing adherence to gas safety regulations
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
              src={images.ExperienceCenterv3}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                Detectors in outdoor settings like factories, plants, or chemical storage areas
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
              src={images.ExperienceCenterv4}
              alt="grid-image"
              className="absolute z-10 inset-0 brightness-[.9] w-full h-full object-cover"
              width={788}
              height={469}
            />
            <div className="flex items-center justify-between relative z-20 w-full">
              <h5 className="font-semibold text-xl lg:text-2xl text-white">
                Action shots of emergency gas detection in real scenarios
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
