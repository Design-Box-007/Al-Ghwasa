"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealComponent from "@/components/Comman/RevealComponent";
import images from "@/data/assets";

const TubeImageComponent = () => {
  const [startRotate, setStartRotate] = useState(false);

  const handleViewportEnter = () => {
    // Start rotation 3 seconds after entering viewport
    setTimeout(() => {
      setStartRotate(true);
    }, 3000);
  };

  return (
    <div className="absolute z-[20] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ rotate: 270 }}
        animate={{ rotate: startRotate ? 450 : 270 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
        onViewportEnter={handleViewportEnter} // ✅ delayed 3s
      >
        <RevealComponent direction="left" outerClass="origin-center w-fit h-fit">
          <Image
            src={images.Gastec2A}
            alt="gastec-hero-obj"
            width={500}
            height={200}
            className="object-contain md:w-40 lg:w-50 w-20 h-auto rotate-180"
          />
        </RevealComponent>
      </motion.div>
    </div>
  );
};

const GastecHero = () => {
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <header className="relative rounded-3xl h-[500px] sm:h-[650px] lg:h-[750px] px-4 sm:px-6 md:px-10 pt-[20px] md:pt-11 overflow-hidden">
      <TubeImageComponent />
    </header>
  );
};

export default GastecHero;
