import React from 'react'
import OurProductCarousel from './OurProductCarousel'
import OurProductVennDiagram from './OurProductVennDiagram'
import OurCollection from './OurCollection'
import OurProductHero from './OurProductHero'
import FAQAccordion from '../Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'
import SectionCTABtn from '../Comman/SectionCTABtn'

const OurProduct = () => {
    return (
        <section className='px-4 mt-[124px] space-y-8'>
            <OurProductHero />
            <OurProductCarousel />
            <OurProductVennDiagram />
            <OurCollection />
            <FAQAccordion faqs={homePagefaqs} />
            <SectionCTABtn className='bg-custom-green-1 rounded-[12.89px]' />
        </section>
    )
}

export default OurProduct