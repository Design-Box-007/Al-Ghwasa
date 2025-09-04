"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RevealComponent from "@/components/Comman/RevealComponent";
import { useWindowWidth } from "@/hooks/useWindowSize";

// 🔹 GastecText (Optional)
const GastecText = ({ text = "GASTEC" }: { text?: string }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden lg:block absolute w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <RevealComponent direction="left" outerClass="w-fit h-fit">
        <motion.h2
          className="w-fit uppercase text-9xl font-medium text-custom-blue-1"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: fadeOut ? 0 : 1, y: fadeOut ? 100 : 0 }}
          transition={{ duration: 1 }}
        >
          {text}
        </motion.h2>
      </RevealComponent>
    </div>
  );
};

// 🔹 TubeImageComponent (Optional)
const TubeImageComponent = ({ src }: { src: string }) => {
  const [startRotate, setStartRotate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartRotate(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hidden lg:block absolute z-[20] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ rotate: 270 }}
        animate={{ rotate: startRotate ? 405 : 270 }}
        transition={{ duration: 1 }}
      >
        <RevealComponent direction="left" outerClass="origin-center w-full h-full">
          <Image
            src={src}
            alt="hero-object"
            width={1000}
            height={238}
            className="object-contain h-full w-full"
          />
        </RevealComponent>
      </motion.div>
    </div>
  );
};

// 🔹 GlideText (Optional)
const GlideText = ({ text }: { text: string }) => (
  <RevealComponent outerClass="relative overflow-hidden w-full z-[14]">
    <motion.div
      className="whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-custom-blue-1"
      animate={{ x: ["0%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      <span className="mr-10">{text}</span>
      <span className="mr-10">{text}</span>
    </motion.div>
  </RevealComponent>
);

// 🔹 Reusable Hero Section
interface HeroSectionProps {
  heroText?: string; // Main animated text
  tubeImage?: string; // Tube image
  glideText?: string; // Scrolling text
  title?: string;
  description?: string;
  mobileImage?: string;
  enableSteps?: boolean; // Animate in steps or show instantly
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroText,
  tubeImage,
  glideText,
  title,
  description,
  mobileImage,
  enableSteps = true,
}) => {
  const [milestone, setMilestone] = useState(0);
  const width = useWindowWidth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient || !enableSteps) return;

    const timings = [2.5, 1, 2.5, 1, 2.5];
    let index = 0;

    const advance = () => {
      if (index >= timings.length) return;
      setTimeout(() => {
        setMilestone((prev) => prev + 1);
        index++;
        advance();
      }, timings[index] * 1000);
    };

    advance();
  }, [isClient, enableSteps]);

  if (!isClient) return null;

  const renderContent = width < 768 || (!enableSteps || milestone >= 4);

  return (
    <header className="relative rounded-3xl lg:h-[750px] custom-linear-gradient-white transition-all duration-500 ease-linear px-4 sm:px-6 overflow-hidden md:px-10 pt-[20px] md:pt-11">
      {/* Step 0: HeroText */}
      {heroText && width > 768 && (milestone >= 0 || !enableSteps) && (
        <GastecText text={heroText} />
      )}

      {/* Step 2: Tube Image */}
      {tubeImage && width > 768 && (milestone >= 2 || !enableSteps) && (
        <TubeImageComponent src={tubeImage} />
      )}

      {/* Step 4: Main Content */}
      {renderContent && (
        <div
          className={`relative ${
            milestone >= 5 ? "z-[21]" : "z-[19]"
          } flex flex-col overflow-hidden gap-6 md:gap-8 mt-16`}
        >
          {title && (
            <RevealComponent direction="bottom" outerClass="w-full md:w-3/4 lg:w-1/2">
              <h1 className="text-4xl sm:text-6xl font-semibold leading-tight md:leading-[1.4] lg:leading-[1.5] w-full">
                {title}
              </h1>
            </RevealComponent>
          )}

          {glideText && <GlideText text={glideText} />}

          {description && (
            <RevealComponent outerClass="self-start md:self-end w-full md:w-[70%] lg:w-[40%] space-y-6">
              <p className="text-base md:text-lg font-normal">{description}</p>
            </RevealComponent>
          )}

          {mobileImage && (
            <RevealComponent>
              <Image
                src={mobileImage}
                alt="hero-mobile"
                width={1000}
                height={238}
                className="block lg:hidden z-[15] rotate-180 w-full object-contain object-center"
              />
            </RevealComponent>
          )}
        </div>
      )}
    </header>
  );
};

export default HeroSection;
