import React from 'react'
import GalleryHero from './GalleryHero'
import BlogSection from '../Comman/BlogSection'
import GallerySection from './GallerySection'
import FAQAccordion from '../Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'

const Gallery = () => {
    return (
        <main className='mt-[100px] space-y-8'>
            <GalleryHero />
            <GallerySection />
            <BlogSection
                title='Featured Articles'
                ctaBtn='View All'
                ctaBtnClassName='py-c-10 px-6 bg-[#f3f3f3] text-black cursor-pointer font-medium text-xl flex justify-between items-center rounded-lg'
                titleClassName='text-[32px] font-medium font-poppins text-black'
            />
            <FAQAccordion faqs={homePagefaqs} />
        </main>
    )
}

export default Gallery