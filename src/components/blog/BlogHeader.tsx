import React from "react";
import { Blog } from '@/types'

type BlogHeaderProps = Pick<Blog, "imgSrc" | "title">; // Only includes imgSrc and title

const BlogHeader: React.FC<{ blog: BlogHeaderProps, imageClassName?: string }> = ({ blog, imageClassName }) => {
    return (
        <header className={`flex w-full flex-col gap-10 space-y-4 h-auto lg:h-[700px]`}>
            <h1 className="text-4xl font-medium">{blog.title}</h1>
            <div className="h-auto lg:h-[700px] overflow-hidden rounded-lg">
                <img src={blog.imgSrc} alt={blog.title} className={`rounded-lg object-cover h-full w-full ${imageClassName}`} />
            </div>
            <div className='bg-black h-[2px] w-full'></div>
        </header>
    );
};

export default BlogHeader;
