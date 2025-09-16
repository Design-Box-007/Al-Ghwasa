"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealComponent from "@/components/Comman/RevealComponent";
import images from "@/data/assets";

// TubeImageComponent: Reveal → THEN Rotate
const TubeImageComponent = () => {
  const [startRotate, setStartRotate] = useState(false);

  useEffect(() => {
    // Wait until RevealComponent is done (about 1s), then rotate
    const timer = setTimeout(() => {
      setStartRotate(true);
    }, 3000); // ⏳ adjust if your RevealComponent is slower/faster

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute z-[20] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ rotate: 270 }}
        whileInView={{ rotate: startRotate ? 405 : 270 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <RevealComponent
          direction="left"
          outerClass="origin-center w-fit h-fit"
        >
          <Image
            src={images.Gastec2A}
            alt="gastec-hero-obj"
            width={1000}
            height={238}
            className="object-contain w-[170px] h-fit rotate-180"
          />
        </RevealComponent>
      </motion.div>
    </div>
  );
};

// Final Hero Section (only tube image animation)
const GastecHero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <header className="relative rounded-3xl lg:h-[750px] px-4 sm:px-6 md:px-10 pt-[20px] md:pt-11 overflow-hidden">
      <TubeImageComponent />
    </header>
  );
};

export default GastecHero;
