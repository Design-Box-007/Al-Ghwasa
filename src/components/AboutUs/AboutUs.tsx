import React from 'react'
import AboutUsHeader from './AboutUsHeader'
import AboutUsSecond from './AboutUsSecond'
import AboutCTAButton from './AboutCTAButton'
import AboutMapComponent from './AboutMapComponent'

const AboutUs = () => {
    return (
        <section className='pt-[100px] space-y-20'>
            <AboutUsHeader />
            <AboutUsSecond />
            <AboutMapComponent />
            <AboutCTAButton />
        </section>
    )
}

export default AboutUs