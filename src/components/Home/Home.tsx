import React from 'react'
import Hero from './Hero'
import Contact from '../Comman/Contact'
import FAQAccordion from '../Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'
import HomeOurProducts from './HomeOurProduct'
import HomeAbout from './HomeAbout'
import HomeProductApplication from './HomeProductApplications'
import Blogs from '../blogs/Blogs'
import { blogListData } from '@/data/blogs'
import BlogCardGrid from '../blogs/BlogCardGrid'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'

const Home = () => {
  return (
    <section className='mt-[100px] lg:mt-0'>
      <Hero />
      <HomeOurProducts />
      <HomeAbout />
      <HomeProductApplication />
      <section className='px-2 bg-white py-10 space-y-4'>
        <div className='flex w-full justify-between items-center px-4'>
          <h4 className='text-[56px] font-normal font-inter text-custom-red-light'>Our Articles</h4>
          <Link href={'/blogs'}>
            <button className='py-c-10 px-6 bg-custom-green-1 text-white font-medium text-xl flex justify-between items-center rounded-lg'>
              <span>View All</span>
              <FaAngleRight />
            </button>
          </Link>
        </div>
        <BlogCardGrid blogs={[...blogListData.slice(0, 3)]} />
      </section>
      <FAQAccordion faqs={homePagefaqs} />
      <Contact />
    </section>
  )
}

export default Home