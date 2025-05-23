import Image from 'next/image'
import React from 'react'
// import TrustedPartners from './TrustedPartners'

const MapComponent = () => {
    return (
        <section className='space-y-20 custom-linear-gradient-gray rounded-2xl'>
            <div className='w-3/4 mx-auto space-y-10 text-center'>
                <h1 className='font-medium text-3xl lg:text-[54px]'>
                    Trusted by Industry Leaders <br /> Worldwide
                </h1>
                <p className='font-normal text-lg'>
                    {'We collaborate with renowned international brands, offering our clients access to global expertise and cutting-edge technology.'}
                </p>
            </div>
            <Image
                src={"/images/Map.png"}
                alt='map-image'
                width={1440}
                height={565}
            />
            {/* <TrustedPartners /> */}
        </section>
    )
}

export default MapComponent