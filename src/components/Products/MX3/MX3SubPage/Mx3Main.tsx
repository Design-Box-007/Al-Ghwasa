'use client'

import { mx3DataType } from "@/types";
import formatToHyphenated from "@/utils/formatPathName";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import { mx3subData } from "@/data/products/mx3Data";


const componentMap = {
    DummyBlog: dynamic(() => import("@/data/Blogs/DummyBlog")),
    Mx31: dynamic(() => import("@/components/Products/MX3/MX3SubPage/Mx31")),
    Mx32: dynamic(() => import("@/components/Products/MX3/MX3SubPage/Mx32")),
    Mx33: dynamic(() => import("@/components/Products/MX3/MX3SubPage/Mx33")),
    // Add other blog components here...
};



const Mx3Main = () => {
    const params = useParams();
    const { featureName } = params;

    console.log(formatToHyphenated(mx3subData[2].linkName))

    const mx3Data = mx3subData.find((data: mx3DataType) =>
        featureName === data.linkName
    );


    if (!mx3Data) return <>BLOG NOT FOUND</>;

    const Mx3Component = componentMap[mx3Data.component as keyof typeof componentMap];

    if (!Mx3Component) return <>BLOG NOT FOUND</>;


    return (
        <main className='p-[10px] pt-[100px] md:p-3 lg:pb-5 lg:px-[30px] lg:pt-10 font-poppins space-y-10'>
            <BlogHeader blog={mx3Data} imageClassName="object-top"/>
            <Suspense fallback={<p>Loading blog...</p>}>
                <Mx3Component />
            </Suspense>
        </main>
    );
}

export default Mx3Main

