import React from 'react'
import BlogCardGrid from './BlogCardGrid'
import { blogListData } from '@/data/blogs'
import BlogHero from './BlogHero'

const Blogs = () => {
    return (
        <section className="p-[10px] md:p-3 lg:p-5 space-y-10">
            <BlogHero />
            <h4 className='text-[32px] leading-[48px] font-medium font-poppins'>Recent Blogs</h4>
            <BlogCardGrid blogs={blogListData} />
        </section>
    )
}

export default Blogs


//
