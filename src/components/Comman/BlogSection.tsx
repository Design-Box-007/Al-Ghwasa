import { blogListData } from '@/data/blogs'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import BlogCardGrid from '../blogs/BlogCardGrid'

interface BlogSectionProps {
    title: string;
    titleClassName: string;
    ctaBtn: string;
    ctaBtnClassName: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ title, titleClassName, ctaBtn, ctaBtnClassName }) => {
    return (
        <section className='px-2 bg-white py-10 space-y-4'>
            <div className='flex w-full justify-between items-center px-4'>
                <h4 className={titleClassName}>{title}</h4>
                <Link href={'/blogs'}>
                    <button className={ctaBtnClassName}>
                        <span>{ctaBtn}</span>
                        <FaAngleRight />
                    </button>
                </Link>
            </div>
            <BlogCardGrid blogs={[...blogListData.slice(0, 3)]} />
        </section>
    )
}

export default BlogSection