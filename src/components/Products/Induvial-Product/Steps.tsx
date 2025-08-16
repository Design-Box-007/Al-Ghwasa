"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Steps = () => {
  const steps = [
    {
      image:
        "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100LS.jpg",
      caption: "Tube insertion",
      title: "Insert the Detector Tube",
      description:
        "Select the appropriate tube for your target gas and break off the tips",
    },
    {
      image:
        "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100LS.jpg",
      caption: "Pump handle action",
      title: "Draw the Sample",
      description:
        "Use the hand pump to pull the exact volume of air required.",
    },
    {
      image:
        "/images/Gastec3/gas-detection-specialized-sampling-kits/GV_100LS.jpg",
      caption: "Scale reading",
      title: "Read the Result",
      description:
        "Compare the color change against the printed scale for an immediate measurement.",
    },
  ];

  return (
    <section className="py-10 px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-2xl lg:text-5xl font-semibold mb-10">
          Three Simple Steps to Accurate Gas Detection
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl shadow-sm border-1 border-gray-400 hover:border-gray-800 p-6 text-center hover:shadow-md transition "
          >
            {/* Image placeholder */}

            <div className="relative w-full rounded-md flex items-center justify-center mb-5">
              {step.image ? (
                <Image
                  src={step.image}
                  alt={step.caption}
                  width={1000}
                  height={100}
                  className="object-contain rounded-md"
                />
              ) : (
                <span className="text-gray-500">{step.caption}</span>
              )}
            </div>

            {/* Content */}
            <div className="text-start">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[#0F2E53] font-semibold text-2xl mb-2">
                  {step.title}
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
