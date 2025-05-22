import React from 'react'
import Hero from './Hero'
import Contact from '../Comman/Contact'
import FAQAccordion from '../Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'
import HomeOurProducts from './HomeOurProduct'
import HomeAbout from './HomeAbout'
import HomeProductApplication from './HomeProductApplications'
import BlogSection from '../Comman/BlogSection'

const Home = () => {
  return (
    <main className='mt-[120px] lg:mt-4'>
      <Hero />
      <HomeOurProducts />
      <HomeAbout />
      <HomeProductApplication />
      <BlogSection
        title='Featured Articles'
        ctaBtn='View All'
        ctaBtnClassName='px-4 py-2 sm:px-6 sm:py-c-10 bg-custom-green-1 text-white font-medium text-base sm:text-xl flex justify-between items-center rounded-lg'
        titleClassName='text-3xl lg:text-[56px] font-normal font-inter text-custom-red-light'
      />
      <FAQAccordion faqs={homePagefaqs} />
      <Contact />
    </main>
  )
}

export default Home