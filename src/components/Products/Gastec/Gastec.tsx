import React from 'react'
import GastecHero from './GastecHero'
import GastecSecondSection from './GastecSecondSection'
import HowItWorksSlider from '@/components/Comman/HowItWorksSlider'
import { gastecSliderData } from '@/data/sliderData'
import WhyChooseGastec from './WhyChooseGastec'
import TestimonialCard from '@/components/Comman/TestimonialCard'
import images from '@/data/assets'
import FAQAccordion from '@/components/Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'
import CustomTable from '@/components/Comman/CustomTable'
import { gastecTableData, genralPdf } from '@/data/tableData'

const Gastec = () => {
    return (
        <main className='px-4 pt-[22px] bg-white space-y-10'>
            <GastecHero />
            <GastecSecondSection />
            <HowItWorksSlider data={gastecSliderData} autoPlayInterval={3000} />
            <WhyChooseGastec />
            <CustomTable
                data={gastecTableData}
                headerBgColor='bg-custom-blue-1'
                projectDocumentation={genralPdf}
                title='Find the Right Tube for Your Needs'
                description='Quickly identify the correct gas detection tube.'
            />
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
        </main>
    )
}

export default Gastec