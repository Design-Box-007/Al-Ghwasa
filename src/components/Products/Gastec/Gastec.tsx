import React from 'react'
import GastecHero from './GastecHero'
import GastecSecondSection from './GastecSecondSection'
import HowItWorksSlider from '@/components/Comman/HowItWorksSlider'
import { gastecSliderData } from '@/data/sliderData'
import WhyChooseGastec from './WhyChooseGastec'
import GastecTableSection from './GastecTableSection'
import TestimonialCard from '@/components/Comman/TestimonialCard'
import images from '@/data/assets'
import FAQAccordion from '@/components/Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'

const Gastec = () => {
    return (
        <section className='px-4 pt-[22px] bg-white space-y-10'>
            <GastecHero />
            <GastecSecondSection />
            <HowItWorksSlider data={gastecSliderData} autoPlayInterval={3000} />
            <WhyChooseGastec />
            <GastecTableSection />
            <FAQAccordion faqs={homePagefaqs} />
            <TestimonialCard
                testimonial={{
                    imageSrc: images.Gastec4,          // Full product image
                    userImageSrc: images.Gastec5,        // Dr. Ahmed Al Mansoori image
                    userName: "Dr. Ahmed Al Mansoori",
                    userRole: "Safety Engineer",
                    testimonial:
                        "The easiest and most reliable gas detection tool we’ve used in our refinery. No power source needed, no calibration—just quick and accurate results every time!",
                }}
            />
        </section>
    )
}

export default Gastec