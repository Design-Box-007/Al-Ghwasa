import React from "react";
import { Blog } from '@/types'
import RevealComponent from "../Comman/RevealComponent";
import Image from "next/image";

type BlogHeaderProps = Pick<Blog, "imgSrc" | "title">; // Only includes imgSrc and title

const BlogHeader: React.FC<{ blog: BlogHeaderProps, imageClassName?: string }> = ({ blog, imageClassName }) => {
    return (
        <header className={`flex w-full flex-col gap-10 space-y-6 h-auto`}>
            <RevealComponent>
                <h1 className="text-4xl font-medium">{blog.title}</h1>
            </RevealComponent>
            <RevealComponent direction="bottom" outerClass="h-auto lg:h-[700px] overflow-hidden rounded-lg">
                <Image src={blog.imgSrc} alt={blog.title} width={1024} height={720} className={`rounded-lg object-cover h-full w-full ${imageClassName}`} />
            </RevealComponent>
            <RevealComponent>
                <div className='bg-black h-[2px] w-full'></div>
            </RevealComponent>
        </header>
    );
};

export default BlogHeader;
