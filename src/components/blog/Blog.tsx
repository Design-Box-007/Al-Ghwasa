'use client'

import { blogListData } from "@/data/blogs";
import { Blog as BlogType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import BlogHeader from "./BlogHeader";

const componentMap = {
    DummyBlog: dynamic(() => import("@/data/Blogs/DummyBlog")),
    Blog1: dynamic(() => import("@/data/Blogs/Blog1")),
    Blog2: dynamic(() => import("@/data/Blogs/Blog2")),
    Blog3: dynamic(() => import("@/data/Blogs/Blog3")),
    // Add other blog components here...
};

const Blog = () => {
    const params = useParams();
    const { blogName } = params;

    const blogData = blogListData.find((blog: BlogType) =>
        blogName === formatToHyphenated(blog.title)
    );

    if (!blogData) return <>BLOG NOT FOUND</>;

    const BlogComponent = componentMap[blogData.component as keyof typeof componentMap];

    if (!BlogComponent) return <>BLOG NOT FOUND</>;

    return (
        <main className='p-[10px] px-4 pt-[50px] md:p-3 lg:p-5 font-poppins space-y-10'>
            <BlogHeader blog={blogData} />
            <Suspense fallback={<p>Loading blog...</p>}>
                <BlogComponent />
            </Suspense>
        </main>
    );
}

export default Blog;
