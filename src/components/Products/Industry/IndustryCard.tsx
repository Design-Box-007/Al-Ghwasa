"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface IndustryCardProps {
  name: string;
  description: string;
  icon?: IconType; // React Icon component type
  details?: string[]; // bullet points for back side
  flipped?: boolean; // controlled flip state
  onClick?: () => void; // click handler
}



export default function IndustryCard({
  name,
  description,
  details,
  flipped = false,
  onClick,
}: IndustryCardProps) {
  return (
    <div className="w-full h-80 perspective cursor-pointer" onClick={onClick}>
      <motion.div
        className="relative w-full h-full transition-transform duration-700"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-gray-200 border border-[#C5C5C5] rounded-2xl p-6 flex flex-col items-center justify-center gap-5 backface-hidden">
           <h3 className="font-dm-sans font-semibold text-2xl text-[#0F2E53] text-center">
            {name}
          </h3>
          <p className="font-poppins font-medium text-sm text-secondary text-center">
            {description}
          </p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-black text-white rounded-2xl p-6 flex flex-col justify-center items-start backface-hidden rotateY-180">
          <h3 className="font-dm-sans font-semibold text-lg mb-4">{name}</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {details?.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
