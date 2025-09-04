"use client"; // important for framer-motion in Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  backgroundImage: string;
  title: string;
  description?: string;
  ctaText?: string;
  link: string
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  description,
  ctaText,
  link,
 
}) => {
  return (
    <header className="w-full bg-white pt-[150px] px-c-20 lg:p-c-20 relative">
      <div className="relative overflow-hidden rounded-[20px] lg:h-[700px] px-4 md:px-[5%] py-6 md:py-10 flex flex-col lg:flex-row items-center gap-8">
        {/* Background Image */}
        {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Hero Background"
          className="absolute inset-0 brightness-[.6] z-10 object-cover object-center w-full h-full rounded-[20px]"
          fill
        />)}

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-5">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-white font-dm-sans font-semibold text-5xl md:text-7xl leading-tight mb-6">
              {title}
            </h1>
          </motion.div>

          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-white font-poppins font-medium text-base leading-relaxed mb-6 max-w-3xl mx-auto">
                {description}
              </p>
            </motion.div>
          )}

          {/* CTA Button */}
          {ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link}
                className="inline-flex items-center space-x-2 bg-white text-secondary px-5 py-2 rounded-3xl border border-gray-300 cursor-pointer hover:bg-gray-100 hover:border-gray-700 hover:scale-[1.03] hover:gap-2 transition-all duration-300"
              >
                <span className="font-poppins font-medium text-base">
                  {ctaText}
                </span>
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
