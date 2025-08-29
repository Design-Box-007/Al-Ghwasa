'use client'

import React from "react";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const BlogCardGrid: React.FC<{ blogs: Blog[] }> = ({ blogs }) => {
    return (
        <div className="px-4 space-y-5">
        <h4 className='text-[32px] lg:text-start leading-[48px] font-medium font-poppins'>Recent Blogs</h4>
        <motion.section
            className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] font-poppins"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {blogs.map((blog: Blog, index: number) => (
                <BlogCard blog={blog} key={index} />
            ))}
        </motion.section>
        </div>
    );
};

export default BlogCardGrid;
