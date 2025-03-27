import React from 'react'
import Hero from './Hero'
import Contact from '../Comman/Contact'
import FAQAccordion from '../Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'

const Home = () => {
  return (
    <section className='mt-[100px] lg:mt-0'>
      <Hero />
      <FAQAccordion faqs={homePagefaqs} />
      <Contact />
    </section>
  )
}

export default Home