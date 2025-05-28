import Feature from '@/components/Comman/Feature';
import RevealComponent from '@/components/Comman/RevealComponent';
import { gastecFeatures2 } from '@/data/features';
import { IFeature } from '@/types';
import React from 'react'

const WhyChooseGastec = () => {
  return (
    <section className='space-y-4'>
      <RevealComponent direction='bottom' backgroundClass='bg-white' outerClass='space-y-4'>
        <p className="font-medium  text-3xl sm:text-5xl md:text-6xl lg:text-[34px]">
          Why choose gastec
        </p>
        <h2 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] text-custom-blue-1">
          Gastec Gas Detector Tubes
        </h2>
      </RevealComponent>

      <RevealComponent direction='bottom' outerClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          gastecFeatures2.map((feature: IFeature, index: number) => (
            <Feature feature={feature} key={index} />
          ))
        }
      </RevealComponent>
    </section>
  )
}

export default WhyChooseGastec;


