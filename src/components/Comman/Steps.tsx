"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StepCardProps {
  title: string;
  description: string;
  caption?: string;
  image?: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, description, caption, image }) => {
  return (
    <div className="flex flex-col rounded-xl shadow-sm border border-gray-300 hover:border-gray-800 p-6 text-center hover:shadow-md transition">
      {/* Image Section */}
      <div className="relative w-full rounded-md flex items-center justify-center mb-5">
        {image ? (
          <Image
            src={image}
            alt={caption || title}
            width={1024}
            height={720}
            className="object-contain rounded-md"
          />
        ) : (
          <span className="text-gray-500">{caption}</span>
        )}
      </div>

      {/* Content Section */}
      <div className="text-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#0F2E53] font-semibold text-2xl mb-2">{title}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StepCard;
