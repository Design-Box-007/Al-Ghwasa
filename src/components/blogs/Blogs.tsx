import React from 'react'
import BlogCardGrid from './BlogCardGrid'
import { blogListData } from '@/data/blogs'
import BlogHero from './BlogHero'

const Blogs = () => {
    return (
        <main className="lg:p-0 space-y-10">
            <BlogHero />
            
            <BlogCardGrid blogs={blogListData} />
        </main>
    )
}

export default Blogs


//
