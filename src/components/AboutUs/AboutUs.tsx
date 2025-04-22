import React from 'react'
import AboutUsHeader from './AboutUsHeader'
import AboutUsSecond from './AboutUsSecond'
import AboutMapComponent from './AboutMapComponent'
import SectionCTABtn from '../Comman/SectionCTABtn'

const AboutUs = () => {
    return (
        <section className='pt-[100px] space-y-20'>
            <AboutUsHeader />
            <AboutUsSecond />
            <AboutMapComponent />
            <SectionCTABtn className='bg-custom-blue-1 rounded-[120px]'/>
        </section>
    )
}

export default AboutUs