"use client";
import React from "react";
import Image from "next/image";

const Generation = () => {
  const steps = [
    {
      image: "/images/Gastec3/gas-generator-solutions/PD_1C_1.jpg",
      caption: "Tube insertion",
      title: "1. Permeation Tubes",
      description:
        "Gas diffuses through a temperature-controlled fluororesin membrane at a fixed rate, mixing with carrier gas to produce precise concentrations.",
    },
    {
      image: "/images/Gastec3/gas-generator-solutions/PD_1C_2.jpg",
      caption: "Pump handle action",
      title: "2. Diffusion Tubes",
      description:
        "For volatile liquids, a glass reservoir releases vapors through controlled diffusion, ideal for specialized calibration applications.",
    },
  ];

  return (
    <section className="py-10 px-6 lg:px-10">
      {/* Heading Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-10 lg:w-[600px] text-start leading-[40px] md:leading-[48px] lg:leading-[56px]">
          Two Generation Methods for Maximum Flexibility
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          Both methods ensure consistent and reliable gas{" "}
          <br className="hidden lg:block" /> delivery over time.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:gap-5 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-xl shadow-sm border border-gray-300 p-6 text-center hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative w-full flex items-center justify-center mb-5">
              {step.image ? (
                <Image
                  src={step.image}
                  alt={step.caption}
                  width={1000}
                  height={300}
                  className="object-contain rounded-md"
                />
              ) : (
                <span className="text-gray-500">{step.caption}</span>
              )}
            </div>

            {/* Content */}
            <div className="text-start">
              <h3 className="text-[#0F2E53] font-bold text-xl md:text-2xl mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Generation;
