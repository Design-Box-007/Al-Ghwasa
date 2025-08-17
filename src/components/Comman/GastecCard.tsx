"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "react-feather";
import React from "react";

interface GastecCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void; // optional button action
}

const GastecCard: React.FC<GastecCardProps> = ({
  image,
  title,
  subtitle,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full border border-gray-400 rounded-2xl p-4 flex flex-col gap-4 bg-gray-200"
    >
      {/* Image */}
      <div className="relative w-full rounded-3xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={3000}
          height={720}
          className="object-cover"
          priority
        />
      </div>

      {/* Text + Button */}
      <div className="flex flex-col md:flex-col gap-2.5 lg:flex-row lg:justify-between items-top">
        <div className="flex flex-col gap-6">
          <h1 className="font-dm-sans font-semibold md:text-5xl text-3xl leading-[1.302] tracking-[0.01em]">
            {title}
          </h1>
          <p>{subtitle}</p>
        </div>

        <div className="flex flex-col justify-between h-full gap-6">
          <p className="font-poppins font-semibold text-base leading-[1.5] tracking-[0.01em] max-w-md">
            {description}
          </p>
          <button
            onClick={onButtonClick}
            className="flex items-center justify-between gap-3 px-6 py-2 border border-gray-300 rounded-full bg-white hover:shadow-md transition w-[250px]"
          >
            <span className="text-gray-900 font-medium">{buttonText}</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GastecCard;
