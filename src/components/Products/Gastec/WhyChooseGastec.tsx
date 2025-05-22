import Feature from '@/components/Comman/Feature';
import { gastecFeatures2 } from '@/data/features';
import { IFeature } from '@/types';
import React from 'react'

const WhyChooseGastec = () => {
  return (
    <section className='space-y-4'>
      <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-[34px]">
        why choose gastec
      </p>
      <h2 className="font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[100px] text-custom-blue-1">
        Gastec Gas Detector Tubes
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          gastecFeatures2.map((feature: IFeature, index: number) => (
            <Feature feature={feature} key={index} />
          ))
        }
      </div>
    </section>
  )
}

export default WhyChooseGastec;


