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
    <section className='mt-[100px] lg:mt-0'>
      <Hero />
      <HomeOurProducts />
      <HomeAbout />
      <HomeProductApplication />
      <BlogSection
        title='Featured Articles'
        ctaBtn='View All'
        ctaBtnClassName='py-c-10 px-6 bg-custom-green-1 text-white font-medium text-xl flex justify-between items-center rounded-lg'
        titleClassName='text-[56px] font-normal font-inter text-custom-red-light'
      />
      <FAQAccordion faqs={homePagefaqs} />
      <Contact />
    </section>
  )
}

export default Home