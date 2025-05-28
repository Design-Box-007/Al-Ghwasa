import React from 'react'
import AboutSwiperComponent from './AboutSwiperComponent'
import RevealComponent from '../Comman/RevealComponent'

const AboutUsHeader = () => {
    return (
        <header className="overflow-auto space-y-6 px-4 sm:px-6 lg:space-y-9">
            <RevealComponent
                outerClass="relative inline-block overflow-hidden flex items-center justify-center text-center w-full"
                direction='bottom'
            >
                <h1 className="font-medium text-4xl sm:text- md:text-[75px] text-black text-center leading-tight">
                    Driven by Excellence <br />
                    Since <span className="text-custom-blue-1">1988</span>
                </h1>
            </RevealComponent>
            <AboutSwiperComponent />
            <p className="font-normal text-base sm:text-lg md:text-xl w-full sm:w-4/5 lg:w-3/4 mx-auto text-center">
                For over three decades, Al Ghwasa has been a leading force in hospitality, hydration, and safety solutions. Our commitment to innovation, reliability, and client-focused services has made us a trusted partner across industries in the UAE and beyond.
            </p>
        </header>
    )
}

export default AboutUsHeader
