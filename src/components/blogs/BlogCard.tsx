"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Blog } from "@/types";
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setShowOverlay(!showOverlay);
    }
  };

  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200 cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick} // only triggers on mobile
    >
      {/* Image */}
      <div className="relative w-full h-100 overflow-hidden">
        <Image
          src={blog.imgSrc}
          alt={blog.title}
          fill
          className="object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-110 brightness-75"
        />
      </div>

      {/* Title always visible */}
      <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10">
        <h3 className="text-white font-semibold">{blog.title}</h3>
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-between backdrop-blur-md bg-black/50 p-6 transform transition-all duration-500 
        ${isMobile 
          ? showOverlay 
            ? "translate-x-0 opacity-100" 
            : "translate-x-full opacity-0"
          : "group-hover:translate-x-0 group-hover:opacity-100 translate-x-full opacity-0"
        }`}
      >
        {/* Centered description */}
        <div className="flex-grow flex items-center justify-center">
          <p className="text-sm text-gray-200 text-justify mt-20">
            {blog.description}
          </p>
        </div>

        {/* Button bottom-right */}
        <div className="flex justify-end">
          <Link href={`/blogs/${formatToHyphenated(blog.title)}`} className="inline-block">
            <button className="bg-custom-red-light text-white font-medium py-2 px-5 rounded-md cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
