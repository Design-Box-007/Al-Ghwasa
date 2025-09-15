"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Blog } from "@/types";
import Link from "next/link";
import formatToHyphenated from "@/utils/formatPathName";

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-md bg-white border border-gray-200"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with hover zoom */}
      <div className="relative w-full md:h-100 h-70 overflow-hidden">
        <Image
          src={blog.imgSrc}
          alt={blog.title}
          fill
          className="object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <div className="transition-all duration-500">
          {/* Title always pinned at bottom */}
          <h3 className="text-lg text-white">{blog.title}</h3>

          {/* Description + Button (hidden until hover) */}
          <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
            <p className="text-sm text-gray-200 mt-2">{blog.description}</p>
            <Link
              href={`/blogs/${formatToHyphenated(blog.title)}`}
              className="inline-block mt-3"
            >
              <button className="bg-custom-red-light text-white font-medium py-2 px-4 rounded-md cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
