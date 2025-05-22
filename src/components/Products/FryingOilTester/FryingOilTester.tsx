import React from 'react'
import FOTHero from './FOTHero'
import FOTAbout from './FOTAbout'
import FOTProduct from './FOTProduct'
import HowItWorksSlider from '@/components/Comman/HowItWorksSlider'
import { fryingOilTesterSliderData } from '@/data/sliderData'
import CustomTable from '@/components/Comman/CustomTable'
import { fryingOilTesterTableData, genralColumns } from '@/data/tableData'
import TestimonialCard from '@/components/Comman/TestimonialCard'
import images from '@/data/assets'
import { homePagefaqs } from '@/data/comman'
import FAQAccordion from '@/components/Comman/FAQAccordion'

const FryingOilTester = () => {
  return (
    <main className='px-4 pt-[140px] lg:pt-[22px] bg-white space-y-10'>
      <FOTHero />
      <FOTAbout />
      <FOTProduct />
      <HowItWorksSlider data={fryingOilTesterSliderData} />
      <CustomTable
        data={fryingOilTesterTableData}
        columns={genralColumns}
        title='Engineered for Accuracy, Built for Durability'
        headerBgColor='bg-[#EC3D3D]'
      />
      <FAQAccordion faqs={homePagefaqs} />
      <TestimonialCard
        testimonial={{
          imageSrc: images.OilTester06,          // Full product image
          userImageSrc: images.OilTester07,        // Dr. Ahmed Al Mansoori image
          userName: "Chef Daniel R",
          userRole: "Restaurant Owner",
          testimonial:
            "The Alla Oil Quality Tester has been an essential tool in ensuring food consistency and safety while saving costs.",
        }}
      />
    </main>
  )
}

export default FryingOilTester


