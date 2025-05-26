import React from 'react'
import BlogCardGrid from './BlogCardGrid'
import { blogListData } from '@/data/blogs'
import BlogHero from './BlogHero'

const Blogs = () => {
    return (
        <main className="lg:p-0 space-y-10">
            <BlogHero />
            <h4 className='text-[32px] text-center lg:text-start leading-[48px] font-medium font-poppins'>Recent Blogs</h4>
            <BlogCardGrid blogs={blogListData} />
        </main>
    )
}

export default Blogs


//
