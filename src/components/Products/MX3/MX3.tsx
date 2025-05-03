import React from 'react'
import MX3Hero from './MX3Hero'
import MX3About from './MX3About'
import MX3Features from './MX3Features'
import MX3TrackingSlider from './MX3TrackingSlider'
import MX3LeaderLines from './MX3LeaderLines'
import HowItWorksSlider from '@/components/Comman/HowItWorksSlider'
import { mx3SliderData } from '@/data/sliderData'
import CustomTable from '@/components/Comman/CustomTable'
import { genralPdf, mx3TableData } from '@/data/tableData'
import MX3Osha from './MX3Osha'
import MapComponent from '@/components/Comman/MapComponent'
import FAQAccordion from '@/components/Comman/FAQAccordion'
import { homePagefaqs } from '@/data/comman'
import TestimonialCard from '@/components/Comman/TestimonialCard'
import images from '@/data/assets'

const MX3 = () => {
    return (
        <main className='px-4 bg-white space-y-10'>
            <MX3Hero />
            <MX3About />
            <MX3Features />
            <MX3TrackingSlider />
            <MX3LeaderLines />
            <HowItWorksSlider data={mx3SliderData} />
            <CustomTable
                data={mx3TableData}
                headerBgColor='bg-[#EA721B]'
                title='Product Specifications'
                projectDocumentation={genralPdf}
            />
            <MX3Osha />
            <MapComponent />
            <FAQAccordion faqs={homePagefaqs} />
            <TestimonialCard
                testimonial={{
                    imageSrc: images.MX315,          // Full product image
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

export default MX3