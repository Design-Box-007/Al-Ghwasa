"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  title: string;
}

const AirborneDoseTracking: React.FC = () => {
  const features: Feature[] = [
    { title: "No power or equipment required" },
    { title: "Recognizable direct-read scale" },
    { title: "Wearable and accurate" },
  ];

  return (
    <section className="mx-10 mt-[150px] flex flex-col gap-10">

      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 items-end lg:items-end">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:w-[600px] text-start leading-[40px] md:leading-[48px] lg:leading-[56px]">
          Two Generation Methods for Maximum Flexibility
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          Both methods ensure consistent and reliable gas{" "}
          <br className="hidden lg:block" /> delivery over time.
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        <Image
        alt="image"
        src={"/images/Gastec3/gas-detection-passive-monitoring/Dositube holder.jpg"}
        width={1024}
        height={720}
        className="w-full rounded-[20px]"/>
       
      </div>

        <div className=" w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[rgba(218,218,218,0.9)] border-2 border-gray-300 hover:border-gray-800 rounded-lg px-6 py-15 text-center shadow-sm hover:shadow-md transition"
          >
            <p className="text-[#0F2E53] text-3xl font-bold">{f.title}</p>
          </motion.div>
        ))}
      </div>

      

      {/* Features */}
     
    </section>
  );
};

export default AirborneDoseTracking;
