"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealComponent from "@/components/Comman/RevealComponent";
import images from "@/data/assets";

interface TubeImageAnimationProps {
  src?: string;          // custom image if needed
  size?: number;         // width size
  rotateFrom?: number;   // initial rotation
  rotateTo?: number;     // final rotation
  delay?: number;        // delay before rotate starts (ms)
}

const TubeImageAnimation: React.FC<TubeImageAnimationProps> = ({
  src = images.Gastec2A,
  size = 170,
  rotateFrom = 270,
  rotateTo = 405,
  delay = 2600,
}) => {
  const [startRotate, setStartRotate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartRotate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ rotate: rotateFrom }}
        animate={{ rotate: startRotate ? rotateTo : rotateFrom }}
        transition={{ duration: 1 }}
      >
        <RevealComponent direction="left" outerClass="origin-center w-fit h-fit">
          <Image
            src={src}
            alt="tube-animation"
            width={1000}
            height={238}
            className="object-contain"
            style={{ width: size, height: "auto" }}
          />
        </RevealComponent>
      </motion.div>
    </div>
  );
};

export default TubeImageAnimation;
