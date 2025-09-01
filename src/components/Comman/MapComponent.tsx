import Image from 'next/image'
import React from 'react'
import RevealComponent from './RevealComponent'
// import TrustedPartners from './TrustedPartners'

const MapComponent = () => {
    return (
        <section className='space-y-20 py-4 sm:py-6 md:py-8 lg:py-12 custom-linear-gradient-gray rounded-2xl'>
            <div className='w-3/4 mx-auto space-y-10 text-center'>
                    <RevealComponent backgroundClass='bg-background'>
                    <h1 className='font-medium text-4xl lg:text-[54px]'>
                        Trusted by Industry Leaders <br /> Worldwide
                    </h1>
                </RevealComponent>
                    <RevealComponent backgroundClass='bg-background'>
                    <p className='font-normal text-lg'>
                        {'We collaborate with renowned international brands, offering our clients access to global expertise and cutting-edge technology.'}
                    </p>
                </RevealComponent>
            </div>
            <RevealComponent direction='bottom' backgroundClass='bg-background'>
                <Image
                    src={"/images/Map.png"}
                    alt='map-image'
                    width={1440}
                    height={565}
                />
            </RevealComponent>
            {/* <TrustedPartners /> */}
        </section>
    )
}

export default MapComponent