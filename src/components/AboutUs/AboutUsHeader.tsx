import React from 'react'
import AboutSwiperComponent from './AboutSwiperComponent'

const AboutUsHeader = () => {
    return (
        <header className='overflow-auto space-y-9'>
            <h1 className="font-medium text-[100px] text-black text-center">
                Driven by Excellence <br />
                Since <span className='text-custom-blue-1'>1988</span>
            </h1>
            <AboutSwiperComponent />
            <p className='font-normal text-xl w-3/4 mx-auto text-center'>
                {"For over three decades, Al Ghwasa has been a leading force in industrial, marine, hospitality, hydration, and safety solutions. Our commitment to innovation, reliability, and client-focused services has made us a trusted partner across industries in the UAE and beyond."}
            </p>
        </header>
    )
}

export default AboutUsHeader